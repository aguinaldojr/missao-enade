import { afterEach, describe, expect, it } from 'vitest';
import legacyQuestions from '../../src/content/questions/central-nexo.json';
import provisionalQuestions from '../../src/content/questions/enade-2026-provisional.json';
import legacyPuzzles from '../../src/content/puzzles/sequences.json';
import provisionalPuzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json';
import { GameSession, type Command } from '../../src/app/GameSession';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../src/config/collections';
import { currentQuestion } from '../../src/domain/progression';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { JsonPuzzleRepository } from '../../src/infrastructure/content/JsonPuzzleRepository';
import { LocalStorageLeaderboardRepository, LEADERBOARD_KEY } from '../../src/infrastructure/storage/LocalStorageLeaderboardRepository';
import { LocalStoragePlayerProfileRepository, PLAYER_PROFILE_KEY } from '../../src/infrastructure/storage/LocalStoragePlayerProfileRepository';
import { AppShell } from '../../src/ui/AppShell';

const content = new JsonContentRepository({ ...provisionalQuestions,
  questions: [...legacyQuestions.questions, ...provisionalQuestions.questions] });
const puzzles = new JsonPuzzleRepository([...legacyPuzzles, ...provisionalPuzzles]);

function setup() {
  const values = new Map<string, string>();
  const adapter = { getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
    removeItem: (key: string) => { values.delete(key); } };
  let id = 0;
  const game = new GameSession(content, undefined, () => '2026-11-14T12:00:00.000Z', () => String(++id),
    undefined, undefined, puzzles, PROVISIONAL_PLAYABLE_COLLECTION,
    new LocalStoragePlayerProfileRepository(() => adapter), new LocalStorageLeaderboardRepository(() => adapter));
  return { game, values, adapter };
}

function createAndStart(game: GameSession, nickname = 'Nina', course = 'CC' as const, missionId = 'quick'): void {
  game.dispatch({ type: 'start' });
  if (game.snapshot.screen === 'profile') {
    game.dispatch({ type: 'create-player', nickname });
    game.dispatch({ type: 'continue-profile' });
  }
  game.dispatch({ type: 'select-course', course });
  game.dispatch({ type: 'select-mission', missionId });
  game.dispatch({ type: 'enter-central' });
  game.dispatch({ type: 'start-phase' });
}

function finish(game: GameSession, correct = 3): void {
  for (let index = 0; index < 3; index++) {
    const question = currentQuestion(game.snapshot.attempt!);
    const option = index < correct ? question.correctOptionId
      : question.options.find((candidate) => candidate.id !== question.correctOptionId)!.id;
    game.dispatch({ type: 'select-option', questionId: question.id, option });
    game.dispatch({ type: 'confirm-answer', questionId: question.id });
    game.dispatch({ type: 'feedback-accessed', questionId: question.id });
    game.dispatch({ type: 'next-question', questionId: question.id });
  }
}

describe('perfil e ranking integrados à sessão', () => {
  it('exige perfil no fluxo real, persiste a escolha e registra somente missão concluída', () => {
    const { game, values, adapter } = setup();
    createAndStart(game, '  Nina   Byte  ');
    expect(game.currentPlayer?.nickname).toBe('Nina Byte');
    expect(values.has(PLAYER_PROFILE_KEY)).toBe(true);
    expect(values.has(LEADERBOARD_KEY)).toBe(false);
    const reloadedProfiles = new LocalStoragePlayerProfileRepository(() => adapter).load().profiles;
    expect(reloadedProfiles?.activePlayerId).toBe(game.currentPlayer?.id);
    finish(game, 2);
    expect(game.snapshot.leaderboard.entries).toHaveLength(1);
    expect(game.snapshot.leaderboard.entries[0]).toMatchObject({ nickname: 'Nina Byte', course: 'CC',
      questionCount: 3, correctCount: 2, score: 200, maxScore: 300, rankingScore: 667,
      collectionId: 'enade-2026' });
    expect(values.has(LEADERBOARD_KEY)).toBe(true);
  });

  it('troca jogador e mantém uma posição por jogador e combinação', () => {
    const { game } = setup();
    createAndStart(game, 'Nina');
    finish(game, 3);
    game.dispatch({ type: 'home' });
    game.dispatch({ type: 'open-profile' });
    game.dispatch({ type: 'create-player', nickname: 'Caio' });
    game.dispatch({ type: 'continue-profile' });
    createAndStart(game, 'Caio');
    finish(game, 1);
    expect(game.snapshot.leaderboard.entries).toHaveLength(2);
    expect(game.snapshot.leaderboard.entries.map((entry) => entry.nickname).sort()).toEqual(['Caio', 'Nina']);
  });
});

let shell: AppShell;
afterEach(() => { shell?.destroy(); document.body.replaceChildren(); });

describe('interface local acessível', () => {
  it('cria por formulário, indica jogador, filtra ranking e exige confirmação para excluir', () => {
    const { game } = setup();
    const root = document.createElement('div');
    document.body.append(root);
    shell = new AppShell(root);
    const dispatch = (command: Command): void => shell.render(game.dispatch(command), dispatch);
    shell.render(game.snapshot, dispatch);
    root.querySelector<HTMLButtonElement>('button')!.click();
    expect(root.querySelector('h1')?.textContent).toBe('Quem está jogando?');
    const input = root.querySelector<HTMLInputElement>('#nickname')!;
    input.value = '  Nina   Byte  ';
    root.querySelector<HTMLFormElement>('.profile-form')!.requestSubmit();
    expect(game.currentPlayer?.nickname).toBe('Nina Byte');
    root.querySelector<HTMLButtonElement>('button:not(.back-button)')?.focus();
    [...root.querySelectorAll('button')].find((node) => node.textContent === 'Continuar com este jogador')!.click();
    expect(root.textContent).toContain('Jogador atual: Nina Byte');
    dispatch({ type: 'home' });
    [...root.querySelectorAll('button')].find((node) => node.textContent === 'Ranking')!.click();
    expect(root.querySelector('h1')?.textContent).toBe('Ranking');
    expect(root.querySelectorAll('select')).toHaveLength(2);
    expect(root.textContent).toContain('Ranking salvo somente neste dispositivo.');
    const remove = [...root.querySelectorAll('button')].find((node) => node.textContent?.includes('Excluir dados'))!;
    expect(remove.disabled).toBe(true);
    expect(root.querySelector('[role="alertdialog"]')).toBeNull();
  });
});
