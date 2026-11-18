import { afterEach, describe, expect, it } from 'vitest';
import legacyQuestions from '../../src/content/questions/central-nexo.json';
import provisionalQuestions from '../../src/content/questions/enade-2026-provisional.json';
import legacyPuzzles from '../../src/content/puzzles/sequences.json';
import provisionalPuzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json';
import { GameSession, type Command } from '../../src/app/GameSession';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../src/config/collections';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { AppShell } from '../../src/ui/AppShell';

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });

function setup(questionData: unknown = { ...provisionalQuestions,
  questions: [...legacyQuestions.questions, ...provisionalQuestions.questions] }) {
  const root = document.createElement('div');
  document.body.append(root);
  const puzzles = new JsonPuzzleRepository([...legacyPuzzles, ...provisionalPuzzles]);
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
    expect(root.textContent).toContain('N9 Jornada Digital · Conteúdo experimental em revisão editorial.');
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
    expect(root.querySelector('.question-toolbar')?.textContent).toContain('Desafio 1 de 25');
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
