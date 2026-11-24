import { afterEach, describe, expect, it, vi } from 'vitest';
import { GameSession, type Command } from '../../src/app/GameSession';
import { LocalStoragePlayerProfileRepository,
  PLAYER_PROFILE_KEY } from '../../src/infrastructure/storage/LocalStoragePlayerProfileRepository';
import { AppShell } from '../../src/ui/AppShell';
import { playerProfileView } from '../../src/ui/views/PlayerProfileView';

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });

describe('perfil local e acesso ao ranking online', () => {
  it('persiste o perfil e apresenta somente curso no ranking', () => {
    const values = new Map<string, string>();
    const adapter = { getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => { values.set(key, value); },
      removeItem: (key: string) => { values.delete(key); } };
    const game = new GameSession(undefined, undefined, () => '2026-11-20T12:00:00.000Z', () => '1',
      undefined, undefined, undefined, undefined, new LocalStoragePlayerProfileRepository(() => adapter));
    const root = document.createElement('div');
    document.body.append(root);
    shell = new AppShell(root);
    const dispatch = (command: Command): void => shell.render(game.dispatch(command), dispatch);
    shell.render(game.snapshot, dispatch);
    dispatch({ type: 'start' });
    dispatch({ type: 'create-player', nickname: 'Nina Byte' });
    dispatch({ type: 'continue-profile' });
    dispatch({ type: 'home' });
    dispatch({ type: 'open-ranking' });
    expect(values.has(PLAYER_PROFILE_KEY)).toBe(true);
    expect(values.has('n9:leaderboard:v1')).toBe(false);
    expect(root.querySelectorAll('select')).toHaveLength(1);
    expect(root.querySelector('#ranking-size')).toBeNull();
    expect(root.textContent).toContain('CLASSIFICAÇÃO ONLINE');
    expect(root.textContent).not.toContain('Resultados neste dispositivo');
  });

  it('valida RA e e-mail e cria o perfil com curso e modalidade do cadastro', async () => {
    const values = new Map<string, string>();
    const adapter = { getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => { values.set(key, value); } };
    const game = new GameSession(undefined, undefined, () => '2026-11-20T12:00:00.000Z', () => '1',
      undefined, undefined, undefined, undefined, new LocalStoragePlayerProfileRepository(() => adapter));
    game.dispatch({ type: 'start' });
    const registry = { verify: vi.fn(async () => ({ academicId: '12345678', fullName: 'Ana Silva',
      nickname: 'Ana-5678', course: 'TADS' as const, modality: 'EAD' as const, role: 'student' as const,
      publicCode: 'N9-ABC12345', verificationToken: 'token-verificado-com-mais-de-vinte', rankingEligible: true })) };
    const controller = new AbortController();
    const view = playerProfileView(game.snapshot, (command) => { game.dispatch(command); }, controller.signal, registry);
    document.body.append(view);
    const fields = view.querySelectorAll<HTMLInputElement>('input');
    fields[0]!.value = '12.345.678';
    fields[1]!.value = 'ana@example.com';
    view.querySelector('form')!.requestSubmit();
    await vi.waitFor(() => expect(game.currentPlayer?.course).toBe('TADS'));
    expect(registry.verify).toHaveBeenCalledWith('12.345.678', 'ana@example.com');
    expect(game.currentPlayer).toMatchObject({ nickname: 'Ana-5678', modality: 'EAD', rankingEligible: true });
    game.dispatch({ type: 'continue-profile' });
    expect(game.snapshot).toMatchObject({ screen: 'course-select', selectedCourse: 'TADS' });
    expect(() => game.dispatch({ type: 'select-course', course: 'SI' })).toThrow('somente ao curso cadastrado');
    controller.abort();
  });

  it('exige nova validação quando o serviço está ativo e o perfil salvo é antigo', () => {
    const legacy = { schemaVersion: 1 as const, activePlayerId: 'legacy', players: [{ id: 'legacy',
      nickname: 'Perfil antigo', createdAt: '2026-11-20T12:00:00.000Z', lastUsedAt: '2026-11-20T12:00:00.000Z' }] };
    const adapter = { getItem: () => JSON.stringify(legacy), setItem: vi.fn() };
    const game = new GameSession(undefined, undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, new LocalStoragePlayerProfileRepository(() => adapter), undefined, undefined, true);
    expect(game.currentPlayer).toBeNull();
    game.dispatch({ type: 'start' });
    expect(game.snapshot.screen).toBe('profile');
  });
});
