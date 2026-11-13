import type { Command, SessionState } from '../app/GameSession';

export type Direction = 'up' | 'down' | 'left' | 'right';
export interface MovementControls {
  press(direction: Direction): void;
  release(direction: Direction): void;
}
const keys: Readonly<Record<string, Direction>> = {
  arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down',
  arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right',
};

/** Teclado e ponteiros compartilham os mesmos comandos, inclusive sem renderer. */
export class ExplorationControls implements MovementControls {
  private readonly keyboard = new Set<string>();
  private readonly virtual = new Set<Direction>();
  private readonly listeners = new AbortController();
  private frame = 0;
  private lastTime = 0;
  private lastSave = 0;
  private moved = false;

  constructor(private readonly state: () => SessionState, private readonly dispatch: (command: Command) => void) {
    const signal = this.listeners.signal;
    window.addEventListener('keydown', (event) => {
      if (!this.enabled() || this.isFormField(event.target)) return;
      const key = event.key.toLowerCase();
      if (keys[key]) {
        event.preventDefault();
        if (!this.keyboard.has(key)) { this.keyboard.add(key); this.start(); }
      } else if ((key === 'e' || key === ' ') && !event.repeat && !this.isControl(event.target)) {
        event.preventDefault();
        this.reset();
        this.dispatch({ type: 'interact' });
      }
    }, { signal });
    window.addEventListener('keyup', (event) => {
      this.keyboard.delete(event.key.toLowerCase());
      this.stopIfIdle();
    }, { signal });
    window.addEventListener('blur', () => this.reset(), { signal });
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.reset(); }, { signal });
    window.addEventListener('pagehide', () => this.reset(), { signal });
  }

  press(direction: Direction): void {
    if (!this.enabled()) return;
    this.virtual.add(direction);
    this.start();
  }

  release(direction: Direction): void {
    this.virtual.delete(direction);
    this.stopIfIdle();
  }

  reset(): void {
    this.keyboard.clear();
    this.virtual.clear();
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.lastTime = 0;
    this.flush();
  }

  destroy(): void { this.reset(); this.listeners.abort(); }

  private enabled(): boolean { return this.state().screen === 'map' && this.state().worldDialog === null; }
  private isFormField(target: EventTarget | null): boolean {
    return target instanceof Element && !!target.closest('input, textarea, select, [contenteditable="true"]');
  }
  private isControl(target: EventTarget | null): boolean {
    return target instanceof Element && !!target.closest('button, input, textarea, select, a, summary, [contenteditable="true"]');
  }

  private vector(): { x: number; y: number } {
    const directions = new Set([...this.virtual, ...[...this.keyboard].map((key) => keys[key])]);
    return { x: Number(directions.has('right')) - Number(directions.has('left')),
      y: Number(directions.has('down')) - Number(directions.has('up')) };
  }

  private start(): void {
    if (this.frame) return;
    const vector = this.vector();
    this.dispatch({ type: 'move-player', ...vector, seconds: 0.04 });
    this.moved = true;
    this.lastTime = performance.now();
    this.frame = requestAnimationFrame(this.tick);
  }

  private readonly tick = (time: number): void => {
    const vector = this.vector();
    if (!this.enabled() || (vector.x === 0 && vector.y === 0)) { this.reset(); return; }
    this.dispatch({ type: 'move-player', ...vector, seconds: (time - this.lastTime) / 1000 });
    this.lastTime = time;
    this.moved = true;
    if (time - this.lastSave >= 500) { this.lastSave = time; this.flush(); }
    this.frame = requestAnimationFrame(this.tick);
  };

  private stopIfIdle(): void {
    const vector = this.vector();
    if (vector.x === 0 && vector.y === 0) this.reset();
  }
  private flush(): void {
    if (!this.moved) return;
    this.moved = false;
    this.dispatch({ type: 'save-exploration' });
  }
}
