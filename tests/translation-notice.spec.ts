import { expect, test } from '@playwright/test'
import { readdirSync, readFileSync } from 'node:fs'

const locales = readdirSync(new URL('../src/locales/', import.meta.url))
  .filter((name) => name.endsWith('.json') && name !== 'en.json')
  .map((name) => ({ code: name.slice(0, -5), ...JSON.parse(readFileSync(new URL(`../src/locales/${name}`, import.meta.url), 'utf8')) }))

test('translated guides and homepages show a localized notice linking to the same English page', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 })
  for (const locale of locales) {
    for (const original of ['/', '/payments/send/']) {
      await page.goto(`/${locale.code}${original}`)
      const notice = page.locator('.ginger-translation-notice')
      await expect(notice).toBeVisible()
      await expect(notice).toContainText(locale.translationNotice.message)
      await expect(notice).toHaveAttribute('data-pagefind-ignore', '')
      const link = notice.getByRole('link', { name: locale.translationNotice.linkLabel, exact: true })
      await expect(link).toHaveAttribute('href', original)
      await expect(link).toHaveAttribute('hreflang', 'en')
      const bounds = (await notice.boundingBox())!
      expect(bounds.x).toBeGreaterThanOrEqual(0)
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(320)
      expect(await notice.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true)
    }
  }
})

test('English pages and the error page have no translation notice', async ({ page }) => {
  for (const path of ['/', '/payments/send/', '/404.html']) {
    await page.goto(path)
    await expect(page.locator('.ginger-translation-notice')).toHaveCount(0)
  }
})

test.describe('Hungarian visitor', () => {
  test.use({ locale: 'hu-HU' })

  test('the original link remembers English instead of redirecting back to the translation', async ({ page }) => {
    await page.goto('/hu/payments/send/')
    await page.locator('.ginger-translation-notice a').click()
    await expect(page).toHaveURL(/\/payments\/send\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('.ginger-translation-notice')).toHaveCount(0)
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.goto('/using-ginger/fee/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })
})

test('the notice and original link work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, locale: 'hu-HU' })
  const page = await context.newPage()
  try {
    await page.goto(`${baseURL}/hu/payments/send/`)
    await expect(page.locator('.ginger-translation-notice')).toBeVisible()
    await page.locator('.ginger-translation-notice a').click()
    await expect(page).toHaveURL(/\/payments\/send\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('.ginger-translation-notice')).toHaveCount(0)
  } finally {
    await context.close()
  }
})
