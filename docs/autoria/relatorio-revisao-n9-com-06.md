# Relatório de Revisão Assistida — Lote Compartilhado 06 (`N9-COM-101` a `N9-COM-120`)

Data da revisão: 20 de novembro de 2026.
Status editorial aplicado: `under-ai-review` (sem declaração de aprovação externa ou institucional).

## 1. Resumo Executivo e Contagens

O sexto lote compartilhado conclui a coleção de 120 atividades do jogo educacional **N9 — Jornada Digital** com 20 itens inéditos (`N9-COM-101` a `N9-COM-120`), distribuídos em quatro partes de cinco atividades cada (`N9-COM-06-P1` a `N9-COM-06-P4`). Nenhuma atividade foi criada ou atribuída para `TRC`, nem houve ampliação adicional de Segurança da Informação.

### Distribuição por Dificuldade

| Dificuldade | Quantidade | IDs |
|---|---:|---|
| `introductory` | 9 | `N9-COM-103`, `N9-COM-104`, `N9-COM-105`, `N9-COM-106`, `N9-COM-111`, `N9-COM-112`, `N9-COM-114`, `N9-COM-117`, `N9-COM-118` |
| `intermediate` | 10 | `N9-COM-101`, `N9-COM-102`, `N9-COM-107`, `N9-COM-108`, `N9-COM-109`, `N9-COM-110`, `N9-COM-113`, `N9-COM-115`, `N9-COM-116`, `N9-COM-119` |
| `advanced` | 1 | `N9-COM-120` |
| **Total** | **20** | — |

### Distribuição por Mecânica

| Mecânica (`mechanic`) | Quantidade | IDs |
|---|---:|---|
| `single-choice` | 4 | `N9-COM-101`, `N9-COM-102`, `N9-COM-103`, `N9-COM-104` |
| `binary-choice` | 2 | `N9-COM-105`, `N9-COM-106` |
| `multiple-select` | 2 | `N9-COM-107`, `N9-COM-108` |
| `sequence-order` | 2 | `N9-COM-109`, `N9-COM-110` |
| `pair-match` | 3 | `N9-COM-111`, `N9-COM-112`, `N9-COM-113` |
| `categorize` | 2 | `N9-COM-114`, `N9-COM-115` |
| `fill-slot` | 2 | `N9-COM-116`, `N9-COM-117` |
| `visual-hotspot` | 2 | `N9-COM-118`, `N9-COM-119` |
| `decision-dialogue` | 1 | `N9-COM-120` |
| **Total** | **20** | — |

## 2. Elegibilidade por Curso e Gabaritos

| ID | Título | Mecânica | Dificuldade | `conceptId` | Cursos (`courses`) | Gabarito |
|---|---|---|---|---|---|---|
| `N9-COM-101` | Compromisso entre Leitura e Escrita com Índices | `single-choice` | `intermediate` | `DB-IDX-01` | `CC`, `SI`, `TADS` | `opt-a` |
| `N9-COM-102` | Ordenação Eficiente para Lista Quase Ordenada | `single-choice` | `intermediate` | `AED-SRT-01` | `CC`, `SI`, `TADS` | `opt-a` |
| `N9-COM-103` | Polimorfismo no Cálculo de Descontos Acadêmicos | `single-choice` | `introductory` | `OOP-PLY-01` | `CC`, `SI`, `TADS` | `opt-a` |
| `N9-COM-104` | Validação de Hipótese com Produto Mínimo Viável | `single-choice` | `introductory` | `PRD-MVP-01` | `SI`, `TADS`, `TGTI` | `opt-a` |
| `N9-COM-105` | Objetivo e Limite da Refatoração de Código | `binary-choice` | `introductory` | `ENG-REF-01` | `CC`, `SI`, `TADS` | `false` |
| `N9-COM-106` | Confiabilidade em Filas de Mensagens Assíncronas | `binary-choice` | `introductory` | `SYS-MSG-01` | `CC`, `SI`, `TADS`, `TGTI` | `false` |
| `N9-COM-107` | Práticas Efetivas de TI Sustentável no Campus | `multiple-select` | `intermediate` | `SUS-GRN-01` | `CC`, `SI`, `TADS`, `TGTI` | `opt-1`, `opt-2`, `opt-3` (`requiredCount: 3`) |
| `N9-COM-108` | Propriedades de um Indicador Gerencial Útil | `multiple-select` | `intermediate` | `GOV-KPI-01` | `SI`, `TADS`, `TGTI` | `opt-1`, `opt-2`, `opt-3` (`requiredCount: 3`) |
| `N9-COM-109` | Ciclo Centrado no Usuário para Redesenho de Tela | `sequence-order` | `intermediate` | `IHC-UXP-01` | `CC`, `SI`, `TADS` | `ux-1`, `ux-2`, `ux-3`, `ux-4`, `ux-5` |
| `N9-COM-110` | Sequência Estruturada de Planejamento de Projeto | `sequence-order` | `intermediate` | `PRJ-PLN-01` | `SI`, `TADS`, `TGTI` | `pln-1`, `pln-2`, `pln-3`, `pln-4`, `pln-5` |
| `N9-COM-111` | Tipos de Manutenção de Software na Prática | `pair-match` | `introductory` | `ENG-MNT-01` | `CC`, `SI`, `TADS` | `pair-1`..`pair-4` (4 pares) |
| `N9-COM-112` | Intenção dos Padrões de Projeto de Software | `pair-match` | `introductory` | `OOP-PAT-01` | `CC`, `SI`, `TADS` | `pair-1`..`pair-4` (4 pares) |
| `N9-COM-113` | Métricas de Avaliação em Modelos de Classificação | `pair-match` | `intermediate` | `ML-MTR-01` | `CC`, `SI`, `TADS`, `TGTI` | `pair-1`..`pair-4` (4 pares) |
| `N9-COM-114` | Comunicação Síncrona e Assíncrona em Serviços | `categorize` | `introductory` | `SYS-COM-01` | `CC`, `SI`, `TADS`, `TGTI` | `item-1,3,5 -> cat-sync`; `item-2,4,6 -> cat-async` |
| `N9-COM-115` | Dimensões de Qualidade de Dados na Base Acadêmica | `categorize` | `intermediate` | `DAT-QLT-01` | `CC`, `SI`, `TADS`, `TGTI` | `item-1,5 -> cat-comp`; `item-2,4 -> cat-cons`; `item-3,6 -> cat-atua` |
| `N9-COM-116` | Percurso em Lista Simplesmente Encadeada em C | `fill-slot` | `intermediate` | `C-LST-01` | `CC`, `SI`, `TADS` | `tok-1` (`atual = atual->prox;`) |
| `N9-COM-117` | Tratamento Específico na Conversão de Entrada em Python 3 | `fill-slot` | `introductory` | `PY-EXC-01` | `CC`, `SI`, `TADS` | `tok-1` (`except ValueError:`) |
| `N9-COM-118` | Transição de Aceitação em Autômato Finito | `visual-hotspot` | `introductory` | `LFA-AFD-01` | `CC` | `node-s1-to-s2-b` (Transição de S1 para S2 com símbolo `'b'`) |
| `N9-COM-119` | Identificação de Atividade Crítica com Folga Zero | `visual-hotspot` | `intermediate` | `PRJ-CPM-01` | `SI`, `TADS`, `TGTI` | `node-critical-core` (Desenvolvimento do Núcleo — Folga: 0 dias) |
| `N9-COM-120` | Equilíbrio entre Valor, Acessibilidade e Dívida Técnica | `decision-dialogue` | `advanced` | `PRD-QLT-01` | `CC`, `SI`, `TADS`, `TGTI` | `step-1: s1-c1`; `step-2: s2-c3`; `step-3: s3-c1` |

## 3. Rastreabilidade de Fontes

Todas as 20 atividades possuem **exatamente uma fonte `role: "primary"`** (`type: "official-reference"`) fundamentada nas Portarias Inep nº 154/2026 (Formação Geral), nº 157/2026 (CC), nº 168/2026 (SI), nº 169/2026 (TADS) e nº 171/2026 (TGTI), acompanhada de fonte complementar `role: "technical"` (`ISO/IEC 9075`, `ISO 9241-210`, `ISO/IEC/IEEE 14764`, `ISO/IEC 25012`, `ISO/IEC 9899`, `Python 3 Language Reference`, `W3C WCAG 2.1` ou `mapeamento-questoes-cursos-disciplinas.md`). Nenhum localizador, artigo ou URL foi inventado, mantendo `sourceVerificationNeeded: false` em todos os registros e zero ocorrências do termo restrito nos textos exibidos ao jogador.

## 4. Validação Técnica de Código (`fill-slot`)

- **`N9-COM-116` (Linguagem C — ISO/IEC 9899):**
  - Estrutura declarada com `typedef struct No { int valor; struct No *prox; } No;` e nós estáticos encadeados `n1 (10) -> n2 (20) -> n3 (30) -> NULL`.
  - Com o token correto `atual = atual->prox;`, a execução percorre exatamente três iterações (`atual = &n1`, `&n2`, `&n3`), acumula `soma = 60`, atualiza `atual` para `NULL` e encerra o laço `while (atual != NULL)` sem desreferência nula nem acesso fora dos limites, imprimindo `60`.
  - Distratores testados: `atual = atual->prox->prox;` provoca desreferência de `NULL->prox` na segunda iteração; `atual++;` realiza deslocamento contíguo inválido fora da struct; `atual->prox = atual;` provoca laço infinito.
- **`N9-COM-117` (Python 3 — Biblioteca Padrão):**
  - A função `ler_limite_vagas(entrada: str) -> int` executa `int(entrada.strip())` dentro de bloco `try`.
  - Com o token correto `except ValueError:`, a chamada `ler_limite_vagas("45")` retorna e imprime `45`, enquanto `ler_limite_vagas("abc")` captura especificamente `ValueError`, retorna e imprime `0`, sem suprimir exceções inesperadas.
  - Distratores testados: `except:` captura exceções genéricas e interrupções; `except ZeroDivisionError:` e `except IndexError:` não interceptam `ValueError`, deixando `"abc"` sem tratamento.

## 5. Validação dos Componentes Visuais (`visual-hotspot`)

- **`N9-COM-118` (Autômato Finito Determinístico):**
  - Alfabeto `{a, b}`, estado inicial `S0`, estado intermediário `S1` (com auto-laço `'a'`) e estado de aceitação `S2` (círculo duplo).
  - Rastreamento determinístico da cadeia `"aab"`: `S0 --('a')--> S1 --('a')--> S1 --('b')--> S2`. Apenas a transição `Transição de S1 para S2 com símbolo 'b'` conduz ao estado de aceitação no último símbolo. Rótulos e descrições textuais completas foram fornecidos sem exposição de IDs técnicos.
- **`N9-COM-119` (Rede de Precedência / Caminho Crítico):**
  - Dois marcos (`Dia 0` e `Dia 5`) e duas atividades paralelas com durações e folgas explicitadas: `Desenvolvimento do Núcleo` (5 dias, folga 0 dias — ramo crítico único) e `Redação do Manual` (2 dias, folga 3 dias — ramo não crítico). Não exige cálculos longos e possui resposta única.

## 6. Limitações e Compatibilidade de Esquema

- **Limitações:** As atividades permanecem em `validationStatus: "under-ai-review"`, aguardando auditoria editorial final e eventual confrontação com os Projetos Pedagógicos de Curso (PPC) antes de promoção. Na entrega original, faltavam os booleanos `correct` em duas opções de `N9-COM-107` e nas seis opções de `N9-COM-108`; a integração restaurou os valores exatamente conforme os gabaritos e feedbacks documentados, sem alterar o conteúdo pedagógico.
- **Confirmação de compatibilidade:** Todos os quatro arquivos JSON (`N9-COM-06-P1` a `N9-COM-06-P4`) respeitam `schemaVersion: 1`, `additionalProperties: false`, tipos exatos de `payload`, unicidade de `id` e `conceptId` em relação aos 100 itens anteriores (`N9-COM-001` a `N9-COM-100`), expansão de siglas na primeira ocorrência e legibilidade para telas de 360 px.
