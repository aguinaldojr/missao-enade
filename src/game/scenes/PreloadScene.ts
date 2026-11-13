import Phaser from 'phaser';

/** Sem assets externos nesta entrega: a ambientação usa apenas formas locais. */
export class PreloadScene extends Phaser.Scene {
  constructor(private readonly ready: () => void) { super('PreloadScene'); }
  create(): void { this.ready(); }
}
