import { isCourseId, type CourseId } from './models/Course';
import type { Question } from './models/Question';
import { assertMissionConfig, type MissionAvailability, type MissionSelectionRequest,
  type QuestionMissionConfig, type QuestionOrderingStrategy } from './models/QuestionMission';

function assertQuestionBank(bank: readonly Question[]): void {
  const ids = new Set<string>();
  for (const question of bank) {
    if (!question || typeof question !== 'object' || 'kind' in question ||
        !Array.isArray(question.options) || typeof question.correctOptionId !== 'string' ||
        !Array.isArray(question.courses) || typeof question.collectionId !== 'string') {
      throw new Error('Banco de questões inválido: puzzles não podem ser usados na seleção de questões.');
    }
    if (ids.has(question.id)) throw new Error('Banco de questões contém ID duplicado: ' + question.id);
    ids.add(question.id);
  }
}
function pools(bank: readonly Question[], request: MissionSelectionRequest) {
  assertMissionConfig(request.mission);
  if (!isCourseId(request.course)) throw new Error('Curso desconhecido. Escolha CC, SI, TADS, TGTI ou TRC.');
  if (typeof request.collectionId !== 'string' || !request.collectionId.trim()) throw new Error('Informe uma coleção para selecionar a missão.');
  assertQuestionBank(bank);
  const excluded = new Set(request.excludedQuestionIds ?? []);
  const eligible = bank.filter((question) => question.collectionId === request.collectionId &&
    question.courses.includes(request.course) && !excluded.has(question.id));
  return {
    common: eligible.filter((question) => question.classification === 'COMUM'),
    specific: eligible.filter((question) => question.classification === request.course),
  };
}
function availability(common: readonly Question[], specific: readonly Question[], mission: QuestionMissionConfig): MissionAvailability {
  const commonMissing = Math.max(0, mission.commonQuestionCount - common.length);
  const specificMissing = Math.max(0, mission.specificQuestionCount - specific.length);
  return Object.freeze({
    available: commonMissing === 0 && specificMissing === 0,
    required: Object.freeze({ questionCount: mission.questionCount, commonQuestionCount: mission.commonQuestionCount, specificQuestionCount: mission.specificQuestionCount }),
    availableCounts: Object.freeze({ questionCount: common.length + specific.length, commonQuestionCount: common.length, specificQuestionCount: specific.length }),
    missing: Object.freeze({ questionCount: commonMissing + specificMissing, commonQuestionCount: commonMissing, specificQuestionCount: specificMissing }),
  });
}
export function getMissionAvailability(bank: readonly Question[], request: MissionSelectionRequest): MissionAvailability {
  const pool = pools(bank, request);
  return availability(pool.common, pool.specific, request.mission);
}
export class InsufficientMissionContentError extends Error {
  constructor(readonly availability: MissionAvailability, request: MissionSelectionRequest) {
    const required = availability.required;
    const available = availability.availableCounts;
    const common = (count: number) => count + (count === 1 ? ' comum' : ' comuns');
    const specific = (count: number) => count + (count === 1 ? ' específica' : ' específicas');
    super('Conteúdo insuficiente para ' + request.mission.internalTitle + ' (' + request.course + '): ' +
      (required.questionCount === 1 ? 'necessária 1 questão' : 'necessárias ' + required.questionCount + ' questões') +
      ' (' + common(required.commonQuestionCount) + ' e ' + specific(required.specificQuestionCount) + '); ' +
      (available.questionCount === 1 ? 'disponível 1' : 'disponíveis ' + available.questionCount) + ' (' +
      common(available.commonQuestionCount) + ' e ' + specific(available.specificQuestionCount) + ') na coleção selecionada.' +
      ' Nenhuma questão foi repetida ou substituída por outro curso ou coleção.');
    this.name = 'InsufficientMissionContentError';
  }
}
const preserveBankOrder: QuestionOrderingStrategy = (questions) => questions;
function ordered(pool: readonly Question[], strategy: QuestionOrderingStrategy): readonly Question[] {
  const input = Object.freeze([...pool]);
  const result = strategy(input);
  if (!Array.isArray(result) || result.length !== input.length || new Set(result).size !== input.length ||
      result.some((question) => !input.includes(question))) {
    throw new Error('Estratégia inválida: somente reordenar as questões recebidas, sem substituir, omitir ou repetir.');
  }
  return result;
}
export function selectMissionQuestions(bank: readonly Question[], request: MissionSelectionRequest,
  strategy: QuestionOrderingStrategy = preserveBankOrder): readonly Question[] {
  const pool = pools(bank, request);
  const status = availability(pool.common, pool.specific, request.mission);
  if (!status.available) throw new InsufficientMissionContentError(status, request);
  return Object.freeze([
    ...ordered(pool.common, strategy).slice(0, request.mission.commonQuestionCount),
    ...ordered(pool.specific, strategy).slice(0, request.mission.specificQuestionCount),
  ]);
}

/** Valida a composição de uma tentativa já selecionada, sem selecionar nem completar itens. */
export function assertMissionQuestionSet(questions: readonly Question[], course: CourseId, mission: QuestionMissionConfig): void {
  assertMissionConfig(mission);
  if (!isCourseId(course)) throw new Error('Curso desconhecido.');
  assertQuestionBank(questions);
  if (questions.length !== mission.questionCount || new Set(questions.map((question) => question.collectionId)).size !== 1 ||
      questions.some((question) => !question.courses.includes(course)) ||
      questions.filter((question) => question.classification === 'COMUM').length !== mission.commonQuestionCount ||
      questions.filter((question) => question.classification === course).length !== mission.specificQuestionCount) {
    throw new Error('A missão requer ' + mission.questionCount + ' questões distintas da mesma coleção, com ' +
      mission.commonQuestionCount + ' comuns e ' + mission.specificQuestionCount + ' específicas elegíveis para ' + course + '.');
  }
}
