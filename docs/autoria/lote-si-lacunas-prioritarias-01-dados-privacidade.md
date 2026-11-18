# N9 — Jornada Digital: lacunas prioritárias de SI — lote 1 de 3

Autoria documental assistida por IA — 18/11/2026. Este lote cria cinco questões de reserva, `E26-Q-SI-66` a `E26-Q-SI-70`, sobre Dados, BI e privacidade. Não altera as jornadas existentes, não gera JSON e não integra conteúdo ao jogo.

Todos os cenários, organizações, métricas e registros são fictícios. Os itens usam `classification: SI`, `courses: [SI]`, `collectionId: enade-2026` e `validationStatus: under-ai-review`. A palavra associada à avaliação externa aparece somente nesta documentação interna e na rastreabilidade, nunca no texto apresentado ao jogador.

## 1. Inventário e distribuição

| ID | Macroárea | Conteúdo central | Dificuldade | Gabarito | Recurso principal |
|---|---|---|---|---|---|
| E26-Q-SI-66 | SI-M09 | OLTP × OLAP | intermediate | C | Diagrama de cargas |
| E26-Q-SI-67 | SI-M09 | ETL, Data Warehouse e Data Lake | advanced | E | Pipeline em camadas |
| E26-Q-SI-68 | SI-M09 | Escolha de visualização | introductory | A | Tabela de série temporal |
| E26-Q-SI-69 | SI-M10 | Bases legais e consentimento | intermediate | D | Quadro de finalidades |
| E26-Q-SI-70 | SI-M10/SI-M08 | Pseudonimização e incidente | advanced | B | Trilha de exposição |

Distribuição do lote: uma `introductory`, duas `intermediate` e duas `advanced`; gabaritos C/E/A/D/B, sem ciclo alfabético. As três primeiras questões reforçam o objeto autônomo de visualização e ciência de dados. As duas últimas aprofundam informática e sociedade e segurança, sem substituir análise jurídica concreta.

## 2. Fontes e rastreabilidade compartilhadas

| Código | Papel | Referência e limite de uso |
|---|---|---|
| F07 | primary | Portaria Inep nº 168/2026, arts. 5º–6º, matriz específica de Sistemas de Informação. Sustenta os recortes amplos de análise de dados, decisão, segurança e informática e sociedade; não enumera todas as tecnologias usadas nos casos. Índice oficial: `https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade`. |
| T30 | technical | Microsoft Learn, *Online Transaction Processing (OLTP)* e *Online Analytical Processing (OLAP)*. Apoia a distinção entre gravações transacionais consistentes e análise histórica intensiva; exemplos do lote são autorais. |
| T31 | technical | Microsoft Learn, *What Is a Data Lake?*. Apoia camadas de ingestão, transformação e consumo e a distinção entre dados brutos e dados curados; não impõe um produto. |
| T32 | technical | Office for National Statistics, *Choosing a chart type* e princípios de visualização. Apoia a escolha segundo relação analítica, simplicidade, escala e acessibilidade. |
| N10 | normative-complementary | Lei nº 13.709/2018, especialmente arts. 5º, 6º, 7º, 8º, 12 e 48. Apoia conceitos gerais de finalidade, base legal, consentimento, anonimização e incidente; o item não oferece parecer jurídico. |
| N11 | normative-complementary | ANPD, Resolução CD/ANPD nº 15/2024 e página *Comunicação de Incidente de Segurança*, consultada em 18/11/2026. Apoia avaliação de risco, papéis e comunicação quando cabível. |
| T33 | technical | Ministério da Gestão e da Inovação, *Boas práticas em anonimização de dados*. Apoia a distinção entre anonimização efetiva e dado ainda passível de associação. |

URLs técnicas: `https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-transaction-processing`, `https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-analytical-processing`, `https://learn.microsoft.com/en-us/azure/architecture/data-guide/scenarios/data-lake`, `https://service-manual.ons.gov.uk/data-visualisation/chart-types/choosing-a-chart-type`, `https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm`, `https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis` e `https://www.gov.br/gestao/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados/lgpd-no-mgi-1/anonimizacao/boas-praticas-em-anonimizacao-de-dados`.

## 3. E26-Q-SI-66 — O relatório que travou o atendimento

**Ficha editorial:** versão 1; SI-M09 / competência SI-II; área “Visualização e ciência de dados”; `intermediate`. Objetivo: selecionar arquiteturas adequadas a cargas transacionais e analíticas sem confundir suas finalidades. Fontes: F07 como `primary`; T30 como `technical`.

### Objeto apresentado

```text
Aplicativo de atendimento ──grava──> Base operacional
                                      ├─ 180 transações/s
                                      └─ relatório trimestral lê 90 milhões de linhas
```

A Base N9 registra abertura, atualização e encerramento de chamados. Durante a geração do relatório trimestral, o tempo das gravações sobe de 80 ms para 2,4 s. O relatório agrega três anos por unidade, categoria e mês; não precisa refletir os últimos segundos. A equipe exige rastreabilidade da carga e números reconciliados.

**Enunciado.** Qual desenho atende melhor às duas cargas?

- **A.** Executar o relatório na base operacional a cada minuto e aumentar indefinidamente o tempo limite das transações.
- **B.** Desnormalizar todas as tabelas operacionais e retirar as transações para acelerar qualquer consulta.
- **C.** Manter o OLTP para registrar operações e alimentar periodicamente um repositório analítico histórico, com carga controlada, reconciliação e modelo adequado às agregações.
- **D.** Copiar manualmente uma amostra para planilhas, sem registrar data ou regra da extração.
- **E.** Substituir a base operacional por arquivos de relatório somente leitura.

**Gabarito: C.** OLTP prioriza transações curtas e consistentes; a carga histórica e intensiva de leitura é apropriada a uma camada analítica separada. A atualização periódica satisfaz o cenário, e reconciliação e linhagem evitam transformar a cópia em uma segunda verdade sem controle.

| Alternativa | Feedback |
|---|---|
| A | Aumentar o tempo limite não elimina a concorrência entre a consulta extensa e as gravações. |
| B | Remover garantias transacionais compromete justamente a finalidade operacional. |
| C | Correta: separa cargas, preserva operação e governa a transferência. |
| D | Amostra manual sem linhagem não sustenta o relatório reconciliado. |
| E | Arquivos somente leitura não registram o ciclo operacional exigido. |

**Acessibilidade e originalidade:** o diagrama possui descrição linear completa; setas não são necessárias para responder. O núcleo decisório — isolamento de cargas com latência e volume fornecidos — não repete a questão SI-10, centrada em consistência de versão para leitura operacional.

## 4. E26-Q-SI-67 — Do dado bruto ao indicador auditável

**Ficha editorial:** versão 1; SI-M09 / competência SI-II; área “Arquitetura de dados e BI”; `advanced`. Objetivo: organizar ingestão, preservação, transformação e consumo conforme finalidades diferentes. Fontes: F07 como `primary`; T31 como `technical`.

### Objeto apresentado

Uma organização fictícia recebe:

| Fonte | Formato | Uso pretendido |
|---|---|---|
| vendas | tabelas relacionais | painel financeiro mensal |
| sensores | JSON variável | exploração e modelos futuros |
| atendimento | CSV com códigos divergentes | indicador corporativo |

O indicador financeiro precisa de conceitos padronizados, histórico reproduzível e conferência com as fontes. Os eventos originais devem ser preservados com acesso controlado para investigações futuras.

**Enunciado.** Qual pipeline atende às duas necessidades sem tratar dado bruto como indicador oficial?

- **A.** Apagar os originais após carregar somente os totais mensais.
- **B.** Exibir diretamente todos os arquivos brutos no painel e deixar cada pessoa interpretar os códigos.
- **C.** Transformar manualmente apenas o CSV e ignorar sensores porque seu esquema varia.
- **D.** Copiar tudo para uma única tabela sem catálogo, qualidade, histórico ou controle de acesso.
- **E.** Ingerir originais em zona governada do Data Lake, registrar catálogo e linhagem, validar e transformar os dados necessários e carregar dimensões e fatos curados no Data Warehouse do painel.

**Gabarito: E.** A zona bruta preserva diversidade e reprocessamento; validação e transformação produzem conceitos controlados; o Data Warehouse oferece estrutura histórica adequada ao BI. Catálogo, acesso, qualidade e linhagem atravessam o pipeline.

| Alternativa | Feedback |
|---|---|
| A | Totais sem originais impedem reprocessamento e auditoria das regras. |
| B | Dados brutos não resolvem divergências semânticas nem garantem indicador reproduzível. |
| C | Variação de esquema pede tratamento apropriado, não descarte automático da fonte. |
| D | Centralizar sem governança apenas reúne inconsistências. |
| E | Correta: separa preservação, preparação e consumo com rastreabilidade. |

**Acessibilidade e originalidade:** as camadas serão apresentadas como cartões numerados, além do fluxo visual. O item não exige decorar arquitetura “medalhão”; exige relacionar estado do dado e finalidade.

## 5. E26-Q-SI-68 — Qual gráfico responde à pergunta?

**Ficha editorial:** versão 1; SI-M09 / competência SI-II; área “Visualização de dados”; `introductory`. Objetivo: escolher representação segundo relação temporal e comparação desejadas. Fontes: F07 como `primary`; T32 como `technical`.

### Objeto apresentado

Uma equipe quer comparar a evolução mensal do tempo mediano de solução de dois canais durante um ano e verificar quando cada um ficou acima da meta de 8 horas.

| Mês | Portal | Telefone | Meta |
|---|---:|---:|---:|
| jan | 11 h | 9 h | 8 h |
| abr | 9 h | 10 h | 8 h |
| jul | 7 h | 9 h | 8 h |
| out | 6 h | 7 h | 8 h |

Os outros oito meses também estão disponíveis e seguem a mesma estrutura.

**Enunciado.** Qual visualização responde mais diretamente à pergunta e continua interpretável sem depender apenas de cor?

- **A.** Gráfico de linhas com mês no eixo horizontal, uma linha identificada por nome e traço para cada canal, linha de referência de 8 horas e tabela textual equivalente.
- **B.** Gráfico de pizza com 24 fatias, uma para cada combinação de canal e mês.
- **C.** Mapa geográfico, embora os dados não possuam localização.
- **D.** Gráfico 3D sem escala comum, usando somente cores para separar canais.
- **E.** Uma única barra com a média anual combinada dos dois canais.

**Gabarito: A.** Linhas em eixo temporal mostram evolução e comparação entre séries; a referência explicita a meta. Rótulos, tipos de traço e tabela preservam a leitura sem depender exclusivamente de cor.

| Alternativa | Feedback |
|---|---|
| A | Correta: representa tempo, comparação e meta com alternativa textual. |
| B | Pizza não comunica bem uma sequência temporal com 24 observações. |
| C | Não existe dimensão geográfica a representar. |
| D | Perspectiva e dependência exclusiva de cor prejudicam comparação e acesso. |
| E | A média agregada esconde meses, canais e ultrapassagens da meta. |

**Acessibilidade e originalidade:** valores, nomes e meta aparecem em texto; uma futura imagem será SVG local com descrição equivalente. Diferentemente de SI-07, o objetivo aqui é escolher a representação, não detectar eixo truncado.

## 6. E26-Q-SI-69 — Um aceite não serve para todas as finalidades

**Ficha editorial:** versão 1; SI-M10 / competência SI-I e SI-II; área “Informática, sociedade e proteção de dados”; `intermediate`. Objetivo: distinguir finalidade, base legal e características do consentimento sem pressupor que todo tratamento dependa dele. Fontes: F07 como `primary`; N10 como `normative-complementary`.

### Objeto apresentado

Uma plataforma fictícia pretende tratar dados para três finalidades:

| Finalidade | Situação informada |
|---|---|
| F1 | executar a entrega solicitada pela pessoa usuária |
| F2 | cumprir uma obrigação legal aplicável, já identificada pela organização |
| F3 | enviar ofertas de parceiros, atividade opcional e não necessária à entrega |

A tela atual possui uma única caixa obrigatória: “Aceito todos os usos presentes e futuros”. O cancelamento das ofertas também bloqueia o acompanhamento da entrega.

**Enunciado.** Qual revisão é mais coerente com finalidade, necessidade e escolha válida?

- **A.** Manter a caixa única porque aceitar o serviço autoriza automaticamente qualquer uso futuro.
- **B.** Esconder F3 em um texto longo e considerar a continuidade da navegação como consentimento.
- **C.** Solicitar consentimento obrigatório para F1 e F2, mesmo quando outra base legal adequada e documentada sustentar cada finalidade.
- **D.** Documentar a base aplicável separadamente para F1 e F2; apresentar F3 de modo destacado, específico e opcional, permitindo recusa ou revogação sem retirar a entrega contratada.
- **E.** Coletar dados adicionais sem finalidade definida para possíveis projetos posteriores.

**Gabarito: D.** A base deve ser avaliada por finalidade; consentimento não substitui automaticamente outras hipóteses nem é válido quando genérico ou condicionado a tratamento desnecessário. O caso define F3 como opcional, portanto sua recusa não deve bloquear F1.

| Alternativa | Feedback |
|---|---|
| A | Aceite de um serviço não torna ilimitadas as finalidades posteriores. |
| B | Consentimento precisa ser demonstrável, informado e referente a finalidade determinada. |
| C | A questão informa outras finalidades com bases a documentar; consentimento não é a única hipótese legal. |
| D | Correta: separa finalidades, bases e a escolha opcional sem venda casada informacional. |
| E | Coleta preventiva e finalidade aberta contrariam necessidade e transparência. |

**Limite jurídico e acessibilidade:** o item avalia princípios em cenário fechado; não determina a base de um caso real. Finalidades e consequências aparecem em tabela e texto linear, sem juridiquês indispensável.

## 7. E26-Q-SI-70 — O código trocado ainda aponta para alguém

**Ficha editorial:** versão 1; SI-M10/SI-M08 / competência SI-II; área “Proteção de dados e resposta a incidentes”; `advanced`. Objetivo: reconhecer pseudonimização e selecionar resposta proporcional baseada em evidências. Fontes: F07 como `primary`; N10 e N11 como `normative-complementary`; T33 como `technical`.

### Objeto apresentado

Uma equipe substituiu o CPF por `codigo_pessoa` antes de compartilhar dados de suporte. Porém, o mesmo armazenamento exposto continha:

```text
chave.csv: codigo_pessoa ↔ CPF
chamados.csv: codigo_pessoa, diagnóstico informado, data e unidade
```

Os registros indicam acesso não autorizado confirmado. Ainda não se sabe quantas pessoas foram afetadas nem se os arquivos foram copiados. O plano interno atribui ao controlador a avaliação do risco e prevê que o operador o informe sem demora injustificada.

**Enunciado.** Qual primeira resposta técnica e de governança é a mais defensável?

- **A.** Declarar os dados anônimos e encerrar o caso porque o CPF não estava em `chamados.csv`.
- **B.** Conter o acesso preservando evidências, informar os responsáveis previstos, relacionar os conjuntos, avaliar titulares, dados e possíveis danos e então cumprir as comunicações e mitigações aplicáveis ao risco identificado.
- **C.** Apagar imediatamente todos os logs para impedir que alguém veja o incidente.
- **D.** Publicar os dois arquivos para que a comunidade descubra quem foi afetado.
- **E.** Aguardar prova de fraude consumada, pois acesso não autorizado nunca exige avaliação prévia.

**Gabarito: B.** A tabela de correspondência mantém possibilidade razoável de associação: trata-se de pseudonimização, não anonimização efetiva. Resposta responsável combina contenção, evidência, papéis, análise de risco e providências cabíveis; o cenário não autoriza presumir comunicação automática nem omiti-la.

| Alternativa | Feedback |
|---|---|
| A | A chave permite reassociação direta; trocar o identificador não basta para anonimizar. |
| B | Correta: preserva investigação e orienta decisões pelo risco e pelos papéis definidos. |
| C | Destruir logs prejudica a investigação, a extensão e a prestação de contas. |
| D | Nova divulgação ampliaria a exposição e não é método de identificação responsável. |
| E | O incidente confirmado requer avaliação; não é necessário esperar dano consumado para agir. |

**Acessibilidade e originalidade:** os arquivos são exibidos como texto, e sua relação é explicitada. O caso não repete SI-45, que trata minimização na coleta; aqui o foco é reversibilidade e resposta após exposição.

## 8. Segunda passagem de revisão assistida por IA

| ID | Teste independente de resposta | Risco ou limitação | Decisão |
|---|---|---|---|
| SI-66 | Apenas C atende simultaneamente gravação consistente, análise histórica, latência e reconciliação. | Arquiteturas modernas podem compartilhar armazenamento; o item cobra separação lógica de cargas, não produto ou topologia universal. | `under-ai-review` |
| SI-67 | Apenas E preserva originais e produz indicador curado, auditável e governado. | Data Lake e Data Warehouse não possuem uma única topologia obrigatória; as premissas fecham a decisão do caso. | `under-ai-review` |
| SI-68 | A é a única opção que representa duas séries temporais, meta e alternativa acessível. | Quatro meses são amostra visual; o enunciado declara doze observações disponíveis. | `under-ai-review` |
| SI-69 | D é a única opção que separa finalidade, base e escolha opcional sem presumir consentimento universal. | Não substitui análise jurídica nem determina bases para organização real. | `under-ai-review` |
| SI-70 | B é única porque reconhece reassociação, preserva evidência e condiciona providências à avaliação exigida. | Prazo, alcance e comunicação dependem do caso e da norma vigente; por isso não são convertidos em regra automática. | `under-ai-review` |

## 9. Auditoria editorial do lote

- IDs `E26-Q-SI-66` a `E26-Q-SI-70` são novos no projeto no início desta etapa.
- Cada item possui exatamente cinco alternativas, um gabarito e cinco feedbacks correspondentes.
- Textos ao jogador não mencionam avaliação externa, instituição real ou produto oficial.
- Contexto, comando e alternativas permanecem abaixo do limite editorial de 250 palavras por questão.
- Os artefatos têm equivalente textual; nenhuma resposta depende exclusivamente de cor, forma ou posição.
- OLTP/OLAP, pipeline de dados, escolha de gráfico, base legal/consentimento e pseudonimização/incidente são núcleos distintos dos lotes anteriores.
- Fontes sustentam conceitos e limites; dados, empresas e gabaritos são autorais.
- Permanecem pendentes: cotejo externo independente, conferência do PPC, calibragem com estudantes, revisão jurídica institucional e homologação humana de acessibilidade.
- Nenhum conteúdo foi promovido a `ready-for-pilot` ou `ready-for-release`.

## 10. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Adequação ao curso/PPC | Clareza em celular | Acessibilidade humana | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-SI-66 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-67 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-68 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-69 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-70 | pendente | pendente | pendente | pendente | pendente | — |

Este formulário não altera o estado editorial sem decisão explícita registrada. O lote 2 começará apenas após autorização.
