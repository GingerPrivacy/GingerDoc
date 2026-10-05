import { expect, test } from '@playwright/test'
import { readdirSync, readFileSync } from 'node:fs'

const locales = readdirSync(new URL('../src/locales/', import.meta.url))
  .filter((name) => name.endsWith('.json') && name !== 'en.json')
  .map((name) => ({ code: name.slice(0, -5), ...JSON.parse(readFileSync(new URL(`../src/locales/${name}`, import.meta.url), 'utf8')) }))

test('language menu is beside the logo on mobile home and guide pages', async ({ page }) => {
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 })
    for (const path of ['/', '/payments/send/']) {
      await page.goto(path)
      const picker = page.locator('header .ginger-language-menu select')
      await expect(picker).toBeVisible()
      await expect(page.locator('header .current-language')).toHaveText('EN')
      const bounds = await picker.boundingBox()
      expect(bounds?.y).toBeLessThan(80)
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width)
    }
  }
})

for (const locale of locales) {
  test(`${locale.label}: language selection preserves the current guide and sidebar routes`, async ({ page }) => {
    await page.goto('/payments/send/#prepare-a-payment')
    await page.locator('header .ginger-language-menu select').selectOption(`/${locale.code}/payments/send/`)
    await expect(page).toHaveURL(new RegExp(`/${locale.code}/payments/send/#prepare-a-payment$`))
    await expect(page.locator('html')).toHaveAttribute('lang', locale.lang)
    await expect(page.locator('header .ginger-language-menu select')).toHaveValue(`/${locale.code}/payments/send/`)
    await expect(page.locator('#prepare-a-payment')).toHaveCount(1)
    const links = await page.locator('#starlight__sidebar a[href^="/"]').evaluateAll((items) => items.map((item) => item.getAttribute('href')))
    expect(links.length).toBeGreaterThan(20)
    expect(links.every((href) => href?.startsWith(`/${locale.code}/`))).toBe(true)
    const nativeHeading = await page.locator('#prepare-a-payment').getAttribute('data-ginger-heading')
    expect(nativeHeading).toBeTruthy()
    await page.goto(`/${locale.code}/payments/send/#${encodeURIComponent(nativeHeading!)}`)
    await page.locator('header .ginger-language-menu select').selectOption('/payments/send/')
    await expect(page).toHaveURL(/\/payments\/send\/#prepare-a-payment$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test(`${locale.label}: mobile home exposes language selection and localized guide links`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(`/${locale.code}/`)
    const picker = page.locator('header .ginger-language-menu select')
    await expect(picker).toBeVisible()
    await expect(picker).toHaveValue(`/${locale.code}/`)
    const links = await page.locator('.manual-home a[href]').evaluateAll((items) => items.map((item) => item.getAttribute('href')))
    expect(links.every((href) => href?.startsWith(`/${locale.code}/`))).toBe(true)
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390)
    const trigger = page.locator('.manual-home [data-open-manual-search]')
    await trigger.click()
    await expect(page.locator('ginger-search dialog')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(trigger).toBeFocused()
  })

  test(`${locale.label}: search stays in the selected language and supports guide scopes`, async ({ page }) => {
    await page.goto(`/${locale.code}/help/`)
    await page.locator('ginger-search .open-search').click()
    const dialog = page.locator('ginger-search dialog')
    const scope = dialog.getByRole('combobox', { name: locale.search.scope })
    await expect(scope).toHaveValue('everyday')
    await dialog.locator('.pagefind-ui__search-input').fill('CoinJoin')
    const results = dialog.locator('.pagefind-ui__result')
    await expect(results.first()).toBeVisible()
    await expect(results.first().locator('.pagefind-ui__result-tag')).toContainText(new RegExp(`${locale.search.level.beginner}|${locale.search.level.everyday}`))
    await scope.selectOption('advanced')
    await expect(results.first().locator('.pagefind-ui__result-tag')).toContainText(locale.search.level.advanced)
    const urls = await results.locator('a[href]').evaluateAll((items) => items.map((item) => new URL((item as HTMLAnchorElement).href).pathname))
    expect(urls.length).toBeGreaterThan(0)
    expect(urls.every((href) => href.startsWith(`/${locale.code}/`))).toBe(true)
  })
}
