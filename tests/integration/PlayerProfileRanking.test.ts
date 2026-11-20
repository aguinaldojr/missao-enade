import { afterEach, describe, expect, it } from 'vitest';
import { GameSession, type Command } from '../../src/app/GameSession';
import { LocalStoragePlayerProfileRepository,
  PLAYER_PROFILE_KEY } from '../../src/infrastructure/storage/LocalStoragePlayerProfileRepository';
import { AppShell } from '../../src/ui/AppShell';

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
});
