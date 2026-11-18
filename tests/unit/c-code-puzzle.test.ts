import { describe, expect, it } from 'vitest';
import puzzles from '../../src/content/puzzles/enade-2026-provisional-sequences.json';

const puzzle = puzzles.find((item) => item.id === 'E26-P-SI-02')!;
const monitorPuzzle = puzzles.find((item) => item.id === 'E26-P-SI-03')!;
const sourceFor = (item: typeof puzzle) => item.correctOrder
  .map((id) => item.blocks.find((block) => block.id === id)!.text).join('\n');
const source = sourceFor(puzzle);
const expectedSource = `int classificar_prioridade(int impacto, int urgencia) {
if (impacto < 1) return -1;
if (impacto > 3) return -1;
if (urgencia < 1) return -1;
if (urgencia > 3) return -1;
int pontuacao = impacto * urgencia;
if (pontuacao >= 6) return 3;
if (pontuacao >= 3) return 2;
return 1;
}`;
const expectedMonitorSource = `#include <stdio.h>

void registrar_alerta(int *contador);

int main(void) {
int medicoes[5] = {42, 78, 65, 91, 55};
int alertas = 0;
for (int i = 0; i < 5; i++) {
if (medicoes[i] >= 70) {
registrar_alerta(&alertas);
}
}
printf("Alertas: %d\\n", alertas);
return 0;
}

void registrar_alerta(int *contador) {
(*contador)++;
}`;

function oracle(impacto: number, urgencia: number): number {
  if (impacto < 1 || impacto > 3 || urgencia < 1 || urgencia > 3) return -1;
  const pontuacao = impacto * urgencia;
  if (pontuacao >= 6) return 3;
  if (pontuacao >= 3) return 2;
  return 1;
}

describe('puzzle complementar de código C', () => {
  it('monta exatamente o fonte C17 de referência sem perder operadores ou identificadores', () => {
    expect(source).toBe(expectedSource);
    expect(source).toContain('classificar_prioridade');
    expect(source).toContain('impacto * urgencia');
    expect((source.match(/{/g) ?? [])).toHaveLength(1);
    expect((source.match(/}/g) ?? [])).toHaveLength(1);
    expect(source.indexOf('pontuacao >= 6')).toBeLessThan(source.indexOf('pontuacao >= 3'));
  });

  it.each([
    [3, 3, 3], [2, 3, 3], [2, 2, 2], [1, 3, 2], [1, 1, 1], [0, 2, -1], [2, 4, -1],
  ])('classifica impacto %i e urgência %i como %i', (impacto, urgencia, expected) => {
    expect(oracle(impacto, urgencia)).toBe(expected);
  });

  it('monta um programa C17 completo com repetição, decisão, procedimento e ponteiro', () => {
    const monitorSource = sourceFor(monitorPuzzle);
    expect(monitorSource).toBe(expectedMonitorSource);
    expect(monitorSource).toContain('#include <stdio.h>');
    expect(monitorSource).toContain('for (int i = 0; i < 5; i++)');
    expect(monitorSource).toContain('if (medicoes[i] >= 70)');
    expect(monitorSource).toContain('registrar_alerta(&alertas)');
    expect(monitorSource).toContain('(*contador)++');
    expect((monitorSource.match(/{/g) ?? [])).toHaveLength(5);
    expect((monitorSource.match(/}/g) ?? [])).toHaveLength(5);
    expect([42, 78, 65, 91, 55].filter((value) => value >= 70)).toHaveLength(2);
  });
});
