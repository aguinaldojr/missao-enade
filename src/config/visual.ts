export const visualTheme = {
  colors: {
    ink: 0x102d38,
    inkSoft: 0x1b4650,
    canvas: 0x071f2b,
    floor: 0x173b45,
    floorAlt: 0x1d4650,
    grid: 0x2d5960,
    wall: 0x78969a,
    wallEdge: 0xa8c0bb,
    primary: 0x087a68,
    primaryBright: 0x26c99a,
    cyan: 0x55d6e4,
    amber: 0xf3bd56,
    success: 0x4ed18f,
    warning: 0xf2a65a,
    danger: 0xe96c6c,
    violet: 0x9b8cff,
    cream: 0xfff7df,
    white: 0xffffff,
    shadow: 0x020b10,
  },
  motion: {
    walkFrameMs: 145,
    idleFrameMs: 720,
  },
} as const;

export type Facing = 'up' | 'down' | 'left' | 'right';
export type CharacterRole = 'player' | 'guide';

export const puzzleFamilyVisuals = {
  COMUM: { symbol: '◇', name: 'Comum', className: 'common' },
  CC: { symbol: '{ }', name: 'Ciência da Computação', className: 'cc' },
  SI: { symbol: '▦', name: 'Sistemas de Informação', className: 'si' },
  TADS: { symbol: '</>', name: 'Análise e Desenvolvimento', className: 'tads' },
  TGTI: { symbol: '◎', name: 'Gestão de TI', className: 'tgti' },
  TRC: { symbol: '⌁', name: 'Redes de Computadores', className: 'trc' },
} as const;

export type PuzzleFamily = keyof typeof puzzleFamilyVisuals;

export function puzzleFamilyFromId(id: string): PuzzleFamily {
  const segment = id.split('-')[2];
  return segment && segment in puzzleFamilyVisuals ? segment as PuzzleFamily : 'COMUM';
}

