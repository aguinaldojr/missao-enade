# N9 — Jornada Digital: ampliação SI — lacunas clássicas

Autoria documental assistida por IA — 18/11/2026. Este lote cria doze questões de reserva, `E26-Q-SI-54` a `E26-Q-SI-65`, para conteúdos clássicos ainda ausentes como objeto avaliado. Não modifica as três jornadas congeladas, não gera JSON e não integra conteúdo ao jogo.

## 1. Inventário

| ID | Conteúdo | Dificuldade | Gabarito | Artefato |
|---|---|---|---|---|
| SI-54 | ERP | introductory | B | Fluxo pedido–estoque–financeiro |
| SI-55 | CRM | introductory | D | Linha do tempo do relacionamento |
| SI-56 | SCM | intermediate | A | Série de vendas e pedidos |
| SI-57 | COBIT | intermediate | E | Quadro governança × gestão |
| SI-58 | ITIL | intermediate | C | Linha do tempo de incidente, problema e mudança |
| SI-59 | PMBOK | intermediate | B | Registro de risco |
| SI-60 | Computação em nuvem | introductory | D | Comparador de oferta |
| SI-61 | IaaS, PaaS e SaaS | introductory | A | Matriz de responsabilidades |
| SI-62 | Big Data | advanced | E | Pipeline distribuído |
| SI-63 | CMMI e MPS.BR | advanced | C | Painel de maturidade |
| SI-64 | UML e herança | intermediate | B | Diagrama de classes textual |
| SI-65 | Virtualização | advanced | D | Painel de host e máquinas virtuais |

Todos usam `classification: SI`, `collectionId: enade-2026`, curso SI e `validationStatus: under-ai-review`. F07 — Portaria Inep 168/2026 — é a referência normativa primária somente nos recortes amplos de arquitetura, governança, processos, projetos, infraestrutura, dados e modelagem. Frameworks e produtos não são apresentados como enumeração literal da Portaria; o vínculo curricular definitivo depende do PPC.

### Fontes técnicas dirigidas

- COBIT 2019, ISACA: `https://www.isaca.org/resources/cobit`.
- ITIL 4, PeopleCert: `https://www.peoplecert.org/-/media/peoplecert/images/landing-pages/pink23/itil4-explained.pdf`.
- PMBOK Guide, 8ª edição, PMI, novembro de 2025: `https://www.pmi.org/standards/pmbok`.
- NIST SP 800-145, definição de nuvem e modelos de serviço: `https://csrc.nist.gov/pubs/sp/800/145/final`.
- NIST Big Data Interoperability Framework: `https://www.nist.gov/publications/nist-big-data-interoperability-framework-volume-1-big-data-definitions-version-2`.
- CMMI V3.0, níveis de maturidade: `https://cmmiinstitute.com/learning/appraisals/levels`.
- MPS-SW:2024, Softex/MPS.BR: `https://mpsbr.softex.br/comunicado-01-2024-novas-versoes-mps-sw2024-mps-sv-2024-e-guia-de-avaliacao-2024-2/`.
- UML 2.5.1, OMG: `https://www.omg.org/spec/UML/`.
- NIST SP 800-125, virtualização completa: `https://csrc.nist.gov/pubs/sp/800/125/final`.

ERP, CRM e SCM usam definições operacionais fornecidas no próprio caso. Nenhuma marca, fornecedor ou implantação real é pressuposta.

## 2. E26-Q-SI-54 — Um pedido, quatro módulos e nenhuma redigitação

**Ficha:** SI-M04/SI-M07; área “Sistemas empresariais integrados”; `introductory`. Objetivo: reconhecer a função integradora de um ERP em processo transversal.

Uma empresa fictícia registra o mesmo pedido separadamente em vendas, estoque, expedição e financeiro. Códigos e totais divergem. O projeto define ERP como sistema integrado que compartilha dados e regras entre processos empresariais, com responsabilidades e controles.

**Enunciado.** Qual mudança representa melhor essa finalidade?

- **A.** Criar quatro novas planilhas e copiar os dados ao final do mês.
- **B.** Registrar o pedido uma vez, gerar movimentos autorizados para estoque, expedição e financeiro e manter rastreabilidade das alterações.
- **C.** Substituir apenas a tela de vendas, sem integrar os demais processos.
- **D.** Permitir que qualquer módulo altere qualquer dado sem regra ou histórico.
- **E.** Enviar capturas de tela por mensagem para sincronizar os setores.

**Gabarito: B.** Integração não significa acesso irrestrito: o pedido alimenta processos relacionados com regras, responsabilidades e histórico.

| A | Multiplica cópias e mantém reconciliação manual. |
|---|---|
| B | Correta: integra processo e informação com controle. |
| C | Troca interface sem resolver fragmentação. |
| D | Compartilhamento exige governança, não ausência de controle. |
| E | Imagens não mantêm estado estruturado e consistente. |

## 3. E26-Q-SI-55 — O relacionamento não começa em cada chamado

**Ficha:** SI-M04/SI-M07; área “Gestão do relacionamento com clientes”; `introductory`. Objetivo: distinguir CRM de cadastro isolado ou controle financeiro.

Uma organização fictícia deseja acompanhar consentimentos, contatos, propostas, atendimentos e preferências declaradas, mostrando uma linha do tempo autorizada às equipes de relacionamento. Faturamento e estoque permanecem em sistemas próprios.

**Enunciado.** Qual solução atende diretamente à finalidade de CRM descrita?

- **A.** Um monitor de CPU dos servidores.
- **B.** Uma planilha apenas com saldos financeiros.
- **C.** Um controle de peças armazenadas por depósito.
- **D.** Um histórico integrado de interações e oportunidades, com finalidade, acesso e atualização definidos por perfil.
- **E.** Uma lista pública contendo todos os contatos e preferências.

**Gabarito: D.** O CRM organiza o relacionamento ao longo do tempo; não substitui estoque, infraestrutura ou controles de privacidade.

| A | Monitoramento técnico não acompanha relacionamento. |
|---|---|
| B | Saldo é apenas uma dimensão financeira. |
| C | Peças pertencem à gestão de estoque. |
| D | Correta: integra interações com governança. |
| E | Publicidade irrestrita contradiz acesso por finalidade. |

## 4. E26-Q-SI-56 — A venda ficou estável, mas os pedidos oscilaram

**Ficha:** SI-M07; área “Gestão da cadeia de suprimentos”; `intermediate`. Objetivo: reconhecer amplificação de demanda e selecionar coordenação baseada em informação compartilhada.

| Semana | Venda ao consumidor | Pedido do varejo ao distribuidor |
|---|---:|---:|
| 1 | 100 | 100 |
| 2 | 102 | 140 |
| 3 | 98 | 65 |
| 4 | 101 | 155 |

O prazo de reposição é conhecido, mas cada elo estima demanda usando somente o último pedido recebido.

**Enunciado.** Qual ação é mais coerente com SCM e com os dados?

- **A.** Compartilhar vendas, estoque e prazo entre os elos e coordenar uma política de reposição, acompanhando falta e excesso.
- **B.** Aumentar ainda mais cada pedido para compensar qualquer incerteza.
- **C.** Ocultar vendas do fornecedor para preservar a oscilação observada.
- **D.** Tratar 65 e 155 como vendas reais ao consumidor.
- **E.** Remover o histórico e usar apenas o maior pedido.

**Gabarito: A.** As vendas variam pouco e os pedidos muito. Visibilidade e coordenação atacam a amplificação sem presumir previsão perfeita.

| A | Correta: integra demanda, estoque, prazo e política. |
|---|---|
| B | Pode ampliar excesso e instabilidade. |
| C | Menos informação compartilhada mantém estimativas desconectadas. |
| D | Pedido entre elos não é venda final. |
| E | Um máximo isolado não representa o padrão. |

## 5. E26-Q-SI-57 — Quem direciona e quem executa?

**Ficha:** SI-M04; área “Governança de informação e tecnologia”; `intermediate`. Objetivo: aplicar a distinção COBIT 2019 entre governança e gestão.

Convenção do item: governança **avalia, direciona e monitora**; gestão **alinha, planeja, constrói, executa e acompanha** atividades conforme a direção. O conselho definiu tolerância de indisponibilidade e prioridade de continuidade. A gestão de TI deve preparar e operar a solução.

**Enunciado.** Qual divisão respeita essa convenção?

- **A.** O conselho configura servidores, e a gestão define sozinha a tolerância empresarial.
- **B.** A gestão elimina o monitoramento do conselho após receber orçamento.
- **C.** O conselho executa todos os chamados, enquanto a gestão apenas observa.
- **D.** Governança e gestão são sinônimos e não precisam de responsabilidades distintas.
- **E.** O conselho avalia opções, direciona prioridade e monitora resultado; a gestão planeja, implementa, opera e reporta conforme essa direção.

**Gabarito: E.** O COBIT separa responsabilidades relacionadas, sem isolar governança da informação produzida pela gestão.

| A | Inverte direção empresarial e execução técnica. |
|---|---|
| B | Governança continua monitorando valor, risco e resultado. |
| C | Conselho não substitui a operação cotidiana. |
| D | A distinção é parte central do caso. |
| E | Correta: articula direção, execução e prestação de contas. |

## 6. E26-Q-SI-58 — Restaurar agora, entender depois, mudar com controle

**Ficha:** SI-M07/SI-M05; área “Gestão de serviços de TI”; `intermediate`. Objetivo: distinguir incident management, problem management e change enablement em ITIL 4.

Um portal fica indisponível. A equipe aplica uma rota alternativa e restaura o serviço; depois analisa ocorrências recorrentes, identifica uma configuração defeituosa e agenda a correção permanente com avaliação, teste e retorno planejado.

**Enunciado.** Qual associação está correta?

- **A.** Restauração = problema; causa = mudança; implantação = incidente.
- **B.** Todas as atividades são apenas service desk.
- **C.** Restauração = incidente; investigação da causa = problema; implantação controlada = habilitação de mudança.
- **D.** Investigação deve ocorrer antes de qualquer restauração, mesmo com alternativa segura disponível.
- **E.** Correção permanente dispensa avaliação porque a causa já foi identificada.

**Gabarito: C.** Restaurar valor rapidamente, compreender causa e controlar a alteração são objetivos relacionados, mas distintos.

| A | Troca os propósitos das práticas. |
|---|---|
| B | O service desk pode participar, mas não substitui as três práticas. |
| C | Correta: corresponde às finalidades fornecidas. |
| D | Incidente pode usar solução de contorno antes da causa definitiva. |
| E | Mudança ainda possui risco e precisa de controle proporcional. |

## 7. E26-Q-SI-59 — O risco precisa de dono antes de virar atraso

**Ficha:** SI-M06; área “Gerenciamento de projetos”; `intermediate`. Objetivo: selecionar registro de risco orientado a valor, responsabilidade e resposta, em alinhamento ao PMBOK Guide 8.

Risco fictício: fornecedor pode atrasar um componente crítico. Se ocorrer, o piloto perde duas semanas. Há um fornecedor alternativo mais caro, acionável até dez dias antes da entrega.

**Enunciado.** Qual registro apoia melhor a decisão do projeto?

- **A.** “Pode dar errado”, sem responsável, prazo ou resposta.
- **B.** Probabilidade e impacto estimados, responsável, gatilho de dez dias, resposta alternativa, custo e risco residual acompanhados.
- **C.** Considerar o atraso como fato consumado e cancelar imediatamente.
- **D.** Ocultar o risco para preservar a confiança das partes interessadas.
- **E.** Registrar somente depois que a entrega atrasar.

**Gabarito: B.** O registro transforma incerteza em acompanhamento e resposta proporcional, mantendo decisão e valor visíveis.

| A | Descrição vaga não permite ação ou acompanhamento. |
|---|---|
| B | Correta: integra análise, responsabilidade, gatilho e resposta. |
| C | Risco ainda não é certeza. |
| D | Transparência proporcional é necessária para decidir. |
| E | Depois da ocorrência, perde-se a janela declarada. |

## 8. E26-Q-SI-60 — Hospedado não significa necessariamente nuvem

**Ficha:** SI-M05; área “Computação em nuvem”; `introductory`. Objetivo: reconhecer as cinco características essenciais da definição NIST.

### Texto ao jogador

**Enunciado.** Qual oferta apresenta melhor o modelo de computação em nuvem definido no caso?

- **A.** Um servidor físico fixo, adquirido por três anos, ampliado somente por visita do fornecedor e sem medição.
- **B.** Um computador local acessado apenas no laboratório.
- **C.** Armazenamento em rede com capacidade fixa e alteração por contrato anual manual.
- **D.** Recursos acessíveis pela rede, provisionados sob demanda, compartilhados em pool, elasticamente ajustáveis e medidos por uso.
- **E.** Uma máquina virtual isolada, mas sem acesso de rede, elasticidade, autosserviço ou medição.

**Gabarito: D.** Local remoto ou virtualização isolada não bastam; D reúne autosserviço, acesso amplo, pool, elasticidade e serviço medido.

| A | Hospedagem fixa não reúne as características fornecidas. |
|---|---|
| B | Uso local não descreve a oferta de nuvem. |
| C | Rede e terceirização não garantem elasticidade ou autosserviço. |
| D | Correta: contém as cinco características. |
| E | Virtualização pode apoiar nuvem, mas não a define sozinha. |

## 9. E26-Q-SI-61 — Quem administra qual camada?

**Ficha:** SI-M05; área “Modelos de serviço em nuvem”; `introductory`. Objetivo: distinguir SaaS, PaaS e IaaS por responsabilidade do consumidor.

Necessidades: N1 usar uma aplicação pronta de colaboração; N2 implantar código próprio sem administrar sistema operacional; N3 instalar sistema operacional e aplicações próprias sobre processamento, rede e armazenamento provisionados.

**Enunciado.** Qual mapeamento está correto?

- **A.** N1 SaaS; N2 PaaS; N3 IaaS.
- **B.** N1 IaaS; N2 SaaS; N3 PaaS.
- **C.** N1 PaaS; N2 IaaS; N3 SaaS.
- **D.** As três são SaaS porque usam navegador.
- **E.** As três são IaaS porque algum servidor existe no provedor.

**Gabarito: A.** O modelo depende da capacidade entregue e do controle mantido pelo consumidor, não do dispositivo de acesso.

| A | Correta: aplicação, plataforma e infraestrutura, respectivamente. |
|---|---|
| B | Troca aplicação pronta e controle do sistema operacional. |
| C | Não corresponde às responsabilidades declaradas. |
| D | Navegador não define o modelo de serviço. |
| E | Infraestrutura subjacente existe em todos, mas não é sempre a capacidade vendida. |

## 10. E26-Q-SI-62 — Dois terabytes por dia e respostas em segundos

**Ficha:** SI-M09; área “Big Data e arquiteturas escaláveis”; `advanced`. Objetivo: selecionar arquitetura coerente com volume, velocidade, variedade e governança.

Um projeto fictício recebe 2 TB/dia de sensores, textos e imagens. Alertas precisam sair em até dez segundos; análises históricas usam meses de dados. Eventos podem chegar repetidos ou fora de ordem, e dados pessoais exigem controle de acesso e retenção.

**Enunciado.** Qual desenho atende melhor ao conjunto?

- **A.** Um arquivo único sobrescrito diariamente e processado manualmente ao final do mês.
- **B.** Uma planilha por sensor enviada por e-mail.
- **C.** Guardar apenas imagens e descartar eventos antes de conhecer a finalidade.
- **D.** Inserir tudo em uma única tabela sem particionamento, controle de duplicidade ou monitoramento.
- **E.** Ingestão distribuída com identificadores, processamento de fluxo para alertas, armazenamento particionado para histórico, tratamento de repetição/ordem e governança de acesso e retenção.

**Gabarito: E.** A solução relaciona características do problema a capacidades escaláveis e inclui qualidade e governança, não apenas armazenamento volumoso.

| A | Não atende velocidade nem preserva histórico adequado. |
|---|---|
| B | Não escala para volume e variedade declarados. |
| C | Descarte indiscriminado não é estratégia de qualidade ou governança. |
| D | Ignora particionamento, qualidade e operação. |
| E | Correta: integra ingestão, fluxo, histórico e controles. |

## 11. E26-Q-SI-63 — Maturidade não se declara por decreto

**Ficha:** SI-M06; área “Maturidade e melhoria de processos”; `advanced`. Objetivo: aplicar princípios comuns de institucionalização sem afirmar equivalência automática entre CMMI V3.0 e MPS-SW:2024.

Uma fábrica fictícia trabalha de forma diferente em cada projeto; estimativas e defeitos não são registrados de modo comparável. A direção quer usar CMMI ou MPS.BR, mas ainda não escolheu modelo, escopo ou avaliação.

**Enunciado.** Qual primeiro programa é mais defensável?

- **A.** Declarar nível máximo com base em uma reunião interna.
- **B.** Copiar documentos de outra empresa sem mudar a prática diária.
- **C.** Definir escopo e versão do modelo, estabelecer processos e responsabilidades usados nos projetos, medir resultados, melhorar com evidências e recorrer ao método de avaliação autorizado sem tratar níveis dos dois modelos como equivalentes automáticos.
- **D.** Medir somente quantidade de documentos produzidos.
- **E.** Evitar qualquer adaptação, pois maturidade exige processo idêntico para toda situação.

**Gabarito: C.** Maturidade envolve prática institucionalizada, desempenho e avaliação conforme o modelo escolhido; sem crosswalk oficial, níveis não devem ser convertidos por semelhança de nomes.

| A | Nível depende de avaliação e evidência, não autodeclaração. |
|---|---|
| B | Documento sem prática não demonstra institucionalização. |
| C | Correta: combina escopo, execução, medição, melhoria e avaliação válida. |
| D | Volume documental não mede sozinho capacidade ou resultado. |
| E | Modelos admitem adaptação controlada ao contexto. |

## 12. E26-Q-SI-64 — Generalizar sem perder o papel de cada pessoa

**Ficha:** SI-M06; área “Modelagem UML”; `intermediate`. Objetivo: interpretar generalização e associação em diagrama de classes.

Regra: `Usuário` possui nome e autenticação comuns. `Estudante` acrescenta curso; `Docente` acrescenta área de atuação. Ambos podem criar `Reserva`; cada reserva tem exatamente um autor, e um usuário pode criar várias.

**Enunciado.** Qual modelo UML representa melhor as regras?

- **A.** `Usuário` herda simultaneamente de `Estudante` e `Docente`.
- **B.** `Estudante` e `Docente` especializam `Usuário`; existe associação `Usuário 1 — 0..* Reserva`.
- **C.** `Reserva` herda de `Usuário`, pois possui um autor.
- **D.** Não há relação entre usuário e reserva; o nome é copiado como texto.
- **E.** `Estudante` e `Docente` são a mesma classe sem atributos específicos.

**Gabarito: B.** Generalização representa características comuns e especializações; associação representa autoria sem afirmar que reserva é um tipo de usuário.

| A | A direção da generalização está invertida. |
|---|---|
| B | Correta: preserva especializações e multiplicidade. |
| C | Autoria é associação, não relação “é um”. |
| D | Cópia perde identidade e vínculo do domínio. |
| E | Elimina diferenças explicitamente exigidas. |

## 13. E26-Q-SI-65 — O host tem limite mesmo quando tudo é virtual

**Ficha:** SI-M05; área “Virtualização”; `advanced`. Objetivo: calcular capacidade física e distinguir isolamento, virtualização e proteção de dados.

Um host possui 64 GB de RAM. Hipervisor e reserva operacional consomem 8 GB. Três VMs têm 12, 16 e 20 GB garantidos. Uma nova VM requer 10 GB garantidos. O ambiente não permite sobrecompromisso; snapshots ficam no mesmo armazenamento do host e não substituem cópia independente.

**Enunciado.** Qual plano respeita as premissas?

- **A.** Criar a VM porque memória virtual é ilimitada.
- **B.** Criar um snapshot e considerá-lo backup contra perda do host.
- **C.** Retirar a reserva do hipervisor para liberar exatamente toda a memória física.
- **D.** Reconhecer que restam 8 GB, migrar ou redimensionar carga com evidência, ou ampliar capacidade antes de garantir 10 GB; manter backup independente.
- **E.** Somar somente as duas menores VMs e ignorar a terceira.

**Gabarito: D.** Há `64 − 8 − 12 − 16 − 20 = 8 GB`; faltam 2 GB. Virtualização abstrai recursos, mas não elimina capacidade física nem torna snapshot um backup externo.

| A | A premissa proíbe sobrecompromisso e a capacidade é finita. |
|---|---|
| B | Perda do armazenamento pode eliminar VM e snapshot juntos. |
| C | A reserva operacional faz parte da capacidade exigida. |
| D | Correta: calcula limite, oferece alternativas e preserva proteção. |
| E | Todas as VMs garantidas consomem capacidade. |

## 14. Segunda revisão e decisão

| IDs | Verificação independente | Decisão |
|---|---|---|
| SI-54–56 | Finalidades de ERP, CRM e SCM foram fornecidas no caso; apenas os gabaritos integram os elementos exigidos. | `under-ai-review` |
| SI-57 | A separação EDM versus gestão foi conferida com COBIT 2019; E é única. | `under-ai-review` |
| SI-58 | Incidente, problema e habilitação de mudança mantêm finalidades distintas; C é única. | `under-ai-review` |
| SI-59 | B é o único registro com análise, responsabilidade, gatilho, resposta e residual. | `under-ai-review` |
| SI-60–61 | Características e responsabilidades foram conferidas com NIST SP 800-145; D e A são únicos. | `under-ai-review` |
| SI-62 | E é a única arquitetura que atende volume, velocidade, variedade, qualidade e governança. | `under-ai-review` |
| SI-63 | C evita autodeclaração e equivalência indevida entre modelos. | `under-ai-review` |
| SI-64 | B é a única generalização/associação coerente com UML e multiplicidades. | `under-ai-review` |
| SI-65 | Cálculo confirmado em 8 GB livres; somente D respeita todas as premissas. | `under-ai-review` |

Pendências: confirmar correspondência com PPC, validar acesso integral às publicações licenciadas, testar com estudantes, realizar cotejo externo e homologar acessibilidade. Nenhum item recebeu `ready-for-pilot` ou foi integrado.
