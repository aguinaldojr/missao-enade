import { describe, expect, it, vi } from 'vitest';
import type { ExampleResult, MissionResult } from '../../src/domain/models/Attempt';
import { LocalStorageProgressRepository, MISSION_RESULT_KEY, RESULT_KEY } from '../../src/infrastructure/storage/LocalStorageProgressRepository';

const result: ExampleResult = {
  schemaVersion: 1, contentVersion: 'example-1', mode: 'example', phaseId: 'FASE-EXEMPLO-01',
  attemptId: 'attempt-1', course: 'TRC', total: 10, correctCount: 8, score: 800, completedAt: '2026-11-13T12:00:00.000Z',
};
const missionResult: MissionResult = {
  schemaVersion: 1, contentVersion: 'enade-2026-provisional-1', mode: 'provisional',
  phaseId: 'N9-COLLECTION-PROVISIONAL', missionId: 'quick', attemptId: 'mission-1',
  course: 'SI', total: 3, correctCount: 2, score: 200, completedAt: '2026-11-14T12:00:00.000Z',
};

function setup(raw: string | null = null) {
  const data = new Map<string, string>([['other-app', 'preservar']]);
  if (raw !== null) data.set(RESULT_KEY, raw);
  const storage = { getItem: (key: string) => data.get(key) ?? null, setItem: vi.fn((key: string, value: string) => { data.set(key, value); }) };
  return { data, storage, repository: new LocalStorageProgressRepository(() => storage) };
}

describe('último resultado no LocalStorage', () => {
  it('valida roundtrip e substitui apenas o resumo do jogo, sem acumular', () => {
    const { repository, data } = setup();
    expect(repository.loadResult().status).toBe('none');
    expect(repository.saveResult(result)).toBe(true);
    expect(new LocalStorageProgressRepository(() => ({ getItem: (key) => data.get(key) ?? null, setItem: () => {} })).loadResult().result).toEqual(result);
    repository.saveResult({ ...result, attemptId: 'attempt-2', score: 0, correctCount: 0 });
    expect(repository.loadResult().result?.score).toBe(0);
    expect(data.get('other-app')).toBe('preservar');
    expect(data.size).toBe(2);
  });

  it('salva a coleção integrada separadamente e mantém o resultado antigo intacto', () => {
    const { repository, data } = setup(JSON.stringify(result));
    expect(repository.loadResult().result).toEqual(result);
    expect(repository.saveResult(missionResult)).toBe(true);
    expect(data.get(RESULT_KEY)).toBe(JSON.stringify(result));
    expect(JSON.parse(data.get(MISSION_RESULT_KEY)!)).toEqual(missionResult);
    expect(repository.loadResult().result).toEqual(missionResult);
  });

  it.each([
    '{', '{}', JSON.stringify({ ...result, score: 900 }), JSON.stringify({ ...result, course: 'OUTRO' }),
    JSON.stringify({ ...result, total: 9 }), JSON.stringify({ ...result, completedAt: 'amanhã' }),
    JSON.stringify({ ...result, mode: 'official' }), JSON.stringify({ ...result, schemaVersion: 2 }),
  ])('ignora resultado inválido sem apagar o dado: %s', (raw) => {
    const { repository, data } = setup(raw);
    expect(repository.loadResult()).toEqual({ result: null, status: 'invalid' });
    expect(data.get(RESULT_KEY)).toBe(raw);
  });

  it('não sobrescreve uma versão futura desconhecida', () => {
    const raw = JSON.stringify({ ...result, schemaVersion: 2 });
    const { repository, data } = setup(raw);
    expect(repository.saveResult(result)).toBe(false);
    expect(data.get(RESULT_KEY)).toBe(raw);
  });

  it('captura acesso bloqueado e falta de quota', () => {
    const blocked = new LocalStorageProgressRepository(() => { throw new Error('SecurityError'); });
    expect(blocked.loadResult().status).toBe('unavailable');
    expect(blocked.saveResult(result)).toBe(false);
    const full = new LocalStorageProgressRepository(() => ({ getItem: () => null, setItem: () => { throw new Error('QuotaExceededError'); } }));
    expect(full.saveResult(result)).toBe(false);
  });

  it('recusa resumo inconsistente antes de escrever', () => {
    const { repository, storage } = setup();
    expect(repository.saveResult({ ...result, correctCount: 4 })).toBe(false);
    expect(storage.setItem).not.toHaveBeenCalled();
  });
});
