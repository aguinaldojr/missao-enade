# N9 — Jornada Digital: correções controladas da auditoria dos 66 desafios

Registro de correção executado em 13/11/2026, horário de Brasília, a partir de `docs/autoria/auditoria-geral-66-desafios.md`. O trabalho preserva os 60 itens `question`, os seis itens `sequence`, os 66 IDs, gabaritos, competências, dificuldades, recompensas, elegibilidade, status provisório e formatos de progresso. Nenhum conteúdo desta coleção foi convertido para JSON ou integrado ao jogo.

## 1. Resumo da intervenção

Foram tratados individualmente os oito achados da auditoria. Os dois achados altos e o achado editorial interno de extensão foram resolvidos. A limitação de fontes certificadas foi mitigada com correção objetiva de localizador e preservação estruturada das fontes, mas continua dependendo de verificação externa. Revisão docente, PPC, calibração, homologação de acessibilidade, cotejo externo e expansão do banco continuam explicitamente pendentes.

Resultado por estado:

| Estado final | Quantidade | Achados |
|---|---:|---|
| Resolvido | 3 | AUD-001, AUD-002, AUD-003 |
| Mitigado | 1 | AUD-005 |
| Pendente | 4 | AUD-004, AUD-006, AUD-007, AUD-008 |

**Decisão após as correções internas: APTO COM PENDÊNCIAS EXTERNAS.** O contrato já comporta conversão futura sem perda dos metadados identificados, e os nove textos corrigíveis atendem ao padrão de extensão. A conversão ainda deve manter o status `provisional-pending-teacher-review`; esta decisão não autoriza publicação, integração ou aprovação pedagógica.

## 2. Correção do contrato de metadados e fontes

### 2.1 Estrutura canônica

`EditorialMetadata` passa a utilizar:

- `sources: EditorialSource[]`, obrigatório, com uma ou mais fontes;
- exatamente uma fonte com `role: primary`;
- fontes adicionais com `role: normative-complementary` ou `role: technical`;
- `traceability`, bloco opcional e estrito com `title`, `objective` e `locators`.

Os valores de `source.type` permanecem `official-reference`, `institutional`, `authorial` e `fictional`. A função de cada referência deixa de ser inferida pelo texto livre. O schema mantém `additionalProperties: false` em fontes, rastreabilidade e objetos de conteúdo.

O bloco `traceability` é opcional no contrato geral para não quebrar catálogos antigos, mas é obrigatório pela política editorial da futura conversão dos 66 desafios. Checklists, riscos, pareceres e formulários docentes permanecem no Markdown; não são metadados executáveis e não foram transformados em propriedades genéricas.

### 2.2 Compatibilidade

Entradas antigas com `source` singular continuam aceitas pelos repositórios. O normalizador cria, sem mutar o objeto recebido:

```text
source: { ... }
→ sources: [{ role: "primary", ... }]
```

O formato histórico de puzzle também continua normalizando `collection` para `collectionId`. O conteúdo executável existente não foi regravado. Nenhuma chave ou schema de LocalStorage foi alterado.

### 2.3 Itens multcurso

As fichas de E26-Q-COM-07, E26-Q-COM-08, E26-Q-COM-10 e E26-P-COM-01 agora registram explicitamente:

- F06 como `primary`;
- F07/SI, F08/TADS, F09/TGTI e F10/TRC como `normative-complementary`;
- localizadores preservados nas seções de fontes dos lotes.

A projeção em memória dos quatro itens produz cinco referências estruturadas e passa nos schemas. A fonte técnica, quando existente na ficha, pode usar o papel `technical` sem substituir a normativa principal.

## 3. Redução controlada dos nove textos

O padrão editorial passou a recomendar até 250 palavras para contexto, enunciado e cinco alternativas, buscando até 220 quando houver tabela. Foram removidas redundâncias, repetições de unidade e justificativas antecipadas; premissas decisivas, tabelas, critérios e alternativas continuaram semanticamente equivalentes.

| ID | Antes, aproximadamente | Depois | Versão | Gabarito preservado |
|---|---:|---:|---:|---|
| E26-Q-COM-09 | 255 | 209 | 2 | A |
| E26-Q-COM-10 | 270 | 184 | 2 | C |
| E26-Q-SI-10 | 270 | 192 | 2 | B |
| E26-Q-TGTI-09 | 268 | 236 | 2 | B |
| E26-Q-TGTI-10 | 302 | 209 | 2 | C |
| E26-Q-TRC-04 | 301 | 182 | 2 | C |
| E26-Q-TRC-08 | 266 | 199 | 2 | D |
| E26-Q-TRC-09 | 372 | 222 | 2 | E |
| E26-Q-TRC-10 | 318 | 201 | 2 | C |

As versões editoriais foram elevadas de 1 para 2, inclusive nos formulários de revisão, para manter rastreabilidade. As outras 51 questões e os seis puzzles conservaram suas versões documentais. A revalidação interna confirmou que cada distrator ainda viola uma condição diferente e que somente o gabarito preservado atende integralmente ao comando. A resolução independente por docente continua pendente em AUD-004.

## 4. Estado individual dos achados

### AUD-001 — Perda de metadados editoriais na conversão direta

- **Gravidade original:** alta.
- **Arquivos e IDs afetados:** contratos e schemas; todos os 66 IDs.
- **Correção realizada:** inclusão de `sources` e `traceability` nos contratos compartilhados, schemas e repositórios; documentação do que fica no manifesto editorial.
- **Evidência:** os 60 objetos `Question` e seis `SequencePuzzle` reconstruídos em memória aceitam título, objetivo, localizadores e múltiplas fontes sem propriedade desconhecida.
- **Testes:** schemas em memória; testes de papéis, rastreabilidade estrita, propriedade desconhecida e compatibilidade singular.
- **Estado final:** **resolvido**.
- **Pendência residual:** a etapa de conversão deve preencher `traceability`; nenhum JSON dos 66 foi criado aqui.

### AUD-002 — Corroboração normativa multcurso não representável

- **Gravidade original:** alta.
- **Arquivos e IDs afetados:** `lote-comum-01.md`, E26-P-COM-01; `lote-comum-02.md`, E26-Q-COM-07, E26-Q-COM-08 e E26-Q-COM-10.
- **Correção realizada:** papel explícito para principal, normativa complementar e técnica; quatro corroborações normativas registradas em cada item multcurso.
- **Evidência:** teste documental exige uma fonte principal e quatro `normative-complementary` nesses quatro IDs.
- **Testes:** validação positiva de múltiplas fontes e negativa para nenhuma ou duas fontes principais e papel desconhecido.
- **Estado final:** **resolvido**.
- **Pendência residual:** pertinência pedagógica comum aos cinco cursos continua sujeita aos docentes.

### AUD-003 — Extensão elevada para jogo e telas pequenas

- **Gravidade original:** média.
- **Arquivos e IDs afetados:** os nove IDs da tabela da seção 3.
- **Correção realizada:** redução para 182–236 palavras; versões elevadas para 2; comandos e alternativas mantidos no mesmo nível cognitivo.
- **Evidência:** teste documental aplica limite máximo de 250 palavras e confere os nove gabaritos.
- **Testes:** contagem automatizada, cinco alternativas, explicação e feedbacks; revalidação interna das condições de cada resposta.
- **Estado final:** **resolvido**.
- **Pendência residual:** teste de leitura com estudantes e tecnologia assistiva continua externo.

### AUD-004 — Resolução independente e aprovação docente ausentes

- **Gravidade original:** média.
- **Arquivos e IDs afetados:** todos os 66 IDs.
- **Correção realizada:** nenhuma aprovação foi inventada; versões corrigidas e formulários foram mantidos prontos para nova rodada.
- **Evidência:** todos os itens continuam `provisional-pending-teacher-review`; nenhum campo ou texto declara aprovação.
- **Testes:** teste documental confere o status dos 66 itens.
- **Estado final:** **pendente**.
- **Motivo:** exige resolução sem gabarito, parecer por curso, PPC e calibração por docentes.

### AUD-005 — Acesso limitado a versões certificadas e retificações

- **Gravidade original:** média.
- **Arquivos e IDs afetados:** todos os 66 por F05–F10; correção objetiva adicional em E26-P-COM-01.
- **Correção realizada:** distinção estrutural dos papéis das fontes e correção do localizador de segurança de TRC no lote comum 01, de XI para XIII. XI permanece virtualização; XIII, segurança da informação.
- **Evidência:** fontes principal/complementares são preservadas separadamente; a ficha do puzzle comum usa F10, art. 6º, XIII.
- **Testes:** schemas de fontes, teste dos quatro itens multcurso e conferência documental XI/XIII.
- **Estado final:** **mitigado**.
- **Motivo da pendência:** original certificado, vigência e retificações ainda dependem de consulta institucional/externa; as reproduções não foram rebatizadas como fontes emissoras.

### AUD-006 — Acessibilidade especificada, mas não homologada

- **Gravidade original:** média.
- **Arquivos e IDs afetados:** todos os 66, com prioridade aos seis puzzles e aos nove textos corrigidos.
- **Correção realizada:** redução objetiva de carga textual e manutenção das alternativas documentais para teclado, botões e leitura linear; nenhuma interface foi alterada.
- **Evidência:** nenhum texto depende exclusivamente de cor, som ou movimento; o teste documental impede exposição da origem interna ao jogador.
- **Testes:** navegador existente verifica teclado/toque da experiência atual; a coleção ainda não foi integrada.
- **Estado final:** **pendente**.
- **Motivo:** leitor de tela, reflow, zoom, contraste e alvos de toque só podem ser homologados após integração autorizada e testes com usuários.

### AUD-007 — Cotejo externo de originalidade pendente

- **Gravidade original:** baixa.
- **Arquivos e IDs afetados:** todos os 66 IDs.
- **Correção realizada:** nenhuma alegação externa foi criada; a comparação interna e seus limites permanecem documentados.
- **Evidência:** IDs, títulos e alternativas continuam distintos internamente; o relatório original registra o método e a limitação.
- **Testes:** verificação documental interna; nenhuma pesquisa externa simulada.
- **Estado final:** **pendente**.
- **Motivo:** exige corpus e revisor independente; não é correção objetiva autorizada nesta etapa.

### AUD-008 — Arena N9 sem margem de reserva

- **Gravidade original:** baixa.
- **Arquivos e IDs afetados:** as 60 questões, com impacto agregado nos cinco cursos.
- **Correção realizada:** nenhuma questão foi inventada, repetida ou transferida de curso. A Arena continua tecnicamente possível com 20 itens exatos.
- **Evidência:** teste documental confirma 20 elegíveis, dez comuns e dez específicas por curso; seleção não conta puzzles.
- **Testes:** cotas e distribuição por curso; testes existentes de disponibilidade e seleção.
- **Estado final:** **pendente**.
- **Motivo:** criar margem exige novos conteúdos revisados e decisão docente; não há correção segura sem alterar o banco pedagógico.

## 5. Preservação confirmada

| Regra | Estado após correção |
|---|---|
| Questões | 60 |
| Puzzles | 6 |
| IDs únicos | 66 |
| Questões por curso | 20 |
| Comuns por curso | 10 |
| Específicas por curso | 10 |
| Puzzles por curso | 2: um comum e um específico |
| Dificuldades por curso | 7 introductory, 9 intermediate, 4 advanced |
| Gabaritos | todos preservados |
| Status | 66 em provisional-pending-teacher-review |
| Recompensas | inalteradas |
| Progresso salvo | schemas, chaves e adaptadores inalterados |
| Conteúdo executável | não recebeu os 66 desafios |

## 6. Verificações

O teste `editorial-docs.test.ts` reconstrói os 66 itens apenas em memória, aplica os schemas/repositórios atuais e confere inventário, fontes, rastreabilidade, cotas, dificuldades, status, extensão e linguagem pública. `validate:content` passou a incluir esse teste para que a compilação não ignore a documentação pronta para conversão.

Resultados finais desta entrega:

- validação JSON dos schemas e do exemplo: aprovada;
- auditoria documental dos 66 itens: aprovada para os critérios internos corrigíveis;
- testes unitários e de integração: 15 arquivos e 194 testes aprovados (`npm.cmd test`);
- testes de contrato no build: 5 arquivos e 121 testes aprovados, incluindo a reconstrução documental dos 66 itens;
- lint: aprovado, sem erros (`npm.cmd run lint`);
- TypeScript: aprovado (`npm.cmd run typecheck`, também executado pelo build);
- testes de navegador: os 52 casos exibiram `ok` em desktop e celular; após o último caso, o processo Playwright não encerrou o teardown do servidor auxiliar e precisou ser interrompido, sem falha de caso registrada;
- compilação Vite: aprovada, 138 módulos transformados (`npm.cmd run build`);
- diff: contém somente contratos, schemas, normalizador/repositório, testes e documentação desta correção.

As pendências externas não foram escondidas nem transformadas em aprovação. O próximo passo permitido, somente após autorização, é a conversão controlada que preencha `traceability` e `sources` para cada item sem integrar automaticamente a coleção ao jogo.
