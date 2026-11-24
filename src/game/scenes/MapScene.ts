import Phaser from 'phaser';
import type { GameSession } from '../../app/GameSession';
import { MAPS } from '../../config/maps';
import { visualTheme, type Facing } from '../../config/visual';
import { mapVisualAssets } from '../../config/visualAssets';
import { nearbyObject } from '../../domain/exploration/World';

/** O renderer observa a sessão; movimento, colisão e salvamento continuam independentes do Phaser. */
export class MapScene extends Phaser.Scene {
  private drawing!: Phaser.GameObjects.Graphics;
  private player!: Phaser.GameObjects.Sprite;
  private guide!: Phaser.GameObjects.Sprite;
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
    this.guide = this.add.sprite(0, 0, mapVisualAssets.lia.key).setOrigin(0.5, 0.9).setDepth(10);
    this.player = this.add.sprite(0, 0, mapVisualAssets.player.key).setOrigin(0.5, 0.9).setDepth(11);
    this.previousPosition = { ...this.session.snapshot.exploration.position };
    this.reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    this.previous = '';
    this.labelKey = '';
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
    const key = [world.mapId, state.attempt?.index, world.position.x, world.position.y, world.doorUnlocked, world.missionStatus, this.facing,
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
    g.fillStyle(world.mapId.startsWith('avaliacao-') ? [0x123665, 0x174474, 0x123d70, 0x104968, 0x213c76][Math.floor((state.attempt?.index ?? 0) / 5)]! : c.floor, 0.82).fillRoundedRect(map.bounds.x, map.bounds.y, map.bounds.width, map.bounds.height, 10);
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

    const routeActiveId = world.mapId === 'avaliacao-rota' ? this.routeActiveObjectId() : null;
    const routeActiveIndex = routeActiveId ? map.objects.findIndex((object) => object.id === routeActiveId) : -1;
    if (world.mapId === 'avaliacao-rota') {
      for (let index = 0; index < map.objects.length - 1; index += 1) {
        const from = map.objects[index]!; const to = map.objects[index + 1]!;
        g.lineStyle(7, index < routeActiveIndex ? c.success : c.grid, index < routeActiveIndex ? 0.9 : 0.55);
        g.lineBetween(from.x + from.width / 2, from.y + from.height / 2,
          to.x + to.width / 2, to.y + to.height / 2);
      }
    }

    this.guide.setVisible(map.objects.some(object => object.kind === 'npc'));
    const nearby = nearbyObject(world, map);
    for (const object of map.objects) {
      const isNearby = nearby?.id === object.id;
      const completed = world.mapId === 'avaliacao-rota' ? map.objects.indexOf(object) < routeActiveIndex
        : object.kind === 'computer' ? (world.mapId === 'base-n9' ? !!state.lastResult : Number(object.id.slice(6)) <= (state.attempt?.index ?? 0) % 5)
        : object.kind === 'terminal' ? Object.values(state.puzzleProgress.entries).some((entry) => entry.completed)
          : object.kind === 'door' ? world.doorUnlocked : world.missionStatus === 'completed';
      if (object.kind === 'npc') {
        const x = object.x + object.width / 2;
        const y = object.y + object.height - 4;
        this.drawCharacterMarker(g, x, y, isNearby, world.missionStatus);
        this.positionCharacter(this.guide, x, y, 'down', false, 0, scale, ox, oy);
        continue;
      }
      if (object.kind === 'computer') {
        const activeStation = /^avaliacao-\d+$/.test(world.mapId) && object.id === 'posto-' + ((state.attempt?.index ?? 0) % 5 + 1);
        this.drawComputer(g, object.x, object.y, object.width, object.height, isNearby, completed, activeStation);
      }
      if (object.kind === 'terminal') this.drawTerminal(g, object.x, object.y, object.width, object.height, isNearby, completed);
      if (object.kind === 'door') this.drawDoor(g, object.x, object.y, object.width, object.height, isNearby, world.doorUnlocked);
      if (isNearby) {
        g.lineStyle(3, c.amber).strokeRoundedRect(object.x - 5, object.y - 5, object.width + 10, object.height + 10, 6);
        g.fillStyle(c.amber).fillCircle(object.x + object.width - 2, object.y - 6, 5);
      }
    }

    g.fillStyle(c.shadow, 0.38).fillEllipse(world.position.x, world.position.y + 9, 28, 9);
    this.positionCharacter(this.player, world.position.x, world.position.y, this.facing,
      walking && !this.reduceMotion, phase, scale, ox, oy);
    const labelKey = [world.mapId, state.attempt?.index, this.scale.width, this.scale.height, world.doorUnlocked].join(':');
    if (labelKey !== this.labelKey) {
      this.labelKey = labelKey;
      this.drawLabels(ox, oy, scale);
    }
  }

  private positionCharacter(sprite: Phaser.GameObjects.Sprite, x: number, y: number, facing: Facing,
    walking: boolean, phase: number, mapScale: number, ox: number, oy: number): void {
    const row = { down: 0, up: 1, left: 2, right: 3 }[facing];
    const column = walking ? phase + 1 : 0;
    sprite.setFrame(row * 3 + column);
    sprite.setPosition(ox + x * mapScale, oy + y * mapScale);
    sprite.setScale((54 / mapVisualAssets.player.frameHeight) * mapScale);
  }

  private drawCharacterMarker(g: Phaser.GameObjects.Graphics, x: number, y: number, highlighted: boolean,
    missionState: 'available' | 'active' | 'completed'): void {
    const c = visualTheme.colors;
    g.fillStyle(c.shadow, 0.38).fillEllipse(x, y + 9, 28, 9);
    if (highlighted) {
      g.lineStyle(2, c.amber, 0.95).strokeCircle(x, y - 4, 21);
      g.fillStyle(c.amber, 0.12).fillCircle(x, y - 4, 20);
    }
    const stateColor = missionState === 'completed' ? c.success : missionState === 'active' ? c.cyan : c.amber;
    g.fillStyle(c.canvas, 0.94).fillCircle(x + 18, y - 35, 8);
    g.lineStyle(2, stateColor).strokeCircle(x + 18, y - 35, 8);
    if (missionState === 'completed') {
      g.lineStyle(2, stateColor).lineBetween(x + 14, y - 35, x + 17, y - 32)
        .lineBetween(x + 17, y - 32, x + 22, y - 39);
    } else {
      g.fillStyle(stateColor).fillRect(x + 17, y - 39, 2, 6).fillCircle(x + 18, y - 30, 1.5);
    }
  }

  private drawComputer(g: Phaser.GameObjects.Graphics, x: number, y: number, w: number, h: number,
    nearby: boolean, completed: boolean, active = false): void {
    const c = visualTheme.colors;
    if (active) {
      g.fillStyle(c.amber, 0.13).fillCircle(x + w / 2, y + h / 2, Math.max(w, h) * 0.72);
      g.lineStyle(3, c.amber, 0.92).strokeRoundedRect(x - 6, y - 6, w + 12, h + 12, 8);
    }
    g.fillStyle(c.inkSoft).fillRoundedRect(x, y + 8, w, h - 8, 5);
    g.lineStyle(3, completed ? c.success : active || nearby ? c.amber : c.cyan).strokeRoundedRect(x + 8, y, w - 16, h - 12, 3);
    g.fillStyle(c.canvas).fillRect(x + 13, y + 5, w - 26, h - 22);
    g.fillStyle(completed ? c.success : active ? c.amber : c.cyan, 0.8).fillRect(x + 17, y + 9, w - 34, 3);
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
    const state = this.session.snapshot;
    const map = MAPS[state.exploration.mapId]!;
    const activePost = /^avaliacao-\d+$/.test(map.id) ? 'posto-' + ((state.attempt?.index ?? 0) % 5 + 1) : '';
    for (const label of this.labels) label.destroy();
    this.labels = map.objects.map((object) => this.add.text(
      ox + (object.x + object.width / 2) * scale, oy + (object.y + object.height + 10) * scale,
      object.id.startsWith('posto-') ? (object.id === activePost ? '▶ ' : '') + object.name
        : map.id === 'avaliacao-rota' ? object.name : object.kind === 'door' ? (state.exploration.doorUnlocked ? '✓ Liberada' : '▣ Bloqueada')
        : object.kind === 'computer' ? '▰ Computador' : object.kind === 'terminal' ? '◇ Terminal' : '● Lia',
      { fontFamily: 'Segoe UI, sans-serif', fontSize: Math.max(11, 12 * scale), fontStyle: '700',
        color: '#eaf6ff', backgroundColor: '#04152d',
        padding: { x: 4, y: 2 } },
    ).setOrigin(0.5, 0).setResolution(Math.min(2, window.devicePixelRatio || 1)));
  }

  private routeActiveObjectId(): string {
    const state = this.session.snapshot;
    if (state.evaluationGate === 'entrada') return 'portal-entrada';
    if (state.evaluationGate === 'intervalo') return 'portal-intervalo';
    if (state.evaluationGate === 'final') return 'portal-final';
    return 'fase-' + (Math.floor((state.attempt?.index ?? 0) / 5) + 1);
  }
}
