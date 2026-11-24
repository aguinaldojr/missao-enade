import { expect, test } from '@playwright/test';

test('laboratório separado apresenta a missão diária compartilhada', async ({ page }, testInfo) => {
  await page.goto('./#/laboratorio');
  await expect(page.getByRole('heading', { name: /TREINE/ })).toBeVisible();
  await expect(page.getByText('15 atividades na missão de hoje')).toBeVisible();
  await expect(page.locator('.lab-mechanic-card')).toHaveCount(15);
  await expect(page.locator('.lab-lia')).toBeVisible();
  await expect(page.locator('.lab-student')).toBeVisible();
  await expect(page.locator('.lab-bot')).toBeVisible();
  await expect(page.locator('.lab-lia')).toHaveJSProperty('complete', true);
  await expect(page.locator('.lab-student')).toHaveJSProperty('complete', true);
  await expect(page.locator('.lab-bot')).toHaveJSProperty('complete', true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);

  await page.getByRole('button', { name: /Começar laboratório/ }).click();
  await expect(page.getByText('ATIVIDADE 1 DE 15')).toBeVisible();
  await expect(page.locator('.lab-challenge')).toHaveAttribute('data-activity-type', /.+/);
  await expect(page.getByText('Preciso de ajuda')).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('laboratorio-missao-diaria.png'), fullPage: true });
});

test('laboratório respeita movimento reduzido e mantém controles acessíveis', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./#/laboratorio');
  const duration = await page.locator('.lab-bot').evaluate((node) => getComputedStyle(node).animationDuration);
  expect(duration).toMatch(/1e-05s|0\.00001s|0\.01ms/);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: /Começar laboratório/ })).toBeFocused();
});

test('permite desfazer e refazer associações após uma tentativa incorreta', async ({ page }, testInfo) => {
  await page.clock.setFixedTime(new Date('2026-11-22T15:00:00Z'));
  await page.goto('./#/laboratorio');
  await page.getByRole('button', { name: /Começar laboratório/ }).click();
  const match = page.locator('.lab-match');
  const ids = await match.locator('[data-left]').evaluateAll((buttons) =>
    buttons.map((button) => button.getAttribute('data-left')!));
  expect(ids.length).toBeGreaterThanOrEqual(3);
  const left = (id: string) => match.locator('[data-left="' + id + '"]');
  const right = (id: string) => match.locator('[data-right="' + id + '"]');
  const press = (button: ReturnType<typeof left>) => testInfo.project.name === 'mobile' ? button.tap() : button.click();
  const verify = page.getByRole('button', { name: 'Verificar' });
  // Conserva o primeiro par correto e inverte somente o segundo e o terceiro.
  for (const [i, id] of ids.entries()) {
    await press(left(id));
    await press(right(i === 1 ? ids[2]! : i === 2 ? ids[1]! : id));
  }
  await press(verify);
  await expect(page.locator('.lab-feedback--retry')).toBeVisible();
  await press(right(ids[1]!));
  await expect(verify).toBeDisabled();
  await expect(right(ids[1]!)).not.toHaveClass(/is-paired/);
  await expect(left(ids[2]!)).not.toHaveClass(/is-paired/);
  await expect(left(ids[0]!)).toHaveClass(/is-paired/);
  await press(left(ids[1]!));
  await expect(right(ids[2]!)).not.toHaveClass(/is-paired/);
  await press(right(ids[1]!));
  await press(left(ids[2]!));
  await press(right(ids[2]!));
  await press(verify);
  await expect(page.locator('.lab-feedback--success')).toBeVisible();
});

