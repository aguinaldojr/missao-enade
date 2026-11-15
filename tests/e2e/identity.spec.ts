import { expect, test } from '@playwright/test';

const legacyKey = 'missao-enade:example-result:v1';
const savedReport = {
  schemaVersion: 1, contentVersion: 'example-1', mode: 'example', phaseId: 'FASE-EXEMPLO-01',
  attemptId: 'antes-da-identidade-nexus', course: 'SI', total: 10, correctCount: 8, score: 800,
  completedAt: '2026-11-13T12:00:00.000Z',
};

test('nova identidade preserva relatório salvo na chave anterior', async ({ page }) => {
  await page.addInitScript(({ key, report }) => {
    localStorage.setItem(key, JSON.stringify(report));
    localStorage.setItem('outro-aplicativo', 'preservar');
  }, { key: legacyKey, report: savedReport });
  await page.goto('./');
  await expect(page.locator('.wordmark strong')).toHaveText('N9 — Jornada Digital');
  await expect(page.locator('.brand-mark')).toHaveText('N9');
  expect(await page.locator('body').innerText()).not.toMatch(/Nexus|produto oficial|slogan oficial/i);
  await expect(page).toHaveTitle('N9 — Jornada Digital');
  await expect(page.locator('.last-result h2')).toHaveText('Último relatório da missão salvo');
  await expect(page.locator('.last-result')).toContainText('8 de 10 acertos · 800 pontos');
  expect(await page.locator('body').innerText()).not.toMatch(/ENADE|simulado|preparação para prova/i);
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)!), legacyKey)).toEqual(savedReport);
  expect(await page.evaluate(() => localStorage.getItem('outro-aplicativo'))).toBe('preservar');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test.describe('HTML inicial sem JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('usa a identidade centralizada no título, descrição e aviso', async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle('N9 — Jornada Digital');
    expect(await page.locator('noscript').evaluate((node) => node.textContent)).toContain('N9 — Jornada Digital');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /competências em tecnologia/);
    expect(await page.locator('body').innerText()).not.toMatch(/ENADE/i);
  });
});
