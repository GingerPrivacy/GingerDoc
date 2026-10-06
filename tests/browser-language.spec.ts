import { expect, test } from '@playwright/test'

for (const [language, code, htmlLang] of [
  ['hu-HU', 'hu', 'hu'],
  ['de-DE', 'de', 'de'],
  ['es-ES', 'es', 'es'],
  ['fr-FR', 'fr', 'fr'],
  ['it-IT', 'it', 'it'],
  ['ru-RU', 'ru', 'ru'],
  ['tr-TR', 'tr', 'tr'],
  ['pt-BR', 'pt-br', 'pt-BR'],
  ['pt-PT', 'pt-pt', 'pt-PT'],
  ['zh-CN', 'zh-cn', 'zh-CN'],
]) {
  test.describe(`Browser language ${language}`, () => {
    test.use({ locale: language })

    test('opens the translated home and preserves the guide, query and fragment', async ({ page }) => {
      await page.goto('/')
      await expect(page).toHaveURL(new RegExp(`/${code}/$`))
      await expect(page.locator('html')).toHaveAttribute('lang', htmlLang)
      await page.goto('/payments/send/?source=website#prepare-a-payment')
      await expect(page).toHaveURL(new RegExp(`/${code}/payments/send/\\?source=website#prepare-a-payment$`))
      await expect(page.locator('#prepare-a-payment')).toHaveCount(1)
    })
  })
}

test.describe('Hungarian browser', () => {
  test.use({ locale: 'hu-HU' })

  test('remembers manual English and other language choices on later visits', async ({ page }) => {
    await page.goto('/payments/send/#prepare-a-payment')
    await expect(page).toHaveURL(/\/hu\/payments\/send\/#prepare-a-payment$/)
    await page.locator('header .ginger-language-menu select').selectOption('/payments/send/')
    await expect(page).toHaveURL(/\/payments\/send\/#prepare-a-payment$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.locator('header .ginger-language-menu select').selectOption('/de/')
    await expect(page).toHaveURL(/\/de\/$/)
    await page.goto('/payments/send/')
    await expect(page).toHaveURL(/\/de\/payments\/send\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  })

  test('honors an explicit language URL over browser and saved preferences', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/\/hu\/$/)
    await page.locator('header .ginger-language-menu select').selectOption('/de/')
    await expect(page).toHaveURL(/\/de\/$/)
    await page.goto('/fr/payments/send/')
    await expect(page).toHaveURL(/\/fr\/payments\/send\/$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
  })

  test('supports automatic and manual selection when language preference storage is blocked', async ({ page }) => {
    await page.addInitScript(() => {
      // Isolate documentation storage failures from Starlight's theme preference.
      const getItem = Storage.prototype.getItem
      const setItem = Storage.prototype.setItem
      Storage.prototype.getItem = function (key) {
        if (key === 'ginger-docs-language') throw new Error('Storage blocked')
        return getItem.call(this, key)
      }
      Storage.prototype.setItem = function (key, value) {
        if (key === 'ginger-docs-language') throw new Error('Storage blocked')
        setItem.call(this, key, value)
      }
    })
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto('/')
    await expect(page).toHaveURL(/\/hu\/$/)
    await page.locator('header .ginger-language-menu select').selectOption('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.getByRole('link', { name: 'Start using Ginger', exact: true }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    expect(errors).toEqual([])
  })

  test('keeps missing pages on their original URL', async ({ page }) => {
    const response = await page.goto('/missing-guide/')
    expect(response?.status()).toBe(404)
    await expect(page).toHaveURL(/\/missing-guide\/$/)
  })
})

for (const languages of [['ja-JP', 'hu-HU', 'en-US'], ['en-US', 'hu-HU'], ['ja-JP']]) {
  test(`uses the first supported browser language in ${languages.join(', ')}`, async ({ page }) => {
    await page.addInitScript((languages) => {
      Object.defineProperty(navigator, 'languages', { value: languages })
    }, languages)
    await page.goto('/')
    const code = languages[0] === 'ja-JP' && languages.length > 1 ? 'hu' : 'en'
    await expect(page.locator('html')).toHaveAttribute('lang', code)
    await expect(page).toHaveURL(code === 'hu' ? /\/hu\/$/ : /:\d+\/$/)
  })
}

test('keeps documentation accessible without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, locale: 'hu-HU' })
  const page = await context.newPage()
  try {
    await page.goto(`${baseURL}/payments/send/`)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.getByRole('heading', { name: 'Send Bitcoin and Review Fees', exact: true })).toBeVisible()
  } finally {
    await context.close()
  }
})
