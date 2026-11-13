import Ajv from 'ajv';
import schema from '../../schemas/question-mission.schema.json';
import { assertMissionConfig, type QuestionMissionConfig } from '../../domain/models/QuestionMission';

const validate = new Ajv({ allErrors: true }).compile<QuestionMissionConfig>(schema);
export function validateMissionConfig(data: unknown): QuestionMissionConfig {
  if (!validate(data)) throw new Error('Configuração de missão inválida: campos e quantidades obrigatórios.');
  assertMissionConfig(data);
  return Object.freeze({ ...data });
}
