export function focusHeading(container: HTMLElement): void {
  container.querySelector<HTMLElement>('h1')?.focus();
}
