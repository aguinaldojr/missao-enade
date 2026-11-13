# Nexus — Jornada Digital — mudança de identidade

Entrega de 13/11/2026, restrita a apresentação, configuração de textos e documentação.

## Resultado

O jogador encontra **Nexus — Jornada Digital**, com subtítulo **Explore. Conecte. Evolua.** A experiência é permanente e lúdica, voltada ao desenvolvimento de competências em tecnologia.

O nome, subtítulo, textos principais, avisos, vocabulário e títulos estão em `src/config/game.ts`. O HTML inicial usa a mesma configuração por meio do plugin de identidade do Vite, inclusive no título, descrição e aviso sem JavaScript.

A interface usa desafio, missão, pontuação e relatório da missão. Missão especial e laboratório de treinamento são termos registrados para capacidades futuras, sem implementação de novos fluxos.

A primeira coleção pedagógica interna tem o identificador `enade-2026`, registrada como planejada em `src/config/collections.ts`. O conteúdo editorial inicial será baseado nas competências e referências do ENADE; essa origem não é apresentada como objetivo de preparação, prova ou simulado ao jogador. PPCs, disciplinas, nivelamento, projetos e certificações são futuras origens.

Os desafios fictícios atuais permanecem exemplos; a troca de identidade não os torna material aprovado ou oficial.

## Ocorrências localizadas e tratamento

| Local | Tratamento |
| --- | --- |
| `src/ui/AppShell.ts` | Nome anterior no cabeçalho e títulos substituído pela configuração Nexus; rodapé passa a descrever a experiência. |
| `src/ui/views/HomeView.ts`, `MapView.ts`, `QuestionView.ts`, `ResultView.ts` | Avisos com ENADE removidos da apresentação; caráter fictício e necessidade de validação docente continuam explícitos. |
| `index.html` | Nome, descrição, título e noscript vêm da configuração central. |
| Visão, arquitetura, backlog e README | Posicionamento permanente, origem interna e vocabulário registrados. |
| `docs/fontes/*`, referências oficiais e relatórios anteriores | Preservados como documentação pedagógica ou histórico. |
| `src/infrastructure/storage/LocalStorageProgressRepository.ts` e testes de compatibilidade | Chave legada `missao-enade:example-result:v1` preservada; não é nome visível da experiência. |
| `package.json`, `package-lock.json` e pasta local | Identificador técnico `missao-enade` preservado, sem alteração da instalação ou do armazenamento. |
| `src/config/collections.ts` | `enade-2026` e sua origem pedagógica são metadados internos; não são importados pela interface. |

Não há ENADE em nomes de classes, cenas ou componentes. Os nomes técnicos existentes são genéricos, como GameSession, QuestionScene, ResultScene e AppShell. A visão registra Mission, Challenge, LearningTrack, ChallengeCollection, QuestionChallenge e PuzzleChallenge como exemplos de nomenclatura genérica para evoluções. Não foi feita migração de contratos somente por uma mudança editorial.

O termo “resultado” no texto de um desafio matemático ou de uma comparação permanece quando faz parte do conceito; a apresentação do desfecho da partida passou a “relatório da missão”. O JSON pedagógico demonstrativo não foi reescrito.

## Compatibilidade comprovada

Comparação com o checkpoint confirma ausência de alterações em:

- `src/app`, `src/domain`, `src/infrastructure`, `src/content`, `src/ports`, `src/schemas` e `src/game`;
- `package.json` e `package-lock.json`;
- `docs/fontes`, referências oficiais, matriz, distribuição de desafios e catálogo editorial original.

Permanecem as trilhas CC, SI, TADS, TGTI e TRC, os dez desafios por missão, a confirmação única, o feedback e a pontuação de 0 a 1.000. ID da missão, versão de conteúdo, schemas, regra de salvamento e chave LocalStorage são os mesmos. Não houve migração ou perda intencional de relatórios.

A visão vigente está em `docs/visao-do-jogo.md`, com cópia na raiz. A visão anterior permanece integral em `docs/fontes/visao-do-jogo.md`. A arquitetura e o backlog da raiz continuam como fontes históricas; os documentos operacionais vigentes estão em `docs`.

## Validação

| Verificação | Resultado |
| --- | --- |
| Estado anterior ao checkpoint | Lint, build, 64 testes de unidade/DOM e 32 E2E aprovados |
| Nova identidade: `npm.cmd run lint` | Passou |
| `npm.cmd test` | 71 testes em 7 arquivos passaram |
| `npm.cmd run build -- --emptyOutDir false` | Tipos, validação do conteúdo e compilação passaram |
| Validação do catálogo no build | 22 testes de contrato, incluídos nos 71 acima |
| `npm.cmd run test:e2e` | 36 testes Chromium em desktop e celular passaram |
| Identidade em HTML sem JavaScript | Título, descrição e noscript verificados |
| Relatório anterior à mudança | Recuperado na chave original sem alteração do registro ou de dados de outro aplicativo |
| Revisão visual | Início, desafio e relatório em computador e celular inspecionados |
| Integridade do diff | Sem exclusão de arquivos, alteração das regras ou problemas de whitespace |

As evidências desta rodada foram gravadas em pasta temporária separada para preservar as capturas anteriores. O build usou `--emptyOutDir false` para manter os artefatos existentes. A pasta dist continua fora do Git; seus artefatos antigos não fazem parte do checkpoint versionado.

A emulação não substitui homologação em aparelhos reais ou leitores de tela. Nenhuma conformidade integral ou nova validação pedagógica foi declarada.

## Git e restauração

- Repositório inicializado localmente na raiz correta.
- Autoria configurada apenas neste repositório: Prof. Aguinaldo Junior, `prof.aguinaldojr@gmail.com`.
- Checkpoint: `cd24181f1bf5f12a992b395d3bd94d251d8ab5bb`.
- Mensagem do checkpoint: `checkpoint: prototipo funcional apos prompt 6`.
- Mensagem do commit desta identidade: `refactor: nova identidade Nexus Jornada Digital`.
- Nenhum remoto configurado e nenhuma publicação ou push executado.
- `.gitignore` foi ampliado no checkpoint para excluir dependências, build, relatórios, caches, logs, temporários, arquivos de ambiente e credenciais.

O checkpoint registra as fontes necessárias para reconstruir o protótipo; `node_modules`, `dist` e `test-results` permaneceram fora do commit. Não foi excluído ou revertido nenhum arquivo existente para criar esse ponto de restauração.

## Todos os arquivos criados ou modificados

A lista abaixo cobre a identidade, a documentação e os testes. Na preparação do checkpoint, `.gitignore` também foi modificado para ampliar as exclusões.

- `.gitignore` — modificado na preparação do checkpoint.
- `docs/arquitetura.md` — modificado.
- `docs/backlog.md` — modificado.
- `index.html` — modificado.
- `README.md` — modificado.
- `src/styles/layout.css` — modificado.
- `src/ui/AppShell.ts` — modificado.
- `src/ui/views/CourseSelectView.ts` — modificado.
- `src/ui/views/HomeView.ts` — modificado.
- `src/ui/views/MapView.ts` — modificado.
- `src/ui/views/QuestionView.ts` — modificado.
- `src/ui/views/ResultView.ts` — modificado.
- `tests/e2e/first-delivery.spec.ts` — modificado.
- `tests/e2e/playable-phase.spec.ts` — modificado.
- `tests/integration/AppShell.test.ts` — modificado.
- `tests/integration/PhaseView.test.ts` — modificado.
- `tsconfig.json` — modificado.
- `visao-do-jogo.md` — modificado.
- `vite.config.ts` — modificado.
- `docs/identidade-nexus.md` — criado.
- `docs/visao-do-jogo.md` — criado.
- `src/config/collections.ts` — criado.
- `src/config/game.ts` — criado.
- `tests/e2e/identity.spec.ts` — criado.
- `tests/unit/identity.test.ts` — criado.
