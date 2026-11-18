# N9 — Jornada Digital — backlog de implementação

Versão 1.0 • 12/11/2026 • Referência: [arquitetura.md](arquitetura.md).

Este backlog planeja a implementação; nenhuma tarefa abaixo é declarada concluída nesta entrega documental. Cada linha é uma entrega revisável, idealmente um PR pequeno. O tamanho é relativo: **P** = mudança localizada; **M** = integração de poucos módulos. Não são prazos. Dividir uma tarefa se ultrapassar esse recorte.

## 1. Escopo e marcos

O MVP publica uma única fase comum, `FASE-COMUM-01`, com os mesmos dez itens para CC, SI, TADS, TGTI e TRC. Inclui tela inicial, seleção de curso, mapa, feedback explicativo, pontuação, resultado, três conquistas, revisão de erros e progresso local. Questões ainda precisam ser escritas e aprovadas: os anexos contêm slots, não um banco pronto.

| Marco | Resultado demonstrável | Portão de saída |
| --- | --- | --- |
| A — Fundação | Projeto verificável, modelos e conteúdo de teste | Regras de elegibilidade e pontuação testáveis sem Phaser |
| B — Fatia vertical | Um item sintético com feedback e retomada | Recarregar não perde resposta nem duplica pontos |
| C — Jornada completa | Dez terminais, resultado, revisão e conquistas | Fluxo completo com fixtures, separado de publicação |
| D — MVP validado | Conteúdo aprovado, dispositivos e acessibilidade | Todos os critérios de lançamento atendidos |
| E — Piloto | Jogo estático publicado gratuitamente | Smoke test no endereço final e observações do piloto |

A trilha editorial pode avançar enquanto se implementam as mecânicas. Publicar para estudo depende de ambas. Não criar cinco campanhas para liberar o MVP.

## 2. Fundação — prioridade P0

| ID | Entrega | Tam. | Depende de | Critérios de aceite |
| --- | --- | --- | --- | --- |
| F01 | Iniciar Vite + TypeScript + Phaser 3 | P | — | Build vazio abre via servidor; Phaser permanece na versão 3.x; strict habilitado; lockfile e Node compatível registrados; sem CDN |
| F02 | Configurar verificações básicas | P | F01 | Scripts de lint, tipos e Vitest executam localmente; CI de PR reproduz os checks; falha impede merge conforme política do repositório |
| F03 | Criar domínio de cursos e áreas | P | F01 | Cinco siglas aceitas; área COMUM guarda cursos explícitos; desconhecidos e listas vazias são rejeitados |
| F04 | Preservar anexos e mapear catálogo | M | F03 | Fonte editorial permanece íntegra; transformação documentada conserva os 39 códigos, vínculos e evidências; zero itens planejados é tratado como inventário aprovado |
| F05 | Definir schema de questões e fixtures | M | F03 | Schema exige cinco alternativas, um gabarito e feedback A–E; pelo menos um fixture completo e casos inválidos; fixtures fora do banco publicável |
| F06 | Validar relações e elegibilidade | M | F04, F05 | IDs, áreas, fontes e versões resolvem; COMUM-TEC10 rejeitado para TRC; questão não ganha curso só por categoria COMUM; parecer deve corresponder à versão |
| F07 | Modelar tentativa e regras puras | M | F05 | Confirmação única por questão; resultado 0–1.000; revisão não altera inicial; dez respostas sem dez feedbacks ainda não concluem |
| F08 | Modelar fase e manifesto | P | F06 | Dez slots NEXO-01…10 na ordem da matriz; refs por ID/versão; fase com slot ausente, duplicado ou inelegível é rejeitada |

**Demonstração A:** executar testes com 0, 8 e 10 acertos e exemplos positivos/negativos de compartilhamento; nenhum teste exige canvas. A contagem planejada de 111 questões não deve ser confundida com conteúdo distribuível.

## 3. Fatia vertical — prioridade P0

| ID | Entrega | Tam. | Depende de | Critérios de aceite |
| --- | --- | --- | --- | --- |
| V01 | Contratos de repositório e GameSession | P | F07, F08 | Casos de uso recebem dependências; apresentação não escreve LocalStorage nem calcula pontos; eventos têm payload tipado |
| V02 | Envelope e adaptador de progresso | M | V01 | Save/load validam schema; chave com namespace; roundtrip mantém resposta e feedback; exceção de storage retorna status, sem travar sessão |
| V03 | Recuperação e incompatibilidade | M | V02 | JSON inválido, backup e versão futura têm caminhos explícitos; migração testada com fixture; versão ausente de questão não usa gabarito atual silenciosamente |
| V04 | Shell HTML e bootstrap do Phaser | P | V01 | Boot/Preload carregam dependências; DOM responsivo disponível; erro de conteúdo permite retorno/tentar novamente; listeners são limpos |
| V05 | Vista acessível de uma questão | M | V04, F05 | Título, enunciado, radios, confirmação e foco funcionam só por teclado; solução ausente antes da resposta; nenhuma informação essencial só no canvas |
| V06 | Confirmar e apresentar feedback | M | V05, F07, V02 | Correta/errada em texto; justificativa da escolhida, gabarito e explicações das demais disponíveis; acesso ao feedback persistido; Enter/duplo toque não duplicam resposta |
| V07 | Retomar no ponto correto | M | V03, V06 | Recarregar entre confirmação e feedback mostra feedback pendente; após feedback retoma próximo estado; seleção não confirmada não vira resposta; pontos preservados |
| V08 | Smoke E2E da fatia | P | V07 | Playwright confirma, recarrega e verifica estado/score; inclui storage indisponível; teste usa conteúdo sintético explicitamente |

**Demonstração B:** jogar um item, interromper após confirmar, recarregar e consultar explicação. Não ampliar cenários antes de comprovar essa retomada.

## 4. Jornada completa — prioridade P0

| ID | Entrega | Tam. | Depende de | Critérios de aceite |
| --- | --- | --- | --- | --- |
| J01 | Tela inicial e preferências | P | V04, V02 | Iniciar/continuar coerentes com save; introdução opcional; som desligado; redução de movimento respeitada; preferências persistem |
| J02 | Seleção dos cinco cursos | P | J01, F06 | Sigla e nome completos; seleção salva; cinco trilhas informadas como planejadas; curso não muda pontuação nem os dez IDs comuns |
| J03 | Mapa de dez terminais | M | J02, F08 | Cenas Phaser e lista HTML usam mesmos comandos; quatro estados visuais com texto; toque, clique e teclado funcionam sem movimentação precisa |
| J04 | Sequência de dez itens | M | J03, V07 | Pode voltar ao mapa e continuar; respostas travadas não são sobrescritas; conclusão só após dez feedbacks; errar todos permite terminar |
| J05 | Resultado e nova tentativa | P | J04 | Exibe acertos, pontos, pendências e contato prévio; repetir cria ID próprio; primeiro/melhor resultado separados; não soma tentativas |
| J06 | Troca de curso preservando histórico | P | J02, J05 | Curso da tentativa é imutável; troca no mapa mantém histórico da fase comum; nenhuma cópia ou novo acerto por curso |
| J07 | Criar fila de erros | P | V06, J04 | Cada erro registra questão/versão/tentativa e área; fila acessível após primeiro erro; não perde pendência ao sair |
| J08 | Responder na revisão | M | J07 | Sem solução prévia no DOM; erro permanece pendente; acerto marcado separado; sair sem confirmar não altera; pontos iniciais intactos |
| J09 | Selos locais | P | J05, J08 | Três condições da arquitetura testadas, com limites 7/8 acertos; desbloqueio idempotente; todos os selos são opcionais |
| J10 | Exclusão explícita e limites de histórico | M | J09, V03 | Reset exige confirmar e só remove namespace do jogo; compactação preserva ativo, pendências, resumos e selos; tamanho do envelope medido |
| J11 | Proteção contra conflito de abas | P | V02, J10 | storage com revisão divergente pausa edição e informa recarga; não há promessa de merge; teste cobre conflito detectável |
| J12 | Falha gráfica e animações leves | P | J03 | Renderer Canvas usado se WebGL falhar; fluxo DOM utilizável sem cenário; efeitos pausam fora de foco e respeitam movimento reduzido |

**Demonstração C:** concluir dez fixtures com erros, revisar ao menos um, repetir a fase, trocar curso e recarregar. Conferir zero acúmulo indevido de pontos e acesso integral pelo DOM.

## 5. Conteúdo editorial — prioridade P0 para lançamento

Não redigir todo o banco de 111 itens antes do piloto. O MVP exige apenas dez questões completas, com quatro distratores plausíveis cada e explicações de todas as alternativas. Pareceres são por versão e curso; revisão dos cinco cursos pode ser organizada em um mesmo ciclo, sem dispensar os cinco registros.

| ID | Entrega | Tam. | Depende de | Critérios de aceite |
| --- | --- | --- | --- | --- |
| C01 | Checklist e registro de autoria/revisão | P | F04, F05 | Template exige objetivo, competência interna, área, cursos, dificuldade, fonte/localizador, acessibilidade e parecer por curso; critérios de aprovação claros |
| C02 | Autorar NEXO-01 e NEXO-02 | M | C01 | Dois itens completos sobre educação/dados e direitos/informação pessoal; sem cobrar lei não especificada; status em revisão |
| C03 | Autorar NEXO-03 e NEXO-04 | M | C01 | Comunicação/cultura e intervenção socioambiental; dados suficientes no caso; alternativas e explicações completas |
| C04 | Autorar NEXO-05 e NEXO-06 | M | C01 | Trabalho/cidadania e ciência/inovação; objetivos distintos de NEXO-02; fontes rastreáveis |
| C05 | Autorar NEXO-07 e NEXO-08 | M | C01 | Acessibilidade e rede introdutória; diagramas têm descrição; sem configuração avançada de protocolo |
| C06 | Autorar NEXO-09 e NEXO-10 | M | C01 | SO e proteção introdutórios; recorte universal revisável; sem pressupor administração especializada |
| C07 | Revisar primeiros cinco itens | M | C02, C03, C04 | Parecer dos cinco cursos para NEXO-01…05; gabarito único, sem ambiguidade conhecida; pendências corrigidas e nova versão revisada |
| C08 | Revisar últimos cinco itens | M | C04, C05, C06 | Mesmo critério para NEXO-06…10; aprovação não é herdada da situação da área |
| C09 | Montar catálogo publicável | P | C07, C08, F08 | Dez refs exatas, sete FG e três técnicas; mesmos IDs elegíveis para cinco cursos; fontes/pareceres completos; fixtures excluídas |
| C10 | Rever apresentação e direitos de uso | P | C09 | Textos distinguem jogo e exame; sem alegar chancela/cobertura integral; assets e itens autorizados; explicações legíveis no celular |

**Bloqueio editorial:** qualquer item sem aprovação para um dos cinco cursos impede publicar a fase como universal. Ajustar e revisar o item, sem reduzir arbitrariamente o total, copiar uma questão para outro curso ou reintroduzir o recorte antigo da visão.

## 6. Qualidade e lançamento — prioridade P0

Os testes críticos de cada comportamento entram junto da respectiva entrega. Esta etapa integra cenários e verifica condições reais; não é uma autorização para adiar testes até o final.

| ID | Entrega | Tam. | Depende de | Critérios de aceite |
| --- | --- | --- | --- | --- |
| Q01 | Layout móvel e reflow | M | J05, J08 | Fluxo em 360 px sem cortes/horizontal; reflow em 320 CSS px; textos longos, zoom, toque e rotação preservam controles e estado |
| Q02 | Auditoria por teclado e leitor de tela | M | Q01, J12 | Completar, revisar e resetar pelo teclado; foco previsível; leitor anuncia estado; canvas não duplica conteúdo; achados críticos corrigidos |
| Q03 | Suíte E2E dos cinco cursos | M | J06, J09, V08 | Jornada parametrizada por curso; todos certos/errados, 8 acertos, revisão e nova tentativa; roda Chromium/Firefox/WebKit |
| Q04 | Casos de falha e atualização | M | J10, J11, V03 | Quota, bloqueio, JSON corrompido, backup, versão futura, conteúdo removido e interrupção no décimo feedback têm resultado definido |
| Q05 | Verificação de rede e pacote | P | C09, J12 | Nenhuma dependência de IA/API paga/CDN; conteúdo local empacotado; medir meta inicial de 3 MB comprimidos; após carga completa jogar sem rede |
| Q06 | Homologação em aparelhos reais | M | Q01, Q02, Q03 | Android/Chrome e iOS/Safari reais testados; registrar modelos/versões; revisar leitura, toque, armazenamento, orientação e áudio opcional |
| Q07 | Preparar Pages e build com subdiretório | P | F02, Q03, C10 | Vite base correto, CI publica dist, reload e assets resolvem no caminho de projeto; sem incluir dados pessoais ou segredos |
| Q08 | Gate de release | P | Q02, Q04, Q05, Q06, Q07 | Checklist abaixo aprovado; tag/commit e versões de conteúdo/save registradas; rollback descrito |
| Q09 | Publicar e fazer smoke final | P | Q08 | HTTPS gratuito disponível; cinco seleções, dez questões, explicações, resultado e retomada funcionam no endereço final; nenhum conteúdo de teste |

Hospedagem proposta: GitHub Pages em repositório público no GitHub Free, respeitando limites vigentes. Procedimento e referências em arquitetura §15 e §17. Não executar deploy nesta etapa de planejamento.

### Checklist obrigatório do MVP

- [x] Tela inicial e seleção real entre CC, SI, TADS, TGTI e TRC. (Primeira entrega; demais critérios do MVP permanecem pendentes.)
- [ ] Mapa simples de dez terminais e alternativa HTML completa.
- [ ] Uma fase comum de dez questões aprovadas para todos, sem duplicação por curso.
- [ ] Cinco alternativas, uma correta, confirmação e feedback de todas as alternativas.
- [ ] Pontuação de 0–1.000, sem penalidade, velocidade ou duplicação.
- [ ] Resultado após dez respostas e dez feedbacks; nenhum bloqueio por nota.
- [ ] Três conquistas e revisão preservando desempenho inicial.
- [ ] Retomada após resposta/feedback/revisão; reset explícito e armazenamento indisponível tratados.
- [ ] Fluxo completo em computador e celular, teclado e leitor de tela.
- [ ] Checks automatizados passam; nenhum defeito crítico conhecido sem correção.
- [ ] Zero chamadas a IA ou APIs pagas na partida; primeiro acesso online explicado.
- [ ] Aviso de progresso restrito a navegador/origem e de trilhas ainda planejadas.
- [ ] Publicação estática gratuita com smoke test e versão identificável.

## 7. Piloto e decisão de expansão — prioridade P1

| ID | Entrega | Tam. | Depende de | Critérios de aceite |
| --- | --- | --- | --- | --- |
| P01 | Preparar roteiro e instrumentos | P | Q08 | Sessão exploratória consentida, sem cadastro remoto obrigatório; roteiro inclui interrupção/retomada, revisão e avaliação da linguagem |
| P02 | Executar piloto de 10–15 estudantes | M | Q09, P01 | Buscar ao menos dois de cada curso; registrar familiaridade prévia, dispositivos e necessidade de ajuda; dados limitados ao necessário |
| P03 | Analisar resultados e corrigir barreiras | M | P02 | Separar falhas operacionais, conteúdo e sinais de aprendizagem; priorizar problemas de qualquer curso; correções têm regressão pertinente |
| P04 | Decidir expansão | P | P03 | Revisores avaliam critérios abaixo; ampliar somente após barreiras críticas resolvidas; registrar o que foi ou não sustentado pelo piloto |

Metas propostas na visão: 80% de conclusão sem ajuda operacional; 80% avaliando clareza das explicações com 4/5 ou 5/5; 70% de quem errou revisando ao menos um item; ganho médio de um acerto em avaliação externa de cinco itens equivalentes inéditos, revisados por docentes. Se ninguém errar, indicador de revisão não se aplica. Essas metas não são resultados já obtidos nem prova causal de eficácia; a amostra é exploratória. Avaliações externas não entram nos dez itens do banco MVP.

## 8. Expansões fora do MVP — prioridade P2/P3

| ID | Entrega futura | Prioridade | Pré-condição | Aceite resumido |
| --- | --- | --- | --- | --- |
| X01 | Exportar/importar progresso | P2 | P04 e schema estabilizado | Arquivo versionado validado; confirmação de substituição; backup e rejeição de payload inválido |
| X02 | Fase específica de CC | P2 | P04 e dez itens aprovados para CC | Dois fundamentos e oito itens dos quatro blocos; respeitar slots e IDs novos previstos na matriz |
| X03 | Fase específica de SI | P2 | P04 e dez itens aprovados para SI | Mesmas garantias; nenhum item liberado apenas por compartilhar código Cine com TADS |
| X04 | Fase específica de TADS | P2 | P04 e dez itens aprovados para TADS | Dez slots da matriz; contexto próprio; não duplicar questões só para etiqueta de curso |
| X05 | Fase específica de TGTI | P2 | P04 e dez itens aprovados para TGTI | Dificuldade por competência, sem simplificar por modalidade de graduação |
| X06 | Fase específica de TRC | P2 | P04 e dez itens aprovados para TRC | Manter recortes de redes; não incorporar banco de dados sem evidência/revisão |
| X07 | Itens inéditos equivalentes | P2 | P04 e autoria validada | Avaliar transferência em problema diferente; preservar exposição e versões |
| X08 | Revisão espaçada | P2 | X07 | Intervalos 1/7/21 dias configuráveis, sem punição por atraso ou alegação de domínio automático |
| X09 | PWA e reabertura offline | P2 | P04 | Service worker versionado; atualização sem misturar catálogo/save; offline após instalação testado |
| X10 | Ferramenta local de autoria | P3 | Schemas e revisão editorial maduros | Editor produz JSON validável e pareceres; sem executar HTML/código arbitrário |
| X11 | Distritos e operação integrada | P3 | Fases específicas avaliadas | Respeitar recomendações sem bloqueio por nota; medir efeito antes de novos tipos de interação |

X02–X06 têm igual prioridade; não há ordem de superioridade entre cursos. Na execução, dividir cada fase específica em autoria de pequenos lotes, pareceres, associação de slots, teste e publicação, como C02–C10. Usar o mesmo runtime e catálogo: nenhum fork por curso.

Login, sincronização e relatórios remotos ficam sem compromisso de entrega, pois exigiriam nova decisão de infraestrutura, privacidade e custo. Ranking público, competição por velocidade, APIs pagas e IA em partida não são necessários para os objetivos do jogo.

## 9. Ordem recomendada e definição de pronto

Ordem principal: **F → V → J → Q → P**. Autoria **C** avança após os schemas e converge em C09 antes dos testes finais com conteúdo real. Dar preferência a uma mudança demonstrável por PR, evitando uma entrega que reúna todo o mapa, regras, storage e autoria.

Uma entrega está pronta quando seu critério observável é demonstrado, os testes relevantes passam, tipos/build continuam válidos e documentação afetada foi atualizada. Para interfaces, incluir teclado e tela estreita na verificação. Para conteúdo, schema válido não substitui parecer docente. Para release, nenhuma aprovação técnica substitui os critérios editoriais e de acessibilidade.


## 10. Primeira entrega — concluída em 12/11/2026

Esta seção é o acompanhamento operacional da primeira implementação autorizada. As seções anteriores preservam o planejamento do MVP completo; funcionalidades futuras não são consideradas prontas por existir a estrutura de pastas.

- [x] Vite com TypeScript estrito, Phaser 3.90.0 local e lockfile.
- [x] Camadas e pastas da arquitetura organizadas; espaços futuros reservados com .gitkeep.
- [x] Tela inicial e botão “Iniciar missão”.
- [x] Seleção e confirmação de CC, SI, TADS, TGTI ou TRC.
- [x] Curso guardado em uma única sessão em memória; recarga limpa a escolha.
- [x] Central Nexo provisória após confirmação; troca de curso e retorno ao início.
- [x] Elementos simples, controles HTML, teclado, foco e layout de computador/celular.
- [x] Build e tipos, lint, 15 testes de unidade/DOM e 14 testes E2E aprovados.
- [x] Documentos originais preservados; cópias em docs/fontes e comparação byte a byte.

| Item do backlog | Estado nesta entrega |
| --- | --- |
| F01 | Concluído: projeto local, build, Phaser 3.x, strict, lockfile e Node documentado. |
| F02 | Checks locais concluídos e workflow criado; execução remota e política de merge pendentes. |
| F03 | Parcial: catálogo e domínio dos cinco cursos; domínio de áreas fica para entrega futura. |
| F04 | Somente preservação documental concluída; transformação do catálogo ainda pendente. |
| V01 / V04 | Base de sessão em memória, bootstrap e shell HTML concluídos neste recorte; repositórios, conteúdo e salvamento pendentes. |
| J01 / J02 | Início e seleção funcionam; preferências, retomada e persistência do MVP continuam pendentes. |
| J03 | Somente cena provisória; mapa de dez terminais não implementado. |
| Q01 / Q02 / Q03 | Fluxo inicial testado em Chromium desktop/mobile, teclado e reflow; jornada completa, leitores de tela e aparelhos reais pendentes. |

Questões, terminais interativos, pontuação, resultado, revisão, conquistas e persistência continuam no backlog. Login, servidor, banco, ranking online, APIs pagas e IA em tempo real continuam fora desta entrega.

Detalhes, limitações e lista completa de arquivos: [entrega-01.md](entrega-01.md). Como iniciar: [README.md](../README.md). Desenvolvimento encerrado nesta etapa, aguardando autorização para continuar.


## 11. Segunda entrega — fase de exemplos concluída em 13/11/2026

Versão 0.2.0, restrita à fase jogável solicitada com questões fictícias. A fase `FASE-EXEMPLO-01` é separada do catálogo pedagógico futuro; não representa aprovação docente, conteúdo oficial do ENADE ou conclusão do MVP.

- [x] Carregar catálogo JSON local com validação de schema e relações.
- [x] Aceitar COMUM, CC, SI, TADS, TGTI e TRC, com listas explícitas de múltiplos cursos.
- [x] Filtrar nove exemplos compartilhados e um específico por curso; exatamente dez na fase.
- [x] Enunciado, contexto, cinco alternativas e confirmação única.
- [x] Bloqueio após confirmar, acerto/erro, gabarito e explicações.
- [x] Pontuação derivada, 100 por acerto e total de 0 a 1.000 sem acúmulo entre partidas.
- [x] Indicador Questão X de 10 e resultado após dez respostas e feedbacks apresentados.
- [x] Último resultado de exemplo salvo no LocalStorage e apresentado no menu após recarga.
- [x] Tratamento de JSON salvo inválido, armazenamento bloqueado/quota e nova tentativa de salvar.
- [x] Retorno ao menu, mouse, teclado, toque emulado e telas pequenas.
- [x] Lint, 64 testes de unidade/DOM, validação de conteúdo, build e 32 E2E aprovados.

| Itens do planejamento | Alcance comprovado nesta entrega |
| --- | --- |
| F03 / F05 / F06 | Modelo de questões, seis classificações, cursos explícitos, schemas e elegibilidade de exemplos. Domínio das 39 áreas, fontes e aprovação editorial continuam pendentes. |
| F07 | Resposta única, score derivado e conclusão após dez feedbacks implementados para a fase de exemplo. Revisão e conquistas continuam pendentes. |
| F08 | Exatamente dez questões elegíveis por curso na fase de demonstração. Manifesto e slots pedagógicos do MVP continuam pendentes. |
| V01 / V02 / V03 | Contratos injetados de conteúdo e resultado; resumo versionado em chave própria, validação e tratamento de falhas. Envelope de progresso, backup e migrações do MVP continuam pendentes. |
| V05 / V06 | Controles HTML acessíveis, foco, confirmação, feedback e bloqueio de repetição demonstrados. Respostas individuais não são persistidas nesta entrega. |
| J03 | Central com acesso à fase de exemplo; mapa de dez terminais continua pendente. |
| J04 / J05 | Jornada de dez exemplos e resultado funcional; nova partida não acumula pontos. Retomada, primeiro/melhor resultado e histórico continuam pendentes. |
| Q01 / Q02 / Q03 / Q04 | Reflow, teclado, toque emulado, cinco cursos e falhas de resultado testados em Chromium. Aparelhos reais, outros motores e leitores de tela continuam pendentes. |
| C01–C10 / J07–J11 / Q07–Q09 | Sem implementação nesta entrega: revisão docente, revisão de erros, conquistas, conflitos entre abas e publicação permanecem planejados. |

O modelo de exemplo aceita listas de vários cursos e não interpreta COMUM como autorização universal. Há 14 questões no catálogo e dez apresentadas por curso. A variação específica é apenas uma demonstração de filtragem, não uma campanha ou trilha publicada.

Somente o último resultado concluído é persistido, na chave `missao-enade:example-result:v1`. Sair ou recarregar encerra a partida incompleta; retomada permanece para outra entrega autorizada. Resultados de exemplo não são misturados ao futuro save pedagógico.

Relatório, limitações e lista de arquivos: [entrega-02.md](entrega-02.md). Instruções: [README.md](../README.md). Escopo encerrado nesta entrega; nenhuma funcionalidade posterior foi iniciada.

## 12. Identidade Nexus — Jornada Digital — 13/11/2026

Posicionamento atualizado conforme decisão pedagógica: experiência permanente e lúdica de desenvolvimento de competências em tecnologia. ENADE passa a ser origem pedagógica interna, com primeira coleção `enade-2026`. Futuras origens: PPCs, disciplinas, nivelamento, projetos e certificações.

- [x] Localizar referências ao nome anterior na apresentação e nos documentos.
- [x] Substituir identidade visível por Nexus — Jornada Digital.
- [x] Centralizar nome, subtítulo, textos principais, metadados e títulos em `src/config/game.ts`.
- [x] Usar desafio, missão, pontuação e relatório da missão nos fluxos existentes.
- [x] Registrar missão especial e laboratório de treinamento como vocabulário de capacidades futuras, sem implementá-las.
- [x] Registrar `enade-2026` apenas nos metadados pedagógicos internos.
- [x] Preservar trilhas CC, SI, TADS, TGTI e TRC, conteúdo demonstrativo, regras e chave do LocalStorage.
- [x] Manter referências oficiais e fontes históricas em `docs/fontes`.
- [x] Criar checkpoint local antes das alterações: `cd24181`.
- [x] Validar lint, build, 71 testes de unidade/DOM e 36 testes E2E; registrar a entrega e o commit local solicitado.

Os itens das entregas anteriores são históricos. Nesta etapa, “questão” corresponde ao desafio apresentado ao jogador, “resultado” ao relatório da missão e “revisão de erros” ao futuro laboratório de treinamento. Os critérios pedagógicos de validação continuam vigentes, e a missão de exemplos não foi convertida em conteúdo oficial.

Referências remanescentes a ENADE em fontes, normas, histórico, nome técnico do pacote, pasta do projeto e chave legada são internas. Não renomear contratos persistidos por motivo editorial.

Relatório completo e arquivos alterados: [identidade-nexus.md](identidade-nexus.md). Commit solicitado: `refactor: nova identidade Nexus Jornada Digital`. Mudança restrita à identidade, sem nova funcionalidade ou publicação.

## 13. Identidade provisória N9 — Jornada Digital — 13/11/2026

N9 é um nome provisório sujeito à aprovação institucional. A associação conceitual com a Universidade Nove de Julho não afirma vínculo ou produto oficial. O subtítulo é Jornada Digital. A seção 12 e seu relatório são histórico da identidade anterior.

- [x] Confirmar Git limpo no início, em `9274083`, sem alterações pendentes.
- [x] Localizar as ocorrências da identidade anterior em configuração, código, testes e documentação.
- [x] Trocar a identidade vigente por N9 — Jornada Digital a partir da configuração central.
- [x] Manter Jornada Digital como subtítulo e usar um monograma textual próprio, sem recursos oficiais.
- [x] Preservar referências pedagógicas internas, trilhas, desafios, mecânicas, pontuação, IDs, armazenamento e pasta do projeto.
- [x] Registrar a aprovação institucional pendente, sem logotipo, slogan, brasão, imagens de campi ou cores oficiais.
- [x] Validar lint, 71 testes de unidade/DOM, build e 36 testes E2E; registrar a entrega e o commit local `refactor: identidade provisoria N9 Jornada Digital`.

Não havia Base Nexus, Universo Nexus ou Arena Nexus na narrativa ativa. Nexo, nome da cidade fictícia e parte do conteúdo existente, permanece. Ocorrências históricas de Nexus em relatórios anteriores, mensagem de commit e identificação de um relatório legado de teste são preservadas para rastreabilidade, sem exibição ao jogador.

Relatório desta alteração: [identidade-n9.md](identidade-n9.md). Não publicar nem iniciar novas funcionalidades nesta etapa.

## 14. Exploração 2D — Base N9 — 13/11/2026

- [x] Inspecionar Git, arquitetura, backlog e implementação antes da alteração; início limpo em `53be5bb`.
- [x] Primeiro mapa em visão superior, personagem controlável e gráficos geométricos provisórios.
- [x] Movimento com setas/WASD e controles virtuais; colisões com paredes, objetos e limites.
- [x] Computador, Lia, porta bloqueada e terminal tecnológico na Base N9.
- [x] Indicação de proximidade e interação por E, Espaço ou botão; diálogo curto de missão.
- [x] Computador abre os dez desafios existentes; preservar filtragem nos cinco cursos, conteúdo, explicações, pontuação e relatório.
- [x] Voltar do relatório à posição anterior do mapa; liberar porta após conclusão, sem mínimo de pontos.
- [x] Persistir posição, missão e porta em `n9:exploration:v1`, separadamente do relatório legado.
- [x] Dados de mapa extensíveis e lógica de exploração independente do renderer.
- [x] Layout adaptável e navegação por teclado, mouse e toque emulado.
- [x] Validar lint, compilação, 79 testes de unidade/DOM e 44 testes E2E. Repetir oito cenários de exploração após o ajuste de layout; registrar a entrega no commit local `feat: mapa inicial e exploracao 2D`.

Relatório e lista completa dos arquivos: [entrega-exploracao-2d.md](entrega-exploracao-2d.md).

A missão pode ser aceita com Lia ou iniciada diretamente pelo computador. Encerrar fase incompleta preserva apenas exploração e o relatório anterior; retomada de respostas permanece pendente. O terminal informa o limite da região implementada. Novos mapas, conteúdo aprovado, combate, salto, inventário complexo, multiplayer, servidor e banco online não foram implementados.

Testes em Android/iOS físicos, outros motores e leitores de tela permanecem pendentes. Não houve publicação.

## 15. Primeiro quebra-cabeça tecnológico — Sequência Lógica — 13/11/2026

Início com Git limpo em `d862c80`. Escopo exclusivo: um tipo reutilizável, três exemplos provisórios, pendentes de revisão docente.

- [x] Revisar arquitetura e integração; tornar o terminal acessível antes da porta.
- [x] Criar modelo JSON com metadados completos, schema e contratos reutilizáveis.
- [x] Adicionar somente exemplos de algoritmo, incidente de TI e configuração de rede.
- [x] Abrir pelo terminal e oferecer os três conteúdos aos cinco cursos.
- [x] Reorganizar quatro a sete blocos por arraste com mouse/toque, teclado e botões.
- [x] Validar, apresentar dica após erro e disponibilizar dicas progressivas sem resposta imediata.
- [x] Sem cronômetro obrigatório e sem perda de XP por erro.
- [x] Explicação após acerto, 100 XP por primeira conclusão de cada ID, registro e porta liberada.
- [x] Retornar à posição do mapa; repetir sem recompensa adicional.
- [x] Salvar ordem/dicas/tentativas/conclusões em `n9:puzzles:v1`, sem alterar o relatório existente.
- [x] Preservar o fluxo dos dez desafios e a liberação de porta pela missão anterior.
- [x] Tratar salvamento bloqueado, dados inválidos, versões futuras e reposicionamento de save antigo atingido pelo terminal.
- [x] Aprovar 100 testes de unidade/DOM, lint, TypeScript, compilação e 52 testes de navegador (computador/celular com toque emulado), incluindo regressão dos cinco cursos. Capturas revisadas.
- [x] Registrar entrega no commit local `feat: primeiro quebra-cabeca tecnologico`, sem publicação.

Relatório e lista completa dos arquivos: [entrega-sequencia-logica.md](entrega-sequencia-logica.md).

Não foram implementados outros tipos de quebra-cabeça, novos mapas, servidor, publicação ou funcionalidades posteriores. Conteúdo segue provisório até revisão docente. Testes em aparelhos reais, outros motores e leitores de tela continuam pendentes.

## 16. Contratos editoriais generalizados — 13/11/2026

Base de código em e19b44a; os dois documentos da etapa de levantamento estavam sem commit e foram incorporados nesta entrega autorizada.

- [x] Revisar estrutura-dados-desafios, JSON documental, arquitetura, backlog, tipos, schemas, repositórios e testes.
- [x] Criar EditorialMetadata comum, três dificuldades, quatro fontes e quatro estados editoriais.
- [x] Permitir URL HTTP/HTTPS, ano e identificação documental opcionais, com validação estrita.
- [x] Generalizar mode, versão, fase e marcadores de compatibilidade das questões.
- [x] Generalizar dificuldade/fonte/status/coleção das sequências, sem outros tipos de puzzle.
- [x] Evoluir LearningCollection e registrar catálogo com planned/pilot/active/archived; rejeitar collectionId inexistente.
- [x] Normalizar formatos históricos sem mutar entrada; rejeitar metadados canônicos incompletos e campos desconhecidos.
- [x] Migrar somente metadados dos 14 exemplos de questões e três sequências, preservando conteúdo e recompensas.
- [x] Preservar IDs e todos os formatos/chaves/adaptadores de progresso; validar recibos e relatório anteriores sem escrita.
- [x] Manter additionalProperties: false em objetos editoriais.
- [x] Atualizar [estrutura de dados](estrutura-dados-desafios.md), [JSON canônico](exemplo-desafios.json) e [especificação documental de missão mista](especificacao-missao-mista.md).
- [x] Documentar integração de areas.json como futura; não importar nem conectar missão mista ao runtime.
- [x] Aprovar 143 testes Vitest/DOM, lint, TypeScript e compilação; build inclui 71 testes de contrato.
- [x] Aprovar 52 testes de navegador (computador/celular) e conferência de exemplos documentais; registrar o commit local refactor: generaliza contratos editoriais dos desafios, sem publicação.

Nenhum conteúdo aprovado real foi inserido. Exemplos distribuídos continuam fictícios/pendentes; aprovação nos testes é somente fixture técnico. Nenhuma mudança de interface, mapa, mecânicas, pontuação, GameSession ou armazenamento. Nenhuma publicação.

Pendências futuras: política de importação/publicação por revisão docente/coleção; integração revisada de áreas/competências; execução e relatório de novas fases; implementação de missão mista e versionamento de recompensas. Nenhuma dessas pendências foi implementada.

## 17. Quantidade configurável de questões por missão — 13/11/2026

Git inicialmente limpo em `57d62a2`. Escopo: separar banco elegível, configuração e seleção de questões; sem alteração do banco pedagógico, interface, mapa ou puzzles.

- [x] Revisar plano de 66 desafios, estrutura de dados, especificação de missão mista, arquitetura e backlog.
- [x] Repositório aceita banco maior que a missão e retorna todos os elegíveis, sem exigir dez.
- [x] Criar configuração estrita com id/título interno/total/comuns/específicas; validar soma, inteiros e total positivo.
- [x] Configurar rápida 3=1+2, normal 5=2+3, especial 10=5+5 e Arena 20=10+10.
- [x] Respeitar curso, classificação e coleção; não repetir IDs nem usar puzzles como questões.
- [x] Disponibilidade e erros com quantidades necessárias/disponíveis; nunca completar com conteúdo incompatível.
- [x] Seleção determinística e estratégia injetável, sem testes dependentes de sorte.
- [x] Entrada de exclusões por ID para futura fonte de histórico, sem tracking ou recomendação adaptativa.
- [x] Generalizar tentativa/progressão no domínio e preservar a configuração de compatibilidade dez=9+1 ligada ao computador.
- [x] Fixtures sintéticos comprovam bancos de sessenta, vinte por curso, seleção e progressão de 3/5/10/20.
- [x] Validar falta por categoria mesmo com total suficiente; Arena indisponível com 19 e disponível com vinte na proporção 10+10.
- [x] Preservar fontes de conteúdo, slots planejados, identidade, mapa, personagem, UI, regras/XP de puzzles e todos os saves.
- [x] Aprovar lint, TypeScript, 186 testes de unidade/DOM e compilação, incluindo 113 testes de contrato.
- [x] Aprovar 52 testes de navegador (computador/celular) e registrar commit local `refactor: quantidade configuravel de questoes por missao`, sem publicação.

### Disponibilidade com o catálogo provisório

Para CC, SI, TADS, TGTI e TRC: nove comuns + uma específica. A fase antiga de dez (9+1) continua disponível no computador. Rápida (1+2), normal (2+3), especial (5+5) e Arena (10+10) ficam indisponíveis, com déficit explícito. Não há novos botões ou ativação desses modos na interface. Não se exigem nem se criam agora as sessenta questões planejadas.

A seleção e progressão dos novos tamanhos estão disponíveis tecnicamente no domínio com conteúdo suficiente; orquestração visual e relatórios de outros tamanhos são futuros. Missão mista, integração pedagógica de áreas, recomendação adaptativa, login, serviços online e publicação permanecem fora de escopo.

### Arquivos modificados (11)

- [docs/arquitetura.md](arquitetura.md)
- [docs/estrutura-dados-desafios.md](estrutura-dados-desafios.md)
- [docs/backlog.md](backlog.md)
- [package.json](../package.json)
- [src/app/GameSession.ts](../src/app/GameSession.ts)
- [src/domain/models/Attempt.ts](../src/domain/models/Attempt.ts)
- [src/domain/progression.ts](../src/domain/progression.ts)
- [src/infrastructure/content/JsonContentRepository.ts](../src/infrastructure/content/JsonContentRepository.ts)
- [src/ports/ContentRepository.ts](../src/ports/ContentRepository.ts)
- [tests/unit/content.test.ts](../tests/unit/content.test.ts)
- [tests/unit/editorial.test.ts](../tests/unit/editorial.test.ts)

### Arquivos criados (8)

- [src/config/missions.ts](../src/config/missions.ts)
- [src/domain/QuestionSelection.ts](../src/domain/QuestionSelection.ts)
- [src/domain/models/QuestionMission.ts](../src/domain/models/QuestionMission.ts)
- [src/infrastructure/content/validateMissionConfig.ts](../src/infrastructure/content/validateMissionConfig.ts)
- [src/schemas/question-mission.schema.json](../src/schemas/question-mission.schema.json)
- [tests/fixtures/questionBanks.ts](../tests/fixtures/questionBanks.ts)
- [tests/unit/missions.test.ts](../tests/unit/missions.test.ts)
- [tests/integration/MissionAvailability.test.ts](../tests/integration/MissionAvailability.test.ts)

Nenhuma alteração em src/content, plano-colecao-enade-2026.md, especificacao-missao-mista.md, UI/estilos/cenas/mapa, lógica de puzzles/XP ou schemas/adaptadores de armazenamento. Nenhum conteúdo pedagógico criado; fixtures são exclusivos dos testes. Não houve publicação ou envio ao GitHub.

## 18. Governança editorial assistida por IA — 16/11/2026

As referências a revisão docente nas entregas 11–17 permanecem como histórico do estado do projeto naquelas datas e não definem a política ativa.

- [x] Substituir os quatro estados ativos anteriores por seis estados editoriais independentes de aprovação docente.
- [x] Normalizar os dois estados legados em memória, sem regravar conteúdo antigo ou LocalStorage.
- [x] Migrar as 60 questões e os seis puzzles executáveis para `under-ai-review`.
- [x] Preservar IDs, versões, alternativas, gabaritos, explicações, feedbacks, cursos, dificuldades, fontes, rastreabilidade, recompensas e soluções.
- [x] Atualizar o aviso visível para **Conteúdo experimental em revisão editorial.**

## Ampliação SI-M03 — fundamentos de sistemas (17/11/2026)

- [x] Integrar `E26-Q-SI-11` a `E26-Q-SI-16` ao catálogo executável sem substituir as questões anteriores.
- [x] Renderizar diagramas, tabelas e código com descrição textual e comportamento responsivo.
- [x] Manter as seis questões em `under-ai-review`, com fontes e rastreabilidade preservadas.
- [x] Ampliar SI para 26 questões elegíveis, mantendo as cotas das missões e os oito puzzles.
- [ ] Realizar piloto com estudantes e revisar clareza, dificuldade e atratividade dos seis itens.
- [x] Registrar critérios, transições, responsabilidade e limitações em [governanca-editorial-ia.md](governanca-editorial-ia.md).
- [x] Manter documentos anteriores como registros da governança vigente quando foram produzidos.
- [x] Não implementar jornada de 25, novas questões, publicação, serviços externos ou mudanças de progresso.
- [x] Aprovar 262 testes Vitest de unidade/DOM/integração, 132 verificações de conteúdo/contrato, lint, TypeScript e build de produção.
- [x] Aprovar 67 testes Playwright em desktop e celular; um caso móvel extenso permaneceu explicitamente ignorado pela configuração existente, sem falha nem travamento no encerramento.

Etapa concluída posteriormente: as candidatas SI-02 e SI-05 foram revisadas, documentadas e integradas somente após autorização explícita.

## 19. Integração das candidatas SI-02 e SI-05 — 16/11/2026

- [x] Preservar os sete lotes originais como histórico e aplicar somente as duas candidatas autorizadas na conversão determinística.
- [x] Integrar `E26-Q-SI-02` versão 2, SQL SQLite funcional, tabela semântica e gabarito C.
- [x] Integrar `E26-Q-SI-05` versão 2, diagrama relacional com descrição textual e gabarito B.
- [x] Criar contrato opcional estrito para código, tabela, diagrama e imagem local, sem quebrar questões textuais.
- [x] Renderizar recursos sem `innerHTML`, com rolagem, foco, semântica e layout responsivo.
- [x] Manter outras 58 questões e os seis puzzles byte a byte; preservar seleção, cotas, pontuação e progresso.
- [ ] Realizar piloto humano com estudantes, leitor de tela e dispositivos reais antes de `ready-for-release`.

## 20. Melhorias visuais das questões existentes de SI — 17/11/2026

- [x] Preservar IDs, competências, áreas, dificuldades, alternativas, gabaritos, fontes, cotas e progresso.
- [x] Adicionar mapa de informação a SI-01, fluxo de processo a SI-03 e linha de eventos a SI-04.
- [x] Adicionar comparação de definições a SI-06 e gráfico SVG acessível a SI-07.
- [x] Adicionar artefato de teste a SI-08, quadros de alocação a SI-09 e arquitetura a SI-10.
- [x] Manter SI-02 e SI-05 nas versões piloto já integradas.
- [x] Validar as dez questões na Arena em desktop e celular, incluindo carregamento do SVG local.
- [x] Aprovar conteúdo/contratos, TypeScript, lint e build de produção.
- [ ] Realizar homologação humana com leitor de tela e dispositivos reais.

Próxima etapa: criar novas questões de SI em entrega separada, seguindo a matriz de capacidade e sem reutilizar IDs.

## 21. Melhorias visuais comuns - lote 01 — 17/11/2026

- [x] Implementar gráfico acessível em COM-01 e diagrama de memória em COM-08.
- [x] Transformar a tabela achatada de COM-05 em tabela semântica.
- [x] Apresentar logs remotos e local em COM-07, sem executar conteúdo editorial.
- [x] Mostrar relação territorial e três limites simultâneos em COM-09.
- [x] Mostrar papéis, permissões e rastreabilidade em COM-10.
- [x] Preservar IDs, elegibilidade para os cinco cursos, gabaritos, dificuldade, fontes e estado editorial.
- [x] Manter COM-02, COM-03, COM-04, COM-06 e os puzzles fora desta entrega.
- [ ] Homologar os recursos com leitores de tela e dispositivos reais.

## 22. Melhorias visuais comuns - lote 02 — 17/11/2026

- [x] Mostrar em COM-02 os canais, as finalidades e a separação entre registros de atendimento e convite público.
- [x] Representar em COM-03 o aviso ambíguo, as informações ausentes e as interpretações divergentes.
- [x] Mostrar em COM-04 as duas rotas de reserva ligadas à mesma disponibilidade de vagas.
- [x] Comparar em COM-06 as versões do sensor e representar o objetivo de intercâmbio recíproco.
- [x] Preservar IDs, alternativas, gabaritos, competências, dificuldades, fontes, elegibilidade e estado editorial.
- [x] Validar os quatro recursos na Arena em desktop e celular.
- [ ] Homologar os recursos com leitores de tela e dispositivos reais.

## 23. Modernização visual do puzzle comum — 17/11/2026

- [x] Apresentar o estado inicial da recuperação em painel tecnológico acessível.
- [x] Organizar os cinco blocos em uma fila operacional, mantendo arraste, botões e setas.
- [x] Identificar cada cartão por ação textual, sem depender de cor ou revelar a ordem correta.
- [x] Exibir estados distintos de recuperação em andamento e sistema liberado.
- [x] Preservar conteúdo, sequência, dicas, XP, desbloqueio, replay e LocalStorage.
- [x] Respeitar movimento reduzido e layout de celular.
- [ ] Homologar com leitor de tela humano e dispositivos físicos.

## 24. Substituição do puzzle específico de SI — 17/11/2026

- [x] Substituir o cenário de custeio pelo fluxo integrado de reserva do Laboratório Aurora.
- [x] Preservar ID, área, dificuldade, curso, fonte, recompensa, desbloqueio e estado editorial.
- [x] Validar uma única solução entre 120 permutações.
- [x] Adicionar mapa textual do ecossistema e rótulos operacionais aos cartões.
- [x] Migrar em memória ordens salvas da versão anterior sem apagar conclusão, dicas ou XP.
- [x] Preservar mouse, teclado, toque, replay e retorno ao mapa.
- [ ] Observar clareza, dificuldade e engajamento em piloto com estudantes.

## 25. Puzzle complementar de código C para SI — 17/11/2026

- [x] Criar `E26-P-SI-02` sem substituir os 66 IDs originais.
- [x] Montar função C17 em cinco cartões, preservando `_`, `*` e quebras de linha.
- [x] Cobrir validação, cálculo e faixas de prioridade com sete casos de teste.
- [x] Apresentar código monoespaçado, briefing acessível e tabela semântica de casos.
- [x] Manter o puzzle fora das cotas de 3, 5, 10 e 20 questões.
- [x] Preservar progresso e recompensas dos puzzles anteriores.
- [ ] Compilar o fonte com GCC, Clang ou MSVC quando um compilador C estiver disponível no ambiente.
- [ ] Realizar piloto humano de clareza e dificuldade.

## 26. Puzzle de programa completo em C para SI — 17/11/2026

- [x] Criar `E26-P-SI-03` com exatamente cinco cartões, sem substituir desafios existentes.
- [x] Cobrir `stdio.h`, protótipo, `main`, vetor, repetição, decisão, procedimento e ponteiro.
- [x] Tornar a ordem única por dependências de escopo, identificadores e chaves balanceadas.
- [x] Apresentar cinco medições em tabela semântica e código em fonte monoespaçada.
- [x] Preservar as cotas de questões e as chaves atuais de LocalStorage.
- [ ] Compilar o fonte com GCC, Clang ou MSVC quando um compilador C estiver disponível no ambiente.
- [ ] Realizar piloto humano de clareza, dificuldade e entendimento de ponteiros.

## 27. Integração do catálogo ampliado e partidas de 25 — 18/11/2026

- [x] Converter as 205 questões documentadas sem reescrever alternativas ou gabaritos.
- [x] Formalizar elegibilidades multcurso com fonte normativa complementar e rastreabilidade.
- [x] Gerar os 16 roteiros canônicos diretamente da matriz editorial.
- [x] Disponibilizar somente a jornada de 25: cinco comuns e vinte técnicas.
- [x] Alternar três roteiros-base por curso e quatro para SI, preservando progresso anterior.
- [x] Estender relatório e ranking local para 25 questões.
- [x] Preservar os oito puzzles fora da contagem.
- [x] Substituir a repetição cíclica posterior aos roteiros-base por sorteio determinístico balanceado por área e histórico recente.
- [ ] Avaliar no piloto se a exclusão de apenas uma partida anterior oferece variedade suficiente no longo prazo.
- [ ] Executar piloto com professores e estudantes antes de promover itens para `ready-for-release`.
- [x] Preparar roteiro, cobertura mínima, checklist e formulário anônimo para o piloto controlado.
