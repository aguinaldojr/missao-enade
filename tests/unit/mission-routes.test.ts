import { describe, expect, it, vi } from 'vitest';
import catalog from '../../src/content/questions/enade-2026-provisional.json';
import routes from '../../src/content/mission-routes.json';
import { COURSE_IDS } from '../../src/domain/models/Course';
import { QUESTION_MISSIONS } from '../../src/config/missions';
import { missionRoute, missionRouteCount, missionRouteForAttempt, routeOrdering } from '../../src/config/missionRoutes';
import { selectMissionQuestions } from '../../src/domain/QuestionSelection';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { LocalStorageMissionRouteRepository, MISSION_RECENT_QUESTIONS_KEY,
  MISSION_ROUTE_KEY } from '../../src/infrastructure/storage/LocalStorageMissionRouteRepository';

describe('roteiros canônicos de 25 desafios', () => {
  const repository = new JsonContentRepository(catalog);

  it.each(COURSE_IDS)('%s possui roteiros completos, elegíveis e sem repetição interna', (course) => {
    expect(missionRouteCount(course)).toBe(course === 'SI' ? 4 : 3);
    for (let index = 0; index < missionRouteCount(course); index += 1) {
      const route = missionRoute(course, index);
      const selected = selectMissionQuestions(repository.questionsForCourse(course), {
        course, collectionId: 'enade-2026', mission: QUESTION_MISSIONS.journey25,
      }, routeOrdering(route));
      expect(selected.map((question) => question.id)).toEqual(route);
      expect(new Set(route).size).toBe(25);
      expect(selected.filter((question) => question.classification === 'COMUM')).toHaveLength(5);
      expect(selected.filter((question) => question.classification !== 'COMUM')).toHaveLength(20);
      expect(selected.filter((question) => question.difficulty === 'advanced').length).toBeLessThanOrEqual(3);
    }
    expect(routes[course]).toHaveLength(missionRouteCount(course));
  });

  it.each(COURSE_IDS)('%s sorteia depois da base por posição de área, sem repetir a partida anterior', (course) => {
    const bank = repository.questionsForCourse(course);
    let recent = missionRoute(course, missionRouteCount(course) - 1);
    for (let completed = missionRouteCount(course); completed < missionRouteCount(course) + 8; completed += 1) {
      const route = missionRouteForAttempt(course, completed, bank, recent);
      const selected = selectMissionQuestions(bank, {
        course, collectionId: 'enade-2026', mission: QUESTION_MISSIONS.journey25,
      }, routeOrdering(route));
      expect(selected.map((question) => question.id)).toEqual(route);
      expect(route).toHaveLength(25);
      expect(route.filter((id) => recent.includes(id))).toEqual([]);
      expect(selected.filter((question) => question.classification === 'COMUM')).toHaveLength(5);
      expect(selected.filter((question) => question.classification !== 'COMUM')).toHaveLength(20);
      expect(selected.filter((question) => question.difficulty === 'advanced').length).toBeLessThanOrEqual(3);
      for (let slot = 0; slot < 20; slot += 1) {
        expect(routes[course].map((base) => base[slot + 5])).toContain(route[slot + 5]);
      }
      expect(missionRouteForAttempt(course, completed, bank, recent)).toEqual(route);
      recent = route;
    }
  });

  it('mantém contador versionado por curso e ignora conteúdo inválido', () => {
    const values = new Map<string, string>();
    const storage = { getItem: (key: string) => values.get(key) ?? null,
      setItem: vi.fn((key: string, value: string) => values.set(key, value)) };
    const progress = new LocalStorageMissionRouteRepository(() => storage);
    expect(progress.completedCount('CC')).toBe(0);
    expect(progress.recordCompletion('CC', ['E26-Q-COM-01', 'E26-Q-CC-01'])).toBe(true);
    expect(progress.completedCount('CC')).toBe(1);
    expect(progress.completedCount('SI')).toBe(0);
    expect(JSON.parse(values.get(MISSION_ROUTE_KEY)!)).toEqual({ CC: 1 });
    expect(JSON.parse(values.get(MISSION_RECENT_QUESTIONS_KEY)!)).toEqual({ CC: ['E26-Q-COM-01', 'E26-Q-CC-01'] });
    expect(progress.recentQuestionIds('CC')).toEqual(['E26-Q-COM-01', 'E26-Q-CC-01']);
    expect(progress.recentQuestionIds('SI')).toEqual([]);
    values.set(MISSION_ROUTE_KEY, '{invalid');
    expect(progress.completedCount('CC')).toBe(0);
  });
});
