# N9 — Jornada Digital: lacunas prioritárias de SI — lote 3 de 3

Autoria documental assistida por IA — 18/11/2026. Este lote cria cinco questões de reserva, `E26-Q-SI-76` a `E26-Q-SI-80`, sobre SQL, algoritmos, estruturas de dados e segurança da informação. Não gera JSON, não integra conteúdo e não altera as jornadas existentes.

Todos os cenários e dados são fictícios. Os itens usam `classification: SI`, `courses: [SI]`, `collectionId: enade-2026` e `validationStatus: under-ai-review`. Código, tabelas e diagramas possuem equivalente textual e não dependem de cor.

## 1. Inventário e distribuição

| ID | Macroárea | Conteúdo central | Dificuldade | Gabarito | Recurso principal |
|---|---|---|---|---|---|
| E26-Q-SI-76 | SI-M09 | Subconsulta correlacionada, `NOT EXISTS` e `NULL` | advanced | D | Esquema, dados e SQL portátil |
| E26-Q-SI-77 | SI-M02 | Análise assintótica Big-O | intermediate | B | Pseudocódigo com laços |
| E26-Q-SI-78 | SI-M02 | Pilha e fila | introductory | E | Simulação de operações |
| E26-Q-SI-79 | SI-M02 | Árvore balanceada e tabela hash | intermediate | A | Comparador de consultas |
| E26-Q-SI-80 | SI-M08 | Confidencialidade, integridade, disponibilidade e autenticidade | advanced | C | Painel de incidentes |

Distribuição: uma `introductory`, duas `intermediate` e duas `advanced`; gabaritos D/B/E/A/C. O lote completa as 15 questões prioritárias sem ampliar novamente arquitetura corporativa, governança ou sistemas empresariais.

## 2. Fontes e rastreabilidade compartilhadas

| Código | Papel | Referência e limite de uso |
|---|---|---|
| F07 | primary | Portaria Inep nº 168/2026, arts. 5º–6º. Sustenta os recortes amplos de algoritmos, estruturas de dados, bancos de dados e segurança em Sistemas de Informação; não prescreve os casos autorais. |
| T38 | technical | Documentações oficiais de PostgreSQL, MySQL e Oracle sobre `IN`, `EXISTS` e subconsultas. Apoiam a semântica booleana e o tratamento de `NULL`; não se usam extensões de fornecedor. |
| T39 | technical | NIST, *Dictionary of Algorithms and Data Structures (DADS)*. Apoia Big-O, pilha, fila, árvore de busca e tabela hash como vocabulário técnico; custos específicos são declarados nos itens. |
| T40 | technical | ISO/IEC 27002:2022 e glossário ISO/IEC JTC 1/SC 27. Apoiam os conceitos de confidencialidade, integridade, disponibilidade e autenticidade; a norma completa possui acesso licenciado. |
| T41 | technical | NIST CSRC Glossary, verbetes CIA, confidentiality, integrity e security. Corrobora propriedades e perdas de segurança sem substituir avaliação de risco concreta. |

URLs: `https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade`, `https://www.postgresql.org/docs/current/functions-subquery.html`, `https://dev.mysql.com/doc/refman/8.4/en/subqueries.html`, `https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/sql-language-reference.pdf`, `https://xlinux.nist.gov/dads/`, `https://www.iso.org/standard/75652.html` e `https://csrc.nist.gov/glossary/term/security`.

## 3. E26-Q-SI-76 — O valor ausente que mudou a resposta

**Ficha editorial:** versão 1; SI-M09 / SI-II; área “SQL e bancos de dados”; `advanced`. Objetivo: selecionar uma subconsulta que represente ausência de correspondência mesmo quando a coluna consultada contém `NULL`. Dialeto: subconjunto comum a PostgreSQL, MySQL e Oracle. Fontes: F07/T38.

### Esquema lógico e dados

```text
CLIENTE(id PK, nome)
CHAMADO(id PK, cliente_id opcional FK → CLIENTE.id, status)
```

| CHAMADO | cliente_id | status |
|---:|---:|---|
| 10 | 1 | FECHADO |
| 11 | `NULL` | FECHADO |
| 12 | 3 | ABERTO |

Clientes: `(1, Ana)`, `(2, Bruno)`, `(3, Carla)`. O relatório deve listar clientes sem chamado **fechado**: Bruno e Carla. A linha 11 veio de importação e ainda não foi associada.

**Enunciado.** Qual consulta produz o resultado mesmo com o `NULL` existente?

- **A.** `SELECT nome FROM cliente WHERE id NOT IN (SELECT cliente_id FROM chamado);`
- **B.** `SELECT nome FROM cliente WHERE id IN (SELECT cliente_id FROM chamado WHERE status='FECHADO');`
- **C.** `SELECT c.nome FROM cliente c WHERE EXISTS (SELECT 1 FROM chamado ch WHERE ch.status='FECHADO');`
- **D.** `SELECT c.nome FROM cliente c WHERE NOT EXISTS (SELECT 1 FROM chamado ch WHERE ch.cliente_id=c.id AND ch.status='FECHADO') ORDER BY c.id;`
- **E.** `SELECT c.nome FROM cliente c WHERE c.id = (SELECT ch.cliente_id FROM chamado ch);`

**Gabarito: D.** A subconsulta correlacionada testa, para cada cliente, se existe chamado fechado correspondente. O `NULL` não corresponde a nenhum `c.id`. Em A, `NOT IN` recebe um conjunto com `NULL`, podendo produzir resultado desconhecido em vez de verdadeiro.

| Alternativa | Feedback |
|---|---|
| A | `NOT IN` com `NULL` na subconsulta não representa com segurança a ausência desejada. |
| B | Retorna quem possui chamado fechado, o oposto do relatório. |
| C | A subconsulta não se relaciona ao cliente; como existe um fechado, todos passariam. |
| D | Correta: testa ausência de correspondência fechada para cada cliente. |
| E | A subconsulta retorna várias linhas e não representa o predicado solicitado. |

**Acessibilidade, execução e originalidade:** esquema, dados e consultas são copiáveis. Em 18/11/2026, a consulta D foi executada em SQLite em memória e retornou Bruno e Carla. O item complementa SI-75: agora o núcleo é a lógica ternária envolvendo `NULL`, não a preservação por `LEFT JOIN`. A execução nativa nos três SGBDs permanece pendente.

## 4. E26-Q-SI-77 — Quantas vezes o registro acontece?

**Ficha editorial:** versão 1; SI-M02 / SI-I; área “Algoritmos e análise de complexidade”; `intermediate`. Objetivo: derivar a ordem de crescimento de laços com progressões distintas. Fontes: F07 como `primary`; T39 como `technical`.

### Código apresentado

```text
para i de 0 até n-1:
    j ← 1
    enquanto j < n:
        registrar(i, j)   // custo constante
        j ← j * 2
```

Considere `n > 1`; atribuições, comparações e `registrar` têm custo constante. O laço externo executa `n` vezes. No interno, `j` assume potências de dois até alcançar `n`.

**Enunciado.** Qual é a complexidade temporal assintótica do trecho?

- **A.** `O(log n)`, porque somente o laço interno importa.
- **B.** `O(n log n)`, pois há `n` execuções externas e cerca de `log₂ n` internas para cada uma.
- **C.** `O(n)`, porque dobrar `j` elimina o custo do laço externo.
- **D.** `O(n²)`, porque todo laço aninhado percorre necessariamente `n` posições.
- **E.** `O(2ⁿ)`, porque `j` é multiplicado por dois.

**Gabarito: B.** Dobrar `j` produz aproximadamente `log₂ n` iterações. Esse custo se repete para cada um dos `n` valores de `i`, resultando em crescimento `n log n`.

| Alternativa | Feedback |
|---|---|
| A | Ignora que o laço logarítmico é repetido `n` vezes. |
| B | Correta: combina `n` repetições com crescimento logarítmico interno. |
| C | O laço externo não desaparece por causa da atualização de `j`. |
| D | O laço interno não percorre todos os valores até `n`; ele dobra. |
| E | Multiplicação da variável de controle reduz iterações; não cria ramificação exponencial. |

**Acessibilidade e originalidade:** indentação é acompanhada da descrição dos dois laços. Diferentemente de SI-22 e SI-23, o aluno calcula crescimento, não escolhe correção de uma estrutura já implementada.

## 5. E26-Q-SI-78 — Desfazer a última ação sem furar a fila

**Ficha editorial:** versão 1; SI-M02 / SI-I; área “Estruturas de dados”; `introductory`. Objetivo: selecionar pilha e fila a partir da ordem de remoção exigida. Fontes: F07 como `primary`; T39 como `technical`.

### Objeto apresentado

Um editor de processos precisa de duas estruturas independentes:

- **Histórico de edição:** ao escolher “Desfazer”, remove primeiro a alteração mais recente.
- **Triagem comum:** solicitações de mesma prioridade são atendidas na ordem em que chegaram.

Sequências de teste:

```text
edições: mover A, renomear B, excluir C  → primeiro desfazer: excluir C
chegadas: chamado 31, chamado 32, chamado 33 → primeiro atender: chamado 31
```

**Enunciado.** Qual combinação implementa diretamente essas duas políticas?

- **A.** Fila para o histórico e pilha para a triagem.
- **B.** Árvore para ambos, removendo sempre um elemento arbitrário.
- **C.** Tabela hash para o histórico e grafo para a triagem, sem registrar ordem.
- **D.** Pilha para ambos, atendendo primeiro o chamado 33.
- **E.** Pilha LIFO para o histórico e fila FIFO para a triagem.

**Gabarito: E.** A pilha remove o último elemento inserido, reproduzindo “Desfazer”. A fila remove o primeiro elemento inserido, preservando a ordem de chegada entre solicitações equivalentes.

| Alternativa | Feedback |
|---|---|
| A | Inverte as políticas: desfazer é LIFO e atendimento comum é FIFO. |
| B | A escolha não garante diretamente nenhuma das duas ordens. |
| C | Busca por chave ou relação não substitui a ordem exigida. |
| D | Pilha na triagem viola a ordem de chegada fornecida. |
| E | Correta: LIFO atende ao histórico e FIFO atende à triagem. |

**Acessibilidade e originalidade:** as ordens são demonstradas com IDs em texto; nenhuma animação é necessária. O contexto aproxima estruturas abstratas de duas funcionalidades profissionais distintas.

## 6. E26-Q-SI-79 — Busca exata ou intervalo ordenado?

**Ficha editorial:** versão 1; SI-M02 / SI-I; área “Estruturas de busca”; `intermediate`. Objetivo: escolher estruturas segundo operações dominantes e garantias declaradas. Fontes: F07 como `primary`; T39 como `technical`.

### Objeto apresentado

Um serviço mantém 200 mil ativos em memória e possui duas necessidades:

| Índice | Operação dominante | Garantia fornecida |
|---|---|---|
| I1 | localizar um ativo por código exato | função hash adequada; busca média `O(1)`; ordem irrelevante |
| I2 | listar códigos entre dois limites, já ordenados | árvore de busca balanceada; busca `O(log n)` mais os `k` resultados |

As estruturas podem coexistir e apontar para os mesmos objetos.

**Enunciado.** Qual projeto se alinha às operações e garantias?

- **A.** Tabela hash em I1 e árvore de busca balanceada em I2.
- **B.** Pilha em I1 e fila em I2, removendo dados durante cada consulta.
- **C.** Tabela hash em I2 e varredura linear em I1, embora haja busca exata frequente.
- **D.** Árvore sem qualquer regra de ordenação em I2 e lista não indexada em I1.
- **E.** Uma matriz de adjacência para ambos, mesmo sem relações entre pares de ativos.

**Gabarito: A.** A tabela hash atende à busca exata média sem exigir ordem. A árvore balanceada localiza o início do intervalo e percorre os resultados em ordem. O item declara custos e não afirma tempo constante no pior caso da hash.

| Alternativa | Feedback |
|---|---|
| A | Correta: cada estrutura corresponde à operação dominante declarada. |
| B | LIFO e FIFO organizam remoção, não busca exata e intervalo ordenado. |
| C | Hash não oferece naturalmente percurso por intervalo; a varredura desperdiça o índice exato. |
| D | Sem ordenação, a árvore não oferece a propriedade usada no intervalo. |
| E | Não existe relação de grafo que justifique uma matriz quadrática. |

**Acessibilidade e originalidade:** custos e operações estão em tabela e texto linear. SI-21 usa dicionário para estado versionado; este item compara explicitamente busca exata e intervalo ordenado.

## 7. E26-Q-SI-80 — Quatro alertas, quatro propriedades

**Ficha editorial:** versão 1; SI-M08 / SI-II; área “Segurança da informação”; `advanced`. Objetivo: distinguir CID e autenticidade pelo efeito primário de incidentes delimitados. Fontes: F07 como `primary`; T40 e T41 como `technical`.

### Convenções e alertas

- **Confidencialidade:** informação não é divulgada a pessoa não autorizada.
- **Integridade:** informação permanece correta e completa contra alteração indevida.
- **Disponibilidade:** informação ou serviço pode ser usado sob demanda por entidade autorizada.
- **Autenticidade:** entidade ou origem é aquilo que afirma ser.

| Alerta | Evidência principal |
|---|---|
| P | relatório restrito foi lido por conta sem autorização |
| Q | valor de pagamento foi alterado sem aprovação |
| R | portal ficou inacessível às pessoas autorizadas |
| S | servidor falso apresentou-se como o portal legítimo |

Considere apenas o efeito primário explicitado; um incidente real pode afetar mais de uma propriedade.

**Enunciado.** Qual associação está correta?

- **A.** P disponibilidade; Q autenticidade; R integridade; S confidencialidade.
- **B.** P integridade; Q confidencialidade; R autenticidade; S disponibilidade.
- **C.** P confidencialidade; Q integridade; R disponibilidade; S autenticidade.
- **D.** P autenticidade; Q disponibilidade; R confidencialidade; S integridade.
- **E.** Todos afetam somente confidencialidade porque envolvem sistemas digitais.

**Gabarito: C.** Leitura indevida caracteriza divulgação não autorizada; alteração indevida compromete correção; indisponibilidade impede uso autorizado; servidor falso compromete a alegação de identidade/origem.

| Alternativa | Feedback |
|---|---|
| A | Inverte os efeitos primários descritos em todos os alertas. |
| B | Alteração é integridade, indisponibilidade é disponibilidade e falsa identidade é autenticidade. |
| C | Correta: aplica cada definição à evidência principal correspondente. |
| D | Leitura indevida não é autenticidade, e portal fora do ar não é confidencialidade. |
| E | Segurança possui propriedades distintas; meio digital não as reduz a uma só. |

**Acessibilidade e limite:** letras, nomes e evidências identificam os alertas; não há dependência de ícones ou cores. “CID+A” é usado como abreviação editorial, sem chamar quatro propriedades de tríade.

## 8. Segunda passagem de revisão assistida por IA

| ID | Teste independente de resposta | Risco ou limitação | Decisão |
|---|---|---|---|
| SI-76 | D executada em SQLite em memória retorna Bruno e Carla; B retorna Ana; C retorna todos; E falha por múltiplas linhas; A é afetada pelo `NULL`. | Desempenho depende do otimizador; o item avalia semântica, não plano de execução. | `under-ai-review` |
| SI-77 | O interno executa `ceil(log₂ n)` vezes para cada um dos `n` valores; B é a única ordem correta. | Constantes e base do log são omitidas corretamente em Big-O. | `under-ai-review` |
| SI-78 | As sequências fornecidas exigem último a entrar/primeiro a sair e primeiro a entrar/primeiro a sair; somente E. | Implementações concretas podem variar; o item escolhe tipos abstratos. | `under-ai-review` |
| SI-79 | Somente A usa busca média por chave e percurso ordenado conforme garantias explícitas. | Hash possui pior caso diferente; a explicação limita a afirmação ao caso médio fornecido. | `under-ai-review` |
| SI-80 | Aplicação direta das quatro definições produz unicamente P-C, Q-I, R-D, S-Autenticidade. | Incidentes reais podem combinar propriedades; o cenário manda classificar o efeito primário. | `under-ai-review` |

## 9. Auditoria editorial do lote

- IDs `E26-Q-SI-76` a `E26-Q-SI-80` eram inexistentes no projeto no início da etapa.
- Cada questão possui cinco alternativas distintas, um gabarito e feedback A–E.
- A questão SQL declara portabilidade e evita `LIMIT`, `NVL`, `IFNULL`, datas e outras extensões de fornecedor.
- Código e tabelas possuem equivalente textual; nenhuma resposta depende apenas de cor, imagem ou movimento.
- Os cinco núcleos são diferentes de SI-21–23, SI-36–38 e dos dois lotes prioritários anteriores.
- Nenhum conteúdo foi promovido ou integrado; todos permanecem `under-ai-review`.
- Permanecem pendentes: execução nativa do SQL nos três SGBDs, cotejo externo, PPC, calibragem com estudantes e homologação humana de acessibilidade.

## 10. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Adequação ao curso/PPC | Clareza em celular | Acessibilidade humana | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-SI-76 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-77 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-78 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-79 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-80 | pendente | pendente | pendente | pendente | pendente | — |

Com este lote, as 15 questões prioritárias `SI-66` a `SI-80` estão redigidas. A próxima etapa recomendada é uma auditoria conjunta dos três lotes antes de qualquer conversão ou integração.
