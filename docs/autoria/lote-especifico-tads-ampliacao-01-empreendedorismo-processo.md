# N9 — Jornada Digital: ampliação de TADS 01 — empreendedorismo, configuração e processo

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-TADS-11` a `E26-Q-TADS-15` para preencher as lacunas registradas na matriz de capacidade ampliada de Tecnologia em Análise e Desenvolvimento de Sistemas.

O lote trabalha empreendedorismo como investigação e decisão apoiada por evidências, sem glamourizar startups nem tratar uma técnica como fórmula universal. Gerência de configuração e processo de software aparecem em situações de entrega profissional. Não há JSON, integração ao catálogo ou alteração do jogo; todos os itens permanecem em `under-ai-review`.

## 1. Inventário e distribuição

| ID | Objeto da Portaria 169/2026 | Conteúdo | Dificuldade | Gabarito | Recurso apresentado |
|---|---|---|---|---|---|
| E26-Q-TADS-11 | IV — Empreendedorismo | Problema, público e evidência | introductory | B | Cartões de descoberta |
| E26-Q-TADS-12 | IV — Empreendedorismo | MVP, hipótese e métrica | intermediate | D | Painel de experimento |
| E26-Q-TADS-13 | IV — Empreendedorismo | Viabilidade sob restrições | introductory | A | Comparador de alternativas |
| E26-Q-TADS-14 | VII — Gerência de configuração | Baseline e reprodução de release | intermediate | E | Árvore de versões e manifesto |
| E26-Q-TADS-15 | XIX — Processo de software | Processo incremental com controle | intermediate | C | Fluxo de ciclo de vida |

Distribuição: duas `introductory`, três `intermediate` e nenhuma `advanced`; gabaritos B/D/A/E/C. Os únicos cálculos consistem em subtrair custos de receitas e comparar limites explícitos em TADS-13.

## 2. Correspondência normativa

| Referência | Papel | Correspondência |
|---|---|---|
| F08 — Portaria Inep 169/2026 | `primary` | Art. 5º, competência I e habilidades de análise de tabelas, projetos e ciclo de vida; art. 6º, IV, VII e XIX. |
| T66 — Sebrae, materiais de validação de ideias e MVP | `technical` | Apoia hipótese explícita, experimento proporcional e evidência antes de investimento. Não determina os cenários nem promete sucesso empresarial. |
| T67 — IEEE Computer Society, SWEBOK, área de Software Configuration Management | `technical` | Apoia identificação de configuração, baseline, controle, auditoria e release. O manifesto e os commits de TADS-14 são fictícios. |
| T68 — ISO/IEC/IEEE 12207:2026 | `technical` | Apoia processos de ciclo de vida aplicáveis iterativa e incrementalmente. A norma não impõe um único modelo; TADS-15 deriva a escolha das restrições fornecidas. |

URLs: `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf`, `https://blog.rn.sebrae.com.br/como-validar-ideia/`, `https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics` e `https://www.iso.org/standard/90219.html`.

Limitações: a reprodução da ABMES hospeda o texto do DOU, mas não é o órgão emissor. O conteúdo completo de normas técnicas pode exigir acesso licenciado; somente resumos públicos e conceitos consolidados foram usados. A viabilidade de um empreendimento real depende de contexto, mercado, pessoas, legislação e dados não reproduzidos nestes exercícios.

## 3. E26-Q-TADS-11 — Antes de construir, descobrir o problema

**Ficha editorial:** versão 1; `classification: TADS`; `courses: [TADS]`; área “Empreendedorismo”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: escolher uma investigação inicial que conecte problema, público e evidência antes da construção. Fontes: F08 principal; T66 técnica.

### Cartões de descoberta

Uma equipe pensa em criar um aplicativo para reduzir desistências nas monitorias do campus. Até agora, possui apenas o comentário de uma pessoa: “seria bom receber ajuda mais rápido”. Antes de programar a solução completa, a equipe quer verificar se existe um problema recorrente e para quem ele ocorre.

| Cartão | Informação ainda necessária |
|---|---|
| Público | Quem tenta usar a monitoria e em qual situação? |
| Problema | Em que etapa ocorre a desistência e com que frequência? |
| Evidência | Registros, observações ou entrevistas convergem sobre a dificuldade? |

Descrição equivalente: os três cartões pedem identificar pessoas, contexto, frequência e evidências; não apresentam uma solução como já validada.

**Enunciado.** Qual próximo passo produz evidência mais útil com menor investimento inicial?

- **A.** Construir imediatamente todos os módulos e interpretar o esforço de programação como prova de demanda.
- **B.** Analisar registros disponíveis e conversar com pessoas do público-alvo sobre o percurso, registrando padrões e hipóteses que possam ser testadas.
- **C.** Escolher a tecnologia mais recente antes de definir quem enfrenta o problema.
- **D.** Perguntar somente se as pessoas “gostam de aplicativos”, sem investigar a tarefa ou a desistência.
- **E.** Publicar que a solução eliminou desistências antes de medir a situação atual.

**Gabarito: B.** A alternativa B investiga o comportamento e o contexto antes de assumir uma solução. Ela pode revelar frequência, etapas críticas e grupos afetados, permitindo formular uma hipótese testável sem construir o produto completo.

| Alternativa | Feedback |
|---|---|
| A | Esforço de desenvolvimento não demonstra que o público tenha o problema proposto. |
| B | Correta: conecta público, percurso e evidências antes do investimento maior. |
| C | Tecnologia é uma decisão posterior; não substitui a compreensão do problema. |
| D | Preferência genérica por aplicativos não evidencia a causa da desistência. |
| E | Afirmar impacto antes da medição cria uma conclusão sem evidência. |

**Revisão independente:** somente B coleta evidências diretamente relacionadas ao problema e mantém a hipótese aberta a revisão. O item avalia raciocínio empreendedor inicial, não pesquisa acadêmica completa nem garantia de mercado.

## 4. E26-Q-TADS-12 — O MVP precisa responder a uma pergunta

**Ficha editorial:** versão 1; `classification: TADS`; `courses: [TADS]`; área “Empreendedorismo”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: relacionar hipótese, experimento de MVP e métrica observável. Fontes: F08 principal; T66 técnica.

### Painel do experimento

Hipótese da equipe: **“Estudantes que visualizam horários livres em um painel simples conseguem reservar monitoria sem pedir ajuda à secretaria.”**

O primeiro experimento deve durar uma semana, usar horários reais autorizados e não receber pagamentos. A equipe consegue disponibilizar um protótipo navegável para 30 participantes e registrar conclusão, abandono e pedidos de ajuda.

**Enunciado.** Qual plano testa mais diretamente a hipótese declarada?

- **A.** Medir apenas quantas cores o protótipo possui e concluir que mais cores significam maior autonomia.
- **B.** Divulgar uma apresentação sobre o produto sem permitir que participantes tentem reservar um horário.
- **C.** Implementar pagamentos, recomendação automática e integração nacional antes de observar o fluxo central.
- **D.** Pedir que os 30 participantes tentem concluir a reserva no protótipo e medir conclusão, abandono e necessidade de ajuda segundo critérios definidos antes do teste.
- **E.** Contar apenas elogios espontâneos, descartando tentativas incompletas e solicitações de suporte.

**Gabarito: D.** A hipótese trata de concluir uma reserva com autonomia. D oferece o fluxo mínimo necessário e mede diretamente conclusão, abandono e ajuda, incluindo resultados desfavoráveis. Os dados apoiam uma decisão posterior, mas não garantem sucesso em toda população.

| Alternativa | Feedback |
|---|---|
| A | Aparência não mede diretamente conclusão ou autonomia no fluxo. |
| B | Sem tentativa de reserva, o comportamento central não é observado. |
| C | Recursos adicionais elevam custo e confundem o teste da hipótese principal. |
| D | Correta: alinha público, tarefa, protótipo e métricas observáveis. |
| E | Excluir falhas produz evidência enviesada e impede avaliar a hipótese. |

**Revisão independente:** somente D testa a ação definida na hipótese e preserva falhas como evidência. O item não afirma que 30 participantes representem todo o mercado; o recorte é um piloto de aprendizagem.

## 5. E26-Q-TADS-13 — Qual piloto cabe nas quatro restrições?

**Ficha editorial:** versão 1; `classification: TADS`; `courses: [TADS]`; área “Empreendedorismo”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar uma alternativa viável segundo custo, retorno esperado, prazo e dependência validados. Fontes: F08 principal; T66 técnica.

### Comparador de alternativas

Uma equipe dispõe de quatro semanas para testar um serviço digital. A política do piloto exige simultaneamente:

- custo operacional mensal de até `R$ 1.500`;
- receita mensal estimada de pelo menos `R$ 300` acima do custo;
- primeira entrega em até quatro semanas;
- dependência externa crítica já testada no protótipo.

| Alternativa | Custo mensal | Receita mensal estimada | Entrega | Dependência crítica |
|---|---:|---:|---:|---|
| P | R$ 1.400 | R$ 1.800 | 4 semanas | testada |
| Q | R$ 1.000 | R$ 1.200 | 3 semanas | testada |
| R | R$ 1.600 | R$ 2.100 | 4 semanas | testada |
| S | R$ 1.300 | R$ 1.750 | 6 semanas | testada |
| T | R$ 1.200 | R$ 1.650 | 4 semanas | não testada |

Os valores são projeções fictícias para comparação, não promessa de receita.

**Enunciado.** Qual alternativa atende às quatro restrições do piloto?

- **A.** P.
- **B.** Q.
- **C.** R.
- **D.** S.
- **E.** T.

**Gabarito: A.** P custa até R$ 1.500, possui diferença estimada de R$ 400, entrega em quatro semanas e teve a dependência testada. Cada outra alternativa viola exatamente uma das condições.

| Alternativa | Feedback |
|---|---|
| A | Correta: P satisfaz custo, diferença mínima, prazo e teste da dependência. |
| B | Q possui diferença de apenas R$ 200 entre receita estimada e custo. |
| C | R ultrapassa o custo mensal máximo em R$ 100. |
| D | S exige seis semanas, acima do prazo disponível. |
| E | T atende aos números, mas sua dependência crítica ainda não foi testada. |

**Revisão independente:** os quatro critérios foram aplicados linha a linha e somente P permanece. O item não calcula lucro contábil, fluxo de caixa ou viabilidade definitiva; compara projeções sob uma política fechada.

## 6. E26-Q-TADS-14 — Reproduzir exatamente a versão do piloto

**Ficha editorial:** versão 1; `classification: TADS`; `courses: [TADS]`; área “Gerência de configuração”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar uma baseline reproduzível com identificação de código, dependências, ferramenta e configuração. Fontes: F08 principal; T67 técnica.

### Árvore e manifesto apresentados

```text
a81  ← tag piloto-1
 └─ b52  ← correção posterior ainda não liberada
```

O pacote `piloto-1` foi construído a partir de `a81`. O repositório também contém:

- `dependencias.lock`, cujo hash na entrega era `L7`;
- ferramenta de build versão `3.2`;
- configuração `producao.yml`, hash `C4`;
- ambiente de execução `Node 20`.

O objetivo é reproduzir o pacote entregue, não reconstruir automaticamente a versão mais recente.

**Enunciado.** Qual registro forma a baseline mais adequada para reprodução e auditoria de `piloto-1`?

- **A.** Apenas o nome do projeto, usando sempre o commit e as dependências mais recentes.
- **B.** Somente a data da entrega, presumindo que todos os arquivos daquele dia eram equivalentes.
- **C.** O commit `b52`, porque qualquer alteração posterior passa a fazer parte retroativamente da entrega.
- **D.** Apenas uma cópia do executável, sem identificar código, dependências ou configuração usados.
- **E.** Tag/commit `a81`, hash `L7`, build `3.2`, configuração `C4`, ambiente `Node 20` e vínculo com o pacote produzido.

**Gabarito: E.** A alternativa E identifica os itens necessários para reconstruir e conferir a entrega. Ela preserva a baseline de `piloto-1` e mantém `b52` como mudança posterior, que exige seu próprio controle antes de nova liberação.

| Alternativa | Feedback |
|---|---|
| A | Componentes mais recentes podem produzir comportamento diferente da entrega auditada. |
| B | Data não identifica de forma unívoca versões e configurações. |
| C | Mudança posterior não altera retroativamente a baseline já liberada. |
| D | O executável ajuda a preservar a entrega, mas sozinho não registra como reproduzi-la. |
| E | Correta: identifica código, dependências, ferramenta, configuração, ambiente e produto. |

**Revisão independente:** somente E conserva todas as referências declaradas. O item não afirma que o conjunto seja suficiente para qualquer sistema real; ele é suficiente no ambiente fechado descrito.

## 7. E26-Q-TADS-15 — Entregar em ciclos sem perder a regra obrigatória

**Ficha editorial:** versão 1; `classification: TADS`; `courses: [TADS]`; área “Processo de software”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: escolher um processo incremental compatível com feedback frequente, requisito estável e verificação contínua. Fontes: F08 principal; T68 técnica.

### Restrições do produto

Uma equipe desenvolverá um portal em oito semanas. O contexto estabelece:

1. uma regra legal de retenção está definida e deve permanecer rastreável em todas as entregas;
2. pessoas usuárias avaliarão um incremento funcional a cada duas semanas;
3. itens de interface poderão ser repriorizados após cada avaliação;
4. cada incremento precisa passar por testes de regressão antes da demonstração.

Fluxo visual pretendido:

```text
baseline da regra obrigatória
          ↓
planejar incremento → implementar → testar → demonstrar
          ↑                                  ↓
          └──── repriorizar itens permitidos ┘
```

Descrição equivalente: a regra obrigatória permanece rastreável; funcionalidades são entregues, testadas e avaliadas em ciclos de duas semanas; somente itens permitidos retornam para repriorização.

**Enunciado.** Qual plano de processo atende melhor às quatro condições?

- **A.** Congelar todos os detalhes no primeiro dia, impedir avaliações intermediárias e testar somente depois das oito semanas.
- **B.** Alterar também a regra legal a cada opinião informal, sem registrar versões ou impacto.
- **C.** Trabalhar em incrementos de duas semanas, rastrear a regra obrigatória, executar regressão em cada ciclo e repriorizar os demais itens com base no feedback registrado.
- **D.** Demonstrar telas a cada duas semanas, mas deixar integração e testes para depois da entrega final.
- **E.** Abandonar qualquer processo e permitir que cada pessoa publique mudanças diretamente em produção.

**Gabarito: C.** C combina entrega incremental, feedback e adaptação com os controles explícitos do caso. A regra obrigatória continua rastreável e cada incremento é verificado antes da demonstração.

| Alternativa | Feedback |
|---|---|
| A | Impede o feedback periódico e adia a verificação exigida. |
| B | A regra declarada como obrigatória não pode ser tratada como item informal sem controle. |
| C | Correta: atende cadência, rastreabilidade, testes e repriorização delimitada. |
| D | Demonstrações sem integração e regressão não cumprem a definição de incremento funcional testado. |
| E | Ausência de processo e controle contraria todas as restrições apresentadas. |

**Revisão independente:** somente C satisfaz as quatro condições simultaneamente. A questão não declara que processo incremental seja sempre superior; a decisão decorre do feedback frequente e dos controles definidos no cenário.

## 8. Segunda passagem de revisão assistida por IA

| ID | Verificação de unicidade | Engajamento e acessibilidade | Limitação | Estado |
|---|---|---|---|---|
| TADS-11 | Somente B investiga público, percurso e evidência antes de construir. | Três cartões também descritos em texto; cenário curto de campus. | Não substitui pesquisa de mercado completa. | `under-ai-review` |
| TADS-12 | Somente D relaciona a ação da hipótese às três métricas disponíveis. | Painel textual, tarefa concreta e métricas nomeadas. | Piloto de 30 pessoas não autoriza generalização populacional. | `under-ai-review` |
| TADS-13 | P é a única linha que satisfaz as quatro restrições. | Tabela pequena, valores escritos e feedback de cada restrição. | Projeções fictícias não representam lucro ou garantia comercial. | `under-ai-review` |
| TADS-14 | Somente E identifica todos os elementos declarados da baseline. | Árvore curta com descrição completa e hashes textuais. | Sistemas reais podem exigir artefatos adicionais. | `under-ai-review` |
| TADS-15 | Somente C combina ciclos, rastreabilidade, regressão e repriorização permitida. | Fluxo linear com equivalente textual; nenhuma decisão depende de cor. | Não prescreve um método ou framework universal. | `under-ai-review` |

## 9. Auditoria editorial e originalidade interna

- Os IDs `E26-Q-TADS-11` a `E26-Q-TADS-15` estavam reservados apenas na matriz de capacidade e não correspondiam a questões redigidas.
- Cada item possui cinco alternativas, uma resposta fundamentada, explicação e feedback A–E.
- O lote contém duas questões introdutórias, três intermediárias e nenhuma avançada.
- TADS-11 investiga o problema; TADS-12 testa uma hipótese; TADS-13 compara viabilidade. Os três itens de empreendedorismo mobilizam operações cognitivas diferentes.
- TADS-14 trata reprodução de baseline e não repete TGTI-14, cujo foco é decisão sobre mudança de escopo. TADS-15 trata a estrutura do processo e não repete SI-53 ou SI-63, centradas respectivamente em coerência de artefatos e maturidade.
- Nenhuma resposta depende exclusivamente de cor, som, movimento ou posição. Tabelas, árvore e fluxo possuem descrições equivalentes.
- Os textos foram projetados para cartões e rolagem curta no celular; valores e regras necessárias aparecem no próprio enunciado.
- Nenhum texto apresentado ao jogador utiliza o nome da avaliação externa. A origem normativa permanece apenas na documentação interna.
- Permanecem pendentes: cotejo externo amplo, revisão técnica humana, calibração com estudantes, confirmação nos PPCs e homologação humana de acessibilidade.

## 10. Efeito na capacidade de TADS

| Área da Portaria 169/2026 | Antes | Itens acrescentados | Depois |
|---|---:|---|---:|
| IV — Empreendedorismo | 0 | TADS-11; TADS-12; TADS-13 | 3 |
| VII — Gerência de configuração | 2 | TADS-14 | 3 |
| XIX — Processo de software | 2 | TADS-15 | 3 |

Com este lote, os vinte objetos de TADS atingem ao menos três candidatas na matriz editorial. O núcleo conservador passa de 55 para 60 questões distintas, sujeito à formalização posterior de `courses`, fontes e rastreabilidade nos formatos executáveis. A autoria de novas questões de TADS deve parar até a composição e auditoria das três partidas-base.

## 11. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Elegibilidade | Potencial de engajamento | Clareza no celular | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-TADS-11 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TADS-12 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TADS-13 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TADS-14 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TADS-15 | pendente | pendente | pendente | pendente | pendente | — |

Próxima etapa recomendada: não criar outro lote de TADS. Recalcular a capacidade de TGTI com todos os compartilhamentos já produzidos antes de decidir suas novas questões.
