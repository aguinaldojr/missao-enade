import { LEGACY_EXAMPLE_MISSION } from '../config/missions';
import { LEGACY_PLAYABLE_COLLECTION, type PlayableCollectionConfig } from '../config/collections';
import { selectMissionQuestions, InsufficientMissionContentError } from '../domain/QuestionSelection';
import puzzleCatalog from '../content/puzzles/sequences.json';
import { JsonPuzzleRepository } from '../infrastructure/content/JsonPuzzleRepository';
import type { PuzzleContentRepository, PuzzleProgressRepository } from '../ports/PuzzleRepository';
import { emptyPuzzleProgress, isSequenceCorrect, moveBlock, shuffledOrder, totalPuzzleXp,
  type PuzzleProgress, type SequenceAttempt, type SequenceProgress, type SequencePuzzle } from '../domain/puzzles/SequencePuzzle';
import { BASE_N9, MAPS } from '../config/maps';
import { explorationCopy } from '../config/exploration';
import { createExploration, movePlayer, nearbyObject, type ExplorationState } from '../domain/exploration/World';
import type { ExplorationRepository } from '../ports/ExplorationRepository';
import { isCourseId, type CourseId } from '../domain/models/Course';
import type { Attempt, ExampleResult, MissionResult, SavedResult } from '../domain/models/Attempt';
import type { QuestionMissionConfig } from '../domain/models/QuestionMission';
import type { OptionId } from '../domain/models/Question';
import { accessFeedback, canAdvance, confirmAnswer, createAttempt, currentQuestion, isComplete, selectOption } from '../domain/progression';
import { calculateScore } from '../domain/scoring';
import type { ContentRepository } from '../ports/ContentRepository';
import type { ProgressRepository, SaveStatus } from '../ports/ProgressRepository';
import { activePlayer, createPlayer, emptyPlayerProfiles, selectPlayer,
  type PlayerProfile, type PlayerProfiles } from '../domain/models/PlayerProfile';
import type { PlayerProfileRepository } from '../ports/PlayerProfileRepository';
import type { MissionRouteRepository } from '../ports/MissionRouteRepository';
import { missionRouteForAttempt, routeOrdering } from '../config/missionRoutes';

export type Screen = 'home' | 'profile' | 'leaderboard' | 'course-select' | 'map' | 'question' | 'result' | 'puzzle';

export interface SessionState {
  readonly screen: Screen;
  readonly selectedCourse: CourseId | null;
  readonly selectedMissionId: string;
  readonly missions: readonly QuestionMissionConfig[];
  readonly collectionName: string;
  readonly validationNotice: string;
  readonly attempt: Attempt | null;
  readonly lastResult: SavedResult | null;
  readonly saveStatus: SaveStatus;
  readonly contentError: string | null;
  readonly exploration: ExplorationState;
  readonly explorationSaveStatus: SaveStatus;
  readonly puzzleProgress: PuzzleProgress;
  readonly puzzleAttempt: SequenceAttempt | null;
  readonly puzzleSaveStatus: SaveStatus;
  readonly puzzles: readonly SequencePuzzle[];
  readonly worldDialog: { readonly title: string; readonly message: string } | null;
  readonly profiles: PlayerProfiles;
  readonly profileSaveStatus: SaveStatus;
  readonly profileError: string | null;
  readonly profileNextScreen: 'home' | 'course-select';
  readonly rankingCourse: CourseId;
  readonly rankingReturnScreen: 'home' | 'result';
}

export type Command =
  | { type: 'start' }
  | { type: 'open-profile' }
  | { type: 'create-player'; nickname: string }
  | { type: 'select-player'; playerId: string }
  | { type: 'continue-profile' }
  | { type: 'open-ranking' }
  | { type: 'select-ranking-course'; course: unknown }
  | { type: 'close-ranking' }
  | { type: 'select-course'; course: unknown }
  | { type: 'select-mission'; missionId: unknown }
  | { type: 'enter-central' }
  | { type: 'change-course' }
  | { type: 'start-phase' }
  | { type: 'select-option'; questionId: string; option: OptionId }
  | { type: 'confirm-answer'; questionId: string }
  | { type: 'feedback-accessed'; questionId: string }
  | { type: 'next-question'; questionId: string }
  | { type: 'retry-save' }
  | { type: 'home' }
  | { type: 'move-player'; x: number; y: number; seconds: number }
  | { type: 'interact' }
  | { type: 'close-dialog' }
  | { type: 'return-map' }
  | { type: 'save-exploration' }
  | { type: 'select-puzzle'; id: string }
  | { type: 'reorder-puzzle'; puzzleId: string; blockId: string; to: number }
  | { type: 'hint-puzzle'; puzzleId: string }
  | { type: 'validate-puzzle'; puzzleId: string }
  | { type: 'replay-puzzle'; puzzleId: string }
  | { type: 'exit-puzzle' }
  | { type: 'save-puzzles' };

export class GameSession {
  private state: SessionState;
  private missionStartedAtMs: number | null = null;

  constructor(
    private readonly content?: ContentRepository,
    private readonly progress?: ProgressRepository,
    private readonly now: () => string = () => new Date().toISOString(),
    // O identificador é local, sem finalidade de autenticação; HTTP na rede pode não oferecer randomUUID.
    private readonly createId: () => string = () => globalThis.crypto?.randomUUID?.() ??
      ('example-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)),
    private readonly explorationProgress?: ExplorationRepository,
    private readonly puzzleStorage?: PuzzleProgressRepository,
    private readonly puzzleContent: PuzzleContentRepository = new JsonPuzzleRepository(puzzleCatalog),
    private readonly playableCollection: PlayableCollectionConfig = LEGACY_PLAYABLE_COLLECTION,
    private readonly profileStorage?: PlayerProfileRepository,
    private readonly missionRouteStorage?: MissionRouteRepository,
  ) {
    const world = explorationProgress?.load() ?? { state: null, status: 'none' as const };
    const puzzleSave = puzzleStorage?.load() ?? { progress: null, status: 'none' as const };
    const puzzleProgress = puzzleSave.progress ?? emptyPuzzleProgress();
    let exploration = world.state ?? createExploration(BASE_N9);
    if (puzzleContent.all().some((puzzle) => puzzleProgress.entries[puzzle.id]?.completed &&
        puzzle.unlocks.mapId === exploration.mapId && puzzle.unlocks.objectId === 'door')) {
      exploration = Object.freeze({ ...exploration, doorUnlocked: true });
    }
    const loaded = progress?.loadResult() ?? { result: null, status: 'none' as const };
    const profileLoad = profileStorage?.load() ?? { profiles: null, status: 'none' as const };
    let profiles = profileLoad.profiles ?? emptyPlayerProfiles();
    let profileSaveStatus = profileLoad.status;
    const loadedPlayer = activePlayer(profiles);
    if (loadedPlayer && profileStorage) {
      profiles = selectPlayer(profiles, loadedPlayer.id, this.now());
      profileSaveStatus = profileStorage.save(profiles) ? 'saved' : 'failed';
    }
    const collectionPuzzles = puzzleContent.all().filter((puzzle) => playableCollection.mode === 'example' ||
      puzzle.collectionId === playableCollection.collectionId);
    this.state = Object.freeze({
      screen: 'home', selectedCourse: null, selectedMissionId: playableCollection.defaultMissionId,
      missions: playableCollection.missions, collectionName: playableCollection.displayName,
      validationNotice: playableCollection.validationNotice, attempt: null,
      lastResult: loaded.result, saveStatus: loaded.status, contentError: null,
      exploration, explorationSaveStatus: world.status, worldDialog: null,
      puzzleProgress, puzzleAttempt: null, puzzleSaveStatus: puzzleSave.status, puzzles: Object.freeze(collectionPuzzles),
      profiles, profileSaveStatus,
      profileError: null, profileNextScreen: 'course-select',
      rankingCourse: 'CC', rankingReturnScreen: 'home',
    });
  }

  get snapshot(): SessionState { return this.state; }

  dispatch(command: Command): SessionState {
    const current = this.state;
    const attempt = current.attempt;
    switch (command.type) {
      case 'start':
        if (this.profileStorage && !activePlayer(current.profiles)) {
          this.update({ screen: 'profile', profileNextScreen: 'course-select', profileError: null });
        } else {
          this.update({ screen: 'course-select', attempt: null, contentError: null, worldDialog: null });
        }
        break;
      case 'change-course':
        this.update({ screen: 'course-select', attempt: null, contentError: null, worldDialog: null });
        break;
      case 'open-profile':
        if (current.screen !== 'home' && current.screen !== 'course-select') return current;
        this.update({ screen: 'profile', profileNextScreen: current.screen, profileError: null });
        break;
      case 'create-player':
        if (current.screen !== 'profile') return current;
        try {
          const profiles = createPlayer(current.profiles, command.nickname, 'player-' + this.createId(), this.now());
          this.update({ profiles, profileError: null,
            profileSaveStatus: this.profileStorage?.save(profiles) ? 'saved' : 'failed' });
        } catch (error) {
          this.update({ profileError: error instanceof Error ? error.message : 'Não foi possível criar o jogador.' });
        }
        break;
      case 'select-player':
        if (current.screen !== 'profile') return current;
        try {
          const profiles = selectPlayer(current.profiles, command.playerId, this.now());
          this.update({ profiles, profileError: null,
            profileSaveStatus: this.profileStorage?.save(profiles) ? 'saved' : 'failed' });
        } catch (error) {
          this.update({ profileError: error instanceof Error ? error.message : 'Não foi possível selecionar o jogador.' });
        }
        break;
      case 'continue-profile':
        if (current.screen === 'profile' && activePlayer(current.profiles)) {
          this.update({ screen: current.profileNextScreen, profileError: null });
        }
        break;
      case 'open-ranking': {
        if (current.screen !== 'home' && current.screen !== 'result') return current;
        const result = current.screen === 'result' ? current.lastResult : null;
        this.update({ screen: 'leaderboard', rankingReturnScreen: current.screen,
          rankingCourse: result?.course ?? current.rankingCourse });
        break;
      }
      case 'select-ranking-course':
        if (current.screen === 'leaderboard' && isCourseId(command.course)) this.update({ rankingCourse: command.course });
        break;
      case 'close-ranking':
        if (current.screen === 'leaderboard') this.update({ screen: current.rankingReturnScreen });
        break;
      case 'select-course':
        if (current.screen !== 'course-select' || !isCourseId(command.course)) {
          throw new Error('Selecione um dos cinco cursos disponíveis.');
        }
        this.update({ selectedCourse: command.course, puzzles: Object.freeze(this.puzzleContent.forCourse(command.course)
          .filter((puzzle) => this.playableCollection.mode === 'example' ||
            puzzle.collectionId === this.playableCollection.collectionId)) });
        break;
      case 'select-mission':
        if (current.screen !== 'course-select' || typeof command.missionId !== 'string' ||
            !current.missions.some((mission) => mission.id === command.missionId)) {
          throw new Error('Selecione um dos tamanhos de missão disponíveis.');
        }
        this.update({ selectedMissionId: command.missionId });
        break;
      case 'enter-central':
        if (current.screen !== 'course-select' || current.selectedCourse === null) {
          throw new Error('Escolha seu curso antes de entrar na central.');
        }
        this.update({ screen: 'map', contentError: null });
        break;
      case 'start-phase':
        if (current.screen !== 'map' || !current.selectedCourse || current.worldDialog ||
            nearbyObject(current.exploration, MAPS[current.exploration.mapId]!)?.kind !== 'computer') return current;
        try {
          if (!this.content) throw new Error('Catálogo ausente.');
          const mission = current.missions.find((candidate) => candidate.id === current.selectedMissionId);
          if (!mission) throw new Error('Configuração de missão ausente.');
          const bank = this.content.questionsForCourse(current.selectedCourse);
          const completedCount = this.missionRouteStorage?.completedCount(current.selectedCourse) ?? 0;
          const ordering = mission.id === 'journey-25'
            ? routeOrdering(missionRouteForAttempt(current.selectedCourse, completedCount, bank,
              this.missionRouteStorage?.recentQuestionIds(current.selectedCourse) ?? [])) : undefined;
          const questions = selectMissionQuestions(bank, { course: current.selectedCourse,
            collectionId: this.playableCollection.collectionId, mission }, ordering);
          this.missionStartedAtMs = Date.parse(this.now());
          this.update({ screen: 'question', contentError: null,
            attempt: createAttempt(this.createId(), current.selectedCourse, questions, mission),
            exploration: Object.freeze({ ...current.exploration, missionStatus: current.exploration.missionStatus === 'completed' ? 'completed' : 'active' }) });
          this.persistExploration();
        } catch (error) {
          this.update({ contentError: error instanceof InsufficientMissionContentError ? error.message
            : 'Os conteúdos estão indisponíveis ou inválidos. Nenhuma missão foi iniciada. Você pode tentar novamente ou voltar ao menu.' });
        }
        break;
      case 'select-option':
        if (current.screen === 'question' && attempt) {
          this.update({ attempt: selectOption(attempt, command.questionId, command.option) });
        }
        break;
      case 'confirm-answer':
        if (current.screen === 'question' && attempt) {
          this.update({ attempt: confirmAnswer(attempt, command.questionId) });
        }
        break;
      case 'feedback-accessed':
        if (current.screen === 'question' && attempt) {
          this.update({ attempt: accessFeedback(attempt, command.questionId) });
        }
        break;
      case 'next-question':
        if (current.screen !== 'question' || !attempt || !canAdvance(attempt, command.questionId)) return current;
        if (attempt.index < attempt.questions.length - 1) {
          this.update({ attempt: Object.freeze({ ...attempt, index: attempt.index + 1, selectedOptionId: null }) });
        } else if (isComplete(attempt)) {
          const score = calculateScore(attempt.answers);
          const completedAt = this.now();
          const completedAtMs = Date.parse(completedAt);
          const durationMs = this.missionStartedAtMs !== null && Number.isFinite(completedAtMs)
            ? Math.max(0, completedAtMs - this.missionStartedAtMs) : undefined;
          const result: SavedResult = this.playableCollection.mode === 'example' && attempt.mission.id === LEGACY_EXAMPLE_MISSION.id
            ? Object.freeze<ExampleResult>({
              schemaVersion: 1, contentVersion: 'example-1', mode: 'example', phaseId: 'FASE-EXEMPLO-01',
              attemptId: attempt.id, course: attempt.courseAtStart, total: 10,
              score, correctCount: score / 100, completedAt,
            })
            : Object.freeze<MissionResult>({
              schemaVersion: 1, contentVersion: this.playableCollection.contentVersion, mode: 'provisional',
              phaseId: this.playableCollection.phaseId, missionId: attempt.mission.id,
              attemptId: attempt.id, course: attempt.courseAtStart, total: attempt.mission.questionCount,
              score, correctCount: score / 100, ...(durationMs !== undefined ? { durationMs } : {}), completedAt,
            });
          this.update({ screen: 'result', lastResult: result,
            saveStatus: this.progress?.saveResult(result) ? 'saved' : 'failed',
            rankingCourse: result.course,
            exploration: Object.freeze({ ...current.exploration, missionStatus: 'completed', doorUnlocked: true }) });
          if (result.mode === 'provisional' && attempt.mission.id === 'journey-25') {
            this.missionRouteStorage?.recordCompletion(result.course, attempt.questions.map((question) => question.id));
          }
          this.persistExploration();
          this.missionStartedAtMs = null;
        }
        break;
      case 'retry-save':
        if (current.screen === 'result' && current.lastResult && current.saveStatus === 'failed') {
          this.update({ saveStatus: this.progress?.saveResult(current.lastResult) ? 'saved' : 'failed' });
        }
        break;
      case 'move-player': {
        if (current.screen !== 'map' || current.worldDialog) return current;
        const map = MAPS[current.exploration.mapId]!;
        const exploration = movePlayer(current.exploration, map, { x: command.x, y: command.y }, command.seconds);
        if (exploration !== current.exploration) this.update({ exploration });
        break;
      }
      case 'interact': {
        if (current.screen !== 'map' || current.worldDialog) return current;
        const target = nearbyObject(current.exploration, MAPS[current.exploration.mapId]!);
        if (!target) return current;
        if (target.kind === 'computer') return this.dispatch({ type: 'start-phase' });
        if (target.kind === 'npc') {
          this.update({
            exploration: Object.freeze({ ...current.exploration, missionStatus: current.exploration.missionStatus === 'completed' ? 'completed' : 'active' }),
            worldDialog: Object.freeze({ title: explorationCopy.guideTitle,
              message: current.exploration.missionStatus === 'completed' ? explorationCopy.guideCompleted : explorationCopy.guideMission }),
          });
        } else if (target.kind === 'door') {
          this.update({ worldDialog: Object.freeze({
            title: current.exploration.doorUnlocked ? explorationCopy.openTitle : explorationCopy.lockedTitle,
            message: current.exploration.doorUnlocked ? explorationCopy.openMessage : explorationCopy.lockedMessage,
          }) });
        } else {
          const first = current.puzzles[0];
          if (first) this.beginPuzzle(first.id);
          return this.state;
        }
        this.persistExploration();
        break;
      }
      case 'select-puzzle':
        if (current.screen === 'puzzle') this.beginPuzzle(command.id);
        break;
      case 'replay-puzzle':
        if (current.screen === 'puzzle' && current.puzzleAttempt?.puzzleId === command.puzzleId && current.puzzleAttempt.solved) {
          this.beginPuzzle(command.puzzleId);
        }
        break;
      case 'reorder-puzzle': {
        const active = this.activePuzzle(command.puzzleId);
        if (!active || current.puzzleAttempt?.solved) return current;
        const order = moveBlock(active.entry.order, command.blockId, command.to);
        if (order === active.entry.order) return current;
        this.updatePuzzleEntry(active.puzzle.id, { ...active.entry, order });
        this.update({ puzzleAttempt: { ...current.puzzleAttempt!, feedback: 'none' } });
        this.persistPuzzles();
        break;
      }
      case 'hint-puzzle': {
        const active = this.activePuzzle(command.puzzleId);
        if (!active || current.puzzleAttempt?.solved) return current;
        this.updatePuzzleEntry(active.puzzle.id, { ...active.entry,
          hintsUsed: Math.min(active.puzzle.hints.length, active.entry.hintsUsed + 1) });
        this.persistPuzzles();
        break;
      }
      case 'validate-puzzle': {
        const active = this.activePuzzle(command.puzzleId);
        if (!active || current.puzzleAttempt?.solved) return current;
        const correct = isSequenceCorrect(active.entry.order, active.puzzle);
        this.updatePuzzleEntry(active.puzzle.id, { ...active.entry, attempts: active.entry.attempts + 1,
          completed: active.entry.completed || correct,
          hintsUsed: correct ? active.entry.hintsUsed : Math.max(1, active.entry.hintsUsed) });
        this.update({ puzzleAttempt: { puzzleId: active.puzzle.id, solved: correct,
          feedback: correct ? 'correct' : 'incorrect', earnedXp: correct && !active.entry.completed ? active.puzzle.reward.xp : 0 } });
        this.persistPuzzles();
        if (correct && active.puzzle.unlocks.mapId === current.exploration.mapId && active.puzzle.unlocks.objectId === 'door') {
          this.update({ exploration: Object.freeze({ ...current.exploration, doorUnlocked: true }) });
          this.persistExploration();
        }
        break;
      }
      case 'exit-puzzle':
        if (current.screen === 'puzzle') {
          this.persistPuzzles();
          this.update({ screen: 'map', puzzleAttempt: null, worldDialog: null });
        }
        break;
      case 'save-puzzles':
        this.persistPuzzles();
        break;
      case 'close-dialog':
        this.update({ worldDialog: null });
        break;
      case 'return-map':
        if (current.screen === 'result' && current.selectedCourse) this.update({ screen: 'map', attempt: null, worldDialog: null });
        break;
      case 'save-exploration':
        this.persistExploration();
        break;
      case 'home':
        // Não há retomada de partida nesta entrega; o último resumo permanece.
        this.persistExploration();
        this.update({ screen: 'home', attempt: null, contentError: null, worldDialog: null });
        break;
    }
    return this.state;
  }

  private activePuzzle(id: string): { puzzle: SequencePuzzle; entry: SequenceProgress } | null {
    const puzzle = this.state.puzzles.find((candidate) => candidate.id === id);
    const entry = this.state.puzzleProgress.entries[id];
    return this.state.screen === 'puzzle' && this.state.puzzleAttempt?.puzzleId === id && puzzle && entry
      ? { puzzle, entry } : null;
  }

  private beginPuzzle(id: string): void {
    const puzzle = this.state.puzzles.find((candidate) => candidate.id === id);
    if (!puzzle || !this.state.selectedCourse || !puzzle.courses.includes(this.state.selectedCourse)) return;
    const previous = this.state.puzzleProgress.entries[id];
    this.updatePuzzleEntry(id, { order: previous && !previous.completed ? previous.order : shuffledOrder(puzzle),
      completed: previous?.completed ?? false, hintsUsed: previous?.hintsUsed ?? 0, attempts: previous?.attempts ?? 0 });
    this.update({ screen: 'puzzle', worldDialog: null,
      puzzleAttempt: { puzzleId: id, solved: false, feedback: 'none', earnedXp: 0 } });
    this.persistPuzzles();
    this.persistExploration();
  }

  private updatePuzzleEntry(id: string, entry: SequenceProgress): void {
    this.update({ puzzleProgress: { schemaVersion: 1, entries: { ...this.state.puzzleProgress.entries, [id]: entry } } });
  }

  private persistPuzzles(): void {
    if (!this.puzzleStorage) return;
    const saved = this.puzzleStorage.save(this.state.puzzleProgress);
    this.update({ puzzleProgress: saved.progress, puzzleSaveStatus: saved.status });
  }

  get puzzleXp(): number { return totalPuzzleXp(this.state.puzzleProgress, this.puzzleContent.all()); }

  get currentPlayer(): PlayerProfile | null { return activePlayer(this.state.profiles); }

  private persistExploration(): void {
    if (!this.explorationProgress) return;
    this.update({ explorationSaveStatus: this.explorationProgress.save(this.state.exploration) ? 'saved' : 'failed' });
  }

  private update(patch: Partial<SessionState>): void {
    this.state = Object.freeze({ ...this.state, ...patch });
  }

  get questionId(): string | null {
    return this.state.attempt ? currentQuestion(this.state.attempt).id : null;
  }
}
