export interface Point { readonly x: number; readonly y: number }
export interface Rect extends Point { readonly width: number; readonly height: number }
export type ObjectKind = 'computer' | 'npc' | 'door' | 'terminal';
export interface MapObject extends Rect {
  readonly id: string;
  readonly kind: ObjectKind;
  readonly name: string;
}
export interface MapDefinition {
  readonly id: string;
  readonly name: string;
  readonly width: number;
  readonly height: number;
  readonly bounds: Rect;
  readonly spawn: Point;
  readonly walls: readonly Rect[];
  readonly objects: readonly MapObject[];
}
export interface ExplorationState {
  readonly schemaVersion: 1;
  readonly mapId: string;
  readonly position: Point;
  readonly missionStatus: 'available' | 'active' | 'completed';
  readonly doorUnlocked: boolean;
}
export const PLAYER_RADIUS = 10;
export const WALK_SPEED = 144;
export const INTERACTION_RANGE = 52;

export function createExploration(map: MapDefinition): ExplorationState {
  return Object.freeze({ schemaVersion: 1, mapId: map.id, position: Object.freeze({ ...map.spawn }),
    missionStatus: 'available', doorUnlocked: false });
}

export function isWalkable(position: Point, map: MapDefinition, doorUnlocked: boolean): boolean {
  const r = PLAYER_RADIUS;
  const b = map.bounds;
  if (!Number.isFinite(position.x) || !Number.isFinite(position.y) ||
      position.x - r < b.x || position.y - r < b.y ||
      position.x + r > b.x + b.width || position.y + r > b.y + b.height) return false;
  const obstacles = [...map.walls, ...map.objects.filter((object) => object.kind !== 'door' || !doorUnlocked)];
  return !obstacles.some((box) => position.x + r > box.x && position.x - r < box.x + box.width &&
    position.y + r > box.y && position.y - r < box.y + box.height);
}

export function movePlayer(state: ExplorationState, map: MapDefinition, direction: Point, seconds: number): ExplorationState {
  if (!Number.isFinite(direction.x) || !Number.isFinite(direction.y) || !Number.isFinite(seconds) || seconds <= 0) return state;
  const length = Math.hypot(direction.x, direction.y);
  if (length === 0) return state;
  // Passos limitados impedem atravessar uma parede após uma pausa na aba.
  const distance = WALK_SPEED * Math.min(seconds, 0.05);
  let position = state.position;
  const horizontal = { x: position.x + direction.x / length * distance, y: position.y };
  if (isWalkable(horizontal, map, state.doorUnlocked)) position = horizontal;
  const vertical = { x: position.x, y: position.y + direction.y / length * distance };
  if (isWalkable(vertical, map, state.doorUnlocked)) position = vertical;
  return position.x === state.position.x && position.y === state.position.y ? state
    : Object.freeze({ ...state, position: Object.freeze(position) });
}

export function nearbyObject(state: ExplorationState, map: MapDefinition): MapObject | null {
  let closest: MapObject | null = null;
  let distance = INTERACTION_RANGE;
  for (const object of map.objects) {
    const x = Math.max(object.x, Math.min(state.position.x, object.x + object.width));
    const y = Math.max(object.y, Math.min(state.position.y, object.y + object.height));
    const next = Math.hypot(state.position.x - x, state.position.y - y);
    if (next <= distance) { distance = next; closest = object; }
  }
  return closest;
}
