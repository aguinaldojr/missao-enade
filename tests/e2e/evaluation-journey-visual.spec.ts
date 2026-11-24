import { expect, test } from '@playwright/test';
import legacyQuestions from '../../src/content/questions/central-nexo.json' with { type: 'json' };
import provisionalQuestions from '../../src/content/questions/enade-2026-provisional.json' with { type: 'json' };

const allQuestions = [...legacyQuestions.questions, ...provisionalQuestions.questions];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const now = '2026-11-23T12:00:00.000Z';
    localStorage.setItem('n9:player-profile:v1', JSON.stringify({
      schemaVersion: 1,
      activePlayerId: 'verified-TESTESIP01',
      players: [{
        id: 'verified-TESTESIP01', nickname: 'Aluno Teste 01', academicId: 'TESTESIP01',
        fullName: 'Aluno Teste SI Presencial', course: 'SI', modality: 'PRESENCIAL', role: 'student',
        publicCode: 'N9-TESTE001', verificationToken: 'token-verificado-para-teste-e2e', rankingEligible: true,
        createdAt: now, lastUsedAt: now,
      }],
    }));
  });
});

test('apresenta rota e portal narrativo da avaliação sem rolagem horizontal', async ({ page }, info) => {
  await page.goto('./');
  await page.getByRole('button', { name: 'Jogar Jornada N9' }).click();
  const continuePlayer = page.getByRole('button', { name: 'Continuar com este jogador' });
  if (await continuePlayer.isVisible().catch(() => false)) await continuePlayer.click();
  await page.getByRole('button', { name: 'Entrar na Jornada N9' }).click();
  await expect(page.getByRole('heading', { name: 'Base N9', exact: true })).toBeVisible();
  await page.locator('.world-interact').click();
  await expect(page.getByRole('heading', { name: 'Rota da Jornada N9' })).toBeVisible();
  await expect(page.locator('.journey-phase-step')).toHaveCount(5);
  await page.locator('.world-interact').click();
  await expect(page.locator('.evaluation-gate-hero')).toBeVisible();
  await expect(page.locator('.evaluation-gate-state')).toHaveText('PASSAGEM BLOQUEADA');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: info.outputPath('portal-jornada-n9.png'), fullPage: true });
  for (const [target, id] of ['energia', 'inicializar', 'sensores', 'rota', 'projetar'].entries()) {
    await page.locator('[data-block-id="' + id + '"]').evaluate((node, position) => {
      const up = node.querySelector<HTMLButtonElement>('[data-offset="-1"]')!;
      for (let move = Array.from(node.parentElement!.children).indexOf(node) - position; move > 0; move -= 1) up.click();
    }, target);
  }
  await page.getByRole('button', { name: 'Validar sequência' }).click();
  await page.getByRole('button', { name: 'Voltar à rota liberada' }).click();
  await page.locator('.world-position').evaluate(() => {
    const right = document.querySelector<HTMLButtonElement>('[data-direction="right"]')!;
    for (let step = 0; step < 8; step += 1) right.click();
  });
  await page.locator('.world-interact').click();
  await expect(page.locator('.journey-guide')).toContainText('Siga até o Posto 1');
  await expect(page.locator('.journey-room-step[data-state="active"]')).toHaveText('1');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: info.outputPath('fase-1-jornada-n9.png'), fullPage: true });
  await page.locator('.world-position').evaluate(() => {
    const up = document.querySelector<HTMLButtonElement>('[data-direction="up"]')!;
    up.click(); up.click();
  });
  await page.locator('.world-interact').click();
  await expect(page.locator('.journey-question-scene')).toContainText('FASE 1 · POSTO 1');
  await expect(page.locator('.journey-question-character')).toHaveCount(1);
  await expect(page.locator('.stage--question > .visual-panel')).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: info.outputPath('questao-jornada-n9.png'), fullPage: true });
  const questionId = await page.locator('.question-view').getAttribute('data-question-id');
  const question = allQuestions.find((candidate) => candidate.id === questionId)!;
  await page.locator('input[value="' + question.correctOptionId + '"]').check();
  await page.getByRole('button', { name: 'Confirmar resposta' }).click();
  await expect(page.locator('.question-view')).toHaveAttribute('data-journey-state', 'correct');
  await expect(page.locator('.journey-answer-outcome')).toContainText('Posto concluído');
  await page.screenshot({ path: info.outputPath('acerto-jornada-n9.png'), fullPage: true });
});
