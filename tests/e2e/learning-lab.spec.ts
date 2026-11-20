import { expect, test } from '@playwright/test';

test('laboratório separado apresenta nove mecânicas e feedback animado', async ({ page }, testInfo) => {
  await page.goto('./#/laboratorio');
  await expect(page.getByRole('heading', { name: /TREINE/ })).toBeVisible();
  await expect(page.locator('.lab-mechanic-card')).toHaveCount(9);
  await expect(page.locator('.lab-student')).toBeVisible();
  await expect(page.locator('.lab-bot')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);

  await page.getByRole('button', { name: /Começar laboratório/ }).click();
  await expect(page.getByRole('heading', { name: 'Pedido sem retrabalho' })).toBeVisible();
  await page.locator('[data-option="B"]').click();
  await page.getByRole('button', { name: 'Verificar' }).click();
  await expect(page.getByText('Excelente! +40 XP')).toBeVisible();
  await expect(page.locator('.lab-game-layout')).toHaveClass(/is-celebrating/);
  await page.screenshot({ path: testInfo.outputPath('laboratorio-primeiro-acerto.png'), fullPage: true });
});

test('laboratório respeita movimento reduzido e mantém controles acessíveis', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./#/laboratorio');
  const duration = await page.locator('.lab-bot').evaluate((node) => getComputedStyle(node).animationDuration);
  expect(duration).toMatch(/1e-05s|0\.00001s|0\.01ms/);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: /Começar laboratório/ })).toBeFocused();
});

