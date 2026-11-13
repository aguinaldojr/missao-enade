import Ajv from 'ajv';
import questionSchema from '../../schemas/legacy-question.schema.json';
import puzzleSchema from '../../schemas/legacy-puzzles.schema.json';
import type { EditorialMetadata } from '../../domain/models/EditorialMetadata';
import type { LegacyQuestion } from '../../domain/models/Question';
import type { LegacySequencePuzzle } from '../../domain/puzzles/SequencePuzzle';

const ajv = new Ajv();
const legacyQuestion = ajv.compile<LegacyQuestion>(questionSchema.properties.questions.items);
const legacyPuzzle = ajv.compile<LegacySequencePuzzle>(puzzleSchema.items);

/** Metadados descritivos dos exemplos antigos; não são uma associação à matriz oficial. */
export function legacyQuestionMetadata(): Omit<EditorialMetadata, 'courses'> {
  return {
    collectionId: 'n9-provisional-questions-v1',
    pedagogicalOrigin: 'Exemplos autorais fictícios do protótipo; pendentes de revisão docente.',
    area: 'Raciocínio e competências digitais (exemplos)',
    competencies: ['Interpretar dados e restrições em situações fictícias.'],
    difficulty: 'introductory',
    source: { type: 'fictional', description: 'Conteúdo fictício do protótipo N9; pendente de revisão docente.' },
    validationStatus: 'provisional-pending-teacher-review',
  };
}
export function normalizeQuestionInput(value: unknown): unknown {
  return legacyQuestion(value) ? { ...value, ...legacyQuestionMetadata() } : value;
}
export function normalizePuzzleInput(value: unknown): unknown {
  if (!legacyPuzzle(value)) return value;
  const { collection, ...rest } = value;
  return { ...rest, collectionId: collection };
}
