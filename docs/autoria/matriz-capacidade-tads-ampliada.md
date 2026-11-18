# N9 — Jornada Digital: matriz de capacidade ampliada de TADS

Análise editorial assistida por IA — 18/11/2026. Este documento recalcula a cobertura de Tecnologia em Análise e Desenvolvimento de Sistemas depois dos lotes originais, compartilhados e das ampliações de SI e CC. O estado foi atualizado após a produção documental do lote complementar; não gera JSON nem integra conteúdo ao jogo.

## 1. Critério de capacidade

A meta pedagógica considerada é:

- três partidas diferentes de TADS;
- 25 questões por partida: cinco comuns e vinte técnicas;
- as vinte técnicas devem cobrir os vinte objetos do art. 6º da Portaria Inep 169/2026;
- para três partidas sem repetição, cada objeto precisa de ao menos três questões técnicas distintas;
- questões comuns e puzzles não substituem a cota técnica;
- cada questão é contada em somente uma área principal, mesmo quando mobiliza mais de um objeto;
- conteúdos avançados não são exigidos para completar a capacidade.

Esta é uma **matriz editorial**, não o estado executável. Questões originadas em CC, SI, TGTI ou TRC são contadas somente quando o objeto e a profundidade são defensáveis para TADS. Antes da integração, `courses`, a fonte normativa complementar F08 e a rastreabilidade do inciso precisam ser formalizados nos respectivos JSON. Itens apenas semelhantes não foram usados para fechar cotas.

## 2. Objetos oficiais conferidos

A numeração foi conferida na Portaria Inep 169/2026, publicada no DOU em 16/04/2026. O documento oficial é listado pelo Inep; a reprodução da ABMES já registrada no projeto foi usada para leitura integral quando o endereço individual do DOU apresentou limitação de acesso.

| Inciso | Objeto do art. 6º |
|---:|---|
| I | Algoritmos e programação |
| II | Análise e arquitetura de sistemas computacionais |
| III | Banco de dados |
| IV | Empreendedorismo |
| V | Engenharia de requisitos |
| VI | Estruturas de dados |
| VII | Gerência de configuração |
| VIII | Gerência de projetos |
| IX | Interação humano-computador |
| X | Legislação, normas técnicas, ética e responsabilidade socioambiental |
| XI | Lógica matemática e teoria dos conjuntos |
| XII | Operações e manutenção de software |
| XIII | Orientação a objetos |
| XIV | Princípios de arquitetura e organização de computadores |
| XV | Princípios de estatística e análise de dados |
| XVI | Princípios de redes de computadores e de sistemas distribuídos |
| XVII | Princípios de segurança cibernética |
| XVIII | Princípios de sistemas operacionais |
| XIX | Processo de software |
| XX | Qualidade, verificação e validação de software |

Fonte principal: Portaria Inep 169/2026, arts. 4º–6º. Endereços registrados: `https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade/`, `https://www.in.gov.br/en/web/dou/-/portaria-n-169-de-14-de-abril-de-2026-699920629` e reprodução `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf`.

## 3. Capacidade conservadora por objeto de TADS

Esta tabela escolhe um núcleo mínimo sem reutilizar IDs entre áreas. Há outras candidatas tematicamente próximas, mantidas fora da contagem para não inflar a capacidade antes da formalização multcurso.

| Inciso | Objeto | Candidatos alocados exclusivamente nesta contagem | Quantidade | Meta 3 | Situação |
|---:|---|---|---:|---:|---|
| I | Algoritmos e programação | CC-01; SI-21; SI-23 | 3 | 3 | capacidade exata |
| II | Análise e arquitetura de sistemas computacionais | TADS-07; SI-10; SI-73 | 3 | 3 | capacidade exata |
| III | Banco de dados | TADS-05; SI-39; SI-75 | 3 | 3 | capacidade exata |
| IV | Empreendedorismo | — | 0 | 3 | **faltam 3** |
| V | Engenharia de requisitos | TADS-01; SI-71; SI-72 | 3 | 3 | capacidade exata |
| VI | Estruturas de dados | TADS-04; SI-78; SI-79 | 3 | 3 | capacidade exata |
| VII | Gerência de configuração | TADS-06; TGTI-14 | 2 | 3 | **falta 1** |
| VIII | Gerência de projetos | TADS-08; TGTI-11; TGTI-12 | 3 | 3 | capacidade exata |
| IX | Interação humano-computador | CC-26; SI-34; SI-35 | 3 | 3 | capacidade exata |
| X | Legislação, normas técnicas, ética e responsabilidade socioambiental | TGTI-15; SI-43; SI-44 | 3 | 3 | capacidade exata |
| XI | Lógica matemática e teoria dos conjuntos | CC-28; SI-18; SI-19 | 3 | 3 | capacidade exata |
| XII | Operações e manutenção de software | TADS-10; SI-15; SI-29 | 3 | 3 | capacidade exata |
| XIII | Orientação a objetos | TADS-02; SI-64; CC-14 | 3 | 3 | capacidade exata |
| XIV | Princípios de arquitetura e organização de computadores | CC-11; CC-13; CC-17 | 3 | 3 | capacidade exata |
| XV | Princípios de estatística e análise de dados | CC-08; SI-17; SI-81 | 3 | 3 | capacidade exata |
| XVI | Princípios de redes de computadores e de sistemas distribuídos | TRC-11; TRC-14; TRC-15 | 3 | 3 | capacidade exata |
| XVII | Princípios de segurança cibernética | TRC-07; SI-37; SI-38 | 3 | 3 | capacidade exata |
| XVIII | Princípios de sistemas operacionais | CC-12; CC-15; CC-18 | 3 | 3 | capacidade exata |
| XIX | Processo de software | SI-53; SI-63 | 2 | 3 | **falta 1** |
| XX | Qualidade, verificação e validação de software | TADS-03; SI-08; TADS-09 | 3 | 3 | capacidade exata |

### Resultado quantitativo

- 55 candidatos distintos foram alocados uma única vez.
- 17 das 20 áreas já possuem três candidatos.
- Empreendedorismo não possui candidata específica defensável no banco atual.
- Gerência de configuração e processo de software possuem duas candidatas cada.
- Faltam, portanto, **cinco questões** para sustentar três partidas de TADS com uma questão de cada objeto por partida.

### Decisões conservadoras importantes

- TADS-08 permanece em gerência de projetos. O cenário menciona responsabilidade, mas não avalia empreendedorismo; não foi contado duas vezes.
- TGTI-14 complementa gerência de configuração porque avalia mudança controlada, decisão, atualização de referência e comunicação. Seu vínculo com F08 precisa ser formalizado antes da integração.
- SI-53 e SI-63 sustentam processo de software por práticas ágeis/qualidade e maturidade/institucionalização. Falta uma terceira perspectiva de processo, preferencialmente ciclo de vida e escolha de modelo.
- TADS-09 foi alocado em qualidade, verificação e validação. Segurança cibernética é fechada por TRC-07, SI-37 e SI-38, evitando duplicidade.
- Questões de gestão estratégica, inovação tecnológica ou projetos não foram convertidas automaticamente em empreendedorismo.

## 4. Áreas em que não se deve ampliar agora

| Área | Motivo para interromper a autoria |
|---|---|
| Algoritmos, programação e estruturas de dados | O núcleo mínimo está completo e existem outras candidatas de programação e estruturas como reserva. |
| Requisitos, análise, arquitetura e qualidade | TADS e SI já oferecem ampla cobertura; novos itens aumentariam repetição de UML, testes e regras de negócio. |
| Banco de dados | Há modelagem, integridade e SQL suficientes para compor as três partidas. |
| Projetos | Além do núcleo de três, existem candidatas de risco, mudança e planejamento; não devem preencher artificialmente empreendedorismo. |
| IHC, lógica e estatística | As três áreas atingem a meta com questões acessíveis e formatos variados. |
| Arquitetura, sistemas operacionais, redes e distribuídos | Os lotes compartilhados já completam a capacidade; não é necessário ampliar infraestrutura para TADS. |
| Segurança cibernética | Há autenticação/autorização, criptografia e filtragem; novos itens agora concentrariam demais a trilha. |
| Orientação a objetos e manutenção | A capacidade mínima está completa com código, UML e evolução de software. |

## 5. Único lote adicional recomendado e produzido para TADS

O lote foi produzido em [ampliação de TADS 01 — empreendedorismo, configuração e processo](lote-especifico-tads-ampliacao-01-empreendedorismo-processo.md), com cinco questões e nenhuma avançada:

| ID reservado | Área | Recorte recomendado | Dificuldade | Formato atrativo |
|---|---|---|---|---|
| E26-Q-TADS-11 | IV — Empreendedorismo | hipótese de problema, proposta de valor e evidência antes de investir | introductory | cartões de problema, público e evidência |
| E26-Q-TADS-12 | IV — Empreendedorismo | experimento de MVP e métrica que testa uma hipótese | intermediate | painel de experimento com resultados |
| E26-Q-TADS-13 | IV — Empreendedorismo | viabilidade básica de uma solução digital sob restrições de custo, receita e risco | introductory | comparador de alternativas com números pequenos |
| E26-Q-TADS-14 | VII — Gerência de configuração | baseline, versionamento, rastreabilidade e reprodução de uma entrega | intermediate | árvore curta de versões e manifesto de build |
| E26-Q-TADS-15 | XIX — Processo de software | escolha ou adaptação de ciclo de vida conforme risco e feedback | intermediate | fluxo de etapas e cartões de mudança |

Distribuição proposta: duas `introductory`, três `intermediate` e nenhuma `advanced`. Os números de TADS-13 devem limitar-se a comparação direta ou uma operação curta; não exigir matemática financeira extensa.

Com esse lote:

- empreendedorismo passa de zero para três questões, uma por partida;
- gerência de configuração e processo de software passam de duas para três;
- os vinte objetos atingem capacidade mínima para três partidas;
- o núcleo conservador passa de 55 para 60 candidatas distintas;
- a criação de novas questões de TADS deve parar até a composição das partidas.

## 6. Limites e próxima auditoria

Capacidade documental não equivale a integração. Depois do lote, a composição das três partidas deve verificar:

1. exatamente uma questão de cada inciso por partida;
2. nenhum ID repetido entre as três partidas-base;
3. predominância de itens introdutórios e intermediários;
4. distribuição das avançadas já existentes, sem sequência punitiva;
5. alternância entre código, tabela, diagrama, decisão prática e fluxo;
6. enunciados adequados ao celular;
7. formalização de `courses: [TADS]`, F08 e localizador em todo compartilhamento;
8. separação entre os cinco itens comuns e as vinte áreas técnicas;
9. preservação de candidatas excedentes para sorteio posterior;
10. nenhuma alteração de gabarito apenas para equilibrar letras.

**Decisão atualizada:** a capacidade editorial mínima de TADS está completa. A autoria de novas questões de TADS deve parar e dar lugar à futura composição das três partidas; os compartilhamentos ainda precisam ser formalizados antes da conversão e integração.
