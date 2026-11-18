# N9 — Jornada Digital: ampliação de TRC 04 — WAN, tecnologias emergentes e sustentabilidade

Autoria documental assistida por IA — 18/11/2026. Este lote final cria `E26-Q-TRC-41` a `E26-Q-TRC-47`. Não gera JSON nem altera o jogo; todos os itens permanecem em `under-ai-review`.

## 1. Inventário

| ID | Objeto principal | Dificuldade | Gabarito | Recurso |
|---|---|---|---|---|
| TRC-41 | XVII — Redes WAN | introductory | B | Caminho sobre rede pública |
| TRC-42 | XVII — Redes WAN | intermediate | D | Diagrama primário/reserva |
| TRC-43 | XVII — Redes WAN | introductory | A | Comparador de topologias |
| TRC-44 | XVIII — Tecnologias emergentes | intermediate | C | Plano de controle e encaminhamento |
| TRC-45 | XVIII — Tecnologias emergentes | introductory | E | Catálogo de funções virtualizadas |
| TRC-46 | XVIII — Tecnologias emergentes | intermediate | C | Fluxo nuvem–borda |
| TRC-47 | XIX — Sustentabilidade e meio ambiente | intermediate | B | Painel de energia e ciclo de vida |

Distribuição: três `introductory`, quatro `intermediate`, nenhuma `advanced`; gabaritos B/D/A/C/E/C/B.

## 2. Fontes e limites

- **F10 — `primary`:** Portaria Inep 172/2026, art. 6º, XVII, XVIII e XIX.
- **T76 — `technical`:** RFC 4301, arquitetura de segurança IP; apoia o túnel protegido de TRC-41.
- **T77 — `technical`:** Open Networking Foundation, arquitetura SDN; apoia a separação conceitual entre controle e encaminhamento em TRC-44.
- **T78 — `technical`:** ETSI, Network Functions Virtualisation; apoia funções de rede em software sobre infraestrutura virtualizada em TRC-45.
- **T79 — `technical`:** NIST SP 500-325, modelo conceitual de fog computing; apoia processamento próximo à origem em TRC-46.
- **T53/T54 — `technical`:** referências ambientais e sanitização já registradas no lote compartilhado 03; apoiam medição, extensão de vida útil e destinação responsável em TRC-47.

URLs: `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf`, `https://www.rfc-editor.org/rfc/rfc4301`, `https://opennetworking.org/sdn-definition/`, `https://www.etsi.org/technologies/nfv`, `https://csrc.nist.gov/pubs/sp/500/325/final`.

Os casos são autorais e não prescrevem fornecedor. “Emergente” é usado no sentido curricular da Portaria; as tecnologias podem estar consolidadas em diferentes contextos.

## 3. E26-Q-TRC-41 — A filial atravessa a Internet sem expor o tráfego

**Ficha:** `courses: [TRC]`; área “Redes de longa distância”; `introductory`; `validationStatus: under-ai-review`.

Uma filial utilizará acesso à Internet para chegar à matriz. O requisito exige confidencialidade e integridade entre os dois roteadores, sem modificar cada aplicação interna.

```text
LAN filial ─ R1 ═ Internet ═ R2 ─ LAN matriz
```

**Enunciado.** Qual solução atende mais diretamente ao requisito?

- **A.** Enviar todo o tráfego em texto aberto e ocultar apenas os nomes das máquinas.
- **B.** Estabelecer VPN site-to-site protegida entre R1 e R2, com autenticação e criptografia adequadas.
- **C.** Trocar os endereços privados por públicos, sem proteção adicional.
- **D.** Usar somente DNS para criptografar qualquer protocolo.
- **E.** Desativar a verificação de integridade para reduzir processamento.

**Gabarito: B.** O túnel site-to-site protege o tráfego entre as redes sobre o caminho público conforme os requisitos declarados.

| Alternativa | Feedback |
|---|---|
| A | Ocultar nomes não protege o conteúdo. |
| B | Correta: protege confidencialidade e integridade entre os pontos. |
| C | Endereçamento público não oferece criptografia. |
| D | DNS não protege automaticamente todos os protocolos. |
| E | Remove justamente uma propriedade exigida. |

## 4. E26-Q-TRC-42 — O enlace reserva precisa ser realmente diferente

**Ficha:** `courses: [TRC]`; área “Redes de longa distância”; `intermediate`; `validationStatus: under-ai-review`.

Uma unidade precisa continuar conectada após falha do enlace principal. Duas ofertas usam operadoras diferentes, mas passam pelo mesmo duto até o prédio. Uma terceira opção utiliza outra operadora e rota física independente. O roteador consegue monitorar o caminho e alterar a rota preferida.

**Enunciado.** Qual plano reduz melhor a falha comum descrita?

- **A.** Contratar dois contratos sobre o mesmo duto e dispensar teste de failover.
- **B.** Usar apenas um enlace e aumentar sua banda.
- **C.** Manter o segundo enlace desligado e sem configuração até a falha.
- **D.** Usar caminhos fisicamente diversos, monitoramento e failover testado, preservando capacidade mínima no reserva.
- **E.** Considerar nomes de operadoras como prova suficiente de diversidade física.

**Gabarito: D.** A diversidade de rota reduz a causa comum do duto, enquanto monitoramento, configuração e teste tornam a recuperação verificável.

| Alternativa | Feedback |
|---|---|
| A | O mesmo duto mantém a causa comum. |
| B | Banda maior não cria caminho alternativo. |
| C | Um reserva não preparado pode falhar quando necessário. |
| D | Correta: combina diversidade, detecção, configuração e capacidade. |
| E | Operadora diferente não comprova percurso físico diferente. |

## 5. E26-Q-TRC-43 — Cinco filiais falam com o centro

**Ficha:** `courses: [TRC]`; área “Redes de longa distância”; `introductory`; `validationStatus: under-ai-review`.

Cinco filiais acessam somente sistemas do centro de dados. Não há requisito de comunicação direta entre filiais. Compare:

- **hub-and-spoke:** cada filial mantém um enlace lógico com o centro;
- **malha completa:** cada local mantém enlace direto com todos os demais.

**Enunciado.** Qual escolha atende ao padrão de comunicação com menor número de enlaces lógicos neste caso?

- **A.** Hub-and-spoke, com cinco enlaces entre filiais e centro.
- **B.** Malha completa, porque todo par precisa comunicar mesmo sem requisito.
- **C.** Nenhum enlace; o centro descobrirá as filiais automaticamente.
- **D.** Um enlace apenas, compartilhado fisicamente sem equipamento intermediário.
- **E.** Anel entre filiais, obrigando o tráfego a atravessar todas elas.

**Gabarito: A.** Como todo tráfego relevante envolve o centro, um enlace lógico por filial atende ao requisito sem criar conexões diretas desnecessárias.

| Alternativa | Feedback |
|---|---|
| A | Correta: corresponde ao fluxo declarado. |
| B | Cria ligações que o caso não exige. |
| C | Comunicação WAN requer conectividade configurada. |
| D | Um único enlace lógico não conecta individualmente os seis locais no modelo. |
| E | Adiciona dependência de trânsito entre filiais. |

## 6. E26-Q-TRC-44 — A política muda sem programar cada switch

**Ficha:** `courses: [TRC]`; área “Tecnologias emergentes”; `intermediate`; `validationStatus: under-ai-review`.

Uma rede definida por software usa um controlador para calcular políticas e dispositivos para encaminhar pacotes conforme regras instaladas. A equipe quer alterar centralmente o caminho de uma classe de tráfego.

**Enunciado.** Qual ação corresponde ao modelo apresentado?

- **A.** Substituir todos os cabos sempre que uma política mudar.
- **B.** Fazer cada aplicação escolher fisicamente a porta do switch.
- **C.** Atualizar a política no plano de controle, que programa regras coerentes nos dispositivos de encaminhamento.
- **D.** Remover o plano de encaminhamento e enviar pacotes somente pelo controlador.
- **E.** Presumir que centralização elimina autenticação, redundância e controle de acesso.

**Gabarito: C.** O controlador representa o plano de controle e distribui decisões aos elementos que continuam encaminhando o tráfego.

| Alternativa | Feedback |
|---|---|
| A | Política lógica não exige trocar cabeamento. |
| B | Aplicações não escolhem diretamente portas físicas nesse modelo. |
| C | Correta: separa decisão de controle e execução de encaminhamento. |
| D | Dispositivos continuam encaminhando pacotes. |
| E | Centralização não elimina requisitos de segurança e disponibilidade. |

## 7. E26-Q-TRC-45 — Firewall como função virtualizada

**Ficha:** `courses: [TRC]`; área “Tecnologias emergentes”; `introductory`; `validationStatus: under-ai-review`.

Uma organização executará firewall e balanceador como funções de software em infraestrutura virtualizada homologada. A política exige capacidade, isolamento, monitoramento e recuperação.

**Enunciado.** Qual afirmação é adequada?

- **A.** Virtualizar elimina qualquer consumo de CPU, memória e rede.
- **B.** Uma função virtual nunca precisa de atualização ou monitoramento.
- **C.** NFV significa transformar cabos físicos em arquivos de texto.
- **D.** A virtualização garante disponibilidade infinita mesmo sem redundância.
- **E.** Funções podem ser desacopladas de appliances dedicados, mas continuam dependendo de recursos, isolamento e operação controlada.

**Gabarito: E.** NFV permite implementar funções em software sobre infraestrutura adequada, sem eliminar limites físicos ou responsabilidades operacionais.

| Alternativa | Feedback |
|---|---|
| A | Software virtualizado continua consumindo recursos. |
| B | Funções continuam exigindo ciclo de vida e observabilidade. |
| C | NFV virtualiza funções, não o meio físico em si. |
| D | Disponibilidade depende da arquitetura e da operação. |
| E | Correta: reconhece benefício e limites. |

## 8. E26-Q-TRC-46 — Reagir perto das câmeras, resumir para a nuvem

**Ficha:** `courses: [TRC]`; área “Tecnologias emergentes”; `intermediate`; `validationStatus: under-ai-review`.

Câmeras geram grande volume de vídeo. Um alerta local precisa ocorrer em até 50 ms; a nuvem recebe apenas eventos e amostras para análise histórica. A conexão externa pode oscilar.

**Enunciado.** Qual arquitetura atende melhor às condições?

- **A.** Enviar todo o vídeo à nuvem e impedir qualquer decisão local durante falhas.
- **B.** Armazenar tudo somente na câmera, sem monitoramento central ou política de retenção.
- **C.** Processar o evento crítico na borda, manter operação local delimitada e sincronizar resumos/amostras com a nuvem conforme a política.
- **D.** Aumentar o prazo do alerta para esconder a latência.
- **E.** Duplicar vídeo indefinidamente em todos os equipamentos.

**Gabarito: C.** O processamento próximo à origem atende à latência e reduz tráfego, enquanto a nuvem preserva a função histórica prevista.

| Alternativa | Feedback |
|---|---|
| A | Dependência integral da WAN contraria latência e continuidade. |
| B | Remove a análise histórica e a governança central exigidas. |
| C | Correta: distribui funções conforme latência, volume e conectividade. |
| D | Muda o requisito em vez de atendê-lo. |
| E | Aumenta armazenamento e tráfego sem finalidade. |

## 9. E26-Q-TRC-47 — Economizar energia sem remover a redundância

**Ficha:** `courses: [TRC]`; área “Sustentabilidade e meio ambiente”; `intermediate`; `validationStatus: under-ai-review`.

Um laboratório mede quatro equipamentos: dois são necessários para redundância; um terceiro permanece ligado com 3% de uso e não participa do failover; o quarto está desligado e pode ser reaproveitado. A política exige medir resultado, preservar continuidade, sanitizar dados antes de reuso e destinar corretamente o que não puder ser reutilizado.

**Enunciado.** Qual plano é mais coerente?

- **A.** Desligar todos os equipamentos, inclusive os dois necessários à continuidade.
- **B.** Validar que o terceiro não participa da redundância, retirá-lo de operação controladamente, medir consumo/serviço e avaliar reuso com sanitização.
- **C.** Manter tudo ligado porque sustentabilidade nunca considera consumo operacional.
- **D.** Descartar o quarto equipamento em lixo comum sem verificar dados ou possibilidade de reuso.
- **E.** Transferir dados para mídia desconhecida e declarar impacto zero sem medição.

**Gabarito: B.** O plano usa evidência, preserva a redundância, mede o efeito e considera segurança e ciclo de vida antes do reuso ou descarte.

| Alternativa | Feedback |
|---|---|
| A | Viola o requisito de continuidade. |
| B | Correta: integra eficiência, serviço, dados e ciclo de vida. |
| C | Medição de consumo é parte explícita do cenário. |
| D | Ignora proteção de dados e destinação responsável. |
| E | Não oferece rastreabilidade nem evidência de impacto. |

## 10. Segunda passagem e auditoria rápida

- Sete IDs novos e distintos: `E26-Q-TRC-41` a `E26-Q-TRC-47`.
- Cada questão possui cinco alternativas, um gabarito e cinco feedbacks.
- TRC-41/42/43 cobrem proteção sobre WAN, diversidade/failover e topologia; TRC-44/45/46 cobrem SDN, NFV e borda; TRC-47 trata energia e ciclo de vida sem repetir o projeto físico de TRC-09.
- Nenhum item depende exclusivamente de cor, imagem, som ou movimento.
- Permanecem `under-ai-review`; cotejo externo, calibração e homologação humana de acessibilidade continuam pendentes.

Com este lote, encerra-se a autoria planejada de TRC. A próxima etapa deve ser uma auditoria compacta de capacidade dos novos lotes antes de qualquer JSON ou integração.
