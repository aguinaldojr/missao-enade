import { afterEach, describe, expect, it } from 'vitest';
import legacyQuestions from '../../src/content/questions/central-nexo.json';
import provisionalQuestions from '../../src/content/questions/enade-2026-provisional.json';
import legacyPuzzles from '../../src/content/puzzles/sequences.json';
import provisionalPuzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json';
import { EVALUATION_JOURNEY_PUZZLES } from '../../src/content/puzzles/evaluation-journey';
import { GameSession, type Command } from '../../src/app/GameSession';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../src/config/collections';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { AppShell } from '../../src/ui/AppShell';
import { currentQuestion } from '../../src/domain/progression';

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });

function setup(questionData: unknown = { ...provisionalQuestions,
  questions: [...legacyQuestions.questions, ...provisionalQuestions.questions] }) {
  const root = document.createElement('div');
  document.body.append(root);
  const puzzles = new JsonPuzzleRepository([...legacyPuzzles, ...provisionalPuzzles, ...EVALUATION_JOURNEY_PUZZLES]);
  const session = new GameSession(new JsonContentRepository(questionData), undefined, undefined, undefined,
    undefined, undefined, puzzles, PROVISIONAL_PLAYABLE_COLLECTION);
  shell = new AppShell(root);
  const dispatch = (command: Command): void => shell.render(session.dispatch(command), dispatch);
  shell.render(session.snapshot, dispatch);
  return { root, session, dispatch };
}

describe('escolha integrada de curso e missão', () => {
  it('renderiza cinco cursos, a jornada fixa e inicia por controles nativos', () => {
    const { root, session, dispatch } = setup();
    dispatch({ type: 'start' });
    expect(root.querySelectorAll('input[name="course"]')).toHaveLength(5);
    expect(root.querySelectorAll('input[name="mission"]')).toHaveLength(1);
    expect(root.textContent).toContain('N9 Jornada Digital');
    expect(root.textContent).not.toMatch(/experimental|revisão editorial/i);
    expect(root.textContent).not.toMatch(/aprova(?:do|ção) por docente|revisão docente|validação pedagógica/i);
    expect(root.textContent).not.toMatch(/enade/i);
    const course = root.querySelector<HTMLInputElement>('input[name="course"][value="SI"]')!;
    const mission = root.querySelector<HTMLInputElement>('input[name="mission"][value="journey-25"]')!;
    course.focus(); course.click(); mission.focus(); mission.click();
    expect(document.activeElement).toBe(mission);
    root.querySelector<HTMLButtonElement>('[data-action="confirm-course"]')!.click();
    expect(session.snapshot).toMatchObject({ screen: 'map', selectedCourse: 'SI', selectedMissionId: 'journey-25' });
    expect(root.querySelector('.selected-mission')?.textContent).toBe('Jornada N9 · 25 desafios');
    root.querySelector<HTMLButtonElement>('.world-interact')!.click();
    expect(session.snapshot.attempt?.questions).toHaveLength(25);
    expect(session.snapshot.evaluationGate).toBe('entrada');
    expect(session.snapshot.exploration.mapId).toBe('avaliacao-rota');
    expect(root.querySelectorAll('.journey-phase-step')).toHaveLength(5);
    expect(root.querySelector('.journey-phase-step[data-state="active"] strong')?.textContent).toBe('Fase 1');
    expect(root.querySelector('.puzzle-view')).toBeNull();
    root.querySelector<HTMLButtonElement>('.world-interact')!.click();
    expect(root.querySelector('.puzzle-view')?.textContent).toContain('Robô N9');
    expect(root.querySelector('.evaluation-gate-hero')).not.toBeNull();
    expect(root.querySelector('.evaluation-gate-state')?.textContent).toBe('PASSAGEM BLOQUEADA');
    expect(root.querySelector('.puzzle-view')?.getAttribute('data-evaluation-gate')).toBe('entrada');
    const puzzle = session.snapshot.puzzles.find((candidate) => candidate.id === session.snapshot.puzzleAttempt!.puzzleId)!;
    for (const [to, blockId] of puzzle.correctOrder.entries()) dispatch({ type: 'reorder-puzzle', puzzleId: puzzle.id, blockId, to });
    dispatch({ type: 'validate-puzzle', puzzleId: puzzle.id });
    expect(root.querySelector('.evaluation-gate-state')?.textContent).toBe('PASSAGEM LIBERADA');
    expect(root.querySelector('.evaluation-gate-copy')?.textContent).toContain('Continue pela rota');
    expect(root.querySelector<HTMLButtonElement>('.puzzle-success button')?.textContent).toBe('Voltar à rota liberada');
    root.querySelector<HTMLButtonElement>('.puzzle-success button')!.click();
    expect(root.querySelector('.journey-guide')?.textContent).toContain('Caminhe até a Fase 1');
    for (let step = 0; step < 8; step += 1) dispatch({ type: 'move-player', x: 1, y: 0, seconds: 0.05 });
    dispatch({ type: 'interact' });
    expect(session.snapshot.exploration.mapId).toBe('avaliacao-1');
    expect(root.querySelector('.journey-guide')?.textContent).toContain('Siga até o Posto 1');
    expect(root.querySelector('.journey-room-step[data-state="active"]')?.textContent).toBe('1');
    for (let step = 0; step < 2; step += 1) dispatch({ type: 'move-player', x: 0, y: -1, seconds: 0.05 });
    dispatch({ type: 'interact' });
    expect(root.querySelector('.journey-question-scene')?.textContent).toContain('FASE 1 · POSTO 1');
    expect(root.querySelectorAll('.journey-question-character')).toHaveLength(1);
    expect(root.querySelector<HTMLElement>('.stage--question > .visual-panel')?.hidden).toBe(true);
    const question = currentQuestion(session.snapshot.attempt!);
    root.querySelector<HTMLInputElement>('input[value="' + question.correctOptionId + '"]')!.click();
    root.querySelector<HTMLButtonElement>('[data-action="confirm-answer"]')!.click();
    expect(root.querySelector('.question-view')?.getAttribute('data-journey-state')).toBe('correct');
    expect(root.querySelector('.journey-answer-outcome')?.textContent).toContain('Posto concluído');
    expect(root.textContent).not.toMatch(/enade/i);
  });

  it('mostra erro de capacidade sem misturar ou repetir conteúdo', () => {
    const limited = { ...provisionalQuestions, questions: provisionalQuestions.questions.filter((question) =>
      question.classification === 'COMUM' || question.id === 'E26-Q-CC-01') };
    const { root, session, dispatch } = setup(limited);
    dispatch({ type: 'start' });
    dispatch({ type: 'select-course', course: 'CC' });
    dispatch({ type: 'select-mission', missionId: 'journey-25' });
    dispatch({ type: 'enter-central' });
    root.querySelector<HTMLButtonElement>('.world-interact')!.click();
    expect(session.snapshot.attempt).toBeNull();
    expect(root.querySelector('.content-error')?.textContent).toContain('necessárias 25 questões');
    expect(root.querySelector('.content-error')?.textContent).toContain('15 comuns e 1 específica');
    expect(root.querySelector('.content-error')?.textContent).toContain('Nenhuma questão foi repetida');
  });
});
