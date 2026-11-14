import Phaser from 'phaser';
import { visualTheme, type CharacterRole, type Facing } from '../../config/visual';

export interface CharacterFrame {
  readonly x: number;
  readonly y: number;
  readonly facing: Facing;
  readonly walking: boolean;
  readonly phase: number;
  readonly role: CharacterRole;
  readonly highlighted?: boolean;
  readonly missionState?: 'available' | 'active' | 'completed';
}

/** Personagem procedural em partes, preparado para trocar cores/peças futuramente. */
export function drawCharacter(g: Phaser.GameObjects.Graphics, frame: CharacterFrame): void {
  const c = visualTheme.colors;
  const isGuide = frame.role === 'guide';
  const step = frame.walking ? (frame.phase % 2 === 0 ? -2 : 2) : 0;
  const bob = frame.walking ? 1 : 0;
  const x = frame.x;
  const y = frame.y - bob;
  const skin = isGuide ? 0xd89a72 : 0xb87355;
  const jacket = isGuide ? c.violet : c.primaryBright;
  const trousers = isGuide ? 0x27324f : 0x173548;
  const hair = isGuide ? 0x242038 : 0x21343b;

  g.fillStyle(c.shadow, 0.38).fillEllipse(x, frame.y + 12, 25, 9);
  if (frame.highlighted) {
    g.lineStyle(2, c.amber, 0.95).strokeCircle(x, frame.y - 3, 17);
    g.fillStyle(c.amber, 0.16).fillCircle(x, frame.y - 3, 16);
  }

  // Pernas e tênis formam quadros alternados da caminhada.
  g.fillStyle(trousers).fillRoundedRect(x - 8, y + 3 + step, 6, 10, 2);
  g.fillRoundedRect(x + 2, y + 3 - step, 6, 10, 2);
  g.fillStyle(c.cream).fillRoundedRect(x - 9, y + 11 + step, 8, 4, 2);
  g.fillRoundedRect(x + 1, y + 11 - step, 8, 4, 2);

  // Mochila aparece de costas e lateralmente, reforçando orientação.
  if (frame.facing === 'up') g.fillStyle(0xf09a46).fillRoundedRect(x - 9, y - 10, 18, 15, 5);
  if (frame.facing === 'left') g.fillStyle(0xf09a46).fillRoundedRect(x + 5, y - 8, 6, 14, 3);
  if (frame.facing === 'right') g.fillStyle(0xf09a46).fillRoundedRect(x - 11, y - 8, 6, 14, 3);

  g.fillStyle(jacket).fillRoundedRect(x - 9, y - 10, 18, 16, 5);
  g.fillStyle(isGuide ? c.amber : c.cyan).fillRect(x - 7, y - 4, 14, 3);
  g.fillStyle(skin).fillRoundedRect(x - 7, y - 22, 14, 13, 5);
  g.fillStyle(hair).fillRoundedRect(x - 8, y - 24, 16, 7, 4);
  if (isGuide) {
    g.fillStyle(hair).fillCircle(x + (frame.facing === 'left' ? 5 : -5), y - 18, 4);
    g.lineStyle(1, c.cyan).strokeCircle(x - 3, y - 17, 3).strokeCircle(x + 3, y - 17, 3);
  }
  if (frame.facing === 'down') {
    g.fillStyle(c.ink).fillRect(x - 4, y - 18, 2, 2).fillRect(x + 2, y - 18, 2, 2);
  } else if (frame.facing === 'left') {
    g.fillStyle(c.ink).fillRect(x - 5, y - 18, 2, 2);
  } else if (frame.facing === 'right') {
    g.fillStyle(c.ink).fillRect(x + 3, y - 18, 2, 2);
  }

  if (isGuide) {
    const stateColor = frame.missionState === 'completed' ? c.success : frame.missionState === 'active' ? c.cyan : c.amber;
    g.fillStyle(c.canvas, 0.94).fillCircle(x + 13, y - 27, 8);
    g.lineStyle(2, stateColor).strokeCircle(x + 13, y - 27, 8);
    g.fillStyle(stateColor);
    if (frame.missionState === 'completed') {
      g.lineStyle(2, stateColor).lineBetween(x + 9, y - 27, x + 12, y - 24).lineBetween(x + 12, y - 24, x + 17, y - 31);
    } else {
      g.fillRect(x + 12, y - 31, 2, 6).fillCircle(x + 13, y - 22, 1.5);
    }
  }
}

