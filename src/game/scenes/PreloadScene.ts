import Phaser from 'phaser';
import { mapVisualAssets } from '../../config/visualAssets';

export class PreloadScene extends Phaser.Scene {
  constructor(private readonly ready: () => void) { super('PreloadScene'); }

  preload(): void {
    this.load.spritesheet(mapVisualAssets.player.key, mapVisualAssets.player.url, {
      frameWidth: mapVisualAssets.player.frameWidth,
      frameHeight: mapVisualAssets.player.frameHeight,
    });
    this.load.spritesheet(mapVisualAssets.lia.key, mapVisualAssets.lia.url, {
      frameWidth: mapVisualAssets.lia.frameWidth,
      frameHeight: mapVisualAssets.lia.frameHeight,
    });
  }

  create(): void { this.ready(); }
}
