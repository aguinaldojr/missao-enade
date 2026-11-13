import type { ExplorationState } from '../domain/exploration/World';
import type { SaveStatus } from './ProgressRepository';

export interface ExplorationRepository {
  load(): { readonly state: ExplorationState | null; readonly status: SaveStatus };
  save(state: ExplorationState): boolean;
}
