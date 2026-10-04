import { copyForLanguage } from './localization'

export function searchLabels(locale: string) {
  return copyForLanguage(locale).search
}
