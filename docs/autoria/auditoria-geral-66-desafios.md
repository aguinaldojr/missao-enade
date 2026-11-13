# N9 — Jornada Digital: auditoria geral editorial e estrutural dos 66 desafios

Auditoria documental executada em 13/11/2026, horário de Brasília. Escopo: os 60 itens `question` e os seis itens `sequence` planejados para a coleção interna `enade-2026`. Nenhum lote, contrato, schema, enum, validador, conteúdo executável ou funcionalidade foi alterado nesta etapa.

## 1. Resumo executivo

O inventário está completo: **60 questões, seis puzzles, 66 IDs únicos, nenhum ID ausente, repetido ou fora do plano**. Cada curso possui exatamente 20 questões elegíveis — dez comuns e dez específicas — e dois puzzles — um comum e um específico. A distribuição de questões por curso fecha em 7 `introductory`, 9 `intermediate` e 4 `advanced`.

Os objetos reconstruídos somente em memória a partir dos sete lotes passaram nos schemas atuais de `question` e `sequence`. Todos usam a coleção existente `enade-2026`, cursos, classificações, dificuldades, fontes e estado editorial aceitos. Os 66 itens permanecem corretamente em `provisional-pending-teacher-review`.

As matrizes normativas estão associadas aos cursos corretos. A Formação Geral usa a Portaria Inep 154/2026; CC, SI, TADS, TGTI e TRC usam, respectivamente, as Portarias 157, 168, 169, 171 e 172/2026. Em TRC, XI identifica virtualização e XIII identifica segurança da informação. Não foi encontrado localizador específico transportado de um curso para sustentar item de outro.

A leitura editorial não encontrou duplicação literal de título ou alternativa, resposta concorrente evidente, contradição entre explicação e feedback, nem uso da palavra reservada na experiência do jogador. A comparação interna não substitui um cotejo externo independente.

Foram registrados **oito achados: zero bloqueadores, dois de gravidade alta, quatro de gravidade média e dois de gravidade baixa**. Os dois achados altos não invalidam os desafios; impedem uma conversão ingênua para JSON porque o contrato estrito não comporta toda a rastreabilidade editorial e só admite uma fonte principal. Há ainda textos extensos para uma experiência móvel, pendências docentes e de acessibilidade, limitações de acesso às versões certificadas das normas e ausência de cotejo externo.

**Decisão final: APTO COM CORREÇÕES.** A coleção está estruturalmente completa e pode seguir para uma etapa controlada de correção. A conversão deve aguardar a definição de como preservar metadados editoriais e corroborações normativas sem violar `additionalProperties: false`. A aprovação pedagógica e a publicação ao jogador continuam vedadas enquanto o estado for provisório.

## 2. Escopo, fontes e método

Foram lidos integralmente:

- `docs/plano-colecao-enade-2026.md`;
- `docs/autoria/padrao-editorial-piloto.md`;
- `docs/autoria/lote-comum-01.md`;
- `docs/autoria/lote-comum-02.md`;
- `docs/autoria/lote-especifico-cc.md`;
- `docs/autoria/lote-especifico-si.md`;
- `docs/autoria/lote-especifico-tads.md`;
- `docs/autoria/lote-especifico-tgti.md`;
- `docs/autoria/lote-especifico-trc.md`;
- contratos TypeScript, schemas, enums, repositórios e validadores atuais de questões, puzzles, metadados editoriais, coleções e seleção de missões.

O método combinou:

1. extração estrutural dos 66 itens a partir dos títulos e das fichas editoriais;
2. comparação exata com os 66 slots do plano;
3. reconstrução temporária, apenas em memória, dos 60 objetos `Question` e seis objetos `SequencePuzzle`;
4. validação AJV contra `question.schema.json`, `puzzles.schema.json` e referências de `editorial.schema.json`;
5. conferência do catálogo de coleções;
6. contagem independente por curso, classificação, dificuldade, gabarito e elegibilidade;
7. leitura editorial de enunciados, alternativas, explicações, feedbacks, puzzles, fontes e checklists;
8. comparação literal normalizada de títulos e das 300 alternativas;
9. inspeção de semelhança interna por cenário, premissa, estrutura, conceito central e cadeia de feedback;
10. verificação dos seis puzzles por permutação completa e pelas dependências explícitas de artefatos/estados;
11. busca da palavra reservada em todos os textos destinados ao jogador;
12. execução dos testes de contrato e lint, seguida de conferência do diff.

Não houve pesquisa externa nova. A auditoria usa as fontes e limitações já registradas nos lotes; portanto, não certifica originalidade externa, vigência normativa, retificações ou adequação aos PPCs.

## 3. Inventário completo

### 3.1 Totais e correspondência com o plano

| Verificação | Esperado | Encontrado | Resultado |
|---|---:|---:|---|
| IDs `question` | 60 | 60 | conforme |
| IDs `sequence` | 6 | 6 | conforme |
| IDs totais | 66 | 66 | conforme |
| IDs únicos | 66 | 66 | conforme |
| IDs ausentes | 0 | 0 | conforme |
| IDs repetidos | 0 | 0 | conforme |
| IDs fora do plano | 0 | 0 | conforme |
| Estado provisório | 66 | 66 | conforme |
| Coleção | `enade-2026` | `enade-2026`, cadastrada | conforme |

### 3.2 Questões comuns e puzzle comum

| ID | Tipo | Dificuldade | Elegibilidade | Slot do plano |
|---|---|---|---|---|
| E26-Q-COM-01 | question | introductory | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-02 | question | introductory | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-03 | question | introductory | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-04 | question | introductory | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-05 | question | intermediate | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-06 | question | intermediate | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-07 | question | intermediate | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-08 | question | intermediate | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-09 | question | advanced | CC, SI, TADS, TGTI, TRC | conforme |
| E26-Q-COM-10 | question | advanced | CC, SI, TADS, TGTI, TRC | conforme |
| E26-P-COM-01 | sequence | introductory | CC, SI, TADS, TGTI, TRC | conforme |

### 3.3 Ciência da Computação

| ID | Tipo | Dificuldade | Elegibilidade | Slot do plano |
|---|---|---|---|---|
| E26-Q-CC-01 | question | introductory | CC | conforme |
| E26-Q-CC-02 | question | introductory | CC | conforme |
| E26-Q-CC-03 | question | introductory | CC | conforme |
| E26-Q-CC-04 | question | intermediate | CC | conforme |
| E26-Q-CC-05 | question | intermediate | CC | conforme |
| E26-Q-CC-06 | question | intermediate | CC | conforme |
| E26-Q-CC-07 | question | intermediate | CC | conforme |
| E26-Q-CC-08 | question | intermediate | CC | conforme |
| E26-Q-CC-09 | question | advanced | CC | conforme |
| E26-Q-CC-10 | question | advanced | CC | conforme |
| E26-P-CC-01 | sequence | intermediate | CC | conforme |

### 3.4 Sistemas de Informação

| ID | Tipo | Dificuldade | Elegibilidade | Slot do plano |
|---|---|---|---|---|
| E26-Q-SI-01 | question | introductory | SI | conforme |
| E26-Q-SI-02 | question | introductory | SI | conforme |
| E26-Q-SI-03 | question | introductory | SI | conforme |
| E26-Q-SI-04 | question | intermediate | SI | conforme |
| E26-Q-SI-05 | question | intermediate | SI | conforme |
| E26-Q-SI-06 | question | intermediate | SI | conforme |
| E26-Q-SI-07 | question | intermediate | SI | conforme |
| E26-Q-SI-08 | question | intermediate | SI | conforme |
| E26-Q-SI-09 | question | advanced | SI | conforme |
| E26-Q-SI-10 | question | advanced | SI | conforme |
| E26-P-SI-01 | sequence | intermediate | SI | conforme |

### 3.5 Tecnologia em Análise e Desenvolvimento de Sistemas

| ID | Tipo | Dificuldade | Elegibilidade | Slot do plano |
|---|---|---|---|---|
| E26-Q-TADS-01 | question | introductory | TADS | conforme |
| E26-Q-TADS-02 | question | introductory | TADS | conforme |
| E26-Q-TADS-03 | question | introductory | TADS | conforme |
| E26-Q-TADS-04 | question | intermediate | TADS | conforme |
| E26-Q-TADS-05 | question | intermediate | TADS | conforme |
| E26-Q-TADS-06 | question | intermediate | TADS | conforme |
| E26-Q-TADS-07 | question | intermediate | TADS | conforme |
| E26-Q-TADS-08 | question | intermediate | TADS | conforme |
| E26-Q-TADS-09 | question | advanced | TADS | conforme |
| E26-Q-TADS-10 | question | advanced | TADS | conforme |
| E26-P-TADS-01 | sequence | introductory | TADS | conforme |

### 3.6 Tecnologia em Gestão da Tecnologia da Informação

| ID | Tipo | Dificuldade | Elegibilidade | Slot do plano |
|---|---|---|---|---|
| E26-Q-TGTI-01 | question | introductory | TGTI | conforme |
| E26-Q-TGTI-02 | question | introductory | TGTI | conforme |
| E26-Q-TGTI-03 | question | introductory | TGTI | conforme |
| E26-Q-TGTI-04 | question | intermediate | TGTI | conforme |
| E26-Q-TGTI-05 | question | intermediate | TGTI | conforme |
| E26-Q-TGTI-06 | question | intermediate | TGTI | conforme |
| E26-Q-TGTI-07 | question | intermediate | TGTI | conforme |
| E26-Q-TGTI-08 | question | intermediate | TGTI | conforme |
| E26-Q-TGTI-09 | question | advanced | TGTI | conforme |
| E26-Q-TGTI-10 | question | advanced | TGTI | conforme |
| E26-P-TGTI-01 | sequence | intermediate | TGTI | conforme |

### 3.7 Tecnologia em Redes de Computadores

| ID | Tipo | Dificuldade | Elegibilidade | Slot do plano |
|---|---|---|---|---|
| E26-Q-TRC-01 | question | introductory | TRC | conforme |
| E26-Q-TRC-02 | question | introductory | TRC | conforme |
| E26-Q-TRC-03 | question | introductory | TRC | conforme |
| E26-Q-TRC-04 | question | intermediate | TRC | conforme |
| E26-Q-TRC-05 | question | intermediate | TRC | conforme |
| E26-Q-TRC-06 | question | intermediate | TRC | conforme |
| E26-Q-TRC-07 | question | intermediate | TRC | conforme |
| E26-Q-TRC-08 | question | intermediate | TRC | conforme |
| E26-Q-TRC-09 | question | advanced | TRC | conforme |
| E26-Q-TRC-10 | question | advanced | TRC | conforme |
| E26-P-TRC-01 | sequence | intermediate | TRC | conforme |

## 4. Elegibilidade, cotas e capacidade das missões

### 4.1 Tabela por curso

| Curso | Questões elegíveis | Comuns | Específicas | Puzzles elegíveis | Comum | Específico | Resultado |
|---|---:|---:|---:|---:|---:|---:|---|
| CC | 20 | 10 | 10 | 2 | 1 | 1 | conforme |
| SI | 20 | 10 | 10 | 2 | 1 | 1 | conforme |
| TADS | 20 | 10 | 10 | 2 | 1 | 1 | conforme |
| TGTI | 20 | 10 | 10 | 2 | 1 | 1 | conforme |
| TRC | 20 | 10 | 10 | 2 | 1 | 1 | conforme |

As questões comuns declaram explicitamente os cinco cursos em `courses`; as específicas declaram somente o próprio curso. `COMUM` é uma classificação, não um valor de curso. Os puzzles permanecem fora das quantidades de questões.

### 4.2 Tabela de dificuldades das questões

| Conjunto | introductory | intermediate | advanced | Total |
|---|---:|---:|---:|---:|
| Comuns | 4 | 4 | 2 | 10 |
| CC específicas | 3 | 5 | 2 | 10 |
| SI específicas | 3 | 5 | 2 | 10 |
| TADS específicas | 3 | 5 | 2 | 10 |
| TGTI específicas | 3 | 5 | 2 | 10 |
| TRC específicas | 3 | 5 | 2 | 10 |
| **Elegíveis para CC** | **7** | **9** | **4** | **20** |
| **Elegíveis para SI** | **7** | **9** | **4** | **20** |
| **Elegíveis para TADS** | **7** | **9** | **4** | **20** |
| **Elegíveis para TGTI** | **7** | **9** | **4** | **20** |
| **Elegíveis para TRC** | **7** | **9** | **4** | **20** |

### 4.3 Compatibilidade com os modos

| Modo | Comuns | Específicas | Total | Capacidade por curso |
|---|---:|---:|---:|---|
| Missão rápida | 1 | 2 | 3 | disponível |
| Missão normal | 2 | 3 | 5 | disponível |
| Missão especial | 5 | 5 | 10 | disponível |
| Arena N9 | 10 | 10 | 20 | disponível, sem margem de reserva |

Não há insuficiência para os quatro tamanhos planejados. A Arena consome todo o banco elegível de um curso; por isso, não sobra questão para variar essa missão ou evitar itens respondidos recentemente. Essa limitação de margem está registrada no achado AUD-008 e não altera a conformidade quantitativa atual.

## 5. Gabaritos

### 5.1 Distribuição por lote

| Lote | Sequência 01–10 | A | B | C | D | E |
|---|---|---:|---:|---:|---:|---:|
| Comum | C/A/E/B/D/B/D/D/A/C | 2 | 2 | 2 | 3 | 1 |
| CC | D/A/C/E/B/B/D/A/E/D | 2 | 2 | 1 | 3 | 2 |
| SI | C/E/B/A/D/A/C/E/E/B | 2 | 2 | 2 | 1 | 3 |
| TADS | B/D/A/E/C/E/A/C/C/B | 2 | 2 | 3 | 1 | 2 |
| TGTI | E/C/B/D/A/D/E/B/B/C | 1 | 3 | 2 | 2 | 2 |
| TRC | D/A/E/C/B/A/D/D/E/C | 2 | 1 | 2 | 3 | 2 |

### 5.2 Distribuição nas vinte questões elegíveis

| Curso | A | B | C | D | E |
|---|---:|---:|---:|---:|---:|
| CC | 4 | 4 | 3 | 6 | 3 |
| SI | 4 | 4 | 4 | 4 | 4 |
| TADS | 4 | 4 | 5 | 4 | 3 |
| TGTI | 3 | 5 | 4 | 5 | 3 |
| TRC | 4 | 3 | 4 | 6 | 3 |

Há repetições adjacentes naturais — COM D/D em 07–08, SI E/E em 08–09, TADS C/C em 08–09, TGTI B/B em 08–09 e TRC D/D em 07–08 —, mas não foi detectado ciclo completo, alternância sistemática ou progressão previsível nos lotes. A posição correta coincide com uma alternativa de maior extensão em 27 de 60 questões; em 15 desses casos há empate de extensão. Esse resultado não configura, isoladamente, pista sistemática. Não se recomenda alterar gabaritos apenas para equilibrar letras.

## 6. Matrizes e rastreabilidade

| Escopo | Fonte normativa principal | Uso conferido | Fonte técnica/reprodução | Resultado |
|---|---|---|---|---|
| Formação Geral comum | Portaria Inep 154/2026, F05 | objetos e competências de Formação Geral | reprodução UFSJ/UFC; DOU individual indisponível | conforme, com limitação de acesso |
| Comum técnico | Portaria Inep 157/2026, F06, com corroboração F07–F10 | recorte comum documentado para os cinco cursos | reproduções Ufopa/ABMES e complementos técnicos | conforme no Markdown; perda potencial no JSON |
| CC | Portaria Inep 157/2026, F06 | matriz específica de CC | reprodução Ufopa e fontes técnicas primárias | conforme |
| SI | Portaria Inep 168/2026, F07 | matriz específica de SI | reprodução Ufopa e fontes técnicas primárias | conforme |
| TADS | Portaria Inep 169/2026, F08 | matriz específica de TADS | reprodução ABMES e fontes técnicas primárias | conforme |
| TGTI | Portaria Inep 171/2026, F09 | matriz específica de TGTI | reprodução ABMES e fontes técnicas primárias | conforme |
| TRC | Portaria Inep 172/2026, F10 | matriz específica de TRC | reprodução ABMES, RFCs/NIST | conforme |

As fichas distinguem adequadamente:

- **fonte normativa:** define matriz, objeto ou competência e não é apresentada como autora do cenário;
- **fonte técnica complementar:** sustenta conceito, cálculo, protocolo ou prática do domínio;
- **reprodução alternativa:** permite leitura do ato quando o original individual do DOU não foi recuperado, sem converter a entidade hospedeira em órgão emissor;
- **autoria:** cria contexto, dados, premissas, alternativas, feedbacks e dependências.

Não foi encontrada referência normativa associada ao curso errado. No lote de CC, a Portaria 172 aparece apenas na nota editorial sobre a divergência XI/XIII e não sustenta questão ou puzzle de CC. No lote de TRC, a conferência específica fecha em **XI — virtualização de redes, servidores, aplicativos e desktops** e **XIII — segurança da informação**. E26-Q-TRC-06 usa XI; E26-Q-TRC-07 usa XIII; E26-Q-TRC-09 e E26-P-TRC-01 também usam o recorte de proteção de XIII. Os objetos XII e XVI aparecem no recorte de automação e gerenciamento, sem confusão com XI ou XIII.

## 7. Qualidade das 60 questões

### 7.1 Resultado geral

Na leitura editorial, as 60 questões apresentam contexto suficiente para a decisão solicitada, cinco alternativas independentes, uma resposta defendida pela premissa e feedback específico A–E. As explicações delimitam o alcance da resposta e, em geral, rejeitam explicitamente as quatro famílias de erro. Não foi encontrada alternativa concorrente claramente correta sob as premissas declaradas.

As dificuldades acompanham a operação cognitiva planejada: itens introdutórios priorizam identificação e aplicação direta; intermediários exigem relação entre estados, evidências ou restrições; avançados combinam critérios, cálculos, dependências ou consequências. A classificação ainda é hipótese editorial e depende de resolução independente e calibração com estudantes.

Não foram detectadas contradições literais entre gabarito, explicação e feedback, nem dependência essencial de informação externa não fornecida. Quando uma regra é fictícia ou local, o enunciado a declara. Valores, unidades, tabelas e estados necessários aparecem no próprio item.

### 7.2 Extensão e uso no jogo

A contagem de contexto, enunciado e cinco alternativas identificou quatro itens acima de 300 palavras antes do feedback:

| ID | Palavras aproximadas | Observação |
|---|---:|---|
| E26-Q-TRC-09 | 372 | cenário multicritério e tabela extensa |
| E26-Q-TRC-10 | 318 | disponibilidade, capacidade e continuidade combinadas |
| E26-Q-TGTI-10 | 302 | recuperação e proteção com múltiplas condições |
| E26-Q-TRC-04 | 301 | topologia e tabela de roteamento detalhadas |

Outros cinco itens ficaram entre 250 e 299 palavras: E26-Q-COM-09, E26-Q-COM-10, E26-Q-SI-10, E26-Q-TGTI-09 e E26-Q-TRC-08. A extensão não torna o conteúdo incorreto, mas aumenta carga de leitura, rolagem e navegação entre texto e alternativas em telas pequenas. A redução deve ser feita somente após teste de compreensão, sem retirar premissas que garantem a unicidade.

## 8. Auditoria dos seis puzzles

| ID | Curso | Dificuldade | Blocos | Dicas | Método de unicidade | Resultado |
|---|---|---|---:|---:|---|---|
| E26-P-COM-01 | cinco cursos | introductory | 5 | 3 | artefatos: recuperar → conferir → montar → testar → publicar; 120 permutações possíveis reduzidas a uma cadeia válida | conforme |
| E26-P-CC-01 | CC | intermediate | 5 | 3 | árvore sintática → representação intermediária → grafo de fluxo → vivacidade → remover escrita morta; cadeia de consumo/produção e 120 permutações | conforme |
| E26-P-SI-01 | SI | intermediate | 5 | 3 | relato confirmado → conciliação → cálculo → autorização → registro; cadeia de artefatos e 120 permutações | conforme |
| E26-P-TADS-01 | TADS | introductory | 5 | 3 | separar → limpar → validar → agrupar/paginar → visualizar; pré e pós-condições e 120 permutações | conforme |
| E26-P-TGTI-01 | TGTI | intermediate | 5 | 3 | coorte → classificação → cálculo → verificação → decisão; estados de governança e 120 permutações | conforme |
| E26-P-TRC-01 | TRC | intermediate | 5 | 3 | referência → candidato → aplicação provisória → testes → decisão; mudança reversível e 120 permutações | conforme |

Em todos os puzzles, `correctOrder` contém cada ID de bloco uma vez e é uma permutação completa. A unicidade foi verificada por dois critérios: enumeração conceitual das 5! = 120 ordens e satisfação cumulativa das quatro dependências adjacentes declaradas. Apenas a ordem cadastrada produz todos os artefatos ou estados necessários no modelo fechado. Isso demonstra unicidade dentro das premissas documentadas; não prova que o procedimento seja universal fora do cenário.

As narrativas declaram o estado inicial, o caminho de sucesso e o limite do modelo. As três dicas de cada puzzle progridem de relação geral para dependência próxima sem listar a solução completa. Há feedback textual de erro e explicação final de sucesso. As especificações preveem cartões, foco, botões de mover, teclado, toque, anúncio de posição e equivalência textual, sem exigir arraste, cor, som ou cronômetro. A homologação na interface futura permanece pendente.

## 9. Originalidade interna

### 9.1 Resultados automatizados

- 66 títulos normalizados: nenhuma duplicação literal;
- 300 alternativas normalizadas: nenhuma duplicação literal integral;
- 66 IDs: nenhuma repetição;
- nenhuma ocorrência do termo reservado nos títulos ou textos ao jogador;
- nenhum puzzle reutiliza o mesmo conjunto de blocos, artefatos ou ordem textual.

### 9.2 Comparação editorial

Há famílias estruturais legítimas — leitura de tabela, decisão por restrições, diagnóstico por evidência, comparação de alternativas e ordenação de estados —, mas cenários, dados, premissas, conceitos centrais e erros-alvo diferem. Foram observadas proximidades de forma, sem caracterizar duplicação:

- E26-Q-COM-09, E26-Q-SI-09, E26-Q-TGTI-09, E26-Q-TGTI-10, E26-Q-TRC-09 e E26-Q-TRC-10 usam restrições ou capacidade, porém avaliam operações distintas;
- E26-Q-CC-08, E26-Q-TGTI-10 e E26-Q-TRC-10 tratam continuidade ou disponibilidade, com modelos técnicos e decisões diferentes;
- os seis puzzles seguem a forma geral preparar/verificar/decidir, mas produzem artefatos próprios de recuperação, compilação, processo informacional, transformação de dados, indicador de gestão e mudança de rede.

Não foi identificada duplicação literal, paráfrase excessivamente próxima ou substituição superficial de nomes entre os lotes. **O cotejo externo independente com provas, bancos, livros, artigos e conteúdo público ainda é pendente**; a ausência de coincidência interna não demonstra ineditismo universal.

## 10. Acessibilidade e linguagem

Os textos usam linguagem profissional, direta e sem atribuição de incapacidade a grupos. Regras, unidades, estados e decisões aparecem em texto; nenhuma resposta depende exclusivamente de cor, som, movimento ou posição visual. Tabelas têm cabeçalhos e os puzzles preveem alternativa por botões e teclado ao arraste.

As fichas separam rastreabilidade interna da experiência. O termo reservado não aparece em títulos, narrativas, contextos, enunciados, alternativas, explicações, feedbacks, blocos ou dicas destinados ao jogador. Ele permanece somente na documentação interna, no identificador da coleção, na origem pedagógica e nas fontes, uso permitido pelo posicionamento do projeto.

O material documental não permite homologar foco, ordem de leitura, anúncios por leitor de tela, reflow, zoom, contraste, alvo de toque ou retorno de erro na interface final. Essa verificação depende da conversão e integração futuras, registradas no achado AUD-006.

## 11. Contratos, schemas e futura conversão

### 11.1 Validação em memória

Os 60 objetos reconstruídos passaram em `question.schema.json`; os seis puzzles passaram em `puzzles.schema.json`. As referências de metadados passaram em `editorial.schema.json`. Também foram conferidos:

- classificações somente `COMUM`, `CC`, `SI`, `TADS`, `TGTI` e `TRC`;
- cursos somente `CC`, `SI`, `TADS`, `TGTI` e `TRC`, sem repetição;
- dificuldades somente `introductory`, `intermediate` e `advanced`;
- `source.type` igual a `official-reference` nos 66 itens;
- URLs HTTP/HTTPS, ano 2026 e `documentId` não vazio;
- competências não vazias;
- cinco alternativas A–E e feedbacks A–E em cada questão;
- `correctOptionId` presente nas alternativas;
- puzzles com cinco blocos, ordem única, três dicas, recompensa positiva e desbloqueio conhecido;
- `collectionId` existente no catálogo;
- estado único `provisional-pending-teacher-review`.

### 11.2 Informações que não cabem diretamente nos objetos estritos

`additionalProperties: false` deve ser preservado. Por isso, uma conversão direta não pode adicionar propriedades documentais não previstas. Ficariam de fora:

- nas questões: título editorial, código do slot/área, objetivo pedagógico, localizadores detalhados, fontes complementares, notas de originalidade, ambiguidades, checklist e formulário docente;
- nos puzzles: versão editorial documental, objetivo, localizadores detalhados, fontes complementares, prova documental de unicidade, especificação de acessibilidade, checklist e formulário docente;
- em ambos: histórico de decisões e mais de uma fonte estruturada, pois `source` é singular.

O texto essencial executável cabe nos contratos; a perda está na governança e rastreabilidade editorial. Antes do JSON, o projeto deve decidir entre um manifesto editorial separado, um pipeline de importação que preserve esses dados fora do objeto executável ou uma evolução futura de contrato feita em etapa própria. Esta auditoria não escolhe nem implementa a solução.

## 12. Achados classificados

### AUD-001 — Perda de metadados editoriais na conversão direta

- **Arquivo e IDs afetados:** os sete lotes; todos os 66 IDs.
- **Descrição:** os schemas estritos não comportam toda a ficha editorial necessária à governança.
- **Evidência:** `Question` não possui título, objetivo, rastreabilidade, fontes complementares, checklist ou parecer; `SequencePuzzle` não possui versão, objetivo, rastreabilidade estruturada, fontes complementares ou prova de unicidade. `additionalProperties: false` rejeita acréscimos.
- **Gravidade:** alta.
- **Correção recomendada:** definir, antes da conversão, manifesto editorial separado ou pipeline de mapeamento com rastreabilidade preservada; manter o JSON executável estrito.
- **Revisão docente:** não para a solução técnica; sim para confirmar que nenhum dado pedagógico relevante foi perdido no mapeamento final.

### AUD-002 — Corroboração normativa multcurso não representável em `source`

- **Arquivo e IDs afetados:** `lote-comum-02.md`, E26-Q-COM-07, E26-Q-COM-08 e E26-Q-COM-10; `lote-comum-01.md`, E26-P-COM-01.
- **Descrição:** os itens técnicos comuns usam F06 como fonte principal e documentam F07–F10 como corroboração obrigatória; o contrato admite apenas um objeto `source`.
- **Evidência:** as fichas listam cinco cursos e registram corroboração específica, mas uma futura serialização preservaria somente F06 se não houver mecanismo externo.
- **Gravidade:** alta.
- **Correção recomendada:** preservar a tabela de corroboração em manifesto editorial ou codificar referência completa em mecanismo aprovado sem criar propriedade desconhecida.
- **Revisão docente:** sim, para confirmar que o recorte permanece realmente comum aos cinco cursos.

### AUD-003 — Extensão elevada para leitura em jogo e tela pequena

- **Arquivo e IDs afetados:** E26-Q-TRC-09, E26-Q-TRC-10, E26-Q-TGTI-10 e E26-Q-TRC-04; monitorar também E26-Q-COM-09, E26-Q-COM-10, E26-Q-SI-10, E26-Q-TGTI-09 e E26-Q-TRC-08.
- **Descrição:** quatro itens excedem 300 palavras antes do feedback e cinco ficam entre 250 e 299.
- **Evidência:** contagem automatizada de contexto, enunciado e alternativas; máximo de 372 palavras em E26-Q-TRC-09.
- **Gravidade:** média.
- **Correção recomendada:** teste de leitura em celular e redução controlada de redundâncias, preservando dados e premissas de unicidade.
- **Revisão docente:** sim.

### AUD-004 — Ausência esperada de resolução independente e aprovação docente

- **Arquivo e IDs afetados:** todos os sete lotes; todos os 66 IDs.
- **Descrição:** checklists mantêm pendente a resolução sem gabarito, calibração de dificuldade, aderência a PPC e parecer docente.
- **Evidência:** os 66 itens estão em `provisional-pending-teacher-review`; nenhum formulário registra aprovação.
- **Gravidade:** média.
- **Correção recomendada:** aplicar rodada controlada por curso, registrar decisões por ID e mudar status apenas após parecer explícito.
- **Revisão docente:** sim, obrigatória.

### AUD-005 — Limitação de acesso às versões certificadas e retificações

- **Arquivo e IDs afetados:** os sete lotes; todos os 66 IDs por dependerem de F05–F10.
- **Descrição:** os links individuais do DOU apresentaram erro 502 durante a autoria; a leitura usou reproduções identificadas.
- **Evidência:** limitações registradas nos lotes e no plano; Ufopa, UFC/UFSJ e ABMES são hospedeiras, não órgãos emissores.
- **Gravidade:** média.
- **Correção recomendada:** antes da aprovação, reconferir original certificado, vigência, publicação e eventuais retificações; manter distinção entre emissor e hospedeiro.
- **Revisão docente:** sim, com apoio institucional/editorial.

### AUD-006 — Acessibilidade especificada, mas não homologada

- **Arquivo e IDs afetados:** todos os 66 IDs, com atenção aos seis puzzles e aos nove itens extensos do AUD-003.
- **Descrição:** o Markdown prevê alternativas acessíveis, mas não existe apresentação integrada desses conteúdos para teste efetivo.
- **Evidência:** checklists deixam pendentes foco, leitor de tela, reflow, contraste, alvo de toque e anúncio de reordenação.
- **Gravidade:** média.
- **Correção recomendada:** após integração autorizada, executar teste por teclado, leitor de tela, zoom/reflow e toque, sem depender só de arraste ou cor.
- **Revisão docente:** não necessariamente; requer avaliação de acessibilidade e validação com usuários, além de revisão pedagógica dos textos.

### AUD-007 — Cotejo externo de originalidade pendente

- **Arquivo e IDs afetados:** todos os sete lotes; todos os 66 IDs.
- **Descrição:** a auditoria interna não substitui comparação independente com fontes externas.
- **Evidência:** não há duplicação literal interna, mas os próprios lotes registram o limite; esta etapa não realizou pesquisa externa.
- **Gravidade:** baixa.
- **Correção recomendada:** executar cotejo independente antes de aprovação/publicação, documentando método, corpus e decisão por semelhança relevante.
- **Revisão docente:** sim, acompanhada de revisão editorial.

### AUD-008 — Capacidade exata, sem reserva para a Arena N9

- **Arquivo e IDs afetados:** plano e conjunto das 60 questões; impacto agregado em CC, SI, TADS, TGTI e TRC.
- **Descrição:** cada curso tem exatamente 20 questões elegíveis, quantidade consumida integralmente pela Arena.
- **Evidência:** dez comuns mais dez específicas por curso; nenhuma questão sobra para rotação ou exclusão de respondidas recentemente.
- **Gravidade:** baixa.
- **Correção recomendada:** manter a Arena tecnicamente disponível com o banco atual e planejar expansão posterior antes de prometer variedade ou não repetição entre missões.
- **Revisão docente:** sim, caso a correção envolva novos conteúdos.

## 13. Síntese por prontidão

### 13.1 Itens aprovados sem ressalva estrutural nesta auditoria

Os **66 IDs** foram aprovados sem ressalva nas dimensões de inventário, identificação, tipo, slot, curso, dificuldade, estado, coleção, presença de campos obrigatórios e validação em memória. Isso não equivale a aprovação pedagógica nem altera `validationStatus`.

Também foram aprovados sem ressalva estrutural:

- os 60 conjuntos de cinco alternativas e feedbacks A–E;
- as seis permutações completas de cinco blocos;
- as cotas 10+10 por curso;
- a distribuição 7/9/4 por curso;
- a ausência do termo reservado nos textos ao jogador;
- a associação entre cada curso e sua portaria específica.

### 13.2 Itens que precisam de correção antes do JSON

- todos os 66 IDs, pela decisão técnica do AUD-001;
- E26-Q-COM-07, E26-Q-COM-08, E26-Q-COM-10 e E26-P-COM-01, adicionalmente pelo AUD-002.

O AUD-003 recomenda ajuste antes de disponibilizar no jogo, mas não impede a preservação documental dos textos. Os demais achados são condições de revisão, homologação ou expansão, não falhas de schema dos objetos reconstruídos.

### 13.3 Pendências que dependem dos docentes

- resolver cada questão sem acesso ao gabarito e registrar unicidade;
- testar cada puzzle com ordens alternativas e validar as dependências;
- confirmar dificuldade e adequação ao perfil das turmas;
- confirmar matriz, localizadores, PPC e enquadramento institucional;
- revisar a corroboração dos itens comuns técnicos nos cinco cursos;
- decidir ajustes de extensão sem retirar premissas;
- conferir fontes certificadas e eventuais retificações;
- participar do cotejo externo de originalidade;
- emitir parecer por ID antes de qualquer mudança para `approved-teacher`.

## 14. Verificações executadas

| Verificação | Resultado |
|---|---|
| Extração documental agregada | 66/66 itens; sem erro de parse |
| Comparação com o plano | sem ausentes, extras ou duplicados |
| Schema de questões em memória | 60/60 válidas |
| Schema de puzzles em memória | 6/6 válidos |
| Catálogo de coleções | `enade-2026` existente |
| Permutação dos puzzles | 6/6 completas e sem repetição |
| Busca em textos ao jogador | zero ocorrência do termo reservado |
| Duplicação literal de títulos | zero |
| Duplicação literal de alternativas | zero entre 300 alternativas |
| Testes de contrato do projeto | 4 arquivos e 113 testes aprovados (`npm.cmd run validate:content`) |
| Lint | aprovado, sem erro ou advertência (`npm.cmd run lint`) |
| Diff final | somente este relatório |

## 15. Decisão final

**APTO COM CORREÇÕES.**

Justificativa: o banco está completo, coerente com o plano, elegível nos cinco cursos e válido contra os contratos atuais. Não há bloqueador de inventário, cota, schema ou associação normativa. Antes da conversão, porém, é obrigatório resolver AUD-001 e AUD-002 para evitar perda de governança e rastreabilidade. Antes de uso pedagógico aprovado, devem ser tratados os achados de revisão docente, fonte, extensão, acessibilidade e originalidade externa. Nenhum item deve ser apresentado como aprovado ou oficial nesta situação.
