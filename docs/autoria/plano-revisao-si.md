# N9 — Jornada Digital: plano editorial e matriz de capacidade de SI

Planejamento documental — 16/11/2026, horário de Brasília. Esta entrega não altera questões, puzzles, JSON, contratos, schemas, seleção, interface ou progresso. A Portaria Inep nº 168/2026, registrada como F07, é a referência normativa principal. Os agrupamentos `SI-M01` a `SI-M10` são macroáreas editoriais internas: não são códigos nem numeração oficial do ato.

> Atualização de execução em 17/11/2026: os pilotos `SI-02` e `SI-05` e as melhorias visuais das outras oito questões foram integrados após autorização. O histórico e as lacunas originais abaixo permanecem para rastreabilidade. A implementação está registrada em [melhorias-visuais-si-questoes-existentes.md](melhorias-visuais-si-questoes-existentes.md).

## 1. Decisões, escopo e limites

O banco pretendido para Sistemas de Informação possui um núcleo balanceado de **15 questões comuns e 60 técnicas elegíveis**, suficiente para três jornadas iniciais de 25 itens sem repetição. Cada jornada terá cinco comuns e vinte técnicas, com duas técnicas de cada macroárea e distribuição total 9 introductory, 11 intermediate e 5 advanced.

Esta etapa somente planeja a capacidade. Ela:

- preserva integralmente as 60 questões e os seis puzzles atuais;
- não muda `courses`, `classification`, gabarito, dificuldade, recompensa ou status nos JSON;
- não cria enunciados, alternativas nem IDs definitivos;
- distingue elegibilidade já registrada, compartilhamento proposto e não elegibilidade;
- usa códigos de slot editorial, nunca IDs executáveis, para conteúdo inexistente;
- registra a substituição da aprovação docente por governança editorial assistida por IA; a migração técnica foi concluída na entrega específica de 16/11/2026.

As disciplinas sugeridas são rótulos de organização. Não representam componentes oficiais da UNINOVE enquanto não forem confrontadas com os PPCs e matrizes curriculares vigentes.

### 1.1 Documentos e contratos examinados

Foram lidos integralmente o plano da coleção, a estrutura de dados, o padrão editorial, os dois lotes comuns, os cinco lotes específicos, o mapeamento por curso/área e a pesquisa normativa local. Também foram conferidos `Question`, `EditorialMetadata`, `SequencePuzzle`, os enums de curso/dificuldade/status/fonte, os schemas editorial/question/puzzles, os normalizadores, validadores, repositórios, seletor de missão e os JSON executáveis.

F07 registra tentativa sem sucesso no endereço individual do DOU e leitura da reprodução integral hospedada pela Ufopa. Esta etapa não realizou nova consulta externa. As redações abaixo são sínteses locais; não se alegam transcrição certificada, vigência jurídica exaustiva ou homologação institucional.

## 2. Matriz normativa de SI

O art. 5º da Portaria 168 organiza duas competências em síntese documental:

- **SI-I:** avaliar soluções de TI para problemas organizacionais e sociais — arquitetura de negócio, programação e tecnologias, desempenho/escalabilidade e qualidade de processos/produtos;
- **SI-II:** gerir dados, informação e conhecimento — arquitetura e segurança, modelos de gestão e modelagens algorítmicas, análise de dados/demandas, bases e arranjos informacionais e integração de conhecimentos.

O art. 6º organiza os objetos em incisos próprios de SI. Um mesmo número romano em outra portaria não deve ser transportado. A tabela conserva os localizadores registrados na síntese local de F07.

| Macroárea editorial | Art. 6º de F07 | Objetos de conhecimento em síntese | Competência predominante | Disciplinas sugeridas, sujeitas ao PPC |
|---|---|---|---|---|
| `SI-M01` — Lógica, matemática, probabilidade, estatística e pesquisa operacional | V confirmado para pesquisa operacional; demais incisos não explicitados nos localizadores atuais | Lógica matemática; matemática discreta; probabilidade e estatística; pesquisa operacional | SI-I e SI-II | Matemática Discreta; Probabilidade e Estatística; Pesquisa Operacional |
| `SI-M02` — Algoritmos, estruturas de dados e programação | Inciso não explicitado nos localizadores atuais | Algoritmos e estruturas de dados; fundamentos e paradigmas de linguagens de programação | SI-I e SI-II | Lógica e Algoritmos; Estruturas de Dados; Programação em C e Python |
| `SI-M03` — Fundamentos de SI e teoria geral de sistemas | VI | Fundamentos de sistemas de informação; teoria geral de sistemas | SI-I | Fundamentos de SI; Teoria Geral de Sistemas |
| `SI-M04` — Arquitetura corporativa, informação e governança | VII–VIII | Arquitetura corporativa e da informação; governança de TI | SI-I | Arquitetura Corporativa; Governança e Gestão da Informação |
| `SI-M05` — Computadores, sistemas operacionais, redes e distribuídos | X–XI confirmados para SO e redes/distribuídos; arquitetura não explicitada nos localizadores atuais | Arquitetura e organização de computadores; sistemas operacionais; redes e sistemas distribuídos | SI-I | Arquitetura de Computadores; Sistemas Operacionais; Redes e Sistemas Distribuídos |
| `SI-M06` — Engenharia, concepção, modelagem e projetos | XII–XIV | Engenharia de software; concepção e modelagem de SI; gerenciamento de projetos | SI-I e SI-II | Engenharia de Software; Análise e Projeto de SI; Gerência de Projetos |
| `SI-M07` — Processos de negócio e informação | XV | Modelagem e gestão de processos de negócio e da informação | SI-I | Gestão de Processos de Negócio; Gestão da Informação |
| `SI-M08` — Interação humano-computador e segurança | XVII confirmado para segurança; IHC não explicitada nos localizadores atuais | Interação humano-computador; segurança da informação e de sistemas de informação | SI-I e SI-II | IHC; Segurança da Informação |
| `SI-M09` — Banco, visualização e ciência de dados | XVIII–XIX | Banco de dados; visualização e ciência de dados | SI-II | Banco de Dados; Visualização; Ciência de Dados |
| `SI-M10` — Informática e sociedade | Inciso não explicitado nos localizadores atuais | Informática e sociedade | SI-I e SI-II | Ética, Tecnologia e Sociedade; Impactos Sociais da Computação |

Os lotes atuais explicitam V para pesquisa operacional, VI para fundamentos de SI, VII–VIII para arquitetura/governança, X–XI para sistemas operacionais e redes/distribuídos, XII–XV para engenharia/modelagem/projetos/processos e XVII–XIX para segurança, banco e visualização/dados. Os documentos locais não registram com segurança os números individuais de lógica, matemática, probabilidade/estatística, algoritmos/programação, arquitetura de computadores, IHC e informática/sociedade. Este plano não os infere: esses localizadores precisam ser reconferidos no ato oficial antes de uma futura migração normativa executável.

## 3. Inventário das 60 questões atuais

### 3.1 Resultado geral para SI

| Classificação documental | Quantidade | Como entra neste plano |
|---|---:|---|
| Comuns já elegíveis para SI | 10 | Confirmadas no catálogo atual; contam no banco comum, não nas 60 técnicas |
| Específicas de SI | 10 | Elegibilidade documental confirmada; contam no núcleo técnico |
| Outros lotes com compartilhamento proposto | 20 | Dependem de revisão por IA e rastreabilidade própria de F07 |
| Outros lotes não elegíveis para SI neste recorte | 20 | Excluídos do planejamento de capacidade de SI |
| **Total examinado** | **60** | Inventário completo, sem alteração no JSON |

“Confirmada” significa que o curso SI já consta no conteúdo executável ou que o item pertence ao lote SI. Não significa que a questão esteja liberada, aprovada institucionalmente ou tecnicamente revisada sob a futura governança.

### 3.2 Questões comuns confirmadas

| ID | Área | Dificuldade | Relação com SI |
|---|---|---|---|
| E26-Q-COM-01 | Educação, desenvolvimento e saúde | introductory | Formação Geral comum |
| E26-Q-COM-02 | Ética, cidadania e trabalho | introductory | Formação Geral comum |
| E26-Q-COM-03 | Cultura e comunicação responsável | introductory | Formação Geral comum |
| E26-Q-COM-04 | Equidade, acessibilidade e inclusão | introductory | Formação Geral comum |
| E26-Q-COM-05 | Clima, territórios e qualidade de vida | intermediate | Formação Geral comum |
| E26-Q-COM-06 | Ciência, tecnologia e relações globais | intermediate | Formação Geral comum |
| E26-Q-COM-07 | Redes: fundamentos de comunicação | intermediate | F07, art. 6º, XI; comum técnica já corroborada para SI |
| E26-Q-COM-08 | Sistemas operacionais: fundamentos | intermediate | F07, art. 6º, X; comum técnica já corroborada para SI |
| E26-Q-COM-09 | Clima, territórios e qualidade de vida | advanced | Formação Geral comum |
| E26-Q-COM-10 | Proteção da informação: fundamentos | advanced | F07, art. 6º, XVII; comum técnica já corroborada para SI |

O alvo de 15 comuns exige cinco slots adicionais: três introductory, um intermediate e um advanced. Eles serão planejados separadamente; esta entrega não cria seus IDs nem textos.

### 3.3 Questões específicas de SI confirmadas

| ID | Macroárea primária | Incisos F07 | Dificuldade | Formato atual e lacuna de experiência |
|---|---|---|---|---|
| E26-Q-SI-01 | SI-M04 | VII | introductory | Caso textual de arquitetura; falta representação de painel/mapa de capacidades |
| E26-Q-SI-02 | SI-M09 | XVIII | introductory | Tabela e consulta descrita; falta SQL funcional |
| E26-Q-SI-03 | SI-M07 | VI e XV, com XV primário | introductory | Tabela de tempos e processo textual; falta fluxo visual |
| E26-Q-SI-04 | SI-M07 | XV | intermediate | Evento e redesenho descritos; falta linha de eventos/integração |
| E26-Q-SI-05 | SI-M06 | XIII e XVIII, com XIII primário | intermediate | Modelo relacional verbal; falta diagrama de dados |
| E26-Q-SI-06 | SI-M04 | VII–VIII | intermediate | Decisão textual de governança; falta catálogo de dados visual |
| E26-Q-SI-07 | SI-M09 | XIX | intermediate | Gráfico integralmente descrito; falta gráfico efetivo e equivalente textual |
| E26-Q-SI-08 | SI-M06 | XII–XIV | intermediate | Ensaio de aceitação textual; falta artefato de teste |
| E26-Q-SI-09 | SI-M01 | V | advanced | Tabela de otimização; pode evoluir para quadro de alocação |
| E26-Q-SI-10 | SI-M06 | XI, XIII e XVIII, com XIII primário | advanced | Arquitetura textual; falta diagrama de componentes/versões |

O puzzle E26-P-SI-01 permanece fora das cotas de questões. Sua revisão será planejada em etapa própria.

### 3.4 Compartilhamentos propostos para revisão por IA

Nenhum item desta tabela ganha SI em `courses` nesta entrega. “Proposto” indica que conteúdo, operação e profundidade parecem compatíveis, mas ainda exigem resolução sem gabarito, conferência de F07 e comparação de contexto.

| ID | Macroárea SI proposta | Localizador F07 | Justificativa e limite |
|---|---|---|---|
| E26-Q-CC-01 | SI-M02 | Objeto de algoritmos/programação; inciso a reconferir | Rastreamento introdutório de algoritmo é compatível; ainda está apresentado como texto, não C funcional |
| E26-Q-CC-08 | SI-M01 | Objeto de probabilidade/estatística; inciso a reconferir | Probabilidade e estatística sustentam o cálculo; manter independência e indisponibilidade explicitadas |
| E26-Q-TADS-01 | SI-M06 | XII–XIII | Requisito verificável pode servir à engenharia/modelagem de SI |
| E26-Q-TADS-02 | SI-M02 | Objeto de programação; inciso a reconferir | Colaboração de objetos cabe em programação; profundidade introdutória precisa ser mantida |
| E26-Q-TADS-03 | SI-M06 | XII–XIII | Distingue especificação testada de necessidade organizacional |
| E26-Q-TADS-04 | SI-M02 | Objeto de algoritmos/programação; inciso a reconferir | Diagnóstico de algoritmo por mutação de lista é compatível |
| E26-Q-TADS-05 | SI-M09 | XVIII | Restrições de integridade pertencem a banco de dados; premissas de `CHECK` devem permanecer explícitas |
| E26-Q-TADS-06 | SI-M06 | XII | Configuração/manutenção pode caber em engenharia de software; o detalhamento não aparece isoladamente em F07 |
| E26-Q-TADS-07 | SI-M06 | XII–XIII | Modularização, regra de negócio e testabilidade se alinham a engenharia/modelagem |
| E26-Q-TADS-08 | SI-M06 | XIV | Priorização de entrega usa gerenciamento de projetos previsto em SI |
| E26-Q-TADS-09 | SI-M06, com M08 secundária | XII e XVII | Testes e apresentação segura são compatíveis; não transformar o recorte em certificação de segurança |
| E26-Q-TADS-10 | SI-M06 | XII | Evolução de contrato pode ser engenharia de software; compatibilidade precisa permanecer no nível de SI |
| E26-Q-TGTI-01 | SI-M04 | VII–VIII | Alinhamento entre iniciativa, objetivo e capacidade cabe em arquitetura/governança |
| E26-Q-TGTI-03 | SI-M06 | XIV | Projeto e segregação de papéis podem ser usados; gestão de pessoas não é objeto autônomo de SI |
| E26-Q-TGTI-05 | SI-M04 | VIII | Decisão de governança e responsabilidade são diretamente pertinentes |
| E26-Q-TGTI-06 | SI-M09 | XIX e SI-II | Informação comparável para decisão é compatível, mas BI não deve ser transportada como objeto idêntico sem comprovação |
| E26-Q-TGTI-07 | SI-M06 | XIV | Precedência, recurso e prazo se alinham a gerenciamento de projetos |
| E26-Q-TRC-01 | SI-M05 | XI | Resolução de nomes é fundamento de redes; não exige administração especializada de TRC |
| E26-Q-TRC-03 | SI-M05 | X | Inicialização de serviço ilustra sistemas operacionais; confirmar se o nível administrativo é adequado a SI |
| E26-Q-TRC-07 | SI-M08 | XVII | Filtragem com estado aplica segurança, mas a profundidade de configuração precisa ser validada para SI |

### 3.5 Itens não elegíveis neste recorte

| Lote | IDs | Motivo resumido |
|---|---|---|
| CC | E26-Q-CC-02–07, E26-Q-CC-09 e E26-Q-CC-10 | Sistemas digitais, compiladores/teoria, grafos específicos, cache, IA/imagem e concorrência possuem recortes ou profundidades não demonstrados como equivalentes em F07 |
| TGTI | E26-Q-TGTI-02, E26-Q-TGTI-04 e E26-Q-TGTI-08–10 | Indicadores/serviços, priorização operacional, melhoria, portfólio e continuidade usam recortes próprios de gestão de TI não equivalentes apenas por proximidade temática |
| TRC | E26-Q-TRC-02, E26-Q-TRC-04–06 e E26-Q-TRC-08–10 | Cabeamento, roteamento, rádio, virtualização, automação, projeto de rede e QoS possuem detalhamento específico de TRC |

## 4. Capacidade por macroárea

Para evitar que engenharia de software ocupe vagas de áreas ausentes, o planejamento distingue **candidatos brutos** e **núcleo balanceado**. Há dez itens SI confirmados e vinte compartilhamentos propostos, mas seis propostas adicionais de SI-M06 ficam como reserva até a revisão por IA. O núcleo inicial consegue usar 24 itens: dez confirmados e quatorze propostos.

| Macroárea | Confirmados SI | Propostos brutos | Propostos usados no núcleo | Núcleo atual | Meta | Novos slots necessários |
|---|---:|---:|---:|---:|---:|---:|
| SI-M01 | 1 | 1 | 1 | 2 | 6 | 4 |
| SI-M02 | 0 | 3 | 3 | 3 | 6 | 3 |
| SI-M03 | 0 | 0 | 0 | 0 | 6 | 6 |
| SI-M04 | 2 | 2 | 2 | 4 | 6 | 2 |
| SI-M05 | 0 | 2 | 2 | 2 | 6 | 4 |
| SI-M06 | 3 | 9 | 3 | 6 | 6 | 0 |
| SI-M07 | 2 | 0 | 0 | 2 | 6 | 4 |
| SI-M08 | 0 | 1 | 1 | 1 | 6 | 5 |
| SI-M09 | 2 | 2 | 2 | 4 | 6 | 2 |
| SI-M10 | 0 | 0 | 0 | 0 | 6 | 6 |
| **Total** | **10** | **20** | **14** | **24** | **60** | **36** |

As seis reservas propostas de SI-M06 são E26-Q-TADS-06–08, E26-Q-TADS-10, E26-Q-TGTI-03 e E26-Q-TGTI-07. Elas não são rejeitadas; apenas não podem substituir macroáreas vazias. Após a revisão por IA, o núcleo escolherá seis itens de SI-M06 e manterá excedentes como reserva editorial ou descartará compartilhamentos inadequados.

### 4.1 Dificuldades do núcleo técnico

O alvo técnico decorre das três jornadas depois de reservar 7 introductory, 5 intermediate e 3 advanced para as 15 comuns.

| Dificuldade | Núcleo atual de 24 | Meta técnica de 60 | Novos slots |
|---|---:|---:|---:|
| introductory | 10 | 20 | 10 |
| intermediate | 11 | 28 | 17 |
| advanced | 3 | 12 | 9 |
| **Total** | **24** | **60** | **36** |

Para esse cálculo, o núcleo de SI-M06 usa E26-Q-TADS-01, E26-Q-TADS-03 e E26-Q-TADS-09 ao lado de E26-Q-SI-05, E26-Q-SI-08 e E26-Q-SI-10. A seleção é apenas capacidade documental e pode mudar após a auditoria dos compartilhamentos.

### 4.2 Lacuna de dificuldade por macroárea

O padrão base de seis itens é 2 introductory, 3 intermediate e 1 advanced. SI-M06 e SI-M10 usam 2 introductory, 2 intermediate e 2 advanced para elevar integração sem concentrar toda a dificuldade numa única jornada.

| Macroárea | Perfil alvo I/M/A | Perfil atual I/M/A | Novos I/M/A |
|---|---|---|---|
| SI-M01 | 2/3/1 | 0/1/1 | 2/2/0 |
| SI-M02 | 2/3/1 | 2/1/0 | 0/2/1 |
| SI-M03 | 2/3/1 | 0/0/0 | 2/3/1 |
| SI-M04 | 2/3/1 | 2/2/0 | 0/1/1 |
| SI-M05 | 2/3/1 | 2/0/0 | 0/3/1 |
| SI-M06 | 2/2/2 | 2/2/2 | 0/0/0 |
| SI-M07 | 2/3/1 | 1/1/0 | 1/2/1 |
| SI-M08 | 2/3/1 | 0/1/0 | 2/2/1 |
| SI-M09 | 2/3/1 | 1/3/0 | 1/0/1 |
| SI-M10 | 2/2/2 | 0/0/0 | 2/2/2 |
| **Total** | **20/28/12** | **10/11/3** | **10/17/9** |

### 4.3 Lacuna de formatos

Todos os 24 candidatos do núcleo são atualmente renderizados como texto, eventualmente com tabelas. Não há no contrato atual um bloco próprio para código ou mídia, e nenhuma proposta abaixo altera esse contrato. Para os 36 novos slots, planeja-se o seguinte formato primário:

| Formato primário futuro | Novos slots planejados |
|---|---:|
| C funcional | 4 |
| Python funcional | 6 |
| SQL funcional | 5 |
| Diagrama de dados | 4 |
| Diagrama de processo | 4 |
| Arquitetura ou rede | 4 |
| Dashboard ou gráfico | 3 |
| Caso de teste, log ou diagnóstico | 3 |
| Decisão profissional curta | 3 |
| **Total** | **36** |

A conversão visual das dez questões específicas existentes foi realizada após os pilotos SI-02 e SI-05. Ela melhora a experiência, mas não reduz automaticamente a quantidade de novos slots da matriz de capacidade. Código funcional foi executado; diagramas possuem equivalente textual; nenhum item depende exclusivamente de cor.

## 5. Blueprints das três jornadas

### 5.1 Banco comum

| Jornada | Cinco slots comuns | Dificuldades |
|---|---|---|
| A | E26-Q-COM-01, E26-Q-COM-02, `SI-A-COM-N01`, E26-Q-COM-05, E26-Q-COM-09 | I, I, I, M, A |
| B | E26-Q-COM-03, `SI-B-COM-N01`, E26-Q-COM-06, E26-Q-COM-07, E26-Q-COM-10 | I, I, M, M, A |
| C | E26-Q-COM-04, `SI-C-COM-N01`, E26-Q-COM-08, `SI-C-COM-N02`, `SI-C-COM-N03` | I, I, M, M, A |

Os cinco códigos `COM-N` são slots editoriais, não IDs. A distribuição comum total é 7 introductory, 5 intermediate e 3 advanced.

### 5.2 Núcleo técnico por macroárea

`N` indica slot novo. Os códigos dos slots não podem ser convertidos diretamente em IDs de conteúdo.

| Macroárea | Jornada A | Jornada B | Jornada C |
|---|---|---|---|
| SI-M01 | `SI-A-M01-N01` M + E26-Q-SI-09 A | E26-Q-CC-08 M + `SI-B-M01-N01` I | `SI-C-M01-N01` I + `SI-C-M01-N02` M |
| SI-M02 | E26-Q-CC-01 I + E26-Q-TADS-04 M | `SI-B-M02-N01` M + `SI-B-M02-N02` A | E26-Q-TADS-02 I + `SI-C-M02-N01` M |
| SI-M03 | `SI-A-M03-N01` I + `SI-A-M03-N02` M | `SI-B-M03-N01` I + `SI-B-M03-N02` M | `SI-C-M03-N01` M + `SI-C-M03-N02` A |
| SI-M04 | `SI-A-M04-N01` M + `SI-A-M04-N02` A | E26-Q-SI-01 I + E26-Q-SI-06 M | E26-Q-TGTI-01 I + E26-Q-TGTI-05 M |
| SI-M05 | E26-Q-TRC-01 I + `SI-A-M05-N01` M | `SI-B-M05-N01` M + `SI-B-M05-N02` A | E26-Q-TRC-03 I + `SI-C-M05-N01` M |
| SI-M06 | E26-Q-TADS-01 I + E26-Q-SI-05 M | E26-Q-TADS-03 I + E26-Q-SI-10 A | E26-Q-SI-08 M + E26-Q-TADS-09 A |
| SI-M07 | `SI-A-M07-N01` M + `SI-A-M07-N02` A | E26-Q-SI-03 I + E26-Q-SI-04 M | `SI-C-M07-N01` I + `SI-C-M07-N02` M |
| SI-M08 | `SI-A-M08-N01` I + E26-Q-TRC-07 M | `SI-B-M08-N01` M + `SI-B-M08-N02` A | `SI-C-M08-N01` I + `SI-C-M08-N02` M |
| SI-M09 | E26-Q-SI-02 I + E26-Q-SI-07 M | `SI-B-M09-N01` I + E26-Q-TADS-05 M | E26-Q-TGTI-06 M + `SI-C-M09-N01` A |
| SI-M10 | `SI-A-M10-N01` M + `SI-A-M10-N02` A | `SI-B-M10-N01` I + `SI-B-M10-N02` M | `SI-C-M10-N01` I + `SI-C-M10-N02` A |

### 5.3 Conferência das cotas

| Jornada | Comuns I/M/A | Técnicas I/M/A | Total I/M/A | Questões |
|---|---|---|---|---:|
| A | 3/1/1 | 6/10/4 | 9/11/5 | 25 |
| B | 2/2/1 | 7/9/4 | 9/11/5 | 25 |
| C | 2/2/1 | 7/9/4 | 9/11/5 | 25 |

Os três blueprints possuem cinco comuns, vinte técnicas, duas técnicas de cada macroárea e nenhum ID existente repetido entre jornadas. A ausência de repetição futura depende de aceitar os compartilhamentos propostos e preencher os 41 slots novos: cinco comuns e 36 técnicos.

### 5.4 Variedade planejada

Em cada jornada, distribuir os novos formatos para evitar blocos consecutivos da mesma interação. Uma ordem editorial futura deve alternar, quando possível:

1. decisão contextual curta;
2. código C, Python ou SQL;
3. diagrama ou arquitetura;
4. tabela, dashboard ou gráfico;
5. teste, log ou diagnóstico.

Não se deve forçar código em SI-M03, SI-M04 ou SI-M10 quando processo, mapa sistêmico, decisão social ou representação visual avaliar melhor a competência.

## 6. Seleção a partir da quarta partida

A evolução futura do domínio deverá:

1. obter somente questões da coleção e do curso escolhidos;
2. separar o banco técnico por macroárea primária;
3. selecionar duas questões distintas por macroárea;
4. excluir IDs já escolhidos na mesma partida;
5. evitar todos os IDs da partida imediatamente anterior;
6. priorizar menor número de apresentações e maior tempo desde a última apresentação;
7. completar a cota 9/11/5 e variar formatos sem retirar cobertura de área;
8. selecionar cinco comuns segundo os mesmos critérios;
9. persistir os 25 IDs antes da primeira resposta, para que recarregar não refaça o sorteio;
10. receber uma estratégia determinística/injetável nos testes, sem `Math.random` direto no domínio;
11. falhar com quantidades necessárias e disponíveis se uma macroárea não tiver dois itens após as exclusões;
12. nunca preencher déficit com outra área, outro curso, outra coleção ou puzzle.

O histórico recomendado é por perfil, curso e questão, com contagem e data da última apresentação. Questão compartilhada pode receber histórico global por jogador em evolução posterior; essa decisão não é necessária para o primeiro seletor.

## 7. Governança editorial assistida por IA

A decisão vigente retira aprovação docente como requisito do projeto. A migração técnica foi concluída em entrega própria. O fluxo ativo é:

```text
draft
  ↓
under-ai-review
  ├─→ needs-revision ─→ under-ai-review
  ├─→ rejected
  └─→ ready-for-pilot ─→ ready-for-release
```

Enums, schemas e os 66 conteúdos usam os estados novos; os 66 itens permanecem `under-ai-review`. Estados antigos são aceitos apenas por normalização em memória. Nenhum item foi promovido. Documentos históricos não são apagados e pertencem à governança anterior.

Uma revisão por IA deverá registrar versão, data, critérios, resolução independente, correções, testes objetivos, limitações e decisão. `ready-for-pilot` significa somente aptidão para teste controlado. Não significa homologação institucional, conteúdo oficial ou eficácia pedagógica demonstrada.

## 8. Padrão para as próximas questões de SI

- usar situações reconhecíveis do cotidiano de SI;
- buscar contexto e comando concisos, sem retirar premissas necessárias;
- separar ressalvas editoriais do texto apresentado ao jogador;
- formular uma decisão observável, com um único gabarito defensável;
- construir quatro distratores plausíveis e independentes;
- mostrar feedback inicial curto e explicação completa consultável;
- usar C para lógica/algoritmos quando adequado, Python para programação/dados/automação e SQL para banco;
- executar código apresentado como funcional e fixar linguagem/padrão;
- usar diagramas de dados, processo e arquitetura com descrição textual equivalente;
- não depender só de cor, posição, áudio ou gesto;
- manter blocos legíveis em 360 × 800 e zoom de 200%;
- variar código, dados, processos, arquitetura, testes, segurança e decisão profissional;
- não usar a palavra ENADE nos campos apresentados ao jogador;
- declarar cenários e dados como autorais/fictícios na camada editorial, sem repetir a ressalva de forma cansativa em todo enunciado;
- confrontar cada compartilhamento com F07, sem copiar localizadores de outro curso.

## 9. Inconsistências e decisões pendentes

1. O seletor atual conta como específicas apenas questões cuja `classification` é exatamente SI. Um item de outro lote com `courses: [SI]` não preencheria a cota técnica; compartilhar conteúdo exigirá uma migração posterior do modelo de seleção ou outra decisão de classificação.
2. As dez macroáreas são agrupamentos editoriais. `area` e `competencies` continuam strings livres; `areas.json` não está ligado ao runtime.
3. O contrato não possui campos próprios para código, mídia, descrição longa ou formato de apresentação. Os pilotos devem decidir a menor extensão compatível antes da conversão.
4. Os vinte compartilhamentos propostos estão concentrados: nove pertencem a SI-M06 e nenhum atende SI-M03 ou SI-M10. Contar candidatos sem balancear áreas produziria capacidade aparente, mas não três jornadas completas.
5. Os atuais 7/9/4 descrevem vinte elegíveis no catálogo antigo. Este plano redefine 9/11/5 como cota de cada jornada de 25; a migração ainda não foi implementada.
6. A governança ativa usa os seis estados assistidos por IA. `provisional-pending-teacher-review` e `approved-teacher` permanecem somente como entradas legadas normalizadas.
7. O texto certificado do DOU não foi recuperado nos documentos locais. A reprodução F07 e a síntese registrada sustentam o planejamento, mas os localizadores não usados pelos itens atuais devem ser reconferidos antes de se tornarem dados executáveis.
8. A equivalência de disciplinas depende dos PPCs; nenhum nome sugerido deve ser apresentado como disciplina oficial.

## 10. Critérios de saída para iniciar os pilotos

Antes de produzir SI-02 e SI-05 revisadas:

- aprovar este agrupamento de dez macroáreas;
- decidir se o núcleo técnico de 60 é meta exata ou se reservas poderão ampliar o catálogo;
- aplicar a governança editorial ativa e registrar a rodada de revisão das candidatas;
- confirmar os formatos piloto: SQL funcional para SI-02 e diagrama de dados acessível para SI-05;
- preservar os originais até a aprovação das candidatas;
- manter o JSON executável inalterado durante a comparação.

O próximo trabalho de autoria deve produzir apenas as duas candidatas, revisar por IA e aguardar decisão antes de substituir o lote ou o catálogo.
