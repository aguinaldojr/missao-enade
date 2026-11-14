export const NICKNAME_MIN_LENGTH = 3;
export const NICKNAME_MAX_LENGTH = 20;

export interface PlayerProfile {
  readonly id: string;
  readonly nickname: string;
  readonly createdAt: string;
  readonly lastUsedAt: string;
}

export interface PlayerProfiles {
  readonly schemaVersion: 1;
  readonly activePlayerId: string | null;
  readonly players: readonly PlayerProfile[];
}

export function emptyPlayerProfiles(): PlayerProfiles {
  return Object.freeze({ schemaVersion: 1, activePlayerId: null, players: Object.freeze([]) });
}

export function normalizeNickname(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

export function validateNickname(value: string, players: readonly PlayerProfile[] = []): string {
  const nickname = normalizeNickname(value);
  if (nickname.length < NICKNAME_MIN_LENGTH || nickname.length > NICKNAME_MAX_LENGTH) {
    throw new Error('O apelido deve ter entre 3 e 20 caracteres.');
  }
  if (players.some((player) => player.nickname.localeCompare(nickname, 'pt-BR', { sensitivity: 'accent' }) === 0)) {
    throw new Error('Este apelido já existe neste navegador. Escolha o jogador na lista.');
  }
  return nickname;
}

export function createPlayer(profiles: PlayerProfiles, value: string, id: string, usedAt: string): PlayerProfiles {
  const nickname = validateNickname(value, profiles.players);
  const player: PlayerProfile = Object.freeze({ id, nickname, createdAt: usedAt, lastUsedAt: usedAt });
  return Object.freeze({ schemaVersion: 1, activePlayerId: id,
    players: Object.freeze([...profiles.players, player]) });
}

export function selectPlayer(profiles: PlayerProfiles, id: string, usedAt: string): PlayerProfiles {
  if (!profiles.players.some((player) => player.id === id)) throw new Error('Jogador local não encontrado.');
  return Object.freeze({ schemaVersion: 1, activePlayerId: id, players: Object.freeze(profiles.players.map((player) =>
    player.id === id ? Object.freeze({ ...player, lastUsedAt: usedAt }) : player)) });
}

export function activePlayer(profiles: PlayerProfiles): PlayerProfile | null {
  return profiles.players.find((player) => player.id === profiles.activePlayerId) ?? null;
}
