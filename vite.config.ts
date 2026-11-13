import { defineConfig } from 'vite';
import { gameConfig } from './src/config/game.ts';

function htmlText(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

export default defineConfig({
  base: './',
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
