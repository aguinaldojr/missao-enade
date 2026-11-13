import type { QuestionMissionConfig } from '../domain/models/QuestionMission';

export const QUESTION_MISSIONS = Object.freeze({
  quick: Object.freeze({ id: 'quick', internalTitle: 'Missão rápida', questionCount: 3, commonQuestionCount: 1, specificQuestionCount: 2 }),
  normal: Object.freeze({ id: 'normal', internalTitle: 'Missão normal', questionCount: 5, commonQuestionCount: 2, specificQuestionCount: 3 }),
  special: Object.freeze({ id: 'special', internalTitle: 'Missão especial', questionCount: 10, commonQuestionCount: 5, specificQuestionCount: 5 }),
  arena: Object.freeze({ id: 'arena', internalTitle: 'Arena N9', questionCount: 20, commonQuestionCount: 10, specificQuestionCount: 10 }),
} satisfies Record<string, QuestionMissionConfig>);

/** Única configuração ligada ao computador atual; mantém a composição e ordem anteriores. */
export const LEGACY_EXAMPLE_MISSION: QuestionMissionConfig = Object.freeze({
  id: 'FASE-EXEMPLO-01', internalTitle: 'Fase de exemplos atual',
  questionCount: 10, commonQuestionCount: 9, specificQuestionCount: 1,
});
export const EXAMPLE_QUESTION_COLLECTION = 'n9-provisional-questions-v1';
