import Ajv from 'ajv';
import schema from '../../schemas/player-profiles.schema.json';
import { normalizeNickname, type PlayerProfiles } from '../../domain/models/PlayerProfile';
import { isCourseId } from '../../domain/models/Course';
import { isModality } from '../../domain/models/StudentIdentity';
import type { PlayerProfileRepository, PlayerProfilesLoad } from '../../ports/PlayerProfileRepository';

export const PLAYER_PROFILE_KEY = 'n9:player-profile:v1';
const validate = new Ajv().compile<PlayerProfiles>(schema);

export function isValidPlayerProfiles(value: unknown): value is PlayerProfiles {
  if (!validate(value)) return false;
  const ids = new Set(value.players.map((player) => player.id));
  const identityKeys = new Set(value.players.map((player) => player.academicId ? 'academic:' + player.academicId
    : 'nickname:' + normalizeNickname(player.nickname).toLocaleLowerCase('pt-BR')));
  return ids.size === value.players.length && identityKeys.size === value.players.length &&
    (value.activePlayerId === null || ids.has(value.activePlayerId)) &&
    value.players.every((player) => {
      const identityFields = [player.academicId, player.fullName, player.course, player.modality, player.role,
        player.publicCode, player.verificationToken, player.rankingEligible];
      const hasNoIdentity = identityFields.every((item) => item === undefined);
      const hasValidIdentity = !!player.academicId && !!player.fullName && isCourseId(player.course) &&
        isModality(player.modality) && ['student', 'teacher'].includes(player.role ?? '') &&
        !!player.publicCode && !!player.verificationToken && player.rankingEligible === (player.role === 'student');
      return player.nickname === normalizeNickname(player.nickname) &&
        Number.isFinite(Date.parse(player.createdAt)) && Number.isFinite(Date.parse(player.lastUsedAt)) &&
        (hasNoIdentity || hasValidIdentity);
    });
}

export class LocalStoragePlayerProfileRepository implements PlayerProfileRepository {
  constructor(private readonly getStorage: () => Pick<Storage, 'getItem' | 'setItem'> = () => window.localStorage) {}

  load(): PlayerProfilesLoad {
    try {
      const raw = this.getStorage().getItem(PLAYER_PROFILE_KEY);
      if (raw === null) return { profiles: null, status: 'none' };
      const value: unknown = JSON.parse(raw);
      return isValidPlayerProfiles(value) ? { profiles: Object.freeze(value), status: 'saved' }
        : { profiles: null, status: 'invalid' };
    } catch (error) {
      return { profiles: null, status: error instanceof SyntaxError ? 'invalid' : 'unavailable' };
    }
  }

  save(profiles: PlayerProfiles): boolean {
    if (!isValidPlayerProfiles(profiles)) return false;
    try {
      const storage = this.getStorage();
      const raw = storage.getItem(PLAYER_PROFILE_KEY);
      if (raw) {
        try {
          const previous: unknown = JSON.parse(raw);
          if (typeof previous === 'object' && previous !== null && 'schemaVersion' in previous &&
              typeof previous.schemaVersion === 'number' && previous.schemaVersion > 1) return false;
        } catch { /* Uma criação explícita pode substituir um perfil corrompido da versão atual. */ }
      }
      storage.setItem(PLAYER_PROFILE_KEY, JSON.stringify(profiles));
      return true;
    } catch { return false; }
  }
}
