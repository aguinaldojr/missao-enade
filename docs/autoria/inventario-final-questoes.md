# N9 — Jornada Digital: inventário final das questões

Auditoria documental assistida por IA — 18/11/2026. Este relatório consolida o estado encontrado depois da autoria ampliada. Não cria ou reescreve conteúdo, não altera gabaritos, não gera JSON e não integra itens ao jogo.

## 1. Resumo executivo

**Decisão: APTO COM CORREÇÕES OBJETIVAS.**

Foram identificadas **205 questões documentadas únicas** e **oito puzzles únicos**. O catálogo executável contém **66 questões** e os mesmos **oito puzzles**; portanto, **139 questões existem somente em Markdown**. Não há ID duplicado entre as 205 questões nem entre os oito puzzles. Há versões históricas e candidatas dos mesmos IDs, mas elas estão identificadas como evolução editorial, não como itens adicionais.

O volume autoral é suficiente para interromper a criação de questões. Entretanto, o jogo ainda não pode oferecer a composição pretendida de **25 questões (cinco comuns e vinte técnicas)**:

- o runtime oferece somente modos de 3, 5, 10 e 20 questões;
- o seletor aceita como técnica apenas uma questão cuja `classification` seja exatamente igual ao curso;
- a elegibilidade multcurso proposta nas matrizes ainda não foi formalizada em todos os objetos;
- 139 questões ainda não foram convertidas nem validadas pelos schemas;
- a documentação central ainda descreve majoritariamente o plano antigo de 60 questões e seis puzzles.

Não se recomenda criar novo conteúdo antes de resolver essas correções. Para TRC, sete elegibilidades técnicas adicionais precisam ser formalizadas a partir do banco existente; somente se essa análise rejeitar os compartilhamentos será necessário redigir itens novos.

## 2. Fontes examinadas e regra de contagem

Foram examinados integralmente a governança editorial, o plano da coleção, o padrão editorial, arquitetura, backlog, estrutura de dados, mapeamento por curso, lotes de autoria, matrizes de capacidade, auditorias, correções, JSON executáveis, contratos, schemas, normalizadores, repositórios, seletor e testes.

Para evitar dupla contagem, o inventário considera como definição autoral:

- `lote-comum-01.md`, `lote-comum-02.md` e `lote-si-comum-adicional.md`;
- os lotes específicos originais de CC, SI, TADS, TGTI e TRC;
- todos os lotes `ampliacao`, `lacunas`, `complemento` e `lote-si-m*`;
- os três lotes compartilhados;
- os documentos dos puzzles complementares.

Auditorias, matrizes, planos e candidatas são evidências ou versões, não novos itens. `E26-Q-SI-02` e `E26-Q-SI-05` continuam sendo dois IDs; suas candidatas autorizadas correspondem às versões executáveis atuais. O mesmo princípio vale para a modernização de `E26-P-COM-01` e a substituição de `E26-P-SI-01`.

## 3. Inventário geral

| Tipo | Documentado | Executável | Somente documental | IDs únicos |
|---|---:|---:|---:|---:|
| Questões | 205 | 66 | 139 | 205 |
| Puzzles `sequence` | 8 | 8 | 0 | 8 |
| **Total de desafios** | **213** | **74** | **139** | **213** |

### 3.1 Questões por origem editorial

| Origem do ID | Faixa completa | Quantidade | Executáveis | Somente Markdown |
|---|---|---:|---:|---:|
| Comum | `E26-Q-COM-01`–`E26-Q-COM-15` | 15 | 10 | 5 |
| CC | `E26-Q-CC-01`–`E26-Q-CC-30` | 30 | 10 | 20 |
| SI | `E26-Q-SI-01`–`E26-Q-SI-82` | 82 | 16 | 66 |
| TADS | `E26-Q-TADS-01`–`E26-Q-TADS-15` | 15 | 10 | 5 |
| TGTI | `E26-Q-TGTI-01`–`E26-Q-TGTI-16` | 16 | 10 | 6 |
| TRC | `E26-Q-TRC-01`–`E26-Q-TRC-47` | 47 | 10 | 37 |
| **Total** | — | **205** | **66** | **139** |

As seis faixas são contínuas: não há lacuna numérica dentro de COM-01–15, CC-01–30, SI-01–82, TADS-01–15, TGTI-01–16 ou TRC-01–47.

### 3.2 Situação editorial

| Recorte | `under-ai-review` | `ready-for-pilot` | Outros estados |
|---|---:|---:|---:|
| Questões executáveis | 64 | 2 | 0 |
| Questões somente documentais | 139 | 0 | 0 |
| Puzzles | 8 | 0 | 0 |

Os dois itens `ready-for-pilot` são `E26-Q-SI-02` e `E26-Q-SI-05`. O estado não representa aprovação docente ou institucional. Registros antigos com `provisional-pending-teacher-review` são lidos como `under-ai-review` pelo normalizador atual.

### 3.3 Puzzles

| ID | Curso(s) | Situação | Observação |
|---|---|---|---|
| `E26-P-COM-01` | todos | executável, modernizado | recuperação controlada; 100 XP |
| `E26-P-CC-01` | CC | executável | sequência específica de CC |
| `E26-P-SI-01` | SI | executável, substituído pela versão Aurora | fluxo integrado de reserva |
| `E26-P-SI-02` | SI | executável | cinco blocos de função C17 |
| `E26-P-SI-03` | SI | executável | cinco blocos de programa C17 completo |
| `E26-P-TADS-01` | TADS | executável | sequência específica de TADS |
| `E26-P-TGTI-01` | TGTI | executável | sequência específica de TGTI |
| `E26-P-TRC-01` | TRC | executável | sequência específica de TRC |

Os puzzles permanecem fora da contagem das 25 questões. CC, TADS, TGTI e TRC possuem dois puzzles executáveis elegíveis; SI possui quatro.

## 4. Fontes autorais por faixa

| IDs | Arquivo de origem principal | Situação de conversão |
|---|---|---|
| COM-01–05 | `lote-comum-01.md` | executável; versões visuais mais novas no JSON |
| COM-06–10 | `lote-comum-02.md` | executável; versões visuais mais novas no JSON |
| COM-11–15 | `lote-si-comum-adicional.md` | somente documental |
| CC-01–10 | `lote-especifico-cc.md` | executável |
| CC-11–15 | `lote-compartilhado-01-arquitetura-fundamentos.md` | somente documental; multcurso explícito |
| CC-16–20 | `lote-especifico-cc-ampliacao-01-sistemas-grafos.md` | somente documental; multcurso explícito |
| CC-21–25 | `lote-especifico-cc-ampliacao-02-teoria-compiladores-visual.md` | somente documental |
| CC-26–30 | `lote-especifico-cc-ampliacao-03-lacunas.md` | somente documental |
| SI-01–10 | `lote-especifico-si.md` | executável; SI-02/SI-05 e apresentações possuem versões posteriores |
| SI-11–16 | `lote-si-m03-fundamentos-sistemas.md` | executável |
| SI-17–20 | `lote-si-m01-raciocinio-quantitativo.md` | somente documental |
| SI-21–23 | `lote-si-m02-algoritmos-programacao.md` | somente documental |
| SI-24–25 | `lote-si-m04-arquitetura-governanca.md` | somente documental |
| SI-26–29 | `lote-si-m05-infraestrutura-distribuidos.md` | somente documental |
| SI-30–33 | `lote-si-m07-processos-informacao.md` | somente documental |
| SI-34–38 | `lote-si-m08-ihc-seguranca.md` | somente documental |
| SI-39–40 | `lote-si-m09-dados.md` | somente documental |
| SI-41–46 | `lote-si-m10-informatica-sociedade.md` | somente documental |
| SI-47–53 | `lote-si-ampliacao-cobertura-parcial.md` | somente documental |
| SI-54–65 | `lote-si-ampliacao-lacunas-classicas.md` | somente documental |
| SI-66–70 | `lote-si-lacunas-prioritarias-01-dados-privacidade.md` | somente documental |
| SI-71–75 | `lote-si-lacunas-prioritarias-02-engenharia-bancos.md` | somente documental |
| SI-76–80 | `lote-si-lacunas-prioritarias-03-algoritmos-seguranca.md` | somente documental |
| SI-81–82 | `lote-si-complemento-quarta-partida-m01.md` | somente documental |
| TADS-01–10 | `lote-especifico-tads.md` | executável |
| TADS-11–15 | `lote-especifico-tads-ampliacao-01-empreendedorismo-processo.md` | somente documental |
| TGTI-01–10 | `lote-especifico-tgti.md` | executável |
| TGTI-11–15 | `lote-compartilhado-03-projetos-responsabilidade.md` | somente documental; multcurso explícito |
| TGTI-16 | `lote-especifico-tgti-ampliacao-01-gestao-pessoas.md` | somente documental |
| TRC-01–10 | `lote-especifico-trc.md` | executável |
| TRC-11–15 | `lote-compartilhado-02-redes-distribuidos.md` | somente documental; multcurso explícito |
| TRC-16–20 | `lote-especifico-trc-ampliacao-01-fundamentos-modelos.md` | somente documental |
| TRC-21–30 | `lote-especifico-trc-ampliacao-02-acesso-projeto-automacao.md` | somente documental |
| TRC-31–40 | `lote-especifico-trc-ampliacao-03-modelos-comutacao-servicos.md` | somente documental |
| TRC-41–47 | `lote-especifico-trc-ampliacao-04-wan-emergentes-sustentabilidade.md` | somente documental |

## 5. Dificuldades e gabaritos do banco autoral

| Origem | Introductory | Intermediate | Advanced | Total | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| COM | 7 | 5 | 3 | 15 | 3 | 3 | 3 | 4 | 2 |
| CC | 12 | 15 | 3 | 30 | 6 | 6 | 6 | 6 | 6 |
| SI | 23 | 36 | 23 | 82 | 15 | 17 | 17 | 16 | 17 |
| TADS | 5 | 8 | 2 | 15 | 3 | 3 | 4 | 2 | 3 |
| TGTI | 5 | 8 | 3 | 16 | 2 | 5 | 3 | 3 | 3 |
| TRC | 19 | 25 | 3 | 47 | 9 | 9 | 10 | 10 | 9 |
| **Total** | **71** | **97** | **37** | **205** | **38** | **43** | **43** | **41** | **40** |

As letras estão globalmente equilibradas; não devem ser alteradas para obter simetria. O banco SI tem 23 avançadas, mas uma partida não deve reproduzir essa proporção. Para uma sessão voluntária de 25 itens, recomenda-se compor **9–10 introdutórias, 12–13 intermediárias e no máximo 2–3 avançadas**, preservando as classificações individuais.

## 6. Elegibilidade explícita encontrada

Esta tabela usa somente `courses` declarado nas fichas ou a origem exclusiva quando a ficha ainda não possui elegibilidade multcurso. Não inclui compartilhamentos apenas sugeridos em matrizes.

| Curso | Comuns | Técnicas explícitas | Total elegível documental | I / M / A no total | Partidas de 25 sem repetir nenhum ID entre partidas |
|---|---:|---:|---:|---|---:|
| CC | 15 | 40 | 55 | 22 / 25 / 8 | 2 |
| SI | 15 | 102 | 117 | 39 / 50 / 28 | 3; uma quarta exige repetir cinco comuns |
| TADS | 15 | 40 | 55 | 23 / 24 / 8 | 2 |
| TGTI | 15 | 30 | 45 | 16 / 21 / 8 | 1 |
| TRC | 15 | 53 | 68 | 29 / 32 / 7 | 2 |

O limite comum é 15: três grupos distintos de cinco. A quarta partida de SI poderá usar vinte técnicas ainda não vistas, mas deverá reutilizar cinco comuns de maneira equilibrada, conforme a decisão do projeto.

### 6.1 Capacidade planejada nas matrizes

| Curso | Técnicas após os compartilhamentos planejados | Meta | Situação documental |
|---|---:|---:|---|
| CC | 95 | 60 para três partidas | suficiente; 35 reservas, mas elegibilidade ainda não está em todos os objetos |
| SI | 102 explicitamente elegíveis | 80 para quatro partidas | suficiente; quarta partida reutiliza comuns |
| TADS | 60 | 60 para três partidas | capacidade exata; compartilhamentos precisam ser formalizados |
| TGTI | 63 | 60 para três partidas | suficiente; três reservas |
| TRC | 53 explicitamente elegíveis | 60 para três partidas | faltam formalizar sete compartilhamentos ou, se rejeitados, criar sete itens |

As matrizes de CC, TADS e TGTI já apresentam alocação por inciso. SI possui núcleo de seis itens por macroárea e grande reserva adicional. TRC encerrou a autoria, mas não recebeu uma matriz consolidada equivalente; essa ausência impede afirmar que suas 53 técnicas explícitas cobrem três vezes todos os 19 objetos.

## 7. Cobertura por curso

### 7.1 CC — Portaria 157/2026

| Inciso | Área | Candidatas planejadas | Situação para três partidas |
|---:|---|---:|---|
| I | Algoritmos e estruturas de dados | 5 | suficiente |
| II | Engenharia de software | 13 | excesso editorial |
| III | Interação humano-computador | 3 | exata |
| IV | Ética, computação e sociedade | 8 | reserva ampla |
| V | Sistemas digitais | 3 | exata |
| VI | Organização e arquitetura | 4 | suficiente |
| VII | Sistemas operacionais | 7 | reserva ampla |
| VIII | Lógica e matemática discreta | 3 | exata |
| IX | Fundamentos e técnicas de programação | 3 | exata |
| X | Paradigmas de linguagens | 4 | suficiente |
| XI | Redes de computadores | 4 | suficiente |
| XII | Inteligência artificial | 3 | exata |
| XIII | Bancos de dados | 9 | excesso editorial |
| XIV | Computação gráfica e imagens | 3 | exata |
| XV | Teoria dos grafos | 3 | exata |
| XVI | Probabilidade e estatística | 4 | suficiente |
| XVII | Sistemas distribuídos | 4 | suficiente |
| XVIII | Teoria da computação | 3 | exata |
| XIX | Compiladores | 3 | exata |
| XX | Segurança da informação | 6 | suficiente |

Não criar mais questões de CC. A próxima ação é materializar `courses`, F06 e localizadores nos compartilhamentos escolhidos.

### 7.2 SI — Portaria 168/2026

O núcleo auditado possui seis técnicas em cada macroárea, totalizando 60. As 36 questões SI-47–82 e os compartilhamentos posteriores formam reserva; sua alocação primária ainda precisa ser normalizada antes do JSON.

| Macroárea | Núcleo já auditado | Reservas principais posteriores |
|---|---:|---|
| SI-M01 — raciocínio quantitativo | 6 | SI-81–82 |
| SI-M02 — algoritmos e programação | 6 | SI-52, SI-77–79 |
| SI-M03 — fundamentos de sistemas | 6 | SI-47–50, conforme área primária a confirmar |
| SI-M04 — arquitetura e governança | 6 | SI-51, SI-54–57 |
| SI-M05 — infraestrutura e distribuídos | 6 | SI-58, SI-60–61, SI-65 |
| SI-M06 — engenharia, modelagem e projetos | 6 | SI-53, SI-59, SI-63–64, SI-71–74 |
| SI-M07 — processos e informação | 6 | SI-49 e sistemas empresariais, conforme alocação final |
| SI-M08 — IHC e segurança | 6 | SI-70 e SI-80 |
| SI-M09 — dados | 6 | SI-62, SI-66–68, SI-75–76 |
| SI-M10 — informática e sociedade | 6 | SI-69–70, com área primária a normalizar |

SI possui volume para quatro partidas técnicas distintas. A quarta partida deve repetir somente as cinco comuns, não as vinte técnicas.

### 7.3 TADS — Portaria 169/2026

Os vinte incisos possuem três candidatas planejadas cada, totalizando exatamente 60 técnicas. O lote TADS-11–15 fechou empreendedorismo, gerência de configuração e processo de software. Não há margem editorial depois de escolher três itens por área; qualquer rejeição exigirá usar reserva compatível ainda não alocada ou criar substituta.

### 7.4 TGTI — Portaria 171/2026

Os 16 objetos possuem pelo menos três candidatas. Quatro reforços por partida completam as vinte técnicas. O banco planejado possui 63 técnicas: 48 cobrem os 16 objetos em três partidas, 12 são reforços e três permanecem como reserva. `E26-Q-TGTI-16` fechou gestão de pessoas.

### 7.5 TRC — Portaria 172/2026

| Incisos | Cobertura nativa/documental | Situação |
|---|---|---|
| I–III | componentes/topologias, transmissão e modelos | duas, duas e três questões nativas | I e II precisam de compartilhamento |
| IV–VI | TCP/IP, roteamento e IEEE 802.x | três por objeto com TRC-11–12 e ampliações | suficiente |
| VII–VIII | sem fio e cabeamento | três e quatro | suficiente |
| IX–XI | administração, serviços e virtualização | cobertura nativa desigual | requer mapeamento de itens compartilhados |
| XII | programação e automação | três | suficiente |
| XIII | segurança da informação | cobertura nativa insuficiente | usar itens de segurança já existentes após validar F10/XIII |
| XIV–XV | projeto e configuração | três ou mais | suficiente |
| XVI | gerenciamento de redes | cobertura nativa limitada | requer compartilhamento/realocação |
| XVII | WAN | três | suficiente |
| XVIII | tecnologias emergentes | três | suficiente |
| XIX | sustentabilidade | uma nativa | complementar com itens socioambientais compatíveis |

Os localizadores XI = virtualização e XIII = segurança permanecem corretos. É necessária uma matriz conservadora de 60 IDs, sem contar a mesma questão em duas áreas, antes da conversão.

## 8. Composição recomendada das partidas

Quando houver mais de vinte assuntos técnicos, a regra “uma questão por assunto” é impossível. A unidade obrigatória deve ser a área ou macroárea oficial; subtópicos entram em rotação.

| Curso | Cobertura técnica por partida de 20 |
|---|---|
| CC | uma questão de cada um dos 20 incisos |
| SI | duas questões de cada uma das 10 macroáreas |
| TADS | uma questão de cada um dos 20 incisos |
| TGTI | uma de cada um dos 16 incisos + quatro reforços rotativos |
| TRC | uma de cada um dos 19 incisos + um reforço rotativo |

Cada partida recebe ainda cinco comuns, distribuídas entre formação geral, leitura de evidências, comunicação, sustentabilidade e fundamentos tecnológicos. Puzzles continuam como interações independentes.

## 9. Recursos visuais e técnicos

O catálogo executável possui apresentação estruturada em 26 das 66 questões:

| Recurso executável | Blocos |
|---|---:|
| Imagem local | 4 |
| Diagrama | 12 |
| Tabela | 14 |
| Código | 6 |
| **Total** | **36** |

Os seis blocos de código atuais são dois SQL e quatro de texto/log. Ainda não há questão executável com bloco de código marcado como C ou Python, embora os documentos proponham C, Python, pseudocódigo e SQL. Existem quatro SVGs locais: COM-01, COM-03, COM-08 e SI-07.

O contrato atual já suporta `code` (`sql`, `c`, `python`, `text`), `table`, `diagram` e `image`. Painéis, dashboards, matrizes e gráficos dos lotes devem ser convertidos para esses tipos, sempre com descrição textual. Não é necessário criar uma segunda arquitetura visual.

Riscos para a conversão:

- tabelas largas precisam de rolagem e equivalente linear no celular;
- diagramas precisam de `description`, nós e arestas válidos;
- imagens precisam de `alt` suficiente e caminho relativo ao `base` do Vite;
- código funcional deve ser executado ou validado no dialeto indicado;
- gráficos não podem depender somente de cor;
- objetos editoriais descritos livremente em Markdown precisam ser normalizados sem perder valores, unidades e fontes.

## 10. Compatibilidade com contratos e schemas

Os contratos aceitam os cinco cursos, três dificuldades, cinco alternativas A–E, múltiplas fontes com exatamente uma `primary`, rastreabilidade e os seis estados da governança por IA. `additionalProperties: false` permanece apropriado.

Os 66 JSON atuais e os oito puzzles passam pelos schemas. Os 139 itens documentais ainda **não** foram reconstruídos integralmente em memória pelos testes existentes. O teste documental atual cobre a coleção executável e SI-M03, não todos os novos lotes. Portanto, a presença de campos no Markdown não equivale a validação contra o schema.

Perdas possíveis na conversão se ela for feita sem normalização dedicada:

- elegibilidade multcurso e seus localizadores normativos;
- fontes complementares e técnicas;
- área primária versus assunto secundário;
- descrição acessível de recursos;
- versão candidata/substituída;
- dialeto de código e resultados de execução;
- objetivo e título de rastreabilidade.

## 11. Versões e fontes de verdade

| IDs | Fonte que deve prevalecer na futura conversão |
|---|---|
| COM-01–10 | JSON atual + documentos de melhorias visuais; os lotes originais preservam histórico |
| SI-01–10 | JSON atual + melhorias de SI; SI-02/SI-05 usam as candidatas autorizadas |
| SI-11–16 | JSON atual derivado do lote M03 |
| P-COM-01 | JSON modernizado; documento original é histórico |
| P-SI-01 | JSON da versão Laboratório Aurora |
| P-SI-02/P-SI-03 | JSON atual e documentos próprios |
| Demais IDs | lote documental indicado na seção 4 |

Nenhum arquivo antigo deve ser apagado. A integração deve complementar o catálogo e registrar a versão canônica, sem carregar simultaneamente versões antigas do mesmo ID.

## 12. Achados

| Código | Gravidade | Arquivos/IDs | Problema e evidência | Correção recomendada | Revisão editorial por IA |
|---|---|---|---|---|---|
| INV-01 | bloqueador | `missions.ts`, `QuestionSelection.ts` | não existe modo 25; seletor exige `classification === course` e impede compartilhamento multcurso na cota técnica | criar missão 25 (5+20) e selecionar por elegibilidade/área sem cruzar cursos | sim, para regra de elegibilidade |
| INV-02 | bloqueador | 139 IDs documentais | somente 66/205 questões estão em JSON | converter em lote após resolver fontes de verdade e elegibilidade | sim, segunda passagem em memória |
| INV-03 | alta | CC/TADS/TGTI/TRC compartilhados | matrizes propõem 95/60/63 técnicas, mas muitos objetos ainda não declaram o curso em `courses` | formalizar curso, fonte normativa complementar e localizador por item | sim |
| INV-04 | alta | TRC | há 53 técnicas explicitamente elegíveis, sete abaixo das 60 necessárias | montar matriz conservadora e escolher sete compartilhamentos existentes; criar novas somente se forem rejeitados | sim |
| INV-05 | alta | testes/conversor | testes documentais não incluem todos os 139 itens novos | ampliar parser/conversor e validar cinco alternativas, gabarito, feedbacks, fontes e traceability | não para a estrutura; sim para ambiguidades |
| INV-06 | alta | plano, mapeamento, backlog | documentos centrais ainda afirmam 60/66 ou 66 questões, enquanto há 205 documentadas e oito puzzles | atualizar referências somente após fechar a matriz canônica | não |
| INV-07 | média | SI-47–82 | reservas possuem tópicos claros, mas nem todas têm macroárea primária consolidada em uma matriz final | atribuir uma única macroárea primária e manter secundárias na rastreabilidade | sim |
| INV-08 | média | recursos propostos | 179 questões não possuem apresentação estruturada executável; documentos usam painel/gráfico/fluxo livre | mapear para os quatro tipos existentes, sem criar novos tipos por padrão | não, salvo perda pedagógica |
| INV-09 | média | código C/Python/SQL | nem todo snippet documental foi executado no ambiente local; o runtime tem apenas SQL/texto em questões | executar testes por linguagem/dialeto e registrar resultado antes do JSON | sim para interpretação do resultado |
| INV-10 | média | partida longa | 25 itens podem se tornar cansativos; não existe retomada de respostas da missão incompleta | manter 25, mas planejar blocos, mapa/pausa e retomada sem alterar conteúdo | não nesta etapa |
| INV-11 | baixa | documentação histórica | permanecem menções a revisão docente e estados legados | preservar como histórico e normalizar somente na leitura | não |
| INV-12 | baixa | todos | cotejo externo de originalidade, PPC, calibração com estudantes e homologação NVDA/VoiceOver não foram realizados | manter como pendências externas, sem alegar validação | sim, sem substituir teste humano |

Contagem: **2 bloqueadores, 4 altas, 4 médias e 2 baixas**.

## 13. Itens aprovados estruturalmente

- 205 IDs de questão contínuos e únicos.
- Oito IDs de puzzle únicos.
- 66 questões e oito puzzles executáveis aceitos pelos schemas.
- Cinco alternativas, gabarito e feedbacks preservados no catálogo atual.
- Oito puzzles com cinco blocos, três dicas, recompensa idempotente e solução testada.
- Contrato visual capaz de representar código, tabela, diagrama e imagem.
- Governança por IA ativa sem afirmação de aprovação institucional.
- Banco documental quantitativamente amplo; não há justificativa para continuar autoria antes da integração.

## 14. Pendências externas

- conferir originais e eventuais retificações das Portarias;
- confrontar disciplinas sugeridas com PPCs vigentes;
- realizar cotejo externo independente de originalidade;
- observar tempo, dificuldade, engajamento e distratores com estudantes;
- homologar acessibilidade com NVDA, VoiceOver e dispositivos reais;
- decidir `ready-for-release` somente depois do piloto.

## 15. Decisão e sequência recomendada

**APTO COM CORREÇÕES OBJETIVAS.** Não criar mais questões agora.

Próximo escopo recomendado:

1. consolidar a matriz canônica de elegibilidade, especialmente os sete compartilhamentos de TRC;
2. escolher os 60 técnicos de cada curso para três partidas e os 80 de SI para quatro;
3. formalizar `courses`, área primária, fontes e localizadores;
4. configurar somente a missão fixa de 25, com cinco comuns e vinte técnicas;
5. adaptar o seletor para áreas e histórico recente, mantendo determinismo testável;
6. converter os 139 itens documentais sem reescrever conteúdo;
7. executar uma única auditoria, integração e suíte completa de testes.

Capacidade real antes dessas correções:

- catálogo executável: **nenhum curso** atende 5 comuns + 20 técnicas;
- banco documental explícito: CC 2 partidas, SI 3 distintas mais uma quarta com comuns repetidas, TADS 2, TGTI 1 e TRC 2;
- após formalizar as matrizes planejadas: CC 3, SI 4, TADS 3, TGTI 3; TRC chega a 3 somente após resolver sete elegibilidades.

Nenhum conteúdo foi publicado ou enviado a serviço remoto.
