# N9 — Jornada Digital: ampliação de TRC 03 — modelos, comutação e serviços

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-TRC-31` a `E26-Q-TRC-40` em dois blocos de cinco questões. Não gera JSON nem altera o jogo; todos os itens permanecem em `under-ai-review`.

## 1. Inventário

| ID | Objeto principal | Dificuldade | Gabarito | Recurso |
|---|---|---|---|---|
| TRC-31 | I — Componentes e topologias | introductory | D | Mapa de falhas em estrela |
| TRC-32 | II — Comunicação e transmissão | introductory | B | Linha do tempo duplex |
| TRC-33 | III — Modelos de referência | introductory | E | Pilha de encapsulamento |
| TRC-34 | III — Modelos de referência | intermediate | A | Quadro por salto |
| TRC-35 | V — Roteamento | intermediate | C | Duas filiais comparadas |
| TRC-36 | VI — IEEE 802.x | intermediate | B | Tabela MAC e quadro |
| TRC-37 | VI — IEEE 802.x | intermediate | D | Topologia redundante |
| TRC-38 | VIII — Cabeamento estruturado | introductory | A | Relatório de certificação |
| TRC-39 | X — Serviços de redes | introductory | E | Painel de configuração automática |
| TRC-40 | XV — Configuração de dispositivos | intermediate | C | Cartões IPv4 |

Distribuição: cinco `introductory`, cinco `intermediate`, nenhuma `advanced`; gabaritos D/B/E/A/C/B/D/A/E/C.

## 2. Fontes e limites

- **F10 — `primary`:** Portaria Inep 172/2026, art. 6º, I, II, III, V, VI, VIII, X e XV.
- **T2 — `technical`:** RFC 1812, requisitos para roteadores IPv4.
- **T69/T71 — `technical`:** ITU-T X.200 e RFC 1122, separação em camadas e comunicação de hosts.
- **T70/T76 — `technical`:** família IEEE 802 e princípios de bridging/STP. O comportamento necessário é declarado nos itens.
- **T73 — `technical`:** família ANSI/TIA-568; TRC-38 usa relatório fictício e não declara certificação normativa real.
- **T75 — `technical`:** RFC 2131, Dynamic Host Configuration Protocol.

URLs: `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf`, `https://www.rfc-editor.org/rfc/rfc1812`, `https://www.itu.int/rec/T-REC-X.200`, `https://www.rfc-editor.org/rfc/rfc1122`, `https://www.ieee802.org/`, `https://1.ieee802.org/bridges/`, `https://www.tiaonline.org/standards/` e `https://www.rfc-editor.org/rfc/rfc2131`.

Casos, endereços e medições são fictícios. Não se exige sintaxe de fabricante.

## 3. Bloco A — fundamentos e modelos

### E26-Q-TRC-31 — A falha no centro da estrela

**Ficha:** `courses: [TRC]`; área “Fundamentos, componentes e topologias”; `introductory`; `validationStatus: under-ai-review`.

```text
PC-A ─┐
PC-B ─┼─ Switch S
PC-C ─┘
```

Todos os enlaces estão íntegros antes do incidente. O switch S para completamente.

**Enunciado.** Qual efeito decorre diretamente da topologia apresentada?

- **A.** Somente PC-A perde comunicação, independentemente do switch.
- **B.** Os computadores passam a comunicar diretamente pelo ar.
- **C.** A falha cria automaticamente um enlace reserva invisível.
- **D.** Os três computadores perdem a comunicação mediada por S, pois ele é o ponto central.
- **E.** A topologia transforma-se em anel sem mudança física.

**Gabarito: D.** Na estrela apresentada, todos dependem do equipamento central. A falha de S afeta os três enlaces lógicos mediados por ele.

| Alternativa | Feedback |
|---|---|
| A | A falha é do componente central, não do enlace de A. |
| B | Nenhuma interface sem fio foi declarada. |
| C | Não existe caminho reserva no diagrama. |
| D | Correta: S é o ponto comum dos três caminhos. |
| E | Topologia física não muda automaticamente. |

### E26-Q-TRC-32 — Enviar e receber ao mesmo tempo

**Ficha:** `courses: [TRC]`; área “Comunicação e transmissão de dados”; `introductory`; `validationStatus: under-ai-review`.

Um enlace permite que A transmita para B enquanto B transmite para A no mesmo intervalo, usando caminhos independentes. No modelo fornecido, isso não exige alternância de direção.

**Enunciado.** Qual modo descreve o enlace?

- **A.** Simplex, pois somente uma direção existe.
- **B.** Full-duplex, pois as duas direções operam simultaneamente.
- **C.** Half-duplex, pois os lados obrigatoriamente se alternam.
- **D.** Broadcast, porque todo quadro chega a qualquer rede.
- **E.** Multicast, porque há exatamente dois participantes.

**Gabarito: B.** Full-duplex permite transmissão simultânea nos dois sentidos nas condições declaradas.

| Alternativa | Feedback |
|---|---|
| A | Simplex possui somente uma direção. |
| B | Correta: ambas as direções estão ativas simultaneamente. |
| C | Half-duplex exige alternância. |
| D | Broadcast descreve destinatários, não direção simultânea. |
| E | Dois participantes não definem multicast. |

### E26-Q-TRC-33 — Cada camada acrescenta sua informação

**Ficha:** `courses: [TRC]`; área “Modelos de referência”; `introductory`; `validationStatus: under-ai-review`.

Considere a simplificação: aplicação produz dados; transporte cria segmento; rede cria pacote; enlace cria quadro.

**Enunciado.** Qual ordem representa a encapsulação do envio?

- **A.** quadro → pacote → segmento → dados.
- **B.** pacote → quadro → dados → segmento.
- **C.** segmento → dados → quadro → pacote.
- **D.** dados → quadro → segmento → pacote.
- **E.** dados → segmento → pacote → quadro.

**Gabarito: E.** Cada camada inferior envolve a unidade recebida da camada superior, resultando em dados, segmento, pacote e quadro.

| Alternativa | Feedback |
|---|---|
| A | Representa a ordem inversa, próxima da desencapsulação. |
| B | Coloca enlace antes do conteúdo da aplicação. |
| C | Segmento depende dos dados que transporta. |
| D | Quadro é formado depois do pacote. |
| E | Correta: aplicação, transporte, rede e enlace. |

### E26-Q-TRC-34 — O quadro muda a cada salto

**Ficha:** `courses: [TRC]`; área “Modelos de referência”; `intermediate`; `validationStatus: under-ai-review`.

Host A envia um pacote IP ao host B por meio de um roteador. Ignore NAT e considere que o pacote não expirou. Em cada enlace, há um quadro próprio.

**Enunciado.** Qual descrição é correta?

- **A.** O roteador remove o quadro recebido, examina o pacote IP e cria outro quadro para o próximo enlace.
- **B.** O mesmo quadro Ethernet atravessa todos os enlaces sem alteração.
- **C.** O roteador remove o endereço IP de destino e encaminha apenas dados da aplicação.
- **D.** O pacote IP é substituído por DNS em cada salto.
- **E.** Endereços de enlace são universais e nunca dependem do próximo salto.

**Gabarito: A.** O quadro atende ao enlace local. O roteador processa o pacote e o encapsula em novo quadro apropriado ao enlace seguinte.

| Alternativa | Feedback |
|---|---|
| A | Correta: distingue unidade de enlace e pacote roteado. |
| B | Cabeçalhos de enlace atendem a cada salto. |
| C | O destino IP continua necessário ao roteamento. |
| D | DNS não substitui o pacote em trânsito. |
| E | O próximo salto influencia os endereços de enlace. |

### E26-Q-TRC-35 — Uma saída ou vários caminhos que mudam

**Ficha:** `courses: [TRC]`; área “Algoritmos e protocolos de roteamento”; `intermediate`; `validationStatus: under-ai-review`.

Filial P possui um único enlace para a matriz e sempre usa esse caminho. O campus Q possui quatro roteadores e enlaces redundantes cujos custos e estados mudam; deseja recalcular caminhos automaticamente.

**Enunciado.** Qual estratégia é mais coerente?

- **A.** Protocolo dinâmico complexo em P e nenhuma rota em Q.
- **B.** Somente rota estática em todos os roteadores de Q, sem processo de atualização.
- **C.** Rota padrão estática em P e protocolo de roteamento dinâmico adequado entre os roteadores de Q.
- **D.** Remover a redundância de Q para evitar decisões de rota.
- **E.** Usar DNS como substituto da tabela de roteamento.

**Gabarito: C.** P tem uma única saída estável; Q precisa trocar informação e recalcular caminhos diante de mudanças.

| Alternativa | Feedback |
|---|---|
| A | Inverte as necessidades dos dois ambientes. |
| B | Não atende ao recálculo automático exigido. |
| C | Correta: alinha estratégia à topologia e à mudança. |
| D | Elimina um requisito do campus. |
| E | DNS não substitui o encaminhamento IP. |

## 4. Bloco B — comutação, cabeamento e serviços

### E26-Q-TRC-36 — O switch ainda não conhece o destino

**Ficha:** `courses: [TRC]`; área “Padrões IEEE 802.x”; `intermediate`; `validationStatus: under-ai-review`.

Um switch recebe na porta 1 um quadro com origem `AA` e destino unicast `BB`. Sua tabela MAC está vazia. No modelo do exercício, ele aprende a origem e inunda destino unicast desconhecido pelas demais portas da mesma VLAN.

**Enunciado.** Qual ação ocorre?

- **A.** Aprende BB na porta 1 e descarta o quadro.
- **B.** Aprende AA na porta 1 e envia o quadro pelas demais portas da VLAN, exceto a de entrada.
- **C.** Aprende AA em todas as portas e envia somente à porta 1.
- **D.** Encaminha o quadro para todas as VLANs existentes.
- **E.** Converte o quadro em rota IP antes de consultar a tabela MAC.

**Gabarito: B.** O endereço de origem permite aprender onde AA está. Como BB ainda é desconhecido, o quadro é inundado apenas no domínio indicado.

| Alternativa | Feedback |
|---|---|
| A | O switch aprende a origem, não o destino desconhecido. |
| B | Correta: aprende AA e trata BB como unicast desconhecido. |
| C | Uma origem observada pertence à porta de entrada. |
| D | A inundação permanece na VLAN. |
| E | Comutação de quadros não exige criar rota IP. |

### E26-Q-TRC-37 — Redundância sem tempestade de quadros

**Ficha:** `courses: [TRC]`; área “Padrões IEEE 802.x”; `intermediate`; `validationStatus: under-ai-review`.

Três switches formam um triângulo de enlaces de camada 2. Sem controle, quadros broadcast podem circular e ser replicados. O requisito mantém redundância física, mas exige topologia lógica sem laço, liberando caminho alternativo após falha.

**Enunciado.** Qual mecanismo atende ao requisito?

- **A.** Desativar permanentemente dois switches.
- **B.** Aumentar o TTL do IP, embora o laço seja de quadros.
- **C.** Configurar todos os enlaces como portas de acesso da mesma estação.
- **D.** Utilizar protocolo de árvore de abrangência para bloquear logicamente um caminho redundante e recalcular após falha.
- **E.** Remover endereços MAC dos quadros.

**Gabarito: D.** A árvore de abrangência mantém caminho físico alternativo enquanto evita o laço lógico ativo.

| Alternativa | Feedback |
|---|---|
| A | Elimina disponibilidade e capacidade desnecessariamente. |
| B | TTL IP não controla repetição de quadros em camada 2. |
| C | Não resolve o ciclo entre switches. |
| D | Correta: preserva redundância com topologia lógica sem laço. |
| E | Quadros Ethernet dependem desses endereços. |

### E26-Q-TRC-38 — O mapa de fios revelou a troca

**Ficha:** `courses: [TRC]`; área “Cabeamento estruturado”; `introductory`; `validationStatus: under-ai-review`.

Um relatório de teste mostra comprimento dentro do limite, mas o mapa de fios indica que os condutores associados aos pinos 3 e 6 foram trocados em uma terminação. A política exige correspondência correta entre as duas pontas.

**Enunciado.** Qual ação é apropriada?

- **A.** Refazer a terminação conforme o esquema adotado e repetir o teste.
- **B.** Aumentar a potência do switch para compensar a troca física.
- **C.** Alterar o endereço IP do computador.
- **D.** Aprovar o enlace porque o comprimento está correto.
- **E.** Desativar a verificação do mapa de fios.

**Gabarito: A.** O relatório identifica falha de terminação. Corrigir a correspondência e testar novamente trata a evidência diretamente.

| Alternativa | Feedback |
|---|---|
| A | Correta: corrige a terminação e confirma o resultado. |
| B | Potência não reorganiza condutores. |
| C | Endereço lógico não corrige pinagem. |
| D | Comprimento adequado não elimina outro defeito. |
| E | Ocultar o teste não corrige o enlace. |

### E26-Q-TRC-39 — Sem concessão, sem configuração automática

**Ficha:** `courses: [TRC]`; área “Serviços de redes”; `introductory`; `validationStatus: under-ai-review`.

Um notebook deveria receber automaticamente endereço, máscara, gateway e DNS. A captura mostra solicitações de configuração, mas nenhuma oferta chega. Outros equipamentos com configuração manual acessam a rede.

**Enunciado.** Qual serviço deve ser investigado primeiro?

- **A.** HTTP, porque entrega páginas.
- **B.** NTP, porque ajusta relógios.
- **C.** SMTP, porque envia mensagens.
- **D.** DNS apenas, porque traduz nomes, mas não concede endereço.
- **E.** DHCP e o caminho entre cliente e servidor/relay.

**Gabarito: E.** DHCP fornece os parâmetros automáticos citados. A ausência de oferta direciona a investigação ao serviço e ao caminho das mensagens.

| Alternativa | Feedback |
|---|---|
| A | HTTP não concede configuração IP. |
| B | NTP trata sincronização de tempo. |
| C | SMTP trata correio eletrônico. |
| D | DNS não fornece todos os parâmetros solicitados. |
| E | Correta: corresponde à função e à evidência da captura. |

### E26-Q-TRC-40 — Endereço, máscara e gateway coerentes

**Ficha:** `courses: [TRC]`; área “Configuração de dispositivos”; `intermediate`; `validationStatus: under-ai-review`.

Uma LAN usa `192.168.10.0/24`. O roteador da LAN é `192.168.10.1`. O endereço `192.168.10.20` já pertence a outro host. O novo equipamento deve usar configuração estática única e alcançar outras redes.

**Enunciado.** Qual conjunto é coerente?

- **A.** IP `192.168.20.50/24`, gateway `192.168.10.1`.
- **B.** IP `192.168.10.20/24`, gateway `192.168.10.1`.
- **C.** IP `192.168.10.50/24`, gateway `192.168.10.1`.
- **D.** IP `192.168.10.50/32`, sem gateway, para acessar outras redes.
- **E.** IP `192.168.10.1/24`, gateway `192.168.10.1`.

**Gabarito: C.** O endereço está na LAN, não está declarado como ocupado e utiliza o roteador local como gateway.

| Alternativa | Feedback |
|---|---|
| A | O host fica em outra rede /24. |
| B | Duplica o endereço já ocupado. |
| C | Correta: endereço único, prefixo e gateway coerentes. |
| D | /32 e ausência de gateway não atendem ao acesso solicitado. |
| E | Duplica o endereço do roteador. |

## 5. Segunda passagem e auditoria rápida

- Dez IDs novos e distintos: `E26-Q-TRC-31` a `E26-Q-TRC-40`.
- Cada questão possui cinco alternativas, um gabarito e cinco feedbacks.
- TRC-31 complementa componentes/topologia; TRC-32 trabalha duplex; TRC-33/34 distinguem encapsulamento e comportamento por salto; TRC-35 contrasta rota estática/dinâmica; TRC-36/37 cobrem aprendizagem e prevenção de laço; TRC-38 trata certificação; TRC-39, DHCP; TRC-40, configuração IPv4.
- Nenhuma resposta depende exclusivamente de cor, imagem, som ou posição.
- Permanecem `under-ai-review`; revisão externa, calibração e homologação humana de acessibilidade continuam pendentes.

Próxima etapa recomendada: criar o lote final de TRC com sete questões concentradas em WAN, tecnologias emergentes e sustentabilidade, acrescentando somente os complementos ainda necessários após uma contagem rápida.
