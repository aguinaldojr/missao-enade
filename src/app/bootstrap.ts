import { GameSession, type Command } from './GameSession';
import { AppShell } from '../ui/AppShell';
import catalog from '../content/questions/central-nexo.json';
import { JsonContentRepository } from '../infrastructure/content/JsonContentRepository';
import { LocalStorageProgressRepository } from '../infrastructure/storage/LocalStorageProgressRepository';

export function bootstrap(root: HTMLElement): () => void {
  const session = new GameSession(new JsonContentRepository(catalog), new LocalStorageProgressRepository());
  const shell = new AppShell(root);
  let sceneDriver: { sync: () => void; destroy: () => void } | undefined;
  let disposed = false;

  const dispatch = (command: Command): void => {
    shell.render(session.dispatch(command), dispatch);
    sceneDriver?.sync();
  };
  shell.render(session.snapshot, dispatch);

  // O fluxo HTML funciona durante a carga do motor e mesmo sem renderer.
  void import('../game/config').then(({ mountGame }) => {
    if (disposed) return;
    sceneDriver = mountGame(shell.canvasHost, session, () => shell.showGraphicUnavailable());
  }).catch(() => { if (!disposed) shell.showGraphicUnavailable(); });

  return () => {
    disposed = true;
    sceneDriver?.destroy();
    shell.destroy();
  };
}
