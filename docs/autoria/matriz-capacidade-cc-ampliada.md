# N9 — Jornada Digital: matriz de capacidade ampliada de Ciência da Computação

Análise editorial assistida por IA — 18/11/2026. Este documento recalcula a cobertura de CC depois dos três lotes compartilhados e dos dois primeiros lotes de ampliação específicos. O estado foi atualizado após a produção documental do terceiro lote; não gera JSON nem integra conteúdo ao jogo.

## 1. Critério de capacidade

A meta pedagógica considerada é:

- três partidas diferentes de CC;
- 25 questões por partida: cinco comuns e vinte técnicas;
- as vinte técnicas devem cobrir os vinte objetos do art. 6º da Portaria Inep 157/2026;
- para três partidas sem repetição, cada objeto precisa de ao menos três questões técnicas distintas;
- questões comuns e puzzles não substituem a cota técnica;
- cada questão é contada em somente uma área principal, mesmo quando dialoga com outras;
- conteúdos avançados não são exigidos para completar a capacidade.

Esta é uma **matriz editorial**, não o estado executável. Parte dos candidatos nasceu em lotes de SI, TADS, TGTI ou TRC e foi considerada compatível com CC pelo objeto coincidente. Antes da integração, `courses`, fontes complementares e rastreabilidade precisam ser formalizados nos respectivos JSON. Nenhum compartilhamento deve ocorrer apenas por semelhança superficial.

## 2. Capacidade conservadora por objeto de CC

| Inciso | Objeto da Portaria 157/2026 | Candidatos alocados exclusivamente nesta contagem | Quantidade | Meta 3 | Situação |
|---:|---|---|---:|---:|---|
| I | Algoritmos e estruturas de dados | CC-01; TADS-04; SI-77; SI-78; SI-79 | 5 | 3 | suficiente |
| II | Engenharia de software | SI-08; SI-10; TADS-01; TADS-03; TADS-06; TADS-07; TADS-09; TADS-10; SI-53; SI-63; SI-71; SI-72; SI-73 | 13 | 3 | excesso editorial |
| III | Interação humano-computador | SI-34; SI-35 | 2 | 3 | **falta 1** |
| IV | Ética, computação e sociedade | SI-41; SI-42; SI-43; SI-44; SI-45; SI-46; SI-69; TGTI-15 | 8 | 3 | excesso editorial |
| V | Sistemas digitais | CC-02; CC-16 | 2 | 3 | **falta 1** |
| VI | Organização e arquitetura de computadores | CC-05; CC-11; CC-13; CC-17 | 4 | 3 | suficiente |
| VII | Sistemas operacionais | CC-10; CC-12; CC-15; CC-18; SI-26; SI-29; TRC-03 | 7 | 3 | suficiente com reserva |
| VIII | Lógica e matemática discreta | SI-18; SI-19 | 2 | 3 | **falta 1** |
| IX | Fundamentos e técnicas de programação | SI-21; SI-22; SI-23 | 3 | 3 | capacidade exata |
| X | Paradigmas de linguagens de programação | CC-14; TADS-02; SI-64 | 3 | 3 | exata, com compartilhamento a confirmar |
| XI | Redes de computadores | TRC-01; TRC-11; TRC-12; TRC-13 | 4 | 3 | suficiente |
| XII | Inteligência artificial | CC-06; SI-40; SI-52 | 3 | 3 | capacidade exata |
| XIII | Bancos de dados | SI-02; SI-05; TADS-05; SI-39; SI-66; SI-67; SI-74; SI-75; SI-76 | 9 | 3 | excesso editorial |
| XIV | Computação gráfica e processamento de imagem | CC-07; CC-24; CC-25 | 3 | 3 | capacidade exata |
| XV | Teoria dos grafos | CC-04; CC-19; CC-20 | 3 | 3 | capacidade exata |
| XVI | Probabilidade e estatística | CC-08; SI-17; SI-20; SI-81 | 4 | 3 | suficiente |
| XVII | Sistemas distribuídos | TRC-14; TRC-15; SI-27; SI-28 | 4 | 3 | suficiente |
| XVIII | Teoria da computação | CC-09; CC-23 | 2 | 3 | **falta 1** |
| XIX | Compiladores | CC-03; CC-21; CC-22 | 3 | 3 | capacidade exata |
| XX | Segurança da informação | TRC-07; SI-36; SI-37; SI-38; SI-70; SI-80 | 6 | 3 | suficiente com reserva |

### Resultado quantitativo

- 90 candidatos distintos foram alocados uma única vez na matriz conservadora.
- 16 das 20 áreas já possuem pelo menos três candidatos.
- Quatro áreas possuem somente duas questões: III, V, VIII e XVIII.
- Faltam, portanto, **quatro questões obrigatórias** para sustentar três partidas tematicamente completas.
- A área X possui três candidatas, mas uma delas — SI-64 — nasceu como modelagem UML e orientação a objetos. Ela é defensável como paradigma orientado a objetos, porém recomenda-se uma quarta questão diretamente centrada em paradigma para criar reserva e reduzir dependência interpretativa.

## 3. Áreas em que não se deve ampliar agora

| Área | Motivo para interromper a autoria |
|---|---|
| Engenharia de software | Treze candidatas; ampliar agora aumentaria repetição de requisitos, testes, UML e manutenção. |
| Ética, computação e sociedade | Oito candidatas; já há privacidade, viés, inclusão, sustentabilidade e responsabilidade. |
| Bancos de dados | Nove candidatas; já existem modelagem, integridade, OLTP/OLAP, SQL e arquitetura de dados. |
| Sistemas operacionais | Sete candidatas; já cobre concorrência, memória, interrupção, recursos e serviços. |
| Segurança da informação | Seis candidatas; já cobre acesso, autenticação, criptografia, incidente e propriedades de segurança. |
| Algoritmos e estruturas de dados | Cinco candidatas; já há rastreamento, lista, complexidade, pilha/fila e estruturas de busca. |
| Arquitetura, redes e sistemas distribuídos | Possuem quatro candidatas cada; há reserva suficiente para alternar partidas. |
| Gráficos, grafos e compiladores | Já atingiram exatamente três; não precisam de novo item antes da composição das partidas. |

## 4. Terceiro lote de CC recomendado e produzido

O terceiro lote foi produzido em [ampliação de CC 03 — interação, lógica e paradigmas](lote-especifico-cc-ampliacao-03-lacunas.md), com cinco questões e nenhuma avançada:

| ID reservado | Área | Recorte recomendado | Dificuldade | Formato atrativo |
|---|---|---|---|---|
| E26-Q-CC-26 | III — IHC | feedback, prevenção/recuperação de erro ou carga cognitiva em interface cotidiana | introductory | comparação de duas telas com descrição textual |
| E26-Q-CC-27 | V — Sistemas digitais | circuito sequencial, memória de um bit ou máquina de estados simples | intermediate | painel de sinais e linha do tempo |
| E26-Q-CC-28 | VIII — Lógica e matemática discreta | equivalência lógica, implicação ou lei de De Morgan aplicada a regra de acesso | introductory | cartões de regra e casos |
| E26-Q-CC-29 | XVIII — Teoria da computação | relação simples entre expressão regular e autômato, sem prova formal | intermediate | cartões de linguagem e reconhecedor |
| E26-Q-CC-30 | X — Paradigmas | programação orientada a eventos ou declarativa em situação prática | introductory | fluxo visual de eventos |

Distribuição proposta: três `introductory`, duas `intermediate` e zero `advanced`. Nenhum item deve exigir cálculo além de leitura de estados ou tabela-verdade curta.

Com esse lote:

- as quatro lacunas passam de duas para três questões;
- paradigmas passa de três para quatro e ganha reserva diretamente alinhada ao objeto;
- as vinte áreas alcançam capacidade mínima para três partidas;
- o banco editorial compatível com CC passa de 90 para 95 candidatas, das quais 60 serão selecionadas para três roteiros-base e 35 permanecerão como reserva para sorteio posterior.

## 5. Limites e próxima auditoria

Capacidade quantitativa não garante uma boa experiência. Depois do terceiro lote, a próxima etapa não deve criar mais questões de CC. Deve montar três roteiros-base de vinte questões técnicas e verificar:

1. exatamente uma questão de cada área por partida;
2. nenhum ID repetido entre as três partidas-base;
3. predominância de itens introdutórios e intermediários;
4. no máximo duas ou três avançadas por partida, sem sequência de avançadas;
5. alternância entre texto, código, tabela, diagrama e decisão prática;
6. enunciados adequados ao celular;
7. formalização da elegibilidade `courses: [CC]` e das fontes complementares antes do JSON;
8. separação entre os cinco itens comuns sorteados e as vinte áreas técnicas;
9. manutenção de uma reserva para sorteio a partir da quarta partida;
10. nenhuma alteração de gabarito apenas para equilibrar letras.

**Decisão atualizada:** a capacidade editorial mínima de CC está completa. A autoria de novas questões de CC deve parar e dar lugar à composição e auditoria das três partidas; elegibilidades compartilhadas ainda precisam ser formalizadas antes da conversão e integração.
