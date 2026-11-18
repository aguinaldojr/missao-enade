import routesJson from '../content/mission-routes.json';
import type { CourseId } from '../domain/models/Course';
import type { Question } from '../domain/models/Question';
import type { QuestionOrderingStrategy } from '../domain/models/QuestionMission';

const routes = routesJson as Readonly<Record<CourseId, readonly (readonly string[])[]>>;

export function missionRouteCount(course: CourseId): number {
  return routes[course].length;
}

export function missionRoute(course: CourseId, completedCount: number): readonly string[] {
  const courseRoutes = routes[course];
  const index = Math.max(0, Math.trunc(completedCount)) % courseRoutes.length;
  return courseRoutes[index]!;
}

function deterministicScore(value: string, seed: number): number {
  let hash = (2166136261 ^ seed) >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = Math.imul(hash ^ value.charCodeAt(index), 16777619) >>> 0;
  }
  return hash;
}

function orderedIds(ids: readonly string[], seed: number): readonly string[] {
  return [...ids].sort((a, b) => deterministicScore(a, seed) - deterministicScore(b, seed) || a.localeCompare(b));
}

/**
 * Após os roteiros-base, combina um candidato de cada posição/área da matriz.
 * A estratégia é pseudoaleatória determinística: reproduzível em testes e sem Math.random.
 */
export function missionRouteForAttempt(course: CourseId, completedCount: number, bank: readonly Question[],
  recentQuestionIds: readonly string[] = []): readonly string[] {
  const courseRoutes = routes[course];
  const count = Math.max(0, Math.trunc(completedCount));
  if (count < courseRoutes.length) return courseRoutes[count]!;

  const byId = new Map(bank.map((question) => [question.id, question]));
  const recent = new Set(recentQuestionIds);
  const selected: string[] = [];
  let advancedCount = 0;
  const add = (candidates: readonly string[], seed: number, advancedLimit = 3): void => {
    const eligible = [...orderedIds(candidates, seed)]
      .sort((a, b) => Number(recent.has(a)) - Number(recent.has(b)));
    const choice = eligible.find((id) => {
      const question = byId.get(id);
      return question && !selected.includes(id) && (question.difficulty !== 'advanced' || advancedCount < advancedLimit);
    });
    if (!choice) throw new Error('Não há candidato elegível para completar a cobertura por área de ' + course + '.');
    selected.push(choice);
    if (byId.get(choice)!.difficulty === 'advanced') advancedCount += 1;
  };

  const commonPool = [...new Set(courseRoutes.flatMap((route) => route.slice(0, 5)))];
  const commonOrder = orderedIds(commonPool, count * 31 + 7);
  for (let index = 0; index < 5; index += 1) add(commonOrder, count * 31 + index, 1);

  const solveTechnical = (slot: number, advanced: number, used: ReadonlySet<string>): readonly string[] | null => {
    if (slot === 20) return [];
    const candidates = [...orderedIds([...new Set(courseRoutes.map((route) => route[slot + 5]!).filter(Boolean))],
      count * 101 + slot)].sort((a, b) => Number(recent.has(a)) - Number(recent.has(b)));
    for (const id of candidates) {
      const question = byId.get(id);
      if (!question || used.has(id)) continue;
      const nextAdvanced = advanced + Number(question.difficulty === 'advanced');
      if (nextAdvanced > 3) continue;
      const tail = solveTechnical(slot + 1, nextAdvanced, new Set([...used, id]));
      if (tail) return [id, ...tail];
    }
    return null;
  };
  const technical = solveTechnical(0, advancedCount, new Set(selected));
  if (!technical) throw new Error('Não há combinação técnica que preserve cobertura e limite de dificuldade para ' + course + '.');
  selected.push(...technical);
  advancedCount += technical.filter((id) => byId.get(id)?.difficulty === 'advanced').length;
  if (selected.length !== 25 || new Set(selected).size !== 25 || advancedCount > 3) {
    throw new Error('O sorteio balanceado não conseguiu formar 25 desafios únicos com o limite de dificuldade.');
  }
  return Object.freeze(selected);
}

export function routeOrdering(route: readonly string[]): QuestionOrderingStrategy {
  const positions = new Map(route.map((id, index) => [id, index]));
  return (questions) => [...questions].sort((a, b) =>
    (positions.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (positions.get(b.id) ?? Number.MAX_SAFE_INTEGER));
}
