import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { docsRoot, document, localeCodes, pages, readCopy, localizeLinks, localizeHref } from './translation-utils.mjs'

const root = fileURLToPath(docsRoot)
const originals = pages(root, localeCodes)
const errors = []
const [stagingLocale, stagingDirectory] = process.argv.slice(2)
if (stagingLocale && !stagingDirectory) throw new Error('Provide both a locale and staging directory, or neither')
const checkedLocales = stagingLocale ? [stagingLocale] : localeCodes
for (const locale of checkedLocales) {
  const directory = stagingDirectory ?? join(root, locale)
  const copy = stagingDirectory ? JSON.parse(readFileSync(join(directory, 'locale.json'), 'utf8')) : readCopy(locale)
  const translated = pages(directory)
  if (JSON.stringify(originals) !== JSON.stringify(translated)) errors.push(`${locale}: page coverage differs from English`)
  for (const file of translated.filter((file) => originals.includes(file))) {
    const source = document(readFileSync(join(root, file), 'utf8'))
    const text = readFileSync(join(directory, file), 'utf8')
    const target = document(text)
    for (const key of ['doc_id', 'verified_release', 'reader_level']) {
      if (source.metadata(key) !== target.metadata(key)) errors.push(`${locale}/${file}: ${key} changed`)
    }
    if (target.metadata('lang') !== copy.lang) errors.push(`${locale}/${file}: wrong language metadata`)
    if (source.body === target.body || (source.metadata('title') === target.metadata('title') && source.metadata('description') === target.metadata('description'))) errors.push(`${locale}/${file}: untranslated page or metadata`)
    if (JSON.stringify(source.code) !== JSON.stringify(target.code)) errors.push(`${locale}/${file}: code examples changed`)
    for (const number of source.numbers) if (!target.numbers.has(number)) errors.push(`${locale}/${file}: missing original numeric value ${number}`)
    if (source.headings.length !== target.headings.length || source.headings.some((heading, i) => heading.depth !== target.headings[i]?.depth)) errors.push(`${locale}/${file}: heading structure differs`)
    const ids = new Set([...target.headings.map((heading) => heading.id), ...[...target.body.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])])
    if (!stagingDirectory) for (const heading of source.headings) if (!ids.has(heading.id)) errors.push(`${locale}/${file}: missing source anchor ${heading.id}`)
    for (const [, id] of source.body.matchAll(/\bid="([^"]+)"/g)) if (!ids.has(id)) errors.push(`${locale}/${file}: missing explicit anchor ${id}`)
    if (!stagingDirectory && localizeLinks(text, locale, originals) !== text) errors.push(`${locale}/${file}: documentation link leaves the selected language`)
    const expectedLinks = source.links.map((href) => stagingDirectory ? href : localizeHref(href, locale, originals)).sort()
    if (JSON.stringify(expectedLinks) !== JSON.stringify(target.links.slice().sort())) errors.push(`${locale}/${file}: source link targets changed`)
  }
}
for (const error of errors) console.error(error)
console.log(`Checked ${checkedLocales.length} translations against ${originals.length} English pages; ${errors.length} errors.`)
process.exitCode = errors.length ? 1 : 0
