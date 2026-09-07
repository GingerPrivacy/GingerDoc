import { existsSync, readdirSync, readFileSync } from 'node:fs'

// Each topic owns one manifest. A topic can be reviewed and merged independently.
export function manualSidebar(root = new URL('./navigation/', import.meta.url)) {
  const sections = ['start', 'use', 'learn', 'help', 'advanced']
  const labels = ['Getting Started', 'Using Ginger', 'Bitcoin basics', 'Help', 'Advanced use']
  const topics = existsSync(root)
    ? readdirSync(root).filter((file) => file.endsWith('.json')).sort()
      .map((file) => JSON.parse(readFileSync(new URL(file, root), 'utf8')))
    : []
  const replaced = new Set(topics.flatMap((topic) => topic.replaces ?? []))
  const legacy = {
    start: ['getting-started', 'using-ginger/passphrase'],
    use: ['using-ginger', 'using-ginger/coinjoin', 'using-ginger/hardware-wallet',
      'using-ginger/tor', 'using-ginger/buy', 'using-ginger/sell'],
    learn: ['why-ginger', 'why-ginger/difference', 'using-ginger/privacy',
      'using-ginger/address-reuse', 'using-ginger/fee'],
    help: [],
    advanced: ['using-ginger/2fa', 'using-ginger/annonset'],
  }
  return sections.flatMap((section, index) => {
    const additions = topics.flatMap((topic) => topic[section] ?? [])
    const fallback = legacy[section].filter((slug) => !replaced.has(slug))
      .map((slug) => ({ slug }))
    const items = [...additions, ...fallback]
    return items.length ? [{ label: labels[index], collapsed: section === 'advanced', items }] : []
  })
}
