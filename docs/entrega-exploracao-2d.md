# Entrega — exploração 2D na Base N9

Data: 13/11/2026. Base anterior limpa: `53be5bb`. Commit solicitado: `feat: mapa inicial e exploracao 2D`.

## Comportamento entregue

Primeiro mapa em visão superior, personagem, quatro direções (setas/WASD e controles virtuais), colisões e interação por proximidade com E, Espaço ou botão. Lia apresenta a missão; o computador abre a fase existente de dez desafios; a porta permanece bloqueada até a conclusão; o terminal fica acessível depois de atravessá-la.

O relatório da missão foi preservado. **Voltar à Base N9** devolve o personagem à posição exata anterior. Concluir os dez desafios libera a porta, inclusive com zero pontos. Sair antes da conclusão mantém a missão em andamento e não abre a porta.

Exploração salva em `n9:exploration:v1`: versão, mapa, posição, missão e desbloqueio. Há validação de geometria e tratamento de falhas. O save da base é compartilhado entre os cinco cursos, cuja seleção continua temporária. A chave legada de relatório não mudou. Não há retomada de respostas incompletas.

Os controles virtuais ficam junto ao mapa para acompanhar o personagem durante o toque. Formas e cores são provisórias e não representam identidade institucional oficial. N9 continua sujeito à aprovação institucional.

## Verificação

- `npm.cmd test`: 79 testes de unidade/DOM aprovados.
- `npm.cmd run lint`: aprovado.
- `npm.cmd run build -- --emptyOutDir false`: aprovado; TypeScript, 22 contratos do catálogo e bundle Vite.
- Playwright/Chromium: 44 testes aprovados, nos perfis desktop 1366×900 e móvel 360×800; reflow também verificado em 320 px e orientação horizontal.
- Após aproximar os controles do mapa: oito cenários de exploração repetidos nos dois perfis.
- Teclado (setas/WASD, E, Espaço), mouse e toque emulado com pressionamento/soltura; restauração após recarga; diálogos; colisão com porta e passagem liberada.
- Partidas completas de CC, SI, TADS, TGTI e TRC; retorno ao mapa e posição preservada; conclusão com zero pontos também libera a porta.
- Falhas de LocalStorage, dados inválidos, versão futura desconhecida e preservação do relatório legado.
- Capturas de computador/celular inspecionadas. Emulação não substitui testes em aparelhos reais, outros motores ou leitores de tela.
- Catálogo pedagógico, regras de elegibilidade/resposta/progressão/pontuação e adaptador de relatório legado sem alterações.
- Nenhuma publicação. Build, dependências e evidências temporárias não integram o commit.

## Arquivos modificados (14)

- [README.md](../README.md)
- [docs/arquitetura.md](arquitetura.md)
- [docs/backlog.md](backlog.md)
- [src/app/GameSession.ts](../src/app/GameSession.ts)
- [src/app/bootstrap.ts](../src/app/bootstrap.ts)
- [src/config/game.ts](../src/config/game.ts)
- [src/game/config.ts](../src/game/config.ts)
- [src/game/scenes/MapScene.ts](../src/game/scenes/MapScene.ts)
- [src/main.ts](../src/main.ts)
- [src/ui/AppShell.ts](../src/ui/AppShell.ts)
- [src/ui/views/MapView.ts](../src/ui/views/MapView.ts)
- [src/ui/views/ResultView.ts](../src/ui/views/ResultView.ts)
- [tests/e2e/first-delivery.spec.ts](../tests/e2e/first-delivery.spec.ts)
- [tests/e2e/playable-phase.spec.ts](../tests/e2e/playable-phase.spec.ts)

## Arquivos criados (11)

- [docs/entrega-exploracao-2d.md](entrega-exploracao-2d.md) — este registro.
- [src/config/exploration.ts](../src/config/exploration.ts)
- [src/config/maps.ts](../src/config/maps.ts)
- [src/domain/exploration/World.ts](../src/domain/exploration/World.ts)
- [src/infrastructure/storage/LocalStorageExplorationRepository.ts](../src/infrastructure/storage/LocalStorageExplorationRepository.ts)
- [src/ports/ExplorationRepository.ts](../src/ports/ExplorationRepository.ts)
- [src/schemas/exploration.schema.json](../src/schemas/exploration.schema.json)
- [src/styles/exploration.css](../src/styles/exploration.css)
- [src/ui/ExplorationControls.ts](../src/ui/ExplorationControls.ts)
- [tests/e2e/exploration.spec.ts](../tests/e2e/exploration.spec.ts)
- [tests/unit/exploration.test.ts](../tests/unit/exploration.test.ts)

Não foram implementados outros mapas, combate, salto, inventário complexo, multiplayer, servidor ou banco online. O conteúdo pedagógico não mudou. Esta entrega se encerra com o commit local.
