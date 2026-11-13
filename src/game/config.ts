import Phaser from 'phaser';
import type { GameSession } from '../app/GameSession';
import { BootScene } from './scenes/BootScene';
import { PreloadScene } from './scenes/PreloadScene';
import { HomeScene } from './scenes/HomeScene';
import { CourseSelectScene } from './scenes/CourseSelectScene';
import { MapScene } from './scenes/MapScene';
import { QuestionScene } from './scenes/QuestionScene';
import { ResultScene } from './scenes/ResultScene';

export function mountGame(parent: HTMLElement, session: GameSession, unavailable: () => void): { sync: () => void; destroy: () => void } {
  const scenes = { home: 'HomeScene', 'course-select': 'CourseSelectScene', map: 'MapScene', question: 'QuestionScene', result: 'ResultScene' } as const;
  let ready = false;
  let current: string | undefined;
  const sync = () => {
    if (!ready) return;
    game.scale.refresh();
    const next = scenes[session.snapshot.screen];
    if (current === next) return;
    if (current) game.scene.stop(current);
    game.scene.stop('PreloadScene');
    game.scene.start(next);
    current = next;
  };
  // Canvas 2D basta para as formas simples e dispensa dependência de WebGL.
  const game = new Phaser.Game({
    type: Phaser.CANVAS,
    parent,
    backgroundColor: '#142630',
    banner: false,
    audio: { noAudio: true },
    input: { keyboard: false, mouse: false, touch: false },
    scale: { mode: Phaser.Scale.RESIZE, width: parent.clientWidth, height: parent.clientHeight },
    scene: [
      new BootScene(),
      new PreloadScene(() => { ready = true; sync(); }),
      new HomeScene(session),
      new CourseSelectScene(session),
      new MapScene(session),
      new QuestionScene(session),
      new ResultScene(session),
    ],
    callbacks: { postBoot: (instance) => { instance.canvas.setAttribute('aria-hidden', 'true'); if (!instance.renderer) unavailable(); } },
  });
  const observer = new ResizeObserver(() => game.scale.refresh());
  observer.observe(parent);
  return {
    sync,
    destroy: () => { ready = false; observer.disconnect(); game.destroy(true); },
  };
}
