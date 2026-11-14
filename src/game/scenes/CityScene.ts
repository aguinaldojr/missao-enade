import Phaser from 'phaser';
import type { GameSession } from '../../app/GameSession';
import { visualTheme } from '../../config/visual';

/** Campus superior decorativo; a navegação e todas as informações permanecem no DOM. */
export abstract class CityScene extends Phaser.Scene {
  private drawing?: Phaser.GameObjects.Graphics;

  constructor(key: string, private readonly session: GameSession, private readonly accent: number) {
    super(key);
  }

  create(): void {
    this.drawing = this.add.graphics();
    this.drawCampus();
    this.scale.on(Phaser.Scale.Events.RESIZE, this.drawCampus, this);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.scale.off(Phaser.Scale.Events.RESIZE, this.drawCampus, this);
      this.drawing = undefined;
    });
  }

  private drawCampus(): void {
    const g = this.drawing;
    if (!g) return;
    const c = visualTheme.colors;
    const { width, height } = this.scale;
    const unit = Math.min(width / 520, height / 350);
    const cx = width / 2;
    const cy = height / 2;
    const sx = (value: number) => cx + value * unit;
    const sy = (value: number) => cy + value * unit;
    g.clear();
    g.fillStyle(c.canvas).fillRect(0, 0, width, height);
    g.fillStyle(c.floor, 0.96).fillRoundedRect(sx(-220), sy(-130), 440 * unit, 260 * unit, 18 * unit);
    g.lineStyle(Math.max(1, unit), c.grid, 0.7);
    for (let x = -200; x <= 200; x += 40) g.lineBetween(sx(x), sy(-120), sx(x), sy(120));
    for (let y = -120; y <= 120; y += 40) g.lineBetween(sx(-210), sy(y), sx(210), sy(y));

    const room = (x: number, y: number, w: number, h: number, active = false) => {
      g.fillStyle(active ? c.inkSoft : c.floorAlt).fillRoundedRect(sx(x), sy(y), w * unit, h * unit, 8 * unit);
      g.lineStyle(2 * unit, active ? this.accent : c.wall).strokeRoundedRect(sx(x), sy(y), w * unit, h * unit, 8 * unit);
      g.fillStyle(active ? this.accent : c.wallEdge, active ? 0.22 : 0.12)
        .fillRoundedRect(sx(x + 10), sy(y + 10), (w - 20) * unit, (h - 20) * unit, 4 * unit);
    };
    room(-185, -88, 92, 70);
    room(92, -88, 92, 70);
    room(-185, 22, 92, 70);
    room(92, 22, 92, 70);
    room(-52, -58, 104, 116, true);

    g.lineStyle(8 * unit, this.accent, 0.55);
    for (const [x, y] of [[-93, -53], [92, -53], [-93, 57], [92, 57]] as const) {
      g.lineBetween(sx(x), sy(y), sx(x > 0 ? 52 : -52), sy(y));
    }
    g.fillStyle(c.cyan).fillCircle(sx(0), sy(0), 9 * unit);
    g.lineStyle(2 * unit, c.cyan, 0.45).strokeCircle(sx(0), sy(0), 18 * unit);
    g.fillStyle(this.accent, 0.9).fillRoundedRect(sx(-24), sy(-12), 48 * unit, 25 * unit, 4 * unit);
    g.fillStyle(c.canvas).fillRect(sx(-18), sy(-7), 36 * unit, 13 * unit);
    g.fillStyle(c.cyan).fillRect(sx(-14), sy(-3), 18 * unit, 3 * unit);
    const status = this.session.snapshot.screen === 'result' ? c.success : this.accent;
    g.fillStyle(status).fillCircle(sx(0), sy(-92), 5 * unit);
    g.lineStyle(2 * unit, status, 0.45).strokeCircle(sx(0), sy(-92), 12 * unit);
  }
}
