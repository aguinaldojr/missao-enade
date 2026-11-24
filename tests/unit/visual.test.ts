import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { puzzleFamilyFromId, puzzleFamilyVisuals, visualTheme } from '../../src/config/visual';

function luminance(hex: string): number {
  const channels = hex.slice(1).match(/.{2}/g)!.map((value) => {
    const channel = parseInt(value, 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0]! + 0.7152 * channels[1]! + 0.0722 * channels[2]!;
}

function contrast(a: string, b: string): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light! + 0.05) / (dark! + 0.05);
}

describe('identidade visual N9', () => {
  it('mantém contraste WCAG AA para texto e estados principais', () => {
    expect(contrast('#102d38', '#f4f1e8')).toBeGreaterThanOrEqual(7);
    expect(contrast('#056052', '#fffdf7')).toBeGreaterThanOrEqual(4.5);
    expect(contrast('#963b36', '#fbe7e4')).toBeGreaterThanOrEqual(4.5);
    expect(contrast('#176b4e', '#dcf3e7')).toBeGreaterThanOrEqual(4.5);
  });

  it('oferece símbolo, nome e classe distintos para todas as famílias de puzzle', () => {
    expect(Object.keys(puzzleFamilyVisuals)).toEqual(['COMUM', 'CC', 'SI', 'TADS', 'TGTI', 'TRC']);
    expect(new Set(Object.values(puzzleFamilyVisuals).map((item) => item.symbol)).size).toBe(6);
    expect(new Set(Object.values(puzzleFamilyVisuals).map((item) => item.className)).size).toBe(6);
    expect(puzzleFamilyFromId('E26-P-TGTI-01')).toBe('TGTI');
    expect(puzzleFamilyFromId('E26-P-COM-01')).toBe('COMUM');
  });

  it('define movimento reduzido e estados de foco no CSS', () => {
    const base = readFileSync(resolve(process.cwd(), 'src/styles/base.css'), 'utf8');
    expect(base).toContain('prefers-reduced-motion: reduce');
    expect(base).toContain(':focus-visible');
    expect(visualTheme.motion.walkFrameMs).toBeGreaterThan(0);
  });

  it('mantém os recursos web otimizados no projeto', () => {
    const root = resolve(process.cwd(), 'src/assets/visual/n9');
    const required = [
      'sprites/estudante-spritesheet.png', 'sprites/lia-spritesheet.png',
      'backgrounds/base-n9-topdown.jpg', 'backgrounds/laboratorio-desktop.jpg',
      'backgrounds/laboratorio-mobile.jpg', 'characters/lia/lia-normal.png',
      'characters/student/estudante-normal.png', 'characters/robot/robo-normal.png',
    ];
    for (const file of required) expect(readFileSync(resolve(root, file)).byteLength).toBeGreaterThan(1_000);
  });
});

