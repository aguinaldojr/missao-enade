# N9 — Jornada Digital: lote específico de Tecnologia em Redes de Computadores

Autoria editorial — 13/11/2026, horário de Brasília. Versão documental 1.0. **Todos os onze itens permanecem provisional-pending-teacher-review.** Autoria assistida por IA; responsável humano pela consolidação a designar. Contextos, instituições, topologias, endereços, registros, estimativas e políticas são fictícios. N9 é nome provisório sujeito à aprovação institucional. Não há chancela do Inep nem afirmação de produto oficial.

Escopo exclusivo: E26-Q-TRC-01–10 e E26-P-TRC-01. Somente este Markdown é criado; não há JSON, importação, configuração de equipamento ou alteração de software, catálogo, interface, mapa, mecânica, recompensa existente ou progresso. Os lotes anteriores permanecem intactos.

## 1. Conferência prévia, matriz de TRC e cálculo das cotas

Leitura integral do [plano v2.0](../plano-colecao-enade-2026.md), [padrão editorial](padrao-editorial-piloto.md), [comum 01](lote-comum-01.md), [comum 02](lote-comum-02.md), [CC](lote-especifico-cc.md), [SI](lote-especifico-si.md), [TADS](lote-especifico-tads.md) e [TGTI](lote-especifico-tgti.md). Conferência de Question, EditorialMetadata e SequencePuzzle; schemas question/editorial/puzzles, validadores/repositórios, coleções e referências existentes de desbloqueio. Git inicialmente limpo em 69e1add519a38c05cdaedca902adb131b082f48c.

As seções 11.7 e 11.8 do plano governam estes slots. TRC-I e TRC-II são sínteses internas para rastreabilidade, não códigos oficiais criados pelo projeto. Objetivos, recortes, dificuldades e cenários permanecem propostas de autoria para revisão docente. Nenhuma questão de prova foi selecionada ou reformulada para produzir o lote.

### Fonte principal e conferência expressa dos localizadores

**F10 — Portaria Inep 172/2026, de 14/04/2026**, matriz específica de TRC. Publicação identificada na reprodução: DOU de 16/04/2026, edição 72, seção 1, página 98. O endereço individual do DOU retornou 502 nesta consulta; texto recuperado em PDF de três páginas hospedado pela ABMES. A hospedeira não é o emissor: MEC/Inep emitiu o ato. Original certificado, vigência e retificações seguem para conferência docente.

**Art. 6º da Portaria 172: XI = virtualização de redes, servidores, aplicativos e desktops; XIII = segurança da informação.** Q06 usa XI para virtualização; Q07 usa XIII para segurança. Q09 e o puzzle também referenciam XIII no recorte de proteção; não o confundem com virtualização. Os objetos XII (automação) e XVI (gerenciamento) são usados em Q08, conforme esta mesma matriz. Os localizadores de outro curso não sustentam nenhuma ficha deste lote.

A notação a.1 significa item 1 da alínea a vinculada à Competência I do art. 5º; b.2 remete à alínea b da Competência II. Os números pertencem exclusivamente à Portaria 172. As fichas separam objeto normativo, habilidade recortada e premissa autoral do problema.

### Cálculo realizado antes da redação

| Conjunto | introductory | intermediate | advanced | Questões |
|---|---:|---:|---:|---:|
| Comum 01: Q-COM-01–05 | 4 | 1 | 0 | 5 |
| Comum 02: Q-COM-06–10 | 0 | 3 | 2 | 5 |
| Dez comuns já redigidas | 4 | 4 | 2 | 10 |
| Meta de vinte elegíveis em TRC | 7 | 9 | 4 | 20 |
| Necessário nas específicas: meta menos comuns | 7 − 4 = 3 | 9 − 4 = 5 | 4 − 2 = 2 | 10 |
| Específicas deste lote | 3 | 5 | 2 | 10 |
| Comuns mais específicas de TRC | 7 | 9 | 4 | 20 |

Q-TRC-01–03 são introductory; Q-TRC-04–08 intermediate; Q-TRC-09–10 advanced. **P-TRC-01 é sequence intermediate**, fora dessa soma. Com o puzzle comum introductory, TRC tem dois puzzles elegíveis documentalmente. Isso não muda a disponibilidade do jogo nem aprova a coleção.

### Slots conferidos antes da autoria

| ID | Área / síntese | Conteúdo planejado | Dificuldade | Objetivo do plano | Principal |
|---|---|---|---|---|---|
| E26-Q-TRC-01 | TRC-01 — Modelos, TCP/IP e roteamento / TRC-I | Arquitetura TCP/IP e função de protocolo | introductory | Identificar função de componente na comunicação descrita. | F10 |
| E26-Q-TRC-02 | TRC-02 — Redes físicas, sem fio e cabeamento / TRC-I | Meios físicos e topologia | introductory | Selecionar meio coerente com requisito técnico fornecido. | F10 |
| E26-Q-TRC-03 | TRC-03 — Administração, serviços e virtualização / TRC-I | Administração de SO e serviço de rede | introductory | Relacionar evidência de indisponibilidade ao recurso administrado. | F10 |
| E26-Q-TRC-04 | TRC-01 — Modelos, TCP/IP e roteamento / TRC-I | Roteamento e configuração lógica | intermediate | Selecionar ajuste a partir de topologia e tabela fornecidas. | F10 |
| E26-Q-TRC-05 | TRC-02 — Redes físicas, sem fio e cabeamento / TRC-I | Rede sem fio e cabeamento | intermediate | Comparar soluções conforme interferência, alcance e uso previstos. | F10 |
| E26-Q-TRC-06 | TRC-03 — Administração, serviços e virtualização / TRC-I | Virtualização e serviços | intermediate | Comparar alternativas de virtualização para disponibilidade delimitada. | F10 |
| E26-Q-TRC-07 | COMUM-TEC09 — Proteção da informação: fundamentos / TRC-II | Segurança aplicada a redes | intermediate | Selecionar controle coerente com ativo, risco e conectividade exigida. | F10 |
| E26-Q-TRC-08 | TRC-04 — Projetos, automação e gestão de redes / TRC-II | Automação e gerenciamento de rede | intermediate | Comparar propostas de automação pelo efeito operacional esperado. | F10 |
| E26-Q-TRC-09 | TRC-04 — Projetos, automação e gestão de redes / TRC-II | Projeto lógico/físico e sustentabilidade | advanced | Selecionar projeto integrando desempenho, segurança e impacto ambiental. | F10 |
| E26-Q-TRC-10 | TRC-03 — Administração, serviços e virtualização / TRC-I e TRC-II | Disponibilidade, tolerância a falhas e qualidade de serviço | advanced | Selecionar estratégia integrando continuidade, desempenho e recursos. | F10 |
| E26-P-TRC-01 | TRC-04 — Projetos, automação e gestão de redes / TRC-II | Procedimento linear de mudança e verificação de rede em cinco blocos | intermediate | Ordenar dependências de uma mudança de rede com critérios de continuidade declarados. | F10 |

Todos: courses somente TRC; collectionId enade-2026; source.type official-reference; validationStatus provisional-pending-teacher-review. Questões: classification TRC e version 1. Puzzle: kind sequence, com versão editorial documental 1; SequencePuzzle não recebe campo version.

### Evidência e limites do contrato

- **Oficial:** F10 sustenta a matriz própria, não estes cenários, valores, respostas ou ordens.
- **Técnico primário:** RFCs do RFC Editor/IETF e páginas oficiais NIST; leitura dirigida e limitações registradas na seção 14. Não se afirma leitura integral de normas IEEE ou de guias não recuperados.
- **Histórico local:** leitura e cotejo dos lotes anteriores; não substituem busca externa independente de similaridade.
- **Autoria:** situações, evidências, premissas, opções, feedbacks e dependências. Regras e capacidades fictícias não são recomendações para uma rede real.
- **Pendente:** PPC/oferta, calibração, fonte certificada/retificações, resolução independente, cotejo externo, consolidação humana e acessibilidade efetiva.

Título editorial de questão, código de área, objetivo, fonte complementar, revisão e checklist ficam no Markdown. Não são propriedades adicionais de objetos estritos. Question não possui kind; example/editorialStatus são opcionais de compatibilidade e dispensados aqui. source conserva uma principal. additionalProperties: false é preservado sem alteração dos schemas.

## 2. E26-Q-TRC-01 — O nome antes da conexão

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-01 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | O nome antes da conexão |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Modelos, TCP/IP e roteamento |
| Rastreabilidade | TRC-01 / TRC-I; F10, art. 5º, I, a.1/a.2; art. 6º, IV e X |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Identificar função de componente na comunicação descrita. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T1 — RFC 1034, conceitos de DNS e registro A; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Identificar a função de resolução de nomes na comunicação TCP/IP a partir de consulta e resposta apresentadas.

### Texto ao jogador

**Contexto.** O painel fictício farol.example da Base N9 deve ser acessado pelo nome. Antes de abrir a conexão com o painel, o cliente consulta seu resolvedor DNS. O registro da consulta pede o endereço IPv4 associado a farol.example; a resposta contém um registro do tipo A com 198.51.100.42.

O endereço do próprio cliente já está configurado e não muda nesse momento. O registro descreve somente a consulta de nome, sem mostrar o estabelecimento ou a proteção da conexão posterior. Nomes e endereços são usados apenas como dados didáticos, sem acesso a rede real.

**Enunciado.** Qual função o DNS realizou na troca descrita?

- **A.** Entregou uma concessão de endereço para configurar a interface do cliente que fez a consulta.
- **B.** Descobriu o endereço físico da interface vizinha para transmitir o próximo quadro no enlace.
- **C.** Estabeleceu um canal cifrado com o painel para proteger as mensagens da aplicação.
- **D.** Associou o nome consultado a um endereço IPv4 informado na resposta.
- **E.** Escolheu o próximo roteador que encaminhará cada pacote até o painel.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** D corresponde ao registro: o cliente perguntou por um nome e recebeu um endereço IPv4 associado a ele. Essa resposta não é uma concessão de endereço ao cliente, uma resolução de endereço físico, uma sessão cifrada nem uma decisão de encaminhamento. Obter um endereço não comprova que o painel esteja acessível ou autenticado; esses fatos exigem outras verificações.

| Alternativa | Feedback específico |
|---|---|
| A | O endereço do cliente já estava configurado. A resposta consultada informa o endereço associado ao nome do painel, não uma concessão para o cliente. |
| B | Endereço físico do vizinho é uma questão do enlace. O registro DNS apresentado devolve um endereço IPv4 associado ao nome. |
| C | A consulta de nome não estabelece nem comprova cifragem da conexão com a aplicação. |
| D | Correto: o registro A associa o nome ao endereço IPv4 mostrado; as etapas posteriores da conexão não foram observadas. |
| E | Escolher próximo salto é função de encaminhamento. A consulta DNS não contém essa decisão para cada pacote. |

### Originalidade, limites e revisão

- **Competência de partida:** Identificar função de componente na comunicação descrita.
- **Raciocínio exigido:** Reconhecer a função desempenhada pelo protocolo no fluxo observado, sem confundir nome, endereço local, enlace, transporte e proteção.
- **Diferença interna e elementos autorais:** Não replica COM-07, em que requisições já recebidas delimitavam o alcance de um diagnóstico de aplicação. Aqui a decisão é identificar a função de uma troca DNS anterior à conexão, ausente nos lotes prévios.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** A consulta é explicitamente do tipo A, não atribuição de endereço ao cliente. Não se presume que DNS simples forneça autenticação, segredo ou disponibilidade.
- **Revisão docente específica:** Conferir função do registro A e limite entre resolução e conexão. Avaliar o nível introdutório sem depender de porta de serviço memorizada.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 3. E26-Q-TRC-02 — A ligação entre os dois prédios

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-02 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | A ligação entre os dois prédios |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Redes físicas, sem fio e cabeamento |
| Rastreabilidade | TRC-02 / TRC-I; F10, art. 5º, I, a.1/a.4; art. 6º, I, II e VIII |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Selecionar meio coerente com requisito técnico fornecido. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e critérios verificáveis; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Selecionar um meio de transmissão compatível com distância, ambiente e restrições de implantação fornecidos.

### Texto ao jogador

**Contexto.** Dois prédios fictícios, Oficina e Observatório, precisam de uma ligação cabeada ponto a ponto com percurso de 220 metros. O corredor tem forte interferência eletromagnética; a solução não pode depender de um sinal elétrico percorrendo esse corredor. Não é permitido instalar equipamento ativo intermediário. Há alimentação e interfaces compatíveis nas duas extremidades.

O catálogo didático do projeto informa: o conjunto óptico disponível atende até 300 metros sem repetidor; o conjunto de par metálico atende até 100 metros; o conjunto coaxial atende até 120 metros. Esses limites são dados dos conjuntos fictícios ensaiados, não valores universais de uma norma. A conexão sem fio não atende à exigência de ligação cabeada.

**Enunciado.** Qual proposta atende às condições do percurso e da implantação?

- **A.** Usar o conjunto óptico de 300 metros numa ligação direta de 220 metros, com as interfaces das extremidades.
- **B.** Usar o conjunto de par metálico de 100 metros numa ligação direta de 220 metros, sem equipamento adicional.
- **C.** Usar o conjunto coaxial de 120 metros numa ligação direta de 220 metros, sem equipamento adicional.
- **D.** Usar três trechos de par metálico com equipamentos ativos intermediários para vencer os 220 metros.
- **E.** Usar uma ligação de rádio entre os prédios para dispensar o corredor e manter conectividade entre as extremidades.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A é compatível com os 220 metros, não conduz o sinal de dados como corrente elétrica no percurso e dispensa equipamento intermediário nas condições fornecidas. B/C excedem os limites dos conjuntos e usam meio metálico; D infringe a proibição de ativos intermediários e mantém esses trechos; E abandona a exigência cabeada. A escolha não dispensa projeto, instalação e certificação reais.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: 220 é menor ou igual a 300 metros, e a transmissão óptica atende ao requisito ambiental do percurso sem ativo intermediário. |
| B | Além de usar sinal elétrico no corredor, 220 metros excedem os 100 metros informados para esse conjunto. |
| C | Além da restrição ambiental, o percurso excede os 120 metros declarados para o conjunto coaxial. |
| D | A divisão com ativos intermediários contradiz uma proibição do projeto; não basta resolver somente a distância. |
| E | Uma ligação de rádio pode servir a outros projetos, mas não cumpre a exigência de conexão cabeada deste caso. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar meio coerente com requisito técnico fornecido.
- **Raciocínio exigido:** Relacionar característica do meio, limite do conjunto e topologia de implantação.
- **Diferença interna e elementos autorais:** Não é o cabo desconectado do catálogo atual nem o teste de falha de rede de COM-07. O núcleo é selecionar um meio físico para um trajeto e ambiente definidos, sem repetir filtros de memória, sombreado ou dados pessoais.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Os limites pertencem ao catálogo fictício completo para o exercício; não se exige lembrar norma de cabeamento, categoria comercial ou conversor de fabricante. Interfaces das extremidades já são compatíveis.
- **Revisão docente específica:** Conferir percurso de 220 metros, limite de 300 e exclusão de ativo intermediário. Não apresentar os números de cobre/coaxial como padrão universal.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 4. E26-Q-TRC-03 — O serviço não voltou com o sistema

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-03 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | O serviço não voltou com o sistema |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Administração, serviços e virtualização |
| Rastreabilidade | TRC-03 / TRC-I; F10, art. 5º, I, a.4/a.5; art. 6º, IX e X |
| difficulty | introductory — conforme o slot |
| Objetivo pedagógico | Relacionar evidência de indisponibilidade ao recurso administrado. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e critérios verificáveis; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Relacionar indisponibilidade de serviço ao gerenciamento de inicialização do sistema operacional, distinguindo serviço, conectividade e permissões.

### Texto ao jogador

**Contexto.** Depois de reiniciar um servidor fictício da Base N9, um serviço de distribuição de arquivos não fica disponível. O supervisor de serviços tem uma regra explícita: no início do sistema, só inicia serviços marcados como habilitados. O painel mostra “habilitado no início: não” e “processo: parado”.

Um ensaio controlado com início manual pelo supervisor fez o serviço responder corretamente; depois ele foi parado para concluir o diagnóstico. Conectividade IP foi testada, a porta necessária está livre e as permissões de leitura da conta do serviço foram verificadas. Não há outro gerenciador que inicie o processo neste ambiente.

**Enunciado.** Qual ação administrativa trata diretamente a condição evidenciada para os próximos reinícios?

- **A.** Trocar o endereço IP do servidor, mantendo o serviço desabilitado no supervisor de inicialização.
- **B.** Ampliar as permissões dos arquivos para todas as contas, mantendo inalterada a configuração do supervisor.
- **C.** Mudar a rota padrão do servidor, mantendo o serviço sem habilitação para início do sistema.
- **D.** Alterar apenas a porta anunciada aos clientes, mantendo o processo parado após reiniciar.
- **E.** Habilitar o serviço no supervisor e iniciá-lo por ele, conferindo sua resposta e o comportamento em reinício controlado.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** E atua sobre a ausência de habilitação indicada pelo supervisor e prevê verificar o serviço iniciado e o próximo reinício. A evidência de início manual bem-sucedido e as verificações informadas afastam as mudanças de IP, rota, permissões ou anúncio de porta como tratamento dessa condição. Habilitar não é o mesmo que já estar executando; por isso o plano inclui início e teste.

| Alternativa | Feedback específico |
|---|---|
| A | A conectividade já foi verificada e mudar o endereço não faz o supervisor iniciar um serviço desabilitado. |
| B | Permissões já foram conferidas; ampliar acesso desnecessariamente não resolve a regra de inicialização observada. |
| C | A condição mostrada é de gerenciamento do serviço, não falta de rota. O processo continuaria sem início automático. |
| D | Anunciar outra porta não cria o processo que precisa atender. A configuração de inicialização permaneceria inadequada. |
| E | Correto: habilitação, início e verificação tratam a condição do supervisor sem modificar recursos que os testes já apontaram como adequados. |

### Originalidade, limites e revisão

- **Competência de partida:** Relacionar evidência de indisponibilidade ao recurso administrado.
- **Raciocínio exigido:** Ler estado de execução e política de início como informações distintas e escolher uma ação sobre o recurso administrado.
- **Diferença interna e elementos autorais:** Diferente de COM-07, não há requisição recebida e rejeitada por uma aplicação ativa. O problema é a habilitação do serviço após reinício, com conectividade e permissões já verificadas.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Supervisor e sua regra são definidos sem plataforma ou comando real. Início manual foi possível, mas não substitui habilitar o início automático.
- **Revisão docente específica:** Distinguir habilitado, iniciado e respondendo; conferir que a recomendação não afrouxa permissões nem pressupõe sintaxe de sistema operacional.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 5. E26-Q-TRC-04 — Uma rota mais específica desvia o destino

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-04 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | Uma rota mais específica desvia o destino |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Modelos, TCP/IP e roteamento |
| Rastreabilidade | TRC-01 / TRC-I; F10, art. 5º, I, a.2/a.4; art. 6º, IV, V e XV |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar ajuste a partir de topologia e tabela fornecidas. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T2 — RFC 1812, seleção de próximo salto; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Aplicar correspondência de prefixo mais longo para corrigir o próximo salto de uma rota em topologia declarada.

### Texto ao jogador

**Contexto.** Num laboratório fictício, o roteador R recebe tráfego do cliente 198.51.100.10. R possui um enlace com S: R usa 192.0.2.1/30 e S usa 192.0.2.2/30. Outro enlace liga R a T: R usa 192.0.2.5/30 e T usa 192.0.2.6/30. S alcança toda a rede 203.0.113.0/24 e tem retorno ao cliente. T não alcança essa rede. Enlaces, endereços e filtros foram conferidos.

No modelo, R escolhe primeiro o prefixo de destino mais longo; métrica só desempata prefixos de mesmo comprimento. /24 abrange os finais 0–255; /25 começando em 128 abrange 128–255. As rotas relevantes instaladas são:

| Destino | Próximo salto | Métrica |
|---|---|---:|
| 203.0.113.0/24 | 192.0.2.2 — S | 10 |
| 203.0.113.128/25 | 192.0.2.6 — T | 20 |
| 0.0.0.0/0 | 192.0.2.6 — T | 1 |

O destino 203.0.113.40 é alcançado; 203.0.113.150 segue de R para T e falha. Rotas conectadas dos enlaces existem e não competem com esses destinos. Não há política adicional de roteamento.

**Enunciado.** Qual ajuste corrige o desvio de 203.0.113.150 preservando os outros destinos da rede pelo caminho conhecido?

- **A.** Trocar o próximo salto da rota 203.0.113.0/24 para T, mantendo a rota /25 como está.
- **B.** Reduzir a métrica da rota 203.0.113.0/24 de 10 para 1, mantendo a rota /25 como está.
- **C.** Trocar o próximo salto de 203.0.113.128/25 para 192.0.2.2, mantendo o restante da tabela.
- **D.** Trocar somente o próximo salto da rota padrão para S, mantendo a rota /25 como está.
- **E.** Mudar apenas o endereço do cliente para outro da mesma rede, mantendo a tabela de R.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C faz a rota /25, escolhida para .150 por ser mais específica, encaminhar para S. O destino .40 continua usando a /24 para S. Reduzir métrica da /24 ou trocar a rota padrão não supera a escolha da /25; alterar o cliente não corrige uma seleção por destino. Um teste discriminante usa .150 e .40 a partir do mesmo cliente e verifica o próximo salto depois de R, além da resposta final.

| Alternativa | Feedback específico |
|---|---|
| A | A rota /25 continuaria desviando .150, e a /24 passaria a desviar também .40 para um vizinho sem alcance da rede. |
| B | Métrica não vence comprimento de prefixo neste modelo. A /25 permanece selecionada para .150. |
| C | Correto: a rota mais específica passa a usar S; o caminho de .40 pela /24 permanece preservado. |
| D | A rota padrão só é usada quando não há prefixo mais específico aplicável. A /25 ainda seria escolhida. |
| E | O problema observado é a rota por destino em R. Trocar o endereço dentro da mesma rede do cliente não muda o prefixo escolhido para .150. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar ajuste a partir de topologia e tabela fornecidas.
- **Raciocínio exigido:** Integrar topologia, faixas de prefixos e regra de seleção, sem confundir menor métrica com maior especificidade.
- **Diferença interna e elementos autorais:** Não repete o grafo abstrato de CC-04 nem a identificação de evidência de aplicação de COM-07. Há duas faixas de destino e uma exceção mais específica, com próximo salto observado e teste de preservação.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** A regra de seleção é local e explícita; não há política, empate ou caminho alternativo oculto. Os endereços pertencem a faixas de documentação e não são alvos reais.
- **Revisão docente específica:** Recalcular faixas /24 e /25, verificar enlaces /30 e retorno, simular .127/.128/.150 e confirmar que a troca de métrica não corrige o erro.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 6. E26-Q-TRC-05 — Cobertura em dois ambientes separados

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-05 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | Cobertura em dois ambientes separados |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Redes físicas, sem fio e cabeamento |
| Rastreabilidade | TRC-02 / TRC-I; F10, art. 5º, I, a.1/a.4; art. 6º, VI, VII e VIII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar soluções conforme interferência, alcance e uso previstos. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e critérios verificáveis; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar uma solução sem fio com retorno cabeado segundo cobertura e interferência medidas no ambiente fornecido.

### Texto ao jogador

**Contexto.** Duas salas fictícias, Norte e Sul, estão separadas por uma parede que impede cobertura útil de um ponto de acesso para a outra sala. Ensaios mostraram que um ponto de acesso instalado dentro de cada sala cobre seus usuários locais. Os clientes precisam circular dentro das salas sem cabo; o retorno dos pontos de acesso até o distribuidor pode ser cabeado.

Cada percurso de retorno mede 80 metros e o conjunto de cabo disponível atende 100 metros nas condições do projeto. Na largura de canal ensaiada, os canais 6 e 11 não se sobrepõem e estão livres de interferência relevante; o canal 1 tem interferência forte de outra instalação. Potência e posição dos pontos locais já foram ajustadas e verificadas. Mudar apenas o nome da rede não muda esses resultados físicos.

**Enunciado.** Qual implantação utiliza os resultados para atender cobertura local e retorno ao distribuidor?

- **A.** Instalar um único ponto de acesso na sala Norte no canal 6, esperando que o nome de rede comum garanta cobertura na Sul.
- **B.** Instalar um ponto por sala, usar canais 6 e 11 e ligar ambos ao distribuidor pelos percursos cabeados de 80 metros.
- **C.** Instalar um ponto por sala no canal 1, usando o cabeamento de 80 metros e ignorando a interferência medida.
- **D.** Instalar um repetidor na sala Sul que dependa exclusivamente do sinal do ponto da Norte atravessando a parede.
- **E.** Substituir os pontos de acesso por tomadas cabeadas para todos os clientes, eliminando a mobilidade dentro das salas.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** B combina cobertura local já ensaiada, canais livres e não sobrepostos nesse ambiente e retorno cabeado dentro do limite informado. A/D dependem de um atravessamento que os ensaios descartaram; C usa o canal com interferência; E abandona a mobilidade requerida. Os resultados valem para as condições ensaiadas e precisam de monitoramento após implantação; não são garantia universal de cobertura.

| Alternativa | Feedback específico |
|---|---|
| A | Nome de rede comum não amplia propagação. O ensaio informa que o sinal da Norte não oferece cobertura útil na Sul. |
| B | Correto: há cobertura por sala, separação de canais validada e retorno cabeado cujo percurso cabe no limite do conjunto. |
| C | Os cabos servem ao retorno, mas não eliminam a interferência de rádio no canal 1 entre ponto e clientes. |
| D | O repetidor dependeria justamente do sinal que não atravessa a parede com cobertura útil, segundo o ensaio. |
| E | Tomadas podem atender equipamentos fixos, mas não cumprem a mobilidade sem cabo exigida dentro das salas. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar soluções conforme interferência, alcance e uso previstos.
- **Raciocínio exigido:** Combinar cobertura medida, interferência e topologia de retorno, sem supor que identificador lógico melhora propagação.
- **Diferença interna e elementos autorais:** Não reaproveita os cenários de participantes, sombras, gargalo de memória ou escolha estratégica dos outros lotes. O núcleo é distinguir cobertura de rádio e retorno cabeado em dois ambientes separados.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Distâncias, limites e compatibilidade dos canais são dados de ensaio fictício; não se presumem norma, região regulatória, potência legal ou largura de canal oculta.
- **Revisão docente específica:** Conferir efeito da parede, dependência do repetidor, 80 ≤ 100 e separação declarada dos canais. Registrar que ensaio local não certifica todo ambiente sem fio.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 7. E26-Q-TRC-06 — Migrar a máquina sem perder sua rede

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-06 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | Migrar a máquina sem perder sua rede |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Administração, serviços e virtualização |
| Rastreabilidade | TRC-03 / TRC-I; F10, art. 5º, I, a.5; art. 6º, X e XI |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar alternativas de virtualização para disponibilidade delimitada. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T3 — NIST SP 800-125, escopo de virtualização; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Comparar migração e replicação virtualizada considerando recursos, identidade de rede e continuidade durante manutenção planejada.

### Texto ao jogador

**Contexto.** Uma máquina virtual fictícia de serviço usa seis unidades de memória no hospedeiro H1 e deve continuar acessível quando H1 entrar em manutenção. O hospedeiro H2 tem oito unidades livres e compatibilidade de migração verificada. A interrupção tolerada é de até sessenta segundos. O ensaio de migração completa, incluindo estado da aplicação, levou trinta segundos; a instância de H1 é desativada antes de H2 assumir a mesma identidade de rede.

A interface virtual deve permanecer associada à rede lógica 22. H2 possui uma ligação virtual conectada à rede 22 e outra, isolada, sem acesso dos clientes. Copiar somente o disco exige quinze minutos para reconstruir o estado. Criar uma segunda máquina em H1 não a protege da parada de H1. Considere somente os recursos e comportamentos informados.

**Enunciado.** Qual proposta atende à manutenção e à continuidade delimitadas sem criar uma identidade duplicada?

- **A.** Migrar a máquina completa para H2 usando a ligação da rede 22, com a troca de instância ensaiada e interrupção de trinta segundos.
- **B.** Criar outra máquina em H1 na rede 22 e desligar H1 para manutenção assim que a cópia ficar pronta.
- **C.** Copiar somente o disco para H2 e reconstruir o serviço em quinze minutos antes de devolver acesso aos clientes.
- **D.** Migrar a máquina completa para H2, ligando sua interface à rede isolada em vez da rede 22.
- **E.** Clonar a máquina em H2 na rede 22, mantendo simultaneamente as duas instâncias com a mesma identidade de rede.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** A usa seis das oito unidades livres, mantém a conexão à rede 22, respeita trinta ≤ sessenta segundos e evita duas instâncias com a mesma identidade. B mantém a dependência física de H1; C excede a interrupção tolerada; D perde alcance dos clientes; E cria duplicidade que o procedimento ensaiado evita. Esse ensaio não comprova alta disponibilidade para falhas simultâneas ou para todos os ambientes.

| Alternativa | Feedback específico |
|---|---|
| A | Correto: capacidade, conexão virtual e passagem de identidade foram consideradas no procedimento testado dentro da interrupção tolerada. |
| B | Duas máquinas virtuais no mesmo hospedeiro continuam dependendo dele. A manutenção de H1 pararia as duas. |
| C | Quinze minutos são novecentos segundos, acima do limite de sessenta. Disco copiado não equivale ao estado completo ensaiado. |
| D | Hospedeiro compatível e memória suficiente não bastam: a interface na rede isolada fica fora do alcance exigido. |
| E | Duas instâncias simultâneas com a mesma identidade podem conflitar. Isso não é a passagem de identidade controlada do ensaio. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar alternativas de virtualização para disponibilidade delimitada.
- **Raciocínio exigido:** Relacionar abstração virtual a dependência física, estado da aplicação e conexão virtual, preservando identidade única.
- **Diferença interna e elementos autorais:** Não calcula probabilidade de réplicas como CC-08 e não compara RTO/perda/esforço como TGTI-10. O critério próprio é migração de VM com ligação virtual correta e identidade não duplicada em manutenção planejada.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** O intervalo medido inclui a passagem do estado e da identidade; não se promete migração sempre sem perda ou pausa. Rede 22 é um identificador lógico do cenário.
- **Revisão docente específica:** Conferir 6 ≤ 8, 30 ≤ 60, quinze minutos = 900 segundos e necessidade da ligação de rede. Usar art. 6º XI para virtualização, nunca XIII.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 8. E26-Q-TRC-07 — A resposta pode voltar, outra conexão não

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-07 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | A resposta pode voltar, outra conexão não |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Proteção da informação: fundamentos |
| Rastreabilidade | COMUM-TEC09 / TRC-II; F10, art. 5º, II, b.2; art. 6º, XIII |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Selecionar controle coerente com ativo, risco e conectividade exigida. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T4 — NIST SP 800-41 Rev. 1, políticas de firewall; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Selecionar uma política de filtragem com estado que preserve fluxo autorizado e bloqueie iniciações não permitidas.

### Texto ao jogador

**Contexto.** Na rede fictícia de um arquivo técnico, a rede Laboratório é 10.20.0.0/24 e a rede Visitantes é 10.30.0.0/24. O servidor de consulta é 10.40.0.10, com serviço TCP na porta 443. A gestão dos equipamentos usa 10.99.0.10, porta TCP 22.

A política permite apenas que Laboratório inicie conexão TCP para a porta 443 do servidor de consulta. Respostas dessa conexão devem voltar. Visitantes não pode iniciar conexão para nenhum dos dois destinos, e Laboratório não pode iniciar acesso de gestão. O firewall conhece o estado das conexões: consegue permitir pacotes de resposta de uma conexão autorizada sem autorizar novas conexões no sentido inverso. Todo fluxo não permitido explicitamente é bloqueado. Identificação das redes de origem já foi verificada.

**Enunciado.** Qual conjunto de regras cumpre a política e preserva a consulta necessária?

- **A.** Permitir novas conexões de Laboratório para qualquer porta dos dois destinos e permitir respostas com estado.
- **B.** Permitir novas conexões de Laboratório e Visitantes para a porta 443 da consulta e permitir respostas com estado.
- **C.** Bloquear também novas conexões de Laboratório para a consulta, mantendo somente o bloqueio de acesso à gestão.
- **D.** Permitir Laboratório para consulta TCP 443 e as respostas dessa conexão, bloqueando as demais iniciações descritas.
- **E.** Permitir Laboratório para consulta TCP 443 e novas conexões do servidor para qualquer porta de Laboratório, em substituição à regra de respostas.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** D abre apenas a iniciação necessária e o retorno pertencente à conexão autorizada. A amplia portas e destino; B inclui uma origem não autorizada; C impede o uso requerido; E confunde resposta de conexão conhecida com permissão para novas conexões inversas. A política não substitui autenticação, atualização do serviço ou análise de tráfego permitido; o risco residual da aplicação continua existindo.

| Alternativa | Feedback específico |
|---|---|
| A | Essa regra também permite gestão por Laboratório e outras portas, excedendo o fluxo autorizado. |
| B | Visitantes não foi autorizado a consultar esse servidor; incluir a rede amplia indevidamente as origens permitidas. |
| C | Bloquear a consulta de Laboratório protege por indisponibilidade, mas descumpre a conectividade que precisa ser preservada. |
| D | Correto: o fluxo inicial e suas respostas são permitidos, sem abrir novas iniciações para os destinos protegidos. |
| E | Retorno com estado não é uma nova conexão iniciada pelo servidor. A permissão inversa ampla ultrapassa a necessidade. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar controle coerente com ativo, risco e conectividade exigida.
- **Raciocínio exigido:** Distinguir direção de iniciação e tráfego de resposta numa política de privilégio mínimo com estado.
- **Diferença interna e elementos autorais:** Não repete a finalidade de registros pessoais de COM-02 ou as credenciais individuais de COM-10. O conceito central é estado da conexão na fronteira de rede, não identidade de usuário ou uso de dados.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Há política padrão de bloqueio e identificação de origem verificada. Não se afirma que endereços por si só autenticam pessoas ou que permitir TCP 443 certifique o conteúdo da aplicação.
- **Revisão docente específica:** Testar novas conexões e respostas separadamente, incluindo tentativa inversa nova e gestão TCP 22. Confirmar art. 6º XIII para segurança da informação.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 9. E26-Q-TRC-08 — O contador mudou de referência

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-08 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | O contador mudou de referência |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Projetos, automação e gestão de redes |
| Rastreabilidade | TRC-04 / TRC-II; F10, art. 5º, II, b.4; art. 6º, XII e XVI |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Comparar propostas de automação pelo efeito operacional esperado. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T5 — RFC 2863, descontinuidade de contadores; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Avaliar automação de monitoramento de rede considerando descontinuidade de contador, referência temporal e limites de atuação.

### Texto ao jogador

**Contexto.** Um coletor fictício lê o contador acumulado de bytes recebidos de uma mesma interface a cada sessenta segundos. Para obter bytes por segundo, deve dividir a diferença entre contadores comparáveis pelo intervalo de coleta. O registro do equipamento confirma um reinício entre as coletas 0 e 1, que zerou o contador; não houve novo reinício ou estouro do contador entre 1 e 2.

| Coleta | Tempo no relógio do coletor | Tempo desde o início do equipamento | Contador de bytes |
|---|---:|---:|---:|
| 0 | 0 segundos | 500 segundos | 9000 |
| 1 | 60 segundos | 20 segundos | 100 |
| 2 | 120 segundos | 80 segundos | 700 |

O coletor deve manter histórico e distinguir medida indisponível de taxa zero. Tem autorização somente de leitura e alerta; não pode reiniciar interfaces nem mudar rotas automaticamente. Os tempos desde o início estão convertidos para segundos; não é preciso conhecer unidade de protocolo.

**Enunciado.** Qual proposta evita um alerta de ausência de tráfego sem evidência e volta a calcular uma taxa válida quando possível?

- **A.** Calcular 1,67 byte por segundo no intervalo 0–1, dividindo o contador 100 pelos sessenta segundos completos desse intervalo.
- **B.** Calcular 148,33 bytes por segundo no intervalo 0–1, usando o valor absoluto da diferença entre 100 e 9000.
- **C.** Registrar taxa zero no intervalo 0–1 por a diferença ser negativa e tratar esse zero como ausência confirmada de tráfego.
- **D.** Registrar a descontinuidade e taxa indisponível em 0–1, usar a coleta 1 como nova referência e obter 10 bytes por segundo em 1–2.
- **E.** Apagar todas as coletas anteriores ao reinício e manter o monitoramento sem novas taxas até um operador zerar manualmente o contador.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** D não compara acumuladores separados por reinício. Em 0–1, faltam dados para a taxa de todo o intervalo: não é zero confirmado nem uma taxa obtida pelo módulo da diferença. Em 1–2, os contadores pertencem à mesma referência e (700 − 100)/60 = 10 bytes por segundo. O evento e o histórico permanecem registrados; não há mudança de configuração ou ação automática a reverter. Um alerta sobre reinício pode ser registrado separadamente de um alerta de tráfego zero.

| Alternativa | Feedback específico |
|---|---|
| A | Os cem bytes pertencem apenas ao período após o reinício; dividi-los por todo o intervalo não recompõe os bytes anteriores à descontinuidade. |
| B | Tomar o valor absoluto transforma uma mudança de referência em tráfego fictício. A diferença entre esses dois contadores não é comparável. |
| C | Uma medida não calculável não comprova ausência de tráfego. Transformá-la em zero pode disparar alerta indevido. |
| D | Correto: a automação preserva a incerteza e o evento de reinício, e retoma a taxa quando há duas leituras comparáveis. |
| E | Não é necessário apagar evidências nem zerar manualmente o contador. As coletas 1 e 2 já permitem uma nova diferença válida. |

### Originalidade, limites e revisão

- **Competência de partida:** Comparar propostas de automação pelo efeito operacional esperado.
- **Raciocínio exigido:** Distinguir zero, ausência de medida e descontinuidade em uma rotina automatizada de observabilidade.
- **Diferença interna e elementos autorais:** Diferente da disponibilidade por união temporal de TGTI-02 e da coorte com acompanhamento incompleto do puzzle TGTI: o núcleo é a mudança de referência de um contador cumulativo de interface. Não envolve causa de aplicação nem priorização de chamados.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Reinício foi confirmado por registro, não inferido só de número menor. Estouro e troca de interface são excluídos do segundo intervalo. A automação é somente de leitura; reversão de rede não se aplica a esta proposta.
- **Revisão docente específica:** Recalcular (700 − 100)/60 e distinguir taxa indisponível de zero. Conferir histórico, alerta de reinício e limites de autorização; discutir variantes com descontinuidade sem reinício em revisão posterior.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 10. E26-Q-TRC-09 — Reutilizar sem criar um gargalo

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-09 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | Reutilizar sem criar um gargalo |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Projetos, automação e gestão de redes |
| Rastreabilidade | TRC-04 / TRC-II; F10, art. 5º, II, b.1/b.2/b.6; art. 6º, XIII, XIV e XIX |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar projeto integrando desempenho, segurança e impacto ambiental. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | Modelo fechado do caso, com premissas e critérios verificáveis; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Avaliar projeto físico e lógico integrando capacidade no caminho, isolamento, interoperabilidade e critérios ambientais delimitados.

### Texto ao jogador

**Contexto.** Um espaço fictício de produção audiovisual tem duas salas. Em cada sala, duas estações enviam simultaneamente 60 Mb/s cada para o arquivo central, totalizando 120 Mb/s por sala e 240 Mb/s no centro. Os valores já incluem a sobrecarga considerada no ensaio; a capacidade indicada é útil e atende nesse sentido. O tráfego segue das estações ao acesso da sala e daí ao centro; não há caminho paralelo.

Os dois comutadores de acesso existentes funcionam, aceitam retorno de 1 Gb/s e suportam a marcação de redes lógicas testada com o centro. Uma rede de gestão deve ficar isolada dos usuários por configuração verificada. O projeto deve reutilizar esses dois comutadores, pois atendem aos requisitos, e manter consumo operacional total de até 45 W na carga ensaiada. Esse é um critério ambiental parcial, não uma análise completa de ciclo de vida.

| Projeto | Retorno de cada sala | Recepção útil no centro | Isolamento da gestão | Reutiliza ambos os acessos? | Consumo total |
|---|---:|---:|---|---|---:|
| A | 100 Mb/s | 1 Gb/s | Verificado | Sim | 30 W |
| B | 1 Gb/s | 1 Gb/s | Não previsto | Sim | 38 W |
| C | 1 Gb/s | 1 Gb/s | Verificado | Não | 65 W |
| D | 1 Gb/s nominal | 1 Gb/s nominal | Previsto com marcação incompatível com os acessos | Sim | 35 W |
| E | 1 Gb/s | 1 Gb/s | Verificado com marcação compatível | Sim | 40 W |

Um Gb/s equivale a mil Mb/s neste exercício. A incompatibilidade de D impede o retorno integrado das salas; não há adaptador ou conversão adicional no projeto. As demais compatibilidades, portas e enlaces necessários foram ensaiados e estão incluídos.

**Enunciado.** Qual projeto atende aos fluxos simultâneos e às condições lógicas e ambientais informadas?

- **A.** Projeto A, pois a recepção de 1 Gb/s no centro compensa os retornos de 100 Mb/s de cada sala.
- **B.** Projeto B, pois a capacidade de 1 Gb/s dispensa o isolamento lógico entre usuários e gestão.
- **C.** Projeto C, pois substituir todos os acessos atende ao desempenho mesmo excedendo consumo e reutilização definidos.
- **D.** Projeto D, pois a velocidade nominal de 1 Gb/s basta mesmo com a incompatibilidade de marcação.
- **E.** Projeto E, pois os caminhos têm capacidade, o isolamento é compatível e a reutilização mantém o consumo no limite.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** E oferece 1000 Mb/s em cada retorno para uma demanda de 120, e 1000 no centro para 240. Também atende ao isolamento, à compatibilidade, à reutilização e a 40 ≤ 45 W. Em A, o gargalo de 100 Mb/s continua em cada sala; B omite isolamento; C viola os dois critérios ambientais declarados; D não integra os caminhos por incompatibilidade. O menor consumo de um projeto que não entrega os requisitos não o torna suficiente. Reutilizar e medir potência não prova menor impacto em todo o ciclo de vida.

| Alternativa | Feedback específico |
|---|---|
| A | Um enlace de 100 Mb/s não transporta os 120 Mb/s simultâneos exigidos pela sala neste modelo; capacidade no centro não aumenta o enlace anterior. |
| B | Capacidade de transmissão não substitui isolamento da gestão. A separação é um requisito independente. |
| C | Desempenho não autoriza descumprir a reutilização e o máximo de 45 W definidos; a proposta chega a 65 W. |
| D | A capacidade nominal não cria interoperabilidade. A marcação incompatível impede o caminho integrado descrito. |
| E | Correto: os retornos e o centro atendem às demandas, a marcação é compatível, a gestão fica isolada e o consumo total é 40 W. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar projeto integrando desempenho, segurança e impacto ambiental.
- **Raciocínio exigido:** Calcular demandas por corte do caminho e integrar compatibilidade lógica, segurança e critérios ambientais sem alegação ambiental ampla.
- **Diferença interna e elementos autorais:** Não é a otimização inteira de SI-09 ou a dependência de portfólio de TGTI-09. O componente próprio é o gargalo por sala versus capacidade central, combinado com interoperabilidade, isolamento e reutilização de equipamentos existentes.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Capacidades são úteis no sentido considerado, sem sobrecarga oculta; não se pode usar outro caminho. Reutilização é requisito explícito, não preferência implícita. Não se afirma que potência sozinha determine sustentabilidade global.
- **Revisão docente específica:** Conferir 2 × 60 = 120 por sala, 240 no centro, conversão Gb/s/Mb/s, marcação e isolamento. Avaliar integração avançada sem reduzir sustentabilidade a consumo ou novidade.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 11. E26-Q-TRC-10 — O enlace reserva também tem limite

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-Q-TRC-10 |
| Versão | 1 |
| Contrato / classification | question / TRC |
| Título editorial | O enlace reserva também tem limite |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Administração, serviços e virtualização |
| Rastreabilidade | TRC-03 / TRC-I e TRC-II; F10, art. 5º, I, a.5; II, b.1/b.6; art. 6º, X e XVI |
| difficulty | advanced — conforme o slot |
| Objetivo pedagógico | Selecionar estratégia integrando continuidade, desempenho e recursos. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T6 — RFC 4594, classes de serviço; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Integrar comutação de enlace, admissão de tráfego e qualidade de serviço sob capacidade reduzida, explicitando premissas de falha e desempenho.

### Texto ao jogador

**Contexto.** A rede fictícia de uma estação de acompanhamento possui dois enlaces: principal de 20 Mb/s e reserva de 12 Mb/s. Apenas um fica ativo por vez. A continuidade exigida cobre a perda de um enlace por vez, com equipamentos locais, alimentação e caminho restante funcionando. A detecção de perda e a troca automática foram ensaiadas em todas as propostas que as mencionam; não há soma de capacidades após uma falha.

Na carga ensaiada, voz essencial precisa de 4 Mb/s e atraso de até 30 ms; telemetria essencial precisa de 6 Mb/s. Transferências não essenciais pedem até 8 Mb/s, mas podem ser limitadas. Capacidades e demandas já incluem as sobrecargas consideradas. O mecanismo disponível reserva taxas por classe e limita a classe não essencial.

O ensaio com reserva de 4 Mb/s para voz e 6 para telemetria, limitando transferências a 2 Mb/s no enlace reserva, mediu atraso de voz de 25 ms. Compartilhar igualmente sem essas reservas mediu 65 ms na mesma carga. Não se deduz atraso apenas da soma de taxas: esses valores são evidência de ensaio restrita ao perfil descrito.

**Enunciado.** Qual estratégia satisfaz a continuidade e os dois serviços essenciais no enlace reserva, dentro das evidências disponíveis?

- **A.** Trocar automaticamente para a reserva e manter as três classes sem limite, tratando a demanda total de 18 Mb/s como compatível com os 12 Mb/s.
- **B.** Trocar automaticamente para a reserva, reservar 4 Mb/s para voz e apenas 2 para telemetria, liberando 6 para transferências.
- **C.** Trocar automaticamente para a reserva, reservar 4 Mb/s para voz e 6 para telemetria e limitar transferências a 2, usando a política de atraso ensaiada.
- **D.** Planejar o atendimento pela soma de 20 e 12 Mb/s, mantendo as demandas integrais mesmo quando um enlace tiver parado.
- **E.** Trocar automaticamente para a reserva com compartilhamento igual, aceitando os 65 ms medidos para voz como suficientes ao requisito.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** C reserva os dez Mb/s essenciais e limita transferências aos dois restantes: 4 + 6 + 2 = 12. A política ensaiada também mantém o atraso de voz em 25 ≤ 30 ms no perfil dado. A pede 18 em um enlace de 12; B retira capacidade essencial de telemetria; D conta capacidade de enlace indisponível; E aceita atraso acima do limite. O modelo não cobre falha de ambos os enlaces, falha elétrica comum ou todos os perfis de tráfego; essas condições exigem outra avaliação.

| Alternativa | Feedback específico |
|---|---|
| A | Quatro mais seis mais oito somam dezoito Mb/s. A troca de enlace não cria os seis Mb/s que faltam na reserva. |
| B | A voz recebe sua taxa, mas a telemetria precisa de seis, não dois. Proteger uma classe não satisfaz os dois requisitos essenciais. |
| C | Correto: as taxas cabem nos doze Mb/s e o atraso medido da política atende ao limite, sob as condições e falhas delimitadas. |
| D | Após uma perda, a capacidade do enlace parado não está disponível. Além disso, só um enlace fica ativo neste ambiente. |
| E | Sessenta e cinco milissegundos ultrapassam o máximo de trinta; continuidade de transporte sozinha não demonstra qualidade de serviço suficiente. |

### Originalidade, limites e revisão

- **Competência de partida:** Selecionar estratégia integrando continuidade, desempenho e recursos.
- **Raciocínio exigido:** Integrar cenário de falha, orçamento de banda por classe e evidência de atraso, separando redundância de recursos simultâneos.
- **Diferença interna e elementos autorais:** Não calcula interseção de probabilidades de CC-08 nem os limites de recuperação/perda/esforço de TGTI-10. O núcleo é readequar admissão de tráfego ao enlace reserva e verificar qualidade da classe essencial.
- **Histórico:** nenhum enunciado de prova foi selecionado, copiado ou superficialmente adaptado. Conceitos clássicos e formatos de comparação não são apresentados como invenções.
- **Ambiguidades controladas:** Falha coberta, capacidade útil, perfil e latência de ensaio são explicitados; banda reservada não é tomada como prova matemática de qualquer atraso. A troca e os recursos locais são premissas verificadas.
- **Revisão docente específica:** Recalcular 4 + 6 + 8 = 18 e 4 + 6 + 2 = 12, avaliar 25 ≤ 30 e 65 > 30, e discutir pontos únicos de falha excluídos do modelo.
- **Risco residual:** ausência de texto idêntico não prova ineditismo estrutural ou externo; requer cotejo independente.

### Checklist editorial do item

- [x] ID, área, síntese, objetivo, dificuldade e curso correspondem ao slot.
- [x] F10/Portaria 172 como principal e localizadores próprios de TRC.
- [x] Contexto fictício, cinco alternativas e uma resposta fundamentada; feedbacks A–E.
- [x] Critérios, unidades e rejeição dos distratores explicitados, sem comando de fabricante.
- [x] Textos ao jogador sem referência à avaliação externa; metadados separados.
- [x] Comparação com comuns, CC, SI, TADS e TGTI registrada; status provisório.
- [ ] Resolução independente sem gabarito e confirmação docente da unicidade.
- [ ] PPC, dificuldade, originalidade externa e acessibilidade na apresentação.

## 12. E26-P-TRC-01 — Mudar a gestão sem perder a telemetria

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-TRC-01 |
| Versão editorial documental | 1 |
| Contrato / kind | sequence |
| Título / title | Mudar a gestão sem perder a telemetria |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referenciais oficiais do Enade 2026; elaboração autoral inédita para N9 — Jornada Digital, sujeita à revisão docente de TRC. |
| Cursos / courses | TRC |
| Área / area | Projetos, automação e gestão de redes |
| Rastreabilidade | TRC-04 / TRC-II; F10, art. 5º, II, b.1/b.2/b.4; art. 6º, XIII, XV e XVI |
| difficulty | intermediate — conforme o slot |
| Objetivo pedagógico | Ordenar dependências de uma mudança de rede com critérios de continuidade declarados. |
| Fonte oficial principal | F10 — Portaria Inep 172/2026, de 14/04/2026; seção 14 |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 172/2026 |
| source.url | https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf |
| source.description | Referência normativa específica de TRC para criação autoral no recorte indicado; cenário e solução didáticos, sem autoria ou chancela do Inep. |
| Complemento documental | T7 — RFC 6241, candidata e confirmação reversível; limites na seção 14 |
| Status editorial / validationStatus | provisional-pending-teacher-review |

**Competências / competencies — textos propostos:**

- Ordenar uma mudança de rede por artefatos verificados, preservando tráfego essencial e condicionando confirmação ou retorno às evidências do ensaio.

### Narrativa ao jogador

**Cenário fictício e provisório.** O terminal da Base N9 acompanha a mudança da rede de gestão de um comutador de laboratório. A mudança está autorizada e há console local independente, com operador responsável, para recuperação. Não execute comandos reais: organize as entregas do procedimento simulado.

No estado inicial, gestão usa rede lógica 10 e endereço 10.60.10.1; sensores usam rede lógica 30. O retorno ao distribuidor permite as redes 10 e 30. A gestão nova deve usar rede 20 e endereço 10.60.20.1. O caminho externo da equipe autorizada até a rede 20 já está preparado e ensaiado. É preciso permitir também a rede 20 no retorno antes de assumir a gestão nova; a rede 30 dos sensores deve permanecer permitida. A rede 10 continuará permitida neste exercício, até desativação futura separadamente autorizada.

A referência inicial deve conter a revisão efetivamente lida, sua configuração e testes de gestão antiga e telemetria. A candidata é um conjunto fechado de alterações calculado sobre essa revisão; se ela mudar antes da aplicação, a candidata não pode ser usada sem nova conferência. Não há mudança concorrente no caminho de sucesso deste caso.

O simulador oferece aplicação provisória reversível: produz um recibo da candidata instalada, mas ainda exige decisão posterior. Sua console independente pode restaurar a referência. Verificar não é apenas receber uma mensagem de aplicação aceita. A política exige testar, no estado provisório instalado: acesso autorizado à gestão em 10.60.20.1, entrega da telemetria dos sensores na rede 30 e bloqueio de uma tentativa de gestão originada da rede de visitantes. Bloqueio nessa última tentativa é o resultado esperado, não falha do teste.

No caminho de sucesso, os três resultados observados são: gestão autorizada responde; telemetria é entregue; tentativa dos visitantes é bloqueada. Se todos atenderem aos resultados esperados, confirmar e persistir a candidata. Se algum não atender, cancelar e restaurar a referência pela console, verificar a recuperação e registrar o desvio, sem declarar sucesso da mudança. Esses critérios são do laboratório delimitado, não garantia universal de rede.

Cada cartão deve receber a entrega concluída exigida por seu texto. Não há cronômetro para o jogador, espera real ou conexão com equipamento. Preparar um modelo genérico antes da leitura é possível; finalizar esta candidata depende da revisão real recebida.

### Blocos

Ordem editorial intencionalmente diferente da solução. Os cartões não exibem numeração ordinal de solução.

| ID do bloco | Texto do cartão |
|---|---|
| verificar-fluxos | Receber o recibo de aplicação provisória e executar os três testes nesse estado, classificando cada resultado como atende ou não atende à política e produzindo o relatório. |
| registrar-referencia | Receber a autorização e o acesso independente já disponíveis; ler a revisão atual, registrar a configuração e testar gestão antiga e telemetria, produzindo a referência recuperável. |
| decidir-destino | Receber o relatório dos três testes: se todos atendem, confirmar e persistir a candidata; caso contrário, cancelar e restaurar a referência pela console, verificar recuperação e registrar o desvio. |
| aplicar-provisoriamente | Receber a candidata conferida para a revisão lida e aplicá-la em modo provisório reversível, produzindo o recibo da configuração instalada sem ainda confirmar. |
| preparar-candidata | Receber a referência recuperável; finalizar e conferir a candidata dessa revisão, incluindo rede 20 no retorno e gestão nova, preservando redes 10 e 30 e os controles existentes. |

### Ordem correta e justificativa

**correctOrder:** registrar-referencia → preparar-candidata → aplicar-provisoriamente → verificar-fluxos → decidir-destino.

A solução representa cinco entregas concluídas com pré-condições explícitas, não um protocolo universal. Existem quatro ligações entre os cinco blocos e uma pré-condição externa já satisfeita, totalizando cinco condições de entrada descritas abaixo. A expressão do plano sobre dependências não exige inventar uma sexta operação ou ordem entre preparações independentes.

| Condição de entrada | Por que precisa estar atendida |
|---|---|
| Autorização e console independente antes de registrar-referencia | São condições externas já disponíveis para ler/testar e recuperar de forma autorizada; não são um cartão novo. |
| registrar-referencia antes de preparar-candidata | A candidata final vincula-se à revisão e configuração efetivamente recebidas, preservando o estado a recuperar. |
| preparar-candidata antes de aplicar-provisoriamente | Aplicar exige o conjunto fechado e conferido dessa revisão; um rascunho não oferece a mesma garantia. |
| aplicar-provisoriamente antes de verificar-fluxos | Os três testes devem observar a configuração provisória instalada, identificada no recibo, não só uma simulação anterior. |
| verificar-fluxos antes de decidir-destino | Confirmar ou restaurar depende do relatório comparado à política; a aceitação de configuração pelo equipamento não basta. |

O modelo linear descreve o caminho de sucesso. Preparar modelos genéricos, observar antes ou testar o estado inicial são atividades possíveis, mas não equivalem à candidata final nem à verificação do estado provisório. Revisão alterada exige nova conferência: não se reutiliza silenciosamente uma candidata obsoleta.

### Evidências, continuidade e validação da solução

| Aspecto | Referência inicial | Candidata e resultado esperado |
|---|---|---|
| Gestão | Rede 10, endereço 10.60.10.1 | Rede 20, endereço 10.60.20.1; caminho externo já preparado. |
| Retorno ao distribuidor | Redes permitidas 10 e 30 | Permitir 10, 20 e 30; não remover a rede dos sensores. |
| Telemetria | Entrega pela rede 30 | Continuar entregando pela rede 30 após a mudança. |
| Visitantes | Sem autorização de gestão | Tentativa de gestão bloqueada; isso atende ao teste negativo. |
| Recuperação | Console independente e referência atual | Cancelamento restaura referência e exige teste de recuperação se algum critério falhar. |

**Relatório do caminho de sucesso:** gestão autorizada responde; telemetria é entregue; tentativa dos visitantes é bloqueada. Portanto, todos os critérios atendem e o destino é **confirmar e persistir**. Não se exige fazer rollback após sucesso.

**Contraprovas:**

- Trocar gestão sem permitir a rede 20 no retorno quebra a conectividade exigida.
- Remover a rede 30 pode preservar a gestão e ainda assim interromper o serviço essencial.
- Testar só a gestão não verifica telemetria nem a fronteira com visitantes.
- Tratar o bloqueio esperado dos visitantes como falha gera retorno indevido.
- Confirmar antes de observar os testes do estado provisório confunde aceitação de configuração com resultado operacional.
- Restaurar sempre, mesmo com três critérios atendidos, não conclui a mudança requerida.
- Preparar uma candidata final antes de receber a referência real viola sua entrada; preparar um modelo genérico não.
- Decidir antes de receber o relatório não permite aplicar a política. Cada inversão de blocos consecutivos perde um artefato exigido.

A cadeia admite uma única ordem completa entre os cinco blocos. As 120 permutações devem ser examinadas por precedência e por fluxo de artefatos. As oito combinações de três critérios booleanos têm dois destinos: somente todos atendidos permitem confirmar; as outras sete exigem retorno e verificação. É o mesmo último bloco com condição explícita, não um puzzle ramificado novo.

### Dicas progressivas

1. Procure qual evidência permite recuperar o estado anterior e qual cartão produz a revisão usada pela candidata. Um plano genérico não substitui a referência real.
2. Uma confirmação de aplicação não demonstra que gestão, sensores e bloqueio dos visitantes se comportaram como esperado. Os testes precisam observar o estado provisório já instalado.
3. Compare cada observação ao resultado esperado: bloquear visitantes pode significar teste atendido. O destino da mudança depende do relatório, sem obrigar retorno quando tudo atende.
Nenhuma dica isolada lista a ordem completa. A primeira aponta revisão e recuperação; a segunda separa instalação de comportamento; a terceira exige interpretar os testes, sem obrigar retorno após sucesso. A adequação da ajuda cumulativa deve ser avaliada com estudantes.

### Explicação final ao jogador

Primeiro se registra uma referência recuperável da revisão atual. Ela fundamenta a candidata que inclui a rede 20 no retorno e muda a gestão, mantendo a telemetria da rede 30, a rede 10 temporariamente e os controles. A candidata conferida é aplicada provisoriamente; só então os testes observam o estado realmente instalado. No relatório de sucesso, a gestão autorizada responde, a telemetria chega e os visitantes são bloqueados: os três critérios foram atendidos. O último cartão confirma e persiste essa mudança. Se qualquer critério não fosse atendido, o mesmo cartão mandaria cancelar, restaurar e verificar a referência pela console. Não se faz retorno automático depois de uma mudança bem-sucedida, nem se confirma apenas porque o equipamento aceitou uma configuração.

### Interação visual, feedback, acessibilidade e retorno

**Especificação documental, sem implementação.** Cinco cartões desordenados e um painel textual de referência, candidata e resultados esperados. Topologia também em texto: equipe autorizada chega pelo caminho da rede 20; comutador liga sensores na rede 30 ao distribuidor; visitantes não têm autorização de gestão; console local independente serve à recuperação.

- Selecionar e mover cartões com mouse ou toque; botões nomeados “Mover para cima” e “Mover para baixo” garantem alternativa ao arraste.
- Tab alcança cartões e controles; Enter/Espaço aciona seleção, movimento e validação. Atalhos de setas podem ser informados sem substituir os botões. Preservar foco e anunciar a posição em texto após mover.
- Em celular e ampliação, cartões em coluna e evidências em lista equivalente às tabelas; não ocultar premissas para reduzir texto. Não depender de cor, áudio, seta desenhada ou gesto fino.
- Ao validar incorretamente, indicar uma dependência não satisfeita, sem listar a solução. Exemplo: “Os testes precisam observar a configuração provisória que foi instalada. Confira qual entrega identifica esse estado.”
- Acerto mostra a explicação e destaca por texto que bloqueio de visitantes é sucesso de um teste negativo. Não confundir todos os testes atenderem com todos os fluxos serem permitidos.
- Sem cronômetro obrigatório, perda de XP ou obrigação de responder rapidamente. A confirmação é estado lógico do simulador, sem contagem regressiva do jogador. O modelo didático se inspira em configuração confirmável, mas não executa NETCONF nem imita seus temporizadores reais.
- Retorno futuro à Base N9 manteria a posição anterior, conforme o sistema existente. Rejogar sem nova recompensa por ID. Nenhuma tela, fluxo, porta ou dado de progresso foi alterado.

### Recompensa e desbloqueio propostos

**reward.xp:** 100, uma única vez por ID; rejogar sem recompensa adicional. Sem desconto por erro ou dica.
**unlocks.mapId:** base-n9; **unlocks.objectId:** door.

Referências existentes usadas somente na proposta documental. Nenhum XP ou desbloqueio é concedido nesta entrega; nenhum progresso é removido ou regravado.

### Originalidade, limites e checklist do puzzle

A migração da rede de gestão preservando telemetria e interpretando teste negativo tem estados próprios. Não é recuperação de catálogo com integridade (comum), compilação (CC), conciliação monetária (SI), processamento de legendas (TADS) ou indicador de acompanhamento (TGTI). Também não repete a sequência genérica de configuração de rede do catálogo atual: aqui há candidata vinculada a revisão, estado provisório, três verificações de continuidade/proteção e decisão condicionada de confirmar ou retornar.

Planejar/aplicar/verificar são verbos recorrentes em mudanças. Originalidade interna depende dos artefatos, das fronteiras e do raciocínio, não só da troca de nomes. As questões deste lote tratam protocolos, rotas, cobertura, VM, filtragem com estado, contadores e projetos; nenhuma apresenta este fluxo de migração de gestão com confirmação condicional.

- [x] ID, área, síntese, curso, F10 e dificuldade intermediate conforme o plano.
- [x] Cinco blocos com IDs únicos; quatro dependências internas e pré-condição externa explícita.
- [x] Solução única no caminho de sucesso e condição de retorno explicada sem rollback obrigatório após sucesso.
- [x] Candidata, revisão, recibo e relatório distintos; telemetria e bloqueio esperado preservados.
- [x] Três dicas progressivas sem solução completa e feedback respeitoso.
- [x] Texto equivalente, botões e teclado descritos; nenhum cronômetro de jogador.
- [x] Status provisório, 100 XP e base-n9/door apenas documentais.
- [ ] Tentar ordem alternativa independentemente e conferir significado das pré-condições.
- [ ] Testar ajuda cumulativa, dificuldade e leitura com estudantes.
- [ ] Homologar acessibilidade e retorno em integração futura autorizada.

## 13. Inventário, gabaritos e cotas

| ID | Gabarito / solução | Dificuldade | Área | Estado |
|---|---|---|---|---|
| E26-Q-TRC-01 | D | introductory | TRC-01 | provisional-pending-teacher-review |
| E26-Q-TRC-02 | A | introductory | TRC-02 | provisional-pending-teacher-review |
| E26-Q-TRC-03 | E | introductory | TRC-03 | provisional-pending-teacher-review |
| E26-Q-TRC-04 | C | intermediate | TRC-01 | provisional-pending-teacher-review |
| E26-Q-TRC-05 | B | intermediate | TRC-02 | provisional-pending-teacher-review |
| E26-Q-TRC-06 | A | intermediate | TRC-03 | provisional-pending-teacher-review |
| E26-Q-TRC-07 | D | intermediate | COMUM-TEC09 | provisional-pending-teacher-review |
| E26-Q-TRC-08 | D | intermediate | TRC-04 | provisional-pending-teacher-review |
| E26-Q-TRC-09 | E | advanced | TRC-04 | provisional-pending-teacher-review |
| E26-Q-TRC-10 | C | advanced | TRC-03 | provisional-pending-teacher-review |
| E26-P-TRC-01 | Cinco entregas conforme a seção 12 | intermediate | TRC-04 | provisional-pending-teacher-review |

Gabaritos: **D/A/E/C/B/A/D/D/E/C**. Distribuição: **A = 2; B = 1; C = 2; D = 3; E = 2**. Repetições como D/D não são eliminadas para fabricar alternância, ciclo ou distribuição uniforme. Não se apresenta a distribuição como instrumento de calibração ou pista.

Questões específicas: 3 introductory, 5 intermediate, 2 advanced. Com as dez comuns 4/4/2: **7 introductory, 9 intermediate, 4 advanced** nas vinte elegíveis de TRC. Puzzle intermediate separado da cota. O fechamento documental dos 66 slots não significa aprovação, importação ou ativação de conteúdo.

## 14. Fontes e rastreabilidade de acesso

Consulta dirigida desta autoria em 13/11/2026. Datas de atos, publicações e consulta são distintas. Nenhum enunciado, alternativa ou gabarito de prova/certificação foi usado como molde. Fontes técnicas sustentam conceitos delimitados; valores e regras dos casos são autorais.

### F10 — referência normativa principal de todos os itens

- **Emissor:** Ministério da Educação / Inep.
- **Ato:** Portaria Inep nº 172, de 14/04/2026, matriz específica de Tecnologia em Redes de Computadores.
- **Publicação identificada na reprodução:** DOU, 16/04/2026, edição 72, seção 1, página 98.
- **Original indicado:** [endereço individual do DOU](https://www.in.gov.br/web/dou/-/portaria-n-172-de-14-de-abril-de-2026-699944904), com falha **502** nesta recuperação. Não se declara leitura certificada desse original.
- **Reprodução efetivamente recuperada:** [PDF da ABMES](https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf), três páginas. Art. 5º nas páginas 2–3 e art. 6º na página 3 do PDF. ABMES é hospedeira, não emissora.
- **Conferência crítica:** art. 6º **XI — virtualização**; **XIII — segurança da informação**. Os campos de rastreabilidade de Q06/Q07 registram respectivamente esses incisos, sem reutilizar localizadores de outros cursos.
- **Limites:** original, integridade da reprodução, retificações e vigência permanecem para confirmação. A referência sustenta o objeto; não homologa itens, dificuldade, cenários ou soluções.

| Item | Art. 5º da Portaria 172 | Art. 6º da mesma portaria | Uso delimitado |
|---|---|---|---|
| E26-Q-TRC-01 | I, a.1/a.2 | IV e X | Recorte de arquitetura tcp/ip e função de protocolo; premissas e decisão autorais. |
| E26-Q-TRC-02 | I, a.1/a.4 | I, II e VIII | Recorte de meios físicos e topologia; premissas e decisão autorais. |
| E26-Q-TRC-03 | I, a.4/a.5 | IX e X | Recorte de administração de so e serviço de rede; premissas e decisão autorais. |
| E26-Q-TRC-04 | I, a.2/a.4 | IV, V e XV | Recorte de roteamento e configuração lógica; premissas e decisão autorais. |
| E26-Q-TRC-05 | I, a.1/a.4 | VI, VII e VIII | Recorte de rede sem fio e cabeamento; premissas e decisão autorais. |
| E26-Q-TRC-06 | I, a.5 | X e XI | Recorte de virtualização e serviços; premissas e decisão autorais. |
| E26-Q-TRC-07 | II, b.2 | XIII | Recorte de segurança aplicada a redes; premissas e decisão autorais. |
| E26-Q-TRC-08 | II, b.4 | XII e XVI | Recorte de automação e gerenciamento de rede; premissas e decisão autorais. |
| E26-Q-TRC-09 | II, b.1/b.2/b.6 | XIII, XIV e XIX | Recorte de projeto lógico/físico e sustentabilidade; premissas e decisão autorais. |
| E26-Q-TRC-10 | I, a.5; II, b.1/b.6 | X e XVI | Recorte de disponibilidade, tolerância a falhas e qualidade de serviço; premissas e decisão autorais. |
| E26-P-TRC-01 | II, b.1/b.2/b.4 | XIII, XV e XVI | Mudança de rede com continuidade e verificação; ordem criada para o caso. |

As competências propostas em texto recortam o objetivo do slot, sem afirmar cobertura integral ou criar um código oficial. Todas as fichas têm F10 como fonte principal; nenhuma questão ou puzzle usa a matriz específica de outro curso.

### Fontes técnicas primárias complementares

| ID / fonte | Localizador e leitura dirigida | Uso | Limites |
|---|---|---|---|
| T1 — RFC Editor, RFC 1034, Domain Names — Concepts and Facilities, P. Mockapetris, novembro de 1987 | [Documento oficial](https://www.rfc-editor.org/rfc/rfc1034), introdução e seção 3.6 sobre registros, incluindo tipo A | Q01: associação de nome e endereço | Referência fundacional com atualizações listadas na página; não presume configuração atual, DNS seguro ou disponibilidade do serviço. Não se declara leitura integral ou teste de implementação. |
| T2 — RFC Editor, RFC 1812, Requirements for IP Version 4 Routers, F. Baker, junho de 1995 | [Documento oficial](https://www.rfc-editor.org/rfc/rfc1812), encaminhamento/próximo salto e discussão de longest match, seção 5.2.4.3 e apêndice E.2 | Q04: correspondência de prefixo mais longo | A regra simplificada e as rotas do caso são explícitas; não se importam todas as exceções de política/OSPF, atualizações ou comandos de fabricante. |
| T3 — NIST SP 800-125, Guide to Security for Full Virtualization Technologies, janeiro de 2011 | [Página oficial CSRC](https://csrc.nist.gov/pubs/sp/800/125/final), identificação e resumo recuperados | Q06: escopo de virtualização e distinção de infraestrutura virtual/física | Página/resumo consultados, não leitura integral do guia/PDF. Compatibilidade, migração em trinta segundos e topologia são premissas de ensaio fictício, não números atribuídos ao NIST. |
| T4 — NIST SP 800-41 Rev. 1, Guidelines on Firewalls and Firewall Policy, setembro de 2009 | [Página oficial CSRC](https://csrc.nist.gov/pubs/sp/800/41/r1/final), identificação, resumo e escopo de políticas | Q07: controle de fluxo entre redes e delimitação de política | Página/resumo, não guia integral. O comportamento de estado é fornecido no caso; não se afirma ter conferido configuração concreta ou toda a segurança da aplicação. Não é obrigação brasileira. |
| T5 — RFC Editor, RFC 2863, The Interfaces Group MIB, K. McCloghrie e F. Kastenholz, junho de 2000 | [Documento oficial](https://www.rfc-editor.org/rfc/rfc2863), seção 6, descrições de ifHCInOctets e ifCounterDiscontinuityTime | Q08: descontinuidade de acumulador e cuidado com diferenças | Contador e tempos são dados didáticos; reinício é confirmado no cenário. Não se diagnostica toda queda de contador como reinício nem se cobre todo tipo de estouro/agente/interface. |
| T6 — RFC Editor, RFC 4594, Configuration Guidelines for DiffServ Service Classes, J. Babiarz, K. Chan e F. Baker, agosto de 2006 | [Documento oficial](https://www.rfc-editor.org/rfc/rfc4594), seção 4.1, Telephony Service Class | Q10: classe sensível a atraso e capacidade/admissão | Documento informativo; não torna a marcação de tráfego garantia de latência. Taxas, filas e medidas são do ensaio fictício. Não se declara leitura integral ou configuração real de DiffServ. |
| T7 — RFC Editor, RFC 6241, Network Configuration Protocol, R. Enns e demais editores, junho de 2011 | [Documento oficial](https://www.rfc-editor.org/rfc/rfc6241), seção 8.4, Confirmed Commit Capability, e vínculo com candidata | Puzzle: inspiração para estado provisório, confirmação e possibilidade de retorno | Não é uma transcrição do protocolo: capacidades, sessões, persistência e temporizadores reais não são implementados. O simulador documental não tem cronômetro de jogador. Leitura dirigida, não conformidade integral. |

Os RFCs são fontes técnicas primárias, com status/atualizações próprios; não são matrizes curriculares nem portarias. As páginas oficiais NIST foram lidas no alcance explicitado, sem extrapolar resumo como leitura integral.

Para Q02/Q05/Q09, requisitos e características são integralmente fornecidos pelo cenário. **Não foi consultado o texto integral de normas IEEE de cabeamento, marcação ou rádio** nesta autoria; não se alega certificação normativa ou limite universal com base em números fictícios. Revisão docente deverá conferir normas/edições pertinentes caso o recorte passe a exigir tal referência.

### Camadas de rastreabilidade

Plano e padrão determinam slots e formato; F10 delimita a origem normativa de TRC; fontes técnicas corroboram conceitos no alcance lido; autoria constrói problemas e soluções; revisão docente decide adequação e eventual alteração. Uma validação de schema não substitui nenhuma dessas camadas.

Título, objetivo, área codificada, complemento, originalidade, revisão e parecer permanecem documentação. Nenhuma dessas notas é adicionada como propriedade fora do contrato. A fonte principal estrita de todos os itens continua F10, enquanto os complementos ficam nesta seção e nas fichas.

## 15. Auditoria cruzada, originalidade interna e acessibilidade

### Comparação por situação, raciocínio e estrutura

| Lote ou acervo | Núcleos anteriores comparados | Distinção de TRC e risco residual |
|---|---|---|
| Comum 01 | Participação sem inferência causal; finalidade de dados; clareza; barreiras de acesso; exposição/cobertura de sombra; recuperação de cópia com integridade | TRC usa nomes/protocolos, caminhos físicos/lógicos e estados de rede. Seu puzzle muda gestão preservando telemetria e testa bloqueio esperado, em vez de restaurar conteúdo. Cautela sobre generalização é transversal, não reaproveitamento do problema de participação. |
| Comum 02 | Troca científica de versões de sensor; diagnóstico de aplicação após requisição recebida; memória por processo; drenagem com restrições; credenciais individuais | Q03 tem serviço parado por falta de habilitação de inicialização; Q04 exige maior especificidade de rota; Q07 trata retorno de conexão com estado. Não são variações do pedido já recebido ou da conta compartilhada. |
| CC | Rastreamento de acumulador; circuito; semântica; grafo; LRU; regra/classificador; filtro de imagem; probabilidade de réplicas; linguagem formal; concorrência; compilação | Não há esses programas ou dados. Q06 distingue localização física, estado e rede da VM, não probabilidade; Q10 dimensiona classes após perda de enlace, sem eventos independentes de falha. Q04 é seleção por prefixo, não grafo de linhagem. |
| SI | Componente por granularidade; consulta; espera por aprovação; confirmação física; associação de dados; dono do indicador; gráfico; ensaio offline; otimização inteira; arquitetura com versão atual; conciliação de valor | Q08 usa referência de contador de interface, não semântica de indicador de negócio. Q09 analisa gargalo por caminho e interoperabilidade; não maximiza lotes de produção. O puzzle não concilia registros monetários. |
| TADS | Código textual; polimorfismo; verificação/validação; remoção adjacente; CHECK/nulos; configuração de escala; módulos; liberação em horas; testes de segurança; formatos de versão; legendas/páginas | Não há programação, SQL, HTML ou exportação de formato. O puzzle também usa mudança/verificação, mas os artefatos e critérios são gestão nova, telemetria e teste de bloqueio, com candidata e aplicação provisória. |
| TGTI | Racionalização de ferramentas; união temporal; habilitações independentes; política de chamados; exceção de governança; custo em horizonte comum; cronograma; recorrência; portfólio; contingência; coorte de acompanhamento | Q08 distingue descontinuidade de contador de zero, não coorte ou soma de períodos. Q09 dimensiona caminhos e compatibilidade, não iniciativa dependente. Q10 integra falha de enlace, banda e latência de classe, não recuperação/perda/esforço de equipe. |
| Catálogo provisório executável | Proporção, finalidade, energia, agenda, comparação de protótipos, acessibilidade, cabo, armazenamento e exemplos por curso; sequências de média, incidentes e configuração básica de rede | Q02 não diagnostica cabo solto; Q03 não é apenas ligar roteador. O puzzle tem revisão, candidata provisória, observação de três critérios e confirmação condicional, ausentes da configuração genérica atual. |

Ações como comparar propostas, observar evidências e ordenar dependências são formatos recorrentes. O cotejo não se limita a nome/número trocado: compara o que precisa ser inferido e quais erros os distratores representam. Não há alegação de que todos os conceitos tecnológicos sejam exclusivos de um curso.

### Unicidade das respostas no modelo declarado

| Item | Resposta | Condição decisiva e rejeição das demais |
|---|---|---|
| Q01 | D | Consulta nome → endereço, não concessão, enlace, cifragem ou rota. |
| Q02 | A | Óptico atende distância/ambiente/ausência de ativo intermediário; demais violam ao menos uma condição. |
| Q03 | E | Habilitar, iniciar e verificar trata a condição de supervisor; trocar IP, permissão, rota ou porta não a corrige. |
| Q04 | C | Rota /25 correta para S; métrica /24 e rota padrão não superam especificidade. |
| Q05 | B | Cobertura por sala, canais compatíveis livres e retorno cabeado; repetidor não recebe sinal útil pela parede. |
| Q06 | A | Memória, ligação virtual, estado e identidade atendidos em trinta segundos; outros perdem pelo menos uma condição. |
| Q07 | D | Iniciação autorizada e retorno com estado; não novas conexões inversas ou ampliação de origem/porta. |
| Q08 | D | Não calcular sobre descontinuidade; nova referência permite dez bytes/s no segundo intervalo. |
| Q09 | E | 120 Mb/s por retorno e 240 no centro, interoperabilidade, isolamento, reutilização e 40 W. |
| Q10 | C | Reserva 4+6 e limita 2 no enlace de 12; política ensaiada atende atraso, sem somar enlace perdido. |

O puzzle tem uma ordem completa sob suas entradas/saídas. O último bloco admite confirmar ou restaurar conforme os três critérios, mas a ordem de recebimento dos artefatos não muda. Tentativas alternativas e rejeição das opções estão documentadas por item; docente ainda deverá resolver sem solução visível.

### Acessibilidade editorial e limitações

- Dados essenciais em texto com unidades, cabeçalhos e topologia linear. Não se exige seguir uma linha desenhada, distinguir cor, ouvir áudio ou executar gesto.
- Prefixos e intervalos de endereço são explicados em Q04; redes, origens, portas e estado são descritos em Q07; bytes/tempo do coletor são separados em Q08.
- Tabelas de capacidade/consumo e demanda têm dimensões explicitadas. Em apresentação futura devem ter equivalente em lista por projeto ou registro, preservando todas as premissas.
- Durações e janelas dos casos não são tempo para responder. Não há cronômetro, penalização por lentidão ou atalho baseado em velocidade.
- Puzzle prevê botões nomeados, teclado, foco preservado, posição anunciada e arraste opcional, com leitura linear da topologia e dos critérios.
- Linguagem respeitosa, sem estereótipo de curso, origem ou deficiência; papéis são declarados pelo cenário.

Conferência editorial não homologa interface. Testes reais de leitor de tela, ampliação, celular, teclado e toque dependerão de integração autorizada. Carga de leitura e nível de dificuldade ainda devem ser avaliados com estudantes.

### Checklist consolidado

- [x] Onze IDs exclusivos de TRC, correspondentes ao plano e sem duplicação nos lotes.
- [x] F10/Portaria 172 principal; XI virtualização e XIII segurança conferidos.
- [x] Dez questões com cinquenta alternativas e cinquenta feedbacks.
- [x] Gabaritos D/A/E/C/B/A/D/D/E/C e uma resposta fundamentada por questão.
- [x] Cotas específicas 3/5/2 e vinte elegíveis 7/9/4; puzzle intermediate separado.
- [x] Cálculos, fronteiras, estados e limites dos cenários explicitados.
- [x] Puzzle com cinco blocos, ordem única, três dicas e destino condicionado aos testes.
- [x] Comparação com todos os lotes anteriores e exemplos atuais registrada.
- [x] Todos os status provisórios; textos ao jogador sem referência à avaliação externa.
- [ ] Resolução independente, PPC, dificuldade empírica e comparação externa de similaridade.
- [ ] Fonte certificada/retificações, responsabilidade humana e acessibilidade efetiva.

## 16. Pendências e formulários de revisão docente

Onze registros individuais de TRC, sem parecer preenchido. Pendências: PPC/oferta, momento formativo, fonte original e retificações, leitura técnica complementar, resolução independente, dificuldade, originalidade externa, ajuda cumulativa, carga de leitura e testes com estudantes/tecnologia assistiva; responsável humano pela consolidação e aprovação institucional do nome.

Preencher por ID/versão: docente/data; PPC/versão; fontes/localizadores conferidos; resolução sem gabarito; alternativas ou ordens defensáveis; evidências de originalidade e acessibilidade; decisão fundamentada. Recomendar revisão, aprovação ou rejeição não altera automaticamente validationStatus ou disponibilidade da coleção.

### E26-Q-TRC-01 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I, localizadores próprios e objetivo do slot.
- [ ] Conferir função do registro A e limite entre resolução e conexão. Avaliar o nível introdutório sem depender de porta de serviço memorizada.
- [ ] Resolver sem gabarito; confirmar D como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-02 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I, localizadores próprios e objetivo do slot.
- [ ] Conferir percurso de 220 metros, limite de 300 e exclusão de ativo intermediário. Não apresentar os números de cobre/coaxial como padrão universal.
- [ ] Resolver sem gabarito; confirmar A como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-03 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I, localizadores próprios e objetivo do slot.
- [ ] Distinguir habilitado, iniciado e respondendo; conferir que a recomendação não afrouxa permissões nem pressupõe sintaxe de sistema operacional.
- [ ] Resolver sem gabarito; confirmar E como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-04 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I, localizadores próprios e objetivo do slot.
- [ ] Recalcular faixas /24 e /25, verificar enlaces /30 e retorno, simular .127/.128/.150 e confirmar que a troca de métrica não corrige o erro.
- [ ] Resolver sem gabarito; confirmar C como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-05 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I, localizadores próprios e objetivo do slot.
- [ ] Conferir efeito da parede, dependência do repetidor, 80 ≤ 100 e separação declarada dos canais. Registrar que ensaio local não certifica todo ambiente sem fio.
- [ ] Resolver sem gabarito; confirmar B como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-06 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I, localizadores próprios e objetivo do slot.
- [ ] Conferir 6 ≤ 8, 30 ≤ 60, quinze minutos = 900 segundos e necessidade da ligação de rede. Usar art. 6º XI para virtualização, nunca XIII.
- [ ] Resolver sem gabarito; confirmar A como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-07 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-II, localizadores próprios e objetivo do slot.
- [ ] Testar novas conexões e respostas separadamente, incluindo tentativa inversa nova e gestão TCP 22. Confirmar art. 6º XIII para segurança da informação.
- [ ] Resolver sem gabarito; confirmar D como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-08 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-II, localizadores próprios e objetivo do slot.
- [ ] Recalcular (700 − 100)/60 e distinguir taxa indisponível de zero. Conferir histórico, alerta de reinício e limites de autorização; discutir variantes com descontinuidade sem reinício em revisão posterior.
- [ ] Resolver sem gabarito; confirmar D como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-09 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-II, localizadores próprios e objetivo do slot.
- [ ] Conferir 2 × 60 = 120 por sala, 240 no centro, conversão Gb/s/Mb/s, marcação e isolamento. Avaliar integração avançada sem reduzir sustentabilidade a consumo ou novidade.
- [ ] Resolver sem gabarito; confirmar E como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-Q-TRC-10 — versão 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / alternativas defensáveis | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10/Portaria 172, TRC-I e TRC-II, localizadores próprios e objetivo do slot.
- [ ] Recalcular 4 + 6 + 8 = 18 e 4 + 6 + 2 = 12, avaliar 25 ≤ 30 e 65 > 30, e discutir pontos únicos de falha excluídos do modelo.
- [ ] Resolver sem gabarito; confirmar C como única resposta e conferir feedbacks A–E.
- [ ] Registrar fontes/acervos comparados, risco estrutural, clareza e acessibilidade.
- **Síntese / ajustes propostos:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

### E26-P-TRC-01 — versão editorial documental 1

| Curso | Docente / data | PPC / versão e evidências | Resolução independente / ordem alternativa | Parecer fundamentado / ajustes |
|---|---|---|---|---|
| TRC | A preencher | A preencher | A preencher | A preencher |

- [ ] Conferir F10, TRC-II, área TRC-04 e dificuldade intermediate.
- [ ] Tentar outra ordem e justificar entradas/saídas de referência, candidata, recibo e relatório.
- [ ] Conferir rede 20 permitida no retorno e gestão nova, preservação da telemetria 30 e manutenção temporária da rede 10.
- [ ] Interpretar bloqueio de visitantes como resultado esperado, sem promover autorização de aplicação a prova de continuidade.
- [ ] Conferir todos os critérios para confirmação e qualquer desvio para restauração/verificação.
- [ ] Avaliar as três dicas isoladas/cumulativamente e a distinção entre conceito e memorização.
- [ ] Homologar teclado, botões, foco, leitura linear e tela pequena em etapa de integração.
- [ ] Conferir 100 XP único, base-n9/door somente propostos e nenhum cronômetro ou operação real.
- **Síntese / ordem alternativa / ajustes:** a preencher.
- **Consolidação / responsável / data / decisão posterior:** a preencher.

## 17. Verificações e preservação do escopo

Resultados desta execução:

- **Auditoria documental aprovada:** dez questões e um puzzle nos onze slots autorizados de TRC. Os sete lotes redigidos cobrem **66 IDs únicos, exatamente os 66 IDs do plano**: sessenta questões e seis sequências. Isso não os promove a aprovados nem os integra ao jogo.
- Área, síntese, curso, conteúdo, objetivo e dificuldade confrontados com cada slot. Courses somente TRC; F10/Portaria Inep 172/2026 como principal dos onze itens.
- **Localizadores conferidos:** art. 6º XI para virtualização em Q06; XIII para segurança em Q07 e nos demais recortes de proteção de Q09/puzzle. Nenhuma matriz específica de outro curso aparece como principal nas fichas.
- Cinquenta alternativas e cinquenta feedbacks, uma resposta indicada por questão, mapa **D/A/E/C/B/A/D/D/E/C**, distribuição A2/B1/C2/D3/E2. Onze formulários sem parecer; todos os validationStatus permanecem provisional-pending-teacher-review.
- Cotas conferidas: específicas **3/5/2**, comuns **4/4/2**, vinte elegíveis **7/9/4**. Puzzle intermediate separado da cota.
- Projeções extraídas do Markdown e validadas **somente em memória** por Ajv e schemas atuais question/editorial/puzzles: dez Question e um SequencePuzzle aceitos, fonte estrita e coleção existente. Alternativas, permutação, blocos únicos, três dicas e referência base-n9/door conferidos; nenhum JSON gravado.
- Q01/Q02/Q03: função do registro A, matriz de meio/alcance e comportamento da habilitação de serviço conferidos. Capacidades e estados são premissas do modelo fechado, sem acesso a rede real.
- Q04: seleção por maior prefixo e depois métrica simulada nas cinco propostas. Somente C preserva .40 e corrige .150; **256 destinos do /24** e fronteira /25 conferidos. Enlaces /30 dos vizinhos também conferidos.
- Q05/Q06: cobertura, retorno de 80 metros, canais declarados, memória 6 ≤ 8, pausa 30 ≤ 60, quinze minutos = 900 segundos, rede virtual e identidade única conferidos.
- Q07: **sete sondas lógicas** de iniciação/resposta, origem, destino e porta comparadas às cinco políticas. Somente D satisfaz os resultados esperados. Nenhum firewall real foi configurado ou certificado.
- Q08: diferença sobre reinício produz medida indisponível, não zero. Segundo intervalo: (700 − 100)/60 = **10 bytes/s**; erros 100/60 e módulo de −8900/60 recalculados. Histórico e autorização somente de leitura preservados.
- Q09: demandas **120 Mb/s por sala e 240 Mb/s no centro**, conversão para 1000 Mb/s, compatibilidade, isolamento, reutilização e 40 ≤ 45 W conferidos. A análise ambiental continua limitada aos critérios fornecidos.
- Q10: **4 + 6 + 8 = 18** e **4 + 6 + 2 = 12 Mb/s**; exigências de classe e atraso 25 ≤ 30 ms conferidos. Não se deduz latência só de taxa nem se soma a capacidade de enlace perdido.
- Puzzle: **120 permutações**, uma única ordem válida pelas quatro dependências internas e pelo fluxo de artefatos. Pré-condição externa autorizada explicitada. Candidata de referência obsoleta rejeitada no modelo.
- **Oito combinações** dos três critérios do puzzle examinadas: somente gestão acessível, telemetria entregue e visitantes bloqueados permite confirmar; as outras sete exigem restaurar e verificar recuperação. Sucesso não força rollback. Redes 10/20/30 e gestão 20 preservadas no sucesso; referência 10/30 e gestão 10 restauradas nas falhas.
- Triagem textual e cotejo editorial com comuns, CC, SI, TADS, TGTI e exemplos atuais: nenhuma duplicação interna identificada. Conceitos e formatos recorrentes são reconhecidos; originalidade externa e resolução independente seguem pendentes.
- Textos ao jogador, títulos, alternativas, explicações, feedbacks, narrativa, blocos e dicas sem o nome da avaliação externa. A origem pedagógica interna permanece nos metadados e nas referências.
- Acessibilidade editorial conferida por informação textual, unidades, topologia linear e controles previstos. Nenhuma apresentação nova foi implementada ou homologada no navegador, leitor de tela, teclado, toque ou celular.
- **npm.cmd run validate:content: 113 testes aprovados em quatro arquivos**, cobrindo questões, puzzles, contratos editoriais e missões existentes.
- **SHA-256 dos oito documentos de referência preservados** desde a inspeção. Nenhum arquivo anteriormente versionado foi modificado; somente o novo Markdown integra a entrega.

Modelos e testes verificam estrutura e coerência das premissas fechadas, não aprovação docente, autenticidade do original certificado, vigência normativa, acessibilidade efetiva, funcionamento de uma nova implementação ou ineditismo global.

Somente docs/autoria/lote-especifico-trc.md integra esta entrega. Plano, padrão, backlog e lotes anteriores preservados. Nenhum código, schema, catálogo, teste permanente, interface, mapa, mecânica, recompensa existente ou progresso foi modificado; nenhum JSON foi gerado. Nenhuma publicação ou envio ao GitHub.
