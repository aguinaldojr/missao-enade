# N9 — Jornada Digital: padrão editorial do lote-piloto

Consolidação documental — 13/11/2026, horário de Brasília. Versão documental 1.0. Derivada da leitura integral de [lote-comum-01.md](lote-comum-01.md), sem recriar o lote. Este padrão orienta a autoria posterior; não constitui aprovação docente, novo contrato de software ou autorização de publicação.

**Estado obrigatório deste estágio: provisional-pending-teacher-review.** N9 permanece nome provisório sujeito à aprovação institucional. Os cenários são fictícios; não há chancela do Inep nem afirmação de produto oficial. A consolidação não realizou nova pesquisa normativa ou cotejo independente de originalidade.

## 1. Escopo e precedência

Referências do padrão:

- [Plano da coleção](../plano-colecao-enade-2026.md), versão 2.0: IDs, cursos, áreas, competências em síntese, objetivos, dificuldades e cotas.
- [Lote comum 01](lote-comum-01.md): cinco questões já redigidas e uma sequência; modelo de contextualização, feedback e rastreabilidade.
- [Estrutura de dados](../estrutura-dados-desafios.md) e [especificação documental da missão mista](../especificacao-missao-mista.md): limites entre conteúdo editorial, formato executável e experiência futura.
- Contratos atuais Question, SequencePuzzle e EditorialMetadata; schemas question, puzzles e editorial, em src. Nenhum deles é alterado por este documento.
- Fontes oficiais e reproduções já registradas na seção 9 do lote-piloto. O registro de consulta anterior não equivale a nova consulta nesta consolidação.

O plano governa os slots. O contrato governa os campos que poderão ser importados em outra entrega. A fonte sustenta o recorte, não o cenário inventado ou seu gabarito. Revisão docente decide a adequação pedagógica. Divergência entre essas camadas deve ser registrada antes de ampliar a autoria.

Esta etapa produz somente Markdown. Não gerar arquivo JSON, substituir exemplos do jogo, importar a coleção, implementar missão, ativar porta ou atribuir parecer favorável. Não iniciar o lote comum 02 nem lotes específicos sem autorização posterior.

## 2. Identificadores, cotas e controle de escopo

Não criar IDs fora dos 66 slots planejados, reutilizar um ID para outro problema ou duplicar o mesmo conteúdo por curso.

| Conjunto | Questões únicas | introductory / intermediate / advanced | Puzzles |
| --- | ---: | --- | ---: |
| Comum completo | 10 | 4 / 4 / 2 | 1 |
| Específico de cada curso | 10 | 3 / 5 / 2 | 1 |
| Percurso elegível por curso | 20 | 7 / 9 / 4 | 2 |
| Banco único da coleção | 60 | Conforme os slots, sem multiplicar os comuns por curso | 6 |

Puzzles não entram na cota de questões. Dificuldade de cada puzzle segue seu slot; não se impõe a ele a distribuição de questões.

O lote-piloto contém E26-Q-COM-01–05: quatro introductory e uma intermediate. E26-P-COM-01 é sequence introductory. As questões comuns restantes planejadas são 06–08 intermediate e 09–10 advanced; esta consolidação não as redige.

Manter um inventário documental por ID e versão, distinguindo “planejado”, “redigido”, “conferido editorialmente” e “revisado por docente”. Esses rótulos de acompanhamento não substituem validationStatus nem criam campos novos no JSON.

## 3. Ficha editorial mínima

Cada questão deve conservar a seguinte organização em Markdown:

1. Título da seção com ID planejado e título editorial.
2. Ficha de metadados e rastreabilidade.
3. Texto ao jogador: contexto, evidências e enunciado.
4. Cinco alternativas A–E.
5. Resposta única, explicação geral e cinco feedbacks.
6. Originalidade, ambiguidades e pontos de revisão.
7. Registro de fontes e formulário de revisão por curso.

O puzzle usa a mesma base documental, com narrativa, blocos, ordem correta justificada, dicas graduais, explicação e recompensa/desbloqueio propostos.

### Metadados canônicos compartilhados

| Campo | Regra editorial |
| --- | --- |
| collectionId | enade-2026 para esta coleção; referência já registrada como planned. Não mudar ID de exemplo para alegar conteúdo inédito. |
| pedagogicalOrigin | Origem pedagógica interna e autoria referenciada; sem finalidade de prova nos textos do jogador. |
| courses | Siglas explícitas CC, SI, TADS, TGTI, TRC conforme o slot; lista sem duplicação. COMUM é classificação, não curso. |
| area | Nome descritivo previsto no slot; o código da área fica na rastreabilidade documental. |
| competencies | Preservar as sínteses pertinentes aos cursos e ao slot; não inventar código oficial nem declarar domínio medido. |
| difficulty | introductory, intermediate ou advanced conforme o plano. Mudança depende de decisão registrada, não ajuste silencioso. |
| source | Uma fonte principal com type e description; url, year e documentId quando disponíveis e conferidos. Referências complementares ficam na ficha. |
| validationStatus | provisional-pending-teacher-review em todo material desta etapa. |

Question não tem campo kind. Seus campos próprios são id, version, classification, context, prompt, options, correctOptionId, explanation e feedbackByOption; example/editorialStatus são marcadores opcionais de compatibilidade, não aprovação.

SequencePuzzle usa kind sequence, id, title, narrative, blocks, correctOrder, hints, explanation, reward e unlocks, além dos metadados comuns. O contrato atual não possui version do puzzle; a revisão do documento deve ser identificada no Markdown.

Título editorial de questão, objetivo, códigos de rastreabilidade, fontes complementares, autoria, riscos e pareceres não devem ser inseridos como propriedades extras do objeto estrito. Preservar additionalProperties: false nos contratos existentes, sem alterá-los nesta fase.

## 4. Contextualização e comando da questão

- Formular uma decisão ou interpretação observável ligada à competência, e não uma pergunta de memorização desconectada.
- Fornecer os dados, restrições, conceitos locais e critérios necessários ao julgamento. Não exigir lei, ferramenta, comando ou prioridade não declarada.
- Usar N9, Base N9 ou outro espaço fictício consistente com a narrativa. Não usar ENADE em contexto, comando, alternativas ou feedbacks apresentados ao jogador.
- Identificar dados e estimativas como fictícios. Não atribuir registros, acordos ou resultados à UNINOVE real.
- Distinguir observação, estimativa, hipótese, causa e generalização. O enunciado não pode exigir uma conclusão que os dados não sustentam.
- Fixar unidade de contagem, intervalo, população e denominador. Se identidade individual importa, fornecer cruzamento ou declarar a limitação.
- Explicar termos técnicos necessários no recorte comum. O contexto não deve acrescentar profundidade exclusiva de um curso.
- Evitar complexidade por extensão de texto. Dificuldade deve vir da comparação ou integração de evidências previstas no slot.

No lote-piloto, Q01 exige descrição sem inferência causal; Q02 aplica finalidade explícita; Q03 trata recepção e clareza; Q04 compara barreiras distintas; Q05 distingue exposição, cobertura e efeitos. Não reutilizar essas situações por simples troca de nomes ou números.

## 5. Alternativas e unicidade do gabarito

Cada questão possui exatamente A, B, C, D e E, com uma única resposta defensável pelas premissas.

- Comparar opções da mesma natureza e granularidade; manter coerência gramatical e extensão semelhante, sem uma cota mecânica de palavras.
- A alternativa correta deve resolver o comando integralmente. Um distrator pode começar por uma decisão plausível e falhar numa inferência identificável; explicar essa falha.
- Construir distratores a partir de erros conceituais diferentes e pertinentes. Evitar opção absurda, absolutos gratuitos, humor ou termos que denunciem a incorreta.
- Não usar “todas/nenhuma das anteriores”, sobreposição, resposta contida em outra opção ou uma segunda solução aceitável sem critério de desempate.
- Não usar a maior extensão, maior quantidade de condições ou tom mais cauteloso como pista recorrente da correta.
- Resolver primeiro sem o gabarito e justificar a rejeição de cada outra alternativa. Se uma segunda opção puder ser defendida sem contrariar o cenário, reformular antes de considerar a questão tecnicamente pronta.
- Variar posições dos gabaritos entre lotes, sem ciclo, alternância, regra de uma letra por lote ou tentativa de completar uma distribuição matemática.

O mapa C/A/E/B/D do lote-piloto é preservado. A ocorrência de cada letra uma vez não é padrão obrigatório nem pista para a autoria posterior. Não alterar o gabarito para melhorar distribuição sem nova revisão do item.

## 6. Explicação geral e feedback por alternativa

A explicação deve mostrar o raciocínio e o limite da conclusão, não apenas anunciar a letra correta.

Cada feedback A–E precisa:

- referir-se à opção efetivamente escolhida;
- apontar o dado ou a premissa relevante;
- explicar o acerto ou o erro conceitual com linguagem respeitosa;
- não exigir conhecimento oculto nem recorrer só a “está errado”;
- não prometer transferência, domínio ou desempenho em avaliação externa.

Recalcular contas e unidades. No piloto, preservar 16/40 = 40%, 24/40 = 60%, diferença de oito pessoas e de 20 pontos percentuais; Q05 mantém 15/20 = 75%, 8/40 = 20% e coberturas adicionais dez/seis. Saldo de pessoas não identifica novos participantes; capacidade estimada não mede adoecimento ou efeito causal.

Gabarito e justificativa ficam separados do texto de resposta. O mapa de respostas é destinado à curadoria/feedback, não deve aparecer antes da confirmação numa implementação futura.

## 7. Padrão de Sequência Lógica

O problema deve ter de quatro a sete blocos e uma ordem completa justificável, sem impor sequência artificial a operações independentes.

1. Delimitar o estado inicial e ações já concluídas.
2. Explicar o que cada operação produz e o que a seguinte precisa receber.
3. Usar IDs de blocos únicos e estáveis; textos diretos, sem esconder duas operações independentes num bloco.
4. Registrar todos os blocos em correctOrder uma única vez.
5. Justificar cada dependência necessária e testar inversões/ordens alternativas.
6. Delimitar pressupostos, ambiente e caminho de sucesso. Uma restrição fictícia não vira protocolo universal.
7. Separar ordem editorial dos blocos e solução; não exigir arraste, velocidade ou comando especializado.
8. Mostrar a explicação completa somente após resolução, numa integração autorizada.

O piloto preserva a ordem recuperar-arquivo → conferir-integridade → montar-conteudo → testar-consulta → publicar-consulta. A barreira entre integridade e montagem é premissa do ambiente delimitado, não regra universal de recuperação. O resumo de integridade não prova ausência de malware; teste funcional não equivale a verificação de integridade.

### Dicas graduais

- Dica 1: orientar a observar estados, evidências ou dependências.
- Dica 2: esclarecer uma relação crítica sem enumerar a solução inteira.
- Dica 3: focalizar outro ponto de bloqueio ou a condição final; continuar deixando trabalho de ordenação ao jogador.
- Manter ao menos três dicas distintas; nenhuma dica individual deve listar todos os blocos na ordem correta.
- Considerar o efeito cumulativo e a adequação da ajuda no piloto. A pista deve apoiar, sem apenas repetir o enunciado nem antecipar a explicação final completa.

Não retirar XP por erro ou dica, não impor cronômetro e não premiar velocidade. O piloto mantém reward.xp 100, uma vez por ID, e base-n9/door como referências propostas. Não criar bônus nem efetivar desbloqueio durante autoria documental.

## 8. Rastreabilidade e uso de fontes

Manter quatro camadas explícitas: referência oficial; análise histórica; inferência/autoria; pendência institucional/docente.

Na ficha registrar título, órgão emissor, data do ato, publicação quando identificada, URL, localizador por artigo/página, modo de acesso e limite da leitura. Não confundir data de captura ou consulta com publicação. Identificar reprodução e instituição hospedeira; não chamá-la de órgão emissor.

O registro do lote comum 01 informa consulta em 13/11/2026, falha de recuperação dos links individuais do DOU e uso de reproduções identificadas. **Este padrão conserva esse registro; não atesta nova consulta nem confirmação de vigência.** Na revisão docente, conferir originais e retificações.

No lote, F05 sustenta o recorte comum de Formação Geral das cinco questões; F06 é principal do puzzle, com corroboração documental F07/SI, F08/TADS, F09/TGTI e F10/TRC. Esse vínculo não prova a ordem do procedimento fictício nem dispensa conferência por curso.

Source.type official-reference descreve a natureza da referência principal, sem transformar narrativa autoral em questão oficial. Fonte histórica deve ter edição/caderno/questão/página identificados e limite de leitura registrado. Não apresentar síntese indireta como leitura direta.

Dúvida grave de fonte, resposta, elegibilidade ou ordem deve ser registrada e suspender avanço até resolução. O status deste lote permanece provisional-pending-teacher-review conforme a etapa atual; mudança posterior para needs-revision/approved-teacher/rejected exige decisão explícita registrada, não inferência de schema ou teste aprovado.

## 9. Originalidade e não repetição

Comparar com o lote anterior, exemplos do projeto e materiais históricos pertinentes:

- situação e objetivo decisório;
- arranjo de dados e relações entre evidências;
- raciocínio necessário e caminhos de erro;
- estrutura e conteúdo das alternativas;
- encadeamento de estados, no caso da sequência.

Trocar só cenário, números, nomes ou ordem de alternativas não basta. Registrar o que é próprio e o que é formato recorrente. Similaridade textual é uma triagem; ausência de texto idêntico não comprova ineditismo estrutural.

A autoria assistida por IA deve ser declarada e consolidada por responsável humano identificado posteriormente. Não preencher nomes, datas, pareceres ou alegações de originalidade independente sem evidência.

## 10. Acessibilidade e experiência como critérios editoriais

- Preservar instruções e dados essenciais em texto, com tabelas de cabeçalhos claros e equivalente linear.
- Não depender de cor, posição, áudio, gesto fino ou conhecimento de metáfora para responder.
- Permitir seleção/confirmar e movimentação de blocos por teclado e botões, além de mouse/toque, na futura apresentação.
- Conferir leitura em tela pequena e ampliação sem retirar premissas para reduzir comprimento.
- Evitar estereótipos sobre curso, cultura, origem ou deficiência.
- Diferenciar condições do cenário de uma certificação de acessibilidade real.
- Duração de uma observação fictícia não é tempo de resposta. Não introduzir cronômetro ou pressão por rapidez.

Markdown legível não homologa leitor de tela, teclado ou toque da interface futura. Registrar essas verificações como pendentes até a integração e o teste efetivos.

## 11. Fluxo de revisão docente

Ficha por ID, versão e curso elegível, com docente, data, PPC/versão, evidências, resolução sem gabarito, objeções, alternativas defensáveis, originalidade, acessibilidade e decisão fundamentada.

Os seis itens comuns do piloto exigem cinco cursos: **30 registros de revisão por item/curso**, ainda não preenchidos. Não são trinta itens novos. Uma recomendação isolada não muda validationStatus, não ativa coleção e não autoriza publicação.

Resolver independentemente as questões; para o puzzle, tentar construir ordem alternativa e avaliar a plausibilidade da barreira de montagem. Registrar o motivo de cada rejeição. Não marcar “conferido” como sinônimo de “aprovado por docente”.

Permanecem pendentes: adequação a PPC/oferta e momento formativo; originais e retificações; cotejo independente de similaridade; calibragem de dificuldade; leitura com estudantes; acessibilidade na experiência; responsável humano pela consolidação; política de liberação e missão mista.

## 12. Auditoria documental antes de encerrar uma etapa

- [ ] Confirmar escopo autorizado, IDs únicos entre itens e correspondência com o plano.
- [ ] Conferir cursos, áreas, competências, dificuldades e cotas sem alterá-los silenciosamente.
- [ ] Verificar cinco alternativas distintas e feedbacks A–E em toda questão.
- [ ] Conferir uma resposta indicada e fundamentar por que só ela atende às premissas.
- [ ] Recalcular dados, proporções, unidades e condições do caso.
- [ ] Conferir 4–7 blocos, IDs únicos, permutação e dependências da sequência.
- [ ] Verificar três dicas graduais, sem enumerar a solução inteira.
- [ ] Preservar recompensa e desbloqueios propostos; não ativá-los.
- [ ] Conferir referências e seus limites; não inventar consulta recente ou parecer.
- [ ] Separar metadados/gabaritos dos textos ao jogador; procurar referências à avaliação externa nesses textos.
- [ ] Manter todos os validationStatus como provisional-pending-teacher-review.
- [ ] Registrar pendências de revisão independente e homologação.
- [ ] Verificar que código, schemas, conteúdo executável e progresso não mudaram.
- [ ] Executar auditoria documental e os testes de contrato aplicáveis, sem gerar arquivo JSON nem integrar conteúdo.

Verificações automáticas comprovam estrutura, preservação e coerência formal, não aprovação pedagógica, autenticidade de fonte, acessibilidade efetiva ou originalidade independente.

## 13. Registro desta consolidação

Ajustes do lote-piloto: referência a este padrão; reformulação das dicas 2 e 3 para ajuda gradual sem solução completa numa dica; distinção explícita entre consulta da autoria inicial e consolidação atual. IDs, versões dos itens, competências, textos das cinco questões e alternativas, gabaritos C/A/E/B/D, blocos e ordem correta, explicação final, recompensa 100, referências de desbloqueio e todos os validationStatus foram preservados.

Apenas lote-comum-01.md e este documento integram a etapa. Nenhum lote comum 02, questão adicional, JSON, importação, alteração de schema, interface, mecânica ou publicação foi produzido.

### Verificações desta etapa

- Comparação integral do lote antes/depois: somente os seis ajustes editoriais descritos no registro acima.
- Auditoria documental: seis IDs planejados e únicos; gabaritos C/A/E/B/D; cinco alternativas e cinco feedbacks por questão; cursos, status e dificuldades preservados.
- Cálculos do lote conferidos; blocos/ordem/recompensa/desbloqueios preservados; 120 permutações examinadas sob as quatro dependências declaradas, com uma única ordem válida nesse modelo.
- Três dicas presentes; a ajuda final não enumera mais a solução inteira.
- Trinta registros de revisão por item/curso continuam a preencher; nenhuma aprovação docente atribuída.
- Textos destinados ao jogador sem o nome da avaliação externa.
- Testes de contrato aplicáveis: **113 aprovados**, em quatro arquivos, com npm.cmd run validate:content.
- Comparação do Git antes de versionar: nenhum arquivo previamente versionado alterado; somente os dois documentos em docs/autoria. O lote comum 01 já existia sem versionamento ao início e foi ajustado pontualmente.
- Não foram gerados JSON, integração executável ou lote comum 02. Nenhuma publicação.
