import assert from 'node:assert/strict'
import test from 'node:test'
import { document } from './translation-utils.mjs'
import { checkTranslationContent, loadBaseline, selectReference, snapshotDocument, validateBaseline } from './translation-baselines.mjs'

function guide(release, title, description, body) {
  return document(`---\ndoc_id: "payments.receive"\nverified_release: "${release}"\nreader_level: "beginner"\nlang: "${title === 'Receive' ? 'en-US' : 'de-DE'}"\ntitle: "${title}"\ndescription: "${description}"\n---\n\n${body}\n`)
}

const oldSource = guide('v2.0.26', 'Receive', 'Old English guide', '## Request a payment\n\nAmount: 0.03 BTC. [Help](/help/)\n\n```sh\ngpg --verify Ginger-2.0.26.msi.asc\n```')
const current = guide('v2.0.27', 'Receive', 'Updated English guide', '## Request a payment\n\nAmount: 0.1 BTC. [Send](/payments/send/)\n\n```sh\ngpg --verify Ginger-2.0.27.msi.asc\n```\n\n## Saved address type\n\nNew controls.')
const translatedBody = '<span id="request-a-payment"></span>\n\n## Zahlung anfordern\n\nBetrag: 0.03 BTC. [Hilfe](/de/help/)\n\n```sh\ngpg --verify Ginger-2.0.26.msi.asc\n```'
const oldTranslation = guide('v2.0.26', 'Empfangen', 'Deutscher Leitfaden', translatedBody)
const baseline = {
  schemaVersion: 1,
  release: 'v2.0.26',
  sourceCommit: 'c67b3bc67b09ce231b179f804c74fb410a92cbe9',
  pages: { 'payments/receive.md': snapshotDocument(oldSource) },
}
const options = { file: 'payments/receive.md', locale: 'de', originals: ['payments/receive.md', 'payments/send.md', 'help/index.md'], readBaseline: () => baseline }

test('older translations retain their historical code, amounts, links and heading structure', () => {
  const result = checkTranslationContent(current, oldTranslation, options)
  assert.deepEqual(result, { errors: [], stale: true })
  const reference = selectReference(current, oldTranslation, options.file, (release) => {
    assert.equal(release, 'v2.0.26')
    return baseline
  })
  assert.equal(reference.reference.bodyHash, snapshotDocument(oldSource).bodyHash)
  assert.notEqual(reference.reference.bodyHash, snapshotDocument(current).bodyHash)
})

test('historical references still reject changed examples, amounts, links and missing anchors', () => {
  const broken = guide('v2.0.26', 'Empfangen', 'Deutscher Leitfaden', translatedBody
    .replace('<span id="request-a-payment"></span>', '')
    .replace('0.03 BTC', '0.04 BTC')
    .replace('/de/help/', '/de/payments/send/')
    .replace('2.0.26.msi.asc', '2.0.25.msi.asc'))
  assert.deepEqual(checkTranslationContent(current, broken, options).errors, [
    'code examples changed',
    'missing original numeric value 0.03',
    'missing original numeric value 2.0.26',
    'missing source anchor request-a-payment',
    'source link targets changed',
  ])
})

test('a current-release translation must satisfy current English without loading a baseline', () => {
  const claimsCurrent = guide('v2.0.27', 'Empfangen', 'Deutscher Leitfaden', translatedBody)
  const result = checkTranslationContent(current, claimsCurrent, { ...options, readBaseline: () => assert.fail('Current release must not use a baseline') })
  assert.equal(result.stale, false)
  assert.deepEqual(result.errors, ['code examples changed', 'missing original numeric value 0.1', 'missing original numeric value 2.0.27', 'heading structure differs', 'missing source anchor saved-address-type', 'source link targets changed'])
})

test('missing, unknown, future and malformed historical baselines fail closed', () => {
  assert.match(checkTranslationContent(current, oldTranslation, { ...options, readBaseline: () => { throw new Error('Missing historical baseline') } }).errors[0], /Missing historical baseline/)
  assert.throws(() => loadBaseline('v0.0.0'), /Cannot load translation baseline/)
  assert.throws(() => loadBaseline('../../Config'), /Invalid translation release/)
  for (const release of ['v2.0.28', 'not-a-release']) {
    const target = guide(release, 'Empfangen', 'Deutscher Leitfaden', translatedBody)
    assert.match(checkTranslationContent(current, target, options).errors[0], /verified_release must match English or a supported older release/)
  }
  const noPage = { ...options, file: 'payments/missing.md' }
  assert.match(checkTranslationContent(current, oldTranslation, noPage).errors[0], /has no page payments\/missing.md/)
  for (const altered of [
    { ...baseline, release: 'v2.0.25' },
    { ...baseline, sourceCommit: 'unknown' },
    { ...baseline, pages: { 'payments/receive.md': { ...baseline.pages['payments/receive.md'], numbers: null } } },
    { ...baseline, pages: { 'payments/receive.md': { ...baseline.pages['payments/receive.md'], bodyHash: 'unknown' } } },
  ]) {
    assert.throws(() => validateBaseline(altered, 'v2.0.26'), /Invalid translation baseline/)
    assert.match(checkTranslationContent(current, oldTranslation, { ...options, readBaseline: () => altered }).errors[0], /Invalid translation baseline/)
  }
})

test('historical selection retains current stable ID and reading-level requirements', () => {
  for (const [key, value] of [['doc_id', 'other.id'], ['reader_level', 'advanced']]) {
    const changedTarget = { ...oldTranslation, metadata: (name) => name === key ? value : oldTranslation.metadata(name) }
    assert.ok(checkTranslationContent(current, changedTarget, options).errors.includes(`${key} changed`))
    const changedCurrent = { ...current, metadata: (name) => name === key ? value : current.metadata(name) }
    assert.match(checkTranslationContent(changedCurrent, oldTranslation, options).errors.join('\n'), new RegExp(`baseline v2.0.26 has a different ${key}`))
  }
})

test('the historical source still detects untranslated body or metadata', () => {
  const untranslated = { ...oldSource, metadata: (key) => key === 'lang' ? 'de-DE' : oldSource.metadata(key) }
  assert.ok(checkTranslationContent(current, untranslated, options).errors.includes('untranslated page or metadata'))
})

test('staging translations use historical English links before import', () => {
  const staging = guide('v2.0.26', 'Empfangen', 'Deutscher Leitfaden', translatedBody.replace('/de/help/', '/help/').replace('<span id="request-a-payment"></span>', ''))
  assert.deepEqual(checkTranslationContent(current, staging, { ...options, staging: true }), { errors: [], stale: true })
})
