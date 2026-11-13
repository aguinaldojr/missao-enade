import Phaser from 'phaser';
import type { GameSession } from '../../app/GameSession';
import { MAPS } from '../../config/maps';
import { nearbyObject, PLAYER_RADIUS } from '../../domain/exploration/World';

/** O renderer observa a sessão; movimento e colisão independem do Phaser. */
export class MapScene extends Phaser.Scene {
  private drawing!: Phaser.GameObjects.Graphics;
  private labels: Phaser.GameObjects.Text[] = [];
  private previous = '';
  constructor(private readonly session: GameSession) { super('MapScene'); }

  create(): void {
    this.drawing = this.add.graphics();
    this.previous = '';
    this.events.once('shutdown', () => { this.labels = []; });
  }

  update(): void {
    const world = this.session.snapshot.exploration;
    const key = [world.position.x, world.position.y, world.doorUnlocked, this.scale.width, this.scale.height].join(':');
    if (key === this.previous) return;
    this.previous = key;
    const map = MAPS[world.mapId]!;
    const scale = Math.min(this.scale.width / map.width, this.scale.height / map.height);
    const ox = (this.scale.width - map.width * scale) / 2;
    const oy = (this.scale.height - map.height * scale) / 2;
    const g = this.drawing;
    g.clear();
    g.setPosition(ox, oy).setScale(scale);
    g.fillStyle(0x142630).fillRect(0, 0, map.width, map.height);
    g.fillStyle(0x294149).fillRect(map.bounds.x, map.bounds.y, map.bounds.width, map.bounds.height);
    g.lineStyle(1, 0x36525a);
    for (let x = 32; x <= 608; x += 32) g.lineBetween(x, 32, x, 368);
    for (let y = 32; y <= 368; y += 32) g.lineBetween(32, y, 608, y);
    g.lineStyle(4, 0x819a9c).strokeRect(32, 32, 576, 336);
    for (const wall of map.walls) g.fillStyle(0x819a9c).fillRect(wall.x, wall.y, wall.width, wall.height);
    const nearby = nearbyObject(world, map);
    for (const object of map.objects) {
      const color = object.kind === 'computer' ? 0x78d9dd : object.kind === 'npc' ? 0xf1d495
        : object.kind === 'terminal' ? 0xb9abef : world.doorUnlocked ? 0x82d5a2 : 0xd68876;
      if (object.kind === 'door' && world.doorUnlocked) {
        g.lineStyle(3, color).strokeRect(object.x, object.y, object.width, object.height);
      } else {
        g.fillStyle(color).fillRoundedRect(object.x, object.y, object.width, object.height, 4);
        if (object.kind === 'computer' || object.kind === 'terminal') {
          g.fillStyle(0x142630).fillRect(object.x + 7, object.y + 6, object.width - 14, object.height - 17);
        }
      }
      if (nearby?.id === object.id) g.lineStyle(3, 0xffffff).strokeRect(object.x - 4, object.y - 4, object.width + 8, object.height + 8);
    }
    g.fillStyle(0x000000, 0.25).fillEllipse(world.position.x, world.position.y + 10, 25, 10);
    g.fillStyle(0xf4f8f1).fillCircle(world.position.x, world.position.y, PLAYER_RADIUS);
    g.lineStyle(3, 0x102c38).strokeCircle(world.position.x, world.position.y, PLAYER_RADIUS);
    g.fillStyle(0x203e4c).fillRect(world.position.x - 4, world.position.y - 3, 3, 3);
    g.fillRect(world.position.x + 2, world.position.y - 3, 3, 3);
    for (const label of this.labels) label.destroy();
    this.labels = map.objects.map((object) => this.add.text(
      ox + (object.x + object.width / 2) * scale, oy + (object.y + object.height + 9) * scale,
      object.kind === 'door' ? (world.doorUnlocked ? 'Liberada' : 'Bloqueada') : object.name,
      { fontFamily: 'sans-serif', fontSize: Math.max(10, 12 * scale), color: '#ffffff', backgroundColor: '#142630', padding: { x: 3, y: 2 } },
    ).setOrigin(0.5, 0));
  }
}
