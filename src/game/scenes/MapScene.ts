import Phaser from 'phaser';
import type { GameSession } from '../../app/GameSession';
import { MAPS } from '../../config/maps';
import { visualTheme, type Facing } from '../../config/visual';
import { nearbyObject } from '../../domain/exploration/World';
import { drawCharacter } from '../visual/CharacterRenderer';

/** O renderer observa a sessão; movimento, colisão e salvamento continuam independentes do Phaser. */
export class MapScene extends Phaser.Scene {
  private drawing!: Phaser.GameObjects.Graphics;
  private labels: Phaser.GameObjects.Text[] = [];
  private previous = '';
  private previousPosition = { x: 0, y: 0 };
  private labelKey = '';
  private facing: Facing = 'down';
  private lastMovementAt = -Infinity;
  private reduceMotion = false;

  constructor(private readonly session: GameSession) { super('MapScene'); }

  create(): void {
    this.drawing = this.add.graphics();
    this.previousPosition = { ...this.session.snapshot.exploration.position };
    this.reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    this.previous = '';
    this.events.once('shutdown', () => { this.labels = []; });
  }

  update(time: number): void {
    const state = this.session.snapshot;
    const world = state.exploration;
    const dx = world.position.x - this.previousPosition.x;
    const dy = world.position.y - this.previousPosition.y;
    if (dx !== 0 || dy !== 0) {
      this.facing = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'left' : 'right') : (dy < 0 ? 'up' : 'down');
      this.lastMovementAt = time;
      this.previousPosition = { ...world.position };
    }
    const walking = time - this.lastMovementAt < 110;
    const phase = this.reduceMotion ? 0 : Math.floor(time / visualTheme.motion.walkFrameMs) % 2;
    const completedCount = Object.values(state.puzzleProgress.entries).filter((entry) => entry.completed).length;
    const key = [world.position.x, world.position.y, world.doorUnlocked, world.missionStatus, this.facing,
      walking ? phase : 'idle', this.scale.width, this.scale.height, completedCount, !!state.lastResult].join(':');
    if (key === this.previous) return;
    this.previous = key;
    this.drawMap(walking, phase);
  }

  private drawMap(walking: boolean, phase: number): void {
    const state = this.session.snapshot;
    const world = state.exploration;
    const map = MAPS[world.mapId]!;
    const c = visualTheme.colors;
    const scale = Math.min(this.scale.width / map.width, this.scale.height / map.height);
    const ox = (this.scale.width - map.width * scale) / 2;
    const oy = (this.scale.height - map.height * scale) / 2;
    const g = this.drawing;
    g.clear();
    g.setPosition(ox, oy).setScale(scale);
    g.fillStyle(c.canvas).fillRect(0, 0, map.width, map.height);
    g.fillStyle(c.floor).fillRoundedRect(map.bounds.x, map.bounds.y, map.bounds.width, map.bounds.height, 10);
    g.fillStyle(c.primary, 0.12).fillRoundedRect(48, 48, 224, 144, 10);
    g.fillStyle(c.violet, 0.12).fillRoundedRect(328, 48, 72, 144, 10);
    g.fillStyle(c.amber, 0.10).fillRoundedRect(48, 232, 336, 120, 10);
    g.lineStyle(1, c.grid, 0.72);
    for (let x = 48; x <= 592; x += 32) g.lineBetween(x, 32, x, 368);
    for (let y = 48; y <= 352; y += 32) g.lineBetween(32, y, 608, y);
    g.lineStyle(5, c.wallEdge).strokeRoundedRect(32, 32, 576, 336, 8);
    g.lineStyle(2, c.wall, 0.8).strokeRoundedRect(38, 38, 564, 324, 6);
    for (const wall of map.walls) {
      g.fillStyle(c.wall).fillRoundedRect(wall.x, wall.y, wall.width, wall.height, 3);
      g.fillStyle(c.wallEdge, 0.7).fillRect(wall.x + 4, wall.y, Math.max(2, wall.width - 8), 4);
    }

    const nearby = nearbyObject(world, map);
    for (const object of map.objects) {
      const isNearby = nearby?.id === object.id;
      const completed = object.kind === 'computer' ? !!state.lastResult
        : object.kind === 'terminal' ? Object.values(state.puzzleProgress.entries).some((entry) => entry.completed)
          : object.kind === 'door' ? world.doorUnlocked : world.missionStatus === 'completed';
      if (object.kind === 'npc') {
        drawCharacter(g, { x: object.x + object.width / 2, y: object.y + object.height - 4,
          facing: 'down', walking: false, phase: 0, role: 'guide', highlighted: isNearby,
          missionState: world.missionStatus });
        continue;
      }
      if (object.kind === 'computer') this.drawComputer(g, object.x, object.y, object.width, object.height, isNearby, completed);
      if (object.kind === 'terminal') this.drawTerminal(g, object.x, object.y, object.width, object.height, isNearby, completed);
      if (object.kind === 'door') this.drawDoor(g, object.x, object.y, object.width, object.height, isNearby, world.doorUnlocked);
      if (isNearby) {
        g.lineStyle(3, c.amber).strokeRoundedRect(object.x - 5, object.y - 5, object.width + 10, object.height + 10, 6);
        g.fillStyle(c.amber).fillCircle(object.x + object.width - 2, object.y - 6, 5);
      }
    }

    drawCharacter(g, { x: world.position.x, y: world.position.y, facing: this.facing,
      walking: walking && !this.reduceMotion, phase, role: 'player' });
    const labelKey = [this.scale.width, this.scale.height, world.doorUnlocked].join(':');
    if (labelKey !== this.labelKey) {
      this.labelKey = labelKey;
      this.drawLabels(ox, oy, scale);
    }
  }

  private drawComputer(g: Phaser.GameObjects.Graphics, x: number, y: number, w: number, h: number,
    nearby: boolean, completed: boolean): void {
    const c = visualTheme.colors;
    g.fillStyle(c.inkSoft).fillRoundedRect(x, y + 8, w, h - 8, 5);
    g.lineStyle(3, completed ? c.success : nearby ? c.amber : c.cyan).strokeRoundedRect(x + 8, y, w - 16, h - 12, 3);
    g.fillStyle(c.canvas).fillRect(x + 13, y + 5, w - 26, h - 22);
    g.fillStyle(completed ? c.success : c.cyan, 0.8).fillRect(x + 17, y + 9, w - 34, 3);
    g.fillStyle(c.wallEdge).fillRect(x + w / 2 - 3, y + h - 12, 6, 8).fillRoundedRect(x + w / 2 - 13, y + h - 5, 26, 5, 2);
  }

  private drawTerminal(g: Phaser.GameObjects.Graphics, x: number, y: number, w: number, h: number,
    nearby: boolean, completed: boolean): void {
    const c = visualTheme.colors;
    g.fillStyle(c.inkSoft).fillRoundedRect(x + 6, y + 4, w - 12, h - 4, 8);
    g.lineStyle(3, completed ? c.success : nearby ? c.amber : c.violet).strokeRoundedRect(x + 9, y + 2, w - 18, h - 13, 5);
    g.fillStyle(c.canvas).fillRoundedRect(x + 14, y + 8, w - 28, h - 25, 3);
    g.fillStyle(completed ? c.success : c.violet).fillCircle(x + w / 2, y + 16, 4);
    g.lineStyle(2, completed ? c.success : c.violet, 0.6).lineBetween(x + w / 2, y + 20, x + w / 2, y + 31);
  }

  private drawDoor(g: Phaser.GameObjects.Graphics, x: number, y: number, w: number, h: number,
    nearby: boolean, unlocked: boolean): void {
    const c = visualTheme.colors;
    if (unlocked) {
      g.lineStyle(5, c.success).strokeRoundedRect(x, y, w, h, 3);
      g.lineStyle(2, c.success, 0.35).lineBetween(x + w / 2, y + 8, x + w / 2, y + h - 8);
    } else {
      g.fillStyle(c.danger).fillRoundedRect(x, y, w, h, 3);
      g.fillStyle(c.inkSoft).fillRect(x + 5, y + 8, w - 10, h - 16);
      g.fillStyle(nearby ? c.amber : c.cream).fillCircle(x + w / 2, y + h / 2, 4);
    }
  }

  private drawLabels(ox: number, oy: number, scale: number): void {
    const map = MAPS[this.session.snapshot.exploration.mapId]!;
    for (const label of this.labels) label.destroy();
    this.labels = map.objects.map((object) => this.add.text(
      ox + (object.x + object.width / 2) * scale, oy + (object.y + object.height + 10) * scale,
      object.kind === 'door' ? (this.session.snapshot.exploration.doorUnlocked ? '✓ Liberada' : '▣ Bloqueada')
        : (object.kind === 'computer' ? '▰ ' : object.kind === 'terminal' ? '◇ ' : '● ') + object.name,
      { fontFamily: 'Segoe UI, sans-serif', fontSize: Math.max(9, 11 * scale), fontStyle: '600',
        color: '#e8f5f0', backgroundColor: '#071f2b',
        padding: { x: 4, y: 2 } },
    ).setOrigin(0.5, 0));
  }
}
