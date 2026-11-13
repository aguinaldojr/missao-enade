# N9 — Jornada Digital: lote comum 02

Proposta editorial — 13/11/2026, horário de Brasília. Versão documental 1.0. **Todos os cinco itens permanecem provisional-pending-teacher-review.** Cenários e dados fictícios; autoria assistida por IA, com responsável humano pela consolidação a designar. N9 é nome provisório sujeito à aprovação institucional. Este material não é oficial nem tem chancela do Inep.

Escopo: exclusivamente E26-Q-COM-06 a E26-Q-COM-10, versão 1 de cada questão. Nenhum puzzle ou item específico é produzido aqui. Autoria em Markdown, sem JSON, importação, publicação ou mudança do jogo e de seu progresso.

## 1. Referências, conferência prévia e convenções

Leitura integral do [plano v2.0](../plano-colecao-enade-2026.md), do [lote comum 01](lote-comum-01.md) e do [padrão editorial](padrao-editorial-piloto.md). Confronto com Question, EditorialMetadata e SequencePuzzle, schemas question/editorial/puzzles, validadores e repositórios atuais em src. Foram examinados também os exemplos executáveis de questões e sequências para comparação interna. O Git estava limpo em 912082f antes desta entrega.

| Slot | Área planejada | Competência de síntese | Dificuldade | Objetivo observável do plano | Fonte prevista |
|---|---|---|---|---|---|
| E26-Q-COM-06 | COMUM-FG06 — Ciência, tecnologia e relações globais | FG-I e FG-II | intermediate | Avaliar argumentos de cooperação considerando circulação de saberes. | F05 |
| E26-Q-COM-07 | COMUM-TEC08 — Redes: fundamentos de comunicação | CC-I; SI-I; TADS-I; TGTI-II; TRC-I | intermediate | Distinguir hipótese de falha de comunicação de falha de aplicação. | F06; corroborar F07–F10 |
| E26-Q-COM-08 | COMUM-TEC07 — Sistemas operacionais: fundamentos | CC-II; SI-I; TADS-I; TGTI-II; TRC-I | intermediate | Relacionar indisponibilidade a dependências de recursos declaradas. | F06; corroborar F07–F10 |
| E26-Q-COM-09 | COMUM-FG03 — Clima, territórios e qualidade de vida | FG-II | advanced | Selecionar intervenção integrando três restrições sociais e ambientais. | F05 |
| E26-Q-COM-10 | COMUM-TEC09 — Proteção da informação: fundamentos | CC-II; SI-II; TADS-II; TGTI-II; TRC-II | advanced | Escolher medida de proteção integrando ativo, risco e continuidade. | F06; corroborar F07–F10 |

Todos: classification COMUM; courses CC, SI, TADS, TGTI, TRC, explicitamente; collectionId enade-2026, já planejada no catálogo de coleções. As dificuldades individuais dos slots da seção 11.2 prevalecem sobre a dificuldade genérica dos blocos de área das seções 6–8. O lote fecha a parte comum em 4 introductory, 4 intermediate e 2 advanced, sem mudar cotas específicas nem os 66 slots.

### Separação de evidências

- **Referência oficial:** competências e objetos dos atos F05–F10, com localização e modo de acesso na seção 8. Nova consulta nesta autoria, em 13/11/2026; não se copia a alegação de consulta do piloto como se fosse a consulta atual.
- **Histórico:** os registros locais de análise anterior foram lidos no plano e no piloto. Não foram reabertos cadernos históricos nesta entrega, nem usados como modelo de dados, enunciado ou alternativas.
- **Inferência/autoria:** objetivos recortados, cenários, limites didáticos, dados, alternativas, explicações, dificuldades e vínculo comum mínimo entre cinco matrizes. A portaria não fornece estes casos ou gabaritos.
- **Pendente:** originais certificados/retificações, PPCs, pareceres por curso, calibração, similaridade independente e acessibilidade na experiência futura.

Question não possui campo kind ou título. Título editorial, objetivo, códigos de síntese, comparação de originalidade, fontes complementares e pareceres ficam nesta ficha documental; não são propriedades novas do objeto estrito. Cada questão dispõe dos campos obrigatórios e de cinco opções/feedbacks A–E. Os marcadores opcionais example/editorialStatus não são necessários nesta autoria; não se atribui aprovação. Não se cria recompensa de questão nem se altera XP.

Os títulos e as seções “Texto ao jogador” e “Resposta, explicação e feedbacks” são o material de eventual apresentação futura. Metadados, gabarito antecipado e referências ficam na curadoria. Dados não representam campus, pessoas ou atividades reais da UNINOVE.

## 2. E26-Q-COM-06 — Uma descoberta que precisa circular

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-06 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Uma descoberta que precisa circular |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Ciência, tecnologia e relações globais |
| Rastreabilidade | COMUM-FG06 / FG-I e FG-II; F05, art. 5º, I, a.2 e II, b.2–b.3; art. 6º, VII–VIII |
| difficulty | intermediate — conforme o slot do plano |
| Objetivo pedagógico | Avaliar argumentos de cooperação considerando circulação de saberes. |
| Fonte oficial principal | F05 — Portaria Inep 154/2026, de 14/04/2026; seção 8 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa para criação autoral de ciência, tecnologia e relações globais; cenário e solução fictícios, sem autoria ou chancela do Inep. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos, vinculados às sínteses do plano:**

- Avaliar formas de intercâmbio científico que permitam apropriação recíproca de métodos e resultados, em contextos distintos.
- Fundamentar uma decisão de cooperação comparando consequências da transferência unilateral e da construção conjunta.

### Texto ao jogador

**Contexto.** Em uma cooperação internacional fictícia da Base N9, dois laboratórios pesquisam um sensor de desgaste para oficinas comunitárias. O laboratório Vento criou um encaixe que funciona bem em peças metálicas, mas não nas cerâmicas. O laboratório Maré modificou esse encaixe: passou a medir cerâmica, porém ficou mais lento ao medir metal. Ambos conseguem construir e testar as duas versões.

O objetivo acordado é que as duas equipes compreendam as modificações e consigam adaptar o sensor às necessidades das oficinas de seus territórios. Precisam explicar em quais condições cada versão é útil; não precisam eleger uma versão universal. Uma proposta de cooperação ainda será escolhida. Todos os fatos e nomes são fictícios.

**Enunciado.** Qual proposta favorece a circulação recíproca de saberes e o objetivo acordado?

- **A.** Vento distribui seu encaixe às duas equipes, e Maré adota o projeto original para concentrar a formação em uma única solução.
- **B.** As equipes trocam projetos e justificativas das mudanças, reproduzem as duas versões e discutem a adequação de cada uma às oficinas locais.
- **C.** Cada equipe mantém seu projeto em uso local, e ambas publicam apenas uma média conjunta de velocidade para divulgar a parceria.
- **D.** Maré fornece sensores prontos a Vento, e Vento concentra a avaliação no número de unidades entregues às oficinas dos dois territórios.
- **E.** As equipes escolhem a versão mais rápida no metal, e o treinamento conjunto passa a explicar sua aplicação aos dois materiais.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** A troca de projetos e razões das mudanças permite que as duas equipes aprendam e adaptem, em vez de somente receber um produto. Reproduzir ambas as versões e discutir suas condições de uso aproveita contribuições diferentes sem tratá-las como uma hierarquia cultural. As evidências mostram uma troca entre alcance de materiais e velocidade, não uma vencedora universal. Não há promessa de que esse arranjo elimine toda dificuldade da cooperação.

| Alternativa | Feedback específico |
|---|---|
| A | Uniformizar no projeto original descarta a contribuição que permite medir cerâmica. Ter um único modelo facilita formação, mas não atende às duas necessidades declaradas. |
| B | Correto: a circulação inclui o modo de fazer, suas razões e a discussão de usos. As duas equipes podem compreender contribuições e adaptar soluções. |
| C | A média conjunta não mostra o comportamento por material nem dá acesso às modificações. Uso local isolado e divulgação agregada não realizam o intercâmbio pretendido. |
| D | Entregar sensores amplia acesso ao produto, mas não garante compreender e adaptar seu projeto. Contar unidades não verifica o objetivo de aprendizagem recíproca. |
| E | A velocidade no metal não resolve o uso em cerâmica. A escolha transforma um desempenho condicionado em recomendação universal, contrariando o objetivo. |

### Originalidade, limites e revisão

- **Competência de partida:** Avaliar argumentos de cooperação considerando circulação de saberes.
- **Raciocínio exigido:** Comparar arranjos de cooperação pelo que circula e pelo que cada equipe poderá fazer; reconhecer uma troca técnica dependente do contexto.
- **Histórico efetivamente utilizado:** referências normativas do slot e análise indireta registrada no plano/piloto; nenhum enunciado histórico reaberto ou adaptado.
- **Diferenças estruturais e elementos autorais:** Não reutiliza interpretação de convite, canal acessível, finalidade de lista ou comparação numérica antes/depois. Difere também de EX-COMUM-06: não elege protótipo por critérios comuns; avalia intercâmbio de modificações complementares e autonomia de adaptação.
- **Possíveis ambiguidades controladas:** As duas equipes têm capacidade de reproduzir as versões por premissa. Não pressupor licença, idioma, superioridade territorial ou obrigação jurídica ausente. A circulação de saberes tem objetivo explícito; uma entrega de produtos, sozinha, não o satisfaz.
- **Pontos específicos para revisão docente:** Confirmar se a tensão entre produto entregue, conhecimento compartilhado e adequação local sustenta dificuldade intermediária, sem converter cooperação internacional em julgamento cultural.
- **Risco de similaridade:** o formato de cinco alternativas e o domínio temático são recorrentes. A comparação interna não comprova ineditismo externo; cotejo independente permanece pendente.

### Checklist editorial deste item

- [x] ID, versão, área, objetivo, síntese de competência, cursos e dificuldade confrontados com o slot.
- [x] Contexto fictício com premissas suficientes; sem norma, plataforma ou prioridade oculta.
- [x] Cinco alternativas distintas, uma resposta fundamentada e feedback de A–E.
- [x] Distratores rejeitados pelas evidências do caso; sem “todas/nenhuma” ou pegadinha de redação.
- [x] Explicação delimita a conclusão e não promete domínio ou transferência.
- [x] Fonte principal e corroboração, quando exigida, rastreadas na seção 8.
- [x] Sem nome da avaliação externa nos textos ao jogador; sem marca institucional oficial.
- [x] Comparação editorial interna registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] Cotejo externo, PPC, calibração e homologação de acessibilidade.

## 3. E26-Q-COM-07 — A mensagem chegou, a operação não terminou

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-07 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | A mensagem chegou, a operação não terminou |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Redes: fundamentos de comunicação |
| Rastreabilidade | COMUM-TEC08 / CC-I; SI-I; TADS-I; TGTI-II; TRC-I; F06, art. 5º, I, a.1/a.4; art. 6º, XI; corroboração por curso na seção 8 |
| difficulty | intermediate — conforme o slot do plano |
| Objetivo pedagógico | Distinguir hipótese de falha de comunicação de falha de aplicação. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 8 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa para criação autoral de redes: fundamentos de comunicação; cenário e solução fictícios, sem autoria ou chancela do Inep. Corroboração por curso registrada na ficha documental. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos, vinculados às sínteses do plano:**

- CC: interpretar evidências de comunicação para avaliar o comportamento de um sistema computacional.
- SI: analisar evidências tecnológicas de um serviço no contexto de seu uso.
- TADS: relacionar requisição e resposta ao comportamento de uma solução de software.
- TGTI: usar registros de operação para delimitar uma indisponibilidade de serviço.
- TRC: distinguir comunicação entre componentes de processamento da operação solicitada.

### Texto ao jogador

**Contexto.** Dois terminais da Base N9 fictícia solicitam ao serviço de empréstimos a reserva do equipamento Lume. Cada tentativa recebe um código único. O registro do serviço mostra que recebeu as duas solicitações e enviou a resposta “Equipamento não cadastrado”. Cada terminal exibiu essa mesma resposta associada ao código de sua tentativa.

Uma terceira tentativa é executada diretamente no computador do serviço, sem passar pela rede entre os terminais e esse computador. Ela produz a mesma resposta. O manual deste ambiente explica que a aplicação consulta um cadastro antes de aceitar uma reserva. Não há outros testes ou informações sobre a causa do problema. Os registros são fictícios.

**Enunciado.** Qual hipótese deve orientar a próxima investigação, considerando essas três tentativas?

- **A.** Interrupção total do caminho dos terminais ao serviço; investigar primeiro a ausência de comunicação nas duas tentativas remotas.
- **B.** Falha exclusiva no programa de um dos terminais; investigar primeiro por que somente esse terminal rejeitou a reserva.
- **C.** Bloqueio da resposta no trajeto de volta; investigar primeiro por que os terminais não receberam o retorno dessas tentativas.
- **D.** Problema na consulta ou no cadastro usado pela aplicação; investigar primeiro a regra que também rejeitou a tentativa local.
- **E.** Comunicação sem falhas em toda a rede da Base; encerrar a investigação técnica e atribuir a recusa ao procedimento das pessoas.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** Os códigos relacionam envio, recebimento e resposta das duas tentativas remotas. A recusa também ocorre sem esse trajeto de rede. Isso sustenta investigar a aplicação e seu cadastro antes de atribuir essas recusas à ausência total de comunicação. A evidência não determina se falta um registro, se a consulta está incorreta ou se há outro defeito de aplicação; tampouco homologa toda a rede ou responsabiliza quem usa o serviço.

| Alternativa | Feedback específico |
|---|---|
| A | As solicitações chegaram e suas respostas voltaram com os códigos correspondentes. Uma interrupção total desse caminho não explica as tentativas registradas. |
| B | O comportamento aparece nos dois terminais e na tentativa local. Uma falha exclusiva de um terminal não explica esse conjunto. |
| C | Os terminais exibiram as respostas dos próprios códigos. Logo, o retorno dessas tentativas não ficou bloqueado como a opção afirma. |
| D | Correto: a recusa local reforça a investigação da aplicação e do cadastro. Essa é uma hipótese de trabalho delimitada, não um diagnóstico definitivo. |
| E | Comunicação nessas tentativas não certifica todos os caminhos da Base. Também não há evidência para atribuir a recusa às pessoas ou encerrar a investigação. |

### Originalidade, limites e revisão

- **Competência de partida:** Distinguir hipótese de falha de comunicação de falha de aplicação.
- **Raciocínio exigido:** Cruzar rastreabilidade de requisição/resposta com uma tentativa que elimina o trajeto remoto; delimitar hipótese de investigação sem diagnóstico absoluto.
- **Histórico efetivamente utilizado:** referências normativas do slot e análise indireta registrada no plano/piloto; nenhum enunciado histórico reaberto ou adaptado.
- **Diferenças estruturais e elementos autorais:** No piloto não há caso de comunicação versus aplicação. EX-COMUM-08 e EX-TRC-01 tratam de cabo desconectado/equipamento desligado; aqui o intercâmbio acontece e a operação é recusada também localmente. Não se reaproveita sua topologia ou correção física.
- **Possíveis ambiguidades controladas:** Resposta de aplicação não garante integridade de toda a rede. Não inferir que o cadastro certamente está vazio; a hipótese inclui erro de consulta. A tentativa local elimina apenas o trajeto descrito, não toda dependência possível.
- **Pontos específicos para revisão docente:** Validar a suficiência dos códigos correlacionados e do teste local, a diferença entre hipótese e causa comprovada e o recorte básico comum sem comandos, camadas ou fabricante.
- **Risco de similaridade:** o formato de cinco alternativas e o domínio temático são recorrentes. A comparação interna não comprova ineditismo externo; cotejo independente permanece pendente.

### Checklist editorial deste item

- [x] ID, versão, área, objetivo, síntese de competência, cursos e dificuldade confrontados com o slot.
- [x] Contexto fictício com premissas suficientes; sem norma, plataforma ou prioridade oculta.
- [x] Cinco alternativas distintas, uma resposta fundamentada e feedback de A–E.
- [x] Distratores rejeitados pelas evidências do caso; sem “todas/nenhuma” ou pegadinha de redação.
- [x] Explicação delimita a conclusão e não promete domínio ou transferência.
- [x] Fonte principal e corroboração, quando exigida, rastreadas na seção 8.
- [x] Sem nome da avaliação externa nos textos ao jogador; sem marca institucional oficial.
- [x] Comparação editorial interna registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] Cotejo externo, PPC, calibração e homologação de acessibilidade.

## 4. E26-Q-COM-08 — Há memória livre, mas a tarefa espera

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-08 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Há memória livre, mas a tarefa espera |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Sistemas operacionais: fundamentos |
| Rastreabilidade | COMUM-TEC07 / CC-II; SI-I; TADS-I; TGTI-II; TRC-I; F06, art. 5º, II, b.3–b.4; art. 6º, VII; corroboração por curso na seção 8 |
| difficulty | intermediate — conforme o slot do plano |
| Objetivo pedagógico | Relacionar indisponibilidade a dependências de recursos declaradas. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 8 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa para criação autoral de sistemas operacionais: fundamentos; cenário e solução fictícios, sem autoria ou chancela do Inep. Corroboração por curso registrada na ficha documental. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos, vinculados às sínteses do plano:**

- CC: relacionar compartilhamento de recursos e dependências de execução ao gerenciamento de sistemas.
- SI: interpretar limites de recursos de uma solução de TI para avaliar sua operação.
- TADS: relacionar processos de software a recursos computacionais necessários à execução.
- TGTI: analisar uma restrição de operação para orientar o uso seguro de recursos do serviço.
- TRC: reconhecer uma dependência de recurso administrado pelo sistema operacional de um serviço.

### Texto ao jogador

**Contexto.** Na Base N9 fictícia, um sistema operacional distribui memória entre processos, isto é, programas em execução. O serviço de miniaturas é um desses processos. Seu limite é de 8 unidades de memória. Ele já ocupa 6 unidades, usadas por uma tarefa ativa que não pode ser interrompida. A próxima tarefa precisa reservar mais 3 unidades antes de começar.

Há 12 unidades livres no computador, mas elas não são transferidas automaticamente a um processo que atingiria seu limite. O painel informa que a próxima tarefa espera pela reserva de memória; processador, armazenamento e conexão não impedem sua execução. Ao terminar, a tarefa ativa devolverá suas 6 unidades ao serviço. Não há prazo obrigatório para iniciar a próxima. Valores e regras são simplificados e fictícios.

**Enunciado.** Qual interpretação relaciona corretamente a espera ao recurso e permite prosseguir sem mudar limites ou interromper a tarefa ativa?

- **A.** O computador inteiro está sem memória; aguardar a liberação de espaço no armazenamento permitirá reservar as 3 unidades.
- **B.** O serviço precisa de 3 unidades e dispõe do limite de 8; repetir imediatamente a reserva permitirá ignorar as 6 unidades em uso.
- **C.** A conexão reteve a próxima tarefa; aguardar uma nova conexão permitirá usar as 12 unidades livres fora do limite do processo.
- **D.** O limite deixa apenas 2 unidades para o serviço agora; aguardar o término da tarefa ativa permitirá reservar as 3 unidades.
- **E.** O processador reteve a próxima tarefa; aumentar sua prioridade permitirá transformar memória livre do computador em reserva do serviço.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** O serviço tem 8 − 6 = 2 unidades disponíveis dentro do próprio limite, menos que as 3 exigidas. Memória livre no computador não anula esse limite. Quando a tarefa ativa devolver as 6 unidades, haverá 8 disponíveis no serviço e a reserva caberá. Aguardar respeita a continuidade da tarefa e as restrições do comando; não é uma recomendação universal para toda espera de processo.

| Alternativa | Feedback específico |
|---|---|
| A | O computador tem 12 unidades livres. Além disso, armazenamento e memória são recursos diferentes; liberar armazenamento não modifica o limite de memória descrito. |
| B | O limite de 8 não está todo disponível: 6 unidades já estão em uso. Repetir a mesma reserva imediatamente mantém a insuficiência. |
| C | A conexão não é impedimento informado. As 12 unidades globais não podem ser usadas ignorando o limite do processo nesse ambiente. |
| D | Correto: restam 2 unidades agora. O término devolve a memória ocupada, permitindo reservar 3 sem interromper a tarefa ou alterar o limite. |
| E | Prioridade de processador não altera o limite de memória neste modelo. O painel identifica a reserva, não a disputa por processamento, como bloqueio. |

### Originalidade, limites e revisão

- **Competência de partida:** Relacionar indisponibilidade a dependências de recursos declaradas.
- **Raciocínio exigido:** Distinguir disponibilidade global e limite por processo, relacionando ocupação atual, reserva necessária e liberação por término.
- **Histórico efetivamente utilizado:** referências normativas do slot e análise indireta registrada no plano/piloto; nenhum enunciado histórico reaberto ou adaptado.
- **Diferenças estruturais e elementos autorais:** Difere de EX-COMUM-09, cujo armazenamento estava cheio e exigia mover arquivos. Aqui há capacidade global livre, limite por processo e liberação futura não destrutiva. Não reutiliza recuperação de cópia, integridade ou ordenação do puzzle do piloto.
- **Possíveis ambiguidades controladas:** A conclusão da tarefa ativa e devolução integral da memória são premissas, sem vazamento ou prazo oculto. A pergunta proíbe aumentar limites/interromper, mas não afirma que isso seria impossível em outro ambiente.
- **Pontos específicos para revisão docente:** Conferir 8 − 6 = 2 e 2 < 3; validar a distinção entre recurso global e cota local e o modelo didático sem exigir administração de plataforma.
- **Risco de similaridade:** o formato de cinco alternativas e o domínio temático são recorrentes. A comparação interna não comprova ineditismo externo; cotejo independente permanece pendente.

### Checklist editorial deste item

- [x] ID, versão, área, objetivo, síntese de competência, cursos e dificuldade confrontados com o slot.
- [x] Contexto fictício com premissas suficientes; sem norma, plataforma ou prioridade oculta.
- [x] Cinco alternativas distintas, uma resposta fundamentada e feedback de A–E.
- [x] Distratores rejeitados pelas evidências do caso; sem “todas/nenhuma” ou pegadinha de redação.
- [x] Explicação delimita a conclusão e não promete domínio ou transferência.
- [x] Fonte principal e corroboração, quando exigida, rastreadas na seção 8.
- [x] Sem nome da avaliação externa nos textos ao jogador; sem marca institucional oficial.
- [x] Comparação editorial interna registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] Cotejo externo, PPC, calibração e homologação de acessibilidade.

## 5. E26-Q-COM-09 — Drenar sem transferir o problema

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-09 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Drenar sem transferir o problema |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Clima, territórios e qualidade de vida |
| Rastreabilidade | COMUM-FG03 / FG-II; F05, art. 5º, II, b.1–b.3; art. 6º, IV, IX–X |
| difficulty | advanced — conforme o slot do plano |
| Objetivo pedagógico | Selecionar intervenção integrando três restrições sociais e ambientais. |
| Fonte oficial principal | F05 — Portaria Inep 154/2026, de 14/04/2026; seção 8 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 154/2026 |
| source.url | https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf |
| source.description | Referência normativa para criação autoral de clima, territórios e qualidade de vida; cenário e solução fictícios, sem autoria ou chancela do Inep. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos, vinculados às sínteses do plano:**

- Integrar critérios de sustentabilidade, equidade territorial e qualidade de vida ao avaliar uma intervenção socioambiental.
- Comparar efeitos em territórios conectados, aplicando restrições explícitas sem compensar prejuízo social com benefício agregado.

### Texto ao jogador

**Contexto.** Uma comunidade fictícia próxima à Base N9 avalia intervenções de drenagem para um cenário de chuva definido. A água que sai do setor Alto chega ao setor Baixo. O setor Baixo já tem menos infraestrutura e mais moradias expostas. Para não transferir o problema, o acordo comunitário exige simultaneamente:

1. proteger pelo menos 30 moradias do setor Baixo;
2. não aumentar a vazão de pico que sai do Alto em direção ao Baixo;
3. preservar pelo menos 90 metros quadrados de solo permeável no Alto.

Vazão de pico é o maior volume de água por segundo no cenário; antes da intervenção, são 12 litros por segundo. Solo permeável permite infiltração. As alternativas apresentam projeções fictícias para a mesma chuva, todas de mesmo custo e viáveis neste exercício. Considere as projeções para a escolha; não há critério adicional de desempate.

**Enunciado.** Qual proposta cumpre o acordo sem trocar o atendimento de uma exigência pelo descumprimento de outra?

- **A.** Proteger 32 moradias no Baixo, projetar vazão de 11 litros por segundo e preservar 95 metros quadrados permeáveis no Alto.
- **B.** Proteger 44 moradias no Baixo, projetar vazão de 14 litros por segundo e preservar 110 metros quadrados permeáveis no Alto.
- **C.** Proteger 38 moradias no Baixo, projetar vazão de 10 litros por segundo e preservar 80 metros quadrados permeáveis no Alto.
- **D.** Proteger 26 moradias no Baixo, projetar vazão de 9 litros por segundo e preservar 105 metros quadrados permeáveis no Alto.
- **E.** Proteger 29 moradias no Baixo, projetar vazão de 12 litros por segundo e preservar 90 metros quadrados permeáveis no Alto.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A atende às três condições: 32 ≥ 30 moradias, 11 ≤ 12 litros por segundo e 95 ≥ 90 metros quadrados. B aumenta o pico dirigido ao Baixo; C preserva solo insuficiente; D e E não atingem a proteção mínima. Um valor melhor em outra medida não compensa a violação, porque o acordo exige as três ao mesmo tempo. As projeções sustentam a escolha neste modelo e não comprovam desempenho de uma obra real.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: as três exigências são cumpridas juntas. A proposta protege ao menos 30 moradias, não eleva o pico e mantém solo permeável suficiente. |
| B | As 44 moradias e os 110 metros quadrados atendem a duas exigências, mas 14 litros por segundo excedem os 12 atuais e violam a condição de não transferir o pico. |
| C | A proteção e o pico atendem aos limites, porém 80 metros quadrados ficam abaixo dos 90 exigidos. Reduzir o pico não autoriza descumprir a preservação. |
| D | O pico e a permeabilidade atendem ao acordo, mas 26 moradias não alcançam o mínimo de 30. A melhoria ambiental isolada não substitui a meta social. |
| E | O pico igual a 12 não aumenta, e 90 metros quadrados atendem ao mínimo. Contudo, 29 moradias ficam uma abaixo da proteção exigida; o acordo não prevê arredondar essa meta. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar intervenção integrando três restrições sociais e ambientais.
- **Raciocínio exigido:** Integrar três grandezas com sentidos de comparação diferentes e dependência territorial Alto–Baixo; rejeitar compensação de uma violação por outra vantagem.
- **Histórico efetivamente utilizado:** referências normativas do slot e análise indireta registrada no plano/piloto; nenhum enunciado histórico reaberto ou adaptado.
- **Diferenças estruturais e elementos autorais:** Compartilha a área climática com Q05 por planejamento, mas não o problema central: não há sombra, contagem de exposição, porcentagens, capacidade adicional ou escolha de piloto por maior cobertura. O novo conflito é a admissibilidade simultânea social/hidrológica/territorial, com projeções fixadas.
- **Possíveis ambiguidades controladas:** As projeções são aceitas apenas no exercício e usam a mesma chuva. 'Não aumentar' admite igualdade; os mínimos também. Não extrapolar proteção real, causalidade ou legalidade das intervenções. Custo e viabilidade iguais removem critérios escondidos.
- **Pontos específicos para revisão docente:** Conferir unidades, os três sentidos dos limites e se a integração territorial tem demanda avançada suficiente; calibrar sem aumentar texto ou exigir engenharia hidráulica.
- **Risco de similaridade:** o formato de cinco alternativas e o domínio temático são recorrentes. A comparação interna não comprova ineditismo externo; cotejo independente permanece pendente.

### Checklist editorial deste item

- [x] ID, versão, área, objetivo, síntese de competência, cursos e dificuldade confrontados com o slot.
- [x] Contexto fictício com premissas suficientes; sem norma, plataforma ou prioridade oculta.
- [x] Cinco alternativas distintas, uma resposta fundamentada e feedback de A–E.
- [x] Distratores rejeitados pelas evidências do caso; sem “todas/nenhuma” ou pegadinha de redação.
- [x] Explicação delimita a conclusão e não promete domínio ou transferência.
- [x] Fonte principal e corroboração, quando exigida, rastreadas na seção 8.
- [x] Sem nome da avaliação externa nos textos ao jogador; sem marca institucional oficial.
- [x] Comparação editorial interna registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] Cotejo externo, PPC, calibração e homologação de acessibilidade.

## 6. E26-Q-COM-10 — Troca de equipe sem liberar o controle

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-COM-10 |
| Versão | 1 |
| Contrato / classification | question / COMUM |
| Título editorial | Troca de equipe sem liberar o controle |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente. |
| Cursos / courses | CC, SI, TADS, TGTI, TRC |
| Área / area | Proteção da informação: fundamentos |
| Rastreabilidade | COMUM-TEC09 / CC-II; SI-II; TADS-II; TGTI-II; TRC-II; F06, art. 5º, II, b.1/b.3; art. 6º, XX; corroboração por curso na seção 8 |
| difficulty | advanced — conforme o slot do plano |
| Objetivo pedagógico | Escolher medida de proteção integrando ativo, risco e continuidade. |
| Fonte oficial principal | F06 — Portaria Inep 157/2026, de 14/04/2026; seção 8 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 157/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| source.description | Referência normativa para criação autoral de proteção da informação: fundamentos; cenário e solução fictícios, sem autoria ou chancela do Inep. Corroboração por curso registrada na ficha documental. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos, vinculados às sínteses do plano:**

- CC: avaliar riscos e compartilhamento de um recurso computacional ao escolher controles de acesso.
- SI: relacionar segurança da informação e registros de operação à continuidade de um serviço.
- TADS: reconhecer controles de qualidade e segurança coerentes com o comportamento exigido de uma aplicação.
- TGTI: integrar proteção de ativos e continuidade nas operações de um serviço.
- TRC: avaliar integridade e disponibilidade de um recurso de serviço em rede diante de acesso indevido.

### Texto ao jogador

**Contexto.** O painel de rotas de carrinhos da Base N9 fictícia é atualizado por uma equipe de manutenção e consultado pela equipe de circulação. O ativo a proteger é a configuração das rotas: uma alteração indevida pode exibir um trajeto errado. Uma pessoa encerrou seu vínculo com a manutenção e ainda conhece a credencial compartilhada usada para editar. Não há evidência de comprometimento do computador ou de acesso por outra via.

Para a troca de equipe, devem valer três condições: a pessoa desligada perder acesso de edição; cada edição futura ficar associada a quem a realizou; a circulação permanecer com permissão somente de consulta, sem depender da presença de alguém da manutenção.

O sistema permite criar contas individuais, desativar credenciais, separar permissão de consulta e edição e registrar edições pela conta utilizada. Neste exercício, as contas individuais não são compartilhadas e a troca pode ocorrer sem interrupção da consulta. Não há outra função ou proteção implícita.

**Enunciado.** Qual plano atende às três condições para esse risco, com os recursos informados?

- **A.** Trocar a senha de edição e entregá-la à manutenção atual; manter a consulta separada e registrar as edições pela credencial coletiva.
- **B.** Criar contas individuais de edição e desativar a credencial antiga; condicionar cada consulta à autorização de alguém da manutenção.
- **C.** Desativar a credencial antiga e usar contas individuais de edição com registro; manter para circulação uma permissão separada de consulta.
- **D.** Criar contas individuais de edição com registro e consulta separada; manter a credencial antiga disponível como acesso alternativo da manutenção.
- **E.** Desativar a credencial antiga e criar contas individuais com registro; conceder à circulação a mesma permissão de edição usada pela manutenção.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C remove a via de edição conhecida pela pessoa desligada, atribui edições às contas individuais e mantém consulta separada e independente. A perde atribuição individual; B condiciona consulta à presença da manutenção; D mantém a credencial vulnerável; E permite editar a quem deveria somente consultar. A proteção é proporcional ao risco descrito e não elimina riscos de comprometimento de contas ou máquinas que estejam fora das premissas.

| Alternativa | Feedback específico |
|---|---|
| A | Trocar a senha pode cortar o uso da credencial antiga, mas a credencial coletiva continua sem identificar individualmente quem editou. O requisito de atribuição não é cumprido. |
| B | As contas e a desativação tratam edição e atribuição, mas a consulta fica dependente de alguém da manutenção. Isso viola a continuidade exigida para circulação. |
| C | Correto: o plano combina revogação da credencial conhecida, atribuição individual e separação de consulta. Nenhuma dessas medidas, sozinha, atende às três condições. |
| D | As contas individuais não anulam uma credencial alternativa ainda válida. A pessoa desligada continua conhecendo uma via de edição que deveria ter sido desativada. |
| E | Quem precisa consultar recebe também poder de alterar o ativo. Essa ampliação desnecessária contraria a separação entre os papéis de consulta e manutenção descritos no caso. |

### Originalidade, limites e revisão

- **Competência de partida:** Escolher medida de proteção integrando ativo, risco e continuidade.
- **Raciocínio exigido:** Relacionar uma ameaça concreta a três controles complementares e examinar o risco residual de planos parcialmente corretos, preservando disponibilidade de consulta.
- **Histórico efetivamente utilizado:** referências normativas do slot e análise indireta registrada no plano/piloto; nenhum enunciado histórico reaberto ou adaptado.
- **Diferenças estruturais e elementos autorais:** Diferente de Q02: não trata finalidade de dados pessoais, listas ou divulgação; o ativo é configuração, com revogação e atribuição de edição. Diferente de E26-P-COM-01 e seq-incident-01: não restaura backup, confere resumo, ordena recuperação ou encerra incidente; compara permissões e continuidade simultâneas.
- **Possíveis ambiguidades controladas:** A circulação deve manter somente consulta: E viola essa condição ao conceder edição. Atribuição à conta depende da premissa de uso individual; não garante autoria humana em todo sistema real. Não há necessidade de credencial de emergência compartilhada no recorte fornecido.
- **Pontos específicos para revisão docente:** Confirmar a separação de papéis, atribuição e revogação, a suficiência das premissas e dificuldade avançada no recorte comum; não exigir lei, framework ou autenticação não descritos.
- **Risco de similaridade:** o formato de cinco alternativas e o domínio temático são recorrentes. A comparação interna não comprova ineditismo externo; cotejo independente permanece pendente.

### Checklist editorial deste item

- [x] ID, versão, área, objetivo, síntese de competência, cursos e dificuldade confrontados com o slot.
- [x] Contexto fictício com premissas suficientes; sem norma, plataforma ou prioridade oculta.
- [x] Cinco alternativas distintas, uma resposta fundamentada e feedback de A–E.
- [x] Distratores rejeitados pelas evidências do caso; sem “todas/nenhuma” ou pegadinha de redação.
- [x] Explicação delimita a conclusão e não promete domínio ou transferência.
- [x] Fonte principal e corroboração, quando exigida, rastreadas na seção 8.
- [x] Sem nome da avaliação externa nos textos ao jogador; sem marca institucional oficial.
- [x] Comparação editorial interna registrada; validationStatus permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] Cotejo externo, PPC, calibração e homologação de acessibilidade.

## 7. Síntese do lote e mapa reservado à curadoria

| ID | Área | Dificuldade | Resposta | Discriminante |
|---|---|---|---|---|
| E26-Q-COM-06 | Ciência, tecnologia e relações globais | intermediate | B | Intercâmbio de projetos e razões, com adaptação recíproca por contexto. |
| E26-Q-COM-07 | Redes: fundamentos de comunicação | intermediate | D | Requisição/resposta correlacionadas e recusa também local sustentam investigação da aplicação. |
| E26-Q-COM-08 | Sistemas operacionais: fundamentos | intermediate | D | Cota local insuficiente apesar da memória global livre; término devolve o recurso. |
| E26-Q-COM-09 | Clima, territórios e qualidade de vida | advanced | A | Três condições simultâneas, sem compensar violação com outra vantagem. |
| E26-Q-COM-10 | Proteção da informação: fundamentos | advanced | C | Revogação, atribuição individual e continuidade com permissão somente de consulta. |

Todos os itens acima: question, versão 1, CC/SI/TADS/TGTI/TRC, enade-2026 e provisional-pending-teacher-review.

Distribuição deste lote: introductory 0; intermediate 3; advanced 2. Somada ao piloto: dez questões comuns, 4/4/2. Os específicos planejados continuam em 3/5/2 por curso; a composição elegível futura permanece 7/9/4. Puzzles não entram nessas contagens.

Gabaritos na ordem dos IDs: **B/D/D/A/C**. Contagens: A=1, B=1, C=1, D=2, E=0. Há quatro posições distintas, com repetição de D; não se impôs uma letra de cada nem se continuou o mapa C/A/E/B/D do piloto como ciclo. Nenhuma regra de previsão será apresentada ao jogador. Isso é conferência editorial, não teste estatístico de aleatoriedade.

## 8. Fontes, corroboração e registro de acesso

Órgão emissor: MEC / Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep). Os seis atos têm data de **14/04/2026** e publicação identificada em **16/04/2026**, DOU edição 72, seção 1. Títulos específicos, páginas e URLs abaixo. Consulta web desta autoria: **13/11/2026**, distinta de datas de captura das reproduções.

A consulta recuperou o [índice oficial F00](https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade/2026) e os textos dos atos em reproduções identificadas. Os links individuais do DOU de F05–F09 retornaram 502; F10 retornou UnexpectedStatusCode, sem código numérico informado pela ferramenta. Não houve acesso bem-sucedido à versão certificada. UFSJ/Ufopa são hospedeiras universitárias; ABMES hospeda reproduções e não emite os atos. As referências normativas sustentam o recorte; não prescrevem estes casos, parâmetros ou soluções.

| Fonte / título do ato | Página DOU | Original tentado | Texto efetivamente consultado |
|---|---:|---|---|
| F05 — Portaria 154: diretrizes de prova do componente de Formação Geral, a partir da edição 2026 | 90 | [DOU 154](https://www.in.gov.br/web/dou/-/portaria-n-154-de-14-de-abril-de-2026-699921720), falha 502 | [UFSJ, reprodução, 2 páginas](https://arquivos.ufsj.edu.br/arquivos/20260681894a6b14571044b12092f6360/Matrizes_de_Referncia_ENADE_2026_Contedo_da_Formao_Geral.pdf), texto integral recuperado. |
| F06 — Portaria 157: diretrizes do componente específico de Bacharelado em Ciência da Computação | 91 | [DOU 157](https://www.in.gov.br/web/dou/-/portaria-n-157-de-14-de-abril-de-2026-699947879), falha 502 | [Ufopa, reprodução, 3 páginas](https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf), arts. 5º–6º na p. 2. |
| F07 — Portaria 168: diretrizes do componente específico de Bacharelado em Sistemas de Informação | 96 | [DOU 168](https://www.in.gov.br/web/dou/-/portaria-n-168-de-14-de-abril-de-2026-699946315), falha 502 | [Ufopa, reprodução, 2 páginas](https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf), arts. 5º–6º nas pp. 1–2. |
| F08 — Portaria Inep 169: diretrizes do componente específico de Tecnologia em Análise e Desenvolvimento de Sistemas | 96 | [DOU 169](https://www.in.gov.br/en/web/dou/-/portaria-n-169-de-14-de-abril-de-2026-699920629), falha 502 | [ABMES, reprodução, 3 páginas](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf), arts. 5º–6º nas pp. 2–3. |
| F09 — Portaria Inep 171: diretrizes do componente específico de Tecnologia em Gestão da Tecnologia da Informação | 97 | [DOU 171](https://www.in.gov.br/web/dou/-/portaria-n-171-de-14-de-abril-de-2026-699946786), falha 502 | [ABMES, reprodução, 3 páginas](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-171-2026-04-14.pdf), arts. 5º–6º nas pp. 2–3. |
| F10 — Portaria Inep 172: diretrizes do componente específico de Tecnologia em Redes de Computadores | 98 | [DOU 172](https://www.in.gov.br/web/dou/-/portaria-n-172-de-14-de-abril-de-2026-699944904), falha de status | [ABMES, reprodução, 3 páginas](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf), arts. 5º–6º nas pp. 2–3. |

### F05: localização do recorte comum

- Q06: art. 5º, I, a.2 e II, b.2–b.3, reprodução pp. 1–2; art. 6º, VII–VIII, p. 2. Sustenta intercâmbio de saberes, avaliação de argumentos e ciência/inovação em relações globais.
- Q09: art. 5º, II, b.1–b.3 e art. 6º, IV, IX–X, p. 2. Sustenta decisão socioambiental com território e qualidade de vida.
- Art. 1º, p. 1, dá abrangência de Formação Geral. O vínculo das sínteses FG-I/FG-II é interno ao plano; as dificuldades não são atribuídas pela norma.

### Corroboração obrigatória por curso dos três comuns técnicos

Os objetos são localizados separadamente; não se usa CC como matriz substituta dos demais cursos. A pertinência do recorte mínimo ainda exige revisão docente nos cinco cursos.

| Curso / fonte | Competência/habilidade: art. 5º | Q07: objeto do art. 6º | Q08: objeto do art. 6º | Q10: objeto do art. 6º |
|---|---|---|---|---|
| CC / F06, reprodução p. 2 | Q07: I, a.1/a.4; Q08: II, b.3–b.4; Q10: II, b.1/b.3 | XI — redes | VII — SO | XX — segurança |
| SI / F07, reprodução p. 2 | Q07/Q08: I, a.3–a.4; Q10: II, b.3–b.4 | XI — redes e distribuídos | X — SO | XVII — segurança da informação/SI |
| TADS / F08, reprodução pp. 2–3 | Q07/Q08: I, a.1/a.5; Q10: II, b.1 | XVI — princípios de redes/distribuídos | XVIII — princípios de SO | XVII — segurança cibernética |
| TGTI / F09, reprodução pp. 2–3 | Q07: II, b.1–b.2; Q08: II, b.2/b.4; Q10: II, b.5 | XIII — redes | III — SO | XIV — segurança |
| TRC / F10, reprodução pp. 2–3 | Q07: I, a.1–a.2; Q08: I, a.5; Q10: II, b.2 | I–II e X — fundamentos/comunicação/serviços | IX — administração de SO | XIII — segurança |

As habilidades mais amplas de implantar ou administrar não são alegadas como medidas por leitura de alternativas. Os três casos exigem interpretação de evidências fornecidas, sem comandos ou acesso a sistemas reais. Os textos de competencies são recortes autorais associados às sínteses do plano.

**Divergência documental detectada:** o piloto registra F10, art. 6º, XI, como localizador de segurança. Na reprodução recuperada nesta autoria, XI corresponde a virtualização; segurança está em **XIII**. Q10 utiliza XIII. A pertinência temática de proteção permanece, mas o localizador do piloto requer correção documental em etapa própria. O lote comum 01 foi preservado nesta entrega; não se modificam seus IDs, respostas, status ou recompensas. A divergência não autoriza aprovação nem mudança de schema.

Não se afirma revisão jurídica de vigência, exaustividade de retificações ou auditoria independente das reproduções. Conferir originais certificados na revisão docente. Nenhuma ausência de acesso foi preenchida por conteúdo normativo inventado.

## 9. Auditoria cruzada de originalidade interna

Comparação editorial com todas as cinco questões e a sequência do piloto, e com os 14 exemplos de questões e três sequências de src/content. A conferência considera cenário, estrutura decisória, relações entre dados e erros dos distratores, além da triagem textual. O uso do formato question é comum por contrato; não se copia o raciocínio central por troca de nomes.

| Item novo | Comparação mais próxima | Diferença central e caminhos de erro novos |
|---|---|---|
| Q06 | Piloto Q03; EX-COMUM-06 | Não corrige convite ou interpreta metáfora, nem compara protótipos para eleger vencedor. Compara o que circula entre equipes que produziram mudanças complementares; distingue produto, média, uniformização e compreensão recíproca. |
| Q07 | EX-COMUM-08; EX-TRC-01; seq-network-01 | Não reconecta cabo, liga intermediário ou ordena configuração. Usa códigos de requisição/resposta e reprodução local da recusa para separar comunicação realizada de operação rejeitada. |
| Q08 | EX-COMUM-09; puzzle do piloto | Não libera disco cheio ou recupera cópia. Relaciona limite por processo, memória global livre e devolução futura de recurso; distingue memória, armazenamento, prioridade e conexão. |
| Q09 | Piloto Q05; EX-COMUM-04 | Não compara sombra/cobertura ou calcula economia energética. Verifica admissibilidade de drenagem com três limites sociais e ambientais e relação entre territórios; rejeita compensação entre exigências. |
| Q10 | Piloto Q02 e puzzle; seq-incident-01 | Não limita uso promocional de dados nem ordena recuperação/teste/publicação. Compara planos de permissão em troca de equipe, considerando revogação, atribuição individual e consulta independente. |

Piloto Q01 (descrição, saldo, causalidade), Q04 (barreiras/canais) e seus distratores também foram confrontados: nenhuma situação ou cadeia de solução é reutilizada. A integração de requisitos em Q09/Q10 é prevista pelos slots avançados; os requisitos, representações e decisões são distintos entre si e dos itens introdutórios.

**Resultado:** não foi identificada repetição interna de situação, enunciado, alternativas ou conceito decisório central no cotejo editorial. Clima e segurança reaparecem como áreas previstas, com conflitos diferentes. A triagem automática de textos ao jogador não encontrou contextos, comandos ou alternativas integralmente iguais aos itens anteriores; isso não equivale a prova de originalidade global.

Não foram copiados trechos, imagens ou dados de questões oficiais. Fontes orientam a pertinência do tema. Não houve cotejo direto novo com acervos históricos completos ou bases externas de similaridade. Esse trabalho permanece para revisão independente; não se emite garantia de ineditismo externo.

### Checklist do lote

- [x] Somente cinco definições de questão, IDs 06–10 planejados e distintos dos IDs do piloto e do catálogo.
- [x] Cinco alternativas distintas, cinco feedbacks e uma resposta indicada por item.
- [x] Metadados obrigatórios presentes, enums existentes, elegibilidade explícita dos cinco cursos.
- [x] Dificuldades 0/3/2 neste lote; soma comum 4/4/2, sem mudar cotas de cada curso.
- [x] Gabaritos B/D/D/A/C, sem impor uma ocorrência de cada letra.
- [x] Premissas e rejeição de cada distrator conferidas; cálculos/limites de Q08/Q09 revisados.
- [x] Fontes, localizadores, consulta efetiva e falhas de acesso registrados.
- [x] Textos ao jogador sem referência à avaliação externa ou chancela institucional.
- [x] Todo validationStatus permanece provisional-pending-teacher-review.
- [ ] Parecer docente independente e cotejo externo de originalidade.
- [ ] Calibração com estudantes e verificação na interface futura.

## 10. Acessibilidade, limites e pendências

Os dados essenciais estão em texto; não se depende de cor, posição, ícone, imagem, som ou gesto fino. Q09 apresenta os limites em lista numerada e as projeções em alternativas textuais, sem exigir leitura de um diagrama. Unidades e sentidos de comparação são escritos. Q07 identifica por palavras os caminhos remoto/local; Q08 explica processo e limite de memória. Não há cronômetro; os tempos implícitos de execução não são prazos de resposta.

A conferência editorial de legibilidade não homologa leitor de tela, teclado, toque, zoom ou reflow em celular. Esses testes pertencem à apresentação futura autorizada. Validar especialmente carga de leitura de Q08/Q09/Q10 e compreensão dos termos sem adicionar conhecimento especializado.

| Pendência | Encaminhamento |
|---|---|
| Revisão por ID/versão/curso | Preencher os 25 registros da seção 11, sem parecer previamente favorável. |
| PPC e oferta concreta | Conferir adequação ao momento formativo e recorte mínimo comum; não ampliar elegibilidade por meta numérica. |
| Originais/retificações | Reconferir DOU e a divergência F10 XI/XIII do piloto; registrar decisão com evidência. |
| Unicidade independente | Resolver sem consultar o mapa de respostas e tentar defender cada distrator pelas premissas. |
| Calibração | Validar intermediate em Q06–08 e advanced em Q09–10 pelo raciocínio, sem cronômetro ou dificuldade por extensão. |
| Originalidade externa | Comparar materiais históricos pertinentes e outros acervos, registrando relação estrutural e decisão por item. |
| Acessibilidade e leitura | Pilotar com os cinco cursos, tecnologia assistiva e telas pequenas em futura integração. |
| Consolidação humana/identidade | Designar responsável e validar nome/tom provisório, sem afirmar produto oficial. |
| Liberação | Manter fora do catálogo; schema válido ou checklist conferido não são aprovação docente. |

Nenhum parecer docente foi preenchido. Se surgir falha material de fonte, resposta ou elegibilidade, interromper a liberação e registrar a revisão necessária; esta etapa mantém o status solicitado em todos os itens.

## 11. Formulários de revisão docente

Cinco fichas, uma por ID e versão, com cinco registros de curso cada: **25 registros ainda a preencher**. Recomendação individual não altera validationStatus, ativa coleção ou autoriza publicação.

Para cada registro, anexar resolução sem gabarito, eventuais respostas alternativas defensáveis, materiais comparados, evidências de adequação ao PPC, clareza, originalidade e acessibilidade. Pareceres possíveis no formulário: manter em revisão, requer revisão, recomendar aprovação ou rejeitar. São recomendações documentais, não novos estados do contrato.

### E26-Q-COM-06 — versão 1

| Curso | Docente / data | PPC / versão e evidências verificadas | Resolução independente / objeções | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir fonte principal, artigos e corroboração própria do curso quando aplicável.
- [ ] Conferir objetivo, competência, dificuldade e adequação ao PPC/oferta.
- [ ] Resolver sem gabarito; justificar por que B é a única resposta defensável e conferir A–E.
- [ ] Confirmar se a tensão entre produto entregue, conhecimento compartilhado e adequação local sustenta dificuldade intermediária, sem converter cooperação internacional em julgamento cultural.
- [ ] Registrar cotejo de originalidade, alternativas equivalentes e leitura/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-COM-07 — versão 1

| Curso | Docente / data | PPC / versão e evidências verificadas | Resolução independente / objeções | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir fonte principal, artigos e corroboração própria do curso quando aplicável.
- [ ] Conferir objetivo, competência, dificuldade e adequação ao PPC/oferta.
- [ ] Resolver sem gabarito; justificar por que D é a única resposta defensável e conferir A–E.
- [ ] Validar a suficiência dos códigos correlacionados e do teste local, a diferença entre hipótese e causa comprovada e o recorte básico comum sem comandos, camadas ou fabricante.
- [ ] Registrar cotejo de originalidade, alternativas equivalentes e leitura/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-COM-08 — versão 1

| Curso | Docente / data | PPC / versão e evidências verificadas | Resolução independente / objeções | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir fonte principal, artigos e corroboração própria do curso quando aplicável.
- [ ] Conferir objetivo, competência, dificuldade e adequação ao PPC/oferta.
- [ ] Resolver sem gabarito; justificar por que D é a única resposta defensável e conferir A–E.
- [ ] Conferir 8 − 6 = 2 e 2 < 3; validar a distinção entre recurso global e cota local e o modelo didático sem exigir administração de plataforma.
- [ ] Registrar cotejo de originalidade, alternativas equivalentes e leitura/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-COM-09 — versão 1

| Curso | Docente / data | PPC / versão e evidências verificadas | Resolução independente / objeções | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir fonte principal, artigos e corroboração própria do curso quando aplicável.
- [ ] Conferir objetivo, competência, dificuldade e adequação ao PPC/oferta.
- [ ] Resolver sem gabarito; justificar por que A é a única resposta defensável e conferir A–E.
- [ ] Conferir unidades, os três sentidos dos limites e se a integração territorial tem demanda avançada suficiente; calibrar sem aumentar texto ou exigir engenharia hidráulica.
- [ ] Registrar cotejo de originalidade, alternativas equivalentes e leitura/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-COM-10 — versão 1

| Curso | Docente / data | PPC / versão e evidências verificadas | Resolução independente / objeções | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| CC | A preencher | A preencher | A preencher | A preencher |
| SI | A preencher | A preencher | A preencher | A preencher |
| TADS | A preencher | A preencher | A preencher | A preencher |
| TGTI | A preencher | A preencher | A preencher | A preencher |
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir fonte principal, artigos e corroboração própria do curso quando aplicável.
- [ ] Conferir objetivo, competência, dificuldade e adequação ao PPC/oferta.
- [ ] Resolver sem gabarito; justificar por que C é a única resposta defensável e conferir A–E.
- [ ] Confirmar a separação de papéis, atribuição e revogação, a suficiência das premissas e dificuldade avançada no recorte comum; não exigir lei, framework ou autenticação não descritos.
- [ ] Registrar cotejo de originalidade, alternativas equivalentes e leitura/acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

## 12. Verificações e preservação do projeto

Resultados desta etapa:

- Auditoria documental por script efêmero: aprovada. Cinco IDs previstos, únicos entre as onze definições dos dois lotes; áreas, objetivos, cursos, competências de síntese e dificuldades conferidos com o plano. Vinte e cinco alternativas distintas nos respectivos itens e 25 feedbacks presentes; mapa B/D/D/A/C coerente com as explicações.
- Campos extraídos do Markdown e projetados **somente em memória**: cinco questões aceitas pelos schemas estritos question/editorial, com collectionId existente no catálogo. Nenhum arquivo JSON foi criado, nenhum item foi carregado no jogo.
- Triagem textual contra o piloto e os exemplos atuais: nenhum contexto, comando ou alternativa integralmente duplicado. Cotejo editorial estrutural registrado na seção 9; originalidade externa permanece pendente.
- Textos ao jogador, títulos, explicações e feedbacks sem o nome da avaliação externa; cinco status provisórios, 25 registros de revisão sem preenchimento e 0 aprovações docentes.
- Cálculos de memória e limites das cinco propostas de drenagem conferidos; somente A atende às três condições de Q09. Rejeição dos demais distratores fundamentada por item.
- npm.cmd run validate:content: **113 testes aprovados em quatro arquivos** (conteúdo, puzzles, contratos editoriais e missões).
- Conferência de preservação pelo Git: nenhum arquivo previamente versionado modificado; somente este novo Markdown. Plano, piloto, padrão, contratos, schemas e catálogos executáveis preservados.

Esses resultados atestam coerência formal e conferência editorial interna, sem substituir resolução independente, validação docente ou testes de apresentação futura.

O documento é o único arquivo previsto para criação. O backlog já mantém revisão docente, importação e missão mista como pendências; esta entrega registra seu inventário e limites aqui, sem necessidade de alterar o backlog. O lote-piloto, o padrão, o plano, os 60 slots de questões e seis slots de puzzles permanecem intactos. Não são gerados JSON, questões específicas, novos puzzles ou alterações em src, schemas, testes permanentes, mecânicas, interface, mapa, recompensas e progresso. Nenhuma publicação ou envio ao GitHub.
