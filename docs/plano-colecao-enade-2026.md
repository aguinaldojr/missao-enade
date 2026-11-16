# N9 — Jornada Digital: plano da primeira coleção pedagógica

> **Registro da governança anterior.** Este plano preserva os estados e formulários vigentes quando os 66 slots foram planejados. Desde 16/11/2026, `provisional-pending-teacher-review` é lido como `under-ai-review` e `approved-teacher` como `ready-for-pilot`, conforme [governanca-editorial-ia.md](governanca-editorial-ia.md). Os localizadores, objetivos, dificuldades, cotas e IDs abaixo não foram reescritos.

Versão de planejamento: 2.1 — 13/11/2026, horário de Brasília. Identificador interno: `enade-2026`. A revisão 2.1 preserva os 66 slots e atualiza somente a futura representação de fontes e rastreabilidade após a auditoria geral.

**Estado de todo conteúdo proposto: `provisional-pending-teacher-review`.** Este documento não contém questões completas, JSON definitivo, aprovação pedagógica nem implementação. N9 é uma identidade provisória, sujeita à aprovação institucional.

## 1. Resumo executivo

A primeira coleção propõe uma jornada de investigação e recuperação de serviços em um campus fictício. A comunicação com estudantes enfatiza resolver problemas, compreender decisões e experimentar soluções. ENADE identifica a origem pedagógica interna, sem definir a identidade pública do jogo como simulado ou preparação exclusiva para uma prova.

O banco planejado contém **60 questões contextualizadas únicas no contrato question: dez comuns aos cinco cursos e dez específicas por curso**. Cada curso terá vinte questões elegíveis: dez comuns e dez próprias. Há, separadamente, **seis quebra-cabeças sequence**, um comum e um por curso; cada curso terá dois puzzles elegíveis, sem incluí-los na contagem das questões. São 66 slots de autoria compatíveis com contratos existentes, ainda sem conteúdo completo, aprovação, importação ou ativação no jogo. A missão mista reutiliza uma questão e uma sequência; não acrescenta itens ao banco. A coleção não pretende cobrir integralmente as matrizes nacionais ou os PPCs da UNINOVE.

Os cinco cursos possuem diretrizes específicas confirmadas para 2026: CC — Portaria 157; SI — 168; TADS — 169; TGTI — 171; TRC — 172. A Formação Geral é disciplinada pela Portaria 154. Não se utiliza a matriz de um curso como substituta de outro [F00, F05–F10]. O enquadramento de cada oferta concreta da UNINOVE permanece sujeito à conferência institucional [F01, F03, F04].

O banco permitirá planejar missões de três, cinco, dez ou vinte questões; esses modos ainda dependem de integração técnica. Cada curso dispõe de sete questões introductory, nove intermediate e quatro advanced, como proposta editorial, sem peso oficial do ENADE. Depuração interativa, configuração simulada, modelagem visual, análise interativa, priorização com empates e simuladores de gestão ficam exclusivamente no backlog.

O horizonte conserva as 39 áreas do documento-base, reorganizadas em nove áreas universais, dez compartilhadas por grupos e vinte prioritárias de curso. A classificação universal de fundamentos técnicos é uma inferência pedagógica sobre interseções documentadas, não uma matriz específica comum publicada pelo Inep.

## 2. Metodologia e critérios

### 2.1 Leitura e precedência

Foram lidos integralmente os cinco documentos disponíveis no projeto: `referencias-enade-2026.md`, `matriz-pedagogica.md`, `docs/estrutura-dados-desafios.md`, `docs/exemplo-desafios.json` e `docs/especificacao-missao-mista.md`. Foram usadas as versões da raiz para os dois primeiros; as cópias em `docs/fontes` não são tratadas como fontes independentes.

A pesquisa web desta entrega foi realizada em **13/11/2026**. Foram confrontados o índice oficial de legislação, atos de 2026, notícia recente do Inep, referências curriculares do MEC e o catálogo tecnológico. O DOU apresentou falhas de recuperação em páginas individuais; foram preservados seus URLs e consultadas reproduções identificadas em universidades federais e na ABMES. A existência das portarias foi conferida no índice oficial. Não se declara acesso bem-sucedido ao texto certificado do DOU quando houve falha.

A norma vigente orienta o conteúdo; os documentos locais orientam organização e contratos. A matriz anterior propunha 111 questões e seis fases futuras. **Este plano dimensiona um banco de 60 questões e seis sequências**, sem somar automaticamente os orçamentos anteriores. Todo slot do lote atual utiliza question ou sequence. Interações sem contrato executável ficam somente no backlog. A revisão 2.0 altera o planejamento editorial e preserva a pesquisa normativa de 13/11/2026; não representa nova auditoria web nem mudança do runtime.

### 2.2 Quatro situações de evidência

| Situação | Uso neste plano |
|---|---|
| confirmada oficialmente para 2026 | Inclusão da área, diretriz e objeto explicitamente previstos nos atos de 2026. |
| baseada em edição anterior | Características observadas em prova, gabarito, padrão ou mapa de outra edição; nunca regra de 2026. |
| inferência pedagógica | Agrupamento, habilidade observável do jogo, prioridade, dificuldade, interação, narrativa e pré-requisito propostos pela equipe. |
| pendente de confirmação | Enquadramento institucional, alinhamento a PPC não fornecido, validação docente, esclarecimentos e publicações futuras. |

Essas situações pertencem ao registro documental de evidências; **não são valores de `validationStatus`**. A presença de um objeto oficial não torna um desafio validado. Os títulos e competências das áreas são sínteses internas, não redações ou códigos oficiais novos.

### 2.3 Contratos editoriais e expansão

| Campo compartilhado | Decisão para a elaboração posterior |
|---|---|
| `collectionId` | `enade-2026`, já descrita como coleção `planned` no contrato local. |
| `pedagogicalOrigin` | Texto: “Referenciais oficiais do Enade 2026; elaboração autoral inédita para a Jornada Digital.” Não é enumeração nem título público. |
| `courses` | Somente `CC`, `SI`, `TADS`, `TGTI`, `TRC`, explicitamente enumerados, sem repetição. Nunca `COMUM` nessa lista. |
| `area` | Nome descritivo da área principal. Os IDs deste plano são referências editoriais, sem importar `areas.json` ou criar campo adicional no objeto. |
| `competencies` | Textos não vazios; transpor a síntese pertinente ao curso e o objetivo revisado. IDs internos do mapa servem apenas à rastreabilidade documental. |
| `difficulty` | Apenas `introductory`, `intermediate`, `advanced`. Na matriz legada, D1/D2/D3 são convertidos respectivamente a esses valores como estimativa inicial. |
| `sources` | Lista estrita com exatamente uma fonte `primary`; admite `normative-complementary` e `technical`. Cada fonte contém `type`, `description` e, opcionalmente, `url`, `year`, `documentId`. |
| `traceability` | Bloco estrito com título editorial, objetivo e localizadores. Opcional no contrato geral por compatibilidade, mas obrigatório na conversão desta coleção. |
| `validationStatus` | `provisional-pending-teacher-review` em todas as propostas desta entrega. |

Tipos de fonte permitidos: `official-reference`, `institutional`, `authorial`, `fictional`. Nos slots, a fonte primária prevista é `official-reference`: `description` esclarecerá que a referência normativa orienta uma criação autoral, sem autoria ou chancela do Inep. A narrativa pode ser fictícia sem converter a portaria em fonte fictícia. Corroborações normativas e fontes técnicas são preservadas em `sources` com seus papéis; justificativas, riscos e pareceres continuam na ficha editorial. PPC futuro poderá fundamentar fonte `institutional`; criação sem referência externa poderá usar `authorial`; exemplos de demonstração fictícios preservam `fictional`.

Os outros estados aceitos pelo contrato são `needs-revision`, `approved-teacher` e `rejected`; nenhum deles é atribuído nesta etapa. O ciclo `planned` da coleção e eventual `mode: pilot` de catálogo não aprovam nem publicam conteúdo automaticamente.

Question exige cinco alternativas A–E, uma correta, explicação e feedback por alternativa. SequencePuzzle admite somente `kind: sequence`, 4–7 blocos, uma permutação completa como ordem e ao menos três dicas distintas. Uma sequência só é adequada se houver dependências que sustentem a ordem única; não forçar ordem arbitrária para decisões com soluções equivalentes.

Depuração, configuração, modelagem e decisões são **descrições pedagógicas de interação**, não novos valores de `kind` ou de referência de missão. Experiências que excedam question/sequence exigem projeto técnico posterior. A arquitetura editorial permite outras origens por coleção, sem vincular conteúdos permanentemente ao Enade: PPCs, disciplinas, nivelamento, projetos integradores e certificações terão identificação, fonte, elegibilidade e revisão próprias. A execução dessas coleções e novas interações ainda depende de trabalho futuro; este plano não cria modelos, schemas ou migrações.

### 2.4 Dimensionamento desta revisão

| Conjunto | Questões question | Puzzles sequence | Elegibilidade por curso |
|---|---:|---:|---|
| Comum aos cinco cursos | 10 | 1 | Dez questões e um puzzle |
| CC | 10 | 1 | Somente CC |
| SI | 10 | 1 | Somente SI |
| TADS | 10 | 1 | Somente TADS |
| TGTI | 10 | 1 | Somente TGTI |
| TRC | 10 | 1 | Somente TRC |
| **Banco único** | **60** | **6** | **66 slots de autoria; cada curso: vinte questões e dois puzzles** |

A divisão das questões é 4/4/2 no comum e 3/5/2 em cada curso, respectivamente introductory/intermediate/advanced. Cada percurso dispõe de 7/9/4 questões por dificuldade, sem obrigatoriedade de exibir vinte numa mesma partida. Sequências têm contagem e dificuldade separadas. O lote elimina a insuficiência quantitativa do planejamento anterior, sem transformar disponibilidade editorial em implementação ou aprovação.

Nenhum desafio completo foi escrito; nenhum JSON definitivo foi produzido; nenhum item está aprovado. A revisão limita-se ao Markdown e mantém os PPCs e o enquadramento institucional pendentes. Questões anteriores continuam servindo exclusivamente à análise.

## 3. Situação oficial de cada curso

| Curso UNINOVE | Grau e área nacional | Cine na Portaria 276 | Diretriz própria de 2026 | Situação e limite |
|---|---|---|---|---|
| CC | Bacharelado — Ciência da Computação | 0613C01 | Inep 157, de 14/04/2026, publicada em 16/04 | confirmada oficialmente para 2026; não confundir com licenciatura em Computação. |
| SI | Bacharelado — Sistemas de Informação | 0613S01 | Inep 168, mesmas datas | confirmada oficialmente para 2026; foco organizacional e informacional próprio. |
| TADS | Superior de tecnologia — Análise e Desenvolvimento de Sistemas | 0613S01 | Inep 169, mesmas datas | confirmada oficialmente para 2026; compartilhar Cine com SI não unifica área ou prova. |
| TGTI | Superior de tecnologia — Gestão da Tecnologia da Informação | 0612G01 | Inep 171, mesmas datas | confirmada oficialmente para 2026; gestão e continuidade orientam os recortes técnicos. |
| TRC | Superior de tecnologia — Redes de Computadores | 0612R01 | Inep 172, mesmas datas | confirmada oficialmente para 2026; aprofundamento de conectividade e operação. |

Fontes: F01, F03–F10. Não há, entre esses cinco cursos, ausência de diretriz própria de 2026 que justifique substituir a matriz atual por edição anterior. A inclusão nacional não confirma automaticamente inscrição, campus, modalidade, código e-MEC ou habilitação de estudantes da UNINOVE: esses pontos estão **pendentes de confirmação** pela coordenação.

O formato normativo reúne 15 objetivas de Formação Geral e, por área, 30 objetivas e uma discursiva específica, com duração regular de quatro horas [F04–F10]. A aplicação está anunciada para 29/11/2026, ainda futura nesta data [F13]. Isso contextualiza a origem; não define a duração, a pontuação ou a variedade de interações do jogo.

A expressão “Formação Geral Tecnológica” nos arts. 2º e parágrafo da Portaria 169 merece monitoramento. Seu art. 1º prevê o componente comum e não há base consultada para inventar uma segunda matriz exclusiva de TADS [F05, F08].

CC e SI têm como referência curricular a Resolução CNE/CES 5/2016. Para TADS, TGTI e TRC, considerar o CNCST e as diretrizes gerais da educação profissional e tecnológica, com os recortes de cada curso. Esses documentos curriculares complementam, sem substituir, as portarias específicas de prova [C01–C03]. Não foram fornecidos PPCs oficiais atuais das cinco ofertas da UNINOVE.

## 4. Fontes consultadas

Os IDs F preservam os identificadores dos documentos-base. Todos os URLs abaixo são diretos para o ato, página ou arquivo identificado. **Data de consulta web: 13/11/2026**; datas de edição, ato e publicação são distintas. Datas herdadas do levantamento local são identificadas como tais quando não foram novamente verificadas.

### 4.1 Referências normativas e curriculares

| ID | Título e órgão | Publicação/atualização | Curso/área | Situação e uso | URL direta |
|---|---|---|---|---|---|
| F00 | Legislação Enade 2026 — Inep | Publicação 20/01/2026; atualização 27/10/2026 segundo documento-base | Todos | confirmada oficialmente para 2026; índice reconferido nesta entrega | https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade/2026 |
| F01 | Portaria MEC 276, de 27/03/2026 — MEC | DOU 30/03/2026 | Cinco áreas | confirmada oficialmente para 2026; inclusão, grau e Cine; MEC Normas consultado, DOU indisponível na recuperação | https://www.in.gov.br/web/dou/-/portaria-mec-n-276-de-27-de-marco-de-2026-696054487 ; https://mecnormas.mec.gov.br/pesquisa/detalhar/9174 |
| F03 | Edital Inep 49/2026 republicado — Inep | DOU 10/08/2026, segundo documento-base | Todos | confirmada oficialmente para 2026 na pesquisa-base; referência operacional, sem nova auditoria integral nesta entrega | https://www.in.gov.br/en/web/dou/-/edital-n-49-de-24-de-abril-de-2026-%2A-724453033 |
| F04 | Edital Inep 61, de 14/05/2026 — Inep | DOU 15/05/2026, segundo documento-base | Bacharelados/tecnólogos | confirmada oficialmente para 2026; referência de formato e procedimentos, não regra de jogo | https://www.in.gov.br/web/dou/-/edital-n-61-de-14-de-maio-de-2026-705977430 |
| F05 | Portaria Inep 154, de 14/04/2026 — Inep | DOU 16/04/2026, seção 1, p. 90 | Formação Geral dos cinco cursos | confirmada oficialmente para 2026; arts. 4º–6º; índice oficial e reprodução consultados | https://www.in.gov.br/web/dou/-/portaria-n-154-de-14-de-abril-de-2026-699921720 ; https://ec.ufc.br/wp-content/uploads/2026/04/diretrizes-prova-formacao-geral.pdf |
| F06 | Portaria Inep 157, de 14/04/2026 — Inep | DOU 16/04/2026, seção 1, p. 91 | CC | confirmada oficialmente para 2026; arts. 4º–6º lidos em reprodução Ufopa | https://www.in.gov.br/web/dou/-/portaria-n-157-de-14-de-abril-de-2026-699947879 ; https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/e402e087-9a8b-4409-84da-4c0cf7533472.pdf |
| F07 | Portaria Inep 168, de 14/04/2026 — Inep | DOU 16/04/2026, seção 1, p. 96 | SI | confirmada oficialmente para 2026; arts. 4º–6º lidos em reprodução Ufopa | https://www.in.gov.br/web/dou/-/portaria-n-168-de-14-de-abril-de-2026-699946315 ; https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| F08 | Portaria Inep 169, de 14/04/2026 — Inep | DOU 16/04/2026, seção 1, p. 96 | TADS | confirmada oficialmente para 2026; arts. 4º–6º lidos em reprodução ABMES, que não é órgão emissor | https://www.in.gov.br/en/web/dou/-/portaria-n-169-de-14-de-abril-de-2026-699920629 ; https://abmes.org.br/arquivos/legislacoes/Portaria-inep-169-2026-04-14.pdf |
| F09 | Portaria Inep 171, de 14/04/2026 — Inep | DOU 16/04/2026, seção 1, p. 97 | TGTI | confirmada oficialmente para 2026; arts. 4º–6º lidos em reprodução ABMES | https://www.in.gov.br/web/dou/-/portaria-n-171-de-14-de-abril-de-2026-699946786 ; https://abmes.org.br/arquivos/legislacoes/Portaria-inep-171-2026-04-14.pdf |
| F10 | Portaria Inep 172, de 14/04/2026 — Inep | DOU 16/04/2026, seção 1, p. 98 | TRC | confirmada oficialmente para 2026; arts. 4º–6º lidos em reprodução ABMES | https://www.in.gov.br/web/dou/-/portaria-n-172-de-14-de-abril-de-2026-699944904 ; https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| F13 | Enade 2026: locais de prova estão disponíveis — Inep | Publicação 09/11; atualização 10/11/2026, segundo documento-base | Todos | confirmada oficialmente para 2026; notícia reconsultada, aplicação futura | https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enade/enade-2026-locais-de-prova-e-cartao-de-confirmacao-estao-disponiveis |
| C01 | Resolução CNE/CES 5, de 16/11/2016 — CNE/MEC | DOU 17/11/2016; página MEC atualizada 10/03/2026 | CC e SI | inferência pedagógica de alinhamento curricular a validar com PPC; norma curricular anterior, não matriz de prova anterior | https://www.gov.br/mec/pt-br/cne/pdf/normas-classificadas-por-assunto/diretrizes-curriculares-cursos-de-graduacao/rces005_16.pdf/view |
| C02 | CNCST, 4ª edição/2024; Portaria MEC 514, de 04/06/2024 — MEC/Setec | Aprovação publicada no DOU 06/06/2024; base oficial de cursos publicada/atualizada 23/04/2026 | TADS, TGTI e TRC | inferência pedagógica complementar; edição vigente identificada no portal de dados; extração individual dos perfis e adequação institucional pendentes | https://dadosabertos.mec.gov.br/cncst/item/352-2024-catalogo-de-cursos ; https://cncst.mec.gov.br/ |
| C03 | Resolução CNE/CP 1, de 05/01/2021 — CNE/MEC | DOU 06/01/2021 | Educação profissional e tecnológica | inferência pedagógica complementar; diretriz geral, sem atribuir a cada tecnólogo matriz idêntica | https://portal.mec.gov.br/dmdocuments/rcp001_21.pdf |

C01 foi localizada no índice e na página oficial; a recuperação do PDF direto encontrou proteção de acesso. O endpoint do relatório atualizado do CNCST também não foi recuperado. Por isso, nenhum objeto técnico novo deste plano é atribuído exclusivamente a uma suposta leitura integral desses dois documentos. A sustentação específica permanece em F06–F10 e na matriz local. C03 foi localizada em texto oficial e segue relacionada no portal Inep de legislação da EPT atualizado em 19/10/2026. A existência de grupo de revisão de diretrizes não equivale à publicação de uma norma substituta.

### 4.2 Fontes históricas e documentos locais

| ID | Título/órgão e data | Cursos | Situação e limite | URL ou arquivo |
|---|---|---|---|---|
| F14 | Provas e gabaritos 2021 — Inep; índice publicado 17/11/2021, atualizado 18/03/2022 na pesquisa-base; datas individuais dos PDFs não identificadas | Cinco cursos | baseada em edição anterior; inventário lido no documento-base; não houve nova classificação integral dos itens nesta entrega | https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos/2021 |
| F20 | Provas e gabaritos 2014 — Inep; edição 2014, datas individuais não identificadas | CC, SI, TADS, TRC | baseada em edição anterior; TGTI não deve receber substituto de outra área | https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos/2014 |
| F21 | Provas e gabaritos 2017 — Inep; edição 2017, datas individuais não identificadas | Cinco cursos | baseada em edição anterior; análise de estrutura, nunca cópia de item | https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos/2017 |
| F23 | Administração 2025: prova, gabarito e mapa — Inep; edição 2025, datas individuais não identificadas | Somente referência histórica de Formação Geral | baseada em edição anterior; análise das quinze questões consta da pesquisa-base; sem transferência de códigos de habilidade ou matriz específica | https://download.inep.gov.br/enade/provas_e_gabaritos/2025_administracao_PV_1.pdf ; https://download.inep.gov.br/enade/provas_e_gabaritos/2025_administracao_GB_1.pdf ; https://download.inep.gov.br/enade/provas_e_gabaritos/2025_MP_administracao.pdf |
| L01 | Referências oficiais — documento do projeto, v2, 12/11/2026; autoria institucional não identificada | Todos | Base documental fornecida; distingue evidências atuais, históricas e pendentes | `../referencias-enade-2026.md` |
| L02 | Matriz pedagógica — documento do projeto, v1, 12/11/2026 | Todos | inferência pedagógica; 39 áreas e objetivos; revisão docente pendente | `../matriz-pedagogica.md` |
| L03 | Estrutura dos dados — documento do projeto, 13/11/2026 | Todos | Contrato editorial atual; não comprova validade pedagógica | `estrutura-dados-desafios.md` |
| L04 | Exemplo de desafios — documento do projeto, data própria não declarada | Todos | Exemplo fictício pendente; não reutilizar como item inédito nem converter sua origem | `exemplo-desafios.json` |
| L05 | Especificação documental de missão mista — documento do projeto, 13/11/2026 | Todos | Contrato documental futuro, não implementação | `especificacao-missao-mista.md` |

F14/F20/F21/F23 são referências lidas por meio da análise e do inventário fornecidos; não são anunciadas como quatro novas auditorias dos acervos. Antes da autoria de cada slot, registrar a leitura efetiva do material histórico escolhido e sua página, se houver uso analítico. Nenhum slot depende de copiar uma questão histórica.

## 5. Mapa de competências

| Referência interna de síntese | Competência de referência | Cursos | Fonte/localizador |
|---|---|---|---|
| FG-I | Comunicar e interpretar com responsabilidade e diálogo | Todos | F05, art. 5º, I |
| FG-II | Examinar cenários e fundamentar decisões e soluções | Todos | F05, art. 5º, II |
| CC-I / CC-II | Construir/evoluir sistemas; gerir recursos e projetos computacionais | CC | F06, art. 5º, I/II |
| SI-I / SI-II | Avaliar TI em contextos sociais/organizacionais; gerir informação para decisão | SI | F07, art. 5º, I/II |
| TADS-I / TADS-II | Estruturar soluções pelo ciclo de software; arquitetar/implementar com qualidade | TADS | F08, art. 5º, I/II |
| TGTI-I / TGTI-II | Alinhar gestão de TI à organização; assegurar continuidade e proteção | TGTI | F09, art. 5º, I/II |
| TRC-I / TRC-II | Operar conectividade; projetar e avaliar redes | TRC | F10, art. 5º, I/II |

As referências acima são atalhos internos para sínteses, não códigos oficiais de novas competências. As habilidades observáveis nos catálogos seguintes são propostas do jogo, derivadas da matriz local. A fonte e os objetos sustentam a pertinência; não estabelecem prioridade ou dificuldade oficiais.

## 6. Conteúdos comuns aos cinco cursos

A Formação Geral tem abrangência universal expressa em F05. Redes, sistemas operacionais e segurança são interseções dos objetos de F06–F10; o compartilhamento exige limitar a demanda a fundamentos e fornecer as evidências necessárias. A confirmação dos objetos é oficial; a equivalência do recorte mínimo entre cursos é inferência pedagógica sujeita à revisão dos cinco representantes. Nenhuma configuração avançada, SQL ou desenvolvimento de software é exigido nos cinco slots comuns.

### COMUM-FG01 — Ética, cidadania e trabalho

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** Todos : Interpretar, produzir e compartilhar conteúdos com responsabilidade; examinar situações complexas para decidir e resolver problemas.
- **Habilidade (objetivo do jogo):** Avaliar condutas e consequências de uma decisão sobre direitos e condições de trabalho.
- **Objetos de conhecimento e recorte de elaboração:** Ética; democracia; cidadania; direitos humanos; Estado, sociedade e trabalho.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Análise de situações e questão reflexiva. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F05; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar pertinência social, pluralidade e linguagem inclusiva; não reduzir cidadania a memorização de norma.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F05 — arts. 4º–6º | Ética, democracia, cidadania e direitos humanos; Estado, sociedade e trabalho |
| SI | F05 — arts. 4º–6º | Ética, democracia, cidadania e direitos humanos; Estado, sociedade e trabalho |
| TADS | F05 — arts. 4º–6º | Ética, democracia, cidadania e direitos humanos; Estado, sociedade e trabalho |
| TGTI | F05 — arts. 4º–6º | Ética, democracia, cidadania e direitos humanos; Estado, sociedade e trabalho |
| TRC | F05 — arts. 4º–6º | Ética, democracia, cidadania e direitos humanos; Estado, sociedade e trabalho |

### COMUM-FG02 — Equidade, acessibilidade e inclusão

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** Todos : Interpretar, produzir e compartilhar conteúdos com responsabilidade; examinar situações complexas para decidir e resolver problemas.
- **Habilidade (objetivo do jogo):** Comparar soluções de participação social identificando barreiras e efeitos desiguais.
- **Objetos de conhecimento e recorte de elaboração:** Equidade étnico-racial, geracional, de classe, de gênero e de sexualidade; acessibilidade; inclusão social.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Análise de situações de acessibilidade. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F05; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar pertinência social, pluralidade e linguagem inclusiva; não reduzir cidadania a memorização de norma.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F05 — arts. 4º–6º | Equidade nas relações; acessibilidade e inclusão social |
| SI | F05 — arts. 4º–6º | Equidade nas relações; acessibilidade e inclusão social |
| TADS | F05 — arts. 4º–6º | Equidade nas relações; acessibilidade e inclusão social |
| TGTI | F05 — arts. 4º–6º | Equidade nas relações; acessibilidade e inclusão social |
| TRC | F05 — arts. 4º–6º | Equidade nas relações; acessibilidade e inclusão social |

### COMUM-FG03 — Clima, territórios e qualidade de vida

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** Todos : Interpretar, produzir e compartilhar conteúdos com responsabilidade; examinar situações complexas para decidir e resolver problemas.
- **Habilidade (objetivo do jogo):** Selecionar uma intervenção socioambiental sustentada por dados e contexto territorial.
- **Objetos de conhecimento e recorte de elaboração:** Mudanças climáticas; questões socioambientais; campo e cidade; qualidade de vida; territórios e diversidade cultural.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Decisão socioambiental com dados. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F05; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar pertinência social, pluralidade e linguagem inclusiva; não reduzir cidadania a memorização de norma.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F05 — arts. 4º–6º | Mudanças climáticas e questões socioambientais; campo, cidade e qualidade de vida; territórios, sociodiversidade e diversidade cultural |
| SI | F05 — arts. 4º–6º | Mudanças climáticas e questões socioambientais; campo, cidade e qualidade de vida; territórios, sociodiversidade e diversidade cultural |
| TADS | F05 — arts. 4º–6º | Mudanças climáticas e questões socioambientais; campo, cidade e qualidade de vida; territórios, sociodiversidade e diversidade cultural |
| TGTI | F05 — arts. 4º–6º | Mudanças climáticas e questões socioambientais; campo, cidade e qualidade de vida; territórios, sociodiversidade e diversidade cultural |
| TRC | F05 — arts. 4º–6º | Mudanças climáticas e questões socioambientais; campo, cidade e qualidade de vida; territórios, sociodiversidade e diversidade cultural |

### COMUM-FG04 — Educação, desenvolvimento e saúde

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** Todos : Interpretar, produzir e compartilhar conteúdos com responsabilidade; examinar situações complexas para decidir e resolver problemas.
- **Habilidade (objetivo do jogo):** Interpretar indicadores de acesso e escolher uma ação de desenvolvimento ou bem-estar coerente.
- **Objetos de conhecimento e recorte de elaboração:** Educação; desenvolvimento humano e social; saúde; bem-estar.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Questão contextualizada com tabela. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F05; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar pertinência social, pluralidade e linguagem inclusiva; não reduzir cidadania a memorização de norma.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F05 — arts. 4º–6º | Educação e desenvolvimento humano e social; saúde e bem-estar |
| SI | F05 — arts. 4º–6º | Educação e desenvolvimento humano e social; saúde e bem-estar |
| TADS | F05 — arts. 4º–6º | Educação e desenvolvimento humano e social; saúde e bem-estar |
| TGTI | F05 — arts. 4º–6º | Educação e desenvolvimento humano e social; saúde e bem-estar |
| TRC | F05 — arts. 4º–6º | Educação e desenvolvimento humano e social; saúde e bem-estar |

### COMUM-FG05 — Cultura e comunicação responsável

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** Todos : Interpretar, produzir e compartilhar conteúdos com responsabilidade; examinar situações complexas para decidir e resolver problemas.
- **Habilidade (objetivo do jogo):** Analisar linguagem, intenção e efeitos de uma mensagem em contexto sociocultural.
- **Objetos de conhecimento e recorte de elaboração:** Cultura; arte; comunicação; diálogo e troca de saberes.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Diálogo e análise de comunicação. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F05; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar pertinência social, pluralidade e linguagem inclusiva; não reduzir cidadania a memorização de norma.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F05 — arts. 4º–6º | Cultura, arte e comunicação |
| SI | F05 — arts. 4º–6º | Cultura, arte e comunicação |
| TADS | F05 — arts. 4º–6º | Cultura, arte e comunicação |
| TGTI | F05 — arts. 4º–6º | Cultura, arte e comunicação |
| TRC | F05 — arts. 4º–6º | Cultura, arte e comunicação |

### COMUM-FG06 — Ciência, tecnologia e relações globais

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** Todos : Interpretar, produzir e compartilhar conteúdos com responsabilidade; examinar situações complexas para decidir e resolver problemas.
- **Habilidade (objetivo do jogo):** Avaliar argumentos sobre inovação e cooperação internacional considerando consequências sociais.
- **Objetos de conhecimento e recorte de elaboração:** Ciência; tecnologia; inovação; globalização; política internacional.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Questão contextualizada sobre inovação. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F05; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar pertinência social, pluralidade e linguagem inclusiva; não reduzir cidadania a memorização de norma.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F05 — arts. 4º–6º | Ciência, tecnologia e inovação; globalização e política internacional |
| SI | F05 — arts. 4º–6º | Ciência, tecnologia e inovação; globalização e política internacional |
| TADS | F05 — arts. 4º–6º | Ciência, tecnologia e inovação; globalização e política internacional |
| TGTI | F05 — arts. 4º–6º | Ciência, tecnologia e inovação; globalização e política internacional |
| TRC | F05 — arts. 4º–6º | Ciência, tecnologia e inovação; globalização e política internacional |

### COMUM-TEC07 — Sistemas operacionais: fundamentos

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** CC II: Gerir recursos, projetos e sistemas; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software; TGTI II: Gerir soluções, continuidade e proteção de ativos; TRC I: Compreender e operar conectividade.
- **Habilidade (objetivo do jogo):** Relacionar uma falha de serviço a recursos administrados pelo sistema operacional.
- **Objetos de conhecimento e recorte de elaboração:** Funções básicas do sistema operacional; recursos e serviços.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Diagnóstico contextualizado de serviço. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09, F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisão pelos cinco cursos: verificar o recorte mínimo comum; excluir demanda de administração especializada, linguagem ou fabricante específico.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Sistemas operacionais |
| SI | F07 — arts. 4º–6º | Sistemas operacionais |
| TADS | F08 — arts. 4º–6º | Princípios de sistemas operacionais |
| TGTI | F09 — arts. 4º–6º | Sistemas operacionais |
| TRC | F10 — arts. 4º–6º | Administração de sistemas operacionais |

### COMUM-TEC08 — Redes: fundamentos de comunicação

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software; TGTI II: Gerir soluções, continuidade e proteção de ativos; TRC I: Compreender e operar conectividade.
- **Habilidade (objetivo do jogo):** Identificar evidências de uma falha simples de comunicação sem exigir configuração especializada.
- **Objetos de conhecimento e recorte de elaboração:** Comunicação entre componentes; evidências básicas de conectividade.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Análise de evidências de conectividade. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09, F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisão pelos cinco cursos: verificar o recorte mínimo comum; excluir demanda de administração especializada, linguagem ou fabricante específico.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Redes de computadores |
| SI | F07 — arts. 4º–6º | Redes de computadores |
| TADS | F08 — arts. 4º–6º | Princípios de redes de computadores |
| TGTI | F09 — arts. 4º–6º | Redes de computadores |
| TRC | F10 — arts. 4º–6º | Fundamentos, componentes e topologias; comunicação e transmissão de dados |

### COMUM-TEC09 — Proteção da informação: fundamentos

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI, TRC.
- **Competência (síntese da pesquisa):** CC II: Gerir recursos, projetos e sistemas; SI II: Gerir dados, informação e conhecimento; TADS II: Arquitetar e implementar software; TGTI II: Gerir soluções, continuidade e proteção de ativos; TRC II: Projetar e avaliar redes em operação.
- **Habilidade (objetivo do jogo):** Comparar medidas de proteção em função de um incidente e dos ativos afetados.
- **Objetos de conhecimento e recorte de elaboração:** Proteção de ativos; incidentes; medidas básicas de segurança.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Sequência de proteção da informação. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09, F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisão pelos cinco cursos: verificar o recorte mínimo comum; excluir demanda de administração especializada, linguagem ou fabricante específico.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Segurança da informação |
| SI | F07 — arts. 4º–6º | Segurança da informação e de sistemas de informação |
| TADS | F08 — arts. 4º–6º | Princípios de segurança cibernética |
| TGTI | F09 — arts. 4º–6º | Segurança da informação |
| TRC | F10 — arts. 4º–6º | Segurança da informação |

## 7. Conteúdos compartilhados por grupos de cursos

Os códigos legados COMUM abaixo designam compartilhamento parcial. A lista explícita de cursos governa a proposta: não concede acesso universal. Algoritmos, arquitetura, banco e engenharia de software têm sustentação em CC/SI/TADS/TGTI; programação, estruturas, lógica, estatística, IHC e distribuídos são limitados a CC/SI/TADS nesta seleção. TRC não recebe banco de dados por analogia com automação de redes. Um objeto amplo em TGTI também não justifica cobrar a mesma profundidade de implementação de TADS.

### COMUM-TEC01 — Algoritmos introdutórios

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software; TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Interpretar passos de um algoritmo e selecionar o resultado em um caso curto.
- **Objetos de conhecimento e recorte de elaboração:** Sequência de passos; decisões em algoritmo; rastreamento.
- **Prioridade / dificuldade:** P1 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Montagem de algoritmo por sequência. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Algoritmos e estruturas de dados |
| SI | F07 — arts. 4º–6º | Algoritmos e estruturas de dados |
| TADS | F08 — arts. 4º–6º | Algoritmos e programação |
| TGTI | F09 — arts. 4º–6º | Algoritmos |

### COMUM-TEC02 — Fundamentos de programação

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Localizar uma falha em condição ou repetição e prever o comportamento da correção.
- **Objetos de conhecimento e recorte de elaboração:** Condições; repetições; fundamentos de programação.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC01.
- **Tipo recomendado:** Depuração de código. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Fundamentos e técnicas; paradigmas de programação |
| SI | F07 — arts. 4º–6º | Fundamentos e paradigmas de linguagens de programação |
| TADS | F08 — arts. 4º–6º | Algoritmos e programação; orientação a objetos |

### COMUM-TEC03 — Estruturas de dados

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Selecionar uma estrutura conforme operações e restrições do caso.
- **Objetos de conhecimento e recorte de elaboração:** Organização de dados; seleção de estruturas; operações e restrições.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC01.
- **Tipo recomendado:** Montagem de algoritmo e seleção de estrutura. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Algoritmos e estruturas de dados / estruturas de dados |
| SI | F07 — arts. 4º–6º | Algoritmos e estruturas de dados / estruturas de dados |
| TADS | F08 — arts. 4º–6º | Algoritmos e estruturas de dados / estruturas de dados |

### COMUM-TEC04 — Lógica matemática

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Verificar a consistência de uma condição lógica a partir de premissas explícitas.
- **Objetos de conhecimento e recorte de elaboração:** Lógica matemática; condições e premissas.
- **Prioridade / dificuldade:** P2 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Quebra-cabeça de condições lógicas. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Lógica e matemática discreta |
| SI | F07 — arts. 4º–6º | Lógica matemática e matemática discreta |
| TADS | F08 — arts. 4º–6º | Lógica matemática e teoria dos conjuntos |

### COMUM-TEC05 — Estatística introdutória

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Interpretar um resumo estatístico sem extrapolar as evidências disponíveis.
- **Objetos de conhecimento e recorte de elaboração:** Estatística; interpretação de dados.
- **Prioridade / dificuldade:** P2 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Análise de situações com dados. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Probabilidade e estatística |
| SI | F07 — arts. 4º–6º | Probabilidade e estatística |
| TADS | F08 — arts. 4º–6º | Princípios de estatística e análise de dados |

### COMUM-TEC06 — Arquitetura e organização de computadores

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software; TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Relacionar componentes e recursos computacionais a uma necessidade apresentada.
- **Objetos de conhecimento e recorte de elaboração:** Arquitetura de computadores; recursos e restrições.
- **Prioridade / dificuldade:** P2 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Análise de recursos computacionais. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Organização e arquitetura de computadores |
| SI | F07 — arts. 4º–6º | Arquitetura e organização de computadores |
| TADS | F08 — arts. 4º–6º | Princípios de arquitetura e organização de computadores |
| TGTI | F09 — arts. 4º–6º | Arquitetura de computadores |

### COMUM-TEC10 — Bancos de dados

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI II: Gerir dados, informação e conhecimento; TADS II: Arquitetar e implementar software; TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Interpretar uma consulta simples e relacionar o resultado à necessidade do serviço.
- **Objetos de conhecimento e recorte de elaboração:** Organização de dados em banco; consulta simples; adequação à necessidade.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Modelagem de dados. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Bancos de dados |
| SI | F07 — arts. 4º–6º | Banco de dados |
| TADS | F08 — arts. 4º–6º | Banco de dados |
| TGTI | F09 — arts. 4º–6º | Banco de dados |

### COMUM-TEC11 — Engenharia e qualidade de soluções de software

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS, TGTI.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software; TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Comparar soluções de software com base em necessidade explícita e evidência de qualidade.
- **Objetos de conhecimento e recorte de elaboração:** Engenharia de software; adequação ao problema; qualidade da solução.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Análise de situações de qualidade. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08, F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Engenharia de software; especificar e validar sistemas |
| SI | F07 — arts. 4º–6º | Engenharia de software; avaliar qualidade de processos e produtos |
| TADS | F08 — arts. 4º–6º | Processo de software; qualidade, verificação e validação |
| TGTI | F09 — arts. 4º–6º | Engenharia de software; seleção, planejamento e implantação de sistemas |

### COMUM-TEC12 — Interação humano-computador

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Identificar uma barreira de interação e selecionar uma melhoria justificável.
- **Objetos de conhecimento e recorte de elaboração:** Interação; usabilidade; necessidades do usuário.
- **Prioridade / dificuldade:** P2 / introductory.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Inspeção de interação e acessibilidade. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Interação humano-computador |
| SI | F07 — arts. 4º–6º | Interação humano-computador |
| TADS | F08 — arts. 4º–6º | Interação humano-computador |

### COMUM-TEC13 — Sistemas distribuídos: fundamentos

- **Categoria interna / cursos relacionados:** COMUM / CC, SI, TADS.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais; SI I: Avaliar soluções de TI para problemas organizacionais e sociais; TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Analisar efeitos de distribuir um serviço entre componentes comunicantes.
- **Objetos de conhecimento e recorte de elaboração:** Distribuição de serviços; comunicação; restrições de operação.
- **Prioridade / dificuldade:** P2 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC08.
- **Tipo recomendado:** Análise de situações de distribuição. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06, F07, F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Confirmar demanda cognitiva por curso e distinguir reconhecer, implementar e gerir; excluir cursos sem evidência explícita.

Evidência de associação por curso, preservada da matriz local e confrontada com as diretrizes de 2026:

| Curso | Fonte | Objeto/recorte que sustenta o vínculo |
|---|---|---|
| CC | F06 — arts. 4º–6º | Sistemas distribuídos |
| SI | F07 — arts. 4º–6º | Redes de computadores e sistemas distribuídos |
| TADS | F08 — arts. 4º–6º | Princípios de redes de computadores e de sistemas distribuídos |

## 8. Conteúdos prioritários por curso

Prioritário significa ênfase desta trilha, não exclusividade profissional. Os quatro blocos de cada curso preservam o horizonte da matriz; a distribuição das dez questões e da sequência específica de cada curso está detalhada na seção 11. P1 indica prioridade de elaboração no horizonte inicial; P2 indica ampliação. Essas prioridades não são pesos do Inep. As dificuldades a seguir são do bloco; o slot poderá adotar um recorte menor, explicitamente indicado na seção 11.

### 8.1 CC

#### CC-01 — Teoria da computação e compiladores

- **Categoria interna / cursos relacionados:** CC / CC.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais.
- **Habilidade (objetivo do jogo):** Comparar modelos ou etapas de tradução reconhecendo seus limites no caso apresentado.
- **Objetos de conhecimento e recorte de elaboração:** Teoria da computação; compiladores.
- **Prioridade / dificuldade:** P1 / advanced.
- **Pré-requisitos recomendados:** COMUM-TEC01, COMUM-TEC04.
- **Tipo recomendado:** Sequência de tradução e análise de modelo. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar formalização, hipóteses e rigor; separar o recorte do slot da abrangência do bloco; não exigir ferramenta não prevista.

#### CC-02 — Modelagem matemática, grafos e probabilidade

- **Categoria interna / cursos relacionados:** CC / CC.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais.
- **Habilidade (objetivo do jogo):** Selecionar uma representação por grafo e avaliar uma propriedade ou hipótese probabilística.
- **Objetos de conhecimento e recorte de elaboração:** Matemática discreta; teoria dos grafos; probabilidade.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC04, COMUM-TEC05.
- **Tipo recomendado:** Quebra-cabeça de modelagem por grafo. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar formalização, hipóteses e rigor; separar o recorte do slot da abrangência do bloco; não exigir ferramenta não prevista.

#### CC-03 — Sistemas digitais e recursos computacionais

- **Categoria interna / cursos relacionados:** CC / CC.
- **Competência (síntese da pesquisa):** CC II: Gerir recursos, projetos e sistemas.
- **Habilidade (objetivo do jogo):** Analisar um circuito ou uma decisão de organização de recursos e seus efeitos.
- **Objetos de conhecimento e recorte de elaboração:** Sistemas digitais; organização de recursos; complexidade; localidade de referência; compartilhamento; concorrência; evolução.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC06, COMUM-TEC07.
- **Tipo recomendado:** Análise de circuito e recursos. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar formalização, hipóteses e rigor; separar o recorte do slot da abrangência do bloco; não exigir ferramenta não prevista.

#### CC-04 — Inteligência artificial, gráficos e imagens

- **Categoria interna / cursos relacionados:** CC / CC.
- **Competência (síntese da pesquisa):** CC I: Construir e evoluir sistemas computacionais.
- **Habilidade (objetivo do jogo):** Comparar abordagens de IA ou de processamento visual conforme o objetivo e as limitações do caso.
- **Objetos de conhecimento e recorte de elaboração:** Inteligência artificial; computação gráfica; processamento de imagem.
- **Prioridade / dificuldade:** P1 / advanced.
- **Pré-requisitos recomendados:** COMUM-TEC01, COMUM-TEC05.
- **Tipo recomendado:** Decisão técnica sobre IA ou imagem. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F06; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar formalização, hipóteses e rigor; separar o recorte do slot da abrangência do bloco; não exigir ferramenta não prevista.

### 8.2 SI

#### SI-01 — Arquitetura corporativa, informação e governança

- **Categoria interna / cursos relacionados:** SI / SI.
- **Competência (síntese da pesquisa):** SI I: Avaliar soluções de TI para problemas organizacionais e sociais.
- **Habilidade (objetivo do jogo):** Relacionar uma solução à arquitetura de negócio, à informação e aos objetivos organizacionais.
- **Objetos de conhecimento e recorte de elaboração:** Arquitetura corporativa; arquitetura da informação; governança de TI.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Decisão sobre arquitetura corporativa. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F07; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar coerência entre pessoas, processos, informação e decisão; não reduzir o problema organizacional a programação isolada.

#### SI-02 — Sistemas de informação e processos de negócio

- **Categoria interna / cursos relacionados:** SI / SI.
- **Competência (síntese da pesquisa):** SI I: Avaliar soluções de TI para problemas organizacionais e sociais.
- **Habilidade (objetivo do jogo):** Localizar um problema de processo e escolher uma mudança coerente com pessoas, informação e objetivos.
- **Objetos de conhecimento e recorte de elaboração:** Fundamentos de SI; teoria geral de sistemas; processos de negócio; gestão da informação.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Processos empresariais. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F07; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar coerência entre pessoas, processos, informação e decisão; não reduzir o problema organizacional a programação isolada.

#### SI-03 — Dados para decisão e pesquisa operacional

- **Categoria interna / cursos relacionados:** SI / SI.
- **Competência (síntese da pesquisa):** SI II: Gerir dados, informação e conhecimento.
- **Habilidade (objetivo do jogo):** Interpretar uma visualização ou comparar alternativas sob restrições para apoiar decisão.
- **Objetos de conhecimento e recorte de elaboração:** Pesquisa operacional; visualização de dados; ciência de dados; probabilidade.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC05, COMUM-TEC10.
- **Tipo recomendado:** Análise de dados para decisão. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F07; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar coerência entre pessoas, processos, informação e decisão; não reduzir o problema organizacional a programação isolada.

#### SI-04 — Concepção e projetos de sistemas de informação

- **Categoria interna / cursos relacionados:** SI / SI.
- **Competência (síntese da pesquisa):** SI I: Avaliar soluções de TI para problemas organizacionais e sociais.
- **Habilidade (objetivo do jogo):** Avaliar modelo, qualidade e escalabilidade de uma solução para uma demanda organizacional.
- **Objetos de conhecimento e recorte de elaboração:** Concepção e modelagem de SI; gerenciamento de projetos; desempenho; escalabilidade.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC11, SI-02.
- **Tipo recomendado:** Modelagem de dados e de solução. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F07; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar coerência entre pessoas, processos, informação e decisão; não reduzir o problema organizacional a programação isolada.

### 8.3 TADS

#### TADS-01 — Requisitos, análise e arquitetura de software

- **Categoria interna / cursos relacionados:** TADS / TADS.
- **Competência (síntese da pesquisa):** TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Relacionar regra de negócio a requisito e selecionar uma decisão de arquitetura coerente.
- **Objetos de conhecimento e recorte de elaboração:** Engenharia de requisitos; análise de sistemas; arquitetura de sistemas.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Montagem de algoritmo vinculada a requisito. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Conferir requisito, comportamento esperado e evidência de teste; admitir tecnologias neutras e controlar ambiguidades de implementação.

#### TADS-02 — Processo, testes e validação de software

- **Categoria interna / cursos relacionados:** TADS / TADS.
- **Competência (síntese da pesquisa):** TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Escolher evidência de teste que confirme uma correção e satisfaça o requisito.
- **Objetos de conhecimento e recorte de elaboração:** Processo de software; qualidade; verificação; validação.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC11, TADS-01.
- **Tipo recomendado:** Sequência de verificação e teste. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Conferir requisito, comportamento esperado e evidência de teste; admitir tecnologias neutras e controlar ambiguidades de implementação.

#### TADS-03 — Orientação a objetos, configuração e manutenção

- **Categoria interna / cursos relacionados:** TADS / TADS.
- **Competência (síntese da pesquisa):** TADS II: Arquitetar e implementar software.
- **Habilidade (objetivo do jogo):** Diagnosticar um defeito em artefato orientado a objetos e selecionar uma mudança controlada.
- **Objetos de conhecimento e recorte de elaboração:** Orientação a objetos; gerência de configuração; operações; manutenção.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC02.
- **Tipo recomendado:** Depuração de código e mudança controlada. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Conferir requisito, comportamento esperado e evidência de teste; admitir tecnologias neutras e controlar ambiguidades de implementação.

#### TADS-04 — Projetos, empreendedorismo e responsabilidade

- **Categoria interna / cursos relacionados:** TADS / TADS.
- **Competência (síntese da pesquisa):** TADS I: Estruturar soluções com processos e ciclo de vida de software.
- **Habilidade (objetivo do jogo):** Comparar decisões de projeto considerando restrições, responsabilidades e impactos.
- **Objetos de conhecimento e recorte de elaboração:** Gerência de projetos; empreendedorismo; legislação; normas técnicas; ética; responsabilidade socioambiental.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Decisões de projeto. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F08; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Conferir requisito, comportamento esperado e evidência de teste; admitir tecnologias neutras e controlar ambiguidades de implementação.

### 8.4 TGTI

#### TGTI-01 — Estratégia, processos e governança de TI

- **Categoria interna / cursos relacionados:** TGTI / TGTI.
- **Competência (síntese da pesquisa):** TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Priorizar uma iniciativa de TI conforme estratégia, processos e conformidade apresentados.
- **Objetos de conhecimento e recorte de elaboração:** Estratégia organizacional; processos; governança; conformidade.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Decisão de gestão. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar critérios organizacionais, recursos, impacto e conformidade fornecidos no caso; evitar decisão baseada apenas em marca ou custo.

#### TGTI-02 — Serviços, continuidade, riscos e indicadores

- **Categoria interna / cursos relacionados:** TGTI / TGTI.
- **Competência (síntese da pesquisa):** TGTI II: Gerir soluções, continuidade e proteção de ativos.
- **Habilidade (objetivo do jogo):** Selecionar melhoria de serviço usando métricas, impacto, recursos e riscos.
- **Objetos de conhecimento e recorte de elaboração:** Gestão de serviços; continuidade; indicadores operacionais; riscos; proteção de ativos.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC09.
- **Tipo recomendado:** Priorização de incidentes. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar critérios organizacionais, recursos, impacto e conformidade fornecidos no caso; evitar decisão baseada apenas em marca ou custo.

#### TGTI-03 — Projetos, pessoas e recursos

- **Categoria interna / cursos relacionados:** TGTI / TGTI.
- **Competência (síntese da pesquisa):** TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Comparar planos de execução considerando equipe, recursos e restrições explicitadas.
- **Objetos de conhecimento e recorte de elaboração:** Gerência de projetos; gestão de pessoas; alocação de recursos.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** Nenhum; caso introdutório com informações suficientes.
- **Tipo recomendado:** Alocação de pessoas e recursos. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar critérios organizacionais, recursos, impacto e conformidade fornecidos no caso; evitar decisão baseada apenas em marca ou custo.

#### TGTI-04 — Informação gerencial e inteligência de negócio

- **Categoria interna / cursos relacionados:** TGTI / TGTI.
- **Competência (síntese da pesquisa):** TGTI I: Gerir TI estrategicamente.
- **Habilidade (objetivo do jogo):** Selecionar informação e solução gerencial adequadas a uma decisão estratégica.
- **Objetos de conhecimento e recorte de elaboração:** Inteligência de negócio; sistemas de informações gerenciais.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC10.
- **Tipo recomendado:** Análise de informação gerencial. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F09; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Revisar critérios organizacionais, recursos, impacto e conformidade fornecidos no caso; evitar decisão baseada apenas em marca ou custo.

### 8.5 TRC

#### TRC-01 — Modelos, TCP/IP e roteamento

- **Categoria interna / cursos relacionados:** TRC / TRC.
- **Competência (síntese da pesquisa):** TRC I: Compreender e operar conectividade.
- **Habilidade (objetivo do jogo):** Localizar uma falha de comunicação interpretando modelo, protocolo e rota apresentados.
- **Objetos de conhecimento e recorte de elaboração:** Modelos de referência; TCP/IP; protocolos; LAN e WAN; algoritmos e protocolos de roteamento.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC08.
- **Tipo recomendado:** Configuração de redes. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar topologia, protocolos, testes e reversão em ambiente simulado; evitar comandos ou versões implícitas e distinguir segurança de conectividade.

#### TRC-02 — Redes físicas, sem fio e cabeamento

- **Categoria interna / cursos relacionados:** TRC / TRC.
- **Competência (síntese da pesquisa):** TRC I: Compreender e operar conectividade.
- **Habilidade (objetivo do jogo):** Comparar topologias e meios de transmissão conforme restrições do projeto.
- **Objetos de conhecimento e recorte de elaboração:** Componentes; topologias; transmissão; IEEE 802.x; redes sem fio; cabeamento estruturado.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC08.
- **Tipo recomendado:** Projeto físico de conectividade. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar topologia, protocolos, testes e reversão em ambiente simulado; evitar comandos ou versões implícitas e distinguir segurança de conectividade.

#### TRC-03 — Administração, serviços e virtualização

- **Categoria interna / cursos relacionados:** TRC / TRC.
- **Competência (síntese da pesquisa):** TRC I: Compreender e operar conectividade.
- **Habilidade (objetivo do jogo):** Diagnosticar indisponibilidade e selecionar uma ação sobre serviço ou recurso virtualizado.
- **Objetos de conhecimento e recorte de elaboração:** Administração de SO; serviços de rede; virtualização; disponibilidade; desempenho; tolerância a falhas; continuidade; qualidade de serviço.
- **Prioridade / dificuldade:** P1 / intermediate.
- **Pré-requisitos recomendados:** COMUM-TEC07, TRC-01.
- **Tipo recomendado:** Diagnóstico de serviços e virtualização. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar topologia, protocolos, testes e reversão em ambiente simulado; evitar comandos ou versões implícitas e distinguir segurança de conectividade.

#### TRC-04 — Projetos, automação e gestão de redes

- **Categoria interna / cursos relacionados:** TRC / TRC.
- **Competência (síntese da pesquisa):** TRC II: Projetar e avaliar redes em operação.
- **Habilidade (objetivo do jogo):** Avaliar uma melhoria de rede considerando interoperabilidade, automação, segurança e impacto ambiental.
- **Objetos de conhecimento e recorte de elaboração:** Projeto lógico e físico; configuração; gerenciamento; programação e automação de redes; redes de longa distância; tecnologias emergentes; sustentabilidade; meio ambiente; gestão de projetos; governança corporativa.
- **Prioridade / dificuldade:** P1 / advanced.
- **Pré-requisitos recomendados:** TRC-01, TRC-02, COMUM-TEC09.
- **Tipo recomendado:** Missão prática de mudança de rede. Ver modalidades e limites de implementação na seção 9.
- **Fonte oficial:** F10; arts. 4º–6º. Datas, órgãos e URLs na seção 4.
- **Situação da evidência:** objetos confirmados oficialmente para 2026; competência em síntese e habilidade, agrupamento, dificuldade, pré-requisito e interação são inferências pedagógicas. **Estado editorial:** `provisional-pending-teacher-review`.
- **Observações para revisão docente:** Validar topologia, protocolos, testes e reversão em ambiente simulado; evitar comandos ou versões implícitas e distinguir segurança de conectividade.


## 9. Tipos de desafios

Todas as modalidades abaixo são propostas `provisional-pending-teacher-review`. As faixas de dificuldade não são enums adicionais. **Acessibilidade A0 para todas:** foco visível, instruções textuais, ampliação, contraste, informação independente de cor, leitura por tecnologia assistiva, transcrição de áudio, pausa e ausência de exigência de velocidade. Teclado, mouse e toque são requisitos futuros de aceitação; não foram testados nesta entrega.

| Tipo | Competência / cursos | Dificuldade | Interação e feedback esperado | Acessibilidade e dispositivos | Contrato |
|---|---|---|---|---|---|
| Questão contextualizada | FG-II, todos; específicas conforme elegibilidade | introductory / intermediate | Selecionar e confirmar; justificar evidência e cada distrator | A0; foco e confirmação por teclado; botões por mouse/toque; tabela com cabeçalhos | question, cinco alternativas e uma correta |
| Sequência lógica | Ordenar dependências; todos no recorte comum | introductory / intermediate | Reordenar 4–7 blocos; dicas e explicação da dependência violada | A0; mover acima/abaixo por teclado e botões de mouse/toque; anunciar posição; arrastar opcional | sequence com ordem única justificável |
| Análise de situações | FG-II e diagnóstico; todos no recorte básico | introductory / intermediate | Comparar evidências e testar hipótese; distinguir observação de conclusão | A0; evidências em lista, seleção por teclado/mouse/toque; alternativa textual a hotspots | Investigação interativa exige expansão; caso simples cabe em question |
| Depuração de código | CC-I, SI-I, TADS-II; CC/SI/TADS | intermediate | Inspecionar falha e testar correção; feedback de regressão e efeitos colaterais | A0; linhas numeradas, texto copiável, edição por teclado; cartões de correção por mouse/toque | Editor/execução exigem expansão |
| Montagem de algoritmos | CC-I, SI-I, TADS-II, TGTI-I; CC/SI/TADS/TGTI em recorte pertinente | introductory / intermediate | Montar fluxo e prever resultado; explicar estados | A0; botões/seleção por teclado/mouse/toque; descrever ramificações | sequence se linear; fluxos ramificados exigem expansão |
| Configuração de redes | TRC-I; TRC | intermediate / advanced | Configurar laboratório simulado, testar e reverter; explicar rota, serviço e segurança | A0; formulário e topologia tabular; teclado e controles por mouse/toque | Configurador exige expansão |
| Modelagem de dados | SI-II, TADS-II, CC-I; adequação em TGTI-I | intermediate | Relacionar entidades e restrições; explicar inconsistências e modelos equivalentes | A0; alternativa tabular e relações selecionáveis por teclado/mouse/toque | Modelador exige expansão |
| Processos empresariais | SI-I/TGTI-I; SI/TGTI; TADS-I no vínculo a requisitos | intermediate | Organizar dependências e responsabilidades; explicar gargalo | A0; raias descritas em lista e botões por teclado/mouse/toque | sequence para dependências lineares; modelagem livre exige expansão |
| Priorização de incidentes | TGTI-II; TGTI; variante TRC-II para redes | intermediate / advanced | Ordenar por impacto e urgência; explicar critérios e risco residual | A0; cards textuais e mover por teclado/botões de mouse/toque; não só cores | Ranking com empates exige expansão |
| Segurança da informação | CC-II/SI-II/TADS-II/TGTI-II/TRC-II; todos em fundamentos | introductory / intermediate | Relacionar ativo, risco e proteção; explicar verificação segura | A0; registros textuais e seleção/reordenação por teclado/mouse/toque | question ou sequence; ambiente fictício |
| Decisões de gestão | TGTI-I/SI-I; TGTI/SI | intermediate / advanced | Comparar metas, recursos e restrições; explicitar compromisso assumido | A0; orçamento tabular e confirmação reversível por teclado/mouse/toque | question se melhor resposta inequívoca; simulação exige expansão |
| Missões práticas | Competências integradas; todos em versões elegíveis | intermediate / advanced | Planejar, executar, verificar e explicar; síntese por etapa e transferência | A0; mapa com alternativa em lista, diálogo textual; teclado/mouse/toque em todas as etapas | Missão mista documental, futuras referências question/sequence |

### 9.1 Lote compatível e backlog

O lote editorial atual utiliza exclusivamente **60 question e seis sequence**. A tabela de modalidades acima preserva o horizonte pedagógico. Quando ela descreve editor, configurador, modelador, ranking livre ou simulador, trata-se de evolução futura, não de tipo disponível no lote. Questões sobre diagnóstico, configuração e modelos apresentam futuramente evidências e alternativas; não exigem executar essas interações. Não se declara equivalência entre identificar uma correção e depurar um programa em funcionamento.

| Experiência futura, fora da contagem executável | Slots de referência para evolução | Limite atual |
|---|---|---|
| Depuração interativa de código | E26-Q-TADS-02/04/06/09/10; E26-Q-CC-10; E26-Q-TRC-08 | Agora são questões com leitura de comportamento/evidência; sem editor ou execução. |
| Configuração simulada de redes | E26-Q-TRC-01/02/04/05/06/07/08/09/10; E26-P-TRC-01 | Agora seleção fundamentada ou sequência delimitada; sem configurador conectado. |
| Modelagem visual de dados | E26-Q-SI-02/05; E26-Q-TADS-05 | Agora avaliação de modelos/consultas apresentados; sem desenho ou edição visual. |
| Análise interativa de situações | E26-Q-COM-01/02/04/05/06/07/08/09/10; E26-Q-SI-03/07/08/10; E26-P-COM-01 | Evidências de question são fornecidas no item; exploração ramificada não é requisito atual. |
| Priorização com empates | E26-Q-TGTI-04/10; E26-P-TGTI-01 | Question exige melhor alternativa única; sequence não aceitará ranking arbitrário ou empates. O puzzle TGTI ordena dependências de apuração de indicador, não incidentes empatados. |
| Simuladores de gestão | E26-Q-SI-01/06/09; E26-Q-TGTI-01/03/05/06/07/09/10; E26-P-TGTI-01 | Agora decisão contextualizada ou sequência de evidências, sem orçamento manipulável ou motor de simulação. |

IDs abreviados com barras repetem o mesmo prefixo da primeira ocorrência. Essa tabela apenas relaciona evoluções; não cria itens extras, contratos, enums, schemas ou aprovação. A futura evolução de uma questão em tarefa prática exigirá objetivo revisado e identificação/versionamento próprio, sem sobrescrever silenciosamente a evidência anterior.

### 9.2 Tipos de missão e seleção futura do banco

| Tipo planejado | Questões por partida | Composição sugerida comum + específica | Exemplo de seleção de IDs, com curso X | Dificuldade do exemplo: introductory/intermediate/advanced |
|---|---:|---|---|---|
| Missão rápida (R) | 3 | 1 + 2 | E26-Q-COM-01; E26-Q-X-01 e 04 | 2 / 1 / 0 |
| Missão normal (N) | 5 | 2 + 3 | E26-Q-COM-02 e 05; E26-Q-X-02, 05 e 09 | 2 / 2 / 1 |
| Missão especial (E) | 10 | 5 + 5 | E26-Q-COM-01, 04, 06, 08 e 10; E26-Q-X-01, 03, 04, 07 e 10 | 4 / 4 / 2 |
| Arena N9 (A) | 20 | 10 + 10 | E26-Q-COM-01–10 e E26-Q-X-01–10 | 7 / 9 / 4 |

X representa exclusivamente o curso selecionado: CC, SI, TADS, TGTI ou TRC. É notação de planejamento, não ID real. As listas são exemplos auditáveis, não ordem obrigatória ou política já implementada. Não repetir ID na mesma partida; filtrar por courses, coleção e decisão editorial de liberação; selecionar por objetivo e dificuldade revisados. Manter identificação de versão, distinguir tentativa inicial e revisão e não confundir novo sorteio com item inédito.

O banco permite essas composições em termos de quantidade/elegibilidade. **O runtime atual ainda exige dez questões por curso na fase jogável**; não oferece automaticamente modos 3/5/20, seleção dinâmica ou Arena. Uma fase de dez poderá usar seleção explícita, como o exemplo especial, em integração posterior. Não entregar as vinte questões diretamente ao repositório que exige dez. Criar/selecionar fase, validar conteúdo e adaptar relatórios/progresso para outros tamanhos será trabalho técnico futuro, sem alterar código nesta revisão.

Somente a Arena utiliza todas as vinte questões elegíveis do curso nessa composição; não se presume que todas serão vistas numa missão rápida, normal ou especial. O reaproveitamento entre missões exige indicação de contato prévio; o banco não promete vinte inéditas a cada repetição da Arena. Puzzles são opcionais como terminais ou componentes de missão mista e **não reduzem nem aumentam a cota de questões**. A missão mista piloto tem uma questão e um puzzle, formato próprio documental; não é automaticamente uma missão rápida de três questões.

As quantidades e distribuições são decisões pedagógicas propostas, sem peso oficial do ENADE. Não impor velocidade, penalidade por erro ou mínimo de nota para acessar outra missão. Regras de pausa, retomada, versões, recompensa idempotente e publicação devem ser definidas antes da implementação dos novos modos.


## 10. Plano da primeira missão mista

- **Título:** Reabrir o Ponto de Apoio N9.
- **Narrativa:** Um serviço fictício de orientação do campus perdeu disponibilidade após uma intervenção. A equipe precisa recuperar um recurso seguro e assegurar que o atendimento contemple pessoas com diferentes necessidades de acesso. O personagem apresenta fatos e dúvidas sem revelar a solução.
- **Objetivo:** Relacionar recuperação segura e consequências sociais do retorno de um serviço digital.
- **Cursos:** CC, SI, TADS, TGTI e TRC, explicitamente elegíveis nos dois desafios.
- **Competências:** FG-II; CC-II, SI-II, TADS-II, TGTI-II e TRC-II no recorte básico de proteção. Não se inventa uma competência normativa técnica universal.
- **Sequência dos desafios:** (1) explorar a Base N9 e coletar registros, com rota alternativa em lista; (2) dialogar com personagem sobre restrições e necessidades; (3) resolver o quebra-cabeça E26-P-COM-01, futuro sequence de cinco etapas dependentes; (4) responder à questão reflexiva E26-Q-COM-04, futuro question de cinco alternativas sobre acessibilidade/equidade; (5) acessar explicação pedagógica sobre procedimento, evidências e efeitos sociais, incluindo feedback das alternativas; (6) receber recompensa da sequência uma única vez; (7) desbloquear a passagem. Reflexão significa escolha fundamentada e feedback; não pressupõe campo discursivo ou correção automática de texto.
- **Pré-requisitos:** nenhuma outra missão; lista documental vazia. Orientação inicial de navegação/leitura, sem bloqueio por nota. Os dois slots precisam ser elaborados, revisados e registrados nos catálogos antes de referências executáveis; seus IDs ainda são provisórios.
- **Recompensa sugerida:** 100 XP pela sequência concluída, dentro do limite contratual; bônus próprio de missão igual a zero. Não somar pontuação de question ao XP nem pagar de novo por repetição. A idempotência da composição futura depende das decisões técnicas de L05.
- **Desbloqueio:** base-n9 / door, referência existente segundo L03/L05. Propor liberação após sequência, resposta e acesso aos feedbacks. A composição não está implementada; o comportamento atual da porta, liberável por outras atividades, não muda. Não se cria mapa, objeto ou dependência nova no contrato.
- **Critérios de conclusão:** acessar ponto por mapa/lista; concluir diálogo; resolver sequência com dicas e novas tentativas permitidas; confirmar questão e acessar explicação, independentemente de acerto; acessar síntese final. Sem mínimo de nota, erro deliberado ou limite de tentativas. Acesso a feedback não comprova compreensão; sequência não resolvida oferece ajuda sem punição.
- **Pontos que exigem validação docente:** pertinência aos cinco cursos, dependências sem falso procedimento universal, alternativas sem estereótipos, ausência de lei/protocolo implícito, explicação, carga de leitura, acessibilidade e XP sem alegação de domínio. Toda a missão permanece provisional-pending-teacher-review.

## 11. Banco inicial de slots editoriais compatíveis com os contratos

### 11.1 Dimensionamento e regras de leitura

São **60 questões únicas question e seis puzzles sequence**, contados separadamente. As dez questões COM admitem CC, SI, TADS, TGTI e TRC; cada grupo específico admite somente o curso indicado. Cada curso tem vinte questões e dois puzzles elegíveis. Compatível/executável, nesta seção, significa formato já suportado pelo contrato; não significa item escrito, registrado, aprovado ou ativado no jogo.

**Metadados herdados por cada um dos 66 slots:** collectionId enade-2026; pedagogicalOrigin conforme 2.3; courses explícitos na ficha; area como nome descritivo indicado pelo ID de planejamento; competencies como textos das sínteses referenciadas; difficulty individual; sources com principal official-reference e complementos aplicáveis; traceability com título, objetivo e localizadores; validationStatus **provisional-pending-teacher-review**. Evidência, parecer, missão possível e evolução de interação continuam informações documentais, sem propriedades soltas.

Cada question terá futuramente cinco alternativas A–E, uma correta, explicação geral e feedback por alternativa. Seus objetivos são identificar, interpretar, comparar ou selecionar soluções a partir de materiais fornecidos: não alegam medir execução prática de configuração, depuração ou modelagem. Cada sequence terá cinco blocos neste planejamento, permutação completa, ao menos três dicas diferentes e explicação; 4–7 é o intervalo permitido pelo contrato. Não há enunciados, alternativas, blocos completos ou ordens de resposta escritos nesta etapa.

Nas fichas, **situação da evidência** separa confirmação do objeto oficial da inferência de objetivo/interação/dificuldade. Datas, órgãos e URLs integrais das fontes estão preservados na seção 4; habilidades são propostas observáveis do jogo. Uso possível em R/N/E/A refere-se à seleção futura da seção 9, não inclusão obrigatória em todas as partidas. Evolução indicada em cada ficha é backlog não implementado e não necessário ao contrato atual.

### 11.2 Dez questões comuns aos cinco cursos

#### E26-Q-COM-01

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG04 — Educação, desenvolvimento e saúde / FG-II.
- **Conteúdo / dificuldade:** Indicadores de acesso à educação e bem-estar / introductory.
- **Objetivo observável:** Distinguir conclusão descritiva de inferência causal sem evidência.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar base sintética com unidade e limitações próprias.
- **Revisão docente específica:** Conferir população, denominador e limites da conclusão. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com consulta de evidências. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-02

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG01 — Ética, cidadania e trabalho / FG-II.
- **Conteúdo / dificuldade:** Direitos e uso responsável de informação pessoal / introductory.
- **Objetivo observável:** Selecionar conduta compatível com direitos explicitados no caso.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Construir conflito próprio entre finalidade e circulação de informação.
- **Revisão docente específica:** Não exigir lei implícita; validar direitos e melhor resposta. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações sobre efeitos das decisões. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-03

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG05 — Cultura e comunicação responsável / FG-I.
- **Conteúdo / dificuldade:** Comunicação digital e diversidade cultural / introductory.
- **Objetivo observável:** Identificar efeito de linguagem sobre compreensão de públicos distintos.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar mensagem e desencontro comunicacional próprios.
- **Revisão docente específica:** Evitar estereótipos e considerar contexto de recepção. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Diálogo ramificado com análise interativa de situações. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-04

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG02 — Equidade, acessibilidade e inclusão / FG-II.
- **Conteúdo / dificuldade:** Acessibilidade e participação no retorno de serviço / introductory.
- **Objetivo observável:** Comparar medidas de atendimento considerando barreiras de acesso.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar necessidades simultâneas e restrições de participação novas.
- **Revisão docente específica:** Revisão de acessibilidade pelos cinco cursos; resposta inequívoca. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com caminhos de acesso. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-05

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG03 — Clima, territórios e qualidade de vida / FG-II.
- **Conteúdo / dificuldade:** Intervenção socioambiental e território / intermediate.
- **Objetivo observável:** Comparar intervenções com base em dados e efeitos locais.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar território sintético e relações de impacto próprias.
- **Revisão docente específica:** Conferir indicadores e não confundir correlação com causalidade. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações socioambientais. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-06

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG06 — Ciência, tecnologia e relações globais / FG-I e FG-II.
- **Conteúdo / dificuldade:** Inovação e cooperação científica / intermediate.
- **Objetivo observável:** Avaliar argumentos de cooperação considerando circulação de saberes.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar objetivos e tensões de cooperação distintos das provas.
- **Revisão docente específica:** Não inferir superioridade cultural; conferir premissas dos argumentos. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com evidências contrastantes. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-07

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-TEC08 — Redes: fundamentos de comunicação / CC-I; SI-I; TADS-I; TGTI-II; TRC-I.
- **Conteúdo / dificuldade:** Evidências básicas de conectividade e serviço / intermediate.
- **Objetivo observável:** Distinguir hipótese de falha de comunicação de falha de aplicação.
- **Fonte oficial principal:** F06 — Inep, Portaria 157/2026, arts. 5º–6º, referência principal de CC; corroborar separadamente F07/SI, F08/TADS, F09/TGTI e F10/TRC nos mesmos objetos, conforme 11.9.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar registros e hipóteses sem repetir topologia ou testes históricos.
- **Revisão docente específica:** Evidência suficiente, sem comandos ou configuração especializada. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações e, para TRC, configuração simulada. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-08

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-TEC07 — Sistemas operacionais: fundamentos / CC-II; SI-I; TADS-I; TGTI-II; TRC-I.
- **Conteúdo / dificuldade:** Recursos de SO e dependências de serviço / intermediate.
- **Objetivo observável:** Relacionar indisponibilidade a dependências de recursos declaradas.
- **Fonte oficial principal:** F06 — Inep, Portaria 157/2026, arts. 5º–6º, referência principal de CC; corroborar separadamente F07/SI, F08/TADS, F09/TGTI e F10/TRC nos mesmos objetos, conforme 11.9.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar cadeia de dependências e observações de falha próprias.
- **Revisão docente específica:** Não exigir administração de plataforma ou memorizar comandos. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com observação de recursos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-09

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-FG03 — Clima, territórios e qualidade de vida / FG-II.
- **Conteúdo / dificuldade:** Sustentabilidade, equidade territorial e qualidade de vida / advanced.
- **Objetivo observável:** Selecionar intervenção integrando três restrições sociais e ambientais.
- **Fonte oficial principal:** F05 — Inep — Portaria 154/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar conflito multicritério diferente do recorte de COM-05.
- **Revisão docente específica:** Fornecer prioridades suficientes; não tornar juízo de valor oculto um gabarito. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com comparação de impactos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-COM-10

- **Contrato / cursos:** question / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-TEC09 — Proteção da informação: fundamentos / CC-II; SI-II; TADS-II; TGTI-II; TRC-II.
- **Conteúdo / dificuldade:** Proteção de ativos e continuidade básica / advanced.
- **Objetivo observável:** Escolher medida de proteção integrando ativo, risco e continuidade.
- **Fonte oficial principal:** F06 — Inep, Portaria 157/2026, arts. 5º–6º, referência principal de CC; corroborar separadamente F07/SI, F08/TADS, F09/TGTI e F10/TRC nos mesmos objetos, conforme 11.9.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar conjunto de ameaças e efeitos residuais próprios.
- **Revisão docente específica:** Manter fundamento comum e definir três restrições sem lei implícita. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de segurança; simulador só em etapa futura. Backlog; a versão atual é exclusivamente question.

### 11.3 Dez questões específicas de CC

#### E26-Q-CC-01

- **Contrato / cursos:** question / CC.
- **Área / competência:** COMUM-TEC01 — Algoritmos introdutórios / CC-I.
- **Conteúdo / dificuldade:** Rastreamento de algoritmo sob condição explícita / introductory.
- **Objetivo observável:** Prever resultado de fluxo curto com estado inicial declarado.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar fluxo e casos de entrada próprios, sem reutilizar cálculo de média.
- **Revisão docente específica:** Conferir todos os caminhos e neutralidade de linguagem. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Montagem interativa de algoritmos em expansão futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-02

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-03 — Sistemas digitais e recursos computacionais / CC-I.
- **Conteúdo / dificuldade:** Sistemas digitais e representação de sinais / introductory.
- **Objetivo observável:** Relacionar entradas e saída de circuito simples descrito.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar circuito e combinações de entrada autorais.
- **Revisão docente específica:** Verificar tabela lógica e alternativa textual do circuito. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulação visual de circuito, fora do contrato atual. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-03

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-01 — Teoria da computação e compiladores / CC-I.
- **Conteúdo / dificuldade:** Etapas de tradução de programas / introductory.
- **Objetivo observável:** Identificar função de etapa a partir de artefato fornecido.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar artefato de tradução próprio, distinto de questão e puzzle.
- **Revisão docente específica:** Não pressupor arquitetura universal de compiladores. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Inspeção interativa de artefatos de tradução. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-04

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-02 — Modelagem matemática, grafos e probabilidade / CC-I.
- **Conteúdo / dificuldade:** Grafos e dependências / intermediate.
- **Objetivo observável:** Selecionar representação que satisfaça restrições de alcance.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar estrutura e restrições inéditas, não apenas novos rótulos.
- **Revisão docente específica:** Validar propriedade matemática e representações equivalentes. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Modelagem visual de grafos em expansão futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-05

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-03 — Sistemas digitais e recursos computacionais / CC-II.
- **Conteúdo / dificuldade:** Localidade de referência e organização de recursos / intermediate.
- **Objetivo observável:** Comparar efeitos de acessos sobre uso de recurso limitado.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar padrão de acesso e hipóteses de funcionamento próprios.
- **Revisão docente específica:** Explicitar modelo de cache e conferir contagens. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com observação de recursos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-06

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-04 — Inteligência artificial, gráficos e imagens / CC-I.
- **Conteúdo / dificuldade:** Inteligência artificial e adequação de abordagem / intermediate.
- **Objetivo observável:** Comparar métodos conforme objetivo e limitações fornecidas.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar demanda e critérios de adequação próprios.
- **Revisão docente específica:** Evitar exigir biblioteca ou marca; conferir limites dos métodos. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulação comparativa de abordagens em expansão futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-07

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-04 — Inteligência artificial, gráficos e imagens / CC-I.
- **Conteúdo / dificuldade:** Processamento de imagem / intermediate.
- **Objetivo observável:** Selecionar transformação coerente com resultado pretendido.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar artefato visual e objetivo diferentes dos históricos.
- **Revisão docente específica:** Validar efeitos e fornecer descrição textual equivalente. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Manipulação visual de imagens em expansão futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-08

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-02 — Modelagem matemática, grafos e probabilidade / CC-I.
- **Conteúdo / dificuldade:** Probabilidade aplicada a hipótese computacional / intermediate.
- **Objetivo observável:** Comparar hipóteses usando dados e pressupostos explícitos.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar distribuição e relação decisória próprias.
- **Revisão docente específica:** Conferir independência, cálculos e limites da inferência. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações probabilísticas. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-09

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-01 — Teoria da computação e compiladores / CC-I.
- **Conteúdo / dificuldade:** Modelos de computação e limites de reconhecimento / advanced.
- **Objetivo observável:** Avaliar adequação de modelo a linguagem formal delimitada.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar linguagem e propriedades estruturais próprias.
- **Revisão docente específica:** Revisar prova de adequação e evitar conclusão de indecidibilidade indevida. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Exploração interativa de modelos formais em expansão futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-CC-10

- **Contrato / cursos:** question / CC.
- **Área / competência:** CC-03 — Sistemas digitais e recursos computacionais / CC-II.
- **Conteúdo / dificuldade:** Concorrência, compartilhamento e evolução de recursos / advanced.
- **Objetivo observável:** Selecionar estratégia integrando correção, concorrência e custo.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar estados e restrições com conflito técnico próprio.
- **Revisão docente específica:** Conferir interleavings, hipóteses e melhor resposta. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa de código concorrente. Backlog; a versão atual é exclusivamente question.

### 11.4 Dez questões específicas de SI

#### E26-Q-SI-01

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-01 — Arquitetura corporativa, informação e governança / SI-I.
- **Conteúdo / dificuldade:** Arquitetura de negócio e objetivos / introductory.
- **Objetivo observável:** Relacionar componente da solução à necessidade organizacional.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar organização e mapa de necessidades próprios.
- **Revisão docente específica:** Conferir vínculo entre meta, processo e componente. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão e arquitetura em expansão futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-02

- **Contrato / cursos:** question / SI.
- **Área / competência:** COMUM-TEC10 — Bancos de dados / SI-II.
- **Conteúdo / dificuldade:** Consulta e organização de informação / introductory.
- **Objetivo observável:** Identificar resultado de consulta simples para demanda definida.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar estrutura de dados e necessidade informacional novas.
- **Revisão docente específica:** Conferir chaves, registros e semântica da consulta. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Modelagem visual de dados. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-03

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-02 — Sistemas de informação e processos de negócio / SI-I.
- **Conteúdo / dificuldade:** Pessoas, processos e informação / introductory.
- **Objetivo observável:** Identificar gargalo sustentado por fluxo informacional fornecido.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar processo e responsabilidades próprios.
- **Revisão docente específica:** Não atribuir problema organizacional só à tecnologia. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações empresariais. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-04

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-02 — Sistemas de informação e processos de negócio / SI-I.
- **Conteúdo / dificuldade:** Redesenho de processo de negócio / intermediate.
- **Objetivo observável:** Comparar mudanças e seus efeitos em responsabilidades e informação.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar alternativas de redesenho com consequências inéditas.
- **Revisão docente específica:** Conferir causalidade do gargalo e critérios de melhoria. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Modelagem interativa de processos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-05

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-04 — Concepção e projetos de sistemas de informação / SI-II.
- **Conteúdo / dificuldade:** Modelagem de dados para demanda organizacional / intermediate.
- **Objetivo observável:** Selecionar modelo que preserve relações e restrições do processo.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar regras de integridade distintas de entidades históricas.
- **Revisão docente específica:** Validar cardinalidades e modelos equivalentes; vínculo SI-II/SI-04. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Modelagem visual de dados. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-06

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-01 — Arquitetura corporativa, informação e governança / SI-I.
- **Conteúdo / dificuldade:** Governança e arquitetura da informação / intermediate.
- **Objetivo observável:** Comparar decisões de responsabilidade e uso da informação.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar conflito de responsabilidade e critérios de decisão próprios.
- **Revisão docente específica:** Não exigir framework não fornecido; conferir alinhamento. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-07

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-03 — Dados para decisão e pesquisa operacional / SI-II.
- **Conteúdo / dificuldade:** Visualização e ciência de dados / intermediate.
- **Objetivo observável:** Selecionar conclusão apoiada em visualização e limites da base.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar base e escolha visual próprias.
- **Revisão docente específica:** Verificar escala, amostra e ausência de extrapolação causal. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações com filtros de dados. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-08

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-04 — Concepção e projetos de sistemas de informação / SI-I.
- **Conteúdo / dificuldade:** Qualidade de solução de SI e projeto / intermediate.
- **Objetivo observável:** Comparar evidências de qualidade com necessidade organizacional.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar demanda e evidências de aceitação autorais.
- **Revisão docente específica:** Não confundir processo, produto e resultado organizacional. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de projeto. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-09

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-03 — Dados para decisão e pesquisa operacional / SI-II.
- **Conteúdo / dificuldade:** Pesquisa operacional e decisão sob restrições / advanced.
- **Objetivo observável:** Selecionar alocação viável integrando capacidade, demanda e objetivo.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar modelo e restrições próprios, com solução verificável.
- **Revisão docente específica:** Conferir viabilidade, objetivo e unicidade da melhor alternativa. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão e alocação. Backlog; a versão atual é exclusivamente question.

#### E26-Q-SI-10

- **Contrato / cursos:** question / SI.
- **Área / competência:** SI-04 — Concepção e projetos de sistemas de informação / SI-I e SI-II.
- **Conteúdo / dificuldade:** Desempenho, escalabilidade e qualidade da informação / advanced.
- **Objetivo observável:** Selecionar arquitetura integrando carga, consistência e necessidade social.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar cenário integrado diferente das decisões isoladas anteriores.
- **Revisão docente específica:** Explicitar hipóteses de escala, critérios e efeitos organizacionais. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações e simulador de arquitetura. Backlog; a versão atual é exclusivamente question.

### 11.5 Dez questões específicas de TADS

#### E26-Q-TADS-01

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-01 — Requisitos, análise e arquitetura de software / TADS-I.
- **Conteúdo / dificuldade:** Regra de negócio e requisito / introductory.
- **Objetivo observável:** Relacionar necessidade explícita a requisito verificável.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar regra e critério de aceitação próprios.
- **Revisão docente específica:** Conferir ambiguidade, verificabilidade e origem da necessidade. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de requisitos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-02

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II.
- **Conteúdo / dificuldade:** Orientação a objetos e comportamento / introductory.
- **Objetivo observável:** Identificar comportamento de objeto em cenário delimitado.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar colaboração entre objetos diferente dos exemplos históricos.
- **Revisão docente específica:** Explicitar estado e chamadas sem linguagem obrigatória. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa de código. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-03

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-02 — Processo, testes e validação de software / TADS-I.
- **Conteúdo / dificuldade:** Verificação e validação de software / introductory.
- **Objetivo observável:** Distinguir evidência de correção técnica de atendimento à necessidade.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar requisito e evidências de teste próprias.
- **Revisão docente específica:** Não reduzir validação a execução sem critério de aceitação. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de qualidade. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-04

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II.
- **Conteúdo / dificuldade:** Diagnóstico estático de defeito / intermediate.
- **Objetivo observável:** Selecionar correção a partir de trecho e rastreamento fornecidos.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar defeito e teste revelador autorais.
- **Revisão docente específica:** Conferir falha e regressão; exatamente uma alternativa correta. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa de código, sem ser requisito atual. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-05

- **Contrato / cursos:** question / TADS.
- **Área / competência:** COMUM-TEC10 — Bancos de dados / TADS-II.
- **Conteúdo / dificuldade:** Dados e integridade em aplicação / intermediate.
- **Objetivo observável:** Selecionar consulta ou restrição que atenda à regra da aplicação.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar dados e invariantes novos.
- **Revisão docente específica:** Verificar semântica, chaves e ausência de dependência de fabricante. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Modelagem visual de dados. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-06

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II.
- **Conteúdo / dificuldade:** Configuração e manutenção controlada / intermediate.
- **Objetivo observável:** Selecionar mudança rastreável preservando comportamento exigido.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar histórico de mudança e efeito colateral próprios.
- **Revisão docente específica:** Conferir versão, rastreabilidade e estratégia de reversão. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa e análise interativa de situações de manutenção. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-07

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-01 — Requisitos, análise e arquitetura de software / TADS-I e TADS-II.
- **Conteúdo / dificuldade:** Arquitetura e requisitos de qualidade / intermediate.
- **Objetivo observável:** Comparar opções de arquitetura conforme restrições explícitas.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar combinação própria de requisitos e limites.
- **Revisão docente específica:** Não exigir framework implícito; validar compromisso técnico. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de arquitetura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-08

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-04 — Projetos, empreendedorismo e responsabilidade / TADS-I.
- **Conteúdo / dificuldade:** Planejamento de projeto e responsabilidade / intermediate.
- **Objetivo observável:** Priorizar decisão de projeto conforme recursos e impactos fornecidos.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar tarefas e critérios próprios, sem simples troca de valores.
- **Revisão docente específica:** Fornecer regra de prioridade; não presumir legislação. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão de projeto. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-09

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-02 — Processo, testes e validação de software / TADS-I e TADS-II.
- **Conteúdo / dificuldade:** Qualidade, segurança e aceitação / advanced.
- **Objetivo observável:** Selecionar conjunto de evidências que satisfaça três requisitos.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar requisitos e testes combinados com cobertura própria.
- **Revisão docente específica:** Conferir cobertura, segurança e critérios independentes. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa com análise de testes. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TADS-10

- **Contrato / cursos:** question / TADS.
- **Área / competência:** TADS-03 — Orientação a objetos, configuração e manutenção / TADS-II.
- **Conteúdo / dificuldade:** Manutenção evolutiva e configuração / advanced.
- **Objetivo observável:** Selecionar mudança que preserve contratos e permita evolução segura.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar artefatos e dependências de manutenção inéditos.
- **Revisão docente específica:** Validar compatibilidade, regressão e alternativa tecnicamente única. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa de código com versões. Backlog; a versão atual é exclusivamente question.

### 11.6 Dez questões específicas de TGTI

#### E26-Q-TGTI-01

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-01 — Estratégia, processos e governança de TI / TGTI-I.
- **Conteúdo / dificuldade:** Alinhamento de TI à estratégia / introductory.
- **Objetivo observável:** Relacionar iniciativa a objetivo organizacional explícito.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar meta e necessidade de TI próprias.
- **Revisão docente específica:** Não usar marca ou novidade como critério de alinhamento. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-02

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-02 — Serviços, continuidade, riscos e indicadores / TGTI-II.
- **Conteúdo / dificuldade:** Indicadores operacionais de serviço / introductory.
- **Objetivo observável:** Interpretar métrica e identificar limite de sua conclusão.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar registros e janela de observação próprios.
- **Revisão docente específica:** Conferir unidade, denominador e métrica versus causa. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de serviço. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-03

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-03 — Projetos, pessoas e recursos / TGTI-I.
- **Conteúdo / dificuldade:** Pessoas e responsabilidades de projeto / introductory.
- **Objetivo observável:** Selecionar atribuição coerente com capacidades e restrições declaradas.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar equipe e dependências de responsabilidade inéditas.
- **Revisão docente específica:** Evitar estereótipos profissionais e pressupostos de disponibilidade. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão de pessoas e recursos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-04

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-02 — Serviços, continuidade, riscos e indicadores / TGTI-II.
- **Conteúdo / dificuldade:** Decisão de atendimento por impacto e urgência / intermediate.
- **Objetivo observável:** Selecionar prioridade única segundo política fornecida.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar incidentes e política com decisão inequívoca.
- **Revisão docente específica:** Não incluir empate no gabarito; explicar risco residual. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Priorização com empates em interação futura. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-05

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-01 — Estratégia, processos e governança de TI / TGTI-I.
- **Conteúdo / dificuldade:** Governança e conformidade / intermediate.
- **Objetivo observável:** Comparar decisões conforme responsabilidade e regra fornecidas.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar conflito de governança e regra de conformidade próprios.
- **Revisão docente específica:** Não cobrar lei ou framework não explicitado. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão e governança. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-06

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-04 — Informação gerencial e inteligência de negócio / TGTI-I.
- **Conteúdo / dificuldade:** Informação gerencial e inteligência de negócio / intermediate.
- **Objetivo observável:** Selecionar informação adequada a decisão estratégica delimitada.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar necessidades e indicadores com relação decisória própria.
- **Revisão docente específica:** Conferir qualidade da informação e evitar associação causal indevida. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão com painel de indicadores. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-07

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-03 — Projetos, pessoas e recursos / TGTI-I.
- **Conteúdo / dificuldade:** Projeto, equipe e recursos / intermediate.
- **Objetivo observável:** Comparar planos de execução sob restrições de capacidade.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar planos e dependências de recursos autorais.
- **Revisão docente específica:** Conferir viabilidade, capacidade e critérios de comparação. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão de projetos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-08

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-02 — Serviços, continuidade, riscos e indicadores / TGTI-II.
- **Conteúdo / dificuldade:** Melhoria de serviço e continuidade / intermediate.
- **Objetivo observável:** Selecionar melhoria usando métrica, impacto e capacidade operacional.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar padrão de falhas e medidas de melhoria próprios.
- **Revisão docente específica:** Não confundir disponibilidade com qualidade integral; conferir limites. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de serviço. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-09

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-01 — Estratégia, processos e governança de TI / TGTI-I.
- **Conteúdo / dificuldade:** Portfólio, estratégia e recursos / advanced.
- **Objetivo observável:** Selecionar iniciativa integrando metas, conformidade e orçamento.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar metas conflitantes e exigências que produzam decisão própria.
- **Revisão docente específica:** Integrar três restrições, resposta inequívoca e distratores plausíveis. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Simulador de gestão multicritério. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TGTI-10

- **Contrato / cursos:** question / TGTI.
- **Área / competência:** TGTI-02 — Serviços, continuidade, riscos e indicadores / TGTI-II.
- **Conteúdo / dificuldade:** Risco, continuidade e proteção de ativos / advanced.
- **Objetivo observável:** Selecionar plano que equilibre recuperação, proteção e capacidade.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar cenário de continuidade e riscos residuais inéditos.
- **Revisão docente específica:** Explicitar prioridades, validar viabilidade e não exigir padrão implícito. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Priorização com empates e simulador de gestão de continuidade. Backlog; a versão atual é exclusivamente question.

### 11.7 Dez questões específicas de TRC

#### E26-Q-TRC-01

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-01 — Modelos, TCP/IP e roteamento / TRC-I.
- **Conteúdo / dificuldade:** Arquitetura TCP/IP e função de protocolo / introductory.
- **Objetivo observável:** Identificar função de componente na comunicação descrita.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar fluxo de comunicação e observações próprios.
- **Revisão docente específica:** Conferir camada e função sem exigir comando de fabricante. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada de redes. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-02

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-02 — Redes físicas, sem fio e cabeamento / TRC-I.
- **Conteúdo / dificuldade:** Meios físicos e topologia / introductory.
- **Objetivo observável:** Selecionar meio coerente com requisito técnico fornecido.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar restrições físicas e necessidade de conexão próprias.
- **Revisão docente específica:** Conferir limitações do meio e descrição textual do diagrama. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada de redes e projeto visual. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-03

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-03 — Administração, serviços e virtualização / TRC-I.
- **Conteúdo / dificuldade:** Administração de SO e serviço de rede / introductory.
- **Objetivo observável:** Relacionar evidência de indisponibilidade ao recurso administrado.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar registros de serviço e hipótese de falha próprios.
- **Revisão docente específica:** Separar conectividade, serviço e permissão; não pressupor plataforma. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de acolhimento e leitura guiada. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Análise interativa de situações de rede. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-04

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-01 — Modelos, TCP/IP e roteamento / TRC-I.
- **Conteúdo / dificuldade:** Roteamento e configuração lógica / intermediate.
- **Objetivo observável:** Selecionar ajuste a partir de topologia e tabela fornecidas.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar topologia e falha distintas de questões históricas.
- **Revisão docente específica:** Validar rotas, endereçamento e teste discriminante. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada de redes. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-05

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-02 — Redes físicas, sem fio e cabeamento / TRC-I.
- **Conteúdo / dificuldade:** Rede sem fio e cabeamento / intermediate.
- **Objetivo observável:** Comparar soluções conforme interferência, alcance e uso previstos.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar planta descritiva e restrições próprias.
- **Revisão docente específica:** Conferir hipóteses físicas; fornecer norma necessária sem pressupô-la. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada de redes. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-06

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-03 — Administração, serviços e virtualização / TRC-I.
- **Conteúdo / dificuldade:** Virtualização e serviços / intermediate.
- **Objetivo observável:** Comparar alternativas de virtualização para disponibilidade delimitada.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar arranjo de serviços e restrições de recursos próprios.
- **Revisão docente específica:** Conferir isolamento e dependências; sem marca obrigatória. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada de redes e servidores. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-07

- **Contrato / cursos:** question / TRC.
- **Área / competência:** COMUM-TEC09 — Proteção da informação: fundamentos / TRC-II.
- **Conteúdo / dificuldade:** Segurança aplicada a redes / intermediate.
- **Objetivo observável:** Selecionar controle coerente com ativo, risco e conectividade exigida.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar fronteiras e ameaças com relação técnica inédita.
- **Revisão docente específica:** Conferir controle e efeito residual sem ação em rede real. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada de redes com validação de segurança. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-08

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-04 — Projetos, automação e gestão de redes / TRC-II.
- **Conteúdo / dificuldade:** Automação e gerenciamento de rede / intermediate.
- **Objetivo observável:** Comparar propostas de automação pelo efeito operacional esperado.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar tarefas e falha de gerenciamento próprias.
- **Revisão docente específica:** Validar observabilidade, reversão e limites de automação. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de comparação e aplicação. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Depuração interativa de automação e configuração simulada. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-09

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-04 — Projetos, automação e gestão de redes / TRC-II.
- **Conteúdo / dificuldade:** Projeto lógico/físico e sustentabilidade / advanced.
- **Objetivo observável:** Selecionar projeto integrando desempenho, segurança e impacto ambiental.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar demanda e restrições integradas próprias.
- **Revisão docente específica:** Conferir viabilidade, interoperabilidade e critérios socioambientais. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada e análise interativa de projetos. Backlog; a versão atual é exclusivamente question.

#### E26-Q-TRC-10

- **Contrato / cursos:** question / TRC.
- **Área / competência:** TRC-03 — Administração, serviços e virtualização / TRC-I e TRC-II.
- **Conteúdo / dificuldade:** Disponibilidade, tolerância a falhas e qualidade de serviço / advanced.
- **Objetivo observável:** Selecionar estratégia integrando continuidade, desempenho e recursos.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; objetivo, recorte, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar cenários de falha e dependências de serviço autorais.
- **Revisão docente específica:** Conferir pontos únicos de falha, premissas e resposta inequívoca. Aplicar também o checklist da seção 15, inclusive resposta única e feedback de A–E.
- **Uso possível em missão:** rápida (R), normal (N), especial (E) ou Arena N9 (A), em seleção elegível; função sugerida de integração orientada, sem bloqueio por nota. A ficha não obriga exibição em todos os modos.
- **Evolução futura da interação:** Configuração simulada e análise interativa de situações. Backlog; a versão atual é exclusivamente question.

### 11.8 Seis quebra-cabeças, fora das 60 questões

#### E26-P-COM-01

- **Contrato / cursos:** sequence / CC, SI, TADS, TGTI, TRC.
- **Área / competência:** COMUM-TEC09 — Proteção da informação: fundamentos / CC-II; SI-II; TADS-II; TGTI-II; TRC-II.
- **Conteúdo / dificuldade:** Recuperação segura de recurso com cinco dependências declaradas / introductory.
- **Objetivo observável:** Ordenar etapas de recuperação usando evidências de proteção e continuidade.
- **Fonte oficial principal:** F06 — Inep, Portaria 157/2026, segurança, arts. 5º–6º; principal, com F07/SI, F08/TADS, F09/TGTI e F10/TRC como corroboração obrigatória por curso.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; sequência, dependências do cenário, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar procedimento e registros próprios, sem copiar protocolo universal.
- **Revisão docente específica:** Validar ordem única de cinco blocos, três dicas e fundamento comum; não exigir norma ou ferramenta implícita. Aplicar também a seção 15 e rejeitar ordem arbitrária ou procedimento indevidamente universal.
- **Uso possível em missão:** terminal de sequência ou componente de missão mista do curso elegível; opcional associado a R/N/E/A, sempre fora da cota de 3/5/10/20 questões. O puzzle comum integra o piloto da seção 10; não acrescenta item novo ao banco.
- **Evolução futura da interação:** Análise interativa de situações de segurança. Backlog; o puzzle atual permanece sequence.

#### E26-P-CC-01

- **Contrato / cursos:** sequence / CC.
- **Área / competência:** CC-01 — Teoria da computação e compiladores / CC-I.
- **Conteúdo / dificuldade:** Transformações de artefatos de tradução em cinco blocos / intermediate.
- **Objetivo observável:** Relacionar artefatos e dependências de etapas no modelo de tradução fornecido.
- **Fonte oficial principal:** F06 — Inep — Portaria 157/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; sequência, dependências do cenário, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar representações e diagnóstico próprios, diferentes dos usados nas questões.
- **Revisão docente específica:** Conferir cadeia única no modelo delimitado; não generalizar arquitetura a todo compilador; três dicas. Aplicar também a seção 15 e rejeitar ordem arbitrária ou procedimento indevidamente universal.
- **Uso possível em missão:** terminal de sequência ou componente de missão mista do curso elegível; opcional associado a R/N/E/A, sempre fora da cota de 3/5/10/20 questões. O puzzle comum integra o piloto da seção 10; não acrescenta item novo ao banco.
- **Evolução futura da interação:** Inspeção interativa de artefatos de tradução. Backlog; o puzzle atual permanece sequence.

#### E26-P-SI-01

- **Contrato / cursos:** sequence / SI.
- **Área / competência:** SI-02 — Sistemas de informação e processos de negócio / SI-I.
- **Conteúdo / dificuldade:** Processo informacional com cinco etapas estritamente dependentes / intermediate.
- **Objetivo observável:** Ordenar responsabilidades e circulação de informação por pré-condições explícitas.
- **Fonte oficial principal:** F07 — Inep — Portaria 168/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; sequência, dependências do cenário, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar processo, documentos e dependências inéditos, distintos dos casos das questões.
- **Revisão docente específica:** Conferir dependências sem paralelismo ou solução equivalente; três dicas e foco organizacional. Aplicar também a seção 15 e rejeitar ordem arbitrária ou procedimento indevidamente universal.
- **Uso possível em missão:** terminal de sequência ou componente de missão mista do curso elegível; opcional associado a R/N/E/A, sempre fora da cota de 3/5/10/20 questões. O puzzle comum integra o piloto da seção 10; não acrescenta item novo ao banco.
- **Evolução futura da interação:** Modelagem interativa de processos e análise de situações. Backlog; o puzzle atual permanece sequence.

#### E26-P-TADS-01

- **Contrato / cursos:** sequence / TADS.
- **Área / competência:** TADS-01 — Requisitos, análise e arquitetura de software / TADS-I e TADS-II.
- **Conteúdo / dificuldade:** Algoritmo linear de validação e processamento em cinco blocos / introductory.
- **Objetivo observável:** Relacionar regra de negócio a dependências de algoritmo delimitado.
- **Fonte oficial principal:** F08 — Inep — Portaria 169/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; sequência, dependências do cenário, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar regra e fluxo próprios, sem cálculo de média ou mera alteração de valores.
- **Revisão docente específica:** Conferir requisito, estado inicial, ordem única e três dicas; não impor sintaxe específica. Aplicar também a seção 15 e rejeitar ordem arbitrária ou procedimento indevidamente universal.
- **Uso possível em missão:** terminal de sequência ou componente de missão mista do curso elegível; opcional associado a R/N/E/A, sempre fora da cota de 3/5/10/20 questões. O puzzle comum integra o piloto da seção 10; não acrescenta item novo ao banco.
- **Evolução futura da interação:** Montagem interativa de algoritmos e depuração de código. Backlog; o puzzle atual permanece sequence.

#### E26-P-TGTI-01

- **Contrato / cursos:** sequence / TGTI.
- **Área / competência:** TGTI-02 — Serviços, continuidade, riscos e indicadores / TGTI-II.
- **Conteúdo / dificuldade:** Procedimento de apuração e verificação de indicador de serviço em cinco blocos / intermediate.
- **Objetivo observável:** Ordenar dependências de obtenção de evidência para decisão de melhoria.
- **Fonte oficial principal:** F09 — Inep — Portaria 171/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; sequência, dependências do cenário, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar registros, indicador e dependências próprios; não ordenar incidentes arbitrariamente.
- **Revisão docente específica:** Validar unidade, pré-condições e ordem única; três dicas; não tratar empate como erro. Aplicar também a seção 15 e rejeitar ordem arbitrária ou procedimento indevidamente universal.
- **Uso possível em missão:** terminal de sequência ou componente de missão mista do curso elegível; opcional associado a R/N/E/A, sempre fora da cota de 3/5/10/20 questões. O puzzle comum integra o piloto da seção 10; não acrescenta item novo ao banco.
- **Evolução futura da interação:** Simulador de gestão de serviços e priorização com empates. Backlog; o puzzle atual permanece sequence.

#### E26-P-TRC-01

- **Contrato / cursos:** sequence / TRC.
- **Área / competência:** TRC-04 — Projetos, automação e gestão de redes / TRC-II.
- **Conteúdo / dificuldade:** Procedimento linear de mudança e verificação de rede em cinco blocos / intermediate.
- **Objetivo observável:** Ordenar dependências de uma mudança de rede com critérios de continuidade declarados.
- **Fonte oficial principal:** F10 — Inep — Portaria 172/2026; arts. 5º–6º.
- **Situação da evidência:** objeto confirmado oficialmente para 2026; sequência, dependências do cenário, dificuldade e uso são inferências pedagógicas; alinhamento ao PPC e validação docente pendentes. **Estado:** provisional-pending-teacher-review.
- **Originalidade:** Criar ambiente, plano e evidências próprios, distintos das questões.
- **Revisão docente específica:** Validar cinco dependências necessárias e três dicas; decisão de retorno explicada sem impor rollback após sucesso. Aplicar também a seção 15 e rejeitar ordem arbitrária ou procedimento indevidamente universal.
- **Uso possível em missão:** terminal de sequência ou componente de missão mista do curso elegível; opcional associado a R/N/E/A, sempre fora da cota de 3/5/10/20 questões. O puzzle comum integra o piloto da seção 10; não acrescenta item novo ao banco.
- **Evolução futura da interação:** Configuração simulada de redes e análise interativa de situações. Backlog; o puzzle atual permanece sequence.


### 11.9 Justificativa de aplicabilidade das dez questões comuns e do puzzle comum

| Slots | Evidência de abrangência | Limite para revisão pelos cinco cursos |
|---|---|---|
| E26-Q-COM-01 | F05: educação/desenvolvimento humano e saúde/bem-estar; FG comum | Indicador descritivo com definições fornecidas, sem estatística especializada. |
| E26-Q-COM-02 | F05: ética, cidadania e direitos humanos | Direitos e consequências explicitados; sem exigir memorização de lei. |
| E26-Q-COM-03 | F05: cultura, comunicação e diálogo | Analisar significados e públicos sem estereótipos. |
| E26-Q-COM-04 | F05: equidade, acessibilidade e inclusão | Decisão de participação social, sem exigir implementar interface. |
| E26-Q-COM-05 e E26-Q-COM-09 | F05: clima, questões socioambientais, território e qualidade de vida | Objetivos distintos: comparação local em 05 e integração de restrições em 09; não são versões cosméticas do mesmo item. |
| E26-Q-COM-06 | F05: ciência, inovação, globalização e interação de saberes | Argumentos com contexto e critérios suficientes, sem conhecimento geopolítico implícito. |
| E26-Q-COM-07 | F06/CC e F07/SI: redes; F08/TADS: princípios de redes; F09/TGTI: redes; F10/TRC: fundamentos e comunicação | Comparar evidências básicas, sem configuração especializada. |
| E26-Q-COM-08 | F06/CC e F07/SI: SO; F08/TADS: princípios de SO; F09/TGTI: SO; F10/TRC: administração de SO | Interpretar dependências declaradas, sem comandos de plataforma. |
| E26-Q-COM-10 e E26-P-COM-01 | F06/CC: segurança; F07/SI: segurança da informação/SI; F08/TADS: segurança cibernética; F09/TGTI e F10/TRC: segurança | Q compara medida sob restrições; P ordena dependências de procedimento delimitado. Nenhum deles cobra resposta operacional avançada ou procedimento universal. |

Há sustentação documental para a proposta universal nesses recortes, sem transformar as cinco matrizes específicas em uma única matriz. Se um dos docentes identificar exigência fora da formação sustentada, reduzir o recorte e reavaliar. Persistindo inadequação, substituir a questão comum por outro objetivo de Formação Geral baseado em F05, com ID/versão e registro da decisão, preservando dez comuns e a distribuição 4/4/2. Não ampliar courses para cumprir a meta. Para o puzzle, escolher outro procedimento comum com dependências genuínas, sem forçar uma ordem em problema aberto.

O horizonte de 39 áreas permanece integral nas seções 6–8. O banco amostra recortes dessas áreas e não exige uma questão por cada área em cada curso. As variantes de conteúdo que têm elegibilidade específica não são duplicações de um item comum: terão caso, objetivo e estrutura decisória próprios.

## 12. Distribuição por dificuldade

### 12.1 Questões: proposta de composição editorial

| Grupo de questões únicas | introductory | intermediate | advanced | Total |
|---|---:|---:|---:|---:|
| Comuns aos cinco cursos | 4 | 4 | 2 | 10 |
| CC | 3 | 5 | 2 | 10 |
| SI | 3 | 5 | 2 | 10 |
| TADS | 3 | 5 | 2 | 10 |
| TGTI | 3 | 5 | 2 | 10 |
| TRC | 3 | 5 | 2 | 10 |
| **Banco de questões únicas** | **19** | **29** | **12** | **60** |
| **Elegíveis por curso: comuns + específicas** | **7** | **9** | **4** | **20** |

Banco único: aproximadamente 31,7% introductory, 48,3% intermediate e 20% advanced. Por curso: 35%, 45% e 20%. As questões comuns são contadas uma vez no banco, embora elegíveis para cinco cursos. Essa composição é **proposta pedagógica a validar**, não peso, incidência ou regra oficial do ENADE. Ela não exige que toda partida siga a mesma proporção, especialmente nas missões de três questões.

Dentro de COM, os IDs 01–04 são introductory, 05–08 intermediate e 09–10 advanced. Em cada curso, 01–03 são introductory, 04–08 intermediate e 09–10 advanced. Dificuldade refere-se ao recorte do item, não ao bloco inteiro da área nem ao grau acadêmico.

Critério operacional proposto: introductory mobiliza relação principal com apoio explícito; intermediate compara evidências/modelos; advanced integra representações ou três restrições relevantes. Quantidade de texto, habilidade motora, familiaridade com interface e memorização de sintaxe não são dificuldade pedagógica desejada. Calibrar por justificativas, erros, dicas e barreiras de acesso, além de acerto e tempo, sem bloquear acesso por desempenho.

### 12.2 Sequências: contagem independente

| Puzzle | introductory | intermediate | advanced |
|---|---:|---:|---:|
| E26-P-COM-01 | 1 | 0 | 0 |
| E26-P-CC-01 | 0 | 1 | 0 |
| E26-P-SI-01 | 0 | 1 | 0 |
| E26-P-TADS-01 | 1 | 0 | 0 |
| E26-P-TGTI-01 | 0 | 1 | 0 |
| E26-P-TRC-01 | 0 | 1 | 0 |
| **Total de seis puzzles** | **2** | **4** | **0** |

As seis sequências não alteram as proporções das 60 questões ou das vinte questões por curso. Cada curso tem acesso ao puzzle comum e ao seu específico; TADS tem dois introductory e os demais têm um introductory e um intermediate. Essa escolha inicial de puzzles guiados deverá ser validada, sem exigência de puzzle advanced apenas para uniformizar a tabela.

## 13. Rastreabilidade entre slots e fontes

Todas as fichas de 11.2–11.8 registram fonte principal, situação de evidência e revisão específica. F05–F10 remetem aos títulos, órgãos, datas e URLs preservados na seção 4; arts. 5º–6º sustentam competências e objetos, enquanto agrupamento, dificuldade, desenho e seleção em missão são inferências pedagógicas.

| Fonte principal | Questões orientadas | Puzzles orientados | Localização e limite |
|---|---|---|---|
| F05 — Formação Geral | E26-Q-COM-01–06 e E26-Q-COM-09 | Nenhum como principal | Art. 5º I/II, conforme ficha; art. 6º educação, direitos, comunicação, inclusão, ciência e questões socioambientais. |
| F06 — CC | E26-Q-CC-01–10; principal documental de E26-Q-COM-07/08/10 | E26-P-CC-01; principal documental de E26-P-COM-01 | Art. 5º I/II e objetos de algoritmos, sistemas digitais, compiladores, grafos, recursos, IA, imagem, probabilidade e teoria. Para comuns, corroborar por curso em F07–F10. |
| F07 — SI | E26-Q-SI-01–10 | E26-P-SI-01 | Art. 5º I/II e art. 6º arquitetura, banco, processos, governança, visualização, pesquisa operacional e modelagem. Corrobora redes/SO/segurança nos comuns. |
| F08 — TADS | E26-Q-TADS-01–10 | E26-P-TADS-01 | Art. 5º I/II e art. 6º requisitos, objetos, processo, qualidade, programação, dados, configuração e projetos. Corrobora princípios técnicos dos comuns. |
| F09 — TGTI | E26-Q-TGTI-01–10 | E26-P-TGTI-01 | Art. 5º I/II e art. 6º estratégia, serviços, pessoas, governança, BI e projetos. Corrobora redes/SO/segurança nos comuns. |
| F10 — TRC | E26-Q-TRC-01–10 | E26-P-TRC-01 | Art. 5º I/II e art. 6º TCP/IP, meios, administração, roteamento, virtualização, segurança, automação e projetos. Corrobora os comuns. |
| F14/F20/F21/F23 — referências históricas complementares | Somente após seleção e leitura analítica registrada por curso | Mesma condição | Baseada em edição anterior; não são matriz de 2026 nem fonte de conteúdo a copiar. F23 pode orientar análise de formato/FG, não conteúdo específico dos cinco cursos. |
| C01–C03 e PPCs futuros | Conferência curricular dos percursos | Conferência curricular | Alinhamento proposto; adequação aos PPCs pendente; não sustentar novo objeto técnico só em leitura ainda não concluída. |
| L03/L05 | Contrato das 60 questions e seleção futura | Contrato das seis sequences e missão mista documental | Sustentação de formato, não comprovação pedagógica ou implementação dos modos. |

Nas faixas de IDs da tabela, 01–10 significa dez IDs distintos com o prefixo completo da respectiva família. O quadro não multiplica contagens por fonte complementar. `sources` preserva referências estruturadas; a ficha de curadoria continua necessária para evidências, limites de acesso e pareceres, especialmente nos comuns técnicos.

Antes da elaboração final, localizar em cada ato a habilidade e o objeto pertinente, registrando curso, grau, edição, componente, título/órgão, data identificada ou não identificação, URL, artigo/página e justificativa. Se analisar item histórico, registrar questão, caderno, página, gabarito/padrão e propriedades abstratas estudadas. Campos não admitidos no objeto estrito ficam na ficha documental.

Não há percentual de recorrência, peso por assunto ou previsão de tema. Sessenta questões e seis puzzles amostram competências; não demonstram cobertura integral das matrizes nacionais ou dos PPCs.


## 14. Critérios de originalidade

1. Partir da competência e do comportamento observável; selecionar raciocínio antes da situação. Questões antigas orientam análise de demanda, contextualização, estrutura e equívocos plausíveis.
2. Criar relações, dados, restrições, artefatos e caminho de solução próprios. Trocar apenas nomes, valores, contexto ou ordem de alternativas não constitui originalidade.
3. Produzir tabelas, registros, código e topologias autorais para os desafios futuros; identificar dados sintéticos. Registrar origem e permissões de materiais externos. Não apresentar dados fictícios como fatos da UNINOVE.
4. Criar distratores pelos erros conceituais plausíveis do novo problema; evitar pistas de tamanho, linguagem absoluta, humor ou padrão mecânico de gabarito.
5. Comparar a versão elaborada com os itens efetivamente analisados: similaridade textual, estrutura decisória, raciocínio e arranjo dos dados. Uma ferramenta de similaridade não substitui parecer docente.
6. Guardar ficha com autor, versão, objetivo, fontes analíticas, diferenças estruturais, material externo e revisão por curso. Não acrescentar campos indevidos ao schema.
7. Identificar o futuro material como criação autoral referenciada, nunca questão oficial, adaptação autorizada, previsão de prova ou desafio chancelado pelo Inep.
8. Não converter exemplos fictícios em itens inéditos por troca de collectionId. Não reaproveitar a sequência de cálculo de média de L04 como novidade.

## 15. Checklist de revisão docente

Exigir ficha por **ID, versão e curso elegível**, com responsável, data, parecer e evidências. As dez questões comuns e a sequência comum exigem representantes dos cinco cursos; os específicos, docente do curso correspondente. Configuração, modelagem e correções com soluções alternativas merecem segunda leitura técnica. Nenhuma aprovação é registrada nesta entrega.

- [ ] Conferir ato, grau, área, data e retificações na data da revisão.
- [ ] Distinguir competência oficial, síntese e habilidade proposta, com artigo/objeto correto.
- [ ] Conferir PPC da oferta UNINOVE e pertinência ao momento formativo.
- [ ] Validar cada curso de courses; COMUM não concede acesso automático.
- [ ] Validar objetivo observável, pré-requisitos e dificuldade do recorte.
- [ ] Conferir cálculos, unidades, hipóteses, diagramas, comportamento e critérios de sucesso.
- [ ] Verificar originalidade textual e estrutural comparada às referências analisadas.
- [ ] Em question, conferir cinco alternativas distintas, melhor resposta única e feedback de todas.
- [ ] Em sequence, conferir 4–7 blocos, permutação completa, dependências necessárias e três dicas distintas.
- [ ] Aceitar modelos, configurações e decisões equivalentes quando tecnicamente válidos.
- [ ] Fornecer os requisitos jurídicos/técnicos/organizacionais necessários ou explicitar pré-requisito revisado.
- [ ] Revisar linguagem, diversidade, equidade e narrativa institucional fictícia sem estereótipos.
- [ ] Testar teclado, mouse, toque, ampliação e tecnologia assistiva; oferecer alternativa textual a mapa/diagrama/código.
- [ ] Conferir feedback explicativo, ajuda progressiva, novas tentativas e ausência de punição por velocidade/erro.
- [ ] Verificar recompensas sem alegação de domínio e sem pagamentos duplicados.
- [ ] Validar metadados/referências sem campos novos ou aprovação inferida de schema válido.
- [ ] Não anunciar missão mista/interação futura como já implementada.
- [ ] Conferir 60 IDs question e seis IDs sequence únicos, sem contar puzzles como questões; validar vinte questões e dois puzzles elegíveis por curso.
- [ ] Conferir 4/4/2 nas dez questões comuns e 3/5/2 nas dez próprias de cada curso; tratar as proporções como proposta a calibrar.
- [ ] Conferir seleção sem repetição para 3/5/10/20 questões e separar capacidade do banco de implementação dos modos e relatórios.
- [ ] Registrar limites de cobertura, pendências e parecer antes da decisão posterior de publicação.

Após a revisão necessária, realizar piloto exploratório com 10–15 estudantes e representação dos cinco cursos, sem cronômetro e com apoio de acessibilidade. Observar clareza, raciocínio verbalizado, erros por evidência, dicas e fricção de controles. O tamanho, herdado do planejamento local, não sustenta comparação estatística entre cursos ou eficácia causal. Planejar posteriormente tarefa inédita de transferência fora dessas 60 questões e seis sequências, sem contá-la como já elaborada.

## 16. Riscos e pendências

| Risco/pendência | Implicação | Encaminhamento / responsável sugerido |
|---|---|---|
| PPCs atuais não fornecidos | Não se afirma alinhamento a disciplinas/semestres locais | Coordenações/NDE: fornecer ofertas e versões identificadas e mapear objetivos. |
| Enquadramento institucional não verificado | Inclusão nacional não confirma inscrição individual | Coordenação/PI: conferir Sistema Enade/e-MEC; jogo não determina regularidade. |
| Recuperação incompleta do DOU e de alguns PDFs | Auditoria direta do texto certificado limitada | Curadoria: reconferir originais/retificações e preservar reproduções identificadas. |
| Perfis individuais CNCST e texto integral DCN não reextraídos | Complemento curricular insuficiente para vínculos específicos novos | NDE: conferir versão e extrair trechos por curso; sem inventar competência normativa. |
| Expressão distinta em TADS | Risco de criar Formação Geral separada sem evidência | Curadoria: monitorar esclarecimento e manter distinção registrada. |
| Profundidades técnicas diferentes | Mesmo tema pode exigir formação inadequada a um curso | Cinco docentes: validar Q-COM-07/08/10 e P-COM-01; reduzir o recorte ou substituir por Formação Geral conforme 11.9. |
| Interações futuras sem contrato executável | Depuração interativa, configuração, modelagem visual, análise interativa, priorização com empates e simuladores não integram os 66 slots como formatos | Produto/engenharia: manter backlog ligado a slots question/sequence; especificação separada, sem novos kinds nesta entrega. |
| Banco ampliado versus fase jogável atual | Vinte questões elegíveis não podem ser entregues diretamente ao repositório que exige dez por curso; os modos 3/5/20 ainda não estão implementados | Planejar seleção explícita de dez para a fase atual, sem duplicar IDs; modos futuros exigem orquestração, relatório e progresso próprios. Compatibilidade editorial não significa integração pronta. |
| Missão mista sem runtime/persistência própria | Ordem composta, retomada e bônus não são garantidos hoje | Engenharia: resolver decisões de L05 posteriormente; nenhum progresso alterado agora. |
| Ordem imposta em caso de paralelismo/empates | Pode ensinar causalidade falsa | Docentes: revisar dependências ou propor modalidade futura adequada. |
| Originalidade de questões ainda não elaboradas | Slots não provam ineditismo dos futuros itens | Autores/revisores: aplicar seção 14 a cada versão. |
| Dificuldade estimada e cobertura pequena | Não comprova domínio, nota ou equivalência curricular | Equipe pedagógica: calibrar e ampliar pelas lacunas observadas. |
| Estado editorial não controla publicação automaticamente | Schema válido não impede uso indevido de conteúdo pendente | Equipe responsável: política explícita de liberação em etapa futura. |
| Esforço de autoria e revisão de 66 slots | O dimensionamento amplia o trabalho e não produz disponibilidade imediata | Coordenações/autores: elaborar em lotes, registrar versões, revisar os comuns pelos cinco cursos e só então decidir liberação. |
| Reexposição nas missões e na Arena | Reutilizar banco finito pode confundir familiaridade com transferência ou domínio | Produto/pedagogia: registrar contato prévio e versão; planejar equivalentes inéditos posteriormente sem contá-los neste lote. |
| Nome N9 e representação institucional provisórios | Identidade pública pode exigir ajuste | Responsáveis institucionais: validar nome/tom; sem chancela MEC/Inep. |

A busca de 13/11 por retificações recentes não identificou nas fontes recuperadas alteração das portarias específicas que exigisse substituir estes recortes. Isso não declara inexistência de outros atos nem exaustividade do DOU. Datas operacionais da pesquisa-base não foram revalidadas em bloco. O jogo não depende de prazos de inscrição/questionário para funcionar.

## 17. Atualizações diante de novas publicações oficiais

| Gatilho | Atualizar | Preservar |
|---|---|---|
| Nova portaria/retificação de 154/157/168/169/171/172 | Fonte, data, artigo, competência/objeto e elegibilidade afetados; revisão necessária na ficha | Histórico e estado provisório até nova decisão docente. |
| Esclarecimento de Formação Geral em TADS | Texto e alcance; reavaliar slots FG se houver mudança efetiva | Não inventar matriz adicional. |
| Novo edital/retificação | Situação oficial e referências operacionais pertinentes | Separação entre obrigação acadêmica e conclusão lúdica. |
| Cadernos e gabaritos preliminares de 2026 efetivamente publicados | Fonte com data real, curso/grau/caderno; analisar raciocínio e distratores | Proibição de cópia/paráfrase superficial e de anúncio como oficial. |
| Gabaritos finais, expectativas e anulações | Análise histórica e utilidade das analogias realizadas | Item autoral não herda gabarito de outro item. |
| Mapas, relatórios e microdados | Hipóteses de dificuldade/lacunas com método e amostra explícitos | Incidência passada não vira peso futuro ou aprovação. |
| CNCST/DCN/PPC atualizado | Perfil por curso e correspondências curriculares | Distinção entre norma de prova, currículo e escolha pedagógica. |
| Nova coleção institucional | ID, origem, fonte, cursos e revisão próprios com campos atuais; integração técnica separada | enade-2026 como origem histórica, sem renomear silenciosamente itens utilizados. |

L01/F03 registram previsão de cadernos/gabaritos preliminares até 11/12/2026 e finais/expectativas até 30/04/2027. São previsões publicadas segundo a pesquisa-base, não constatação de divulgação nem rechecagem integral do cronograma nesta entrega. A edição ainda não foi aplicada na data deste plano. Registrar datas efetivas e conferir retificações quando os materiais surgirem.

A próxima entrega pedagógica é elaborar e revisar as 60 questões e as seis sequências, começando pelas dez questões comuns e pela sequência comum, com prioridade para E26-Q-COM-04 e E26-P-COM-01 da missão mista. As questões terão cinco alternativas A–E, resposta única, explicação geral, feedback por alternativa e metadados completos; as sequências terão 4–7 blocos, ordem justificada, explicação e ao menos três dicas. A autoria e a revisão devem ser feitas em lotes, sem publicação automática. Seleção de missões e experiências novas terão planejamento técnico separado. Este documento permanece integralmente como proposta `provisional-pending-teacher-review`.
