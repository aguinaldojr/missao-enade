import { GameSession, type Command } from './GameSession';
import { AppShell } from '../ui/AppShell';
import { ExplorationControls } from '../ui/ExplorationControls';
import legacyPuzzleCatalog from '../content/puzzles/sequences.json';
import provisionalPuzzleCatalog from '../content/puzzles/enade-2026-provisional-sequences.json';
import { JsonPuzzleRepository } from '../infrastructure/content/JsonPuzzleRepository';
import { LocalStoragePuzzleRepository } from '../infrastructure/storage/LocalStoragePuzzleRepository';
import legacyQuestionCatalog from '../content/questions/central-nexo.json';
import provisionalQuestionCatalog from '../content/questions/enade-2026-provisional.json';
import { JsonContentRepository } from '../infrastructure/content/JsonContentRepository';
import { LocalStorageProgressRepository } from '../infrastructure/storage/LocalStorageProgressRepository';
import { LocalStorageExplorationRepository } from '../infrastructure/storage/LocalStorageExplorationRepository';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../config/collections';

export function bootstrap(root: HTMLElement): () => void {
  const puzzles = new JsonPuzzleRepository([...legacyPuzzleCatalog, ...provisionalPuzzleCatalog]);
  const questions = { ...provisionalQuestionCatalog,
    questions: [...legacyQuestionCatalog.questions, ...provisionalQuestionCatalog.questions] };
  const session = new GameSession(new JsonContentRepository(questions), new LocalStorageProgressRepository(),
    undefined, undefined, new LocalStorageExplorationRepository(), new LocalStoragePuzzleRepository(puzzles), puzzles,
    PROVISIONAL_PLAYABLE_COLLECTION);
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
