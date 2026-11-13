import Ajv from 'ajv';
import schema from '../../schemas/result.schema.json';
import type { ExampleResult } from '../../domain/models/Attempt';
import type { ProgressRepository, ResultLoad } from '../../ports/ProgressRepository';

export const RESULT_KEY = 'missao-enade:example-result:v1';
const validate = new Ajv().compile<ExampleResult>(schema);

export function isValidResult(value: unknown): value is ExampleResult {
  return validate(value) && value.score === value.correctCount * 100 &&
    Number.isFinite(Date.parse(value.completedAt));
}

export class LocalStorageProgressRepository implements ProgressRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  loadResult(): ResultLoad {
    try {
      const raw = this.getStorage().getItem(RESULT_KEY);
      if (raw === null) return { result: null, status: 'none' };
      const data: unknown = JSON.parse(raw);
      return isValidResult(data)
        ? { result: Object.freeze({ ...data }), status: 'saved' }
        : { result: null, status: 'invalid' };
    } catch (error) {
      return { result: null, status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
    }
  }

  saveResult(result: ExampleResult): boolean {
    try {
      if (!isValidResult(result)) return false;
      const storage = this.getStorage();
      const raw = storage.getItem(RESULT_KEY);
      if (raw) {
        try {
          const previous: unknown = JSON.parse(raw);
          if (typeof previous === 'object' && previous !== null && 'schemaVersion' in previous &&
              typeof previous.schemaVersion === 'number' && previous.schemaVersion > 1) return false;
        } catch { /* Uma conclusão explícita pode substituir um resumo corrompido. */ }
      }
      storage.setItem(RESULT_KEY, JSON.stringify(result));
      return true;
    } catch {
      return false;
    }
  }
}
