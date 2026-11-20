import learningSchema from '../../schemas/learning-activities.schema.json';
import type { CatalogLearningActivity, LearningActivityCatalog, LearningPayload } from '../../domain/models/LearningActivityCatalog';
import { createEditorialAjv } from './editorialValidation';

const ajv = createEditorialAjv();
const validate = ajv.compile<LearningActivityCatalog>(learningSchema);

function unique(values: readonly string[], message: string): void {
  if (new Set(values).size !== values.length) throw new Error(message);
}

function validatePayload(activity: CatalogLearningActivity): void {
  const payload = activity.payload;
  if (activity.mechanic !== payload.type) throw new Error('Mecânica e payload incompatíveis: ' + activity.id);
  if (payload.type === 'single-choice') {
    unique(payload.options.map((option) => option.id), 'Opções duplicadas: ' + activity.id);
    if (!payload.options.some((option) => option.id === payload.correctId)) throw new Error('Resposta ausente: ' + activity.id);
  } else if (payload.type === 'multiple-select') {
    unique(payload.options.map((option) => option.id), 'Opções duplicadas: ' + activity.id);
    if (payload.options.filter((option) => option.correct).length !== payload.requiredCount) {
      throw new Error('Quantidade de respostas corretas incompatível: ' + activity.id);
    }
  } else if (payload.type === 'sequence-order') {
    const ids = payload.blocks.map((block) => block.id);
    unique(ids, 'Blocos duplicados: ' + activity.id);
    unique(payload.correctOrder, 'Ordem correta duplicada: ' + activity.id);
    if (ids.length !== payload.correctOrder.length || ids.some((id) => !payload.correctOrder.includes(id))) {
      throw new Error('Ordem correta não corresponde aos blocos: ' + activity.id);
    }
  } else if (payload.type === 'pair-match') {
    unique(payload.pairs.map((pair) => pair.id), 'Pares duplicados: ' + activity.id);
    unique(payload.pairs.map((pair) => pair.left.trim().toLocaleLowerCase()), 'Termos repetidos à esquerda: ' + activity.id);
    unique(payload.pairs.map((pair) => pair.right.trim().toLocaleLowerCase()), 'Termos repetidos à direita: ' + activity.id);
  } else if (payload.type === 'categorize') {
    const categories = payload.categories.map((category) => category.id);
    unique(categories, 'Categorias duplicadas: ' + activity.id);
    unique(payload.items.map((item) => item.id), 'Itens duplicados: ' + activity.id);
    if (payload.items.some((item) => !categories.includes(item.categoryId))) throw new Error('Categoria desconhecida: ' + activity.id);
  } else if (payload.type === 'fill-slot') {
    unique(payload.tokens.map((token) => token.id), 'Blocos de preenchimento duplicados: ' + activity.id);
    if (!payload.tokens.some((token) => token.id === payload.correctTokenId)) throw new Error('Bloco correto ausente: ' + activity.id);
  } else if (payload.type === 'visual-hotspot') {
    unique(payload.nodes.map((node) => node.id), 'Elementos visuais duplicados: ' + activity.id);
    if (!payload.nodes.some((node) => node.id === payload.correctNodeId)) throw new Error('Elemento correto ausente: ' + activity.id);
  } else if (payload.type === 'decision-dialogue') {
    unique(payload.steps.map((step) => step.id), 'Etapas de diálogo duplicadas: ' + activity.id);
    for (const step of payload.steps) {
      unique(step.choices.map((choice) => choice.id), 'Escolhas de diálogo duplicadas: ' + activity.id + '/' + step.id);
      if (step.choices.filter((choice) => choice.correct).length !== 1) {
        throw new Error('Diálogo deve possuir uma decisão adequada por etapa: ' + activity.id + '/' + step.id);
      }
    }
  }
}

function playerText(activity: CatalogLearningActivity): string {
  return JSON.stringify({ title: activity.title, area: activity.area, context: activity.context,
    instruction: activity.instruction, help: activity.help, explanation: activity.explanation,
    payload: activity.payload as LearningPayload });
}

export function validateLearningActivities(data: unknown): LearningActivityCatalog {
  if (!validate(data)) throw new Error('Lote de aprendizagem inválido: ' + ajv.errorsText(validate.errors));
  unique(data.activities.map((activity) => activity.id), 'IDs de atividades duplicados.');
  for (const activity of data.activities) {
    if (activity.sources.filter((source) => source.role === 'primary').length !== 1) {
      throw new Error('Atividade deve possuir exatamente uma fonte principal: ' + activity.id);
    }
    if (/enade/i.test(playerText(activity))) throw new Error('Referência pedagógica interna exposta ao jogador: ' + activity.id);
    validatePayload(activity);
  }
  return data;
}

