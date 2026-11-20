# Relatório de Correção Estrutural e Revisão Editorial — Lote `N9-COM-01`

## 1. Resumo Executivo

Este relatório documenta a migração estrutural e a revisão editorial do lote `N9-COM-01` (`n9-atividades-compartilhadas-01-revisado.json`) para total conformidade com os contratos `learning-activities.schema.json` (`$id: "urn:n9:learning-activities"`, `schemaVersion: 1`) e `LearningActivityCatalog.ts`, gerando o entregável `n9-atividades-compartilhadas-01-schema-v1.json`.

* **Total de atividades processadas:** 20 (`N9-COM-001` a `N9-COM-020`)
* **Status final das atividades:** 20 itens em `"under-ai-review"` (após conclusão das correções editoriais obrigatórias em `N9-COM-002` e `N9-COM-016` e adequação integral ao contrato).
* **Integridade de preservação:** Todos os 20 IDs, títulos, cursos, conceitos, dificuldades, mecânicas, valores de XP, contextos, instruções, explicações, gabaritos e feedbacks originais foram integralmente preservados.

---

## 2. Campos Convertidos (Adequação ao Schema e TypeScript)

1. **Raiz do catálogo (`LearningActivityCatalog`):**
   * Mantidos exclusivamente `schemaVersion` (`1`), `batchId` (`"N9-COM-01"`) e `activities` (array de 20 itens).
   * Removida a propriedade raiz `reviewStatus` (proibida por `additionalProperties: false`).
2. **Metadados da atividade (`LearningActivityBase`):**
   * Substituído `reviewStatus` por `validationStatus` em todas as 20 atividades (`ai-reviewed` → `under-ai-review`, e `needs-revision` → `under-ai-review` após conclusão das correções editoriais de `N9-COM-002` e `N9-COM-016`).
   * Adicionado o objeto obrigatório `traceability` (`title`, `objective`, `locators`) em todas as 20 atividades.
3. **Objeto `help` (`LearningHelp`):**
   * Removido `help.explanation` de todas as 20 atividades (proibido por `additionalProperties: false` em `#/definitions/help`), mantendo exclusivamente `hint`, `concept` e `example`. O texto integral da explicação permaneceu preservado no campo raiz `explanation` de cada atividade.
4. **Payloads tipados (`LearningPayload`):**
   * Adicionado o discriminador `type` idêntico a `mechanic` em todos os 20 payloads.
   * **`multiple-select` (`N9-COM-007`, `N9-COM-008`):** renomeado `isCorrect` para `correct` em cada opção.
   * **`sequence-order` (`N9-COM-009`, `N9-COM-010`):** renomeado `items` para `blocks`, preservando `correctOrder`.
   * **`categorize` (`N9-COM-014`, `N9-COM-015`):** adicionado o campo obrigatório `description` a cada categoria em `categories`.
   * **`fill-slot` (`N9-COM-016`, `N9-COM-017`):** substituído `code` por `contentBefore` e `contentAfter` (divididos exatamente na marcação `{{SLOT}}`), renomeado `options` para `tokens`, normalizado `language` para os literais do schema (`"Python 3"` → `"python"`, `"SQL (MySQL 8 / Oracle 19c)"` → `"sql"`) e preservados `correctTokenId` e todos os feedbacks.
   * **`visual-hotspot` (`N9-COM-018`, `N9-COM-019`):** renomeado `accessibleTextDescription` para `accessibleDescription` e `nodes[].description` para `nodes[].detail`.
   * **`decision-dialogue` (`N9-COM-020`):** removida propriedade não prevista `allowRetryWithoutXpPenalty`, renomeado `stages` para `steps`, substituído `stageNumber` por `id` (`"step-1"`, `"step-2"`, `"step-3"`), renomeado `prompt` para `message` e renomeado `choices[].isAppropriate` para `choices[].correct`.
   * **`single-choice`, `binary-choice`, `pair-match`:** adicionado `type` mantendo intactos `options`, `correctId`, `statement`, `correctValue`, `feedbackTrue`, `feedbackFalse` e `pairs`.

---

## 3. Correções Editoriais Obrigatórias Realizadas

### 3.1. `N9-COM-002` — Consulta de Notas em SQL
* **Problema anterior:** As consultas SQL nas opções `opt-a` a `opt-e` e no `help.example` estavam em uma única linha extensa (até 107 caracteres), prejudicando a leitura e comparação de cláusulas em telas estreitas de celular.
* **Correção aplicada:** As consultas nas 5 opções (e no `help.example`) foram formatadas com quebras de linha (`\n`) separando logicamente `SELECT`, `FROM`, `WHERE`, `GROUP BY` e `HAVING`.
* **Preservação lógica:** Nenhuma palavra-chave, identificador, operador, condição (`> 7.0`), gabarito (`opt-b`) ou feedback foi alterado; o resultado lógico das consultas permanece idêntico.

### 3.2. `N9-COM-016` — Consulta Parametrizada em Python
* **Problema anterior:** O bloco de código declarava `sql = "SELECT nome FROM estudante WHERE matricula = %s"` antes do slot, mas apenas a resposta correta (`tok-1`: `cursor.execute(sql, (matricula,))`) utilizava a variável `sql`, enquanto os três distratores reescreviam a query inteira dentro de `cursor.execute(...)`, criando uma pista estrutural involuntária.
* **Correção aplicada:** Todas as quatro alternativas (`tok-1` a `tok-4`) passaram a operar sobre a variável `sql` declarada em `contentBefore`, tornando-as estruturalmente comparáveis:
  * `tok-1` (correta): `cursor.execute(sql, (matricula,))`
  * `tok-2` (distrator): `cursor.execute(sql % f"'{matricula}'")`
  * `tok-3` (distrator): `cursor.execute(sql.replace("%s", "'" + matricula + "'"))`
  * `tok-4` (distrator): `cursor.execute(sql.replace("%s", "'{}'".format(matricula)))`
* **Preservação pedagógica:** Mantida exatamente uma única resposta defensável (`tok-1`), preservados o conceito de parametrização via DB-API e os feedbacks ajustados apenas para refletir a sintaxe correspondente sem alterar o diagnóstico técnico.

---

## 4. Fontes e Papéis Normalizados

Todas as fontes foram normalizadas para os pares `(role, type)` exigidos pelo contrato, garantindo **exatamente uma fonte `role: "primary"`** por atividade e sem invenção de URLs, anos ou portarias:

| Atividades | Fonte `primary` (`type: "official-reference"`) | Fontes Secundárias (`role` / `type`) |
| :--- | :--- | :--- |
| `N9-COM-001`, `002`, `007`, `008`, `009`, `011`, `014`, `017` | Portarias Inep nº 157, 168, 169 e 171/2026, arts. 5º e 6º | `technical` / `official-reference` (RFC 8446, ISO/IEC 9075, NIST SP 800-145, ISO/IEC/IEEE 29148, NIST SP 800-61 Rev. 2) |
| `N9-COM-003` | Portarias Inep nº 168 e 171/2026, arts. 5º e 6º | `technical` / `institutional` (`referencias-enade-2026.md`) |
| `N9-COM-004` | Portarias Inep nº 154, 157, 168 e 171/2026, arts. 5º e 6º | — |
| `N9-COM-005`, `015` | Portarias Inep nº 154, 157, 168, 169 e 171/2026, arts. 5º e 6º | `normative-complementary` / `official-reference` (Lei nº 13.709/2018 — LGPD) |
| `N9-COM-006`, `018` | Portarias Inep nº 154, 157, 168 e 169/2026, arts. 5º e 6º | `technical` / `official-reference` (W3C WCAG 2.1) |
| `N9-COM-010` | Portarias Inep nº 168 e 171/2026, arts. 5º e 6º | `technical` / `institutional` (`plano-colecao-enade-2026.md`) |
| `N9-COM-012` | Portarias Inep nº 157, 168, 169 e 171/2026, arts. 5º e 6º | — |
| `N9-COM-013` | Portarias Inep nº 168, 169 e 171/2026, arts. 5º e 6º | — |
| `N9-COM-016` | Portarias Inep nº 157, 168 e 169/2026, arts. 5º e 6º | `technical` / `official-reference` (PEP 249) |
| `N9-COM-019` | Portarias Inep nº 157, 168, 169 e 171/2026, arts. 5º e 6º | `technical` / `institutional` (`plano-colecao-enade-2026.md`) |
| `N9-COM-020` | Portarias Inep nº 154, 157, 168, 169 e 171/2026, arts. 5º e 6º | `technical` / `institutional` (`mapeamento-questoes-cursos-disciplinas.md`) |

---

## 5. Rastreabilidade Adicionada e Limitações Restantes

* **Rastreabilidade (`traceability`):** Todas as 20 atividades receberam `title` (combinando título da atividade e `conceptId`), `objective` (derivado diretamente da instrução e da explicação pedagógica do próprio item) e `locators` (extraídos estritamente das referências já declaradas em `sources`).
* **Limitações registradas:**
  1. Os documentos normativos originais citavam apenas `arts. 5º e 6º` das Portarias Inep nº 154, 157, 168, 169 e 171/2026, sem detalhamento de incisos ou alíneas específicas de competência/habilidade; para não inventar localizadores não comprovados, mantiveram-se estritamente os localizadores documentais explícitos no lote original.
  2. Os arquivos internos referenciados em `N9-COM-003`, `N9-COM-010`, `N9-COM-019` e `N9-COM-020` (`referencias-enade-2026.md`, `plano-colecao-enade-2026.md` e `mapeamento-questoes-cursos-disciplinas.md`) não foram anexados nesta rodada; assim, seus localizadores foram registrados pelo nome do documento institucional original sem seção interna inventada.
  3. O arquivo `LearningActivityCatalog.ts` referencia `./EditorialMetadata`, cuja definição externa foi respeitada integralmente via `learning-activities.schema.json`.
  4. Todas as atividades permanecem em `validationStatus: "under-ai-review"`, aguardando etapa posterior de revisão humana/docente antes de eventual promoção.

---

## 6. Contagens por Mecânica e Dificuldade

* **Total de atividades:** 20 (20 IDs únicos: `N9-COM-001` a `N9-COM-020`)
* **Distribuição por dificuldade:**
  * `introductory`: **8** (`N9-COM-001`, `002`, `005`, `006`, `008`, `011`, `014`, `015`)
  * `intermediate`: **10** (`N9-COM-003`, `004`, `007`, `009`, `010`, `012`, `013`, `016`, `017`, `018`)
  * `advanced`: **2** (`N9-COM-019`, `020`)
* **Distribuição por mecânica (9 mecânicas):**
  * `single-choice`: **4** (`N9-COM-001`, `002`, `003`, `004`)
  * `pair-match`: **3** (`N9-COM-011`, `012`, `013`)
  * `binary-choice`: **2** (`N9-COM-005`, `006`)
  * `multiple-select`: **2** (`N9-COM-007`, `008`)
  * `sequence-order`: **2** (`N9-COM-009`, `010`)
  * `categorize`: **2** (`N9-COM-014`, `015`)
  * `fill-slot`: **2** (`N9-COM-016`, `017`)
  * `visual-hotspot`: **2** (`N9-COM-018`, `019`)
  * `decision-dialogue`: **1** (`N9-COM-020`)

---

## 7. Gabaritos (Antes e Depois) e Status Final por Atividade

| ID | Mecânica | Dificuldade | Gabarito Antes | Gabarito Depois | Status Final |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `N9-COM-001` | `single-choice` | `introductory` | `correctId: "opt-a"` | `correctId: "opt-a"` (preservado) | `under-ai-review` |
| `N9-COM-002` | `single-choice` | `introductory` | `correctId: "opt-b"` | `correctId: "opt-b"` (preservado; SQL formatado em múltiplas linhas) | `under-ai-review` |
| `N9-COM-003` | `single-choice` | `intermediate` | `correctId: "opt-b"` | `correctId: "opt-b"` (preservado) | `under-ai-review` |
| `N9-COM-004` | `single-choice` | `intermediate` | `correctId: "opt-c"` | `correctId: "opt-c"` (preservado) | `under-ai-review` |
| `N9-COM-005` | `binary-choice` | `introductory` | `correctValue: false` | `correctValue: false` (preservado) | `under-ai-review` |
| `N9-COM-006` | `binary-choice` | `introductory` | `correctValue: false` | `correctValue: false` (preservado) | `under-ai-review` |
| `N9-COM-007` | `multiple-select` | `intermediate` | `opt-1`, `opt-3`, `opt-5` | `opt-1`, `opt-3`, `opt-5` (`correct: true`, preservado) | `under-ai-review` |
| `N9-COM-008` | `multiple-select` | `introductory` | `opt-1`, `opt-2`, `opt-3` | `opt-1`, `opt-2`, `opt-3` (`correct: true`, preservado) | `under-ai-review` |
| `N9-COM-009` | `sequence-order` | `intermediate` | `["step-1", "step-2", "step-3", "step-4", "step-5"]` | `["step-1", "step-2", "step-3", "step-4", "step-5"]` (preservado) | `under-ai-review` |
| `N9-COM-010` | `sequence-order` | `intermediate` | `["erp-1", "erp-2", "erp-3", "erp-4", "erp-5"]` | `["erp-1", "erp-2", "erp-3", "erp-4", "erp-5"]` (preservado) | `under-ai-review` |
| `N9-COM-011` | `pair-match` | `introductory` | `pair-1`, `pair-2`, `pair-3` | `pair-1`, `pair-2`, `pair-3` (preservado) | `under-ai-review` |
| `N9-COM-012` | `pair-match` | `intermediate` | `pair-1`, `pair-2`, `pair-3`, `pair-4` | `pair-1`, `pair-2`, `pair-3`, `pair-4` (preservado) | `under-ai-review` |
| `N9-COM-013` | `pair-match` | `intermediate` | `pair-1`, `pair-2`, `pair-3` | `pair-1`, `pair-2`, `pair-3` (preservado) | `under-ai-review` |
| `N9-COM-014` | `categorize` | `introductory` | `item-1,3,5 -> cat-rf`; `item-2,4 -> cat-rnf` | `item-1,3,5 -> cat-rf`; `item-2,4 -> cat-rnf` (preservado) | `under-ai-review` |
| `N9-COM-015` | `categorize` | `introductory` | `item-1,4 -> cat-comum`; `item-2,3,5 -> cat-sensivel` | `item-1,4 -> cat-comum`; `item-2,3,5 -> cat-sensivel` (preservado) | `under-ai-review` |
| `N9-COM-016` | `fill-slot` | `intermediate` | `correctTokenId: "tok-1"` (`cursor.execute(sql, (matricula,))`) | `correctTokenId: "tok-1"` (`cursor.execute(sql, (matricula,))`; distratores alinhados à variável `sql`) | `under-ai-review` |
| `N9-COM-017` | `fill-slot` | `intermediate` | `correctTokenId: "tok-1"` | `correctTokenId: "tok-1"` (preservado) | `under-ai-review` |
| `N9-COM-018` | `visual-hotspot` | `intermediate` | `correctNodeId: "node-input-cpf"` | `correctNodeId: "node-input-cpf"` (preservado) | `under-ai-review` |
| `N9-COM-019` | `visual-hotspot` | `advanced` | `correctNodeId: "node-db"` | `correctNodeId: "node-db"` (preservado) | `under-ai-review` |
| `N9-COM-020` | `decision-dialogue` | `advanced` | `s1-c2`, `s2-c1`, `s3-c2` | `s1-c2`, `s2-c1`, `s3-c2` (`correct: true`, preservado) | `under-ai-review` |
