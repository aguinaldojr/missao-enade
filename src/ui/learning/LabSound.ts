export type LabSoundName = 'tap' | 'correct' | 'wrong' | 'complete';

export class LabSound {
  private context: AudioContext | null = null;
  muted = false;

  toggle(): boolean {
    this.muted = !this.muted;
    return this.muted;
  }

  play(name: LabSoundName): void {
    if (this.muted || typeof AudioContext === 'undefined') return;
    this.context ??= new AudioContext();
    const notes = name === 'correct' ? [523, 659, 784] : name === 'complete' ? [523, 659, 784, 1047]
      : name === 'wrong' ? [220, 180] : [440];
    const start = this.context.currentTime;
    notes.forEach((frequency, index) => {
      const oscillator = this.context!.createOscillator();
      const gain = this.context!.createGain();
      oscillator.type = name === 'wrong' ? 'square' : 'sine';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, start + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.08, start + index * 0.08 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + index * 0.08 + 0.13);
      oscillator.connect(gain).connect(this.context!.destination);
      oscillator.start(start + index * 0.08);
      oscillator.stop(start + index * 0.08 + 0.14);
    });
  }

  close(): void { void this.context?.close(); this.context = null; }
}

