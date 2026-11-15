import { defineConfig } from '@playwright/test';

const requestedBase = process.env.VITE_BASE_PATH?.trim() || '/';
const basePath = requestedBase === '/' ? '/' : (requestedBase.endsWith('/') ? requestedBase : requestedBase + '/');

export default defineConfig({
  testDir: './tests/e2e',
  globalSetup: './tests/e2e/global-setup.ts',
  fullyParallel: false,
  workers: 1,
  // Fluxos completos com Phaser podem ficar mais lentos em runners modestos.
  // As expectativas continuam com seus timeouts curtos e específicos.
  timeout: 60_000,
  use: { baseURL: 'http://127.0.0.1:4173' + basePath, trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { browserName: 'chromium', viewport: { width: 1366, height: 900 } } },
    { name: 'mobile', use: { browserName: 'chromium', viewport: { width: 360, height: 800 }, isMobile: true, hasTouch: true } },
  ],
});
