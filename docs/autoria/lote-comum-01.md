# N9 — Jornada Digital: lote comum 01

Proposta de autoria inicial — 13/11/2026, horário de Brasília. **Todo o conteúdo está sujeito à revisão docente dos cinco cursos.** N9 é uma identidade provisória, sujeita à aprovação institucional. Autoria assistida por IA; responsável humano pela consolidação a designar. Este material não é oficial nem tem chancela do Inep.

Escopo fechado: cinco questões E26-Q-COM-01 a E26-Q-COM-05 e o puzzle E26-P-COM-01. Nenhum outro slot foi elaborado. Esta entrega não gera JSON, não importa conteúdos nem implementa missão ou desbloqueio.

## 1. Base e convenções editoriais

Consolidação editorial documental de 13/11/2026: aplicar o [padrão editorial do lote-piloto](padrao-editorial-piloto.md). Ajustes desta revisão: dicas graduais do puzzle e clareza sobre o registro de consulta anterior. Os seis IDs, competências, versões dos itens, gabaritos, ordem correta, recompensa e status foram preservados. Esta consolidação não reabre a autoria nem aprova os itens.

Base documental: `referencias-enade-2026.md`, `matriz-pedagogica.md`, `docs/plano-colecao-enade-2026.md` v2.0, `docs/estrutura-dados-desafios.md`, `docs/exemplo-desafios.json`, `docs/especificacao-missao-mista.md` e `docs/identidade-n9.md`. O plano vigente prevalece sobre dimensionamentos históricos. Contratos confrontados com Question e SequencePuzzle atuais.

Segundo o registro da autoria inicial, as fontes indicadas nos slots foram consultadas antes da redação em 13/11/2026. Esta consolidação documental não realizou nova consulta normativa; preserva os resultados e limites de acesso registrados a seguir. Os seis endereços individuais do DOU retornaram erro 502. Os textos dos atos foram recuperados em reproduções identificadas; o índice oficial do Inep também foi consultado. Não se declara acesso bem-sucedido à versão certificada do DOU. O PDF de Formação Geral na UFC apresentou extração limitada; seus artigos foram conferidos na reprodução da UFSJ. ABMES hospeda reproduções, não é órgão emissor. URLs e localizadores na seção 9.

- **Oficial:** competências, habilidades e objetos dos artigos identificados. As normas não fornecem narrativas, dados, respostas ou procedimento desta proposta.
- **Histórico:** sínteses de formato e temas nos documentos locais, especialmente Formação Geral de Administração 2025. Não houve leitura direta adicional dos cadernos históricos nesta autoria nem comparação exaustiva.
- **Inferência pedagógica/autoria:** recortes, dificuldades do plano, objetivos, registros sintéticos, mensagens, regras locais, distratores, feedbacks e dependências da sequência.
- **Pendente:** PPC/oferta concreta, comparação independente de similaridade, parecer docente e homologação de acessibilidade na interface.

Narrativas e dados são fictícios. Não se utilizam logotipo, slogan ou dados reais da UNINOVE. A origem pedagógica interna fica fora dos textos ao jogador.

`question` identifica o contrato, sem criar campo `kind` em Question. Título editorial, objetivo, ambiguidades, originalidade e pareceres são documentação, não campos novos do objeto estrito. O puzzle usa `kind: sequence`; versão documental não cria campo no contrato atual. As competências são sínteses pedagógicas, não novos códigos oficiais.

## 2. E26-Q-COM-01 — O alcance do novo horário

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-01 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | O alcance do novo horário |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Educação, desenvolvimento e saúde |
| Competências / competencies | Examinar evidências de acesso educacional para fundamentar decisões; avaliar argumentos distinguindo descrição de explicação causal. |
| Rastreabilidade | COMUM-FG04 / FG-II; F05, art. 5º, II, b.2; art. 6º, III e XII |
| difficulty | introductory — conforme o plano |
| Objetivo pedagógico | Distinguir conclusão descritiva de inferência causal sem evidência. |
| Fonte oficial principal | F05 — Portaria Inep nº 154, de 14/04/2026, arts. 5º–6º; ficha completa na seção 9 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa de Formação Geral para caso autoral de acesso educacional; cenário e dados sintéticos, sem autoria ou chancela do Inep. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

### Texto ao jogador

**Contexto.** Na Base N9 fictícia, uma oficina de organização dos estudos passou a oferecer um horário à noite. O registro acompanha as mesmas 40 pessoas convidadas em duas semanas. Todas responderam em ambas. “Conseguiu participar” significa ter comparecido a pelo menos um encontro naquela semana; cada pessoa foi contada uma vez por semana.

**Dados inteiramente fictícios para o jogo.**

| Período | Pessoas convidadas | Pessoas que conseguiram participar |
|---|---:|---:|
| Semana anterior ao novo horário | 40 | 16 |
| Semana com o novo horário | 40 | 24 |

O registro não informa motivos de participação nem mede bem-estar. Não houve grupo de comparação.

**Enunciado.** Qual conclusão a equipe pode registrar com base nessas informações?

- **A.** O novo horário explica o aumento de participação, pois foram acompanhadas as mesmas pessoas.
- **B.** A melhora no bem-estar explica o aumento de participação, pois a oficina organiza os estudos.
- **C.** A participação registrada aumentou de 16 para 24 pessoas, sem demonstrar a causa dessa mudança.
- **D.** A oficina alcançou oito participantes pela primeira vez, pois a diferença entre os registros foi de oito pessoas.
- **E.** O aumento observado representa a situação do campus, pois as mesmas pessoas responderam nas duas semanas.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** A quantidade aumentou em oito, de 16 para 24, no grupo acompanhado. As proporções são 40% e 60%, diferença de 20 pontos percentuais. Isso descreve o registro, sem isolar o efeito do horário. Sem cruzar presenças individuais, a diferença não revela quantas pessoas participaram pela primeira vez. Não há medida de bem-estar ou demonstração de representatividade do campus.

| Alternativa | Feedback específico |
|---|---|
| A | Acompanhar as mesmas pessoas mantém o grupo comparável, mas outros fatores podem ter mudado. O registro não separa o efeito do horário desses fatores. |
| B | O objetivo da oficina não é uma medida de resultado. Nenhuma informação de bem-estar foi coletada para sustentar essa explicação. |
| C | Correto: você descreveu os dois registros e respeitou seu limite. O aumento observado não demonstra por que houve a mudança. |
| D | Oito é a diferença entre totais. Sem cruzar presenças individuais, não sabemos quantas pessoas entraram, permaneceram ou deixaram de participar. |
| E | Acompanhar as mesmas pessoas não torna o grupo representativo do campus. O registro permite falar das 40 pessoas convidadas. |

### Originalidade e revisão

- **Competência de partida:** avaliar argumentos com evidências de acesso educacional.
- **Raciocínio exigido:** separar contagens, identificação de indivíduos, causalidade e generalização, sem estatística especializada.
- **Histórico eventualmente analisado:** síntese local de Administração 2025, inclusive Q14, PDF p. 12, gabarito C, e Q15, p. 13, gabarito B; leitura indireta, sem releitura dos PDFs nesta autoria. Gabarito histórico não determina resposta autoral.
- **Diferenças:** duas observações do mesmo grupo com limite de identificação individual, sem matrícula, mortalidade ou comparação regional. A decisão trata do alcance do registro.
- **Elementos autorais:** oficina, definição de presença, tabela e quatro extrapolações distintas: causalidade, saúde não medida, saldo versus novos participantes e representatividade.
- **Risco de similaridade:** tabela seguida de conclusão é formato recorrente; comparar premissas, relações e distratores com acervo e exemplos do jogo, não só palavras.
- **Possíveis ambiguidades:** preservar “pela primeira vez” em D; “mesmas pessoas” refere-se às convidadas/respondentes, não à identidade de quem compareceu.
- **Pontos para revisão docente:** denominadores, saldo de oito, 40%/60%, pontos percentuais, limites causais e dificuldade introdutória. Confirmar C como única melhor resposta.

## 3. E26-Q-COM-02 — A lista de apoio

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-02 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | A lista de apoio |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Ética, cidadania e trabalho |
| Competências / competencies | Avaliar consequências sociais do uso de informações pessoais; selecionar conduta coerente com direitos e finalidade explicitados. |
| Rastreabilidade | COMUM-FG01 / FG-II; F05, art. 5º, II, b.3; art. 6º, I |
| difficulty | introductory — conforme o plano |
| Objetivo pedagógico | Selecionar conduta compatível com direitos explicitados no caso. |
| Fonte oficial principal | F05 — Portaria Inep nº 154, de 14/04/2026, arts. 5º–6º; seção 9 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa sobre ética e implicações sociais para caso autoral de informação pessoal; regras locais fictícias, sem transcrição de lei. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

### Texto ao jogador

**Contexto.** No Ponto de Apoio N9 fictício, pessoas solicitaram ajuda para acessar materiais de estudo. Elas informaram nome, contato e uma descrição de sua dificuldade. O acordo de atendimento garante privacidade e limita esses dados ao retorno individual pela equipe de apoio.

Uma equipe de divulgação quer convidar o público para uma nova oficina. Precisa divulgar a atividade, mas não precisa conhecer quem pediu ajuda. O Ponto de Apoio dispõe de um mural público de avisos.

**Enunciado.** Qual encaminhamento atende à divulgação e respeita o acordo de atendimento descrito?

- **A.** Publicar o convite no mural e manter os registros pessoais restritos à equipe de apoio.
- **B.** Entregar nomes e contatos à divulgação e manter as descrições das dificuldades na equipe de apoio.
- **C.** Publicar os pedidos com iniciais no mural e manter os contatos completos na equipe de apoio.
- **D.** Encaminhar o convite pelos contatos de atendimento e manter o uso desses contatos dentro da equipe de apoio.
- **E.** Enviar os registros à divulgação sob compromisso de sigilo e manter uma cópia na equipe de apoio.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** O mural permite divulgar sem reutilizar ou transferir registros do atendimento. Restringir acesso não substitui respeitar a finalidade combinada. Iniciais tampouco garantem que alguém deixe de ser identificável. O caso se resolve pelo acordo explicitado, sem memorização de lei ou autorização adicional presumida.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: o mural atende à divulgação sem expor quem buscou apoio ou reutilizar seus contatos. |
| B | Retirar descrições reduz o volume transferido, mas nomes e contatos continuam pessoais. A transferência não faz parte do retorno individual combinado. |
| C | Iniciais podem permitir identificação pelo contexto. O mural deve receber o convite, não registros de dificuldades cuja circulação era restrita. |
| D | Manter contatos na mesma equipe não resolve o desvio de finalidade. Promover uma oficina difere de responder individualmente ao pedido. |
| E | Um compromisso de sigilo não torna necessário nem compatível com o acordo o envio dos registros. O convite pode circular sem essa transferência. |

### Originalidade e revisão

- **Competência de partida:** avaliar implicações sociais de decisão profissional sobre informação pessoal.
- **Raciocínio exigido:** distinguir finalidade, acesso e exposição, aplicando as condições do cenário.
- **Histórico eventualmente analisado:** síntese local de Formação Geral de Administração 2025 para formato contextualizado; nenhum item histórico de privacidade diretamente selecionado nesta autoria.
- **Diferenças:** a portaria indica o domínio ético, não este acordo. A decisão compara cinco rotas de circulação sem importar estrutura decisória de questão histórica identificada.
- **Elementos autorais:** apoio versus divulgação, canal público disponível e erros de minimização insuficiente, pseudonimização, uso interno e sigilo.
- **Risco de similaridade:** casos de listas e privacidade são recorrentes; comparar a combinação de rotas e finalidade, além do texto.
- **Possíveis ambiguidades:** não é necessário alcançar nominalmente solicitantes; D é envio promocional, não resposta ao pedido. O acordo exclui esse uso no cenário.
- **Pontos para revisão docente:** não atribuir o acordo fictício à LGPD. Validar ausência de lei/base legal implícita e A como única resposta compatível com as premissas.

## 4. E26-Q-COM-03 — Um convite que não chega igual

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-03 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Um convite que não chega igual |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Cultura e comunicação responsável |
| Competências / competencies | Analisar como escolhas de linguagem afetam públicos diversos; avaliar comunicação que favoreça diálogo entre pessoas com repertórios distintos. |
| Rastreabilidade | COMUM-FG05 / FG-I; F05, art. 5º, I, a.1–a.2; art. 6º, VI e X |
| difficulty | introductory — conforme o plano |
| Objetivo pedagógico | Identificar efeito de linguagem sobre compreensão de públicos distintos. |
| Fonte oficial principal | F05 — Portaria Inep nº 154, de 14/04/2026, arts. 5º–6º; seção 9 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa sobre linguagens, diálogo e diversidade cultural; mensagem, públicos e desencontro criados para o jogo. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

### Texto ao jogador

**Contexto.** A Base N9 fictícia organiza uma roda de troca de saberes aberta a participantes de diferentes regiões e experiências. O aviso diz: “Chegue junto para virar a chave no Ponto!”

Algumas pessoas entenderam que haveria uma conversa; outras perguntaram se deveriam consertar uma fechadura. O aviso ainda não informa atividade, local completo nem horário. A equipe quer manter um tom acolhedor e tornar essas informações compreensíveis, sem exigir domínio de uma expressão do grupo organizador.

**Enunciado.** Qual revisão da comunicação responde melhor ao desencontro relatado?

- **A.** Repetir a frase em mais canais e ampliar a frequência para familiarizar o público com a expressão.
- **B.** Substituir a frase por um termo técnico e manter atividade, local e horário para explicação presencial.
- **C.** Manter a frase e acrescentar imagens de chave e porta para reforçar o sentido pretendido no convite.
- **D.** Manter a frase e pedir aos participantes habituais que expliquem o convite a quem fizer perguntas.
- **E.** Explicitar atividade, local e horário em linguagem direta e testar a compreensão com participantes diversos.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** A expressão figurada não é compartilhada da mesma forma pelos públicos e faltam informações práticas. Explicitar a atividade e verificar compreensão enfrenta os problemas sem desqualificar repertórios culturais. Linguagem direta pode ser acolhedora; não exige eliminar expressões culturais de toda comunicação.

| Alternativa | Feedback específico |
|---|---|
| A | Repetição amplia o alcance, mas mantém ambiguidade e lacunas. Receber a mesma frase mais vezes não esclarece a atividade. |
| B | Um termo técnico pode criar outra barreira de repertório. Adiar informações práticas dificulta decidir se e como participar. |
| C | Chave e porta podem reforçar a interpretação literal relatada. A imagem não substitui a descrição textual da atividade. |
| D | A mediação ajuda, mas torna entendimento dependente de contato com participantes habituais. O aviso permanece insuficiente para quem chega sem essa rede. |
| E | Correto: você tratou diferença de interpretação e informações ausentes. Testar com públicos diversos verifica o efeito, em vez de presumir compreensão uniforme. |

### Originalidade e revisão

- **Competência de partida:** analisar efeitos comunicacionais na construção de sentidos para públicos diversos.
- **Raciocínio exigido:** relacionar metáfora, repertório e recepção; distinguir alcance, jargão, reforço visual e clareza.
- **Histórico eventualmente analisado:** síntese local de Administração 2025, Q08, p. 7, gabarito C, sobre emojis e discursos misóginos, e Q04, p. 4, gabarito B, sobre cinema e memória; leitura indireta, sem transportar códigos de habilidades.
- **Diferenças:** duas leituras de uma convocação incompleta e revisão da comunicação; não interpreta emojis, cinema ou discurso de ódio.
- **Elementos autorais:** aviso, desencontro literal/figurado, lacunas práticas e respostas inadequadas distintas ao problema de recepção.
- **Risco de similaridade:** a metáfora é corrente. Verificar se algum item associa a mesma expressão, conflito, solução e estrutura dos distratores.
- **Possíveis ambiguidades:** mediação e visuais podem complementar comunicação acessível, mas C/D mantêm lacunas. E não proíbe metáforas ou visuais em outros usos.
- **Pontos para revisão docente:** evitar associar região ou origem à capacidade intelectual; avaliar efeitos da linguagem, sem premiar formalidade ou desvalorizar repertórios culturais.

## 5. E26-Q-COM-04 — Reabrir com participação

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-04 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Reabrir com participação |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Equidade, acessibilidade e inclusão |
| Competências / competencies | Comparar estratégias de atendimento segundo barreiras de participação; avaliar efeitos sociais de decisões de acesso a serviços. |
| Rastreabilidade | COMUM-FG02 / FG-II; F05, art. 5º, II, b.1–b.3; art. 6º, XI |
| difficulty | introductory — conforme o plano |
| Objetivo pedagógico | Comparar medidas de atendimento considerando barreiras de acesso. |
| Fonte oficial principal | F05 — Portaria Inep nº 154, de 14/04/2026, arts. 5º–6º; seção 9 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa sobre acessibilidade e implicações sociais; serviço e barreiras fictícios, com decisão autoral de participação. Não certifica conformidade de interface. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

### Texto ao jogador

**Contexto.** O Ponto de Apoio N9 fictício prepara sua reabertura. A reserva de atendimento disponível funciona por teclado e com leitor de tela, mas exige que a pessoa use seu próprio celular com internet. Algumas pessoas não dispõem desse recurso.

A equipe pode manter o formulário e oferecer, no mesmo horário, atendimento assistido em balcão acessível, com a mesma disponibilidade de vagas. Precisa preservar o acesso de quem usa tecnologia assistiva e incluir quem não tem celular conectado.

**Enunciado.** Qual estratégia enfrenta as duas barreiras descritas?

- **A.** Manter o formulário e ampliar seu prazo de uso, preservando a exigência de celular próprio conectado.
- **B.** Manter o formulário acessível e oferecer reserva assistida no balcão, usando a mesma disponibilidade de vagas.
- **C.** Manter o formulário e oferecer um vídeo explicativo, preservando o uso de celular próprio para a reserva.
- **D.** Trocar o formulário por aplicativo de celular e oferecer instruções para instalar e utilizar a nova ferramenta.
- **E.** Trocar o formulário por reserva no balcão e separar vagas conforme a ordem de chegada presencial.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** O formulário acessível preserva uma opção autônoma com tecnologia assistiva. O balcão acessível e assistido oferece uma rota sem celular próprio. Compartilhar a disponibilidade evita criar conjuntos de vagas desiguais por canal. A proposta enfrenta barreiras conhecidas, sem demonstrar remoção de todas as barreiras possíveis.

| Alternativa | Feedback específico |
|---|---|
| A | Prazo maior não fornece equipamento e conexão. A barreira material continua. |
| B | Correto: dois canais ampliam possibilidades de participação e consultam as mesmas vagas. A rota digital acessível permanece disponível. |
| C | Explicar o formulário não supre falta de celular e internet. O problema descrito não é desconhecimento das instruções. |
| D | Instalar mantém dependência de celular e conexão e acrescenta uma etapa. Não há evidência de que o aplicativo preserve a acessibilidade existente. |
| E | O balcão oferece apoio, mas substituir o formulário elimina a opção digital acessível. Presença obrigatória acrescenta uma exigência para quem poderia reservar remotamente. |

### Originalidade e revisão

- **Competência de partida:** avaliar estratégias e implicações sociais a partir de barreiras de participação.
- **Raciocínio exigido:** reconhecer que interface acessível não elimina falta de recursos; canal alternativo deve preservar opções de participação.
- **Histórico eventualmente analisado:** síntese local de Administração 2025, Q02, p. 3, gabarito A, sobre participação cultural, e Q14, p. 12, gabarito C, sobre matrículas; sem leitura direta adicional dos cadernos nesta autoria.
- **Diferenças:** reserva multicanal com interface já acessível e barreira material independente; não escolhe recurso de exposição cultural nem interpreta representatividade de matrículas.
- **Elementos autorais:** coexistência de canais, vagas compartilhadas e distratores de prazo, instrução, troca tecnológica e substituição de canal.
- **Risco de similaridade:** cotejar inclusão digital e acesso multicanal; a diferença deve residir na relação entre autonomia, recursos e canais, não apenas no nome do serviço.
- **Possíveis ambiguidades:** balcão acessível e viável por premissa; apoio não substitui autonomia na rota digital. Não se presume prioridade clínica ou jurídica ausente do caso.
- **Pontos para revisão docente:** confirmar recorte introdutório para os cinco cursos, sem exigir implementação de IHC; revisar com usuários de tecnologia assistiva e evitar apresentar B como solução universal.

## 6. E26-Q-COM-05 — Onde testar a sombra

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-05 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Onde testar a sombra |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Clima, territórios e qualidade de vida |
| Competências / competencies | Comparar intervenções socioambientais com evidências territoriais; fundamentar uma decisão local reconhecendo limites dos efeitos estimados. |
| Rastreabilidade | COMUM-FG03 / FG-II; F05, art. 5º, II, b.1–b.2; art. 6º, IV e IX |
| difficulty | intermediate — conforme o plano |
| Objetivo pedagógico | Comparar intervenções com base em dados e efeitos locais. |
| Fonte oficial principal | F05 — Portaria Inep nº 154, de 14/04/2026, arts. 5º–6º; seção 9 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa de questões socioambientais e qualidade de vida; território, contagens e estimativas didáticas autorais, sem correspondência com levantamento real. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

### Texto ao jogador

**Contexto.** No entorno fictício da Base N9, a equipe propõe um piloto de sombra em locais de espera durante o calor. O objetivo é reduzir a exposição ao sol de quem já espera nesses locais. Há recurso para testar uma intervenção de mesmo custo em um dos dois pontos. Ambos permitem instalação sem bloquear a circulação.

Em uma observação sintética de 30 minutos, cada pessoa foi contada uma vez. Todas permaneceram no mesmo local, com a mesma condição de sombra ou sol, durante o intervalo. A estimativa indica quantas dessas pessoas ao sol caberiam na nova sombra. Não prevê redução de temperatura, adoecimento ou comportamento futuro.

**Dados e estimativas inteiramente fictícios para o jogo.**

| Local de espera | Pessoas observadas | Pessoas ao sol | Pessoas ao sol que caberiam na nova sombra |
|---|---:|---:|---:|
| Ponto da praça | 20 | 15 | 10 |
| Ponto da alameda | 40 | 8 | 6 |

**Enunciado.** Considerando o objetivo do piloto e os limites desse registro, qual proposta é mais bem sustentada?

- **A.** Testar na alameda pelo maior público total e projetar atendimento de 40 pessoas pela sombra adicional.
- **B.** Testar na praça pelo maior grupo ao sol e usar a contagem para estimar a redução de adoecimento.
- **C.** Testar na alameda pela menor proporção ao sol e usar essa proporção para prever o efeito da instalação.
- **D.** Testar na praça pela maior cobertura adicional estimada e repetir as observações para verificar o efeito local.
- **E.** Testar na praça pela maior cobertura adicional estimada e transferir o resultado esperado aos demais locais.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** No registro, 15 de 20 pessoas estavam ao sol na praça (75%) e oito de 40 na alameda (20%). A cobertura adicional estimada é dez pessoas na praça e seis na alameda, com custos e viabilidade iguais. Isso fundamenta começar o piloto na praça. Repetir observações ajuda a verificar o efeito local; não prova causalidade isoladamente, não permite prever saúde nem transferir resultado a outros territórios.

| Alternativa | Feedback específico |
|---|---|
| A | Público total não equivale a público exposto ou atendido pela nova sombra. Na alameda, a cobertura adicional estimada é seis, não 40. |
| B | A praça tem maior grupo ao sol, mas faltam dados de saúde e relação medida entre cobertura e adoecimento. Escolher o local não autoriza essa previsão. |
| C | A menor proporção ao sol descreve a situação anterior da alameda. Não estima o efeito da instalação, cuja cobertura adicional informada é menor. |
| D | Correto: a proposta usa cobertura adicional relevante ao objetivo e trata sua confirmação como parte do piloto. A decisão fica limitada ao cenário observado. |
| E | A escolha inicial da praça tem apoio, mas transferir o efeito ignora ocupação, exposição e condições de outros locais. Eles exigem observação própria. |

### Originalidade e revisão

- **Competência de partida:** avaliar estratégias e recursos para decisão socioambiental territorial.
- **Raciocínio exigido:** separar público total, exposição e cobertura adicional; comparar efeitos estimados e limitar conclusões.
- **Histórico eventualmente analisado:** síntese local de Administração 2025, Q01, p. 2, gabarito C, sobre transição energética, e Q15, p. 13, gabarito B, sobre saneamento e mortalidade; leitura indireta, sem transpor dados ou decisões.
- **Diferenças:** piloto reversível de cobertura de espera com contagem e capacidade explícitas; sem transição energética, conflito territorial quilombola ou indicadores de saúde regionais.
- **Elementos autorais:** dois pontos, três medidas distintas, permanência definida, custo equivalente e erros de denominador, previsão de saúde e generalização territorial.
- **Risco de similaridade:** confrontar tabelas de alocação socioambiental e problemas de maior benefício local; comparar a cadeia contagem/capacidade/piloto e os caminhos decisórios.
- **Possíveis ambiguidades:** contagem não é pessoa-tempo; permanência foi fixada para evitar confusão. Capacidade não mede conforto térmico. O item compara intervenções locais, sem antecipar integração de três restrições reservada a outro slot.
- **Pontos para revisão docente:** unidades, 75%/20%, capacidade versus efeito realizado, custo/viabilidade e limites causais. Calibrar dificuldade pela comparação de medidas, não pela extensão do texto.

## 7. E26-P-COM-01 — Recuperar a cópia de consulta

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-COM-01 |
| Versão editorial documental | 1 — sem novo campo no contrato SequencePuzzle |
| Título / title | Recuperar a cópia de consulta |
| Contrato / kind | sequence |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; procedimento fictício autoral para N9 — Jornada Digital, sujeito à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Proteção da informação: fundamentos |
| Rastreabilidade | COMUM-TEC09; CC-II, SI-II, TADS-II, TGTI-II, TRC-II — sínteses, não códigos novos oficiais |
| difficulty | introductory — conforme o plano |
| Objetivo pedagógico | Ordenar etapas de recuperação usando evidências de proteção e continuidade. |
| Fonte oficial principal | F06 — Portaria Inep nº 157, de 14/04/2026; art. 5º, II, b.1 e b.3; art. 6º, XX |
| Corroboração obrigatória | F07/SI, F08/TADS, F09/TGTI e F10/TRC; localizadores na seção 9 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa de riscos e segurança para procedimento fictício; corroboração dos demais cursos na ficha. A portaria não prescreve esta sequência. |
| Papéis das fontes na conversão futura | primary: F06; normative-complementary: F07/SI, F08/TADS, F09/TGTI e F10/TRC, com localizadores na seção 9 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- CC: relacionar riscos e proteção de recursos às dependências de recuperação controlada.
- SI: usar evidências de integridade e acesso para orientar recuperação de informação de um serviço.
- TADS: reconhecer pré-condições de segurança e validação antes de disponibilizar recurso de software.
- TGTI: relacionar proteção de ativos e continuidade às evidências necessárias para retomar serviço.
- TRC: relacionar integridade e disponibilidade de recurso de rede à verificação anterior à exposição pública.
- Comum: ordenar operações pelos estados que produzem e consomem, sem comandos ou ferramentas especializadas.

### Narrativa ao jogador

Na Base N9 fictícia, uma falha interrompeu o catálogo público de horários do Ponto de Apoio. A equipe já preservou os registros da falha, isolou o recurso afetado e preparou um ambiente de teste separado da rede pública. Essas ações estão concluídas e não fazem parte da sequência.

Você vai organizar a recuperação de uma cópia de consulta, sem dados pessoais. Existe uma cópia de segurança aprovada e um resumo de integridade guardado em registro confiável. Esse resumo é um valor de comparação para verificar se o arquivo recuperado corresponde à cópia aprovada; sozinho, não demonstra ausência de código malicioso.

Neste ambiente, montar significa abrir o conteúdo da cópia recuperada. A montagem usa esse arquivo e fica bloqueada enquanto a comparação de integridade não tiver sido aprovada. O teste de consulta precisa do conteúdo montado. O atendimento público permanece desligado até o teste terminar com sucesso. Considere que todas as verificações terão resultado satisfatório. Se alguma falhasse, a equipe deveria interromper o procedimento e investigar.

Organize os cinco blocos conforme essas dependências. Não é um protocolo universal de resposta a incidentes.

### Blocos

Ordem editorial diferente da solução; poderá ser embaralhada na importação futura autorizada.

| ID do bloco | Texto |
|---|---|
| testar-consulta | Executar uma consulta de teste no conteúdo montado e registrar o resultado satisfatório. |
| recuperar-arquivo | Recuperar o arquivo da cópia de segurança aprovada para o ambiente de teste isolado. |
| publicar-consulta | Ativar a consulta pública do catálogo usando o resultado satisfatório registrado no teste. |
| montar-conteudo | Montar o conteúdo do arquivo cuja comparação de integridade foi aprovada, no ambiente de teste. |
| conferir-integridade | Calcular o resumo do arquivo recuperado e compará-lo com o registro confiável, confirmando a correspondência. |

### Ordem correta e justificativa

**correctOrder:** recuperar-arquivo → conferir-integridade → montar-conteudo → testar-consulta → publicar-consulta.

| Dependência necessária | Motivo no cenário |
|---|---|
| Recuperar antes de conferir | O cálculo precisa do arquivo efetivamente recuperado; comparar só o registro da origem não verifica a transferência. |
| Conferir antes de montar | A montagem fica bloqueada até a correspondência com o registro confiável ser aprovada. Não se abre conteúdo antes dessa barreira. |
| Montar antes de testar | A consulta usa o conteúdo aberto pela montagem. A existência do arquivo não realiza o teste funcional. |
| Testar antes de publicar | A liberação consome o resultado satisfatório registrado. Integridade do arquivo não garante funcionamento da consulta. |

Cinco blocos e quatro dependências adjacentes necessárias: cada bloco, exceto o primeiro, consome resultado do anterior. Nenhum par adjacente pode ser invertido; por transitividade, existe uma única ordenação completa. Estado inicial e caminho de sucesso delimitam o problema. Não se impõe ordem a preservação de evidências, isolamento ou ações independentes de outro incidente.

### Dicas progressivas

1. Procure o que cada bloco precisa receber pronto. Arquivo disponível, conteúdo montado e consulta funcionando são estados diferentes.
2. Para comparar os resumos, você precisa do arquivo recuperado. A existência do registro confiável, sozinha, não comprova a correspondência dessa cópia.
3. Observe a condição final: a consulta pública só pode ser ativada com um teste satisfatório já registrado. Confira qual estado permite executar esse teste.

### Explicação final

Você recuperou o arquivo, conferiu a correspondência com o registro confiável, montou o conteúdo, testou a consulta e ativou o serviço. A comparação verifica integridade da cópia; o teste verifica a função de consulta. Uma evidência não substitui a outra. Neste cenário, ambas precedem a liberação ao público. Outras recuperações podem exigir ações diferentes, paralelas ou adicionais. Se uma verificação falhar, não se deve avançar como se tivesse sido aprovada.

### Recompensa e desbloqueio

- **reward.xp:** 100 XP pela conclusão, uma vez por ID; repetição não paga novamente. Sem bônus de velocidade ou desconto por erro/dicas. Reconhece atividade, não certifica domínio.
- **unlocks.mapId:** base-n9; **unlocks.objectId:** door. Referência à porta existente; esta proposta não a ativa nem cria mapa ou objeto.
- Poderá integrar “Reabrir o Ponto de Apoio N9” com E26-Q-COM-04. A missão mista não está implementada. Concluir sequência, responder à questão e acessar feedbacks como condição composta depende de implementação e persistência futuras. O desbloqueio isolado do contrato atual não garante essa regra. Bônus próprio sugerido de missão: zero, separado do XP do puzzle.

### Originalidade e revisão

- **Competência de partida:** reconhecer riscos, proteção e continuidade respeitando recortes dos cinco cursos.
- **Raciocínio exigido:** dependências entre artefatos/estados; distinguir integridade, conteúdo acessível, funcionamento e exposição pública.
- **Histórico eventualmente analisado:** nenhuma questão técnica histórica diretamente selecionada. O exemplo local de média foi lido para conferir o contrato e evitar apresentá-lo como novidade; orientou apenas limites formais de blocos/dicas.
- **Diferenças:** não reutiliza notas, validação numérica, média ou exibição. A portaria fornece domínio, sem determinar arquitetura ou ordem. O processo começa com incidente isolado e recupera cópia usando evidências distintas.
- **Elementos autorais:** catálogo público sem dados pessoais, estado inicial resolvido, barreira de montagem por integridade, teste funcional e liberação apoiada no teste.
- **Risco de similaridade:** recuperar/verificar/testar/publicar é padrão técnico recorrente. Comparar textos, barreira de montagem e cadeia de artefatos com outras sequências; não alegar originalidade pela troca do serviço.
- **Possíveis ambiguidades:** conferir antes de montar é restrição deste ambiente, não regra de toda ferramenta; resumo não prova ausência de malware. “Aprovada” qualifica a cópia fictícia, não o status docente. Publicação não é teste em produção.
- **Pontos para revisão docente:** plausibilidade técnica, ordem única, neutralidade de ferramenta e recorte mínimo comum. Dependência artificial ou incorreta exige needs-revision e reformulação; ordem cadastrada não prova necessidade pedagógica.

## 8. Tabela resumida e mapa de respostas

| ID | Contrato | Cursos explicitamente elegíveis | Área | Dificuldade | Objetivo resumido | Status |
|---|---|---|---|---|---|---|
| E26-Q-COM-01 | question | CC, SI, TADS, TGTI, TRC | Educação, desenvolvimento e saúde | introductory | Descrição versus causalidade | provisional-pending-teacher-review |
| E26-Q-COM-02 | question | CC, SI, TADS, TGTI, TRC | Ética, cidadania e trabalho | introductory | Direitos e finalidade | provisional-pending-teacher-review |
| E26-Q-COM-03 | question | CC, SI, TADS, TGTI, TRC | Cultura e comunicação responsável | introductory | Linguagem e compreensão | provisional-pending-teacher-review |
| E26-Q-COM-04 | question | CC, SI, TADS, TGTI, TRC | Equidade, acessibilidade e inclusão | introductory | Barreiras de participação | provisional-pending-teacher-review |
| E26-Q-COM-05 | question | CC, SI, TADS, TGTI, TRC | Clima, territórios e qualidade de vida | intermediate | Intervenção local e evidências | provisional-pending-teacher-review |
| E26-P-COM-01 | sequence | CC, SI, TADS, TGTI, TRC | Proteção da informação: fundamentos | introductory | Recuperação controlada | provisional-pending-teacher-review |

**Mapa reservado à curadoria e ao feedback; não antecipar soluções na tela de resposta.**

| ID | Resposta correta | Critério discriminante |
|---|---|---|
| E26-Q-COM-01 | C | Descreve variação sem causalidade, ingresso ou generalização indevida. |
| E26-Q-COM-02 | A | Divulga sem reutilizar ou transferir registros pessoais. |
| E26-Q-COM-03 | E | Explicita informações e verifica compreensão. |
| E26-Q-COM-04 | B | Preserva rota digital acessível e inclui rota sem celular próprio. |
| E26-Q-COM-05 | D | Usa cobertura adicional e limita decisão ao piloto verificável. |
| E26-P-COM-01 | recuperar-arquivo → conferir-integridade → montar-conteudo → testar-consulta → publicar-consulta | Arquivo recuperado → integridade conferida → conteúdo montado → consulta testada → serviço público. |

C/A/E/B/D não segue ciclo alfabético ou alternância simples. Cada posição aparece uma vez neste lote por decisão editorial; isso não deve virar regra dos próximos lotes ou pista divulgada ao jogador.

## 9. Tabela de fontes e registro de consulta

Órgão emissor dos seis atos: **Ministério da Educação / Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep)**. Todos datados de **14/04/2026**, publicados em **16/04/2026**, DOU edição 72, seção 1. Consulta desta autoria: **13/11/2026**. Data de captura de uma reprodução não é data de publicação do ato.

| ID e título/objeto | Página DOU e localizador consultado | Uso e limite |
|---|---|---|
| F05 — Portaria nº 154: diretrizes de prova do componente de Formação Geral, a partir da edição 2026 | p. 90; art. 1º; art. 5º I, a.1–a.2 e II, b.1–b.3; art. 6º I, III, IV, VI, IX, X, XI, XII; reprodução UFSJ, pp. 1–2 | Principal das cinco questões: formação comum, competências e objetos. Não fornece dados ou gabaritos autorais. |
| F06 — Portaria nº 157: diretrizes do componente específico de Bacharelado em Ciência da Computação | p. 91; art. 5º II, b.1 e b.3; art. 6º XX; reprodução Ufopa, p. 2 | Principal documental do puzzle: riscos e segurança, sem prescrever procedimento. |
| F07 — Portaria nº 168: diretrizes do componente específico de Bacharelado em Sistemas de Informação | p. 96; art. 5º II, b.3–b.4; art. 6º XVII; reprodução Ufopa, p. 2 | Corrobora gestão da informação, decisão por evidências e segurança de SI. |
| F08 — Portaria Inep nº 169: diretrizes do componente específico de Tecnologia em Análise e Desenvolvimento de Sistemas | p. 96; art. 5º II, b.1; art. 6º XVII; reprodução ABMES, pp. 2–3 | Corrobora segurança de produtos e princípios de segurança cibernética em recorte de reconhecimento. |
| F09 — Portaria Inep nº 171: diretrizes do componente específico de Tecnologia em Gestão da Tecnologia da Informação | p. 97; art. 5º II, b.5; art. 6º XIV; reprodução ABMES, pp. 2–3 | Corrobora ativos, riscos e continuidade. |
| F10 — Portaria Inep nº 172: diretrizes do componente específico de Tecnologia em Redes de Computadores | p. 98; art. 5º II, b.2; art. 6º XIII; reprodução ABMES, pp. 2–3 | Corrobora integridade, disponibilidade e segurança do recurso em rede. |

### URLs diretos e resultados

| Fonte | Original tentado | Texto efetivamente consultado e limitação |
|---|---|---|
| F00 — Legislação 2026, Inep | [Índice oficial](https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade/2026) | Página recuperada para identificação dos atos; não substitui artigos. |
| F05 | [DOU 154](https://www.in.gov.br/web/dou/-/portaria-n-154-de-14-de-abril-de-2026-699921720) — erro 502 | [Reprodução UFSJ, lida integralmente](https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf). [PDF UFC indicado no plano](https://ec.ufc.br/wp-content/uploads/2026/04/diretrizes-prova-formacao-geral.pdf) recuperado com extração limitada; artigos conferidos na UFSJ. |
| F06 | [DOU 157](https://www.in.gov.br/web/dou/-/portaria-n-157-de-14-de-abril-de-2026-699947879) — erro 502 | [Reprodução Ufopa consultada](https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf). |
| F07 | [DOU 168](https://www.in.gov.br/web/dou/-/portaria-n-168-de-14-de-abril-de-2026-699946315) — erro 502 | [Reprodução Ufopa consultada](https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf). |
| F08 | [DOU 169](https://www.in.gov.br/en/web/dou/-/portaria-n-169-de-14-de-abril-de-2026-699920629) — erro 502 | [Reprodução ABMES consultada](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf). |
| F09 | [DOU 171](https://www.in.gov.br/web/dou/-/portaria-n-171-de-14-de-abril-de-2026-699946786) — erro 502 | [Reprodução ABMES consultada](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-171-2026-04-14.pdf). |
| F10 | [DOU 172](https://www.in.gov.br/web/dou/-/portaria-n-172-de-14-de-abril-de-2026-699944904) — erro 502 | [Reprodução ABMES consultada](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf). |

O registro da autoria inicial informa consulta direta dos textos normativos nessas reproduções com título, órgão, data e artigos identificados. Não houve nova consulta dessas fontes nesta consolidação. A versão certificada permanece limitação de auditoria. Divergência ou insuficiência que comprometa o slot exige needs-revision até resolver; não improvisar fonte substituta.

**Histórico indireto:** endereços herdados da análise local, não reabertos nesta autoria: [Administração 2025, caderno 1](https://download.inep.gov.br/enade/provas_e_gabaritos/2025_administracao_PV_1.pdf), [gabarito definitivo](https://download.inep.gov.br/enade/provas_e_gabaritos/2025_administracao_GB_1.pdf), [mapa de questões](https://download.inep.gov.br/enade/provas_e_gabaritos/2025_MP_administracao.pdf). Órgão: Inep; edição 2025; datas individuais de publicação não identificadas no documento local. Códigos de habilidades de 2025 não foram transferidos para 2026.

## 10. Checklist de originalidade

“Conferido” significa revisão editorial desta proposta, não validação independente de ineditismo.

| Critério | Q01 | Q02 | Q03 | Q04 | Q05 | Puzzle |
|---|---|---|---|---|---|---|
| Competência, raciocínio e autoria registrados | Conferido | Conferido | Conferido | Conferido | Conferido | Conferido |
| Diferenças e risco estrutural explicitados | Conferido | Conferido | Conferido | Conferido | Conferido | Conferido |
| Ficção separada da evidência oficial | Conferido | Conferido | Conferido | Conferido | Conferido | Conferido |
| Histórico indireto identificado | Conferido | Conferido | Conferido | Conferido | Conferido | Conferido |
| Sem reprodução de enunciado, dados ou alternativas oficiais | Conferência editorial | Conferência editorial | Conferência editorial | Conferência editorial | Conferência editorial | Conferência editorial |
| Cotejo independente com cadernos e exemplos do jogo | Pendente | Pendente | Pendente | Pendente | Pendente | Pendente |
| Parecer docente por curso e versão | Pendente | Pendente | Pendente | Pendente | Pendente | Pendente |

- [x] Não se apresenta conteúdo como oficial, adaptação autorizada ou previsão de prova.
- [x] Justificativas não dependem apenas de trocar nomes, valores ou posições.
- [x] Distratores derivam de erros do problema autoral e recebem feedback específico.
- [x] Nenhuma imagem, tabela ou trecho externo de prova foi incorporado à narrativa.
- [ ] Comparar texto, arranjo de dados, relações e caminho decisório, além de palavras coincidentes.
- [ ] Registrar referências comparadas, similaridades e decisão de manter, reformular ou rejeitar cada versão.

## 11. Checklist de acessibilidade e experiência

| Aspecto | Verificação editorial | Homologação pendente |
|---|---|---|
| Linguagem clara | Comandos diretos; resumo de integridade e montagem explicados; sem lei ou sintaxe implícita | Leitura com estudantes dos cinco cursos |
| Tela pequena | Contexto, comando e alternativas separados; metadados ficam na curadoria | Renderizar em celular, testar zoom/reflow e ajustar quebras sem omitir premissas |
| Tabelas com cabeçalhos | Q01/Q05 têm colunas identificadas | Cabeçalhos semânticos e leitura linear por registro na importação |
| Informação por cor | Nenhuma resposta depende de cor, ícone ou posição | Conferir seleção, erro e acerto também por texto/anúncio assistivo |
| Teclado | Seleção e confirmação nas questões; puzzle admite mover acima/abaixo | Foco visível, navegação e anúncio de posição; não exigir arrastar |
| Alternativas textuais | Nenhum visual indispensável; informações integralmente em texto | Manter ambientação decorativa ou descrição equivalente se adicionada |
| Carga de leitura | Uma tabela em Q01/Q05; cinco blocos e três dicas opcionais | Pilotar Q05 e narrativa do puzzle; reduzir redundância sem retirar dependências |
| Ausência de velocidade | Sem cronômetro ou bônus por rapidez | Os 30 minutos de Q05 são duração da observação fictícia, nunca prazo de resposta |
| Feedback e ajuda | Cinco feedbacks por questão; explicação final e dicas progressivas | Leitor de tela, acesso às explicações e nova tentativa sem perda de contexto |
| Diversidade | Sem estereótipos de curso, região ou deficiência | Revisão com pessoas de diferentes repertórios e necessidades |

Equivalente linear de Q01: semana anterior — 40 convidadas, 16 participantes; semana com novo horário — 40 convidadas, 24 participantes. Equivalente linear de Q05: praça — 20 observadas, 15 ao sol, dez cobertas adicionalmente; alameda — 40 observadas, oito ao sol, seis cobertas adicionalmente. São formas equivalentes de apresentação, sem evidência adicional.

Markdown prepara a leitura, mas não comprova acessibilidade da interface futura. Homologar teclado, toque, leitor de tela e ampliação após importação autorizada, sem exigir velocidade ou gesto fino.

## 12. Pendências

| Pendência | Itens | Encaminhamento |
|---|---|---|
| Parecer por ID, versão e curso | Todos | Representantes de CC, SI, TADS, TGTI e TRC devem preencher fichas; nenhum parecer prévio favorável. |
| PPC e momento formativo | Todos | Coordenações/NDE devem conferir oferta concreta; matriz nacional não comprova alinhamento institucional. |
| Original certificado e retificações | Todos | Reconferir DOU na data do parecer; divergência que afete sustentação exige needs-revision. |
| Similaridade independente | Todos | Abrir materiais pertinentes e exemplos do jogo; comparar relações, distratores e estrutura além do texto. |
| Calibração | Todos | Pilotar sem cronômetro, observando justificativas e dicas, sem inferir domínio por acerto. |
| Cadeia técnica plausível | Puzzle | Confirmar quatro dependências no ambiente delimitado, sem ensinar protocolo universal. |
| Acessibilidade na experiência | Todos | Testar teclado, leitor de tela, celular e zoom na apresentação futura. |
| Política de liberação | Todos | Schema válido não concede aprovação; manter fora do catálogo jogável até decisão posterior. |
| Missão mista | Q04 e puzzle | Composição, persistência, feedback e recompensa idempotente exigem implementação separada. |
| Identidade provisória | Todos | Aprovação institucional do nome/tom pendente, sem marcas ou dados reais. |

Na conferência registrada pela autoria inicial, não foi identificada falta de sustentação temática que impusesse needs-revision imediato. A presente consolidação apenas organiza o padrão e ajusta as dicas; não emite novo parecer sobre as fontes. A limitação do DOU permanece registrada. Dúvida grave de fonte, resposta, curso ou ordem única exige needs-revision antes de prosseguir. Nenhum item recebeu approved-teacher.

## 13. Formulários de revisão docente por item

Preencher por **curso, ID e versão**. “A preencher” significa não revisado. Registrar docente, data, PPC/versão, evidências e parecer: manter em revisão, requer revisão, recomendar aprovação ou rejeitar. Recomendação isolada não muda validationStatus nem autoriza publicação.

Em cada ficha, verificar fontes, objetivo, dificuldade, originalidade e acessibilidade. Nas questões, conferir cinco alternativas gramaticalmente coerentes, de extensão semelhante, distintas, sem sobreposição, pegadinhas ou absolutos que entreguem resposta; melhor resposta única e feedbacks A–E corretos. Registrar materiais comparados e evidências dos testes, não apenas marcar caixas.

### E26-Q-COM-01 — versão 1

| Curso | Docente / data | PPC e evidências verificadas | Parecer / ajustes |
|---|---|---|---|
| CC | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher |

- [ ] Conferir ato, artigos, pertinência, objetivo e dificuldade por curso.
- [ ] Validar denominadores, saldo de oito, limites causais e diferença entre aumento líquido e participação pela primeira vez.
- [ ] Resolver sem gabarito; confirmar C como única melhor resposta e conferir todos os feedbacks A–E.
- [ ] Registrar cotejo independente de originalidade e evidências de clareza/acessibilidade.
- **Síntese e texto dos ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.


### E26-Q-COM-02 — versão 1

| Curso | Docente / data | PPC e evidências verificadas | Parecer / ajustes |
|---|---|---|---|
| CC | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher |

- [ ] Conferir ato, artigos, pertinência, objetivo e dificuldade por curso.
- [ ] Confirmar que o acordo basta à decisão, sem tratar regra fictícia como lei ou presumir autorização adicional.
- [ ] Resolver sem gabarito; confirmar A como única melhor resposta e conferir todos os feedbacks A–E.
- [ ] Registrar cotejo independente de originalidade e evidências de clareza/acessibilidade.
- **Síntese e texto dos ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.


### E26-Q-COM-03 — versão 1

| Curso | Docente / data | PPC e evidências verificadas | Parecer / ajustes |
|---|---|---|---|
| CC | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher |

- [ ] Conferir ato, artigos, pertinência, objetivo e dificuldade por curso.
- [ ] Revisar diversidade sem estereótipos, efeitos da linguagem e por que mediação/repetição não resolvem as lacunas.
- [ ] Resolver sem gabarito; confirmar E como única melhor resposta e conferir todos os feedbacks A–E.
- [ ] Registrar cotejo independente de originalidade e evidências de clareza/acessibilidade.
- **Síntese e texto dos ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.


### E26-Q-COM-04 — versão 1

| Curso | Docente / data | PPC e evidências verificadas | Parecer / ajustes |
|---|---|---|---|
| CC | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher |

- [ ] Conferir ato, artigos, pertinência, objetivo e dificuldade por curso.
- [ ] Validar complementaridade de canais, autonomia, balcão acessível e vagas compartilhadas; revisar com usuários de tecnologia assistiva.
- [ ] Resolver sem gabarito; confirmar B como única melhor resposta e conferir todos os feedbacks A–E.
- [ ] Registrar cotejo independente de originalidade e evidências de clareza/acessibilidade.
- **Síntese e texto dos ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.


### E26-Q-COM-05 — versão 1

| Curso | Docente / data | PPC e evidências verificadas | Parecer / ajustes |
|---|---|---|---|
| CC | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher |

- [ ] Conferir ato, artigos, pertinência, objetivo e dificuldade por curso.
- [ ] Validar unidades, 75%/20%, capacidade adicional e limites de generalização/saúde; calibrar difficulty intermediate.
- [ ] Resolver sem gabarito; confirmar D como única melhor resposta e conferir todos os feedbacks A–E.
- [ ] Registrar cotejo independente de originalidade e evidências de clareza/acessibilidade.
- **Síntese e texto dos ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.


### E26-P-COM-01 — versão editorial documental 1

| Curso | Docente / data | PPC, portaria própria e evidências verificadas | Parecer / ajustes |
|---|---|---|---|
| CC | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher |

- [ ] Conferir fonte principal e corroboração por curso, sem profundidade especializada.
- [ ] Resolver sem ordem visível; tentar outra ordem válida e registrar as quatro dependências.
- [ ] Validar cinco blocos, IDs únicos, permutação completa e três dicas progressivas.
- [ ] Conferir integridade versus malware, estado inicial e caminho de sucesso.
- [ ] Revisar originalidade, leitura por teclado e anúncio de posição, sem exigir arrastar ou velocidade.
- [ ] Conferir 100 XP uma vez, base-n9/door e missão mista não implementada.
- **Síntese, ordem alternativa encontrada e texto dos ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.
