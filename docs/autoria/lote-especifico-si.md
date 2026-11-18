# N9 — Jornada Digital: lote específico de Sistemas de Informação

Autoria editorial — 13/11/2026, horário de Brasília. Versão documental 1.1. **Todos os onze itens permanecem provisional-pending-teacher-review.** Autoria assistida por IA; responsável humano pela consolidação a designar. Situações, organizações, registros, valores e capacidades são fictícios. N9 é nome provisório sujeito à aprovação institucional. Não há chancela do Inep nem declaração de produto oficial.

Escopo: E26-Q-SI-01–10 e E26-P-SI-01. Somente este Markdown é criado. Não se produz JSON, importação, implementação, conteúdo executável ou alteração de progresso. Os lotes comuns e de CC permanecem intactos.

## 1. Conferência prévia, matriz de SI e cálculo das cotas

Leitura integral do [plano v2.0](../plano-colecao-enade-2026.md), [padrão editorial](padrao-editorial-piloto.md), [lote comum 01](lote-comum-01.md), [lote comum 02](lote-comum-02.md) e [lote específico de CC](lote-especifico-cc.md). Contratos atuais confrontados: Question, EditorialMetadata e SequencePuzzle; schemas question/editorial/puzzles; validadores/repositórios, catálogo de coleções e referências de desbloqueio. Git inicialmente limpo em 5e298c8.

As seções 11.4 e 11.8 do plano governam os slots. O objetivo de cada questão é respeitado sem presumir que responder alternativas equivale a executar toda a atividade profissional. A competência individual do slot prevalece sobre a síntese genérica da área: Q05 usa SI-II dentro de SI-04; Q10 associa SI-I e SI-II. Os rótulos SI-I/II são sínteses documentais internas, não novos códigos oficiais.

### Referência normativa principal: somente F07/SI

**Portaria Inep 168/2026**, de 14/04/2026, é a fonte principal dos onze itens. A consulta desta autoria recuperou sua reprodução na Ufopa, incluindo os arts. 5º–6º; o endereço do DOU retornou 502. Resultados, URLs e limites estão na seção 14.

Os localizadores são próprios dessa portaria: por exemplo, banco de dados está no art. 6º, XVIII; pesquisa operacional no V; visualização e ciência de dados no XIX; processos no XV; governança no VIII. Não se transpõe numeração de outra matriz. A competência I corresponde à avaliação de soluções de TI em contextos organizacionais e sociais; a II, à gestão de dados, informação e conhecimento para decisão. As fichas registram separadamente habilidades e objetos de SI.

### Distribuição calculada antes da redação

| Conjunto documental | introductory | intermediate | advanced | Questões |
|---|---:|---:|---:|---:|
| Comuns 01: Q-COM-01–05 | 4 | 1 | 0 | 5 |
| Comuns 02: Q-COM-06–10 | 0 | 3 | 2 | 5 |
| Dez comuns já redigidas | 4 | 4 | 2 | 10 |
| Meta de vinte elegíveis em SI | 7 | 9 | 4 | 20 |
| Necessário nas específicas: meta menos comuns | 7 − 4 = 3 | 9 − 4 = 5 | 4 − 2 = 2 | 10 |
| Específicas deste lote | 3 | 5 | 2 | 10 |
| Comuns mais específicas de SI | 7 | 9 | 4 | 20 |

Q-SI-01–03: introductory; Q-SI-04–08: intermediate; Q-SI-09–10: advanced. P-SI-01 é sequence intermediate, separado da cota de questões. O puzzle comum é introductory; SI tem dois puzzles elegíveis documentalmente, sem somá-los às vinte questões. Elegibilidade proposta e redação não significam aprovação ou disponibilidade no jogo.

### Slots, objetivos e fontes conferidos

| ID | Área / síntese | Conteúdo planejado | Dificuldade | Objetivo do plano | Fonte principal |
|---|---|---|---|---|---|
| E26-Q-SI-01 | SI-01 — Arquitetura corporativa, informação e governança / SI-I | Arquitetura de negócio e objetivos | introductory | Relacionar componente da solução à necessidade organizacional. | F07 |
| E26-Q-SI-02 | COMUM-TEC10 — Bancos de dados / SI-II | Consulta e organização de informação | introductory | Identificar resultado de consulta simples para demanda definida. | F07 |
| E26-Q-SI-03 | SI-02 — Sistemas de informação e processos de negócio / SI-I | Pessoas, processos e informação | introductory | Identificar gargalo sustentado por fluxo informacional fornecido. | F07 |
| E26-Q-SI-04 | SI-02 — Sistemas de informação e processos de negócio / SI-I | Redesenho de processo de negócio | intermediate | Comparar mudanças e seus efeitos em responsabilidades e informação. | F07 |
| E26-Q-SI-05 | SI-04 — Concepção e projetos de sistemas de informação / SI-II | Modelagem de dados para demanda organizacional | intermediate | Selecionar modelo que preserve relações e restrições do processo. | F07 |
| E26-Q-SI-06 | SI-01 — Arquitetura corporativa, informação e governança / SI-I | Governança e arquitetura da informação | intermediate | Comparar decisões de responsabilidade e uso da informação. | F07 |
| E26-Q-SI-07 | SI-03 — Dados para decisão e pesquisa operacional / SI-II | Visualização e ciência de dados | intermediate | Selecionar conclusão apoiada em visualização e limites da base. | F07 |
| E26-Q-SI-08 | SI-04 — Concepção e projetos de sistemas de informação / SI-I | Qualidade de solução de SI e projeto | intermediate | Comparar evidências de qualidade com necessidade organizacional. | F07 |
| E26-Q-SI-09 | SI-03 — Dados para decisão e pesquisa operacional / SI-II | Pesquisa operacional e decisão sob restrições | advanced | Selecionar alocação viável integrando capacidade, demanda e objetivo. | F07 |
| E26-Q-SI-10 | SI-04 — Concepção e projetos de sistemas de informação / SI-I e SI-II | Desempenho, escalabilidade e qualidade da informação | advanced | Selecionar arquitetura integrando carga, consistência e necessidade social. | F07 |
| E26-P-SI-01 | SI-02 — Sistemas de informação e processos de negócio / SI-I | Processo informacional com cinco etapas estritamente dependentes | intermediate | Ordenar responsabilidades e circulação de informação por pré-condições explícitas. | F07 |

Todos os itens: courses somente SI; collectionId enade-2026; source.type official-reference. As questões preservam seus estados já registrados. O puzzle permanece `under-ai-review`, kind sequence e passa à versão editorial documental 2, sem novo campo version em SequencePuzzle.

### Camadas de evidência e limites dos contratos

- **Referência oficial:** F07 sustenta o domínio e as competências/objetos de SI, não os casos, números ou respostas autorais.
- **Apoio primário complementar:** capítulo de Adrienne Watt em BCcampus para associações/chaves e orientação da Government Analysis Function para escalas de barras; leitura dirigida e localizadores na seção 14.
- **Histórico:** registros analíticos locais foram lidos; nenhum caderno de prova anterior foi selecionado, copiado ou superficialmente adaptado.
- **Inferência/autoria:** recortes, cenários, regras locais, alternativas, feedbacks, estimativas de dificuldade e relações do processo do puzzle.
- **Pendente:** PPC/oferta, parecer independente, calibração, cotejo externo, acessibilidade efetiva e consolidação humana.

Título de questão, objetivo, rastreabilidade, fontes complementares, riscos e pareceres são documentação, não campos extras do objeto estrito. Question não possui kind; example/editorialStatus opcionais são dispensados nesta autoria. source mantém uma referência principal por item. Não se atribui aprovação nem se muda additionalProperties: false.

## 2. E26-Q-SI-01 — O componente que acompanha a devolução

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-01 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | O componente que acompanha a devolução |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Arquitetura corporativa, informação e governança |
| Rastreabilidade | SI-01 / SI-I; F07, art. 5º, I, a.1/a.3; art. 6º, VII |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Relacionar componente da solução à necessidade organizacional. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar objetivo organizacional, processo de devolução e componente informacional de uma solução.

### Texto ao jogador

**Contexto.** Uma feira fictícia parceira da Base N9 utiliza caixas retornáveis para distribuir produtos. O objetivo é planejar a coleta sabendo quantas caixas de cada remessa ainda estão com cada parceiro. As remessas e as devoluções acontecem em dias diferentes; consultar apenas o estoque no depósito não informa quem ainda mantém as caixas.

A operação já registra a quantidade enviada e a quantidade devolvida por remessa e parceiro, mas esses registros não estão ligados no sistema. Não se pede otimização de rota nem previsão de demanda nesta versão.

**Enunciado.** Qual componente atende diretamente à necessidade de informação que sustenta o objetivo?

- **A.** Um catálogo dos produtos ofertados, com fotografias, preços e descrição de cada produtor.
- **B.** Um painel de estoque no depósito, com entradas totais e saídas totais de caixas por dia.
- **C.** Um acompanhamento por remessa e parceiro, relacionando caixas enviadas, devolvidas e ainda em posse do parceiro.
- **D.** Um canal de divulgação da feira, com mensagens sobre datas de funcionamento e novos produtos.
- **E.** Um planejador de rotas, alimentado apenas com os endereços cadastrados dos parceiros.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C relaciona os dois eventos e conserva as dimensões remessa e parceiro necessárias ao saldo em posse de cada destinatário. Catálogo, estoque agregado, divulgação e rota podem servir a outros objetivos, mas não respondem diretamente quem mantém quantas caixas de cada envio. A escolha trata do vínculo entre negócio e informação, sem implementar logística ou inventário no jogo.

| Alternativa | Feedback específico |
|---|---|
| A | O catálogo informa a oferta comercial, não a posse das caixas depois de cada remessa. |
| B | O total do depósito não separa saldos por parceiro e remessa. A agregação perde a informação necessária à coleta. |
| C | Correto: o componente relaciona eventos à responsabilidade de guarda por remessa, produzindo a informação pedida. |
| D | Divulgação facilita comunicação sobre a feira, mas não apura caixas ainda em posse de cada parceiro. |
| E | Endereços indicam onde ir, mas não quantas caixas coletar de cada remessa. Essa informação precisa anteceder o planejamento da rota. |

### Originalidade, limites e revisão

- **Competência de partida:** Relacionar componente da solução à necessidade organizacional.
- **Raciocínio exigido:** Mapear objetivo de negócio à granularidade de informação e ao componente que a produz.
- **Elementos autorais e diferença interna:** Não é seleção de canal acessível, finalidade de dados pessoais ou hipótese de falha de serviço dos comuns. Também não é controle concorrente de contador de CC: o foco é adequação do componente ao objetivo e à dimensão informacional.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** Os registros de envio/devolução já existem e não há perda física ou erro de contagem presumido. O comando limita-se à necessidade informacional, não ao sistema completo.
- **Revisão docente específica:** Conferir vínculo objetivo–processo–componente e recorte introdutório, sem exigir ferramenta de arquitetura ou solução de roteamento.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 3. E26-Q-SI-02 — O recorte correto dos pedidos

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-02 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | O recorte correto dos pedidos |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Bancos de dados |
| Rastreabilidade | COMUM-TEC10 / SI-II; F07, art. 5º, II, b.3/b.5; art. 6º, XVIII |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Identificar resultado de consulta simples para demanda definida. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Interpretar uma seleção de registros por condições conjuntas para produzir informação de uma base estruturada.

### Texto ao jogador

**Contexto.** O arquivo cartográfico fictício da Base N9 registra pedidos de cópias de mapas. Cada linha é um pedido distinto e quantidade significa número de cópias.

| Pedido | Destino | Quantidade | Estado |
|---|---|---:|---|
| P11 | Norte | 30 | concluído |
| P12 | Sul | 20 | concluído |
| P13 | Norte | 15 | concluído |
| P14 | Norte | 10 | cancelado |

A consulta solicitada seleciona somente pedidos com destino Norte **e** estado concluído, e soma suas quantidades. Todas as linhas disponíveis estão na tabela; os dados são sintéticos.

**Enunciado.** Qual conjunto de pedidos e total corresponde à consulta?

- **A.** P11; total de 30 cópias.
- **B.** P11, P13 e P14; total de 55 cópias.
- **C.** P11, P12 e P13; total de 65 cópias.
- **D.** P11, P12, P13 e P14; total de 75 cópias.
- **E.** P11 e P13; total de 45 cópias.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** Somente P11 e P13 satisfazem simultaneamente destino Norte e estado concluído. A soma é 30 + 15 = 45 cópias. P12 tem outro destino e P14 foi cancelado. Selecionar registros antecede a agregação; não se contam linhas como se fossem cópias.

| Alternativa | Feedback específico |
|---|---|
| A | P13 também atende às duas condições. Usar apenas a primeira linha elegível deixa quinze cópias de fora. |
| B | P14 tem destino Norte, mas está cancelado. A consulta exige as duas condições. |
| C | P12 está concluído, mas seu destino é Sul. Filtrar só o estado amplia indevidamente o recorte. |
| D | Esse total usa toda a base, incluindo destino e estado que a consulta exclui. |
| E | Correto: os dois pedidos selecionados atendem ao recorte e suas quantidades somam 45. |

### Originalidade, limites e revisão

- **Competência de partida:** Identificar resultado de consulta simples para demanda definida.
- **Raciocínio exigido:** Aplicar conjunção de filtros a registros e agregar uma medida no recorte correto.
- **Elementos autorais e diferença interna:** Não reutiliza percentual de atendimentos ou inferência causal de COM-01, nem rastreamento de estado mutável de CC-01. A tarefa é seleção relacional e soma de medida, com linhas e unidade explícitas.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** Não há junção, duplicatas, valores ausentes ou outras linhas. O destino e o estado são condições conjuntas; quantidade não significa número de pedidos.
- **Revisão docente específica:** Conferir os quatro registros, os cinco totais e a diferença entre filtrar, contar linhas e somar cópias. Manter equivalente linear da tabela.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 4. E26-Q-SI-03 — O trabalho espera pelo parecer

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-03 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | O trabalho espera pelo parecer |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Sistemas de informação e processos de negócio |
| Rastreabilidade | SI-02 / SI-I; F07, art. 5º, I, a.3; art. 6º, VI e XV |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Identificar gargalo sustentado por fluxo informacional fornecido. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar fluxo de informação, disponibilidade de responsável e espera observada em um processo organizacional.

### Texto ao jogador

**Contexto.** Um arquivo de memória oral fictício da Base N9 prepara descrições para seu acervo. A preparação é feita pela equipe editorial. Depois, um responsável emite o parecer necessário para liberar cada descrição. Pela agenda adotada neste exercício, os pareceres começam somente às 16h, mesmo quando a descrição já está pronta.

Os registros sintéticos mostram:

| Descrição | Pronta e disponível ao responsável | Parecer concluído |
|---|---|---|
| R1 | 09h | 16h02 |
| R2 | 10h | 16h04 |
| R3 | 11h | 16h06 |

A transmissão eletrônica já foi confirmada nesses horários. Após o parecer, o processamento automático leva um minuto. Não há falha de envio, falta de capacidade computacional ou outro bloqueio no cenário.

**Enunciado.** Qual etapa concentra a espera que precisa ser examinada primeiro pela gestão do processo?

- **A.** A transmissão eletrônica, supondo que as descrições não chegaram quando ficaram disponíveis.
- **B.** A passagem entre preparação e parecer, condicionada à janela de atuação do responsável.
- **C.** O processamento automático posterior, por levar um minuto depois de cada parecer.
- **D.** A produção inicial da descrição, por ainda não estar concluída nos horários informados.
- **E.** O armazenamento do acervo, supondo que a capacidade esgotada reteve os documentos.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** Os documentos estavam prontos e disponíveis às 09h, 10h e 11h, mas o parecer só podia começar às 16h. A espera relevante está nessa passagem de responsabilidade e sua janela de decisão. O caso não autoriza culpar a pessoa nem concluir qual redesenho será melhor: a agenda é uma regra organizacional fornecida, e sua alteração exige análise própria.

| Alternativa | Feedback específico |
|---|---|
| A | A chegada foi confirmada nos horários registrados. Reinvestigar envio como se não houvesse essa evidência ignora o cenário. |
| B | Correto: a informação já está disponível, mas o processo aguarda a janela do parecer. Pessoas, responsabilidades e agenda fazem parte do sistema de informação. |
| C | Um minuto após o parecer não explica as várias horas anteriores de espera. |
| D | Os horários da segunda coluna já marcam a preparação concluída. Eles não representam o início da redação. |
| E | O cenário exclui esgotamento computacional como bloqueio. Não há evidência de retenção por armazenamento. |

### Originalidade, limites e revisão

- **Competência de partida:** Identificar gargalo sustentado por fluxo informacional fornecido.
- **Raciocínio exigido:** Localizar espera por estado do processo e disponibilidade do papel responsável, sem reduzir o problema à máquina.
- **Elementos autorais e diferença interna:** Diferente de COM-07/08: comunicação e recursos não estão em investigação. Diferente de COM-01: a agenda é premissa explícita de processo, não causa inferida de duas amostras. Não calcula desempenho de algoritmo como CC.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** Pronta significa também disponível ao responsável, não rascunho local. O comando identifica a etapa a analisar, sem impor trabalho fora da agenda ou avaliar mérito individual.
- **Revisão docente específica:** Conferir estados e horários; separar identificação da espera de proposta de solução e de responsabilização individual. Validar relação pessoas–processo–informação.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 5. E26-Q-SI-04 — Enviado ainda não é recebido

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-04 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | Enviado ainda não é recebido |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Sistemas de informação e processos de negócio |
| Rastreabilidade | SI-02 / SI-I; F07, art. 5º, I, a.3/a.5; art. 6º, XV |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar mudanças e seus efeitos em responsabilidades e informação. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar redesenhos de um processo pelo significado dos eventos, responsabilidade de registro e informação disponibilizada aos envolvidos.

### Texto ao jogador

**Contexto.** Uma rede fictícia de laboratórios parceiros da Base N9 recebe amostras de materiais para análise. A equipe de campo registra o envio, mas a chegada física é conferida pelo laboratório em uma folha. O sistema só recebe essa confirmação no fim do dia, quando a folha é digitada. Assim, uma amostra já entregue continua aparecendo como em transporte.

O objetivo do redesenho é mostrar recebida logo após a entrega e a conferência, preservando a responsabilidade do recebedor por confirmar a chegada. O laboratório dispõe de terminal conectado no balcão. A remessa mantém a mesma referência em todas as etapas; não há problema de identificação ou duplicação.

**Enunciado.** Qual mudança atende ao objetivo sem transformar previsão de chegada em confirmação de recebimento?

- **A.** Fazer o recebedor registrar a conferência no terminal no ato da entrega, vinculada à remessa, e disponibilizar esse estado às equipes.
- **B.** Fazer a equipe de campo marcar recebida no momento do despacho, usando a previsão de viagem para orientar o laboratório.
- **C.** Fazer o sistema marcar recebida quando acabar o tempo médio de viagem, mantendo a conferência posterior em papel.
- **D.** Fazer o recebedor continuar na folha e antecipar a digitação para o meio do dia, mantendo intervalos sem atualização.
- **E.** Fazer a equipe de análise marcar recebida ao abrir o primeiro ensaio, substituindo o evento de chegada pelo início do trabalho.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A registra o evento real pela pessoa que pode atestá-lo, no ponto em que ocorre, e compartilha seu estado. B/C confundem previsão com confirmação; D reduz parte da demora, mas mantém o problema entre janelas; E adia o estado até outro evento que pode ocorrer depois da entrega. Digitalizar é útil aqui por estar associado ao papel, ao evento e ao objetivo corretos.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: a responsabilidade acompanha a conferência física, e a informação passa a circular no momento relevante. |
| B | Despachar não comprova receber. A equipe de campo não substitui a conferência da entrega pelo laboratório. |
| C | Tempo estimado não é evidência de chegada. O sistema poderia informar recebimento de uma remessa ainda em trânsito. |
| D | Antecipar um lote diário não registra toda entrega no ato; continuam existindo períodos com estado desatualizado. |
| E | Iniciar um ensaio e receber uma amostra são eventos distintos. A fila anterior ao ensaio continuaria invisível como recebimento confirmado. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar mudanças e seus efeitos em responsabilidades e informação.
- **Raciocínio exigido:** Comparar eventos reais e estados informacionais, levando em conta autoridade de registro e latência do processo.
- **Elementos autorais e diferença interna:** Não trata de clareza de convite, canal de inclusão, privacidade ou correção de cabo dos comuns. Difere de SI-03 deste lote: redesenha a captura de evento na passagem físico–digital, em vez de identificar uma janela de parecer.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** O terminal já é viável por premissa. Recebida depende da conferência, não só da presença física ou do relógio. Não é exigida uma arquitetura de integração específica.
- **Revisão docente específica:** Verificar que A preserva conferência e responsabilidade; avaliar cada substituição indevida de evento. Não generalizar que qualquer digitalização melhora o processo.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 6. E26-Q-SI-05 — A mesma obra pode voltar

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-05 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | A mesma obra pode voltar |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Concepção e projetos de sistemas de informação |
| Rastreabilidade | SI-04 / SI-II; F07, art. 5º, II, b.2/b.5; art. 6º, XIII e XVIII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar modelo que preserve relações e restrições do processo. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | SI-T01 — modelo de associação e opções de chave |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Avaliar um modelo relacional de associação com histórico, preservando cardinalidades e referências de existência.

### Texto ao jogador

**Contexto.** Um circuito fictício de exposições da Base N9 cadastra obras e exposições. Uma exposição recebe várias obras, e uma obra pode participar de várias exposições ao longo do tempo. A mesma obra pode sair e retornar à mesma exposição em outra passagem, que precisa ser registrada separadamente.

Cada passagem deve vincular uma obra e uma exposição já cadastradas e guardar datas de entrada e saída, sem apagar passagens anteriores. O modelo pedido é relacional. Chave estrangeira é a referência verificada a um registro de outra tabela; nas propostas, somente os vínculos explicitamente declarados são garantidos.

**Enunciado.** Qual proposta representa essas relações e permite registrar retornos sem perder o histórico?

- **A.** Guardar em Obra a exposição atual e as datas da última movimentação, substituindo esses campos a cada deslocamento.
- **B.** Guardar em Exposição uma lista textual de nomes e datas das obras, sobrescrevendo a lista após cada mudança.
- **C.** Criar Passagem com chave formada somente por obra e exposição, com datas de entrada e saída e uma única linha por esse par.
- **D.** Criar Passagem com identificador próprio, referências obrigatórias por chave estrangeira a Obra e Exposição e datas em cada ocorrência.
- **E.** Guardar datas em uma tabela de eventos sem referência à obra, relacionando eventos apenas ao nome livre da exposição.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** D permite várias ocorrências para o mesmo par obra/exposição, preserva datas por passagem e exige que as duas entidades existam. C representa uma associação, mas sua chave impede o retorno como nova linha do mesmo par. A/B sobrescrevem informação; E não identifica a obra nem verifica a exposição. O problema não declara inválido todo modelo alternativo: rejeita as restrições específicas das propostas apresentadas.

| Alternativa | Feedback específico |
|---|---|
| A | A exposição atual não conserva passagens anteriores nem suas datas. O modelo deixa de atender ao histórico. |
| B | Nomes em texto sem referências verificadas e lista sobrescrita não garantem vínculos nem passagens separadas. |
| C | Uma chave única apenas do par aceita só uma linha para aquela obra naquela exposição. O retorno exigiria outra ocorrência. |
| D | Correto: cada passagem tem identidade própria, duas referências obrigatórias e datas, permitindo o histórico de retornos. |
| E | Sem vínculo à obra não se sabe qual peça passou; nome livre de exposição também não garante cadastro existente. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar modelo que preserve relações e restrições do processo.
- **Raciocínio exigido:** Distinguir associação muitos-para-muitos, identidade da ocorrência e integridade referencial em um histórico com retornos.
- **Elementos autorais e diferença interna:** Os lotes comuns e CC não modelam associação temporal entre entidades de negócio. Não é deduplicação como EX-SI-01: aqui ocorrências diferentes do mesmo par devem coexistir.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** Não há exigência de uma só passagem por par. Identificador próprio da ocorrência não dispensa as chaves estrangeiras. Datas não podem ser sobrescritas para simular nova passagem.
- **Revisão docente específica:** Testar duas ocorrências do mesmo par, obras em várias exposições, várias obras numa exposição e referências inexistentes. Reconhecer modelos equivalentes com outra chave que preserve as mesmas regras.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 7. E26-Q-SI-06 — Um nome, dois compromissos diferentes

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-06 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | Um nome, dois compromissos diferentes |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Arquitetura corporativa, informação e governança |
| Rastreabilidade | SI-01 / SI-I; F07, art. 5º, I, a.1/a.3; art. 6º, VII e VIII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar decisões de responsabilidade e uso da informação. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar decisões de governança para definir responsabilidade e significado de uma informação compartilhada entre áreas.

### Texto ao jogador

**Contexto.** Uma fábrica social fictícia de instrumentos da Base N9 tem dois painéis chamados entrega no prazo. O comercial considera a data de despacho; a equipe de relacionamento considera o aceite pelo destinatário. Um despacho pode ocorrer antes do prazo e o aceite, depois dele.

O compromisso que a direção quer acompanhar é o aceite até a data combinada. Ela precisa de uma definição compartilhada, com responsável pelo significado e mudanças do indicador, preservando os dois eventos originais para usos operacionais diferentes. O sistema consegue guardar ambos; não há limitação técnica que obrigue escolher apenas uma data.

**Enunciado.** Qual decisão de governança resolve a divergência de significado para o compromisso escolhido?

- **A.** Definir com o responsável pelo compromisso e as áreas a regra e suas mudanças, preservando os dois eventos no sistema.
- **B.** Delegar ao administrador do banco a escolha da coluna mais antiga e usar essa decisão técnica como significado do compromisso.
- **C.** Calcular a média dos percentuais dos dois painéis e manter o nome compartilhado sem definir qual evento representa cumprimento.
- **D.** Renomear todo despacho como aceite e substituir as datas de recebimento pelos dados já disponíveis do comercial.
- **E.** Adotar a definição padrão do fornecedor do painel e conservar o nome, dispensando decisão das áreas sobre o compromisso.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A estabelece responsabilidade de negócio e acordo semântico: o compromisso escolhido usa aceite, enquanto despacho continua existindo com outro significado operacional. Ter a mesma tecnologia ou o mesmo nome não produz uma definição comum. A regra precisa ser documentada e suas mudanças governadas, sem atribuir ao administrador técnico ou ao fornecedor a decisão sobre o compromisso da organização.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: significado, responsabilidade e regra de mudança são definidos pelo negócio com as áreas, preservando a distinção dos eventos. |
| B | Ordem física de colunas não decide o significado de um compromisso. Administração técnica não substitui essa responsabilidade de negócio. |
| C | A média combina medidas de eventos diferentes e não define o que conta como cumprimento do compromisso. |
| D | Despacho não comprova aceite. Substituir as datas apaga a evidência da diferença que a direção precisa acompanhar. |
| E | O padrão de uma ferramenta pode ser apoio, mas não substitui a escolha organizacional sobre o compromisso e sua responsabilidade. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar decisões de responsabilidade e uso da informação.
- **Raciocínio exigido:** Distinguir governança semântica, implementação técnica e preservação de eventos com usos diferentes.
- **Elementos autorais e diferença interna:** Não trata de finalidade de lista pessoal, permissão de editar ou conta revogada dos comuns. Também não é norma de cooperação científica ou regra de classificador de CC: decide quem governa um significado organizacional compartilhado.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** O compromisso já foi escolhido pela direção como aceite no prazo; não se pede escolher o melhor objetivo estratégico. Os dois eventos podem ser mantidos e têm usos legítimos distintos.
- **Revisão docente específica:** Conferir papel do responsável de negócio, participação das áreas e preservação dos eventos. Não exigir framework de governança não fornecido nem apagar dados para uniformizar o indicador.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 8. E26-Q-SI-07 — Quando a barra parece triplicar

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-07 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | Quando a barra parece triplicar |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Dados para decisão e pesquisa operacional |
| Rastreabilidade | SI-03 / SI-II; F07, art. 5º, II, b.3; art. 6º, XIX |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar conclusão apoiada em visualização e limites da base. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | SI-T02 — origem do eixo e proporção entre barras |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Interpretar valores e escala de uma visualização para distinguir variação real de razão entre comprimentos com origem truncada.

### Texto ao jogador

**Contexto.** Um painel fictício da Base N9 compara o número de registros catalogados em dois lotes de mesmo tamanho: Alfa tem 100 registros e Beta, 102. O gráfico usa barras verticais de mesma largura, mas a base do eixo está em 99, e não em zero. A escala é linear e a unidade é um registro.

Assim, a barra Alfa sobe uma unidade de escala acima da base e a Beta sobe três. Os rótulos 100 e 102 estão visíveis. Esse é o equivalente textual integral da visualização; nenhuma cor é necessária. Não há informação adicional sobre qualidade ou custo dos registros.

**Enunciado.** Qual leitura distingue corretamente os dados da impressão produzida pelos comprimentos das barras?

- **A.** Beta tem 200% mais registros que Alfa, porque seu comprimento acima da base é três vezes maior.
- **B.** A origem 99 deve ser somada aos rótulos, produzindo totais de 199 e 201 registros nos lotes.
- **C.** Beta tem dois registros a mais, equivalentes a 2% de Alfa; a razão 3:1 dos comprimentos depende da base em 99.
- **D.** O gráfico não permite saber qual lote tem mais registros, porque a base do eixo não começa em zero.
- **E.** Alfa e Beta diferem em três registros, porque a barra Beta ocupa três unidades acima da base escolhida.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** A diferença dos dados é 102 − 100 = 2 registros, ou 2/100 = 2% em relação a Alfa. Os comprimentos acima de 99 são 1 e 3, mas comparar 3/1 não compara 102/100. A origem truncada amplifica a impressão visual de magnitude. Isso não demonstra intenção de enganar nem permite concluir qualidade ou custo; mostra por que rótulos, unidade e origem precisam ser lidos juntos.

| Alternativa | Feedback específico |
|---|---|
| A | 200% seria o aumento de 1 para 3 nos comprimentos acima da base, não de 100 para 102 nos registros. |
| B | Os rótulos já são os totais 100 e 102. Somar a origem novamente confunde valor representado com deslocamento do desenho. |
| C | Correto: a diferença real é dois, e a origem explica a impressão de triplicação sem alterar os rótulos dos dados. |
| D | A origem distorce a razão entre comprimentos, mas os rótulos ainda permitem ordenar os totais: 102 é maior que 100. |
| E | Três é a altura de Beta acima de 99. Para comparar lotes, é preciso subtrair também o valor de Alfa: 102 − 100. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar conclusão apoiada em visualização e limites da base.
- **Raciocínio exigido:** Confrontar rótulos com codificação visual e reconstruir o efeito da origem do eixo na razão dos comprimentos.
- **Elementos autorais e diferença interna:** Não reaproveita causalidade ou representatividade de COM-01, denominadores de cobertura de COM-05, filtro de imagem de CC-07 ou probabilidades de CC-08. O núcleo é a distorção de magnitude por eixo truncado.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** A comparação percentual tem base Alfa e a escala é linear. O tamanho dos lotes é igual; o problema não é amostragem ou mudança de população. Não se atribui intenção ao autor do gráfico.
- **Revisão docente específica:** Conferir valores 100/102, origem 99, comprimentos 1/3, diferença dois e variação 2%. Validar leitura textual da visualização e evitar exigir percepção visual.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 9. E26-Q-SI-08 — O ensaio precisa acompanhar a vistoria

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-08 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | O ensaio precisa acompanhar a vistoria |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Concepção e projetos de sistemas de informação |
| Rastreabilidade | SI-04 / SI-I; F07, art. 5º, I, a.3/a.5; art. 6º, XII, XIII e XIV |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar evidências de qualidade com necessidade organizacional. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar evidências de teste e aceitação com uma necessidade de trabalho, distinguindo qualidade de artefato e atendimento do processo.

### Texto ao jogador

**Contexto.** Uma equipe fictícia de conservação de murais da Base N9 faz vistorias em locais sem conexão. A necessidade acordada é registrar uma vistoria completa sem sinal e, quando houver conexão, enviá-la ao arquivo central sem redigitar os dados. A pessoa em campo deve conseguir conferir qual vistoria foi recebida.

O ensaio de aceitação será feito em ambiente de teste com registros fictícios. A equipe quer uma evidência que cubra o percurso necessário, não uma promessa de que nenhum defeito ocorrerá em produção.

**Enunciado.** Qual evidência é mais diretamente adequada para avaliar essa necessidade no ensaio?

- **A.** Um relatório de testes das funções de formatação, sem executar registro offline nem envio posterior.
- **B.** Uma medição de carregamento rápido da tela inicial em rede conectada, sem uma vistoria de campo.
- **C.** A aprovação do cronograma e da documentação do projeto, sem observar o percurso operacional.
- **D.** Uma demonstração de digitação conectada por um desenvolvedor, encerrada antes de conferir o recebimento central.
- **E.** Ensaio com pessoa de campo: registrar offline, enviar ao reconectar e conferir a mesma vistoria recebida, sem redigitar.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** E cobre o percurso de trabalho e permite comparar o registro original ao recebido. Testes de funções, desempenho de abertura, documentação e demonstração conectada podem ser úteis, mas isoladamente não verificam o requisito offline–envio–conferência. Um ensaio satisfatório fornece evidência para essa condição e configuração, sem certificar qualidade integral ou benefício organizacional permanente.

| Alternativa | Feedback específico |
|---|---|
| A | Formatação é parte do produto, mas não comprova persistência offline, envio e correspondência do registro recebido. |
| B | A tela abrir rápido com rede não verifica a condição que motivou a solução: trabalhar sem sinal e concluir depois. |
| C | Cumprir cronograma e documentação informa sobre o projeto, não sobre a execução do requisito pela pessoa em campo. |
| D | A demonstração não inclui ausência de rede nem confirmação central. Ela deixa etapas essenciais sem evidência. |
| E | Correto: o ensaio acompanha o trabalho necessário com a pessoa do papel relevante e verifica o mesmo registro ao final. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar evidências de qualidade com necessidade organizacional.
- **Raciocínio exigido:** Relacionar necessidade organizacional a cobertura de evidência de aceitação, sem confundir indicador do projeto com comportamento verificado.
- **Elementos autorais e diferença interna:** Diferente de COM-07, não diagnostica falha de comunicação versus aplicação; a ausência de sinal é condição normal do trabalho. Não reutiliza canal acessível de COM-04 ou testes de artefatos de compilação de CC.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** O cenário é de teste, sem dados pessoais reais. Não se pede garantir ausência universal de defeitos, escolher tecnologia ou dispensar testes de unidade; o comando é sobre a evidência mais diretamente ligada à necessidade.
- **Revisão docente específica:** Verificar cobertura de registro offline, retomada, não redigitação e confirmação pela equipe. Separar teste do produto, gestão do projeto e resultado organizacional.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 10. E26-Q-SI-09 — Distribuir capacidade entre dois trabalhos

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-09 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Título editorial | Distribuir capacidade entre dois trabalhos |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Dados para decisão e pesquisa operacional |
| Rastreabilidade | SI-03 / SI-II; F07, art. 5º, II, b.2–b.3; art. 6º, V |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar alocação viável integrando capacidade, demanda e objetivo. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Avaliar uma alocação inteira sob limites de capacidade e demanda, distinguindo viabilidade e maximização do objetivo definido.

### Texto ao jogador

**Contexto.** Um núcleo fictício de acervo da Base N9 planeja uma rodada de trabalho. Pode concluir até quatro lotes do tipo X e até três do tipo Y, conforme a demanda disponível. Cada lote deve ser inteiro e só conta se concluir as duas etapas de trabalho.

| Tipo | Capacidade de captura consumida por lote | Capacidade de catalogação consumida por lote | Benefício definido por lote concluído |
|---|---:|---:|---:|
| X | 2 unidades | 1 unidade | 5 unidades |
| Y | 1 unidade | 2 unidades | 4 unidades |

Na rodada há dez unidades de captura e oito de catalogação. Não há outro recurso, precedência ou custo limitante. O objetivo acordado é maximizar o benefício total segundo os pesos da tabela, sem exceder capacidades ou demanda; não é obrigatório atender toda a demanda. Os pesos e dados são didáticos, não XP ou política real de prioridade.

**Enunciado.** Qual alocação atende aos limites e maximiza o benefício definido?

- **A.** Concluir três lotes X e dois Y, obtendo benefício 23.
- **B.** Concluir três lotes X e três Y, obtendo benefício 27.
- **C.** Concluir cinco lotes X e nenhum Y, obtendo benefício 25.
- **D.** Concluir quatro lotes X e um Y, obtendo benefício 24.
- **E.** Concluir quatro lotes X e dois Y, obtendo benefício 28.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** E usa 2×4 + 2 = 10 unidades de captura e 4 + 2×2 = 8 de catalogação, dentro das demandas 4 e 3, com benefício 5×4 + 4×2 = 28. A e D são viáveis, mas rendem 23 e 24. B consome nove de catalogação, acima de oito; C ultrapassa a demanda de X. Entre todos os pares inteiros de 0 a 4 X e 0 a 3 Y, nenhum outro viável supera ou iguala 28. A escolha depende dos pesos explícitos, não de valor social presumido de um tipo.

| Alternativa | Feedback específico |
|---|---|
| A | A alocação cabe nas capacidades, mas deixa benefício abaixo de outra solução viável. Viabilidade não é o mesmo que maximização. |
| B | Três X e três Y consomem 3 + 2×3 = 9 de catalogação. O benefício não pode ser aceito violando capacidade. |
| C | Há demanda para no máximo quatro X. Capacidade de captura não autoriza criar um quinto pedido. |
| D | Quatro X e um Y são viáveis, mas há capacidade para mais um Y, elevando o benefício a 28. |
| E | Correto: usa as duas capacidades sem exceder a demanda e obtém o maior benefício do domínio inteiro declarado. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar alocação viável integrando capacidade, demanda e objetivo.
- **Raciocínio exigido:** Construir restrições de dois recursos, aplicar limites de demanda e comparar objetivo entre soluções viáveis.
- **Elementos autorais e diferença interna:** COM-09 pedia cumprir três limites sociais/ambientais, sem otimizar entre várias soluções viáveis. CC-10 comparava mecanismos de sincronização e custo. Aqui há decisão inteira de mistura de trabalhos, com duas capacidades e demanda explícita.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** Não existem frações de lote, demanda mínima, ordem temporal ou preferência oculta. As capacidades são da rodada inteira e já incluem as etapas; nenhum lote parcial gera benefício.
- **Revisão docente específica:** Enumerar os vinte pares possíveis, conferir capacidades, demanda e objetivo 5X+4Y. Confirmar a solução ótima única 4/2 e discutir limites dos pesos fictícios.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 11. E26-Q-SI-10 — Escalar sem informar uma versão antiga

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-10 |
| Versão | 2 |
| Contrato / classification | question / SI |
| Título editorial | Escalar sem informar uma versão antiga |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de SI. |
| Cursos / courses | SI |
| Área / area | Concepção e projetos de sistemas de informação |
| Rastreabilidade | SI-04 / SI-I e SI-II; F07, art. 5º, I, a.4–a.5; II, b.4–b.5; art. 6º, XI, XIII e XVIII |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar arquitetura integrando carga, consistência e necessidade social. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte indicado; contexto e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso; evidências e premissas explicitadas |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Integrar desempenho e escalabilidade de SI com consistência da informação e condições de acesso do público ao selecionar uma arquitetura.

### Texto ao jogador

**Contexto.** Um portal fictício informa quais pontos comunitários de água estão funcionando. O público usa navegador, sem instalar aplicativo, e o pico é de 600 consultas por segundo.

Cada mudança recebe uma versão confirmada pela autoridade central. Consulta iniciada após a confirmação deve retornar essa versão ou uma posterior. Se não puder verificá-la, pode informar indisponibilidade, mas não servir versão anterior como atual.

As capacidades projetadas usam a mesma carga e incluem as verificações. A autoridade está normalmente disponível; não há capacidade oculta nem atendimento posterior por fila.

**Enunciado.** Qual proposta atende conjuntamente a carga, a regra de versão e a condição de acesso do público?

- **A.** Servidor por navegador, versões atuais e capacidade de 400 consultas por segundo.
- **B.** Servidores por navegador que verificam cada pedido, recusam versão antiga e suportam 700 consultas por segundo.
- **C.** Réplicas por navegador, 1.000 consultas por segundo, podendo servir a versão anterior por dez segundos.
- **D.** Clientes instaláveis que verificam a versão, com 900 consultas por segundo e instalação obrigatória.
- **E.** Arquivo diário por navegador, com 800 consultas por segundo e versão atualizada apenas na próxima geração.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** B combina capacidade 700 maior que 600, acesso por navegador e verificação contra a versão autoritativa para cada pedido. A não tem capacidade suficiente; C/E admitem informação antiga depois de uma confirmação; D exige instalação vedada pelo contexto social. A recusa quando não é possível verificar a versão é admitida pelo requisito e deve ser explícita; não é promessa de disponibilidade ilimitada nem regra universal sobre réplicas reais.

| Alternativa | Feedback específico |
|---|---|
| A | 400 é inferior ao pico de 600. Consistência e acesso adequados não compensam capacidade insuficiente. |
| B | Correto: os três critérios são atendidos nas premissas fornecidas, e a resposta incerta não é apresentada como informação atual. |
| C | Maior vazão não cumpre a exigência de versão quando se permite devolver a anterior a consultas iniciadas após confirmação. |
| D | A instalação obrigatória exclui o meio de acesso disponível ao público. Capacidade e versão não resolvem essa incompatibilidade. |
| E | Um arquivo diário pode ficar anterior a confirmações ocorridas depois da geração. Distribuição rápida não atualiza o conteúdo. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar arquitetura integrando carga, consistência e necessidade social.
- **Raciocínio exigido:** Integrar capacidade, semântica de atualização e condição social de acesso, sem confundir replicação rápida com informação atual.
- **Elementos autorais e diferença interna:** Não recupera catálogo como P-COM-01, não escolhe canal de atendimento como COM-04 e não corrige incremento concorrente como CC-10. A decisão é arquitetural: servir leituras de versão adequada sob carga e meio de acesso explícitos.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi reaberto, selecionado ou adaptado para este item. Os conceitos gerais não são anunciados como invenção teórica.
- **Ambiguidades controladas:** A garantia refere-se a consultas iniciadas depois da confirmação, não a telas já abertas antes dela. Capacidades incluem as checagens. O modelo não presume que toda cache ou réplica seja incorreta, apenas compara as políticas descritas.
- **Revisão docente específica:** Conferir os três critérios por proposta e a fronteira temporal de início da consulta. Validar o modelo de consistência sem prometer viabilidade real pelos números fictícios.
- **Risco residual:** o formato de cinco alternativas e os temas de SI são recorrentes. O cotejo interno não prova originalidade global; comparar outros acervos por estrutura decisória e distratores.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e elegibilidade correspondem ao slot de SI.
- [x] Fonte principal F07; localizadores da Portaria 168/2026, sem transferência de incisos de outro curso.
- [x] Contexto e dados fictícios; textos ao jogador sem referência à avaliação externa.
- [x] Cinco alternativas distintas; uma resposta fundamentada no comando e feedbacks de A–E.
- [x] Distratores têm erro identificável; não se depende de lei, marca, ferramenta ou prioridade oculta.
- [x] Texto, unidades e premissas suficientes; fontes complementares não criam propriedades extras.
- [x] Comparação com comuns e CC registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente de unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação futura.

## 12. E26-P-SI-01 — Liberar o Laboratório Aurora

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-SI-01 |
| Versão editorial documental | 2 — substituição autorizada; sem campo version em SequencePuzzle |
| Contrato / kind | sequence |
| Título / title | Liberar o Laboratório Aurora |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais de 2026; processo informacional autoral para N9 — Jornada Digital, em revisão editorial assistida por IA para SI. |
| Cursos / courses | SI |
| Área / area | Sistemas de informação e processos de negócio |
| Rastreabilidade | SI-02 / SI-I; F07, art. 5º, I, a.3/a.5; art. 6º, VI e XV |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Ordenar responsabilidades e circulação de informação por pré-condições explícitas. |
| Fonte oficial principal | F07 — Portaria Inep 168/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa de SI e processos de negócio para fluxo fictício autoral; a portaria não prescreve estes valores, papéis ou sequência. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Relacionar pessoas responsáveis, regras de processo, dados transacionais e integrações tecnológicas para ordenar um fluxo informacional rastreável.

### Narrativa ao jogador

Uma equipe estudantil da Base N9 solicitou o Laboratório Aurora para uma oficina de visualização de dados. O portal recebeu a solicitação `SOL-204`: responsável identificado, 12 participantes e uso das 19h às 21h. A solicitação ainda não foi validada nem reservou a sala.

Neste fluxo fictício, cada sistema só aceita um artefato identificado da etapa anterior. A validação confere responsável, finalidade, intervalo e quantidade de participantes. A agenda só consulta disponibilidade a partir de uma solicitação válida. Para este caso, ela informará que o horário está livre e que a capacidade é de 20 pessoas. O serviço de reservas usa essa resposta para bloquear o horário em uma única operação e gerar uma reserva provisória. A coordenação só autoriza o acesso depois de analisar essa reserva e a finalidade informada. Por fim, a integração envia a autorização ao controle de acesso e precisa receber confirmação antes de o portal exibir a reserva como confirmada.

Considere o caminho de sucesso: não surgirá conflito concorrente, os sistemas permanecerão disponíveis e todas as verificações terão resultado satisfatório. Os identificadores preservam a ligação entre solicitação, disponibilidade, reserva, autorização e confirmação. O processo é didático e não representa uma regra universal de reservas.

Reordene os cinco cartões pelas informações que cada ação consome e produz. O objetivo não é decorar cargos, mas reconstruir um fluxo no qual pessoas, regras, dados e sistemas possam explicar por que a porta foi liberada.

### Blocos

Cinco cartões apresentados nesta ordem editorial, diferente da solução. Todos devem ser utilizados uma vez.

| ID do bloco | Texto |
|---|---|
| sincronizar-acesso | Integração: enviar a autorização ao controle de acesso, receber `ACC-204` e só então marcar a reserva como confirmada no portal. |
| consultar-disponibilidade | Agenda: usar a solicitação validada para verificar horário e capacidade, produzindo `DISP-204` com horário livre e capacidade para 20 pessoas. |
| validar-solicitacao | Analista: conferir responsável, finalidade, intervalo e 12 participantes, produzindo a solicitação validada `PED-204`. |
| autorizar-acesso | Coordenação: analisar a reserva provisória e sua finalidade, emitindo `AUT-204` para o intervalo reservado. |
| criar-reserva | Serviço de reservas: consumir `DISP-204`, bloquear o horário atomicamente e gerar a reserva provisória `RES-204`. |

### Ordem correta e justificativa

**correctOrder:** validar-solicitacao → consultar-disponibilidade → criar-reserva → autorizar-acesso → sincronizar-acesso.

| Dependência necessária | Informação produzida/consumida e justificativa |
|---|---|
| validar-solicitacao antes de consultar-disponibilidade | A agenda exige intervalo, quantidade e responsável já conferidos em `PED-204`; o rascunho `SOL-204` ainda não é entrada válida. |
| consultar-disponibilidade antes de criar-reserva | O serviço só bloqueia um horário a partir de `DISP-204`, que vincula disponibilidade e capacidade à solicitação validada. |
| criar-reserva antes de autorizar-acesso | A coordenação autoriza uma reserva identificada e o intervalo efetivamente bloqueado, não apenas a intenção inicial. |
| autorizar-acesso antes de sincronizar-acesso | O controle de acesso exige `AUT-204`; a integração só confirma no portal depois de receber `ACC-204`. |

A cadeia estrita de quatro dependências torna única a ordem completa dos cinco blocos no modelo declarado. Consultar uma tela informalmente não produz o artefato exigido pela etapa seguinte. Cada cartão termina ao gerar o identificador que o próximo consome.

### Artefatos e conferência do caso

| Estado do processo | Responsável | Artefato e conteúdo | Referência preservada |
|---|---|---|---|
| Solicitação validada | Analista | `PED-204`: responsável, finalidade, 19h–21h e 12 participantes conferidos | `SOL-204` |
| Disponibilidade confirmada | Agenda | `DISP-204`: horário livre e capacidade 20 | `PED-204` |
| Reserva provisória | Serviço de reservas | `RES-204`: intervalo bloqueado para a solicitação | `DISP-204` e `PED-204` |
| Acesso autorizado | Coordenação | `AUT-204`: acesso autorizado para o intervalo reservado | `RES-204` |
| Integração confirmada | Controle de acesso | `ACC-204`: autorização recebida; portal pode confirmar | `AUT-204` e `RES-204` |

Os códigos são artefatos fictícios do cenário, não novos IDs de desafios. A capacidade disponível não cria reserva; a reserva provisória não autoriza acesso; o envio de uma autorização sem confirmação de recebimento não permite ao portal declarar integração concluída. Papéis e regras pertencem a esta organização fictícia.

### Dicas progressivas

1. Comece distinguindo pedido recebido, disponibilidade consultada e horário efetivamente bloqueado. Eles não representam o mesmo estado.
2. A agenda precisa receber intervalo e quantidade já conferidos. Qual cartão produz essa entrada válida, e qual artefato a agenda devolve?
3. A porta não usa diretamente a reserva provisória. Observe qual decisão deve existir antes da integração e qual confirmação permite atualizar o portal.

Nenhuma dica individual lista os cinco blocos na ordem correta. As dicas distinguem intenção, disponibilidade, reserva, decisão e confirmação sem exigir conhecimento de uma plataforma real.

### Explicação final ao jogador

O analista transforma `SOL-204` em `PED-204` ao conferir os dados. A agenda usa essa entrada e produz `DISP-204`. O serviço consome a disponibilidade, bloqueia o intervalo e cria `RES-204`. A coordenação analisa essa reserva e emite `AUT-204`. A integração envia a autorização, recebe `ACC-204` e só então confirma a reserva no portal. Assim, cada decisão e atualização pode ser rastreada até a solicitação original. Outras organizações podem combinar ou distribuir essas responsabilidades de outra forma.

### Interação visual, acessibilidade e retorno — especificação futura

- Cartões em área de ordenação e mapa textual dos sistemas envolvidos. Papel responsável, informação recebida e artefato produzido permanecem escritos nos cartões.
- Horário, quantidade, capacidade e identificadores aparecem em texto; nenhuma relação depende apenas de cor, ícone ou posição visual.
- Mouse e toque poderão arrastar ou usar botões “Mover para cima” e “Mover para baixo”. Teclado permitirá selecionar cartão e acionar os mesmos controles, preservando foco e anunciando a nova posição entre cinco.
- Ao confirmar “Validar sequência”, uma tentativa incorreta apresentará uma dependência violada em texto e acesso à próxima dica sob demanda. Não completar automaticamente a ordem inteira nem usar apenas sinal vermelho.
- No acerto, mostrar a explicação e a cadeia `SOL-204` → `PED-204` → `DISP-204` → `RES-204` → `AUT-204` → `ACC-204`. Permitir retorno ao local de origem do mapa por botão.
- Sem cronômetro obrigatório, perda de XP por erro/dica ou obrigação de arraste. Nova tentativa deve manter acesso às informações; repetição poderá informar que a recompensa do ID já foi recebida.
- A interface futura deve refluír em tela pequena, oferecer leitura linear por tecnologia assistiva e manter metadados/gabaritos na curadoria. Esta etapa não implementa nem homologa esses controles.

### Recompensa e desbloqueio documentais

- **reward.xp:** 100, proposta de recompensa única por ID, conforme a convenção do piloto. Repetir não paga novamente; nenhum XP existente é alterado.
- **unlocks.mapId:** base-n9; **unlocks.objectId:** door, referências já existentes, sem criação ou ativação.
- Os códigos do processo não são recompensa, credencial real ou funcionalidade externa. Não se somam a XP.
- Seleção, liberação efetiva, persistência e retorno ao mapa dependem de integração posterior. Não se implementa missão mista, pagamento ou processo organizacional real.

### Originalidade, limites e revisão

- **Integração própria de SI:** pessoas validam e decidem; processo impõe estados; dados ligam solicitação, disponibilidade, reserva e autorização; sistemas precisam confirmar a integração. Nenhuma camada isolada basta.
- **Diferença para os puzzles anteriores:** não recupera cópia, verifica integridade, publica catálogo, compila artefatos, analisa vivacidade, ordena média, encerra atendimento de TI ou configura rede.
- **Diferença para as questões deste lote:** não é consulta de pedidos, captura de recebimento, definição de indicador, otimização de capacidade ou arquitetura de leitura. A tarefa ordena decisões e informação de um mesmo processo rastreável.
- **Dependências:** existem pelos artefatos e significados, não apenas porque um cargo parece superior. Disponibilidade, reserva, autorização e confirmação não são intercambiáveis.
- **Risco residual:** processos de conferência/autorização são recorrentes. A autoria é o caso, seus estados e a tarefa de rastrear pré-condições; originalidade externa exige cotejo independente.
- **Revisão específica:** testar as 120 permutações; verificar se alguma etapa seria concluível sem seu artefato anterior; conferir capacidade 20 para 12 participantes; avaliar ajuda e clareza.

### Checklist editorial do puzzle

- [x] ID, curso SI, área SI-02, SI-I, objetivo e dificuldade intermediate conferidos com o plano.
- [x] F07 como fonte normativa principal; localizadores de SI registrados.
- [x] Cinco blocos únicos, permutação completa e quatro dependências necessárias no cenário.
- [x] Pessoas, processo, dados e tecnologia participam da solução.
- [x] Horário, quantidade, capacidade, identificadores e caminho de sucesso explícitos; sem plataforma ou protocolo presumido.
- [x] Três dicas distintas sem ordem completa; explicação final separada.
- [x] Interação futura prevê teclado, toque, botões e texto equivalente; sem rapidez obrigatória.
- [x] Recompensa/desbloqueio somente documentais; status continua provisório.
- [x] Ordem e sentido dos artefatos revisados em segunda passagem assistida por IA e validados por permutação exaustiva.
- [ ] Homologação de controles/acessibilidade na experiência futura.

## 13. Inventário, respostas e distribuição

| ID | Contrato | Curso | Dificuldade | Resposta / solução reservada à curadoria |
|---|---|---|---|---|
| E26-Q-SI-01 | question | SI | introductory | C |
| E26-Q-SI-02 | question | SI | introductory | E |
| E26-Q-SI-03 | question | SI | introductory | B |
| E26-Q-SI-04 | question | SI | intermediate | A |
| E26-Q-SI-05 | question | SI | intermediate | D |
| E26-Q-SI-06 | question | SI | intermediate | A |
| E26-Q-SI-07 | question | SI | intermediate | C |
| E26-Q-SI-08 | question | SI | intermediate | E |
| E26-Q-SI-09 | question | SI | advanced | E |
| E26-Q-SI-10 | question | SI | advanced | B |
| E26-P-SI-01 | sequence | SI | intermediate | validar-solicitacao → consultar-disponibilidade → criar-reserva → autorizar-acesso → sincronizar-acesso |

Todas as linhas: collectionId enade-2026 e validationStatus provisional-pending-teacher-review, sem parecer prévio favorável.

**Específicas:** 3 introductory, 5 intermediate, 2 advanced. **Vinte elegíveis de SI:** 4/4/2 comuns + 3/5/2 específicas = **7/9/4**. Dois puzzles elegíveis, comum e SI, contados separadamente. Outros cursos, os 60 slots de questões e os seis de puzzles permanecem inalterados.

**Gabaritos em ordem 01–10:** C/E/B/A/D/A/C/E/E/B. Contagens A=2, B=2, C=2, D=1, E=3. Não se impôs distribuição uniforme, ciclo ou alternância; há repetição de E. Isso é conferência editorial, sem garantia estatística de imprevisibilidade ou divulgação antecipada ao jogador.

## 14. Fontes e rastreabilidade editorial

Consulta desta autoria: **13/11/2026**. Datas de ato, publicação, edição e consulta são distintas. As fontes sustentam o recorte ou conceito identificado, não a autoria dos cenários ou gabaritos.

### Matriz específica de SI — única referência normativa principal

| Fonte | Identificação | Original tentado | Texto efetivamente consultado e limites |
|---|---|---|---|
| F07 — Portaria nº 168, de 14/04/2026, diretrizes do componente específico de Bacharelado em Sistemas de Informação | Emissor MEC/Inep; publicada em 16/04/2026, DOU edição 72, seção 1, p. 96 | [DOU 168](https://www.in.gov.br/web/dou/-/portaria-n-168-de-14-de-abril-de-2026-699946315), retorno 502 | [Reprodução Ufopa, duas páginas](https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf), texto integral recuperado; arts. 5º–6º nas pp. 1–2, habilidades e objetos na p. 2. |

Ufopa hospeda reprodução, não é órgão emissor. Não houve acesso bem-sucedido ao texto certificado do DOU. Não se declara verificação jurídica exaustiva de vigência/retificações; os originais precisam ser reconferidos na revisão docente. A falha de acesso não foi preenchida com fonte ou artigo inventado.

### Localizadores específicos por item

Todos os arts. 5º–6º deste quadro pertencem à **Portaria 168/2026 — SI**. As sínteses SI-I e SI-II remetem às duas competências dessa matriz, não a competências de CC ou dos tecnólogos.

| Item | Art. 5º: competência/habilidade | Art. 6º: objeto de SI |
|---|---|---|
| Q-SI-01 | I, a.1/a.3 | VII |
| Q-SI-02 | II, b.3/b.5 | XVIII |
| Q-SI-03 | I, a.3 | VI e XV |
| Q-SI-04 | I, a.3/a.5 | XV |
| Q-SI-05 | II, b.2/b.5 | XIII e XVIII |
| Q-SI-06 | I, a.1/a.3 | VII e VIII |
| Q-SI-07 | II, b.3 | XIX |
| Q-SI-08 | I, a.3/a.5 | XII, XIII e XIV |
| Q-SI-09 | II, b.2–b.3 | V |
| Q-SI-10 | I, a.4–a.5; II, b.4–b.5 | XI, XIII e XVIII |
| P-SI-01 | I, a.3/a.5 | VI e XV |

A prioridade, a dificuldade e os objetivos recortados são escolhas pedagógicas do plano, sujeitas a revisão, e não pesos oficiais. O recorte de Question exige interpretar/comparar modelos fornecidos; não demonstra que a pessoa implementou ou administrou um SI real.

### Apoios primários complementares efetivamente lidos

| ID documental | Referência / autoria / data identificada | Localizador e modo de acesso | Uso e limite |
|---|---|---|---|
| SI-T01 | Adrienne Watt, “Chapter 8 The Entity Relationship Data Model”, Database Design – 2nd Edition, BCcampus Open Education; data individual do capítulo não identificada nesta consulta | [Capítulo publicado pela plataforma acadêmica](https://opentextbc.ca/dbdesign01/chapter/chapter-8-entity-relationship-model/), seções Existence dependency e Dependent entities; leitura dirigida, texto recuperado | Q05: associação, referência obrigatória e opções de chave. Não se copiam exemplos COMPANY, pessoas, exercícios ou figuras; o histórico de passagens de obras é autoral. Não é matriz normativa de SI. |
| SI-T02 | Government Analysis Function, Analysis Function Central Team, “Data visualisation: charts”; publicação informada 19/05/2022 | [Orientação oficial do governo britânico](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/), seções de alternativa textual e Do not break the numerical axis on bar charts; texto recuperado, leitura dirigida | Q07: origem do eixo e comparação de magnitude. Nenhum gráfico, dado ou exemplo da página é reproduzido. Orientação técnica não transfere legislação britânica ao jogo ou ao contexto brasileiro. |

Não se anuncia leitura integral desses livros/cursos ou auditoria externa de similaridade. Nenhum material histórico de prova foi reaberto nesta autoria. Modelos organizacionais, de capacidade e do puzzle são premissas fechadas e fictícias, com cálculos verificáveis; não se alegam dados empíricos ou regras universais.

Somente F07 compõe source principal dos onze objetos projetados. SI-T01/SI-T02 ficam na ficha documental; não se acrescentam arrays de fontes ou campos de revisão ao objeto estrito. Nenhuma matriz de outro curso sustenta questão ou puzzle deste lote.

## 15. Auditoria cruzada, unicidade e acessibilidade

Cotejo editorial com as dez questões e a sequência dos lotes comuns, as dez questões e o puzzle de CC e os exemplos atuais de src/content. Foram comparados situação, representação, decisão solicitada, relações dos dados e erros dos distratores. Formato de cinco alternativas ou dependências entre cartões são requisitos compartilhados dos contratos, não reprodução de um problema anterior.

| Item SI | Comparação pertinente | Diferença central |
|---|---|---|
| Q01 | COM-04/10; CC-10; EX-SI-01 | Mapeia objetivo e componente de negócio por granularidade remessa/parceiro; não trata canal acessível, permissão, contador atômico ou deduplicação. |
| Q02 | COM-01/05; CC-01 | Consulta declarativa de registros e medida por seleção conjunta; não infere causa, mede cobertura de sombra ou rastreia atribuição mutável de algoritmo. |
| Q03 | COM-07/08; CC-05/10 | Espera por janela organizacional e passagem de responsabilidade com transmissão confirmada; não é diagnóstico de rede, espera de memória ou exclusão concorrente. |
| Q04 | COM-03/04; CC-03; SI-Q03 | Redesenho de captura do evento físico confirmado por seu responsável; não muda mensagem/canal, interpreta tipo de expressão ou repete a análise da janela de parecer. |
| Q05 | CC-04/09; EX-SI-01 | Modela entidade de associação com múltiplas ocorrências históricas; não calcula alcance em grafo, reconhece linguagem ou colapsa registros repetidos. |
| Q06 | COM-02/06/10; CC-06 | Governa significado e responsabilidade de indicador entre áreas; não limita uso de informação pessoal, troca saberes, revoga conta ou escolhe classificador. |
| Q07 | COM-01/05; CC-07/08 | Lê a codificação de magnitude por eixo truncado; não é inferência causal, estimativa de benefício, filtro de pixels ou probabilidade de eventos. |
| Q08 | COM-04/07; CC-03 e puzzle | Cobertura de aceitação de percurso offline–conferência; não escolhe canal de inclusão, diagnostica comunicação ou transforma representação de compilador. |
| Q09 | COM-09; CC-10 | Otimiza mistura inteira de trabalhos com várias soluções viáveis; não apenas satisfaz limites de drenagem ou escolhe mecanismo de sincronização por custo. |
| Q10 | COM-04/08; CC-05/10 | Arquitetura de leitura: carga, versão e meio de acesso; não substitui canal acessível, espera cota, calcula LRU ou evita escrita perdida em contador. |
| P-SI-01 | P-COM-01; P-CC-01; sequências executáveis | Reserva integrada, semântica dos estados e rastreabilidade entre portal, agenda e acesso; não recupera arquivo, analisa vivacidade, calcula média, encerra incidente ou configura rede. |

COM-03/06 (linguagem e cooperação), CC-02/06/07/08/09 (circuitos, métodos, imagem, probabilidade e modelos de reconhecimento) e demais alternativas/feedbacks também foram confrontados. Não se transportam seus registros, artefatos, grafos, topologias, regras, tabelas ou cenários por troca de nomes.

**Resultado editorial interno:** não foi identificada duplicação de situação, enunciado, alternativas ou problema central dos lotes anteriores. A triagem de igualdade textual complementa essa análise; a ausência de texto igual não provaria ineditismo estrutural. Conceitos clássicos de SI não são apresentados como invenções teóricas.

Não se copiam programas, figuras, exemplos de prova, casos COMPANY do capítulo acadêmico ou gráficos da orientação britânica. Relações históricas, eixo truncado e processos de autorização são conceitos recorrentes; o cotejo externo independente continua pendente. Nenhuma garantia de originalidade global ou aprovação docente é atribuída.

### Unicidade das respostas e da sequência

Cada questão foi resolvida pelas premissas e seus quatro distratores têm rejeição fundamentada. Nas questões conceituais, não se adicionam recursos ausentes a uma proposta para torná-la correta. Q09 distingue alocação viável de ótima; Q10 exige os três critérios, sem presumir capacidade extra ou atualização não descrita.

O puzzle exige produzir os artefatos de pré-condição, não apenas constatar que há capacidade. Uma ordem que marque a reserva como confirmada sem autorização e confirmação do controle de acesso não atende ao comando. A validação documental examina as 120 permutações contra as quatro dependências, sem transformar a convenção deste processo em regra universal.

### Acessibilidade editorial

| Aspecto | Decisão documental | Homologação futura |
|---|---|---|
| Dados em tabela | Q02, Q03 e Q09 têm cabeçalhos e unidades; equivalentes lineares abaixo | Leitura semântica por linha/coluna e reflow |
| Visualização de Q07 | Valores, origem, escala e comprimentos descritos integralmente em texto | Não depender de cor ou desenho; testar compreensão de escala |
| Modelagem de Q05 | Entidades, referências e ocorrências expressas por palavras | Diagrama opcional com descrição equivalente |
| Tempo e medidas | Horários e unidades distinguem estado do processo; não são prazo de resposta | Conferir leitura de horas, moeda e quilômetros |
| Pessoas e responsabilidades | Papéis definidos, sem culpabilizar pessoa pelo desenho organizacional | Revisão de linguagem e diversidade |
| Puzzle | Cartões e artefatos em texto, botões mover, arraste opcional, foco/posição previstos | Teclado, toque, leitor de tela e ampliação |
| Tela pequena | Contexto, comando, alternativas e feedbacks separados; metadados fora da resposta | Pilotar Q05/Q09/Q10 e puzzle sem omitir premissas |
| Velocidade | Sem cronômetro obrigatório ou punição por tentativa/dica | Conferir pausa, retomada e acesso a explicações |

Equivalente linear de Q02: P11, Norte, 30 cópias, concluído; P12, Sul, 20, concluído; P13, Norte, 15, concluído; P14, Norte, 10, cancelado.

Equivalente linear de Q03: R1 pronta e disponível 09h, parecer concluído 16h02; R2, 10h e 16h04; R3, 11h e 16h06. A agenda de parecer começa 16h.

Equivalente linear de Q09: X consome duas unidades de captura e uma de catalogação, com benefício cinco; Y consome uma de captura e duas de catalogação, com benefício quatro. Disponibilidades dez/oito, demandas máximas quatro/três.

A conferência de acessibilidade é editorial. Não foram implementados ou testados controles de interface deste lote; teclado, leitor de tela, celular, zoom e toque reais dependem de apresentação futura autorizada.

### Checklist consolidado

- [x] Onze IDs previstos, únicos e sem sobreposição com comuns/CC.
- [x] F07/Portaria 168 como principal dos onze itens; curso SI explícito e localizadores próprios.
- [x] Dez questões, cinquenta alternativas e cinquenta feedbacks; um gabarito indicado e justificado por item.
- [x] Cotas 3/5/2 específicas e 7/9/4 nas vinte elegíveis, com puzzles separados.
- [x] Gabaritos C/E/B/A/D/A/C/E/E/B sem ciclo ou regra de uniformidade.
- [x] Premissas, unidades, critérios e rejeição de alternativas conferidos.
- [x] Puzzle com cinco blocos, ordem por quatro pré-condições, três dicas sem solução completa e retorno especificado.
- [x] Textos ao jogador sem o nome da avaliação externa; fontes pedagógicas restritas à curadoria.
- [x] Todos os validationStatus continuam provisional-pending-teacher-review.
- [x] Originalidade interna e acessibilidade editorial registradas com limites.
- [ ] Parecer docente independente, PPC e cotejo externo.
- [ ] Calibração e testes efetivos da apresentação/controles futuros.

## 16. Pendências e formulários de revisão docente

Onze registros de SI, um por ID/versão; nenhum parecer já favorável. Pendências transversais: PPC/oferta e momento formativo, originais/retificações, fontes complementares, calibração por raciocínio, originalidade externa, leitura com estudantes, acessibilidade efetiva, responsável humano e identidade institucional provisória.

Preencher docente, data, PPC/versão, fontes/localizadores, resolução sem gabarito, respostas alternativas defensáveis, evidências de originalidade/acessibilidade e parecer fundamentado. Recomendações documentais: manter em revisão, requer revisão, recomendar aprovação ou rejeitar. Não são enums novos nem alteração automática de validationStatus ou liberação de coleção.

### E26-Q-SI-01 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-I, os localizadores de SI e o objetivo do slot.
- [ ] Conferir vínculo objetivo–processo–componente e recorte introdutório, sem exigir ferramenta de arquitetura ou solução de roteamento.
- [ ] Resolver sem gabarito; confirmar C como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-02 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-II, os localizadores de SI e o objetivo do slot.
- [ ] Conferir os quatro registros, os cinco totais e a diferença entre filtrar, contar linhas e somar cópias. Manter equivalente linear da tabela.
- [ ] Resolver sem gabarito; confirmar E como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-03 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-I, os localizadores de SI e o objetivo do slot.
- [ ] Conferir estados e horários; separar identificação da espera de proposta de solução e de responsabilização individual. Validar relação pessoas–processo–informação.
- [ ] Resolver sem gabarito; confirmar B como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-04 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-I, os localizadores de SI e o objetivo do slot.
- [ ] Verificar que A preserva conferência e responsabilidade; avaliar cada substituição indevida de evento. Não generalizar que qualquer digitalização melhora o processo.
- [ ] Resolver sem gabarito; confirmar A como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-05 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-II, os localizadores de SI e o objetivo do slot.
- [ ] Testar duas ocorrências do mesmo par, obras em várias exposições, várias obras numa exposição e referências inexistentes. Reconhecer modelos equivalentes com outra chave que preserve as mesmas regras.
- [ ] Resolver sem gabarito; confirmar D como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-06 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-I, os localizadores de SI e o objetivo do slot.
- [ ] Conferir papel do responsável de negócio, participação das áreas e preservação dos eventos. Não exigir framework de governança não fornecido nem apagar dados para uniformizar o indicador.
- [ ] Resolver sem gabarito; confirmar A como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-07 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-II, os localizadores de SI e o objetivo do slot.
- [ ] Conferir valores 100/102, origem 99, comprimentos 1/3, diferença dois e variação 2%. Validar leitura textual da visualização e evitar exigir percepção visual.
- [ ] Resolver sem gabarito; confirmar C como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-08 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-I, os localizadores de SI e o objetivo do slot.
- [ ] Verificar cobertura de registro offline, retomada, não redigitação e confirmação pela equipe. Separar teste do produto, gestão do projeto e resultado organizacional.
- [ ] Resolver sem gabarito; confirmar E como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-09 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-II, os localizadores de SI e o objetivo do slot.
- [ ] Enumerar os vinte pares possíveis, conferir capacidades, demanda e objetivo 5X+4Y. Confirmar a solução ótima única 4/2 e discutir limites dos pesos fictícios.
- [ ] Resolver sem gabarito; confirmar E como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-SI-10 — versão 2

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07, SI-I e SI-II, os localizadores de SI e o objetivo do slot.
- [ ] Conferir os três critérios por proposta e a fronteira temporal de início da consulta. Validar o modelo de consistência sem prometer viabilidade real pelos números fictícios.
- [ ] Resolver sem gabarito; confirmar B como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, diferenças estruturais, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-P-SI-01 — versão editorial documental 2

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / ordem alternativa | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| SI | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F07/SI-I, objeto de processos e adequação ao momento formativo.
- [ ] Ordenar sem solução visível e tentar outra permutação; justificar cada dependência por artefato, sem impor hierarquia.
- [ ] Validar distinção entre relato, conciliação, cálculo, autorização e registro.
- [x] Conferir `PED-204`, `DISP-204`, `RES-204`, `AUT-204` e `ACC-204`, além da capacidade 20 para 12 participantes.
- [ ] Conferir referências entre versões e impossibilidade de concluir um bloco sem sua pré-condição.
- [ ] Revisar três dicas separadas/cumulativamente e o retorno textual ao jogador.
- [ ] Revisar acessibilidade por teclado/botões e tela pequena na integração futura.
- [ ] Conferir 100 XP uma vez por ID, base-n9/door apenas propostos e nenhum pagamento ou missão mista implementado.
- **Síntese / ordem alternativa / ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

## 17. Verificações e preservação do escopo

Resultados desta execução:

- Auditoria documental por script efêmero: **aprovada**. Dez questões e uma sequência de SI correspondem aos slots; os quatro lotes contêm 33 IDs únicos, todos entre os 66 IDs únicos do plano.
- Cinquenta alternativas e cinquenta feedbacks; uma resposta indicada por questão, mapa C/E/B/A/D/A/C/E/E/B. Onze formulários continuam sem parecer. Distribuições conferidas: 3/5/2 específicas e 7/9/4 nas vinte elegíveis de SI, sem contar puzzles.
- **Portaria Inep 168/2026/F07** confirmada como fonte principal e documentId dos onze itens. Campos de curso são exclusivamente SI; nenhuma referência normativa de outro curso foi usada dentro das fichas de questão/puzzle.
- Projeção extraída do Markdown e validada **somente em memória** com Ajv e schemas atuais: dez Question e um SequencePuzzle aceitos, coleção existente, cinco blocos/permutação, três dicas e referências base-n9/door conferidas. Nenhum arquivo JSON ou catálogo foi gravado.
- Consulta de Q02: P11/P13 totalizam 45; totais 30/55/65/75 dos distratores conferidos. Janela de parecer de Q03, critérios de evento/responsabilidade de Q04 e distinção despacho/aceite de Q06 revisados.
- Modelo de Q05 aceita múltiplas passagens do mesmo par, várias obras/exposições e exige referências existentes; a chave apenas do par não comporta o retorno. Casos de referência ausente/nula rejeitados no modelo de conferência.
- Q07: valores 100/102, origem 99, comprimentos 1/3, diferença dois e variação de 2% conferidos. Q08: somente E cobre o percurso offline–envio–conferência solicitado.
- Q09: os vinte pares inteiros do domínio foram enumerados; ótimo viável único em quatro X e dois Y, benefício 28. Capacidades e benefícios das cinco alternativas conferidos.
- Q10: somente B atende aos três critérios declarados de capacidade, versão e navegador; números são projeções fictícias, não medição de infraestrutura.
- Puzzle: **120 permutações examinadas**; uma única aceita tanto pela cadeia de quatro dependências quanto pelo fluxo de artefatos. A disponibilidade não equivale a reserva, a reserva não equivale a autorização e o portal só confirma após `ACC-204`.
- Gabaritos e rejeição dos distratores conferidos editorialmente; resolução docente independente permanece pendente. Testes dos modelos fechados não constituem execução de processos reais nem aprovação pedagógica.
- Triagem textual e cotejo estrutural com dois lotes comuns, CC e exemplos atuais: nenhuma duplicação interna identificada. Textos ao jogador, títulos, explicações, feedbacks, narrativa, blocos e dicas sem o nome da avaliação externa; originalidade externa não é garantida.
- Acessibilidade editorial conferida por equivalentes textuais, unidades e controles previstos; leitor de tela, teclado, toque, celular e zoom da apresentação futura não são homologados nesta etapa.
- **npm.cmd run validate:content: 113 testes aprovados em quatro arquivos**, cobrindo conteúdo, puzzles, contratos editoriais e missões existentes.
- SHA-256 do plano, padrão, dois lotes comuns e CC preservados desde a inspeção inicial. Git sem alterações em arquivos previamente versionados; somente o documento novo desta etapa.

Verificações formais não substituem PPC, parecer docente, calibração, fonte certificada, cotejo externo ou teste da experiência futura.

Somente docs/autoria/lote-especifico-si.md integra esta entrega. Plano, padrão, lotes comuns e de CC ficam intactos. Não se alteram schemas, código, catálogos, testes permanentes, interface, mapa, mecânicas, recompensas existentes ou progresso. Não se gera arquivo JSON nem conteúdo executável. O backlog já mantém revisão e integração como pendências; o inventário desta autoria fica aqui, sem ajuste de backlog. Nenhum lote posterior foi iniciado. Não houve publicação ou envio ao GitHub.
