import { gameConfig } from '../../config/game';
import type { Command, SessionState } from '../../app/GameSession';
import { activePlayer } from '../../domain/models/PlayerProfile';
import { button, element } from '../components/elements';
import { configuredStudentRegistry } from '../../infrastructure/online/AppsScriptStudentRegistryRepository';
import type { StudentRegistryRepository } from '../../ports/StudentRegistryRepository';

export function playerProfileView(state: SessionState, dispatch: (command: Command) => void,
  signal: AbortSignal, registry: StudentRegistryRepository | null = configuredStudentRegistry()): HTMLElement {
  const view = element('section', 'view profile-view');
  const back = button(gameConfig.copy.backHome, true);
  back.classList.add('back-button');
  back.addEventListener('click', () => dispatch({ type: 'home' }), { signal });
  const hero = element('header', 'profile-hero');
  const title = element('h1', 'section-title', registry ? 'Acesso à Jornada N9' : gameConfig.copy.profileTitle);
  title.tabIndex = -1;
  hero.append(element('p', 'eyebrow', registry ? 'IDENTIFICAÇÃO ACADÊMICA' : gameConfig.copy.profileEyebrow), title,
    element('p', 'profile-hero-intro', registry
      ? 'Confirme seu cadastro uma única vez neste navegador para acessar os modos de jogo, salvar resultados e participar dos rankings.'
      : gameConfig.copy.profileIntro));
  view.append(back, hero);

  const accessGrid = element('section', 'profile-access-grid');
  const accessCard = element('div', 'profile-access-card');
  accessCard.append(element('span', 'profile-step', 'ETAPA ÚNICA'),
    element('h2', 'profile-card-title', registry ? 'Validar cadastro' : 'Criar jogador local'));
  const form = element('form', 'profile-form');
  if (registry) {
    const raLabel = element('label', 'field-label', 'RA');
    raLabel.htmlFor = 'academic-id';
    const ra = element('input', 'text-input') as HTMLInputElement;
    ra.id = 'academic-id'; ra.name = 'academicId'; ra.required = true; ra.minLength = 4; ra.maxLength = 24;
    ra.autocomplete = 'off'; ra.setAttribute('autocapitalize', 'characters');
    const emailLabel = element('label', 'field-label', 'E-mail cadastrado');
    emailLabel.htmlFor = 'academic-email';
    const email = element('input', 'text-input') as HTMLInputElement;
    email.id = 'academic-email'; email.name = 'email'; email.type = 'email'; email.required = true;
    email.autocomplete = 'email';
    const help = element('p', 'profile-form-help', 'Use exatamente o RA e o e-mail que constam no cadastro acadêmico. Curso e modalidade serão preenchidos automaticamente.');
    const create = button('Validar cadastro e entrar'); create.type = 'submit';
    const status = element('p', 'helper'); status.setAttribute('role', 'status');
    form.append(raLabel, ra, emailLabel, email, help, create, status);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      void (async () => {
        try {
          create.disabled = true; status.textContent = 'Validando cadastro…';
          const identity = await registry.verify(ra.value, email.value);
          dispatch({ type: 'create-verified-player', identity });
          email.value = ''; status.textContent = 'Cadastro confirmado.';
        } catch (error) {
          status.textContent = error instanceof Error ? error.message : 'Não foi possível validar o cadastro.';
        } finally { create.disabled = false; }
      })();
    }, { signal });
    accessCard.append(form);
  } else {
  const label = element('label', 'field-label', gameConfig.copy.nicknameLabel);
  label.htmlFor = 'nickname';
  const input = element('input', 'text-input');
  input.id = 'nickname';
  input.name = 'nickname';
  input.type = 'text';
  input.minLength = 3;
  input.maxLength = 20;
  input.autocomplete = 'off';
  input.required = true;
  input.setAttribute('aria-describedby', 'nickname-help profile-error');
  const help = element('p', 'helper', gameConfig.copy.nicknameHelp);
  help.id = 'nickname-help';
  const create = button(gameConfig.copy.createPlayer);
  create.type = 'submit';
  form.append(label, input, help, create);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    dispatch({ type: 'create-player', nickname: input.value });
  }, { signal });
  accessCard.append(form);
  }

  const assurance = element('aside', 'profile-assurance');
  assurance.setAttribute('aria-label', 'Como funciona o acesso');
  assurance.append(element('span', 'profile-assurance-tag', 'ACESSO SEGURO'),
    element('h2', 'profile-assurance-title', 'Seu percurso certo, sem precisar escolher o curso.'),
    element('p', 'profile-assurance-intro', registry
      ? 'A validação associa o jogador ao curso e à modalidade cadastrados.'
      : 'O perfil local identifica quem está jogando neste navegador.'));
  const assuranceList = element('ul', 'profile-assurance-list');
  for (const [number, label, detail] of registry ? [
    ['01', 'Identidade confirmada', 'RA e e-mail evitam acesso acidental ao cadastro de outro aluno.'],
    ['02', 'Curso automático', 'O jogo libera somente as atividades correspondentes ao seu curso.'],
    ['03', 'Ranking protegido', 'A classificação mostra um código pseudônimo, nunca seu RA ou e-mail.'],
  ] : [
    ['01', 'Perfil neste navegador', 'O apelido diferencia jogadores que usam este dispositivo.'],
    ['02', 'Progresso local', 'O último relatório permanece salvo somente neste navegador.'],
    ['03', 'Sem publicação', 'O perfil local não envia seus dados para o ranking online.'],
  ]) {
    const item = element('li', 'profile-assurance-item');
    item.append(element('span', 'profile-assurance-number', number),
      element('strong', '', label), element('span', '', detail));
    assuranceList.append(item);
  }
  assurance.append(assuranceList, element('p', 'profile-privacy', registry
    ? 'O e-mail é utilizado somente durante a validação e não fica salvo neste navegador.'
    : gameConfig.copy.localDataNotice));
  accessGrid.append(accessCard, assurance);
  view.append(accessGrid);

  const error = element('p', 'profile-error', state.profileError ?? '');
  error.id = 'profile-error';
  error.setAttribute('role', 'alert');
  if (!state.profileError) error.hidden = true;
  view.append(error);

  const availablePlayers = registry ? state.profiles.players.filter((player) => !!player.academicId) : state.profiles.players;
  if (availablePlayers.length > 0) {
    const saved = element('section', 'saved-players-panel');
    const heading = element('h2', 'subsection-title', registry ? 'Acessos já validados neste navegador' : gameConfig.copy.existingPlayers);
    const savedIntro = element('p', 'saved-players-intro', 'Selecione um perfil para continuar sem repetir a validação.');
    const group = element('fieldset', 'player-options');
    group.append(element('legend', 'sr-only', gameConfig.copy.existingPlayers));
    for (const player of availablePlayers) {
      const option = element('label', 'player-card');
      const radio = element('input', 'player-radio');
      radio.type = 'radio';
      radio.name = 'player';
      radio.value = player.id;
      radio.checked = state.profiles.activePlayerId === player.id;
      radio.addEventListener('change', () => dispatch({ type: 'select-player', playerId: player.id }), { signal });
      const details = player.course ? ' · ' + player.course + ' · ' + player.modality : '';
      option.append(radio, element('span', '', player.nickname + details));
      group.append(option);
    }
    saved.append(heading, savedIntro, group);
    view.append(saved);
  }

  const selected = activePlayer(state.profiles);
  const current = registry && !selected?.academicId ? null : selected;
  const continuePanel = element('section', 'profile-continue-panel');
  const currentCopy = element('div', 'profile-current-copy');
  currentCopy.append(element('span', 'profile-current-label', current ? 'ACESSO SELECIONADO' : 'AGUARDANDO IDENTIFICAÇÃO'),
    element('strong', 'profile-current-name', current ? current.nickname : 'Nenhum jogador selecionado'),
    element('span', 'profile-current-detail', current?.course ? current.course + ' · ' + current.modality : 'Valide ou selecione um cadastro acima.'));
  const proceed = button(gameConfig.copy.continueWithPlayer);
  proceed.disabled = current === null;
  proceed.addEventListener('click', () => dispatch({ type: 'continue-profile' }), { signal });
  continuePanel.append(currentCopy, proceed);
  view.append(continuePanel);
  if (state.profileSaveStatus === 'failed' || state.profileSaveStatus === 'unavailable') {
    view.append(element('p', 'helper', gameConfig.copy.profileSaveFailed));
  }
  return view;
}
