# Prompt para o Gemini — atividades rápidas TRC, lote 02

Produza somente o segundo lote de 20 atividades rápidas específicas de Tecnologia em Redes de Computadores para o N9 Jornada Digital.

## Referências obrigatórias

Leia integralmente os arquivos enviados:

- `learning-activities.schema.json`;
- `editorial.schema.json`;
- `LearningActivityCatalog.ts`;
- `validateLearningActivities.ts`;
- `n9-trc-01.json`, apenas para evitar repetição e seguir a estrutura;
- `matriz-trc-lote-02.md`.

## Entregáveis

Gere exatamente:

1. `n9-trc-02.json`;
2. `relatorio-n9-trc-02.md`.

Não gere código de integração, novos schemas, scripts ou arquivos adicionais.

## Identificação

- `schemaVersion`: `1`;
- `batchId`: `N9-TRC-02`;
- exatamente 20 atividades;
- IDs contínuos e únicos de `N9-TRC-021` a `N9-TRC-040`;
- `courses`: somente `["TRC"]`;
- `validationStatus`: `under-ai-review`;
- exatamente uma fonte `primary` por atividade;
- não invente campos além dos schemas;
- não altere nem repita os IDs `N9-TRC-001` a `N9-TRC-020`.

## Cotas obrigatórias

Não produza `single-choice`.

| Mecânica | Quantidade |
|---|---:|
| `binary-choice` | 2 |
| `multiple-select` | 2 |
| `sequence-order` | 3 |
| `pair-match` | 1 |
| `categorize` | 3 |
| `fill-slot` | 1 |
| `visual-hotspot` | 4 |
| `decision-dialogue` | 4 |
| **Total** | **20** |

Dificuldades:

- 8 `introductory`;
- 10 `intermediate`;
- 2 `advanced`.

Áreas:

- cinco atividades TRC-01 — modelos, TCP/IP, IPv4/IPv6, protocolos, switching e roteamento;
- cinco atividades TRC-02 — transmissão, cabeamento, fibra, Wi-Fi, topologias e infraestrutura física;
- cinco atividades TRC-03 — sistemas operacionais, serviços, virtualização, disponibilidade, desempenho, continuidade e QoS;
- cinco atividades TRC-04 — projeto, configuração, automação, monitoramento, segurança, sustentabilidade e gerenciamento.

## Conteúdos prioritários deste lote

Evite repetir os focos centrais do lote 01: PDU/encapsulamento básico, capacidade de /26, trunk bloqueando VLAN 20, ARP para gateway, loop RSTP, subsistemas de cabeamento, fibra entre prédios, topologias estrela/anel/malha, canais Wi-Fi 1/6/11, Wi-Fi de alta densidade, DORA, A/CNAME, modos bridged/NAT/isolado, SPOF de banco, RPO/RTO, regra SSH, fluxo genérico de automação, SNMPv3/Syslog/NTP, DMZ e modernização PoE.

Priorize assuntos complementares:

- IPv6: formato, prefixo, link-local, SLAAC e Neighbor Discovery;
- NAT/PAT e distinção entre tradução e segurança;
- tabela de rotas, rota padrão e maior prefixo;
- TCP: estabelecimento, encerramento, portas e diagnóstico;
- UDP e escolha conforme requisitos;
- ICMP, traceroute e diagnóstico por camadas;
- STP/RSTP em cenário diferente, EtherChannel ou agregação de enlaces;
- fibra monomodo/multimodo, conectores e orçamento óptico conceitual;
- interferência, roaming, RSSI e planejamento Wi-Fi sem depender apenas de canais 1/6/11;
- DNS recursivo/autoritativo, DHCP relay e serviços de rede;
- permissões, processos, logs e serviços em Linux;
- balanceamento, redundância, failover e QoS;
- containers versus máquinas virtuais em infraestrutura;
- backup de configuração e recuperação de equipamento;
- ACL, VPN, segmentação, autenticação e menor privilégio;
- análise de métricas, capacidade, disponibilidade e alertas;
- automação em Python, API ou configuração declarativa, com ambiente claramente definido;
- documentação, inventário e gestão de mudanças.

## Qualidade pedagógica

- Use situações profissionais curtas e realistas de campus, laboratório, provedor, suporte, datacenter e operação de redes.
- Priorize conceitos clássicos e pertinentes à matriz de TRC.
- Evite cálculos longos; forneça todos os dados quando houver cálculo curto.
- Produza conteúdo inédito e não copie provas anteriores ou o lote 01.
- Crie somente uma resposta ou solução defensável.
- Distratores e decisões incorretas devem representar erros profissionais plausíveis.
- Ajuda deve oferecer pista, conceito e exemplo sem revelar imediatamente a solução.
- Explicação e feedback devem ensinar o motivo técnico.
- Textos devem ser legíveis em celular e não depender exclusivamente de cor, posição, som ou movimento.
- Não use a palavra `ENADE` nos campos exibidos ao jogador. Ela pode aparecer somente em fontes e rastreabilidade interna.

## Regras das mecânicas

- `binary-choice`: afirmação inequívoca e feedback específico para ambos os valores.
- `multiple-select`: cinco a sete opções, quantidade correta explícita e feedback individual.
- `sequence-order`: quatro a seis blocos com dependências que estabeleçam uma única ordem.
- `pair-match`: três a cinco pares sem associações intercambiáveis.
- `categorize`: duas ou três categorias mutuamente exclusivas no cenário e quatro a seis itens.
- `fill-slot`: quatro tokens, apenas um correto e código ou comando funcional com ambiente declarado.
- `visual-hotspot`: dois a oito nós e descrição textual equivalente completa; a resposta não pode depender somente de posição ou cor.
- `decision-dialogue`: exatamente três etapas e três escolhas em cada etapa; apenas uma escolha adequada por etapa.

## Fontes

- Fonte normativa principal: Portaria Inep nº 172/2026, arts. 5º e 6º, papel `primary`, tipo `official-reference`.
- Use referências técnicas oficiais pertinentes: RFCs do IETF, IEEE/ISO, NIST e documentação oficial da tecnologia empregada.
- Não invente números ou títulos de documentos.
- Marque `sourceVerificationNeeded: true` quando não puder confirmar a referência técnica.
- Diferencie a referência normativa da fonte técnica que sustenta a solução.
- Preserve os localizadores próprios de TRC, especialmente art. 6º XI para virtualização e XIII para segurança.

## Auditoria antes da entrega

O relatório deve confirmar:

- 20 objetos e IDs únicos `N9-TRC-021`–`N9-TRC-040`;
- ausência de IDs ou cenários repetidos do lote 01;
- cotas exatas por mecânica, área e dificuldade;
- somente TRC em `courses`;
- uma fonte principal por item;
- unicidade das respostas, sequências, associações e classificações;
- exatamente três etapas e uma escolha adequada por etapa nos diálogos;
- descrições acessíveis dos quatro diagramas;
- ausência da palavra ENADE nos textos exibidos;
- fontes que exigem conferência;
- limitações e pontos para auditoria no repositório principal.

Não declare revisão humana, homologação de acessibilidade ou aprovação para publicação. Entregue os dois arquivos completos, sem reticências e sem dividir o JSON.
