import type { QuestionMissionConfig } from '../domain/models/QuestionMission';

export const QUESTION_MISSIONS = Object.freeze({
  quick: Object.freeze({ id: 'quick', internalTitle: 'Missão rápida', questionCount: 3, commonQuestionCount: 1, specificQuestionCount: 2 }),
  normal: Object.freeze({ id: 'normal', internalTitle: 'Missão curta', questionCount: 5, commonQuestionCount: 2, specificQuestionCount: 3 }),
  special: Object.freeze({ id: 'special', internalTitle: 'Missão padrão', questionCount: 10, commonQuestionCount: 5, specificQuestionCount: 5 }),
  arena: Object.freeze({ id: 'arena', internalTitle: 'Arena N9', questionCount: 20, commonQuestionCount: 10, specificQuestionCount: 10 }),
  journey25: Object.freeze({ id: 'journey-25', internalTitle: 'Jornada N9', questionCount: 25, commonQuestionCount: 5, specificQuestionCount: 20 }),
} satisfies Record<string, QuestionMissionConfig>);

export const QUESTION_MISSION_LIST: readonly QuestionMissionConfig[] = Object.freeze([
  QUESTION_MISSIONS.journey25,
]);

/** Única configuração ligada ao computador atual; mantém a composição e ordem anteriores. */
export const LEGACY_EXAMPLE_MISSION: QuestionMissionConfig = Object.freeze({
  id: 'FASE-EXEMPLO-01', internalTitle: 'Fase de exemplos atual',
  questionCount: 10, commonQuestionCount: 9, specificQuestionCount: 1,
});
export const EXAMPLE_QUESTION_COLLECTION = 'n9-provisional-questions-v1';
