import type { PlayerProfiles } from '../domain/models/PlayerProfile';
import type { SaveStatus } from './ProgressRepository';

export interface PlayerProfilesLoad {
  readonly profiles: PlayerProfiles | null;
  readonly status: SaveStatus;
}

export interface PlayerProfileRepository {
  load(): PlayerProfilesLoad;
  save(profiles: PlayerProfiles): boolean;
}
