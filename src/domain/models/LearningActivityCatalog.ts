import type { CourseId } from './Course';
import type { Difficulty, EditorialSource, EditorialTraceability, ValidationStatus } from './EditorialMetadata';

export const LEARNING_MECHANICS = [
  'single-choice', 'binary-choice', 'multiple-select', 'sequence-order', 'pair-match',
  'categorize', 'fill-slot', 'visual-hotspot', 'decision-dialogue',
] as const;
export type LearningMechanic = (typeof LEARNING_MECHANICS)[number];

export interface LearningHelp {
  readonly hint: string;
  readonly concept: string;
  readonly example: string;
}

export interface LearningActivityBase {
  readonly id: string;
  readonly title: string;
  readonly mechanic: LearningMechanic;
  readonly courses: readonly CourseId[];
  readonly area: string;
  readonly conceptId: string;
  readonly difficulty: Difficulty;
  readonly context: string;
  readonly instruction: string;
  readonly xp: number;
  readonly help: LearningHelp;
  readonly explanation: string;
  readonly sources: readonly EditorialSource[];
  readonly sourceVerificationNeeded: boolean;
  readonly traceability: EditorialTraceability;
  readonly validationStatus: ValidationStatus;
}

export interface LearningOption {
  readonly id: string;
  readonly text: string;
  readonly feedback: string;
}

export type LearningPayload =
  | { readonly type: 'single-choice'; readonly options: readonly LearningOption[]; readonly correctId: string }
  | { readonly type: 'binary-choice'; readonly statement: string; readonly correctValue: boolean;
      readonly feedbackTrue: string; readonly feedbackFalse: string }
  | { readonly type: 'multiple-select'; readonly requiredCount: number;
      readonly options: readonly (LearningOption & { readonly correct: boolean })[] }
  | { readonly type: 'sequence-order'; readonly blocks: readonly { readonly id: string; readonly text: string }[];
      readonly correctOrder: readonly string[] }
  | { readonly type: 'pair-match'; readonly pairs: readonly { readonly id: string; readonly left: string; readonly right: string }[] }
  | { readonly type: 'categorize'; readonly categories: readonly { readonly id: string; readonly label: string;
      readonly description: string }[]; readonly items: readonly { readonly id: string; readonly text: string;
      readonly categoryId: string }[] }
  | { readonly type: 'fill-slot'; readonly language?: 'c' | 'python' | 'javascript' | 'sql' | 'text';
      readonly contentBefore: string; readonly contentAfter: string; readonly tokens: readonly { readonly id: string;
      readonly text: string; readonly feedback: string }[]; readonly correctTokenId: string }
  | { readonly type: 'visual-hotspot'; readonly visualDescription: string; readonly accessibleDescription: string;
      readonly nodes: readonly { readonly id: string; readonly label: string; readonly detail: string }[];
      readonly correctNodeId: string }
  | { readonly type: 'decision-dialogue'; readonly steps: readonly { readonly id: string; readonly speaker: string;
      readonly message: string; readonly choices: readonly { readonly id: string; readonly text: string;
      readonly reaction: string; readonly correct: boolean }[] }[] };

export type CatalogLearningActivity = LearningActivityBase & { readonly payload: LearningPayload };

export interface LearningActivityCatalog {
  readonly schemaVersion: 1;
  readonly batchId: string;
  readonly activities: readonly CatalogLearningActivity[];
}

