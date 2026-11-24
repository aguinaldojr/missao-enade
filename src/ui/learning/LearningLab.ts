import { N9_SHARED_LEARNING_LAB, type LearningActivity } from '../../content/learning-lab';
import { selectDailyLearningActivities } from '../../domain/services/DailyLearningSelector';
import { LabSound } from './LabSound';
import { learningLabVisualAssets, type LabCharacterMood } from '../../config/visualAssets';
import { configuredOnlineLeaderboard } from '../../infrastructure/online/AppsScriptLeaderboardRepository';
import { LocalStoragePlayerProfileRepository } from '../../infrastructure/storage/LocalStoragePlayerProfileRepository';
import { activePlayer, type PlayerProfile } from '../../domain/models/PlayerProfile';
import type { OnlineLeaderboardRepository } from '../../ports/OnlineLeaderboardRepository';
import { PROVISIONAL_PLAYABLE_COLLECTION } from '../../config/collections';

const typeLabels = {
  choice: 'Escolha rápida', 'binary-choice': 'Verdadeiro ou falso', 'multiple-select': 'Seleção múltipla',
  order: 'Ordene as etapas', match: 'Associe os pares',
  categorize: 'Classifique', 'complete-code': 'Complete o código', hotspot: 'Explore o diagrama',
  'decision-dialogue': 'Diálogo com decisão',
} as const;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function action(text: string, className = 'lab-button'): HTMLButtonElement {
  const node = el('button', className, text);
  node.type = 'button';
  return node;
}

function characters(mood: LabCharacterMood = 'neutral'): HTMLElement {
  const scene = el('div', 'lab-characters');
  scene.setAttribute('aria-hidden', 'true');
  const sources = learningLabVisualAssets.moods[mood];
  for (const [className, source] of [['lab-lia', sources.lia], ['lab-student', sources.student], ['lab-bot', sources.robot]] as const) {
    const image = el('img', className);
    image.src = source;
    image.alt = '';
    image.decoding = 'async';
    image.draggable = false;
    scene.append(image);
  }
  return scene;
}

export class LearningLab {
  private readonly sound = new LabSound();
  private readonly activities: readonly LearningActivity[];
  private index = -1;
  private xp = 0;
  private firstTryCorrect = 0;
  private missedCurrent = false;
  private activityPenalty = 0;
  private activityTimePenalty = 0;
  private activityAward = 0;
  private helpPenaltyApplied = false;
  private activityActiveMs = 0;
  private activityActiveSince = 0;
  private attemptId = '';
  private startedAt = 0;
  private rankingSubmission: 'idle' | 'sending' | 'sent' | 'failed' = 'idle';
  private rankingSubmissionError = '';
  private solved = false;
  private selectedChoice: string | null = null;
  private selectedBinary: boolean | null = null;
  private readonly selectedMultiple = new Set<string>();
  private order: string[] = [];
  private selectedLeft: string | null = null;
  private readonly matches = new Map<string, string>();
  private activeCategoryItem: string | null = null;
  private readonly categories = new Map<string, string>();
  private selectedToken: string | null = null;
  private selectedNode: string | null = null;
  private dialogueStep = 0;
  private selectedDialogueChoice: string | null = null;
  private readonly dialogueHistory: { readonly speaker: string; readonly text: string }[] = [];
  private feedback = '';
  private guide = 'Eu sou a Lia. Vamos treinar com atividades rápidas e variadas?';
  private readonly visibilityHandler = (): void => {
    const now = performance.now();
    if (document.hidden && this.activityActiveSince > 0) {
      this.activityActiveMs += now - this.activityActiveSince; this.activityActiveSince = 0;
    } else if (!document.hidden && this.index >= 0 && !this.solved && this.activityActiveSince === 0) {
      this.activityActiveSince = now;
    }
  };

  constructor(private readonly root: HTMLElement, private readonly onExit: () => void, date = new Date(),
    private readonly ranking: OnlineLeaderboardRepository | null = configuredOnlineLeaderboard(),
    private readonly player: PlayerProfile | null = activePlayer(new LocalStoragePlayerProfileRepository().load().profiles ??
      { schemaVersion: 1, activePlayerId: null, players: [] })) {
    this.activities = selectDailyLearningActivities(N9_SHARED_LEARNING_LAB, date);
    document.addEventListener('visibilitychange', this.visibilityHandler);
    this.render();
  }

  destroy(): void { document.removeEventListener('visibilitychange', this.visibilityHandler); this.sound.close(); }

  private render(): void {
    this.root.className = 'learning-lab-root';
    this.root.replaceChildren(this.index < 0 ? this.intro() : this.index >= this.activities.length ? this.result() : this.activity());
  }

  private header(): HTMLElement {
    const header = el('header', 'lab-header');
    const brand = el('div', 'lab-brand');
    brand.append(el('span', 'lab-mark', 'N9'), el('span', 'lab-brand-copy', 'Jornada Digital'));
    const controls = el('div', 'lab-header-actions');
    const sound = action(this.sound.muted ? '🔇 Som desligado' : '🔊 Som ligado', 'lab-icon-button');
    sound.setAttribute('aria-pressed', String(!this.sound.muted));
    sound.addEventListener('click', () => { this.sound.toggle(); this.render(); });
    const exit = action('Voltar ao jogo', 'lab-icon-button');
    exit.addEventListener('click', this.onExit);
    const regulation = el('a', 'lab-icon-button', 'Regulamento');
    regulation.href = '#/regulamento';
    controls.append(sound, regulation, exit);
    header.append(brand, controls);
    return header;
  }

  private intro(): HTMLElement {
    const page = el('div', 'lab-page lab-intro-screen');
    page.append(this.header());
    const hero = el('main', 'lab-intro');
    const copy = el('section', 'lab-hero-copy');
    copy.append(el('p', 'lab-pill', '⚡ MISSÃO DE APRENDIZAGEM RÁPIDA'));
    const title = el('h1', 'lab-title');
    title.tabIndex = -1;
    title.append('TREINE. ', el('span', '', 'DESCUBRA.'), ' AVANCE.');
    copy.append(title, el('p', 'lab-lead', this.activities.length + ' atividades na missão de hoje, compartilhadas entre CC, SI, TADS, TGTI e TRC e ligadas a situações reais da área de TI. Sem nota e sem alterar seu progresso no jogo principal.'));
    const start = action('Começar laboratório  →', 'lab-button lab-button--primary');
    start.addEventListener('click', () => { this.startAttempt(); this.sound.play('tap'); this.render(); });
    copy.append(start, el('p', 'lab-note', 'Duração estimada: 15 a 20 minutos · Funciona com teclado, mouse e toque'));
    const visual = el('aside', 'lab-hero-visual');
    const bubble = el('p', 'lab-speech', 'Oi! Eu sou a Lia. Cada acerto libera XP e uma nova reação.');
    visual.append(bubble, characters('neutral'));
    hero.append(copy, visual);
    const deck = el('section', 'lab-deck');
    deck.setAttribute('aria-label', 'Mecânicas disponíveis');
    this.activities.forEach((activity, itemIndex) => {
      const card = el('article', 'lab-mechanic-card');
      card.append(el('span', 'lab-card-number', String(itemIndex + 1).padStart(2, '0') + ' / ' + String(this.activities.length).padStart(2, '0')),
        el('strong', '', typeLabels[activity.type]), el('span', '', activity.area));
      deck.append(card);
    });
    page.append(hero, deck);
    queueMicrotask(() => title.focus());
    return page;
  }

  private activity(): HTMLElement {
    const activity = this.activities[this.index]!;
    const page = el('div', 'lab-page lab-play-screen');
    page.append(this.header());
    const status = el('section', 'lab-status');
    const statusCopy = el('div', 'lab-status-copy');
    statusCopy.append(el('span', 'lab-level', 'ATIVIDADE ' + (this.index + 1) + ' DE ' + this.activities.length),
      el('strong', '', typeLabels[activity.type]));
    const meter = el('div', 'lab-progress');
    meter.setAttribute('role', 'progressbar');
    meter.setAttribute('aria-valuenow', String(this.index + (this.solved ? 1 : 0)));
    meter.setAttribute('aria-valuemin', '0');
    meter.setAttribute('aria-valuemax', String(this.activities.length));
    const fill = el('span', 'lab-progress-fill');
    fill.style.width = ((this.index + (this.solved ? 1 : 0)) / this.activities.length * 100) + '%';
    meter.append(fill);
    status.append(statusCopy, meter, el('strong', 'lab-xp', '⚡ ' + this.xp + ' XP'));

    const layout = el('main', 'lab-game-layout' + (this.solved ? ' is-celebrating' : ''));
    const companion = el('aside', 'lab-companion');
    const speech = el('p', 'lab-speech', this.guide);
    speech.setAttribute('role', 'status');
    speech.setAttribute('aria-live', 'polite');
    companion.append(speech, characters(this.solved ? 'success' : this.feedback ? 'retry' : 'thinking'));
    const challenge = el('section', 'lab-challenge');
    challenge.dataset.activityType = activity.type;
    challenge.append(el('p', 'lab-area', activity.area.toUpperCase()), el('h1', 'lab-question-title', activity.title),
      el('p', 'lab-context', activity.context), el('p', 'lab-instruction', activity.instruction),
      this.helpPanel(activity), this.mechanic(activity));
    const footer = el('footer', 'lab-answer-bar');
    const feedback = el('div', 'lab-feedback' + (this.solved ? ' lab-feedback--success' : this.feedback ? ' lab-feedback--retry' : ''));
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    if (this.solved) {
      const award = this.activityAward > 0 ? 'Excelente! +' + this.activityAward + ' XP'
        : 'Atividade concluída sem XP devido aos descontos acumulados.';
      const discount = activity.xp - this.activityAward;
      feedback.append(el('strong', '', award), el('span', '', discount > 0
        ? 'Valor original: ' + activity.xp + ' XP · descontos: −' + discount + ' XP. ' + activity.explanation
        : activity.explanation));
    } else {
      feedback.append(el('strong', '', this.feedback || 'Sua vez!'), el('span', '', this.feedback
        ? 'Revise a situação e tente outra vez.' : 'Escolha, organize ou associe antes de verificar.'));
      if (this.activityPenalty > 0) feedback.append(el('span', 'lab-current-penalty',
        'Descontos acumulados nesta atividade: −' + this.activityPenalty + ' XP.'));
    }
    const verify = action(this.solved ? (this.index === this.activities.length - 1 ? 'Ver resultado  →' : 'Continuar  →') : 'Verificar', 'lab-button lab-button--primary');
    verify.dataset.action = this.solved ? 'next' : 'check';
    verify.disabled = !this.solved && !this.ready(activity);
    verify.addEventListener('click', () => this.solved ? this.next() : this.check(activity));
    footer.append(feedback, verify);
    layout.append(companion, challenge);
    page.append(status, layout, footer);
    return page;
  }

  private mechanic(activity: LearningActivity): HTMLElement {
    switch (activity.type) {
      case 'choice': return this.choice(activity);
      case 'binary-choice': return this.binaryChoice(activity);
      case 'multiple-select': return this.multipleSelect(activity);
      case 'order': return this.ordering(activity);
      case 'match': return this.matching(activity);
      case 'categorize': return this.categorizing(activity);
      case 'complete-code': return this.completeCode(activity);
      case 'hotspot': return this.hotspot(activity);
      case 'decision-dialogue': return this.dialogue(activity);
    }
  }

  private helpPanel(activity: LearningActivity): HTMLElement {
    const details = el('details', 'lab-help');
    details.append(el('summary', 'lab-help-summary', '💡 Preciso de ajuda'));
    const content = el('div', 'lab-help-content');
    content.append(el('strong', '', 'Pista'), el('p', '', activity.help.hint),
      el('strong', '', 'Conceito'), el('p', '', activity.help.concept),
      el('strong', '', 'Exemplo'), el('pre', 'lab-help-example', activity.help.example));
    details.append(content);
    details.addEventListener('toggle', () => {
      if (!details.open || this.solved || this.helpPenaltyApplied) return;
      this.helpPenaltyApplied = true; this.activityPenalty = Math.min(activity.xp, this.activityPenalty + 5);
      const current = this.root.querySelector<HTMLElement>('.lab-current-penalty');
      if (current) current.textContent = 'Descontos acumulados nesta atividade: −' + this.activityPenalty + ' XP.';
      else {
        const feedback = this.root.querySelector('.lab-feedback');
        feedback?.append(el('span', 'lab-current-penalty',
          'Ajuda utilizada: −5 XP. Descontos acumulados: −' + this.activityPenalty + ' XP.'));
      }
    });
    return details;
  }

  private choice(activity: Extract<LearningActivity, { type: 'choice' }>): HTMLElement {
    const group = el('div', 'lab-options');
    group.setAttribute('role', 'radiogroup');
    group.setAttribute('aria-label', activity.instruction);
    activity.options.forEach((option, index) => {
      const button = action('', 'lab-option');
      button.dataset.option = option.id;
      button.setAttribute('role', 'radio');
      button.setAttribute('aria-checked', String(this.selectedChoice === option.id));
      button.append(el('span', 'lab-option-key', String.fromCharCode(65 + index)), el('span', '', option.text));
      button.addEventListener('click', () => { this.selectedChoice = option.id; this.feedback = ''; this.sound.play('tap'); this.render(); });
      group.append(button);
    });
    return group;
  }

  private binaryChoice(activity: Extract<LearningActivity, { type: 'binary-choice' }>): HTMLElement {
    const wrap = el('div', 'lab-binary');
    const statement = el('blockquote', 'lab-binary-statement', activity.statement);
    let pointerStart = 0;
    statement.addEventListener('pointerdown', (event) => { pointerStart = event.clientX; });
    statement.addEventListener('pointerup', (event) => {
      const distance = event.clientX - pointerStart;
      if (Math.abs(distance) < 45) return;
      this.selectedBinary = distance > 0; this.feedback = ''; this.sound.play('tap'); this.render();
    });
    const choices = el('div', 'lab-binary-actions');
    for (const [value, label, symbol] of [[false, 'Falso', '←'], [true, 'Verdadeiro', '→']] as const) {
      const button = action(symbol + ' ' + label, 'lab-binary-button');
      button.dataset.binary = String(value);
      button.setAttribute('aria-pressed', String(this.selectedBinary === value));
      button.addEventListener('click', () => { this.selectedBinary = value; this.feedback = ''; this.sound.play('tap'); this.render(); });
      choices.append(button);
    }
    wrap.append(statement, choices, el('p', 'lab-selection-summary', 'No celular, você também pode deslizar a afirmação para a esquerda ou direita.'));
    return wrap;
  }

  private multipleSelect(activity: Extract<LearningActivity, { type: 'multiple-select' }>): HTMLElement {
    const wrap = el('div', 'lab-multiple');
    const counter = el('p', 'lab-multiple-counter', 'Selecionados: ' + this.selectedMultiple.size + ' de ' + activity.requiredCount);
    const options = el('div', 'lab-multiple-options');
    activity.options.forEach((option) => {
      const button = action('', 'lab-multiple-option');
      button.dataset.multi = option.id;
      button.setAttribute('aria-pressed', String(this.selectedMultiple.has(option.id)));
      button.append(el('span', 'lab-check-box', this.selectedMultiple.has(option.id) ? '✓' : ''), el('span', '', option.text));
      button.addEventListener('click', () => {
        if (this.selectedMultiple.has(option.id)) this.selectedMultiple.delete(option.id);
        else if (this.selectedMultiple.size < activity.requiredCount) this.selectedMultiple.add(option.id);
        this.feedback = ''; this.sound.play('tap'); this.render();
      });
      options.append(button);
    });
    wrap.append(counter, options); return wrap;
  }

  private ordering(activity: Extract<LearningActivity, { type: 'order' }>): HTMLElement {
    const list = el('ol', 'lab-order-list');
    this.order.forEach((id, position) => {
      const block = activity.blocks.find((candidate) => candidate.id === id)!;
      const item = el('li', 'lab-order-item');
      item.draggable = !this.solved;
      item.dataset.block = id;
      item.append(el('span', 'lab-order-number', String(position + 1)), el('span', 'lab-order-text', block.text));
      const controls = el('span', 'lab-order-actions');
      const up = action('↑', 'lab-move-button');
      up.setAttribute('aria-label', 'Mover “' + block.text + '” para cima');
      up.disabled = position === 0 || this.solved;
      up.addEventListener('click', () => this.moveOrder(position, position - 1));
      const down = action('↓', 'lab-move-button');
      down.setAttribute('aria-label', 'Mover “' + block.text + '” para baixo');
      down.disabled = position === this.order.length - 1 || this.solved;
      down.addEventListener('click', () => this.moveOrder(position, position + 1));
      controls.append(up, down); item.append(controls);
      item.addEventListener('dragstart', (event) => event.dataTransfer?.setData('text/plain', id));
      item.addEventListener('dragover', (event) => event.preventDefault());
      item.addEventListener('drop', (event) => {
        event.preventDefault(); const dragged = event.dataTransfer?.getData('text/plain');
        const from = this.order.indexOf(dragged ?? ''); if (from >= 0) this.moveOrder(from, position);
      });
      list.append(item);
    });
    return list;
  }

  private matching(activity: Extract<LearningActivity, { type: 'match' }>): HTMLElement {
    const wrap = el('div', 'lab-match');
    const left = el('div', 'lab-match-column');
    const right = el('div', 'lab-match-column');
    activity.pairs.forEach((pair) => {
      const button = action(pair.left, 'lab-match-button');
      button.dataset.left = pair.id;
      button.setAttribute('aria-pressed', String(this.selectedLeft === pair.id));
      if (this.matches.has(pair.id)) button.classList.add('is-paired');
      button.disabled = this.solved;
      button.addEventListener('click', () => {
        this.matches.delete(pair.id);
        this.selectedLeft = this.selectedLeft === pair.id ? null : pair.id;
        this.feedback = ''; this.sound.play('tap'); this.render();
      });
      left.append(button);
    });
    [...activity.pairs].reverse().forEach((pair) => {
      const button = action(pair.right, 'lab-match-button lab-match-button--term');
      button.dataset.right = pair.id;
      const pairedLeft = [...this.matches].find(([, rightId]) => rightId === pair.id)?.[0];
      if (pairedLeft) {
        button.classList.add('is-paired');
        const term = activity.pairs.find((candidate) => candidate.id === pairedLeft)!;
        button.append(el('span', 'lab-assigned', 'Associado a ' + term.left));
      }
      button.disabled = this.solved || (this.selectedLeft === null && !pairedLeft);
      button.addEventListener('click', () => {
        if (pairedLeft) this.matches.delete(pairedLeft);
        if (this.selectedLeft !== null) this.matches.set(this.selectedLeft, pair.id);
        this.selectedLeft = null; this.feedback = ''; this.sound.play('tap'); this.render();
      });
      right.append(button);
    });
    wrap.append(left, el('span', 'lab-match-link', '↔'), right);
    const summary = el('p', 'lab-selection-summary', this.matches.size + ' de ' + activity.pairs.length + ' pares conectados');
    const container = el('div'); container.append(wrap, summary); return container;
  }

  private categorizing(activity: Extract<LearningActivity, { type: 'categorize' }>): HTMLElement {
    const wrap = el('div', 'lab-category-wrap');
    const items = el('div', 'lab-category-items');
    activity.items.forEach((item) => {
      const button = action(item.text, 'lab-category-item');
      button.dataset.item = item.id;
      button.draggable = !this.solved;
      button.setAttribute('aria-pressed', String(this.activeCategoryItem === item.id));
      const assigned = this.categories.get(item.id);
      if (assigned) button.append(el('span', 'lab-assigned', ' → ' + activity.categories.find((category) => category.id === assigned)!.label));
      button.addEventListener('click', () => { this.activeCategoryItem = item.id; this.sound.play('tap'); this.render(); });
      button.addEventListener('dragstart', (event) => event.dataTransfer?.setData('text/plain', item.id));
      items.append(button);
    });
    const buckets = el('div', 'lab-buckets');
    activity.categories.forEach((category) => {
      const button = action('', 'lab-bucket');
      button.dataset.category = category.id;
      button.append(el('strong', '', category.label), el('span', '', category.description));
      button.addEventListener('click', () => this.assignCategory(this.activeCategoryItem, category.id));
      button.addEventListener('dragover', (event) => event.preventDefault());
      button.addEventListener('drop', (event) => { event.preventDefault(); this.assignCategory(event.dataTransfer?.getData('text/plain') ?? null, category.id); });
      buckets.append(button);
    });
    wrap.append(items, buckets); return wrap;
  }

  private completeCode(activity: Extract<LearningActivity, { type: 'complete-code' }>): HTMLElement {
    const wrap = el('div', 'lab-code-mechanic');
    const code = el('pre', 'lab-code');
    const before = document.createTextNode(activity.codeBefore);
    const slot = el('span', 'lab-code-slot', this.selectedToken ? activity.tokens.find((token) => token.id === this.selectedToken)!.text : 'arraste ou escolha um trecho');
    slot.dataset.slot = 'sql';
    slot.addEventListener('dragover', (event) => event.preventDefault());
    slot.addEventListener('drop', (event) => { event.preventDefault(); this.selectedToken = event.dataTransfer?.getData('text/plain') ?? null; this.sound.play('tap'); this.render(); });
    code.append(before, slot, document.createTextNode(activity.codeAfter));
    const tokens = el('div', 'lab-code-tokens');
    activity.tokens.forEach((token) => {
      const button = action(token.text, 'lab-token');
      button.dataset.token = token.id;
      button.draggable = !this.solved;
      button.setAttribute('aria-pressed', String(this.selectedToken === token.id));
      button.addEventListener('click', () => { this.selectedToken = token.id; this.sound.play('tap'); this.render(); });
      button.addEventListener('dragstart', (event) => event.dataTransfer?.setData('text/plain', token.id));
      tokens.append(button);
    });
    wrap.append(code, tokens); return wrap;
  }

  private hotspot(activity: Extract<LearningActivity, { type: 'hotspot' }>): HTMLElement {
    const figure = el('figure', 'lab-diagram');
    if (activity.visualKind === 'truncated-bar-chart') {
      const chart = el('div', 'lab-chart-preview');
      chart.setAttribute('role', 'img'); chart.setAttribute('aria-label', activity.visualDescription);
      chart.append(el('strong', 'lab-chart-title', 'Taxa de Retenção Semestral'));
      const plot = el('div', 'lab-chart-plot');
      const axis = el('div', 'lab-chart-axis');
      for (const tick of ['96%', '95%', '94%', '93%', '92%', '91%']) axis.append(el('span', '', tick));
      const bars = el('div', 'lab-chart-bars');
      const first = el('div', 'lab-chart-column'); first.style.height = '20%'; first.append(el('strong', '', '92%'));
      const second = el('div', 'lab-chart-column lab-chart-column--accent'); second.style.height = '80%';
      second.append(el('strong', '', '95%'));
      bars.append(first, second); plot.append(axis, bars); chart.append(plot);
      const labels = el('div', 'lab-chart-labels'); labels.append(el('span', '', '2025.2'), el('span', '', '2026.1'));
      chart.append(labels); figure.append(chart);
    }
    const nodeButton = (node: (typeof activity.nodes)[number], className = 'lab-diagram-node'): HTMLButtonElement => {
      const button = action('', className);
      button.dataset.node = node.id;
      button.setAttribute('aria-pressed', String(this.selectedNode === node.id));
      button.setAttribute('aria-label', node.label + '. ' + node.detail);
      button.addEventListener('click', () => { this.selectedNode = node.id; this.sound.play('tap'); this.render(); });
      return button;
    };
    const nodeMap = new Map(activity.nodes.map((node) => [node.id, node]));
    const umlIds = ['node-heranca', 'node-composicao', 'node-agregacao', 'node-classe-item'] as const;
    if (activity.visualKind === 'uml-composition' && umlIds.every((id) => nodeMap.has(id))) {
      const uml = el('div', 'lab-uml-diagram');
      uml.setAttribute('role', 'img'); uml.setAttribute('aria-label', activity.visualDescription);
      const classBox = (name: string, details = ''): HTMLElement => {
        const box = el('div', 'lab-uml-class'); box.append(el('strong', '', name));
        if (details) box.append(el('span', '', details));
        return box;
      };
      const relation = (id: typeof umlIds[number], symbol: string, multiplicity: string, className: string): HTMLButtonElement => {
        const button = nodeButton(nodeMap.get(id)!, 'lab-uml-relation ' + className);
        button.append(el('span', 'lab-uml-symbol', symbol), el('span', 'lab-uml-line'), el('small', '', multiplicity));
        return button;
      };
      const item = nodeButton(nodeMap.get('node-classe-item')!, 'lab-uml-class lab-uml-class--selectable');
      item.append(el('strong', '', 'ItemMatricula'), el('span', '', 'codigoDisciplina\nturno'));
      const branches = el('div', 'lab-uml-branches');
      const composition = el('div', 'lab-uml-branch');
      composition.append(relation('node-composicao', '◆', '1     1..*', 'lab-uml-relation--composition'), item);
      const aggregation = el('div', 'lab-uml-branch');
      aggregation.append(relation('node-agregacao', '◇', '1     0..*', 'lab-uml-relation--aggregation'),
        classBox('AnexoOpcional', 'arquivo\ntipo'));
      branches.append(composition, aggregation);
      uml.append(classBox('DocumentoAcademico', 'id\ndataCriacao'),
        relation('node-heranca', '△', '', 'lab-uml-relation--inheritance'),
        classBox('PedidoMatricula', 'numero\nstatus'), branches);
      figure.append(uml);
    } else {
      const visual = el('div', 'lab-diagram-flow lab-diagram-flow--' + (activity.visualKind ?? 'component-grid'));
      const buttons = activity.nodes.map((node) => {
        const button = nodeButton(node, 'lab-diagram-node' + (node.id === 'relation' ? ' lab-diagram-relation' : ''));
        button.append(el('strong', '', node.label), el('span', '', node.detail));
        return button;
      });
      if (activity.visualKind === 'cloud-architecture' && buttons.length === 4) {
      buttons.forEach((button, index) => button.classList.add('lab-architecture-node-' + (index + 1)));
      visual.append(buttons[0]!, el('span', 'lab-diagram-arrow lab-architecture-edge-1', '→'), buttons[1]!,
        el('span', 'lab-diagram-arrow lab-architecture-edge-2', '→'), buttons[2]!,
        el('span', 'lab-diagram-arrow lab-architecture-edge-3', '→'), buttons[3]!);
      } else {
        visual.append(...buttons);
      }
      figure.append(visual);
    }
    const caption = el('figcaption', '', 'Descrição textual: ' + activity.accessibleDescription + ' Todos os elementos são selecionáveis por teclado.');
    figure.append(caption); return figure;
  }

  private dialogue(activity: Extract<LearningActivity, { type: 'decision-dialogue' }>): HTMLElement {
    const wrap = el('div', 'lab-dialogue');
    const conversation = el('div', 'lab-dialogue-history');
    this.dialogueHistory.forEach((turn) => {
      const bubble = el('div', 'lab-dialogue-bubble lab-dialogue-bubble--student');
      bubble.append(el('strong', '', turn.speaker), el('span', '', turn.text));
      conversation.append(bubble);
    });
    const step = activity.steps[this.dialogueStep]!;
    const prompt = el('div', 'lab-dialogue-bubble lab-dialogue-bubble--speaker');
    prompt.append(el('strong', '', step.speaker), el('span', '', step.message));
    conversation.append(prompt);
    const choices = el('div', 'lab-dialogue-choices');
    step.choices.forEach((choice) => {
      const button = action(choice.text, 'lab-dialogue-choice');
      button.dataset.dialogueChoice = choice.id;
      button.setAttribute('aria-pressed', String(this.selectedDialogueChoice === choice.id));
      button.addEventListener('click', () => {
        this.selectedDialogueChoice = choice.id; this.feedback = ''; this.sound.play('tap'); this.render();
      });
      choices.append(button);
    });
    wrap.append(conversation,
      el('p', 'lab-dialogue-step', 'Decisão ' + (this.dialogueStep + 1) + ' de ' + activity.steps.length), choices);
    return wrap;
  }

  private ready(activity: LearningActivity): boolean {
    if (activity.type === 'choice') return this.selectedChoice !== null;
    if (activity.type === 'binary-choice') return this.selectedBinary !== null;
    if (activity.type === 'multiple-select') return this.selectedMultiple.size === activity.requiredCount;
    if (activity.type === 'order') return true;
    if (activity.type === 'match') return this.matches.size === activity.pairs.length;
    if (activity.type === 'categorize') return this.categories.size === activity.items.length;
    if (activity.type === 'complete-code') return this.selectedToken !== null;
    if (activity.type === 'hotspot') return this.selectedNode !== null;
    return this.selectedDialogueChoice !== null;
  }

  private check(activity: LearningActivity): void {
    if (activity.type === 'decision-dialogue') {
      this.checkDialogue(activity);
      return;
    }
    const correct = activity.type === 'choice' ? this.selectedChoice === activity.correctId
      : activity.type === 'binary-choice' ? this.selectedBinary === activity.correctValue
        : activity.type === 'multiple-select' ? activity.options.every((option) => this.selectedMultiple.has(option.id) === option.correct)
          : activity.type === 'order' ? this.order.join('|') === activity.correctOrder.join('|')
            : activity.type === 'match' ? activity.pairs.every((pair) => this.matches.get(pair.id) === pair.id)
              : activity.type === 'categorize' ? activity.items.every((item) => this.categories.get(item.id) === item.categoryId)
                : activity.type === 'complete-code' ? this.selectedToken === activity.correctTokenId
                  : activity.type === 'hotspot' && this.selectedNode === activity.correctNodeId;
    if (correct) {
      if (!this.missedCurrent) this.firstTryCorrect += 1;
      this.solved = true; this.activityAward = this.awardXp(activity); this.xp += this.activityAward; this.feedback = '';
      this.guide = this.index === this.activities.length - 1 ? 'Sequência concluída! Você dominou nove maneiras de aprender.' : 'Mandou bem! Vamos para o próximo desafio.';
      this.sound.play(this.index === this.activities.length - 1 ? 'complete' : 'correct');
    } else {
      this.missedCurrent = true; this.activityPenalty = Math.min(activity.xp, this.activityPenalty + 10);
      this.feedback = activity.type === 'choice' ? activity.options.find((option) => option.id === this.selectedChoice)?.feedback ?? 'Revise a alternativa.'
        : activity.type === 'binary-choice' ? (this.selectedBinary ? activity.feedbackTrue : activity.feedbackFalse)
          : activity.type === 'complete-code' ? activity.tokens.find((token) => token.id === this.selectedToken)?.feedback ?? 'Revise o trecho.'
            : activity.type === 'order' ? 'A sequência ainda deixa uma ação acontecer cedo demais.'
        : activity.type === 'match' ? 'Revise os pares. Toque em um item associado para desfazer a ligação.'
          : activity.type === 'categorize' ? 'Há pelo menos um cenário no ambiente de dados incorreto.'
            : activity.type === 'multiple-select' ? this.multipleFeedback(activity)
            : 'Quase! Essa solução não atende completamente ao cenário.';
      this.guide = 'Tudo bem errar. Use a pista do cenário e tente novamente!'; this.sound.play('wrong');
    }
    this.render();
  }

  private multipleFeedback(activity: Extract<LearningActivity, { type: 'multiple-select' }>): string {
    const wrongSelected = activity.options.find((option) => this.selectedMultiple.has(option.id) && !option.correct);
    if (wrongSelected) return wrongSelected.feedback;
    return activity.options.find((option) => option.correct && !this.selectedMultiple.has(option.id))?.feedback
      ?? 'Revise as opções selecionadas.';
  }

  private checkDialogue(activity: Extract<LearningActivity, { type: 'decision-dialogue' }>): void {
    const step = activity.steps[this.dialogueStep]!;
    const choice = step.choices.find((candidate) => candidate.id === this.selectedDialogueChoice)!;
    if (!choice.correct) {
      this.missedCurrent = true; this.activityPenalty = Math.min(activity.xp, this.activityPenalty + 10);
      this.feedback = choice.reaction;
      this.guide = 'Essa decisão pode criar um novo problema. Leia a reação e tente outra abordagem.';
      this.sound.play('wrong'); this.render(); return;
    }
    this.dialogueHistory.push(
      { speaker: 'Você · analista de SI', text: choice.text },
      { speaker: step.speaker, text: choice.reaction },
    );
    if (this.dialogueStep < activity.steps.length - 1) {
      this.dialogueStep += 1; this.selectedDialogueChoice = null; this.feedback = '';
      this.guide = 'Boa decisão! A conversa avançou para uma nova questão.';
      this.sound.play('correct'); this.render(); return;
    }
    if (!this.missedCurrent) this.firstTryCorrect += 1;
    this.solved = true; this.activityAward = this.awardXp(activity); this.xp += this.activityAward; this.feedback = '';
    this.guide = 'Você equilibrou pessoas, processos, dados e tecnologia. Excelente análise!';
    this.sound.play('complete'); this.render();
  }

  private next(): void { this.index += 1; this.prepareActivity(); this.sound.play('tap'); this.render(); }

  private prepareActivity(): void {
    this.solved = false; this.missedCurrent = false; this.feedback = ''; this.selectedChoice = null; this.selectedBinary = null;
    this.activityPenalty = 0; this.activityTimePenalty = 0; this.activityAward = 0; this.helpPenaltyApplied = false;
    this.activityActiveMs = 0; this.activityActiveSince = document.hidden ? 0 : performance.now();
    this.selectedMultiple.clear(); this.selectedLeft = null; this.matches.clear();
    this.activeCategoryItem = null; this.categories.clear(); this.selectedToken = null; this.selectedNode = null;
    this.dialogueStep = 0; this.selectedDialogueChoice = null; this.dialogueHistory.length = 0;
    const current = this.activities[this.index];
    this.order = current?.type === 'order' ? [...current.blocks].reverse().map((block) => block.id) : [];
    this.guide = current ? 'Novo desafio: ' + typeLabels[current.type] + '. Você consegue!' : 'Laboratório concluído!';
  }

  private awardXp(activity: LearningActivity): number {
    if (this.activityActiveSince > 0) {
      this.activityActiveMs += performance.now() - this.activityActiveSince; this.activityActiveSince = 0;
    }
    const completedIntervals = Math.floor(Math.max(0, this.activityActiveMs - 60_000) / 15_000);
    this.activityTimePenalty = Math.min(Math.ceil(activity.xp * 0.1), completedIntervals);
    return Math.max(0, activity.xp - this.activityPenalty - this.activityTimePenalty);
  }

  private startAttempt(): void {
    this.index = 0; this.xp = 0; this.firstTryCorrect = 0;
    this.startedAt = Date.now();
    this.attemptId = 'quick-' + (globalThis.crypto?.randomUUID?.() ?? Date.now().toString(36));
    this.rankingSubmission = 'idle'; this.rankingSubmissionError = '';
    this.prepareActivity();
  }

  private moveOrder(from: number, to: number): void {
    if (to < 0 || to >= this.order.length) return;
    const next = [...this.order]; const [moved] = next.splice(from, 1); next.splice(to, 0, moved!); this.order = next;
    this.feedback = ''; this.sound.play('tap'); this.render();
  }

  private assignCategory(itemId: string | null, categoryId: string): void {
    if (!itemId) return;
    this.categories.set(itemId, categoryId); this.activeCategoryItem = null; this.feedback = ''; this.sound.play('tap'); this.render();
  }

  private async submitQuickRanking(status: HTMLElement, retry: HTMLButtonElement): Promise<void> {
    if (this.rankingSubmission === 'sending' || this.rankingSubmission === 'sent' || !this.ranking ||
      !this.player?.verificationToken || !this.player.course || !this.player.rankingEligible) return;
    this.rankingSubmission = 'sending'; this.rankingSubmissionError = '';
    status.textContent = 'Enviando resultado automaticamente ao ranking diário…';
    retry.hidden = true; retry.disabled = true;
    try {
      await this.ranking.submit({ verificationToken: this.player.verificationToken,
        mode: 'quick', attemptId: this.attemptId, course: this.player.course,
        questionCount: this.activities.length, correctCount: this.firstTryCorrect,
        score: this.xp, maxScore: this.activities.reduce((total, activity) => total + activity.xp, 0),
        durationMs: Math.max(0, Date.now() - this.startedAt), achievedAt: new Date().toISOString(),
        collectionId: PROVISIONAL_PLAYABLE_COLLECTION.collectionId });
      this.rankingSubmission = 'sent';
      status.textContent = 'Resultado incluído automaticamente no ranking diário.';
    } catch (error) {
      this.rankingSubmission = 'failed';
      this.rankingSubmissionError = error instanceof Error ? error.message : 'Não foi possível enviar o resultado.';
      status.textContent = this.rankingSubmissionError;
      retry.hidden = false; retry.disabled = false;
    }
  }

  private result(): HTMLElement {
    const page = el('div', 'lab-page lab-result-screen'); page.append(this.header());
    const main = el('main', 'lab-result');
    const burst = el('div', 'lab-xp-burst', '⚡ +' + this.xp + ' XP');
    const title = el('h1', 'lab-title', 'LABORATÓRIO CONCLUÍDO!'); title.tabIndex = -1;
    main.append(burst, title, el('p', 'lab-lead', 'Você concluiu as ' + this.activities.length + ' atividades de hoje e experimentou nove formas de aprender conceitos reais de tecnologia.'), characters('result'));
    const stats = el('div', 'lab-result-stats');
    stats.append(el('span', '', this.activities.length + ' atividades'), el('span', '', this.xp + ' XP'),
      el('span', '', this.firstTryCorrect + ' acertos de primeira'));
    const rankingStatus = el('p', 'lab-ranking-status');
    rankingStatus.setAttribute('role', 'status');
    rankingStatus.setAttribute('aria-live', 'polite');
    if (this.ranking && this.player?.verificationToken && this.player.course && this.player.rankingEligible) {
      const retry = action('Tentar enviar novamente', 'lab-button lab-button--ghost');
      retry.hidden = this.rankingSubmission !== 'failed';
      retry.addEventListener('click', () => { void this.submitQuickRanking(rankingStatus, retry); });
      rankingStatus.textContent = this.rankingSubmission === 'sent'
        ? 'Resultado incluído automaticamente no ranking diário.'
        : this.rankingSubmission === 'failed' ? this.rankingSubmissionError
          : 'O resultado será enviado automaticamente ao ranking diário.';
      main.append(rankingStatus, retry);
      if (this.rankingSubmission === 'idle') {
        queueMicrotask(() => { void this.submitQuickRanking(rankingStatus, retry); });
      }
    } else if (this.player?.role === 'teacher') {
      rankingStatus.textContent = 'Perfil de professor: este resultado não entra no ranking.'; main.append(rankingStatus);
    } else {
      rankingStatus.textContent = 'Valide seu cadastro no jogo principal para participar do ranking diário.'; main.append(rankingStatus);
    }
    const restart = action('Jogar novamente', 'lab-button lab-button--primary');
    restart.addEventListener('click', () => { this.startAttempt(); this.render(); });
    const exit = action('Voltar ao N9 atual', 'lab-button lab-button--ghost'); exit.addEventListener('click', this.onExit);
    const actions = el('div', 'lab-result-actions'); actions.append(restart, exit); main.append(stats, actions); page.append(main);
    queueMicrotask(() => title.focus()); return page;
  }
}

export function bootstrapLearningLab(root: HTMLElement, onExit: () => void): () => void {
  const lab = new LearningLab(root, onExit);
  return () => lab.destroy();
}

