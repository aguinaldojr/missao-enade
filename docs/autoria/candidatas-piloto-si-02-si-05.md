# N9 — Jornada Digital: candidatas-piloto SI-02 e SI-05

Autoria e revisão editorial assistidas por IA — 16/11/2026, horário de Brasília. O documento nasceu como comparação entre as versões 1 e duas candidatas. Em autorização posterior no mesmo dia, as candidatas foram integradas ao catálogo executável como versões 2 para piloto local; isso não autoriza publicação.

Procedimento editorial: governança de IA v1.0, com uma passagem de autoria e uma segunda passagem de resolução independente. Modelo usado: Codex da sessão; identificador técnico mais específico não disponibilizado ao artefato. Consolidação e decisão futura de integração permanecem sob responsabilidade da pessoa responsável pelo projeto.

## 1. Linha de base e preservação

| Verificação | Resultado |
|---|---|
| Git antes da autoria | Limpo em `90da64a6206c3c67e54d5b8ddc158cd8d5a2528c` |
| Catálogo examinado | `src/content/questions/enade-2026-provisional.json`: 60 questões e 60 IDs únicos |
| Hash SHA-256 inicial do catálogo | `107D49888E66DFCACAD995E8205F852FB54F85DCE07F1728A147496F99AD48C6` |
| SI-02 executável antes da integração | versão 1, gabarito E, `under-ai-review` |
| SI-05 executável antes da integração | versão 1, gabarito D, `under-ai-review` |
| SI-02 executável após autorização | versão 2, gabarito C, `ready-for-pilot` |
| SI-05 executável após autorização | versão 2, gabarito B, `ready-for-pilot` |
| Alteração autorizada nesta etapa | Somente este documento Markdown |

As candidatas usam os mesmos IDs apenas como referência de evolução. Se uma substituição for autorizada depois, deverão entrar como versão 2 em migração controlada. Até essa decisão, não são dois novos IDs nem objetos adicionais do banco.

### Comparação planejada

| Referência | Versão atual | Candidata v2 | Elementos preservados |
|---|---|---|---|
| E26-Q-SI-02 | Tabela de pedidos e filtro descrito em linguagem natural | Chamados de suporte, esquema relacional, dados sintéticos e SQL SQLite realmente executado | ID de referência, área Bancos de dados, SI-II, competência, objetivo, dificuldade introductory e rastreabilidade F07/XVIII |
| E26-Q-SI-05 | Associação temporal descrita verbalmente no circuito de exposições | Diagrama acessível de atuação em chamados e escolha das chaves/restrições do modelo | ID de referência, área Concepção e projetos de SI, SI-II, competência, objetivo, dificuldade intermediate, F07/XIII/XVIII e apoio SI-T01 |

## 2. Candidata E26-Q-SI-02 — A fila que o painel precisa mostrar

### 2.1 Ficha editorial candidata

| Campo | Valor |
|---|---|
| ID de referência | E26-Q-SI-02 |
| Versão candidata | 2 — somente documental |
| Contrato / classification | question / SI |
| collectionId | enade-2026 |
| courses | SI |
| area | Bancos de dados |
| competencies | Interpretar uma seleção de registros por condições conjuntas para produzir informação de uma base estruturada. |
| difficulty | introductory |
| Objetivo pedagógico | Identificar resultado de consulta simples para demanda definida. |
| Dialeto | SQLite 3; recursos usados: `WHERE`, `COUNT`, `SUM` e `GROUP BY` |
| Rastreabilidade | COMUM-TEC10 / SI-II; F07, art. 5º, II, b.3/b.5; art. 6º, XVIII |
| Status após a revisão por IA | `ready-for-pilot` — aptidão somente para teste controlado |

### 2.2 Fontes e limites

| Papel | Tipo | Identificação | Uso e limite |
|---|---|---|---|
| primary | official-reference | F07 — Portaria Inep 168/2026, 14/04/2026, arts. 5º–6º; reprodução Ufopa já registrada | Sustenta a competência SI-II e o objeto banco de dados. Não sustenta o cenário, os dados, a consulta ou o gabarito autorais. |
| evidência técnica da revisão | execução local | SQLite 3.54.1 por `node:sqlite`, banco em memória | Comprova o resultado desta consulta com estes dados. Não é nova fonte normativa nem prova de funcionamento em todo SGBD. |

Limitação de acesso preservada: o lote original registra erro 502 no endereço individual do DOU e leitura da reprodução integral hospedada pela Ufopa. Não houve nova certificação de vigência ou retificação nesta etapa.

### 2.3 Texto candidato apresentado ao jogador

**Contexto.** A equipe de Sistemas da Base N9 prepara um painel com o esforço previsto para seus chamados abertos. O banco usa SQLite 3 e possui esta tabela:

```sql
CREATE TABLE chamados (
  id TEXT PRIMARY KEY,
  equipe TEXT NOT NULL,
  estado TEXT NOT NULL,
  minutos_estimados INTEGER NOT NULL CHECK (minutos_estimados > 0)
);
```

Os dados sintéticos disponíveis são:

| id | equipe | estado | minutos_estimados |
|---|---|---|---:|
| C101 | Sistemas | aberto | 40 |
| C102 | Infraestrutura | aberto | 60 |
| C103 | Sistemas | fechado | 25 |
| C104 | Sistemas | aberto | 35 |
| C105 | Sistemas | aberto | 15 |

O painel executa exatamente esta consulta:

```sql
SELECT equipe,
       COUNT(*) AS chamados_abertos,
       SUM(minutos_estimados) AS minutos_previstos
FROM chamados
WHERE equipe = 'Sistemas' AND estado = 'aberto'
GROUP BY equipe;
```

**Enunciado.** Qual linha a consulta devolve?

- **A.** Sistemas | 4 chamados_abertos | 115 minutos_previstos
- **B.** Sistemas | 4 chamados_abertos | 150 minutos_previstos
- **C.** Sistemas | 3 chamados_abertos | 90 minutos_previstos
- **D.** Sistemas | 5 chamados_abertos | 175 minutos_previstos
- **E.** Sistemas | 2 chamados_abertos | 75 minutos_previstos

### 2.4 Gabarito, explicação e feedbacks

**Única alternativa correta: C.** O `WHERE` mantém C101, C104 e C105: são três chamados da equipe Sistemas no estado aberto. A soma é 40 + 35 + 15 = 90. C102 pertence a outra equipe e C103 está fechado; ambos são removidos antes de `COUNT` e `SUM`.

| Alternativa | Feedback específico |
|---|---|
| A | Esse resultado inclui os quatro chamados da equipe Sistemas, mas ignora que C103 está fechado. |
| B | Esse resultado reúne todos os chamados abertos, inclusive C102, que pertence à equipe Infraestrutura. |
| C | Correto: três linhas atendem às duas condições, e seus minutos somam 90. |
| D | Esse resultado conta e soma todas as cinco linhas, sem aplicar o filtro. |
| E | C101 e C104 somam 75, mas C105 também está aberto e pertence à equipe Sistemas. |

### 2.5 Diferenças e melhorias pretendidas

- Substitui a descrição de uma consulta por SQL funcional, mantendo o objetivo introdutório.
- Usa uma atividade reconhecível de SI: transformar chamados em informação para um painel operacional.
- Torna visíveis esquema, dados, filtro, agregações e unidade da resposta.
- Mantém o raciocínio acessível: não exige `JOIN`, subconsulta, tratamento de nulos ou comportamento específico não declarado.
- Cada distrator corresponde a um erro distinto: ignorar estado, ignorar equipe, ignorar todos os filtros ou omitir uma linha elegível.

### 2.6 Segunda passagem independente de revisão por IA

Método: ocultou-se a indicação do gabarito, aplicou-se a consulta às cinco linhas e comparou-se a saída com cada alternativa.

| Critério | Evidência e decisão |
|---|---|
| Correspondência normativa | F07/XVIII e SI-II preservados; não foram transportados incisos de outro curso. |
| Correção técnica | DDL e consulta aceitos pelo SQLite 3.54.1. Saída: `Sistemas`, `3`, `90`. |
| Gabarito único | Somente C coincide com as três colunas produzidas. |
| Distratores | A, B, D e E representam quatro falhas de filtragem/agregação diferentes. |
| Dificuldade | `introductory`: leitura de filtro conjuntivo e duas agregações diretas, com dados completos. |
| Clareza e concisão | Esquema, cinco linhas, dialeto e consulta delimitam todo o comportamento necessário. |
| Acessibilidade e celular | Código e tabela possuem equivalente linear nos nomes das colunas; não dependem de cor. A futura interface ainda precisa testar rolagem horizontal e leitor de tela. |
| Afirmações institucionais | O cenário é fictício e não atribui resultado, produto oficial ou eficácia à universidade. |

**Decisão da revisão:** `ready-for-pilot`. A questão está tecnicamente consistente para teste controlado. Isso não equivale a `ready-for-release`, homologação institucional ou comprovação de aprendizagem.

## 3. Candidata E26-Q-SI-05 — Quem voltou ao chamado

### 3.1 Ficha editorial candidata

| Campo | Valor |
|---|---|
| ID de referência | E26-Q-SI-05 |
| Versão candidata | 2 — somente documental |
| Contrato / classification | question / SI |
| collectionId | enade-2026 |
| courses | SI |
| area | Concepção e projetos de sistemas de informação |
| competencies | Avaliar um modelo relacional de associação com histórico, preservando cardinalidades e referências de existência. |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar modelo que preserve relações e restrições do processo. |
| Rastreabilidade | SI-04 / SI-II; F07, art. 5º, II, b.2/b.5; art. 6º, XIII e XVIII |
| Status após a revisão por IA | `ready-for-pilot` — aptidão somente para teste controlado |

### 3.2 Fontes e limites

| Papel | Tipo | Identificação | Uso e limite |
|---|---|---|---|
| primary | official-reference | F07 — Portaria Inep 168/2026, 14/04/2026, arts. 5º–6º; reprodução Ufopa já registrada | Sustenta SI-II, concepção/modelagem e banco de dados. Não sustenta o caso, o diagrama ou o gabarito autorais. |
| technical | official-reference | SI-T01 — Adrienne Watt, “Chapter 8 The Entity Relationship Data Model”, *Database Design – 2nd Edition*, BCcampus Open Education | Apoia associações, dependência de existência e opções de chave. Não se reutilizam figuras, exemplos ou exercícios da obra. |

Permanecem as limitações registradas no lote: consulta por reprodução de F07, ausência de cotejo externo independente e necessidade futura de confrontação com o PPC.

### 3.3 Texto candidato apresentado ao jogador

**Contexto.** A central de suporte da Base N9 registra analistas e chamados. Um chamado pode receber vários analistas, e um analista pode atuar em vários chamados. A mesma pessoa pode encerrar sua atuação e voltar ao mesmo chamado depois de uma escalada; cada retorno deve ser uma nova ocorrência, sem apagar o histórico.

Cada atuação registra papel, início e fim e deve referenciar um analista e um chamado já cadastrados. O diagrama de requisitos é:

```text
┌──────────┐  1      N  ┌──────────────┐  N      1  ┌─────────┐
│ ANALISTA │────────────<│ ATUAÇÃO      │>────────────│ CHAMADO │
│ id       │             │ papel        │             │ id      │
└──────────┘             │ início, fim  │             └─────────┘
                         └──────────────┘
```

**Descrição textual equivalente.** ANALISTA relaciona-se de um para muitos com ATUAÇÃO; CHAMADO também se relaciona de um para muitos com ATUAÇÃO. Cada ATUAÇÃO pertence obrigatoriamente a um analista e a um chamado. Pode haver mais de uma atuação para o mesmo par analista/chamado.

**Enunciado.** Qual definição relacional para ATUAÇÃO atende integralmente aos requisitos?

- **A.** Usar `(analista_id, chamado_id)` como chave primária e guardar papel, início e fim nessa única linha do par.
- **B.** Usar `id_atuacao` como chave primária, `analista_id` e `chamado_id` como chaves estrangeiras obrigatórias, além de papel, início e fim.
- **C.** Usar `id_atuacao` como chave primária, guardar o nome do analista em texto e manter chave estrangeira somente para o chamado.
- **D.** Guardar no chamado uma lista de analistas com papel e datas, substituindo a lista a cada nova escalada.
- **E.** Usar `id_atuacao` como chave primária e as duas chaves estrangeiras, mas impor `UNIQUE (analista_id, chamado_id)`.

### 3.4 Gabarito, explicação e feedbacks

**Única alternativa correta: B.** A identidade própria permite várias ocorrências do mesmo par. As duas chaves estrangeiras obrigatórias preservam a referência aos cadastros, e os atributos registram cada período. A e E limitam o par a uma ocorrência; C perde a referência verificada ao analista; D não representa nem preserva o histórico relacional solicitado.

| Alternativa | Feedback específico |
|---|---|
| A | A chave do par permite somente uma linha para aquele analista naquele chamado, bloqueando um retorno como nova ocorrência. |
| B | Correto: cada atuação tem identidade própria, duas referências obrigatórias e seus dados de período. |
| C | Nome livre não garante que o analista exista nem mantém uma referência estável ao cadastro. |
| D | Uma lista substituída no chamado perde ocorrências anteriores e não modela a associação relacional pedida. |
| E | A restrição `UNIQUE` volta a limitar o par a uma ocorrência, apesar da chave própria. |

### 3.5 Diferenças e melhorias pretendidas

- Troca a associação verbal de obras/exposições por um fluxo cotidiano de suporte de SI.
- Acrescenta representação visual compacta e uma descrição textual equivalente.
- Mantém a análise de cardinalidade, identidade da ocorrência, histórico e integridade referencial.
- Torna o contraste entre chave própria e unicidade do par explícito, sem exigir sintaxe de fabricante.
- Usa rótulos, cardinalidades e texto; a resolução não depende da posição dos blocos nem de cor.

### 3.6 Segunda passagem independente de revisão por IA

Método: os quatro requisitos foram listados antes de consultar o gabarito — múltiplas atuações por par, referência obrigatória às duas entidades, dados por ocorrência e preservação histórica. Cada alternativa foi confrontada separadamente com esses requisitos.

| Critério | Evidência e decisão |
|---|---|
| Correspondência normativa | F07/XIII/XVIII e SI-II preservados; SI-T01 continua apenas como apoio técnico. |
| Consistência do diagrama | As duas relações 1:N produzem a entidade associativa ATUAÇÃO; a descrição textual reproduz entidades, cardinalidades e obrigatoriedade. |
| Verificação relacional | Uma realização SQLite aceitou duas atuações com o mesmo par e IDs próprios; uma atuação com analista inexistente foi rejeitada por chave estrangeira. |
| Gabarito único | Somente B atende simultaneamente aos quatro requisitos. |
| Distratores | A/E bloqueiam repetição por mecanismos diferentes; C perde uma referência; D perde normalização e histórico. |
| Dificuldade | `intermediate`: integra cardinalidade, identidade temporal e integridade referencial. |
| Acessibilidade e celular | Diagrama monoespaçado tem descrição completa e a pergunta pode ser respondida apenas pelo texto. A renderização real em 360 × 800 e leitores de tela ainda requer piloto. |
| Afirmações institucionais | O cenário é fictício e não declara oficialidade, validação universitária ou eficácia. |

**Decisão da revisão:** `ready-for-pilot`. O modelo possui uma solução defensável no recorte declarado e está apto somente para observação controlada.

## 4. Evidências técnicas reproduzíveis

### 4.1 Execução da candidata SI-02

- Ambiente: Node.js 26.13.1, módulo local `node:sqlite`, SQLite 3.54.1, banco `:memory:`.
- O DDL, as cinco inserções e a consulta foram executados sem erro.
- Saída observada: `{ equipe: "Sistemas", chamados_abertos: 3, minutos_previstos: 90 }`.
- O plano da consulta realizou leitura de `chamados`; o desempenho não é objeto da questão.

### 4.2 Validação do modelo da candidata SI-05

Foi criada em memória uma realização equivalente com `analista`, `chamado` e `atuacao`, `PRAGMA foreign_keys=ON`, chave primária `id_atuacao` e duas chaves estrangeiras obrigatórias.

- Duas linhas com o mesmo par `A1/T1` e IDs `U1/U2` foram aceitas, preservando duas ocorrências.
- Uma linha que referenciava o analista inexistente `A2` foi rejeitada por `FOREIGN KEY`.
- A verificação confirma a coerência de B dentro das regras declaradas; não transforma essa implementação de teste em único modelo físico possível.

## 5. Validação documental contra os contratos

Para a validação e integração, cada candidata é projetada como `Question` canônica: mesmo ID de referência, `version: 2`, `classification: SI`, cinco opções A–E, um `correctOptionId`, cinco feedbacks, metadados compartilhados, exatamente uma fonte `primary`, rastreabilidade e estado `ready-for-pilot`. SQL, tabela e diagrama usam o campo opcional estrito `presentation`; evidências de revisão e execução continuam somente nesta ficha Markdown.

| Regra | SI-02 | SI-05 |
|---|---|---|
| Cinco alternativas A–E, IDs únicos | Conforme | Conforme |
| Gabarito presente nas opções | C | B |
| Área, competência, dificuldade e objetivo preservados | Conforme | Conforme |
| Uma fonte principal | F07 | F07 |
| Fonte técnica adicional | Não necessária | SI-T01 |
| Status permitido | ready-for-pilot | ready-for-pilot |
| Campos desconhecidos no objeto canônico | Nenhum | Nenhum |
| Texto apresentado ao jogador sem referência à avaliação externa | Conforme | Conforme |

## 6. Limitações e pendências

- `ready-for-pilot` não significa liberação, homologação institucional ou eficácia comprovada.
- O texto certificado do DOU, eventuais retificações e o PPC vigente não foram novamente certificados nesta etapa.
- Originalidade externa independente continua pendente; a comparação interna não encontrou repetição literal ou estrutural próxima nos itens atuais.
- Acessibilidade foi tratada editorialmente, mas precisa de verificação humana com leitor de tela e observação em celular real.
- O piloto deverá observar compreensão do SQL, leitura do diagrama, tempo, dúvidas, comportamento dos distratores e adequação das dificuldades.
- A integração futura precisará decidir como apresentar código e diagramas sem alterar o contrato estrito ou quebrar a tela pequena.
- Nenhuma candidata pode receber `ready-for-release` antes do piloto e da decisão explícita da pessoa responsável.

## 7. Registro das verificações

| Verificação | Resultado |
|---|---|
| Projeção das candidatas contra `question.schema.json` e `editorial.schema.json`, somente em memória | Aprovada para os dois objetos; cinco opções, cinco feedbacks, uma fonte principal e estados válidos |
| Extensão do bloco apresentado ao jogador | SI-02: 145 palavras; SI-05: 229 palavras; ambas abaixo do limite de 250 |
| Execução SQL | Aprovada em SQLite 3.54.1; resultado C confirmado |
| Realização relacional do diagrama | Duas ocorrências do mesmo par aceitas; referência inexistente rejeitada; resultado B confirmado |
| Triagem interna por trigramas contra as outras 59 questões | Maior similaridade de SI-02: 0,66%; de SI-05: 1,06%; nenhuma duplicação literal próxima detectada |
| Testes de conteúdo e contratos | 132 aprovados em seis arquivos com `npm.cmd run validate:content` |
| ESLint | Aprovado com `npm.cmd run lint` |
| TypeScript | Aprovado com `npm.cmd run typecheck` |
| Catálogo executável | Hash SHA-256 final idêntico ao inicial: `107D49888E66DFCACAD995E8205F852FB54F85DCE07F1728A147496F99AD48C6` |
| Conferência do diff | Somente este documento novo; `git diff --check` sem erros |

A triagem por trigramas é apenas um controle interno automatizado e não comprova originalidade externa. Os testes de schema comprovam compatibilidade estrutural da projeção, não integração ao catálogo.

## 8. Decisão desta etapa

As duas candidatas recebem recomendação `ready-for-pilot` pela revisão assistida por IA. Permanecem somente documentais e aguardam autorização para uma eventual substituição controlada das versões 1. O JSON, o lote original, a seleção de missões e todo o progresso devem permanecer inalterados até essa decisão.
