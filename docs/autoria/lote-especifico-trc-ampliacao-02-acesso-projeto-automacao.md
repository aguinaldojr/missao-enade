# N9 — Jornada Digital: ampliação de TRC 02 — acesso, projeto e automação

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-TRC-21` a `E26-Q-TRC-30`, organizado em dois blocos de cinco. Não gera JSON nem altera o jogo; todos os itens permanecem em `under-ai-review`.

## 1. Inventário

| ID | Objeto principal | Dificuldade | Gabarito | Recurso |
|---|---|---|---|---|
| TRC-21 | VII — Redes sem fio | introductory | C | Mapa de canais |
| TRC-22 | VII — Redes sem fio | intermediate | A | Planta de cobertura |
| TRC-23 | VIII — Cabeamento estruturado | introductory | E | Quadro de enlace |
| TRC-24 | VIII — Cabeamento estruturado | intermediate | B | Planta de pontos e caminhos |
| TRC-25 | XII — Programação e automação | intermediate | D | Fluxo de estado desejado |
| TRC-26 | XII — Programação e automação | intermediate | B | Pipeline em lotes |
| TRC-27 | XIV — Projeto lógico e físico | introductory | A | Cartões de requisitos |
| TRC-28 | XIV — Projeto lógico e físico | intermediate | E | Quadro de portas e reserva |
| TRC-29 | XV — Configuração de dispositivos | intermediate | C | Lista ordenada de regras |
| TRC-30 | XV — Configuração de dispositivos | introductory | D | Quadro de VLANs |

Distribuição: quatro `introductory`, seis `intermediate`, nenhuma `advanced`; gabaritos C/A/E/B/D/B/A/E/C/D.

## 2. Fontes e limites

- **F10 — `primary`:** Portaria Inep 172/2026, art. 6º, VII, VIII, XII, XIV e XV.
- **T70 — `technical`:** família IEEE 802; apoia redes locais sem fio e segmentação, sem exigir leitura integral de norma paga.
- **T72 — `technical`:** IEEE 802.11 Working Group; apoia conceitos de WLAN. Canais, potência e planta são premissas dos casos.
- **T73 — `technical`:** ANSI/TIA-568, cabeamento estruturado. Os limites usados em TRC-23 são declarados como política do projeto e não como transcrição normativa universal.
- **T7 — `technical`:** RFC 6241, NETCONF; apoia configuração candidata, validação e confirmação controlada.
- **T74 — `technical`:** RFC 8342, Network Management Datastore Architecture; apoia distinção entre intenção/configuração e estado operacional.

URLs: `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf`, `https://www.ieee802.org/`, `https://www.ieee802.org/11/`, `https://www.tiaonline.org/standards/`, `https://www.rfc-editor.org/rfc/rfc6241` e `https://www.rfc-editor.org/rfc/rfc8342`.

Todos os números, plantas, políticas e configurações são fictícios e suficientes para resolver os itens. Não se presume sintaxe de fabricante.

## 3. Bloco A — acesso sem fio e cabeamento

### E26-Q-TRC-21 — Três salas, menos disputa pelo ar

**Ficha:** `courses: [TRC]`; área “Redes sem fio”; `introductory`; `validationStatus: under-ai-review`.

Três pontos de acesso de 2,4 GHz atendem salas vizinhas. No modelo do exercício, os canais `1`, `6` e `11` não se sobrepõem. Usar o mesmo canal em salas vizinhas aumenta a disputa.

```text
Sala A ─ Sala B ─ Sala C
 AP-A     AP-B     AP-C
```

**Enunciado.** Qual plano reduz sobreposição entre vizinhos?

- **A.** 1, 1 e 1.
- **B.** 6, 6 e 6.
- **C.** 1, 6 e 11.
- **D.** 1, 2 e 3, embora o caso informe sobreposição.
- **E.** Desligar AP-B e aumentar potência sem medir cobertura.

**Gabarito: C.** O plano usa os três canais declarados como não sobrepostos e evita canal igual em salas adjacentes.

| Alternativa | Feedback |
|---|---|
| A | Mantém disputa entre os três APs. |
| B | Apenas troca o canal compartilhado. |
| C | Correta: separa os canais dos vizinhos. |
| D | Contraria a condição fornecida. |
| E | Pode criar sombra e não atende ao plano de três salas. |

### E26-Q-TRC-22 — Caminhar sem abandonar a chamada

**Ficha:** `courses: [TRC]`; área “Redes sem fio”; `intermediate`; `validationStatus: under-ai-review`.

Dois APs possuem retorno cabeado e áreas de cobertura parcialmente sobrepostas. O requisito é permitir deslocamento mantendo a mesma rede corporativa. A política exige mesmo SSID e segurança, canais distintos e potência ajustada por medição.

**Enunciado.** Qual configuração atende ao requisito?

- **A.** Mesmo SSID/segurança, canais distintos, sobreposição medida e retorno cabeado funcional.
- **B.** SSIDs e credenciais diferentes, obrigando nova escolha manual em cada sala.
- **C.** Mesmo canal e potência máxima por padrão, sem levantamento de cobertura.
- **D.** Um AP sem retorno à rede, usado apenas para anunciar o SSID.
- **E.** Desativar autenticação para acelerar a troca entre células.

**Gabarito: A.** A mantém identidade e política da WLAN, reduz disputa por canal e oferece cobertura contínua apoiada por medição.

| Alternativa | Feedback |
|---|---|
| A | Correta: satisfaz identidade, segurança, cobertura e conectividade. |
| B | Introduz troca manual e redes distintas. |
| C | Ignora interferência e evidência de cobertura. |
| D | Anunciar a rede sem retorno não entrega o serviço. |
| E | Mobilidade não justifica remover segurança. |

### E26-Q-TRC-23 — O canal precisa caber inteiro

**Ficha:** `courses: [TRC]`; área “Cabeamento estruturado”; `introductory`; `validationStatus: under-ai-review`.

A política deste projeto limita o enlace permanente a `90 m` e o canal completo, incluindo cordões, a `100 m`.

| Proposta | Enlace permanente | Cordões | Total |
|---|---:|---:|---:|
| P | 88 m | 10 m | 98 m |
| Q | 92 m | 4 m | 96 m |
| R | 89 m | 13 m | 102 m |

**Enunciado.** Qual proposta atende aos dois limites?

- **A.** Q, porque apenas o total importa.
- **B.** R, porque apenas o enlace permanente importa.
- **C.** Q e R.
- **D.** Todas.
- **E.** P.

**Gabarito: E.** P possui enlace permanente de 88 m e canal de 98 m, ambos dentro dos limites.

| Alternativa | Feedback |
|---|---|
| A | Q excede os 90 m permanentes. |
| B | R excede os 100 m totais. |
| C | As duas violam condições diferentes. |
| D | Somente P atende simultaneamente. |
| E | Correta: 88≤90 e 98≤100. |

### E26-Q-TRC-24 — Crescer sem puxar cabos pelo corredor

**Ficha:** `courses: [TRC]`; área “Cabeamento estruturado”; `intermediate`; `validationStatus: under-ai-review`.

Um laboratório terá 18 posições agora e seis previstas. A sala técnica é central. O projeto exige topologia em estrela, identificação nas duas pontas, patch panel e caminhos separados da energia onde indicado na planta.

**Enunciado.** Qual plano é mais coerente?

- **A.** Ligar cada computador ao seguinte, formando uma corrente sem identificação.
- **B.** Levar cada ponto à sala técnica, reservar posições, identificar as extremidades e terminar os cabos no patch panel.
- **C.** Passar cabos soltos pelo piso e documentar apenas depois de uma falha.
- **D.** Instalar somente 18 terminações e substituir todo o painel quando surgirem as seis novas posições.
- **E.** Compartilhar um único cabo passivo entre todas as tomadas.

**Gabarito: B.** B atende à estrela, documentação, terminação e expansão previstas sem inventar compartilhamento físico inadequado.

| Alternativa | Feedback |
|---|---|
| A | Forma cadeia e dificulta isolamento de falhas. |
| B | Correta: integra estrela, identificação, painel e reserva. |
| C | Viola organização e proteção do percurso. |
| D | Ignora a expansão já conhecida. |
| E | Um cabo passivo não cria 24 enlaces independentes. |

## 4. Bloco B — automação, projeto e configuração

### E26-Q-TRC-25 — Aplicar somente o que está diferente

**Ficha:** `courses: [TRC]`; área “Programação e automação de redes”; `intermediate`; `validationStatus: under-ai-review`.

Uma automação compara estado desejado e estado coletado. A política determina: validar antes, alterar somente diferenças, registrar ações e não reiniciar dispositivo já conforme.

**Enunciado.** Qual fluxo implementa melhor essa política?

- **A.** Reiniciar todos os dispositivos antes de consultar seus estados.
- **B.** Aplicar comandos aleatórios até o teste deixar de falhar.
- **C.** Sobrescrever tudo sem validação ou registro.
- **D.** Coletar, comparar, validar o plano, aplicar diferenças e verificar o resultado.
- **E.** Considerar sucesso apenas porque o script terminou sem exceção.

**Gabarito: D.** O fluxo usa estado observado, validação, mudança mínima e verificação posterior.

| Alternativa | Feedback |
|---|---|
| A | Produz indisponibilidade sem necessidade. |
| B | Não oferece intenção ou resultado determinístico. |
| C | Elimina controles e rastreabilidade. |
| D | Correta: aplica somente diferenças validadas. |
| E | Término do script não comprova estado operacional. |

### E26-Q-TRC-26 — Cem switches, primeiro um grupo pequeno

**Ficha:** `courses: [TRC]`; área “Programação e automação de redes”; `intermediate`; `validationStatus: under-ai-review`.

Uma mudança de VLAN será aplicada a cem switches. Há validação sintática, cópia da configuração atual, grupo piloto de cinco equipamentos e teste de conectividade. A política manda interromper novos lotes se o piloto falhar.

**Enunciado.** Qual sequência reduz o alcance de uma falha?

- **A.** Aplicar nos cem, depois criar a cópia e só então testar.
- **B.** Validar e copiar; aplicar em cinco; verificar; prosseguir em lotes somente se os critérios forem atendidos.
- **C.** Ignorar o piloto para que todos recebam a falha de forma uniforme.
- **D.** Alterar manualmente sem registrar quais equipamentos foram modificados.
- **E.** Testar somente a sintaxe e presumir conectividade.

**Gabarito: B.** B limita o primeiro impacto, preserva referência anterior e condiciona expansão a evidência operacional.

| Alternativa | Feedback |
|---|---|
| A | A cópia e o teste chegam tarde. |
| B | Correta: usa validação, piloto, verificação e expansão controlada. |
| C | Uniformidade não reduz impacto. |
| D | Impede rastrear estado e recuperação. |
| E | Sintaxe válida não garante serviço funcional. |

### E26-Q-TRC-27 — Requisitos antes do catálogo

**Ficha:** `courses: [TRC]`; área “Projeto lógico e físico”; `introductory`; `validationStatus: under-ai-review`.

Um novo laboratório exige 40 dispositivos, separação entre estudantes e administração, acesso sem fio para visitantes, continuidade do serviço central e crescimento de 20%. Ainda não há fabricante escolhido.

**Enunciado.** Qual deve ser o próximo artefato do projeto?

- **A.** Modelo lógico com segmentos, endereçamento, segurança, capacidade e disponibilidade, seguido do mapeamento físico compatível.
- **B.** Lista de um único fabricante sem relacioná-la aos requisitos.
- **C.** Compra imediata de 40 portas, ignorando crescimento e redundância.
- **D.** Desenho decorativo do laboratório sem fluxos ou restrições.
- **E.** Uma senha compartilhada para substituir segmentação e projeto.

**Gabarito: A.** O modelo lógico traduz requisitos antes de selecionar a implementação física, permitindo avaliar alternativas.

| Alternativa | Feedback |
|---|---|
| A | Correta: transforma necessidades em decisões verificáveis. |
| B | Produto sem requisito não demonstra adequação. |
| C | Ignora crescimento e continuidade. |
| D | Aparência não representa a solução técnica. |
| E | Senha compartilhada não substitui segmentação. |

### E26-Q-TRC-28 — Portas para hoje e para a expansão

**Ficha:** `courses: [TRC]`; área “Projeto lógico e físico”; `intermediate`; `validationStatus: under-ai-review`.

Um andar terá 42 pontos ativos. A política exige reserva mínima de 20%. As opções de acesso oferecem 24 ou 48 portas. Arredonde a necessidade para cima.

**Enunciado.** Qual opção possui a menor capacidade que atende à política?

- **A.** Um switch de 24 portas.
- **B.** Um switch de 48 portas.
- **C.** Dois switches de 24 portas, total 48.
- **D.** Quatro switches de 24 portas, total 96.
- **E.** Um switch de 48 e um de 24 portas, total 72.

**Gabarito: E.** `42 × 1,20 = 50,4`, portanto são necessárias ao menos 51 portas. A menor opção suficiente oferece 72.

| Alternativa | Feedback |
|---|---|
| A | 24 é inferior à demanda atual. |
| B | 48 não alcança as 51 necessárias. |
| C | O total continua em 48. |
| D | Atende, mas não é a menor opção suficiente. |
| E | Correta: 72 é a menor capacidade oferecida acima de 51. |

### E26-Q-TRC-29 — A primeira regra compatível decide

**Ficha:** `courses: [TRC]`; área “Configuração de dispositivos”; `intermediate`; `validationStatus: under-ai-review`.

Neste equipamento, a lista é processada de cima para baixo e a primeira regra compatível encerra a decisão. A política deve permitir administração HTTPS apenas da rede `10.0.10.0/24` e negar as demais origens.

**Enunciado.** Qual ordem implementa a política?

- **A.** permitir qualquer origem; negar `10.0.10.0/24`.
- **B.** negar qualquer origem; permitir `10.0.10.0/24`.
- **C.** permitir `10.0.10.0/24` para HTTPS; depois negar as demais origens para HTTPS.
- **D.** permitir a rede administrativa para qualquer serviço e omitir a negação final.
- **E.** negar apenas HTTP e presumir que HTTPS também será negado.

**Gabarito: C.** A exceção autorizada precisa aparecer antes da negação geral, limitada ao serviço e à origem declarados.

| Alternativa | Feedback |
|---|---|
| A | Permite todas as origens na primeira regra. |
| B | A negação geral impede alcançar a permissão seguinte. |
| C | Correta: permite a exceção e bloqueia o restante. |
| D | Amplia serviços além do requisito. |
| E | HTTP e HTTPS são condições diferentes neste caso. |

### E26-Q-TRC-30 — Duas VLANs atravessam, a terceira fica local

**Ficha:** `courses: [TRC]`; área “Configuração de dispositivos”; `introductory`; `validationStatus: under-ai-review`.

O enlace entre dois switches deve transportar VLAN 10 (laboratório) e VLAN 20 (telefonia). A VLAN 30 (gerência local) não deve atravessar esse enlace. A política do equipamento permite declarar explicitamente as VLANs autorizadas no tronco.

**Enunciado.** Qual configuração lógica atende ao requisito?

- **A.** Autorizar apenas VLAN 30.
- **B.** Autorizar 10, 20 e 30 por conveniência.
- **C.** Transformar o tronco em porta de acesso da VLAN 10.
- **D.** Autorizar VLANs 10 e 20 e manter 30 fora da lista.
- **E.** Remover todas as VLANs dos dois switches.

**Gabarito: D.** A lista explícita 10/20 transporta os dois serviços necessários e exclui a VLAN local 30.

| Alternativa | Feedback |
|---|---|
| A | Omite os dois serviços que precisam atravessar. |
| B | Transporta a VLAN que deveria permanecer local. |
| C | Porta de acesso não carrega as duas VLANs exigidas. |
| D | Correta: inclui 10 e 20 e exclui 30. |
| E | Elimina também as redes necessárias. |

## 5. Segunda passagem e auditoria rápida

- Dez IDs novos e distintos: `E26-Q-TRC-21` a `E26-Q-TRC-30`.
- Cada item possui cinco alternativas, um gabarito e cinco feedbacks.
- Nenhum item depende exclusivamente de cor, som, posição ou imagem.
- TRC-21/22 diferenciam planejamento de canais e mobilidade; TRC-23/24 diferenciam limites e organização física; TRC-25/26 diferenciam estado desejado e implantação em lotes; TRC-27/28 diferenciam projeto lógico e dimensionamento; TRC-29/30 diferenciam regras ordenadas e VLANs.
- Permanecem `under-ai-review`; cotejo externo, calibração e homologação humana de acessibilidade continuam pendentes.

Próxima etapa recomendada: criar o lote TRC 03 com dez questões sobre os déficits restantes de fundamentos, transmissão, modelos, roteamento, IEEE 802.x, serviços e configuração, preservando WAN, tecnologias emergentes e sustentabilidade para o lote final.
