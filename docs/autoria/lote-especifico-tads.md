# N9 — Jornada Digital: lote específico de Tecnologia em Análise e Desenvolvimento de Sistemas

Autoria editorial — 13/11/2026, horário de Brasília. Versão documental 1.0. **Todos os onze itens permanecem provisional-pending-teacher-review.** Autoria assistida por IA; responsável humano pela consolidação a designar. Contextos, dados, programas, versões e custos são fictícios. N9 é nome provisório sujeito à aprovação institucional. Não há chancela do Inep nem declaração de produto oficial.

Escopo: E26-Q-TADS-01–10 e E26-P-TADS-01. Somente este Markdown é criado. Nenhum JSON, catálogo, código, interface, mapa, mecânica ou progresso é alterado. Os lotes anteriores permanecem intactos.

## 1. Conferência prévia, matriz de TADS e cálculo das cotas

Leitura integral do [plano v2.0](../plano-colecao-enade-2026.md), [padrão editorial](padrao-editorial-piloto.md), [lote comum 01](lote-comum-01.md), [lote comum 02](lote-comum-02.md), [lote de CC](lote-especifico-cc.md) e [lote de SI](lote-especifico-si.md). Confronto com Question, EditorialMetadata, SequencePuzzle, schemas question/editorial/puzzles, validadores/repositórios, catálogo de coleções e referências existentes de desbloqueio. Git inicialmente limpo em 30ec9c2.

As seções 11.5 e 11.8 do plano governam os slots; a dificuldade individual não é copiada de um bloco genérico. TADS-I/TADS-II são sínteses internas vinculadas às competências da matriz própria, não novos códigos oficiais. Questões avaliam interpretação de requisitos, comportamento e evidências fornecidos; não certificam implementação profissional.

### Referência normativa principal: F08/TADS

**Portaria Inep 169/2026**, de 14/04/2026, é a fonte principal dos onze itens. Nesta autoria, seu endereço no DOU retornou 502; o texto foi recuperado em reprodução identificada da ABMES, com arts. 5º–6º lidos. ABMES hospeda o documento, não é órgão emissor. URLs e limites na seção 14.

Todos os incisos citados pertencem a essa portaria. Exemplos: banco de dados III; engenharia de requisitos V; gerência de configuração VII; gerência de projetos VIII; manutenção XII; orientação a objetos XIII; segurança XVII; qualidade/verificação/validação XX. Não se transporta a numeração de CC, SI ou de outro tecnólogo.

### Cálculo anterior à redação

| Conjunto documental | introductory | intermediate | advanced | Questões |
|---|---:|---:|---:|---:|
| Comuns 01: Q-COM-01–05 | 4 | 1 | 0 | 5 |
| Comuns 02: Q-COM-06–10 | 0 | 3 | 2 | 5 |
| Dez comuns já redigidas | 4 | 4 | 2 | 10 |
| Meta de vinte elegíveis em TADS | 7 | 9 | 4 | 20 |
| Necessário nas específicas: meta menos comuns | 7 − 4 = 3 | 9 − 4 = 5 | 4 − 2 = 2 | 10 |
| Específicas deste lote | 3 | 5 | 2 | 10 |
| Comuns mais específicas de TADS | 7 | 9 | 4 | 20 |

Q-TADS-01–03 são introductory; Q-TADS-04–08 intermediate; Q-TADS-09–10 advanced. **P-TADS-01 é sequence introductory**, conforme seu slot, diferente da dificuldade dos puzzles específicos de CC/SI. Com o puzzle comum, TADS tem dois puzzles introductory elegíveis documentalmente, separados das vinte questões. Redação e elegibilidade não significam aprovação ou disponibilidade no jogo.

### Slots conferidos

| ID | Área / síntese | Conteúdo planejado | Dificuldade | Objetivo do plano | Principal |
|---|---|---|---|---|---|
| E26-Q-TADS-01 | TADS-01 — Requisitos, análise e arquitetura de software / TADS-I | Regra de negócio e requisito | introductory | Relacionar necessidade explícita a requisito verificável. | F08 |
| E26-Q-TADS-02 | TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II | Orientação a objetos e comportamento | introductory | Identificar comportamento de objeto em cenário delimitado. | F08 |
| E26-Q-TADS-03 | TADS-02 — Processo, testes e validação de software / TADS-I | Verificação e validação de software | introductory | Distinguir evidência de correção técnica de atendimento à necessidade. | F08 |
| E26-Q-TADS-04 | TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II | Diagnóstico estático de defeito | intermediate | Selecionar correção a partir de trecho e rastreamento fornecidos. | F08 |
| E26-Q-TADS-05 | COMUM-TEC10 — Bancos de dados / TADS-II | Dados e integridade em aplicação | intermediate | Selecionar consulta ou restrição que atenda à regra da aplicação. | F08 |
| E26-Q-TADS-06 | TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II | Configuração e manutenção controlada | intermediate | Selecionar mudança rastreável preservando comportamento exigido. | F08 |
| E26-Q-TADS-07 | TADS-01 — Requisitos, análise e arquitetura de software / TADS-I e TADS-II | Arquitetura e requisitos de qualidade | intermediate | Comparar opções de arquitetura conforme restrições explícitas. | F08 |
| E26-Q-TADS-08 | TADS-04 — Projetos, empreendedorismo e responsabilidade / TADS-I | Planejamento de projeto e responsabilidade | intermediate | Priorizar decisão de projeto conforme recursos e impactos fornecidos. | F08 |
| E26-Q-TADS-09 | TADS-02 — Processo, testes e validação de software / TADS-I e TADS-II | Qualidade, segurança e aceitação | advanced | Selecionar conjunto de evidências que satisfaça três requisitos. | F08 |
| E26-Q-TADS-10 | TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II | Manutenção evolutiva e configuração | advanced | Selecionar mudança que preserve contratos e permita evolução segura. | F08 |
| E26-P-TADS-01 | TADS-01 — Requisitos, análise e arquitetura de software / TADS-I e TADS-II | Algoritmo linear de validação e processamento em cinco blocos | introductory | Relacionar regra de negócio a dependências de algoritmo delimitado. | F08 |

Todos: courses somente TADS; collectionId enade-2026; source.type official-reference; validationStatus provisional-pending-teacher-review. Questões: classification TADS, version 1. Puzzle: kind sequence, versão editorial documental 1, sem inventar campo version em SequencePuzzle.

### Evidência e contrato

- **Oficial:** F08 delimita competências e objetos de TADS; não fornece estes programas, cenários, respostas ou dificuldades.
- **Apoio técnico primário:** syllabus oficial ISTQB para verificação/validação, limites e configuração; documentação oficial PostgreSQL para nulos e restrições; OWASP para apresentação segura de texto. Leitura dirigida, sem uso de questões de certificação; referências na seção 14.
- **Histórico:** registros analíticos locais lidos; nenhum caderno de prova anterior foi copiado ou apenas reformulado.
- **Inferência/autoria:** regras locais, artefatos, diagnósticos, requisitos, casos de teste, alternativas, feedbacks e ordem do puzzle.
- **Pendente:** PPC/oferta, calibração, fontes certificadas/retificações, cotejo externo, revisão docente, consolidação humana e acessibilidade efetiva.

Título de questão, objetivo, código de área, fontes complementares, originalidade, checklist e parecer são documentação, não campos extras do objeto estrito. Question não tem kind; example/editorialStatus opcionais são dispensados e não concedem aprovação. source conserva uma fonte principal. Pseudocódigos e contratos fictícios descritos aqui não são alterações nos schemas ou no software do projeto.

## 2. E26-Q-TADS-01 — Os zeros também identificam

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-01 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | Os zeros também identificam |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Requisitos, análise e arquitetura de software |
| Rastreabilidade | TADS-01 / TADS-I; F08, art. 5º, I, a.4; art. 6º, V |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Relacionar necessidade explícita a requisito verificável. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e resultados verificáveis |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Transformar uma regra de identificação fornecida pelo negócio em requisito observável e verificável.

### Texto ao jogador

**Contexto.** Um catálogo fictício de moldes da Base N9 usa códigos com exatamente seis dígitos. Zeros à esquerda fazem parte da identificação: 000731 é um código válido e deve permanecer assim ao cadastrar, buscar e exibir. Entradas com outra quantidade de dígitos devem ser recusadas, sem preenchimento automático.

A equipe precisa registrar um requisito que permita verificar essa necessidade. Não há regra de soma, ordenação numérica ou conversão de unidade para o código.

**Enunciado.** Qual formulação descreve um comportamento verificável compatível com a regra?

- **A.** Tratar o código como inteiro, exibindo-o sem zeros à esquerda para facilitar a leitura do catálogo.
- **B.** Aceitar seis dígitos e preservar sua sequência no cadastro, busca e exibição; recusar entradas de tamanho diferente.
- **C.** Aceitar de um a seis dígitos e completar à esquerda com zeros para padronizar todos os cadastros.
- **D.** Preservar os seis dígitos na tela, mas remover zeros no armazenamento e na busca para economizar espaço.
- **E.** Oferecer cadastro rápido e códigos fáceis de entender, deixando a quantidade de dígitos a critério da implementação.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** B descreve aceitação, preservação e recusa observáveis. Por exemplo, 000731 permanece exatamente igual e 731 é recusado. A/C/D alteram uma regra explícita, enquanto E não define como verificar o comportamento necessário. A questão não exige escolher uma tecnologia de armazenamento; o requisito é a identidade textual do código.

| Alternativa | Feedback específico |
|---|---|
| A | Converter em inteiro e retirar zeros muda a identificação declarada pelo negócio. |
| B | Correto: há critérios objetivos para testar entrada válida, preservação e rejeição, sem acrescentar uma normalização proibida. |
| C | Completar automaticamente uma entrada curta contradiz a recusa exigida. Padronizar não autoriza modificar a regra. |
| D | Preservar apenas a aparência não garante o mesmo código na busca e no cadastro. O requisito alcança os três comportamentos. |
| E | Rapidez e facilidade podem ser objetivos, mas essa redação não especifica a regra dos seis dígitos nem seus resultados verificáveis. |

### Originalidade, limites e revisão

- **Competência de partida:** Relacionar necessidade explícita a requisito verificável.
- **Raciocínio exigido:** Distinguir requisito de comportamento, decisão de implementação e objetivo vago de qualidade.
- **Diferença interna e elementos autorais:** Não trata finalidade de dados pessoais, granularidade remessa/parceiro de SI-01, consulta de SI-02 ou erro de tipos de CC-03. A regra preserva uma identidade textual com zeros significativos.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** Entradas mais curtas não são equivalentes ao código completo e não podem receber zeros automaticamente. Não se presume fabricante, banco ou linguagem.
- **Revisão docente específica:** Conferir exemplos com seis, cinco e sete dígitos, letras e zeros iniciais. Avaliar observabilidade do requisito sem impor uma implementação específica.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 3. E26-Q-TADS-02 — Quem produz o texto do painel

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-02 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | Quem produz o texto do painel |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Orientação a objetos, configuração e manutenção |
| Rastreabilidade | TADS-03 / TADS-II; F08, art. 5º, II, b.2/b.5; art. 6º, XIII |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Identificar comportamento de objeto em cenário delimitado. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e resultados verificáveis |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Interpretar colaboração e delegação entre objetos pelo comportamento do objeto configurado, sem depender de sintaxe de linguagem.

### Texto ao jogador

**Contexto.** Um exemplo fictício da Base N9 possui um objeto Painel e um objeto formatador. Ao publicar um registro, Painel chama gerar no formatador configurado e mostra exatamente o texto devolvido, sem acrescentar conteúdo.

Há dois tipos de formatador:

- Breve devolve apenas o assunto do registro.
- Completo devolve o assunto, seguido de um travessão e do estado do registro.

Painel está configurado com uma instância de Completo. O registro recebido tem assunto Ensaio e estado concluído. As chamadas usam o comportamento do objeto configurado; não há escolha automática pelo nome do Painel.

**Enunciado.** Qual texto resulta dessa colaboração?

- **A.** Ensaio, porque Painel usa sempre o comportamento de Breve.
- **B.** concluído, porque o estado substitui o assunto ao publicar.
- **C.** Completo — concluído, porque o nome do tipo ocupa o lugar do assunto.
- **D.** Ensaio — concluído, porque Painel delega a geração ao objeto Completo configurado.
- **E.** Ensaio — Ensaio, porque a mesma propriedade é usada nas duas partes do texto.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** D segue a chamada delegada: Completo recebe o registro e devolve assunto e estado na forma declarada. Painel apenas mostra essa devolução. O tipo do objeto colaborador determina o comportamento fornecido neste modelo; não é necessário reescrever Painel para cada formatador nem inferir regras de uma linguagem comercial.

| Alternativa | Feedback específico |
|---|---|
| A | Breve é um comportamento disponível, mas não é o objeto configurado nessa execução. |
| B | A regra de Completo usa assunto e estado, sem substituir um pelo outro. |
| C | Completo é o nome do tipo, não o assunto contido no registro. |
| D | Correto: a delegação utiliza o formatador configurado e os dois campos do registro. |
| E | O segundo campo usado por Completo é estado, cujo valor é concluído. Repetir assunto não corresponde ao comportamento descrito. |

### Originalidade, limites e revisão

- **Competência de partida:** Identificar comportamento de objeto em cenário delimitado.
- **Raciocínio exigido:** Acompanhar a colaboração entre objetos e a origem de cada parte do resultado.
- **Diferença interna e elementos autorais:** Não rastreia acumulador aritmético como CC-01, circuito como CC-02 ou interpretação sociocultural de mensagem como COM-03. O foco é delegação de comportamento por composição.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** Painel não altera o texto e a chamada usa a instância Completo. Não se presume herança, sobrecarga, método estático ou regra de resolução específica de linguagem.
- **Revisão docente específica:** Repetir mentalmente com Breve e Completo e conferir origem dos campos. Validar recorte introdutório de orientação a objetos sem exigir sintaxe ou diagrama visual.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 4. E26-Q-TADS-03 — Os testes passaram com a referência errada

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-03 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | Os testes passaram com a referência errada |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Processo, testes e validação de software |
| Rastreabilidade | TADS-02 / TADS-I; F08, art. 5º, I, a.2/a.4; art. 6º, V e XX |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Distinguir evidência de correção técnica de atendimento à necessidade. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | TADS-T01 — leitura conceitual dirigida; ver seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Distinguir conformidade com uma especificação testada de atendimento à necessidade que deveria orientar a solução.

### Texto ao jogador

**Contexto.** Um organizador fictício de reparos da Base N9 deve apresentar primeiro o trabalho com prazo mais próximo, conforme a necessidade informada pela oficina. Porém, a especificação entregue à equipe mandou ordenar os nomes alfabeticamente.

Os testes foram derivados dessa especificação e passaram: Álamo, Bordo e Cedro aparecem nessa ordem. Os prazos dos trabalhos são, respectivamente, dia 2, dia 3 e dia 1 do mesmo mês. Para a necessidade declarada, a sequência deveria começar por Cedro.

Não há empate de prazo, outro critério de prioridade ou erro no registro dessas datas.

**Enunciado.** Qual conclusão distingue corretamente as duas evidências?

- **A.** Os testes mostram conformidade com a ordenação especificada, mas não atendimento à necessidade; o requisito e seus critérios precisam ser revistos.
- **B.** A aprovação nos testes demonstra atendimento à necessidade da oficina, pois a execução coincide com o documento usado pela equipe.
- **C.** A necessidade deve ser redefinida como ordem alfabética para manter válidos os testes que já passaram.
- **D.** Executar mais vezes os mesmos testes alfabéticos demonstra que a prioridade por prazo foi validada.
- **E.** Trocar a ferramenta de testes resolve a divergência, mesmo conservando os mesmos critérios e resultados esperados.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A implementação pode estar conforme a referência alfabética e ainda resolver o problema errado. A necessidade exige prioridade por prazo, não por nome. É preciso revisar a especificação e derivar critérios coerentes com essa necessidade; repetir a mesma referência ou mudar a ferramenta não a corrige. Isso não torna verificação inútil: mostra que a base dos testes também precisa de análise.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: conformidade com o documento e adequação à necessidade são perguntas distintas, e o cenário fornece uma divergência concreta. |
| B | O documento de teste adotou o critério divergente. Passar nesses testes não demonstra prioridade por prazo. |
| C | Não se muda a necessidade apenas para conservar testes aprovados; ela é a referência de negócio fornecida. |
| D | Repetição aumenta confiança na repetibilidade daquele resultado, não transforma ordem alfabética em ordem de prazo. |
| E | Ferramenta diferente com os mesmos critérios continua avaliando a regra errada para a necessidade. |

### Originalidade, limites e revisão

- **Competência de partida:** Distinguir evidência de correção técnica de atendimento à necessidade.
- **Raciocínio exigido:** Confrontar necessidade, especificação e oráculo do teste, sem inferir validação apenas de testes aprovados.
- **Diferença interna e elementos autorais:** Diferente de SI-08, que comparava cobertura do percurso offline, aqui os testes executam exatamente uma especificação divergente. Não é inferência causal, gargalo de parecer ou priorização por quantidade de pessoas.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** A necessidade foi explicitamente definida como prazo mais próximo; não existe prioridade alfabética legítima oculta. Os testes passaram para a referência declarada, não para todos os requisitos possíveis.
- **Revisão docente específica:** Conferir a ordem por nome e por prazo e a distinção verificação/validação. Evitar ensinar que testes aprovados não têm valor ou que validação dispensa verificação.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 5. E26-Q-TADS-04 — A remoção desloca o próximo item

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-04 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | A remoção desloca o próximo item |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Orientação a objetos, configuração e manutenção |
| Rastreabilidade | TADS-03 / TADS-II; F08, art. 5º, II, b.2/b.4; art. 6º, I, VI e XII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar correção a partir de trecho e rastreamento fornecidos. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e resultados verificáveis |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Diagnosticar falha de cursor causada por mutação de uma lista e selecionar correção que preserve ordem e término.

### Texto ao jogador

**Contexto.** Uma rotina fictícia da Base N9 deve retirar todos os itens cujo valor seja DESCARTAR, preservando a ordem e as repetições dos demais. Os índices começam em zero. Remover uma posição desloca todos os itens seguintes uma posição para a esquerda.

O trecho atual é descrito em pseudocódigo:

1. definir i como zero;
2. enquanto i for menor que o tamanho atual da lista:
   - se o item em i for DESCARTAR, remover a posição i;
   - incrementar i em uma unidade, em qualquer caso.

O teste [A, DESCARTAR, DESCARTAR, B] produz [A, DESCARTAR, B], embora devesse produzir [A, B]. Nenhum outro código altera a lista durante a rotina.

**Enunciado.** Qual correção elimina a falha sem descartar itens válidos e sem mudar sua ordem?

- **A.** Manter o incremento e trocar a condição do laço para i menor ou igual ao tamanho atual.
- **B.** Começar i em um, mantendo a remoção e o incremento do trecho atual.
- **C.** Fixar o tamanho original como limite do laço, mantendo o incremento após cada remoção.
- **D.** Ao encontrar DESCARTAR, remover a posição seguinte a i, mantendo o incremento em qualquer caso.
- **E.** Incrementar i somente quando não houver remoção; após remover, reavaliar a mesma posição com o tamanho atual.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** Após remover, o próximo item ocupa o índice atual; avançar nesse momento o pula. E mantém i quando remove e avança quando preserva um item. A rotina termina porque cada passo reduz a quantidade restante ou avança o cursor. A condição continua estrita, i menor que o tamanho atual, e nenhuma ordenação ou deduplicação é introduzida.

| Alternativa | Feedback específico |
|---|---|
| A | O índice igual ao tamanho não existe. Ampliar a condição pode acessar fora da lista e não resolve o salto após remoção. |
| B | Começar em um deixa a posição zero sem exame e mantém o salto entre itens descartáveis adjacentes. |
| C | O tamanho original fica desatualizado quando a lista encolhe. O incremento continua pulando o item deslocado. |
| D | O item que justificou a remoção permanece, e a posição seguinte pode conter um item válido, como B em outra entrada. |
| E | Correto: reexaminar o índice após remoção considera o item deslocado; avançar apenas ao preservar garante progresso sem perder a ordem. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar correção a partir de trecho e rastreamento fornecidos.
- **Raciocínio exigido:** Relacionar deslocamento estrutural da lista ao cursor e verificar correção e término em entradas de fronteira.
- **Diferença interna e elementos autorais:** Não é soma/substituição de acumulador de CC-01 nem deduplicação de EX-SI-01. Repetições válidas devem permanecer; o defeito é saltar posições após mutação.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** O tamanho consultado é o atual, não um limite congelado. Não se pede remover repetições, ordenar ou modificar os valores preservados. A remoção por índice é definida pelo caso.
- **Revisão docente específica:** Testar lista vazia, um descartável, descartáveis adjacentes, todos descartáveis, nenhum descartável e repetições válidas. Conferir que só E atende a todos os casos.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 6. E26-Q-TADS-05 — O intervalo precisa existir e fazer sentido

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-05 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | O intervalo precisa existir e fazer sentido |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Bancos de dados |
| Rastreabilidade | COMUM-TEC10 / TADS-II; F08, art. 5º, II, b.3; art. 6º, III |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar consulta ou restrição que atenda à regra da aplicação. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | TADS-T02 — CHECK e NOT NULL |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Selecionar restrições de integridade que combinem obrigatoriedade e relação entre valores de um registro.

### Texto ao jogador

**Contexto.** Uma aplicação fictícia da Base N9 registra intervalos de uso de uma sala técnica. Inicio e fim são minutos inteiros desde o começo do dia. A regra de cada registro é: ambos obrigatórios e 0 ≤ inicio < fim ≤ 1440.

Há mais de um caminho de gravação, por isso a regra deve ser garantida no banco, não só na tela. Neste modelo, uma restrição CHECK aceita uma expressão verdadeira ou indeterminada por valor nulo; NOT NULL proíbe nulo. UNIQUE impede repetição do par, mas não verifica sua ordem ou faixa.

Não se pede tratar sobreposição entre registros; a tarefa é garantir a regra de uma linha.

**Enunciado.** Qual conjunto de restrições garante integralmente essa regra nos caminhos de gravação?

- **A.** CHECK para 0 ≤ inicio < fim ≤ 1440, sem proibir nulos nas colunas.
- **B.** NOT NULL em inicio e fim, sem restrição de ordem ou de faixa.
- **C.** NOT NULL em inicio e fim e CHECK para 0 ≤ inicio < fim ≤ 1440.
- **D.** UNIQUE no par inicio/fim, sem restrição de obrigatoriedade ou de ordem.
- **E.** Validação de obrigatoriedade e faixa apenas no formulário, sem restrições no banco.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C combina a presença dos valores com a relação exigida. CHECK sozinho não rejeita necessariamente nulos no modelo; NOT NULL sozinho aceita valores presentes mas fora de ordem/faixa; UNIQUE não representa a regra; e validação só na tela não cobre os outros gravadores. Exemplos válidos incluem 0/60 e 1430/1440; 60/60 e nulo/60 são inválidos.

| Alternativa | Feedback específico |
|---|---|
| A | Uma comparação com nulo pode ser indeterminada e ainda satisfazer CHECK no modelo. Falta garantir a presença dos valores. |
| B | Obrigatoriedade não impede inicio igual a fim, negativo ou fim acima de 1440. |
| C | Correto: presença, faixa e ordem ficam garantidas juntas no banco para cada linha. |
| D | Dois valores diferentes podem formar um intervalo inválido. Não repetir o par não assegura seu conteúdo. |
| E | Outro caminho de gravação pode contornar o formulário. A regra exige proteção no banco. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar consulta ou restrição que atenda à regra da aplicação.
- **Raciocínio exigido:** Separar presença, conteúdo e unicidade de um registro, considerando a semântica explícita de nulo.
- **Diferença interna e elementos autorais:** Diferente de SI-05: não modela associação histórica nem chaves estrangeiras. Diferente de SI-02: não seleciona e soma registros. O núcleo é a combinação de CHECK e obrigatoriedade em uma linha.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** As colunas já são inteiras e o limite final 1440 é permitido. Não há regra de sobreposição ou chave única exigida. A notação expressa uma condição lógica, não uma migração SQL do projeto.
- **Revisão docente específica:** Conferir nulos, inicio/fim iguais, valores negativos e fronteira 1440. Não rejeitar intervalo válido por uma restrição adicional que não foi solicitada.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 7. E26-Q-TADS-06 — A prévia não deve mudar a medida final

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-06 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | A prévia não deve mudar a medida final |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Orientação a objetos, configuração e manutenção |
| Rastreabilidade | TADS-03 / TADS-II; F08, art. 5º, II, b.1/b.5; art. 6º, VII e XII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar mudança rastreável preservando comportamento exigido. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | TADS-T01 — leitura conceitual dirigida; ver seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Selecionar uma alteração de configuração com escopo e versão rastreáveis, preservando comportamento e possibilidade de reversão.

### Texto ao jogador

**Contexto.** Um editor fictício de guias de recorte da Base N9 tem uma versão R7 que exporta corretamente em escala física 1:1, mas sua prévia não cabe na janela. A versão R8 passou a usar escala 0,6 numa configuração global: a prévia coube, porém a exportação também foi reduzida, contrariando o comportamento exigido.

A mudança pedida é ajustar somente a prévia; a exportação deve permanecer em 1:1. A equipe precisa conseguir reproduzir a versão testada e retornar à referência anterior caso necessário. Código, dependências, configuração e resultados de comparação podem ser versionados.

**Enunciado.** Qual plano atende à mudança e à manutenção controlada?

- **A.** Manter a escala global 0,6 de R8 e instruir cada pessoa a ampliar manualmente o arquivo depois de exportar.
- **B.** Editar diretamente o pacote já gerado de R8 para mudar a escala final, sem registrar a alteração na origem ou gerar versão identificada.
- **C.** Voltar integralmente a R7 e encerrar a solicitação, preservando a exportação mas deixando a prévia sem o ajuste pedido.
- **D.** Alterar o padrão de todos os módulos para 1:1 e exigir que a prévia continue usando esse mesmo padrão global.
- **E.** Criar versão identificada com escala restrita à prévia, exportação 1:1 e comparações registradas, fixando configuração/dependências e referência de retorno.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** E separa os escopos, entrega o ajuste pedido e mantém uma referência reproduzível de código/configuração/dependências e evidências. A transfere a regressão à pessoa usuária; B não reproduz a alteração pela origem; C não entrega a mudança; D mantém o acoplamento que impedia ajustar a prévia. Reversão registrada é possibilidade de controle, não obrigação de desfazer uma mudança correta.

| Alternativa | Feedback específico |
|---|---|
| A | A exportação continua incorreta e passa a depender de uma correção manual externa que não faz parte do comportamento exigido. |
| B | Uma edição sem registro na origem e sem versão identificada pode se perder na próxima geração e não constitui uma referência reproduzível. |
| C | Retornar pode ser uma mitigação temporária, mas encerrar sem ajustar a prévia não atende à solicitação completa. |
| D | Se a prévia precisa seguir o mesmo padrão global, o ajuste específico continua impossível nas condições do caso. |
| E | Correto: a alteração tem escopo próprio, preserva a exportação e deixa versões/evidências que permitem reproduzir e, se necessário, retornar. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar mudança rastreável preservando comportamento exigido.
- **Raciocínio exigido:** Analisar regressão por configuração compartilhada e combinar escopo mínimo com rastreabilidade de uma mudança.
- **Diferença interna e elementos autorais:** Não restaura cópia como P-COM-01 nem decide arquitetura de leitura como SI-10. Difere de TADS-10 deste lote: isola configuração interna, sem evoluir um formato externo entre consumidores.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** R7 é referência conhecida, não ordem de revertê-la permanentemente. A comparação da exportação usa a mesma escala física, sem inferir propriedades de impressão não fornecidas.
- **Revisão docente específica:** Conferir correção simultânea da prévia e preservação 1:1, vínculo de versões e retorno possível. Distinguir alteração na origem de edição manual de artefato gerado.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 8. E26-Q-TADS-07 — A regra não pertence à tela

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-07 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | A regra não pertence à tela |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Requisitos, análise e arquitetura de software |
| Rastreabilidade | TADS-01 / TADS-I e TADS-II; F08, art. 5º, I, a.4; II, b.5; art. 6º, II e XX |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar opções de arquitetura conforme restrições explícitas. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e resultados verificáveis |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar a organização de módulos para reutilizar regras e testar comportamento sem dependência do meio de entrada.

### Texto ao jogador

**Contexto.** Uma aplicação fictícia da Base N9 confere combinações de materiais para kits cenográficos. Ela recebe solicitações por uma tela web e por um terminal de texto. As regras de combinação devem ser as mesmas, e uma alteração de regra precisa ter um único lugar de manutenção.

A equipe também precisa testar essas regras sem abrir navegador, terminal interativo ou conexão com banco. Futuramente haverá entrada por arquivo. A tarefa não exige distribuir o sistema em serviços; considere somente a organização descrita em cada proposta.

**Enunciado.** Qual organização atende à reutilização e à independência dos testes?

- **A.** Manter as regras em módulo independente que recebe dados e devolve resultados, com entradas web/terminal/arquivo convertendo dados para esse mesmo módulo.
- **B.** Copiar as regras para cada entrada e testar as cópias separadamente, repetindo toda mudança na tela e no terminal.
- **C.** Manter as regras numa função que lê campos diretamente da página web e fazer o terminal abrir essa página para obter seus resultados.
- **D.** Compartilhar um módulo de regras que exige conexão com banco e navegador ativos em todos os testes, inclusive sem consultar registros.
- **E.** Colocar as regras no evento de clique da tela e usar apenas testes de interface como evidência de execução para as outras entradas.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A concentra as regras e separa a adaptação de entradas, permitindo testes por dados/resultados sem os meios interativos. B duplica manutenção; C/E vinculam o comportamento à interface; D conserva dependências que os testes não podem exigir. A proposta não depende de framework nem significa que toda aplicação precise da mesma organização.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: as entradas adaptam os dados, mas reutilizam o comportamento num único módulo testável de forma independente. |
| B | Cópias podem divergir e exigem vários lugares de alteração, contrariando a regra de manutenção única. |
| C | A função depende da página e força uma interface a usar outra. Os testes deixam de ser independentes do navegador. |
| D | A conexão e o navegador obrigatórios violam explicitamente a condição dos testes, ainda que exista um módulo compartilhado. |
| E | Um evento de clique não oferece, por si só, execução independente para terminal e arquivo. A evidência da tela não substitui o comportamento reutilizável solicitado. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar opções de arquitetura conforme restrições explícitas.
- **Raciocínio exigido:** Relacionar separação de responsabilidades, reutilização e testabilidade em módulos com diferentes entradas.
- **Diferença interna e elementos autorais:** Não trata de canais acessíveis como COM-04, ensaio offline como SI-08 ou versão sob carga como SI-10. Difere da delegação de uma chamada em TADS-02: aqui se avaliam dependências arquiteturais e manutenção das regras entre entradas.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** Não se presume que duplicar código seja inevitável nem que banco/navegador possam ser simulados por recurso não descrito. O módulo de regras pode ser função ou objeto, sem framework obrigatório.
- **Revisão docente específica:** Conferir manutenção única, nova entrada sem duplicação e teste sem os três recursos excluídos. Aceitar implementação equivalente que preserve a separação das propostas.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 9. E26-Q-TADS-08 — Quatro horas antes do piloto

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-08 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | Quatro horas antes do piloto |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Projetos, empreendedorismo e responsabilidade |
| Rastreabilidade | TADS-04 / TADS-I; F08, art. 5º, I, a.3; art. 6º, VIII e XX |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Priorizar decisão de projeto conforme recursos e impactos fornecidos. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e resultados verificáveis |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Priorizar trabalho de uma entrega conforme risco conhecido, capacidade disponível e critérios de liberação explícitos.

### Texto ao jogador

**Contexto.** Uma equipe fictícia da Base N9 prepara o piloto de um editor de partituras. Existe um defeito reproduzido que perde a última alteração quando a janela é fechada. A política interna do piloto exige corrigir esse defeito, executar a regressão prevista e registrar a mudança antes da liberação. Trabalho cosmético pode ser adiado.

Restam quatro horas de equipe. A correção exige duas horas; a regressão, uma; o registro da mudança, uma. São estimativas fechadas deste exercício, sem paralelismo ou outra equipe disponível. Novas animações e ajustes visuais não tratam a perda de dados.

**Enunciado.** Qual decisão usa as quatro horas e atende à política de liberação?

- **A.** Usar duas horas na correção e duas em animações, adiando regressão e registro para depois do piloto.
- **B.** Usar três horas em animação e uma no registro do defeito, mantendo a correção para a rodada seguinte.
- **C.** Usar duas horas na correção, uma na regressão e uma no registro, adiando os trabalhos cosméticos.
- **D.** Usar uma hora na regressão da versão com defeito, uma no registro e duas em ajustes visuais, sem corrigir.
- **E.** Usar duas horas na correção e duas em documentação complementar, liberando sem executar a regressão prevista.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C usa 2 + 1 + 1 = 4 horas e conclui o conjunto exigido para tratar o risco conhecido. As outras propostas cabem no mesmo orçamento, mas deixam correção, regressão ou registro obrigatório pendente. A decisão segue a política fornecida, não uma regra universal de que cosmética nunca importa ou de que todo risco exige o mesmo processo.

| Alternativa | Feedback específico |
|---|---|
| A | Corrigir é necessário, mas a política também exige regressão e registro antes de liberar. |
| B | Registrar o defeito sem corrigi-lo mantém a perda conhecida. A animação não mitiga esse impacto. |
| C | Correto: o plano atende aos três componentes obrigatórios dentro das quatro horas e adia o que a política permite adiar. |
| D | Testar a versão defeituosa pode fornecer evidência, mas não elimina a falha que a política exige corrigir. |
| E | Documentação adicional não substitui a regressão exigida após a correção. |

### Originalidade, limites e revisão

- **Competência de partida:** Priorizar decisão de projeto conforme recursos e impactos fornecidos.
- **Raciocínio exigido:** Integrar prioridade por impacto, restrição de esforço e critérios de saída de uma entrega.
- **Diferença interna e elementos autorais:** Não prioriza incidente apenas pelo número de pessoas como EX-TGTI-01, não otimiza mistura de recursos como SI-09 nem escolhe sincronização por custo como CC-10. O núcleo é completar um critério de liberação sob risco conhecido.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** As durações incluem o trabalho solicitado e não podem ser encurtadas por hipótese. A falha é fictícia, distinta do progresso salvo do jogo, que não é alterado.
- **Revisão docente específica:** Conferir esforço de cada plano e quais requisitos ficam pendentes. Não presumir legislação, risco não informado ou trabalho de equipe adicional.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 10. E26-Q-TADS-09 — Três critérios, uma liberação

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-09 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | Três critérios, uma liberação |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Processo, testes e validação de software |
| Rastreabilidade | TADS-02 / TADS-I e TADS-II; F08, art. 5º, I, a.3/a.4; II, b.1; art. 6º, V, XVII e XX |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar conjunto de evidências que satisfaça três requisitos. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | TADS-T01 — leitura conceitual dirigida; ver seção 14; TADS-T03 para apresentação literal de texto |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar um conjunto de evidências a critérios independentes de limite de entrada, apresentação segura e tratamento de falha.

### Texto ao jogador

**Contexto.** Um mural de anotações fictício da Base N9 será liberado somente após demonstrar três critérios de aceitação num ambiente de teste:

1. depois de retirar espaços externos, textos com 1 e 80 caracteres são aceitos; com 0 e 81, recusados;
2. um texto de teste com marcação HTML aparece integralmente como texto literal, sem interpretação da marcação ou execução; não deve ser removido ou alterado para parecer seguro;
3. ao simular falha de gravação, o rascunho permanece editável e a mensagem informa falha, sem confirmar envio.

Todos os dados do ensaio usam caracteres ASCII, e os relatórios abaixo descrevem o que foi efetivamente observado. Cobrir esses critérios não é certificação de segurança integral.

**Enunciado.** Qual relatório fornece evidência satisfatória para os três critérios definidos?

- **A.** 0/81 recusados e 1 aceito, mas 80 recusado; marcação literal preservada; falha mantém rascunho e informa erro.
- **B.** 0/81 recusados e 1/80 aceitos; apresentação testada apenas com uma palavra sem marcação; falha mantém rascunho e informa erro.
- **C.** 0/81 recusados e 1/80 aceitos; marcação integral exibida como texto literal; falha mantém rascunho editável e informa erro.
- **D.** 0/81 recusados e 1/80 aceitos; marcação retirada antes de mostrar o conteúdo; falha mantém rascunho e informa erro.
- **E.** 0/81 recusados e 1/80 aceitos; marcação literal preservada; falha mantém rascunho, mas a mensagem confirma envio.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C cobre os limites inclusivos, a apresentação literal integral e os dois comportamentos exigidos na falha. A rejeita um limite válido; B não ensaia marcação; D altera o conteúdo; E apresenta confirmação indevida. Validar tamanho de entrada não demonstra apresentação segura, e preservar o rascunho não torna correta uma mensagem de sucesso. O relatório cobre o recorte fornecido, sem provar ausência de toda vulnerabilidade.

| Alternativa | Feedback específico |
|---|---|
| A | O tamanho 80 pertence ao intervalo aceito. Recusá-lo viola o primeiro critério, apesar dos outros resultados satisfatórios. |
| B | Uma palavra sem marcação não verifica como a apresentação trata marcação. Falta evidência específica do segundo critério. |
| C | Correto: os três critérios têm observações coerentes, incluindo limite superior, literalidade e estado/mensagem após erro. |
| D | Retirar marcação não mantém o texto integral que o critério exige. Sanitização que altera o conteúdo não é a mesma regra de apresentação literal. |
| E | A mensagem confirma algo que não ocorreu. Preservar o rascunho atende só parte do terceiro critério. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar conjunto de evidências que satisfaça três requisitos.
- **Raciocínio exigido:** Integrar cobertura de limites, distinção entre dados e marcação e coerência de estado/feedback diante de falha, rejeitando evidências apenas parciais.
- **Diferença interna e elementos autorais:** Não compara simplesmente testes unitários com um percurso de campo como SI-08. Não trata contas/permissões de COM-10 nem média de algoritmo: a segurança é a separação entre texto e interpretação, associada a limites e erro de gravação.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** Todos os testes são do mesmo ambiente/configuração, e ASCII remove dúvida de contagem Unicode. A marcação é dado do ensaio, não conteúdo para executar; não se exige payload de ataque ou teste num sistema real.
- **Revisão docente específica:** Conferir os quatro limites, os resultados observados e a independência dos três critérios. Distinguir validação de entrada de apresentação segura e não promover o ensaio a certificação de segurança.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 11. E26-Q-TADS-10 — Mais precisão sem mudar o significado antigo

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TADS-10 |
| Versão | 1 |
| Contrato / classification | question / TADS |
| Título editorial | Mais precisão sem mudar o significado antigo |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Orientação a objetos, configuração e manutenção |
| Rastreabilidade | TADS-03 / TADS-II; F08, art. 5º, II, b.1/b.5; art. 6º, VII, XII e XX |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar mudança que preserve contratos e permita evolução segura. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa específica de TADS para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | TADS-T01 — leitura conceitual dirigida; ver seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar estratégias de evolução de contrato por unidade, formato, compatibilidade de consumidores e evidência de regressão.

### Texto ao jogador

**Contexto.** Um editor fictício de percursos sonoros da Base N9 exporta a versão V1 de uma tabela com exatamente duas colunas: id e duracaoSegundos. Consumidores antigos exigem esse cabeçalho exato e segundos inteiros não negativos; colunas extras são recusadas.

Novos consumidores precisam de milissegundos inteiros, mas os antigos devem continuar funcionando durante a transição. A fonte de duração agora mede milissegundos. Para V1, a regra histórica é descartar a fração de segundo: 2500 ms corresponde a 2 segundos, e 999 ms a zero. O exportador pode oferecer formatos separados e identificados. Não se permite exigir atualização imediata de todos os consumidores.

**Enunciado.** Qual mudança preserva o contrato antigo e oferece a precisão nova com evidência verificável?

- **A.** Manter o cabeçalho V1 e passar a escrever milissegundos em duracaoSegundos, conservando os mesmos nomes para os leitores antigos.
- **B.** Manter V1 com a conversão histórica e oferecer V2 identificada em milissegundos, com testes de consumidores antigos e dos limites da conversão.
- **C.** Adicionar uma coluna de milissegundos à própria tabela V1 e considerar preservado o contrato porque as duas colunas antigas continuam presentes.
- **D.** Passar a escrever segundos decimais em duracaoSegundos de V1, sem alterar seu identificador de versão.
- **E.** Substituir V1 por V2 e encerrar o formato antigo na mesma entrega, exigindo que todos os leitores migrem antes de usar a exportação.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** B conserva cabeçalho, unidade e regra de V1, enquanto torna explícito o novo formato. Casos de fronteira como 0, 999, 1000 e 2500 ms verificam as projeções antigas; leitores antigos devem continuar aceitando V1. A troca a unidade sob o mesmo nome; C viola o cabeçalho estrito; D viola o inteiro; E viola a transição. A proposta é documental e não migra tabelas, saves ou contratos do projeto.

| Alternativa | Feedback específico |
|---|---|
| A | Conservar o nome não conserva o significado. Um leitor antigo interpretaria milissegundos como segundos. |
| B | Correto: os dois contratos têm significado e identificação próprios, e a compatibilidade é verificada com leitores e casos de fronteira. |
| C | Os leitores antigos recusam colunas extras por premissa. Presença das colunas antigas não basta para garantir compatibilidade. |
| D | O contrato V1 exige inteiros e descarte da fração. Escrever decimais altera o formato e a regra histórica. |
| E | A exigência proíbe migração imediata obrigatória. Encerrar V1 agora impede os consumidores antigos de continuar funcionando. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar mudança que preserve contratos e permita evolução segura.
- **Raciocínio exigido:** Integrar forma, unidade, semântica de conversão e janela de convivência, sem confundir nome estável com contrato preservado.
- **Diferença interna e elementos autorais:** Não trata definição de indicador entre áreas como SI-06 ou atualização de versão de leitura sob carga como SI-10. Diferente de TADS-06: o foco é evolução explícita de contrato externo entre consumidores, não escopo de configuração interna.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado; conceitos clássicos não são anunciados como invenções.
- **Ambiguidades controladas:** Durações são inteiras não negativas em milissegundos; V1 descarta fração, não arredonda ao mais próximo. Não se presume tolerância de cabeçalho extra, capacidade de leitor não descrita ou alteração de dados salvos no jogo.
- **Revisão docente específica:** Testar limites de conversão, cabeçalho exato e consumidores V1/V2 durante a convivência. Conferir regressão sem apagar o formato anterior e sem atribuir compatibilidade apenas ao número da versão.
- **Risco residual:** formato e conceitos recorrentes exigem cotejo externo independente; a ausência de texto idêntico não prova ineditismo global.

### Checklist editorial do item

- [x] ID, área, objetivo, síntese, dificuldade e curso correspondem ao slot.
- [x] F08/Portaria 169 como principal, com localizadores próprios de TADS.
- [x] Contexto fictício, cinco opções e uma resposta fundamentada; feedbacks A–E.
- [x] Premissas e rejeição dos distratores explícitas, sem lei, plataforma ou ferramenta oculta.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns/CC/SI registrada; status permanece provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, calibração, similaridade externa e acessibilidade na apresentação.

## 12. E26-P-TADS-01 — Paginar sem aceitar uma legenda vazia

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-TADS-01 |
| Versão editorial documental | 1 — sem campo version em SequencePuzzle |
| Contrato / kind | sequence |
| Título / title | Paginar sem aceitar uma legenda vazia |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; algoritmo autoral para N9 — Jornada Digital, sujeito à revisão docente de TADS. |
| Cursos / courses | TADS |
| Área / area | Requisitos, análise e arquitetura de software |
| Rastreabilidade | TADS-01 / TADS-I e TADS-II; F08, art. 5º, I, a.4 e II, b.2/b.4; art. 6º, I e V |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Relacionar regra de negócio a dependências de algoritmo delimitado. |
| Fonte oficial principal | F08 — Portaria Inep 169/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 169/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| source.description | Referência normativa de requisitos e algoritmos para fluxo autoral de preparação de legendas; não prescreve estes dados ou sua sequência. |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar regra de preparação de legendas a transformações e pré-condições de um algoritmo linear, preservando dados e ordem.

### Narrativa ao jogador

Uma ferramenta fictícia de demonstração da Base N9 prepara páginas de legendas para uma apresentação. A entrada já foi recebida como um único texto: “  Lira ; Nimbo ; Orla ; Prisma ”. Ponto e vírgula separa as legendas; esse caractere não pode fazer parte de uma legenda.

Os dados deste exercício usam apenas caracteres ASCII imprimíveis; espaço significa o caractere comum de código 32.

A regra de negócio permite de 1 a 12 caracteres ASCII por legenda depois de retirar somente os espaços externos. Espaços internos permanecem. Se qualquer legenda ficar vazia ou ultrapassar o limite, o processamento deve parar com mensagem de erro; não se permite descartá-la silenciosamente.

Outras notas do ambiente, sem ordem de execução:

- A prévia recebe páginas prontas e mostra seus números e legendas.
- O normalizador trabalha sobre uma lista de trechos, não sobre o texto único.
- O agrupador só recebe a lista liberada pela validação e coloca no máximo duas legendas por página, sem mudar a ordem.
- O validador exige a lista já normalizada, pois verifica o tamanho relevante ao negócio.

Organize os cinco cartões pelas entradas e saídas que cada um utiliza. Neste caso a entrada é válida, mas a lógica deve respeitar a interrupção para outras entradas inválidas. Não há gravação de arquivo ou envio real nesta atividade documental.

### Blocos

Ordem editorial diferente da solução. Cinco blocos, todos utilizados uma vez.

| ID do bloco | Texto |
|---|---|
| agrupar-paginas | Receber a lista liberada pela validação e agrupá-la em páginas com até duas legendas, preservando sua ordem. |
| normalizar-legendas | Receber a lista de trechos separados e retirar apenas espaços externos de cada trecho, preservando espaços internos e ordem. |
| gerar-previa | Receber as páginas agrupadas e gerar a prévia textual numerada, mantendo todas as legendas e sua distribuição. |
| separar-legendas | Receber o texto único e separá-lo a cada ponto e vírgula, produzindo a lista de trechos ainda não normalizados. |
| validar-legendas | Receber a lista normalizada, verificar de 1 a 12 caracteres por legenda e liberá-la inteira somente se todas forem válidas; caso contrário, interromper com erro. |

### Ordem correta e justificativa

**correctOrder:** separar-legendas → normalizar-legendas → validar-legendas → agrupar-paginas → gerar-previa.

| Dependência | Justificativa no algoritmo dos cartões |
|---|---|
| separar-legendas antes de normalizar-legendas | O normalizador recebe uma lista; a entrada inicial ainda é um texto único com separadores. |
| normalizar-legendas antes de validar-legendas | O tamanho relevante é o da legenda sem espaços externos. Um trecho só de espaços deve ficar vazio antes do teste. |
| validar-legendas antes de agrupar-paginas | O agrupador só consome a lista inteira liberada; não pode descartar inválidos ou agrupar dados ainda sem aprovação da regra. |
| agrupar-paginas antes de gerar-previa | A prévia numera e apresenta páginas, não uma lista plana sem sua distribuição definida. |

As quatro dependências formam uma cadeia estrita e determinam uma única permutação completa dos cinco cartões. Outras implementações poderiam combinar operações; o desafio usa as entradas/saídas declaradas e não impõe uma ordem universal a qualquer programa de texto.

### Aplicação das regras e artefatos de chegada

| Artefato | Conteúdo no caso válido |
|---|---|
| Trechos separados | Quatro trechos, ainda com os espaços externos do texto de entrada |
| Lista normalizada | Lira; Nimbo; Orla; Prisma, com ordem preservada |
| Lista liberada | Mesmas quatro legendas; tamanhos 4, 5, 4 e 6 dentro de 1–12 |
| Páginas agrupadas | Página 1: Lira/Nimbo; página 2: Orla/Prisma |
| Prévia textual | Duas páginas numeradas, mantendo a ordem e todas as legendas |

A lista de trechos pode conter um item feito só de espaços. Antes de normalizar, ele tem caracteres; depois, deve ser recusado como vazio. Uma legenda válida cercada por muitos espaços pode ter mais de doze caracteres brutos e ainda ser válida depois de normalizar. Por isso testar o tamanho bruto não é equivalente ao requisito.

O caso não pede remover elementos inválidos nem duplicatas: uma falha interrompe o lote inteiro; legendas iguais válidas são preservadas. Isso o distingue da correção de remoção de lista em Q-TADS-04. Espaços internos são dados e permanecem. Não se transfere essa regra de normalização para identificadores de outra finalidade.

### Dicas progressivas

1. Observe o formato dos dados: um texto único, uma lista de legendas e uma lista de páginas não são a mesma entrada.
2. Uma legenda feita só de espaços parece ter tamanho antes da normalização, mas fica vazia depois. Em qual estado a regra de tamanho deve ser verificada?
3. Para mostrar uma página não basta ter trechos: o agrupador exige a lista liberada. Se houver legenda inválida, o algoritmo não deve produzir uma prévia parcial.

Nenhuma dica enumera os cinco cartões na ordem correta. A primeira focaliza os formatos; a segunda, o significado de tamanho; a terceira, a liberação antes de produzir páginas. Avaliar o efeito cumulativo das pistas na revisão docente.

### Explicação final ao jogador

A separação produz os quatro trechos; a normalização os transforma em Lira, Nimbo, Orla e Prisma, sem espaços externos. A validação aceita os tamanhos 4, 5, 4 e 6 e libera a lista inteira. O agrupamento forma página 1 com Lira/Nimbo e página 2 com Orla/Prisma. A prévia usa essas páginas numeradas. Se um trecho normalizado fosse vazio ou longo demais, não haveria liberação, agrupamento ou prévia. Essa ordem decorre dos formatos e pré-condições destes cartões, não de uma sequência obrigatória para toda ferramenta de texto.

### Interação visual, feedback e acessibilidade — especificação futura

- Painel com texto de entrada, cartões e artefatos. Prévia de páginas é opcionalmente visual, sempre acompanhada de lista textual “Página 1: ...”, “Página 2: ...”.
- Os espaços externos podem receber marcação ilustrativa, mas a descrição textual informa sua existência; nenhuma decisão depende somente da cor ou de contar espaços num desenho.
- Mouse e toque poderão arrastar cartões ou usar “Mover para cima/baixo”. Teclado acionará os mesmos botões, com foco mantido e anúncio de posição entre cinco.
- “Validar sequência” confirma a tentativa. No erro, feedback textual aponta uma dependência violada e oferece a próxima dica sob demanda; não mostra automaticamente a ordem inteira.
- No acerto, apresentar explicação e os artefatos do caso, permitindo conferir as duas páginas. Mostrar botão para retornar ao local de origem no mapa, em integração posterior autorizada.
- Uma ilustração de entrada inválida poderá explicar por que não haveria prévia parcial; não constitui outro tipo de puzzle nem nova questão executável.
- Sem cronômetro obrigatório, penalidade de XP por erro/dica ou gesto fino obrigatório. Repetir poderá informar recompensa já recebida.
- Tela pequena, ampliação e leitor de tela devem manter a ordem linear das informações e acesso às explicações. A presente etapa não implementa ou homologa essa interface.

### Recompensa e desbloqueio documentais

- **reward.xp:** 100, proposta única por ID conforme convenção do piloto; repetição não concede mais XP. Nenhuma recompensa existente é alterada.
- **unlocks.mapId:** base-n9; **unlocks.objectId:** door, referências existentes, sem criar ou ativar objeto.
- Puzzle fora das vinte questões; não se implementam missão mista, novo salvamento, envio ou geração de arquivo.

### Originalidade, limites e revisão

- **Conceitos aplicados:** requisito sobre tamanho normalizado, transformação de dados e pré-condições de um algoritmo; a ordem exige relacionar formatos e efeitos, não memorizar um ciclo de vida.
- **Diferenças:** não calcula média, restaura cópia, ordena atendimento/configuração de rede, transforma artefatos de compilador ou autoriza custeio. Não usa personagens, tabelas ou cadeia decisória dos puzzles anteriores.
- **Elementos autorais:** texto com separadores, preservação de espaços internos e repetições válidas, interrupção integral e agrupamento em duas legendas por página.
- **Limite da unicidade:** vale para estes cinco cartões e contratos de entrada/saída. Docente deve tentar outra ordem e contestar dependência artificial antes de liberar.
- **Risco residual:** processamento de texto e validação são conceitos recorrentes. O caso não é anunciado como invenção teórica, e originalidade externa ainda precisa de cotejo.

### Checklist editorial do puzzle

- [x] ID, TADS-I/TADS-II, área e dificuldade introductory correspondem ao plano.
- [x] Fonte principal F08/Portaria 169; cinco blocos únicos e permutação completa.
- [x] Quatro dependências por dados/efeitos, com regra de erro explícita.
- [x] Aplicação do caso e contraexemplos de espaço/tamanho explicados.
- [x] Três dicas sem ordem completa; feedback e explicação separados.
- [x] Interação prevê texto equivalente, teclado, botões, mouse/toque e ausência de velocidade obrigatória.
- [x] Recompensa/desbloqueio só documentais; status continua provisório.
- [ ] Solução e dificuldade revistas independentemente por docente.
- [ ] Cotejo externo e homologação da apresentação futura.

## 13. Inventário e distribuição

| ID | Contrato | Curso | Dificuldade | Resposta / solução reservada à curadoria |
|---|---|---|---|---|
| E26-Q-TADS-01 | question | TADS | introductory | B |
| E26-Q-TADS-02 | question | TADS | introductory | D |
| E26-Q-TADS-03 | question | TADS | introductory | A |
| E26-Q-TADS-04 | question | TADS | intermediate | E |
| E26-Q-TADS-05 | question | TADS | intermediate | C |
| E26-Q-TADS-06 | question | TADS | intermediate | E |
| E26-Q-TADS-07 | question | TADS | intermediate | A |
| E26-Q-TADS-08 | question | TADS | intermediate | C |
| E26-Q-TADS-09 | question | TADS | advanced | C |
| E26-Q-TADS-10 | question | TADS | advanced | B |
| E26-P-TADS-01 | sequence | TADS | introductory | separar-legendas → normalizar-legendas → validar-legendas → agrupar-paginas → gerar-previa |

Todos os itens: enade-2026 e provisional-pending-teacher-review, sem parecer favorável atribuído.

Específicas: **3 introductory, 5 intermediate, 2 advanced**. Vinte elegíveis de TADS: **4/4/2 comuns + 3/5/2 específicas = 7/9/4**. Dois puzzles introductory elegíveis, comum e TADS, contados separadamente. Os 66 slots não são ampliados nem renumerados.

Gabaritos por ID 01–10: **B/D/A/E/C/E/A/C/C/B**. Contagens A=2, B=2, C=3, D=1, E=2. Não se impôs uniformidade, ciclo ou alternância; não se divulga esse mapa antes da resposta nem se alega garantia estatística de imprevisibilidade.

## 14. Fontes e rastreabilidade

Consulta desta autoria: **13/11/2026**. Distinguir data do ato, publicação, versão de material e consulta. As fontes orientam os recortes; os cenários, programas, valores e respostas são autorais.

### Matriz normativa específica de TADS

| Fonte | Identificação | Original tentado | Texto recuperado e limites |
|---|---|---|---|
| F08 — Portaria Inep nº 169, de 14/04/2026, diretrizes do componente específico de Tecnologia em Análise e Desenvolvimento de Sistemas | Emissor MEC/Inep; publicação 16/04/2026, DOU edição 72, seção 1, p. 96 | [DOU 169](https://www.in.gov.br/en/web/dou/-/portaria-n-169-de-14-de-abril-de-2026-699920629), falha 502 | [Reprodução ABMES, três páginas](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf), texto integral recuperado; art. 5º nas pp. 2–3 e art. 6º na p. 3. |

ABMES é hospedeira da reprodução, não emissora da portaria. Não se declara leitura bem-sucedida da versão certificada do DOU, auditoria jurídica exaustiva de vigência ou ausência de retificações. Reconferir originais na data do parecer docente; não preencher limitação de acesso com artigo inventado.

### Localizadores por item — todos da Portaria 169/2026

| Item | Art. 5º: competência/habilidade | Art. 6º: objeto de TADS |
|---|---|---|
| Q-TADS-01 | I, a.4 | V |
| Q-TADS-02 | II, b.2/b.5 | XIII |
| Q-TADS-03 | I, a.2/a.4 | V e XX |
| Q-TADS-04 | II, b.2/b.4 | I, VI e XII |
| Q-TADS-05 | II, b.3 | III |
| Q-TADS-06 | II, b.1/b.5 | VII e XII |
| Q-TADS-07 | I, a.4; II, b.5 | II e XX |
| Q-TADS-08 | I, a.3 | VIII e XX |
| Q-TADS-09 | I, a.3/a.4; II, b.1 | V, XVII e XX |
| Q-TADS-10 | II, b.1/b.5 | VII, XII e XX |
| P-TADS-01 | I, a.4 e II, b.2/b.4 | I e V |

A competência I orienta análise de contexto/regras e processos de software; a II, arquitetura/implementação com qualidade e segurança. Sínteses e objetivos não acrescentam competência oficial, peso ou incidência de tema. Interpretação de alternativa ou ordem de cartões não certifica execução profissional.

### Apoios técnicos primários lidos de forma dirigida

| ID | Referência / órgão ou autoria / versão | Localizador e acesso efetivo | Uso e limite |
|---|---|---|---|
| TADS-T01 | International Software Testing Qualifications Board, Certified Tester Foundation Level Syllabus v4.0.1, 15/09/2024 | [PDF oficial, 78 páginas](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf), seção 1.1, p. 15; seção 2.2.3, pp. 30–31; seção 4.2.2, p. 40; seção 5.4, p. 56 | Q03: verificação/validação; Q06/Q10: referência/versionamento e regressão; Q09: limites. Leitura desses trechos, não de banco de questões ou simulados. Não há promessa de certificação ou acreditação do material. |
| TADS-T02 | PostgreSQL Global Development Group, documentação oficial PostgreSQL 18, seção 5.5 Constraints; data individual de publicação não identificada | [Documentação recuperada](https://www.postgresql.org/docs/current/ddl-constraints.html), 5.5.1 Check Constraints e 5.5.2 Not-Null Constraints | Q05: semântica de nulo e obrigatoriedade. O caso fornece essas regras e não exige instalar PostgreSQL, executar SQL ou usar fabricante específico. Não se copia seu exemplo de produtos. |
| TADS-T03 | OWASP Cheat Sheet Series, Cross Site Scripting Prevention Cheat Sheet; data individual de publicação não identificada | [Texto oficial recuperado](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), Output Encoding e Output Encoding for HTML Contexts | Q09: distinção entre dados literais e interpretação de marcação; leitura dirigida. Não se reproduz payload de ataque nem se testa sistema real; não se alega que validação de entrada sozinha evite todas as vulnerabilidades. |

Q01/Q02/Q04/Q07/Q08 e o puzzle usam modelos e regras locais suficientes para resolver os casos; suas ligações normativas são F08. Os apoios conceituais não fornecem enunciados para reformular, não substituem a matriz de TADS e não fazem do conteúdo uma questão oficial.

Somente F08 compõe source principal dos onze objetos projetados. Apoios ficam na ficha documental, sem campos extras. Nenhuma matriz normativa de outro curso sustenta questão ou puzzle deste lote.

## 15. Auditoria cruzada, unicidade e acessibilidade

Cotejo editorial com os dois lotes comuns, CC, SI e os exemplos atuais de src/content: situação, representação, raciocínio central, estrutura decisória e erros dos distratores. Compartilhar formato Question/SequencePuzzle e conceitos gerais de software não autoriza transportar um caso por troca de nomes.

| Item TADS | Comparação pertinente | Diferença central |
|---|---|---|
| Q01 | COM-02; CC-03; SI-01/02 | Requisito verificável de identidade textual, não finalidade de dado pessoal, erro de tipos, componente de negócio ou consulta de registros. |
| Q02 | COM-03; CC-01/02 | Colaboração/delegação entre objetos configurados, não recepção de mensagem, acumulador ou circuito. |
| Q03 | SI-08; COM-01; SI-03 | Contradição entre especificação testada e necessidade; não cobertura de percurso offline, inferência causal ou janela de parecer. |
| Q04 | CC-01; EX-SI-01; puzzle TADS | Mutação de lista desloca cursor; não aritmética de estado, deduplicação ou liberação integral antes de paginar. |
| Q05 | SI-02/05 | Regra de uma linha com nulo, ordem e faixa; não consulta agregada, cardinalidade histórica ou chave estrangeira. |
| Q06 | P-COM-01; SI-10; Q-TADS-10 | Escopo de configuração e referência reproduzível; não recuperação de cópia, versão de leitura ou evolução de formato externo. |
| Q07 | COM-04; SI-08/10; Q-TADS-02 | Separação entre regras e meios de entrada para manutenção/testabilidade; não inclusão multicanal, aceitação offline, escala/frescor ou simples resultado de uma chamada. |
| Q08 | EX-TGTI-01; SI-09; CC-10 | Critério de liberação sob risco e esforço, não maior público afetado, otimização de mistura ou sincronização por custo. |
| Q09 | COM-10; SI-08; CC-03 | Três evidências independentes de limite, literalidade e falha; não permissão de conta, percurso offline ou diagnóstico de compilação. |
| Q10 | SI-06/10; Q-TADS-06 | Compatibilidade de formato/unidade e convivência de consumidores; não definição de indicador, frescor de informação ou configuração interna de prévia. |
| P-TADS-01 | P-COM-01; P-CC-01; P-SI-01; seq-algorithm-01 | Texto→lista normalizada/liberada→páginas/prévia, não cópia íntegra, transformação de compilador, custeio autorizado ou média. |

Também foram examinados os demais itens de clima, cultura, ciência, acesso, grafos, imagem, probabilidade, capacidade de modelos, processos e dados. Nenhum de seus registros, grafos, números ou artefatos foi reutilizado como novo desafio. Os temas de requisitos, evidência e manutenção se relacionam pelo plano, mas as decisões centrais são explicitamente diferentes.

**Resultado editorial interno:** não foi identificada repetição de situação, enunciado, conjunto de alternativas ou problema central dos lotes anteriores. A triagem de igualdade textual complementa, sem substituir, a comparação semântica. Conceitos clássicos continuam conhecidos; a autoria está nos casos e nas relações organizadas como desafios.

Não houve cópia ou reformulação superficial de prova anterior, material de certificação, exemplos de produtos do PostgreSQL ou payload/figura da OWASP. Não se declara comparação exaustiva com acervos externos; originalidade independente continua pendente.

### Unicidade e limite da conferência

Gabaritos resolvidos pelas premissas, com rejeição explícita dos quatro distratores. Não se adicionam recursos, mudanças de regra ou permissões não descritos para salvar uma proposta. Q05 distingue falta de restrição de regra adicional; Q09 exige observações de cada critério; Q10 exige compatibilidade sem tolerância de campo extra presumida.

O puzzle precisa respeitar os quatro contratos de entrada/saída e interromper entradas inválidas; gerar páginas corretas por uma rotina diferente não constitui outra ordem destes cartões. A validação de 120 permutações é conferência do modelo, não prova de uma única implementação possível em desenvolvimento de software. Dependências e regras permanecem abertas a revisão docente independente.

### Acessibilidade editorial

| Aspecto | Decisão | Homologação futura pendente |
|---|---|---|
| Pseudocódigo | Q04 em lista de instruções, índice e deslocamento explicados | Leitura linear e navegação por tecnologia assistiva |
| Valores e unidades | Códigos, minutos, escala, horas e milissegundos descritos | Conferir leitura de zeros e desigualdades |
| Objetos/módulos | Papéis e chamadas em palavras, sem exigir UML visual | Diagrama eventual com equivalente textual |
| Q09 | Critérios numerados e relatos por alternativa; marcação tratada como dado | Não executar marcação dos exemplos ao renderizar |
| Puzzle | Entrada, formatos, espaços e páginas explicados; versão textual completa | Anunciar espaços/posição e permitir botões/teclado |
| Tela pequena | Contexto, comando, opções e feedbacks separados; metadados na curadoria | Pilotar Q04/Q09/Q10 e puzzle com zoom/reflow |
| Cor/gesto/velocidade | Sem informação só por cor, arraste obrigatório ou cronômetro | Testes efetivos de toque, foco e leitor de tela |
| Linguagem | Cenários fictícios, sem estereótipos ou culpa individual | Revisão com docentes e estudantes |

Nenhum controle ou tela deste lote foi implementado ou testado no navegador. A conferência é editorial; leitor de tela, teclado, toque, celular e ampliação dependem de apresentação futura autorizada.

### Checklist consolidado

- [x] Onze IDs planejados, únicos e exclusivos do lote TADS.
- [x] F08/Portaria 169 como principal dos onze itens, com incisos próprios do curso.
- [x] Dez questões com cinquenta alternativas, cinquenta feedbacks e uma resposta indicada por item.
- [x] Cotas 3/5/2 específicas e 7/9/4 nas vinte elegíveis; puzzles fora da contagem.
- [x] Puzzle introductory conforme o plano, cinco blocos e quatro dependências.
- [x] Gabaritos B/D/A/E/C/E/A/C/C/B sem ciclo ou uniformidade imposta.
- [x] Unidades, fronteiras, critérios e rejeição dos distratores conferidos.
- [x] Três dicas sem solução completa; texto equivalente e retorno descritos.
- [x] Textos ao jogador sem referência à avaliação externa; fonte interna separada.
- [x] Todos os validationStatus continuam provisional-pending-teacher-review.
- [ ] Resolução/ordem independente, PPC, calibração e cotejo externo.
- [ ] Homologação de acessibilidade e apresentação futura.

## 16. Pendências e formulários de revisão docente

Onze registros de TADS, um por ID/versão; nenhum parecer antecipado. Pendências: adequação ao PPC/oferta e momento formativo; originais/retificações; leitura das fontes técnicas; dificuldade por raciocínio; cotejo externo; clareza/acessibilidade com estudantes; consolidação humana e identidade provisória.

Preencher docente, data, PPC/versão, fontes/localizadores, resolução sem gabarito, alternativas defensáveis, evidências de originalidade/acessibilidade e parecer fundamentado. Recomendações documentais: manter em revisão, requer revisão, recomendar aprovação ou rejeitar. Não são enums novos nem aprovação automática da coleção.

### E26-Q-TADS-01 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-I, os incisos de TADS e o objetivo do slot.
- [ ] Conferir exemplos com seis, cinco e sete dígitos, letras e zeros iniciais. Avaliar observabilidade do requisito sem impor uma implementação específica.
- [ ] Resolver sem gabarito; confirmar B como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-02 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Repetir mentalmente com Breve e Completo e conferir origem dos campos. Validar recorte introdutório de orientação a objetos sem exigir sintaxe ou diagrama visual.
- [ ] Resolver sem gabarito; confirmar D como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-03 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-I, os incisos de TADS e o objetivo do slot.
- [ ] Conferir a ordem por nome e por prazo e a distinção verificação/validação. Evitar ensinar que testes aprovados não têm valor ou que validação dispensa verificação.
- [ ] Resolver sem gabarito; confirmar A como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-04 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Testar lista vazia, um descartável, descartáveis adjacentes, todos descartáveis, nenhum descartável e repetições válidas. Conferir que só E atende a todos os casos.
- [ ] Resolver sem gabarito; confirmar E como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-05 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Conferir nulos, inicio/fim iguais, valores negativos e fronteira 1440. Não rejeitar intervalo válido por uma restrição adicional que não foi solicitada.
- [ ] Resolver sem gabarito; confirmar C como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-06 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Conferir correção simultânea da prévia e preservação 1:1, vínculo de versões e retorno possível. Distinguir alteração na origem de edição manual de artefato gerado.
- [ ] Resolver sem gabarito; confirmar E como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-07 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-I e TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Conferir manutenção única, nova entrada sem duplicação e teste sem os três recursos excluídos. Aceitar implementação equivalente que preserve a separação das propostas.
- [ ] Resolver sem gabarito; confirmar A como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-08 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-I, os incisos de TADS e o objetivo do slot.
- [ ] Conferir esforço de cada plano e quais requisitos ficam pendentes. Não presumir legislação, risco não informado ou trabalho de equipe adicional.
- [ ] Resolver sem gabarito; confirmar C como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-09 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-I e TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Conferir os quatro limites, os resultados observados e a independência dos três critérios. Distinguir validação de entrada de apresentação segura e não promover o ensaio a certificação de segurança.
- [ ] Resolver sem gabarito; confirmar C como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TADS-10 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-II, os incisos de TADS e o objetivo do slot.
- [ ] Testar limites de conversão, cabeçalho exato e consumidores V1/V2 durante a convivência. Conferir regressão sem apagar o formato anterior e sem atribuir compatibilidade apenas ao número da versão.
- [ ] Resolver sem gabarito; confirmar B como única resposta e conferir feedbacks A–E.
- [ ] Registrar acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-P-TADS-01 — versão editorial documental 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / ordem alternativa | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TADS | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F08, TADS-I/TADS-II, área e dificuldade introductory.
- [ ] Ordenar sem solução visível, tentar outra permutação e justificar cada pré-condição pelos dados produzidos.
- [ ] Conferir tamanhos 4/5/4/6, páginas Lira/Nimbo e Orla/Prisma e preservação da ordem.
- [ ] Testar vazio após normalização, legenda longa, espaços internos e repetições válidas.
- [ ] Confirmar interrupção integral, sem descarte silencioso ou prévia parcial.
- [ ] Revisar as três dicas isoladas/cumulativamente e a distinção entre aprender dependências e memorizar nomes.
- [ ] Validar botões, teclado, leitura linear e tela pequena em integração futura.
- [ ] Conferir 100 XP único, base-n9/door apenas propostos e nenhuma implementação ou missão mista.
- **Síntese / ordem alternativa / ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

## 17. Verificações e preservação do escopo

Resultados desta execução:

- Auditoria documental por script efêmero: **aprovada**. Dez questões e um puzzle correspondem aos slots; 44 IDs únicos nos cinco lotes pertencem aos 66 IDs únicos do plano. Os itens novos não aparecem no catálogo executável.
- Cinquenta alternativas e cinquenta feedbacks; uma resposta indicada por questão, mapa B/D/A/E/C/E/A/C/C/B. Onze formulários permanecem sem parecer e todos os status continuam provisórios.
- Fonte principal e documentId dos onze itens: **F08/Portaria Inep 169/2026**; courses somente TADS, sem matriz normativa de outro curso nas fichas.
- Cotas conferidas: 3/5/2 específicas e 7/9/4 nas vinte elegíveis; puzzle introductory, separado das questões, como o plano exige.
- Projeção extraída do Markdown e validada **somente em memória** com Ajv/schemas atuais: dez Question e um SequencePuzzle aceitos; fonte estrita, coleção existente, cinco blocos/permutação, três dicas e base-n9/door conferidos. Nenhum arquivo JSON foi gerado.
- Modelos de Q01/Q02/Q03: identidade de seis dígitos e zeros, delegação Breve/Completo e divergência entre ordem especificada e prazo conferidas.
- Q04: **364 listas** de até cinco elementos examinadas; somente E corresponde à remoção de todos os descartáveis em todas, mantendo ordem e repetições válidas. Fronteiras vazia, adjacentes e todos/nenhum descartável incluídas.
- Q05: **64 pares** com nulos, negativos, igualdade e fronteiras conferidos no modelo de lógica de CHECK. Somente a combinação com NOT NULL representa integralmente a regra; nenhuma instalação SQL ou alteração de banco foi realizada.
- Q06/Q07/Q08: critérios de escopo/rastreabilidade, independência dos módulos e liberação em quatro horas conferidos contra as cinco propostas de cada item.
- Q09: limites 0/1/80/81 e resultados dos cinco relatórios conferidos. Modelo isolado de DOM em memória preservou uma marcação benigna como texto, sem elementos filhos; não se testou a interface do jogo nem sistema externo.
- Q10: **3.501 durações** de 0 a 3500 ms examinadas nas projeções V1/V2; limites 0/999/1000/2500, cabeçalho, inteiros e unidade conferidos. Aceitar um número não torna correta a unidade trocada.
- Puzzle: **120 permutações**, uma única válida tanto pelas quatro dependências quanto pelo fluxo de artefatos. Tamanhos 4/5/4/6, duas páginas e ordem preservados; vazio após normalizar e 13 caracteres interrompem sem páginas/prévia. Limites 1/12, espaços externos/internos e legendas repetidas válidas conferidos.
- Gabaritos e rejeição dos distratores revisados editorialmente. As verificações dos modelos fechados não são parecer docente nem prova de funcionamento de uma implementação real.
- Triagem textual e cotejo estrutural com comuns, CC, SI e exemplos atuais: nenhuma duplicação interna identificada. Textos ao jogador, títulos, explicações, feedbacks, blocos e dicas sem o nome da avaliação externa; originalidade externa permanece pendente.
- Acessibilidade editorial conferida por textos equivalentes e controles previstos; navegador, celular, toque e tecnologia assistiva da futura apresentação não foram homologados.
- **npm.cmd run validate:content: 113 testes aprovados em quatro arquivos**, cobrindo conteúdo, puzzles, contratos editoriais e missões existentes.
- SHA-256 dos seis documentos de referência preservados desde a inspeção inicial. Git sem alterações em arquivos previamente versionados; somente o novo Markdown desta entrega.

Esses resultados não substituem PPC, resolução independente, calibração, cotejo externo, fonte certificada ou teste da experiência futura.

Somente docs/autoria/lote-especifico-tads.md integra esta entrega. Plano, padrão e todos os lotes anteriores permanecem intactos. Não se alteram código, schemas, catálogos, testes permanentes, interface, mapa, mecânicas, recompensas existentes ou progresso. Não se gera arquivo JSON. O inventário e as pendências ficam neste documento; backlog sem alteração. Nenhum lote posterior foi iniciado. Não houve publicação ou envio ao GitHub.
