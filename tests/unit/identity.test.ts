import { describe, expect, it } from 'vitest';
import { gameConfig, gamePageTitle } from '../../src/config/game';
import { firstLearningCollection } from '../../src/config/collections';

describe('identidade e origem pedagógica separadas', () => {
  it('centraliza a identidade e o vocabulário do jogador', () => {
    expect(gameConfig.name).toBe('N9 — Jornada Digital');
    expect(gameConfig.shortName).toBe('N9');
    expect(gameConfig.subtitle).toBe('Jornada Digital');
    expect(gameConfig.vocabulary).toEqual({
      question: 'desafio', exam: 'missão', simulation: 'missão especial',
      grade: 'pontuação', result: 'relatório da missão', errorReview: 'laboratório de treinamento',
    });
    expect(gameConfig.format.challengeProgress(10)).toBe('Desafio 10 de 10');
    expect(gameConfig.format.score(800)).toBe('Pontuação: 800');
  });

  it.each(['home', 'course-select', 'map', 'question', 'result'])('mantém o nome e evita identidade de prova no título de %s', (screen) => {
    expect(gamePageTitle(screen, 4)).toContain('N9 — Jornada Digital');
    expect(gamePageTitle(screen, 4)).not.toMatch(/ENADE|simulado|prova/i);
  });

  it('preserva a coleção interna sem incluí-la nos textos da interface', () => {
    expect(firstLearningCollection.id).toBe('enade-2026');
    expect(firstLearningCollection.pedagogicalOrigin).toContain('ENADE');
    expect(firstLearningCollection.status).toBe('pilot');
    expect(JSON.stringify(gameConfig)).not.toMatch(/enade|simulado|preparação para prova/i);
  });
});
