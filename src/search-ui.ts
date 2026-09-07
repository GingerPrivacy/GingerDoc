// Pagefind's Default UI owns query debouncing, result loading and filter state.
// @ts-expect-error The package does not publish TypeScript declarations.
import { PagefindUI } from '@pagefind/default-ui'

export interface SearchUI {
  triggerFilters(filters: Record<string, string[]>): void
  destroy(): void
}

export function createSearchUI(element: HTMLElement, translations: Record<string, string>): SearchUI {
  return new PagefindUI({
    element,
    baseUrl: import.meta.env.BASE_URL,
    bundlePath: import.meta.env.BASE_URL.replace(/\/$/, '') + '/pagefind/',
    showImages: false,
    showSubResults: true,
    translations,
  })
}
