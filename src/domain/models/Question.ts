import type { CourseId } from './Course';
import type { ContentMode, EditorialMetadata } from './EditorialMetadata';

export const CLASSIFICATIONS = ['COMUM', 'CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;
export type Classification = (typeof CLASSIFICATIONS)[number];
export const OPTION_IDS = ['A', 'B', 'C', 'D', 'E'] as const;
export type OptionId = (typeof OPTION_IDS)[number];

export interface Question extends EditorialMetadata {
  readonly id: string;
  readonly version: number;
  readonly classification: Classification;
  /** Marcadores de compatibilidade; a revisão docente é validationStatus. */
  readonly example?: boolean;
  readonly editorialStatus?: ContentMode;
  readonly context: string;
  readonly prompt: string;
  readonly options: readonly { readonly id: OptionId; readonly text: string }[];
  readonly correctOptionId: OptionId;
  readonly explanation: string;
  readonly feedbackByOption: Readonly<Record<OptionId, string>>;
}
export interface QuestionCatalog {
  readonly mode: ContentMode;
  readonly contentVersion: string;
  readonly phaseId: string;
  readonly questions: readonly Question[];
}
/** Entrada histórica; normalizada em memória, nunca promovida a conteúdo aprovado. */
export type LegacyQuestion = Omit<Question, keyof EditorialMetadata | 'example' | 'editorialStatus'> & {
  readonly courses: readonly CourseId[];
  readonly example: true;
  readonly editorialStatus: 'example';
};
