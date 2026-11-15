import { describe, expect, it } from 'vitest';
import { normalizeBasePath } from '../../vite.config';

describe('base path do Vite', () => {
  it('mantém a raiz como padrão para desenvolvimento e build local', () => {
    expect(normalizeBasePath(undefined)).toBe('/');
    expect(normalizeBasePath('')).toBe('/');
    expect(normalizeBasePath('/')).toBe('/');
  });

  it('normaliza um nome de repositório sem fixá-lo na configuração', () => {
    expect(normalizeBasePath('/n9-jornada-digital')).toBe('/n9-jornada-digital/');
    expect(normalizeBasePath(' /projeto_n9.v1/ ')).toBe('/projeto_n9.v1/');
  });

  it.each(['n9', '//n9/', '/conta/n9/', '/n9?x=1', '/n9#topo', '/../n9/'])(
    'rejeita caminho inadequado: %s', (value) => {
      expect(() => normalizeBasePath(value)).toThrow('VITE_BASE_PATH');
    });
});
