import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const workflow = readFileSync(resolve('.github/workflows/deploy-pages.yml'), 'utf8');
const gitignore = readFileSync(resolve('.gitignore'), 'utf8');

describe('preparação de publicação', () => {
  it('mantém o deploy exclusivamente manual e com permissões mínimas', () => {
    expect(workflow).toMatch(/^on:\r?\n {2}workflow_dispatch:\s*$/m);
    expect(workflow).not.toMatch(/^\s+push:/m);
    expect(workflow).toContain('contents: read');
    expect(workflow).toContain('pages: write');
    expect(workflow).toContain('id-token: write');
    expect(workflow).toContain('name: github-pages');
  });

  it('instala pelo lockfile, valida, compila com base dinâmica e envia somente dist', () => {
    expect(workflow).toContain('run: npm ci');
    expect(workflow).toContain('run: npm run lint');
    expect(workflow).toContain('run: npm test');
    expect(workflow).toContain('VITE_BASE_PATH: /${{ github.event.repository.name }}/');
    expect(workflow).toContain('run: npm run build');
    expect(workflow).toContain('uses: actions/configure-pages@v5');
    expect(workflow).toContain('uses: actions/upload-pages-artifact@v4');
    expect(workflow).toContain('uses: actions/deploy-pages@v4');
    expect(workflow).toMatch(/with:\r?\n\s+path: dist/);
  });

  it('não versiona build, dependências, relatórios, temporários ou arquivos de ambiente', () => {
    for (const entry of ['node_modules/', 'dist/', 'coverage/', 'playwright-report/', 'test-results/', '.env', '.env.*', '*.log', '*.tmp']) {
      expect(gitignore).toContain(entry);
    }
  });
});
