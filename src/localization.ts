interface LocaleCopy {
  label: string
  lang: string
  title: string
  header: Record<string, string>
  sidebar: Record<string, string>
  search: {
    levelLabel: string
    scope: string
    everyday: string
    advanced: string
    all: string
    hint: string
    loading: string
    error: string
    retry: string
    level: Record<'beginner' | 'everyday' | 'advanced', string>
  }
}

// Bundle the copy into the static site rather than reading files during rendering.
const copies = import.meta.glob<LocaleCopy>('./locales/*.json', { eager: true, import: 'default' })

export function copyForLanguage(lang: string): LocaleCopy {
  return Object.values(copies).find((copy) => copy.lang.toLowerCase() === lang.toLowerCase())
    ?? copies['./locales/en.json']
}
