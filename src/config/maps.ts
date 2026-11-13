import type { MapDefinition } from '../domain/exploration/World';

export const BASE_N9: MapDefinition = {
  id: 'base-n9', name: 'Base N9', width: 640, height: 400,
  bounds: { x: 32, y: 32, width: 576, height: 336 },
  spawn: { x: 160, y: 184 },
  walls: [
    { x: 288, y: 96, width: 32, height: 128 },
    { x: 416, y: 32, width: 24, height: 208 },
    { x: 416, y: 304, width: 24, height: 64 },
  ],
  objects: [
    { id: 'computer', kind: 'computer', name: 'Computador', x: 128, y: 96, width: 64, height: 40 },
    { id: 'guide', kind: 'npc', name: 'Lia', x: 224, y: 272, width: 32, height: 32 },
    { id: 'door', kind: 'door', name: 'Porta do setor tecnológico', x: 416, y: 240, width: 24, height: 64 },
    { id: 'terminal', kind: 'terminal', name: 'Terminal tecnológico', x: 512, y: 112, width: 48, height: 48 },
  ],
};

// Registro extensível, sem transições ou outros mapas implementados nesta entrega.
export const MAPS: Readonly<Record<string, MapDefinition>> = { [BASE_N9.id]: BASE_N9 };
