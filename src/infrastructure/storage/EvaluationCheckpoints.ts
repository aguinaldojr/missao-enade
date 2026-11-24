import type { Attempt } from '../../domain/models/Attempt';
import type { CourseId } from '../../domain/models/Course';
import type { Question } from '../../domain/models/Question';
import type { QuestionMissionConfig } from '../../domain/models/QuestionMission';
import { accessFeedback, confirmAnswer, createAttempt, selectOption } from '../../domain/progression';

export type Gate = 'entrada' | 'intervalo' | 'final' | null;

export class EvaluationCheckpoints {
  constructor(private readonly storage = () => window.localStorage) {}
  private key(player: string, course?: CourseId): string {
    return 'n9.evaluation.v1.' + encodeURIComponent(player) + '.' + (course ?? 'tutorial');
  }
  tutorialDone(player: string): boolean {
    try { return this.storage().getItem(this.key(player)) === '1'; } catch { return false; }
  }
  finishTutorial(player: string): void {
    try { this.storage().setItem(this.key(player), '1'); } catch { /* O jogo continua nesta sessão. */ }
  }
  clear(player: string, course: CourseId): void {
    try { this.storage().removeItem(this.key(player, course)); } catch { /* armazenamento indisponível */ }
  }
  save(player: string, attempt: Attempt, gate: Gate, start: number | null): boolean {
    try {
      this.storage().setItem(this.key(player, attempt.courseAtStart), JSON.stringify({
        id: attempt.id, questions: attempt.questions.map(q => [q.id, q.version]), answers: attempt.answers,
        index: attempt.index, selected: attempt.selectedOptionId, gate, start,
      }));
      return true;
    } catch { return false; }
  }
  load(player: string, course: CourseId, mission: QuestionMissionConfig, bank: readonly Question[]) {
    try {
      const data = JSON.parse(this.storage().getItem(this.key(player, course)) ?? 'null');
      if (!data || typeof data.id !== 'string' || !Number.isInteger(data.index) || data.index < 0 ||
        data.index >= mission.questionCount || !Array.isArray(data.answers) ||
        data.answers.length < data.index || data.answers.length > data.index + 1 ||
        ![null, 'entrada', 'intervalo', 'final'].includes(data.gate) ||
        (data.gate === 'entrada' && data.index !== 0) || (data.gate === 'intervalo' && data.index !== 10) ||
        (data.gate === 'final' && data.index !== 20)) return null;
      const questions = data.questions.map(([id, version]: [string, number]) => bank.find(q => q.id === id && q.version === version));
      let attempt = createAttempt(data.id, course, questions, mission);
      for (const [index, answer] of data.answers.entries()) {
        if (answer.questionId !== questions[index].id || (index < data.index && !answer.feedbackAccessed)) return null;
        attempt = selectOption({ ...attempt, index }, answer.questionId, answer.selectedOptionId);
        attempt = confirmAnswer(attempt, answer.questionId);
        if (answer.feedbackAccessed) attempt = accessFeedback(attempt, answer.questionId);
      }
      attempt = { ...attempt, index: data.index, selectedOptionId: null };
      if (data.selected) attempt = selectOption(attempt, questions[data.index].id, data.selected);
      return { attempt, gate: data.gate as Gate, start: Number.isFinite(data.start) ? Number(data.start) : null };
    } catch { return null; }
  }
}
