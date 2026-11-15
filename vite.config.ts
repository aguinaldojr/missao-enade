import { defineConfig } from 'vite';
import { gameConfig } from './src/config/game.ts';

function htmlText(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

export function normalizeBasePath(value: string | undefined): string {
  const candidate = value?.trim() || '/';
  if (candidate === '/') return '/';
  if (!/^\/[A-Za-z0-9._-]+\/?$/.test(candidate)) {
    throw new Error('VITE_BASE_PATH deve usar o formato /nome-do-repositorio/.');
  }
  return candidate.endsWith('/') ? candidate : candidate + '/';
}

export default defineConfig({
  // Desenvolvimento e builds locais usam a raiz. O workflow informa o
  // subdiretório do repositório sem fixar conta ou nome neste arquivo.
  base: normalizeBasePath(process.env.VITE_BASE_PATH),
  plugins: [{
    name: 'game-identity',
    transformIndexHtml: (html) => html
      .replaceAll('__GAME_NAME__', htmlText(gameConfig.name))
      .replaceAll('__GAME_DESCRIPTION__', htmlText(gameConfig.description))
      .replaceAll('__GAME_NOSCRIPT__', htmlText(gameConfig.noscript)),
  }],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: 'phaser', test: /node_modules[\\/]phaser/ }],
        },
      },
    },
    // O motor Phaser local é um único chunk; o tamanho gzip é registrado no build.
    chunkSizeWarningLimit: 1600,
  },
});
