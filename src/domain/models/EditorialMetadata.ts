import type { CourseId } from './Course';

export const DIFFICULTIES = ['introductory', 'intermediate', 'advanced'] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];
export const SOURCE_TYPES = ['official-reference', 'institutional', 'authorial', 'fictional'] as const;
export type SourceType = (typeof SOURCE_TYPES)[number];
export const SOURCE_ROLES = ['primary', 'normative-complementary', 'technical'] as const;
export type SourceRole = (typeof SOURCE_ROLES)[number];
export const VALIDATION_STATUSES = [
  'draft',
  'under-ai-review',
  'needs-revision',
  'ready-for-pilot',
  'ready-for-release',
  'rejected',
] as const;
export type ValidationStatus = (typeof VALIDATION_STATUSES)[number];
export const LEGACY_VALIDATION_STATUSES = ['provisional-pending-teacher-review', 'approved-teacher'] as const;
export type LegacyValidationStatus = (typeof LEGACY_VALIDATION_STATUSES)[number];

/** Compatibilidade somente de leitura: estados antigos nunca promovem conteúdo automaticamente. */
export function normalizeValidationStatus(status: ValidationStatus | LegacyValidationStatus): ValidationStatus {
  if (status === 'provisional-pending-teacher-review') return 'under-ai-review';
  if (status === 'approved-teacher') return 'ready-for-pilot';
  return status;
}
export const CONTENT_MODES = ['example', 'provisional', 'pilot', 'approved'] as const;
export type ContentMode = (typeof CONTENT_MODES)[number];

export interface EditorialSource {
  readonly role: SourceRole;
  readonly type: SourceType;
  readonly description: string;
  readonly url?: string;
  readonly year?: number;
  readonly documentId?: string;
}
export type LegacyEditorialSource = Omit<EditorialSource, 'role'>;
export interface EditorialTraceability {
  readonly title: string;
  readonly objective: string;
  readonly locators: readonly string[];
}
export interface EditorialMetadata {
  readonly collectionId: string;
  readonly pedagogicalOrigin: string;
  readonly courses: readonly CourseId[];
  readonly area: string;
  readonly competencies: readonly string[];
  readonly difficulty: Difficulty;
  readonly sources: readonly EditorialSource[];
  readonly traceability?: EditorialTraceability;
  readonly validationStatus: ValidationStatus;
}
export const COLLECTION_STATUSES = ['planned', 'pilot', 'active', 'archived'] as const;
export type CollectionStatus = (typeof COLLECTION_STATUSES)[number];
export interface LearningCollection {
  readonly id: string;
  readonly pedagogicalOrigin: string;
  readonly status: CollectionStatus;
}
