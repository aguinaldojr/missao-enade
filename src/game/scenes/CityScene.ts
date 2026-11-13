import Phaser from 'phaser';
import type { GameSession } from '../../app/GameSession';

/** Cenário puramente decorativo; toda informação e navegação existem no DOM. */
export abstract class CityScene extends Phaser.Scene {
  private drawing?: Phaser.GameObjects.Graphics;

  constructor(key: string, private readonly session: GameSession, private readonly accent: number) {
    super(key);
  }

  create(): void {
    this.drawing = this.add.graphics();
    this.drawCity();
    this.scale.on(Phaser.Scale.Events.RESIZE, this.drawCity, this);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.scale.off(Phaser.Scale.Events.RESIZE, this.drawCity, this);
      this.drawing = undefined;
    });
  }

  private drawCity(): void {
    const g = this.drawing;
    if (!g) return;
    const { width, height } = this.scale;
    g.clear();
    g.fillStyle(0x142630, 1);
    g.fillRect(0, 0, width, height);
    g.fillStyle(0x567776, 0.28);
    for (let x = 18; x < width; x += 28) {
      for (let y = 16; y < height; y += 28) g.fillCircle(x, y, 1);
    }
    const unit = Math.min(width / 470, height / 360);
    const cx = width / 2;
    const cy = height / 2 + 5 * unit;
    const point = (x: number, y: number) => ({ x: cx + x * unit, y: cy + y * unit });
    const polygon = (coords: number[][], color: number, alpha = 1) => {
      g.fillStyle(color, alpha);
      g.fillPoints(coords.map(([x = 0, y = 0]) => point(x, y)), true);
    };

    // Plataforma isométrica e caminhos conectando os serviços de Nexo.
    polygon([[0, -130], [202, -18], [0, 108], [-202, -18]], 0x233e43, 0.65);
    g.lineStyle(1, 0x638780, 0.4);
    g.strokePoints([point(0, -130), point(202, -18), point(0, 108), point(-202, -18)], true);
    g.lineStyle(2, this.accent, 0.55);
    for (const [x, y] of [[-125, -15], [110, -37], [-50, 65], [115, 55]]) {
      g.strokePoints([point(0, -10), point(x!, -10), point(x!, y!)]);
      const node = point(x!, y!);
      g.fillStyle(this.accent, 1);
      g.fillCircle(node.x, node.y, 4 * unit);
    }

    const building = (x: number, y: number, w: number, h: number, central = false) => {
      const depth = w * 0.56;
      polygon([[x - w, y], [x, y + depth], [x, y + depth - h], [x - w, y - h]], central ? 0x376a65 : 0x2c4d51);
      polygon([[x, y + depth], [x + w, y], [x + w, y - h], [x, y + depth - h]], central ? 0x4d8a7b : 0x3c6463);
      polygon([[x - w, y - h], [x, y - depth - h], [x + w, y - h], [x, y + depth - h]], central ? this.accent : 0x7fa397);
      for (let row = 0; row < Math.floor(h / 17); row++) {
        const py = y - 10 - row * 16;
        g.lineStyle(2 * unit, central ? this.accent : 0x85aaa0, 0.65);
        g.lineBetween(point(x + 8, py).x, point(x + 8, py).y, point(x + w - 8, py - depth + 10).x, point(x + w - 8, py - depth + 10).y);
      }
    };
    building(-112, -20, 29, 40);
    building(94, -52, 32, 55);
    building(8, 1, 48, 80, true);
    building(-65, 71, 23, 27);
    building(115, 64, 25, 35);
    const tower = point(8, -106);
    g.lineStyle(2, this.accent, 0.85);
    g.lineBetween(tower.x, tower.y + 21 * unit, tower.x, tower.y);
    g.fillStyle(this.accent);
    g.fillCircle(tower.x, tower.y, (this.session.snapshot.screen === 'map' ? 6 : 4) * unit);
    g.lineStyle(1, this.accent, 0.25);
    g.strokeCircle(tower.x, tower.y, 13 * unit);
    // Nenhuma animação contínua: respeita redução de movimento por padrão.
  }
}
