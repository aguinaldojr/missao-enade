import { expect, test, type Page, type TestInfo } from '@playwright/test';
import catalog from '../../src/content/questions/enade-2026-provisional.json' with { type: 'json' };
import routes from '../../src/content/mission-routes.json' with { type: 'json' };

const PROFILE_KEY = 'n9:player-profile:v1';
const RANKING_KEY = 'n9:leaderboard:v1';

async function press(page: Page, name: string, info: TestInfo) {
  const control = page.getByRole('button', { name });
  if (info.project.name === 'mobile') await control.tap(); else await control.click();
}

async function finishMission(page: Page, info: TestInfo) {
  const questions = routes.CC[0]!.map((id) => catalog.questions.find((question) => question.id === id)!);
  for (const [index, question] of questions.entries()) {
    await page.locator('input[name="answer"][value="' + question.correctOptionId + '"]').check();
    await press(page, 'Confirmar resposta', info);
    await press(page, index === 24 ? 'Ver relatório da missão' : 'Próximo desafio', info);
  }
}

test('perfil, ranking, persistência, troca e exclusão confirmada permanecem locais', async ({ page }, info) => {
  const external: string[] = [];
  page.on('request', (request) => {
    if (!request.url().startsWith('http://127.0.0.1:4173') && !request.url().startsWith('data:')) external.push(request.url());
  });
  await page.goto('./');
  await press(page, 'Iniciar missão', info);
  await expect(page.getByRole('heading', { name: 'Quem está jogando?' })).toBeFocused();
  await expect(page.getByText('Os dados deste perfil ficam somente neste navegador.')).toBeVisible();
  const nickname = page.getByLabel('Apelido');
  await nickname.fill('ab');
  await press(page, 'Criar jogador', info);
  await expect(page.getByRole('heading', { name: 'Quem está jogando?' })).toBeVisible();
  expect(await page.evaluate((key) => localStorage.getItem(key), PROFILE_KEY)).toBeNull();
  await nickname.fill('  Nina   Byte  ');
  await press(page, 'Criar jogador', info);
  await expect(page.getByText('Jogador atual: Nina Byte', { exact: true })).toBeVisible();
  await press(page, 'Continuar com este jogador', info);
  await page.locator('input[name="course"][value="CC"]').check();
  await page.locator('input[name="mission"][value="journey-25"]').check();
  await press(page, 'Entrar na Central Nexo', info);
  await press(page, 'Iniciar missão selecionada', info);
  expect(await page.evaluate((key) => localStorage.getItem(key), RANKING_KEY)).toBeNull();
  await finishMission(page, info);
  await expect(page.getByRole('heading', { name: 'Ranking desta missão' })).toBeVisible();
  await expect(page.locator('tr[aria-current="true"]')).toContainText('Nina Byte (você)');
  await expect(page.locator('tr[aria-current="true"]')).toContainText('1000 / 1000');
  const saved = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), RANKING_KEY);
  expect(saved.entries).toHaveLength(1);
  expect(saved.entries[0]).toMatchObject({ nickname: 'Nina Byte', course: 'CC', questionCount: 25,
    correctCount: 25, score: 2500, maxScore: 2500, rankingScore: 1000, collectionId: 'enade-2026' });

  await press(page, 'Voltar ao menu', info);
  await page.reload();
  await expect(page.getByText('Jogador atual: Nina Byte', { exact: true })).toBeVisible();
  await press(page, 'Ranking', info);
  await page.getByLabel('Tamanho da missão').selectOption('25');
  await expect(page.getByRole('table')).toContainText('Nina Byte (você)');
  const rankingRegion = page.getByRole('region', { name: 'Tabela do ranking com rolagem horizontal' });
  await rankingRegion.focus();
  await expect(rankingRegion).toBeFocused();
  await press(page, '← Voltar', info);
  await press(page, 'Trocar jogador', info);
  await page.getByLabel('Apelido').fill('Caio');
  await press(page, 'Criar jogador', info);
  await press(page, 'Continuar com este jogador', info);
  await expect(page.getByText('Jogador atual: Caio', { exact: true })).toBeVisible();

  await press(page, 'Ranking', info);
  await page.getByLabel('Tamanho da missão').selectOption('25');
  await press(page, 'Excluir dados locais do ranking', info);
  const dialog = page.getByRole('alertdialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading')).toBeFocused();
  await press(page, 'Cancelar', info);
  await expect(page.getByRole('table')).toContainText('Nina Byte');
  await press(page, 'Excluir dados locais do ranking', info);
  await press(page, 'Sim, excluir ranking', info);
  await expect(page.getByText('Ainda não há resultados concluídos', { exact: false })).toBeVisible();
  expect(await page.evaluate((key) => localStorage.getItem(key), RANKING_KEY)).toBeNull();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!).players.length, PROFILE_KEY)).toBe(2);
  expect(external).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('criação e início funcionam somente com teclado e semântica nativa', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('heading', { level: 1 }).focus();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Iniciar missão' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Quem está jogando?' })).toBeFocused();
  await page.keyboard.press('Tab');
  const input = page.getByRole('textbox', { name: 'Apelido' });
  await expect(input).toBeFocused();
  await page.keyboard.type('Tecla N9');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Criar jogador' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByText('Jogador atual: Tecla N9', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Continuar com este jogador' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Qual é o seu curso?' })).toBeFocused();
  await expect(page.getByRole('radio')).toHaveCount(6);
  await expect(page.locator('fieldset legend')).toHaveCount(2);
});
