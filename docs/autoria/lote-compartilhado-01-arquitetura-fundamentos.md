# N9 — Jornada Digital: lote compartilhado 01 — arquitetura e fundamentos computacionais

Autoria documental assistida por IA — 18/11/2026. Este lote cria cinco questões inéditas, `E26-Q-CC-11` a `E26-Q-CC-15`, para ampliar a cobertura compartilhável entre CC, TADS e TGTI. Os IDs usam CC como classificação editorial de origem, mas a elegibilidade é declarada por curso e só ocorre quando há objeto correspondente na respectiva matriz.

Não há JSON, integração ao catálogo, alteração de seleção ou mudança nas partidas. Todos os itens permanecem em `under-ai-review`. Cenários, medições e nomes são fictícios; tabelas, diagramas e códigos possuem descrição textual equivalente.

## 1. Inventário, elegibilidade e distribuição

| ID | Conteúdo central | Cursos elegíveis | Dificuldade | Gabarito | Recurso de apresentação |
|---|---|---|---|---|---|
| E26-Q-CC-11 | Diagnóstico de gargalo de entrada e saída | CC, TADS, TGTI | introductory | C | Painel de telemetria |
| E26-Q-CC-12 | Memória virtual e pressão de páginas | CC, TADS, TGTI | intermediate | E | Linha do tempo de métricas |
| E26-Q-CC-13 | Limite de paralelização pela fração serial | CC, TADS, TGTI | advanced | B | Barra proporcional e cálculo |
| E26-Q-CC-14 | Paradigmas de programação conforme o problema | CC, TADS | introductory | D | Três cartões de requisitos |
| E26-Q-CC-15 | Produtor–consumidor com fila limitada | CC, TADS, TGTI | intermediate | A | Diagrama textual de fila |

Distribuição do lote: duas `introductory`, duas `intermediate` e uma `advanced`; gabaritos C/E/B/D/A. O equilíbrio das letras é consequência da revisão de unicidade, não motivo para alterar respostas.

### Correspondência normativa multcurso

| Curso | Referência | Objetos mobilizados | Limite da elegibilidade |
|---|---|---|---|
| CC | F06 — Portaria Inep 157/2026 | Art. 6º, VI: organização e arquitetura; VII: sistemas operacionais; IX: fundamentos e técnicas de programação; X: paradigmas de linguagens de programação. | Curso de origem dos cinco itens; competências de análise, implementação e avaliação são recortadas conforme cada caso. |
| TADS | F08 — Portaria Inep 169/2026 | Art. 6º, I: algoritmos e programação; XIII: orientação a objetos; XIV: princípios de arquitetura e organização; XVIII: sistemas operacionais. | Elegível nos cinco itens; Q14 limita-se à escolha conceitual entre ênfases de programação. |
| TGTI | F09 — Portaria Inep 171/2026 | Art. 6º, II: arquitetura de computadores; III: sistemas operacionais; além da análise de recursos e serviços do art. 5º. | Elegível em Q11–Q13 e Q15. Q14 é excluída porque a matriz não explicita paradigmas de programação no mesmo recorte. |

Não se transportam números de incisos entre cursos. A mesma situação pode ser compartilhada porque o objeto existe nas três matrizes, não porque uma portaria substitui outra.

## 2. Fontes e rastreabilidade compartilhadas

| Código | Papel | Referência e uso delimitado |
|---|---|---|
| F06 | `primary` nos cinco itens | Portaria Inep 157/2026, matriz específica de CC. Sustenta a classificação editorial e os objetos de arquitetura, sistemas operacionais e paradigmas; não prescreve os casos nem os gabaritos. |
| F08 | `normative-complementary` quando TADS é elegível | Portaria Inep 169/2026. Corrobora princípios de arquitetura, sistemas operacionais, algoritmos e programação para TADS. |
| F09 | `normative-complementary` quando TGTI é elegível | Portaria Inep 171/2026. Corrobora arquitetura, sistemas operacionais e análise de recursos para TGTI. |
| T42 | `technical` | ACM/IEEE-CS/AAAI, *Computer Science Curricula 2023*, áreas Architecture and Organization, Operating Systems, Parallel and Distributed Computing e Foundations of Programming Languages. |
| T43 | `technical` | Linux Kernel Documentation, “Page Tables”, seção MMU, TLB and Page Faults. Apoia a relação entre falta de página, presença em memória e armazenamento persistente. |
| T44 | `technical` | Gene M. Amdahl, “Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities”, AFIPS, 1967, DOI `10.1145/1465482.1465560`. |
| T45 | `technical` | The Open Group Base Specifications, pthread condition variables e synchronization. Apoia o padrão produtor–consumidor; a questão não exige API POSIX. |

URLs de consulta: `https://csed.acm.org/`, `https://docs.kernel.org/mm/page_tables.html`, `https://doi.org/10.1145/1465482.1465560` e `https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_cond_wait.html`. As reproduções e URLs das portarias permanecem registradas nos lotes específicos e no plano da coleção.

## 3. E26-Q-CC-11 — O processador que estava esperando

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, TADS, TGTI]`; área “Arquitetura e organização de computadores”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: interpretar telemetria simples e priorizar a investigação do recurso limitante. Fontes: F06 como principal; F08/F09 normativas complementares; T42 técnica.

### Painel apresentado

Durante a importação noturna de registros na Base N9, a equipe coleta a mediana de cinco execuções idênticas:

| Indicador | Observação |
|---|---:|
| uso de CPU | 24% |
| fila média do armazenamento | 31 solicitações |
| latência média de leitura | 118 ms |
| uso de memória | 52% |
| rede | abaixo de 10% da capacidade |

Descrição equivalente: CPU, memória e rede possuem folga; as leituras apresentam fila e latência elevadas. Os dados mostram correlação operacional, não uma causa já comprovada.

**Enunciado.** Qual é a próxima ação tecnicamente mais coerente antes de comprar hardware?

- **A.** Trocar imediatamente o processador por um de frequência maior, porque toda importação é limitada pela CPU.
- **B.** Aumentar a largura de banda da rede, embora o indicador mostre uso inferior a 10%.
- **C.** Medir o padrão de leituras e testar agrupamento ou acesso sequencial, comparando fila, latência e tempo total.
- **D.** Reduzir a memória disponível para forçar o sistema a usar mais o processador.
- **E.** Ignorar as medições e repetir a importação com mais tarefas simultâneas até a CPU chegar a 100%.

**Gabarito: C.** A evidência aponta espera associada ao armazenamento. Medir o padrão e executar um teste controlado permite verificar se reduzir acessos aleatórios ou agrupá-los diminui a fila e o tempo total. Isso não prova antecipadamente que a otimização funcionará, mas testa a hipótese sustentada pelos indicadores.

| Alternativa | Feedback |
|---|---|
| A | CPU com folga não sustenta a compra imediata; primeiro é preciso investigar a espera observada. |
| B | A rede não aparece saturada nas medições fornecidas. |
| C | Correta: transforma a hipótese de gargalo de armazenamento em teste comparável. |
| D | Menos memória pode aumentar espera e não explica a fila de leitura. |
| E | Aumentar concorrência sem diagnóstico pode ampliar a fila e confundir o experimento. |

**Revisão independente:** somente C usa os indicadores sem confundir correlação com certeza causal. A questão não exige fabricante, sistema operacional ou unidade de armazenamento específicos. Q-CC-05 trata de cache/localidade; aqui o núcleo é diagnóstico por telemetria em nível de sistema.

## 4. E26-Q-CC-12 — Quando a memória vira espera

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, TADS, TGTI]`; área “Sistemas operacionais e memória virtual”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: relacionar conjunto de trabalho, faltas de página e pressão sobre armazenamento. Fontes: F06 como principal; F08/F09 normativas complementares; T42/T43 técnicas.

### Linha do tempo apresentada

Um laboratório executa quatro análises simultâneas. Cada análise mantém aproximadamente 1,6 GB de dados ativos. Há 4 GB de RAM disponíveis para o conjunto das análises.

| Momento | Análises ativas | faltas de página/s | CPU | armazenamento ocupado |
|---|---:|---:|---:|---:|
| 09:00 | 2 | 18 | 71% | 22% |
| 09:10 | 4 | 2.480 | 19% | 96% |

Descrição equivalente: ao dobrar a concorrência, o conjunto ativo estimado passa de 3,2 GB para 6,4 GB, superando a RAM disponível; faltas de página e uso do armazenamento crescem, enquanto a CPU fica mais ociosa.

**Enunciado.** Qual experimento testa diretamente a hipótese de pressão de memória?

- **A.** Manter quatro análises e desativar o registro de faltas de página.
- **B.** Trocar apenas o monitor, mantendo carga e recursos idênticos.
- **C.** Aumentar o número de análises para oito e observar somente o uso de CPU.
- **D.** Limitar a rede, embora os dados não apresentem tráfego como variável do caso.
- **E.** Repetir a carga com duas análises por vez ou mais RAM e comparar faltas de página, armazenamento e duração.

**Gabarito: E.** Reduzir o conjunto de trabalho concorrente ou aumentar a memória física altera justamente a variável associada à hipótese. Se as faltas e a espera caírem, com redução do tempo total, a explicação ganha evidência; ainda assim, o resultado deve ser medido.

| Alternativa | Feedback |
|---|---|
| A | Ocultar o indicador não reduz a pressão nem testa sua causa. |
| B | O monitor não altera o conjunto de trabalho ou a memória disponível. |
| C | Mais concorrência tende a ampliar a pressão e observar só CPU perde evidências importantes. |
| D | A rede não foi relacionada ao comportamento descrito. |
| E | Correta: modifica a relação entre conjunto ativo e RAM e preserva métricas comparáveis. |

**Revisão independente:** os valores são suficientes para estimar 3,2 GB e 6,4 GB. E é a única alternativa que manipula a variável relevante e mede os efeitos. O item não afirma que toda falta de página é ruim nem cobra detalhes internos de Linux.

## 5. E26-Q-CC-13 — O teto invisível da aceleração

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, TADS, TGTI]`; área “Desempenho e paralelismo”; `advanced`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: calcular o limite de aceleração imposto por uma fração serial. Fontes: F06 como principal; F08/F09 normativas complementares; T42/T44 técnicas.

### Representação apresentada

Após medição, uma rotina leva 100 segundos:

```text
parte serial:        40 s  ████████
parte paralelizável: 60 s  ████████████
```

Descrição equivalente: 40% do tempo não pode ser paralelizado; 60% pode ser dividido entre núcleos. Ignore comunicação e outros custos. Use `S(p) = 1 / (0,40 + 0,60/p)`, em que `p` é o número de núcleos usados pela parte paralela.

**Enunciado.** Qual afirmação descreve corretamente o limite do investimento em mais núcleos?

- **A.** Com infinitos núcleos, a execução chega a zero segundo porque 60% é paralelizável.
- **B.** Mesmo com infinitos núcleos, a aceleração não ultrapassa 2,5 vezes e o tempo não fica abaixo de 40 segundos.
- **C.** Com quatro núcleos, a aceleração é exatamente quatro vezes, pois cada núcleo executa 25% do programa.
- **D.** A fração serial deixa de existir quando a parte paralela recebe pelo menos dois núcleos.
- **E.** O limite é 1,5 vez, obtido somando 0,40 e 0,60 sem considerar o denominador.

**Gabarito: B.** Quando `p` cresce sem limite, `0,60/p` tende a zero e resta `S = 1/0,40 = 2,5`. A parte serial continua consumindo 40 segundos no modelo. Mais núcleos reduzem apenas a parcela paralelizável.

| Alternativa | Feedback |
|---|---|
| A | A parte serial permanece e impede tempo zero. |
| B | Correta: aplica o limite da fórmula fornecida à fração serial de 40%. |
| C | Quatro núcleos não dividem a parte serial; pela fórmula, a aceleração é aproximadamente 1,82. |
| D | Paralelizar uma parte não elimina as operações declaradas como seriais. |
| E | A soma das frações confirma 100% do tempo, mas não calcula a aceleração limite. |

**Revisão independente:** substituição algébrica e limite foram recalculados: `1/(0,40+0,15) ≈ 1,818` para quatro núcleos e `1/0,40 = 2,5` no limite. Somente B satisfaz fórmula e tempo declarado. A barra é redundante ao texto e não depende de cor.

## 6. E26-Q-CC-14 — Três problemas, três formas de programar

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, TADS]`; área “Fundamentos e paradigmas de programação”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: relacionar características de problemas a abordagens imperativa, orientada a objetos e funcional. Fontes: F06 como principal; F08 normativa complementar; T42 técnica.

### Cartões apresentados

- **P:** controlar um dispositivo por uma sequência explícita de passos que atualiza seu estado.
- **Q:** representar pedidos que combinam dados e operações, com tipos especializados reutilizando comportamento comum.
- **R:** transformar uma coleção em outra por composição de funções puras, evitando alterar os valores de entrada.

Descrição equivalente: P enfatiza comandos e mudança de estado; Q, objetos, encapsulamento e especialização; R, composição e imutabilidade. As abordagens podem coexistir em sistemas reais; a pergunta pede a ênfase mais direta em cada requisito.

**Enunciado.** Qual associação é a mais coerente?

- **A.** P funcional; Q imperativa; R orientada a objetos.
- **B.** P orientada a objetos; Q funcional; R imperativa.
- **C.** P funcional; Q orientada a objetos; R imperativa.
- **D.** P imperativa; Q orientada a objetos; R funcional.
- **E.** P orientada a objetos; Q imperativa; R funcional, pois encapsulamento exige comandos globais.

**Gabarito: D.** A descrição de P destaca sequência de comandos e atualização de estado; Q reúne dados e comportamento com especialização; R explicita funções puras, composição e valores de entrada não alterados.

| Alternativa | Feedback |
|---|---|
| A | Inverte as características centrais dos três cartões. |
| B | Funções puras pertencem a R, não ao requisito de objetos especializados em Q. |
| C | P declara atualização sequencial de estado, enquanto R declara composição sem alteração da entrada. |
| D | Correta: associa cada ênfase aos requisitos explicitamente fornecidos. |
| E | Q não exige comandos globais; a alternativa contradiz encapsulamento. |

**Revisão independente:** D é a única correspondência integral. O enunciado evita afirmar que um paradigma proíbe recursos de outro e avalia adequação conceitual, não memorização de sintaxe. A exclusão de TGTI é intencional por ausência de equivalência normativa explícita para paradigmas no recorte usado.

## 7. E26-Q-CC-15 — A fila que não pode transbordar

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, TADS, TGTI]`; área “Sistemas operacionais e concorrência”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar sincronização que preserve capacidade, exclusão mútua e espera eficiente. Fontes: F06 como principal; F08/F09 normativas complementares; T42/T45 técnicas.

### Diagrama apresentado

```text
sensores produtores ──> [ fila compartilhada: 3 posições ] ──> analisador consumidor
                         [ 41 ][ 42 ][ livre ]
```

Descrição equivalente: vários produtores inserem eventos; um consumidor retira. A fila comporta três eventos. Inserção deve esperar quando estiver cheia, retirada deve esperar quando estiver vazia e duas operações não podem alterar simultaneamente os índices da fila. Não se pode perder nem duplicar evento.

**Enunciado.** Qual projeto atende a todas as condições?

- **A.** Proteger a alteração da fila com exclusão mútua e usar condições distintas para esperar por “há espaço” e “há item”.
- **B.** Permitir inserções simultâneas sem sincronização e corrigir duplicações depois.
- **C.** Fazer produtores sobrescreverem o evento mais antigo quando a fila estiver cheia, sem avisar o consumidor.
- **D.** Manter todos os participantes em repetição contínua consultando a fila, sem bloquear e sem proteger os índices.
- **E.** Criar uma fila ilimitada, embora o requisito fixe capacidade três e espera quando cheia.

**Gabarito: A.** A exclusão mútua protege a atualização consistente da estrutura. As condições permitem bloquear produtores quando não há espaço e o consumidor quando não há item, retomando-os quando o estado muda, sem violar a capacidade.

| Alternativa | Feedback |
|---|---|
| A | Correta: cobre integridade da fila, capacidade limitada e espera nas duas condições. |
| B | Corrigir depois não impede corrida, perda ou duplicação durante a operação. |
| C | Sobrescrever viola a exigência de não perder eventos. |
| D | Consulta contínua desperdiça recursos e índices continuam sujeitos a corrida. |
| E | Remove uma restrição explícita em vez de implementá-la. |

**Revisão independente:** somente A cumpre simultaneamente as quatro premissas. O item é diferente de Q-CC-10: não compara contadores atômicos, agregação e custo; aplica o padrão produtor–consumidor a uma fila limitada. Não cobra nomes de funções POSIX.

## 8. Segunda passagem de revisão assistida por IA

| ID | Verificação de resposta única | Acessibilidade e celular | Limitação | Decisão |
|---|---|---|---|---|
| CC-11 | C é a única ação que testa o recurso associado à fila e latência sem declarar causa antecipadamente. | Tabela de cinco linhas com descrição equivalente; alternativas curtas. | Telemetria fictícia não substitui perfil real do sistema. | `under-ai-review` |
| CC-12 | E é a única intervenção sobre conjunto ativo/RAM acompanhada das métricas relevantes. | Duas linhas temporais e cálculo escrito em texto. | Resultados concretos variam por SO e padrão de acesso. | `under-ai-review` |
| CC-13 | Limite e valor para quatro núcleos foram recalculados; apenas B é compatível. | Barra possui números e descrição; fórmula pode ser lida linearmente. | Modelo ignora custos por instrução do enunciado. | `under-ai-review` |
| CC-14 | D corresponde às três definições fornecidas; nenhuma outra alternativa acerta os três cartões. | Cartões são também uma lista textual; sem sintaxe extensa. | Sistemas reais podem combinar paradigmas, limite explicitado. | `under-ai-review` |
| CC-15 | A é a única que preserva capacidade, espera e integridade sem perda. | Diagrama possui descrição equivalente e IDs legíveis. | Implementações concretas podem usar primitivas equivalentes. | `under-ai-review` |

## 9. Auditoria editorial e originalidade interna

- Os cinco IDs não existiam no projeto no início desta etapa.
- Cada questão possui cinco alternativas distintas, um gabarito fundamentado e cinco feedbacks específicos.
- Não há dependência exclusiva de cor, imagem, som ou posição; todos os objetos possuem equivalente textual.
- Q11 não repete a questão de cache CC-05; Q12 trata de pressão de memória virtual; Q13 introduz limite quantitativo de paralelização; Q14 compara paradigmas sem sintaxe; Q15 usa produtor–consumidor em fila limitada, não o contador concorrente de CC-10.
- Os itens compartilhados mantêm a mesma demanda cognitiva e fornecem todas as premissas. Nenhuma portaria de outro curso é tratada como substituta da matriz própria.
- Nenhum texto apresentado ao jogador usa o nome da avaliação externa. A referência permanece apenas na rastreabilidade interna.
- Não houve cotejo externo exaustivo de bancos de questões. Permanecem pendentes: revisão humana especializada, conferência de PPCs, calibração com estudantes e homologação de acessibilidade.

## 10. Formulário de revisão posterior

| ID | Correção técnica | Elegibilidade CC | Elegibilidade TADS | Elegibilidade TGTI | Resposta única | Clareza no celular | Decisão e justificativa |
|---|---|---|---|---|---|---|---|
| E26-Q-CC-11 | pendente | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-12 | pendente | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-13 | pendente | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-14 | pendente | pendente | pendente | não elegível | pendente | pendente | — |
| E26-Q-CC-15 | pendente | pendente | pendente | pendente | pendente | pendente | — |

Próxima etapa recomendada: auditar este lote contra todo o banco ampliado e, somente após a validação das elegibilidades, contabilizá-lo na capacidade de partidas de CC, TADS e TGTI. Não converter ou integrar isoladamente antes dessa auditoria.
