# N9 — Jornada Digital: matriz canônica para partidas de 25 questões

Consolidação editorial assistida por IA — 18/11/2026. Esta matriz utiliza somente questões já redigidas e registradas no [inventário final](inventario-final-questoes.md). Não altera questões, gabaritos, dificuldades, JSON, schemas, interface ou progresso.

## 1. Decisão de composição

Cada partida terá:

- cinco questões comuns;
- vinte questões técnicas elegíveis para o curso;
- 25 questões únicas dentro da partida;
- pelo menos uma questão de cada área obrigatória do curso;
- no máximo três questões `advanced`, contando comuns e técnicas;
- puzzles fora da contagem.

CC, TADS, TGTI e TRC recebem três roteiros-base. SI recebe quatro. Os roteiros-base comprovam capacidade e oferecem uma primeira sequência controlada; a partir da partida seguinte, o jogo poderá selecionar do mesmo banco por área, excluindo IDs recentes.

O prefixo do ID continua indicando a origem editorial, não a exclusividade. Na conversão, toda questão compartilhada deverá receber o curso em `courses`, a Portaria do curso como `normative-complementary` e o localizador correspondente em `traceability`.

## 2. Blocos comuns

| Roteiro | IDs comuns | I / M / A |
|---|---|---|
| A | COM-01, COM-02, COM-03, COM-06, COM-09 | 3 / 1 / 1 |
| B | COM-04, COM-05, COM-07, COM-08, COM-10 | 1 / 3 / 1 |
| C | COM-11, COM-12, COM-13, COM-14, COM-15 | 3 / 1 / 1 |
| D, somente SI | COM-01, COM-04, COM-06, COM-11, COM-15 | 3 / 1 / 1 |

Os três primeiros blocos usam as quinze comuns sem repetição. SI reutiliza cinco comuns na quarta partida, mas mantém vinte técnicas ainda não vistas. Em sorteios futuros, as comuns devem alternar por área e evitar o bloco imediatamente anterior.

## 3. Ciência da Computação — CC

Referência normativa: Portaria Inep 157/2026. Cada roteiro apresenta uma questão de cada um dos vinte objetos do art. 6º.

| Inciso / área | Roteiro A | Roteiro B | Roteiro C |
|---|---|---|---|
| I — Algoritmos e estruturas de dados | CC-01 | TADS-04 | SI-77 |
| II — Engenharia de software | TADS-01 | SI-08 | TADS-03 |
| III — Interação humano-computador | CC-26 | SI-34 | SI-35 |
| IV — Ética, computação e sociedade | SI-41 | SI-43 | TGTI-15 |
| V — Sistemas digitais | CC-02 | CC-16 | CC-27 |
| VI — Organização e arquitetura | CC-11 | CC-05 | CC-17 |
| VII — Sistemas operacionais | CC-12 | CC-15 | CC-18 |
| VIII — Lógica e matemática discreta | CC-28 | SI-18 | SI-19 |
| IX — Fundamentos e técnicas de programação | SI-21 | SI-22 | SI-23 |
| X — Paradigmas de linguagens | CC-14 | TADS-02 | CC-30 |
| XI — Redes de computadores | TRC-01 | TRC-11 | TRC-12 |
| XII — Inteligência artificial | CC-06 | SI-40 | SI-52 |
| XIII — Bancos de dados | SI-02 | SI-05 | SI-75 |
| XIV — Computação gráfica e imagens | CC-24 | CC-07 | CC-25 |
| XV — Teoria dos grafos | CC-04 | CC-19 | CC-20 |
| XVI — Probabilidade e estatística | SI-81 | SI-17 | CC-08 |
| XVII — Sistemas distribuídos | TRC-14 | SI-27 | TRC-15 |
| XVIII — Teoria da computação | CC-09 | CC-23 | CC-29 |
| XIX — Compiladores | CC-03 | CC-21 | CC-22 |
| XX — Segurança da informação | SI-37 | SI-38 | TRC-07 |

| Resultado técnico | A | B | C |
|---|---:|---:|---:|
| Quantidade | 20 | 20 | 20 |
| Advanced | 2 | 2 | 1 |
| Total advanced com bloco comum | 3 | 3 | 2 |

Os 35 candidatos planejados restantes permanecem como reserva. Engenharia de software, bancos de dados, ética e sistemas operacionais não devem dominar o sorteio apenas porque possuem mais itens.

## 4. Sistemas de Informação — SI

Referência normativa: Portaria Inep 168/2026. Cada roteiro apresenta duas questões de cada macroárea editorial. As macroáreas são agrupamentos internos e não números oficiais da Portaria.

| Macroárea | Roteiro A | Roteiro B | Roteiro C | Roteiro D |
|---|---|---|---|---|
| SI-M01 — Raciocínio quantitativo | SI-17, SI-09 | CC-08, SI-18 | SI-19, SI-20 | SI-81, SI-82 |
| SI-M02 — Algoritmos e programação | CC-01, TADS-04 | SI-21, SI-78 | TADS-02, SI-23 | SI-77, SI-79 |
| SI-M03 — Fundamentos de sistemas | SI-11, SI-12 | SI-13, SI-14 | SI-15, SI-50 | SI-47, SI-48 |
| SI-M04 — Arquitetura e governança | SI-24, SI-54 | SI-01, SI-06 | TGTI-01, TGTI-05 | TGTI-14, SI-57 |
| SI-M05 — Infraestrutura e distribuídos | TRC-01, SI-26 | SI-27, CC-18 | TRC-03, SI-29 | SI-60, SI-58 |
| SI-M06 — Engenharia, modelagem e projetos | TADS-01, SI-05 | TADS-03, SI-72 | SI-08, SI-64 | SI-59, SI-71 |
| SI-M07 — Processos e informação | SI-30, SI-49 | SI-03, SI-04 | SI-32, SI-33 | SI-55, SI-56 |
| SI-M08 — IHC e segurança | SI-34, TRC-07 | SI-35, CC-26 | SI-37, SI-38 | SI-69, SI-80 |
| SI-M09 — Dados | SI-02, SI-07 | SI-39, TADS-05 | TGTI-06, SI-68 | SI-66, SI-75 |
| SI-M10 — Informática e sociedade | SI-41, SI-42 | SI-43, SI-44 | SI-45, SI-46 | TGTI-15, SI-70 |

| Resultado técnico | A | B | C | D |
|---|---:|---:|---:|---:|
| Quantidade | 20 | 20 | 20 | 20 |
| Advanced | 2 | 0 | 1 | 2 |
| Total advanced com bloco comum | 3 | 1 | 2 | 3 |

Os roteiros usam oitenta técnicas distintas. A quarta partida repete somente comuns. As demais questões de SI permanecem como reserva para sorteio por macroárea e para substituir qualquer item que volte a `needs-revision`.

## 5. Tecnologia em Análise e Desenvolvimento de Sistemas — TADS

Referência normativa: Portaria Inep 169/2026. Cada roteiro apresenta uma questão de cada um dos vinte objetos do art. 6º.

| Inciso / área | Roteiro A | Roteiro B | Roteiro C |
|---|---|---|---|
| I — Algoritmos e programação | CC-01 | SI-21 | SI-23 |
| II — Análise e arquitetura de sistemas | TADS-07 | SI-10 | SI-73 |
| III — Banco de dados | TADS-05 | SI-39 | SI-75 |
| IV — Empreendedorismo | TADS-11 | TADS-12 | TADS-13 |
| V — Engenharia de requisitos | TADS-01 | SI-71 | SI-72 |
| VI — Estruturas de dados | TADS-04 | SI-78 | SI-79 |
| VII — Gerência de configuração | TADS-14 | TGTI-14 | TADS-06 |
| VIII — Gerência de projetos | TADS-08 | TGTI-11 | TGTI-12 |
| IX — Interação humano-computador | CC-26 | SI-34 | SI-35 |
| X — Legislação, ética e responsabilidade | TGTI-15 | SI-43 | SI-44 |
| XI — Lógica e teoria dos conjuntos | CC-28 | SI-18 | SI-19 |
| XII — Operações e manutenção | TADS-10 | SI-15 | SI-29 |
| XIII — Orientação a objetos | TADS-02 | SI-64 | CC-14 |
| XIV — Arquitetura e organização | CC-11 | CC-17 | CC-16 |
| XV — Estatística e análise de dados | SI-81 | SI-17 | CC-08 |
| XVI — Redes e sistemas distribuídos | TRC-11 | TRC-13 | TRC-15 |
| XVII — Segurança cibernética | TRC-07 | SI-37 | SI-38 |
| XVIII — Sistemas operacionais | CC-12 | CC-15 | CC-18 |
| XIX — Processo de software | SI-53 | SI-63 | TADS-15 |
| XX — Qualidade, verificação e validação | TADS-03 | SI-08 | TADS-09 |

| Resultado técnico | A | B | C |
|---|---:|---:|---:|
| Quantidade | 20 | 20 | 20 |
| Advanced | 2 | 2 | 2 |
| Total advanced com bloco comum | 3 | 3 | 3 |

Essa seleção consome a capacidade mínima planejada de sessenta técnicas. Antes da integração, recomenda-se manter ao menos uma reserva estrutural por meio dos candidatos não escolhidos do banco ampliado.

## 6. Tecnologia em Gestão da Tecnologia da Informação — TGTI

Referência normativa: Portaria Inep 171/2026. Cada roteiro apresenta uma questão de cada um dos 16 objetos e quatro reforços.

| Inciso / área | Roteiro A | Roteiro B | Roteiro C |
|---|---|---|---|
| I — Algoritmos | CC-01 | CC-19 | CC-20 |
| II — Arquitetura de computadores | CC-11 | CC-17 | CC-16 |
| III — Sistemas operacionais | TRC-03 | CC-12 | CC-18 |
| IV — Banco de dados | SI-02 | SI-05 | TADS-05 |
| V — Engenharia de software | TADS-03 | SI-08 | TADS-07 |
| VI — Gerência de projetos | TGTI-07 | TGTI-12 | TGTI-14 |
| VII — Gestão de pessoas | TGTI-03 | TGTI-11 | TGTI-16 |
| VIII — Gestão dos serviços de TI | TGTI-02 | TGTI-04 | SI-58 |
| IX — Inteligência de negócio | TGTI-06 | SI-66 | SI-68 |
| X — Governança de TI | TGTI-05 | SI-57 | SI-24 |
| XI — Gestão estratégica | TGTI-01 | TGTI-09 | SI-51 |
| XII — Processos organizacionais | SI-03 | SI-04 | SI-32 |
| XIII — Redes de computadores | TRC-11 | TRC-12 | TRC-15 |
| XIV — Segurança da informação | SI-37 | TRC-07 | SI-38 |
| XV — Sistemas de informações gerenciais | SI-47 | SI-48 | SI-50 |
| XVI — Ética, tecnologia e sociedade | TGTI-15 | SI-41 | SI-45 |
| Reforço 1 | SI-39 — dados | SI-78 — algoritmos | SI-77 — algoritmos |
| Reforço 2 | TADS-01 — software | SI-71 — software | CC-15 — sistemas operacionais |
| Reforço 3 | SI-30 — processos | SI-54 — sistemas integrados | TRC-13 — redes |
| Reforço 4 | SI-43 — sociedade | SI-69 — privacidade | TGTI-08 — serviços |

| Resultado técnico | A | B | C |
|---|---:|---:|---:|
| Quantidade | 20 | 20 | 20 |
| Advanced | 0 | 1 | 1 |
| Total advanced com bloco comum | 1 | 2 | 2 |

Três candidatas planejadas ficam fora dos roteiros-base e permanecem como reserva. Os reforços alternam infraestrutura, dados, engenharia, serviços, processos e sociedade.

## 7. Tecnologia em Redes de Computadores — TRC

Referência normativa: Portaria Inep 172/2026. Cada roteiro apresenta uma questão de cada um dos 19 objetos e um reforço. XI permanece virtualização; XIII permanece segurança da informação.

| Inciso / área | Roteiro A | Roteiro B | Roteiro C |
|---|---|---|---|
| I — Componentes e topologias | TRC-16 | TRC-31 | CC-11 |
| II — Comunicação e transmissão | TRC-17 | TRC-32 | TRC-13 |
| III — Modelos de referência | TRC-18 | TRC-33 | TRC-34 |
| IV — TCP/IP | TRC-01 | TRC-11 | TRC-12 |
| V — Algoritmos e protocolos de roteamento | TRC-04 | TRC-19 | TRC-35 |
| VI — Padrões IEEE 802.x | TRC-20 | TRC-36 | TRC-37 |
| VII — Redes sem fio | TRC-05 | TRC-21 | TRC-22 |
| VIII — Cabeamento estruturado | TRC-02 | TRC-23 | TRC-24 |
| IX — Administração de redes | TRC-03 | TRC-15 | TGTI-08 |
| X — Serviços de redes | TRC-39 | TRC-14 | SI-58 |
| XI — Virtualização | TRC-06 | TRC-45 | SI-65 |
| XII — Programação e automação | TRC-08 | TRC-25 | TRC-26 |
| XIII — Segurança da informação | TRC-07 | TGTI-13 | SI-37 |
| XIV — Projeto lógico e físico | TRC-09 | TRC-27 | TRC-28 |
| XV — Configuração de dispositivos | TRC-29 | TRC-30 | TRC-40 |
| XVI — Gerenciamento de redes | TRC-10 | TGTI-12 | TGTI-14 |
| XVII — Redes WAN | TRC-41 | TRC-42 | TRC-43 |
| XVIII — Tecnologias emergentes | TRC-44 | TRC-46 | SI-60 |
| XIX — Sustentabilidade e meio ambiente | TRC-47 | TGTI-15 | SI-43 |
| Reforço rotativo | TRC-38 — cabeamento | TGTI-11 — projetos/pessoas | CC-18 — entrada/saída |

| Resultado técnico | A | B | C |
|---|---:|---:|---:|
| Quantidade | 20 | 20 | 20 |
| Advanced | 2 | 2 | 1 |
| Total advanced com bloco comum | 3 | 3 | 2 |

### 7.1 Sete compartilhamentos que fecham TRC

| ID | Área TRC | Fonte que deve ser acrescentada | Justificativa delimitada |
|---|---|---|---|
| CC-11 | I | F10, Portaria 172/2026, art. 6º I | diagnóstico de componentes e recursos sem exigir arquitetura exclusiva de CC |
| TGTI-08 | IX | F10, art. 6º IX e XVI | melhoria operacional baseada em evidências; limitar ao recorte de administração/gestão de rede |
| SI-58 | X | F10, art. 6º X | restauração, incidente, problema e mudança aplicados a serviço de rede |
| SI-65 | XI | F10, art. 6º XI | limites de host e máquinas virtuais; virtualização explicitamente prevista |
| SI-37 | XIII | F10, art. 6º XIII | autenticação e autorização aplicadas ao acesso a recursos |
| SI-60 | XVIII | F10, art. 6º XVIII | propriedades de computação em nuvem tratadas como tecnologia emergente no recorte curricular |
| SI-43 | XIX | F10, art. 6º XIX | ciclo de vida, reutilização e destinação responsável de equipamentos |

Esses vínculos não substituem a fonte principal dos itens. Eles acrescentam F10 como `normative-complementary` e um localizador TRC próprio. Se a segunda passagem rejeitar algum vínculo, deve-se usar uma reserva equivalente antes de escrever questão nova.

## 8. Regras para sorteio depois dos roteiros-base

1. Selecionar somente uma coleção e um curso.
2. Reservar cinco comuns e vinte técnicas.
3. Preencher primeiro as áreas obrigatórias.
4. Usar reforços apenas depois da cobertura mínima.
5. Não repetir ID na partida.
6. Excluir, quando houver capacidade, os IDs da partida imediatamente anterior.
7. Manter no máximo três avançadas na partida completa.
8. Alternar texto, código, tabela, gráfico e diagrama.
9. Não usar `Math.random` diretamente no domínio; injetar estratégia testável.
10. Informar área com déficit quando as exclusões impossibilitarem a composição.

## 9. Resultado da consolidação

| Curso | Roteiros-base | Técnicas distintas nos roteiros | Comuns distintas | Repetição planejada |
|---|---:|---:|---:|---|
| CC | 3 | 60 | 15 | nenhuma |
| SI | 4 | 80 | 15 | cinco comuns na quarta partida |
| TADS | 3 | 60 | 15 | nenhuma |
| TGTI | 3 | 60 | 15 | nenhuma |
| TRC | 3 | 60 | 15 | nenhuma |

Os IDs técnicos são únicos entre os roteiros do mesmo curso. Um mesmo desafio pode aparecer em cursos diferentes quando a elegibilidade normativa for formalizada; isso não duplica o objeto no catálogo.

## 10. Próxima entrega autorizável

A próxima entrega pode, em uma única etapa:

- formalizar as elegibilidades desta matriz;
- converter os itens escolhidos e as reservas documentais para JSON;
- configurar a missão fixa de 25;
- adaptar o seletor para cobertura por área e histórico recente;
- preservar puzzles, progresso e ranking;
- executar a validação completa somente depois da integração.

Nenhum conteúdo foi publicado, convertido ou ativado por esta matriz.
