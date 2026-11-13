# Missão ENADE — Documento de visão

**Versão:** 0.2 — planejamento para cinco cursos  
**Arquivo previsto no projeto:** `docs/visao-do-jogo.md`  
**Plataforma:** jogo 2D para navegador, em computadores e celulares  
**Ferramentas pretendidas:** Codex, Phaser 3, TypeScript e Vite

> Uma plataforma de estudo em que estudantes de cinco cursos de Computação recuperam serviços de uma cidade digital, resolvendo problemas, compreendendo suas decisões e revisando erros.

**Natureza deste documento:** proposta de game design e organização pedagógica. Temas, exemplos, pontuação, fases e metas descritos aqui são decisões do projeto, não regras oficiais do ENADE. A plataforma será independente, sem indicação de vínculo ou chancela do Inep.

**Referência inicial de preparação:** ENADE 2026. Elegibilidade dos estudantes, participação de cada curso na edição, diretrizes específicas, competências oficiais, formato e calendário: **pendente de verificação oficial**. O jogo não determinará a situação de elegibilidade de ninguém.

## 1. Nome provisório e alternativas

**Missão ENADE** é o nome de trabalho. Associa preparação e resolução de problemas a uma jornada de estudo, com identidade adequada ao ensino superior.

| Nome alternativo | Direção de identidade |
| --- | --- |
| Nexo: Missões de Computação | Integração entre cursos, sistemas e sociedade |
| Campus em Código | Contexto universitário e desafios profissionais |
| Operação Conhecimento | Investigação, diagnóstico e recuperação de serviços |
| Conecta: Jornada de Computação | Aprendizagem progressiva e conexão entre áreas |

A escolha definitiva deverá considerar clareza para os estudantes e possibilidade de uso do nome. Disponibilidade e eventual registro de marca ainda não foram pesquisados.

## 2. Problema educacional

Estudantes podem conhecer conceitos isolados e ainda apresentar dificuldade para interpretar um caso, selecionar informações relevantes e aplicar conhecimentos de disciplinas diferentes. Exercícios com gabarito sem explicação também dificultam a identificação do raciocínio que levou ao erro.

O jogo propõe sessões de prática com problemas contextualizados, feedback explicativo e revisão orientada por competência. A hipótese pedagógica é que essa combinação favoreça participação, identificação de lacunas e aplicação dos conceitos. Essa hipótese será avaliada no piloto.

O recurso será complementar às disciplinas e ao estudo orientado por professores. Pontuação e conquistas não representarão previsão de nota no ENADE, certificação profissional ou comprovação de domínio de toda uma área.

## 3. Público-alvo

O público principal são estudantes elegíveis para o ENADE nos seguintes cursos:

| Sigla | Curso | Modalidade considerada no planejamento |
| --- | --- | --- |
| CC | Ciência da Computação | Bacharelado |
| SI | Sistemas de Informação | Bacharelado |
| TADS | Tecnologia em Análise e Desenvolvimento de Sistemas | Curso superior de tecnologia |
| TGTI | Tecnologia em Gestão da Tecnologia da Informação | Curso superior de tecnologia |
| TRC | Tecnologia em Redes de Computadores | Curso superior de tecnologia |

Critérios oficiais de elegibilidade e enquadramento de cada curso na edição pretendida: **pendente de verificação oficial**. O estudante deverá confirmar sua situação com a instituição e os canais oficiais; a seleção de curso no jogo apenas personalizará o percurso de estudo.

Docentes e coordenadores são público secundário, como revisores e facilitadores. O projeto considera diferenças de repertório, necessidades de acessibilidade, uso de celulares e sessões interrompidas.

**Diretriz de produto:** uma única plataforma, um núcleo comum e cinco trilhas específicas, sem hierarquia de prioridade entre os cursos. O primeiro protótipo implementará apenas uma fase comum; o planejamento das cinco trilhas já integra esta visão.

## 4. Objetivos de aprendizagem

Ao realizar missões, o estudante deverá praticar:

1. Interpretar enunciados, tabelas, diagramas e pseudocódigos, identificando informações relevantes.
2. Aplicar conceitos de Computação a problemas contextualizados.
3. Comparar soluções considerando requisitos, restrições, riscos e consequências.
4. Relacionar decisões técnicas a questões éticas, sociais, de segurança e acessibilidade.
5. Reconhecer o equívoco associado à resposta escolhida e compreender sua correção.
6. Aplicar um conceito revisado em um problema diferente, quando houver itens equivalentes disponíveis.

Cada questão terá um objetivo observável e uma competência principal definida pelo projeto. Correspondência desses objetivos às competências oficiais por curso: **pendente de verificação oficial**.

No protótipo, serão observadas interpretação, aplicação e revisão. Argumentação escrita, desempenho profissional e retenção de longo prazo exigirão instrumentos adicionais.

## 5. História e ambientação

Na cidade digital **Nexo**, serviços de educação, comunicação e gestão dependem de sistemas interligados. Uma falha comprometeu informações e processos. O jogador integra uma equipe universitária chamada para investigar incidentes e recuperar os serviços.

Cada fase corresponde a uma operação: restaurar dados, diagnosticar uma rede, melhorar um serviço ou escolher uma solução tecnológica. O núcleo comum ocorre na Central Nexo; as cinco trilhas exploram setores ligados a diferentes tipos de problema. Os cursos cooperam na ficção, sem competição por superioridade entre formações.

### Direção visual e narrativa

- Linguagem visual **universitária, tecnológica e não infantil**.
- Cenários 2D de campus, laboratórios, centros de operação e serviços digitais.
- Interface com tipografia legível, diagramas claros, ícones consistentes e cores com contraste adequado.
- Personagens adultos e diversos, se utilizados; sem caricaturas infantilizadas.
- Animações curtas, funcionais e reduzíveis; efeitos não devem atrapalhar a leitura.
- Linguagem respeitosa, direta e profissional, sem ridicularização dos erros.
- Introdução breve e opcional; a história não deve esconder dados necessários à resolução.

## 6. Mecânica principal

**Ciclo principal:** selecionar um terminal → analisar o caso → escolher uma resposta → confirmar → receber explicação → acompanhar a recuperação do setor → continuar ou revisar.

O jogador navega por um mapa 2D usando clique, toque ou teclado. No protótipo, a seleção será direta: não haverá necessidade de controlar saltos, reflexos ou deslocamento preciso de personagem.

O desafio será cognitivo. O estudante poderá interpretar um resultado, diagnosticar uma situação ou comparar decisões. No MVP, essas ações serão representadas por questões contextualizadas de múltipla escolha. Interações adicionais, como ordenar etapas e manipular diagramas, ficam para versões futuras.

Após confirmar uma alternativa, o estudante verá o resultado textual, o raciocínio correto, a explicação do distrator escolhido e uma síntese do conceito. Não haverá tempo limite, perda de vidas ou impedimento de continuar por ter errado.

## 7. Estrutura das fases

Cada fase terá apresentação do problema, objetivos de estudo, sequência de desafios, explicações, resultado e encaminhamento para revisão.

### Fase do protótipo: “Restaurar a Central Nexo”

Uma central universitária apresenta falhas em seus serviços. O jogador precisa analisar dez decisões para recuperar sua operação. A duração estimada para teste é de 20 a 30 minutos, com possibilidade de pausar e retomar.

| Item | Tema proposto | Desafio |
| --- | --- | --- |
| 1 | Interpretação de dados | Identificar uma conclusão sustentada por uma tabela |
| 2 | Ética e privacidade | Comparar condutas de tratamento de informações pessoais |
| 3 | Algoritmos | Interpretar um pseudocódigo curto |
| 4 | Programação | Identificar uma falha em condição ou repetição |
| 5 | Organização de dados | Selecionar uma estrutura para organizar atendimento |
| 6 | Banco de dados | Interpretar uma consulta simples |
| 7 | Requisitos e qualidade | Relacionar uma necessidade a um teste verificável |
| 8 | Redes | Investigar um sintoma básico de falha de comunicação |
| 9 | Segurança | Escolher uma medida coerente com um incidente |
| 10 | Acessibilidade | Comparar soluções de acesso a um serviço digital |

Essa distribuição é uma proposta de amostra introdutória, sujeita à revisão de professores dos cinco cursos. Não representa pesos, proporções ou cobertura do ENADE. Alinhamento desses temas às diretrizes oficiais de cada área: **pendente de verificação oficial**.

As dez questões serão autorais, com cinco alternativas e uma resposta correta, por decisão de design do MVP. O jogo não apresentará esse formato como reprodução da prova oficial. Formato vigente do exame: **pendente de verificação oficial**.

Cada item deverá conter identificador estável, versão, objetivo, competência do projeto, tema, cursos indicados, dificuldade estimada, referência, gabarito, explicação de cada alternativa e registro de revisão docente.

## 8. Sistema de pontuação

| Situação | Regra do protótipo |
| --- | --- |
| Acerto antes de receber feedback | 100 pontos |
| Resposta inicial incorreta | 0 ponto, sem desconto |
| Acerto na revisão | Atualiza a revisão, sem alterar os pontos iniciais |
| Conclusão da fase | Total de 0 a 1.000 pontos |
| Nova tentativa completa | Resultado separado, sem acumulação com tentativas anteriores |

Não haverá bônus por velocidade, sorte ou sequência de acesso diário. Confirmar novamente uma resposta, recarregar a página ou rever uma explicação não poderá duplicar pontos.

O relatório apresentará o número de acertos iniciais, a pontuação e a situação da revisão. Se exibir melhor resultado, também identificará se houve contato prévio com as mesmas questões. Todas essas regras pertencem ao jogo e não correspondem ao cálculo de resultados oficiais do ENADE.

## 9. Progressão e conquistas

O progresso será representado pela recuperação dos terminais e setores de Nexo. Na versão completa, o percurso reunirá núcleo comum e a trilha do curso selecionado, com possibilidade de explorar outras trilhas para estudo.

No protótipo, a fase será concluída quando o estudante responder às dez questões e acessar seus feedbacks. Errar não bloqueará a progressão. O sistema registrará apresentação do feedback, sem presumir que isso comprove leitura ou compreensão.

| Conquista | Condição |
| --- | --- |
| Missão concluída | Responder aos dez itens e acessar os dez feedbacks |
| Investigação retomada | Revisar e acertar pelo menos um item inicialmente errado |
| Central restaurada | Obter pelo menos oito acertos iniciais em uma tentativa |

Conquistas serão selos locais e pequenas mudanças no cenário. Não será necessário obter todas para concluir: quem acertar tudo não precisará errar para desbloquear conteúdo.

O progresso será salvo após cada resposta confirmada, feedback acessado e revisão concluída. A retomada ocorrerá no mesmo navegador e dispositivo. Haverá opção explícita de apagar os dados locais.

## 10. Revisão de questões erradas

Questões respondidas incorretamente entrarão em uma fila com tema, competência do projeto e situação de revisão. O estudante poderá acessá-la ao final da fase ou ao retornar em outra sessão.

O fluxo será: recuperar o contexto → responder novamente sem mostrar a solução previamente → confirmar → consultar explicação. Se errar outra vez, o item continuará pendente; se acertar, será marcado como “acertado na revisão”.

O registro original será preservado. O estudante poderá revisitar as explicações de qualquer questão, inclusive as acertadas, e sair da revisão sem perder progresso.

No MVP, a revisão reutilizará os mesmos itens. Portanto, o sistema não classificará um conceito como dominado com base em uma repetição. Questões equivalentes inéditas e revisão espaçada serão acrescentadas posteriormente para avaliar transferência e retenção.

## 11. Organização do núcleo comum

O núcleo comum reúne conteúdos compartilháveis como estratégia pedagógica do produto. Sua existência não significa que as cinco avaliações oficiais tenham uma matriz específica idêntica.

| Eixo do projeto | Temas propostos | Forma de abordagem |
| --- | --- | --- |
| Leitura e raciocínio | Enunciados, dados, tabelas e comparação de alternativas | Identificar evidências e restrições |
| Tecnologia e sociedade | Ética, inclusão, acessibilidade e impactos sociais | Analisar consequências de decisões |
| Fundamentos de soluções computacionais | Algoritmos, programação e organização de dados | Interpretar soluções curtas e contextualizadas |
| Sistemas e informação | Dados, requisitos e qualidade | Relacionar necessidades a comportamentos verificáveis |
| Infraestrutura e proteção | Redes e segurança introdutórias | Diagnosticar situações e escolher medidas básicas |

A seleção e a profundidade serão revistas por docentes dos cinco cursos. Um tema poderá ser compartilhado, mas receber aprofundamentos diferentes nas trilhas. Se um item não for adequado a todos, deverá ser ajustado ou deslocado para uma trilha.

O banco terá marcações por curso, tema, competência, dificuldade, fonte e revisão. Conteúdos compartilhados poderão ser reutilizados sem duplicar a lógica do jogo. Correspondência deste núcleo aos componentes oficiais do exame: **pendente de verificação oficial**.

## 12. Características das trilhas de CC, SI, TADS, TGTI e TRC

As cinco trilhas têm o mesmo status no planejamento. As ênfases abaixo são propostas de design, não delimitações exclusivas de atuação nem transcrições de diretrizes oficiais.

| Trilha | Foco pedagógico proposto | Temas candidatos | Exemplo de missão |
| --- | --- | --- | --- |
| CC | Analisar fundamentos, modelos e propriedades de soluções computacionais | Estruturas de dados, análise de algoritmos, teoria da computação, arquitetura, sistemas operacionais e fundamentos de IA | Comparar algoritmos sob restrições de recursos e justificar a escolha |
| SI | Relacionar sistemas, pessoas, processos e objetivos organizacionais | Requisitos, processos de negócio, sistemas de informação, dados para decisão e governança | Investigar um processo de atendimento e selecionar uma solução coerente com necessidades e restrições |
| TADS | Projetar, desenvolver, testar e manter soluções de software | Modelagem, programação, bancos de dados, testes, integração e manutenção | Diagnosticar um defeito e selecionar uma correção com evidência de teste |
| TGTI | Planejar e avaliar serviços e decisões de gestão de TI | Gestão de serviços, projetos, governança, riscos, custos e indicadores | Priorizar melhorias de um serviço considerando impacto, recursos e riscos |
| TRC | Analisar, configurar conceitualmente e diagnosticar infraestrutura de comunicação | Protocolos, endereçamento, roteamento, serviços de rede, disponibilidade e segurança | Investigar perda de comunicação a partir de topologia e evidências de funcionamento |

**Relação com o núcleo comum:** todas as trilhas reutilizam interpretação, ética, segurança e análise de requisitos. O aprofundamento muda conforme a competência da missão, sem restringir determinado conhecimento a um único curso.

**Evidências pretendidas:** CC comparará propriedades e resultados; SI relacionará decisões a processos; TADS analisará artefatos de software; TGTI avaliará alternativas e indicadores; TRC interpretará topologias e sinais de falha. No início, essas evidências poderão ser coletadas por questões contextualizadas; desafios interativos ampliarão essa observação no futuro.

Para cada trilha, conteúdos exigidos, competências oficiais, nível esperado e correspondência com o ENADE: **pendente de verificação oficial**. A liberação de uma fase específica dependerá também de revisão docente da respectiva área.

## 13. Diferenças entre bacharelados e cursos tecnológicos

O jogo adotará percursos próprios por curso, evitando organizar a dificuldade apenas pelo tipo de graduação. Conhecimentos teóricos e aplicação prática estarão presentes em todas as trilhas.

| Dimensão de design | CC e SI — bacharelados | TADS, TGTI e TRC — tecnológicos |
| --- | --- | --- |
| Organização proposta | Casos que articulam diferentes dimensões da formação, com ênfases próprias de CC e SI | Casos organizados por problemas do campo específico de cada curso |
| Contexto das missões | Modelos, soluções computacionais e relações organizacionais, conforme a trilha | Desenvolvimento de sistemas, gestão de TI ou redes, conforme a trilha |
| Aprofundamento | Definido pela competência e pelo curso | Definido pela competência e pelo curso |
| Dificuldade | Interpretação, restrições e complexidade do raciocínio | Os mesmos critérios, sem redução automática da exigência |

Essas escolhas são orientações pedagógicas para o produto. Um curso tecnológico não será tratado como uma versão simplificada de CC ou SI, e SI não será reduzido a gestão sem fundamentos computacionais.

Comparação normativa entre perfis de formação, diretrizes curriculares e competências avaliadas no ENADE para cada curso: **pendente de verificação oficial**. Duração, carga horária, pesos de prova e regras de avaliação não serão inferidos pelo jogo.

## 14. Escopo mínimo do protótipo

### Incluído

- Uma plataforma com seleção entre os cinco cursos.
- Uma fase comum com dez questões autorais, sujeitas à aprovação docente antes do piloto.
- Mapa 2D simples com dez terminais; navegação por seleção direta.
- Enunciados, alternativas, confirmação e explicações de todos os distratores.
- Pontuação, avanço, três conquistas, relatório e revisão de erros.
- Salvamento local e retomada no mesmo navegador.
- Interface responsiva em computador e celular, com rolagem de conteúdo quando necessário.
- Uso por teclado, foco visível, contraste adequado e feedback que não dependa apenas de cor.
- Aviso claro de que as cinco trilhas específicas estão planejadas e ainda não integram a fase disponível.

### Implementação pretendida

**Phaser 3** cuidará do cenário 2D e das transições; **TypeScript**, das regras e estruturas de dados; **Vite**, do ambiente de desenvolvimento e da geração do pacote estático. **Codex** apoiará implementação, revisão e manutenção durante o desenvolvimento.

Textos, alternativas e controles deverão preferencialmente usar HTML/DOM integrado ao cenário para facilitar leitura, responsividade e acessibilidade. Questões ficarão em arquivos locais estruturados; respostas, revisão e pontuação terão lógica separada das cenas. O salvamento local terá versão de formato e tratamento de dados inválidos.

O MVP não terá servidor de aplicação, login, banco remoto, ranking público nem minijogos adicionais. A seleção do curso não modificará as dez questões comuns; servirá para contextualizar o perfil e o futuro percurso.

### Uso de IA e restrição de custos

A IA será usada somente durante o desenvolvimento, para apoiar planejamento, código e rascunhos. Conteúdo gerado passará por revisão de professores antes de chegar aos estudantes. **Não haverá IA durante a partida nem chamadas a APIs pagas.**

O jogo será distribuível como pacote estático e executável localmente. Recursos visuais serão próprios ou terão licença compatível. Hospedagem externa, se adotada, deverá caber em opção gratuita, sem domínio próprio obrigatório; condições e limites do serviço serão verificados antes da escolha.

O plano não pressupõe créditos de API incluídos na assinatura do ChatGPT. O uso de Codex e demais recursos de desenvolvimento deverá respeitar os recursos e limites disponíveis na assinatura vigente, sem contratação adicional prevista neste escopo.

## 15. Funcionalidades para versões futuras

- Implementação das cinco trilhas, com fases próprias revisadas por docentes de cada curso.
- Ampliação do banco e criação de questões equivalentes inéditas.
- Revisão espaçada e recomendação por regras locais, sem IA na partida.
- Desafios de ordenar etapas, interpretar diagramas e investigar artefatos de código, serviços e redes.
- Questões discursivas com rubricas, autoavaliação ou acompanhamento docente.
- Simulados separados do modo de aprendizagem; qualquer semelhança com o exame dependerá de verificação oficial.
- Exportação e importação de progresso e instalação para uso offline.
- Ferramentas de autoria docente e relatórios por turma.
- Sincronização entre dispositivos, somente após avaliar custos, privacidade e necessidade de infraestrutura.

Essas funcionalidades não são compromissos de entrega do protótipo. Multijogador e competição pública não são prioridades. A expansão deverá preservar a ausência de APIs pagas e de IA durante a partida.

## 16. Riscos pedagógicos e técnicos

| Risco | Medida prevista |
| --- | --- |
| Questões com erro, ambiguidade ou explicação inadequada | Revisão docente de enunciado, gabarito e distratores antes do piloto |
| Proposta curricular confundida com conteúdo oficial | Identificar sugestões e manter as pendências oficiais explícitas |
| Uma fase comum inadequada a algum curso | Validação com representantes dos cinco cursos e realocação de itens quando necessário |
| Tecnológicos tratados como formação de menor exigência | Critérios de dificuldade por competência, sem hierarquia entre modalidades |
| Repetição de alternativas confundida com domínio | Separar acerto inicial e revisão; usar itens inéditos na avaliação do piloto |
| Dez questões interpretadas como cobertura suficiente | Informar que se trata de amostra introdutória |
| Narrativa sobrecarregar a leitura | Introdução opcional e contexto breve |
| Recompensas desviarem o foco do raciocínio | Evitar prêmios por velocidade e destacar explicações |
| Canvas limitar acessibilidade | Conteúdo textual em DOM e verificação com teclado e leitor de tela |
| Layout prejudicar uso em celular | Testar tela estreita, rolagem, alvos de toque e orientação vertical |
| Perda de progresso ao limpar dados ou trocar de aparelho | Explicar o alcance do salvamento local e planejar exportação futura |
| Estado salvo inválido ou pontuação duplicada | Versionar dados, validar carregamento e impedir confirmação repetida |
| Desempenho ruim em aparelhos modestos | Recursos leves, animações contidas e teste em aparelho representativo |
| Dependência de serviço gerar custo | Pacote estático independente e ausência de serviços pagos no MVP |
| Gabarito acessível nos arquivos locais | Manter finalidade formativa; não usar como avaliação de alto impacto |
| Crescimento prematuro de escopo | Validar uma fase antes de implementar as cinco campanhas |

## 17. Critérios para considerar o protótipo bem-sucedido

As metas são critérios iniciais do projeto, sujeitos a ajuste após o piloto. Não representam resultados já demonstrados nem parâmetros oficiais do ENADE.

### Conteúdo e coerência pedagógica

- Dez questões completas, cada uma com objetivo, referência, gabarito e justificativas.
- Aprovação docente documentada antes do teste com estudantes, com participação dos cinco cursos na validação da fase comum.
- Nenhum erro conceitual ou ambiguidade de gabarito conhecido sem resolução.
- Clareza de que a fase é introdutória e as trilhas específicas ainda não estão implementadas.
- Ausência de afirmações sobre o exame apresentadas como oficiais sem verificação correspondente.

### Funcionamento e acessibilidade

- Concluir a fase, acessar os feedbacks e revisar erros sem falhas bloqueadoras.
- Recarregar e retomar o estado salvo sem perder respostas confirmadas ou duplicar pontos.
- Funcionar em computador e celular, incluindo verificação em Android/Chrome e iOS/Safari.
- Exibir enunciados e alternativas em largura de 360 pixels sem cortes ou rolagem horizontal; diagramas deverão ter alternativa legível.
- Permitir realizar todo o fluxo por teclado, com foco visível, e verificar conteúdo e controles com leitor de tela.
- Não exigir áudio, rapidez de resposta ou distinção de cores para resolver os desafios.
- Não realizar chamadas a IA ou APIs pagas durante a partida.

### Piloto com estudantes

Realizar um piloto exploratório com 10 a 15 estudantes, buscando ao menos dois de cada curso. A seleção deverá registrar familiaridade prévia com os temas para ajudar a interpretar dificuldades. Qualquer coleta será consentida e limitada ao necessário, sem cadastro remoto obrigatório.

| Indicador | Meta inicial | Evidência |
| --- | --- | --- |
| Conclusão autônoma | Pelo menos 80% concluem sem ajuda operacional do facilitador | Observação do uso |
| Clareza das explicações | Pelo menos 80% atribuem nota 4 ou 5 em escala de 1 a 5 | Questionário breve |
| Uso da revisão | Pelo menos 70% de quem errou revisam ao menos um item | Registro local ou observação; se ninguém errar, indicador não se aplica |
| Aplicação em situação nova | Ganho médio de pelo menos um acerto em avaliação de cinco itens | Testes equivalentes antes e depois, com itens diferentes dos dez do jogo |
| Adequação ao público | Avaliação de linguagem visual e relevância por estudantes dos cinco cursos | Perguntas breves e comentários registrados |

Os testes externos ao jogo serão revisados por docentes e não aumentarão o banco do protótipo. Quando possível, alternar suas formas entre participantes para reduzir o efeito de diferenças de dificuldade.

A avaliação imediata e a amostra pequena permitirão identificar problemas e sinais iniciais de benefício. Não demonstrarão eficácia causal, retenção de longo prazo ou impacto no resultado do ENADE. A expansão será recomendada após atender aos critérios de conteúdo e funcionamento, analisar os indicadores do piloto e corrigir dificuldades relevantes de qualquer curso.

### Pendências de verificação oficial antes de comunicar alinhamento ao ENADE

| Ponto | Situação | Encaminhamento |
| --- | --- | --- |
| Elegibilidade de estudantes e enquadramento dos cursos na edição | **pendente de verificação oficial** | Consultar atos e orientações vigentes do Inep e confirmar com a instituição |
| Diretrizes e competências específicas de CC, SI, TADS, TGTI e TRC | **pendente de verificação oficial** | Confrontar cada trilha com os documentos oficiais da respectiva área |
| Correspondência do núcleo comum e das dez questões às diretrizes | **pendente de verificação oficial** | Mapear os itens com professores, registrando fonte e versão consultadas |
| Formato, quantidade e tipos de itens, pesos e critérios oficiais | **pendente de verificação oficial** | Conferir os instrumentos oficiais antes de criar um modo de simulado |
| Calendário e procedimentos da edição | **pendente de verificação oficial** | Consultar os canais oficiais antes de inserir informações no produto |

As pendências não impedem desenvolver e testar as mecânicas com conteúdo docente validado, mas impedem anunciar cobertura ou equivalência oficial ainda não demonstrada.
