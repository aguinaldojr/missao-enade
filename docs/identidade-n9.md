# N9 — Jornada Digital — identidade provisória

Alteração concluída em 13/11/2026, restrita à identidade e à documentação.

## Estado inicial e plano

A raiz confirmada foi `C:/Users/AulaU9/Documents/Projetos/missao-enade`. O Git estava limpo, sem alterações pendentes dos prompts anteriores, no commit `9274083`. Não havia remoto configurado.

Antes de editar, foram localizadas as ocorrências de Nexus no código, configuração, testes e documentação, e apresentado um plano curto: trocar a identidade central, atualizar apresentação e documentos, registrar a aprovação pendente, executar testes/build e criar um commit local.

## Identidade apresentada

Nome provisório: **N9 — Jornada Digital**. Subtítulo: **Jornada Digital**.

**N9 está sujeito à aprovação institucional.** A escolha busca uma associação conceitual com a Universidade Nove de Julho, sem afirmar que o jogo seja produto oficial.

O nome é composto a partir de `shortName` e `subtitle` em `src/config/game.ts`. Cabeçalho, títulos da aba, metadados e aviso sem JavaScript continuam usando a configuração central. O cabeçalho evita repetir Jornada Digital em duas linhas; o monograma próprio é apenas texto N9.

Não foram adotados logotipo oficial, slogan, brasão, imagens de campi ou cores institucionais. A paleta e os recursos visuais anteriores foram mantidos, sem qualificação como marca oficial.

## Ocorrências e histórico

| Ocorrência anterior | Tratamento |
| --- | --- |
| Identidade ativa em `src/config/game.ts` | N9, Jornada Digital e nome completo composto em um único lugar. |
| Expectativas de identidade nos testes | Atualizadas para N9 e verificação do monograma textual. |
| README, visão vigente, arquitetura e cabeçalho do backlog | Atualizados com o nome provisório e a aprovação institucional pendente. |
| Base Nexus, Universo Nexus e Arena Nexus | Não existiam na narrativa ativa; não foram criados novos locais ou missões. |
| `docs/identidade-nexus.md` e seção 12 do backlog | Preservados como registro histórico da mudança anterior. |
| `antes-da-identidade-nexus` em um relatório de teste | Preservado como identificador legado para comprovar compatibilidade com dados anteriores. |
| Nexus em mensagens de commit e verificações negativas de teste | Histórico ou garantia de ausência da marca anterior na tela, não identidade ativa. |

A cidade fictícia Nexo e seus conteúdos existentes não foram renomeados. A pasta principal continua `missao-enade`.

ENADE permanece somente como referência pedagógica interna. A coleção planejada `enade-2026`, seus metadados e as fontes foram preservados sem inclusão da origem na interface principal.

## Preservação e validação

O diff em relação a `9274083` confirmou que permaneceram idênticos: aplicação/sessão, domínio, desafios JSON, regras, pontuação, elegibilidade, schemas, infraestrutura de armazenamento, contratos, cenas Phaser, trilhas, IDs, versões, pacotes, cores, assets, fontes pedagógicas e configuração de build.

A chave `missao-enade:example-result:v1` continua igual. Um relatório salvo antes das mudanças continua legível, sem alterar dados de outro aplicativo.

| Verificação | Resultado |
| --- | --- |
| Lint | Passou |
| `npm.cmd test` | 71 testes em 7 arquivos passaram |
| `npm.cmd run build -- --emptyOutDir false` | Tipos, contrato do conteúdo e compilação passaram |
| Validação do catálogo no build | 22 testes, incluídos nos 71 acima |
| Testes de navegador | 36 testes Chromium passaram em aproximadamente 2,2 minutos |
| Identidade | Cabeçalho, título, metadados e noscript verificados |
| Compatibilidade | Trilhas CC/SI/TADS/TGTI/TRC, teclado, toque emulado, relatórios antigos e falhas de armazenamento verificados |
| Revisão visual | Tela inicial inspecionada em computador e celular |
| Integridade | Nenhum arquivo excluído, pasta renomeada ou mudança de mecânica |

A verificação móvel foi por emulação e não substitui homologação em aparelhos reais ou aprovação institucional.

As novas evidências foram gravadas em pasta temporária separada para preservar as anteriores. `dist`, `node_modules` e relatórios gerados continuam fora do Git.

## Git e encerramento

Mensagem do commit local: `refactor: identidade provisoria N9 Jornada Digital`.

Sem publicação, push ou configuração de remoto. Nenhuma funcionalidade posterior foi iniciada.

## Todos os arquivos criados ou modificados

- `README.md` — modificado.
- `docs/arquitetura.md` — modificado.
- `docs/backlog.md` — modificado.
- `docs/identidade-n9.md` — criado.
- `docs/visao-do-jogo.md` — modificado.
- `src/config/game.ts` — modificado.
- `src/ui/AppShell.ts` — modificado.
- `tests/e2e/identity.spec.ts` — modificado.
- `tests/e2e/playable-phase.spec.ts` — modificado.
- `tests/unit/identity.test.ts` — modificado.
- `visao-do-jogo.md` — modificado.
