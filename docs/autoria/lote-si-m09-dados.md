# N9 — Jornada Digital: lote SI-M09 — Banco, visualização e ciência de dados

Autoria documental assistida por IA — 17/11/2026. Este lote cria duas candidatas inéditas para os slots restantes de `SI-M09 — Banco de dados, visualização e ciência de dados`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-B-M09-N01 | E26-Q-SI-39 | B | introductory | C | Relação, dependências e esquema |
| SI-C-M09-N01 | E26-Q-SI-40 | C | advanced | E | Matrizes de confusão e custo |

Com `E26-Q-SI-02` (`introductory`), `E26-Q-SI-07` (`intermediate`) e os compartilhamentos planejados `E26-Q-TADS-05` e `E26-Q-TGTI-06` (`intermediate`), a macroárea alcança **2 introductory, 3 intermediate e 1 advanced**.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta SI-II, banco de dados no inciso XVIII e visualização/ciência de dados no XIX. Não fornece os cenários ou respostas. |
| technical | BCcampus, Database Design – 2nd Edition | Apoia associações, chaves e organização relacional em SI-39. Nenhum exemplo ou exercício foi copiado. |
| technical | scikit-learn documentation — confusion matrix e métricas | Apoia a terminologia de matriz de confusão e o cuidado com classes desbalanceadas em SI-40. A questão não depende da biblioteca. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- BCcampus: `https://opentextbc.ca/dbdesign01/chapter/chapter-8-entity-relationship-model/`.
- Matriz de confusão: `https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html`.
- Dados, tabelas, modelos e custos são fictícios. Os cálculos necessários são fornecidos e podem ser resolvidos sem ferramenta externa.

## 2. E26-Q-SI-39 — O nome mudou em três matrículas

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-39 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M09-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Banco de dados, visualização e ciência de dados |
| Rastreabilidade | SI-M09 / SI-II; F07, art. 5º, II; art. 6º, XVIII |
| difficulty | introductory |
| Objetivo pedagógico | Aplicar dependências funcionais para reduzir redundância e anomalias sem perder a relação de matrícula. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; relação, nomes e respostas são autorais e fictícios. |
| Complemento documental | T22 — BCcampus, Database Design – 2nd Edition; associações e chaves. |
| Complemento documental URL | https://opentextbc.ca/dbdesign01/chapter/chapter-8-entity-relationship-model/ |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Reconhecer redundância causada por dependências funcionais e decompor a relação preservando entidades e associação.

### Objeto visual proposto — tabela atual

`MATRICULA(id_matricula, id_estudante, nome_estudante, id_trilha, nome_trilha)`

| id_matricula | id_estudante | nome_estudante | id_trilha | nome_trilha |
|---:|---|---|---|---|
| 501 | E7 | Lina | T1 | Dados |
| 502 | E7 | Lina | T2 | Processos |
| 503 | E9 | Caio | T1 | Dados |

Dependências fornecidas:

```text
id_matricula -> id_estudante, id_trilha
id_estudante -> nome_estudante
id_trilha -> nome_trilha
```

Uma alteração de nome de estudante ou trilha atualmente precisa atingir várias linhas.

### Texto ao jogador

**Enunciado.** Qual decomposição reduz essas anomalias e preserva as matrículas?

- **A.** Manter somente `MATRICULA`, acrescentando mais uma coluna com a cópia dos nomes.
- **B.** Criar `ESTUDANTE(id_estudante, nome)` e manter nome da trilha repetido em cada matrícula, sem relação própria para trilha.
- **C.** Criar `ESTUDANTE(id_estudante, nome)`, `TRILHA(id_trilha, nome)` e `MATRICULA(id_matricula, id_estudante, id_trilha)` com referências às duas entidades.
- **D.** Criar uma tabela por estudante contendo uma coluna diferente para cada trilha cursada.
- **E.** Separar todos os nomes em um arquivo sem chaves e manter apenas os identificadores na base.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** Nome de estudante depende de `id_estudante`, e nome da trilha depende de `id_trilha`. Guardá-los uma vez em suas entidades e manter as chaves na matrícula reduz redundância e preserva a associação muitos-para-muitos.

| Alternativa | Feedback |
|---|---|
| A | Uma nova cópia aumenta a redundância e não resolve atualização inconsistente. |
| B | O nome da trilha ainda se repetiria em todas as matrículas da mesma trilha. |
| C | Correta: representa as duas entidades e a associação por chaves. |
| D | Colunas por trilha criam estrutura variável e limitam novas associações. |
| E | Sem chaves, não há vínculo confiável entre nomes e identificadores. |

**Atratividade e acessibilidade:** a futura tela pode permitir arrastar colunas para três cartões de tabela; haverá alternativa por botões e descrição textual das dependências.

## 3. E26-Q-SI-40 — Noventa e nove por cento e nenhuma fraude encontrada

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-40 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M09-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Banco de dados, visualização e ciência de dados |
| Rastreabilidade | SI-M09 / SI-II; F07, art. 5º, II; art. 6º, XIX |
| difficulty | advanced |
| Objetivo pedagógico | Comparar classificadores em base desbalanceada usando matriz de confusão, capacidade e custo declarado dos erros. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; amostra, modelos, custos e respostas são autorais e fictícios. |
| Complemento documental | T23 — scikit-learn documentation; matriz de confusão e avaliação sob desbalanceamento. |
| Complemento documental URL | https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Interpretar erros de classificação e selecionar modelo conforme objetivo, custo e capacidade operacional explícitos.

### Objeto visual proposto — avaliação fora do treino

A amostra de teste possui 10.000 transações: 100 fraudulentas e 9.900 legítimas. Ela não foi usada no treinamento.

| Modelo | VP | FN | FP | VN | Acurácia |
|---|---:|---:|---:|---:|---:|
| M0 — nunca alerta | 0 | 100 | 0 | 9.900 | 99,0% |
| M1 — alerta seletivo | 70 | 30 | 180 | 9.720 | 97,9% |

Legenda: VP = fraude alertada; FN = fraude não alertada; FP = legítima alertada; VN = legítima não alertada.

Critérios fictícios para o piloto:

- cada FN custa 10 unidades e cada FP custa 1 unidade;
- a equipe consegue revisar no máximo 250 alertas na janela;
- o modelo apenas prioriza revisão; não bloqueia transações automaticamente.

### Texto ao jogador

**Enunciado.** Qual decisão é sustentada pelos dados e critérios?

- **A.** Escolher M0 porque a maior acurácia sempre identifica melhor a classe rara.
- **B.** Rejeitar M1 porque qualquer falso positivo torna o classificador inviável.
- **C.** Escolher M0 porque produzir zero alertas utiliza exatamente toda a capacidade da equipe.
- **D.** Escolher M1 apenas porque ele usa um algoritmo mais complexo, sem calcular erros ou capacidade.
- **E.** Pilotar M1: gera 250 alertas, reduz o custo calculado de 1.000 para 480 unidades e encontra 70 das 100 fraudes; acompanhar as duas classes durante o piloto.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** M0 custa `100 × 10 = 1.000`. M1 custa `30 × 10 + 180 × 1 = 480` e gera `70 + 180 = 250` alertas, dentro da capacidade. A menor acurácia global não impede melhor desempenho para o objetivo declarado.

| Alternativa | Feedback |
|---|---|
| A | M0 atinge 99% prevendo apenas a classe majoritária e não encontra nenhuma fraude. |
| B | O caso define custo e capacidade para avaliar falsos positivos, não sua proibição absoluta. |
| C | Zero alertas não utiliza a capacidade e mantém cem fraudes sem sinalização. |
| D | Complexidade do algoritmo não é critério fornecido; os resultados devem ser comparados. |
| E | Correta: integra matriz, custo, capacidade e limite do uso como priorização. |

**Atratividade e acessibilidade:** duas matrizes 2×2 podem ser apresentadas como painéis com rótulos e números; uma tabela equivalente e a memória de cálculo permanecem disponíveis.

## 4. Segunda passagem independente de revisão assistida por IA

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-39 | As dependências separam estudante e trilha da matrícula; apenas C preserva ambos por chaves sem repetição dos nomes. | A questão não exige identificar formalmente todas as formas normais; avalia dependência, anomalia e decomposição básica. | manter `under-ai-review` |
| SI-40 | M0 custa 1.000; M1 custa 480 e produz 250 alertas. Somente E respeita custo, capacidade e uso não automático. | Totais conferidos: M0 e M1 somam 10.000; a decisão vale apenas para os critérios fictícios e não aprova implantação real. | manter `under-ai-review` |

## 5. Auditoria rápida do lote

- Dois IDs novos e distintos: `E26-Q-SI-39` e `E26-Q-SI-40`; nenhum aparece em outro lote.
- Duas questões com cinco alternativas, feedback A–E e um único gabarito: C/E.
- Dificuldades `introductory` e `advanced`, exatamente a lacuna de SI-M09.
- Conceitos clássicos priorizados: dependência funcional, redundância, anomalia, decomposição, chave, matriz de confusão, classe desbalanceada, falso positivo/negativo e custo de decisão.
- Recursos profissionais necessários: tabela relacional, esquema, matrizes e painel de capacidade/custo.
- Não há repetição de SI-02 (consulta SQL), SI-05 (associação histórica), SI-07 (escala de gráfico) ou TADS-05 (`CHECK`).
- Nenhum texto ao jogador exibe a referência pedagógica interna reservada ou apresenta o modelo como sistema real.
- Permanecem pendentes: teste com estudantes, cotejo externo, calibração e homologação humana de acessibilidade.
- Nenhum item foi convertido para JSON ou promovido para `ready-for-pilot`.

## 6. Preparação para etapa futura

Na integração final, tabelas relacionais poderão virar cartões de esquema conectados por chaves. Matrizes de confusão devem manter rótulos de linhas/colunas, não apenas cores, e apresentar a memória de cálculo em texto. Nenhum modelo será executado no navegador.
