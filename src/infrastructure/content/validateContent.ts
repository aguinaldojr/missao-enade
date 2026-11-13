import Ajv from 'ajv';
import schema from '../../schemas/question.schema.json';
import type { QuestionCatalog } from '../../domain/models/Question';

const validate = new Ajv({ allErrors: true }).compile<QuestionCatalog>(schema);

export function validateContent(data: unknown): QuestionCatalog {
  if (!validate(data)) throw new Error('Arquivo de exemplos inválido: ' + new Ajv().errorsText(validate.errors));
  const ids = new Set<string>();
  for (const question of data.questions) {
    if (ids.has(question.id)) throw new Error('ID de questão duplicado: ' + question.id);
    ids.add(question.id);
    if (new Set(question.options.map((option) => option.id)).size !== 5 ||
        !question.options.some((option) => option.id === question.correctOptionId)) {
      throw new Error('Alternativas ou gabarito inválidos: ' + question.id);
    }
  }
  return data;
}
