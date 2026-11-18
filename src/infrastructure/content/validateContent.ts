import schema from '../../schemas/question.schema.json';
import type { QuestionCatalog } from '../../domain/models/Question';
import type { QuestionPresentation } from '../../domain/models/Question';
import type { CollectionRepository } from '../../ports/CollectionRepository';
import { createEditorialAjv, validateEditorialReferences } from './editorialValidation';
import { learningCollections } from './JsonCollectionRepository';
import { normalizeQuestionInput } from './legacyEditorial';

const ajv = createEditorialAjv();
const validate = ajv.compile<QuestionCatalog>(schema);

export function validateContent(data: unknown, collections: CollectionRepository = learningCollections): QuestionCatalog {
  const candidate = typeof data === 'object' && data !== null && 'questions' in data && Array.isArray(data.questions)
    ? { ...data, questions: data.questions.map(normalizeQuestionInput) } : data;
  if (!validate(candidate)) throw new Error('Catálogo de questões inválido: ' + ajv.errorsText(validate.errors));
  const ids = new Set<string>();
  for (const question of candidate.questions) {
    validateEditorialReferences(question, collections);
    if (ids.has(question.id)) throw new Error('ID de questão duplicado: ' + question.id);
    ids.add(question.id);
    if (new Set(question.options.map((option) => option.id)).size !== 5 ||
        !question.options.some((option) => option.id === question.correctOptionId)) {
      throw new Error('Alternativas ou gabarito inválidos: ' + question.id);
    }
    if (question.presentation) validatePresentation(question.id, question.presentation);
  }
  return candidate;
}

function validatePresentation(questionId: string, presentation: QuestionPresentation): void {
  for (const block of presentation.blocks) {
    if (block.type === 'table') {
      const keys = block.columns.map((column) => column.key);
      if (new Set(keys).size !== keys.length || block.rows.some((row) => row.length !== block.columns.length)) {
        throw new Error('Tabela de apresentação inválida: ' + questionId);
      }
    }
    if (block.type === 'diagram') {
      const nodeIds = block.nodes.map((node) => node.id);
      const knownNodes = new Set(nodeIds);
      const edges = block.edges.map((edge) => edge.from + '\u0000' + edge.to + '\u0000' + edge.label);
      if (knownNodes.size !== nodeIds.length || new Set(edges).size !== edges.length ||
          block.edges.some((edge) => !knownNodes.has(edge.from) || !knownNodes.has(edge.to))) {
        throw new Error('Diagrama de apresentação inválido: ' + questionId);
      }
    }
  }
}
