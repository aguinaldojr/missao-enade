# Segunda entrega — fase jogável de exemplos

Concluída em **13/11/2026**, versão 0.2.0. Código, arquitetura e backlog revisados antes da implementação.

## Resultado entregue

Fluxo: início → escolha entre os cinco cursos → Central Nexo → **Jogar fase de exemplo** → dez questões → resultado → menu.

O arquivo `src/content/questions/central-nexo.json` contém 14 questões fictícias: nove compartilhadas e uma específica de cada curso. A fase filtra pela lista explícita `courses` e exige exatamente dez itens distintos e elegíveis para cada curso, sem completar com conteúdo de outro curso nem truncar excessos silenciosamente. As seis classificações COMUM, CC, SI, TADS, TGTI e TRC são aceitas. A classificação não substitui a elegibilidade, e uma questão pode ter vários cursos.

Os schemas e o Ajv verificam o catálogo e os resumos locais. O conteúdo usa identificadores de exemplo, `mode: example`, `example: true`, `editorialStatus: example` e a fase separada `FASE-EXEMPLO-01`. Textos são renderizados por `textContent`; não é permitido executar HTML ou código dos enunciados.

Cada questão apresenta contexto, enunciado, cinco alternativas e **Questão X de 10**. A confirmação trava a resposta e apresenta acerto/erro em texto, gabarito, explicação geral, justificativa da escolha e das cinco alternativas. A aplicação registra a apresentação do feedback antes de permitir avançar. Comandos repetidos ou atrasados não duplicam respostas, saltam questões ou somam pontos novamente.

A pontuação é derivada das respostas confirmadas: 100 por acerto, zero por erro, total de 0 a 1.000. Não há desconto, cronômetro ou nota mínima. Uma nova partida começa em zero.

O resultado mostra acertos, pontuação e dez respostas concluídas. Somente o último resumo concluído é salvo no LocalStorage, na chave isolada `missao-enade:example-result:v1`, com versões e identificação de exemplo. O menu reapresenta esse resumo após recarregar. Falhas de acesso/quota deixam o resultado na memória e oferecem tentar salvar novamente. Registros inválidos são ignorados sem apagar outras chaves; versões futuras desconhecidas são preservadas.

## Verificação executada

| Verificação | Resultado |
| --- | --- |
| `npm.cmd run lint` | Passou, sem erros |
| `npm.cmd test` | 64 testes em 6 arquivos passaram |
| `npm.cmd run validate:content` | 22 testes de contrato passaram; fazem parte dos 64 acima |
| `npm.cmd run build` | Tipos, conteúdo e pacote estático passaram |
| `npm.cmd run test:e2e` | 32 testes Chromium passaram; execução final em aproximadamente 2,6 minutos |
| Instalação | Dependências locais e lockfile conferidos; Ajv 8.20.0 adicionado |
| Revisão visual | Questão, feedback e resultado inspecionados em computador e celular |
| Preservação | Arquitetura, sete originais e cópias em docs/fontes conferidos por hash |

Os testes cobrem os cinco cursos, 0/8/10 acertos, curso inválido, COMUM com elegibilidade restrita, múltiplos cursos, JSON inválido, IDs/alternativas duplicados, gabarito inválido, bloqueio de resposta, confirmação repetida, comandos atrasados, feedback antes de concluir, pontuação sem acúmulo, texto não interpretado como HTML, falhas do armazenamento e versões desconhecidas.

No navegador, foram verificadas jornadas completas, mouse, teclado, toque emulado, reflow de 320 pixels, foco no feedback, resultado preservado após recarga e nova partida sem acumular pontos. Foi corrigido o atributo de importação JSON necessário ao Node dos testes, a escala do cenário na mudança de layout e o início da fase sem `crypto.randomUUID`, importante para acesso HTTP em rede local.

O pacote totaliza aproximadamente **373 KB com gzip**, conforme o Vite, incluindo o motor Phaser e a validação local. Não há fontes, APIs ou motor carregados por CDN.

## Limites desta entrega

Esta é uma demonstração técnica autorizada com questões fictícias, sem conteúdo oficial ou aprovação docente. Não substitui `FASE-COMUM-01`, os dez slots pedagógicos planejados ou as cinco trilhas futuras. Nenhum critério de aprovação editorial foi declarado atendido por estes exemplos.

Somente o resultado concluído é persistido. Sair ou recarregar encerra uma partida incompleta. Não foram implementados mapa de dez terminais, retomada de partida, revisão de erros, conquistas, histórico/ranking, campanhas, login, servidor, banco, publicação, IA em tempo real ou APIs pagas.

A verificação móvel usa emulação Chromium. Android/iOS reais, outros motores de navegador e leitores de tela permanecem pendentes; não se declara homologação completa nem conformidade WCAG integral.

## Executar

```powershell
npm.cmd run dev
```

Abra o endereço indicado pelo Vite, normalmente [localhost:5173](http://localhost:5173). Depois de escolher o curso e entrar na central, use **Jogar fase de exemplo**. Mais instruções estão no [README](../README.md).

## Arquivos criados ou modificados

O inventário abaixo foi comparado aos hashes anteriores à implementação. Os documentos pedagógicos originais, `docs/arquitetura.md` e `docs/fontes/*` não foram modificados. Os artefatos gerados em `node_modules`, `dist` e `test-results` estão fora desta lista.

- `docs/backlog.md` — modificado.
- `docs/entrega-02.md` — criado.
- `package-lock.json` — modificado.
- `package.json` — modificado.
- `README.md` — modificado.
- `src/app/bootstrap.ts` — modificado.
- `src/app/GameSession.ts` — modificado.
- `src/content/questions/central-nexo.json` — criado.
- `src/domain/eligibility.ts` — criado.
- `src/domain/models/Attempt.ts` — criado.
- `src/domain/models/Question.ts` — criado.
- `src/domain/progression.ts` — criado.
- `src/domain/scoring.ts` — criado.
- `src/game/config.ts` — modificado.
- `src/game/scenes/MapScene.ts` — modificado.
- `src/game/scenes/QuestionScene.ts` — criado.
- `src/game/scenes/ResultScene.ts` — criado.
- `src/infrastructure/content/JsonContentRepository.ts` — criado.
- `src/infrastructure/content/validateContent.ts` — criado.
- `src/infrastructure/storage/LocalStorageProgressRepository.ts` — criado.
- `src/ports/ContentRepository.ts` — criado.
- `src/ports/ProgressRepository.ts` — criado.
- `src/schemas/question.schema.json` — criado.
- `src/schemas/result.schema.json` — criado.
- `src/styles/components.css` — modificado.
- `src/ui/AppShell.ts` — modificado.
- `src/ui/views/CourseSelectView.ts` — modificado.
- `src/ui/views/HomeView.ts` — modificado.
- `src/ui/views/MapView.ts` — modificado.
- `src/ui/views/QuestionView.ts` — criado.
- `src/ui/views/ResultView.ts` — criado.
- `tests/e2e/first-delivery.spec.ts` — modificado.
- `tests/e2e/playable-phase.spec.ts` — criado.
- `tests/integration/AppShell.test.ts` — modificado.
- `tests/integration/PhaseView.test.ts` — criado.
- `tests/unit/content.test.ts` — criado.
- `tests/unit/GameSession.test.ts` — modificado.
- `tests/unit/phase.test.ts` — criado.
- `tests/unit/storage.test.ts` — criado.
