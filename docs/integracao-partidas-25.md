# Integração das jornadas de 25 desafios

Data: 18/11/2026.

## Resultado

O fluxo jogável utiliza uma única jornada com 25 questões: cinco comuns e vinte técnicas elegíveis para o curso escolhido. O catálogo contém 205 questões e oito puzzles; puzzles permanecem em interações próprias do mapa e não entram na contagem.

## Conversão e catálogo

`scripts/convert-editorial-content.ts` continua sendo a origem reprodutível dos JSON. Ele preserva as 66 questões anteriormente executáveis e converte os 139 itens adicionais dos lotes de autoria. O mesmo processo gera `src/content/mission-routes.json` a partir de `docs/autoria/matriz-canonica-partidas-25.md`.

Os campos de texto, alternativas, gabarito, feedback, dificuldade e rastreabilidade vêm dos documentos editoriais. Apresentações Markdown de código e tabela são convertidas para os blocos estruturados já suportados pela interface. Questões sem recurso visual continuam compatíveis com a apresentação textual.

## Elegibilidade compartilhada

O prefixo do ID e `classification` indicam a origem editorial, não exclusividade. A seleção técnica aceita qualquer questão não comum que:

1. pertença à mesma coleção;
2. inclua explicitamente o curso em `courses`;
3. esteja no roteiro canônico escolhido.

Nos compartilhamentos, o conversor acrescenta a norma do curso como `normative-complementary` e registra a matriz canônica em `traceability`. A fonte principal original não é substituída.

## Roteiros e progresso

| Curso | Roteiros-base | Questões por roteiro | Comuns | Técnicas |
|---|---:|---:|---:|---:|
| CC | 3 | 25 | 5 | 20 |
| SI | 4 | 25 | 5 | 20 |
| TADS | 3 | 25 | 5 | 20 |
| TGTI | 3 | 25 | 5 | 20 |
| TRC | 3 | 25 | 5 | 20 |

Cada roteiro contém IDs únicos e no máximo três dificuldades avançadas. A chave `n9:mission-route-progress:v1` guarda a quantidade de jornadas concluídas por curso. A chave `n9:mission-recent-questions:v1` guarda somente os 25 IDs da última partida de cada curso. As demais chaves de perfil, exploração, puzzles, resultados e ranking são preservadas.

Depois do último roteiro-base, o jogo monta uma nova combinação determinística. Para cada uma das vinte posições/áreas técnicas, escolhe um candidato registrado na matriz; os cinco comuns vêm do banco comum dos roteiros. A busca considera a composição completa, exclui a partida imediatamente anterior, impede duplicação e limita o total a três itens avançados. A mesma entrada sempre produz a mesma seleção, permitindo reprodução de erros e testes estáveis, sem `Math.random`.

## Compatibilidade

- Os exemplos históricos e `central-nexo.json` continuam no projeto.
- Formatos antigos continuam normalizados em memória.
- O ranking mantém a chave `n9:leaderboard:v1` e passa a aceitar também partidas de 25.
- O relatório mantém `n9:mission-result:v1` e reconhece `journey-25`.
- Nenhum puzzle, XP, gabarito ou progresso anterior foi apagado.

## Validações

Os testes verificam catálogo, schemas, 205 IDs únicos, oito puzzles, roteiros completos para os cinco cursos, composição 5+20, elegibilidade, ausência de repetição, limite de avançadas, avanço local versionado, ranking e resultado de 25 questões. Lint, TypeScript, testes unitários/DOM/integração, contratos e build passaram. O Playwright aprovou 70 casos em desktop e celular; o console original se desconectou durante a execução, mas o processo principal concluiu e registrou `status: passed` e nenhuma falha em `.last-run.json`. O servidor auxiliar foi encerrado depois da suíte.
