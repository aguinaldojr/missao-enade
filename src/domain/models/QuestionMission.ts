import type { CourseId } from './Course';
import type { Question } from './Question';

export interface MissionQuestionCounts {
  readonly questionCount: number;
  readonly commonQuestionCount: number;
  readonly specificQuestionCount: number;
}
export interface QuestionMissionConfig extends MissionQuestionCounts {
  readonly id: string;
  readonly internalTitle: string;
}
export interface MissionSelectionRequest {
  readonly course: CourseId;
  readonly collectionId: string;
  readonly mission: QuestionMissionConfig;
  /** Exclusão explícita para futura origem de histórico; não lê nem grava progresso. */
  readonly excludedQuestionIds?: readonly string[];
}
export interface MissionAvailability {
  readonly available: boolean;
  readonly required: MissionQuestionCounts;
  readonly availableCounts: MissionQuestionCounts;
  /** Déficit por cota; questionCount é a soma dos dois déficits. */
  readonly missing: MissionQuestionCounts;
}
/** Estratégia pura que somente reordena o pool recebido; default é a ordem do banco. */
export type QuestionOrderingStrategy = (questions: readonly Question[]) => readonly Question[];

export function assertMissionConfig(config: QuestionMissionConfig): void {
  if (!config || typeof config.id !== 'string' || !config.id.trim() ||
      typeof config.internalTitle !== 'string' || !config.internalTitle.trim() ||
      !Number.isSafeInteger(config.questionCount) || config.questionCount <= 0 ||
      !Number.isSafeInteger(config.commonQuestionCount) || config.commonQuestionCount < 0 ||
      !Number.isSafeInteger(config.specificQuestionCount) || config.specificQuestionCount < 0 ||
      config.commonQuestionCount + config.specificQuestionCount !== config.questionCount) {
    throw new Error('Configuração de missão inválida: quantidade positiva e inteira; comuns + específicas devem somar questionCount.');
  }
}
