import { describe, expect, it, vi } from 'vitest';
import { bootstrapRegulation } from '../../src/ui/views/RegulationView';

describe('regulamento público do piloto', () => {
  it('expõe critérios, limites, privacidade e retorno acessível', () => {
    const root = document.createElement('div');
    const exit = vi.fn();
    bootstrapRegulation(root, exit);

    expect(root.querySelector('h1')?.textContent).toContain('Regulamento');
    expect(root.textContent).toContain('são cumulativos');
    expect(root.textContent).toContain('limite máximo de 3,0 pontos');
    expect(root.textContent).toContain('0,5 ponto pela primeira partida válida');
    expect(root.textContent).toContain('limitado a dois dias');
    expect(root.textContent).toContain('limitada a 10 horas');
    expect(root.textContent).toContain('código público pseudônimo');
    expect(root.querySelectorAll('.regulation-section')).toHaveLength(9);

    root.querySelector<HTMLButtonElement>('button')!.click();
    expect(exit).toHaveBeenCalledOnce();
  });
});
