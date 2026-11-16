# Mapeamento das questões por área, curso, disciplina e conteúdo

Data do levantamento: 15 de novembro de 2026. Revisão de planejamento de SI: 16 de novembro de 2026.

Este documento relaciona as 60 questões provisórias atuais do N9 — Jornada Digital às áreas normativas, aos cursos que possuem sustentação explícita para o recorte, às disciplinas sugeridas e aos conteúdos cobrados. Ele não altera o catálogo executável.

Os itens executáveis ainda conservam `provisional-pending-teacher-review`, pois a migração de governança não pertence a esta entrega documental. O fluxo futuro assistido por IA está especificado em [plano-revisao-si.md](autoria/plano-revisao-si.md); nenhum item foi promovido. “Disciplina sugerida” não equivale a componente curricular oficial da UNINOVE: o vínculo definitivo depende de confrontação futura com o PPC e a matriz curricular vigente.

## Regra de elegibilidade

1. O prefixo do ID indica o lote de autoria, não exclusividade automática.
2. Uma questão pode ser elegível para vários cursos quando suas respectivas Portarias contêm explicitamente o mesmo conteúdo e o recorte cognitivo é compatível.
3. Semelhança de nome não basta. Profundidade, operação cognitiva e contexto também devem ser compatíveis.
4. Cada curso incluído precisa possuir fonte normativa e localizador próprios em `sources` e `traceability` antes da conversão executável.
5. Sistemas digitais, compiladores, teoria da computação, processamento de imagem, roteamento avançado, cabeamento e virtualização detalhada permanecem restritos quando só aparecem expressamente na matriz de origem.

Referências normativas: Portaria 154/2026 para Formação Geral; 157/2026 para CC; 168/2026 para SI; 169/2026 para TADS; 171/2026 para TGTI; e 172/2026 para TRC.

## Impacto estimado no banco elegível

| Curso | Banco atual | Banco proposto | Introdutórias | Intermediárias | Avançadas |
|---|---:|---:|---:|---:|---:|
| CC | 20 | 39 | 14 | 18 | 7 |
| SI | 20 | 40 | 15 | 19 | 6 |
| TADS | 20 | 31 | 12 | 14 | 5 |
| TGTI | 20 | 40 | 15 | 18 | 7 |
| TRC | 20 | 23 | 8 | 10 | 5 |

A distribuição 7/9/4 continua válida para o núcleo autoral histórico de vinte questões de cada curso, mas não descreve o banco ampliado. Para SI, o novo planejamento propõe 9/11/5 em cada jornada de 25; a mudança ainda não foi implementada. O banco proposto de 40 para SI reúne 20 elegíveis atuais e 20 compartilhamentos ainda não validados, concentra itens em engenharia/projetos e não equivale ao núcleo balanceado de 60 descrito no plano de revisão.

## Questões comuns

| Questão | Área normativa | Cursos elegíveis | Disciplina sugerida | Conteúdo principal |
|---|---|---|---|---|
| E26-Q-COM-01 — O alcance do novo horário | COMUM-FG04 — Educação, desenvolvimento e saúde | CC, SI, TADS, TGTI, TRC | Formação Geral; leitura e análise de dados | Indicadores de acesso à educação e bem-estar; distinção entre descrição e causalidade |
| E26-Q-COM-02 — A lista de apoio | COMUM-FG01 — Ética, cidadania e trabalho | CC, SI, TADS, TGTI, TRC | Ética, cidadania e legislação | Direitos, finalidade e uso responsável de informações pessoais |
| E26-Q-COM-03 — Um convite que não chega igual | COMUM-FG05 — Cultura e comunicação responsável | CC, SI, TADS, TGTI, TRC | Comunicação e sociedade | Comunicação digital, diversidade cultural e adequação da linguagem |
| E26-Q-COM-04 — Reabrir com participação | COMUM-FG02 — Equidade, acessibilidade e inclusão | CC, SI, TADS, TGTI, TRC | Acessibilidade e inclusão | Barreiras de participação e atendimento acessível |
| E26-Q-COM-05 — Onde testar a sombra | COMUM-FG03 — Clima, territórios e qualidade de vida | CC, SI, TADS, TGTI, TRC | Sustentabilidade e responsabilidade socioambiental | Intervenção socioambiental, território, evidência e limites de piloto |
| E26-Q-COM-06 — Uma descoberta que precisa circular | COMUM-FG06 — Ciência, tecnologia e relações globais | CC, SI, TADS, TGTI, TRC | Ciência, tecnologia e sociedade | Inovação, cooperação científica e circulação recíproca de saberes |
| E26-Q-COM-07 — A mensagem chegou, a operação não terminou | COMUM-TEC08 — Redes: fundamentos de comunicação | CC, SI, TADS, TGTI, TRC | Redes de computadores | Conectividade, requisição, resposta e delimitação de falha de serviço |
| E26-Q-COM-08 — Há memória livre, mas a tarefa espera | COMUM-TEC07 — Sistemas operacionais: fundamentos | CC, SI, TADS, TGTI, TRC | Sistemas operacionais | Recursos, dependências, espera e gerenciamento de serviço |
| E26-Q-COM-09 — Drenar sem transferir o problema | COMUM-FG03 — Clima, territórios e qualidade de vida | CC, SI, TADS, TGTI, TRC | Sustentabilidade e responsabilidade socioambiental | Sustentabilidade, equidade territorial e restrições simultâneas |
| E26-Q-COM-10 — Troca de equipe sem liberar o controle | COMUM-TEC09 — Proteção da informação: fundamentos | CC, SI, TADS, TGTI, TRC | Segurança da informação | Proteção de ativos, controle de acesso e continuidade básica |

## Questões do lote de Ciência da Computação

| Questão | Área normativa | Cursos elegíveis propostos | Disciplina sugerida | Conteúdo principal |
|---|---|---|---|---|
| E26-Q-CC-01 — O acumulador do farol | COMUM-TEC01 — Algoritmos introdutórios | CC, SI, TADS, TGTI | Algoritmos e Lógica de Programação | Rastreamento, atribuição, acumulador e condição explícita |
| E26-Q-CC-02 — Três entradas, uma habilitação | CC-03 — Sistemas digitais e recursos computacionais | CC | Sistemas Digitais | Sinais binários, operações OU/E/NÃO e circuito combinacional |
| E26-Q-CC-03 — Uma expressão bem formada pode falhar | CC-01 — Teoria da computação e compiladores | CC | Compiladores e Linguagens Formais | Etapas de tradução, análise e diagnóstico de programa |
| E26-Q-CC-04 — A linhagem dos artefatos | CC-02 — Modelagem matemática, grafos e probabilidade | CC | Matemática Discreta e Teoria dos Grafos | Grafo dirigido, dependências, alcance e independência |
| E26-Q-CC-05 — A ordem também ocupa a cache | CC-03 — Sistemas digitais e recursos computacionais | CC | Organização e Arquitetura de Computadores | Cache, localidade temporal e política de substituição |
| E26-Q-CC-06 — Aprender padrões ou aplicar a regra? | CC-04 — Inteligência artificial, gráficos e imagens | CC | Inteligência Artificial | Sistemas por regras, aprendizagem e garantia de decisão |
| E26-Q-CC-07 — Um ponto isolado não é uma faixa | CC-04 — Inteligência artificial, gráficos e imagens | CC | Processamento de Imagens | Transformação local, ruído e regiões uniformes |
| E26-Q-CC-08 — Duas réplicas, uma interrupção | COMUM-TEC05 / CC-02 — Probabilidade e estatística | CC, SI, TADS | Probabilidade e Estatística | União, interseção, independência e indisponibilidade |
| E26-Q-CC-09 — Reconhecer sem impor um teto | CC-01 — Teoria da computação e compiladores | CC | Teoria da Computação | Linguagens não regulares, reconhecimento e limites de modelos |
| E26-Q-CC-10 — Contar eventos sem perder atualizações | CC-03 — Sistemas digitais e recursos computacionais | CC | Sistemas Concorrentes | Concorrência, compartilhamento, correção e custo de atualização |

## Questões do lote de Sistemas de Informação

| Questão | Área normativa | Cursos elegíveis propostos | Disciplina sugerida | Conteúdo principal |
|---|---|---|---|---|
| E26-Q-SI-01 — O componente que acompanha a devolução | SI-01 — Arquitetura corporativa, informação e governança | SI, TGTI | Arquitetura Corporativa e Governança de TI | Arquitetura de negócio, processo, informação e objetivo organizacional |
| E26-Q-SI-02 — O recorte correto dos pedidos | COMUM-TEC10 — Bancos de dados | CC, SI, TADS, TGTI | Banco de Dados | Consulta, seleção conjunta, agregação e organização da informação |
| E26-Q-SI-03 — O trabalho espera pelo parecer | SI-02 — Sistemas de informação e processos de negócio | SI, TGTI | Gestão de Processos de Negócio | Pessoas, processo, informação, espera e gargalo |
| E26-Q-SI-04 — Enviado ainda não é recebido | SI-02 — Sistemas de informação e processos de negócio | SI, TGTI | Gestão de Processos de Negócio | Redesenho de processo, evento, responsabilidade e confirmação |
| E26-Q-SI-05 — A mesma obra pode voltar | SI-04 / COMUM-TEC10 — Modelagem e bancos de dados | CC, SI, TADS, TGTI | Modelagem de Dados | Associação, cardinalidade, referência e histórico |
| E26-Q-SI-06 — Um nome, dois compromissos diferentes | SI-01 — Arquitetura corporativa, informação e governança | SI, TGTI | Governança da Informação | Responsabilidade, significado e informação compartilhada |
| E26-Q-SI-07 — Quando a barra parece triplicar | SI-03 — Dados para decisão e pesquisa operacional | SI | Visualização e Ciência de Dados | Escala, origem truncada, proporção e interpretação de gráfico |
| E26-Q-SI-08 — O ensaio precisa acompanhar a vistoria | SI-04 / COMUM-TEC11 — Engenharia e qualidade de software | CC, SI, TADS, TGTI | Qualidade e Testes de Software | Evidência de teste, aceitação e necessidade de trabalho |
| E26-Q-SI-09 — Distribuir capacidade entre dois trabalhos | SI-03 — Dados para decisão e pesquisa operacional | SI | Pesquisa Operacional | Alocação inteira, capacidade, demanda, viabilidade e maximização |
| E26-Q-SI-10 — Escalar sem informar uma versão antiga | SI-04 — Concepção e projetos de sistemas de informação | CC, SI, TADS, TGTI | Arquitetura de Sistemas e Engenharia de Software | Desempenho, escalabilidade, consistência e acesso à informação |

## Questões do lote de Análise e Desenvolvimento de Sistemas

| Questão | Área normativa | Cursos elegíveis propostos | Disciplina sugerida | Conteúdo principal |
|---|---|---|---|---|
| E26-Q-TADS-01 — Os zeros também identificam | TADS-01 / COMUM-TEC11 — Requisitos e engenharia de software | CC, SI, TADS, TGTI | Engenharia de Requisitos | Regra de negócio, identificação, comportamento observável e requisito verificável |
| E26-Q-TADS-02 — Quem produz o texto do painel | COMUM-TEC02 — Fundamentos de programação | CC, SI, TADS | Programação Orientada a Objetos | Objetos, colaboração, delegação e comportamento |
| E26-Q-TADS-03 — Os testes passaram com a referência errada | TADS-02 / COMUM-TEC11 — Qualidade de software | CC, SI, TADS, TGTI | Verificação e Validação de Software | Especificação testada, necessidade do usuário e evidências distintas |
| E26-Q-TADS-04 — A remoção desloca o próximo item | COMUM-TEC02 — Fundamentos de programação | CC, SI, TADS | Algoritmos e Programação | Mutação de lista, cursor, ordem e término |
| E26-Q-TADS-05 — O intervalo precisa existir e fazer sentido | COMUM-TEC10 — Bancos de dados | CC, SI, TADS, TGTI | Banco de Dados | Integridade, obrigatoriedade e relação entre valores |
| E26-Q-TADS-06 — A prévia não deve mudar a medida final | TADS-03 / COMUM-TEC11 — Configuração e manutenção | CC, SI, TADS, TGTI | Gerência de Configuração e Manutenção | Escopo, versão, rastreabilidade, reversão e comportamento |
| E26-Q-TADS-07 — A regra não pertence à tela | TADS-01 / COMUM-TEC11 — Arquitetura de software | CC, SI, TADS, TGTI | Arquitetura e Projeto de Software | Modularização, reutilização, regra de negócio e testabilidade |
| E26-Q-TADS-08 — Quatro horas antes do piloto | TADS-04 — Projetos e responsabilidade | CC, SI, TADS, TGTI | Gerência de Projetos de Software | Risco, capacidade, priorização e critério de liberação |
| E26-Q-TADS-09 — Três critérios, uma liberação | TADS-02 / COMUM-TEC11 — Qualidade de software | CC, SI, TADS, TGTI | Qualidade, Testes e Segurança de Software | Limites de entrada, apresentação segura, falha e aceitação |
| E26-Q-TADS-10 — Mais precisão sem mudar o significado antigo | TADS-03 / COMUM-TEC11 — Evolução de software | CC, SI, TADS, TGTI | Manutenção e Evolução de Software | Contrato, unidade, formato, compatibilidade e regressão |

## Questões do lote de Gestão da Tecnologia da Informação

| Questão | Área normativa | Cursos elegíveis propostos | Disciplina sugerida | Conteúdo principal |
|---|---|---|---|---|
| E26-Q-TGTI-01 — Ferramentas a serviço da estratégia | TGTI-01 — Estratégia, processos e governança de TI | SI, TGTI | Planejamento Estratégico de TI | Alinhamento de iniciativa, objetivo organizacional e capacidade essencial |
| E26-Q-TGTI-02 — O intervalo que ficou indisponível | TGTI-02 — Serviços, continuidade, riscos e indicadores | TGTI, TRC | Gestão de Serviços e Desempenho | Disponibilidade por tempo, intervalos sobrepostos e janela de medição |
| E26-Q-TGTI-03 — Quem executa e quem confere | TGTI-03 — Projetos, pessoas e recursos | CC, SI, TADS, TGTI | Gestão de Projetos e Pessoas | Habilitação, execução, conferência e segregação de responsabilidades |
| E26-Q-TGTI-04 — A próxima fila de atendimento | TGTI-02 — Serviços, continuidade, riscos e indicadores | TGTI | Gestão de Serviços de TI | Impacto, urgência, alternativa e priorização de chamado |
| E26-Q-TGTI-05 — Uma exceção precisa de decisão | TGTI-01 — Estratégia, processos e governança de TI | SI, TGTI | Governança de TI | Análise técnica, autoridade, exceção e conformidade |
| E26-Q-TGTI-06 — Comparar o custo de todo o percurso | TGTI-04 — Informação gerencial e inteligência de negócio | SI, TGTI | Inteligência de Negócio e Sistemas Gerenciais | Informação comparável, custo, horizonte e decisão |
| E26-Q-TGTI-07 — Um laboratório, duas preparações | TGTI-03 — Projetos, pessoas e recursos | CC, SI, TADS, TGTI | Gerência de Projetos | Precedências, recurso exclusivo, capacidade e prazo |
| E26-Q-TGTI-08 — Reduzir a recorrência, conferir o efeito | TGTI-02 — Serviços, continuidade, riscos e indicadores | TGTI, TRC | Melhoria Contínua de Serviços | Causa, impacto, capacidade, ação e verificação posterior |
| E26-Q-TGTI-09 — Uma iniciativa depende da outra | TGTI-01 — Estratégia, processos e governança de TI | TGTI | Gestão de Portfólio de TI | Dependências, estratégia, conformidade, orçamento e portfólio |
| E26-Q-TGTI-10 — Recuperar sem abandonar a proteção | TGTI-02 — Serviços, continuidade, riscos e indicadores | TGTI, TRC | Continuidade, Riscos e Segurança | Recuperação, perda, proteção de ativos, capacidade e risco residual |

## Questões do lote de Redes de Computadores

| Questão | Área normativa | Cursos elegíveis propostos | Disciplina sugerida | Conteúdo principal |
|---|---|---|---|---|
| E26-Q-TRC-01 — O nome antes da conexão | COMUM-TEC08 / TRC-01 — Redes e TCP/IP | CC, SI, TADS, TGTI, TRC | Redes de Computadores | DNS, consulta, resposta, nome e endereço na pilha TCP/IP |
| E26-Q-TRC-02 — A ligação entre os dois prédios | TRC-02 — Redes físicas, sem fio e cabeamento | TRC | Meios de Transmissão e Cabeamento | Distância, ambiente, meio físico e restrições de implantação |
| E26-Q-TRC-03 — O serviço não voltou com o sistema | COMUM-TEC07 / TRC-03 — Sistemas operacionais e serviços | CC, SI, TADS, TGTI, TRC | Sistemas Operacionais e Serviços de Rede | Inicialização, serviço, conectividade e permissões |
| E26-Q-TRC-04 — Uma rota mais específica desvia o destino | TRC-01 — Modelos, TCP/IP e roteamento | TRC | Roteamento IP | Prefixo mais longo, próximo salto e tabela de rotas |
| E26-Q-TRC-05 — Cobertura em dois ambientes separados | TRC-02 — Redes físicas, sem fio e cabeamento | TRC | Redes sem Fio | Cobertura, interferência, retorno cabeado e implantação |
| E26-Q-TRC-06 — Migrar a máquina sem perder sua rede | TRC-03 — Administração, serviços e virtualização | TRC | Virtualização e Serviços de Rede | Migração, replicação, recursos, identidade e continuidade |
| E26-Q-TRC-07 — A resposta pode voltar, outra conexão não | COMUM-TEC09 — Proteção da informação | CC, SI, TADS, TGTI, TRC | Segurança de Redes e da Informação | Filtragem com estado, fluxo autorizado e bloqueio de iniciação |
| E26-Q-TRC-08 — O contador mudou de referência | TRC-04 — Projetos, automação e gestão de redes | TRC | Automação e Monitoramento de Redes | Contadores, referência temporal, taxa, alerta e limites de atuação |
| E26-Q-TRC-09 — Reutilizar sem criar um gargalo | TRC-04 — Projetos, automação e gestão de redes | TRC | Projeto de Redes | Capacidade, isolamento, interoperabilidade e critérios ambientais |
| E26-Q-TRC-10 — O enlace reserva também tem limite | TRC-03 — Administração, serviços e virtualização | TRC | Alta Disponibilidade e Qualidade de Serviço | Failover, capacidade reduzida, admissão de tráfego e QoS |

## Alterações de elegibilidade propostas

Além das dez questões comuns, 31 questões possuem proposta de compartilhamento além do curso autoral. Os vínculos com maior evidência direta são:

- algoritmos: CC, SI, TADS e TGTI;
- programação e orientação a objetos: CC, SI e TADS;
- probabilidade e estatística: CC, SI e TADS;
- bancos de dados e engenharia de software: CC, SI, TADS e TGTI;
- processos e governança: SI e TGTI;
- gestão de projetos: CC, SI, TADS e TGTI;
- disponibilidade e continuidade: TGTI e TRC;
- fundamentos de redes, sistemas operacionais e segurança: os cinco cursos.

Os vínculos ampliados ainda precisam de revisão técnica e pedagógica assistida por IA para cada curso. Os localizadores não podem ser copiados da Portaria do lote original: cada curso deve receber seu próprio artigo, inciso, competência e fonte. Para SI, os vinte vínculos são candidatos brutos; somente quatorze cabem no primeiro núcleo balanceado por macroárea e seis ficam como reserva até a revisão.

## Preparação para novas questões

Novos itens devem registrar separadamente:

| Campo editorial | Regra |
|---|---|
| Curso de autoria | Identifica o lote e a equipe responsável; não limita sozinho a elegibilidade |
| Área normativa por curso | Deve indicar a área equivalente e o localizador próprio de cada Portaria |
| Cursos elegíveis | Lista explícita, nunca inferida apenas pelo prefixo do ID |
| Disciplina sugerida | Rótulo curricular preliminar; confirmar no PPC antes de tratá-lo como oficial |
| Conteúdos | Lista do que efetivamente é exigido no enunciado, não toda a abrangência da área |
| Profundidade | Deve ser compatível com todos os cursos elegíveis |
| Fontes e rastreabilidade | Uma fonte principal e complementares necessárias, sem transportar incisos entre cursos |
| Revisão | A futura governança assistida por IA deve registrar pertinência, dificuldade, resolução independente, testes e limitações por curso; não declarar homologação institucional |

## Pendências antes da migração executável

1. Revisar os 31 compartilhamentos propostos pelo fluxo editorial assistido por IA, sem apresentá-lo como aprovação docente ou institucional.
2. Acrescentar fontes e localizadores normativos por curso no bloco `traceability`.
3. Decidir como a seleção distinguirá questão comum, compartilhada e exclusiva.
4. Redefinir a meta 7/9/4 para bancos maiores que vinte questões.
5. Manter as cotas de cada missão sem favorecer o curso de autoria do ID.
6. Atualizar JSON, schemas apenas se necessário, normalizadores, seletor e testes em uma migração controlada.
7. Revalidar ausência de repetição, capacidade da Arena e compatibilidade do progresso salvo.

## Planejamento específico de SI

O inventário normativo, a capacidade por macroárea, a distinção entre vinte candidatos brutos e quatorze compartilhamentos aproveitáveis no núcleo, os 36 novos slots técnicos e os blueprints das jornadas A/B/C estão em [plano-revisao-si.md](autoria/plano-revisao-si.md). Essa matriz é documental: não altera `courses`, `classification`, JSON ou seleção.
