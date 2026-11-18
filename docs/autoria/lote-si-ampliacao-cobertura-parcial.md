# N9 — Jornada Digital: ampliação SI — tópicos parcialmente cobertos

Autoria documental assistida por IA — 18/11/2026. Este lote cria sete questões de reserva, `E26-Q-SI-47` a `E26-Q-SI-53`, para aprofundar tópicos que apareciam apenas parcialmente no banco congelado de SI. Não altera as três jornadas iniciais, não gera JSON e não integra conteúdo ao jogo.

## 1. Inventário do lote

| ID | Tópico principal | Dificuldade | Gabarito | Recurso |
|---|---|---|---|---|
| E26-Q-SI-47 | Pirâmide DIKW | introductory | C | Pirâmide textual e cartões |
| E26-Q-SI-48 | Níveis organizacionais | introductory | A | Painel de decisões por horizonte |
| E26-Q-SI-49 | Ciclo informação–decisão–ação–aprendizagem | intermediate | E | Ciclo de feedback |
| E26-Q-SI-50 | SPT, SIG, SAD e SAE | intermediate | B | Matriz de necessidades |
| E26-Q-SI-51 | Porter e cadeia de valor | advanced | D | Mapa de atividades e indicadores |
| E26-Q-SI-52 | IA clássica: busca em espaço de estados | advanced | C | Grafo ponderado |
| E26-Q-SI-53 | Ágil, qualidade e UML | advanced | E | História, modelo e teste |

Todos os itens usam `classification: SI`, `collectionId: enade-2026`, curso SI e `validationStatus: under-ai-review`. A referência normativa primária é F07 — Portaria Inep 168/2026, arts. 5º–6º — apenas no recorte amplo de informação, decisão, fundamentos de SI, estratégia, modelagem, projetos e dados. Os nomes de modelos e frameworks não são apresentados como enumerações literais da Portaria.

Fontes complementares dirigidas:

- DIKW: Jennifer Rowley, “The wisdom hierarchy”, DOI `10.1177/0165551506070706`; o artigo registra divergências conceituais, portanto a questão fornece suas definições.
- UML: OMG Unified Modeling Language 2.5.1, `https://www.omg.org/spec/UML/`.
- Agilidade: Manifesto for Agile Software Development, `https://agilemanifesto.org/`.
- Porter: Michael E. Porter, *Competitive Advantage* (1985), somente como referência conceitual; cenário e respostas são autorais.

## 2. E26-Q-SI-47 — Da linha bruta à decisão responsável

**Ficha:** SI-M07 / SI-II; área “Dados, informação e conhecimento”; `introductory`. Objetivo: distinguir as quatro camadas de DIKW sem tratá-las como transformação automática ou universal.

### Objeto apresentado

Um serviço fictício possui estes artefatos:

1. linhas com horário, etapa e status de cada solicitação;
2. relatório: “18% das 500 solicitações foram abandonadas após a validação de identidade”;
3. análise de quatro semanas: instruções ambíguas nessa etapa aparecem junto à maior concentração de abandono;
4. decisão: reescrever as instruções, testar com usuários e acompanhar abandono e erros antes de ampliar a mudança.

Para esta questão, use: **dados** = registros observados; **informação** = dados organizados com contexto; **conhecimento** = interpretação sustentada por padrões e experiência; **sabedoria** = julgamento responsável que considera objetivos, limites e consequências.

### Texto ao jogador

**Enunciado.** Qual classificação respeita as definições fornecidas?

- **A.** 1 é sabedoria; 2 é conhecimento; 3 é dado; 4 é informação.
- **B.** 1 é informação; 2 é dado; 3 é sabedoria; 4 é conhecimento.
- **C.** 1 é dado; 2 é informação; 3 é conhecimento; 4 é sabedoria aplicada à decisão.
- **D.** Todos são dados, pois foram armazenados em sistemas digitais.
- **E.** Todos são sabedoria, pois tratam do mesmo serviço.

**Gabarito: C.** A sequência progride de registros para síntese contextualizada, interpretação e decisão responsável. O modelo é uma lente didática; não prova que tecnologia transforme automaticamente uma camada na seguinte.

| A | Inverte os níveis e chama registros brutos de julgamento. |
|---|---|
| B | O percentual contextualizado não é o dado bruto, e a decisão não é mera interpretação. |
| C | Correta: corresponde às quatro definições dadas. |
| D | Armazenamento digital não elimina contexto, interpretação e julgamento. |
| E | Compartilhar o assunto não torna todos os artefatos equivalentes. |

**Acessibilidade:** quatro cartões numerados com texto integral; a forma de pirâmide é decorativa e possui leitura linear equivalente.

## 3. E26-Q-SI-48 — Três decisões, três horizontes

**Ficha:** SI-M04 / SI-I e SI-II; área “Sistemas de informação e níveis organizacionais”; `introductory`. Objetivo: relacionar decisão operacional, gerencial e estratégica a horizonte, agregação e responsabilidade.

### Objeto apresentado

| Decisão | Horizonte | Informação necessária |
|---|---|---|
| D1 | Agora | Confirmar uma entrega específica conforme regra vigente |
| D2 | Próximo mês | Redistribuir equipe usando volume, tempo e capacidade por setor |
| D3 | Próximos três anos | Decidir se a organização abrirá uma nova unidade de atendimento |

### Texto ao jogador

**Enunciado.** Qual associação é mais adequada?

- **A.** D1 operacional; D2 gerencial/tática; D3 estratégica.
- **B.** D1 estratégica; D2 operacional; D3 gerencial.
- **C.** D1 gerencial; D2 estratégica; D3 operacional.
- **D.** As três são operacionais porque usam dados do cotidiano.
- **E.** As três são estratégicas porque podem ser registradas por computador.

**Gabarito: A.** D1 executa uma transação individual; D2 coordena recursos em horizonte intermediário; D3 define direção de longo prazo. O nível depende da decisão, não da tecnologia usada.

| A | Correta: combina escopo, horizonte e responsabilidade. |
|---|---|
| B | Inverte a transação imediata e a direção de longo prazo. |
| C | A abertura de unidade não é uma operação diária. |
| D | Usar dados cotidianos não torna toda decisão operacional. |
| E | Informatização não transforma automaticamente uma decisão em estratégica. |

**Acessibilidade:** tabela vira três cartões no celular; horizonte e tipo aparecem por palavras, não apenas por cor.

## 4. E26-Q-SI-49 — A ação precisa voltar ao ciclo

**Ficha:** SI-M03/SI-M07 / SI-I e SI-II; área “Ciclo informacional e aprendizagem”; `intermediate`. Objetivo: completar um ciclo que liga observação, interpretação, decisão, ação e aprendizagem.

### Convenção desta questão

Materiais diferentes usam CID, CIDAL e outras siglas com sentidos não uniformes. Neste item, o ciclo é definido explicitamente como:

```text
CAPTURAR → INTERPRETAR → DECIDIR → AGIR → APRENDER
    ^                                      |
    └──────── atualizar regra e medida ────┘
```

Um serviço reduz o limite de anexos após observar falhas. Depois da mudança, a equipe mede somente quantas telas foram alteradas; não verifica erros, conclusão nem reclamações.

### Texto ao jogador

**Enunciado.** Qual ação completa adequadamente o ciclo definido?

- **A.** Encerrar a medição porque a mudança já foi implantada.
- **B.** Contar apenas linhas de código, independentemente do efeito no serviço.
- **C.** Manter a regra para sempre, mesmo que novas evidências indiquem piora.
- **D.** Apagar os registros anteriores para evitar comparação entre versões.
- **E.** Comparar erros, conclusão e reclamações antes/depois, interpretar efeitos e usar o aprendizado para manter, ajustar ou reverter a regra.

**Gabarito: E.** A última etapa exige observar consequências e devolver o aprendizado à captura, às medidas e à decisão seguinte.

| A | Sem retorno, o ciclo termina na implantação. |
|---|---|
| B | Produção técnica não mede o resultado declarado do serviço. |
| C | Aprendizagem exige possibilidade de revisão. |
| D | Remover a referência impede avaliar mudança. |
| E | Correta: fecha a retroalimentação com indicadores pertinentes. |

**Acessibilidade:** ciclo com setas rotuladas e descrição linear; a sigla não é requisito para responder.

## 5. E26-Q-SI-50 — Registrar, resumir, simular ou orientar a direção?

**Ficha:** SI-M03/SI-M07 / SI-II; área “Classificação funcional dos sistemas de informação”; `intermediate`. Objetivo: distinguir SPT, SIG, SAD e SAE pelas necessidades fornecidas.

### Definições usadas

- **SPT:** registra e controla transações rotineiras detalhadas.
- **SIG:** produz relatórios gerenciais periódicos e agregados.
- **SAD:** compara alternativas e cenários para apoiar decisão sem substituí-la.
- **SAE:** reúne indicadores altamente agregados para acompanhamento estratégico da alta direção.

Necessidades: N1 registrar cada pagamento; N2 acompanhar custos mensais por unidade; N3 simular três políticas de estoque; N4 acompanhar metas plurianuais em painel executivo.

### Texto ao jogador

**Enunciado.** Qual mapeamento está correto?

- **A.** N1 SAE; N2 SAD; N3 SIG; N4 SPT.
- **B.** N1 SPT; N2 SIG; N3 SAD; N4 SAE.
- **C.** N1 SIG; N2 SPT; N3 SAE; N4 SAD.
- **D.** N1 SAD; N2 SAE; N3 SPT; N4 SIG.
- **E.** Todas são SAE porque chegam a alguma pessoa responsável.

**Gabarito: B.** A granularidade e a finalidade distinguem registro transacional, relatório gerencial, simulação e acompanhamento executivo.

| A | Coloca o registro detalhado no nível mais agregado. |
|---|---|
| B | Correta: cada necessidade corresponde à função definida. |
| C | Troca operação, gerência e direção. |
| D | Um simulador não é o sistema que registra cada transação. |
| E | Destinatário humano não elimina diferenças de finalidade e agregação. |

**Acessibilidade:** siglas sempre acompanhadas dos nomes e definições; matriz em texto linear no celular.

## 6. E26-Q-SI-51 — Tecnologia no elo que sustenta a estratégia

**Ficha:** SI-M04 / SI-I; área “Estratégia competitiva e cadeia de valor”; `advanced`. Objetivo: relacionar estratégia, atividade de valor, evidência e iniciativa de TI sem escolher tecnologia por novidade.

### Objeto apresentado

Uma assistência técnica fictícia compete por **rapidez com reparo confiável**.

| Atividade | Evidência |
|---|---|
| Recebimento de peças | 35% chegam sem vínculo ao chamado e exigem conferência manual |
| Operações de reparo | tempo técnico dentro da meta em 91% dos casos |
| Serviço pós-reparo | 18% dos clientes ligam porque não veem teste final e previsão de retirada |

Na cadeia de valor, recebimento apoia as operações; pós-reparo sustenta o serviço ao cliente. O orçamento permite uma iniciativa neste ciclo.

### Texto ao jogador

**Enunciado.** Qual iniciativa está mais alinhada à estratégia e às evidências?

- **A.** Comprar telas maiores para a diretoria, sem alterar fluxo ou informação ao cliente.
- **B.** Criar uma rede social interna sem integração com chamados, peças ou testes.
- **C.** Substituir toda a infraestrutura porque uma tecnologia mais nova está disponível.
- **D.** Integrar peça ao chamado no recebimento e tornar teste final e previsão visíveis ao cliente, medindo espera e retorno após um piloto.
- **E.** Automatizar apenas a etapa de reparo, que já atende à meta em 91% dos casos.

**Gabarito: D.** A proposta atua nos elos com evidência de perda e reforça rapidez confiável e visibilidade, com medição do efeito. Não presume que qualquer investimento gere vantagem.

| A | Não existe vínculo demonstrado com a estratégia ou os gargalos. |
|---|---|
| B | Comunicação isolada não corrige rastreabilidade nem visibilidade. |
| C | Novidade não é critério suficiente de alinhamento. |
| D | Correta: conecta estratégia, atividades e indicadores. |
| E | Prioriza a atividade que já apresenta melhor desempenho. |

**Acessibilidade:** mapa de cadeia acompanhado de tabela e descrição; nenhuma conclusão depende da posição gráfica dos elos.

## 7. E26-Q-SI-52 — Encontrar o caminho sem testar todos ao acaso

**Ficha:** SI-M02/SI-M09 / SI-I; área “Inteligência artificial e busca”; `advanced`. Objetivo: aplicar busca de custo uniforme a um espaço de estados pequeno.

### Objeto apresentado

Um agente precisa ir de S até G. Os números são custos não negativos:

```text
S --2--> A --5--> G
|         \
1          1
v           v
B --3--> C --2--> G
 \--7----------------> G
```

Não há outras arestas. A busca de custo uniforme sempre expande primeiro o caminho acumulado de menor custo e termina quando remove G da fronteira.

### Texto ao jogador

**Enunciado.** Qual caminho de menor custo será aceito?

- **A.** S → B → G, custo 8.
- **B.** S → A → G, custo 7.
- **C.** S → A → C → G, custo 5.
- **D.** S → B → C → G, custo 6.
- **E.** Todos possuem o mesmo custo porque chegam ao mesmo estado.

**Gabarito: C.** Os custos são 8, 7, 5 e 6. Com arestas não negativas, a busca de custo uniforme encontra C como menor caminho completo.

| A | Soma 1 + 7 = 8. |
|---|---|
| B | Soma 2 + 5 = 7. |
| C | Correta: 2 + 1 + 2 = 5. |
| D | Soma 1 + 3 + 2 = 6. |
| E | Estado final igual não implica custo acumulado igual. |

**Acessibilidade:** o grafo possui lista textual completa das arestas; não depende de geometria ou cor.

## 8. E26-Q-SI-53 — História, modelo e teste contando a mesma regra

**Ficha:** SI-M06 / SI-I e SI-II; área “Métodos ágeis, qualidade e UML”; `advanced`. Objetivo: verificar coerência entre história, modelo de classes e teste de aceitação.

### Objeto apresentado

História: “Como responsável pelo laboratório, quero reservar um equipamento disponível para impedir duas reservas ativas no mesmo horário.”

Regra: uma `Reserva` pertence a exatamente um `Equipamento`; um equipamento pode ter várias reservas em horários diferentes; intervalos sobrepostos ativos devem ser rejeitados.

### Texto ao jogador

**Enunciado.** Qual conjunto mantém rastreabilidade e oferece evidência adequada dentro de uma iteração curta?

- **A.** UML mostra `Reserva` sem relação com `Equipamento`; o teste verifica apenas se a tela abre.
- **B.** UML usa herança `Reserva é Equipamento`; o teste aceita duas reservas sobrepostas.
- **C.** A equipe implementa antes de definir critério e considera qualidade comprovada pela velocidade.
- **D.** O critério exige rejeitar qualquer segunda reserva, inclusive em outro dia, contrariando a história.
- **E.** UML associa muitas reservas a um equipamento e cada reserva a um equipamento; critérios testam intervalo livre aceito, sobreposição ativa rejeitada e horários distintos preservados.

**Gabarito: E.** O modelo representa as entidades e multiplicidades do domínio; os testes verificam sucesso, conflito e coexistência válida, ligados à regra da história.

| A | Sem associação, o modelo não expressa a regra por equipamento. |
|---|---|
| B | Reserva não é subtipo de equipamento, e o teste contradiz a regra. |
| C | Velocidade não substitui critério observável nem evidência. |
| D | A regra proíbe sobreposição, não toda reserva futura. |
| E | Correta: história, modelo e testes descrevem a mesma necessidade. |

**Acessibilidade:** o diagrama futuro terá multiplicidades e relação descritas em texto; a história e os três testes permanecem legíveis sem UML visual.

## 9. Segunda revisão e decisão

| ID | Verificação independente | Decisão |
|---|---|---|
| SI-47 | As quatro definições fecham a classificação; apenas C mantém a ordem sem automatizar a passagem entre níveis. | `under-ai-review` |
| SI-48 | Escopo e horizonte tornam A a única associação defensável. | `under-ai-review` |
| SI-49 | Somente E observa efeito e devolve aprendizado ao ciclo definido. | `under-ai-review` |
| SI-50 | As definições fornecidas produzem unicamente SPT/SIG/SAD/SAE em B. | `under-ai-review` |
| SI-51 | D é a única iniciativa ligada simultaneamente à estratégia, aos dois gargalos e à medição. | `under-ai-review` |
| SI-52 | Custos recalculados: 8, 7, 5 e 6; C é único mínimo. | `under-ai-review` |
| SI-53 | Somente E preserva domínio, multiplicidade, regra e cobertura de testes. | `under-ai-review` |

Pendências mantidas: confirmação no PPC, calibração com estudantes, cotejo externo de originalidade e validação humana de acessibilidade. Nenhum item altera o banco congelado ou recebeu `ready-for-pilot`.
