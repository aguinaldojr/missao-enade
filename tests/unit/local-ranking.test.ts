import { describe, expect, it } from 'vitest';
import { createPlayer, emptyPlayerProfiles, normalizeNickname, selectPlayer, validateNickname } from '../../src/domain/models/PlayerProfile';
import { compareLeaderboardEntries, emptyLeaderboard, rankingFor, rankingScore, recordBestResult,
  type LeaderboardEntry } from '../../src/domain/models/Leaderboard';
import { LocalStoragePlayerProfileRepository, PLAYER_PROFILE_KEY } from '../../src/infrastructure/storage/LocalStoragePlayerProfileRepository';
import { LEADERBOARD_KEY, LocalStorageLeaderboardRepository } from '../../src/infrastructure/storage/LocalStorageLeaderboardRepository';

const time = '2026-11-14T12:00:00.000Z';
const entry = (overrides: Partial<LeaderboardEntry> = {}): LeaderboardEntry => ({
  playerId: 'p1', nickname: 'Nina', course: 'CC', questionCount: 3, correctCount: 2,
  score: 200, maxScore: 300, rankingScore: 667, achievedAt: time, collectionId: 'enade-2026', ...overrides,
});

function storage() {
  const values = new Map<string, string>([['existing-key', 'preservar']]);
  return { values, adapter: {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
    removeItem: (key: string) => { values.delete(key); },
  } };
}

describe('perfil local', () => {
  it('normaliza espaços e valida comprimento, vazio e duplicidade', () => {
    expect(normalizeNickname('  Ana   Byte  ')).toBe('Ana Byte');
    expect(validateNickname('  Ana   Byte  ')).toBe('Ana Byte');
    expect(() => validateNickname('  ')).toThrow('entre 3 e 20');
    expect(() => validateNickname('ab')).toThrow('entre 3 e 20');
    expect(() => validateNickname('123456789012345678901')).toThrow('entre 3 e 20');
    const profiles = createPlayer(emptyPlayerProfiles(), 'Ana Byte', 'p1', time);
    expect(() => validateNickname('ana byte', profiles.players)).toThrow('já existe');
  });

  it('cria e troca jogador atualizando somente a última utilização', () => {
    const first = createPlayer(emptyPlayerProfiles(), 'Nina', 'p1', time);
    const second = createPlayer(first, 'Caio', 'p2', '2026-11-14T13:00:00.000Z');
    const selected = selectPlayer(second, 'p1', '2026-11-14T14:00:00.000Z');
    expect(selected.activePlayerId).toBe('p1');
    expect(selected.players[0]).toMatchObject({ nickname: 'Nina', createdAt: time, lastUsedAt: '2026-11-14T14:00:00.000Z' });
    expect(selected.players[1]?.lastUsedAt).toBe('2026-11-14T13:00:00.000Z');
  });
});

describe('ranking local', () => {
  it('normaliza pontuação para 0 a 1000', () => {
    expect(rankingScore(0, 300)).toBe(0);
    expect(rankingScore(200, 300)).toBe(667);
    expect(rankingScore(1000, 1000)).toBe(1000);
  });

  it('substitui somente pelo melhor resultado do jogador na mesma combinação', () => {
    const initial = recordBestResult(emptyLeaderboard(), entry());
    expect(recordBestResult(initial, entry({ correctCount: 1, score: 100, rankingScore: 333 }))).toBe(initial);
    const improved = recordBestResult(initial, entry({ correctCount: 3, score: 300, rankingScore: 1000 }));
    expect(improved.entries).toHaveLength(1);
    expect(improved.entries[0]?.score).toBe(300);
    const anotherSize = recordBestResult(improved, entry({ questionCount: 5, correctCount: 4, score: 400,
      maxScore: 500, rankingScore: 800 }));
    const anotherCourse = recordBestResult(anotherSize, entry({ course: 'SI' }));
    expect(anotherCourse.entries).toHaveLength(3);
    expect(rankingFor(anotherCourse, 'CC', 3)).toHaveLength(1);
    expect(rankingFor(anotherCourse, 'CC', 5)).toHaveLength(1);
    expect(rankingFor(anotherCourse, 'SI', 3)).toHaveLength(1);
  });

  it('aplica desempates por acertos, duração confiável e conquista mais antiga', () => {
    const highScore = entry({ playerId: 'score', rankingScore: 900 });
    const lowScore = entry({ playerId: 'low', rankingScore: 800 });
    expect(compareLeaderboardEntries(highScore, lowScore)).toBeLessThan(0);
    const fast = entry({ playerId: 'fast', durationMs: 1000, achievedAt: '2026-11-14T13:00:00.000Z' });
    const slow = entry({ playerId: 'slow', durationMs: 2000 });
    expect(compareLeaderboardEntries(fast, slow)).toBeLessThan(0);
    const first = entry({ playerId: 'first' });
    const later = entry({ playerId: 'later', achievedAt: '2026-11-14T13:00:00.000Z' });
    expect(compareLeaderboardEntries(first, later)).toBeLessThan(0);
  });
});

describe('persistência independente', () => {
  it('persiste perfil e ranking em chaves próprias e recarrega', () => {
    const { values, adapter } = storage();
    const profiles = createPlayer(emptyPlayerProfiles(), 'Nina', 'p1', time);
    const board = recordBestResult(emptyLeaderboard(), entry());
    const profilesRepository = new LocalStoragePlayerProfileRepository(() => adapter);
    const rankingRepository = new LocalStorageLeaderboardRepository(() => adapter);
    expect(profilesRepository.save(profiles)).toBe(true);
    expect(rankingRepository.save(board)).toBe(true);
    expect(profilesRepository.load().profiles).toEqual(profiles);
    expect(rankingRepository.load().leaderboard).toEqual(board);
    expect(values.has(PLAYER_PROFILE_KEY)).toBe(true);
    expect(values.has(LEADERBOARD_KEY)).toBe(true);
    expect(values.get('existing-key')).toBe('preservar');
  });

  it('exclui somente o ranking e preserva perfis e dados antigos', () => {
    const { values, adapter } = storage();
    values.set(PLAYER_PROFILE_KEY, JSON.stringify(createPlayer(emptyPlayerProfiles(), 'Nina', 'p1', time)));
    values.set(LEADERBOARD_KEY, JSON.stringify(recordBestResult(emptyLeaderboard(), entry())));
    expect(new LocalStorageLeaderboardRepository(() => adapter).clear()).toBe(true);
    expect(values.has(LEADERBOARD_KEY)).toBe(false);
    expect(values.has(PLAYER_PROFILE_KEY)).toBe(true);
    expect(values.get('existing-key')).toBe('preservar');
  });

  it.each(['{', '{}', '{"schemaVersion":2,"entries":[]}'])('não apaga ranking incompatível: %s', (raw) => {
    const { values, adapter } = storage();
    values.set(LEADERBOARD_KEY, raw);
    expect(new LocalStorageLeaderboardRepository(() => adapter).load().status).toBe('invalid');
    expect(values.get(LEADERBOARD_KEY)).toBe(raw);
  });
});
