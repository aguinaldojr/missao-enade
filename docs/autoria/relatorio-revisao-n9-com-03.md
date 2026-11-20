# Relatório de Revisão e Rastreabilidade — Lote N9-COM-03

## 1. Resumo Executivo da Geração

- **Identificador do lote (`batchId`):** `N9-COM-03`
- **Contrato JSON Schema (`schemaVersion`):** `1` (`learning-activities.schema.json`)
- **Faixa de atividades:** `N9-COM-041` a `N9-COM-060` (20 atividades inéditas, sem repetição de `conceptId` ou enunciado dos lotes 01 e 02)
- **Status de validação (`validationStatus`):** `under-ai-review` em todas as 20 atividades
- **Elegibilidade de cursos (`courses`):** Exclusivamente `CC`, `SI`, `TADS` e `TGTI` conforme a matriz normativa (nenhuma atividade compartilhada atribuída a `TRC`)
- **Rastreabilidade de fontes:** Todas as atividades contêm referências oficiais e técnicas verificadas (`sourceVerificationNeeded: false`).

## 2. Auditoria de Distribuição por Mecânica e Dificuldade

### 2.1 Distribuição por Mecânica (`mechanic`)

| Mecânica | Meta | Gerado | Identificadores |
| :--- | :---: | :---: | :--- |
| `single-choice` | 4 | 4 | `N9-COM-041`, `N9-COM-042`, `N9-COM-043`, `N9-COM-044` |
| `binary-choice` | 2 | 2 | `N9-COM-045`, `N9-COM-046` |
| `multiple-select` | 2 | 2 | `N9-COM-047`, `N9-COM-048` |
| `sequence-order` | 2 | 2 | `N9-COM-049`, `N9-COM-050` |
| `pair-match` | 3 | 3 | `N9-COM-051`, `N9-COM-052`, `N9-COM-053` |
| `categorize` | 2 | 2 | `N9-COM-054`, `N9-COM-055` |
| `fill-slot` | 2 | 2 | `N9-COM-056`, `N9-COM-057` |
| `visual-hotspot` | 2 | 2 | `N9-COM-058`, `N9-COM-059` |
| `decision-dialogue` | 1 | 1 | `N9-COM-060` |
| **Total** | **20** | **20** | **`N9-COM-041` – `N9-COM-060`** |

### 2.2 Distribuição por Dificuldade (`difficulty`)

| Dificuldade | Meta | Gerado | Identificadores |
| :--- | :---: | :---: | :--- |
| `introductory` | 9 | 9 | `N9-COM-041`, `N9-COM-043`, `N9-COM-045`, `N9-COM-046`, `N9-COM-051`, `N9-COM-053`, `N9-COM-054`, `N9-COM-057`, `N9-COM-059` |
| `intermediate` | 10 | 10 | `N9-COM-042`, `N9-COM-044`, `N9-COM-047`, `N9-COM-048`, `N9-COM-049`, `N9-COM-050`, `N9-COM-052`, `N9-COM-055`, `N9-COM-056`, `N9-COM-058` |
| `advanced` | 1 | 1 | `N9-COM-060` |
| **Total** | **20** | **20** | **`N9-COM-041` – `N9-COM-060`** |

## 3. Matriz Completa de Rastreabilidade Pedagógica e Normativa

> **Jogo único:** o laboratório apresenta o banco completo a CC, SI, TADS e TGTI. O campo `courses` abaixo preserva somente a rastreabilidade de alinhamento explícito nas matrizes, não restringe a visibilidade das atividades no jogo compartilhado.

| ID | Título | Mecânica | Dificuldade | Cursos | Concept ID | Área | Base Normativa e Técnica |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `N9-COM-041` | Os Quatro Vs no Monitoramento do Campus | `single-choice` | `introductory` | CC, SI, TADS, TGTI | `BIG-4VS-01` | Dados e Inteligência Analítica | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; mapeamento-questoes-cursos-disciplinas.md |
| `N9-COM-042` | Repositório para Dados Brutos e Exploratórios | `single-choice` | `intermediate` | SI, TADS, TGTI | `ARC-DLK-01` | Arquitetura de Dados Analíticos | Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; referencias-enade-2026.md |
| `N9-COM-043` | Paradigma de Aprendizagem no Apoio Acadêmico | `single-choice` | `introductory` | CC, SI, TADS, TGTI | `ML-SUP-01` | Inteligência Artificial e Ciência de Dados | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; mapeamento-questoes-cursos-disciplinas.md |
| `N9-COM-044` | Maturidade e Melhoria Contínua de Processos | `single-choice` | `intermediate` | CC, SI, TADS, TGTI | `PRC-MAT-01` | Qualidade e Processos de Software | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; mapeamento-questoes-cursos-disciplinas.md |
| `N9-COM-045` | Atomicidade na Transferência de Créditos | `binary-choice` | `introductory` | CC, SI, TADS | `DB-ACID-01` | Banco de Dados e Informação | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; ISO/IEC 9075 — Database languages — SQL |
| `N9-COM-046` | Máquinas Virtuais e Contêineres no Laboratório | `binary-choice` | `introductory` | CC, SI, TADS, TGTI | `INF-CNT-01` | Sistemas Operacionais e Infraestrutura | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; referencias-enade-2026.md |
| `N9-COM-047` | Estratégia Equilibrada de Testes de Software | `multiple-select` | `intermediate` | CC, SI, TADS | `QA-PYR-01` | Engenharia e Qualidade de Software | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; ISO/IEC/IEEE 29119 |
| `N9-COM-048` | Camadas de Controle em Segurança da Informação | `multiple-select` | `intermediate` | CC, SI, TADS, TGTI | `SEC-CTL-01` | Segurança da Informação | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; ISO/IEC 27001 |
| `N9-COM-049` | Esteira de Integração e Entrega Contínua | `sequence-order` | `intermediate` | CC, SI, TADS, TGTI | `DEV-CICD-01` | Engenharia de Software e DevOps | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; mapeamento-questoes-cursos-disciplinas.md |
| `N9-COM-050` | Ciclo de Vida em Ciência de Dados | `sequence-order` | `intermediate` | CC, SI, TADS, TGTI | `DS-CYC-01` | Inteligência Artificial e Ciência de Dados | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; referencias-enade-2026.md |
| `N9-COM-051` | Métodos HTTP em uma API REST | `pair-match` | `introductory` | CC, SI, TADS | `WEB-RST-01` | Desenvolvimento Web e Sistemas Distribuídos | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; RFC 9110 — HTTP Semantics |
| `N9-COM-052` | Ordens de Complexidade Assintótica | `pair-match` | `intermediate` | CC, SI, TADS | `AED-BIGO-01` | Algoritmos e Estruturas de Dados | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; referencias-enade-2026.md |
| `N9-COM-053` | Artefatos Essenciais de Gestão de Projetos | `pair-match` | `introductory` | SI, TADS, TGTI | `PRJ-ART-01` | Gerência de Projetos | Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; mapeamento-questoes-cursos-disciplinas.md |
| `N9-COM-054` | Classificação, Regressão e Agrupamento | `categorize` | `introductory` | CC, SI, TADS, TGTI | `ML-TSK-01` | Inteligência Artificial e Ciência de Dados | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; referencias-enade-2026.md |
| `N9-COM-055` | Classificando Controles de Segurança Aplicados | `categorize` | `intermediate` | CC, SI, TADS, TGTI | `SEC-CTL-02` | Segurança da Informação | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; ISO/IEC 27001 |
| `N9-COM-056` | Contagem de Chamados por Categoria em Python | `fill-slot` | `intermediate` | CC, SI, TADS | `PY-DICT-01` | Algoritmos e Programação | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Python 3 Language Reference — dict.get |
| `N9-COM-057` | Filtrando Avisos Pendentes em JavaScript | `fill-slot` | `introductory` | CC, SI, TADS | `JS-ARR-01` | Desenvolvimento Web e Interfaces | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; ECMA-262 — Array.prototype.filter |
| `N9-COM-058` | Generalização e Especialização no Modelo Conceitual | `visual-hotspot` | `intermediate` | CC, SI, TADS | `DB-EER-01` | Modelagem e Bancos de Dados | Portaria Inep nº 157/2026 (CC), arts. 4º–6º; Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; mapeamento-questoes-cursos-disciplinas.md |
| `N9-COM-059` | Decisão Exclusiva no Fluxo BPMN | `visual-hotspot` | `introductory` | SI, TADS, TGTI | `BPM-GWY-01` | Gestão de Processos de Negócio | Portaria Inep nº 168/2026 (SI), arts. 4º–6º; Portaria Inep nº 169/2026 (TADS), arts. 4º–6º; Portaria Inep nº 171/2026 (TGTI), arts. 4º–6º; OMG BPMN 2.0.2 |
| `N9-COM-060` | Resposta Responsável a Incidente com Dados Pessoais | `decision-dialogue` | `advanced` | CC, SI, TADS, TGTI | `PRV-INC-01` | Ética, Privacidade e Segurança | Portaria Inep nº 154/2026 (Formação Geral), arts. 4º–6º; Portarias Inep nº 157, 168, 169 e 171/2026, arts. 4º–6º; Lei nº 13.709/2018 (LGPD), art. 48 |

## 4. Verificações Técnicas Executadas

1. **Conformidade com `learning-activities.schema.json` e `LearningActivityCatalog.ts`:**
   - `single-choice`: 5 opções exclusivas (`opt-a` a `opt-e`), `correctId` válido e feedback individualizado por opção.
   - `binary-choice`: `statement` técnico, `correctValue` booleano, `feedbackTrue` e `feedbackFalse` pedagógicos.
   - `multiple-select`: 6 opções (`opt-1` a `opt-6`), `requiredCount: 3` e exatamente 3 opções marcadas com `correct: true`.
   - `sequence-order`: 5 blocos (`blocks`) com `correctOrder` determinístico.
   - `pair-match`: 4 pares (`pairs`) com relação unívoca entre `left` e `right`.
   - `categorize`: 3 categorias (`categories`) e 5–6 itens (`items`) com `categoryId` válido.
   - `fill-slot`: trechos sintaticamente válidos em Python 3 (`N9-COM-056`) e JavaScript (`N9-COM-057`) com 4 tokens e `correctTokenId` único.
   - `visual-hotspot`: `visualDescription`, `accessibleDescription` detalhada, 4 nós (`nodes`) e `correctNodeId` válido.
   - `decision-dialogue`: 3 etapas sequenciais (`steps`), cada uma com 3 escolhas (`choices`), reação imediata (`reaction`) e exatamente 1 opção `correct: true`.
2. **Independência de UI e Neutralidade Pedagógica:**
   - Nenhuma atividade menciona exames externos, bancas, questões ou provas nos campos apresentados ao estudante (`title`, `context`, `instruction`, `help`, `explanation` e `payload`).
   - Nenhuma referência a posicionamento visual relativo (como 'acima', 'abaixo', 'à esquerda' ou 'à direita') foi usada nas instruções de seleção.
3. **Não Colisão com os Lotes 01 e 02:**
   - Todos os 20 `conceptId` e cenários são inéditos em relação a `n9-com-01.json` (`N9-COM-001`–`N9-COM-020`) e `n9-com-02.json` (`N9-COM-021`–`N9-COM-040`).
