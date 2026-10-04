import { existsSync, readdirSync, readFileSync } from 'node:fs'

/** @typedef {{label: string, lang: string, title: string, header: Record<string, string>, sidebar: Record<string, string>, search: {levelLabel: string, scope: string, everyday: string, advanced: string, all: string, hint: string, loading: string, error: string, retry: string, level: Record<'beginner'|'everyday'|'advanced', string>}}} LocaleCopy */

const directory = new URL('./locales/', import.meta.url)
/** @type {Record<string, LocaleCopy>} */
export const localeCopy = Object.fromEntries(readdirSync(directory)
  .filter((file) => file.endsWith('.json'))
  .map((file) => [file.slice(0, -5), JSON.parse(readFileSync(new URL(file, directory), 'utf8'))]))

// Each translation can ship without another shared configuration change.
export const translatedLocales = Object.entries(localeCopy)
  .filter(([code]) => code !== 'en' && existsSync(new URL(`./content/docs/${code}/index.mdx`, import.meta.url)))

export const documentationLocales = {
  root: { label: 'English', lang: 'en' },
  ...Object.fromEntries(translatedLocales.map(([code, copy]) => [code, { label: copy.label, lang: copy.lang }])),
}

export const documentationTitles = {
  en: localeCopy.en.title,
  ...Object.fromEntries(translatedLocales.map(([, copy]) => [copy.lang, copy.title])),
}

/** @param {string} label */
export function sidebarTranslations(label) {
  return Object.fromEntries(translatedLocales.map(([, copy]) => [copy.lang, copy.sidebar[label] ?? label]))
}
