import type { MapDefinition } from '../domain/exploration/World';

export const ROOM_SIZE = 5;

/** Rota central da avaliação. As estações futuras permanecem visíveis, mas a sessão controla o desbloqueio. */
export const EVALUATION_ROUTE: MapDefinition = {
  id: 'avaliacao-rota', name: 'Rota da Jornada N9', width: 640, height: 400,
  bounds: { x: 32, y: 32, width: 576, height: 336 },
  spawn: { x: 88, y: 176 }, walls: [],
  objects: [
    { id: 'portal-entrada', kind: 'terminal', name: 'Robô de acesso', x: 64, y: 96, width: 48, height: 48 },
    { id: 'fase-1', kind: 'computer', name: 'Fase 1', x: 160, y: 100, width: 56, height: 40 },
    { id: 'fase-2', kind: 'computer', name: 'Fase 2', x: 256, y: 100, width: 56, height: 40 },
    { id: 'portal-intervalo', kind: 'terminal', name: 'Nó de rede', x: 360, y: 96, width: 48, height: 48 },
    { id: 'fase-3', kind: 'computer', name: 'Fase 3', x: 456, y: 100, width: 56, height: 40 },
    { id: 'fase-4', kind: 'computer', name: 'Fase 4', x: 456, y: 252, width: 56, height: 40 },
    { id: 'portal-final', kind: 'terminal', name: 'Núcleo de energia', x: 360, y: 248, width: 48, height: 48 },
    { id: 'fase-5', kind: 'computer', name: 'Fase 5', x: 256, y: 252, width: 56, height: 40 },
  ],
};

export const evaluationRooms: readonly MapDefinition[] = [
  'Formação geral', 'Oficina do curso', 'Laboratório de análise', 'Centro de operações', 'Sala de decisão',
].map((name, phase) => ({
  id: 'avaliacao-' + (phase + 1), name, width: 640, height: 400,
  bounds: { x: 32, y: 32, width: 576, height: 336 },
  spawn: { x: 90, y: 200 }, walls: [],
  objects: Array.from({ length: ROOM_SIZE }, (_, station) => ({
    id: 'posto-' + (station + 1), kind: 'computer', name: 'Posto ' + (station + 1),
    x: 62 + station * 112, y: (station + phase) % 2 === 0 ? 100 : 246, width: 56, height: 40,
  })),
}));

export function evaluationRoom(index: number): MapDefinition {
  return evaluationRooms[Math.floor(index / ROOM_SIZE)]!;
}
