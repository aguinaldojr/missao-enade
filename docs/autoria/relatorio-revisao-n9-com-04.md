# Relatório de Revisão Editorial Assistida por IA — Lote N9-COM-04

**Identificador do lote:** `N9-COM-04`  
**Versão do schema:** `1` (`learning-activities.schema.json` / `LearningActivityCatalog.ts`)  
**Status de validação registrado:** `under-ai-review` (todas as 20 atividades; não homologado institucionalmente)  
**Escopo curricular:** Jogo compartilhado pelos cursos **CC** (Bacharelado em Ciência da Computação), **SI** (Bacharelado em Sistemas de Informação), **TADS** (Tecnologia em Análise e Desenvolvimento de Sistemas) e **TGTI** (Tecnologia em Gestão da Tecnologia da Informação). Nenhuma atividade foi produzida para **TRC**.

> O laboratório apresenta o banco completo aos quatro cursos. O campo `courses` preserva a rastreabilidade de alinhamento explícito nas matrizes e não restringe a visibilidade das atividades no jogo compartilhado.

---

## 1. Resumo Executivo e Contagens Exatas

O lote `N9-COM-04` contém **20 atividades inéditas** (`N9-COM-061` a `N9-COM-080`), elaboradas sem repetição de títulos, contextos, `conceptId`, trechos de código, diagramas, alternativas ou feedbacks em relação aos lotes `N9-COM-01` (`001`–`020`), `N9-COM-02` (`021`–`040`) e `N9-COM-03` (`041`–`060`).

### 1.1 Distribuição por Mecânica

| Mecânica | Quantidade | IDs das Atividades |
|---|---:|---|
| `single-choice` | 4 | `N9-COM-061`, `N9-COM-062`, `N9-COM-063`, `N9-COM-064` |
| `binary-choice` | 2 | `N9-COM-065`, `N9-COM-066` |
| `multiple-select` | 2 | `N9-COM-067`, `N9-COM-068` |
| `sequence-order` | 2 | `N9-COM-069`, `N9-COM-070` |
| `pair-match` | 3 | `N9-COM-071`, `N9-COM-072`, `N9-COM-073` |
| `categorize` | 2 | `N9-COM-074`, `N9-COM-075` |
| `fill-slot` | 2 | `N9-COM-076`, `N9-COM-077` |
| `visual-hotspot` | 2 | `N9-COM-078`, `N9-COM-079` |
| `decision-dialogue` | 1 | `N9-COM-080` |
| **Total** | **20** | **`N9-COM-061` a `N9-COM-080`** |

### 1.2 Distribuição por Nível de Dificuldade

| Dificuldade | Quantidade | IDs das Atividades |
|---|---:|---|
| `introductory` | 9 | `N9-COM-061`, `N9-COM-063`, `N9-COM-065`, `N9-COM-066`, `N9-COM-071`, `N9-COM-072`, `N9-COM-073`, `N9-COM-074`, `N9-COM-079` |
| `intermediate` | 10 | `N9-COM-062`, `N9-COM-064`, `N9-COM-067`, `N9-COM-068`, `N9-COM-069`, `N9-COM-070`, `N9-COM-075`, `N9-COM-076`, `N9-COM-077`, `N9-COM-078` |
| `advanced` | 1 | `N9-COM-080` |
| **Total** | **20** | **`N9-COM-061` a `N9-COM-080`** |

### 1.3 Elegibilidade Explícita por Curso (`courses`)

O campo `courses` preserva estritamente o alinhamento curricular sustentado pelas Portarias Inep nº 157/2026 (CC), nº 168/2026 (SI), nº 169/2026 (TADS) e nº 171/2026 (TGTI), sem inventar suporte normativo para incluir cursos fora do recorte:

| Combinação de Cursos (`courses`) | Quantidade | IDs das Atividades |
|---|---:|---|
| `["CC", "SI", "TADS", "TGTI"]` | 11 | `N9-COM-061`, `N9-COM-063`, `N9-COM-065`, `N9-COM-066`, `N9-COM-068`, `N9-COM-070`, `N9-COM-071`, `N9-COM-072`, `N9-COM-075`, `N9-COM-079`, `N9-COM-080` |
| `["CC", "SI", "TADS"]` | 8 | `N9-COM-062`, `N9-COM-064`, `N9-COM-067`, `N9-COM-069`, `N9-COM-074`, `N9-COM-076`, `N9-COM-077`, `N9-COM-078` |
| `["SI", "TADS", "TGTI"]` | 1 | `N9-COM-073` |
| **Participação total por curso** | **CC: 19 / SI: 20 / TADS: 20 / TGTI: 12 / TRC: 0** | Todas as 20 atividades integram o jogo compartilhado |

---

## 2. Matriz Completa das Atividades, Gabaritos e Fontes

| ID | Título | Mecânica | Dificuldade | `conceptId` | Cursos | Gabarito | Fonte Primária (`role: "primary"`) |
|---|---|---|---|---|---|---|---|
| `N9-COM-061` | Metas de Continuidade: RTO e RPO | `single-choice` | `introductory` | `CNT-RTO-01` | CC, SI, TADS, TGTI | `opt-a` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-062` | Dependência Funcional e Redundância Relacional | `single-choice` | `intermediate` | `DB-NRM-01` | CC, SI, TADS | `opt-a` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-063` | Verificação de Assinatura Digital em Ata Acadêmica | `single-choice` | `introductory` | `SEC-SIG-01` | CC, SI, TADS, TGTI | `opt-a` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-064` | Menor Número de Saltos em Grafo Não Ponderado | `single-choice` | `intermediate` | `GRF-BFS-01` | CC, SI, TADS | `opt-a` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-065` | Compartilhamento de Memória entre Threads | `binary-choice` | `introductory` | `SO-THR-01` | CC, SI, TADS, TGTI | `true` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-066` | Escalabilidade Vertical vs. Alta Disponibilidade | `binary-choice` | `introductory` | `INF-SCL-01` | CC, SI, TADS, TGTI | `false` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-067` | Prevenção de Deadlock em Recursos Compartilhados | `multiple-select` | `intermediate` | `SO-DLK-01` | CC, SI, TADS | `opt-1`, `opt-2`, `opt-3` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-068` | Pilares de Controle de Acesso no Sistema N9 | `multiple-select` | `intermediate` | `SEC-IAM-01` | CC, SI, TADS, TGTI | `opt-1`, `opt-2`, `opt-4` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-069` | Tratamento de Falta de Página na Memória Virtual | `sequence-order` | `intermediate` | `SO-VMM-01` | CC, SI, TADS | `pf-1` → `pf-2` → `pf-3` → `pf-4` → `pf-5` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-070` | Fluxo Formal de Controle de Mudança | `sequence-order` | `intermediate` | `CFG-CHG-01` | CC, SI, TADS, TGTI | `chg-1` → `chg-2` → `chg-3` → `chg-4` → `chg-5` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-071` | Mecanismos Criptográficos e Autenticação | `pair-match` | `introductory` | `SEC-CRP-01` | CC, SI, TADS, TGTI | `pair-1`..`pair-4` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-072` | Protocolos Fundamentais na Conexão Web | `pair-match` | `introductory` | `NET-PRT-01` | CC, SI, TADS, TGTI | `pair-1`..`pair-4` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-073` | Sistemas Organizacionais por Necessidade | `pair-match` | `introductory` | `SIS-ENT-01` | SI, TADS, TGTI | `pair-1`..`pair-4` | Portarias Inep 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-074` | Anomalias em Tabela Não Normalizada | `categorize` | `introductory` | `DB-ANM-01` | CC, SI, TADS | `item-1,4→cat-ins`; `item-2,5→cat-upd`; `item-3→cat-del` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-075` | Ameaça, Vulnerabilidade e Controle em Segurança | `categorize` | `intermediate` | `SEC-RSK-01` | CC, SI, TADS, TGTI | `item-1,5→cat-thr`; `item-2,4→cat-vul`; `item-3,6→cat-ctl` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-076` | Disciplinas sem Oferta no Semestre em SQL | `fill-slot` | `intermediate` | `DB-EXS-01` | CC, SI, TADS | `tok-1` (`NOT EXISTS`) | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-077` | Percurso em Largura com deque em Python 3 | `fill-slot` | `intermediate` | `PY-DEQ-01` | CC, SI, TADS | `tok-1` (`fila.popleft()`) | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-078` | Violação de Fronteira na Arquitetura em Camadas | `visual-hotspot` | `intermediate` | `ARC-LYR-01` | CC, SI, TADS | `node-pres-pers-bypass` | Portarias Inep 157, 168 e 169/2026, arts. 4º–6º |
| `N9-COM-079` | Transição para Bloqueado no Ciclo de Processo | `visual-hotspot` | `introductory` | `SO-PRC-01` | CC, SI, TADS, TGTI | `node-blocked` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |
| `N9-COM-080` | Adoção Estratégica de Serviço em Nuvem | `decision-dialogue` | `advanced` | `CLD-DEC-01` | CC, SI, TADS, TGTI | `s1-c1`, `s2-c2`, `s3-c3` | Portarias Inep 157, 168, 169 e 171/2026, arts. 4º–6º |

---

## 3. Testes Conceituais e Análise de Distratores

- **Unicidade de resposta defensável:** Todas as 20 atividades foram verificadas para garantir apenas uma solução correta inequívoca. Em `N9-COM-061`, os distractors exploram a inversão clássica entre RTO e RPO, a confusão com política de retenção de backups e a falácia de perda zero quando o RPO é de 15 minutos. Em `N9-COM-062`, evitou-se decomposição extensa em múltiplas formas normais, focando diretamente na eliminação das dependências transitivas de `nome_estudante` e `nome_curso`.
- **Qualidade dos distratores:**
  - `N9-COM-063`: distingue autenticidade/integridade (assinatura digital) de confidencialidade (cifragem de conteúdo) e de recuperação de arquivo a partir de hash.
  - `N9-COM-064`: contrapõe BFS (camadas por número de arestas) a DFS, ordenação topológica, busca binária e pós-ordem.
  - `N9-COM-065` e `N9-COM-066`: enunciados binários objetivos que atacam diretamente concepções errôneas frequentes (isolamento de memória entre threads vs. processos; escalabilidade vertical confundida com eliminação de ponto único de falha).
  - `N9-COM-067` e `N9-COM-068`: opções corretas ancoradas diretamente nas condições de Coffman (ordenamento global, alocação integral prévia e preempção voluntária) e nos pilares de IAM (menor privilégio, autenticação prévia e trilha de auditoria), contra práticas inseguras plausíveis (aumentar timeout, credencial compartilhada, ocultação apenas no front-end).
  - `N9-COM-074` e `N9-COM-075`: itens curtos e autocontidos que discriminam sem sobreposição as três categorias de anomalias relacionais e os conceitos de ameaça, vulnerabilidade e controle.

---

## 4. Validação Técnica de SQL (`N9-COM-076`) e Python (`N9-COM-077`)

### 4.1 Validação do SQL (`N9-COM-076`)

- **Esquema e dados mínimos:**
  - `disciplinas(codigo, nome)`: `('ALG', 'Algoritmos')`, `('BD1', 'Banco de Dados')`, `('RC1', 'Redes')`.
  - `ofertas(id_oferta, codigo_disc, semestre)`: `(10, 'ALG', '2026.2')`, `(11, 'BD1', '2026.2')`.
- **Consulta completa montada com o token correto (`NOT EXISTS`):**
  ```sql
  SELECT d.codigo, d.nome
  FROM disciplinas d
  WHERE NOT EXISTS (
    SELECT 1
    FROM ofertas o
    WHERE o.codigo_disc = d.codigo
      AND o.semestre = '2026.2'
  )
  ORDER BY d.codigo;
