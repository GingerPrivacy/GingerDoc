import { expect, test } from '@playwright/test'

test('everyday answers and advanced references have separate search results', async ({ page }) => {
  await page.goto('/getting-started/')
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  const dialog = page.getByRole('dialog', { name: 'Search' })
  const scope = dialog.getByRole('combobox', { name: 'Search in' })
  const results = dialog.locator('.pagefind-ui__result')
  await expect(scope).toHaveValue('everyday')
  await dialog.getByRole('textbox', { name: 'Search', exact: true }).fill('coinjoin waiting')
  await expect(dialog.locator('.pagefind-ui__message')).toContainText('results for coinjoin waiting')
  await expect(results.first().locator('.pagefind-ui__result-tag')).toContainText(/Beginner|Everyday use/)
  await expect(results.getByText('Level: Advanced', { exact: true })).toHaveCount(0)
  await expect(dialog.getByRole('link', { name: 'Ginger Wallet FAQ: Start Here', exact: true })).toBeVisible()

  await scope.selectOption('advanced')
  await expect(results.first().locator('.pagefind-ui__result-tag')).toHaveText('Level: Advanced')
  await expect(dialog.getByRole('link', { name: 'CoinJoin Fees and Privacy Progress', exact: true }).first()).toBeVisible()
  await expect(results.getByText('Level: Beginner', { exact: true })).toHaveCount(0)

  await scope.selectOption('all')
  await expect(results.getByText('Level: Beginner', { exact: true }).first()).toBeVisible()
  await expect(results.getByText('Level: Advanced', { exact: true }).first()).toBeVisible()
})

test('search supports the keyboard and a narrow viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/help/')
  await page.keyboard.press('Control+k')
  const dialog = page.getByRole('dialog', { name: 'Search' })
  await expect(dialog).toBeVisible()
  const input = dialog.getByRole('textbox', { name: 'Search', exact: true })
  await expect(input).toBeFocused()
  await input.fill('backup')
  await expect(dialog.locator('.pagefind-ui__message')).toContainText('results for backup')
  await expect(dialog.getByRole('combobox', { name: 'Search in' })).toBeVisible()
  const box = await dialog.boundingBox()
  expect(box!.width).toBeLessThanOrEqual(390)
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeFocused()
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  await expect(input).toHaveValue('backup')
  await dialog.getByRole('button', { name: 'Cancel', exact: true }).click()
  await expect(dialog).not.toBeVisible()
})

test('fonts and search make no external requests in the generated site', async ({ page, baseURL }) => {
  const external: string[] = []
  const fonts: string[] = []
  const errors: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (/^https?:$/.test(url.protocol) && url.origin !== baseURL) external.push(url.href)
    if (request.resourceType() === 'font') fonts.push(url.href)
  })
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  const dialog = page.getByRole('dialog', { name: 'Search' })
  await dialog.getByRole('textbox', { name: 'Search', exact: true }).fill('backup')
  await expect(dialog.locator('.pagefind-ui__message')).toContainText('results for backup')
  expect(fonts.length).toBeGreaterThan(0)
  expect(external).toEqual([])
  expect(errors).toEqual([])
})

test('the empty developer page redirects without entering the search index', async ({ page, request }) => {
  await page.goto('/building-ginger/')
  await expect(page).toHaveURL(/\/getting-started\/$/)
  await expect(page.getByRole('heading', { name: 'Start Here: Your First Steps with Ginger', exact: true })).toBeVisible()
  const xml = await (await request.get('/sitemap-0.xml')).text()
  expect(xml).not.toContain('/building-ginger')
})
