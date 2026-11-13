import { describe, expect, it } from 'vitest';
import { GameSession } from '../../src/app/GameSession';
import { COURSE_IDS } from '../../src/domain/models/Course';

describe('seleção temporária de curso', () => {
  it('bloqueia a central antes de escolher e confirmar um curso', () => {
    const session = new GameSession();
    expect(() => session.dispatch({ type: 'enter-central' })).toThrow();
    session.dispatch({ type: 'start' });
    expect(() => session.dispatch({ type: 'enter-central' })).toThrow();
    expect(session.snapshot.screen).toBe('course-select');
  });

  it.each(COURSE_IDS)('entra com %s e mantém a escolha ao voltar para a seleção', (course) => {
    const session = new GameSession();
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'select-course', course });
    session.dispatch({ type: 'enter-central' });
    expect(session.snapshot).toMatchObject({ screen: 'map', selectedCourse: course });
    session.dispatch({ type: 'change-course' });
    expect(session.snapshot).toMatchObject({ screen: 'course-select', selectedCourse: course });
  });

  it.each(['OUTRO', '', 'cc', null, 42, ['CC']])('rejeita curso inválido sem mudar o estado: %s', (course) => {
    const session = new GameSession();
    session.dispatch({ type: 'start' });
    const before = session.snapshot;
    expect(() => session.dispatch({ type: 'select-course', course })).toThrow();
    expect(session.snapshot).toBe(before);
  });

  it('não aceita seleção fora da tela de cursos e não transfere a escolha para outra sessão', () => {
    const session = new GameSession();
    expect(() => session.dispatch({ type: 'select-course', course: 'SI' })).toThrow();
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'select-course', course: 'SI' });
    session.dispatch({ type: 'home' });
    session.dispatch({ type: 'start' });
    expect(session.snapshot.selectedCourse).toBe('SI');
    expect(new GameSession().snapshot).toMatchObject({ screen: 'home', selectedCourse: null });
  });
});
