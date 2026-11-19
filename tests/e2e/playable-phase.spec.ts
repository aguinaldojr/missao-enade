import { expect, test, type Page, type TestInfo } from '@playwright/test';
import catalog from '../../src/content/questions/enade-2026-provisional.json' with { type: 'json' };
import routes from '../../src/content/mission-routes.json' with { type: 'json' };

const RESULT_KEY = 'n9:mission-result:v1';
const courseIds = ['CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;

async function press(page: Page, name: string, info: TestInfo) {
  const control = page.getByRole('button', { name, exact: true });
  if (info.project.name === 'mobile') await control.tap();
  else await control.click();
}

async function startPhase(page: Page, course: string, info: TestInfo, mission = 'journey-25') {
  await page.getByRole('button', { name: 'Iniciar missão' }).click();
  if (await page.getByRole('heading', { name: 'Quem está jogando?' }).isVisible().catch(() => false)) {
    await page.getByLabel('Apelido').fill('Jogador ' + course);
    await page.getByRole('button', { name: 'Criar jogador' }).click();
    await page.getByRole('button', { name: 'Continuar com este jogador' }).click();
  }
  await page.locator('input[name="course"][value="' + course + '"]').check();
  await page.locator('input[name="mission"][value="' + mission + '"]').check();
  await press(page, 'Entrar na Central Nexo', info);
  await press(page, 'Iniciar missão selecionada', info);
}

async function reflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
}

for (const course of courseIds) {
  test('missão padrão filtrada e resultado persistido: ' + course, async ({ page }, info) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('./');
    await startPhase(page, course, info);
    const questions = routes[course as keyof typeof routes][0]!.map((id) => catalog.questions.find((question) => question.id === id)!);
    const expectedCorrect = 25;
    for (const [index, question] of questions.entries()) {
      await expect(page.getByText('Desafio ' + (index + 1) + ' de 25', { exact: true })).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(question.prompt);
      await expect(page.getByRole('radio')).toHaveCount(5);
      await expect(page.locator('.question-view')).toHaveAttribute('data-question-id', question.id);
      if (question.id === 'E26-Q-SI-02') {
        await expect(page.locator('.question-code')).toHaveCount(2);
        await expect(page.locator('.question-code-content').first()).toContainText('CREATE TABLE chamados');
        await expect(page.locator('.question-data-table caption')).toHaveText('Dados sintéticos disponíveis');
        await expect(page.locator('.question-data-table tbody tr')).toHaveCount(5);
        await expect(page.locator('.question-table-scroll')).toHaveAttribute('role', 'region');
        await page.screenshot({ path: info.outputPath('si-02-layout.png'), fullPage: true });
      }
      if (question.id === 'E26-Q-SI-05') {
        await expect(page.locator('.question-diagram-node')).toHaveCount(3);
        await expect(page.locator('.question-diagram-description'))
          .toContainText('Cada ATUAÇÃO pertence obrigatoriamente a um analista e a um chamado.');
        await expect(page.locator('.question-diagram-visual')).toHaveAttribute('aria-hidden', 'true');
        await page.screenshot({ path: info.outputPath('si-05-layout.png'), fullPage: true });
      }
      expect(await page.locator('body').innerText()).not.toMatch(/\bENADE\b|simulado|preparação para prova/i);
      await expect(page).toHaveTitle(/N9 — Jornada Digital/);
      await expect(page.locator('.example-warning')).toContainText('CONTEÚDO EXPERIMENTAL EM REVISÃO EDITORIAL');
      await expect(page.locator('.feedback')).toHaveCount(0);
      await expect(page.getByRole('button', { name: 'Confirmar resposta' })).toBeDisabled();
      if (index === 0) {
        if (course === 'CC') await page.screenshot({ path: info.outputPath('questao.png'), fullPage: true });
        const viewport = page.viewportSize()!;
        await page.setViewportSize({ width: 320, height: 740 });
        await reflow(page);
        await page.setViewportSize(viewport);
      }
      const option = question.correctOptionId;
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
      await press(page, index === 24 ? 'Ver relatório da missão' : 'Próximo desafio', info);
    }
    await expect(page.getByRole('heading', { name: 'Relatório da missão' })).toBeVisible();
    await expect(page.locator('.result-numbers')).toContainText(expectedCorrect * 100 + ' de 2500');
    await expect(page.getByRole('status').filter({ hasText: 'Relatório da missão salvo neste navegador.' })).toBeVisible();
    const stored = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), RESULT_KEY);
    expect(stored).toMatchObject({ schemaVersion: 1, mode: 'provisional', missionId: 'journey-25', course, total: 25,
      score: expectedCorrect * 100, correctCount: expectedCorrect });
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
    await expect(page.locator('.last-result')).toContainText(expectedCorrect + ' de 25 acertos');
    await startPhase(page, course, info);
    await expect(page.locator('.score')).toHaveText('Pontuação: 0');
    await press(page, 'Voltar ao menu', info);
    expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).attemptId, RESULT_KEY)).toBe(stored.attemptId);
    expect(errors).toEqual([]);
  });
}

test('a matriz necessária de SI-17 aparece com semântica e rolagem', async ({ page }, info) => {
  await page.goto('./');
  await startPhase(page, 'SI', info);
  for (let index = 0; index < 6; index += 1) {
    const view = page.locator('.question-view');
    const id = await view.getAttribute('data-question-id');
    if (id === 'E26-Q-SI-17') {
      await expect(page.locator('.question-data-table caption')).toHaveText('Objeto visual proposto — matriz do piloto');
      await expect(page.locator('.question-data-table thead th')).toHaveCount(4);
      await expect(page.locator('.question-data-table tbody tr')).toHaveCount(3);
      await expect(page.locator('.question-data-table tbody')).toContainText('Não marcou como urgente');
      await expect(page.locator('.question-table-scroll')).toHaveAttribute('role', 'region');
      await reflow(page);
      return;
    }
    const question = catalog.questions.find((candidate) => candidate.id === id)!;
    await page.locator('input[name="answer"][value="' + question.correctOptionId + '"]').check();
    await press(page, 'Confirmar resposta', info);
    await press(page, 'Próximo desafio', info);
  }
  throw new Error('E26-Q-SI-17 não apareceu na posição prevista do roteiro SI-A.');
});

test('diagrama horizontal começa no primeiro símbolo e alcança o último', async ({ page }, info) => {
  await page.goto('./');
  await startPhase(page, 'CC', info);
  const first = catalog.questions.find((question) => question.id === 'E26-Q-COM-01')!;
  await page.locator('input[name="answer"][value="' + first.correctOptionId + '"]').check();
  await press(page, 'Confirmar resposta', info);
  await press(page, 'Próximo desafio', info);
  await expect(page.locator('.question-view')).toHaveAttribute('data-question-id', 'E26-Q-COM-02');
  await page.setViewportSize({ width: 620, height: 800 });
  const visual = page.locator('.question-diagram-visual');
  const initial = await visual.evaluate((node) => {
    node.scrollLeft = 0;
    const bounds = node.getBoundingClientRect();
    const firstNode = node.firstElementChild!.getBoundingClientRect();
    return { maxScroll: node.scrollWidth - node.clientWidth, containerLeft: bounds.left, firstLeft: firstNode.left };
  });
  expect(initial.maxScroll).toBeGreaterThan(0);
  expect(initial.firstLeft).toBeGreaterThanOrEqual(initial.containerLeft);
  await expect(visual.locator('.question-diagram-node').first()).toContainText('REGISTROS DO ATENDIMENTO');
  const final = await visual.evaluate((node) => {
    node.scrollLeft = node.scrollWidth;
    const bounds = node.getBoundingClientRect();
    const lastNode = node.lastElementChild!.getBoundingClientRect();
    return { containerRight: bounds.right, lastRight: lastNode.right };
  });
  expect(final.lastRight).toBeLessThanOrEqual(final.containerRight + 1);
  await expect(visual.locator('.question-diagram-node').last()).toContainText('MURAL PÚBLICO');
});

test('fluxo de resposta e avanço por teclado', async ({ page }, info) => {
  await page.goto('./');
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
  await expect(page.getByText('Desafio 2 de 25', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toBeFocused();
  await press(page, 'Voltar ao menu', info);
  await page.reload();
  await expect(page.locator('.last-result')).toHaveCount(0);
});

test('LocalStorage bloqueado não impede conclusão', async ({ page }, info) => {
  await page.addInitScript(() => { Storage.prototype.setItem = () => { throw new Error('QuotaExceededError'); }; });
  await page.goto('./');
  await startPhase(page, 'CC', info);
  for (let index = 0; index < 25; index++) {
    await page.getByRole('radio').first().check();
    await press(page, 'Confirmar resposta', info);
    await press(page, index === 24 ? 'Ver relatório da missão' : 'Próximo desafio', info);
  }
  await expect(page.getByRole('heading', { name: 'Relatório da missão' })).toBeVisible();
  await expect(page.locator('.save-message')).toContainText('Relatório da missão não salvo');
  await press(page, 'Tentar salvar novamente', info);
  await expect(page.locator('.save-message')).toContainText('Relatório da missão não salvo');
  await press(page, 'Voltar ao menu', info);
});

test('resultado corrompido é ignorado sem travar a navegação', async ({ page }, info) => {
  await page.addInitScript((key) => { localStorage.setItem(key, '{'); }, RESULT_KEY);
  await page.goto('./');
  await expect(page.getByText('O relatório da missão local é inválido', { exact: false })).toBeVisible();
  await startPhase(page, 'TRC', info);
  await expect(page.getByText('Desafio 1 de 25', { exact: true })).toBeVisible();
  await press(page, 'Voltar ao menu', info);
});

test('fase inicia mesmo sem randomUUID disponível', async ({ page }, info) => {
  await page.addInitScript(() => { Object.defineProperty(window.crypto, 'randomUUID', { value: undefined }); });
  await page.goto('./');
  await startPhase(page, 'TRC', info);
  await expect(page.getByText('Desafio 1 de 25', { exact: true })).toBeVisible();
  await press(page, 'Voltar ao menu', info);
});

test('as questões ajustadas exibem seus artefatos visuais na jornada de SI', async ({ page }, info) => {
  await page.goto('./');
  await startPhase(page, 'SI', info);
  const expected = new Map([
    ['E26-Q-COM-01', ['image']], ['E26-Q-COM-02', ['diagram']],
    ['E26-Q-COM-03', ['image']], ['E26-Q-COM-04', ['diagram']],
    ['E26-Q-COM-05', ['table']], ['E26-Q-COM-06', ['table', 'diagram']],
    ['E26-Q-COM-07', ['code', 'code']], ['E26-Q-COM-08', ['image']],
    ['E26-Q-COM-09', ['diagram', 'table']], ['E26-Q-COM-10', ['table']],
    ['E26-Q-SI-11', ['diagram']], ['E26-Q-SI-12', ['table']],
    ['E26-Q-SI-13', ['diagram', 'code']], ['E26-Q-SI-14', ['table']],
    ['E26-Q-SI-15', ['table', 'code']], ['E26-Q-SI-16', ['diagram', 'table']],
    ['E26-Q-SI-01', ['diagram']], ['E26-Q-SI-02', ['code', 'table', 'code']],
    ['E26-Q-SI-03', ['table', 'diagram']], ['E26-Q-SI-04', ['diagram']],
  ]);
  for (let index = 0; index < 25; index++) {
    const view = page.locator('.question-view');
    const id = await view.getAttribute('data-question-id');
    if (id && expected.has(id)) {
      const types = await page.locator('.question-presentation .question-resource').evaluateAll((nodes) =>
        nodes.map((node) => node.classList.contains('question-code') ? 'code' :
          node.classList.contains('question-table-resource') ? 'table' :
            node.classList.contains('question-diagram') ? 'diagram' : 'image'));
      expect(types).toEqual(expected.get(id));
      if (['E26-Q-COM-01', 'E26-Q-COM-03', 'E26-Q-COM-08', 'E26-Q-SI-07'].includes(id)) {
        if (id === 'E26-Q-SI-07') {
          await expect(page.locator('.question-resource-image')).toHaveAttribute('alt', /Alfa está em 100/);
        } else if (id === 'E26-Q-COM-03') {
          await expect(page.locator('.question-resource-image')).toHaveAttribute('alt', /Três campos aparecem sem informação/);
        } else {
          await expect(page.locator('.question-resource-image')).toHaveAttribute('alt', /Gráfico de barras|Diagrama de memória/);
        }
        await expect.poll(() => page.locator('.question-resource-image')
          .evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
      }
      if (['E26-Q-COM-01', 'E26-Q-COM-02', 'E26-Q-COM-03', 'E26-Q-COM-04',
        'E26-Q-COM-06', 'E26-Q-COM-08', 'E26-Q-COM-09',
        'E26-Q-SI-03', 'E26-Q-SI-11', 'E26-Q-SI-13', 'E26-Q-SI-15', 'E26-Q-SI-16'].includes(id)) {
        await page.screenshot({ path: info.outputPath(id.toLowerCase() + '-layout.png'), fullPage: true });
      }
      await reflow(page);
    }
    await page.getByRole('radio').first().check();
    await press(page, 'Confirmar resposta', info);
    await press(page, index === 24 ? 'Ver relatório da missão' : 'Próximo desafio', info);
  }
  await expect(page.getByRole('heading', { name: 'Relatório da missão' })).toBeVisible();
});
