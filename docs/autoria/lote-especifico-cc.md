# N9 — Jornada Digital: lote específico de Ciência da Computação

Autoria editorial — 13/11/2026, horário de Brasília. Versão documental 1.0. **Todos os onze itens permanecem provisional-pending-teacher-review.** Autoria assistida por IA; responsável humano pela consolidação a designar. Cenários, programas, registros e custos são fictícios. N9 é nome provisório sujeito à aprovação institucional. Material sem chancela do Inep ou declaração de produto oficial.

Escopo fechado: E26-Q-CC-01–10 e E26-P-CC-01. Somente este Markdown é criado. Não há JSON, importação, conteúdo executável, novo mapa, alteração de mecânica, publicação ou escrita de progresso.

## 1. Conferência prévia, fontes e cálculo das cotas

Referências lidas integralmente: [plano v2.0](../plano-colecao-enade-2026.md), [lote comum 01](lote-comum-01.md), [lote comum 02](lote-comum-02.md) e [padrão editorial do piloto](padrao-editorial-piloto.md). Contratos confrontados: Question, EditorialMetadata e SequencePuzzle; schemas question/editorial/puzzles; validadores e repositórios atuais, incluindo restrições de coleção e referências de desbloqueio. O Git estava limpo no commit d4d63bf antes da autoria.

O slot individual da seção 11.3 do plano governa área, competência, dificuldade e objetivo; não se transfere automaticamente a dificuldade ou a competência genérica de um bloco inteiro. Exemplos: Q02 usa CC-I dentro de CC-03, enquanto Q05/Q10 usam CC-II. P-CC-01 segue a seção 11.8. Não há novos códigos oficiais: CC-I/II e IDs de área são sínteses internas.

### Distribuição calculada antes da redação

| Conjunto documental | introductory | intermediate | advanced | Total de questões |
|---|---:|---:|---:|---:|
| Comuns 01: Q-COM-01–05 | 4 | 1 | 0 | 5 |
| Comuns 02: Q-COM-06–10 | 0 | 3 | 2 | 5 |
| Dez comuns já redigidas | 4 | 4 | 2 | 10 |
| Meta de vinte elegíveis em CC | 7 | 9 | 4 | 20 |
| Diferença necessária: meta menos comuns | 7 − 4 = 3 | 9 − 4 = 5 | 4 − 2 = 2 | 10 |
| Específicas deste lote | 3 | 5 | 2 | 10 |
| Comuns mais específicas de CC | 7 | 9 | 4 | 20 |

Q-CC-01–03 são introductory; Q-CC-04–08 intermediate; Q-CC-09–10 advanced. P-CC-01 é sequence intermediate e não entra nas vinte questões. O puzzle comum é introductory; os dois puzzles elegíveis de CC são contados separadamente. Elegibilidade aqui é a proposta editorial: nenhum desses conteúdos pendentes passa a estar disponível no jogo.

### Slots de CC conferidos

| ID | Área / síntese | Recorte | Dificuldade | Objetivo do plano | Fonte principal |
|---|---|---|---|---|---|
| E26-Q-CC-01 | COMUM-TEC01 — Algoritmos introdutórios / CC-I | Rastreamento de algoritmo sob condição explícita | introductory | Prever resultado de fluxo curto com estado inicial declarado. | F06 |
| E26-Q-CC-02 | CC-03 — Sistemas digitais e recursos computacionais / CC-I | Sistemas digitais e representação de sinais | introductory | Relacionar entradas e saída de circuito simples descrito. | F06 |
| E26-Q-CC-03 | CC-01 — Teoria da computação e compiladores / CC-I | Etapas de tradução de programas | introductory | Identificar função de etapa a partir de artefato fornecido. | F06 |
| E26-Q-CC-04 | CC-02 — Modelagem matemática, grafos e probabilidade / CC-I | Grafos e dependências | intermediate | Selecionar representação que satisfaça restrições de alcance. | F06 |
| E26-Q-CC-05 | CC-03 — Sistemas digitais e recursos computacionais / CC-II | Localidade de referência e organização de recursos | intermediate | Comparar efeitos de acessos sobre uso de recurso limitado. | F06 |
| E26-Q-CC-06 | CC-04 — Inteligência artificial, gráficos e imagens / CC-I | Inteligência artificial e adequação de abordagem | intermediate | Comparar métodos conforme objetivo e limitações fornecidas. | F06 |
| E26-Q-CC-07 | CC-04 — Inteligência artificial, gráficos e imagens / CC-I | Processamento de imagem | intermediate | Selecionar transformação coerente com resultado pretendido. | F06 |
| E26-Q-CC-08 | CC-02 — Modelagem matemática, grafos e probabilidade / CC-I | Probabilidade aplicada a hipótese computacional | intermediate | Comparar hipóteses usando dados e pressupostos explícitos. | F06 |
| E26-Q-CC-09 | CC-01 — Teoria da computação e compiladores / CC-I | Modelos de computação e limites de reconhecimento | advanced | Avaliar adequação de modelo a linguagem formal delimitada. | F06 |
| E26-Q-CC-10 | CC-03 — Sistemas digitais e recursos computacionais / CC-II | Concorrência, compartilhamento e evolução de recursos | advanced | Selecionar estratégia integrando correção, concorrência e custo. | F06 |
| E26-P-CC-01 | CC-01 — Teoria da computação e compiladores / CC-I | Transformações de artefatos de tradução em cinco blocos | intermediate | Relacionar artefatos e dependências de etapas no modelo de tradução fornecido. | F06 |

Todos os onze slots: courses somente CC; collectionId enade-2026; fonte principal official-reference; validationStatus provisional-pending-teacher-review. Questões: classification CC e version 1. Puzzle: kind sequence, versão editorial documental 1, sem inventar campo version no contrato SequencePuzzle.

### Divergência XI/XIII verificada e delimitada

A consulta desta autoria recuperou a reprodução da Portaria 172/2026, F10/TRC, na ABMES: art. 6º, **XI é virtualização; XIII é segurança da informação**. A competência ligada à proteção é art. 5º, II, b.2. O piloto remeteu a XI como localizador de segurança; o lote comum 02 registrou a ressalva e utilizou XIII. O erro de localizador não deve ser replicado nem transformado em mudança de competência.

Na Portaria 157/2026, F06/CC, a numeração é diferente: art. 6º, **XI é redes; XIII é bancos de dados; XX é segurança da informação**. Para CC-II, gerenciamento de recursos e concorrência encontra suporte no art. 5º, II, b.3–b.4; não se usa XIII de TRC como se fosse segurança em CC. Q10 deste lote trata de concorrência, não de autorização/revogação. Os objetos específicos de cada item estão na ficha e na seção 14.

Os lotes comuns são preservados integralmente; sua correção retrospectiva não faz parte desta execução. Conferência docente dos originais certificados e de retificações continua pendente. URLs, páginas e resultados de acesso ficam na seção 14.

### Camadas de evidência e formato

- **Referência oficial:** F06 sustenta competências/objetos de CC; F10 é consultada apenas para delimitar a divergência do localizador, sem substituir a matriz de CC.
- **Referência técnica primária:** materiais de ensino publicados por MIT e University of Florida, identificados na seção 14, apoiam conceitos; não são portarias brasileiras nem questões de prova reaproveitadas.
- **Histórico:** leitura dos registros analíticos locais; não se reabriram cadernos históricos nem se transplantou questão de avaliação anterior.
- **Inferência/autoria:** situações, artefatos, regras do modelo, distratores, feedbacks, dificuldades e relações pedagógicas deste lote.
- **Pendente:** PPC/oferta, consolidação humana, parecer docente independente, calibração, cotejo externo de originalidade e acessibilidade na experiência.

Títulos de questão, objetivos, códigos de rastreabilidade, risco de similaridade e pareceres são documentação; não entram como propriedades extras no objeto estrito. Question não tem kind. Campos opcionais example/editorialStatus são dispensados nesta autoria e não concedem aprovação. As referências complementares permanecem documentais; source conserva uma fonte principal. Não se alteram schemas ou recompensas do jogo.

## 2. E26-Q-CC-01 — O acumulador do farol

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-01 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | O acumulador do farol |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Algoritmos introdutórios |
| Rastreabilidade | COMUM-TEC01 / CC-I; F06, art. 5º, I, a.1/a.5; art. 6º, I |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Prever resultado de fluxo curto com estado inicial declarado. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Rastrear atribuições e condições de um algoritmo para prever seu estado final.

### Texto ao jogador

**Contexto.** Um farol fictício da Base N9 processa quatro leituras, na ordem 4, 2, 5, 3. O algoritmo começa com acumulador igual a zero. Para cada leitura:

1. se a leitura for maior ou igual a 3, soma essa leitura ao acumulador;
2. caso contrário, substitui o acumulador pelo valor 1.

As quatro leituras são processadas uma vez, sem reiniciar o acumulador entre elas. Os valores são dados sintéticos deste exercício.

**Enunciado.** Qual valor fica no acumulador depois da quarta leitura?

- **A.** 12, acumulando as leituras que atingem o limite e preservando o valor quando ele não é atingido.
- **B.** 14, acumulando todas as leituras recebidas durante o processamento.
- **C.** 1, substituindo o acumulador quando a última leitura é igual ao limite.
- **D.** 9, incluindo a substituição na segunda leitura e as somas nas duas seguintes.
- **E.** 8, substituindo o acumulador por zero quando a leitura fica abaixo do limite.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** Os estados, após cada leitura, são 4, 1, 6 e 9. A segunda leitura não é somada: ela substitui o acumulador por 1. A quarta leitura vale 3 e entra no ramo maior ou igual. Esse rastreamento vale para o algoritmo descrito, não para uma regra universal de sensores.

| Alternativa | Feedback específico |
|---|---|
| A | 12 resultaria de ignorar a leitura 2 sem substituir o acumulador. O ramo alternativo exige atribuir 1. |
| B | 14 é a soma das quatro entradas; o algoritmo não soma a leitura abaixo do limite. |
| C | A leitura 3 satisfaz maior ou igual a 3. Ela soma ao estado 6, em vez de provocar substituição. |
| D | Correto: após a substituição, 1 + 5 = 6 e 6 + 3 = 9. |
| E | O ramo alternativo atribui 1, não zero. Reiniciar em zero produziria 0 + 5 + 3 = 8, mas essa não é a regra. |

### Originalidade, limites e revisão

- **Competência de partida:** Prever resultado de fluxo curto com estado inicial declarado.
- **Raciocínio exigido:** Acompanhar estado mutável, ramo alternativo e inclusão da igualdade no limite.
- **Elementos autorais e diferença interna:** Não reutiliza indicadores/causalidade dos comuns, média do puzzle executável ou progressão por duplicação de EX-CC-01. O elemento central é uma atribuição que substitui o acumulador entre duas adições.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** A ordem das leituras, o estado inicial e a diferença entre somar e substituir são explícitos. O primeiro ramo inclui igualdade.
- **Revisão docente específica:** Resolver as quatro transições, conferir o limite inclusivo e a dificuldade introdutória. Validar se cada distrator corresponde a um erro de rastreamento identificável.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 3. E26-Q-CC-02 — Três entradas, uma habilitação

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-02 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Três entradas, uma habilitação |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Sistemas digitais e recursos computacionais |
| Rastreabilidade | CC-03 / CC-I; F06, art. 5º, I, a.1; art. 6º, V |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Relacionar entradas e saída de circuito simples descrito. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar sinais binários e operações lógicas à saída de um circuito combinacional descrito.

### Texto ao jogador

**Contexto.** Um circuito didático fictício da Base N9 recebe três sinais binários: pedido local P, pedido remoto R e bloqueio B. Valor 1 significa sinal ativo; 0, inativo.

O circuito primeiro combina P e R com OU: produz 1 quando pelo menos um pedido está ativo. Depois combina esse resultado com NÃO B por E: a saída H só vale 1 se houver pedido e o bloqueio estiver inativo. Não há memória de estados anteriores.

Considere os testes nesta ordem: teste 1, P=0, R=1, B=0; teste 2, P=1, R=0, B=1; teste 3, P=0, R=0, B=0.

**Enunciado.** Qual sequência de saídas H corresponde aos testes 1, 2 e 3, respectivamente?

- **A.** 1, 0, 0: pedido remoto habilitado, pedido bloqueado e ausência de pedido.
- **B.** 1, 1, 0: pedido remoto habilitado, pedido local habilitado e ausência de pedido.
- **C.** 0, 0, 0: habilitação exige os dois pedidos ativos em cada teste.
- **D.** 0, 1, 1: as saídas são as inversões da habilitação descrita.
- **E.** 1, 0, 1: a ausência de bloqueio habilita também o teste sem pedidos.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A função é H = (P OU R) E (NÃO B). No teste 1 há pedido e não há bloqueio: H=1. No teste 2 o bloqueio está ativo: H=0. No teste 3 não há pedido: H=0. Os valores são sinais lógicos, não dependem de cor ou de posição num desenho.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: a saída exige pedido presente e bloqueio ausente; os três testes resultam em 1, 0, 0. |
| B | O segundo teste tem B=1. O pedido local não contorna o bloqueio definido. |
| C | OU admite um único pedido. Exigir ambos muda o primeiro estágio do circuito. |
| D | Essa sequência complementa H. O circuito inverte B, não sua saída final. |
| E | No teste 3, NÃO B vale 1, mas P OU R vale 0. A conjunção ainda resulta em 0. |

### Originalidade, limites e revisão

- **Competência de partida:** Relacionar entradas e saída de circuito simples descrito.
- **Raciocínio exigido:** Compor OU, negação e E, mantendo a distinção entre pedido e bloqueio.
- **Elementos autorais e diferença interna:** Não repete barreiras de interface, canais de atendimento ou controles de acesso dos comuns. Trabalha composição de sinais em um circuito sem estado, com três vetores de teste.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** P/R/B têm papéis definidos e a ordem das saídas acompanha os testes. Não há prioridade de pedido nem retenção de estado. A competência CC-I vem do slot, embora outros slots da área usem CC-II.
- **Revisão docente específica:** Conferir a tabela verdade, inclusive as oito combinações possíveis, e a equivalência da descrição textual ao circuito. Não exigir diagrama ou cor.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 4. E26-Q-CC-03 — Uma expressão bem formada pode falhar

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-03 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Uma expressão bem formada pode falhar |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Teoria da computação e compiladores |
| Rastreabilidade | CC-01 / CC-I; F06, art. 5º, I, a.1/a.4; art. 6º, XIX |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Identificar função de etapa a partir de artefato fornecido. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | CC-T01 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Distinguir funções de etapas de tradução a partir de um diagnóstico e das regras da linguagem fornecidas.

### Texto ao jogador

**Contexto.** Um tradutor didático da Base N9 analisa uma linguagem fictícia. Nela, a soma com o símbolo + aceita dois números e não converte texto em número. A variável altura foi declarada numérica. O trecho analisado é: altura + "leste".

O relatório informa: os símbolos e a palavra entre aspas foram reconhecidos; a estrutura de expressão está bem formada; o diagnóstico restante aponta incompatibilidade entre o tipo de altura e o tipo do literal "leste". Não há chamada a função externa nesse trecho.

**Enunciado.** Qual função de etapa corresponde ao diagnóstico restante?

- **A.** Análise léxica: separar os caracteres em símbolos e reconhecer o literal entre aspas.
- **B.** Análise sintática: verificar a organização da expressão segundo a gramática.
- **C.** Análise semântica: conferir se os tipos dos operandos permitem a operação solicitada.
- **D.** Otimização: substituir a expressão por outra com menor custo de execução.
- **E.** Ligação: resolver referências a funções fornecidas por módulos externos.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** O diagnóstico compara tipos à regra da operação, função semântica neste modelo. Reconhecer símbolos e verificar a forma da expressão já ocorreu sem falha. A linguagem exclui conversão implícita, então não há uma leitura alternativa de + como concatenação. Isso não estabelece uma arquitetura única para todos os compiladores.

| Alternativa | Feedback específico |
|---|---|
| A | O relatório já reconheceu símbolos e literal. Separá-los não verifica compatibilidade dos tipos. |
| B | A estrutura está bem formada por premissa. Uma expressão pode ter forma válida e operação incompatível com os tipos. |
| C | Correto: o problema restante é a validade da operação para os tipos encontrados, e não a grafia ou a estrutura. |
| D | Reduzir custo não torna válida uma soma proibida pela regra fornecida. Não é o diagnóstico descrito. |
| E | Não há referência externa a resolver. A incompatibilidade está entre operandos da própria expressão. |

### Originalidade, limites e revisão

- **Competência de partida:** Identificar função de etapa a partir de artefato fornecido.
- **Raciocínio exigido:** Interpretar um artefato de diagnóstico distinguindo reconhecimento, estrutura e regra de tipos.
- **Elementos autorais e diferença interna:** Nenhum comum usa artefatos de tradução. A questão não ordena passes como o puzzle CC: classifica um diagnóstico de incompatibilidade de operandos, sem otimizar fluxo de controle.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** A regra local proíbe concatenação e coerção. A estrutura já foi aceita, mas isso não torna válidas todas as operações sobre os tipos.
- **Revisão docente específica:** Confirmar C sem depender de uma linguagem comercial. Distinguir modelo didático de implementações que combinam fases e verificar clareza do diagnóstico.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 5. E26-Q-CC-04 — A linhagem dos artefatos

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-04 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | A linhagem dos artefatos |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Modelagem matemática, grafos e probabilidade |
| Rastreabilidade | CC-02 / CC-I; F06, art. 5º, I, a.2/a.4; art. 6º, XV |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar representação que satisfaça restrições de alcance. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Analisar caminhos de um grafo dirigido para selecionar uma representação que preserve relações de alcance e independência.

### Texto ao jogador

**Contexto.** Um arquivo fictício de pesquisa da Base N9 representa a linhagem de quatro artefatos: fonte S, transformações L e M e síntese T. Um arco U→V permite transmitir dados de U para V. Um caminho segue um ou mais arcos em sua direção; não há ligações além das listadas.

A representação deve permitir que S alcance L, M e T, e que tanto L quanto M alcancem T. Também deve impedir que L alcance M ou que M alcance L: as transformações permanecem independentes entre si. Cada proposta tem exatamente quatro arcos e os mesmos quatro vértices.

**Enunciado.** Qual conjunto de arcos atende a todas as relações exigidas?

- **A.** S→L; L→M; M→T; S→T.
- **B.** S→L; S→M; L→T; T→M.
- **C.** S→L; L→T; M→T; T→S.
- **D.** S→L; S→M; T→L; T→M.
- **E.** S→L; S→M; L→T; M→T.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** Em E, S chega a L e M diretamente e a T por qualquer uma delas. L e M chegam a T, que não tem saída; assim nenhuma chega à outra. As demais propostas mudam uma relação importante: A encadeia L com M; B não dá saída de M até T; C não permite a S chegar a M; D não permite chegar a T a partir de S, L ou M.

| Alternativa | Feedback específico |
|---|---|
| A | O arco L→M permite que L alcance M, violando a independência exigida. |
| B | M não tem arco de saída. T→M não pode ser percorrido ao contrário para que M alcance T. |
| C | S percorre L, T e retorna a S, mas não alcança M. M→T só permite a direção que sai de M. |
| D | Os arcos que envolvem T saem dele. Falta caminho de L ou M até T. |
| E | Correto: os dois ramos convergem em T sem criar caminho entre L e M. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar representação que satisfaça restrições de alcance.
- **Raciocínio exigido:** Calcular alcance transitivo em grafos dirigidos, distinguindo convergência, encadeamento e sentido dos arcos.
- **Elementos autorais e diferença interna:** Não é diagnóstico de rede como COM-07 ou religamento de equipamento dos exemplos: todos os arcos são propostas abstratas de linhagem; o problema é uma propriedade de alcance/independência.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Independência é definida por ausência de caminho entre L e M, não ausência de ancestral comum. Compartilhar S e T é permitido.
- **Revisão docente específica:** Conferir o fecho transitivo de cada grafo e a rejeição dos quatro distratores. Manter os arcos também em texto linear e validar representações equivalentes.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 6. E26-Q-CC-05 — A ordem também ocupa a cache

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-05 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | A ordem também ocupa a cache |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Sistemas digitais e recursos computacionais |
| Rastreabilidade | CC-03 / CC-II; F06, art. 5º, II, b.3–b.4; art. 6º, VI |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar efeitos de acessos sobre uso de recurso limitado. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar padrões de acesso por localidade temporal usando uma política explícita de substituição de cache.

### Texto ao jogador

**Contexto.** Uma simulação fictícia da Base N9 usa uma cache que guarda dois blocos inteiros. Cada sequência começa com cache vazia. Acesso a bloco presente é acerto; a bloco ausente é falta, que carrega esse bloco. Se já houver dois blocos, sai aquele cujo último acesso ocorreu há mais tempo: política LRU. Todo acesso, inclusive acerto, atualiza essa ordem de uso.

Duas sequências leem os mesmos blocos com as mesmas multiplicidades, mas em ordens diferentes:

- S: X, Y, X, Z, Y, X.
- T: X, X, X, Y, Y, Z.

Não há antecipação de carga, escrita, diferença de tamanho de bloco ou outra cache.

**Enunciado.** Quantas faltas ocorrem em S e T, respectivamente, segundo essa política?

- **A.** 3 em S e 3 em T, contando apenas os três nomes de blocos distintos.
- **B.** 5 em S e 3 em T, considerando recargas e atualização do último uso.
- **C.** 6 em S e 6 em T, contando cada leitura como uma falta.
- **D.** 4 em S e 3 em T, mantendo a ordem de entrada mesmo depois de um acerto.
- **E.** 5 em S e 2 em T, dispensando a primeira carga do terceiro bloco em T.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** Em S, os acessos são falta, falta, acerto, falta, falta, falta: cinco. O acerto em X o torna mais recente; ao carregar Z, sai Y. Depois Y expulsa X, e o último X precisa ser recarregado. Em T, cada primeira ocorrência de X, Y e Z é falta; as repetições adjacentes são acertos: três. Esse resultado depende do traço e da LRU declarados; não prova vantagem universal de uma ordem ou cache real.

| Alternativa | Feedback específico |
|---|---|
| A | Três blocos distintos não limitam faltas a três. Um bloco retirado pode precisar ser carregado novamente. |
| B | Correto: a atualização no acerto de X altera qual bloco sai, e a sequência S sofre recargas que T evita. |
| C | Leituras repetidas de bloco ainda presente são acertos. A cache não é desativada após cada leitura. |
| D | Essa contagem usa ordem de entrada, como FIFO. LRU atualiza a recência no terceiro acesso de S, que é acerto em X. |
| E | Z ainda não entrou em T antes do último acesso. Mesmo substituindo outro bloco, sua primeira carga é uma falta. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar efeitos de acessos sobre uso de recurso limitado.
- **Raciocínio exigido:** Manter ordem de recência, distinguir primeira carga de recarga e comparar traços com igual multiconjunto.
- **Elementos autorais e diferença interna:** Diferente da cota de memória por processo em COM-08: não se aguarda liberação de tarefa; a política de substituição e a ordem dos acessos determinam acertos/recargas.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Cache totalmente associativa neste modelo: qualquer bloco pode ocupar uma das duas posições. Não há mapeamento por endereço. Cada traço reinicia vazio e acertos atualizam LRU.
- **Revisão docente específica:** Rastrear conteúdos e ordem MRU/LRU nos doze acessos; conferir 5/3 e o distrator FIFO 4/3. Não generalizar custo ou desempenho físico.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 7. E26-Q-CC-06 — Aprender padrões ou aplicar a regra?

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-06 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Aprender padrões ou aplicar a regra? |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Inteligência artificial, gráficos e imagens |
| Rastreabilidade | CC-04 / CC-I; F06, art. 5º, I, a.3–a.4; art. 6º, XII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar métodos conforme objetivo e limitações fornecidas. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar abordagens de decisão por regras e por aprendizagem considerando a evidência e a garantia exigidas no problema.

### Texto ao jogador

**Contexto.** Um classificador didático fictício da Base N9 recebe dois valores inteiros de 0 a 9: vibração V e temperatura T. A política em vigor define rota de inspeção se V for maior ou igual a 4 e T maior ou igual a 3; em qualquer outro caso, define rota de rotina.

A equipe precisa cumprir essa política em todos os cem pares possíveis, registrar a comparação que decidiu a rota e usar uma nova versão da regra assim que ela for cadastrada. Não há exemplos rotulados de decisões anteriores. O objetivo desta versão é executar a política definida, não descobrir uma política a partir de dados. Considere apenas o que cada proposta descreve, sem adicionar validações ou conversões.

**Enunciado.** Qual proposta demonstra atendimento ao objetivo com as informações disponíveis?

- **A.** Agrupar os pares pela proximidade dos valores e dar a cada grupo a rota do seu centro, sem verificar todos os pares do grupo.
- **B.** Aplicar a regra vigente a cada par e registrar os resultados das comparações com seus limites.
- **C.** Transferir um classificador treinado em outra instalação e manter suas saídas até surgir um conjunto local para treinamento.
- **D.** Usar a rota mais frequente em pares gerados ao acaso e aplicá-la aos cem pares durante essa versão.
- **E.** Ajustar um classificador para concordar com vinte pares da política e reutilizá-lo sem conferir os outros oitenta.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** A regra já é a definição da decisão desejada. Aplicá-la diretamente torna cada comparação verificável, cobre os cem pares e permite usar a versão cadastrada sem aprender a partir de rótulos ausentes. Agrupamento, transferência e ajuste por amostra podem ser úteis em outros problemas, mas as propostas não demonstram conformidade exata aqui. A questão não conclui que métodos aprendidos sejam inadequados em geral.

| Alternativa | Feedback específico |
|---|---|
| A | Um grupo pode atravessar um limite da política. A rota do centro não demonstra a rota correta para cada par. |
| B | Correto: a proposta usa a definição disponível e deixa rastreável o motivo da rota. Não precisa estimar uma regra que já foi fornecida. |
| C | Sem validação de equivalência, o classificador de outra instalação pode seguir outra política. Esperar dados locais não cumpre a regra cadastrada agora. |
| D | Os cem pares não recebem uma única rota pela política. Frequência global não substitui as comparações de cada entrada. |
| E | Concordar em vinte casos não demonstra concordância nos outros oitenta nem atualização imediata à regra vigente. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar métodos conforme objetivo e limitações fornecidas.
- **Raciocínio exigido:** Distinguir execução exata de regra conhecida de inferência por padrões; examinar o alcance das garantias de cada proposta.
- **Elementos autorais e diferença interna:** Não elege protótipos como EX-COMUM-06 nem discute intercâmbio científico como COM-06. O problema central é adequação de método de decisão a regra formal, domínio finito e ausência de rótulos.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Todos os cem pares pertencem ao domínio declarado. Não se presume que um modelo aprendido nunca possa representar a regra, apenas que as propostas apresentadas não a verificam integralmente.
- **Revisão docente específica:** Conferir os cem pares, incluindo os limites 4 e 3, e a diferença entre política prescrita e padrão inferido. Revisar sem afirmar superioridade universal de sistemas por regras.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 8. E26-Q-CC-07 — Um ponto isolado não é uma faixa

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-07 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Um ponto isolado não é uma faixa |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Inteligência artificial, gráficos e imagens |
| Rastreabilidade | CC-04 / CC-I; F06, art. 5º, I, a.1/a.4; art. 6º, XIV |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar transformação coerente com resultado pretendido. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar transformações locais de imagem por seus efeitos sobre ruído isolado e transição de uma região uniforme.

### Texto ao jogador

**Contexto.** Uma linha de uma imagem sintética da Base N9 contém nove intensidades, na ordem das posições 1 a 9: 0, 0, 255, 0, 0, 255, 255, 255, 255. O valor 255 isolado na posição 3 foi identificado como ruído; a faixa verdadeira começa na posição 6. Aqui 0 e 255 são números, sem depender de uma cor de tela.

Uma transformação produzirá apenas as posições centrais 2 a 8. Para cada centro, sua janela contém o valor anterior, o próprio valor e o seguinte, sempre da linha original: resultados intermediários não voltam à entrada. O resultado desejado é 0, 0, 0, 0, 255, 255, 255, removendo o ponto isolado e preservando o início da faixa.

Mediana de três valores é o valor do meio depois de ordená-los; média é a soma dividida por três. Os filtros abaixo usam essas janelas, exceto a operação pontual indicada.

**Enunciado.** Qual transformação produz exatamente o resultado desejado nas sete posições centrais?

- **A.** Substituir cada centro pelo maior valor de sua janela de três elementos.
- **B.** Substituir cada centro pela média aritmética de sua janela de três elementos.
- **C.** Substituir cada centro pelo menor valor de sua janela de três elementos.
- **D.** Substituir cada centro pela mediana de sua janela de três elementos.
- **E.** Substituir cada centro original por 255 se ele for pelo menos 128, e por 0 caso contrário.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** A mediana dá 0 nas janelas centradas em 2, 3, 4 e 5, porque cada uma contém dois zeros. Dá 255 nos centros 6, 7 e 8, onde há pelo menos dois valores 255. O máximo preserva/expande o ponto isolado; o mínimo retarda a faixa; a média introduz 85 e 170; o limiar pontual mantém o ruído que já era 255. Essa escolha vale para a linha e a janela declaradas, não para todo ruído ou imagem.

| Alternativa | Feedback específico |
|---|---|
| A | O máximo de cada uma das sete janelas é 255. O ruído contamina janelas vizinhas e o resultado não coincide com o alvo. |
| B | As primeiras janelas geram 85 e a centrada em 6 gera 170. São níveis intermediários ausentes do resultado solicitado. |
| C | No centro 6 a janela ainda contém um zero; o mínimo apaga o primeiro ponto verdadeiro da faixa. |
| D | Correto: a mediana remove o 255 isolado sem deslocar a transição especificada neste traço. |
| E | O ponto da posição 3 já está acima de 128, então continua 255. Operação pontual não usa o contraste com vizinhos para removê-lo. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar transformação coerente com resultado pretendido.
- **Raciocínio exigido:** Comparar sete janelas locais, sem processamento em cascata, e relacionar estatística de vizinhança ao efeito espacial pedido.
- **Elementos autorais e diferença interna:** Os comuns não apresentam processamento de imagem. Não usa comunicação por cor, acessibilidade visual ou indicadores de exposição; a decisão compara operações numéricas sobre vizinhanças.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Todas as janelas usam a entrada original; bordas 1 e 9 não são saídas. A faixa desejada é dada pelo caso, sem exigir adivinhar uma imagem visual.
- **Revisão docente específica:** Calcular as sete saídas dos cinco operadores, conferir mediana versus média e a transição na posição 6. Testar leitura linear sem depender da disposição visual.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 9. E26-Q-CC-08 — Duas réplicas, uma interrupção

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-08 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Duas réplicas, uma interrupção |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Modelagem matemática, grafos e probabilidade |
| Rastreabilidade | CC-02 / CC-I; F06, art. 5º, I, a.2/a.4; art. 6º, XVI |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar hipóteses usando dados e pressupostos explícitos. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar hipóteses de indisponibilidade distinguindo interseção e união de eventos sob independência explicitada.

### Texto ao jogador

**Contexto.** Um serviço fictício da Base N9 tem duas réplicas, A e B. Nesta simulação, em uma mesma rodada A falha com probabilidade 1/4 e B com probabilidade 1/3. Os eventos de falha são independentes. Não há outro componente que provoque interrupção, e a troca para a réplica disponível funciona nessa rodada.

O serviço só fica interrompido se ambas falharem na mesma rodada. Se pelo menos uma funcionar, o atendimento continua. As probabilidades são parâmetros didáticos, não estimativas de uma infraestrutura real.

**Enunciado.** Qual hipótese calcula corretamente a probabilidade de interrupção do serviço em uma rodada?

- **A.** 1/12, pois a interrupção corresponde à ocorrência conjunta das duas falhas independentes.
- **B.** 1/2, pois a interrupção corresponde à falha de pelo menos uma das duas réplicas.
- **C.** 7/12, pois somar as duas probabilidades conta as rodadas de interrupção.
- **D.** 11/12, pois a probabilidade de continuidade mede as interrupções do serviço.
- **E.** 1/4, pois a falha de A determina a interrupção mesmo quando B funciona.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A interrupção é a interseção das falhas. Pela independência fornecida, sua probabilidade é (1/4) × (1/3) = 1/12. A união vale 1/4 + 1/3 − 1/12 = 1/2, mas inclui rodadas com uma réplica ainda funcionando. A continuidade vale 1 − 1/12 = 11/12. Não se presume que falhas reais de réplicas sejam independentes.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: ambas precisam falhar; a independência permite multiplicar as probabilidades no modelo. |
| B | 1/2 é a probabilidade de ao menos uma falhar, que não é a condição de interrupção definida. |
| C | A soma 7/12 conta a dupla falha duas vezes e também inclui falhas isoladas. Não calcula a interseção exigida. |
| D | 11/12 é a probabilidade de pelo menos uma réplica funcionar, complemento da interrupção. |
| E | B mantém o atendimento quando A falha e B funciona. A falha de A sozinha não determina a interrupção. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar hipóteses usando dados e pressupostos explícitos.
- **Raciocínio exigido:** Traduzir a regra de continuidade para evento conjunto, calcular sob independência e separar falha de componente de falha do serviço.
- **Elementos autorais e diferença interna:** Não reaproveita conclusões descritivas/causais de COM-01 ou contagens socioambientais: usa um modelo probabilístico explícito de redundância e definição lógica de interrupção.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Independência, funcionamento da troca, ausência de causa comum e janela de uma rodada são premissas do modelo, sem promessa sobre ambiente real.
- **Revisão docente específica:** Conferir interseção 1/12, união 1/2, soma 7/12 e complemento 11/12. Validar interpretação de independência sem transferi-la a sistemas reais.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 10. E26-Q-CC-09 — Reconhecer sem impor um teto

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-09 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Reconhecer sem impor um teto |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Teoria da computação e compiladores |
| Rastreabilidade | CC-01 / CC-I; F06, art. 5º, I, a.1/a.2/a.4; art. 6º, XVIII |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Avaliar adequação de modelo a linguagem formal delimitada. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | CC-T03 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Avaliar a capacidade de modelos de reconhecimento diante de uma relação de contagem sem limite fixo, distinguindo não regularidade de indecidibilidade.

### Texto ao jogador

**Contexto.** Um laboratório fictício da Base N9 define uma linguagem de registros sobre os símbolos x, # e y: um ou mais x, exatamente um # e, depois, exatamente dois y para cada x anterior. Não se aceitam outros símbolos ou outra ordem. Exemplos válidos são x#yy e xx#yyyy; xx#yy é inválido.

O reconhecedor deve decidir corretamente para todo registro finito dessa linguagem, sem impor teto ao número de x. Um autômato finito aqui tem quantidade fixa de estados e nenhuma memória externa; uma pilha abstrata pode crescer conforme a entrada. É permitido usar fases para controlar a ordem dos símbolos e rejeitar ordem incorreta. Tentar desempilhar sem marcador implica rejeição.

A relação de contagem deve ser exata, não apenas aproximada ou verificada para amostras.

**Enunciado.** Qual proposta fundamenta um reconhecimento exato para todos os comprimentos permitidos?

- **A.** Usar estados finitos para guardar só os restos das contagens por 3; aceitar quando a relação entre esses restos coincidir.
- **B.** Guardar numa tabela os registros válidos com até cem x; rejeitar os maiores por ultrapassarem a tabela construída.
- **C.** Usar estados finitos para aceitar x seguidos de # e y; verificar apenas a existência e a ordem das três partes.
- **D.** Classificar a linguagem como indecidível por exigir contagem ilimitada; abandonar a construção de um reconhecedor que sempre termine.
- **E.** Empilhar dois marcadores por x, desempilhar um por y após # e aceitar só ao final com pilha vazia, mantendo as fases e ao menos um x.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** E constrói a correspondência exata: depois de n símbolos x há 2n marcadores; os y precisam consumi-los sem faltar nem sobrar. O controle de fases rejeita símbolos fora de ordem, separador extra e ausência de x. Cada entrada finita termina. Um autômato finito sem memória auxiliar não basta: para n diferente de m, os prefixos x elevado a n e x elevado a m são distinguíveis pelo sufixo # seguido de 2n símbolos y. Esse sufixo completa o primeiro e não o segundo. Há infinitos prefixos assim distinguíveis, exigindo mais que um conjunto fixo de estados. Isso demonstra não regularidade, não indecidibilidade.

| Alternativa | Feedback específico |
|---|---|
| A | Contagens diferentes podem ter os mesmos restos. Por exemplo, x#yyyyy satisfaz a igualdade módulo 3 entre 2 e 5, mas tem cinco y em vez de dois. |
| B | A linguagem não tem teto de cem x. A tabela decide apenas uma parte limitada e rejeita registros maiores que podem ser válidos. |
| C | A forma x repetido, #, y repetido não verifica a proporção. xx#yy passaria nessa verificação de ordem e deveria ser rejeitado. |
| D | Contagem sem teto fixo não implica indecidibilidade. O procedimento com pilha termina para cada entrada finita e decide a relação. |
| E | Correto: a pilha registra a quantidade ainda esperada; controle de fases, ao menos um x e consumo integral impedem aceitar contagem ou formato incorretos. |

### Originalidade, limites e revisão

- **Competência de partida:** Avaliar adequação de modelo a linguagem formal delimitada.
- **Raciocínio exigido:** Relacionar construção com pilha, invariante de contagem e argumento de prefixos distinguíveis; separar limite de memória finita de impossibilidade de decisão.
- **Elementos autorais e diferença interna:** Nenhum comum aborda classes de linguagens ou capacidade de modelos. Os dados, o formato de registro e os distratores de congruência, teto, ordem e indecidibilidade foram redigidos para este slot, sem transpor enunciado de prova.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Memória de um contador ilimitado não cabe escondida no autômato finito. O modelo de pilha é abstrato; 'sem teto' é exigência matemática, não alegação de memória física infinita. Rejeitar pilha vazia antes de consumir todos os y.
- **Revisão docente específica:** Rever prova por prefixos distinguíveis e suficiência da construção, inclusive entrada vazia, n=0, separadores extras, símbolos fora de ordem e contagens em falta/excesso. Não inferir indecidibilidade.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 11. E26-Q-CC-10 — Contar eventos sem perder atualizações

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-CC-10 |
| Versão | 1 |
| Contrato / classification | question / CC |
| Título editorial | Contar eventos sem perder atualizações |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Sistemas digitais e recursos computacionais |
| Rastreabilidade | CC-03 / CC-II; F06, art. 5º, II, b.3–b.4; art. 6º, VI e VII |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar estratégia integrando correção, concorrência e custo. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de CC para criação autoral no recorte indicado; modelo e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento técnico documental | Não necessário ao modelo fechado; cálculos e premissas explicitados |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar estratégias de atualização concorrente por sua correção, paralelismo entre recursos independentes e custo explícito.

### Texto ao jogador

**Contexto.** Dois trabalhadores de software da Base N9 fictícia incrementam contadores por canal. Cada evento deve acrescentar exatamente uma unidade. Operações sobre o mesmo canal podem se intercalar; ler, somar localmente e escrever são passos separados. Não há falhas ou reinícios durante a rodada.

A nova versão precisa preservar todos os incrementos e permitir que canais diferentes sejam atualizados em paralelo. Entre estratégias que atendam a essas duas condições, deve usar a de menor custo por incremento informado abaixo. Os custos são unidades didáticas totais por incremento, sem custo oculto.

O ambiente oferece soma atômica por canal: ela lê, soma e escreve como um único passo indivisível para aquele canal, sem bloquear outros canais. Oferece também travas: uma global bloqueia todos os canais; uma por canal bloqueia somente aquele canal. Contador, trava e soma atômica são acessados por todas as atualizações conforme a estratégia escolhida.

**Enunciado.** Qual estratégia atende às duas condições e ao critério de menor custo entre as propostas?

- **A.** Ler, somar e escrever sem trava, ao custo 1; permitir sobreposição de atualizações no mesmo canal.
- **B.** Proteger a leitura e a escrita com uma trava global, ao custo 3; serializar as atualizações de todos os canais.
- **C.** Proteger a leitura e a escrita com uma trava por canal, ao custo 5; permitir paralelismo entre canais.
- **D.** Usar a soma atômica por canal, ao custo 2; preservar incrementos sem bloquear canais diferentes.
- **E.** Ler e comparar antes de escrever sem trava, ao custo 3; executar comparação e escrita como passos separados.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** D preserva incrementos pela indivisibilidade declarada, permite canais independentes e custa 2. C também preserva incrementos e paralelismo entre canais, mas custa 5, logo perde no critério explícito. B serializa canais independentes. Em A, duas leituras do mesmo valor podem gerar duas escritas iguais, perdendo um incremento. E mantém uma janela entre verificar e escrever: duas comparações podem passar antes de ambas escreverem. A escolha não afirma que soma atômica seja sempre mais barata em hardware real.

| Alternativa | Feedback específico |
|---|---|
| A | Duas atualizações podem ler 0, calcular 1 e escrever 1. O resultado deveria ser 2; custo menor não compensa perda de incremento. |
| B | A trava protege a correção, mas impede atualizar canais diferentes em paralelo, contrariando a segunda condição. |
| C | A estratégia atende correção e paralelismo entre canais. Contudo, custa 5, enquanto D atende às mesmas condições por 2. |
| D | Correto: a semântica atômica evita a escrita perdida e a operação não bloqueia canais distintos; o custo é o menor entre as propostas que atendem às duas condições. |
| E | Comparar e depois escrever em passos separados não elimina a corrida. Ambos podem verificar o valor antigo antes da primeira escrita. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar estratégia integrando correção, concorrência e custo.
- **Raciocínio exigido:** Construir intercalações de perda de atualização e comparar granularidade de sincronização com custo entre soluções corretas.
- **Elementos autorais e diferença interna:** Não repete permissões/revogação de COM-10 nem cota de memória de COM-08. Trata de atomicidade de atualização e granularidade de exclusão, com duas estratégias corretas discriminadas por custo explícito.
- **Histórico efetivamente utilizado:** nenhum enunciado de prova anterior foi selecionado ou adaptado. Conceitos gerais não são apresentados como invenção teórica; fontes e limites estão na seção 14.
- **Ambiguidades controladas:** Soma atômica só resolve o incremento indivisível definido, sem prometer transações com vários campos. Custos e alcance das travas são dados do modelo, não medidos. E não é comparação-e-troca atômica.
- **Revisão docente específica:** Enumerar intercalações de dois incrementos, conferir necessidade das duas condições e desempate por custo. Confirmar que C é tecnicamente correta, mas não resposta ao comando de menor custo.
- **Risco residual:** o formato e os conceitos são recorrentes no ensino de CC. A auditoria interna não garante originalidade externa; comparar outros acervos com relações e distratores, não apenas palavras.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, curso e dificuldade correspondem ao slot.
- [x] Contexto e dados autorais fictícios, sem referência pública à avaliação externa.
- [x] Cinco opções A–E distintas e uma resposta fundamentada nas premissas.
- [x] Cada distrator tem erro identificável e feedback específico, sem solução equivalente ao comando.
- [x] Modelos, unidades e restrições necessárias estão fornecidos; sem ferramenta ou fabricante oculto.
- [x] Fonte principal e limites de alcance registrados; metadados não acrescentam campos ao schema.
- [x] Cotejo com os dois lotes comuns registrado; status continua provisório.
- [ ] Resolver independentemente sem gabarito e confirmar unicidade.
- [ ] Conferir PPC, dificuldade, originalidade externa e acessibilidade na experiência.

## 12. E26-P-CC-01 — Uma escrita que não chega à saída

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-CC-01 |
| Versão editorial documental | 1 — sem campo version no contrato SequencePuzzle |
| Contrato / kind | sequence |
| Título / title | Uma escrita que não chega à saída |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; procedimento autoral de tradução para N9 — Jornada Digital, sujeito à revisão docente de CC. |
| Cursos / courses | CC |
| Área / area | Teoria da computação e compiladores |
| Rastreabilidade | CC-01 / CC-I; F06, art. 5º, I, a.1/a.4; art. 6º, XIX |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Relacionar artefatos e dependências de etapas no modelo de tradução fornecido. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de compiladores para procedimento autoral de transformação; a portaria não prescreve estes passes ou sua ordem. |
| Complemento técnico documental | CC-T01: representações; CC-T02: vivacidade e eliminação de escritas sem uso, com limites de efeito observável |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar representações e dependências de análise de um compilador didático para justificar uma transformação que preserva a saída.

### Narrativa ao jogador

No laboratório fictício da Base N9, você organizará cinco passes de um tradutor para gerar uma representação intermediária sem uma escrita inútil. O programa-fonte e sua lista de tokens estão disponíveis; nomes, tipos e validade do programa já foram conferidos neste exercício. Não se está construindo um compilador completo.

O programa é descrito em texto:

1. atribuir 1 a v;
2. se seletor for verdadeiro, atribuir entrada a v; caso contrário, atribuir 2 a v;
3. emitir v.

Entrada é um inteiro de 0 a 3 e seletor é verdadeiro ou falso. A única saída observável é o valor emitido. Atribuições são puras, sem acesso externo ou efeito colateral; não há exceções, saltos adicionais ou usos ocultos de v.

Uma árvore sintática representa a estrutura do programa. A representação intermediária deste tradutor usa instruções e rótulos explícitos. O grafo de fluxo relaciona os caminhos possíveis entre essas instruções. Um valor está vivo num ponto se puder ser lido em alguma continuação antes de ser sobrescrito. A análise de vivacidade deve considerar os dois ramos, não apenas um teste escolhido.

Reorganize os cartões pelas entradas que consomem e pelos artefatos que produzem. Ao validar, o tradutor deve poder justificar a remoção de uma escrita sem mudar o valor emitido em nenhum dos oito pares possíveis de entrada e seletor. São dados e regras fictícios do exercício, não uma sequência universal de passes.

### Blocos

Ordem editorial de apresentação diferente da solução; todos os cartões devem ser usados uma vez. Cinco blocos, dentro do intervalo de quatro a sete do contrato.

| ID do bloco | Texto |
|---|---|
| propagar-vivos | Usar o grafo de fluxo e suas instruções para calcular, em cada ponto, quais valores podem ser lidos antes de nova escrita, considerando todos os sucessores. |
| eliminar-escrita | Usar o mapa de vivacidade e a representação intermediária para retirar apenas atribuição pura cujo valor não será lido, preservando as instruções que produzem a saída. |
| emitir-intermediario | Percorrer a árvore sintática e gerar a representação intermediária com instruções, rótulos e destinos dos desvios do condicional. |
| formar-arvore | Usar os tokens disponíveis para construir a árvore que distingue a atribuição inicial, o condicional com seus dois ramos e a emissão final. |
| ligar-blocos | Usar rótulos, instruções e desvios da representação intermediária para construir o grafo, ligando a decisão aos dois ramos e ambos à emissão. |

### Ordem correta e justificativa

**correctOrder:** formar-arvore → emitir-intermediario → ligar-blocos → propagar-vivos → eliminar-escrita.

| Dependência | Artefato necessário e razão no tradutor delimitado |
|---|---|
| formar-arvore antes de emitir-intermediario | O gerador percorre a árvore; tokens isolados não dão os ramos estruturados consumidos por ele. |
| emitir-intermediario antes de ligar-blocos | O construtor deste grafo consome os rótulos e destinos das instruções intermediárias; não aceita diretamente a fonte ou a árvore. |
| ligar-blocos antes de propagar-vivos | A análise usa os sucessores dos dois ramos e da junção, que o grafo explicita. Uma lista linear não caracteriza os caminhos suficientes neste analisador. |
| propagar-vivos antes de eliminar-escrita | A retirada requer evidência de que nenhum caminho lerá o valor antes de nova escrita. Gerar instruções, por si só, não comprova isso. |

As quatro dependências formam uma cadeia estrita entre cinco produtores/consumidores. Por transitividade, há uma única permutação completa neste modelo. Outras arquiteturas de compilador podem fundir fases, gerar o grafo diretamente ou repetir análises; essas alternativas reais não se tornam respostas inválidas fora do tradutor descrito. O puzzle não ensina uma ordem universal.

### Artefato de chegada e verificação da transformação

Representação intermediária editorial, não código executável do projeto:

- I1: atribuir 1 a v.
- I2: desviar para R se seletor for verdadeiro, ou para S se for falso.
- R/I3: atribuir entrada a v e seguir para J.
- S/I4: atribuir 2 a v e seguir para J.
- J/I5: emitir v e terminar.

Caminhos: I1→I2→I3→I5 ou I1→I2→I4→I5. Imediatamente após I1, os valores anteriores necessários são entrada e seletor; o valor recém-escrito em v não está vivo, pois I3/I4 o sobrescrevem antes de I5. Antes de I5, v está vivo. Portanto a versão transformada retira apenas I1 e mantém os dois caminhos restantes e a emissão.

Nos oito pares possíveis, antes e depois: seletor verdadeiro emite entrada (0, 1, 2 ou 3); seletor falso emite 2. A coincidência de algum resultado com 1 não transforma a escrita inicial numa dependência: o valor emitido foi produzido pelo ramo. Não se elimina a emissão nem se interpreta ausência de uso como permissão para apagar efeitos externos.

### Dicas progressivas

1. Separe estrutura de expressão, caminhos de execução e informação sobre usos futuros. Que evidência cada cartão precisa receber pronta?
2. Os dois ramos chegam à emissão, mas escrevem v antes disso. Considere ambos ao perguntar se o valor inicial de v ainda pode ser lido.
3. Retirar uma escrita exige uma conclusão sobre usos futuros. Procure o artefato que responde isso e qual informação ele precisa sobre as continuações.

Nenhuma dica enumera todos os blocos na ordem correta. A segunda ajuda a compreender o problema de vivacidade sem ordenar os cinco passes; a terceira focaliza uma dependência. Avaliar também o efeito cumulativo das dicas no piloto docente.

### Explicação final ao jogador

A árvore dá estrutura à geração das instruções e dos rótulos. Eles permitem montar o grafo com os dois ramos e sua junção. A vivacidade propaga usos possíveis por esse grafo; a transformação usa essa evidência para remover a atribuição inicial v ← 1. Esse valor é sobrescrito em ambos os ramos antes de emitir v: a saída continua entrada quando seletor é verdadeiro, e 2 quando é falso. As atribuições dos ramos são mantidas porque seus valores chegam à emissão. A análise não autoriza apagar operações com efeitos observáveis. Outros compiladores podem combinar, repetir ou reorganizar passes; aqui a ordem decorre dos artefatos exigidos por este tradutor.

### Interação visual e retorno ao jogador — especificação futura

- Três regiões com títulos textuais: programa-fonte, cartões de passes e artefatos produzidos. Árvore/grafo são representações opcionais acompanhadas de lista linear de nós e ligações; nenhuma evidência depende apenas de setas desenhadas ou cor.
- Cartões mostram nome, entrada exigida e saída produzida. A ordem atual é anunciada como posição 1 a 5. Mouse e toque poderão arrastar, mas também terão botões “Mover para cima” e “Mover para baixo”; teclado poderá selecionar cartão e acionar os mesmos controles, com foco preservado.
- “Validar sequência” verifica as dependências ao confirmar. Se incorreta, feedback textual focaliza uma dependência violada e oferece a próxima dica sob demanda; não preenche automaticamente a solução nem usa apenas vermelho.
- Não haverá cronômetro obrigatório, penalidade de XP por erro/dica ou bloqueio por número de tentativas. Pausa e nova tentativa devem preservar entendimento da ordem atual.
- No acerto, exibir confirmação textual, explicação final e comparação de artefatos antes/depois, com os dois caminhos e a saída preservada. Mostrar botão de retorno ao mapa, para a posição de origem, em implementação posterior autorizada.
- Repetição poderá ser oferecida com aviso de recompensa já recebida. Acesso a metadados/gabaritos pertence à curadoria; não antecipar a ordem completa antes de confirmar.
- Trata-se de especificação documental. Nenhum painel, controle, cena, mensagem, integração ou novo fluxo foi implementado ou testado no navegador nesta entrega.

### Recompensa e desbloqueio documentais

- **reward.xp:** 100 — proposta de recompensa única por ID, compatível com o contrato e o padrão do piloto. Repetição não concede XP adicional; nenhuma recompensa existente é modificada.
- **unlocks.mapId:** base-n9; **unlocks.objectId:** door — referências existentes, sem criar ou ativar objeto. A ligação efetiva, a política de liberação e o retorno ao mapa dependem de integração posterior autorizada.
- O puzzle continua separado da contagem das vinte questões; não se implementa missão mista nem se somam pontos de questão ao XP do puzzle.

### Originalidade, limites e revisão

- **Raciocínio próprio do curso:** transformar representações e usar análise de caminhos para justificar preservação de comportamento; não basta reconhecer nomes de fases.
- **Diferença para o puzzle comum:** não recupera cópia, compara resumo de integridade, testa catálogo ou publica serviço. Trabalha árvore, instruções, fluxo, vivacidade e escrita sem uso.
- **Diferença para as questões de CC:** Q03 interpreta diagnóstico de tipos; aqui o programa é válido e a tarefa articula evidências para uma transformação. Q04 verifica alcance de linhagem, sem cálculo de vivacidade. Não se reutiliza seus grafos como artefatos.
- **Conceitos gerais e fontes:** eliminação de escrita morta e análise de fluxo são conceitos de compiladores, não invenções deste lote. Materiais técnicos orientam definições; não se copiou programa, figura ou enunciado desses materiais. O artefato e a interação de ordenação foram elaborados para este recorte.
- **Ambiguidades controladas:** passes delimitados, tokens disponíveis, tipos conferidos externamente e somente saída de emissão observável. Retirar uma atribuição é seguro aqui por ausência de leitura e de efeitos colaterais, não por seu valor parecer dispensável.
- **Pendência específica:** docente deve tentar outra ordem, checar se alguma dependência foi artificialmente imposta e revisar a autenticidade da cadeia. Se houver caminho equivalente dentro do modelo, reformular antes de liberar.

### Checklist editorial do puzzle

- [x] ID, área, CC-I, curso CC e dificuldade intermediate correspondem ao plano.
- [x] Cinco blocos únicos; solução usa todos uma vez e se apoia em quatro dependências declaradas.
- [x] Estados iniciais, artefatos, domínio de entrada e efeitos observáveis delimitados.
- [x] Três dicas distintas, sem listagem completa da solução; explicação final separada.
- [x] Interação visual tem equivalente textual e operação por teclado/botões; sem exigir arraste ou rapidez.
- [x] Recompensa/desbloqueio apenas documentados, sem implementação ou progresso alterado.
- [x] Fonte e comparação de originalidade registradas; status provisório preservado.
- [ ] Revisão docente da cadeia e resolução independente sem ordem visível.
- [ ] Homologação de acessibilidade/controles e teste na interface futura.

## 13. Inventário, respostas e distribuição

| ID | Contrato | Curso | Dificuldade | Resposta / solução reservada à curadoria |
|---|---|---|---|---|
| E26-Q-CC-01 | question | CC | introductory | D |
| E26-Q-CC-02 | question | CC | introductory | A |
| E26-Q-CC-03 | question | CC | introductory | C |
| E26-Q-CC-04 | question | CC | intermediate | E |
| E26-Q-CC-05 | question | CC | intermediate | B |
| E26-Q-CC-06 | question | CC | intermediate | B |
| E26-Q-CC-07 | question | CC | intermediate | D |
| E26-Q-CC-08 | question | CC | intermediate | A |
| E26-Q-CC-09 | question | CC | advanced | E |
| E26-Q-CC-10 | question | CC | advanced | D |
| E26-P-CC-01 | sequence | CC | intermediate | formar-arvore → emitir-intermediario → ligar-blocos → propagar-vivos → eliminar-escrita |

Todas as linhas: enade-2026 e provisional-pending-teacher-review; nenhuma aprovação docente atribuída.

**Questões específicas:** 3 introductory, 5 intermediate, 2 advanced. **Vinte questões elegíveis de CC:** 4/4/2 comuns + 3/5/2 específicas = **7/9/4**, total 20. Não se multiplicam os comuns por curso no banco único nem se contam puzzles como questões. Os outros cursos e os 66 slots permanecem inalterados.

**Gabaritos por ID 01–10:** D/A/C/E/B/B/D/A/E/D. Contagens: A=2, B=2, C=1, D=3, E=2. Não foi imposta uma letra de cada, distribuição uniforme, ciclo ou alternância. Essa conferência não garante imprevisibilidade estatística; o mapa não deve ser divulgado antes da resposta.

## 14. Fontes e rastreabilidade editorial

Consulta desta autoria: **13/11/2026**. Separar data do ato, publicação, edição de curso, atualização de página e consulta. A fonte normativa principal é a prevista pelo plano para todos os onze slots; os complementos técnicos apoiam conceitos sem alterar a elegibilidade.

### Referências normativas efetivamente consultadas

| Fonte | Identificação | Original tentado | Texto recuperado / limite |
|---|---|---|---|
| F06 — Portaria nº 157, de 14/04/2026, diretrizes do componente específico de Bacharelado em Ciência da Computação | Emissor MEC/Inep; publicação 16/04/2026, DOU 72, seção 1, p. 91 | [DOU 157](https://www.in.gov.br/web/dou/-/portaria-n-157-de-14-de-abril-de-2026-699947879), falha 502 | [Reprodução Ufopa, 3 páginas](https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf); texto integral recuperado, arts. 5º–6º na p. 2. |
| F10 — Portaria Inep nº 172, de 14/04/2026, diretrizes do componente específico de Tecnologia em Redes de Computadores | Emissor MEC/Inep; publicação 16/04/2026, DOU 72, seção 1, p. 98 | [DOU 172](https://www.in.gov.br/web/dou/-/portaria-n-172-de-14-de-abril-de-2026-699944904), falha 502 nesta consulta | [Reprodução ABMES, 3 páginas](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf); art. 5º II, b.2, pp. 2–3, e art. 6º XI/XIII, p. 3, conferidos para a ressalva. |

Ufopa e ABMES hospedam reproduções, não são emissoras dos atos. Não se declara acesso à versão certificada nem conferência jurídica exaustiva de vigência/retificações. Reconferir originais na data do parecer docente. A limitação de acesso não é preenchida por artigo inventado.

### Localizadores por recorte de CC

Os números de art. 6º abaixo referem-se sempre à **F06/CC**, não à F10/TRC. Art. 5º, I/II, sustenta a competência de síntese indicada em cada ficha; art. 6º delimita o objeto. Localização: reprodução Ufopa, p. 2.

| Item | Art. 5º: competência/habilidade | Art. 6º: objeto |
|---|---|---|
| Q-CC-01 | I, a.1/a.5 | I |
| Q-CC-02 | I, a.1 | V |
| Q-CC-03 | I, a.1/a.4 | XIX |
| Q-CC-04 | I, a.2/a.4 | XV |
| Q-CC-05 | II, b.3–b.4 | VI; localidade explicitada no art. 5º II, b.3 |
| Q-CC-06 | I, a.3–a.4 | XII |
| Q-CC-07 | I, a.1/a.4 | XIV |
| Q-CC-08 | I, a.2/a.4 | XVI |
| Q-CC-09 | I, a.1/a.2/a.4 | XVIII |
| Q-CC-10 | II, b.3–b.4 | VI e VII |
| P-CC-01 | I, a.1/a.4 | XIX |

O ato orienta a pertinência dos objetos; não determina estes contextos, números, algoritmo, provas, custos, gabaritos, passes ou dificuldades. Interpretar uma questão ou ordenar cartões não comprova execução profissional de todas as habilidades normativas citadas.

### Materiais técnicos primários complementares

| ID documental | Material / autoria e edição identificada | Localizador efetivamente lido | Uso e limite |
|---|---|---|---|
| CC-T01 | MIT OpenCourseWare, 6.004 Computation Structures, Spring 2017, “11.1 Annotated Slides” | [Página institucional](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c11/c11s1/), seções Frontend Stages: Semantic Analysis; Intermediate Representation; Common IR: Control Flow Graph; IR Optimization | Q03 e puzzle: distinção de etapas/representações. Não se reutilizam seus programas, figuras ou exemplos como desafio; publicação individual da página não identificada. |
| CC-T02 | Saman Amarasinghe / MIT, 6.035 Computer Language Engineering, Spring 2010, Lecture 10: Introduction to Dataflow Analysis; slides contêm créditos de 1998/2006 | [PDF institucional, 67 páginas](https://ocw.mit.edu/courses/6-035-computer-language-engineering-spring-2010/be85c47286095ba746869450318469a7_MIT6_035S10_lec10.pdf), p. 4 e pp. 53–55: liveness/dead code/efeitos visíveis | Puzzle: fundamenta vivacidade e cuidado com efeitos observáveis. Leitura dirigida desses trechos, não auditoria integral do curso; extração apresenta quebras e símbolos degradados. Nenhuma imagem incorporada. |
| CC-T03 | R. E. Newman-Wolfe / University of Florida, COT6315, “Finite State Automata”; última modificação informada 20/02/1995 | [Página institucional](https://www.cise.ufl.edu/~nemo/cot6315/fsa.html), definições de prefixos distinguíveis e teorema de limite de estados | Q09: técnica de justificar limite de memória finita. O registro e a construção com pilha desta questão são autorais; não se reproduz um exercício da página. Não é matriz brasileira nem fonte curricular atual por si só. |

Somente F06 compõe source principal nos objetos projetados; CC-T01/02/03 e F10 são rastreabilidade documental complementar, sem campos extras. Material de curso antigo é apoio conceitual, não prova de vigência normativa. Nenhum caderno de questões históricas foi usado para gerar alternativas. Cotejo externo de similaridade continua pendente.

## 15. Auditoria cruzada e acessibilidade editorial

Comparação com as dez questões e o puzzle dos dois lotes comuns, além dos 14 exemplos de questões e três sequências do catálogo atual. O cotejo considera situação, dados, relação entre evidências, decisão e erros dos distratores. Compartilhar formato question/sequence ou uma área ampla não significa reutilizar o mesmo problema.

| Item CC | Comparação interna pertinente | Diferença de situação e raciocínio central |
|---|---|---|
| Q01 | COM-01; EX-CC-01; seq-algorithm-01 | Rastreamento de substituição de estado, não indicador descritivo, duplicação de valor ou média. |
| Q02 | COM-04/10 | Circuito combinacional com entradas e função lógica, não barreiras de acesso ou política de contas. |
| Q03 | Todos os comuns; P-CC-01 deste lote | Diagnóstico de tipos em expressão, ausente dos comuns; não ordena passes de análise de fluxo como o puzzle. |
| Q04 | COM-07; EX-TRC-01 | Propriedade de grafo de linhagem com convergência e independência, não diagnóstico de caminho físico ou serviço. |
| Q05 | COM-08; EX-COMUM-09 | Recência, substituição e recarga de cache, não limite por processo, espera de recurso ou disco cheio. |
| Q06 | COM-06; EX-COMUM-06 | Adequação de método a regra conhecida em domínio finito, não circulação de saberes ou comparação verificável de protótipos. |
| Q07 | COM-03/04 | Filtro de vizinhança e preservação de transição, não interpretação de mensagem, interface acessível ou informação por cor. |
| Q08 | COM-01/07 | Interseção probabilística sob independência, não causalidade em registros de acesso ou distinção entre comunicação e aplicação. |
| Q09 | Todos os comuns | Capacidade de modelos e contagem ilimitada com prova de distinção de prefixos, sem equivalente central nos comuns. |
| Q10 | COM-08/10; EX-SI-01 | Intercalação e atomicidade com custo, não cota de memória, permissões ou deduplicação de registros. |
| P-CC-01 | P-COM-01; seq-incident-01; seq-network-01 | Transformação justificada por vivacidade e fluxo, não recuperação de cópia, encerramento de atendimento ou configuração de rede. |

COM-02 (finalidade/privacidade), COM-05 (sombra/cobertura) e COM-09 (restrições de drenagem), assim como as demais opções e explicações dos comuns, também foram examinadas. Não se transportam seus territórios, personagens, tabelas, limites, cálculos ou caminhos de erro. Q10 CC usa um critério de escolha entre soluções corretas explicitado no custo; não repete as três permissões de COM-10.

**Resultado da conferência editorial interna:** não foi identificada repetição de situação, enunciado, conjunto de alternativas ou raciocínio central dos comuns. A triagem textual é complementar; texto diferente, sozinho, não provaria originalidade estrutural. Conceitos clássicos de CC continuam sendo conceitos conhecidos, e não são anunciados como descobertas inéditas. As situações e sua organização como desafios são autorais.

Não houve cópia de questões de provas anteriores nem incorporação de figuras/programas dos materiais técnicos. A auditoria não cobre acervos externos completos, não é parecer independente e não garante originalidade global. Registrar materiais e resultados de cotejo externo na revisão docente.

### Acessibilidade editorial

| Aspecto | Decisão documental | Homologação futura pendente |
|---|---|---|
| Informação integral em texto | Entradas, sequências, arcos, janelas e programa descritos linearmente | Preservar equivalentes semânticos ao renderizar |
| Circuito e sinais | P/R/B nomeados e valores 0/1 descritos, sem cor necessária | Leitura de fórmulas com tecnologia assistiva |
| Grafos e fluxo | Arcos U→V em lista e caminhos escritos; não há dependência de desenho | Anunciar direção, rótulos e junção |
| Imagem | Intensidades são números e posições nomeadas; resultado-alvo em texto | Testar a descrição linear e ampliação com estudantes |
| Notação formal | Relação de contagem também por extenso, exemplos e limites definidos | Leitura de x elevado a n, separador e índices sem ambiguidade |
| Mouse, teclado e toque | Puzzle prevê arraste opcional e botões mover; questões, seleção/confirmar na integração | Foco, reordenação, anúncio de posição, toque e leitor de tela |
| Tela pequena e carga de leitura | Contexto, comando, opções e feedbacks separados; metadados ficam na curadoria | Reflow/zoom e piloto de Q04/Q07/Q09/Q10 e do puzzle |
| Velocidade | Sem cronômetro obrigatório ou recompensa por rapidez | Conferir pausas e retorno na interface futura |
| Linguagem e diversidade | Sem estereótipo de curso, região ou capacidade; dados não são institucionais reais | Revisão com estudantes e pessoas com diferentes necessidades |

Markdown e projeção em schema não homologam controles, celular, navegador ou leitor de tela. Não foram executados testes de interface para este material não integrado. A acessibilidade auditada aqui é editorial; a experiência futura precisa de teste efetivo.

### Checklist consolidado

- [x] Onze IDs planejados, únicos, exclusivos de CC e sem sobreposição com os lotes comuns.
- [x] Dez questões com cinco alternativas, uma resposta indicada e feedback A–E; contagens e cálculos conferidos.
- [x] Distribuição específica 3/5/2; distribuição documental final de CC 7/9/4; puzzles fora da cota.
- [x] Gabaritos variados D/A/C/E/B/B/D/A/E/D, sem impor uniformidade ou ciclo.
- [x] Fonte e competência conferidas por item; divergência XI/XIII delimitada por portaria/curso.
- [x] Modelos fechados explicitados, sem suposição de API, marca, hardware ou lei oculta.
- [x] Puzzle com cinco blocos, quatro dependências, solução única no modelo e três dicas sem resposta completa.
- [x] Textos ao jogador sem referência à avaliação externa; metadados pedagógicos separados.
- [x] Todos os validationStatus permanecem provisional-pending-teacher-review.
- [x] Comparação interna textual/estrutural e acessibilidade editorial registradas com seus limites.
- [ ] Revisão independente da resposta de cada questão e da ordem do puzzle.
- [ ] PPC, calibragem e cotejo externo de originalidade.
- [ ] Homologação da apresentação e dos controles após eventual integração autorizada.

## 16. Pendências e formulários de revisão docente

Onze fichas de CC, uma por ID/versão; nenhuma decisão docente antecipada. Os registros dos comuns para cinco cursos não são preenchidos nem alterados aqui.

Pendências transversais: conferir PPC e momento formativo; originais/retificações; referências técnicas e pressupostos; dificuldade por raciocínio; similaridade externa; leitura com estudantes; acessibilidade efetiva; responsável humano pela consolidação e aprovação institucional da identidade provisória. A divergência do localizador F10 no piloto continua registrada para etapa documental própria.

Preencher cada ficha com docente, data, PPC/versão, fontes/localizadores lidos, resolução **sem gabarito**, alternativas defensáveis, evidências de originalidade/acessibilidade e parecer fundamentado. Recomendações possíveis no formulário: manter em revisão, requer revisão, recomendar aprovação ou rejeitar. Elas não criam enum novo nem alteram automaticamente validationStatus, coleção ou liberação.

### E26-Q-CC-01 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Resolver as quatro transições, conferir o limite inclusivo e a dificuldade introdutória. Validar se cada distrator corresponde a um erro de rastreamento identificável.
- [ ] Resolver sem gabarito; confirmar D como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-02 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Conferir a tabela verdade, inclusive as oito combinações possíveis, e a equivalência da descrição textual ao circuito. Não exigir diagrama ou cor.
- [ ] Resolver sem gabarito; confirmar A como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-03 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Confirmar C sem depender de uma linguagem comercial. Distinguir modelo didático de implementações que combinam fases e verificar clareza do diagnóstico.
- [ ] Resolver sem gabarito; confirmar C como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-04 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Conferir o fecho transitivo de cada grafo e a rejeição dos quatro distratores. Manter os arcos também em texto linear e validar representações equivalentes.
- [ ] Resolver sem gabarito; confirmar E como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-05 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-II, objeto, fonte e objetivo por PPC.
- [ ] Rastrear conteúdos e ordem MRU/LRU nos doze acessos; conferir 5/3 e o distrator FIFO 4/3. Não generalizar custo ou desempenho físico.
- [ ] Resolver sem gabarito; confirmar B como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-06 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Conferir os cem pares, incluindo os limites 4 e 3, e a diferença entre política prescrita e padrão inferido. Revisar sem afirmar superioridade universal de sistemas por regras.
- [ ] Resolver sem gabarito; confirmar B como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-07 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Calcular as sete saídas dos cinco operadores, conferir mediana versus média e a transição na posição 6. Testar leitura linear sem depender da disposição visual.
- [ ] Resolver sem gabarito; confirmar D como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-08 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Conferir interseção 1/12, união 1/2, soma 7/12 e complemento 11/12. Validar interpretação de independência sem transferi-la a sistemas reais.
- [ ] Resolver sem gabarito; confirmar A como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-09 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-I, objeto, fonte e objetivo por PPC.
- [ ] Rever prova por prefixos distinguíveis e suficiência da construção, inclusive entrada vazia, n=0, separadores extras, símbolos fora de ordem e contagens em falta/excesso. Não inferir indecidibilidade.
- [ ] Resolver sem gabarito; confirmar E como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-CC-10 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir ato, competência CC-II, objeto, fonte e objetivo por PPC.
- [ ] Enumerar intercalações de dois incrementos, conferir necessidade das duas condições e desempate por custo. Confirmar que C é tecnicamente correta, mas não resposta ao comando de menor custo.
- [ ] Resolver sem gabarito; confirmar D como única resposta ao comando e conferir feedbacks A–E.
- [ ] Registrar materiais comparados, riscos de similaridade e clareza/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-P-CC-01 — versão editorial documental 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / ordem alternativa | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F06/CC-I, objeto de compiladores e materiais técnicos.
- [ ] Reordenar sem consultar a solução; tentar outra ordem e justificar as quatro dependências pelos artefatos consumidos.
- [ ] Conferir vivacidade em ambos os ramos, remoção somente de I1 e preservação dos oito resultados.
- [ ] Validar que nenhuma atribuição com efeito observável seria apagada pelas premissas.
- [ ] Avaliar dicas separadas e cumulativamente, sem revelação completa.
- [ ] Revisar cinco blocos, permutação, interação textual/visual, teclado e botões em tela pequena.
- [ ] Conferir recompensa única proposta de 100 XP e base-n9/door sem ativação, missão mista ou progresso novo.
- [ ] Registrar cotejo externo de originalidade e dificuldade intermediate.
- **Síntese / artefatos / ordem alternativa / ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

## 17. Verificações e preservação do escopo

Resultados desta execução:

- Auditoria documental por script efêmero: **aprovada**. Dez questões e uma sequência correspondem aos slots; 22 IDs de conteúdo são únicos nos três lotes e pertencem aos 66 IDs únicos do plano. Os onze itens de CC não aparecem no catálogo executável.
- Cinquenta alternativas e cinquenta feedbacks presentes; uma resposta indicada por questão, mapa D/A/C/E/B/B/D/A/E/D, 3/5/2 específicas e 7/9/4 no conjunto documental elegível de CC. Onze formulários continuam sem parecer.
- Projeção extraída do Markdown e validada **somente em memória** com Ajv e os schemas atuais: dez Question e um SequencePuzzle aceitos, fonte estrita, coleção existente, cinco blocos/permutação e referências de mapa/porta conferidas. Não se gravou arquivo JSON ou catálogo.
- Modelos didáticos conferidos: estados 4/1/6/9 do algoritmo; oito combinações lógicas; alcance dos cinco grafos; LRU 5/3 e distrator FIFO 4/3; cem pares da regra (42 inspeção, 58 rotina); cinco filtros em sete posições; produto de doze resultados probabilísticos; intercalações de dois incrementos e critério de custo.
- Q09: reconhecedor confrontado com a definição em 29.524 cadeias de comprimento até nove, casos de fronteira e um registro com 101 x. A prova formal por prefixos distinguíveis está na explicação; testes finitos não a substituem nem demonstram sozinhos correção para todo comprimento.
- Concorrência: seis intercalações de ler/escrever e vinte de ler/comparar/escrever examinadas; ambas as propostas não atômicas admitem perda. Critérios de correção/paralelismo/custo selecionam D; C continua sendo estratégia correta com custo maior, como o comando explicita.
- Puzzle: **120 permutações examinadas**, apenas uma satisfaz as quatro dependências. Análise de vivacidade no grafo identifica somente I1 como atribuição pura removível. Os oito pares de entrada/seletor mantêm a saída antes/depois.
- Gabaritos e rejeição dos distratores conferidos editorialmente; Q03 distingue diagnóstico semântico dos artefatos já aceitos e Q06 distingue garantia demonstrada de hipóteses de comportamento não verificadas. Resolução independente continua pendente.
- Triagem de textos e comparação estrutural com os dois lotes comuns e exemplos atuais: nenhuma duplicação interna identificada. Títulos/textos ao jogador, alternativas, feedbacks, narrativa, blocos, dicas e explicação do puzzle sem o nome da avaliação externa. Originalidade externa não é garantida.
- Acessibilidade editorial conferida por equivalentes textuais, notação explicada, ausência de dependência de cor e previsão de botões/teclado; homologação real permanece pendente.
- **npm.cmd run validate:content: 113 testes aprovados em quatro arquivos**, cobrindo conteúdo, puzzles, contratos editoriais e missões existentes.
- Hashes SHA-256 do plano, dos dois lotes comuns e do padrão preservados desde a inspeção inicial; conferência do Git sem alteração de arquivos previamente versionados. Somente o novo documento desta entrega.

Verificações formais e modelos didáticos não equivalem a aprovação docente, calibração, auditoria de fonte certificada, garantia de originalidade global ou homologação de interface.

Somente docs/autoria/lote-especifico-cc.md integra esta entrega. Plano, padrão e dois lotes comuns permanecem intactos. Nenhum JSON, schema, código, teste permanente, catálogo, interface, mapa, mecânica, recompensa existente ou progresso é alterado. O backlog não precisa de ajuste: revisão e integração continuam pendentes e o inventário desta autoria fica neste documento. Nenhum lote de SI, TADS, TGTI ou TRC foi iniciado. Não houve publicação nem envio ao GitHub.
