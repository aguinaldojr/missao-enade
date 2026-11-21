import catalogOne from './learning/n9-com-01.json';
import catalogTwo from './learning/n9-com-02.json';
import catalogThree from './learning/n9-com-03.json';
import catalogFour from './learning/n9-com-04.json';
import type { CatalogLearningActivity } from '../domain/models/LearningActivityCatalog';
import { JsonLearningActivityRepository } from '../infrastructure/content/JsonLearningActivityRepository';

export type LearningActivityType = 'choice' | 'binary-choice' | 'multiple-select' | 'order' | 'match' |
  'categorize' | 'complete-code' | 'hotspot' | 'decision-dialogue';

interface ActivityBase {
  readonly id: string;
  readonly type: LearningActivityType;
  readonly title: string;
  readonly area: string;
  readonly instruction: string;
  readonly context: string;
  readonly explanation: string;
  readonly xp: number;
  readonly help: { readonly hint: string; readonly concept: string; readonly example: string };
}

interface FeedbackOption {
  readonly id: string;
  readonly text: string;
  readonly feedback: string;
}

export interface ChoiceActivity extends ActivityBase {
  readonly type: 'choice';
  readonly options: readonly FeedbackOption[];
  readonly correctId: string;
}

export interface BinaryChoiceActivity extends ActivityBase {
  readonly type: 'binary-choice';
  readonly statement: string;
  readonly correctValue: boolean;
  readonly feedbackTrue: string;
  readonly feedbackFalse: string;
}

export interface MultipleSelectActivity extends ActivityBase {
  readonly type: 'multiple-select';
  readonly requiredCount: number;
  readonly options: readonly (FeedbackOption & { readonly correct: boolean })[];
}

export interface OrderActivity extends ActivityBase {
  readonly type: 'order';
  readonly blocks: readonly { readonly id: string; readonly text: string }[];
  readonly correctOrder: readonly string[];
}

export interface MatchActivity extends ActivityBase {
  readonly type: 'match';
  readonly pairs: readonly { readonly id: string; readonly left: string; readonly right: string }[];
}

export interface CategorizeActivity extends ActivityBase {
  readonly type: 'categorize';
  readonly categories: readonly { readonly id: string; readonly label: string; readonly description: string }[];
  readonly items: readonly { readonly id: string; readonly text: string; readonly categoryId: string }[];
}

export interface CompleteCodeActivity extends ActivityBase {
  readonly type: 'complete-code';
  readonly language?: 'c' | 'python' | 'javascript' | 'sql' | 'text';
  readonly codeBefore: string;
  readonly codeAfter: string;
  readonly tokens: readonly FeedbackOption[];
  readonly correctTokenId: string;
}

export interface HotspotActivity extends ActivityBase {
  readonly type: 'hotspot';
  readonly visualDescription: string;
  readonly accessibleDescription: string;
  readonly nodes: readonly { readonly id: string; readonly label: string; readonly detail: string }[];
  readonly correctNodeId: string;
}

export interface DecisionDialogueActivity extends ActivityBase {
  readonly type: 'decision-dialogue';
  readonly steps: readonly {
    readonly id: string;
    readonly speaker: string;
    readonly message: string;
    readonly choices: readonly {
      readonly id: string;
      readonly text: string;
      readonly reaction: string;
      readonly correct: boolean;
    }[];
  }[];
}

export type LearningActivity = ChoiceActivity | BinaryChoiceActivity | MultipleSelectActivity | OrderActivity |
  MatchActivity | CategorizeActivity | CompleteCodeActivity | HotspotActivity | DecisionDialogueActivity;

function base(activity: CatalogLearningActivity): Omit<ActivityBase, 'type'> {
  return {
    id: activity.id,
    title: activity.title,
    area: activity.area,
    instruction: activity.instruction,
    context: activity.context,
    explanation: activity.explanation,
    xp: activity.xp,
    help: activity.help,
  };
}

function toLearningActivity(activity: CatalogLearningActivity): LearningActivity {
  const shared = base(activity);
  const payload = activity.payload;
  switch (payload.type) {
    case 'single-choice': return { ...shared, type: 'choice', options: payload.options, correctId: payload.correctId };
    case 'binary-choice': return { ...shared, type: 'binary-choice', statement: payload.statement,
      correctValue: payload.correctValue, feedbackTrue: payload.feedbackTrue, feedbackFalse: payload.feedbackFalse };
    case 'multiple-select': return { ...shared, type: 'multiple-select', requiredCount: payload.requiredCount,
      options: payload.options };
    case 'sequence-order': return { ...shared, type: 'order', blocks: payload.blocks, correctOrder: payload.correctOrder };
    case 'pair-match': return { ...shared, type: 'match', pairs: payload.pairs };
    case 'categorize': return { ...shared, type: 'categorize', categories: payload.categories, items: payload.items };
    case 'fill-slot': return { ...shared, type: 'complete-code', language: payload.language,
      codeBefore: payload.contentBefore, codeAfter: payload.contentAfter, tokens: payload.tokens,
      correctTokenId: payload.correctTokenId };
    case 'visual-hotspot': return { ...shared, type: 'hotspot', visualDescription: payload.visualDescription,
      accessibleDescription: payload.accessibleDescription, nodes: payload.nodes, correctNodeId: payload.correctNodeId };
    case 'decision-dialogue': return { ...shared, type: 'decision-dialogue', steps: payload.steps };
  }
}

const activities = [catalogOne, catalogTwo, catalogThree, catalogFour]
  .flatMap((catalog) => new JsonLearningActivityRepository(catalog).all());
if (new Set(activities.map((activity) => activity.id)).size !== activities.length) {
  throw new Error('IDs duplicados entre lotes de aprendizagem.');
}

/** Lote compartilhado validado pelo contrato editorial antes de chegar à interface. */
export const N9_SHARED_LEARNING_LAB: readonly LearningActivity[] = Object.freeze(activities.map(toLearningActivity));

/** Alias temporário para consumidores do protótipo anterior. */
export const SI_LEARNING_LAB = N9_SHARED_LEARNING_LAB;
