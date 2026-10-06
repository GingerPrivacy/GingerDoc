import { expect, test } from '@playwright/test'

for (const userAgent of [
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'Mozilla/5.0 AppleWebKit/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot',
  'Mozilla/5.0 AppleWebKit/537.36; compatible; ChatGPT-User/1.0; +https://openai.com/bot',
  'Mozilla/5.0 (compatible; PerplexityBot/1.0)',
  'Claude-SearchBot/1.0',
  'Mozilla/5.0 (compatible; Google-InspectionTool/1.0)',
]) {
  test.describe(`Crawler ${userAgent}`, () => {
    test.use({ userAgent, locale: 'hu-HU' })

    test('renders English canonical URLs without language redirects', async ({ page }) => {
      await page.goto('/payments/send/')
      await expect(page).toHaveURL(/:\d+\/payments\/send\/$/)
      await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      await expect(page.getByRole('heading', { name: 'Send Bitcoin and Review Fees', exact: true })).toBeVisible()
      await page.goto('/hu/payments/send/')
      await expect(page).toHaveURL(/\/hu\/payments\/send\/$/)
      await expect(page.locator('html')).toHaveAttribute('lang', 'hu')
    })
  })
}

test('language links work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, locale: 'hu-HU' })
  const page = await context.newPage()
  try {
    await page.goto(`${baseURL}/payments/send/`)
    const languages = page.locator('.ginger-language-links')
    await languages.locator('summary').click()
    await expect(languages.getByRole('link')).toHaveCount(11)
    await languages.getByRole('link', { name: 'Magyar', exact: true }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'hu')
    await page.locator('.ginger-language-links summary').click()
    await page.locator('.ginger-language-links').getByRole('link', { name: 'English', exact: true }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  } finally {
    await context.close()
  }
})

test.describe('Hungarian visitor', () => {
  test.use({ locale: 'hu-HU' })

  test('remembers the language chosen with a normal link', async ({ page }) => {
    await page.goto('/payments/send/')
    await expect(page).toHaveURL(/\/hu\/payments\/send\/$/)
    await page.locator('.ginger-language-links summary').click()
    await page.locator('.ginger-language-links').getByRole('link', { name: 'English', exact: true }).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })
})

test('metadata is present in the initial HTML, including on translated pages', async ({ request }) => {
  for (const path of ['/', '/hu/', '/payments/send/', '/hu/payments/send/']) {
    const response = await request.get(path)
    expect(response.status()).toBe(200)
    const html = await response.text()
    expect(html.indexOf('charset="utf-8"')).toBeLessThan(1024)
    expect(html).toContain(`rel="canonical" href="https://docs.gingerwallet.io${path}"`)
    expect(html).toContain('hreflang="x-default"')
    expect(html).toContain('type="application/ld+json"')
    expect(html).not.toContain('name="robots" content="noindex"')
  }
  const home = await (await request.get('/')).text()
  expect(home).toContain('<title>GingerWallet Documentation</title>')
  const errorPage = await request.get('/404.html')
  expect(await errorPage.text()).toContain('name="robots" content="noindex"')
  expect(await errorPage.text()).not.toContain('hreflang=')
})
