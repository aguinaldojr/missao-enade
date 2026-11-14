import { preview } from 'vite';

/**
 * Mantém o servidor auxiliar no mesmo processo do runner. No Windows, o
 * webServer baseado em comando deixava o Playwright aguardando o encerramento
 * do processo-filho mesmo depois de todos os casos terminarem.
 */
export default async function globalSetup(): Promise<() => Promise<void>> {
  const server = await preview({
    preview: { host: '127.0.0.1', port: 4173, strictPort: true },
    logLevel: 'warn',
  });

  return () => new Promise<void>((resolve, reject) => {
    server.httpServer.close((error) => error ? reject(error) : resolve());
  });
}
