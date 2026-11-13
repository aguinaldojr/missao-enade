import { expect, test, type Page, type TestInfo } from '@playwright/test';
import catalog from '../../src/content/questions/central-nexo.json' with { type: 'json' };

const RESULT_KEY = 'missao-enade:example-result:v1';
const courseIds = ['CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;

async function press(page: Page, name: string, info: TestInfo) {
  const control = page.getByRole('button', { name, exact: true });
  if (info.project.name === 'mobile') await control.tap();
  else await control.click();
}

async function startPhase(page: Page, course: string, info: TestInfo) {
  await page.getByRole('button', { name: 'Iniciar missão' }).click();
  await page.locator('input[name="course"][value="' + course + '"]').check();
  await press(page, 'Entrar na Central Nexo', info);
  await press(page, 'Jogar missão de exemplo', info);
}

async function reflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
}

for (const course of courseIds) {
  test('dez exemplos filtrados e resultado persistido: ' + course, async ({ page }, info) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    await startPhase(page, course, info);
    const questions = catalog.questions.filter((question) => question.courses.includes(course));
    const expectedCorrect = course === 'CC' ? 10 : course === 'SI' ? 0 : 8;
    for (const [index, question] of questions.entries()) {
      await expect(page.getByText('Desafio ' + (index + 1) + ' de 10', { exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(question.prompt);
      await expect(page.getByRole('radio')).toHaveCount(5);
      expect(await page.locator('body').innerText()).not.toMatch(/\bENADE\b|simulado|preparação para prova/i);
      await expect(page).toHaveTitle(/N9 — Jornada Digital/);
      await expect(page.locator('.example-warning')).toContainText('DESAFIO FICTÍCIO');
      await expect(page.locator('.feedback')).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'Confirmar resposta' })).toBeDisabled();
      if (index === 0) {
        if (course === 'CC') await page.screenshot({ path: info.outputPath('questao.png'), fullPage: true });
        const viewport = page.viewportSize()!;
        await page.setViewportSize({ width: 320, height: 740 });
        await reflow(page);
        await page.setViewportSize(viewport);
      }
      const option = index < expectedCorrect ? question.correctOptionId : question.options.find((entry) => entry.id !== question.correctOptionId)!.id;
      const label = page.locator('.answer-card').filter({ has: page.locator('input[value="' + option + '"]') });
      if (info.project.name === 'mobile') await label.tap(); else await label.click();
      await expect(page.getByRole('radio', { checked: true })).toHaveCount(1);
      const confirm = page.getByRole('button', { name: 'Confirmar resposta' });
      // Dois eventos no mesmo controle não podem confirmar duas respostas.
      await confirm.evaluate((node) => { (node as HTMLButtonElement).click(); (node as HTMLButtonElement).click(); });
      await expect(page.getByRole('radio', { disabled: true })).toHaveCount(5);
      await expect(page.locator('.feedback-heading')).toHaveText(index < expectedCorrect ? 'Resposta correta!' : 'Resposta incorreta.');
      await expect(page.locator('.correct-answer')).toContainText('Alternativa correta: ' + question.correctOptionId);
      await expect(page.locator('.explanation')).toHaveText(question.explanation);
      await expect(page.locator('.score')).toHaveText('Pontuação: ' + Math.min(index + 1, expectedCorrect) * 100);
      await expect(page.locator('.feedback-heading')).toBeFocused();
      await reflow(page);
      if (index === 0 && course === 'CC') await page.screenshot({ path: info.outputPath('feedback.png'), fullPage: true });
      expect(await page.evaluate((key) => localStorage.getItem(key), RESULT_KEY)).toBeNull();
      await press(page, index === 9 ? 'Ver relatório da missão' : 'Próximo desafio', info);
    }
    await expect(page.getByRole('heading', { name: 'Relatório da missão' })).toBeVisible();
    await expect(page.locator('.result-numbers')).toContainText(expectedCorrect * 100 + ' de 1.000');
    await expect(page.getByRole('status').filter({ hasText: 'Relatório da missão salvo neste navegador.' })).toBeVisible();
    const stored = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), RESULT_KEY);
    expect(stored).toMatchObject({ schemaVersion: 1, mode: 'example', course, total: 10, score: expectedCorrect * 100, correctCount: expectedCorrect });
    if (course === 'CC') await page.screenshot({ path: info.outputPath('resultado.png'), fullPage: true });
    await press(page, 'Voltar à Base N9', info);
    await expect(page.getByRole('heading', { name: 'Base N9', exact: true })).toBeVisible();
    await expect(page.locator('.world-position')).toHaveAttribute('data-x', '160');
    await expect(page.locator('.world-position')).toHaveAttribute('data-y', '184');
    await expect(page.locator('.world-door')).toHaveText('Porta: liberada');
    expect(await page.evaluate(() => JSON.parse(localStorage.getItem('n9:exploration:v1')!))).toMatchObject({
      missionStatus: 'completed', doorUnlocked: true, position: { x: 160, y: 184 },
    });
    await press(page, 'Voltar ao menu', info);
    await expect(page.locator('.last-result')).toContainText(expectedCorrect * 100 + ' pontos');
    await page.reload();
    await expect(page.locator('.last-result')).toContainText(expectedCorrect + ' de 10 acertos');
    await startPhase(page, course, info);
    await expect(page.locator('.score')).toHaveText('Pontuação: 0');
    await press(page, 'Voltar ao menu', info);
    expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).attemptId, RESULT_KEY)).toBe(stored.attemptId);
    expect(errors).toEqual([]);
  });
}

test('fluxo de resposta e avanço por teclado', async ({ page }, info) => {
  await page.goto('/');
  await startPhase(page, 'CC', info);
  await page.getByRole('heading', { level: 1 }).focus();
  await page.keyboard.press('Tab');
  await expect(page.locator('input[name="answer"][value="A"]')).toBeFocused();
  await page.keyboard.press('Space');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('input[value="B"]')).toBeChecked();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Confirmar resposta' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('.feedback-heading')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('details summary')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Próximo desafio' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByText('Desafio 2 de 10', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused();
  await press(page, 'Voltar ao menu', info);
  await page.reload();
  await expect(page.locator('.last-result')).toHaveCount(0);
});

test('LocalStorage bloqueado não impede conclusão', async ({ page }, info) => {
  await page.addInitScript(() => { Storage.prototype.setItem = () => { throw new Error('QuotaExceededError'); }; });
  await page.goto('/');
  await startPhase(page, 'CC', info);
  for (let index = 0; index < 10; index++) {
    await page.getByRole('radio').first().check();
    await press(page, 'Confirmar resposta', info);
    await press(page, index === 9 ? 'Ver relatório da missão' : 'Próximo desafio', info);
  }
  await expect(page.getByRole('heading', { name: 'Relatório da missão' })).toBeVisible();
  await expect(page.locator('.save-message')).toContainText('Relatório da missão não salvo');
  await press(page, 'Tentar salvar novamente', info);
  await expect(page.locator('.save-message')).toContainText('Relatório da missão não salvo');
  await press(page, 'Voltar ao menu', info);
});

test('resultado corrompido é ignorado sem travar a navegação', async ({ page }, info) => {
  await page.addInitScript((key) => { localStorage.setItem(key, '{'); }, RESULT_KEY);
  await page.goto('/');
  await expect(page.getByText('O relatório da missão local é inválido', { exact: false })).toBeVisible();
  await startPhase(page, 'TRC', info);
  await expect(page.getByText('Desafio 1 de 10', { exact: true })).toBeVisible();
  await press(page, 'Voltar ao menu', info);
});

test('fase inicia mesmo sem randomUUID disponível', async ({ page }, info) => {
  await page.addInitScript(() => { Object.defineProperty(window.crypto, 'randomUUID', { value: undefined }); });
  await page.goto('/');
  await startPhase(page, 'TRC', info);
  await expect(page.getByText('Desafio 1 de 10', { exact: true })).toBeVisible();
  await press(page, 'Voltar ao menu', info);
});
