# N9 — Jornada Digital: ampliação de CC 03 — interação, lógica e paradigmas

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-CC-26` a `E26-Q-CC-30` para fechar as quatro lacunas registradas na matriz de capacidade ampliada de Ciência da Computação e criar uma reserva direta para paradigmas de programação.

O lote privilegia situações profissionais curtas, fundamentos clássicos e objetos visuais que podem ser apresentados no jogo por cartões, tabelas e fluxos. Não contém questão avançada nem cálculo longo. Não há JSON, integração ao catálogo ou alteração do jogo; todos os itens permanecem em `under-ai-review`.

## 1. Inventário e distribuição

| ID | Conteúdo clássico | Cursos elegíveis | Dificuldade | Gabarito | Objeto apresentado |
|---|---|---|---|---|---|
| E26-Q-CC-26 | Feedback e recuperação de erro em IHC | CC, SI, TADS | introductory | C | Comparação acessível de duas telas |
| E26-Q-CC-27 | Circuito sequencial com flip-flop D | CC | intermediate | A | Linha do tempo de sinais |
| E26-Q-CC-28 | Equivalência lógica e lei de De Morgan | CC, SI, TADS | introductory | E | Regra de acesso e cartões lógicos |
| E26-Q-CC-29 | Expressão regular e autômato finito | CC | intermediate | B | Diagrama textual de reconhecedor |
| E26-Q-CC-30 | Programação orientada a eventos | CC, SI, TADS | introductory | C | Fluxo de eventos de uma interface |

Distribuição: três `introductory`, duas `intermediate` e nenhuma `advanced`; gabaritos C/A/E/B/C. A repetição de C decorre da unicidade das respostas, não de uma meta de distribuição.

## 2. Correspondência normativa

| Curso | Referência | Objetos utilizados |
|---|---|---|
| CC | F06 — Portaria Inep 157/2026 | Art. 6º, III: interação humano-computador; V: sistemas digitais; VIII: lógica e matemática discreta; X: paradigmas de linguagens de programação; XVIII: teoria da computação. |
| SI | F07 — Portaria Inep 168/2026 | Interação humano-computador; lógica e matemática discreta; fundamentos e paradigmas de linguagens de programação. Sustenta Q26, Q28 e Q30. |
| TADS | F08 — Portaria Inep 169/2026 | Interação humano-computador; lógica matemática e teoria dos conjuntos; algoritmos e programação/orientação a objetos. Sustenta Q26, Q28 e Q30 em nível introdutório. |

F06 é a fonte `primary`. F07 e F08 são `normative-complementary` somente nos itens em que os respectivos cursos aparecem em `courses`. Sistemas digitais e teoria da computação permanecem exclusivos de CC neste lote; não foram compartilhados por semelhança indireta.

## 3. Fontes técnicas

| Código | Papel | Referência e limite |
|---|---|---|
| T55 | `technical` | ACM/IEEE-CS/AAAI, *Computer Science Curricula 2023*. Apoia os núcleos de interação, sistemas digitais, lógica, teoria e linguagens; não determina os cenários ou gabaritos. |
| T59 | `technical` | NIST Dictionary of Algorithms and Data Structures, verbete *finite state machine*. Apoia estados, transições e aceitação de Q29. |
| T62 | `technical` | W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*, critérios sobre identificação de erro, mensagens de estado e entrada assistida. Apoia a comparação de recuperação em Q26 sem transformar o item em auditoria completa de conformidade. |
| T63 | `technical` | MIT OpenCourseWare 6.004, *Computation Structures*, materiais de lógica sequencial. Apoia o comportamento de amostragem do flip-flop D idealizado em Q27. |
| T64 | `technical` | MIT, *Mathematics for Computer Science*, capítulos de lógica proposicional. Apoia a equivalência de negação usada em Q28. |
| T65 | `technical` | W3C, *UI Events*. Apoia o modelo de eventos e tratadores usado em Q30; o pseudocódigo e o serviço fictício são autorais. |

URLs: `https://csed.acm.org/knowledge-areas/`, `https://xlinux.nist.gov/dads/HTML/finiteStateMachine.html`, `https://www.w3.org/TR/WCAG22/`, `https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/`, `https://courses.csail.mit.edu/6.042/spring18/mcs.pdf` e `https://www.w3.org/TR/uievents/`.

## 4. E26-Q-CC-26 — A inscrição não pode desaparecer

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS]`; área “Interação humano-computador”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar feedback e recuperação que ajudem o usuário a concluir uma tarefa após falha. Fontes: F06 principal; F07/F08 normativas complementares; T55/T62 técnicas.

### Protótipos apresentados

Um portal acadêmico perdeu a conexão quando uma estudante tentou enviar uma inscrição já preenchida.

| Tela A | Tela B |
|---|---|
| Apaga os campos e mostra apenas `Erro 42`. | Mantém os campos e informa: `Não foi possível enviar. Verifique a conexão e tente novamente.` Também oferece o botão `Tentar novamente`. |

Descrição equivalente: as duas telas informam falha, mas somente B preserva o trabalho, explica uma ação possível e oferece recuperação identificada por texto. Nenhuma informação depende de cor ou ícone.

**Enunciado.** Considerando que a inscrição ainda não foi enviada, qual avaliação é mais adequada?

- **A.** A é melhor porque apagar os campos comprova que o servidor recebeu todos os dados.
- **B.** A é melhor porque um código numérico isolado sempre explica a causa e a solução para qualquer pessoa.
- **C.** B é melhor porque preserva a entrada, comunica o estado e oferece uma ação de recuperação sem afirmar que o envio ocorreu.
- **D.** B é pior porque toda falha deve fechar imediatamente o portal e impedir nova tentativa.
- **E.** As telas são equivalentes, pois a possibilidade de recuperar a tarefa não interfere na interação.

**Gabarito: C.** A tela B reduz a necessidade de redigitação, fornece uma mensagem compreensível e oferece uma ação compatível com a falha. Ela não promete sucesso nem oculta que o envio continua pendente.

| Alternativa | Feedback |
|---|---|
| A | Apagar os campos não comprova recebimento e aumenta o custo de recuperação. |
| B | O código pode ajudar suporte técnico, mas não orienta sozinho a estudante. |
| C | Correta: preserva o trabalho, informa o estado e oferece recuperação explícita. |
| D | Bloquear novas tentativas não decorre do cenário e impediria a conclusão da tarefa. |
| E | Recuperação e preservação dos dados diferenciam diretamente as duas experiências. |

**Revisão independente:** somente C atende simultaneamente à preservação da entrada, clareza do estado e recuperação. O item não exige decorar um número de critério de acessibilidade e não repete SI-34/SI-35, pois compara a retomada de uma transação interrompida.

## 5. E26-Q-CC-27 — O bit guardado em cada pulso

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC]`; área “Sistemas digitais”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: rastrear o estado de um flip-flop D idealizado em bordas de subida. Fontes: F06 principal; T55/T63 técnicas.

### Painel de sinais

Um protótipo usa um flip-flop D para guardar um bit. Considere o modelo idealizado:

- antes do primeiro pulso, `Q=0`;
- em cada borda de subida do relógio, `Q` recebe o valor presente em `D`;
- entre duas bordas, `Q` permanece com o último valor armazenado.

| Borda de subida | Valor de `D` imediatamente antes da borda |
|---:|---:|
| 1 | 1 |
| 2 | 1 |
| 3 | 0 |

Descrição equivalente: três bordas são observadas em ordem; os valores amostrados de D são 1, depois 1 e depois 0.

**Enunciado.** Quais são os valores de `Q` logo após as bordas 1, 2 e 3, respectivamente?

- **A.** `1, 1, 0`.
- **B.** `0, 0, 1`.
- **C.** `1, 0, 1`.
- **D.** `0, 1, 1`.
- **E.** `1, 1, 1`, pois o primeiro valor 1 nunca pode ser substituído.

**Gabarito: A.** Em cada borda, o flip-flop copia D para Q. Portanto, Q assume sucessivamente 1, 1 e 0. O último zero é armazenado normalmente na terceira borda.

| Alternativa | Feedback |
|---|---|
| A | Correta: Q acompanha os três valores amostrados nas bordas. |
| B | Inverte cada valor de D, comportamento não definido no modelo. |
| C | Alterna Q mesmo quando D continua em 1 na segunda borda. |
| D | Mantém indevidamente o estado inicial após a primeira amostragem. |
| E | O flip-flop pode armazenar 0 em uma borda posterior. |

**Revisão independente:** a aplicação direta da regra fornecida produz unicamente `1,1,0`. O item amplia sistemas digitais com memória sequencial e não repete as portas combinacionais de CC-02 nem a máscara de bits de CC-16.

## 6. E26-Q-CC-28 — Quando o acesso deve ser negado

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS]`; área “Lógica e matemática discreta”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: aplicar a negação de uma expressão proposicional a uma regra de acesso. Fontes: F06 principal; F07/F08 normativas complementares; T55/T64 técnicas.

### Regra apresentada

Um laboratório libera a porta quando a pessoa é estudante e, além disso, está matriculada na atividade ou atua como monitora.

```text
LIBERAR = ESTUDANTE E (MATRICULADA OU MONITORA)
```

Os três termos são proposições booleanas. A equipe quer escrever a condição equivalente para `NEGAR`, isto é, exatamente os casos em que `LIBERAR` é falsa.

**Enunciado.** Qual expressão representa corretamente `NEGAR`?

- **A.** `ESTUDANTE E MATRICULADA E MONITORA`.
- **B.** `NÃO ESTUDANTE E (NÃO MATRICULADA OU NÃO MONITORA)`.
- **C.** `ESTUDANTE OU (MATRICULADA E MONITORA)`.
- **D.** `NÃO ESTUDANTE E NÃO MATRICULADA E NÃO MONITORA`.
- **E.** `NÃO ESTUDANTE OU (NÃO MATRICULADA E NÃO MONITORA)`.

**Gabarito: E.** Negar `A E (B OU C)` produz `NÃO A OU NÃO(B OU C)`. Pela lei de De Morgan, `NÃO(B OU C)` equivale a `NÃO B E NÃO C`. Assim, a negação completa é a alternativa E.

| Alternativa | Feedback |
|---|---|
| A | Repete condições positivas e não representa a negação da regra. |
| B | Exige simultaneamente não ser estudante; porém qualquer não estudante já deve ser negado. |
| C | Troca conectivos sem negar as proposições e libera casos não previstos. |
| D | Cobre apenas um subconjunto dos casos negados. |
| E | Correta: aplica a negação do E externo e do OU interno. |

**Revisão independente:** tabela-verdade mental e aplicação algébrica coincidem com E. Um estudante não matriculado e não monitor é negado; uma pessoa não estudante também é negada independentemente dos outros termos. O item usa uma regra curta e não exige cálculo.

## 7. E26-Q-CC-29 — O reconhecedor do identificador simplificado

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC]`; área “Teoria da computação”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: relacionar uma expressão regular simples ao comportamento de um autômato finito. Fontes: F06 principal; T55/T59 técnicas.

### Linguagem apresentada

Um analisador didático aceita identificadores descritos pela expressão regular:

```text
a(b|c)*
```

Neste exercício, isso significa: primeiro aparece exatamente um `a`; depois podem aparecer zero ou mais símbolos, cada um deles `b` ou `c`. Qualquer símbolo fora desse padrão leva a um estado morto não aceitador.

**Enunciado.** Qual descrição de autômato reconhece exatamente essa linguagem?

- **A.** O estado inicial já é aceitador e possui laços com `a`, `b` e `c`, aceitando inclusive a cadeia vazia.
- **B.** Do estado inicial, `a` leva a um estado aceitador; nesse estado, `b` e `c` retornam a ele, e as demais transições vão ao estado morto.
- **C.** Do estado inicial, `b` ou `c` levam ao único estado aceitador; `a` é rejeitado em qualquer posição.
- **D.** O autômato aceita somente `abc`, pois o operador `*` exige exatamente uma ocorrência de cada símbolo.
- **E.** O autômato exige terminar com `a`, independentemente dos símbolos anteriores.

**Gabarito: B.** A transição inicial com `a` garante o primeiro símbolo obrigatório. O estado alcançado é aceitador porque `a` sozinho pertence à linguagem; seus laços com `b` e `c` permitem qualquer continuação formada somente por esses símbolos.

| Alternativa | Feedback |
|---|---|
| A | A expressão exige um `a` inicial e não aceita a cadeia vazia. |
| B | Correta: representa o prefixo obrigatório e a repetição opcional de b ou c. |
| C | Inverte o papel do símbolo inicial obrigatório. |
| D | O operador `*` permite zero ou mais ocorrências, não uma sequência fixa. |
| E | A expressão exige `a` no começo, não no final. |

**Revisão independente:** B aceita `a`, `ab`, `acbc` e rejeita cadeia vazia, `ba` e `aba`, exatamente como a expressão. Diferentemente de CC-23, o aluno relaciona uma expressão regular a uma estrutura de autômato, em vez de rastrear uma tabela de transições pronta.

## 8. E26-Q-CC-30 — Dois eventos, o mesmo serviço

**Ficha editorial:** versão 1; `classification: CC`; `courses: [CC, SI, TADS]`; área “Paradigmas de linguagens de programação”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: reconhecer a organização de uma aplicação orientada a eventos com tratadores independentes e serviço compartilhado. Fontes: F06 principal; F07/F08 normativas complementares; T55/T65 técnicas.

### Fluxo apresentado

Um editor já salva o documento quando recebe o evento `clique_salvar`. A equipe acrescentará o evento `temporizador_60s` para salvamento automático. Os dois eventos devem solicitar a mesma operação, sem duplicar a regra de persistência.

```text
clique_salvar ─────┐
                   ├──> salvar_documento()
temporizador_60s ──┘
```

Descrição equivalente: dois eventos independentes ativam tratadores; ambos delegam a um único serviço de salvamento. O temporizador não simula clique e o clique não controla o relógio.

**Enunciado.** Qual organização preserva melhor o modelo orientado a eventos e evita duplicar a regra de salvamento?

- **A.** Manter um laço infinito bloqueando a interface até completar 60 segundos e ignorar cliques durante a espera.
- **B.** Copiar toda a implementação de persistência para cada tratador e permitir que as cópias evoluam separadamente.
- **C.** Registrar um tratador para cada evento e fazer ambos chamarem o mesmo serviço `salvar_documento()`.
- **D.** Remover os eventos e salvar somente quando o programa for encerrado à força.
- **E.** Fazer o temporizador alterar diretamente o código-fonte do tratador de clique em tempo de execução.

**Gabarito: C.** No modelo apresentado, cada evento possui seu ponto de entrada, enquanto a operação compartilhada fica centralizada. Isso mantém a interface responsiva e evita duas implementações divergentes da regra de persistência.

| Alternativa | Feedback |
|---|---|
| A | Bloquear o fluxo impede o processamento normal dos demais eventos. |
| B | Duplicar a regra cria risco de comportamentos diferentes entre clique e temporizador. |
| C | Correta: separa as fontes dos eventos e reutiliza a mesma operação. |
| D | Eliminar os eventos não atende ao salvamento manual nem ao automático. |
| E | Eventos acionam tratadores; não precisam reescrever código-fonte. |

**Revisão independente:** C é a única alternativa que atende simultaneamente aos dois gatilhos, à reutilização e à responsividade declarada. O item introduz programação orientada a eventos sem exigir sintaxe específica de framework.

## 9. Segunda passagem de revisão assistida por IA

| ID | Verificação de unicidade | Engajamento e acessibilidade | Limitação | Estado |
|---|---|---|---|---|
| CC-26 | Somente C preserva entrada, informa falha e oferece recuperação sem afirmar sucesso. | Duas telas comparáveis por tabela e descrição textual; ações têm rótulos. | Não constitui auditoria completa de acessibilidade do portal. | `under-ai-review` |
| CC-27 | A regra de captura produz exclusivamente `1,1,0`. | Linha do tempo reduzida a três bordas e tabela legível. | Flip-flop é idealizado; atrasos físicos não fazem parte do caso. | `under-ai-review` |
| CC-28 | De Morgan produz unicamente `¬A ∨ (¬B ∧ ¬C)`, correspondente a E. | Regra em texto e notação booleana; não depende de diagrama. | Não avalia simplificações com muitas variáveis. | `under-ai-review` |
| CC-29 | Somente B exige `a`, aceita-o isoladamente e mantém laços apenas em b/c. | Expressão, descrição em linguagem natural e exemplos no parecer. | Alfabeto e estado morto são delimitados pelo exercício. | `under-ai-review` |
| CC-30 | Somente C preserva eventos independentes com serviço único e interface não bloqueada. | Fluxo possui descrição equivalente e nomes textuais. | Não compara frameworks ou concorrência real de gravações. | `under-ai-review` |

## 10. Auditoria editorial e originalidade interna

- Os IDs `E26-Q-CC-26` a `E26-Q-CC-30` estavam reservados apenas na matriz e não correspondiam a questões redigidas.
- Cada item possui cinco alternativas, um gabarito fundamentado, explicação e feedback A–E.
- O lote contém três questões introdutórias, duas intermediárias e nenhuma avançada.
- CC-26 trata recuperação após falha, distinta das inspeções anteriores de IHC; CC-27 introduz memória sequencial; CC-28 aplica equivalência a uma regra; CC-29 relaciona expressão e autômato; CC-30 trata despacho de eventos e reutilização de serviço.
- CC-27 e CC-29 permanecem exclusivos de CC. A elegibilidade de SI/TADS em CC-26, CC-28 e CC-30 decorre de objetos explicitamente compartilhados no plano da coleção.
- Nenhuma resposta depende exclusivamente de cor, som, movimento ou posição. Todos os recursos visuais possuem descrição equivalente.
- Os enunciados foram projetados para cartões curtos no celular; tabelas possuem no máximo três colunas e os blocos de código têm linhas breves.
- Nenhum texto apresentado ao jogador utiliza o nome da avaliação externa. A origem normativa permanece apenas na documentação interna.
- Permanecem pendentes: cotejo externo amplo, revisão técnica humana, calibração com estudantes, confirmação nos PPCs e homologação humana de acessibilidade.

## 11. Efeito na capacidade de CC

| Área da Portaria 157/2026 | Antes | Item acrescentado | Depois |
|---|---:|---|---:|
| III — Interação humano-computador | 2 | CC-26 | 3 |
| V — Sistemas digitais | 2 | CC-27 | 3 |
| VIII — Lógica e matemática discreta | 2 | CC-28 | 3 |
| XVIII — Teoria da computação | 2 | CC-29 | 3 |
| X — Paradigmas de linguagens de programação | 3 | CC-30 | 4 |

Com este lote, as vinte áreas de CC atingem ao menos três candidatas na matriz editorial. O banco conservador passa de 90 para 95 questões candidatas elegíveis para CC, sujeito à formalização posterior de `courses`, fontes e rastreabilidade nos formatos executáveis. A autoria de novas questões de CC deve parar até a composição e auditoria das três partidas-base.

## 12. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Elegibilidade por curso | Potencial de engajamento | Clareza no celular | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-CC-26 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-27 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-28 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-29 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-CC-30 | pendente | pendente | pendente | pendente | pendente | — |

Próxima etapa recomendada: não criar um quarto lote de CC. Montar três roteiros-base com uma questão de cada uma das vinte áreas, verificar dificuldade, variedade de recursos e ausência de repetição e, em seguida, recalcular a capacidade de TADS usando apenas elegibilidades comprovadas.
