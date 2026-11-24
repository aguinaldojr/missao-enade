import type { Command, SessionState } from '../../app/GameSession';
import { puzzleCopy } from '../../config/puzzles';
import { totalPuzzleXp, type SequencePuzzle } from '../../domain/puzzles/SequencePuzzle';
import { button, element } from '../components/elements';
import { puzzleFamilyFromId, puzzleFamilyVisuals } from '../../config/visual';
import { learningLabVisualAssets } from '../../config/visualAssets';

export class SequencePuzzleView {
  readonly element = element('section', 'view puzzle-view');
  readonly puzzleId: string;
  private readonly puzzle: SequencePuzzle;
  private readonly list = element('ol', 'sequence-blocks');
  private readonly rows = new Map<string, HTMLLIElement>();
  private readonly feedback = element('p', 'puzzle-feedback');
  private readonly hintList = element('ol', 'puzzle-hints');
  private readonly hintsButton = button(puzzleCopy.hint, true);
  private readonly validateButton = button(puzzleCopy.validate);
  private readonly success = element('section', 'puzzle-success');
  private readonly explanation = element('p', 'puzzle-explanation');
  private readonly earned = element('p', 'puzzle-earned');
  private readonly xp = element('p', 'puzzle-xp');
  private readonly saved = element('p', 'puzzle-save');
  private readonly retry = button(puzzleCopy.retry, true);
  private readonly replayNotice = element('p', 'helper', puzzleCopy.replayReward);
  private readonly movement = element('p', 'sr-only');
  private readonly commonTerminal: HTMLElement | undefined;
  private readonly commonPublicStatus: HTMLElement | undefined;
  private readonly evaluationGuide: HTMLImageElement | undefined;
  private readonly evaluationGuideState: HTMLElement | undefined;
  private readonly evaluationGuideMessage: HTMLElement | undefined;
  private previousOrder = '';
  private lastTouchMove = -Infinity;
  private wasSolved = false;
  private drag: { id: string; y: number; currentY: number; to: number; moved: boolean; handle: HTMLButtonElement } | null = null;

  constructor(state: SessionState, private readonly dispatch: (command: Command) => void, signal: AbortSignal) {
    this.puzzleId = state.puzzleAttempt!.puzzleId;
    this.puzzle = state.puzzles.find((puzzle) => puzzle.id === this.puzzleId)!;
    const family = puzzleFamilyFromId(this.puzzle.id);
    const familyVisual = puzzleFamilyVisuals[family];
    const isCommon = this.puzzle.id === 'E26-P-COM-01';
    const isSiReplacement = this.puzzle.id === 'E26-P-SI-01';
    const isCodePuzzle = ['E26-P-SI-02', 'E26-P-SI-03'].includes(this.puzzle.id);
    const hasOperationalCards = isCommon || isSiReplacement || isCodePuzzle;
    const evaluationGate = state.evaluationGate;
    this.element.dataset.puzzleFamily = familyVisual.className;
    if (evaluationGate) this.element.dataset.evaluationGate = evaluationGate;
    if (isCodePuzzle) this.element.dataset.puzzleMode = 'code';
    const heading = element('h1', 'section-title', evaluationGate ? 'Desafio de ativação' : puzzleCopy.title);
    heading.tabIndex = -1;
    const choices = element('div', 'puzzle-choices');
    choices.hidden = !!state.evaluationGate;
    choices.setAttribute('role', 'group');
    choices.setAttribute('aria-label', 'Exercícios de Sequência Lógica');
    for (const puzzle of state.puzzles) {
      const choose = button(puzzle.title, true);
      choose.setAttribute('aria-pressed', String(puzzle.id === this.puzzleId));
      choose.addEventListener('click', () => dispatch({ type: 'select-puzzle', id: puzzle.id }), { signal });
      choices.append(choose);
    }
    const familyBadge = element('p', 'puzzle-family');
    const familySymbol = element('span', 'puzzle-family-symbol', familyVisual.symbol);
    familySymbol.setAttribute('aria-hidden', 'true');
    familyBadge.append(familySymbol, document.createTextNode(familyVisual.name));
    const narrative = element('p', 'puzzle-narrative', this.puzzle.narrative);
    let narrativeContent: HTMLElement = narrative;
    if (isCommon || isSiReplacement || isCodePuzzle) {
      const briefing = element('section', 'common-briefing puzzle-briefing');
      briefing.tabIndex = 0;
      briefing.setAttribute('role', 'region');
      briefing.setAttribute('aria-label', 'Briefing completo da ocorrência');
      const briefingHeader = element('div', 'common-briefing-header');
      briefingHeader.append(element('strong', '', 'BRIEFING DA OCORRÊNCIA'), element('span', '', 'ROLE PARA LER'));
      briefing.append(briefingHeader, narrative);
      narrativeContent = briefing;
    }
    if (evaluationGate) {
      const gateCopy = evaluationGate === 'entrada'
        ? { label: 'PORTAL DE ENTRADA', title: 'Robô N9 em modo de espera',
          message: 'Organize os comandos para despertar o Robô N9. Ele projetará a rota e abrirá a primeira sala.',
          impact: 'Libera a Fase 1', step: 'Tutorial obrigatório' }
        : evaluationGate === 'intervalo'
          ? { label: 'PARADA TÉCNICA', title: 'Nó de rede interrompido',
            message: 'A rota perdeu comunicação depois da Fase 2. Reordene o protocolo para restabelecer o próximo trecho.',
            impact: 'Libera a Fase 3', step: 'Após 10 questões' }
          : { label: 'ÚLTIMO BLOQUEIO', title: 'Núcleo de energia instável',
            message: 'Estabilize o núcleo e sincronize a ponte. A última sala ficará disponível quando a sequência estiver segura.',
            impact: 'Libera a Fase 5', step: 'Após 20 questões' };
      const guide = element('section', 'evaluation-gate-hero');
      guide.setAttribute('aria-label', 'Orientação do Robô N9');
      const portrait = element('div', 'evaluation-gate-portrait');
      this.evaluationGuide = document.createElement('img');
      this.evaluationGuide.className = 'evaluation-gate-character';
      this.evaluationGuide.src = learningLabVisualAssets.moods.thinking.robot;
      this.evaluationGuide.alt = 'Robô N9 orientando o desafio';
      portrait.append(this.evaluationGuide, element('span', 'evaluation-gate-signal', 'SINAL ATIVO'));
      const copy = element('div', 'evaluation-gate-copy');
      copy.append(element('p', 'eyebrow', gateCopy.label), element('h2', '', gateCopy.title));
      this.evaluationGuideMessage = element('p', '', gateCopy.message);
      const status = element('div', 'evaluation-gate-status');
      const statusItem = (label: string, value: string) => {
        const item = element('div', 'evaluation-gate-status-item');
        item.append(element('span', '', label), element('strong', '', value));
        return item;
      };
      this.evaluationGuideState = element('strong', 'evaluation-gate-state', 'PASSAGEM BLOQUEADA');
      const stateItem = element('div', 'evaluation-gate-status-item evaluation-gate-status-item--state');
      stateItem.append(element('span', '', 'Estado'), this.evaluationGuideState);
      status.append(statusItem('Momento', gateCopy.step), statusItem('Objetivo', gateCopy.impact), stateItem);
      copy.append(this.evaluationGuideMessage, status);
      guide.append(portrait, copy);
      this.element.append(guide);
    }
    this.element.append(element('p', 'eyebrow', evaluationGate ? 'TERMINAL DA JORNADA' : 'TERMINAL TECNOLÓGICO'), familyBadge, heading);
    if (evaluationGate) this.element.append(element('p', 'example-warning', 'DESAFIO DE NAVEGAÇÃO · NÃO ALTERA A NOTA DA AVALIAÇÃO'));
    this.element.append(element('p', 'intro intro--small', evaluationGate ? 'Coloque as etapas na ordem correta para liberar a passagem.' : puzzleCopy.intro),
      choices, element('h2', 'puzzle-title', this.puzzle.title), narrativeContent,
      this.xp, this.replayNotice, element('p', 'helper', puzzleCopy.controls));
    if (isCommon) {
      this.commonTerminal = element('section', 'common-terminal');
      this.commonTerminal.setAttribute('aria-label', 'Estado inicial da recuperação');
      const terminalHeader = element('div', 'common-terminal-header');
      const lights = element('span', 'common-terminal-lights', '● ● ●');
      lights.setAttribute('aria-hidden', 'true');
      terminalHeader.append(lights, element('strong', '', 'PAINEL DE RECUPERAÇÃO'),
        element('span', 'common-terminal-environment', 'AMBIENTE ISOLADO'));
      const statusGrid = element('div', 'common-terminal-grid');
      const status = (label: string, value: string, className: string) => {
        const card = element('div', 'common-terminal-item ' + className);
        card.append(element('span', 'common-terminal-label', label), element('strong', 'common-terminal-value', value));
        return card;
      };
      statusGrid.append(
        status('REGISTROS DA FALHA', 'PRESERVADOS', 'is-ready'),
        status('RECURSO AFETADO', 'ISOLADO', 'is-ready'),
        status('AMBIENTE DE TESTE', 'PRONTO', 'is-ready'),
      );
      const publicStatus = status('CONSULTA PÚBLICA', 'DESLIGADA', 'is-offline');
      this.commonPublicStatus = publicStatus.querySelector<HTMLElement>('.common-terminal-value')!;
      statusGrid.append(publicStatus);
      this.commonTerminal.append(terminalHeader, statusGrid,
        element('p', 'common-terminal-note', 'Entrada disponível: cópia aprovada e resumo de integridade confiável.'));
      this.element.append(this.commonTerminal);
    }
    if (isSiReplacement) {
      const systems = element('section', 'si-systems-map');
      systems.setAttribute('aria-label', 'Sistemas e pessoas envolvidos na reserva');
      systems.append(element('strong', 'si-systems-title', 'ECOSSISTEMA DA RESERVA'));
      const grid = element('div', 'si-systems-grid');
      for (const [symbol, name, detail] of [
        ['▣', 'PORTAL', 'solicitação e estado visível'],
        ['◫', 'AGENDA', 'horário e capacidade'],
        ['▤', 'RESERVAS', 'bloqueio do intervalo'],
        ['⌁', 'CONTROLE DE ACESSO', 'autorização e confirmação'],
      ]) {
        const card = element('div', 'si-system-card');
        const icon = element('span', 'si-system-symbol', symbol);
        icon.setAttribute('aria-hidden', 'true');
        card.append(icon, element('strong', '', name), element('span', '', detail));
        grid.append(card);
      }
      systems.append(grid, element('p', 'si-systems-note', 'Analista e coordenação tomam decisões; os identificadores mantêm a rastreabilidade entre os sistemas.'));
      this.element.append(systems);
    }
    if (isCodePuzzle) {
      const isMonitorPuzzle = this.puzzle.id === 'E26-P-SI-03';
      const columns = isMonitorPuzzle ? ['Índice', 'Medição', 'Gera alerta?'] : ['Impacto', 'Urgência', 'Retorno'];
      const rows = isMonitorPuzzle
        ? [['0', '42', 'Não'], ['1', '78', 'Sim'], ['2', '65', 'Não'], ['3', '91', 'Sim'], ['4', '55', 'Não']]
        : [['3', '3', '3'], ['2', '3', '3'], ['2', '2', '2'], ['1', '3', '2'],
          ['1', '1', '1'], ['0', '2', '-1'], ['2', '4', '-1']];
      const tests = element('section', 'code-puzzle-tests');
      tests.setAttribute('aria-label', isMonitorPuzzle ? 'Medições do monitor de alertas' : 'Casos de teste do classificador');
      const testsHeader = element('div', 'code-puzzle-tests-header');
      testsHeader.append(element('strong', '', isMonitorPuzzle ? 'MEDIÇÕES DO LABORATÓRIO' : 'CASOS DE TESTE'), element('span', '', 'C17'));
      const table = element('table', 'code-puzzle-table');
      const caption = element('caption', 'sr-only', isMonitorPuzzle
        ? 'Medições percorridas e alertas esperados' : 'Entradas e retornos esperados da função');
      const head = element('thead', '');
      const headerRow = element('tr', '');
      for (const label of columns) {
        const cell = element('th', '', label); cell.scope = 'col'; headerRow.append(cell);
      }
      head.append(headerRow);
      const body = element('tbody', '');
      for (const values of rows) {
        const row = element('tr', '');
        for (const value of values) row.append(element('td', '', value));
        body.append(row);
      }
      table.append(caption, head, body);
      tests.append(testsHeader, table,
        element('p', 'code-puzzle-tests-note', isMonitorPuzzle
          ? 'Limite: 70. O programa completo deve exibir Alertas: 2.'
          : 'Use todos os cartões uma vez. O código final deve atender aos sete casos.'));
      this.element.append(tests);
    }
    this.list.setAttribute('aria-label', 'Comandos em ordem');
    const commonCommands: Readonly<Record<string, string>> = {
      'recuperar-arquivo': 'RECUPERAR',
      'conferir-integridade': 'VERIFICAR',
      'montar-conteudo': 'MONTAR',
      'testar-consulta': 'TESTAR',
      'publicar-consulta': 'ATIVAR',
      'validar-solicitacao': 'VALIDAR',
      'consultar-disponibilidade': 'CONSULTAR',
      'criar-reserva': 'RESERVAR',
      'autorizar-acesso': 'AUTORIZAR',
      'sincronizar-acesso': 'SINCRONIZAR',
      'abrir-funcao': 'FUNÇÃO',
      'validar-entradas': 'VALIDAÇÃO',
      'calcular-pontuacao': 'CÁLCULO',
      'aplicar-faixas': 'FAIXAS',
      'fechar-funcao': 'PADRÃO',
      'preparar-programa': 'ESTRUTURA',
      'iniciar-repeticao': 'REPETIÇÃO',
      'decidir-alerta': 'DECISÃO',
      'finalizar-programa': 'SAÍDA E PROCEDIMENTO',
      'atualizar-contador': 'PONTEIRO',
    };
    for (const block of this.puzzle.blocks) {
      const row = element('li', 'sequence-block');
      row.dataset.blockId = block.id;
      const label = element('span', 'block-text', block.text);
      if (isCodePuzzle) {
        label.tabIndex = 0;
        label.setAttribute('role', 'region');
        label.setAttribute('aria-label', 'Trecho de código em C');
      }
      const number = element('span', 'block-position');
      const handle = button('↕', true);
      handle.classList.add('block-handle');
      handle.dataset.focusKey = block.id + ':handle';
      handle.setAttribute('aria-label', 'Mover bloco: ' + block.text);
      handle.setAttribute('aria-describedby', 'sequence-instructions');
      if (hasOperationalCards) handle.textContent = '⠿';
      handle.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
        event.preventDefault();
        const index = [...this.list.children].indexOf(row);
        this.move(block.id, index + (event.key === 'ArrowUp' ? -1 : 1));
      }, { signal });
      handle.addEventListener('pointerdown', (event) => {
        if (event.button !== 0 || handle.disabled) return;
        event.preventDefault();
        handle.setPointerCapture(event.pointerId);
        this.drag = { id: block.id, y: event.clientY, currentY: event.clientY,
          to: [...this.list.children].indexOf(row), moved: false, handle };
      }, { signal });
      handle.addEventListener('pointermove', (event) => {
        if (!this.drag || this.drag.id !== block.id) return;
        event.preventDefault();
        this.drag.currentY = event.clientY;
        if (Math.abs(event.clientY - this.drag.y) < 8 && !this.drag.moved) return;
        this.drag.moved = true;
        let closest = Infinity;
        for (const [index, child] of [...this.list.children].entries()) {
          const box = child.getBoundingClientRect();
          const distance = Math.abs(event.clientY - (box.top + box.height / 2));
          if (distance < closest) { closest = distance; this.drag.to = index; }
        }
        for (const [index, child] of [...this.list.children].entries()) child.classList.toggle('drop-target', index === this.drag.to);
      }, { signal });
      const cancel = () => {
        this.drag = null;
        for (const child of this.list.children) child.classList.remove('drop-target');
      };
      handle.addEventListener('pointerup', (event) => {
        const drag = this.drag;
        if (drag?.moved) {
          let closest = Infinity;
          for (const [index, child] of [...this.list.children].entries()) {
            const box = child.getBoundingClientRect();
            const distance = Math.abs(drag.currentY - (box.top + box.height / 2));
            if (distance < closest) { closest = distance; drag.to = index; }
          }
        }
        cancel();
        if (drag?.moved) {
          if (event.pointerType === 'touch') this.lastTouchMove = performance.now();
          this.move(drag.id, drag.to); handle.focus({ preventScroll: true });
        }
      }, { signal });
      handle.addEventListener('pointercancel', cancel, { signal });
      handle.addEventListener('lostpointercapture', cancel, { signal });
      const actions = element('div', 'block-actions');
      for (const [text, offset] of [['Subir', -1], ['Descer', 1]] as const) {
        const move = button(text, true);
        move.dataset.offset = String(offset);
        move.dataset.focusKey = block.id + ':' + offset;
        move.setAttribute('aria-label', text + ': ' + block.text);
        const activate = () => this.move(block.id, [...this.list.children].indexOf(row) + offset);
        move.addEventListener('pointerup', (event) => {
          if (event.pointerType !== 'touch' || move.disabled) return;
          event.preventDefault();
          this.lastTouchMove = performance.now();
          activate();
        }, { signal });
        // Após um arraste, alguns navegadores suprimem o click de toque.
        // O pointerup trata esse caso; ignoramos seu click compatível para mover uma única vez.
        move.addEventListener('click', (event) => {
          if (event.detail === 0 || performance.now() - this.lastTouchMove > 700) activate();
        }, { signal });
        actions.append(move);
      }
      if (hasOperationalCards) {
        const content = element('div', 'block-content');
        content.append(element('span', 'block-command', commonCommands[block.id] ?? 'ETAPA'), label);
        row.dataset.command = commonCommands[block.id] ?? 'ETAPA';
        row.append(number, handle, content, actions);
      } else {
        row.append(number, handle, label, actions);
      }
      this.rows.set(block.id, row);
      this.list.append(row);
    }
    const instructions = element('p', 'sr-only', 'Use as setas para cima e para baixo para mover este bloco uma posição.');
    instructions.id = 'sequence-instructions';
    this.movement.setAttribute('role', 'status');
    this.feedback.setAttribute('role', 'status');
    this.hintsButton.addEventListener('click', () => dispatch({ type: 'hint-puzzle', puzzleId: this.puzzleId }), { signal });
    this.validateButton.addEventListener('click', () => dispatch({ type: 'validate-puzzle', puzzleId: this.puzzleId }), { signal });
    const actions = element('div', 'actions puzzle-actions');
    actions.append(this.validateButton, this.hintsButton);
    const successHeading = element('h2', '', puzzleCopy.success);
    successHeading.tabIndex = -1;
    const returnMap = button(evaluationGate ? 'Voltar à rota liberada' : puzzleCopy.returnMap);
    returnMap.addEventListener('click', () => dispatch({ type: 'exit-puzzle' }), { signal });
    const replay = button(puzzleCopy.replay, true);
    replay.addEventListener('click', () => dispatch({ type: 'replay-puzzle', puzzleId: this.puzzleId }), { signal });
    replay.hidden = !!state.evaluationGate;
    this.success.append(successHeading, this.explanation, this.earned, returnMap, replay);
    this.saved.setAttribute('role', 'status');
    this.retry.addEventListener('click', () => dispatch({ type: 'save-puzzles' }), { signal });
    const exit = button(puzzleCopy.exit, true);
    exit.hidden = !!state.evaluationGate;
    exit.addEventListener('click', () => dispatch({ type: 'exit-puzzle' }), { signal });
    if (isCommon) {
      const console = element('section', 'puzzle-sequence-console');
      console.setAttribute('aria-label', 'Fila de recuperação para ordenar');
      const consoleHeader = element('div', 'puzzle-sequence-console-header');
      consoleHeader.append(element('strong', '', 'ORGANIZE A FILA OPERACIONAL'), element('span', '', this.puzzle.blocks.length + ' ETAPAS'));
      console.append(consoleHeader, this.list);
      this.element.append(instructions, console);
    } else {
      this.element.append(instructions, this.list);
    }
    this.element.append(this.movement, actions, this.feedback,
      this.hintList, this.success, this.saved, this.retry, exit);
    if (state.evaluationGate) {
      const pause = button('Voltar ao menu', true);
      pause.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
      this.element.append(pause);
    }
    this.update(state);
  }

  private move(blockId: string, to: number): void {
    this.dispatch({ type: 'reorder-puzzle', puzzleId: this.puzzleId, blockId, to });
  }

  update(state: SessionState): void {
    const attempt = state.puzzleAttempt!;
    const entry = state.puzzleProgress.entries[this.puzzleId]!;
    const key = entry.order.join('|');
    if (key !== this.previousOrder) {
      const active = document.activeElement instanceof HTMLElement ? document.activeElement.dataset.focusKey : undefined;
      for (const id of entry.order) this.list.append(this.rows.get(id)!);
      if (active) {
        const focus = [...this.element.querySelectorAll<HTMLButtonElement>('[data-focus-key]')].find((node) => node.dataset.focusKey === active);
        focus?.focus({ preventScroll: true });
        if (this.previousOrder) this.movement.textContent = 'Ordem atualizada. ' + entry.order.map((id, index) =>
          (index + 1) + ': ' + this.puzzle.blocks.find((block) => block.id === id)!.text).join(' ');
      }
      this.previousOrder = key;
    }
    for (const [index, id] of entry.order.entries()) {
      const row = this.rows.get(id)!;
      row.querySelector('.block-position')!.textContent = String(index + 1);
      row.querySelector<HTMLButtonElement>('.block-handle')!.disabled = attempt.solved;
      for (const control of row.querySelectorAll<HTMLButtonElement>('[data-offset]')) {
        const offset = Number(control.dataset.offset);
        control.disabled = attempt.solved || index + offset < 0 || index + offset >= entry.order.length;
      }
    }
    const feedback = attempt.feedback === 'incorrect' ? puzzleCopy.incorrect : '';
    if (this.feedback.textContent !== feedback) this.feedback.textContent = feedback;
    this.hintList.replaceChildren(...this.puzzle.hints.slice(0, entry.hintsUsed).map((hint) => element('li', '', hint)));
    this.hintsButton.disabled = attempt.solved || entry.hintsUsed === this.puzzle.hints.length;
    this.hintsButton.textContent = entry.hintsUsed === this.puzzle.hints.length ? puzzleCopy.noMoreHints : puzzleCopy.hint;
    this.validateButton.disabled = attempt.solved;
    this.list.classList.toggle('sequence-complete', attempt.solved);
    if (this.evaluationGuide && this.evaluationGuideState && this.evaluationGuideMessage) {
      this.element.dataset.gateState = attempt.solved ? 'released' : 'blocked';
      this.evaluationGuide.src = attempt.solved
        ? learningLabVisualAssets.moods.result.robot : learningLabVisualAssets.moods.thinking.robot;
      this.evaluationGuide.alt = attempt.solved ? 'Robô N9 comemorando a passagem liberada' : 'Robô N9 orientando o desafio';
      this.evaluationGuideState.textContent = attempt.solved ? 'PASSAGEM LIBERADA' : 'PASSAGEM BLOQUEADA';
      if (attempt.solved) this.evaluationGuideMessage.textContent = 'Sequência confirmada! O Robô N9 liberou a passagem. Continue pela rota para a próxima etapa.';
    }
    if (this.commonTerminal && this.commonPublicStatus) {
      this.commonTerminal.dataset.state = attempt.solved ? 'recovered' : 'recovering';
      this.commonPublicStatus.textContent = attempt.solved ? 'LIBERADA' : 'DESLIGADA';
      this.commonPublicStatus.closest('.common-terminal-item')?.classList.toggle('is-online', attempt.solved);
    }
    this.replayNotice.hidden = !entry.completed || attempt.solved;
    this.success.hidden = !attempt.solved;
    // A explicação só entra no DOM após resolver.
    this.explanation.textContent = attempt.solved ? this.puzzle.explanation : '';
    this.earned.textContent = attempt.solved
      ? (attempt.earnedXp ? '+' + attempt.earnedXp + ' XP. Conclusão registrada; passagem liberada.' : 'Conclusão registrada. Sem XP adicional; passagem liberada.') : '';
    this.xp.textContent = puzzleCopy.totalXp(totalPuzzleXp(state.puzzleProgress, state.puzzles));
    this.saved.textContent = state.puzzleSaveStatus === 'saved' ? puzzleCopy.saved
      : state.puzzleSaveStatus === 'invalid' ? puzzleCopy.invalid
        : ['failed', 'unavailable'].includes(state.puzzleSaveStatus) ? puzzleCopy.failed : '';
    this.retry.hidden = !['failed', 'invalid', 'unavailable'].includes(state.puzzleSaveStatus);
    if (attempt.solved && !this.wasSolved) this.success.querySelector<HTMLElement>('h2')!.focus();
    if (!attempt.solved && this.wasSolved) this.element.querySelector<HTMLElement>('h1')!.focus();
    this.wasSolved = attempt.solved;
  }
}
