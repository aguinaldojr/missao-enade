# Plano visual e de jogabilidade — N9 Jornada Digital

## 1. Escopo e método do diagnóstico

Este documento registra o estado visual e de jogabilidade observado em 14 de novembro de 2026. A inspeção combinou leitura do código, análise dos estilos e execução do jogo pelo servidor local do projeto em uma sessão isolada do Chromium, sem acesso a navegador, contas ou dados pessoais.

Foram exercitados os perfis de 1366 × 900 pixels (desktop) e 360 × 800 pixels (celular com toque). A rodada cobriu tela inicial, perfil, seleção, mapa, interação, desafios, quebra-cabeças e ranking. Os 34 casos selecionados do Playwright passaram, 17 em cada perfil, e o servidor auxiliar encerrou normalmente.

Este diagnóstico não altera código, estilos, imagens, desafios, ranking ou progresso. As recomendações abaixo são planejamento para uma etapa posterior.

## 2. Tecnologia de renderização atual

O jogo usa uma arquitetura visual híbrida:

- **DOM + CSS:** toda a navegação funcional, formulários, seleção de curso e missão, perfil, questões, feedbacks, quebra-cabeças, relatório e ranking;
- **Canvas 2D com Phaser 3:** cidade isométrica decorativa e mapa superior da Base N9;
- **SVG:** apenas o favicon atual em `public/favicon.svg`;
- **desenho procedural:** cidade, mapa, objetos e personagem são compostos por formas, linhas, textos e cores gerados em código; não há sprites, atlas, cenários bitmap ou animações de personagem;
- **responsividade:** CSS reorganiza as telas em 600 e 960 pixels e trata larguras até 380 pixels; o Canvas do mapa preserva proporção e recebe altura alternativa em telas baixas;
- **acessibilidade técnica existente:** foco visível, link para pular conteúdo, elementos nativos de formulário, regiões anunciáveis, suporte a `forced-colors`, respeito a `prefers-reduced-motion` e equivalente textual para informações do mapa.

O Phaser é forçado a usar Canvas, sem dependência de WebGL. Teclado, mouse e toque do Phaser permanecem desativados; a camada DOM controla essas entradas e repassa o movimento ao domínio.

## 3. Recursos visuais existentes e funcionais

### 3.1 Tela inicial

A tela inicial apresenta marca tipográfica N9, título, chamada principal, botões para iniciar, escolher jogador e abrir o ranking, aviso de validação pedagógica e uma cidade digital isométrica. Em desktop, texto e painel visual ocupam duas colunas. No celular, os blocos são empilhados sem corte horizontal.

Pontos positivos:

- hierarquia tipográfica clara;
- contraste geral consistente entre fundo claro, verde e azul-petróleo;
- chamadas e botões com dimensões adequadas para mouse e toque;
- aviso editorial discreto, mas visível;
- painel decorativo não interfere na navegação por leitor de tela.

### 3.2 Perfil do jogador

O perfil usa formulário e controles nativos do DOM. A criação, validação e troca de apelido funcionam com teclado, mouse e toque. O jogador atual é indicado nas telas seguintes, e o aviso de armazenamento somente no navegador está presente. A apresentação é funcional, porém ainda tem aparência administrativa e poucos sinais de pertencimento a um jogo.

### 3.3 Seleção de curso e missão

Os cinco cursos e os quatro tamanhos de missão aparecem como cartões com botões de opção, rótulos completos e estados selecionados. A disposição é de duas colunas em telas largas e uma coluna no celular. A navegação por teclado, a troca de jogador e o início da jornada funcionam.

A tela comunica bem as cotas, mas contém bastante texto operacional. No celular, o painel isométrico aparece depois de todo o formulário, prolongando a página sem acrescentar informação funcional.

### 3.4 Mapa e personagem

A Base N9 funciona em visão superior. O Canvas contém grade, paredes, limites, computador, Lia, terminal e porta. Os objetos têm rótulos textuais; o objeto próximo recebe contorno; o painel lateral descreve missão, estado da porta e ação disponível. No celular, mapa, direcional e painel são empilhados.

O personagem atual é um círculo claro com contorno, dois olhos quadrados e sombra elíptica. Ele é legível contra o fundo, mas não comunica identidade, direção, curso, estado de movimento ou personalização.

### 3.5 Desafios de questões

O enunciado, cinco alternativas, pontuação, progresso, confirmação, explicação e feedback são DOM acessível. A alternativa respondida e o acerto são acompanhados por texto, não apenas por cor. Em desktop, o painel visual ocupa a coluna direita; em larguras abaixo de 960 pixels ele é removido para priorizar o conteúdo.

O fluxo é sólido, mas enunciados e feedbacks extensos geram páginas muito altas, especialmente a 360 pixels. A representação de tabelas editoriais em texto corrido com barras reduz a leitura. Não há transição visual entre desafios nem indicador gráfico de avanço além do texto.

### 3.6 Quebra-cabeças

Os quebra-cabeças de sequência usam cartões reordenáveis no DOM. Há arraste por mouse e toque, alça manipulável, controle por teclado, botões Subir/Descer, validação, dicas progressivas, explicação, replay e retorno ao mapa. A alternativa acessível não depende do arraste.

O modelo é funcional e reutilizável, porém todos os conteúdos compartilham praticamente a mesma aparência de lista. Ainda não há linguagem visual própria para puzzle comum ou para CC, SI, TADS, TGTI e TRC.

### 3.7 Relatório e ranking

O relatório apresenta acertos, pontuação e desafios concluídos, além do ranking da missão. O ranking geral usa filtros nativos por curso e tamanho, tabela, destaque textual do jogador atual, estado vazio e exclusão confirmada. A tabela permite rolagem horizontal em telas estreitas.

No celular, a tabela reduz as colunas visíveis e continua utilizável, mas a comparação perde contexto e pode exigir exploração horizontal. A apresentação é clara, porém visualmente próxima de um relatório administrativo.

## 4. O que é provisório ou inconsistente

- O personagem e os objetos do mapa são formas geométricas provisórias, sem sprites ou animação.
- A cidade decorativa usa perspectiva isométrica, enquanto a Base N9 usa visão superior ortogonal. A convivência não é explicada e parece pertencer a dois sistemas visuais.
- O termo narrativo **Nexo** aparece em chamadas como “Central Nexo” e na arte decorativa, enquanto a identidade principal é N9 Jornada Digital. Pode ser um lugar ficcional válido, mas precisa ser deliberadamente definido para não parecer resíduo de identidade anterior.
- A marca N9 é tipográfica e provisória; não há logotipo oficial nem se deve inferir vínculo institucional aprovado.
- A paleta é coerente, mas ainda funciona como tema de interface, não como sistema visual completo de jogo.
- O mapa não possui textura, profundidade, iluminação, ambientação universitária, sinais de escala ou diferenciação material entre piso, parede e objetos.
- Computador, terminal, NPC e porta são diferenciados principalmente por cor, geometria simples e texto. Os rótulos evitam dependência total de cor, mas não formam silhuetas reconhecíveis.
- A personagem Lia não tem retrato, expressão, pose ou animação; a missão é apresentada como texto de estado.
- Não há animações contínuas. Isso favorece desempenho e redução de movimento, mas elimina feedback de caminhada, interação, abertura de porta e conclusão.
- Questões, puzzles, relatório e ranking são consistentes entre si, porém se aproximam de formulários e painéis acadêmicos, com pouca continuidade espacial em relação ao mapa.
- Telas longas em celular aumentam fadiga e afastam ações importantes do contexto que as originou.
- O único recurso visual externo ao código é o favicon; não existe pipeline de atlas, tileset ou pré-carregamento de arte final.

## 5. Interações atuais do personagem

| Interação | Estado | Evidência e limite atual |
| --- | --- | --- |
| Andar | Funcional | Movimento para cima, baixo, esquerda e direita com setas ou WASD; combinações diagonais também são aceitas. O domínio aplica velocidade e colisão. |
| Pular | Não implementado | Não há eixo vertical, física de salto, plataformas ou comando correspondente. Não é necessário para o mapa superior atual. |
| Subir e descer | Parcial | O personagem se move ao norte e ao sul no plano do mapa. Não há escadas, elevação, andares ou mudança de nível. |
| Entrar em áreas | Parcial | A porta desbloqueada deixa de bloquear passagem, mas ainda não há transição para outra sala, mapa ou zona. |
| Interagir com terminais | Funcional | Computador abre a missão de questões; terminal tecnológico abre o seletor de puzzles. Há indicação de proximidade e interação por E, Espaço ou botão. |
| Ativar puzzles | Funcional | O terminal disponibiliza o puzzle comum e o específico do curso; conclusão, XP único, replay e retorno ao mapa estão preservados. |
| Conversar com NPC | Funcional básico | Lia apresenta uma missão curta por texto, sem árvore de diálogo, retrato ou animação. |
| Abrir porta | Funcional lógico | A porta muda de bloqueada para atravessável após a condição prevista; falta animação e feedback espacial mais expressivo. |

O controle virtual possui quatro direções e responde ao toque enquanto o botão está pressionado. Não existe controle analógico, ajuste de sensibilidade ou opção de reposicionar o direcional.

## 6. Interações que ainda precisam ser implementadas

Para a próxima camada visual, sem mudar as regras atuais, são necessárias:

1. estados de personagem parado, caminhando e interagindo, com orientação em quatro direções;
2. feedback de colisão e de objeto fora do alcance sem depender apenas do painel textual;
3. animação de ativação do computador e terminal e de abertura da porta;
4. transição coerente entre mapa, questões e puzzles, mantendo foco e contexto;
5. entrada em novas áreas e troca de mapas quando existirem mapas adicionais;
6. câmera, enquadramento e escala adaptáveis sem reduzir a legibilidade no celular;
7. diálogo visual de NPC com equivalente textual completo;
8. indicação espacial persistente do objetivo, com ícone, texto e forma — nunca só cor;
9. personalização do personagem com pré-visualização acessível;
10. controles remapeáveis ou, no mínimo, documentação e alternativas para pessoas que não usam WASD.

Salto e plataformas não devem ser adicionados por padrão. Eles só fazem sentido se uma decisão futura mudar o jogo de exploração superior para um sistema com elevação ou plataforma; acrescentá-los agora aumentaria escopo e complexidade sem servir à Base N9.

## 7. Recursos visuais necessários

### 7.1 Personagens e animações

- personagem principal modular, com silhueta legível em dimensões pequenas;
- ciclos de parado e caminhada em quatro direções;
- animações curtas de interação, confirmação e celebração;
- NPC Lia com sprite, estado de fala e retrato opcional;
- atlas consistente, margens seguras e escala inteira para evitar borramento;
- opção estática equivalente quando a redução de movimento estiver ativa.

### 7.2 Cenários e objetos

- tileset da Base N9 com pisos, paredes, divisórias e sinalização de laboratório universitário tecnológico;
- portas nos estados fechada, bloqueada, liberada e aberta;
- computador e terminal nos estados ocioso, próximo, ativo, concluído e indisponível;
- mobiliário, iluminação, cabos, painéis, plantas e elementos de convivência para dar escala humana;
- marcadores de entrada, saída e transição de área;
- conjunto futuro de salas e mapas sem acoplar a arte às regras de missão.

### 7.3 Interface e feedback

- ícones próprios para interação, curso, missão, XP, resultado, perfil e ranking;
- prompt de interação próximo ao objeto e espelhado em texto no DOM;
- barra ou trilha gráfica de progresso dos desafios;
- estados de acerto, erro, bloqueio e conclusão com ícone, texto e padrão, não só cor;
- transições leves entre telas, respeitando redução de movimento;
- feedback de foco, toque pressionado, carregamento e salvamento local;
- componentes compactos para textos longos no celular;
- ilustrações ou diagramas acessíveis para conteúdos que realmente precisem de apoio visual.

## 8. Direção visual 2D recomendada

A direção recomendada é um **campus-laboratório tecnológico em visão superior 2D**, estilizado, contemporâneo e acolhedor. A aparência deve ser divertida sem infantilizar estudantes universitários.

Princípios:

- preservar o contraste azul-petróleo, verde e creme como ponto de partida, sem declarar que sejam cores institucionais oficiais;
- usar formas geométricas limpas, contornos moderados e detalhes tecnológicos funcionais;
- representar tecnologia como ambiente humano de criação, colaboração e resolução de problemas, e não como uma sucessão de telas abstratas;
- dar identidade própria à Base N9 por meio de arquitetura, sinalização ficcional e objetos recorrentes;
- adotar uma única lógica de perspectiva. Recomenda-se visão superior levemente inclinada para o mapa; a cidade isométrica da abertura deve ser adaptada a essa família ou assumida explicitamente como mapa esquemático;
- manter o nome N9 como identidade provisória, sem logotipo, slogan, brasão, imagens de campus, paleta oficial não confirmada ou afirmação de produto oficial;
- não exibir referências a preparação para prova ou ao ENADE; a origem pedagógica permanece somente em metadados e documentação interna;
- priorizar leitura em 360 pixels e escalabilidade até desktop, sem esconder informação funcional no Canvas.

## 9. Personagem inclusivo e personalizável

O personagem deve ser definido por peças combináveis, não por modelos rigidamente “masculino” e “feminino”. Uma primeira versão pode oferecer:

- diferentes tons de pele;
- formatos e texturas de cabelo, incluindo opção sem cabelo;
- roupas de base neutras e combinações de cores;
- óculos, aparelho auditivo, lenço e outros acessórios sem transformar características em recompensa;
- opção de cadeira de rodas ou outro dispositivo de mobilidade apenas quando mapa, colisões e animações suportarem essa representação com qualidade;
- nome/apelido já existente no perfil, sem solicitar dados pessoais adicionais.

Todas as opções precisam de nomes textuais, foco previsível e pré-visualização que não dependa de cor. A personalização deve ser opcional, reversível e separada de desempenho, curso ou recompensa.

## 10. Proposta visual para os puzzles

O mecanismo de sequência pode permanecer comum, mas cada família deve ganhar contexto visual próprio sem perder a lista textual e os botões acessíveis:

| Família | Proposta visual | Alternativa acessível preservada |
| --- | --- | --- |
| Comum | painel de recuperação da Base N9, com módulos conectados e estado do sistema | lista numerada, alças nomeadas e botões Subir/Descer |
| CC | fluxo de algoritmo, estrutura de dados ou etapas de processamento em nós conectáveis | descrição da dependência entre blocos e ordem textual |
| SI | quadro integrado de pessoas, processos, dados e tecnologia em raias | títulos de raia, posição anunciada e comandos de movimentação |
| TADS | esteira de requisitos, implementação, testes, qualidade e entrega | etapas textuais, erros descritos e validação sem arraste obrigatório |
| TGTI | painel de serviço, riscos, indicadores e alinhamento com decisões encadeadas | tabela/lista com prioridade e justificativa em texto |
| TRC | topologia de rede, camadas, configuração e diagnóstico de enlaces | nomes de nós, portas e estados; forma e rótulo além de cor |

As conexões visuais devem ser redundantes: linha mais rótulo, forma ou numeração. Som, pulsação e movimento podem reforçar o retorno, mas nunca ser o único canal. A validação atual de solução única, dicas progressivas e XP não deve ser alterada pela nova aparência.

## 11. IA de imagens, CSS, SVG e código

### Uso recomendado de IA de imagens

- estudos de conceito e painéis de referência para Base N9;
- exploração inicial de personagens, roupas, mobiliário e atmosferas;
- variações de props e texturas provisórias para comparação interna;
- ilustrações de fundo não funcionais, depois de revisão humana de autoria, coerência, vieses e licença.

Arte gerada por IA não deve ser incorporada diretamente como atlas final. Sprites e animações precisam de limpeza, consistência entre quadros, controle de silhueta, transparência, escala e revisão de direitos.

### Produção recomendada com CSS, SVG ou código

- tokens, layout responsivo, cartões, estados de foco e mensagens;
- ícones de interface e indicadores de curso em SVG próprio;
- diagramas que precisam de rótulo, semântica e adaptação a alto contraste;
- direcional, prompt de interação, barras de progresso e feedbacks de estado;
- definição dos mapas, colisões, áreas interativas e animações de estado;
- partículas e transições simples, com desligamento por preferência de movimento;
- gráficos de ranking e progresso, caso sejam adicionados, construídos a partir de dados e com equivalente textual.

## 12. Ordem de implementação

### Essencial

1. aprovar guia visual provisório: perspectiva, paleta, tipografia, escala, grid e regras de acessibilidade;
2. produzir personagem-base, Lia e ciclos de parado/caminhada/interação em quatro direções;
3. produzir tileset e objetos essenciais da Base N9;
4. trocar formas provisórias por sprites sem alterar colisões, salvamento ou regras;
5. criar estados visuais de porta, computador, terminal e proximidade;
6. unificar o estilo da cidade decorativa e do mapa;
7. tornar HUD, prompts e feedbacks compactos e responsivos;
8. adicionar testes de regressão visual, teclado, toque, contraste e redução de movimento.

### Importante

1. personalização inclusiva do personagem;
2. linguagem visual específica para os seis grupos de puzzles;
3. retrato e apresentação de diálogo para NPCs;
4. transições de mapa, câmera e indicação de objetivo;
5. melhoria da leitura de enunciados, tabelas e feedbacks longos no celular;
6. ícones e ilustrações funcionais de questões, quando pedagogicamente necessários;
7. áudio opcional, legendas textuais, controle de volume e alternativa visual.

### Acabamento futuro

1. novos mapas e variações ambientais;
2. cosméticos e animações adicionais sem vantagem competitiva;
3. iluminação, partículas, parallax e ambientação sonora;
4. microanimações de ranking, resultado e conquistas;
5. efeitos táteis opcionais em dispositivos compatíveis;
6. temas sazonais somente depois de consolidada a identidade principal.

## 13. Riscos e medidas preventivas

### Acessibilidade

- **Risco:** tornar o Canvas essencial sem equivalente semântico. **Medida:** manter ações e informações críticas no DOM e anunciar estado, posição relativa e objetivo.
- **Risco:** depender de cor para objetos, curso ou resultado. **Medida:** combinar cor, forma, ícone, padrão e texto.
- **Risco:** foco de formulário competir com comandos do mapa. **Medida:** definir claramente quando o mapa captura teclas e manter saída por teclado.
- **Risco:** animações causarem desconforto. **Medida:** respeitar `prefers-reduced-motion` e oferecer estados estáticos.
- **Risco:** personalização estereotipada. **Medida:** opções combináveis, linguagem neutra e revisão com pessoas diversas.
- **Risco:** tabelas e puzzles difíceis para leitor de tela. **Medida:** preservar listas, botões e tabelas semânticas, com instruções curtas.

### Desempenho

- **Risco:** atlas grandes e excesso de transparências em celulares. **Medida:** limitar resolução, usar atlas compactos, pré-carregar apenas o mapa ativo e medir memória.
- **Risco:** muitos elementos DOM junto ao loop do Phaser. **Medida:** evitar atualizações de layout por quadro e manter o mapa isolado.
- **Risco:** filtros, partículas e iluminação reduzirem fluidez no Canvas. **Medida:** níveis de qualidade e efeitos opcionais.

### Consistência

- **Risco:** misturar ilustração isométrica, mapa superior, ícones e arte gerada em estilos distintos. **Medida:** guia visual, biblioteca de componentes e revisão de arte antes da integração.
- **Risco:** alterar a aparência e quebrar colisões ou posições salvas. **Medida:** separar coordenadas e hitboxes da arte, mantendo IDs e dimensões lógicas.
- **Risco:** “Nexo” parecer nome antigo em vez de lugar narrativo. **Medida:** decidir seu papel no vocabulário e aplicar a decisão de forma consistente.
- **Risco:** afirmar identidade institucional ainda não aprovada. **Medida:** manter N9 explicitamente provisório e evitar ativos oficiais.

## 14. Arquivos prováveis da implementação posterior

A lista abaixo é intencionalmente exata para orientar a próxima entrega, mas sua criação ou alteração dependerá de autorização e da aprovação da direção visual.

### Arquivos prováveis a criar

- `src/config/visual.ts`
- `src/game/assets.ts`
- `src/game/animation/playerAnimations.ts`
- `src/game/objects/PlayerCharacter.ts`
- `src/game/objects/InteractiveObject.ts`
- `src/ui/components/InteractionPrompt.ts`
- `src/assets/characters/player-base.png`
- `src/assets/characters/player-base.json`
- `src/assets/characters/lia.png`
- `src/assets/characters/lia.json`
- `src/assets/tiles/base-n9.png`
- `src/assets/tiles/base-n9.json`
- `src/assets/props/base-n9-props.png`
- `src/assets/props/base-n9-props.json`
- `src/assets/ui/icons.svg`
- `src/assets/puzzles/common.svg`
- `src/assets/puzzles/cc.svg`
- `src/assets/puzzles/si.svg`
- `src/assets/puzzles/tads.svg`
- `src/assets/puzzles/tgti.svg`
- `src/assets/puzzles/trc.svg`
- `tests/e2e/visual-regression.spec.ts`
- `tests/unit/visual-config.test.ts`

### Arquivos prováveis a alterar

- `src/game/config.ts`
- `src/game/scenes/PreloadScene.ts`
- `src/game/scenes/CityScene.ts`
- `src/game/scenes/MapScene.ts`
- `src/config/maps.ts`
- `src/ui/AppShell.ts`
- `src/ui/ExplorationControls.ts`
- `src/ui/views/HomeView.ts`
- `src/ui/views/MapView.ts`
- `src/ui/views/PlayerProfileView.ts`
- `src/ui/views/CourseSelectView.ts`
- `src/ui/views/QuestionView.ts`
- `src/ui/views/SequencePuzzleView.ts`
- `src/ui/views/ResultView.ts`
- `src/ui/views/LeaderboardView.ts`
- `src/styles/tokens.css`
- `src/styles/base.css`
- `src/styles/layout.css`
- `src/styles/components.css`
- `src/styles/exploration.css`
- `src/styles/puzzles.css`
- `public/favicon.svg`
- `tests/e2e/first-delivery.spec.ts`
- `tests/e2e/exploration.spec.ts`
- `tests/e2e/playable-phase.spec.ts`
- `tests/e2e/puzzles.spec.ts`
- `tests/e2e/local-ranking.spec.ts`
- `docs/arquitetura.md`
- `docs/backlog.md`

Não se recomenda criar um segundo sistema de mapa, entrada ou interface. A evolução deve substituir progressivamente os desenhos provisórios dentro das cenas, controles e views atuais, preservando domínio, contratos, progresso e acessibilidade.

## 15. Conclusão

O N9 já possui uma base funcional acima de um protótipo estático: há fluxo completo, mapa com colisão, interação contextual, desafios, puzzles, perfil, ranking, persistência e suporte real a teclado, mouse e toque. A camada DOM é a principal força de acessibilidade e não deve ser abandonada.

A lacuna central é de representação: personagem, mundo e objetos ainda são marcadores geométricos, e as telas de aprendizagem ainda se parecem mais com formulários do que com partes do mesmo universo. A próxima entrega visual deve priorizar uma linguagem única para Base N9, personagem animado, objetos com estados reconhecíveis e continuidade entre mapa e atividades, sem redesenhar as mecânicas já validadas.
