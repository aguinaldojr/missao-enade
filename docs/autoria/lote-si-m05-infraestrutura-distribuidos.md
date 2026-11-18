# N9 — Jornada Digital: lote SI-M05 — Infraestrutura e sistemas distribuídos

Autoria documental assistida por IA — 17/11/2026. Este lote cria quatro candidatas inéditas para os slots restantes de `SI-M05 — Computadores, sistemas operacionais, redes e sistemas distribuídos`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-A-M05-N01 | E26-Q-SI-26 | A | intermediate | C | Painel de processos e recursos |
| SI-B-M05-N01 | E26-Q-SI-27 | B | intermediate | A | Diagrama de eventos e log duplicado |
| SI-B-M05-N02 | E26-Q-SI-28 | B | advanced | E | Gráfico de retentativas e arquitetura |
| SI-C-M05-N01 | E26-Q-SI-29 | C | intermediate | B | Código Python e telemetria do SO |

Com os compartilhamentos planejados `E26-Q-TRC-01` e `E26-Q-TRC-03`, ambos `introductory`, a macroárea alcança **2 introductory, 3 intermediate e 1 advanced**. Esses compartilhamentos continuam documentais e dependem de rastreabilidade própria de SI.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta SI-I e os objetos de sistemas operacionais, redes e sistemas distribuídos nos incisos X–XI. Arquitetura de computadores permanece sem inciso individual confirmado no plano local. |
| technical | Google SRE Book — Addressing Cascading Failures | Apoia retentativas limitadas, orçamento e backoff aleatorizado em SI-28; não é norma institucional. |
| technical | Python 3 documentation — `open` e gerenciadores de contexto | Apoia o fechamento determinístico do arquivo em SI-29. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- Google SRE: `https://sre.google/sre-book/addressing-cascading-failures/`.
- Python: `https://docs.python.org/3/library/functions.html#open` e `https://docs.python.org/3/reference/datamodel.html#context-managers`.
- Cenários, sistemas, medições, contratos de entrega e logs são fictícios. As referências técnicas não transformam a solução de cada caso em recomendação universal.

## 2. E26-Q-SI-26 — Três processos, três tipos de espera

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-26 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M05-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Computadores, sistemas operacionais, redes e sistemas distribuídos |
| Rastreabilidade | SI-M05 / SI-I; F07, art. 5º, I; art. 6º, X |
| difficulty | intermediate |
| Objetivo pedagógico | Diferenciar processo pronto para CPU, processo bloqueado por E/S e espera por comunicação. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; infraestrutura, painel e respostas são autorais e fictícios. |
| Complemento documental | Modelo fechado de estados e recursos de processos; todas as evidências necessárias estão no painel. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Relacionar estados de processos, uso de CPU e esperas de E/S às respectivas hipóteses de diagnóstico.

### Objeto visual proposto — painel do sistema operacional

| Processo | Estado predominante | CPU | Espera de disco | Evidência associada |
|---|---|---:|---:|---|
| Relatórios | pronto/em execução | 88% | 2% | fila de cálculos cresce |
| Importação | bloqueado por E/S | 8% | 75% | fila do disco com 18 operações |
| API | esperando resposta de comunicação | 6% | 1% | timeouts no serviço remoto |

Máquina durante a janela: CPU total em 72%, memória em 54% e nenhum processo encerrado. Os três processos são independentes.

### Texto ao jogador

**Enunciado.** Qual interpretação orienta corretamente a investigação inicial?

- **A.** Os três processos precisam igualmente de mais CPU, pois todo estado de espera representa falta de processamento.
- **B.** Importação é limitada por CPU, enquanto Relatórios aguarda exclusivamente o disco.
- **C.** Relatórios apresenta demanda de CPU; Importação espera E/S de disco; API aguarda comunicação. Cada hipótese deve ser medida no recurso correspondente.
- **D.** API e Importação estão prontas para executar, mas o escalonador escolheu manter ambas paradas.
- **E.** A memória em 54% prova que os três problemas decorrem de paginação intensa.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** Um processo pronto/em execução com alto uso sugere trabalho limitado por CPU. Um processo bloqueado e com alta espera de disco depende de E/S. A API aguarda resposta externa. O estado de espera não significa, por si só, falta de CPU.

| Alternativa | Feedback |
|---|---|
| A | Espera pode decorrer de E/S ou comunicação; adicionar CPU não atende automaticamente esses estados. |
| B | Os estados e percentuais mostram exatamente a relação inversa. |
| C | Correta: associa cada estado ao recurso e evita uma solução única para causas diferentes. |
| D | Processos bloqueados ou esperando evento não estão apenas aguardando escolha do escalonador. |
| E | O painel não mostra pressão de memória nem paginação como evidência dominante. |

**Atratividade e acessibilidade:** cada processo pode ser um cartão animado entre “pronto”, “executando” e “bloqueado”, sempre com estado escrito e painel tabular equivalente.

## 3. E26-Q-SI-27 — A mensagem voltou e o estoque baixou duas vezes

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-27 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M05-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Computadores, sistemas operacionais, redes e sistemas distribuídos |
| Rastreabilidade | SI-M05 / SI-I e SI-II; F07, art. 5º, I–II; art. 6º, XI |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar tratamento idempotente para entrega repetida sob premissas transacionais explícitas. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; contrato, evento, log e respostas são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Aplicar identidade de evento e atomicidade para impedir repetição de efeito em processamento distribuído.

### Objeto visual proposto — fluxo e log

```text
[PEDIDOS] -- evento EVT-91 --> [BARRAMENTO] --> [ESTOQUE]
                                      ^              |
                                      | sem ACK      | reserva e falha antes do ACK
                                      +--------------+
```

```text
14:02:01 receber EVT-91 pedido=P7 quantidade=2
14:02:01 reservar P7 quantidade=2
14:02:02 processo reiniciado antes de confirmar recebimento
14:02:05 receber EVT-91 pedido=P7 quantidade=2
14:02:05 reservar P7 quantidade=2
```

Premissas: o barramento pode repetir uma entrega até receber confirmação; `eventId` é único; a gravação de evento processado e a alteração do estoque podem ocorrer na mesma transação local.

### Texto ao jogador

**Enunciado.** Qual mudança impede a segunda reserva sem perder uma entrega válida?

- **A.** Na mesma transação, inserir `eventId` em uma tabela com unicidade e alterar o estoque; se o ID já existir, confirmar a mensagem sem repetir a alteração.
- **B.** Confirmar toda mensagem antes de alterar o estoque, mesmo que o processo possa falhar logo depois.
- **C.** Considerar duplicada qualquer mensagem recebida até cinco segundos após a anterior, mesmo com outro `eventId`.
- **D.** Gerar um novo `eventId` no consumidor a cada recebimento para distinguir as tentativas.
- **E.** Reduzir o estoque e depois pesquisar o log textual; se encontrar duplicata, tentar somar o valor novamente.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A unicidade reconhece a mesma operação em novas entregas, e a transação evita registrar apenas metade do efeito. Uma repetição encontra EVT-91 já concluído e pode ser confirmada sem reservar novamente.

| Alternativa | Feedback |
|---|---|
| A | Correta: combina identidade estável, deduplicação e atomicidade sob as premissas do caso. |
| B | Uma falha após confirmação e antes da reserva pode perder uma operação válida. |
| C | Tempo próximo não define identidade; eventos diferentes podem ser legítimos. |
| D | Trocar o identificador elimina a capacidade de reconhecer a repetição. |
| E | Repetir a soma amplia o erro e um log textual não garante atomicidade. |

**Atratividade e acessibilidade:** a animação futura pode repetir o cartão EVT-91 e marcar “já processado”; diagrama e log possuem descrição textual e ordem explícita.

## 4. E26-Q-SI-28 — Quando todas as camadas tentam de novo

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-28 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M05-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Computadores, sistemas operacionais, redes e sistemas distribuídos |
| Rastreabilidade | SI-M05 / SI-I; F07, art. 5º, I; art. 6º, XI |
| difficulty | advanced |
| Objetivo pedagógico | Relacionar timeout, retentativa, sobrecarga e disponibilidade em comunicação distribuída. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; topologia, medições e respostas são autorais e fictícios. |
| Complemento documental | T15 — Google SRE Book, Addressing Cascading Failures. |
| Complemento documental URL | https://sre.google/sre-book/addressing-cascading-failures/ |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Integrar timeout, classificação de falhas e limite de tentativas para preservar disponibilidade sob falha parcial.

### Objeto visual proposto — camadas e evolução

```text
APP (até 2 retentativas) -> API (até 2) -> SERVIÇO (até 2) -> DEPENDÊNCIA
```

| Minuto | Ações novas/s | Chamadas à dependência/s | Retentativas | Erros |
|---:|---:|---:|---:|---:|
| 0 | 80 | 82 | 2% | 1% |
| 2 | 80 | 130 | 38% | 18% |
| 4 | 79 | 205 | 61% | 42% |
| 6 | 78 | 310 | 74% | 67% |

Premissas: a dependência começou a responder lentamente no minuto 1; as ações novas permaneceram próximas de 80/s; todas as camadas repetem imediatamente o mesmo tipo de falha.

### Texto ao jogador

**Enunciado.** Qual intervenção trata a causa de amplificação e permite recuperar o sistema com menor risco de nova onda sincronizada?

- **A.** Aumentar para cinco retentativas em cada camada e retirar os limites de tempo.
- **B.** Manter as três camadas repetindo imediatamente, mas ocultar a métrica de retentativas do painel.
- **C.** Reiniciar continuamente a dependência sem reduzir chamadas, pois as ações novas estão estáveis.
- **D.** Duplicar todas as chamadas em paralelo e aceitar a primeira resposta, sem orçamento global.
- **E.** Concentrar a retentativa em uma camada, distinguir falha temporária de permanente, limitar tentativas e aumentar o intervalo entre elas, reduzindo chamadas durante a recuperação.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** O tráfego cresce enquanto as ações novas ficam estáveis, evidenciando amplificação interna. Definir timeout e retentativa em um único nível, limitar tentativas e espaçá-las reduz o trabalho adicional enquanto a dependência se recupera.

| Alternativa | Feedback |
|---|---|
| A | Mais tentativas em todas as camadas aumentam a multiplicação e esperas indefinidas. |
| B | Ocultar a métrica não modifica o tráfego nem a política responsável pela amplificação. |
| C | Reinícios sob a mesma carga podem prolongar a instabilidade e não tratam as retentativas. |
| D | Duplicação sem orçamento aumenta chamadas justamente quando a dependência está degradada. |
| E | Correta: aplica conceitos clássicos de timeout, falha temporária, limite de tentativas e controle de sobrecarga. |

**Atratividade e acessibilidade:** o gráfico pode animar duas curvas — ações novas e chamadas totais —, sempre com tabela equivalente, rótulos e opção de movimento reduzido.

## 5. E26-Q-SI-29 — O arquivo fechava só quando o processo terminava

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-29 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M05-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Computadores, sistemas operacionais, redes e sistemas distribuídos |
| Rastreabilidade | SI-M05 / SI-I; F07, art. 5º, I; art. 6º, X |
| difficulty | intermediate |
| Objetivo pedagógico | Relacionar código, descritores do sistema operacional e liberação determinística de recurso. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; código, telemetria e respostas são autorais e fictícios. |
| Complemento documental | T16 — Python 3 documentation, `open` e gerenciadores de contexto. |
| Complemento documental URL | https://docs.python.org/3/reference/datamodel.html#context-managers |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Diagnosticar retenção de recurso do sistema operacional e aplicar liberação segura inclusive diante de retorno ou exceção.

### Objeto proposto — código e telemetria

```python
arquivos_em_processamento = []

def ler_titulo(caminho):
    arquivo = open(caminho, encoding="utf-8")
    arquivos_em_processamento.append(arquivo)
    return arquivo.readline().strip()
```

| Após processar | Descritores abertos | Memória do processo | Resultado |
|---:|---:|---:|---|
| 100 arquivos | 112 | 118 MB | normal |
| 1.000 arquivos | 1.012 | 121 MB | normal |
| 2.000 arquivos | 2.012 | 124 MB | `Too many open files` |

Premissa: cada chamada recebe um caminho válido diferente; o limite do processo é 2.048 descritores; não há execução concorrente.

### Texto ao jogador

**Enunciado.** Qual alteração resolve a causa indicada e mantém o arquivo fechado mesmo se a leitura gerar exceção?

- **A.** Executar `gc.collect()` depois de cada mil arquivos e manter a lista como está.
- **B.** Remover a retenção em `arquivos_em_processamento`, usar `with open(caminho, encoding="utf-8") as arquivo:` e retornar o título dentro do bloco.
- **C.** Aumentar o limite para 20.480 descritores sem alterar o ciclo de vida do arquivo.
- **D.** Colocar `arquivo.close()` depois do `return` existente.
- **E.** Trocar `readline()` por `read()`, mantendo cada arquivo aberto.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** A lista mantém referências para todos os arquivos e impede que deixem de estar ativos. Remover essa retenção desnecessária e usar o gerenciador de contexto encerra cada arquivo ao sair do bloco, inclusive por retorno ou exceção.

| Alternativa | Feedback |
|---|---|
| A | A lista continua retendo os objetos; coleta de memória não encerra objetos ainda referenciados. |
| B | Correta: elimina a retenção e vincula a vida do arquivo ao bloco. |
| C | Um limite maior apenas posterga o mesmo vazamento de descritores. |
| D | Código depois de `return` não é executado. |
| E | Ler mais conteúdo não encerra o descritor e pode aumentar outro consumo. |

**Atratividade e acessibilidade:** o jogo pode mostrar um medidor de descritores crescendo ao lado do código, com valores, mensagens e descrição textual; a solução não depende da animação.

## 6. Segunda passagem independente de revisão assistida por IA

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-26 | Estado pronto e CPU alta caracterizam Relatórios; bloqueio/disco caracteriza Importação; espera remota caracteriza API. | O item avalia estados e recursos clássicos de SO, sem exigir contêiner, cgroup ou ferramenta específica. | manter `under-ai-review` |
| SI-27 | EVT-91 reaparece após efeito e antes de ACK; somente A torna deduplicação e alteração atômicas sob as premissas. | A resposta não promete entrega exatamente uma vez; ela torna o efeito idempotente no consumidor. | manter `under-ai-review` |
| SI-28 | Ações novas ficam estáveis e chamadas crescem; E é a única opção que limita retentativas e reduz sobrecarga. | O núcleo é timeout, falha parcial, disponibilidade e tolerância a falhas; a fonte técnica apenas corrobora o fenômeno. | manter `under-ai-review` |
| SI-29 | Descritores crescem quase um por arquivo e memória permanece próxima; B fecha deterministicamente. | A semântica do gerenciador de contexto foi conferida documentalmente; execução Python nativa permanece para a etapa final. | manter `under-ai-review` |

## 7. Auditoria rápida do lote

- Quatro IDs novos e distintos: `E26-Q-SI-26` a `E26-Q-SI-29`; nenhum aparece em outro lote.
- Quatro questões com cinco alternativas, feedback A–E e um único gabarito: C/A/E/B.
- Dificuldades: três `intermediate` e uma `advanced`, exatamente a lacuna de SI-M05.
- Temas profissionais ancorados em fundamentos clássicos: estados de processos, recursos de SO, mensageria idempotente, timeout, disponibilidade e tolerância a falhas.
- Recursos variados e necessários: painel, topologia, log, série temporal e código Python.
- Não há repetição de TRC-01 (resolução de nomes), TRC-03 (inicialização), COM-08 (espera por memória) ou SI-16 (ciclo organizacional de reenvios). Os mecanismos e decisões técnicas são distintos.
- Nenhum texto ao jogador exibe a referência pedagógica interna reservada ou apresenta os cenários como infraestrutura real da instituição.
- Permanecem pendentes: execução nativa do Python, teste com estudantes, cotejo externo, calibração e homologação humana de acessibilidade.
- Nenhum item foi convertido para JSON ou promovido para `ready-for-pilot`.

## 8. Preparação para etapa futura

Na integração final, tabelas extensas devem virar cartões no celular, logs e código devem ter rolagem focalizável e diagramas precisam de descrição linear. Gráficos devem fornecer os mesmos valores em tabela. Nenhum código do conteúdo será executado no navegador do jogador.
