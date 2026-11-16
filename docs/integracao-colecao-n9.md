# Integração da coleção provisória N9

## Escopo

Esta entrega habilita no jogo os 60 desafios de questões e os seis quebra-cabeças de sequência da coleção interna `enade-2026`. Desde 16/11/2026, o nome apresentado ao jogador é acompanhado do aviso **Conteúdo experimental em revisão editorial.** Todos os itens usam `validationStatus` igual a `under-ai-review`, conforme a [governança editorial assistida por IA](governanca-editorial-ia.md).

Não foi criada uma missão mista. Questões continuam no computador da Base N9 e quebra-cabeças continuam no terminal tecnológico.

## Carregamento anterior e arquitetura adotada

Antes desta integração, `bootstrap.ts` carregava somente `questions/central-nexo.json` e `puzzles/sequences.json`. `GameSession` recebia os repositórios por injeção, selecionava a fase legada fixa de dez questões e abria no terminal o primeiro puzzle elegível ao curso.

A integração reutiliza esse mesmo fluxo:

1. `bootstrap.ts` cria um único `JsonContentRepository` com o catálogo legado e o novo JSON de questões;
2. cria um único `JsonPuzzleRepository` com os três exemplos antigos e os seis novos puzzles;
3. injeta em `GameSession` a configuração `PROVISIONAL_PLAYABLE_COLLECTION`;
4. `GameSession` restringe seleção e puzzles à coleção ativa e ao curso escolhido;
5. `selectMissionQuestions` continua sendo o único seletor de questões, com ordem determinística e estratégia injetável.

Não existe uma segunda arquitetura de catálogo ou seleção. Os arquivos antigos foram preservados e complementados, não substituídos:

- `src/content/questions/central-nexo.json`: preservado para compatibilidade e testes;
- `src/content/puzzles/sequences.json`: preservado para recibos de progresso e testes;
- `src/content/questions/enade-2026-provisional.json`: registrado no repositório combinado;
- `src/content/puzzles/enade-2026-provisional-sequences.json`: registrado no repositório combinado;
- `src/content/collections.json`: coleção interna mantida com estado `pilot`.

## Escolha de curso e missão

A tela de escolha usa controles HTML nativos do tipo rádio, com rótulos completos e navegação por teclado. Exatamente um dos cursos pode ser escolhido:

- CC — Ciência da Computação;
- SI — Sistemas de Informação;
- TADS — Tecnologia em Análise e Desenvolvimento de Sistemas;
- TGTI — Tecnologia em Gestão da Tecnologia da Informação;
- TRC — Tecnologia em Redes de Computadores.

O curso e o modo podem ser alterados antes de entrar na Base N9 e novamente por **Trocar curso**. A seleção temporária não apaga nem reescreve progresso salvo.

Os modos reutilizam as cotas já definidas no domínio:

| Modo | Total | Comuns | Específicas |
|---|---:|---:|---:|
| Missão rápida | 3 | 1 | 2 |
| Missão curta | 5 | 2 | 3 |
| Missão padrão | 10 | 5 | 5 |
| Arena N9 | 20 | 10 | 10 |

Para cada combinação dos cinco cursos com os quatro modos, os testes confirmam quantidade exata, cotas, IDs distintos, coleção única e ausência de questões específicas de outro curso. Isso totaliza vinte combinações disponíveis. Cada curso tem exatamente vinte questões elegíveis, distribuídas em 7 introdutórias, 9 intermediárias e 4 avançadas.

A Arena usa toda a capacidade atual de dez questões comuns e dez específicas. Portanto, está disponível para os cinco cursos, mas ainda não possui margem editorial de reserva. Se uma cota não puder ser atendida, a missão não inicia e a mensagem informa total, comuns e específicas necessários e disponíveis; nenhuma questão é repetida ou substituída por item de outro curso ou coleção.

## Integração dos puzzles

Ao selecionar um curso, o terminal disponibiliza exatamente:

- `E26-P-COM-01`;
- o puzzle específico `E26-P-<CURSO>-01`.

A interação continua sendo uma sequência reordenável, com mouse, toque, teclado e botões de subir/descer. Ordem correta, dicas, explicação, recompensa e desbloqueio são lidos diretamente do JSON. O puzzle comum abre primeiro; a própria tela permite alternar para o puzzle específico. Recibos por ID impedem XP repetido e permitem replay sem nova recompensa.

## Persistência e compatibilidade

As chaves existentes não foram alteradas nem apagadas. Resultados da coleção integrada usam a nova chave `n9:mission-result:v1`, enquanto `missao-enade:example-result:v1` permanece legível e preservada. O repositório carrega primeiro um relatório novo válido e usa o relatório antigo como fallback. Progresso de exploração e de puzzles continua nas chaves já existentes.

Os formatos antigos continuam aceitos pelos normalizadores e pelos repositórios. O schema novo de relatório aceita os totais 3, 5, 10 e 20, sem modificar o schema legado. Um resultado novo não sobrescreve o relatório demonstrativo antigo.

## Interface

As mudanças visíveis ficaram limitadas a:

- escolha do tamanho da missão junto da escolha do curso;
- identificação de **N9 Jornada Digital**;
- aviso discreto **Conteúdo experimental em revisão editorial.**;
- exibição dinâmica de `Desafio X de N`, totais e pontuação máxima;
- identificação da missão selecionada no mapa;
- mensagem detalhada de capacidade insuficiente.

Os campos exibidos ao jogador nos 66 desafios e os textos de interface foram testados para não mostrar a referência pedagógica interna reservada.

## Playwright no Windows

O travamento de encerramento foi reproduzido separadamente do resultado dos casos: os testes terminavam, mas o runner aguardava indefinidamente o subprocesso auxiliar iniciado pela opção `webServer`.

O harness passou a iniciar o Vite Preview programaticamente no `globalSetup` e a fechar o servidor no teardown retornado pelo mesmo ciclo do Playwright. Assim não existe wrapper npm nem processo-filho de servidor a aguardar. Depois da correção, a suíte completa concluiu 52 casos aprovados, em desktop e celular, e encerrou normalmente.

## Verificações

- conversão determinística: concluída sem diferença nos JSON gerados;
- validação de conteúdo/contratos: 128 testes aprovados;
- testes unitários, DOM e integração: 231 testes aprovados;
- testes de navegador: 52 aprovados em desktop e celular;
- lint: aprovado;
- TypeScript: aprovado;
- compilação Vite: aprovada;
- `git diff --check`: aprovado.

## Limitações restantes

- conteúdo ainda depende de validação docente e não foi marcado como aprovado;
- a Arena não possui questões de reserva;
- a ordem padrão é determinística; exclusão de questões respondidas recentemente continua preparada no domínio, mas não foi ativada;
- não há missão mista de questões e puzzles;
- exemplos antigos permanecem no pacote somente para compatibilidade, sem mistura com a coleção ativa;
- não há servidor, login, sincronização online ou publicação.
