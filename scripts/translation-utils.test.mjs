import assert from 'node:assert/strict'
import test from 'node:test'
import { document, localizeLinks, formatTranslatedAmounts } from './translation-utils.mjs'

const pages = ['index.mdx', 'help/index.md', 'payments/send.md', 'why-ginger/index.md']

test('localizes link destinations without changing glossary separators or code', () => {
  const source = [
    '| Bitcoin / BTC | Recovery words / mnemonic / seed phrase |',
    '[home](/) [send](/payments/send/#prepare-a-payment) [legacy](/why-ginger/difference/)',
    '[help][support]\n\n[support]: </help/>',
    '`[example](/help/)`',
    'A prose example says href: "/help/" and quotes "/".',
    '```md\n[example](/help/)\nhref: "/help/"\n```',
    '<a href="/help/">Help</a>',
    '<ManualHome start={{ label: "Start", href: "/help/" }} />',
    '<ManualHome\nstart={{ label: "Start", href: "/help/" }}\n/>',
    '[asset](/image.png) [external](https://example.com/help/)',
  ].join('\n\n')
  const localized = localizeLinks(source, 'de', pages)
  assert.equal(localized, source
    .replace('[home](/) [send](/payments/send/#prepare-a-payment) [legacy](/why-ginger/difference/)', '[home](/de/) [send](/de/payments/send/#prepare-a-payment) [legacy](/de/why-ginger/)')
    .replace('[support]: </help/>', '[support]: </de/help/>')
    .replace('<a href="/help/">', '<a href="/de/help/">')
    .replace('<ManualHome start={{ label: "Start", href: "/help/" }} />', '<ManualHome start={{ label: "Start", href: "/de/help/" }} />')
    .replace('<ManualHome\nstart={{ label: "Start", href: "/help/" }}\n/>', '<ManualHome\nstart={{ label: "Start", href: "/de/help/" }}\n/>'))
  assert.equal(localizeLinks(localized, 'de', pages), localized)
})

test('groups translated amounts without changing their values or executable examples', () => {
  const source = '---\nlang: "en-US"\n---\n\n3,000,000 satoshis, 0.03 BTC, **30,000** sats.\n\n`30,000`\n\n```text\n30,000\n```\n'
  const original = document(source)
  const formatted = formatTranslatedAmounts(source, original.numbers)
  assert.match(formatted, /3\u202f000\u202f000 satoshis, 0\.03 BTC, \*\*30\u202f000\*\*/)
  assert.match(formatted, /`30,000`/)
  assert.deepEqual(document(formatted).code, original.code)
  assert.deepEqual(document(formatted).numbers, original.numbers)
  assert.notDeepEqual(document(formatted.replace('3\u202f000\u202f000', '3\u202f000\u202f001')).numbers, original.numbers)
})
