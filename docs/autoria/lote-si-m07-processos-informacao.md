# N9 — Jornada Digital: lote SI-M07 — Processos de negócio e informação

Autoria documental assistida por IA — 17/11/2026. Este lote cria quatro candidatas inéditas para os slots restantes de `SI-M07 — Modelagem e gestão de processos de negócio e da informação`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-A-M07-N01 | E26-Q-SI-30 | A | intermediate | C | Processo BPMN simplificado |
| SI-A-M07-N02 | E26-Q-SI-31 | A | advanced | E | Log de execução e ciclo de retrabalho |
| SI-C-M07-N01 | E26-Q-SI-32 | C | introductory | A | Eventos brutos e cartão de indicador |
| SI-C-M07-N02 | E26-Q-SI-33 | C | intermediate | D | Fluxo informacional e qualidade dos dados |

Com `E26-Q-SI-03` (`introductory`) e `E26-Q-SI-04` (`intermediate`), a macroárea alcança **2 introductory, 3 intermediate e 1 advanced**.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta SI-I e modelagem/gestão de processos de negócio e informação no inciso XV. Não fornece os cenários ou respostas. |
| technical | OMG, Business Process Model and Notation 2.0.2 | Apoia a semântica geral dos gateways em SI-30. O diagrama didático não pretende cobrir toda a especificação. |
| technical | ISO/IEC 25012:2008, Data quality model | Apoia os conceitos gerais de requisitos e avaliação de qualidade de dados em SI-33. Apenas a página oficial e o resumo público foram consultados. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- BPMN 2.0.2: `https://www.omg.org/spec/BPMN/2.0.2/`.
- ISO/IEC 25012: `https://www.iso.org/standard/35736.html`; a página oficial informa que a edição de 2008 foi confirmada em 2025.
- Processos, eventos, tempos, regras e organizações são fictícios. As questões fornecem as premissas necessárias e não exigem acesso às fontes durante a partida.

## 2. E26-Q-SI-30 — Duas verificações antes de liberar o pedido

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-30 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M07-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Modelagem e gestão de processos de negócio e da informação |
| Rastreabilidade | SI-M07 / SI-I; F07, art. 5º, I; art. 6º, XV |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar gateways coerentes com atividades paralelas obrigatórias e sincronização antes da continuação. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; processo e respostas são autorais e fictícios. |
| Complemento documental | T17 — OMG BPMN 2.0.2; gateways de divergência e convergência. |
| Complemento documental URL | https://www.omg.org/spec/BPMN/2.0.2/ |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Modelar paralelismo e sincronização de atividades obrigatórias em processo de negócio.

### Objeto visual proposto — trecho do processo

```text
                         ┌─> [ANALISAR CRÉDITO] ─┐
[VALIDAR PEDIDO] -> (G1)                         (G2) -> [LIBERAR PEDIDO]
                         └─> [VERIFICAR ESTOQUE] ┘
```

Regras do caso: as duas verificações começam assim que o pedido é validado; são independentes; liberar o pedido exige que **ambas** tenham terminado com resultado favorável. Tratamento de reprovação fica fora deste trecho.

### Texto ao jogador

**Enunciado.** Quais gateways representam corretamente G1 e G2?

- **A.** G1 exclusivo e G2 exclusivo, escolhendo apenas uma verificação.
- **B.** G1 baseado em evento e G2 exclusivo, continuando com a primeira resposta recebida.
- **C.** G1 paralelo para iniciar os dois ramos e G2 paralelo para sincronizá-los antes da liberação.
- **D.** G1 inclusivo sem condições e G2 ausente, permitindo que qualquer ramo libere o pedido.
- **E.** Nenhum gateway; executar sempre crédito e depois estoque de forma sequencial.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** A divergência paralela cria os dois ramos obrigatórios. A convergência paralela aguarda a conclusão dos dois antes de emitir o fluxo para a liberação.

| Alternativa | Feedback |
|---|---|
| A | Gateway exclusivo seleciona um caminho, mas o caso exige os dois. |
| B | A primeira resposta não substitui a outra verificação obrigatória. |
| C | Correta: inicia atividades independentes e sincroniza ambas. |
| D | Sem sincronização, um único ramo poderia avançar indevidamente. |
| E | A sequência poderia funcionar, mas contraria o paralelismo explícito e amplia o tempo sem necessidade. |

**Atratividade e acessibilidade:** o fluxo pode animar dois marcadores simultâneos; rótulos “iniciar ambos” e “aguardar ambos” e uma descrição linear evitam dependência de símbolo ou movimento.

## 3. E26-Q-SI-31 — O formulário volta antes de chegar à análise

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-31 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M07-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Modelagem e gestão de processos de negócio e da informação |
| Rastreabilidade | SI-M07 / SI-I; F07, art. 5º, I; art. 6º, XV |
| difficulty | advanced |
| Objetivo pedagógico | Integrar log de execução, retrabalho, tempo de espera e controle preventivo na proposta de redesenho. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; processo, log, tempos e respostas são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Usar evidências de execução para redesenhar um processo sem confundir redução local de atividade com redução do ciclo completo.

### Objeto visual proposto — fluxo atual e amostra do log

```text
[ENVIAR] -> [TRIAR] -> documento incompleto? --sim--> [DEVOLVER] --nova versão--> [TRIAR]
                         |
                        não
                         v
                      [ANALISAR]
```

| Caso | Completo no primeiro envio? | Devoluções | Trabalho ativo | Espera por correção | Tempo total |
|---|---|---:|---:|---:|---:|
| P1 | sim | 0 | 6 min | 0 min | 6 min |
| P2 | não | 2 | 8 min | 22 min | 30 min |
| P3 | não | 1 | 7 min | 12 min | 19 min |
| P4 | sim | 0 | 6 min | 0 min | 6 min |
| P5 | não | 2 | 9 min | 25 min | 34 min |

Premissa: os campos obrigatórios e formatos aceitos já são conhecidos; exceções legítimas devem continuar com tratamento humano.

### Texto ao jogador

**Enunciado.** Qual redesenho enfrenta o padrão observado e produz evidência para verificar a melhoria?

- **A.** Acelerar apenas a atividade Analisar, que ainda não foi alcançada nos ciclos de devolução.
- **B.** Excluir do indicador todos os casos devolvidos, reduzindo artificialmente o tempo médio divulgado.
- **C.** Proibir exceções e encerrar automaticamente qualquer solicitação incompleta, sem orientar correção.
- **D.** Criar mais uma triagem depois da análise, mantendo o mesmo envio incompleto na entrada.
- **E.** Validar campos e formatos antes do primeiro envio, orientar correções, preservar rota humana para exceções e comparar devoluções e tempo total antes/depois.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** Os casos completos terminam em seis minutos; os incompletos acumulam devoluções e espera. A ação preventiva atua antes do ciclo, sem eliminar exceções, e mede tanto retrabalho quanto resultado ponta a ponta.

| Alternativa | Feedback |
|---|---|
| A | O maior acréscimo está no ciclo anterior à análise e na espera por correção. |
| B | Retirar casos difíceis do indicador não melhora o processo nem preserva comparabilidade. |
| C | Encerrar sem orientação troca retrabalho interno por falha no atendimento. |
| D | Uma verificação tardia não impede a entrada incompleta nem a primeira devolução. |
| E | Correta: atua na causa observada, mantém exceções e define métricas verificáveis. |

**Atratividade e acessibilidade:** o jogo pode destacar o caminho percorrido por cada caso e somar tempos; todos os valores e estados permanecem em tabela e texto.

## 4. E26-Q-SI-32 — Do registro ao indicador útil

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-32 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M07-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Modelagem e gestão de processos de negócio e da informação |
| Rastreabilidade | SI-M07 / SI-I e SI-II; F07, art. 5º, I–II; art. 6º, XV |
| difficulty | introductory |
| Objetivo pedagógico | Distinguir registros brutos de informação contextualizada para uma decisão definida. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; eventos, objetivo e respostas são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Transformar dados de eventos em informação com definição, período, contexto e finalidade decisória.

### Objeto visual proposto — registros disponíveis

```text
S1  08:03 aberta
S1  08:18 encerrada
S2  08:07 aberta
S2  09:40 abandonada
S3  08:12 aberta
S3  08:30 encerrada
S3  10:05 reaberta
```

Objetivo da pessoa gestora: decidir se deve investigar abandono e encerramentos que não resolvem o problema na primeira vez.

### Texto ao jogador

**Enunciado.** Qual produto transforma os registros em informação adequada ao objetivo?

- **A.** Um indicador com período e regras explícitas para taxa de abandono e resolução sem reabertura, acompanhado das contagens que formam cada taxa.
- **B.** A mesma sequência de linhas, sem definição de período ou significado para os estados.
- **C.** Apenas o número total de eventos, somando abertura, encerramento, abandono e reabertura como equivalentes.
- **D.** Uma lista alfabética dos identificadores, sem relacioná-los aos estados seguintes.
- **E.** O horário do primeiro registro, apresentado como medida de qualidade de todo o atendimento.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** Informação útil relaciona os dados a definições, contexto temporal e decisão. Abandono e reabertura representam resultados distintos e precisam de numeradores, denominadores e período claros.

| Alternativa | Feedback |
|---|---|
| A | Correta: organiza os eventos com significado, contexto e finalidade decisória. |
| B | Mantém dados brutos sem produzir uma medida interpretável. |
| C | Somar eventos semanticamente diferentes perde o significado do processo. |
| D | Ordenação por identificador não responde ao objetivo apresentado. |
| E | Um único horário não representa abandono nem resolução sustentada. |

**Atratividade e acessibilidade:** cartões de eventos podem ser agrupados em “abandono” e “reabertura”, sempre acompanhados de tabela e fórmulas textuais.

## 5. E26-Q-SI-33 — Três status para o mesmo pedido

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-33 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M07-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Modelagem e gestão de processos de negócio e da informação |
| Rastreabilidade | SI-M07 / SI-I e SI-II; F07, art. 5º, I–II; art. 6º, XV |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar controles de qualidade e rastreabilidade para informação compartilhada entre etapas do processo. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; pedido, sistemas e respostas são autorais e fictícios. |
| Complemento documental | T18 — ISO/IEC 25012:2008; modelo geral de qualidade de dados, consultado no resumo oficial. |
| Complemento documental URL | https://www.iso.org/standard/35736.html |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Definir propriedade, significado, origem, atualização e tratamento de divergências para informação usada em processo interfuncional.

### Objeto visual proposto — painel do pedido P84

| Sistema/etapa | Campo exibido | Valor | Atualizado | Origem declarada |
|---|---|---|---|---|
| Vendas | `situação` | aprovado | 10:02 | decisão comercial |
| Financeiro | `status` | suspenso | 10:04 | confirmação de pagamento |
| Portal | `estado` | aprovado | 08:00 | cache sem origem exibida |

Regra do processo: Vendas aprova a condição comercial; Financeiro autoriza ou suspende a liberação após pagamento; o Portal deve mostrar a situação vigente para a pessoa solicitante.

### Texto ao jogador

**Enunciado.** Qual ação trata a divergência e reduz sua repetição em novos pedidos?

- **A.** Escolher sempre o valor mais antigo, pois ele existia antes dos demais.
- **B.** Renomear todos os três campos para `status`, sem definir significado ou origem.
- **C.** Permitir que cada equipe sobrescreva diretamente os outros sistemas quando discordar.
- **D.** Definir significado e proprietário por informação, registrar origem e horário, sincronizar a decisão financeira ao Portal e monitorar divergências/exceções.
- **E.** Ocultar os horários para que as diferenças pareçam menos contraditórias.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** Os campos não representam necessariamente a mesma decisão: aprovação comercial e liberação financeira são etapas distintas. Definir semântica, autoridade, linhagem e sincronização permite exibir o estado vigente e investigar exceções.

| Alternativa | Feedback |
|---|---|
| A | Antiguidade não determina vigência nem autoridade da informação. |
| B | Igualar nomes não resolve diferenças de significado, origem ou atualização. |
| C | Escrita cruzada sem responsabilidade aumenta conflito e reduz rastreabilidade. |
| D | Correta: combina semântica, propriedade, atualidade, origem e controle de divergência. |
| E | Retirar evidência temporal dificulta o diagnóstico e não corrige o processo. |

**Atratividade e acessibilidade:** o painel pode mostrar uma linha do tempo do pedido e selos textuais “comercial”, “financeiro” e “exibido”; a resposta não depende de cor.

## 6. Segunda passagem independente de revisão assistida por IA

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-30 | As duas atividades são obrigatórias e independentes; C é a única opção que abre e sincroniza ambos os ramos. | O tratamento de resultados negativos foi explicitamente retirado do trecho para não exigir gateway adicional. | manter `under-ai-review` |
| SI-31 | Casos incompletos concentram devoluções e espera; E atua antes do ciclo, preserva exceção e mede resultado completo. | A amostra demonstra associação operacional no caso, não causalidade universal nem estimativa estatística externa. | manter `under-ai-review` |
| SI-32 | Somente A acrescenta definição, período, contexto e finalidade aos eventos. | O item avalia dado versus informação em situação aplicada, sem exigir fórmula não fornecida. | manter `under-ai-review` |
| SI-33 | D distingue decisões comercial/financeira e governa origem, vigência e sincronização. | O resumo público da ISO apoia a qualidade de dados; a solução decorre das regras explícitas do caso. | manter `under-ai-review` |

## 7. Auditoria rápida do lote

- Quatro IDs novos e distintos: `E26-Q-SI-30` a `E26-Q-SI-33`; nenhum aparece em outro lote.
- Quatro questões com cinco alternativas, feedback A–E e um único gabarito: C/E/A/D.
- Dificuldades: uma `introductory`, duas `intermediate` e uma `advanced`, exatamente a lacuna de SI-M07.
- Conceitos clássicos priorizados: gateways BPMN, paralelismo/sincronização, ciclo e retrabalho, dado versus informação, semântica, propriedade, atualidade e rastreabilidade.
- Contextos profissionais e objetos variados: fluxo, log de eventos, tabela de tempos, indicador e painel de qualidade.
- Não há repetição de SI-03 (gargalo por parecer) ou SI-04 (confirmação de entrega). SI-30 trata sincronização; SI-31 prevenção de retrabalho; SI-32 transformação informacional; SI-33 qualidade entre etapas.
- Nenhum texto ao jogador exibe a referência pedagógica interna reservada ou apresenta sistemas fictícios como reais.
- Permanecem pendentes: teste com estudantes, cotejo externo, calibração, acesso integral à ISO e homologação humana de acessibilidade.
- Nenhum item foi convertido para JSON ou promovido para `ready-for-pilot`.

## 8. Preparação para etapa futura

Na integração final, fluxos devem possuir descrição linear, tabelas precisam virar cartões no celular e animações devem respeitar movimento reduzido. Símbolos BPMN terão rótulos textuais. Indicadores devem exibir definição, numerador, denominador e período próximos ao gráfico.
