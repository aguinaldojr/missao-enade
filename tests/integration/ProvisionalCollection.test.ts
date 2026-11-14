import { describe, expect, it, vi } from 'vitest';
import legacyQuestions from '../../src/content/questions/central-nexo.json';
import provisionalQuestions from '../../src/content/questions/enade-2026-provisional.json';
import legacyPuzzles from '../../src/content/puzzles/sequences.json';
import provisionalPuzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json';
import { GameSession } from '../../src/app/GameSession';
import { COURSE_IDS } from '../../src/domain/models/Course';
import { currentQuestion } from '../../src/domain/progression';
import { QUESTION_MISSION_LIST } from '../../src/config/missions';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../src/config/collections';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { LocalStorageProgressRepository, MISSION_RESULT_KEY, RESULT_KEY } from '../../src/infrastructure/storage/LocalStorageProgressRepository';
import { LocalStoragePuzzleRepository, PUZZLE_KEY } from '../../src/infrastructure/storage/LocalStoragePuzzleRepository';

const content = new JsonContentRepository({ ...provisionalQuestions,
  questions: [...legacyQuestions.questions, ...provisionalQuestions.questions] });
const puzzles = new JsonPuzzleRepository([...legacyPuzzles, ...provisionalPuzzles]);

function session(progress?: LocalStorageProgressRepository, puzzleStorage?: LocalStoragePuzzleRepository): GameSession {
  return new GameSession(content, progress, () => '2026-11-14T12:00:00.000Z', () => 'integration-attempt',
    undefined, puzzleStorage, puzzles, PROVISIONAL_PLAYABLE_COLLECTION);
}

function startMission(game: GameSession, course: (typeof COURSE_IDS)[number], missionId: string): void {
  game.dispatch({ type: 'start' });
  game.dispatch({ type: 'select-course', course });
  game.dispatch({ type: 'select-mission', missionId });
  game.dispatch({ type: 'enter-central' });
  game.dispatch({ type: 'start-phase' });
}

describe('coleção provisória integrada', () => {
  it('carrega 60 questões e seis puzzles sem remover os exemplos', () => {
    expect(provisionalQuestions.questions).toHaveLength(60);
    expect(provisionalPuzzles).toHaveLength(6);
    expect(content.questionsForCourse('CC')).toHaveLength(30);
    expect(puzzles.all()).toHaveLength(9);
  });

  it.each(COURSE_IDS.flatMap((course) => QUESTION_MISSION_LIST.map((mission) => [course, mission] as const)))(
    '$0 inicia $1.internalTitle com quantidade, cotas e elegibilidade exatas', (course, mission) => {
      const game = session();
      startMission(game, course, mission.id);
      const selected = game.snapshot.attempt!.questions;
      expect(game.snapshot.contentError).toBeNull();
      expect(selected).toHaveLength(mission.questionCount);
      expect(new Set(selected.map((question) => question.id)).size).toBe(mission.questionCount);
      expect(selected.filter((question) => question.classification === 'COMUM')).toHaveLength(mission.commonQuestionCount);
      expect(selected.filter((question) => question.classification === course)).toHaveLength(mission.specificQuestionCount);
      expect(selected.every((question) => question.collectionId === 'enade-2026' && question.courses.includes(course))).toBe(true);
      expect(selected.some((question) => !['COMUM', course].includes(question.classification))).toBe(false);
    });

  it.each(COURSE_IDS)('%s recebe somente o puzzle comum e o específico', (course) => {
    const game = session();
    game.dispatch({ type: 'start' });
    game.dispatch({ type: 'select-course', course });
    expect(game.snapshot.puzzles.map((puzzle) => puzzle.id).sort()).toEqual(['E26-P-COM-01', 'E26-P-' + course + '-01'].sort());
  });

  it('mantém recibos e relatório antigos e salva a nova missão em chave separada', () => {
    const legacyResult = { schemaVersion: 1, contentVersion: 'example-1', mode: 'example', phaseId: 'FASE-EXEMPLO-01',
      attemptId: 'legacy', course: 'CC', total: 10, correctCount: 8, score: 800, completedAt: '2026-11-13T12:00:00.000Z' };
    const legacyReceipt = { schemaVersion: 1, entries: { [legacyPuzzles[0]!.id]: {
      order: legacyPuzzles[0]!.correctOrder, hintsUsed: 1, attempts: 1, completed: true,
    } } };
    const values = new Map<string, string>([[RESULT_KEY, JSON.stringify(legacyResult)], [PUZZLE_KEY, JSON.stringify(legacyReceipt)]]);
    const storage = { getItem: (key: string) => values.get(key) ?? null,
      setItem: vi.fn((key: string, value: string) => { values.set(key, value); }) };
    const game = session(new LocalStorageProgressRepository(() => storage), new LocalStoragePuzzleRepository(puzzles, () => storage));
    expect(game.snapshot.lastResult).toEqual(legacyResult);
    expect(game.snapshot.puzzleProgress.entries[legacyPuzzles[0]!.id]?.completed).toBe(true);
    startMission(game, 'CC', 'quick');
    for (let index = 0; index < 3; index++) {
      const question = currentQuestion(game.snapshot.attempt!);
      game.dispatch({ type: 'select-option', questionId: question.id, option: question.correctOptionId });
      game.dispatch({ type: 'confirm-answer', questionId: question.id });
      game.dispatch({ type: 'feedback-accessed', questionId: question.id });
      game.dispatch({ type: 'next-question', questionId: question.id });
    }
    expect(JSON.parse(values.get(MISSION_RESULT_KEY)!)).toMatchObject({ missionId: 'quick', course: 'CC', total: 3, score: 300 });
    expect(JSON.parse(values.get(RESULT_KEY)!)).toEqual(legacyResult);
    expect(JSON.parse(values.get(PUZZLE_KEY)!)).toEqual(legacyReceipt);
  });
});
