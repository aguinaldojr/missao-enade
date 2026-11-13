# Estrutura dos dados de desafios — contratos editoriais generalizados

Atualização de 13/11/2026 para o Prompt 7.1. O levantamento anterior identificou contratos assimétricos; esta versão descreve a migração autorizada. Código-base: `e19b44a`. A entrega altera tipos, schemas, validadores, repositórios de conteúdo, metadados dos exemplos e testes. **Não altera interface, mapa, mecânicas, experiência do jogador ou formatos de progresso.**

N9 continua provisório e sujeito à aprovação institucional. ENADE permanece apenas como referência pedagógica interna. Todo conteúdo distribuído continua fictício e pendente de revisão docente. Casos “aprovados” existem apenas como fixtures técnicas fictícias dos testes; nenhuma aprovação pedagógica real foi concedida.

## 1. Visão dos contratos

| Conceito | Contrato atual | Limite desta entrega |
| --- | --- | --- |
| Metadados compartilhados | EditorialMetadata | Questões e sequências usam os mesmos oito grupos de campos; source tem estrutura própria. |
| Questão contextualizada | Question extends EditorialMetadata | Cinco alternativas e gabarito único; sem mudança da interação existente. |
| Catálogo de questões | QuestionCatalog | mode, versão e fase generalizados; editoriais podem ter uma ou mais questões. A fase jogável atual exige dez para o curso solicitado. |
| Sequência Lógica | SequencePuzzle extends EditorialMetadata | Único tipo de puzzle implementado; blocos, dicas e recompensa preservados. |
| Coleção | LearningCollection + CollectionRepository | IDs de coleção referenciados são validados; status não ativa conteúdo nem substitui revisão. |
| Missão mista | Especificação documental separada | Sem interface/classe/schema/carregador de Mission no jogo. |
| Cursos/trilhas | Course / CourseId | Cinco cursos; sem LearningTrack, campanhas novas ou importação de areas.json. |
| Progresso | ExampleResult, ExplorationState, PuzzleProgress | Sem migração nem exclusão das três chaves existentes. |

O conjunto de metadados é `collectionId`, `pedagogicalOrigin`, `courses`, `area`, `competencies`, `difficulty`, `source`, `validationStatus` — oito campos, todos obrigatórios no formato canônico. Não há aliases adicionais obrigatórios.

## 2. Fontes, declarações e validadores

### Contratos novos ou evoluídos

| Arquivo | Estruturas/finalidade |
| --- | --- |
| `src/domain/models/EditorialMetadata.ts` | EditorialMetadata, EditorialSource, Difficulty, SourceType, ValidationStatus, ContentMode, LearningCollection, CollectionStatus e suas constantes. |
| `src/domain/models/Question.ts` | Question herda EditorialMetadata; QuestionCatalog generalizado; LegacyQuestion para compatibilidade. |
| `src/domain/puzzles/SequencePuzzle.ts` | SequencePuzzle herda EditorialMetadata; LegacySequencePuzzle e progresso inalterado. |
| `src/content/collections.json` | Catálogo de três coleções: uma planejada e duas de exemplos piloto. |
| `src/config/collections.ts` | Reexporta LearningCollection e preserva firstLearningCollection (enade-2026). |
| `src/ports/CollectionRepository.ts` | Contrato all()/get(id), com retorno LearningCollection ou undefined em get. |
| `src/infrastructure/content/JsonCollectionRepository.ts` | Valida formato e IDs únicos; resolve referências das questões e puzzles. |
| `src/infrastructure/content/editorialValidation.ts` | Ajv compartilhado, referências de coleção e formato http-url, sem acesso à rede. |
| `src/infrastructure/content/legacyEditorial.ts` | Normaliza entradas históricas estritas, sem mutação ou escrita de progresso. |
| `src/schemas/editorial.schema.json` | Definições comuns e source estrita; refs por urn:n9:editorial. |
| `src/schemas/collections.schema.json` | Coleções estritas e estados planned/pilot/active/archived. |
| `src/schemas/question.schema.json` | Catálogo canônico generalizado de questões, com refs aos metadados comuns. |
| `src/schemas/puzzles.schema.json` | Array canônico de sequências, com collectionId e os mesmos metadados. |
| `src/schemas/legacy-question.schema.json; src/schemas/legacy-puzzles.schema.json` | Schemas históricos de entrada: reconhecem o formato antigo antes da normalização; não são o contrato de novos conteúdos. |
| `tests/unit/editorial.test.ts` | Casos de aprovação, fontes, dificuldade, validações negativas, legado, hashes pedagógicos e progresso anterior. |
| `docs/especificacao-missao-mista.md` | Proposta exclusivamente documental, sem importação, tipo executável ou schema de missão. |

### Demais fontes encontradas no levantamento

A lista inclui implementação e documentos de planejamento, cujos campos não viram automaticamente propriedades aceitas.

| Arquivo/grupo | Papel |
| --- | --- |
| `src/domain/models/Course.ts` | Interface `Course`; type `CourseId`; `COURSE_IDS`, `isCourseId`. |
| `src/domain/models/Attempt.ts` | Interfaces `Answer`, `Attempt`, `ExampleResult`. |
| `src/domain/exploration/World.ts` | Interfaces `Point`, `Rect`, `MapObject`, `MapDefinition`, `ExplorationState`; type `ObjectKind`; geometria e proximidade. |
| `src/app/GameSession.ts` | Classe `GameSession`; interface `SessionState`; types `Screen`, `Command`; orquestração de missões, questões e puzzles. |
| `src/app/bootstrap.ts` | Injeção dos catálogos e repositórios locais na sessão. |
| `src/app/courses.ts` | `courses`, `getCourse`; validação dos cinco cursos. |
| `src/ports/ContentRepository.ts` | Interface `ContentRepository`. |
| `src/ports/ProgressRepository.ts` | Interfaces `ResultLoad`, `ProgressRepository`; type `SaveStatus`. |
| `src/ports/PuzzleRepository.ts` | Interfaces `PuzzleContentRepository`, `PuzzleProgressRepository`. |
| `src/ports/ExplorationRepository.ts` | Interface `ExplorationRepository`. |
| `src/infrastructure/content/validateContent.ts` | `validateContent`: Ajv e relações de questões. |
| `src/infrastructure/content/JsonContentRepository.ts` | Classe `JsonContentRepository`: filtro, cache e dez questões por curso. |
| `src/infrastructure/content/JsonPuzzleRepository.ts` | Classe `JsonPuzzleRepository`: schema e relações de puzzles. |
| `src/infrastructure/storage/LocalStorageProgressRepository.ts` | Classe homônima; `isValidResult`, `RESULT_KEY`. |
| `src/infrastructure/storage/LocalStorageExplorationRepository.ts` | Classe homônima; `isValidExploration`, `EXPLORATION_KEY`; reposicionamento de save atingido pelo terminal. |
| `src/infrastructure/storage/LocalStoragePuzzleRepository.ts` | Classe homônima; método privado `valid`, `PUZZLE_KEY`; mesclagem de recibos. |
| `src/domain/eligibility.ts` | `isEligible`: cursos explícitos, sem liberar por COMUM. |
| `src/domain/progression.ts` | `createAttempt`, `currentQuestion`, `selectOption`, `confirmAnswer`, `accessFeedback`, `canAdvance`, `isComplete`. |
| `src/domain/scoring.ts` | `calculateScore`: 100 pontos por acerto. |
| `src/content/questions/central-nexo.json` | Catálogo executável: 14 questões fictícias, dez por curso. |
| `src/content/puzzles/sequences.json` | Catálogo executável: três sequências provisórias. |
| `src/content/courses.json` | Cinco cursos e nomes de regiões futuras. |
| `src/config/maps.ts` | `BASE_N9`, `MAPS`: mapa, objetos e IDs de desbloqueio. |
| `src/config/exploration.ts` | Textos da missão de exploração, guia, porta e controles. |
| `src/config/game.ts` | Identidade e textos; nome provisório N9 e vocabulário de interface. |
| `src/config/puzzles.ts` | Textos da Sequência Lógica, XP, erros e dicas. |
| `src/schemas/result.schema.json` | Schema do último relatório de dez questões. |
| `src/schemas/puzzle-progress.schema.json` | Schema de progresso por ID de puzzle. |
| `src/schemas/exploration.schema.json` | Schema de posição, missão e porta. |
| `src/ui/views/QuestionView.ts` | Visto HTML dos campos de questão e feedback. |
| `src/ui/views/SequencePuzzleView.ts` | Classe `SequencePuzzleView`: reorganização e feedback; não define outro contrato editorial. |
| `src/ui/views/MapView.ts` | Missão, proximidade, XP de puzzles e ações no mapa. |
| `src/ui/views/ResultView.ts` | Relatório e retorno ao mapa. |
| `src/ui/AppShell.ts` | Classe `AppShell`: renderiza a sessão. |
| `src/ui/ExplorationControls.ts` | Classe `ExplorationControls`, interface `MovementControls`, type `Direction`. |
| `src/ui/views/CourseSelectView.ts` | Interface `CourseActions`, callbacks `select`, `confirm`, `back`. |
| `src/game/scenes/CityScene.ts` | Classe base `CityScene`; apresentação sem contrato editorial próprio. |
| `src/game/scenes/MapScene.ts` | Classe `MapScene`, projeção do estado da exploração. |
| `src/game/scenes/QuestionScene.ts` | Classe `QuestionScene`, ambientação dos desafios de questão. |
| `src/game/scenes/ResultScene.ts` | Classe `ResultScene`, ambientação do relatório. |
| `src/game/scenes/HomeScene.ts` | Classe `HomeScene`, ambientação inicial. |
| `src/game/scenes/CourseSelectScene.ts` | Classe `CourseSelectScene`, ambientação da seleção. |
| `src/game/scenes/BootScene.ts` | Classe `BootScene`, inicialização. |
| `src/game/scenes/PreloadScene.ts` | Classe `PreloadScene`, carregamento. |
| `src/game/config.ts` | Mapeamento entre `Screen` e cenas Phaser; puzzle reaproveita `MapScene`. |
| `areas.json` | Matriz editorial de planejamento; 39 áreas e seis fases, sem importação por `src`. |
| `docs/fontes/areas.json` | Cópia histórica da matriz; referência preservada, não carregada no jogo. |
| `matriz-pedagogica.md` | Planejamento de áreas, competências e referências internas. |
| `distribuicao-inicial-questoes.md` | Planejamento de slots; não equivale ao catálogo executável. |
| `docs/arquitetura.md` | Modelos conceituais nas seções 5–6 e implementação atual nas seções 18–19. |
| `docs/backlog.md` | Limites e entregas efetivamente realizadas. |
| `arquitetura.md; backlog.md; visao-do-jogo.md; docs/visao-do-jogo.md; referencias-enade-2026.md; docs/fontes/` | Planejamento e fontes históricas; não criam interfaces ou schemas executáveis. |
| `tests/unit/content.test.ts; tests/unit/puzzle-content.test.ts` | Contratos de catálogos executados no build. |
| `tests/unit/phase.test.ts; tests/unit/GameSession.test.ts; tests/unit/exploration.test.ts; tests/unit/puzzles.test.ts; tests/unit/storage.test.ts; tests/unit/identity.test.ts` | Regras, elegibilidade, persistência, recompensas e compatibilidade. |
| `tests/integration/; tests/e2e/` | Verificação das vistas, teclado/toque, mapas, fase completa e puzzles. |

## 3. Tipos comuns e campos obrigatórios/opcionais

`readonly` é restrição TypeScript. As regras efetivas de importação combinam schemas Ajv com referências verificadas em código. Strings editoriais canônicas não podem ser vazias nem conter somente espaços. Objetos editoriais preservam `additionalProperties: false`, inclusive fonte, alternativas, blocos, recompensa e desbloqueio.

### EditorialMetadata — herdado por Question e SequencePuzzle

| Campo | Tipo | Obrigatório | Finalidade e valores | Exemplo |
| --- | --- | --- | --- | --- |
| `collectionId` | string | Sim | ID não branco existente no catálogo de coleções. | n9-provisional-questions-v1 |
| `pedagogicalOrigin` | string | Sim | Origem pedagógica interna, não vazia/não branca. | Exemplo autoral fictício do protótipo. |
| `courses` | CourseId[] | Sim | Uma ou mais siglas CC/SI/TADS/TGTI/TRC, sem repetição; sem COMUM nesta lista. | ["CC","SI"] |
| `area` | string | Sim | Nome descritivo não branco; ainda não é chave de areas.json. | Algoritmos |
| `competencies` | string[] | Sim | Ao menos um texto não branco, sem duplicação; sem comprovação automática de domínio. | ["Interpretar dados e restrições em situações fictícias."] |
| `difficulty` | Difficulty | Sim | introductory, intermediate ou advanced. | introductory |
| `source` | EditorialSource | Sim | Objeto estrito da tabela seguinte. | {"type":"fictional","description":"Exemplo fictício."} |
| `validationStatus` | ValidationStatus | Sim | provisional-pending-teacher-review, needs-revision, approved-teacher ou rejected. | provisional-pending-teacher-review |


### EditorialSource

| Campo | Tipo | Obrigatório | Finalidade e valores | Exemplo |
| --- | --- | --- | --- | --- |
| `type` | SourceType | Sim | official-reference, institutional, authorial ou fictional. | fictional |
| `description` | string | Sim | Texto não vazio/não branco; descreve a fonte. | Conteúdo fictício do protótipo; pendente de revisão docente. |
| `url` | string | Não | URL absoluta HTTP/HTTPS válida, sem espaços; formato local http-url. Não é buscada na rede. | https://example.invalid/referencia-ficticia |
| `year` | integer | Não | Ano de 1 a 9999; frações e null são rejeitados. | 2026 |
| `documentId` | string | Não | Identificação não branca de documento; não prova autenticidade ou aprovação. | DOC-FICTICIO-01 |


Os opcionais podem estar ausentes. Se estiverem presentes, devem ser válidos; `null` não é aceito. Uma fonte oficial pode omitir URL, ano e identificação: o contrato não obriga um campo declarado opcional. Tipo de fonte não equivale a status de revisão docente.

### Enums compartilhados

| Type / constante | Valores permitidos | Finalidade |
| --- | --- | --- |
| Difficulty / DIFFICULTIES | introductory, intermediate, advanced | Dificuldade editorial reutilizável; não códigos D1/D2/D3 da matriz externa. |
| SourceType / SOURCE_TYPES | official-reference, institutional, authorial, fictional | Natureza da referência. |
| ValidationStatus / VALIDATION_STATUSES | provisional-pending-teacher-review, needs-revision, approved-teacher, rejected | Situação da revisão docente. |
| ContentMode / CONTENT_MODES | example, provisional, pilot, approved | Contexto do catálogo e marcador legado editorialStatus. Não substitui validationStatus. |
| CollectionStatus / COLLECTION_STATUSES | planned, pilot, active, archived | Ciclo de vida da coleção. Não é política automática de publicação. |
| CourseId / COURSE_IDS | CC, SI, TADS, TGTI, TRC | Elegibilidade explícita. |
| Classification / CLASSIFICATIONS | COMUM, CC, SI, TADS, TGTI, TRC | Rótulo de classificação das questões. |
| OptionId / OPTION_IDS | A, B, C, D, E | Alternativa única. |

`validationStatus` é o campo canônico de revisão. Não inferir aprovação a partir de `mode`, `editorialStatus`, `source.type`, `example: false` ou status da coleção. Os validadores aceitam esses estados como dados; **não implementam seleção de conteúdo para publicação**. Isso é necessário para importar material pendente/rejeitado para revisão, sem escondê-lo ou transformá-lo.

## 4. Coleções e cursos

### LearningCollection

| Campo | Tipo | Obrigatório | Finalidade e valores | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | string | Sim | ID não branco, único no catálogo; referência de collectionId. | n9-provisional-sequences-v1 |
| `pedagogicalOrigin` | string | Sim | Descrição interna não branca da origem. | Exemplos autorais fictícios de Sequência Lógica. |
| `status` | CollectionStatus | Sim | planned, pilot, active ou archived. | pilot |


Catálogo canônico em `src/content/collections.json`, array não vazio de objetos estritos:

| id | status atual | Uso |
| --- | --- | --- |
| enade-2026 | planned | Origem editorial interna futura; firstLearningCollection mantém este ID. |
| n9-provisional-questions-v1 | pilot | Exemplos fictícios de questões; todos continuam pendentes. |
| n9-provisional-sequences-v1 | pilot | Exemplos fictícios de sequências; todos continuam pendentes. |

`JsonCollectionRepository` rejeita IDs duplicados, campos desconhecidos e status inválido. `get(id)` retorna coleção ou undefined; `all()` retorna a lista. `validateContent`, `JsonContentRepository` e `JsonPuzzleRepository` aceitam catálogo de coleções por injeção; o default é o catálogo local validado. Coleção inexistente causa erro, sem criação automática.

O status planned/pilot/active/archived não impede a validação de uma referência existente nem altera o que o jogador vê. Habilitar/importar conteúdos aprovados na experiência será outra entrega.

### Course

Todos os campos são obrigatórios em TypeScript: `id: CourseId`, `name: string`, `region: string`. Exemplo existente: `{"id":"CC","name":"Ciência da Computação","region":"Laboratório de Modelos"}`. `src/app/courses.ts` verifica os cinco IDs, contagem e unicidade; não usa Ajv para name/region. Region é rótulo futuro, não ID de mapa.

Courses em questões e puzzles é lista explícita de elegibilidade. COMUM nunca concede acesso automaticamente. As cinco trilhas e a seleção temporária permanecem como antes; não foi criado LearningTrack.

## 5. Questões: formato canônico

### QuestionCatalog

| Campo | Tipo | Obrigatório | Finalidade e valores | Exemplo |
| --- | --- | --- | --- | --- |
| `mode` | ContentMode | Sim | example, provisional, pilot ou approved; preservado como dado editorial. | example |
| `contentVersion` | string | Sim | Identificador de versão não branco; sem literal fixo. | example-1 ou fixture-2.0 |
| `phaseId` | string | Sim | Identificador de fase não branco; sem literal fixo. | FASE-EXEMPLO-01 ou FASE-FICTICIA-02 |
| `questions` | Question[] | Sim | Ao menos uma questão; IDs únicos no catálogo. A contagem jogável é tratada pelo repositório. | 14 exemplos atuais |


Uma fase/catálogo pode ser de uma coleção ou reunir itens de diferentes coleções, desde que cada `collectionId` exista. Não foi acrescentada coleção redundante ao envelope.

### Question — campos próprios, além dos oito metadados obrigatórios

| Campo | Tipo | Obrigatório | Finalidade e valores | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | string | Sim | ID não vazio/não branco, único no catálogo. | EX-COMUM-01 |
| `version` | integer | Sim | Versão da questão, ≥ 1. | 1 |
| `classification` | Classification | Sim | COMUM/CC/SI/TADS/TGTI/TRC; não controla acesso sozinha. | COMUM |
| `example` | boolean | Não | Marcador de compatibilidade. Aceita true ou false; não substitui validationStatus. | true |
| `editorialStatus` | ContentMode | Não | Marcador de compatibilidade: example/provisional/pilot/approved. | example |
| `context` | string | Sim | Situação contextualizada não branca. | No campus fictício Nexo... |
| `prompt` | string | Sim | Enunciado não branco. | Qual conclusão é sustentada por esses dados? |
| `options` | object[] | Sim | Exatamente cinco alternativas com IDs distintos. | Alternativas A–E |
| `options[].id` | OptionId | Sim | A, B, C, D ou E. | B |
| `options[].text` | string | Sim | Texto não vazio/não branco da alternativa. | O portal recebeu 70% dos atendimentos. |
| `correctOptionId` | OptionId | Sim | ID existente em options. | B |
| `explanation` | string | Sim | Explicação geral não branca. | 140 dividido por 200 é 0,70... |
| `feedbackByOption` | Record<OptionId,string> | Sim | Objeto estrito com A/B/C/D/E, cada valor não branco. | Cinco justificativas |
| `feedbackByOption.A/B/C/D/E` | string por letra | Sim | Feedback específico de cada alternativa. | O balcão recebeu 30%... |


`validateContent` normaliza entradas antigas reconhecidas, aplica schema canônico, exige coleção existente, IDs únicos, cinco IDs distintos e gabarito presente. Não descarta campos desconhecidos e não completa metadados parcialmente ausentes de um conteúdo já canônico.

`JsonContentRepository.questionsForCourse` retorna as questões elegíveis na ordem original e exige exatamente **dez para o curso solicitado**, preservando o limite da fase jogável. O contrato editorial aceita catálogos menores para autoria/validação. Uma fase específica de CC não precisa conter itens para os outros quatro cursos; pedir um curso sem dez itens continua falhando. O catálogo atual conserva os mesmos nove compartilhados e um específico por curso.

As novas coleções, fases, versões e estados são suportados no contrato. A GameSession, a UI e o relatório persistido continuam associados à demonstração atual, com seus valores antigos; não foram ligados a uma nova fase nesta etapa.

## 6. Quebra-cabeças: formato canônico

`SequencePuzzle` herda os mesmos oito metadados. O array do catálogo tem pelo menos um item; os testes da entrega preservam exatamente três no conteúdo distribuído. Novos conteúdos usam `collectionId`, não `collection`.

| Campo | Tipo | Obrigatório | Finalidade e valores | Exemplo |
| --- | --- | --- | --- | --- |
| `kind` | literal string | Sim | Somente sequence; não foram criados outros tipos. | sequence |
| `id` | string | Sim | ID não vazio, único no catálogo; mantém chave de recompensa. | seq-algorithm-01 |
| `title` | string | Sim | Título do exemplo, não vazio. | Sequência de um algoritmo |
| `narrative` | string | Sim | Contexto do exercício, não vazio. | O terminal perdeu sua sequência... |
| `blocks` | object[] | Sim | De quatro a sete blocos; IDs únicos. | Cinco blocos |
| `blocks[].id` | string | Sim | ID não vazio, único no exercício. | prepare |
| `blocks[].text` | string | Sim | Comando apresentado, não vazio. | Inicializar o programa e preparar as variáveis. |
| `correctOrder` | string[] | Sim | 4–7 IDs distintos; permutação completa de blocks. | ["prepare","read","check","compute","display"] |
| `hints` | string[] | Sim | Ao menos três textos não vazios e distintos; ordem progressiva. | Dicas existentes |
| `explanation` | string | Sim | Explicação após solução, não vazia. | Neste programa fictício... |
| `reward` | object | Sim | Objeto estrito contendo xp. | {"xp":100} |
| `reward.xp` | integer | Sim | De 1 a 1000; os três exemplos mantêm 100. | 100 |
| `unlocks` | object | Sim | Objeto estrito com mapId/objectId. | {"mapId":"base-n9","objectId":"door"} |
| `unlocks.mapId` | string | Sim | Mapa existente em MAPS. | base-n9 |
| `unlocks.objectId` | string | Sim | Objeto existente no mapa e do tipo door. | door |


A dificuldade aceita introductory/intermediate/advanced; fonte aceita os quatro tipos; status aceita os quatro estados; coleções são resolvidas pelo mesmo catálogo das questões. Fonte e metadados exigem caracteres não brancos. Os outros textos próprios do puzzle preservam a regra anterior de comprimento mínimo; validação editorial de clareza continua responsabilidade docente.

`JsonPuzzleRepository` normaliza `LegacySequencePuzzle`, valida o array canônico, IDs de puzzles e blocos, ordem correta e referência a porta. Metadados não mudam embaralhamento, dicas, acerto, explicação, XP ou desbloqueio.

## 7. Migração e compatibilidade

| Entrada/artefato | Estratégia | Garantia |
| --- | --- | --- |
| Questão antiga sem metadados | LegacyQuestion é reconhecida por schema histórico estrito; adiciona metadados de exemplo em memória. | Nunca promovida a aprovada, sem alterar entrada nem respostas. |
| Puzzle antigo com collection | LegacySequencePuzzle é reconhecido; renomeia collection → collectionId em nova cópia. | IDs, blocos, ordens, dicas, fonte e recompensa preservados. |
| Entrada canônica incompleta | Rejeitada pelo schema; não recebe defaults silenciosos. | Erro de importação não é mascarado como legado. |
| Campos desconhecidos ou aliases misturados | Rejeitados; schemas de ambas as formas são estritos. | Não há remoção silenciosa de atributos nem prioridade ambígua entre collection/collectionId. |
| Catálogo com itens antigos e novos | Cada item é normalizado se reconhecer integralmente o legado; envelope canônico é validado no final. | Permite migração gradual sem ampliar a enumeração de campos. |
| Arquivos provisórios atuais | Questões recebem metadados explicitamente provisórios; puzzles mudam collection para collectionId. | IDs/versões/textos/alternativas/gabaritos/feedbacks/blocos/ordens/dicas/XP/desbloqueios inalterados. |
| Saves locais existentes | Nenhum schema, chave ou adaptador de armazenamento foi alterado. | Sem exclusão, reescrita em leitura, migração destrutiva ou novo XP. |
| Documentos da etapa anterior | estrutura-dados-desafios.md e exemplo-desafios.json foram atualizados e incluídos nesta entrega autorizada. | Não havia commit anterior desses dois arquivos. |

Os schemas `legacy-*.schema.json` preservam os literais **de reconhecimento histórico**. Eles não limitam os contratos canônicos novos. Um legado mantém `example: true` e `editorialStatus: "example"`; a normalização nunca usa o mode do envelope para conceder approved-teacher.

### Metadados acrescentados às questões provisórias

- collectionId: n9-provisional-questions-v1.
- pedagogicalOrigin: exemplos autorais fictícios do protótipo, pendentes de revisão docente.
- area: Raciocínio e competências digitais (exemplos).
- competencies: Interpretar dados e restrições em situações fictícias.
- difficulty: introductory.
- source: fictional, com descrição de exemplo pendente.
- validationStatus: provisional-pending-teacher-review.

Esses descritores genéricos não são códigos oficiais nem mapeamento de competências da matriz. A aplicação de áreas e competências pedagógicas específicas depende de revisão futura. Puzzles mantêm seus metadados descritivos e trocam somente o nome da chave de coleção.

## 8. Progresso, missão atual e experiência preservados

O relatório `ExampleResult` continua com mode example, contentVersion example-1 e phaseId FASE-EXEMPLO-01. Essas restrições de **save da demonstração** não são mais restrições do catálogo editorial. Generalizar a execução/relatório de fases futuras requer outra entrega, sem migrar silenciosamente dados existentes.

| Estrutura | Campos obrigatórios e valores atuais | Persistência |
| --- | --- | --- |
| Answer | questionId:string; questionVersion:number; selectedOptionId:A–E; isCorrect:boolean; feedbackAccessed:boolean. | Em memória. |
| Attempt | id:string; courseAtStart:CourseId; questions:dez Question; answers:Answer[]; index:0–9; selectedOptionId:A–E ou null. | Em memória; não retoma questões incompletas. |
| ExampleResult | schemaVersion:1; contentVersion:example-1; mode:example; phaseId:FASE-EXEMPLO-01; attemptId:string; course:CourseId; total:10; correctCount:0–10; score:0–1000 múltiplo de 100 e igual a acertos×100; completedAt:UTC. | missao-enade:example-result:v1. |
| ExplorationState | schemaVersion:1; mapId:string; position:{x:number,y:number}; missionStatus:available/active/completed; doorUnlocked:boolean. | n9:exploration:v1. |
| PuzzleProgress | schemaVersion:1; entries:Record&lt;ID,SequenceProgress&gt;. | n9:puzzles:v1. |
| SequenceProgress | order:4–7 IDs únicos dos blocos; hintsUsed:0..hints.length; attempts:inteiro ≥0; completed:boolean, true exige attempts>0. | Valor de entries por ID. |
| SequenceAttempt | puzzleId:string; solved:boolean; feedback:none/incorrect/correct; earnedXp:number. | Em memória. |
| SessionState | screen; selectedCourse; attempt; lastResult; saveStatus; contentError; exploration; explorationSaveStatus; puzzleProgress; puzzleAttempt; puzzleSaveStatus; puzzles; worldDialog. | Sessão inteira não serializada. |

selectedCourse, attempt, lastResult, contentError, puzzleAttempt e worldDialog aceitam null nos casos previstos pelo tipo, mas não são propriedades opcionais. worldDialog contém title/message obrigatórios quando não é null. Screen aceita home/course-select/map/question/result/puzzle. SaveStatus aceita none/saved/failed/invalid/unavailable.

O XP de puzzles continua derivado dos IDs concluídos e do reward.xp atual; não há saldo global salvo nem histórico de versão de recompensa. Os valores 100 dos três exemplos e seus IDs foram preservados, evitando alteração dos recibos antigos. Questões mantêm 100 pontos por acerto e 0 por erro, sem soma entre tentativas.

Missão dos dez desafios, feedback e conclusão, liberação da porta por computador ou puzzle, posições e controles não foram modificados. Tipo editorial é independente de autenticação, execução ou certificação de aprendizagem.

## 9. Exemplos completos, fictícios e provisórios

### Questão contextualizada no formato canônico

Cópia do exemplo atual, com os novos metadados. Não é uma questão oficial aprovada.

```json
{
  "id": "EX-COMUM-01",
  "version": 1,
  "classification": "COMUM",
  "courses": [
    "CC",
    "SI",
    "TADS",
    "TGTI",
    "TRC"
  ],
  "example": true,
  "editorialStatus": "example",
  "context": "No campus fictício Nexo, 200 atendimentos foram registrados: 140 pelo portal e 60 no balcão. Cada atendimento foi contado uma vez.",
  "prompt": "Qual conclusão é sustentada por esses dados?",
  "options": [
    {
      "id": "A",
      "text": "O balcão recebeu 70% dos atendimentos."
    },
    {
      "id": "B",
      "text": "O portal recebeu 70% dos atendimentos."
    },
    {
      "id": "C",
      "text": "Os dois canais tiveram a mesma quantidade."
    },
    {
      "id": "D",
      "text": "O portal nunca apresenta dificuldades de acesso."
    },
    {
      "id": "E",
      "text": "Todos os estudantes preferem o portal."
    }
  ],
  "correctOptionId": "B",
  "explanation": "140 dividido por 200 é 0,70. Portanto, o portal recebeu 70% dos atendimentos registrados; os dados não explicam os motivos dessa preferência.",
  "feedbackByOption": {
    "A": "O balcão recebeu 60 de 200 atendimentos, isto é, 30%.",
    "B": "140 de 200 equivale a 70%, exatamente a proporção registrada.",
    "C": "As quantidades são diferentes: 140 e 60.",
    "D": "A quantidade de atendimentos não demonstra ausência de dificuldades.",
    "E": "Os dados contam atendimentos, não a preferência de todos os estudantes."
  },
  "collectionId": "n9-provisional-questions-v1",
  "pedagogicalOrigin": "Exemplos autorais fictícios do protótipo; pendentes de revisão docente.",
  "area": "Raciocínio e competências digitais (exemplos)",
  "competencies": [
    "Interpretar dados e restrições em situações fictícias."
  ],
  "difficulty": "introductory",
  "source": {
    "type": "fictional",
    "description": "Conteúdo fictício do protótipo N9; pendente de revisão docente."
  },
  "validationStatus": "provisional-pending-teacher-review"
}
```

O envelope QuestionCatalog usa `mode:"example"`, `contentVersion:"example-1"`, `phaseId:"FASE-EXEMPLO-01"` e a lista completa de 14 objetos em `src/content/questions/central-nexo.json`. Para autoria, esses três identificadores podem variar conforme o schema; isso não ativa outra fase no jogo.

### Sequência Lógica no formato canônico

O arquivo [exemplo-desafios.json](exemplo-desafios.json) é um array com a cópia completa do exemplo abaixo, válido para JsonPuzzleRepository. Não é um catálogo misto nem é importado pelo jogo.

```json
{
  "kind": "sequence",
  "pedagogicalOrigin": "Exemplo autoral para demonstração de competências tecnológicas; não é conteúdo oficial nem validado.",
  "courses": [
    "CC",
    "SI",
    "TADS",
    "TGTI",
    "TRC"
  ],
  "difficulty": "introductory",
  "reward": {
    "xp": 100
  },
  "unlocks": {
    "mapId": "base-n9",
    "objectId": "door"
  },
  "source": {
    "type": "fictional",
    "description": "Conteúdo fictício produzido para o protótipo N9; pendente de revisão docente."
  },
  "validationStatus": "provisional-pending-teacher-review",
  "id": "seq-algorithm-01",
  "title": "Sequência de um algoritmo",
  "narrative": "O terminal da Base N9 perdeu sua sequência de inicialização. Reorganize este programa fictício de cálculo de média para recuperar o sistema e liberar a passagem.",
  "area": "Algoritmos",
  "competencies": [
    "Reconhecer dependências entre etapas de um algoritmo",
    "Organizar entrada, processamento e saída"
  ],
  "blocks": [
    {
      "id": "prepare",
      "text": "Inicializar o programa e preparar as variáveis."
    },
    {
      "id": "read",
      "text": "Ler as duas notas informadas pelo usuário."
    },
    {
      "id": "check",
      "text": "Validar se as duas entradas são números no intervalo permitido."
    },
    {
      "id": "compute",
      "text": "Calcular a média dos valores validados."
    },
    {
      "id": "display",
      "text": "Exibir a média calculada e encerrar o programa."
    }
  ],
  "correctOrder": [
    "prepare",
    "read",
    "check",
    "compute",
    "display"
  ],
  "hints": [
    "Procure as dependências entre preparação, entrada, processamento e saída.",
    "O cálculo depende de dados já lidos e validados.",
    "A saída usa o valor produzido pelo cálculo; preparar o programa antecede a leitura."
  ],
  "explanation": "Neste programa fictício, a preparação permite a leitura; a validação verifica os dados antes do cálculo, e a exibição usa a média produzida. Esse encadeamento evita processar entradas inválidas. Outros algoritmos podem exigir outras etapas.",
  "collectionId": "n9-provisional-sequences-v1"
}
```

### Missão atual de dez questões e futura missão mista

O computador continua abrindo FASE-EXEMPLO-01. Para CC, a seleção é EX-COMUM-01 até EX-COMUM-09 e EX-CC-01, nessa ordem. Para os demais cursos, os nove COMUM permanecem e o décimo é específico. A conclusão exige dez respostas e dez feedbacks acessados; gera o mesmo relatório e desbloqueio anteriores, sem mínimo de pontos.

A proposta de missão que reúne questão e sequência está integralmente em [especificacao-missao-mista.md](especificacao-missao-mista.md). É **somente documentação**, com exemplo fictício pendente e referências existentes; nenhum código a carrega.

## 10. areas.json e etapas futuras

`areas.json` da raiz e sua cópia em `docs/fontes` continuam documentos de planejamento. Não foram importados por src, convertidos em enums nem ligados automaticamente a area/competencies. Seus campos/contagens históricas não correspondem a conteúdo aprovado do jogo.

A matriz registra código/categoria/nome, cursos relacionados, áreas oficiais, competências por curso/fonte, habilidades, assuntos, prioridades P1/P2/P3, dificuldades D1/D2/D3, pré-requisitos, metas de autoria, evidências, revisão e slots de fases futuras. Possui 39 áreas e seis fases planejadas. Nenhum campo dessa matriz foi tornado obrigatório no conteúdo operacional por inferência.

Próxima integração, mediante autorização: revisar os vínculos pedagógicos; decidir IDs ou nomes canônicos de área/competência; definir catálogo e transformação validada; mapear fontes, cursos e versões; migrar exemplos sem declarar aprovação automaticamente. A simples igualdade de nomes ou siglas não comprova vínculo.

## 11. Limites que permanecem

- Mission, LearningTrack e catálogo de missão mista não existem no runtime.
- Novos estados e fontes aceitos pelo schema não são aprovação docente real nem autorização para publicação.
- Não há parecer por docente/curso/versão, autenticação de documento oficial ou consulta remota de fonte.
- O ciclo de vida da coleção não implementa filtragem de publicação. Não há gate novo que altere os conteúdos mostrados atualmente.
- Área e competências são descrições, sem integridade com areas.json nem prova de domínio.
- A GameSession ainda usa identificadores e relatório fixos da demonstração; a execução de outras fases não foi implementada.
- O efeito de porta continua específico ao código atual; validar uma referência a porta não generaliza a mecânica.
- Não há transação entre os saves nem recompensa versionada. As garantias desta migração dependem de preservar IDs e recompensas, o que foi verificado.
- Dados legados reconhecidos são normalizados na leitura de conteúdo, não regravados como progresso. Versões futuras desconhecidas de save continuam protegidas pelos adaptadores existentes.

## 12. Verificação e escopo

A suíte cobre questões aprovadas/pendentes, puzzles aprovados, três dificuldades, quatro tipos de fonte e estados, opcionais de fonte, URL oficial fictícia, coleção inexistente, competências vazias/brancas, cursos/status inválidos, IDs duplicados e campos desconhecidos. Também compara hashes dos campos pedagógicos com a base anterior e restaura recibos/relatório sem escrita.

O build executa TypeScript e os testes de contrato (incluindo editorial.test.ts) antes do bundle Vite. Toda a suíte Vitest/DOM, lint e os testes de navegador são executados nesta entrega. Os resultados finais são registrados no backlog.

Interface, estilos, cenas, mapa, GameSession, regras puras de progressão/pontuação e todos os adaptadores/schemas de armazenamento ficam sem alterações. Nenhuma publicação ou envio ao GitHub.

### Resultado final das verificações

- Vitest: **143 testes aprovados**, em 12 arquivos (unidade e integração DOM).
- Lint e TypeScript: aprovados.
- Compilação: aprovada; inclui **71 testes de contrato**, em três arquivos, antes do bundle Vite.
- Playwright/Chromium: **52 testes aprovados**, em computador e celular emulado, incluindo todos os cinco cursos, exploração, questões, sequências, salvamento e repetição sem XP adicional.
- Os dois exemplos JSON deste documento e o JSON externo foram conferidos com os conteúdos canônicos; os repositórios validaram o exemplo documental.
- Referências do exemplo de missão mista foram conferidas como documentação, sem carregamento pelo jogo.
- Comparação de Git confirmou ausência de alterações em UI, estilos, cenas, mapa, GameSession, regras puras de pontuação/progressão, adaptadores/schemas de armazenamento, areas.json e docs/fontes.
- Commit local solicitado: `refactor: generaliza contratos editoriais dos desafios`. Nada publicado ou enviado ao GitHub.
