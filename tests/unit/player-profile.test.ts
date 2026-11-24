import { describe, expect, it } from 'vitest';
import { createPlayer, createVerifiedPlayer, emptyPlayerProfiles, normalizeNickname, selectPlayer,
  validateNickname } from '../../src/domain/models/PlayerProfile';
import { LocalStoragePlayerProfileRepository,
  PLAYER_PROFILE_KEY } from '../../src/infrastructure/storage/LocalStoragePlayerProfileRepository';

const time = '2026-11-14T12:00:00.000Z';

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

  it('cria, troca e persiste o jogador sem afetar outras chaves', () => {
    const { values, adapter } = storage();
    const first = createPlayer(emptyPlayerProfiles(), 'Nina', 'p1', time);
    const second = createPlayer(first, 'Caio', 'p2', '2026-11-14T13:00:00.000Z');
    const selected = selectPlayer(second, 'p1', '2026-11-14T14:00:00.000Z');
    const repository = new LocalStoragePlayerProfileRepository(() => adapter);
    expect(repository.save(selected)).toBe(true);
    expect(repository.load().profiles).toEqual(selected);
    expect(values.has(PLAYER_PROFILE_KEY)).toBe(true);
    expect(values.get('existing-key')).toBe('preservar');
  });

  it('cria perfil validado com curso, modalidade e participação no ranking', () => {
    const profile = createVerifiedPlayer(emptyPlayerProfiles(), { academicId: '12345678',
      fullName: 'Ana Maria Silva', nickname: 'Ana-5678', course: 'SI', modality: 'EAD', role: 'student',
      publicCode: 'N9-ABC_2345', verificationToken: 'token-verificado-com-mais-de-vinte',
      rankingEligible: true }, time);
    expect(profile.players[0]).toMatchObject({ nickname: 'Ana-5678', academicId: '12345678',
      course: 'SI', modality: 'EAD', rankingEligible: true });
    expect(new LocalStoragePlayerProfileRepository(() => storage().adapter).save(profile)).toBe(true);
  });
});
