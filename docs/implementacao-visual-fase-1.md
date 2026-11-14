# Implementação visual — Fase 1

## Resumo

A Fase 1 substitui a aparência geométrica inicial por uma linguagem coerente de campus-laboratório superior. Mecânicas, coordenadas, colisões, desafios, ranking, perfis, pontuação e chaves de LocalStorage foram preservados.

## Arquitetura adotada

- `src/config/visual.ts` centraliza paleta do Canvas, tempos de animação, direções e famílias de puzzle.
- `src/game/visual/CharacterRenderer.ts` desenha estudante e Lia em partes modulares.
- `CityScene` apresenta um campus superior decorativo, removendo a perspectiva isométrica.
- `MapScene` observa a sessão e desenha piso, zonas, paredes, objetos, estados e personagens sem assumir regras de domínio.
- DOM e CSS continuam responsáveis por navegação, semântica, formulários, feedbacks e alternativas acessíveis.

Não foi criada uma segunda arquitetura de mapa ou entrada. `World.ts`, `ExplorationControls`, coordenadas, hitboxes e persistência não foram alterados.

## Personagem e Lia

O estudante possui orientação para cima, baixo, esquerda e direita. A caminhada alterna pernas e calçados em dois quadros; em diagonais, a orientação acompanha o eixo dominante. Sombra e mochila reforçam posição e direção. O desenho separa pele, cabelo, roupa e acessórios para futura personalização.

Lia usa o mesmo sistema corporal, com identidade violeta, óculos cianos e marcador de missão. Os estados disponível, ativo e concluído mudam o marcador; proximidade acrescenta contorno. Diálogo e missão originais permanecem no DOM.

Com movimento reduzido, o estudante mantém direção, mas não alterna quadros de caminhada.

## Mapa

- piso técnico com grade e zonas de laboratório, terminal e convivência;
- paredes com borda superior, nas mesmas coordenadas e dimensões;
- computador reconhecível por monitor, tela e base;
- terminal reconhecível por cápsula, núcleo e ligação;
- porta bloqueada sólida e porta liberada vazada;
- estados normal, próximo, bloqueado e concluído combinam cor, contorno, símbolo e texto;
- rótulos permanecem visíveis no Canvas e equivalentes no painel DOM.

Nenhum mapa, caminho, colisão, posição ou condição de desbloqueio foi criado ou modificado.

## Telas

- marca e cabeçalho receberam moldura tecnológica provisória;
- botões ganharam estados elevados, pressionados, desabilitados e foco reforçado;
- perfil, curso, missão, alternativas, resultado e ranking usam cartões e superfícies;
- cursos possuem símbolo decorativo além do código e nome existentes;
- questões possuem barra de progresso com papel `progressbar`;
- acerto e erro combinam texto, borda e superfície;
- resultados usam três cartões numéricos em desktop e pilha no celular;
- ranking mantém tabela semântica em região rolável;
- quebra-cabeças recebem símbolo, nome e cor secundária por família;
- controles de toque preservam área mínima e feedback pressionado.

Nenhum texto pedagógico, alternativa, gabarito, dica, explicação ou regra foi alterado.

## Responsividade e acessibilidade

As referências de validação são 1366 × 900 e 360 × 800. Também foi previsto o equivalente a zoom de 200% com viewport CSS reduzido.

- foco visível com contraste e separação;
- controles nativos e semântica existentes preservados;
- símbolos decorativos ocultos de tecnologia assistiva;
- nomes acompanham símbolos das famílias de puzzles;
- `forced-colors` mantém foco, bordas e progresso;
- `prefers-reduced-motion` desativa transições e caminhada alternada;
- Canvas continua acompanhado por posição e orientação textuais;
- áreas de toque possuem no mínimo 44 px;
- layout móvel usa uma coluna e padding reduzido.

## Recursos produzidos

Todos os recursos da Fase 1 são vetoriais/procedurais ou CSS. Não há download, fonte remota, serviço pago ou imagem bitmap nova.

- estudante procedural modular;
- Lia procedural modular;
- campus superior decorativo;
- piso, paredes e zonas do mapa;
- computador, terminal e porta com estados;
- símbolos de curso e famílias de puzzle;
- barras, cartões e feedbacks de interface.

## Imagens candidatas a uma fase posterior

Depois de aprovação institucional e de um guia de arte final, IA de imagens poderá apoiar apenas estudos de conceito para ambientes, personagens, mobiliário e atmosferas. Sprites, atlas e animações finais exigirão limpeza, consistência entre quadros, revisão de vieses, direitos e acessibilidade. Nenhuma imagem de IA foi gerada nesta fase.

## Inspeção visual

As telas a verificar em navegador isolado são:

- início;
- perfil;
- seleção de curso e missão;
- Base N9 e controles;
- questão antes e depois da resposta;
- puzzle e conclusão;
- relatório;
- ranking;
- desktop 1366 × 900;
- celular 360 × 800;
- movimento reduzido e equivalente a zoom de 200%.

Os resultados, correções e limitações finais desta inspeção são registrados na seção seguinte após a execução automatizada.

## Resultado das verificações

### Telas inspecionadas

Foram inspecionadas capturas produzidas pela rodada final do Chromium isolado em 1366 × 900 e 360 × 800: início, seleção de curso e missão, Base N9, questão, feedback, puzzle, conclusão do puzzle, relatório e ranking da missão. Perfil e ranking geral foram percorridos nos testes de navegador com semântica nativa e teclado.

A inspeção confirmou:

- campus decorativo e mapa jogável usam visão superior;
- estudante, Lia, computador, terminal e porta permanecem legíveis nas duas larguras;
- cartões não criam rolagem horizontal na página;
- controles virtuais mantêm área adequada para toque;
- questões, alternativas, resultados e ranking reorganizam-se em uma coluna;
- progresso, foco, seleção, bloqueio, acerto, erro e conclusão possuem mais de um indicador;
- nomes acessíveis e textos apresentados ao jogador não ganharam referência ao ENADE.

### Problemas encontrados e correções realizadas

1. Um símbolo inserido por pseudo-elemento passou a compor o nome acessível do título “Base N9”. O símbolo textual foi removido do pseudo-elemento e substituído por borda decorativa; nomes acessíveis exatos foram restaurados.
2. O destino do link “Pular para o conteúdo” não aceitava foco direto. O elemento `main` recebeu `tabindex="-1"`, preservando a sequência normal e permitindo foco ao ativar o link.
3. Rótulos do Canvas eram destruídos e recriados durante cada quadro de movimento. A atualização foi limitada a mudanças de dimensão ou estado da porta, recuperando fluidez no perfil móvel.
4. A rolagem suave global fazia o arraste começar antes de `scrollIntoView` terminar. A rolagem padrão voltou a ser imediata; movimento reduzido e navegação por teclado continuam preservados.
5. Os testes iniciais da Fase 1 usavam uma expectativa excessivamente rígida para a serialização CSS da duração reduzida. A asserção passou a aceitar a forma científica devolvida pelo Chromium sem afrouxar o valor verificado.

### Resultados automatizados

- lint: aprovado;
- TypeScript: aprovado;
- Vitest: 21 arquivos, 247 testes aprovados;
- validação de conteúdo e contratos durante a compilação: seis arquivos, 128 testes aprovados;
- compilação Vite: aprovada;
- Playwright final: 62 testes aprovados em desktop e celular;
- testes adicionais de contraste: quatro pares principais com WCAG AA ou superior;
- movimento reduzido: duração efetiva mínima confirmada;
- equivalente a zoom de 200%: ação principal visível e ausência de rolagem horizontal global;
- servidor auxiliar: encerramento normal após a suíte.

### Limitações restantes

- Os personagens são procedurais e usam dois quadros de caminhada; atlas, maior variedade de poses e personalização ficam para fase posterior.
- A orientação não é persistida no LocalStorage, pois fazê-lo alteraria o contrato de progresso; ao reabrir o mapa, o personagem inicia visualmente voltado para baixo.
- Textos pedagógicos extensos continuam exigindo rolagem vertical no celular, pois não foram resumidos nem alterados.
- Os rótulos internos do Canvas são pequenos em 360 px; o painel DOM fornece o equivalente legível e acessível.
- O ranking amplo continua usando região de rolagem horizontal quando todas as colunas são necessárias.
- A árvore de acessibilidade, foco e controles nativos foram validados no Chromium; uma auditoria humana posterior com NVDA, VoiceOver e pessoas usuárias continua recomendada.
- Não há áudio, retratos, mapas adicionais, salto, elevação ou troca de mapa nesta fase.
- Estudos elaborados com IA permanecem apenas como possibilidade futura, sujeitos a aprovação, revisão de autoria e consistência.

