import type { QuestionMissionConfig } from './QuestionMission';
import type { CourseId } from './Course';
import type { OptionId, Question } from './Question';

export interface Answer {
  readonly questionId: string;
  readonly questionVersion: number;
  readonly selectedOptionId: OptionId;
  readonly isCorrect: boolean;
  readonly feedbackAccessed: boolean;
}

export interface Attempt {
  readonly id: string;
  readonly courseAtStart: CourseId;
  readonly mission: QuestionMissionConfig;
  readonly questions: readonly Question[];
  readonly answers: readonly Answer[];
  readonly index: number;
  readonly selectedOptionId: OptionId | null;
}

/** Somente o resumo de uma fase fictícia concluída; não é um save de progresso. */
export interface ExampleResult {
  readonly schemaVersion: 1;
  readonly contentVersion: 'example-1';
  readonly mode: 'example';
  readonly phaseId: 'FASE-EXEMPLO-01';
  readonly attemptId: string;
  readonly course: CourseId;
  readonly total: 10;
  readonly correctCount: number;
  readonly score: number;
  readonly completedAt: string;
}

/** Resumo local das missões da coleção provisória; não certifica aprendizagem. */
export interface MissionResult {
  readonly schemaVersion: 1;
  readonly contentVersion: string;
  readonly mode: 'provisional';
  readonly phaseId: string;
  readonly missionId: string;
  readonly attemptId: string;
  readonly course: CourseId;
  readonly total: number;
  readonly correctCount: number;
  readonly score: number;
  readonly completedAt: string;
}

export type SavedResult = ExampleResult | MissionResult;
