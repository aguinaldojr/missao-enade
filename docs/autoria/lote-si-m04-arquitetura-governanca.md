# N9 — Jornada Digital: lote SI-M04 — Arquitetura corporativa, informação e governança

Autoria documental assistida por IA — 17/11/2026. Este lote cria duas candidatas inéditas para os slots restantes de `SI-M04 — Arquitetura corporativa, informação e governança`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-A-M04-N01 | E26-Q-SI-24 | A | intermediate | B | Mapa de aplicações e fluxo de dados |
| SI-A-M04-N02 | E26-Q-SI-25 | A | advanced | D | Matriz de decisão e responsabilidade |

Com `E26-Q-SI-01` (introductory), `E26-Q-SI-06` (intermediate) e os compartilhamentos planejados `E26-Q-TGTI-01` (introductory) e `E26-Q-TGTI-05` (intermediate), a macroárea alcança **2 introductory, 3 intermediate e 1 advanced**. Os compartilhamentos continuam documentais e dependem de rastreabilidade própria de SI.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta SI-I e os objetos de arquitetura corporativa/informação e governança de TI nos incisos VII–VIII. Não fornece os cenários ou respostas. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- Todos os nomes, políticas, sistemas, indicadores e decisões da Base N9 são fictícios.

## 2. E26-Q-SI-24 — Três cadastros para a mesma pessoa

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-24 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M04-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Arquitetura corporativa, informação e governança |
| Rastreabilidade | SI-M04 / SI-I; F07, art. 5º, I; art. 6º, VII–VIII |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar uma evolução arquitetural que alinhe integração, propriedade da informação e transição viável. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; arquitetura, sistemas e dados são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Relacionar objetivo de negócio, responsabilidade informacional, contratos de integração e restrições de transição.

### Objeto visual proposto — arquitetura atual

```text
                 CSV noturno                 CSV noturno
[PORTAL] ----------------------> [CRM] ---------------------> [FATURAMENTO]
   |                              |                               |
   | idPortal, e-mail, plano      | idCRM, e-mail, plano          | idFiscal, e-mail, plano
   |                              v                               |
   +------------------------> [SUPORTE] <-------------------------+
                              idExterno, e-mail, categoria
```

**Descrição equivalente:** portal, CRM, faturamento e suporte guardam identificadores diferentes e cópias de e-mail/plano. Arquivos noturnos e integrações ponto a ponto propagam alterações, mas não existe proprietário declarado para o plano contratado.

Objetivo do próximo trimestre: quando um plano for alterado, portal e suporte devem refletir a mudança em até cinco minutos, com histórico de quem autorizou. CRM, faturamento e suporte não podem ser substituídos nesse período.

### Texto ao jogador

**Enunciado.** Qual arquitetura-alvo e estratégia de transição atendem melhor ao objetivo e às restrições?

- **A.** Substituir imediatamente os quatro sistemas por um único produto, interrompendo integrações até a migração total.
- **B.** Definir identificador canônico e propriedade do plano, expor contrato versionado por API/evento, fazer os sistemas consumirem mudanças e reconciliar registros durante uma migração gradual.
- **C.** Manter os identificadores atuais e executar os mesmos arquivos CSV a cada cinco minutos, sem alterar propriedade ou rastreabilidade.
- **D.** Usar o e-mail como chave mestre permanente e permitir que cada sistema altere o plano sem coordenação.
- **E.** Criar integrações diretas entre cada par de sistemas, cada uma com sua própria regra de conversão e sem contrato compartilhado.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** A proposta liga propriedade da informação, identidade canônica, contrato de integração e histórico. A migração gradual respeita a impossibilidade de substituir os sistemas no trimestre e a reconciliação trata divergências durante a transição.

| Alternativa | Feedback |
|---|---|
| A | Contraria a restrição temporal e cria uma interrupção sem caminho de transição. |
| B | Correta: combina alinhamento informacional, integração desacoplada, rastreabilidade e migração progressiva. |
| C | Aumentar frequência do arquivo reduz atraso, mas mantém ambiguidade de propriedade, identidade e histórico. |
| D | E-mail pode mudar ou se repetir; alterações concorrentes continuam sem autoridade definida. |
| E | A malha ponto a ponto multiplica contratos e conversões, ampliando inconsistência e custo de evolução. |

**Atratividade e acessibilidade:** o mapa futuro pode alternar “arquitetura atual” e “arquitetura-alvo”; caixas, setas e estados devem possuir títulos e descrição linear, sem depender de cor ou posição.

## 3. E26-Q-SI-25 — Quem decide e quem responde pela mudança?

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-25 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M04-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Arquitetura corporativa, informação e governança |
| Rastreabilidade | SI-M04 / SI-I; F07, art. 5º, I; art. 6º, VII–VIII |
| difficulty | advanced |
| Objetivo pedagógico | Avaliar um portfólio de mudanças integrando alinhamento, direitos decisórios, responsabilidade, controles e indicadores. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; política, casos e respostas são autorais e fictícios. |
| Complemento documental | Modelo fechado de governança; critérios e evidências integralmente fornecidos no caso. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Priorizar mudanças de tecnologia a partir de alinhamento, responsabilidade, autoridade decisória, controles e medição de resultados.

### Objeto visual proposto — matriz de governança das mudanças

Política fictícia do portfólio:

1. toda mudança precisa de objetivo mensurável e responsável por seus resultados;
2. dados compartilhados precisam de proprietário, regras de acesso e origem conhecida;
3. mudança em processo crítico exige aprovação, registro, teste e possibilidade de reversão;
4. decisão de alto impacto exige responsável interno, revisão e mecanismo de contestação.

| Mudança | Objetivo e indicador | Responsável | Dados e controle | Decisão/retorno |
|---|---|---|---|---|
| U1 — painel de situação dos pedidos | reduzir consultas sem resposta; medir consultas resolvidas | operações | proprietário e origem definidos; acesso por função | teste e reversão definidos |
| U2 — cadastro único de clientes | “centralizar tudo”; sem indicador | não definido | dados confidenciais; origem e acessos não mapeados | fornecedor decidirá durante a implantação |
| U3 — triagem assistida de solicitações | reduzir tempo de encaminhamento; medir correções | atendimento | registros internos; acesso e histórico definidos | baixa confiança vai para revisão; teste e reversão definidos |
| U4 — recusa automática de benefício | reduzir custo; sem medida de erro | fornecedor externo | dados sensíveis; proprietário não definido | sem revisão ou contestação |

### Texto ao jogador

**Contexto.** A organização precisa escolher quais mudanças podem iniciar como piloto sem confundir aquisição de tecnologia com decisão de governança.

**Enunciado.** Qual decisão de portfólio aplica integralmente a política apresentada?

- **A.** Liberar U1–U4 porque o fornecedor de cada solução pode assumir todas as decisões organizacionais.
- **B.** Pilotar U2, pois centralizar dados é sempre prioritário, mesmo sem responsável, origem, acesso ou indicador.
- **C.** Liberar U4, pois reduzir custo é suficiente para dispensar revisão e contestação de uma decisão de alto impacto.
- **D.** Pilotar U1 e U3 com seus responsáveis, controles e indicadores; redesenhar U2 e U4 antes de nova análise para suprir as lacunas de governança.
- **E.** Bloquear permanentemente todo o portfólio, pois governança impede experimentação controlada.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** U1 e U3 vinculam objetivo, responsável, dados, controle e retorno. U2 não define responsabilidade, indicador nem governança da informação. U4 transfere autoridade e elimina revisão em decisão de alto impacto.

| Alternativa | Feedback |
|---|---|
| A | Fornecimento técnico não transfere automaticamente responsabilidade e direitos decisórios da organização. |
| B | Centralização sem proprietário, origem, acesso ou finalidade amplia risco informacional. |
| C | Eficiência isolada não elimina responsabilidade, revisão e contestação exigidas. |
| D | Correta: seleciona mudanças alinhadas e controladas e devolve as lacunas ao processo decisório. |
| E | A política admite pilotos quando objetivo, responsabilidade e controles estão definidos. |

**Atratividade e acessibilidade:** a matriz pode usar cartões com símbolos acompanhados de “definido”, “ausente” e “precisa revisão”. A tabela e a política numerada permanecem disponíveis ao leitor de tela.

## 4. Segunda passagem independente de revisão assistida por IA

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-24 | Somente B satisfaz simultaneamente atualização em cinco minutos, histórico, propriedade e preservação temporária dos sistemas. | A viola restrição; C não governa identidade; D usa chave frágil; E amplia acoplamento. Não se presume produto, protocolo ou fornecedor específico. | manter `under-ai-review` |
| SI-25 | U1/U3 cumprem alinhamento, responsabilidade, informação e controle; U2/U4 possuem lacunas impeditivas explícitas. | A resposta decorre apenas da política fornecida e avalia conceitos clássicos de governança, sem depender de tecnologia específica. | manter `under-ai-review` |

## 5. Auditoria rápida do lote

- Dois IDs novos e distintos: `E26-Q-SI-24` e `E26-Q-SI-25`; nenhum aparece em outro lote.
- Duas questões com cinco alternativas, cinco feedbacks e um gabarito único: B/D.
- Dificuldades `intermediate` e `advanced`, exatamente a lacuna de SI-M04.
- Temas de mercado ancorados em fundamentos clássicos: integração de ecossistema de aplicações e governança de portfólio, informação e direitos decisórios.
- Recursos necessários à decisão: mapa arquitetural, política e matriz de casos; nenhum é decorativo.
- Não há repetição de SI-01 (componente ligado a objetivo), SI-06 (responsabilidade de indicador), TGTI-01 (racionalização) ou TGTI-05 (exceção de conformidade). SI-24 decide transição de identidade/integração; SI-25 integra cinco dimensões de governança num portfólio.
- Nenhum texto ao jogador exibe a referência pedagógica interna reservada ou afirma que o N9 representa política institucional real.
- Permanecem pendentes: teste com estudantes, cotejo externo, calibração, homologação humana de acessibilidade e reavaliação da referência NIST na data de integração.
- Nenhum item foi convertido para JSON ou promovido para `ready-for-pilot`.

## 6. Preparação para etapa futura

Na integração final, SI-24 deverá usar diagrama responsivo com descrição textual e SI-25 uma tabela que se transforme em cartões no celular. Os estados de conformidade deverão combinar texto e ícone, nunca apenas cor. A política fictícia precisa permanecer junto da questão para que a resposta não dependa de conhecimento externo.
