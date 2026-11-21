# Relatório de Revisão Assistida por IA — Lote N9-COM-05

- **Lote:** `N9-COM-05` (particionado em `N9-COM-05-P1`, `N9-COM-05-P2`, `N9-COM-05-P3` e `N9-COM-05-P4`)
- **Faixa de IDs:** `N9-COM-081` a `N9-COM-100` (20 atividades inéditas, 5 por arquivo)
- **Status editorial:** `under-ai-review` em todas as 20 atividades
- **Contrato técnico:** Compatível com `learning-activities.schema.json` (`schemaVersion: 1`, `additionalProperties: false`) e `LearningActivityCatalog.ts`

> O laboratório apresenta o banco completo aos quatro cursos. O campo `courses` preserva a rastreabilidade de alinhamento explícito nas matrizes e não restringe a visibilidade das atividades no jogo compartilhado. As quatro partes foram reunidas no projeto como `n9-com-05.json`, sem alterar seus conteúdos.

---

## 1. Resumo de Distribuição e Conformidade

### 1.1 Contagem por Dificuldade (Exata)
- `introductory`: **9** (`N9-COM-081`, `N9-COM-082`, `N9-COM-085`, `N9-COM-086`, `N9-COM-091`, `N9-COM-092`, `N9-COM-093`, `N9-COM-095`, `N9-COM-099`)
- `intermediate`: **10** (`N9-COM-083`, `N9-COM-084`, `N9-COM-087`, `N9-COM-088`, `N9-COM-089`, `N9-COM-090`, `N9-COM-094`, `N9-COM-096`, `N9-COM-097`, `N9-COM-098`)
- `advanced`: **1** (`N9-COM-100`)
- **Total:** **20 atividades**

### 1.2 Contagem por Mecânica (Exata)
- `single-choice`: **4** (`N9-COM-081` a `N9-COM-084`)
- `binary-choice`: **2** (`N9-COM-085`, `N9-COM-086`)
- `multiple-select`: **2** (`N9-COM-087`, `N9-COM-088`)
- `sequence-order`: **2** (`N9-COM-089`, `N9-COM-090`)
- `pair-match`: **3** (`N9-COM-091` a `N9-COM-093`)
- `categorize`: **2** (`N9-COM-094`, `N9-COM-095`)
- `fill-slot`: **2** (`N9-COM-096`, `N9-COM-097`)
- `visual-hotspot`: **2** (`N9-COM-098`, `N9-COM-099`)
- `decision-dialogue`: **1** (`N9-COM-100`)
- **Total:** **20 atividades** (`payload.type === mechanic` em 100% dos itens)

### 1.3 Equilíbrio Temático
- **Zero** atividades centradas em segurança da informação, LGPD, criptografia ou controle de acesso.
- **Zero** atividades atribuídas a `TRC`.
- Priorização integral de lógica proposicional, estatística, pesquisa operacional, arquitetura e projeto de software, paradigmas de programação, IHC, arquitetura de computadores, compiladores, testes de software, linguagens C e Python 3, modelagem UML, visualização de dados e gestão de serviços de TI.

---

## 2. Matriz de Elegibilidade por Curso, Gabaritos e Fontes

| ID | Parte | Mecânica | Dificuldade | `conceptId` | Cursos | Gabarito | Fonte `primary` (`role: primary`) |
|---|---|---|---|---|---|---|---|
| `N9-COM-081` | P1 | `single-choice` | `introductory` | `LOG-DMG-01` | CC, SI, TADS | `opt-a` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-082` | P1 | `single-choice` | `introductory` | `EST-MED-01` | CC, SI, TADS | `opt-a` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-083` | P1 | `single-choice` | `intermediate` | `PO-LPR-01` | SI | `opt-a` | Portaria Inep 168/2026 (SI), arts. 4º–6º |
| `N9-COM-084` | P1 | `single-choice` | `intermediate` | `OOP-DIP-01` | CC, SI, TADS | `opt-a` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-085` | P1 | `binary-choice` | `introductory` | `ARQ-CCH-01` | CC, SI, TADS, TGTI | `true` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-086` | P2 | `binary-choice` | `introductory` | `PRC-KBN-01` | CC, SI, TADS, TGTI | `true` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-087` | P2 | `multiple-select` | `intermediate` | `IHC-HEU-01` | CC, SI, TADS | `opt-1, opt-2, opt-3` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-088` | P2 | `multiple-select` | `intermediate` | `API-HTP-01` | CC, SI, TADS | `opt-1, opt-2, opt-3` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-089` | P2 | `sequence-order` | `intermediate` | `CMP-PHS-01` | CC | `cmp-1..cmp-5` | Portaria Inep 157/2026 (CC), arts. 4º–6º |
| `N9-COM-090` | P2 | `sequence-order` | `intermediate` | `ITSM-INC-01` | SI, TADS, TGTI | `svc-1..svc-5` | Portarias Inep 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-091` | P3 | `pair-match` | `introductory` | `PRG-PAR-01` | CC, SI, TADS | `pair-1..pair-4` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-092` | P3 | `pair-match` | `introductory` | `TST-BLK-01` | CC, SI, TADS | `pair-1..pair-4` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-093` | P3 | `pair-match` | `introductory` | `ARQ-MEM-01` | CC, SI, TADS, TGTI | `pair-1..pair-4` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-094` | P3 | `categorize` | `intermediate` | `ARC-MOD-01` | CC, SI, TADS | `1,2→coesao; 3,4→baixo-acop; 5,6→problema` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-095` | P3 | `categorize` | `introductory` | `EST-VAR-01` | CC, SI, TADS, TGTI | `1,2,3→qual; 4,5,6→quan` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-096` | P4 | `fill-slot` | `intermediate` | `C-PTR-01` | CC, SI, TADS | `tok-1` (`*(ptr + i)`) | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-097` | P4 | `fill-slot` | `intermediate` | `PY-BSR-01` | CC, SI, TADS | `tok-1` (`inicio = meio + 1`) | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-098` | P4 | `visual-hotspot` | `intermediate` | `UML-USC-01` | CC, SI, TADS | `node-include-ok` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-099` | P4 | `visual-hotspot` | `introductory` | `VIS-AXS-01` | CC, SI, TADS, TGTI | `node-yaxis-trunc` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-100` | P4 | `decision-dialogue` | `advanced` | `ITSM-SLA-01` | SI, TADS, TGTI | `s1-c2, s2-c1, s3-c2` | Portarias Inep 168, 169 e 171/2026, arts. 4º–6º |

---

## 3. Validação Técnica de Código e Recursos Visuais

### 3.1 `N9-COM-096` (Linguagem C — `fill-slot`)
- **Código reconstruído com `tok-1` (`*(ptr + i)`):**
  - Vetor `int notas[4] = {10, 20, 30, 40};`, ponteiro `int *ptr = notas;`, laço `for (int i = 0; i < 4; i++) { soma += *(ptr + i); }`.
  - **Rastreamento:** `i=0 → 10`; `i=1 → 30`; `i=2 → 60`; `i=3 → 100`. Saída impressa: `100`.
  - **Segurança de memória:** Ponteiro inicializado em objeto válido, deslocamento estritamente dentro de `[0, 3]`, zero comportamento indefinido e preservação literal dos asteriscos no JSON.
  - **Distratores:** `*ptr + i` resulta em `46` (`10+11+12+13`); `ptr + i` gera erro de tipos incompatíveis (`int *` em `+=`); `*(ptr + i + 1)` provoca leitura fora dos limites em `notas[4]`.

### 3.2 `N9-COM-097` (Python 3 — `fill-slot`)
- **Código reconstruído com `tok-1` (`inicio = meio + 1`):**
  - Lista `numeros = [12, 18, 25, 31, 44, 59, 73]`, `alvo = 44`.
  - **Rastreamento:**
    - Iteração 1: `inicio=0, fim=6, meio=3` (`31 < 44`) → `inicio = 4`.
    - Iteração 2: `inicio=4, fim=6, meio=5` (`59 > 44`) → `fim = 4`.
    - Iteração 3: `inicio=4, fim=4, meio=4` (`44 == 44`) → `indice_encontrado = 4`, `break`.
  - **Convergência:** Garante estrita redução do intervalo `[inicio, fim]` em todas as ramificações, terminando em $O(\log n)$ mesmo para alvos ausentes.

### 3.3 Validação dos Recursos Visuais (`N9-COM-098` e `N9-COM-099`)
- **`N9-COM-098`:** Representa o caso de uso base `Solicitar Trancamento de Disciplina` com dependência tracejada `<<include>>` apontando para `Validar Prazo do Calendário Acadêmico` (execução obrigatória), contrastando com seta `<<extend>>`, seta `<<include>>` invertida e associação direta do ator. Possui `visualDescription` e `accessibleDescription` completas sem depender de cor ou posição exclusiva.
- **`N9-COM-099`:** Apresenta gráfico de colunas (`92%` em `2025.2` vs. `95%` em `2026.1`) com eixo vertical truncado em `91%`, fazendo uma diferença de `3` pontos percentuais parecer quadruplicada (`1` unidade visual contra `4`). Todos os nós possuem rótulos e detalhes textuais completos para leitores de tela e telas móveis de `360 px`.

---

## 4. Limitações e Confirmação de Compatibilidade

- **Limitações normativas respeitadas:** `N9-COM-083` (Pesquisa Operacional) foi restrita a `["SI"]` e `N9-COM-089` (Compiladores) foi restrita a `["CC"]`, conforme delimitação explícita das Portarias Inep nº 157/2026 e nº 168/2026 e de `referencias-enade-2026.md`, sem inventar suporte normativo para outros cursos.
- **Controle contra duplicação:** Nenhum `id`, `conceptId`, `title`, `context`, código ou diagrama dos lotes `N9-COM-01` a `N9-COM-04` (`N9-COM-001` a `N9-COM-080`) foi reutilizado.
- **Compatibilidade integral:** Todas as 4 partes JSON atendem estritamente às definições de `learning-activities.schema.json` e `LearningActivityCatalog.ts`, com `validationStatus: "under-ai-review"`, uma única fonte `primary` por atividade e ausência da sigla `ENADE` nos campos voltados ao jogador.
