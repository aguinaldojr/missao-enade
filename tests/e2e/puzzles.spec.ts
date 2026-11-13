import { expect, test, type Page, type TestInfo } from '@playwright/test';
import catalog from '../../src/content/puzzles/sequences.json' with { type: 'json' };

const WORLD_KEY = 'n9:exploration:v1';
const PUZZLE_KEY = 'n9:puzzles:v1';
const RESULT_KEY = 'missao-enade:example-result:v1';
async function enter(page: Page) {
  await page.getByRole('button', { name: 'Iniciar missão' }).click();
  await page.locator('input[name="course"][value="SI"]').check();
  await page.getByRole('button', { name: 'Entrar na Central Nexo' }).click();
  await page.locator('.world-interact').click();
  await expect(page.getByRole('heading', { name: 'Sequência Lógica', exact: true })).toBeVisible();
}
async function start(page: Page) {
  await page.goto('/');
  await page.evaluate((key) => localStorage.setItem(key, JSON.stringify({
    schemaVersion: 1, mapId: 'base-n9', position: { x: 376, y: 200 }, missionStatus: 'available', doorUnlocked: false,
  })), WORLD_KEY);
  await page.reload();
  await enter(page);
}
async function order(page: Page) {
  return page.locator('.sequence-block').evaluateAll((rows) => rows.map((row) => (row as HTMLElement).dataset.blockId!));
}
async function press(page: Page, name: string, info: TestInfo) {
  const control = page.getByRole('button', { name, exact: true });
  if (info.project.name === 'mobile') await control.tap(); else await control.click();
}
async function solve(page: Page, info: TestInfo, index = 0, keyboard = false) {
  for (const [target, id] of catalog[index]!.correctOrder.entries()) {
    const current = (await order(page)).indexOf(id);
    for (let position = current; position > target; position--) {
      const row = page.locator('[data-block-id="' + id + '"]');
      if (keyboard) {
        await row.locator('.block-handle').focus();
        await page.keyboard.press('ArrowUp');
        await expect(row.locator('.block-handle')).toBeFocused();
      } else {
        const up = row.getByRole('button', { name: 'Subir:', exact: false });
        if (info.project.name === 'mobile') await up.tap(); else await up.click();
      }
      await expect.poll(async () => (await order(page)).indexOf(id)).toBe(position - 1);
    }
  }
  await press(page, 'Validar sequência', info);
  await expect(page.getByRole('heading', { name: 'Sistema recuperado!' })).toBeVisible();
  await expect(page.locator('.puzzle-explanation')).toHaveText(catalog[index]!.explanation);
}

test('teclado, dicas graduais, conclusão, retorno e replay sem XP adicional', async ({ page }, info) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await start(page);
  await expect(page.locator('.example-warning')).toContainText('PENDENTE DE REVISÃO DOCENTE');
  await expect(page.locator('.puzzle-explanation')).toBeEmpty();
  await expect(page.locator('.puzzle-hints li')).toHaveCount(0);
  await expect(page.locator('.puzzle-xp')).toHaveText('XP de quebra-cabeças: 0');
  await press(page, 'Validar sequência', info);
  await expect(page.locator('.puzzle-feedback')).toContainText('ainda não está correta');
  await expect(page.locator('.puzzle-hints li')).toHaveCount(1);
  await press(page, 'Validar sequência', info);
  await expect(page.locator('.puzzle-hints li')).toHaveCount(1);
  await press(page, 'Pedir próxima dica', info);
  await expect(page.locator('.puzzle-hints li')).toHaveCount(2);
  await expect(page.locator('.puzzle-explanation')).toBeEmpty();
  await solve(page, info, 0, true);
  await expect(page.locator('.puzzle-earned')).toContainText('+100 XP');
  await expect(page.getByRole('heading', { name: 'Sistema recuperado!' })).toBeFocused();
  await page.screenshot({ path: info.outputPath('sequencia-concluida.png'), fullPage: true });
  await press(page, 'Retornar ao mapa', info);
  await expect(page.locator('.world-position')).toHaveAttribute('data-x', '376');
  await expect(page.locator('.world-position')).toHaveAttribute('data-y', '200');
  await expect(page.locator('.world-door')).toHaveText('Porta: liberada');
  await expect(page.locator('.world-puzzle-xp')).toHaveText('XP de quebra-cabeças: 100');
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).missionStatus, WORLD_KEY)).toBe('available');
  expect(await page.evaluate((key) => localStorage.getItem(key), RESULT_KEY)).toBeNull();
  await page.reload();
  await enter(page);
  await expect(page.getByText('Exercício já concluído:', { exact: false })).toBeVisible();
  await solve(page, info, 0, true);
  await expect(page.locator('.puzzle-earned')).toContainText('Sem XP adicional');
  await press(page, 'Jogar novamente sem recompensa adicional', info);
  await expect(page.locator('.puzzle-xp')).toHaveText('XP de quebra-cabeças: 100');
  await expect(page.locator('.puzzle-success')).toBeHidden();
  expect(errors).toEqual([]);
});

test('arraste com mouse/toque, botões e três conteúdos com XP único por ID', async ({ page }, info) => {
  await start(page);
  const before = await order(page);
  await page.locator('.sequence-block').first().evaluate((node) => node.scrollIntoView({ block: 'start' }));
  const handle = (await page.locator('.block-handle').first().boundingBox())!;
  const target = (await page.locator('.sequence-block').nth(2).boundingBox())!;
  const x = handle.x + handle.width / 2;
  const y = handle.y + handle.height / 2;
  const end = target.y + target.height / 2;
  if (info.project.name === 'mobile') {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    for (let step = 1; step <= 8; step++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y + (end - y) * step / 8 }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await cdp.detach();
  } else {
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x, end, { steps: 8 });
    await page.mouse.up();
  }
  expect((await order(page))[2]).toBe(before[0]);
  expect(await order(page)).not.toEqual(before);
  await page.screenshot({ path: info.outputPath('sequencia-blocos.png') });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  for (const [index, puzzle] of catalog.entries()) {
    if (index > 0) await press(page, puzzle.title, info);
    await solve(page, info, index);
    await expect(page.locator('.puzzle-xp')).toHaveText('XP de quebra-cabeças: ' + (index + 1) * 100);
  }
  const saved = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), PUZZLE_KEY);
  expect(Object.values(saved.entries).filter((entry) => (entry as { completed: boolean }).completed)).toHaveLength(3);
  await page.reload();
  await enter(page);
  await expect(page.locator('.puzzle-xp')).toHaveText('XP de quebra-cabeças: 300');
});

test('guarda ordem e dicas sem concluir; restaura após recarga', async ({ page }, info) => {
  await start(page);
  const row = page.locator('.sequence-block').first();
  const down = row.getByRole('button', { name: 'Descer:', exact: false });
  if (info.project.name === 'mobile') await down.tap(); else await down.click();
  await press(page, 'Pedir próxima dica', info);
  const expected = await order(page);
  await press(page, 'Voltar ao mapa e guardar progresso', info);
  await expect(page.locator('.world-door')).toHaveText('Porta: bloqueada');
  await page.reload();
  await enter(page);
  expect(await order(page)).toEqual(expected);
  await expect(page.locator('.puzzle-hints li')).toHaveCount(1);
  await expect(page.locator('.puzzle-xp')).toHaveText('XP de quebra-cabeças: 0');
});

test('armazenamento bloqueado permite resolver e repetir somente sem XP adicional na sessão', async ({ page }, info) => {
  await start(page);
  await page.evaluate(() => { Storage.prototype.setItem = () => { throw new Error('QuotaExceededError'); }; });
  await solve(page, info);
  await expect(page.locator('.puzzle-save')).toContainText('Não foi possível salvar');
  await press(page, 'Tentar salvar quebra-cabeças', info);
  await expect(page.locator('.puzzle-save')).toContainText('Não foi possível salvar');
  await press(page, 'Jogar novamente sem recompensa adicional', info);
  await solve(page, info);
  await expect(page.locator('.puzzle-xp')).toHaveText('XP de quebra-cabeças: 100');
  await expect(page.locator('.puzzle-earned')).toContainText('Sem XP adicional');
});
