# Missão ENADE — backlog de implementação

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

- [ ] Tela inicial e seleção real entre CC, SI, TADS, TGTI e TRC.
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
