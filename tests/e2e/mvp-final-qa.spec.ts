import { expect, test, type Page, type TestInfo } from '@playwright/test';
import puzzleCatalog from '../../src/content/puzzles/enade-2026-provisional-sequences.json' with { type: 'json' };

const PROFILE_KEY = 'n9:player-profile:v1';
const WORLD_KEY = 'n9:exploration:v1';
const PUZZLE_KEY = 'n9:puzzles:v1';
const courses = ['CC', 'TADS', 'TGTI', 'TRC'] as const;
const familyNames: Record<(typeof courses)[number], string> = {
  CC: 'Ciência da Computação',
  TADS: 'Análise e Desenvolvimento',
  TGTI: 'Gestão de TI',
  TRC: 'Redes de Computadores',
};

async function seedPlayer(page: Page, position?: { x: number; y: number }): Promise<void> {
  await page.goto('/');
  await page.evaluate(({ profileKey, worldKey, position }) => {
    localStorage.clear();
    const now = '2026-11-14T12:00:00.000Z';
    localStorage.setItem(profileKey, JSON.stringify({ schemaVersion: 1, activePlayerId: 'qa-final',
      players: [{ id: 'qa-final', nickname: 'QA Final', createdAt: now, lastUsedAt: now }] }));
    if (position) localStorage.setItem(worldKey, JSON.stringify({ schemaVersion: 1, mapId: 'base-n9', position,
      missionStatus: 'available', doorUnlocked: false }));
  }, { profileKey: PROFILE_KEY, worldKey: WORLD_KEY, position });
  await page.reload();
}

async function enterCentral(page: Page, course: string, mission = 'quick'): Promise<void> {
  await page.getByRole('button', { name: 'Iniciar missão' }).click();
  await page.locator('input[name="course"][value="' + course + '"]').check();
  await page.locator('input[name="mission"][value="' + mission + '"]').check();
  await page.getByRole('button', { name: 'Entrar na Central Nexo' }).click();
}

async function currentOrder(page: Page): Promise<string[]> {
  return page.locator('.sequence-block').evaluateAll((rows) => rows.map((row) => (row as HTMLElement).dataset.blockId!));
}

async function solveWithButtons(page: Page, correctOrder: readonly string[]): Promise<void> {
  for (const [target, id] of correctOrder.entries()) {
    const current = (await currentOrder(page)).indexOf(id);
    for (let position = current; position > target; position--) {
      const row = page.locator('[data-block-id="' + id + '"]');
      await row.getByRole('button', { name: 'Subir:', exact: false }).click();
      await expect.poll(async () => (await currentOrder(page)).indexOf(id)).toBe(position - 1);
    }
  }
  await page.getByRole('button', { name: 'Validar sequência' }).click();
}

test('textos longos preservam conteúdo, foco, toque e rolagem responsiva', async ({ page }, info: TestInfo) => {
  await seedPlayer(page);
  await enterCentral(page, 'CC');
  await page.getByRole('button', { name: 'Iniciar missão selecionada' }).click();

  const progress = page.getByRole('progressbar');
  await expect(progress).toHaveAttribute('aria-valuetext', 'Desafio 1 de 3');
  const context = page.getByRole('region', { name: 'Contexto do desafio' });
  await expect(context).not.toBeEmpty();
  await context.focus();
  await expect(context).toBeFocused();
  await expect(page.getByRole('radio')).toHaveCount(5);
  expect(await page.locator('.answer-card').evaluateAll((cards) => cards.every((card) => card.getBoundingClientRect().height >= 44))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);

  if (info.project.name === 'mobile') {
    const layout = await context.evaluate((node) => ({ overflowY: getComputedStyle(node).overflowY,
      clientHeight: node.clientHeight, viewportHeight: innerHeight }));
    expect(layout.overflowY).toBe('auto');
    expect(layout.clientHeight).toBeLessThanOrEqual(layout.viewportHeight * 0.48 + 2);
  } else {
    await page.setViewportSize({ width: 683, height: 450 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
  }
  await page.screenshot({ path: info.outputPath('desafio-texto-longo.png'), fullPage: true });
});

test('puzzles específicos restantes possuem solução única executável e salvamento', async ({ page }, info: TestInfo) => {
  test.skip(info.project.name !== 'desktop', 'Os gestos móveis e o puzzle de SI já são cobertos pela suíte dedicada.');

  for (const course of courses) {
    await seedPlayer(page, { x: 376, y: 200 });
    await enterCentral(page, course);
    await page.locator('.world-interact').click();
    await expect(page.getByRole('heading', { name: 'Sequência Lógica', exact: true })).toBeVisible();
    const puzzle = puzzleCatalog.find((candidate) => candidate.id === 'E26-P-' + course + '-01')!;
    await page.getByRole('button', { name: puzzle.title }).click();
    await expect(page.locator('.puzzle-family')).toContainText(familyNames[course]);
    await solveWithButtons(page, puzzle.correctOrder);
    await expect(page.getByRole('heading', { name: 'Sistema recuperado!' })).toBeVisible();
    await expect(page.locator('.puzzle-explanation')).toHaveText(puzzle.explanation);
    const saved = await page.evaluate(({ key, id }) => JSON.parse(localStorage.getItem(key)!).entries[id],
      { key: PUZZLE_KEY, id: puzzle.id });
    expect(saved).toMatchObject({ completed: true, order: puzzle.correctOrder });
    expect(await page.locator('body').innerText()).not.toMatch(/\bENADE\b/i);
  }
  await page.screenshot({ path: info.outputPath('puzzle-trc-concluido.png'), fullPage: true });
});
