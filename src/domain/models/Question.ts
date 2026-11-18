import type { CourseId } from './Course';
import type { ContentMode, EditorialMetadata } from './EditorialMetadata';

export const CLASSIFICATIONS = ['COMUM', 'CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;
export type Classification = (typeof CLASSIFICATIONS)[number];
export const OPTION_IDS = ['A', 'B', 'C', 'D', 'E'] as const;
export type OptionId = (typeof OPTION_IDS)[number];

export interface QuestionCodeBlock {
  readonly type: 'code';
  readonly language: 'sql' | 'c' | 'python' | 'text';
  readonly caption: string;
  readonly code: string;
}
export interface QuestionTableBlock {
  readonly type: 'table';
  readonly caption: string;
  readonly columns: readonly {
    readonly key: string;
    readonly label: string;
    readonly align?: 'left' | 'center' | 'right';
  }[];
  readonly rows: readonly (readonly string[])[];
}
export interface QuestionDiagramBlock {
  readonly type: 'diagram';
  readonly title: string;
  readonly description: string;
  readonly nodes: readonly { readonly id: string; readonly label: string; readonly details?: string }[];
  readonly edges: readonly { readonly from: string; readonly to: string; readonly label: string }[];
}
export interface QuestionImageBlock {
  readonly type: 'image';
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
}
export type QuestionPresentationBlock = QuestionCodeBlock | QuestionTableBlock | QuestionDiagramBlock | QuestionImageBlock;
export interface QuestionPresentation {
  readonly blocks: readonly QuestionPresentationBlock[];
}

export interface Question extends EditorialMetadata {
  readonly id: string;
  readonly version: number;
  readonly classification: Classification;
  /** Marcadores históricos de compatibilidade; a governança ativa é validationStatus. */
  readonly example?: boolean;
  readonly editorialStatus?: ContentMode;
  readonly context: string;
  readonly presentation?: QuestionPresentation;
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
