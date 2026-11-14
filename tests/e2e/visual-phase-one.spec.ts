import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('identidade visual não cria rolagem horizontal e preserva foco', async ({ page }) => {
  await expect(page.locator('.brand-mark')).toHaveText('N9');
  await expect(page.locator('.visual-panel canvas')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
  await expect(page.locator('h1')).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('movimento reduzido desativa transições perceptíveis', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  const duration = await page.locator('.button').first().evaluate((node) => getComputedStyle(node).transitionDuration);
  expect(duration).toMatch(/1e-05s|0\.00001s|0\.01ms/);
});

test('layout permanece utilizável em equivalente a zoom de 200%', async ({ page }) => {
  await page.setViewportSize({ width: 683, height: 450 });
  await page.reload();
  await expect(page.getByRole('button', { name: /^Iniciar missão/ })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
});

