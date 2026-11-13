import { GameSession, type Command } from './GameSession';
import { AppShell } from '../ui/AppShell';
import { ExplorationControls } from '../ui/ExplorationControls';
import puzzleCatalog from '../content/puzzles/sequences.json';
import { JsonPuzzleRepository } from '../infrastructure/content/JsonPuzzleRepository';
import { LocalStoragePuzzleRepository } from '../infrastructure/storage/LocalStoragePuzzleRepository';
import catalog from '../content/questions/central-nexo.json';
import { JsonContentRepository } from '../infrastructure/content/JsonContentRepository';
import { LocalStorageProgressRepository } from '../infrastructure/storage/LocalStorageProgressRepository';
import { LocalStorageExplorationRepository } from '../infrastructure/storage/LocalStorageExplorationRepository';

export function bootstrap(root: HTMLElement): () => void {
  const puzzles = new JsonPuzzleRepository(puzzleCatalog);
  const session = new GameSession(new JsonContentRepository(catalog), new LocalStorageProgressRepository(),
    undefined, undefined, new LocalStorageExplorationRepository(), new LocalStoragePuzzleRepository(puzzles), puzzles);
  let sceneDriver: { sync: () => void; destroy: () => void } | undefined;
  let disposed = false;
  const dispatch = (command: Command): void => {
    const before = session.snapshot;
    session.dispatch(command);
    if (before.screen === 'map' && (session.snapshot.screen !== 'map' || session.snapshot.worldDialog)) controls.reset();
    shell.render(session.snapshot, dispatch);
    if (before.screen !== session.snapshot.screen) sceneDriver?.sync();
  };
  const controls = new ExplorationControls(() => session.snapshot, dispatch);
  const shell = new AppShell(root, controls);
  shell.render(session.snapshot, dispatch);

  void import('../game/config').then(({ mountGame }) => {
    if (disposed) return;
    sceneDriver = mountGame(shell.canvasHost, session, () => shell.showGraphicUnavailable());
  }).catch(() => { if (!disposed) shell.showGraphicUnavailable(); });

  return () => {
    controls.destroy();
    disposed = true;
    sceneDriver?.destroy();
    shell.destroy();
  };
}
