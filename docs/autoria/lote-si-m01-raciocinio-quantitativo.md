# N9 — Jornada Digital: lote SI-M01 — Raciocínio lógico e quantitativo

Autoria documental assistida por IA — 17/11/2026. Este lote cria quatro candidatas inéditas para completar os slots novos de `SI-M01 — Lógica, matemática, probabilidade, estatística e pesquisa operacional`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-A-M01-N01 | E26-Q-SI-17 | A | intermediate | D | Matriz de classificação |
| SI-B-M01-N01 | E26-Q-SI-18 | B | introductory | B | Regra lógica e casos |
| SI-C-M01-N01 | E26-Q-SI-19 | C | introductory | E | Cartões de conjuntos |
| SI-C-M01-N02 | E26-Q-SI-20 | C | intermediate | A | Painel estratificado |

Com `E26-Q-SI-09` (advanced, pesquisa operacional) e o candidato compartilhado `E26-Q-CC-08` (intermediate, probabilidade), a macroárea alcança o perfil planejado de **2 introductory, 3 intermediate e 1 advanced**. O compartilhamento de CC-08 permanece apenas planejado e ainda precisa de rastreabilidade específica de SI antes de qualquer integração.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta competências de SI e os objetos de lógica, matemática, probabilidade, estatística e pesquisa operacional. Não fornece cenários, números, alternativas ou respostas. |
| technical | NIST/SEMATECH e-Handbook of Statistical Methods | Apoia a leitura de classificação, proporções, estratificação e desenho de comparação em SI-17 e SI-20. Não é norma curricular brasileira nem valida os dados fictícios. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- NIST/SEMATECH: `https://www.itl.nist.gov/div898/handbook/`.
- O plano local confirma o inciso V para pesquisa operacional, mas não registra com segurança os incisos individuais de lógica, matemática, probabilidade e estatística. Este lote não inventa essa numeração; a localização exata deve ser reconferida antes da conversão executável.

## 2. E26-Q-SI-17 — O alerta mais alto não é sempre urgente

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-17 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M01-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Lógica, matemática, probabilidade, estatística e pesquisa operacional |
| Rastreabilidade | SI-M01 / SI-I e SI-II; F07, art. 5º, I–II; objeto de probabilidade e estatística do art. 6º, com inciso individual pendente de reconferência |
| difficulty | intermediate |
| Objetivo pedagógico | Interpretar uma matriz de classificação e escolher uso operacional compatível com os erros observados. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; cenário, amostra e respostas são autorais e fictícios. |
| Complemento documental | T9 — NIST/SEMATECH e-Handbook of Statistical Methods; classificação e interpretação de proporções. |
| Complemento documental URL | https://www.itl.nist.gov/div898/handbook/ |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Interpretar frequências condicionais para avaliar uma solução de triagem sem confundir alerta com confirmação.

### Objeto visual proposto — matriz do piloto

Uma central fictícia testou uma regra em **1.000 chamados já classificados por especialistas**.

| Resultado da regra | Era urgente | Não era urgente | Total |
|---|---:|---:|---:|
| Marcou como urgente | 40 | 95 | 135 |
| Não marcou como urgente | 10 | 855 | 865 |
| Total | 50 | 950 | 1.000 |

**Descrição equivalente:** entre 135 alertas, 40 eram urgentes; entre os 50 chamados realmente urgentes, a regra encontrou 40 e deixou 10 sem alerta.

### Texto ao jogador

**Contexto.** A equipe quer usar a regra para ajudar a ordenar a fila, mas ainda não deseja deixar uma decisão crítica inteiramente automática.

**Enunciado.** Qual conclusão e uso inicial são sustentados pela matriz?

- **A.** Todo alerta confirma urgência, pois a regra encontrou quarenta casos urgentes.
- **B.** A regra é inútil, pois qualquer ocorrência de falso positivo elimina o valor de uma triagem.
- **C.** A regra pode fechar automaticamente todos os 865 chamados sem alerta, porque nenhum deles é urgente.
- **D.** Cerca de 30% dos alertas eram urgentes e 10 urgentes ficaram sem alerta; a regra pode priorizar revisão humana, com acompanhamento dos dois tipos de erro.
- **E.** A taxa de acerto entre os alertas é 80%, pois quarenta dos cinquenta urgentes foram encontrados.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** Entre os alertas, a proporção de urgentes é `40/135`, aproximadamente 29,6%. A matriz também registra dez falsos negativos. Esses dados sustentam apoio à priorização com supervisão, não confirmação automática nem encerramento de itens.

| Alternativa | Feedback |
|---|---|
| A | Noventa e cinco alertas eram falsos positivos; alerta não equivale a confirmação. |
| B | Erros precisam ser avaliados pelo uso e pelo risco; sua existência não torna toda triagem inútil. |
| C | Há dez urgentes entre os chamados sem alerta, portanto o fechamento automático contradiz a matriz. |
| D | Correta: calcula a proporção pertinente, reconhece os falsos negativos e limita a automação. |
| E | `40/50` mede quantos urgentes receberam alerta, não quantos alertas eram realmente urgentes. |

**Atratividade e acessibilidade:** a matriz usa títulos explícitos e totais; eventual destaque visual deve repetir “alerta correto”, “alerta incorreto” e “urgente sem alerta”, sem depender de cor.

## 3. E26-Q-SI-18 — Quando o aviso deve sair?

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-18 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M01-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Lógica, matemática, probabilidade, estatística e pesquisa operacional |
| Rastreabilidade | SI-M01 / SI-I; F07, art. 5º, I; objeto de lógica matemática do art. 6º, com inciso individual pendente de reconferência |
| difficulty | introductory |
| Objetivo pedagógico | Traduzir uma regra de negócio em expressão lógica e conferir seu comportamento por casos. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; regra e casos são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Representar uma condição composta e usar casos de fronteira para verificar uma regra de negócio.

### Objeto proposto — cartão da regra e casos

```text
Enviar SMS quando:
o chamado for urgente E
(o aplicativo estiver indisponível OU a pessoa tiver optado por SMS).
```

| Caso | Urgente (U) | Aplicativo indisponível (I) | Optou por SMS (S) | Deve enviar? |
|---|---|---|---|---|
| R1 | não | sim | sim | não |
| R2 | sim | não | sim | sim |
| R3 | sim | não | não | não |

### Texto ao jogador

**Contexto.** Uma analista precisa implementar a regra sem enviar mensagens em excesso. `U`, `I` e `S` representam as três condições do cartão.

**Enunciado.** Qual expressão implementa a regra e produz os três resultados apresentados?

- **A.** `U OU I OU S`
- **B.** `U E (I OU S)`
- **C.** `(U E I) OU S`
- **D.** `U E I E S`
- **E.** `(U OU I) E S`

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** A urgência é obrigatória; depois dela, basta que uma das duas condições de canal seja verdadeira. Assim, R1 não envia, R2 envia e R3 não envia.

| Alternativa | Feedback |
|---|---|
| A | Enviaria R1 apenas porque há indisponibilidade ou opção, mesmo sem urgência. |
| B | Correta: preserva a urgência obrigatória e aceita uma das condições de canal. |
| C | Enviaria qualquer caso com opção por SMS, inclusive um chamado não urgente. |
| D | Exigiria simultaneamente indisponibilidade e opção, rejeitando R2. |
| E | Exige opção por SMS mesmo quando um chamado urgente enfrenta indisponibilidade do aplicativo. |

**Atratividade e acessibilidade:** o cartão pode usar interruptores visuais acompanhados de “sim/não”; a expressão e os casos permanecem disponíveis como texto linear.

## 4. E26-Q-SI-19 — Quem realmente pode entrar no laboratório?

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-19 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M01-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Lógica, matemática, probabilidade, estatística e pesquisa operacional |
| Rastreabilidade | SI-M01 / SI-I e SI-II; F07, art. 5º, I–II; objeto de matemática discreta do art. 6º, com inciso individual pendente de reconferência |
| difficulty | introductory |
| Objetivo pedagógico | Aplicar interseção e diferença de conjuntos a uma regra de elegibilidade. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; nomes, listas e regra são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Aplicar operações de conjuntos para obter uma lista de acesso auditável a partir de critérios explícitos.

### Objeto visual proposto — listas do controle de acesso

```text
Matrícula ativa (A):  {Bia, Caio, Davi, Eli}
Termo aceito (T):     {Ana, Bia, Davi, Eli}
Bloqueio vigente (B): {Davi, Fê}

Regra: elegíveis = (A ∩ T) − B
```

**Descrição equivalente:** primeiro permanecem apenas nomes presentes simultaneamente em A e T; depois são retirados os nomes presentes em B.

### Texto ao jogador

**Contexto.** A Base N9 precisa gerar a lista de entrada sem incluir pessoas que atendam apenas parte dos critérios.

**Enunciado.** Qual lista resulta da regra fornecida?

- **A.** `{Ana, Bia, Caio, Davi, Eli}`
- **B.** `{Bia, Caio, Eli}`
- **C.** `{Ana, Bia, Eli}`
- **D.** `{Bia, Davi, Eli}`
- **E.** `{Bia, Eli}`

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** A interseção `A ∩ T` produz `{Bia, Davi, Eli}`. A diferença pelo conjunto de bloqueios retira Davi e preserva `{Bia, Eli}`.

| Alternativa | Feedback |
|---|---|
| A | Reúne nomes por união e mantém pessoas que não atendem aos dois critérios ou estão bloqueadas. |
| B | Caio não aparece no conjunto de termos aceitos. |
| C | Ana não aparece no conjunto de matrículas ativas. |
| D | É a interseção antes de remover o bloqueio de Davi. |
| E | Correta: aplica primeiro a interseção e depois a diferença. |

**Atratividade e acessibilidade:** nomes podem aparecer como fichas movidas entre três painéis, mas as listas e a fórmula ficam disponíveis em texto; posição ou cor não determinam pertencimento.

## 5. E26-Q-SI-20 — O total esconde o dispositivo

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-20 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M01-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Lógica, matemática, probabilidade, estatística e pesquisa operacional |
| Rastreabilidade | SI-M01 / SI-II; F07, art. 5º, II; objeto de probabilidade e estatística do art. 6º, com inciso individual pendente de reconferência |
| difficulty | intermediate |
| Objetivo pedagógico | Reconhecer uma comparação agregada enganosa e propor análise estratificada com distribuição equilibrada. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; experimento, contagens e respostas são autorais e fictícios. |
| Complemento documental | T9 — NIST/SEMATECH e-Handbook of Statistical Methods; comparação, estratificação e desenho de experimento. |
| Complemento documental URL | https://www.itl.nist.gov/div898/handbook/ |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Avaliar uma comparação agregada, identificar variável de composição e propor coleta capaz de separar seus efeitos.

### Objeto visual proposto — resultado de duas versões

| Versão | Dispositivo | Concluíram | Participantes | Taxa |
|---|---|---:|---:|---:|
| A | desktop | 8 | 10 | 80% |
| A | celular | 45 | 90 | 50% |
| **A total** | — | **53** | **100** | **53%** |
| B | desktop | 68 | 90 | 75,6% |
| B | celular | 4 | 10 | 40% |
| **B total** | — | **72** | **100** | **72%** |

Premissa: as pessoas escolheram livremente qual versão abrir; B recebeu proporcionalmente muito mais acessos por desktop.

### Texto ao jogador

**Contexto.** A equipe comparou duas versões de um cadastro. O total favorece B, porém a distribuição de dispositivos é muito diferente.

**Enunciado.** Qual decisão evita atribuir à versão um efeito que pode decorrer da composição dos grupos?

- **A.** Comparar as versões dentro de cada dispositivo e repetir o teste distribuindo as versões de forma equilibrada ou aleatória em desktop e celular.
- **B.** Publicar B imediatamente, pois 72 conclusões sempre demonstram uma interface melhor que 53.
- **C.** Somar apenas os acessos de desktop, pois esse grupo é maior na versão vencedora.
- **D.** Descartar o dispositivo e calcular novamente o mesmo total, agora com mais casas decimais.
- **E.** Concluir que A é melhor apenas em celular, pois quarenta e cinco conclusões superam quatro.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** Dentro de desktop, A registra 80% contra 75,6%; em celular, 50% contra 40%. O total de B é maior porque B recebeu mais participantes do grupo com taxas altas. Estratificar e equilibrar a distribuição permite avaliar a versão sem confundir o efeito com o dispositivo.

| Alternativa | Feedback |
|---|---|
| A | Correta: confronta a variável de composição e propõe um teste capaz de separar os efeitos. |
| B | O total agregado mistura versões e distribuições de dispositivo muito diferentes. |
| C | Escolher apenas um grupo depois de observar o resultado não resolve a comparação completa. |
| D | Precisão decimal não corrige grupos formados de modo desigual. |
| E | Compara contagens de grupos de tamanhos distintos; as taxas são 50% e 40%. |

**Atratividade e acessibilidade:** o painel pode oferecer abas “total” e “por dispositivo”, mas a tabela completa deve estar no DOM e navegável por teclado; diferenças não podem depender apenas de cor.

## 6. Segunda passagem independente de revisão assistida por IA

A segunda passagem resolveu cada item a partir dos dados, sem usar o gabarito declarado como premissa.

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-17 | `40/135 ≈ 29,6%`; existem 95 falsos positivos e 10 falsos negativos. D é a única alternativa compatível com os dois erros. | Recalculados totais de linhas e colunas. O caso não define custo relativo dos erros, portanto não recomenda limiar ótimo. | manter `under-ai-review` |
| SI-18 | A tradução literal é `U E (I OU S)` e reproduz R1=0, R2=1 e R3=0. | As outras quatro expressões divergem em ao menos um caso fornecido. Não exige linguagem de programação. | manter `under-ai-review` |
| SI-19 | `A ∩ T = {Bia, Davi, Eli}`; subtrair B resulta em `{Bia, Eli}`. | Nomes são distintos e todos os conjuntos são fechados; não há ambiguidade de acentuação ou duplicata. | manter `under-ai-review` |
| SI-20 | A vence em cada estrato, embora B vença no total; a distribuição 10/90 contra 90/10 explica a inversão. | Recalculadas as seis taxas. A resposta não promete causalidade: recomenda novo desenho equilibrado ou aleatório. | manter `under-ai-review` |

## 7. Auditoria rápida do lote

- Quatro IDs novos e distintos: `E26-Q-SI-17` a `E26-Q-SI-20`; nenhum aparece nos lotes anteriores.
- Quatro questões com cinco alternativas e um único gabarito defendido: D/B/E/A.
- Dificuldades: duas `introductory` e duas `intermediate`, exatamente a lacuna de SI-M01.
- Cálculos conferidos: matriz 1.000, expressão booleana, operações de conjuntos e taxas estratificadas.
- Objetos variados e compatíveis com apresentação futura: duas tabelas, um cartão lógico e um painel de conjuntos, sempre com equivalente textual.
- Os textos ao jogador não exibem a referência pedagógica interna reservada nem fazem afirmação institucional.
- Nenhum item repete o núcleo de SI-09 (alocação ótima) ou CC-08 (interseção de falhas independentes). SI-17 trata classificação; SI-18, tradução de regra; SI-19, conjuntos; SI-20, composição estatística.
- Permanecem pendentes: reconferência dos incisos individuais de lógica/matemática/probabilidade/estatística em F07, cotejo externo de originalidade, teste com estudantes, calibração e homologação humana de acessibilidade.
- Nenhum item foi promovido para `ready-for-pilot` ou convertido em JSON.

## 8. Preparação para etapa futura

Após a conclusão de todos os lotes de SI, estes itens poderão receber IDs executáveis definitivos já reservados, conversão de `table`, `code` e `diagram`, validação contra schemas e inspeção em navegador. Até lá, este documento é a única fonte das candidatas e o catálogo do jogo deve permanecer inalterado.
