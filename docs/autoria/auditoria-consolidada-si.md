# N9 — Jornada Digital: auditoria consolidada do banco de Sistemas de Informação

Auditoria documental assistida por IA — 17/11/2026. Esta entrega consolida o banco planejado de SI, registra divergências e estabelece congelamento editorial. Não modifica questões, gabaritos, JSON, schemas, seleção, interface ou progresso.

## 1. Decisão executiva

**Resultado: APTO COMO BANCO EDITORIAL CONGELADO, COM CORREÇÕES TÉCNICAS E DE RASTREABILIDADE ANTES DA INTEGRAÇÃO.**

O banco planejado fecha três jornadas distintas de 25 questões, cada uma com cinco comuns e vinte técnicas, duas técnicas por macroárea e distribuição 9 introductory, 11 intermediate e 5 advanced. Os 75 IDs são únicos entre as três jornadas. Não foi identificado erro comprovado de gabarito nem déficit de área ou dificuldade.

“Congelado” significa que os enunciados, alternativas, gabaritos, dificuldades e vínculos de macroárea não devem ser alterados durante a autoria dos próximos cursos. Qualquer mudança futura exige registro de correção vinculado a esta auditoria. O congelamento não significa publicação, aprovação institucional nem integração automática.

## 2. Escopo examinado

- dez questões comuns executáveis `E26-Q-COM-01` a `E26-Q-COM-10`;
- cinco questões comuns documentais `E26-Q-COM-11` a `E26-Q-COM-15`;
- dezesseis questões SI executáveis `E26-Q-SI-01` a `E26-Q-SI-16`;
- trinta questões SI documentais `E26-Q-SI-17` a `E26-Q-SI-46`;
- quatorze questões executáveis de outros lotes propostas como compartilhadas com SI;
- dez lotes SI, melhorias visuais das questões existentes, plano de revisão, padrão editorial, governança assistida por IA, contratos, schemas e catálogo atual.

### 2.1 Inventário consolidado

| Grupo | Executável agora | Somente documental | Total planejado |
|---|---:|---:|---:|
| Comuns | 10 | 5 | 15 |
| Técnicas com classification SI | 16 | 30 | 46 |
| Técnicas compartilhadas de outros lotes | 14 | 0, mas sem elegibilidade SI no JSON atual | 14 |
| **Banco elegível planejado para SI** | **40 candidatos existentes** | **35 novos** | **75** |

Os 75 itens correspondem a 15 comuns e 60 técnicas. Não são 75 questões para uma única partida: formam três jornadas iniciais de 25 sem repetição e um banco para sorteio posterior.

## 3. Cobertura das dez macroáreas técnicas

| Macroárea | IDs do núcleo de seis | I/M/A | Resultado |
|---|---|---|---|
| SI-M01 — Raciocínio quantitativo | SI-09, CC-08, SI-17, SI-18, SI-19, SI-20 | 2/3/1 | completa |
| SI-M02 — Algoritmos e programação | CC-01, TADS-02, TADS-04, SI-21, SI-22, SI-23 | 2/3/1 | completa |
| SI-M03 — Fundamentos de sistemas | SI-11, SI-12, SI-13, SI-14, SI-15, SI-16 | 2/3/1 | completa e já executável |
| SI-M04 — Arquitetura e governança | SI-01, SI-06, TGTI-01, TGTI-05, SI-24, SI-25 | 2/3/1 | completa |
| SI-M05 — Infraestrutura e distribuídos | TRC-01, TRC-03, SI-26, SI-27, SI-28, SI-29 | 2/3/1 | completa |
| SI-M06 — Engenharia, modelagem e projetos | SI-05, SI-08, SI-10, TADS-01, TADS-03, TADS-09 | 2/2/2 | completa |
| SI-M07 — Processos e informação | SI-03, SI-04, SI-30, SI-31, SI-32, SI-33 | 2/3/1 | completa |
| SI-M08 — IHC e segurança | TRC-07, SI-34, SI-35, SI-36, SI-37, SI-38 | 2/3/1 | completa |
| SI-M09 — Dados | SI-02, SI-07, TADS-05, TGTI-06, SI-39, SI-40 | 2/3/1 | completa |
| SI-M10 — Informática e sociedade | SI-41, SI-42, SI-43, SI-44, SI-45, SI-46 | 2/2/2 | completa |
| **Total técnico** | **60 IDs únicos** | **20/28/12** | **meta atendida** |

Os prefixos de outros cursos indicam o lote de origem, não a elegibilidade final. O compartilhamento só poderá ser ativado após incluir SI em `courses`, preservar a fonte normativa do curso de origem, acrescentar F07 e registrar o localizador de SI correspondente.

## 4. Três jornadas iniciais

| Jornada | Comuns | Técnicas por macroárea | I/M/A | IDs |
|---|---:|---:|---|---:|
| A | 5 | 2 × 10 | 9/11/5 | 25 únicos |
| B | 5 | 2 × 10 | 9/11/5 | 25 únicos |
| C | 5 | 2 × 10 | 9/11/5 | 25 únicos |
| **Total** | **15** | **60** | **27/33/15** | **75 únicos** |

### 4.1 Questões comuns por jornada

| Jornada | IDs |
|---|---|
| A | COM-01, COM-02, COM-11, COM-05, COM-09 |
| B | COM-03, COM-12, COM-06, COM-07, COM-10 |
| C | COM-04, COM-13, COM-08, COM-14, COM-15 |

### 4.2 Questões técnicas por jornada

| Jornada | IDs, na ordem das macroáreas M01–M10 |
|---|---|
| A | SI-17/SI-09; CC-01/TADS-04; SI-11/SI-12; SI-24/SI-25; TRC-01/SI-26; TADS-01/SI-05; SI-30/SI-31; SI-34/TRC-07; SI-02/SI-07; SI-41/SI-42 |
| B | CC-08/SI-18; SI-21/SI-22; SI-13/SI-14; SI-01/SI-06; SI-27/SI-28; TADS-03/SI-10; SI-03/SI-04; SI-35/SI-36; SI-39/TADS-05; SI-43/SI-44 |
| C | SI-19/SI-20; TADS-02/SI-23; SI-15/SI-16; TGTI-01/TGTI-05; TRC-03/SI-29; SI-08/TADS-09; SI-32/SI-33; SI-37/SI-38; TGTI-06/SI-40; SI-45/SI-46 |

Não há repetição de ID dentro de uma jornada nem entre as três jornadas.

## 5. Dificuldades e gabaritos

### 5.1 Distribuição de dificuldade

| Recorte | Introductory | Intermediate | Advanced | Total |
|---|---:|---:|---:|---:|
| Quinze comuns | 7 | 5 | 3 | 15 |
| Sessenta técnicas | 20 | 28 | 12 | 60 |
| Jornada A | 9 | 11 | 5 | 25 |
| Jornada B | 9 | 11 | 5 | 25 |
| Jornada C | 9 | 11 | 5 | 25 |
| Banco completo | 27 | 33 | 15 | 75 |

### 5.2 Distribuição de gabaritos

| Recorte | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| Jornada A | 3 | 5 | 6 | 7 | 4 |
| Jornada B | 7 | 6 | 6 | 1 | 5 |
| Jornada C | 5 | 3 | 4 | 8 | 5 |
| **Banco completo** | **15** | **14** | **16** | **16** | **14** |

A distribuição global é equilibrada. Há concentração local de D na jornada C e apenas um D na B, mas não se recomenda alterar respostas corretas para equilibrar letras. A ordem de apresentação futura deve embaralhar questões de modo determinístico e testável, sem alterar alternativas.

## 6. Qualidade editorial e experiência

### 6.1 Verificações aprovadas

- Os 41 itens presentes nos dez lotes documentais possuem cinco alternativas, cinco feedbacks e exatamente uma declaração de gabarito.
- Os 41 IDs são únicos; seis deles, SI-11 a SI-16, também estão no JSON porque já foram integrados anteriormente.
- Não foi encontrada a referência pedagógica interna reservada nos trechos destinados ao jogador dos novos lotes.
- Todos os novos itens permanecem `under-ai-review`. No conjunto de 75, SI-02 e SI-05 são os únicos `ready-for-pilot`; os outros 73 estão `under-ai-review`.
- Cada lote registra segunda passagem de revisão assistida por IA, limites, acessibilidade prevista e pendências externas.
- Os formatos variam entre código, tabelas, diagramas, logs, processos, arquiteturas, painéis, gráficos e decisões profissionais.
- Os objetos visuais possuem descrição ou equivalente textual previsto e não dependem exclusivamente de cor.
- Os cálculos explícitos de lógica, conjuntos, percentuais, custos e matrizes foram conferidos documentalmente.

### 6.2 Compatibilidade com o contrato visual

O contrato atual aceita `code`, `table`, `diagram` e `image`, com até oito blocos. Os novos materiais podem ser preservados da seguinte forma:

| Proposta editorial | Conversão compatível |
|---|---|
| Código C, Python, SQL, log ou licença | `code` com linguagem correspondente ou `text` |
| Tabela, painel, matriz ou série | `table` |
| Fluxo, arquitetura, ciclo ou linha do tempo | `diagram` quando houver relações; `table` quando a ordem textual for mais clara |
| Gráfico | `image` com `alt` completo e tabela equivalente, ou somente `table` |

Não é necessário criar um segundo sistema de apresentação. Interatividade visual adicional pode ficar para etapa posterior sem perda do conteúdo avaliativo.

## 7. Achados e correções exigidas antes da integração

| Código | Gravidade | Achado | Ação necessária | Estado |
|---|---|---|---|---|
| SI-AUD-01 | média | `plano-revisao-si.md` ainda conta dez SI confirmadas, mas SI-11 a SI-16 já estão no JSON. | Atualizar o inventário e marcar M03 como executável ao preparar a integração consolidada. | pendente documental |
| SI-AUD-02 | alta | As 14 compartilhadas possuem apenas o curso de origem em `courses` e classification diferente de SI; o seletor atual não as conta na cota técnica de SI. | Migrar a seleção para elegibilidade explícita por curso e macroárea, acrescentar SI com fontes/traceability próprias e testar ausência de cruzamento indevido. | bloqueia integração |
| SI-AUD-03 | alta | SI-17 a SI-46 e COM-11 a COM-15 ainda não existem no inventário executável nem em JSON. | Registrar IDs, converter sem reescrever e validar schemas após a auditoria global dos cursos. | esperado; bloqueia integração |
| SI-AUD-04 | média | Os incisos individuais de lógica/matemática/estatística, algoritmos/programação, IHC e informática/sociedade não estão seguros na pesquisa local. | Reconfirmar o texto integral de F07 e registrar o localizador correto; não inferir numeração. | pendente de fonte |
| SI-AUD-05 | média | Python e C dos lotes SI-21, SI-22, SI-23 e SI-29 foram simulados, mas não executados nativamente; o atalho `python.exe` local não inicia e não há GCC/Clang. | Executar snippets em ambiente controlado na conversão final e comparar saídas documentadas. | pendente técnico |
| SI-AUD-06 | média | Dashboards, gráficos e linhas do tempo não são tipos próprios do schema. | Converter para `table`, `diagram` ou `image` acessível, preservando descrição e valores; não criar tipo novo sem necessidade comprovada. | mitigado por mapeamento |
| SI-AUD-07 | baixa | Algumas fichas resumem a fonte em campo singular, embora o contrato executável use `sources`. | Na conversão, produzir `sources`, exatamente uma `primary`, complementares com papéis corretos e `traceability` sem perdas. | objetivo e seguro |
| SI-AUD-08 | baixa | Cotejo externo de originalidade, calibração com estudantes, PPC e homologação humana de acessibilidade não foram realizados. | Manter como limitações externas; não inventar validação. | pendente externo |

Nenhum achado exige mudar agora enunciado, alternativa, gabarito, dificuldade ou recompensa.

## 8. Estado editorial congelado

Ficam congelados:

- `E26-Q-COM-01` a `E26-Q-COM-15` para as três jornadas de SI;
- `E26-Q-SI-01` a `E26-Q-SI-46`;
- os quatorze compartilhamentos listados na seção 3, condicionados à correção de elegibilidade;
- a matriz de dez macroáreas, seis técnicas por macroárea e duas por jornada;
- as distribuições 7/5/3 para comuns, 20/28/12 para técnicas e 9/11/5 por jornada.

O congelamento autoriza avançar ao próximo curso sem integrar SI. A conversão e a integração devem ocorrer somente após as auditorias dos demais cursos, em uma etapa global controlada.

## 9. Próximo curso recomendado

O próximo curso recomendado é **Ciência da Computação (CC)**, por ser o bacharelado tecnicamente mais próximo de SI e permitir reutilizar o método de dez macroáreas sem copiar recortes profissionais. A nova matriz deverá preservar diferenças: maior profundidade em fundamentos computacionais, estruturas, teoria, sistemas, inteligência artificial e construção de soluções, enquanto SI mantém ênfase sociotécnica, organizacional e informacional.
