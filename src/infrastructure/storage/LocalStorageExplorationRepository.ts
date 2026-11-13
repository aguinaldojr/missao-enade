import Ajv from 'ajv';
import schema from '../../schemas/exploration.schema.json';
import { MAPS } from '../../config/maps';
import { isWalkable, type ExplorationState } from '../../domain/exploration/World';
import type { ExplorationRepository } from '../../ports/ExplorationRepository';

export const EXPLORATION_KEY = 'n9:exploration:v1';
const validate = new Ajv().compile<ExplorationState>(schema);

export function isValidExploration(data: unknown): data is ExplorationState {
  if (!validate(data)) return false;
  const map = MAPS[data.mapId];
  return !!map && (data.missionStatus !== 'completed' || data.doorUnlocked) &&
    isWalkable(data.position, map, data.doorUnlocked);
}

export class LocalStorageExplorationRepository implements ExplorationRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  load(): ReturnType<ExplorationRepository['load']> {
    try {
      const raw = this.getStorage().getItem(EXPLORATION_KEY);
      if (raw === null) return { state: null, status: 'none' };
      const data: unknown = JSON.parse(raw);
      // A nova posição do terminal pode ocupar um ponto salvo na versão anterior.
      // Reposiciona somente esse caso conhecido, sem perder missão ou desbloqueio.
      if (validate(data) && data.mapId === 'base-n9' && (data.missionStatus !== 'completed' || data.doorUnlocked)) {
        const map = MAPS[data.mapId]!;
        const withoutTerminal = { ...map, objects: map.objects.filter((object) => object.kind !== 'terminal') };
        if (!isWalkable(data.position, map, data.doorUnlocked) && isWalkable(data.position, withoutTerminal, data.doorUnlocked)) {
          return { state: Object.freeze({ ...data, position: Object.freeze({ ...map.spawn }) }), status: 'saved' };
        }
      }
      return isValidExploration(data)
        ? { state: Object.freeze({ ...data, position: Object.freeze({ ...data.position }) }), status: 'saved' }
        : { state: null, status: 'invalid' };
    } catch (error) {
      return { state: null, status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
    }
  }

  save(state: ExplorationState): boolean {
    try {
      if (!isValidExploration(state)) return false;
      const storage = this.getStorage();
      const raw = storage.getItem(EXPLORATION_KEY);
      if (raw) {
        try {
          const previous: unknown = JSON.parse(raw);
          if (typeof previous === 'object' && previous !== null && 'schemaVersion' in previous &&
              typeof previous.schemaVersion === 'number' && previous.schemaVersion > 1) return false;
        } catch { /* Uma ação explícita pode substituir um registro corrompido. */ }
      }
      storage.setItem(EXPLORATION_KEY, JSON.stringify(state));
      return true;
    } catch { return false; }
  }
}
