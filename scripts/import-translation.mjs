// Import a completed translation while retaining English fragment links.
// Usage: node scripts/import-translation.mjs de /path/to/staging/de
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { copiesRoot, docsRoot, document, localeCodes, localizeLinks, pages, formatTranslatedAmounts } from './translation-utils.mjs'

const [locale, staging] = process.argv.slice(2)
if (!/^[a-z]{2}(?:-[a-z]{2})?$/.test(locale ?? '') || !staging) throw new Error('Provide a locale directory name and staging directory')
const root = fileURLToPath(docsRoot)
const originals = pages(root, [...localeCodes, locale])
const translated = pages(staging)
if (JSON.stringify(originals) !== JSON.stringify(translated)) throw new Error('Translation must contain exactly the English page set')
for (const file of originals) {
  const source = document(readFileSync(join(root, file), 'utf8'))
  const text = formatTranslatedAmounts(readFileSync(join(staging, file), 'utf8'), source.numbers)
  const target = document(text)
  if (source.headings.length !== target.headings.length || source.headings.some((heading, i) => heading.depth !== target.headings[i].depth)) throw new Error(`Heading structure differs: ${file}`)
  let body = target.body
  // Work backwards so earlier offsets stay valid. Translated headings retain
  // their own native anchor; these aliases preserve existing cross-page links.
  for (let i = target.headings.length - 1; i >= 0; i--) {
    const heading = target.headings[i]
    const id = source.headings[i].id
    if (heading.id !== id && !body.includes(`id="${id}"`)) body = body.slice(0, heading.offset) + `<span id="${id}" data-ginger-heading="${heading.id}" aria-hidden="true"></span>\n\n` + body.slice(heading.offset)
  }
  const destination = join(root, locale, file)
  mkdirSync(dirname(destination), { recursive: true })
  writeFileSync(destination, localizeLinks(target.frontmatter + body, locale, originals))
}
writeFileSync(new URL(`${locale}.json`, copiesRoot), readFileSync(join(staging, 'locale.json')))
console.log(`Imported ${originals.length} ${locale} pages and interface copy.`)
