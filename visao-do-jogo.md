# N9 — Jornada Digital — visão do jogo

Versão 0.4 • Nome provisório atualizado em 13/11/2026 • Plataforma: navegador em computador e celular.

> Uma experiência permanente e lúdica de desenvolvimento de competências em tecnologia, organizada em missões, desafios e descobertas na cidade digital Nexo.

## Identidade e propósito

O nome apresentado ao jogador é **N9 — Jornada Digital**. O subtítulo é **Jornada Digital**.

**N9 é um nome provisório, sujeito à aprovação institucional.** A escolha busca uma associação conceitual com a Universidade Nove de Julho, sem afirmar que o jogo seja um produto oficial. Não foram adotados logotipo, slogan, brasão, imagens de campi ou cores oficiais. A paleta anterior do protótipo permanece sem qualificação institucional.

A experiência é contínua: interpretar situações, experimentar decisões, compreender feedbacks e conectar conhecimentos. A identidade não depende de uma edição de exame, calendário de aplicação ou preparação para avaliação. A seleção de curso contextualiza o percurso, sem decidir elegibilidade acadêmica individual.

O conteúdo pode apoiar atividades de aprendizagem, disciplinas e projetos. Pontuação indica o desempenho na missão realizada; não representa certificação, domínio integral de uma área ou previsão de avaliação externa.

## Decisão pedagógica e coleções internas

Na primeira versão editorial, o conteúdo terá como base competências e referências do ENADE, tratadas **somente como origem pedagógica interna**. A primeira coleção terá o identificador **`enade-2026`**.

Esse identificador e as referências não são a marca do jogo, o nome de uma campanha visível ou um convite à preparação de prova. A interface principal não apresenta ENADE, simulado, prova ou preparação como finalidade do produto. A rastreabilidade normativa continua na documentação interna, sem inventar alinhamento ou aprovação docente.

A demonstração atual mantém seus desafios fictícios, marcados como exemplos, com `FASE-EXEMPLO-01` e `example-1`. Ela não foi transformada em conteúdo oficial nem declarada uma coleção validada. `enade-2026` está registrada nos metadados internos como planejada.

Futuramente, novas coleções poderão derivar de:

- PPCs;
- disciplinas;
- nivelamento;
- projetos;
- certificações.

Essa expansão é direção de produto, não implementação desta mudança de identidade. As fontes e versões devem permanecer rastreáveis e separadas do nome apresentado ao jogador.

## Público e trilhas

As cinco trilhas permanecem preservadas, sem hierarquia entre cursos:

| Sigla | Curso |
| --- | --- |
| CC | Ciência da Computação |
| SI | Sistemas de Informação |
| TADS | Tecnologia em Análise e Desenvolvimento de Sistemas |
| TGTI | Tecnologia em Gestão da Tecnologia da Informação |
| TRC | Tecnologia em Redes de Computadores |

O público inclui estudantes dessas formações em diferentes momentos de aprendizagem. Docentes e coordenadores podem atuar na revisão e facilitação. A interface considera uso de celular, interrupções, diferentes repertórios e necessidades de acessibilidade.

## Experiência e narrativa

Na cidade digital Nexo, serviços e pessoas dependem de conexões entre conhecimentos. O jogador explora situações contextualizadas para compreender problemas, tomar decisões e acompanhar suas consequências.

O ciclo atual permanece: escolher curso → entrar na central → iniciar uma missão de exemplo → analisar cada desafio → escolher uma alternativa → confirmar → receber explicações → avançar → consultar o relatório da missão.

A apresentação mantém linguagem tecnológica, universitária e não infantil. Desafios cognitivos não exigem reflexos, velocidade ou distinção de cores. A introdução é breve, e dados necessários à resolução aparecem no próprio desafio.

## Vocabulário apresentado ao jogador

| Termo anterior | Termo da experiência |
| --- | --- |
| Questão | Desafio |
| Prova | Missão |
| Simulado | Missão especial |
| Nota | Pontuação; XP poderá ser usado apenas quando houver uma regra própria autorizada |
| Resultado da partida | Relatório da missão |
| Revisão de erros | Laboratório de treinamento |

O laboratório de treinamento e missões especiais são nomes reservados para capacidades futuras; não foram implementados nesta refatoração. Termos em referências oficiais, citações históricas ou conceitos de um desafio são preservados quando necessários ao sentido pedagógico.

Nomes técnicos devem ser genéricos, como Mission, Challenge, LearningTrack, ChallengeCollection, QuestionChallenge e PuzzleChallenge, sem ENADE em classes, cenas ou componentes. Nomes neutros existentes, como GameSession, QuestionScene e ResultScene, continuam válidos; seus contratos não foram migrados por uma mudança editorial.

## Funcionalidades preservadas

A missão de demonstração apresenta dez desafios filtrados pelo curso escolhido, cinco alternativas, confirmação única, feedback com gabarito e explicações, pontuação e relatório final. Há nove exemplos compartilhados e um específico por curso no catálogo de 14 exemplos.

As regras permanecem: 100 pontos por acerto inicial, zero por erro, sem descontos ou limite de tempo, total de 0 a 1.000. Não há acúmulo entre partidas ou requisito de pontuação para concluir.

Somente o último relatório concluído é salvo no mesmo navegador e origem. Sair ou recarregar encerra a partida incompleta. Formato, versões, IDs e chave de armazenamento atuais são preservados para compatibilidade.

## Limites e validação

Conteúdo real depende de autoria e revisão docente. A mudança de marca não valida desafios fictícios nem substitui o mapeamento pedagógico.

Mapa de terminais, retomada, laboratório de treinamento, conquistas, campanhas específicas, novas coleções e publicação permanecem para entregas autorizadas. Login, servidor, banco remoto, ranking online, IA em tempo real e APIs pagas não foram acrescentados.

As verificações devem preservar o fluxo dos cinco cursos, teclado, toque, reflow, resposta única, pontuação e relatórios salvos antes da mudança. Emulação de navegador não substitui homologação em aparelhos reais ou leitor de tela.

## Documentos e configuração

A identidade e os textos principais ficam em `src/config/game.ts`. A origem pedagógica e a coleção inicial ficam em `src/config/collections.ts`, sem apresentação na interface.

Esta visão atualiza o posicionamento do projeto. A visão anterior foi preservada integralmente em [docs/fontes/visao-do-jogo.md](docs/fontes/visao-do-jogo.md), assim como as demais fontes e referências. O documento de referências oficiais não foi removido nem reescrito.

Arquitetura atual: [docs/arquitetura.md](docs/arquitetura.md). Acompanhamento: [docs/backlog.md](docs/backlog.md).
