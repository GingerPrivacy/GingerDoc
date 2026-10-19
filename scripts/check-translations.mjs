import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { manualSidebar } from '../src/manual-sidebar.mjs'
import { docsRoot, document, localeCodes, pages, readCopy, localizeLinks } from './translation-utils.mjs'
import { checkTranslationContent, loadBaseline } from './translation-baselines.mjs'

const root = fileURLToPath(docsRoot)
const originals = pages(root, localeCodes)
const errors = []
const stale = new Map()
let staleCount = 0
const baselines = new Map()
function readBaseline(release) {
  if (!baselines.has(release)) baselines.set(release, loadBaseline(release))
  return baselines.get(release)
}
const sidebarLabels = new Set()
function collectLabels(items) {
  for (const item of items) {
    if (item.label) sidebarLabels.add(item.label)
    if (item.items) collectLabels(item.items)
  }
}
collectLabels(manualSidebar())
const [stagingLocale, stagingDirectory] = process.argv.slice(2)
if (stagingLocale && !stagingDirectory) throw new Error('Provide both a locale and staging directory, or neither')
const checkedLocales = stagingLocale ? [stagingLocale] : localeCodes
for (const locale of checkedLocales) {
  const directory = stagingDirectory ?? join(root, locale)
  const copy = stagingDirectory ? JSON.parse(readFileSync(join(directory, 'locale.json'), 'utf8')) : readCopy(locale)
  for (const label of sidebarLabels) {
    if (typeof copy.sidebar?.[label] !== 'string' || !copy.sidebar[label].trim()) errors.push(`${locale}: missing sidebar translation for ${label}`)
  }
  const translated = pages(directory)
  if (JSON.stringify(originals) !== JSON.stringify(translated)) errors.push(`${locale}: page coverage differs from English`)
  for (const file of translated.filter((file) => originals.includes(file))) {
    const source = document(readFileSync(join(root, file), 'utf8'))
    const text = readFileSync(join(directory, file), 'utf8')
    const target = document(text)
    if (!stagingDirectory && file === 'index.mdx') {
      const homeImport = target.body.match(/^\s*import ManualHome from ['"]([^'"]+)['"]/)?.[1]
      if (!homeImport || !existsSync(resolve(dirname(join(directory, file)), homeImport))) errors.push(`${locale}/${file}: homepage component import does not resolve`)
    }
    const result = checkTranslationContent(source, target, { file, locale, originals, staging: Boolean(stagingDirectory), readBaseline })
    for (const error of result.errors) errors.push(`${locale}/${file}: ${error}`)
    if (result.stale) {
      const key = `${locale}: ${target.metadata('verified_release')} (English ${source.metadata('verified_release')})`
      stale.set(key, (stale.get(key) ?? 0) + 1)
      staleCount++
    }
    if (target.metadata('lang') !== copy.lang) errors.push(`${locale}/${file}: wrong language metadata`)
    if (!stagingDirectory && localizeLinks(text, locale, originals) !== text) errors.push(`${locale}/${file}: documentation link leaves the selected language`)
  }
}
for (const error of errors) console.error(error)
if (staleCount) console.warn(`Warning: ${staleCount} translated pages still use an older verified release:\n${[...stale].map(([release, count]) => `  ${release}: ${count} pages`).join('\n')}`)
console.log(`Checked ${checkedLocales.length} translations against ${originals.length} English pages; ${staleCount} older-release pages; ${errors.length} errors.`)
process.exitCode = errors.length ? 1 : 0
