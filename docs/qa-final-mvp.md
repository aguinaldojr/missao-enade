# QA final do MVP — N9 Jornada Digital

Data da execução: 14 de novembro de 2026  
Base validada: commit `d1d8acf` (`feat: implementa identidade visual inicial do n9`)  
Ambiente: Windows, Node.js 26.13.1, npm 11.20.0, Chromium isolado pelo Playwright 1.65.0 e servidor local do Vite Preview.

## Resumo executivo

O MVP foi validado de ponta a ponta em desktop e celular, sem acesso a contas ou dados do navegador pessoal. A execução usou contextos isolados do Chromium e o servidor local do próprio projeto.

Foram encontrados quatro defeitos objetivos de apresentação ou acessibilidade. Todos foram corrigidos sem alterar conteúdos pedagógicos, gabaritos, regras, cotas, pontuação, chaves de armazenamento ou progresso. Após as correções, a suíte unitária/integração/DOM registrou 247 testes aprovados e a suíte de navegador registrou 65 casos aprovados, um caso dispensado por cobertura equivalente e nenhuma falha.

**Decisão:** **APROVADO PARA PUBLICAÇÃO DE TESTE**, condicionado às pendências externas de homologação humana e validação pedagógica registradas ao final deste documento. Esta decisão não autoriza publicação nesta etapa.

## Escopo e ambientes

Foram utilizados:

- desktop em 1366 × 900;
- celular em 360 × 800, orientação vertical e emulação de toque;
- reflow equivalente a zoom de 200% em 683 × 450;
- verificações adicionais em 320 × 740 e 800 × 360;
- mouse, teclado, setas, WASD, Espaço, `E`, controles virtuais e gestos de toque;
- preferência `prefers-reduced-motion: reduce`;
- inspeção semântica por papéis, nomes acessíveis, estados ARIA e ordem de foco.

O zoom de 200% foi reproduzido pela redução equivalente da área CSS disponível, que exercita o mesmo ponto de reflow. A homologação manual em diferentes combinações de navegador e zoom do sistema permanece recomendada.

## Fluxos validados

| Fluxo | Evidência automatizada | Resultado |
| --- | --- | --- |
| Criação, validação, persistência e troca de perfil | `local-ranking.spec.ts`, testes de domínio e integração | Aprovado |
| Tela inicial e seleção dos cinco cursos | `first-delivery.spec.ts` em desktop e celular | Aprovado |
| Modos de 3, 5, 10 e 20 desafios | 20 combinações curso × modo em `ProvisionalCollection.test.ts` | Aprovado |
| Uma missão completa por curso | cinco cursos em `playable-phase.spec.ts`, nos dois projetos do Playwright | Aprovado |
| Cotas comuns/específicas, elegibilidade e ausência de repetição | testes de seleção, conteúdo e integração | Aprovado |
| Mapa, limites, colisões, posição e recarga | `exploration.spec.ts` | Aprovado |
| Personagem, Lia, computador, terminal e porta | inspeção visual e `exploration.spec.ts` | Aprovado |
| Seis puzzles, dicas, solução, replay, XP e salvamento | puzzle comum e SI em desktop/celular; CC, TADS, TGTI e TRC no QA final | Aprovado |
| Resultado, pontuação e relatório salvo | `playable-phase.spec.ts` | Aprovado |
| Ranking local, filtros, melhor resultado e exclusão confirmada | `local-ranking.spec.ts` e testes de domínio | Aprovado |
| Recarga e retomada de progresso | exploração, puzzle, perfil, resultado e ranking | Aprovado |
| Falha de LocalStorage e dados antigos/corrompidos | testes de navegador, unidade e integração | Aprovado |
| Ausência de rede externa no ranking e nos fluxos principais | observação das requisições do navegador | Aprovado |

Os modos rápidos, curtos, padrão e Arena retornaram, respectivamente, 3, 5, 10 e 20 questões, com as cotas configuradas de 1/2, 2/3, 5/5 e 10/10 entre comuns e específicas. A Arena usa exatamente as vinte questões elegíveis e continua sem margem de reserva editorial.

## Problemas encontrados e correções

### QA-MVP-01 — textos extensos no celular

**Problema:** contextos longos ocupavam grande parte da página e obrigavam o jogador a percorrer todo o texto antes de alcançar o enunciado e as alternativas.

**Correção:** em telas pequenas, o contexto passou a usar uma região com altura máxima de 48% da viewport, rolagem vertical própria, espaçamento preservado e contenção de overscroll. O texto integral foi mantido. A região agora é focável e possui nome acessível `Contexto do desafio`, permitindo navegação e leitura deliberada pelo teclado.

**Validação:** desktop, celular, área equivalente a zoom de 200%, cinco alternativas intactas, alvos de toque com pelo menos 44 px e ausência de rolagem horizontal.

### QA-MVP-02 — progresso sem descrição textual completa

**Problema:** a barra expunha valores numéricos, mas não uma descrição pronta do estado corrente para tecnologia assistiva.

**Correção:** foi adicionado `aria-valuetext`, por exemplo `Desafio 1 de 3`, sem mudar a barra ou a regra de progressão.

**Validação:** consulta pelo papel `progressbar` e comparação do valor textual no navegador.

### QA-MVP-03 — rolagem horizontal do ranking sem ponto de foco

**Problema:** a tabela larga podia ser rolada no celular, mas o contêiner de rolagem não era alcançável diretamente pelo teclado.

**Correção:** o contêiner recebeu foco, papel de região e o nome acessível `Tabela do ranking com rolagem horizontal`.

**Validação:** foco programático e por semântica, preservando tabela, cabeçalho, destaque textual `(você)` e exclusão confirmada.

### QA-MVP-04 — rótulos pequenos dentro do Canvas

**Problema:** o limite mínimo de 9 px reduzia a leitura dos rótulos do mapa em telas pequenas; nomes longos também competiam com o espaço do Canvas.

**Correção:** o limite mínimo foi elevado para 11 px, com peso 700, resolução adaptada à densidade da tela e rótulos visuais concisos (`Computador`, `Terminal`, `Lia`, `Bloqueada`/`Liberada`). As descrições completas e acessíveis permanecem no painel HTML e na legenda do mapa.

**Validação:** capturas em 1366 × 900 e 360 × 800, além da inspeção do Canvas após movimento e recarga.

## Acessibilidade

Foram confirmados:

- link de salto funcional e foco transferido ao conteúdo principal;
- foco visível e ordem coerente nas telas de perfil, curso, missão, desafios, puzzles e ranking;
- controles nativos de formulário com rótulos e grupos identificados;
- barra de progresso com valor numérico e textual;
- contexto longo focável e rolável;
- feedbacks, erros, salvamento e proximidade expostos por `status` ou `alert` quando aplicável;
- ranking com legenda, região rolável nomeada e indicação textual do jogador atual;
- alternativas corretas/incorretas com texto e símbolo, sem depender somente de cor;
- puzzles operáveis por botões, teclado, mouse e toque;
- Canvas acompanhado por instruções, legenda, estado e controles HTML;
- paleta principal verificada pelos testes de contraste WCAG AA;
- transições desativadas quando há preferência por movimento reduzido.

A validação automatizada inspeciona a semântica que será consumida por leitores de tela, mas não substitui uso humano. A homologação com NVDA no Windows e VoiceOver em dispositivos Apple continua como pendência externa.

## Integridade de conteúdo e armazenamento

A validação confirmou:

- 60 objetos `question` e seis objetos `sequence`;
- 66 IDs únicos, sem ausências ou adicionais;
- gabaritos e ordem das alternativas iguais aos documentos auditados;
- cinco cursos e vinte questões elegíveis por curso;
- dez questões comuns e dez específicas por curso;
- distribuição 7 introdutórias, 9 intermediárias e 4 avançadas por curso;
- dois puzzles elegíveis por curso, um comum e um específico;
- status `provisional-pending-teacher-review` em todos os itens;
- ausência da palavra `ENADE` nos campos exibidos ao jogador; ela permanece somente em referências internas permitidas;
- compatibilidade das chaves atuais de LocalStorage e dos formatos antigos;
- ranking inteiramente local, sem requisições para serviços externos.

Nenhum arquivo de conteúdo, schema, gabarito ou coleção foi modificado nesta validação.

## Evidências visuais

O Playwright gerou capturas temporárias, não versionadas, em `test-results/`. As principais evidências foram:

- `desafio-texto-longo.png` em desktop/equivalente a 200% e celular;
- `base-n9.png` em desktop e celular;
- `inicio.png`, `selecao.png` e `central.png` em desktop e celular;
- `questao.png`, `feedback.png` e `resultado.png` em desktop e celular;
- `sequencia-concluida.png`, `sequencia-blocos.png` e `puzzle-trc-concluido.png`.

As capturas confirmaram ausência de cortes horizontais, rótulos legíveis no mapa, controles virtuais com área adequada, texto integral dos desafios, cartões responsivos e ranking navegável por rolagem.

## Verificações executadas

| Comando/verificação | Resultado |
| --- | --- |
| `npm test` | 21 arquivos e 247 testes aprovados |
| `npm run validate:content` | 6 arquivos e 128 testes de conteúdo/contrato aprovados |
| `npm run test:e2e` | 65 aprovados, 1 dispensado, 0 falhas, desktop e celular |
| `npm run lint` | aprovado, sem erros |
| `npm run typecheck` | aprovado, sem erros |
| `npm run build` | aprovado; 152 módulos transformados |
| `git diff --check` | aprovado, sem erros de whitespace |
| inspeção visual isolada | aprovada nas telas e capturas listadas |
| encerramento do servidor Playwright | normal, sem travamento residual |

O caso dispensado no Playwright é a repetição móvel do teste agregado que resolve os quatro puzzles específicos restantes. O puzzle comum e o específico de SI, incluindo toque, arraste e teclado, já são executados integralmente nos projetos desktop e celular. Não houve caso funcional ignorado sem cobertura equivalente.

## Pendências externas e limitações conhecidas

- homologação humana com NVDA e VoiceOver;
- teste em dispositivos físicos e combinações adicionais de navegador/zoom do sistema;
- revisão docente dos 66 conteúdos provisórios;
- cotejo externo de originalidade e validação institucional das referências;
- Arena sem reserva editorial além das vinte questões exatas;
- ranking restrito ao dispositivo, conforme informado na interface.

Essas pendências não bloqueiam uma publicação controlada de teste, desde que o aviso de conteúdo em validação pedagógica e a natureza local do ranking permaneçam visíveis.

## Decisão final

**APROVADO PARA PUBLICAÇÃO DE TESTE.**

O MVP está funcional e coerente nos fluxos cobertos, com integridade preservada e sem falhas abertas de gravidade bloqueadora, alta ou média. A publicação não foi realizada nesta etapa.
