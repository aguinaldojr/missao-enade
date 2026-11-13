import { describe, expect, it, vi } from 'vitest';
import catalog from '../../src/content/questions/central-nexo.json';
import { GameSession } from '../../src/app/GameSession';
import { COURSE_IDS } from '../../src/domain/models/Course';
import type { OptionId } from '../../src/domain/models/Question';
import { currentQuestion } from '../../src/domain/progression';
import { calculateScore } from '../../src/domain/scoring';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';

function setup(save = true) {
  const progress = { loadResult: () => ({ result: null, status: 'none' as const }), saveResult: vi.fn(() => save) };
  const session = new GameSession(new JsonContentRepository(catalog), progress, () => '2026-11-13T12:00:00.000Z', () => 'attempt-test');
  session.dispatch({ type: 'start' });
  session.dispatch({ type: 'select-course', course: 'CC' });
  session.dispatch({ type: 'enter-central' });
  session.dispatch({ type: 'start-phase' });
  return { session, progress };
}

function respond(session: GameSession, correct: boolean) {
  const question = currentQuestion(session.snapshot.attempt!);
  const option = correct ? question.correctOptionId : question.options.find((item) => item.id !== question.correctOptionId)!.id;
  session.dispatch({ type: 'select-option', questionId: question.id, option });
  session.dispatch({ type: 'confirm-answer', questionId: question.id });
  session.dispatch({ type: 'feedback-accessed', questionId: question.id });
  session.dispatch({ type: 'next-question', questionId: question.id });
}

describe('fase de dez questões', () => {
  it.each([0, 8, 10])('%i acertos concluem e geram resultado próprio sem acúmulo', (correctCount) => {
    const { session, progress } = setup();
    for (let index = 0; index < 10; index++) respond(session, index < correctCount);
    expect(session.snapshot.screen).toBe('result');
    expect(session.snapshot.lastResult).toMatchObject({ course: 'CC', total: 10, score: correctCount * 100, correctCount, mode: 'example' });
    expect(progress.saveResult).toHaveBeenCalledTimes(1);
    session.dispatch({ type: 'next-question', questionId: 'EX-CC-01' });
    expect(progress.saveResult).toHaveBeenCalledTimes(1);
    session.dispatch({ type: 'home' });
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'enter-central' });
    session.dispatch({ type: 'start-phase' });
    expect(calculateScore(session.snapshot.attempt!.answers)).toBe(0);
    expect(session.snapshot.attempt?.answers).toHaveLength(0);
  });

  it('exige seleção e feedback apresentado; confirma uma única resposta e ignora comandos atrasados', () => {
    const { session, progress } = setup();
    const question = currentQuestion(session.snapshot.attempt!);
    expect(() => session.dispatch({ type: 'confirm-answer', questionId: question.id })).toThrow();
    session.dispatch({ type: 'next-question', questionId: question.id });
    expect(session.snapshot.attempt?.index).toBe(0);
    session.dispatch({ type: 'select-option', questionId: question.id, option: question.correctOptionId });
    session.dispatch({ type: 'confirm-answer', questionId: question.id });
    session.dispatch({ type: 'confirm-answer', questionId: question.id });
    session.dispatch({ type: 'select-option', questionId: question.id, option: 'A' });
    expect(session.snapshot.attempt?.answers).toHaveLength(1);
    expect(session.snapshot.attempt?.answers[0]?.selectedOptionId).toBe(question.correctOptionId);
    session.dispatch({ type: 'next-question', questionId: question.id });
    expect(session.snapshot.attempt?.index).toBe(0);
    session.dispatch({ type: 'feedback-accessed', questionId: question.id });
    session.dispatch({ type: 'next-question', questionId: question.id });
    session.dispatch({ type: 'next-question', questionId: question.id });
    session.dispatch({ type: 'confirm-answer', questionId: question.id });
    expect(session.snapshot.attempt?.index).toBe(1);
    expect(session.snapshot.attempt?.answers).toHaveLength(1);
    expect(progress.saveResult).not.toHaveBeenCalled();
  });

  it('não termina nem salva ao confirmar o décimo item sem apresentar seu feedback', () => {
    const { session, progress } = setup();
    for (let i = 0; i < 9; i++) respond(session, true);
    const question = currentQuestion(session.snapshot.attempt!);
    session.dispatch({ type: 'select-option', questionId: question.id, option: question.correctOptionId });
    session.dispatch({ type: 'confirm-answer', questionId: question.id });
    session.dispatch({ type: 'next-question', questionId: question.id });
    expect(session.snapshot.screen).toBe('question');
    expect(progress.saveResult).not.toHaveBeenCalled();
  });

  it.each(COURSE_IDS)('preserva o curso de início e seleciona os exemplos de %s', (course) => {
    const { session } = setup();
    session.dispatch({ type: 'home' });
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'select-course', course });
    session.dispatch({ type: 'enter-central' });
    session.dispatch({ type: 'start-phase' });
    const attempt = session.snapshot.attempt!;
    expect(attempt.courseAtStart).toBe(course);
    expect(attempt.questions[9]?.id).toBe('EX-' + course + '-01');
    expect(() => session.dispatch({ type: 'select-course', course: 'SI' })).toThrow();
    expect(() => session.dispatch({ type: 'select-option', questionId: attempt.questions[0]!.id, option: 'Z' as OptionId })).toThrow();
  });

  it('mantém resultado em memória se salvar falhar e permite repetir o salvamento', () => {
    const { session, progress } = setup(false);
    for (let i = 0; i < 10; i++) respond(session, true);
    expect(session.snapshot.saveStatus).toBe('failed');
    expect(session.snapshot.lastResult?.score).toBe(1000);
    progress.saveResult.mockReturnValue(true);
    session.dispatch({ type: 'retry-save' });
    expect(session.snapshot.saveStatus).toBe('saved');
    session.dispatch({ type: 'retry-save' });
    expect(progress.saveResult).toHaveBeenCalledTimes(2);
  });

  it('voltar ao menu encerra a tentativa incompleta sem salvar', () => {
    const { session, progress } = setup();
    respond(session, true);
    session.dispatch({ type: 'home' });
    expect(session.snapshot.attempt).toBeNull();
    expect(progress.saveResult).not.toHaveBeenCalled();
  });

  it('conteúdo inválido retorna aviso na central em vez de iniciar fase parcial', () => {
    const session = new GameSession(new JsonContentRepository({}));
    session.dispatch({ type: 'start' });
    session.dispatch({ type: 'select-course', course: 'TRC' });
    session.dispatch({ type: 'enter-central' });
    session.dispatch({ type: 'start-phase' });
    expect(session.snapshot.screen).toBe('map');
    expect(session.snapshot.attempt).toBeNull();
    expect(session.snapshot.contentError).toContain('inválidos');
  });
});
