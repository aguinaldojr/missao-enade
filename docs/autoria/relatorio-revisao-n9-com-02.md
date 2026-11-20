# Relatório de Revisão Assistida por IA — Lote N9-COM-02

Data da revisão: 20 de novembro de 2026.  
Lote avaliado: `N9-COM-02` (`schemaVersion: 1`, `validationStatus: "under-ai-review"`).

---

## 1. Resumo Quantitativo e Conformidade de Distribuição

O lote contém **20 atividades inéditas** (`N9-COM-021` a `N9-COM-040`), sem repetição de títulos, contextos ou identificadores conceituais do lote `N9-COM-01` e sem inclusão de itens para `TRC`.

### Contagem por Mecânica

| Mecânica | Quantidade | IDs |
|---|---:|---|
| `single-choice` | 4 | N9-COM-021, N9-COM-022, N9-COM-023, N9-COM-024 |
| `binary-choice` | 2 | N9-COM-025, N9-COM-026 |
| `multiple-select` | 2 | N9-COM-027, N9-COM-028 |
| `sequence-order` | 2 | N9-COM-029, N9-COM-030 |
| `pair-match` | 3 | N9-COM-031, N9-COM-032, N9-COM-033 |
| `categorize` | 2 | N9-COM-034, N9-COM-035 |
| `fill-slot` | 2 | N9-COM-036, N9-COM-037 |
| `visual-hotspot` | 2 | N9-COM-038, N9-COM-039 |
| `decision-dialogue` | 1 | N9-COM-040 |
| **Total** | **20** | **N9-COM-021 a N9-COM-040** |

### Contagem por Dificuldade

| Dificuldade | Quantidade | IDs |
|---|---:|---|
| `introductory` | 9 | N9-COM-021, N9-COM-022, N9-COM-023, N9-COM-025, N9-COM-026, N9-COM-031, N9-COM-033, N9-COM-034, N9-COM-039 |
| `intermediate` | 10 | N9-COM-024, N9-COM-027, N9-COM-028, N9-COM-029, N9-COM-030, N9-COM-032, N9-COM-035, N9-COM-036, N9-COM-037, N9-COM-038 |
| `advanced` | 1 | N9-COM-040 |
| **Total** | **20** | **100% conforme meta (9 / 10 / 1)** |

### Elegibilidade por Curso

| Curso | Atividades Elegíveis | IDs |
|---|---:|---|
| `CC` | 11 | N9-COM-023, N9-COM-024, N9-COM-028, N9-COM-030, N9-COM-032, N9-COM-033, N9-COM-035, N9-COM-036, N9-COM-037, N9-COM-038, N9-COM-039 |
| `SI` | 20 | N9-COM-021 a N9-COM-040 |
| `TADS` | 18 | N9-COM-021, N9-COM-022, N9-COM-023, N9-COM-024, N9-COM-025, N9-COM-027, N9-COM-028, N9-COM-029, N9-COM-030, N9-COM-032, N9-COM-033, N9-COM-034, N9-COM-035, N9-COM-036, N9-COM-037, N9-COM-038, N9-COM-039, N9-COM-040 |
| `TGTI` | 12 | N9-COM-021, N9-COM-022, N9-COM-023, N9-COM-024, N9-COM-025, N9-COM-026, N9-COM-027, N9-COM-029, N9-COM-031, N9-COM-034, N9-COM-035, N9-COM-040 |
| `TRC` | 0 | Excluído conforme especificação do lote |

### Correção controlada durante a integração

Na entrega JSON original, marcadores `*` do código C de `N9-COM-036` desapareceram em trechos de ponteiros, embora a versão correta estivesse preservada neste relatório. A integração restaurou exclusivamente `/* -1 se vazia */`, `Pilha *p`, `int *saida` e `*saida` nos quatro tokens. IDs, mecânica, dificuldade, XP, resposta correta e objetivo pedagógico permaneceram inalterados.

---

## 2. Matriz de Atividades, Gabaritos, Fontes e Status

| ID | Título | Mecânica | Dificuldade | Cursos | Gabarito | Fonte `primary` | Status |
|---|---|---|---|---|---|---|---|
| N9-COM-021 | Fronteira e Retroalimentação no Atendimento | `single-choice` | `introductory` | SI, TADS, TGTI | `opt-a` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-022 | Da Leitura Bruta à Ação na Biblioteca | `single-choice` | `introductory` | SI, TADS, TGTI | `opt-a` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-023 | Gráfico Certo para Evolução Mensal | `single-choice` | `introductory` | CC, SI, TADS, TGTI | `opt-a` | Portarias Inep nº 157, 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-024 | Triagem Automatizada de Bolsas | `single-choice` | `intermediate` | CC, SI, TADS, TGTI | `opt-a` | Portarias Inep nº 154, 157, 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-025 | TI na Cadeia de Valor de Porter | `binary-choice` | `introductory` | SI, TADS, TGTI | `false` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-026 | COBIT e ITIL na Organização de TI | `binary-choice` | `introductory` | SI, TGTI | `true` | Portarias Inep nº 168 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-027 | Gargalo na Emissão de Diplomas | `multiple-select` | `intermediate` | SI, TADS, TGTI | `opt-1`, `opt-2`, `opt-3` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-028 | Qualidade Contínua na Sprint | `multiple-select` | `intermediate` | CC, SI, TADS | `opt-1`, `opt-2`, `opt-3` | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-029 | Fluxo de Dados até o Painel Analítico | `sequence-order` | `intermediate` | SI, TADS, TGTI | `etl-1` → `etl-2` → `etl-3` → `etl-4` → `etl-5` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-030 | Rastreabilidade da Mudança até a Entrega | `sequence-order` | `intermediate` | CC, SI, TADS | `trc-1` → `trc-2` → `trc-3` → `trc-4` → `trc-5` | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-031 | Sistemas por Nível Organizacional | `pair-match` | `introductory` | SI, TGTI | `pair-1`..`pair-4` (SPT, SIG, SAD, SAE) | Portarias Inep nº 168 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-032 | Estruturas de Dados no Cotidiano de Software | `pair-match` | `intermediate` | CC, SI, TADS | `pair-1`..`pair-4` (Pilha, Fila, Hash, Grafo) | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-033 | Diagramas UML na Modelagem | `pair-match` | `introductory` | CC, SI, TADS | `pair-1`..`pair-3` (Casos de Uso, Classes, Sequência) | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-034 | Operação Diária vs. Análise Histórica | `categorize` | `introductory` | SI, TADS, TGTI | `item-1,3,5`: `cat-oltp`; `item-2,4`: `cat-olap` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-035 | Propriedades de Segurança na Prática | `categorize` | `intermediate` | CC, SI, TADS, TGTI | `item-1,5`: `cat-conf`; `item-2,4`: `cat-int`; `item-3,6`: `cat-disp` | Portarias Inep nº 157, 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-036 | Remoção Segura no Topo da Pilha em C | `fill-slot` | `intermediate` | CC, SI, TADS | `tok-1` (`*saida = p->dados[p->topo--];`) | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-037 | Estudantes sem Empréstimo Ativo em SQL | `fill-slot` | `intermediate` | CC, SI, TADS | `tok-1` (`WHERE E.ID_ALUNO IS NULL`) | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-038 | Chave Estrangeira no Modelo Relacional | `visual-hotspot` | `intermediate` | CC, SI, TADS | `node-turma-fk` | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-039 | Composição Forte no Diagrama de Classes | `visual-hotspot` | `introductory` | CC, SI, TADS | `node-composicao` | Portarias Inep nº 157, 168 e 169/2026, arts. 4º–6º | `under-ai-review` |
| N9-COM-040 | Escopo e Entrega Incremental no Novo Portal | `decision-dialogue` | `advanced` | SI, TADS, TGTI | `s1-c2`, `s2-c1`, `s3-c2` | Portarias Inep nº 168, 169 e 171/2026, arts. 4º–6º | `under-ai-review` |

---

## 3. Testes Conceituais e Validações Técnicas

### Testes Conceituais e Pedagógicos
1. **Unicidade de Resposta:** Todas as atividades objetivas (`N9-COM-021` a `026`, `036` a `039`) possuem exatamente uma alternativa/nó/token tecnicamente defensável; os distratores reproduzem erros clássicos (confusão entre entrada e feedback, dado e informação, correlação/acurácia global vs. viés em subgrupos, `= NULL` em SQL, pré-decremento vs. pós-decremento em pilha, agregação vs. composição UML).
2. **Alinhamento Curricular:** Todos os recortes respeitam estritamente os objetos de conhecimento e competências das Portarias Inep nº 154, 157, 168, 169 e 171/2026 (`arts. 4º–6º`).
3. **Filtro Editorial:** Verificação lexical automatizada confirmou **zero ocorrências** do termo `ENADE` nos campos exibidos ao estudante (`title`, `context`, `instruction`, `help`, `explanation` e `payload`).

### Validação do Código C (`N9-COM-036`)
- **Trecho montado com `tok-1`:**
  ```c
  typedef struct {
      int dados[5];
      int topo; /* -1 se vazia */
  } Pilha;

  int pop(Pilha *p, int *saida) {
      if (p->topo < 0) return 0;
      *saida = p->dados[p->topo--];
      return 1;
  }
