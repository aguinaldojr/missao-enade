import Ajv from 'ajv';
import legacySchema from '../../schemas/result.schema.json';
import missionSchema from '../../schemas/mission-result.schema.json';
import type { ExampleResult, MissionResult, SavedResult } from '../../domain/models/Attempt';
import type { ProgressRepository, ResultLoad } from '../../ports/ProgressRepository';

export const RESULT_KEY = 'missao-enade:example-result:v1';
export const MISSION_RESULT_KEY = 'n9:mission-result:v1';
const ajv = new Ajv();
const validateLegacy = ajv.compile<ExampleResult>(legacySchema);
const validateMission = ajv.compile<MissionResult>(missionSchema);

export function isValidResult(value: unknown): value is ExampleResult {
  return validateLegacy(value) && value.score === value.correctCount * 100 &&
    Number.isFinite(Date.parse(value.completedAt));
}
export function isValidMissionResult(value: unknown): value is MissionResult {
  return validateMission(value) && value.correctCount <= value.total && value.score === value.correctCount * 100 &&
    Number.isFinite(Date.parse(value.completedAt));
}

export class LocalStorageProgressRepository implements ProgressRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  loadResult(): ResultLoad {
    try {
      const storage = this.getStorage();
      const currentRaw = storage.getItem(MISSION_RESULT_KEY);
      let invalid = false;
      if (currentRaw !== null) {
        try {
          const current: unknown = JSON.parse(currentRaw);
          if (isValidMissionResult(current)) return { result: Object.freeze({ ...current }), status: 'saved' };
          invalid = true;
        } catch { invalid = true; }
      }
      const legacyRaw = storage.getItem(RESULT_KEY);
      if (legacyRaw === null) return { result: null, status: invalid ? 'invalid' : 'none' };
      try {
        const legacy: unknown = JSON.parse(legacyRaw);
        return isValidResult(legacy) ? { result: Object.freeze({ ...legacy }), status: 'saved' }
          : { result: null, status: 'invalid' };
      } catch { return { result: null, status: 'invalid' }; }
    } catch (error) {
      return { result: null, status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
    }
  }

  saveResult(result: SavedResult): boolean {
    try {
      const current = isValidMissionResult(result);
      if (!current && !isValidResult(result)) return false;
      const storage = this.getStorage();
      const key = current ? MISSION_RESULT_KEY : RESULT_KEY;
      const raw = storage.getItem(key);
      if (raw) {
        try {
          const previous: unknown = JSON.parse(raw);
          if (typeof previous === 'object' && previous !== null && 'schemaVersion' in previous &&
              typeof previous.schemaVersion === 'number' && previous.schemaVersion > 1) return false;
        } catch { /* Uma conclusão explícita pode substituir um resumo corrompido. */ }
      }
      storage.setItem(key, JSON.stringify(result));
      return true;
    } catch {
      return false;
    }
  }
}
