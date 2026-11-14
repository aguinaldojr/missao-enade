# N9 — Jornada Digital: conversão controlada dos 66 desafios para JSON

Registro de conversão executado em 14/11/2026, horário de Brasília, a partir dos sete lotes auditados e corrigidos. Todos os itens permanecem `provisional-pending-teacher-review`. Esta etapa produz catálogos provisórios válidos, mas não os conecta ao fluxo do jogo nem representa aprovação docente, homologação de acessibilidade, certificação de fontes ou cotejo externo de originalidade.

## 1. Organização adotada

A estrutura existente foi reutilizada:

- questões continuam em `src/content/questions/` e usam o catálogo definido por `QuestionCatalog`;
- sequências continuam em `src/content/puzzles/` e usam a lista definida por `SequencePuzzle[]`;
- a coleção interna continua sendo `enade-2026`, já presente em `src/content/collections.json` com estado `planned`;
- validação continua passando por `validateContent`, `JsonContentRepository`, `JsonPuzzleRepository` e pelos schemas atuais;
- a normalização de `source` singular dos exemplos antigos permanece em memória e não foi removida.

Arquivos de conteúdo criados:

- `src/content/questions/enade-2026-provisional.json`: catálogo com 60 questões;
- `src/content/puzzles/enade-2026-provisional-sequences.json`: catálogo com seis puzzles `sequence`.

Organização dos arquivos anteriores:

| Arquivo anterior | Decisão | Motivo |
|---|---|---|
| `src/content/questions/central-nexo.json` | Preservado sem alteração | Continua sendo o catálogo de exemplos carregado pelo protótipo. |
| `src/content/puzzles/sequences.json` | Preservado sem alteração | Continua sendo o catálogo de três exemplos carregado pelo terminal. |
| `src/content/collections.json` | Preservado sem alteração | Já contém `enade-2026`; não havia necessidade de duplicar a coleção. |
| Diretórios `questions/` e `puzzles/` | Complementados | Receberam catálogos próprios da coleção provisória, na arquitetura atual. |
| Arquivos antigos | Nenhum substituído | A conversão não habilita nem remove conteúdo executável existente. |

`src/app/bootstrap.ts`, `src/app/GameSession.ts` e a configuração do seletor não foram modificados. Portanto, os 66 itens estão disponíveis como dados validados para a próxima etapa, mas não são selecionados nem apresentados ao jogador.

## 2. Método de conversão

O conversor reproduzível `scripts/convert-editorial-content.ts` lê integralmente os sete lotes, separa cada seção pelo ID planejado e projeta somente propriedades aceitas pelos contratos estritos. O comando registrado é `npm.cmd run convert:editorial`.

Na projeção:

- marcação Markdown de ênfase e links é removida dos textos de conteúdo, e espaços são normalizados, sem resumir ou reformular as palavras;
- títulos editoriais são preservados em `traceability.title`; o título de puzzle também permanece em `title`;
- objetivos e localizadores são preservados em `traceability.objective` e `traceability.locators`;
- alternativas mantêm a ordem A, B, C, D e E encontrada no documento;
- gabarito, explicação e os cinco feedbacks são extraídos das seções correspondentes;
- cada puzzle preserva narrativa, cinco blocos na ordem editorial, `correctOrder`, três dicas, explicação, 100 XP e referências de desbloqueio;
- as dicas constituem retorno progressivo para tentativas incorretas, e `explanation` constitui o retorno completo de sucesso conforme o contrato atual; exemplos adicionais de mensagens de interação continuam documentados nos lotes;
- observações de autoria, checklist, riscos e formulários docentes permanecem nos Markdown, como determina o padrão editorial, e não viram propriedades desconhecidas.

O conversor interrompe a geração se uma questão não tiver contexto, enunciado, cinco alternativas, gabarito ou cinco feedbacks, ou se um puzzle não tiver narrativa, 4–7 blocos, ordem completa, ao menos três dicas e explicação.

## 3. Inventário e cotas preservados

| Conteúdo | Quantidade |
|---|---:|
| Objetos `question` | 60 |
| Objetos `sequence` | 6 |
| IDs únicos | 66 |
| IDs ausentes do plano | 0 |
| IDs adicionais ao plano | 0 |

| Curso | Questões elegíveis | Comuns | Específicas | introductory | intermediate | advanced | Puzzles elegíveis |
|---|---:|---:|---:|---:|---:|---:|---:|
| CC | 20 | 10 | 10 | 7 | 9 | 4 | 2 |
| SI | 20 | 10 | 10 | 7 | 9 | 4 | 2 |
| TADS | 20 | 10 | 10 | 7 | 9 | 4 | 2 |
| TGTI | 20 | 10 | 10 | 7 | 9 | 4 | 2 |
| TRC | 20 | 10 | 10 | 7 | 9 | 4 | 2 |

Puzzles não foram incluídos nas quantidades de questões. As versões 2 dos nove textos reduzidos foram preservadas; as demais questões mantêm versão 1. O contrato de puzzle não recebe campo `version` inexistente.

## 4. Gabaritos, alternativas e puzzles

O teste compara os objetos JSON com a projeção direta das seções documentais. Assim, qualquer mudança de letra, deslocamento, perda ou reordenação de alternativa produz falha. Foram confirmados:

- 60 gabaritos iguais aos lotes;
- 300 alternativas, cinco por questão, na ordem A–E original;
- 300 feedbacks específicos, A–E, não vazios;
- seis listas de cinco blocos, cada uma com IDs únicos;
- seis `correctOrder` como permutações completas dos blocos;
- uma solução estrutural por puzzle entre 120 permutações;
- três dicas e uma explicação final por puzzle;
- recompensa de 100 XP e `base-n9`/`door` em todos os puzzles, sem concessão efetiva de XP ou desbloqueio.

Essa validação estrutural não substitui a tentativa independente da solução por docentes registrada como pendência.

## 5. Fontes e rastreabilidade

Todos os 66 itens possuem:

- `sources` plural;
- exatamente uma fonte `primary`;
- `traceability.title`, `traceability.objective` e ao menos um localizador;
- `validationStatus: provisional-pending-teacher-review`.

Foram preservadas 16 ocorrências `normative-complementary`: quatro em cada um dos itens E26-Q-COM-07, E26-Q-COM-08, E26-Q-COM-10 e E26-P-COM-01. Elas representam F07/SI, F08/TADS, F09/TGTI e F10/TRC, mantendo F06 como principal.

Foram criadas 24 ocorrências `technical` exclusivamente onde o campo de complemento do item cita uma referência técnica identificada. Descrição, URL, ano quando disponível e identificador documental são obtidos das tabelas de fontes dos próprios lotes. Expressões como “modelo fechado do caso” não foram promovidas artificialmente a fonte externa.

O localizador de TRC mantém XI para virtualização e XIII para segurança da informação. Limites de acesso, reprodução alternativa e necessidade de conferir originais certificados continuam nos documentos de autoria e nas pendências da auditoria; a conversão não declara verificação externa nova.

## 6. Testes automatizados

`tests/unit/editorial-json.test.ts` compara, sem integrar a coleção:

1. os JSON versionados com a conversão integral dos sete lotes;
2. os 66 IDs convertidos com os 66 IDs únicos do plano;
3. cursos, classificação, dificuldades e cotas por curso;
4. gabaritos, ordem das alternativas e feedbacks;
5. fontes, papéis, status e rastreabilidade;
6. blocos, permutações, dicas e recompensas dos puzzles;
7. campos apresentados ao jogador, impedindo a exposição do termo reservado.

O teste foi incluído em `validate:content`, para que a compilação rejeite catálogo desatualizado, ID duplicado, gabarito deslocado, alternativa perdida, fonte principal ausente, competência/curso/dificuldade divergente ou perda de rastreabilidade.

## 7. Verificações finais

Resultados finais:

- parse de todos os JSON: aprovado;
- teste específico da conversão: 7 testes aprovados;
- validação de conteúdo: 6 arquivos e 128 testes aprovados;
- testes unitários e de integração: 16 arquivos e 201 testes aprovados;
- lint: aprovado, sem erros;
- TypeScript: aprovado;
- compilação: aprovada, com 138 módulos transformados;
- navegador: os 52 casos apresentaram `ok` em desktop e celular, sem caso com falha; após o último caso, o processo Playwright permaneceu aberto somente no encerramento do servidor auxiliar e foi interrompido, resultando em código de saída 1 por essa interrupção;
- `diff --check`: aprovado na conferência final.

## 8. Pendências preservadas

- aprovação e resolução independente por docentes;
- conferência com PPCs e calibração de dificuldade;
- consulta a originais certificados e eventuais retificações;
- cotejo externo de originalidade;
- homologação de acessibilidade após futura integração;
- ampliação do banco para criar reserva além dos 20 itens exatos da Arena.

Nenhuma pendência foi convertida em aprovação. Os arquivos estão estruturalmente preparados para uma etapa posterior de integração, condicionada a nova autorização.
