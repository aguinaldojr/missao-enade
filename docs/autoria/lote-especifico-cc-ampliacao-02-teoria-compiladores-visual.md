# N9 — Jornada Digital: ampliação de CC 02 — teoria, compiladores e computação visual

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-CC-21` a `E26-Q-CC-25`. O recorte prioriza fundamentos clássicos com alta utilidade curricular, objetos visuais simples e raciocínio curto. Não há questão avançada nem prova formal extensa.

CC é a classificação editorial de origem. SI e TADS são elegíveis apenas nos itens de linguagens e compilação sustentados por suas matrizes. Os itens de autômatos e computação gráfica permanecem exclusivos de CC. Não há JSON, integração ou alteração do jogo; todos permanecem em `under-ai-review`.

## 1. Inventário e distribuição

| ID | Conteúdo clássico | Cursos elegíveis | Dificuldade | Gabarito | Objeto apresentado |
|---|---|---|---|---|---|
| E26-Q-CC-21 | Análise léxica e tokens | CC, SI, TADS | introductory | B | Linha de código e cartões de tokens |
| E26-Q-CC-22 | Precedência e árvore sintática | CC, SI, TADS | intermediate | D | Expressão e árvore textual |
| E26-Q-CC-23 | Autômato finito determinístico | CC | intermediate | C | Tabela de transições |
| E26-Q-CC-24 | Gráficos vetoriais e imagens matriciais | CC | introductory | A | Dois recursos visuais |
| E26-Q-CC-25 | Transformação geométrica por translação | CC | intermediate | E | Triângulo em coordenadas |

Distribuição: duas `introductory`, três `intermediate` e nenhuma `advanced`; gabaritos B/D/C/A/E. O único cálculo é comparar pequenas coordenadas inteiras em Q25.

## 2. Correspondência normativa

| Curso | Referência | Objetos utilizados |
|---|---|---|
| CC | F06 — Portaria Inep 157/2026 | Art. 6º, IX: fundamentos e técnicas de programação; X: paradigmas de linguagens; XIV: computação gráfica e processamento de imagem; XVIII: teoria da computação; XIX: compiladores. |
| SI | F07 — Portaria Inep 168/2026 | Art. 6º, IV: fundamentos e paradigmas de linguagens de programação. Sustenta somente Q21 e Q22. |
| TADS | F08 — Portaria Inep 169/2026 | Art. 6º, I: algoritmos e programação. Sustenta somente Q21 e Q22 em nível de leitura estrutural. |

F06 é `primary`. F07 e F08 são `normative-complementary` somente em Q21 e Q22. TGTI e TRC não são incluídos por analogia. A existência de gráficos em uma interface não equivale ao objeto específico de computação gráfica.

## 3. Fontes técnicas

| Código | Papel | Referência e limite |
|---|---|---|
| T58 | `technical` | MIT OpenCourseWare 6.035, materiais sobre análise léxica, gramáticas e análise sintática. Apoia a separação entre tokens e estrutura; código e alternativas são autorais. |
| T59 | `technical` | NIST Dictionary of Algorithms and Data Structures, verbete *finite state machine*. Apoia estados, alfabeto, transições, estado inicial e aceitação. |
| T60 | `technical` | W3C, *Scalable Vector Graphics (SVG) 2*. Apoia gráficos vetoriais bidimensionais, transformação e integração de imagens matriciais; Q24 não exige sintaxe SVG. |
| T61 | `technical` | ACM/IEEE-CS/AAAI, *Computer Science Curricula 2023*, Foundations of Programming Languages e Graphics and Interactive Techniques. Apoia o caráter clássico dos recortes. |

URLs: `https://ocw.mit.edu/courses/6-035-computer-language-engineering-spring-2010/pages/lecture-notes/`, `https://xlinux.nist.gov/dads/HTML/finiteStateMachine.html`, `https://www.w3.org/TR/SVG2/` e `https://csed.acm.org/knowledge-areas/`.

## 4. E26-Q-CC-21 — Do texto aos cartões do compilador

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS]`; área “Compiladores e linguagens”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: reconhecer a saída da análise léxica de uma instrução simples. Fontes: F06 principal; F07/F08 normativas complementares; T58/T61 técnicas.

### Código apresentado

```text
total = preco + 25;
```

Considere as categorias: `IDENTIFICADOR`, `ATRIBUIÇÃO`, `SOMA`, `INTEIRO` e `PONTO_E_VÍRGULA`. Espaços apenas separam elementos e não viram tokens neste exercício.

**Enunciado.** Qual sequência de tokens o analisador léxico deve produzir?

- **A.** `IDENTIFICADOR(totalpreco)`, `INTEIRO(2)`, `INTEIRO(5)`.
- **B.** `IDENTIFICADOR(total)`, `ATRIBUIÇÃO`, `IDENTIFICADOR(preco)`, `SOMA`, `INTEIRO(25)`, `PONTO_E_VÍRGULA`.
- **C.** `TIPO(real)`, `FUNÇÃO(preco)`, `RESULTADO(25)`, executando a soma durante a leitura.
- **D.** Um token para cada caractere, inclusive cada espaço, sem formar identificadores ou o número 25.
- **E.** Uma árvore sintática completa, pois a análise léxica já decide toda a precedência e o significado do programa.

**Gabarito: B.** A análise léxica agrupa caracteres em unidades como identificadores, operadores, literal inteiro e delimitador. Construir a árvore e verificar tipos pertencem a etapas posteriores no modelo fornecido.

| Alternativa | Feedback |
|---|---|
| A | Os dois identificadores estão separados por operadores, e 25 forma um único literal inteiro. |
| B | Correta: reconhece as seis unidades léxicas na ordem do código. |
| C | O analisador não inventa tipo nem executa a soma nesta etapa. |
| D | A função do scanner é justamente agrupar caracteres em tokens reconhecíveis. |
| E | Tokens alimentam a análise sintática; eles ainda não são a árvore completa. |

**Revisão independente:** B é a única sequência que preserva ordem e categorias fornecidas. Diferentemente de CC-03, que diagnostica tipos numa expressão, este item avalia apenas a segmentação léxica.

## 5. E26-Q-CC-22 — A multiplicação fica mais perto das folhas

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS]`; área “Análise sintática”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar a árvore que representa precedência de multiplicação sobre soma. Fontes: F06 principal; F07/F08 normativas complementares; T58/T61 técnicas.

### Expressão apresentada

```text
a + b * c
```

Regra da linguagem: `*` possui precedência maior que `+`. Cada árvore é descrita como `operador(filho esquerdo, filho direito)`.

**Enunciado.** Qual árvore representa a expressão sem alterar sua precedência?

- **A.** `*(+(a, b), c)`, equivalente a `(a + b) * c`.
- **B.** `+( *(a, c), b )`, equivalente a `a * c + b`.
- **C.** `+(*(a, b), c)`, equivalente a `a * b + c`.
- **D.** `+(a, *(b, c))`, equivalente a `a + (b * c)`.
- **E.** `*(a, +(b, c))`, equivalente a `a * (b + c)`.

**Gabarito: D.** Como a multiplicação é agrupada primeiro, seu nó contém `b` e `c`. A soma ocupa a raiz, com `a` à esquerda e o resultado de `b*c` à direita.

| Alternativa | Feedback |
|---|---|
| A | Agrupa a soma antes da multiplicação e representa outra expressão. |
| B | Troca os operandos associados à multiplicação. |
| C | Multiplica `a` por `b`, o que não corresponde ao texto original. |
| D | Correta: mantém `b*c` como subárvore da soma. |
| E | Agrupa `b+c`, contrariando a precedência declarada. |

**Revisão independente:** D é a única árvore equivalente à expressão. O puzzle CC antigo ordena passes completos de tradução; aqui o aluno lê uma única árvore pequena, sem repetir a sequência do puzzle.

## 6. E26-Q-CC-23 — Qual sequência chega ao estado de aceitação?

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC]`; área “Teoria da computação”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: executar uma pequena tabela de transições de autômato finito determinístico. Fontes: F06 principal; T59/T61 técnicas.

### Autômato apresentado

O estado inicial é `q0`; somente `q2` é estado de aceitação.

| Estado atual | entrada `0` | entrada `1` |
|---|---|---|
| `q0` | `q1` | `q0` |
| `q1` | `q1` | `q2` |
| `q2` | `q1` | `q0` |

Leia cada símbolo da esquerda para a direita. Uma cadeia é aceita somente se, depois do último símbolo, o autômato estiver em `q2`.

**Enunciado.** Qual cadeia é aceita?

- **A.** `1100`
- **B.** `1110`
- **C.** `1101`
- **D.** `1011`
- **E.** `0000`

**Gabarito: C.** Para `1101`, as transições são `q0 → q0 → q0 → q1 → q2`. As demais cadeias terminam em `q0` ou `q1`.

| Alternativa | Feedback |
|---|---|
| A | Termina com transição `q1 --0→ q1`, que não é estado de aceitação. |
| B | O último `0` leva de `q0` a `q1`. |
| C | Correta: o sufixo `01` leva de `q0` a `q1` e depois a `q2`. |
| D | Após chegar a `q2`, o último `1` leva de volta a `q0`. |
| E | Os zeros mantêm o autômato em `q1`, que não é final. |

**Revisão independente:** as cinco cadeias foram rastreadas integralmente e somente C termina em q2. O item é mais acessível que CC-09: aplica um autômato fornecido, sem demonstrar não regularidade.

## 7. E26-Q-CC-24 — Um ícone para a tela e para o painel

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC]`; área “Computação gráfica”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: escolher representação vetorial ou matricial conforme natureza e escala do recurso. Fontes: F06 principal; T60/T61 técnicas.

### Recursos apresentados

- **Recurso P:** ícone geométrico formado por linhas e curvas, usado com 64 pixels no celular e também em um painel impresso de dois metros.
- **Recurso F:** fotografia de um laboratório, com iluminação, texturas e muitos detalhes contínuos, exibida em tamanho definido.

Descrição equivalente: P precisa variar muito de escala preservando bordas geométricas; F registra amostras de uma cena real com variações de cor e textura.

**Enunciado.** Qual escolha é mais adequada aos requisitos?

- **A.** Representação vetorial para P e imagem matricial com resolução adequada para F.
- **B.** Imagem matricial de 16×16 para P no painel de dois metros e vetor obrigatório para cada detalhe da fotografia.
- **C.** Texto sem formas para P e uma única cor sólida para F, pois ambos eliminam qualquer problema de escala.
- **D.** A mesma imagem matricial minúscula para P e F, ampliada sem considerar perda de detalhe.
- **E.** Formato definido apenas pelo nome do arquivo, sem considerar geometria, resolução ou uso.

**Gabarito: A.** Formas vetoriais descrevem geometria e se adaptam bem a escalas diferentes. Fotografias normalmente são representadas por uma grade de pixels, cuja resolução deve ser suficiente para o tamanho de exibição.

| Alternativa | Feedback |
|---|---|
| A | Correta: associa geometria escalável ao ícone e amostras de pixels à fotografia. |
| B | Uma matriz 16×16 perde definição na grande ampliação; vetorizar cada detalhe fotográfico não é requisito. |
| C | Eliminar o conteúdo visual não atende às funções dos dois recursos. |
| D | Ampliar matriz muito pequena não cria os detalhes ausentes. |
| E | A escolha depende do conteúdo e do uso, não somente da extensão escrita. |

**Revisão independente:** A é a única alternativa que atende simultaneamente à escala do ícone e à natureza da fotografia. O item não exige decorar sintaxe SVG nem afirma que todo desenho deve ser vetorial.

## 8. E26-Q-CC-25 — O triângulo mudou de lugar

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC]`; área “Transformações geométricas”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: reconhecer uma translação comparando coordenadas antes e depois. Fontes: F06 principal; T60/T61 técnicas.

### Coordenadas apresentadas

| Vértice | Antes | Depois |
|---|---|---|
| P | `(1, 1)` | `(5, 0)` |
| Q | `(3, 1)` | `(7, 0)` |
| R | `(2, 3)` | `(6, 2)` |

Descrição equivalente: os três pontos mantêm as mesmas distâncias relativas e cada coordenada x aumenta 4, enquanto cada y diminui 1. Tamanho e orientação do triângulo permanecem iguais.

**Enunciado.** Qual transformação foi aplicada?

- **A.** Escala por fator 4 nos dois eixos.
- **B.** Rotação de 90 graus em torno da origem.
- **C.** Reflexão em relação ao eixo x.
- **D.** Deformação que altera separadamente cada vértice.
- **E.** Translação pelo vetor `(4, −1)`.

**Gabarito: E.** Somar `(4, −1)` a P, Q e R produz exatamente P’, Q’ e R’. Como o mesmo deslocamento é aplicado a todos, forma, tamanho e orientação são preservados.

| Alternativa | Feedback |
|---|---|
| A | Escala multiplicaria as coordenadas e também alteraria o tamanho. |
| B | Rotação mudaria a orientação e não produziria os pares apresentados. |
| C | Reflexão no eixo x manteria x e apenas inverteria o sinal de y. |
| D | O mesmo deslocamento ocorre nos três vértices; não há deformação independente. |
| E | Correta: todos os pontos recebem `+4` em x e `−1` em y. |

**Revisão independente:** as três diferenças foram verificadas e são `(4,−1)`. E é a única transformação coerente. O cálculo exige apenas subtrações de inteiros pequenos.

## 9. Segunda passagem de revisão assistida por IA

| ID | Verificação de unicidade | Engajamento e acessibilidade | Limitação | Estado |
|---|---|---|---|---|
| CC-21 | Somente B reconhece os seis tokens sem executar ou analisar semanticamente. | Código de uma linha e tokens legíveis. | Categorias são as declaradas pelo exercício. | `under-ai-review` |
| CC-22 | Somente D preserva `b*c` como subárvore da soma. | Notação textual equivalente ao desenho de árvore. | Não avalia gramática completa ou construção do parser. | `under-ai-review` |
| CC-23 | Rastreamento das cinco cadeias deixa somente C em q2. | Tabela 3×2 e transição textual do gabarito. | Avalia execução do AFD, não prova sobre classes de linguagem. | `under-ai-review` |
| CC-24 | Somente A concilia escala geométrica e fotografia detalhada. | Dois cartões descritivos, sem imagem obrigatória. | Resolução concreta depende do uso final. | `under-ai-review` |
| CC-25 | Todos os pontos variam por `(4,−1)`; somente E. | Tabela de três linhas e descrição equivalente. | Usa apenas translação 2D elementar. | `under-ai-review` |

## 10. Auditoria editorial e originalidade interna

- Os IDs `E26-Q-CC-21` a `E26-Q-CC-25` estavam livres antes desta autoria.
- Cada questão possui cinco alternativas, uma resposta fundamentada e feedback A–E.
- O lote contém duas introdutórias, três intermediárias e nenhuma avançada.
- CC-21 isola análise léxica, diferente da análise semântica de CC-03; CC-22 usa uma expressão pequena, não a cadeia de passes do puzzle CC; CC-23 executa AFD fornecido, em vez de provar não regularidade como CC-09; CC-24 e CC-25 não repetem o filtro de imagem de CC-07.
- A elegibilidade de SI/TADS limita-se a Q21/Q22. Os demais objetos permanecem específicos de CC para evitar compartilhamento por analogia ampla.
- Nenhuma resposta depende de cor, som, movimento ou imagem externa. Código, tabelas e representações têm equivalentes textuais.
- Nenhum texto apresentado ao jogador utiliza o nome da avaliação externa. A origem normativa permanece apenas na documentação interna.
- Permanecem pendentes: cotejo externo amplo, revisão humana especializada, calibração com estudantes, confirmação nos PPCs e homologação humana de acessibilidade.

## 11. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Elegibilidade por curso | Potencial de engajamento | Clareza no celular | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-CC-21 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-22 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-23 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-24 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-25 | pendente | pendente | pendente | pendente | pendente | — |

Próxima etapa recomendada: recalcular a cobertura de CC após estes dez itens de ampliação e os três lotes compartilhados, antes de criar um terceiro lote específico. Isso evita excesso em arquitetura, grafos ou teoria enquanto outra área permanece descoberta.
