# Entrega — primeiro quebra-cabeça tecnológico

Data: 13/11/2026. Base anterior limpa: `d862c80`.
Commit solicitado: `feat: primeiro quebra-cabeca tecnologico`.

## Comportamento entregue

Somente **Sequência Lógica**. O terminal da Base N9 perdeu sua sequência de inicialização; reorganizar os comandos recupera o sistema e abre a passagem.

O terminal foi colocado antes da porta para ser acessível sem concluir os dez desafios. A interação abre o primeiro exemplo e permite escolher três conteúdos: algoritmo (cinco blocos), incidente de TI (seis) e rede (seis). Todos são fictícios, provisórios, pendentes de revisão docente e acessíveis aos cinco cursos.

A lista pode ser reorganizada pela alça com mouse/toque, pelas setas do teclado ou pelos botões Subir/Descer. A ordem inicial é embaralhada e incorreta. A validação incorreta mostra uma dica; as seguintes são solicitadas uma a uma, sem solução completa imediata, cronômetro ou retirada de XP. O arraste e os botões evitam movimentos duplicados causados pelo clique compatível de toque.

Acertar mostra a explicação, registra conclusão, concede **100 XP por ID na primeira vez** e libera a porta. Os três exemplos totalizam no máximo 300 XP de quebra-cabeças. A repetição preserva o recibo, embaralha novamente e não concede XP adicional. **Retornar ao mapa** permite ler a explicação antes de voltar à mesma posição.

A chave `n9:puzzles:v1` guarda ordem, dicas, tentativas e conclusão. XP é derivado dos IDs concluídos; gravações mesclam conclusões sem duplicar recompensas. Tentativas incompletas retomam pelo terminal após selecionar novamente um curso. Falhas de salvamento exibem aviso e tentativa de gravar; sem persistência, a proteção vale apenas na sessão. Versões futuras desconhecidas não são sobrescritas.

Resolver um puzzle não conclui a missão dos desafios. Os desafios do computador, suas explicações, pontuação e relatório continuam preservados. Concluir essa missão também continua liberando a porta. A chave do relatório legado não foi modificada.

Um save antigo que colida com o novo local do terminal é reposicionado no ponto inicial, preservando missão e porta. Outras posições válidas não mudam. O formato de exploração permite porta liberada pelo puzzle sem exigir conclusão dos desafios.

## Verificação

- `npm.cmd test`: **100 testes aprovados**, em 11 arquivos (domínio, conteúdo, armazenamento e DOM).
- `npm.cmd run lint` e `npm.cmd run typecheck`: aprovados.
- `npm.cmd run build -- --emptyOutDir false`: aprovado; valida TypeScript e 28 contratos de conteúdo, incluindo o novo catálogo, antes do bundle Vite.
- Playwright/Chromium: **52 testes aprovados** em computador e celular emulado.
- Reorganização com arraste real de ponteiro em mouse/toque, botões, setas, foco e proteção contra clique duplicado.
- Validação incorreta, dicas graduais, explicação após acerto, XP único, repetição e reload.
- Três conteúdos concluídos, 300 XP totais; tentativas incompletas retomadas; quota bloqueada, JSON inválido e versão futura preservada.
- Retorno à posição do mapa, liberação da porta e regressão dos dez desafios de CC, SI, TADS, TGTI e TRC.
- Capturas visuais de computador/celular revisadas; layout sem rolagem horizontal no teste móvel.
- Git confirma o catálogo de desafios, as regras puras de elegibilidade/progressão/pontuação e o adaptador de relatório legado sem alterações.
- Sem dependências adicionais e sem publicação. Build, node_modules, traces e capturas temporárias ficam fora do commit.

Limites: testes em aparelhos reais, outros motores e leitores de tela continuam pendentes. O progresso é local ao navegador; não há transação entre chaves, autenticação nem sincronização da interface entre abas. Limpar dados elimina os recibos.

## Arquivos modificados (16)

- [README.md](../README.md)
- [docs/arquitetura.md](arquitetura.md)
- [docs/backlog.md](backlog.md)
- [package.json](../package.json)
- [src/app/GameSession.ts](../src/app/GameSession.ts)
- [src/app/bootstrap.ts](../src/app/bootstrap.ts)
- [src/config/exploration.ts](../src/config/exploration.ts)
- [src/config/game.ts](../src/config/game.ts)
- [src/config/maps.ts](../src/config/maps.ts)
- [src/game/config.ts](../src/game/config.ts)
- [src/infrastructure/storage/LocalStorageExplorationRepository.ts](../src/infrastructure/storage/LocalStorageExplorationRepository.ts)
- [src/main.ts](../src/main.ts)
- [src/ui/AppShell.ts](../src/ui/AppShell.ts)
- [src/ui/views/MapView.ts](../src/ui/views/MapView.ts)
- [tests/e2e/exploration.spec.ts](../tests/e2e/exploration.spec.ts)
- [tests/unit/exploration.test.ts](../tests/unit/exploration.test.ts)

## Arquivos criados (15)

- [docs/entrega-sequencia-logica.md](entrega-sequencia-logica.md)
- [src/config/puzzles.ts](../src/config/puzzles.ts)
- [src/content/puzzles/sequences.json](../src/content/puzzles/sequences.json)
- [src/domain/puzzles/SequencePuzzle.ts](../src/domain/puzzles/SequencePuzzle.ts)
- [src/infrastructure/content/JsonPuzzleRepository.ts](../src/infrastructure/content/JsonPuzzleRepository.ts)
- [src/infrastructure/storage/LocalStoragePuzzleRepository.ts](../src/infrastructure/storage/LocalStoragePuzzleRepository.ts)
- [src/ports/PuzzleRepository.ts](../src/ports/PuzzleRepository.ts)
- [src/schemas/puzzle-progress.schema.json](../src/schemas/puzzle-progress.schema.json)
- [src/schemas/puzzles.schema.json](../src/schemas/puzzles.schema.json)
- [src/styles/puzzles.css](../src/styles/puzzles.css)
- [src/ui/views/SequencePuzzleView.ts](../src/ui/views/SequencePuzzleView.ts)
- [tests/e2e/puzzles.spec.ts](../tests/e2e/puzzles.spec.ts)
- [tests/integration/SequencePuzzleView.test.ts](../tests/integration/SequencePuzzleView.test.ts)
- [tests/unit/puzzle-content.test.ts](../tests/unit/puzzle-content.test.ts)
- [tests/unit/puzzles.test.ts](../tests/unit/puzzles.test.ts)

Arquitetura, backlog e instruções de uso foram atualizados. Nenhum outro tipo de quebra-cabeça ou funcionalidade posterior foi implementado. N9 permanece provisório e sujeito à aprovação institucional.
