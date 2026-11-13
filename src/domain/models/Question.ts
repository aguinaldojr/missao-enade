import type { CourseId } from './Course';

export const CLASSIFICATIONS = ['COMUM', 'CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;
export type Classification = (typeof CLASSIFICATIONS)[number];
export const OPTION_IDS = ['A', 'B', 'C', 'D', 'E'] as const;
export type OptionId = (typeof OPTION_IDS)[number];

export interface Question {
  readonly id: string;
  readonly version: number;
  readonly classification: Classification;
  readonly courses: readonly CourseId[];
  readonly example: true;
  readonly editorialStatus: 'example';
  readonly context: string;
  readonly prompt: string;
  readonly options: readonly { readonly id: OptionId; readonly text: string }[];
  readonly correctOptionId: OptionId;
  readonly explanation: string;
  readonly feedbackByOption: Readonly<Record<OptionId, string>>;
}

export interface QuestionCatalog {
  readonly mode: 'example';
  readonly contentVersion: 'example-1';
  readonly phaseId: 'FASE-EXEMPLO-01';
  readonly questions: readonly Question[];
}
