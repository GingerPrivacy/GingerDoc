import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { localizeHref } from './translation-utils.mjs'

export const baselineDirectory = new URL('./translation-baselines/', import.meta.url)
const releasePattern = /^v\d+\.\d+\.\d+$/
const metadataKeys = ['doc_id', 'verified_release', 'reader_level', 'lang', 'title', 'description']

export function snapshotDocument(source) {
  return {
    metadata: Object.fromEntries(metadataKeys.map((key) => [key, source.metadata(key) ?? null])),
    bodyHash: createHash('sha256').update(source.body).digest('hex'),
    headings: source.headings.map(({ depth, id }) => ({ depth, id })),
    explicitIds: [...source.body.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
    code: source.code.map(({ lang, value }) => ({ lang: lang ?? null, value })),
    links: source.links,
    numbers: [...source.numbers],
  }
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

export function validateBaseline(baseline, release) {
  const invalid = () => { throw new Error(`Invalid translation baseline for ${release}`) }
  if (!releasePattern.test(release) || baseline?.schemaVersion !== 1 || baseline.release !== release ||
      !/^[a-f0-9]{40}$/.test(baseline.sourceCommit ?? '') || !baseline.pages ||
      Array.isArray(baseline.pages) || typeof baseline.pages !== 'object' || !Object.keys(baseline.pages).length) invalid()
  for (const [file, reference] of Object.entries(baseline.pages)) {
    if (!/^(?!\/)(?!.*(?:^|\/)\.\.(?:\/|$))[^\\]+\.mdx?$/.test(file) ||
        !reference || !metadataKeys.every((key) => typeof reference.metadata?.[key] === 'string') ||
        reference.metadata.verified_release !== release || reference.metadata.lang !== 'en-US' ||
        !['beginner', 'everyday', 'advanced'].includes(reference.metadata.reader_level) ||
        !/^[a-f0-9]{64}$/.test(reference.bodyHash ?? '') ||
        !Array.isArray(reference.headings) || !reference.headings.every((heading) =>
          Number.isInteger(heading?.depth) && heading.depth >= 1 && heading.depth <= 6 && typeof heading.id === 'string') ||
        !isStringArray(reference.explicitIds) || !isStringArray(reference.links) || !isStringArray(reference.numbers) ||
        !Array.isArray(reference.code) || !reference.code.every((code) =>
          code && (code.lang === null || typeof code.lang === 'string') && typeof code.value === 'string')) invalid()
  }
  return baseline
}

export function loadBaseline(release) {
  if (!releasePattern.test(release ?? '')) throw new Error(`Invalid translation release: ${release ?? '(missing)'}`)
  let baseline
  try {
    baseline = JSON.parse(readFileSync(new URL(`${release}.json`, baselineDirectory), 'utf8'))
  } catch (error) {
    throw new Error(`Cannot load translation baseline for ${release}: ${error.message}`)
  }
  return validateBaseline(baseline, release)
}

function isOlderRelease(release, current) {
  if (!releasePattern.test(release ?? '') || !releasePattern.test(current ?? '')) return false
  const older = release.slice(1).split('.').map(Number)
  const newer = current.slice(1).split('.').map(Number)
  for (let i = 0; i < older.length; i++) {
    if (older[i] !== newer[i]) return older[i] < newer[i]
  }
  return false
}

export function selectReference(current, target, file, readBaseline = loadBaseline) {
  const release = target.metadata('verified_release')
  const currentRelease = current.metadata('verified_release')
  if (release === currentRelease) return { reference: snapshotDocument(current), stale: false }
  if (!isOlderRelease(release, currentRelease)) throw new Error(`verified_release must match English or a supported older release (${release ?? 'missing'})`)
  const baseline = validateBaseline(readBaseline(release), release)
  const reference = Object.hasOwn(baseline.pages, file) ? baseline.pages[file] : null
  if (!reference) throw new Error(`Translation baseline ${release} has no page ${file}`)
  for (const key of ['doc_id', 'reader_level']) {
    if (reference.metadata[key] !== current.metadata(key)) throw new Error(`Translation baseline ${release} has a different ${key} for ${file}`)
  }
  return { reference, stale: true }
}

export function checkTranslationContent(current, target, { file, locale, originals, staging = false, readBaseline = loadBaseline }) {
  const errors = []
  for (const key of ['doc_id', 'reader_level']) {
    if (current.metadata(key) !== target.metadata(key)) errors.push(`${key} changed`)
  }
  let selection
  try {
    selection = selectReference(current, target, file, readBaseline)
  } catch (error) {
    errors.push(error.message)
    return { errors, stale: false }
  }
  const { reference, stale } = selection
  const translated = snapshotDocument(target)
  if (reference.bodyHash === translated.bodyHash ||
      (reference.metadata.title === translated.metadata.title && reference.metadata.description === translated.metadata.description)) errors.push('untranslated page or metadata')
  if (JSON.stringify(reference.code) !== JSON.stringify(translated.code)) errors.push('code examples changed')
  for (const number of reference.numbers) if (!target.numbers.has(number)) errors.push(`missing original numeric value ${number}`)
  if (reference.headings.length !== target.headings.length || reference.headings.some((heading, i) => heading.depth !== target.headings[i]?.depth)) errors.push('heading structure differs')
  const ids = new Set([...target.headings.map((heading) => heading.id), ...translated.explicitIds])
  if (!staging) for (const heading of reference.headings) if (!ids.has(heading.id)) errors.push(`missing source anchor ${heading.id}`)
  for (const id of reference.explicitIds) if (!ids.has(id)) errors.push(`missing explicit anchor ${id}`)
  const expectedLinks = reference.links.map((href) => staging ? href : localizeHref(href, locale, originals)).sort()
  if (JSON.stringify(expectedLinks) !== JSON.stringify(target.links.slice().sort())) errors.push('source link targets changed')
  return { errors, stale }
}
