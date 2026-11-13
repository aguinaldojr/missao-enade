import { expect, test, type Page } from '@playwright/test';

const KEY = 'n9:exploration:v1';
async function enter(page: Page) {
  await page.getByRole('button', { name: 'Iniciar missão' }).click();
  await page.locator('input[name="course"][value="TRC"]').check();
  await page.getByRole('button', { name: 'Entrar na Central Nexo' }).click();
  await expect(page.getByRole('heading', { name: 'Base N9', exact: true })).toBeVisible();
  await expect(page.locator('canvas')).toBeVisible();
}
async function seed(page: Page, x: number, y: number, completed = false) {
  await page.goto('/');
  await page.evaluate(({ key, x, y, completed }) => localStorage.setItem(key, JSON.stringify({
    schemaVersion: 1, mapId: 'base-n9', position: { x, y },
    missionStatus: completed ? 'completed' : 'available', doorUnlocked: completed,
  })), { key: KEY, x, y, completed });
  await page.reload();
  await enter(page);
}
async function position(page: Page) {
  return page.locator('.world-position').evaluate((node) => ({ x: Number((node as HTMLElement).dataset.x), y: Number((node as HTMLElement).dataset.y) }));
}
async function walk(page: Page, key: string, duration: number) {
  await page.locator('.world-map').focus();
  await page.keyboard.down(key);
  await page.waitForTimeout(duration);
  await page.keyboard.up(key);
}
test('setas e WASD respeitam limites e restauram posição após recarga', async ({ page }, info) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await enter(page);
  await walk(page, 'a', 1200);
  const left = await position(page);
  expect(left.x).toBeGreaterThanOrEqual(42);
  expect(left.x).toBeLessThan(51);
  await walk(page, 'ArrowUp', 1200);
  const top = await position(page);
  expect(top.y).toBeGreaterThanOrEqual(42);
  expect(top.y).toBeLessThan(51);
  await walk(page, 'd', 200);
  expect((await position(page)).x).toBeGreaterThan(top.x);
  await walk(page, 's', 200);
  const end = await position(page);
  expect(end.y).toBeGreaterThan(top.y);
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).position, KEY)).toEqual(end);
  await page.screenshot({ path: info.outputPath('base-n9.png'), fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.reload();
  await enter(page);
  expect(await position(page)).toEqual(end);
  expect(errors).toEqual([]);
});

test('NPC oferece missão por E e porta informa bloqueio por Espaço', async ({ page }) => {
  await seed(page, 240, 236);
  await page.locator('.world-map').focus();
  await page.keyboard.press('e');
  await expect(page.getByRole('heading', { name: 'Lia · Guia da Base N9' })).toBeFocused();
  await expect(page.locator('.world-dialog')).toContainText('dez desafios');
  await expect(page.getByRole('button', { name: 'Mover para cima' })).toBeDisabled();
  const before = await position(page);
  await page.keyboard.press('w');
  expect(await position(page)).toEqual(before);
  await page.getByRole('button', { name: 'Continuar exploração' }).click();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).missionStatus, KEY)).toBe('active');
  await seed(page, 380, 272);
  await page.locator('.world-map').focus();
  await page.keyboard.press('Space');
  await expect(page.getByRole('heading', { name: 'Porta bloqueada' })).toBeVisible();
  await page.getByRole('button', { name: 'Continuar exploração' }).click();
  await walk(page, 'ArrowRight', 600);
  expect((await position(page)).x).toBeLessThanOrEqual(406);
});

test('controle virtual responde ao toque e para ao soltar', async ({ page }, info) => {
  await page.goto('/');
  await enter(page);
  const control = page.getByRole('button', { name: 'Mover para direita' });
  await control.scrollIntoViewIfNeeded();
  await expect(page.locator('canvas')).toBeInViewport();
  const box = (await control.boundingBox())!;
  const before = await position(page);
  if (info.project.name === 'mobile') {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + box.width / 2, y: box.y + box.height / 2 }] });
    await page.waitForTimeout(250);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await cdp.detach();
  } else {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.waitForTimeout(250);
    await page.mouse.up();
  }
  await page.screenshot({ path: info.outputPath('base-controles.png') });
  const after = await position(page);
  expect(after.x).toBeGreaterThan(before.x + 10);
  await page.waitForTimeout(150);
  expect(await position(page)).toEqual(after);
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).position, KEY)).toEqual(after);
  // O computador também responde ao botão com mouse/toque.
  await walk(page, 'ArrowLeft', 250);
  const interact = page.locator('.world-interact');
  if (info.project.name === 'mobile') await interact.tap(); else await interact.click();
  await expect(page.getByText('Desafio 1 de 10', { exact: true })).toBeVisible();
});

test('porta liberada permite atravessar e acessar terminal', async ({ page }) => {
  await seed(page, 390, 272, true);
  await walk(page, 'd', 600);
  expect((await position(page)).x).toBeGreaterThan(450);
  await walk(page, 'a', 650);
  await walk(page, 'w', 500);
  await expect(page.locator('.world-nearby')).toContainText('Terminal tecnológico');
  await page.locator('.world-interact').click();
  await expect(page.getByRole('heading', { name: 'Sequência Lógica', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Voltar ao mapa e guardar progresso' }).click();
  await expect(page.locator('.world-door')).toHaveText('Porta: liberada');
});
