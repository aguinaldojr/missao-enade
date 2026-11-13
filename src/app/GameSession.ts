import { isCourseId, type CourseId } from '../domain/models/Course';
import type { Attempt, ExampleResult } from '../domain/models/Attempt';
import type { OptionId } from '../domain/models/Question';
import { accessFeedback, canAdvance, confirmAnswer, createAttempt, currentQuestion, isComplete, selectOption } from '../domain/progression';
import { calculateScore } from '../domain/scoring';
import type { ContentRepository } from '../ports/ContentRepository';
import type { ProgressRepository, SaveStatus } from '../ports/ProgressRepository';

export type Screen = 'home' | 'course-select' | 'map' | 'question' | 'result';

export interface SessionState {
  readonly screen: Screen;
  readonly selectedCourse: CourseId | null;
  readonly attempt: Attempt | null;
  readonly lastResult: ExampleResult | null;
  readonly saveStatus: SaveStatus;
  readonly contentError: string | null;
}

export type Command =
  | { type: 'start' }
  | { type: 'select-course'; course: unknown }
  | { type: 'enter-central' }
  | { type: 'change-course' }
  | { type: 'start-phase' }
  | { type: 'select-option'; questionId: string; option: OptionId }
  | { type: 'confirm-answer'; questionId: string }
  | { type: 'feedback-accessed'; questionId: string }
  | { type: 'next-question'; questionId: string }
  | { type: 'retry-save' }
  | { type: 'home' };

export class GameSession {
  private state: SessionState;

  constructor(
    private readonly content?: ContentRepository,
    private readonly progress?: ProgressRepository,
    private readonly now: () => string = () => new Date().toISOString(),
    // O identificador é local, sem finalidade de autenticação; HTTP na rede pode não oferecer randomUUID.
    private readonly createId: () => string = () => globalThis.crypto?.randomUUID?.() ??
      ('example-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)),
  ) {
    const loaded = progress?.loadResult() ?? { result: null, status: 'none' as const };
    this.state = Object.freeze({
      screen: 'home', selectedCourse: null, attempt: null,
      lastResult: loaded.result, saveStatus: loaded.status, contentError: null,
    });
  }

  get snapshot(): SessionState { return this.state; }

  dispatch(command: Command): SessionState {
    const current = this.state;
    const attempt = current.attempt;
    switch (command.type) {
      case 'start':
      case 'change-course':
        this.update({ screen: 'course-select', attempt: null, contentError: null });
        break;
      case 'select-course':
        if (current.screen !== 'course-select' || !isCourseId(command.course)) {
          throw new Error('Selecione um dos cinco cursos disponíveis.');
        }
        this.update({ selectedCourse: command.course });
        break;
      case 'enter-central':
        if (current.screen !== 'course-select' || current.selectedCourse === null) {
          throw new Error('Escolha seu curso antes de entrar na central.');
        }
        this.update({ screen: 'map', contentError: null });
        break;
      case 'start-phase':
        if (current.screen !== 'map' || !current.selectedCourse) return current;
        try {
          if (!this.content) throw new Error('Catálogo ausente.');
          const questions = this.content.questionsForCourse(current.selectedCourse);
          this.update({ screen: 'question', contentError: null,
            attempt: createAttempt(this.createId(), current.selectedCourse, questions) });
        } catch {
          this.update({ contentError: 'Os exemplos estão indisponíveis ou inválidos. Nenhuma fase foi iniciada. Você pode tentar novamente ou voltar ao menu.' });
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
        if (attempt.index < 9) {
          this.update({ attempt: Object.freeze({ ...attempt, index: attempt.index + 1, selectedOptionId: null }) });
        } else if (isComplete(attempt)) {
          const score = calculateScore(attempt.answers);
          const result: ExampleResult = Object.freeze({
            schemaVersion: 1, contentVersion: 'example-1', mode: 'example', phaseId: 'FASE-EXEMPLO-01',
            attemptId: attempt.id, course: attempt.courseAtStart, total: 10,
            score, correctCount: score / 100, completedAt: this.now(),
          });
          this.update({ screen: 'result', lastResult: result,
            saveStatus: this.progress?.saveResult(result) ? 'saved' : 'failed' });
        }
        break;
      case 'retry-save':
        if (current.screen === 'result' && current.lastResult && current.saveStatus === 'failed') {
          this.update({ saveStatus: this.progress?.saveResult(current.lastResult) ? 'saved' : 'failed' });
        }
        break;
      case 'home':
        // Não há retomada de partida nesta entrega; o último resumo permanece.
        this.update({ screen: 'home', attempt: null, contentError: null });
        break;
    }
    return this.state;
  }

  private update(patch: Partial<SessionState>): void {
    this.state = Object.freeze({ ...this.state, ...patch });
  }

  get questionId(): string | null {
    return this.state.attempt ? currentQuestion(this.state.attempt).id : null;
  }
}
