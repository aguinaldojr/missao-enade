export function element<K extends keyof HTMLElementTagNameMap>(
  tag: K, className: string, text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function button(text: string, secondary = false): HTMLButtonElement {
  const node = element('button', secondary ? 'button button--secondary' : 'button', text);
  node.type = 'button';
  return node;
}
