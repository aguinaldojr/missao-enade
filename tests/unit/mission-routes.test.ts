import { describe, expect, it, vi } from 'vitest';
import catalog from '../../src/content/questions/enade-2026-provisional.json';
import routes from '../../src/content/mission-routes.json';
import { COURSE_IDS } from '../../src/domain/models/Course';
import { QUESTION_MISSIONS } from '../../src/config/missions';
import { missionRoute, missionRouteCount, routeOrdering } from '../../src/config/missionRoutes';
import { selectMissionQuestions } from '../../src/domain/QuestionSelection';
import { JsonContentRepository } from '../../src/infrastructure/content/JsonContentRepository';
import { LocalStorageMissionRouteRepository, MISSION_ROUTE_KEY } from '../../src/infrastructure/storage/LocalStorageMissionRouteRepository';

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

  it('mantém contador versionado por curso e ignora conteúdo inválido', () => {
    const values = new Map<string, string>();
    const storage = { getItem: (key: string) => values.get(key) ?? null,
      setItem: vi.fn((key: string, value: string) => values.set(key, value)) };
    const progress = new LocalStorageMissionRouteRepository(() => storage);
    expect(progress.completedCount('CC')).toBe(0);
    expect(progress.recordCompletion('CC')).toBe(true);
    expect(progress.completedCount('CC')).toBe(1);
    expect(progress.completedCount('SI')).toBe(0);
    expect(JSON.parse(values.get(MISSION_ROUTE_KEY)!)).toEqual({ CC: 1 });
    values.set(MISSION_ROUTE_KEY, '{invalid');
    expect(progress.completedCount('CC')).toBe(0);
  });
});
