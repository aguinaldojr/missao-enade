import { expect, test, type Page } from '@playwright/test';

const courses = [
  ['CC', 'Ciência da Computação'],
  ['SI', 'Sistemas de Informação'],
  ['TADS', 'Tecnologia em Análise e Desenvolvimento de Sistemas'],
  ['TGTI', 'Tecnologia em Gestão da Tecnologia da Informação'],
  ['TRC', 'Tecnologia em Redes de Computadores'],
] as const;

async function expectReflow(page: Page): Promise<void> {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
}

async function startWithPlayer(page: Page, nickname: string): Promise<void> {
  await page.getByRole('button', { name: 'Iniciar missão' }).click();
  if (await page.getByRole('heading', { name: 'Quem está jogando?' }).isVisible().catch(() => false)) {
    await page.getByLabel('Apelido').fill(nickname);
    await page.getByRole('button', { name: 'Criar jogador' }).click();
    await page.getByRole('button', { name: 'Continuar com este jogador' }).click();
  }
}

for (const [id, name] of courses) {
  test('jornada com ' + id, async ({ page }, info) => {
    const errors: string[] = [];
    const external: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('request', (request) => {
      if (!request.url().startsWith('http://127.0.0.1:4173') && !request.url().startsWith('data:')) external.push(request.url());
    });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Conhecimento que conecta.');
    await expect(page.locator('canvas')).toBeVisible();
    // Mais de uma cor comprova que o cenário foi desenhado, além do fundo.
    await expect.poll(() => page.locator('canvas').evaluate((node) => {
      const canvas = node as HTMLCanvasElement;
      const ctx = canvas.getContext('2d')!;
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const colors = new Set<string>();
      for (let i = 0; i < pixels.length; i += 4) colors.add(pixels[i] + ',' + pixels[i + 1] + ',' + pixels[i + 2]);
      return colors.size;
    })).toBeGreaterThan(5);
    await expectReflow(page);
    if (id === 'CC') await page.screenshot({ path: info.outputPath('inicio.png'), fullPage: true });
    await startWithPlayer(page, 'Jogador ' + id);
    const enter = page.getByRole('button', { name: 'Entrar na Central Nexo' });
    await expect(enter).toBeDisabled();
    await page.getByRole('radio', { name: id + ' ' + name, exact: true }).check();
    await expect(enter).toBeEnabled();
    await expectReflow(page);
    if (id === 'CC') await page.screenshot({ path: info.outputPath('selecao.png'), fullPage: true });
    await enter.click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Base N9');
    await expect(page.locator('.selected-name')).toHaveText(name);
    await expect(page.getByRole('heading', { level: 1 })).toBeInViewport();
    await expect(page.getByText('COLEÇÃO PROVISÓRIA', { exact: true })).toBeVisible();
    await expectReflow(page);
    if (id === 'CC') await page.screenshot({ path: info.outputPath('central.png'), fullPage: true });
    await page.getByRole('button', { name: 'Trocar curso' }).click();
    await expect(page.getByRole('radio', { name: id + ' ' + name, exact: true })).toBeChecked();
    await page.getByRole('radio', { name: 'SI Sistemas de Informação', exact: true }).check();
    await page.getByRole('button', { name: 'Entrar na Central Nexo' }).click();
    await expect(page.locator('.selected-name')).toHaveText('Sistemas de Informação');
    await page.setViewportSize({ width: 320, height: 740 });
    await expectReflow(page);
    await page.setViewportSize({ width: 800, height: 360 });
    await expectReflow(page);
    await expect(page.locator('.selected-name')).toHaveText('Sistemas de Informação');
    const stored = await page.evaluate(() => ({ local: Object.keys(localStorage), session: Object.keys(sessionStorage) }));
    expect(stored).toEqual({ local: ['n9:player-profile:v1'], session: [] });
    await page.reload();
    await startWithPlayer(page, 'Jogador ' + id);
    await expect(page.locator('input[name="course"]:checked')).toHaveCount(0);
    await expect(page.locator('input[name="mission"]:checked')).toHaveValue('special');
    await expect(page.getByRole('button', { name: 'Entrar na Central Nexo' })).toBeDisabled();
    expect(errors).toEqual([]);
    expect(external).toEqual([]);
  });
}

test('navegação completa por teclado e foco entre telas', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('n9:player-profile:v1', JSON.stringify({
    schemaVersion: 1, activePlayerId: 'player-keyboard', players: [{ id: 'player-keyboard', nickname: 'Tecladista',
      createdAt: '2026-11-14T12:00:00.000Z', lastUsedAt: '2026-11-14T12:00:00.000Z' }],
  })));
  await page.goto('/');
  await page.getByRole('heading', { level: 1 }).focus();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Iniciar missão' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Qual é o seu curso?' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('radio', { name: 'CC Ciência da Computação', exact: true })).toBeFocused();
  await page.keyboard.press('Space');
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('radio', { name: 'SI Sistemas de Informação', exact: true })).toBeChecked();
  await page.keyboard.press('Tab');
  await expect(page.locator('input[name="mission"][value="special"]')).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('input[name="mission"][value="arena"]')).toBeChecked();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Entrar na Central Nexo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Base N9' })).toBeFocused();
});

test('fluxo HTML disponível se o motor gráfico não carregar', async ({ page }) => {
  await page.route('**/assets/phaser-*.js', (route) => route.abort());
  await page.goto('/');
  await expect(page.getByText('Ambientação indisponível.', { exact: false })).toBeVisible();
  await startWithPlayer(page, 'Jogador TRC');
  await page.getByRole('radio', { name: 'TRC Tecnologia em Redes de Computadores', exact: true }).check();
  await page.getByRole('button', { name: 'Entrar na Central Nexo' }).click();
  await expect(page.locator('.selected-name')).toHaveText('Tecnologia em Redes de Computadores');
});
