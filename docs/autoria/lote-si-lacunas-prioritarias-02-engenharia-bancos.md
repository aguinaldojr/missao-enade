# N9 — Jornada Digital: lacunas prioritárias de SI — lote 2 de 3

Autoria documental assistida por IA — 18/11/2026. Este lote cria cinco questões de reserva, `E26-Q-SI-71` a `E26-Q-SI-75`, sobre Engenharia de Software, UML e Banco de Dados. Não altera as jornadas existentes, não gera JSON e não integra conteúdo ao jogo.

Todos os cenários e registros são fictícios. Os itens usam `classification: SI`, `courses: [SI]`, `collectionId: enade-2026` e `validationStatus: under-ai-review`. Os artefatos visuais possuem descrição textual equivalente.

## 1. Inventário e distribuição

| ID | Macroárea | Conteúdo central | Dificuldade | Gabarito | Recurso principal |
|---|---|---|---|---|---|
| E26-Q-SI-71 | SI-M06 | Requisitos funcionais, não funcionais e regras de negócio | introductory | E | Cartões de requisitos |
| E26-Q-SI-72 | SI-M06 | UML — casos de uso | intermediate | C | Diagrama textual de atores e casos |
| E26-Q-SI-73 | SI-M06 | UML — sequência | advanced | A | Linha temporal de mensagens |
| E26-Q-SI-74 | SI-M09 | DER: entidade fraca e generalização | advanced | D | DER textual e esquemas relacionais |
| E26-Q-SI-75 | SI-M09 | SQL com `LEFT JOIN` e agregação | intermediate | B | Esquema, dados e consulta PostgreSQL |

Distribuição: uma `introductory`, duas `intermediate` e duas `advanced`; gabaritos E/C/A/D/B. O lote aprofunda operações cognitivas diferentes das questões SI-53 e SI-64: classificação verificável, leitura de fronteira/atores, comportamento temporal, mapeamento relacional e execução de consulta.

## 2. Fontes e rastreabilidade compartilhadas

| Código | Papel | Referência e limite de uso |
|---|---|---|
| F07 | primary | Portaria Inep nº 168/2026, arts. 5º–6º, matriz específica de Sistemas de Informação. Sustenta os recortes amplos de engenharia, modelagem, concepção de sistemas e bancos de dados; não prescreve as situações fictícias. |
| T34 | technical | ISO/IEC/IEEE 29148:2018, *Requirements engineering*, confirmada pela ISO em 2024. Apoia precisão, condições, restrições e rastreabilidade; o texto integral possui acesso licenciado. |
| T35 | technical | IREB CPRE Foundation Level 3.3.0 e glossário CPRE. Apoiam requisitos de comportamento, qualidade, restrições, modelos e casos de uso. |
| T36 | technical | OMG, *Unified Modeling Language 2.5.1*. Apoia atores, casos de uso, interações, linhas de vida e mensagens. |
| T37 | technical | Documentações oficiais de PostgreSQL, MySQL e Oracle para `JOIN`. As três corroboram que `LEFT JOIN` preserva linhas da relação à esquerda sem correspondência à direita; extensões próprias de fornecedor ficam fora do item. |

URLs: `https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade`, `https://www.iso.org/standard/72089.html`, `https://cpre.ireb.org/en/downloads-and-resources/downloads`, `https://www.omg.org/spec/UML/2.5.1`, `https://www.postgresql.org/docs/current/queries-table-expressions.html`, `https://dev.mysql.com/doc/refman/8.4/en/join.html` e `https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Joins.html`.

## 3. E26-Q-SI-71 — Três frases, três papéis diferentes

**Ficha editorial:** versão 1; SI-M06 / competência SI-I; área “Engenharia de requisitos”; `introductory`. Objetivo: classificar comportamento, qualidade e regra do domínio pelas evidências fornecidas. Fontes: F07 como `primary`; T34 e T35 como `technical`.

### Objeto apresentado

Uma equipe da Base N9 registrou:

| Código | Declaração |
|---|---|
| R1 | O sistema deve permitir que a pessoa usuária cancele uma reserva ainda não iniciada. |
| R2 | Em carga de 100 acessos simultâneos, 95% das confirmações devem aparecer em até 2 segundos. |
| R3 | Uma reserva iniciada não pode ser cancelada; deve ser encerrada ou marcada como incidente. |

Para esta questão: requisito funcional descreve comportamento oferecido pelo sistema; requisito não funcional estabelece qualidade ou restrição mensurável; regra de negócio define política válida no domínio, independentemente da tela usada.

**Enunciado.** Qual classificação respeita as definições e as três declarações?

- **A.** R1 não funcional; R2 regra de negócio; R3 funcional.
- **B.** R1 regra de negócio; R2 funcional; R3 não funcional.
- **C.** R1 e R2 são regras de negócio; R3 é não funcional.
- **D.** As três são funcionais porque serão implementadas em software.
- **E.** R1 funcional; R2 não funcional de desempenho; R3 regra de negócio.

**Gabarito: E.** R1 pede uma capacidade observável, R2 define condição mensurável de desempenho e R3 estabelece uma política sobre o estado da reserva. Uma regra pode originar validações funcionais, mas seu papel no domínio continua distinto.

| Alternativa | Feedback |
|---|---|
| A | R2 mede desempenho, e R3 expressa política do domínio. |
| B | R1 descreve uma operação oferecida; R2 não descreve uma função. |
| C | R1 é comportamento, e R2 é qualidade mensurável. |
| D | Ser implementado não torna todo requisito funcional. |
| E | Correta: separa comportamento, qualidade e política. |

**Acessibilidade e originalidade:** cartões preservam código e declaração em texto. SI-53 verifica coerência entre artefatos; este item avalia classificação explícita de requisitos.

## 4. E26-Q-SI-72 — Quem participa e o que fica dentro do sistema?

**Ficha editorial:** versão 1; SI-M06 / competência SI-I; área “Modelagem de requisitos com UML”; `intermediate`. Objetivo: identificar atores externos, casos de uso e fronteira do sistema. Fontes: F07 como `primary`; T35 e T36 como `technical`.

### Objeto apresentado

O sistema fictício **Empréstimo N9** deve permitir:

1. estudante solicita empréstimo de equipamento;
2. técnica ou técnico aprova ou rejeita a solicitação;
3. no registro da devolução, o sistema consulta o Serviço de Relógio para verificar atraso;
4. o banco de dados é parte interna da solução, não uma pessoa ou sistema externo interessado no resultado.

Descrição visual pretendida: retângulo “Empréstimo N9” contendo os casos **Solicitar empréstimo**, **Analisar solicitação** e **Registrar devolução**; atores externos permanecem fora da fronteira e ligados apenas aos casos dos quais participam.

**Enunciado.** Qual modelo de casos de uso representa corretamente esse recorte?

- **A.** Coloca Estudante, Técnico, Serviço de Relógio e Banco de Dados como casos de uso dentro da fronteira.
- **B.** Trata “Empréstimo N9” como ator e as pessoas como componentes internos.
- **C.** Mantém Estudante, Técnico e Serviço de Relógio como atores externos; associa cada um aos casos correspondentes e mantém o banco como detalhe interno, não como ator.
- **D.** Remove Estudante e Técnico porque atores humanos não aparecem em diagramas de casos de uso.
- **E.** Representa somente tabelas e chaves, pois casos de uso descrevem armazenamento físico.

**Gabarito: C.** Ator representa papel externo que interage com o sistema. Pessoas e o serviço externo cumprem esse papel; os objetivos ficam dentro da fronteira. O banco interno é decisão de implementação, não ator neste recorte.

| Alternativa | Feedback |
|---|---|
| A | Atores e casos de uso possuem papéis distintos, e o banco foi definido como interno. |
| B | A fronteira nomeia o sistema; ela não troca de papel com seus usuários. |
| C | Correta: separa papéis externos, objetivos e detalhe interno. |
| D | Papéis humanos são atores frequentes quando interagem com o sistema. |
| E | Casos de uso descrevem objetivos observáveis, não esquema físico. |

**Acessibilidade e originalidade:** o diagrama futuro será acompanhado pela lista numerada de associações; posição e forma não são necessárias para responder.

## 5. E26-Q-SI-73 — A reserva mudou enquanto a tela estava aberta

**Ficha editorial:** versão 1; SI-M06 / competência SI-I e SI-II; área “Interações e consistência de sistemas”; `advanced`. Objetivo: interpretar sequência de mensagens em conflito de atualização concorrente. Fontes: F07 como `primary`; T36 como `technical`.

### Objeto apresentado

Uma tela abriu o equipamento 17 com `versao=4` e estado `DISPONIVEL`. Antes da confirmação, outra pessoa o reservou, elevando a versão para 5. A API usa atualização condicional e deve responder conflito sem sobrescrever a reserva existente.

Linhas de vida: **Tela**, **API**, **Repositório**. Operações disponíveis:

- `reservar(17, versao=4)`;
- `UPDATE ... WHERE id=17 AND versao=4 AND estado='DISPONIVEL'`;
- retorno `linhasAfetadas=0`;
- leitura do estado atual;
- resposta `409 Conflito`, com versão 5.

**Enunciado.** Qual sequência preserva as causalidades do cenário?

- **A.** Tela→API reservar; API→Repositório atualização condicional; Repositório→API zero linhas; API→Repositório ler atual; Repositório→API reservado/versão 5; API→Tela conflito.
- **B.** API envia sucesso à Tela antes de consultar o Repositório e depois tenta atualizar.
- **C.** Repositório chama a Tela diretamente para pedir a versão e ignora a API.
- **D.** API executa atualização sem condição e devolve conflito mesmo após sobrescrever o estado.
- **E.** Tela altera a versão do banco para 4 e então informa sucesso à API.

**Gabarito: A.** A solicitação causa a tentativa condicional; zero linhas evidencia que a precondição não vale mais; a leitura posterior obtém informação para a resposta de conflito. Nenhum sucesso é anunciado antes da confirmação.

| Alternativa | Feedback |
|---|---|
| A | Correta: ordem, participantes e respostas respeitam dependências. |
| B | Sucesso anterior à persistência contradiz a confirmação exigida. |
| C | O cenário estabelece a API como mediadora da interação. |
| D | Detectar conflito depois de sobrescrever não preserva a reserva concorrente. |
| E | A tela não controla diretamente a versão persistida. |

**Acessibilidade e originalidade:** cada mensagem possui origem, destino e ordem textual; o diagrama não dependerá apenas da altura das setas. O caso exige leitura temporal, diferente do modelo estrutural de SI-64.

## 6. E26-Q-SI-74 — A chave depende do pedido e o papel depende da pessoa

**Ficha editorial:** versão 1; SI-M09 / competência SI-II; área “Modelagem conceitual e relacional de dados”; `advanced`. Objetivo: mapear entidade fraca e especialização sem perder identidade ou integridade referencial. Fontes: F07 como `primary`; T34 como apoio de precisão e rastreabilidade; modelo relacional fornecido no próprio item.

### Objeto apresentado

O DER textual possui dois recortes:

```text
PEDIDO (id_pedido) 1 ── contém ── N ITEM_PEDIDO (numero_item parcial, quantidade)
ITEM_PEDIDO N ── referencia ── 1 PRODUTO (id_produto)

PESSOA (id_pessoa, nome)
  especialização total e sobreposta em CLIENTE e FUNCIONARIO
```

`ITEM_PEDIDO` é entidade fraca: `numero_item` só é único dentro de um pedido. Uma pessoa pode ser simultaneamente cliente e funcionária. A solução deve usar tabelas para o supertipo e os subtipos.

**Enunciado.** Qual esquema preserva todas as regras declaradas?

- **A.** `ITEM_PEDIDO(numero_item PK, quantidade)` e uma única tabela `PESSOA(tipo)` que impede dois papéis.
- **B.** `ITEM_PEDIDO(id_produto PK)` e tabelas de subtipo sem chave estrangeira para `PESSOA`.
- **C.** `ITEM_PEDIDO(id_pedido PK, numero_item)` e copiar nome separadamente em cada subtipo, sem `PESSOA`.
- **D.** `ITEM_PEDIDO(id_pedido, numero_item, id_produto, quantidade, PK(id_pedido,numero_item))`; `PESSOA(id_pessoa PK, nome)`; `CLIENTE(id_pessoa PK/FK)` e `FUNCIONARIO(id_pessoa PK/FK)`.
- **E.** `ITEM_PEDIDO(numero_item, quantidade)` sem chave; `CLIENTE` e `FUNCIONARIO` compartilham uma coluna textual sem referência.

**Gabarito: D.** A chave composta identifica o item dentro do pedido e as chaves estrangeiras ligam pedido e produto. Subtipos com a mesma chave do supertipo permitem que uma pessoa tenha ambos os papéis sem duplicar seus atributos comuns.

| Alternativa | Feedback |
|---|---|
| A | O número parcial não é global, e a especialização é sobreposta. |
| B | Produto não identifica a ocorrência do item, e os subtipos ficam órfãos. |
| C | Somente `id_pedido` não distingue itens e a proposta elimina o supertipo exigido. |
| D | Correta: preserva identidade fraca, referências e sobreposição dos papéis. |
| E | Sem chaves e referências, as regras do DER não são garantidas. |

**Acessibilidade e originalidade:** cardinalidades, chaves e especialização estão escritas por extenso. O item amplia SI-05 e SI-64 ao combinar identidade dependente e especialização sobreposta.

## 7. E26-Q-SI-75 — Mostrar também quem não abriu chamado

**Ficha editorial:** versão 1; SI-M09 / SI-II; “SQL e análise de dados”; `intermediate`. Objetivo: aplicar `LEFT JOIN` e agregação preservando entidades sem correspondência. Dialeto: subconjunto SQL comum a PostgreSQL, MySQL e Oracle. Fontes: F07/T37.

### Esquema lógico e dados mínimos

```text
CLIENTE(id PK, nome)
CHAMADO(id PK, cliente_id FK → CLIENTE.id, status)
```

| CLIENTE | nome | CHAMADO | cliente_id | status |
|---:|---|---:|---:|---|
| 1 | Ana | 10 | 1 | FECHADO |
| 1 | Ana | 11 | 1 | ABERTO |
| 2 | Bruno | — | — | — |
| 3 | Carla | 12 | 3 | FECHADO |

Resultado exigido: `Ana 1`, `Bruno 0`, `Carla 1`; somente fechados, sem omitir clientes.

**Enunciado.** Qual consulta produz esse resultado?

- **A.** `SELECT c.nome, COUNT(*) FROM cliente c LEFT JOIN chamado ch ON ch.cliente_id=c.id GROUP BY c.nome;`
- **B.** `SELECT c.nome, COUNT(ch.id) FROM cliente c LEFT JOIN chamado ch ON ch.cliente_id=c.id AND ch.status='FECHADO' GROUP BY c.id,c.nome ORDER BY c.id;`
- **C.** `SELECT c.nome, COUNT(ch.id) FROM cliente c INNER JOIN chamado ch ON ch.cliente_id=c.id WHERE ch.status='FECHADO' GROUP BY c.id,c.nome;`
- **D.** `SELECT c.nome, COUNT(ch.id) FROM cliente c LEFT JOIN chamado ch ON ch.cliente_id=c.id WHERE ch.status='FECHADO' GROUP BY c.id,c.nome;`
- **E.** `SELECT c.nome, COUNT(ch.id) FROM cliente c CROSS JOIN chamado ch GROUP BY c.id,c.nome;`

**Gabarito: B.** O `LEFT JOIN` preserva todos os clientes. Filtrar `FECHADO` no `ON` limita as correspondências sem retirar Bruno; `COUNT(ch.id)` ignora o `NULL` produzido para quem não tem chamado fechado.

| Alternativa | Feedback |
|---|---|
| A | `COUNT(*)` conta a linha preservada de Bruno e inclui chamados de qualquer status. |
| B | Correta: preserva clientes e conta apenas correspondências fechadas. |
| C | `INNER JOIN` elimina Bruno, que não possui correspondência. |
| D | O filtro no `WHERE` elimina a linha cujo chamado é `NULL`, anulando o efeito desejado do `LEFT JOIN`. |
| E | Produto cartesiano associa cada cliente a todos os chamados. |

**Acessibilidade e execução:** esquema, dados e consultas são blocos copiáveis e roláveis; nenhuma sintaxe depende de cor. Em 18/11/2026, a consulta B foi executada em SQLite em memória e retornou `Ana 1`, `Bruno 0`, `Carla 1`. A sintaxe usada é documentada pelos três SGBDs; a execução nativa em cada um permanece para a auditoria consolidada.

## 8. Segunda passagem de revisão assistida por IA

| ID | Teste independente de resposta | Risco ou limitação | Decisão |
|---|---|---|---|
| SI-71 | Somente E classifica operação, qualidade mensurável e política conforme as definições dadas. | Taxonomias variam; as definições locais eliminam dependência de uma nomenclatura única. | `under-ai-review` |
| SI-72 | Somente C mantém atores externos, objetivos internos e banco como detalhe da solução neste recorte. | Outro recorte arquitetural poderia modelar um banco externo; o cenário o declara interno. | `under-ai-review` |
| SI-73 | Somente A respeita causalidade, atualização condicional e retorno depois da evidência. | O item não prescreve protocolo completo de concorrência; aplica as operações fornecidas. | `under-ai-review` |
| SI-74 | Somente D satisfaz chave parcial, referências, supertipo e especialização sobreposta. | Existem outras estratégias de mapeamento, mas o cenário exige tabelas de supertipo e subtipos. | `under-ai-review` |
| SI-75 | A=Ana 2/Bruno 1/Carla 1; C e D omitem Bruno; E produz produto cartesiano; apenas B gera 1/0/1. A consulta B executada em SQLite em memória retornou 1/0/1. | Execução nativa em PostgreSQL, MySQL e Oracle continua pendente para a auditoria consolidada. | `under-ai-review` |

## 9. Auditoria editorial do lote

- IDs `E26-Q-SI-71` a `E26-Q-SI-75` eram inexistentes no projeto no início da etapa.
- Cada questão possui cinco alternativas, um gabarito e feedback individual A–E.
- Os cinco núcleos decisórios são distintos entre si e dos itens anteriores.
- Diagramas e códigos possuem descrição textual; nenhuma resposta depende exclusivamente de cor ou geometria.
- O SQL usa construções comuns a PostgreSQL, MySQL e Oracle; esquema, dados e resultado são independentes de tipos e inserções específicos de fornecedor.
- Nenhum texto apresentado ao jogador menciona avaliação externa ou afirma validação institucional.
- Todos os itens permanecem `under-ai-review`; nenhum foi integrado ou promovido.
- Permanecem pendentes: execução nativa nos três SGBDs, cotejo externo, PPC, calibragem com estudantes e homologação humana de acessibilidade.

## 10. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Adequação ao curso/PPC | Clareza em celular | Acessibilidade humana | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-SI-71 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-72 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-73 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-74 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-75 | pendente | pendente | pendente | pendente | pendente | — |

O lote 3 começará somente após autorização.
