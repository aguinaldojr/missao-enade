export const visualTheme = {
  colors: {
    ink: 0x122a4b,
    inkSoft: 0x173f72,
    canvas: 0x04152d,
    floor: 0x073b79,
    floorAlt: 0x0a5194,
    grid: 0x2f6fa8,
    wall: 0x5e83a8,
    wallEdge: 0xa8cae8,
    primary: 0x0754a1,
    primaryBright: 0x168dcc,
    cyan: 0x39b7e8,
    amber: 0xf3bd56,
    success: 0x4ed18f,
    warning: 0xf2a65a,
    danger: 0xec1c2c,
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

