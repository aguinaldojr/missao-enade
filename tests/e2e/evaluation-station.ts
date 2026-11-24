import { expect, type Page } from '@playwright/test';
import puzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json' with { type: 'json' };
import { EVALUATION_JOURNEY_PUZZLES } from '../../src/content/puzzles/evaluation-journey';

const allPuzzles = [...puzzles, ...EVALUATION_JOURNEY_PUZZLES];

async function walkTo(page: Page, x: number, y: number) {
  await page.locator('.world-position').evaluate((node, goal) => {
    const walk = (axis: 'x' | 'y', target: number) => {
      for (let step = 0; step < 100; step++) {
        const delta = target - Number((node as HTMLElement).dataset[axis]);
        if (Math.abs(delta) < 5) return;
        const direction = axis === 'x' ? (delta > 0 ? 'right' : 'left') : (delta > 0 ? 'down' : 'up');
        document.querySelector<HTMLButtonElement>('[data-direction="' + direction + '"]')!.click();
      }
      throw Error('Destino inacessível');
    };
    walk('y', goal.y); walk('x', goal.x);
  }, { x, y });
}

async function solveVisiblePuzzle(page: Page) {
  const title = await page.locator('.puzzle-title').textContent();
  const puzzle = allPuzzles.find(item => item.title === title)!;
  for (const [index, id] of puzzle.correctOrder.entries()) {
    const row = page.locator('[data-block-id="' + id + '"]');
    await row.evaluate((node, target) => {
      const up = node.querySelector<HTMLButtonElement>('[data-offset="-1"]')!;
      const moves = Array.from(node.parentElement!.children).indexOf(node) - target;
      for (let i = 0; i < moves; i++) up.click();
    }, index);
  }
  await page.getByRole('button', { name: 'Validar sequência' }).click();
  await page.getByRole('button', { name: /Retornar ao mapa|Voltar à rota liberada/ }).click();
}

export async function enterEvaluationStation(page: Page) {
  const route = page.getByRole('heading', { name: 'Rota da Jornada N9' });
  if (await route.isVisible().catch(() => false)) {
    const progress = Number((await page.locator('.world-mission').textContent())!.match(/\d+/)![0]);
    const gateTargets: Record<number, readonly [number, number]> = { 0: [88, 176], 10: [384, 176], 20: [384, 220] };
    const gate = gateTargets[progress];
    if (gate && (await page.locator('.helper').textContent())!.match(/robô|desafio destacado/i)) {
      await walkTo(page, ...gate); await page.locator('.world-interact').click(); await solveVisiblePuzzle(page);
    }
    const phaseTargets = [[188, 176], [284, 176], [484, 176], [484, 220], [284, 220]] as const;
    const [phaseX, phaseY] = phaseTargets[Math.floor(progress / 5)]!;
    await walkTo(page, phaseX, phaseY);
    await page.locator('.world-interact').click();
  }
  const position = page.locator('.world-position');
  await position.evaluate(node => {
    const index = Number(document.querySelector('.world-mission')!.textContent!.match(/\d+/)![0]) - 1;
    const station = index % 5;
    const walk = (axis: 'x' | 'y', goal: number) => {
      for (let step = 0; step < 80; step++) {
        const delta = goal - Number((node as HTMLElement).dataset[axis]);
        if (Math.abs(delta) < 5) return;
        const direction = axis === 'x' ? (delta > 0 ? 'right' : 'left') : (delta > 0 ? 'down' : 'up');
        document.querySelector<HTMLButtonElement>('[data-direction="' + direction + '"]')!.click();
      }
      throw Error('Posto inacessível');
    };
    walk('y', 197);
    walk('x', 90 + station * 112);
    walk('y', (station + Math.floor(index / 5)) % 2 === 0 ? 173 : 216);
  });
  await page.locator('.world-interact').click();
  await expect(page.locator('.question-view')).toBeVisible();
}
