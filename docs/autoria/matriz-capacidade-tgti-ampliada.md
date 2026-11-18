# N9 — Jornada Digital: matriz de capacidade ampliada de TGTI

Análise editorial assistida por IA — 18/11/2026. Este documento recalcula a cobertura de Tecnologia em Gestão da Tecnologia da Informação depois dos lotes originais, compartilhados e das ampliações de SI, CC e TADS. O estado foi atualizado após a produção documental da questão complementar; não gera JSON nem integra conteúdo ao jogo.

## 1. Critério de capacidade

A Portaria Inep 171/2026 contém **16 objetos de conhecimento**, enquanto o modelo planejado para o jogo utiliza vinte questões técnicas por partida. Assim, a meta é:

- três partidas diferentes de TGTI;
- 25 questões por partida: cinco comuns e vinte técnicas;
- ao menos uma questão de cada um dos 16 objetos em cada partida;
- quatro questões adicionais por partida para reforçar áreas prioritárias, sem excluir nenhum objeto;
- no mínimo três questões distintas em cada objeto para sustentar as três partidas sem repetição;
- no mínimo 60 questões técnicas distintas no conjunto das três partidas;
- questões comuns e puzzles não substituem a cota técnica;
- cada questão é contada em somente uma área principal nesta matriz.

Esta é uma **matriz editorial**, não o estado executável. Questões originadas em outros cursos são consideradas somente quando o objeto e a profundidade são compatíveis com TGTI. Antes da integração, `courses`, a fonte normativa complementar F09 e o localizador do inciso precisam ser formalizados nos respectivos JSON.

## 2. Objetos oficiais conferidos

A numeração foi conferida na Portaria Inep 171/2026, publicada no DOU em 16/04/2026.

| Inciso | Objeto do art. 6º |
|---:|---|
| I | Algoritmos |
| II | Arquitetura de computadores |
| III | Sistemas operacionais |
| IV | Banco de dados |
| V | Engenharia de software |
| VI | Gerência de projetos |
| VII | Gestão de pessoas |
| VIII | Gestão dos serviços de TI |
| IX | Tecnologias para inteligência de negócio |
| X | Governança de tecnologia da informação |
| XI | Gestão estratégica organizacional |
| XII | Processos organizacionais |
| XIII | Redes de computadores |
| XIV | Segurança da informação |
| XV | Sistemas de informações gerenciais |
| XVI | Ética, tecnologia e sociedade |

Fonte principal: Portaria Inep 171/2026, arts. 4º–6º. Endereços registrados: `https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade`, `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-171-2026-04-14.pdf` e reprodução integral identificada pelo CRUB em `https://www.crub.org.br/portaria-no-171-de-14-04-2026/`.

## 3. Capacidade conservadora por objeto de TGTI

Cada candidato aparece em somente uma linha. A matriz inclui reservas nas áreas que fornecerão as quatro questões adicionais de cada partida.

| Inciso | Objeto | Candidatos alocados exclusivamente nesta contagem | Quantidade | Meta mínima 3 | Situação |
|---:|---|---|---:|---:|---|
| I | Algoritmos | CC-01; CC-19; CC-20 | 3 | 3 | capacidade exata |
| II | Arquitetura de computadores | CC-11; CC-13; CC-16; CC-17 | 4 | 3 | suficiente com reserva |
| III | Sistemas operacionais | CC-12; CC-15; CC-18; TRC-03 | 4 | 3 | suficiente com reserva |
| IV | Banco de dados | SI-02; SI-05; SI-39; TADS-05 | 4 | 3 | suficiente com reserva |
| V | Engenharia de software | SI-08; SI-10; TADS-03; TADS-07; TADS-10 | 5 | 3 | suficiente com reserva |
| VI | Gerência de projetos | TGTI-07; TGTI-12; TGTI-13; TGTI-14 | 4 | 3 | suficiente com reserva |
| VII | Gestão de pessoas | TGTI-03; TGTI-11 | 2 | 3 | **falta 1** |
| VIII | Gestão dos serviços de TI | TGTI-02; TGTI-04; TGTI-08; TGTI-10; SI-58 | 5 | 3 | suficiente com reserva |
| IX | Tecnologias para inteligência de negócio | TGTI-06; SI-62; SI-66; SI-67 | 4 | 3 | suficiente com reserva |
| X | Governança de tecnologia da informação | TGTI-05; SI-25; SI-57 | 3 | 3 | capacidade exata |
| XI | Gestão estratégica organizacional | TGTI-01; TGTI-09; SI-51 | 3 | 3 | capacidade exata |
| XII | Processos organizacionais | SI-03; SI-04; SI-30; SI-31 | 4 | 3 | suficiente com reserva |
| XIII | Redes de computadores | TRC-11; TRC-12; TRC-13; TRC-14; TRC-15 | 5 | 3 | suficiente com reserva |
| XIV | Segurança da informação | TRC-07; SI-37; SI-38; SI-80 | 4 | 3 | suficiente com reserva |
| XV | Sistemas de informações gerenciais | SI-47; SI-48; SI-50 | 3 | 3 | capacidade exata |
| XVI | Ética, tecnologia e sociedade | TGTI-15; SI-41; SI-42; SI-43; SI-45 | 5 | 3 | suficiente com reserva |

### Resultado quantitativo

- 62 candidatos distintos foram alocados uma única vez.
- 15 dos 16 objetos já possuem ao menos três candidatos.
- Gestão de pessoas possui somente duas questões diretamente defensáveis.
- A quantidade total já ultrapassa 60, mas ainda não permite três partidas completas porque uma delas ficaria sem uma terceira questão de gestão de pessoas.
- Falta, portanto, **uma questão**, e não um lote convencional de cinco.

### Decisões conservadoras importantes

- TGTI-03 e TGTI-11 avaliam responsabilidades, papéis e colaboração. TGTI-07 foi mantida em gerência de projetos para não contar o mesmo item duas vezes.
- TGTI-12, TGTI-13 e TGTI-14 reforçam monitoramento, risco e mudança em projetos; não foram usados para simular gestão de pessoas.
- TGTI-06 foi alocada em tecnologias para inteligência de negócio. Sistemas gerenciais foram fechados por DIKW, níveis organizacionais e classificação SPT/SIG/SAD/SAE.
- TGTI-10 foi alocada em serviços, continuidade e proteção operacional. Segurança possui outras quatro candidatas e não depende dela.
- Questões de ética, privacidade ou responsabilidade não foram convertidas automaticamente em gestão de pessoas.

## 4. Capacidade dos quatro reforços por partida

As três partidas consomem 48 questões para cobrir os 16 objetos (`16 × 3`). Restam doze posições técnicas (`4 × 3`) que devem reforçar áreas prioritárias com reservas existentes.

| Grupo de reforço | Reservas disponíveis | Uso recomendado |
|---|---:|---|
| Infraestrutura: arquitetura e sistemas operacionais | 2 além das cotas mínimas | Alternar diagnóstico de recursos, memória, concorrência e entrada/saída. |
| Dados e engenharia de software | 3 além das cotas mínimas | Alternar banco, qualidade, arquitetura de software e evolução. |
| Projetos e serviços de TI | 3 além das cotas mínimas | Alternar risco, mudança, indicadores, continuidade e melhoria de serviço. |
| BI, processos e estratégia | 2 além das cotas mínimas | Alternar arquitetura analítica, processos e decisão organizacional. |
| Redes e segurança | 3 além das cotas mínimas | Alternar capacidade, disponibilidade, comunicação e proteção. |
| Ética, tecnologia e sociedade | 2 além das cotas mínimas | Alternar inclusão, impacto, privacidade e responsabilidade. |

Há quinze candidatas excedentes nas áreas que já atingiram suas cotas, mas elas não substituem a terceira questão de gestão de pessoas. Após a nova questão, o banco conservador terá 63 candidatas: 48 cobrem os 16 objetos nas três partidas, doze ocupam os reforços e três permanecem como reserva adicional. A distribuição exata dos reforços deve ser feita apenas na composição dos roteiros, evitando que todas as partidas reforcem os mesmos assuntos.

## 5. Áreas em que não se deve ampliar agora

| Área | Motivo para interromper a autoria |
|---|---|
| Engenharia de software e banco de dados | Já possuem variedade suficiente de requisitos, testes, arquitetura, manutenção, modelagem e consulta. |
| Gerência de projetos e serviços de TI | Há questões de papéis, indicadores, risco, mudança, prioridade, continuidade e melhoria. |
| Redes e segurança | Os lotes compartilhados oferecem cinco questões de redes e quatro de segurança. |
| Ética, tecnologia e sociedade | Cinco candidatas já cobrem inclusão, responsabilidade algorítmica, ciclo de vida e minimização de dados. |
| BI, SIG e processos | OLTP/OLAP, arquitetura de dados, DIKW, níveis organizacionais e processos já permitem alternância. |
| Arquitetura e sistemas operacionais | A capacidade mínima e uma reserva por área já estão disponíveis. |
| Algoritmos, governança e estratégia | A capacidade está exata; novos itens não resolvem a única lacuna. |

## 6. Única questão adicional recomendada e produzida

A questão foi produzida em [ampliação de TGTI 01 — gestão de pessoas](lote-especifico-tgti-ampliacao-01-gestao-pessoas.md):

| ID reservado | Área | Recorte recomendado | Dificuldade | Formato atrativo |
|---|---|---|---|---|
| E26-Q-TGTI-16 | VII — Gestão de pessoas | distribuição de trabalho conforme competências, capacidade, desenvolvimento e continuidade, sem usar pessoas como recursos intercambiáveis | introductory ou intermediate | quadro de equipe, competências e restrições com alternativa textual |

A questão deve exigir decisão aplicada, não memorização de terminologia de RH. Um cenário adequado combina:

- competências complementares;
- limite de capacidade explícito;
- necessidade de compartilhamento de conhecimento;
- impedimento de concentrar toda atividade crítica em uma pessoa;
- plano de acompanhamento ou desenvolvimento.

Não deve repetir a matriz RACI de TGTI-11 nem a atribuição operacional de TGTI-03.

## 7. Limites e próxima auditoria

Depois de TGTI-16, a composição das três partidas deve verificar:

1. uma questão de cada um dos 16 incisos em cada partida;
2. quatro reforços por partida, totalizando vinte questões técnicas;
3. nenhum ID repetido entre as três partidas-base;
4. alternância dos reforços entre áreas, sem concentrar serviços, redes ou engenharia;
5. predominância de itens introdutórios e intermediários;
6. distribuição das avançadas já existentes, sem sequência punitiva;
7. formalização de `courses: [TGTI]`, F09 e localizador nos compartilhamentos;
8. separação entre cinco questões comuns e vinte técnicas;
9. preservação de três reservas para sorteio posterior;
10. nenhuma alteração de gabarito apenas para equilibrar letras.

**Decisão atualizada:** a capacidade editorial mínima de TGTI está completa. A autoria de novas questões de TGTI deve parar; os compartilhamentos ainda precisam ser formalizados antes da conversão e integração.
