import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
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
