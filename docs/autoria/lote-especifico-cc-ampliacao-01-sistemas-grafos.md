# N9 — Jornada Digital: ampliação de CC 01 — sistemas e grafos

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-CC-16` a `E26-Q-CC-20`. CC é a classificação editorial de origem; outros cursos aparecem em `courses` somente quando possuem o mesmo objeto em sua própria matriz e a profundidade do item é compatível.

O lote privilegia fundamentos clássicos, aplicação direta e variedade visual. Não contém questão avançada nem cálculo longo. Não há JSON, integração ao catálogo, alteração das partidas ou mudança no jogo. Todos os itens permanecem em `under-ai-review`.

## 1. Inventário e distribuição

| ID | Conteúdo clássico | Cursos elegíveis | Dificuldade | Gabarito | Objeto apresentado |
|---|---|---|---|---|---|
| E26-Q-CC-16 | Representação binária e máscara de bits | CC, SI, TADS, TGTI | introductory | C | Registrador de três indicadores |
| E26-Q-CC-17 | Dependência de dados em pipeline | CC, SI, TADS, TGTI | intermediate | A | Duas instruções e linha de estágios |
| E26-Q-CC-18 | Interrupção de dispositivo | CC, SI, TADS, TGTI, TRC | introductory | E | Linha do tempo CPU/dispositivo |
| E26-Q-CC-19 | Busca em largura em grafo não ponderado | CC, SI, TADS, TGTI | intermediate | B | Mapa de conexões |
| E26-Q-CC-20 | Árvore geradora mínima | CC, SI, TADS, TGTI | intermediate | D | Grafo ponderado de laboratórios |

Distribuição: duas `introductory`, três `intermediate` e nenhuma `advanced`; gabaritos C/A/E/B/D. Os dois cálculos presentes limitam-se à leitura de três bits e à soma de três pesos pequenos.

## 2. Correspondência normativa

| Curso | Referência | Objetos utilizados |
|---|---|---|
| CC | F06 — Portaria Inep 157/2026 | Art. 6º, I: algoritmos e estruturas de dados; V: sistemas digitais; VI: organização e arquitetura; VII: sistemas operacionais; XV: teoria dos grafos. |
| SI | F07 — Portaria Inep 168/2026 | Art. 6º, I: lógica e matemática discreta; III: algoritmos e estruturas de dados; IX: arquitetura e organização; X: sistemas operacionais. |
| TADS | F08 — Portaria Inep 169/2026 | Art. 6º, I: algoritmos e programação; VI: estruturas de dados; XIV: princípios de arquitetura e organização; XVIII: princípios de sistemas operacionais. |
| TGTI | F09 — Portaria Inep 171/2026 | Art. 6º, I: algoritmos; II: arquitetura de computadores; III: sistemas operacionais. |
| TRC | F10 — Portaria Inep 172/2026 | Art. 6º, IX: administração de sistemas operacionais. Sustenta somente Q18, em recorte introdutório de interação entre dispositivo e sistema. |

F06 é a fonte `primary`. As demais portarias são `normative-complementary` apenas nos itens em que o curso é elegível. Grafos não são atribuídos a TRC apenas porque podem modelar redes.

## 3. Fontes técnicas

| Código | Papel | Referência e limite |
|---|---|---|
| T55 | `technical` | ACM/IEEE-CS/AAAI, *Computer Science Curricula 2023*: Architecture and Organization, Operating Systems e Algorithmic Foundations. Confirma os núcleos clássicos; não determina estes casos. |
| T56 | `technical` | MIT OpenCourseWare 6.004, *Computation Structures*, material de pipeline. Apoia dependências, espera e encaminhamento; a arquitetura simplificada é declarada em Q17. |
| T57 | `technical` | NIST Dictionary of Algorithms and Data Structures, verbetes *breadth-first search* e *minimum spanning tree*. Apoia definições; grafos, pesos e respostas são autorais. |

URLs: `https://csed.acm.org/knowledge-areas/`, `https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/`, `https://xlinux.nist.gov/dads/HTML/breadthfirst.html` e `https://xlinux.nist.gov/dads/HTML/minimumSpanningTree.html`.

## 4. E26-Q-CC-16 — Três luzes em um único valor

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS, TGTI]`; área “Representação binária e sistemas digitais”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: interpretar bits independentes em um registrador simples. Fontes: F06 principal; F07/F08/F09 normativas complementares; T55 técnica.

### Registrador apresentado

Um terminal guarda três indicadores em um valor binário:

```text
bit 2  bit 1  bit 0
sensor alarme manutenção
```

Valor `1` significa ativo e `0`, inativo. O terminal mostra `101₂`. A leitura é feita exatamente na ordem bit 2, bit 1 e bit 0.

**Enunciado.** Qual estado está representado?

- **A.** Sensor inativo, alarme ativo e manutenção inativa.
- **B.** Sensor ativo, alarme ativo e manutenção inativa.
- **C.** Sensor ativo, alarme inativo e manutenção ativa.
- **D.** Sensor inativo, alarme inativo e manutenção ativa.
- **E.** Os três indicadores estão ativos porque o valor contém ao menos um bit 1.

**Gabarito: C.** Em `101₂`, o bit 2 vale 1, o bit 1 vale 0 e o bit 0 vale 1. Portanto, sensor e manutenção estão ativos, enquanto o alarme está inativo.

| Alternativa | Feedback |
|---|---|
| A | Inverte os valores dos bits 2 e 1. |
| B | O bit do alarme é o bit central e vale 0. |
| C | Correta: lê os três bits na ordem declarada. |
| D | O bit 2 do sensor vale 1, não 0. |
| E | Cada bit controla um indicador independente; um bit ativo não liga os demais. |

**Revisão independente:** somente C corresponde à sequência 1–0–1 e ao mapa fornecido. O item amplia sistemas digitais sem repetir as portas lógicas de CC-02.

## 5. E26-Q-CC-17 — A segunda instrução chegou cedo

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS, TGTI]`; área “Organização de computadores”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: reconhecer dependência verdadeira de dados em pipeline e selecionar tratamento compatível. Fontes: F06 principal; F07/F08/F09 normativas complementares; T55/T56 técnicas.

### Instruções apresentadas

```text
I1: LOAD R1, [A]       // grava em R1 somente ao final do estágio WB
I2: ADD  R2, R1, R3    // precisa do novo valor de R1 no estágio EX
```

Pipeline simplificado: `IF → ID → EX → MEM → WB`. Nesta versão, não existe encaminhamento (*forwarding*). Se um operando ainda não estiver disponível, a unidade de controle pode inserir espera antes da execução dependente.

**Enunciado.** Qual ação preserva o resultado correto?

- **A.** Atrasar I2 até o novo valor de R1 estar disponível para sua execução.
- **B.** Executar I2 com o valor antigo de R1 e corrigir R2 somente se o usuário perceber erro.
- **C.** Trocar R3 por R2, eliminando a dependência sem considerar o programa original.
- **D.** Executar I2 antes de I1, pois instrução aritmética sempre tem prioridade sobre acesso à memória.
- **E.** Ignorar a dependência porque I1 e I2 escrevem em registradores diferentes.

**Gabarito: A.** I2 lê R1 produzido por I1. Como a arquitetura declarada não possui encaminhamento, I2 precisa esperar até que o valor correto esteja disponível. Escrever em R2 não elimina a dependência de leitura em R1.

| Alternativa | Feedback |
|---|---|
| A | Correta: a espera impede que I2 use o valor antigo de R1. |
| B | Executar com dado antigo altera o resultado e não é mecanismo de pipeline correto. |
| C | Trocar registradores modifica o significado do programa. |
| D | Reordenar viola a dependência verdadeira entre produção e consumo de R1. |
| E | A dependência ocorre porque I2 lê R1, independentemente de escrever em R2. |

**Revisão independente:** A é a única alternativa compatível com a arquitetura declarada. O item fornece estágios e ausência de forwarding, evitando exigir detalhes ocultos de processador específico.

## 6. E26-Q-CC-18 — O dispositivo avisou sem ocupar a CPU

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS, TGTI, TRC]`; área “Sistemas operacionais e entrada/saída”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: distinguir interrupção de consulta contínua ao dispositivo. Fontes: F06 principal; F07/F08/F09/F10 normativas complementares; T55 técnica.

### Linha do tempo apresentada

```text
CPU:        executa análise ─────┐ trata evento ├──── retoma análise
dispositivo: trabalha ───────────└─ sinaliza conclusão
```

No modelo fornecido, o dispositivo trabalha de forma independente. Ao terminar, gera uma interrupção. A CPU conclui a instrução corrente, preserva o contexto necessário, executa o tratador e depois retoma a análise. A alternativa seria consultar repetidamente o dispositivo enquanto ele ainda trabalha.

**Enunciado.** Qual benefício da interrupção aparece no cenário?

- **A.** O dispositivo passa a executar todas as instruções da análise no lugar da CPU.
- **B.** A CPU nunca mais precisa executar código do sistema operacional.
- **C.** A interrupção garante que qualquer dispositivo termine instantaneamente.
- **D.** O contexto da análise pode ser descartado, pois ela sempre recomeça do início.
- **E.** A CPU pode realizar outro trabalho e atender o dispositivo quando ele sinaliza conclusão, sem consulta contínua.

**Gabarito: E.** A interrupção permite que a CPU continue a análise enquanto o dispositivo opera. Quando chega o sinal, o contexto preservado possibilita atender o evento e depois retomar o trabalho anterior.

| Alternativa | Feedback |
|---|---|
| A | O dispositivo sinaliza a conclusão de sua operação; não substitui a CPU na análise. |
| B | O tratador de interrupção é justamente código coordenado pelo sistema. |
| C | Sinalizar conclusão não reduz automaticamente o tempo do dispositivo. |
| D | Preservar o contexto serve para retomar, não para descartar todo o progresso. |
| E | Correta: evita consulta contínua e permite sobrepor trabalho da CPU e do dispositivo. |

**Revisão independente:** E é a única alternativa sustentada pela linha do tempo. O item não afirma que interrupções são sempre melhores que polling; compara apenas os dois comportamentos nas condições declaradas.

## 7. E26-Q-CC-19 — Menos conexões até o terminal

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS, TGTI]`; área “Algoritmos em grafos”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: escolher busca em largura para menor número de arestas em grafo não ponderado. Fontes: F06 principal; F07/F08/F09 normativas complementares; T55/T57 técnicas.

### Mapa de conexões

```text
Base ── Laboratório ── Arena ── Terminal
  └──── Biblioteca ─── Estúdio ─┘
```

Descrição equivalente: Base liga-se a Laboratório e Biblioteca; Laboratório liga-se a Arena; Biblioteca liga-se a Estúdio; Arena e Estúdio ligam-se ao Terminal. As conexões não possuem pesos. A meta é encontrar um caminho com o menor número de conexões.

**Enunciado.** Qual estratégia é a mais direta e garante essa meta no grafo fornecido?

- **A.** Busca em profundidade, aceitando o primeiro caminho encontrado independentemente do número de conexões.
- **B.** Busca em largura, explorando primeiro todos os vértices a uma conexão, depois a duas e assim por diante.
- **C.** Ordenar alfabeticamente os nomes e escolher o primeiro vértice da lista.
- **D.** Usar uma pilha e nunca marcar vértices visitados, mesmo que o grafo possua ciclos.
- **E.** Remover todas as conexões da Base antes de iniciar a busca.

**Gabarito: B.** Em grafo não ponderado, a busca em largura explora por níveis de distância. Assim, a primeira chegada ao Terminal ocorre com o menor número de arestas a partir da Base.

| Alternativa | Feedback |
|---|---|
| A | O primeiro caminho de uma busca em profundidade não é necessariamente o de menos arestas. |
| B | Correta: a exploração por níveis garante a menor quantidade de conexões no grafo não ponderado. |
| C | Ordem dos nomes não representa conectividade ou distância. |
| D | Não registrar visitados pode repetir trabalho e não produz a garantia solicitada. |
| E | Remover as conexões torna o destino inalcançável a partir da Base. |

**Revisão independente:** B é a única estratégia que oferece a garantia pedida nas condições fornecidas. O diagrama tem descrição textual completa e não depende de posição visual.

## 8. E26-Q-CC-20 — Conectar os quatro laboratórios

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS, TGTI]`; área “Teoria dos grafos”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: identificar uma árvore geradora de peso mínimo em grafo pequeno. Fontes: F06 principal; F07/F08/F09 normativas complementares; T55/T57 técnicas.

### Grafo apresentado

Quatro laboratórios devem ficar conectados sem exigir ligação direta entre todos os pares. Os pesos representam unidades de cabo:

```text
A──2──B
|5   /1\4
|   C──3──D
```

Descrição equivalente: arestas `AB=2`, `AC=5`, `BC=1`, `BD=4` e `CD=3`. A solução deve conectar A, B, C e D, não conter ciclo e minimizar a soma dos pesos.

**Enunciado.** Qual conjunto forma a árvore geradora mínima?

- **A.** `AB`, `AC` e `BD`, com peso total 11.
- **B.** `AC`, `BD` e `CD`, com peso total 12.
- **C.** `AB`, `BC` e `BD`, com peso total 7.
- **D.** `AB`, `BC` e `CD`, com peso total 6.
- **E.** Todas as cinco arestas, com peso total 15.

**Gabarito: D.** As arestas de pesos 1, 2 e 3 conectam respectivamente B–C, A–B e C–D. Todos os vértices ficam ligados, não há ciclo e o total é 6. Trocar qualquer uma delas pelas opções mais pesadas aumenta o total neste grafo.

| Alternativa | Feedback |
|---|---|
| A | Conecta os vértices, mas usa a aresta AC de peso 5 e totaliza 11. |
| B | Também conecta, porém escolhe três arestas mais pesadas e totaliza 12. |
| C | É uma árvore válida, mas BD de peso 4 produz total 7, maior que 6. |
| D | Correta: conecta os quatro vértices sem ciclo com pesos 1+2+3. |
| E | Todas as arestas criam ciclos e não formam uma árvore. |

**Revisão independente:** D foi conferida por ordenação dos pesos e teste de ciclo. O cálculo envolve apenas `1+2+3`. O contexto de cabos é representação didática de grafo, não questão de configuração de redes.

## 9. Segunda passagem de revisão assistida por IA

| ID | Verificação de unicidade | Engajamento e acessibilidade | Limitação | Estado |
|---|---|---|---|---|
| CC-16 | `101` corresponde unicamente a ativo/inativo/ativo; somente C. | Registrador curto e descrição bit a bit. | Não cobre conversões numéricas extensas. | `under-ai-review` |
| CC-17 | I2 lê o valor produzido por I1; sem forwarding, somente A preserva o resultado. | Duas linhas de pseudoinstrução e estágios nomeados. | Pipeline é propositalmente simplificado. | `under-ai-review` |
| CC-18 | Somente E descreve trabalho útil seguido de atendimento e retomada. | Linha do tempo redundante ao texto. | Não compara custos reais de polling e interrupção. | `under-ai-review` |
| CC-19 | BFS por níveis é a única estratégia oferecida que garante menos arestas. | Mapa pequeno com lista equivalente de conexões. | Grafo não possui pesos; outros algoritmos não são necessários. | `under-ai-review` |
| CC-20 | D conecta todos sem ciclo e tem total 6, menor que as demais árvores oferecidas. | Grafo de quatro vértices e pesos também listados. | Não exige executar Prim ou Kruskal passo a passo. | `under-ai-review` |

## 10. Auditoria editorial e originalidade interna

- Os IDs `E26-Q-CC-16` a `E26-Q-CC-20` estavam livres antes desta autoria.
- Cada item possui cinco alternativas, uma resposta fundamentada e feedback A–E.
- O lote possui duas questões introdutórias, três intermediárias e nenhuma avançada.
- CC-16 não repete o circuito lógico de CC-02; CC-17 introduz dependência de pipeline; CC-18 aborda interrupções em vez dos estados de processo já existentes; CC-19 usa BFS; CC-20 usa árvore geradora mínima, distinta do grafo de linhagem de CC-04.
- A elegibilidade multcurso decorre de algoritmos, arquitetura ou sistemas operacionais explicitamente presentes em cada matriz. TRC recebe somente CC-18.
- Nenhum item depende exclusivamente de cor, som, movimento ou posição. Não há cálculo extenso nem detalhe de fabricante.
- Nenhum texto apresentado ao jogador utiliza o nome da avaliação externa. A origem normativa permanece apenas na documentação interna.
- Permanecem pendentes: cotejo externo amplo, revisão humana especializada, calibração com estudantes, confirmação nos PPCs e homologação humana de acessibilidade.

## 11. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Elegibilidade por curso | Potencial de engajamento | Clareza no celular | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-CC-16 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-17 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-18 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-19 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-20 | pendente | pendente | pendente | pendente | pendente | — |

Próxima etapa recomendada: produzir o lote CC 02 com teoria da computação, compiladores e computação visual, mantendo no máximo dificuldade intermediária salvo necessidade pedagógica comprovada.
