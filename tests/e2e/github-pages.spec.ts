import { expect, test } from '@playwright/test';

const requestedBase = process.env.VITE_BASE_PATH?.trim() || '/';
const expectedBase = requestedBase === '/' ? '/' : (requestedBase.endsWith('/') ? requestedBase : requestedBase + '/');

test('documento e recursos respeitam o base path e recarregam sem 404', async ({ page }) => {
  const notFound: string[] = [];
  page.on('response', (response) => {
    if (response.status() === 404) notFound.push(response.url());
  });

  await page.goto('./');
  await expect(page).toHaveURL((url) => url.pathname === expectedBase);
  await expect(page.locator('canvas')).toBeVisible();
  const resourcePaths = await page.locator('script[src], link[href]').evaluateAll((nodes) => nodes.map((node) => {
    const element = node as HTMLScriptElement | HTMLLinkElement;
    return new URL(element.getAttribute('src') ?? element.getAttribute('href')!, document.baseURI).pathname;
  }));
  expect(resourcePaths.length).toBeGreaterThan(1);
  expect(resourcePaths.every((path) => path.startsWith(expectedBase))).toBe(true);

  await page.reload();
  await expect(page).toHaveURL((url) => url.pathname === expectedBase);
  await expect(page.getByRole('button', { name: 'Iniciar missão' })).toBeVisible();
  expect(notFound).toEqual([]);
});
