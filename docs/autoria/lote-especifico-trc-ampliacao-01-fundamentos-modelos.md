# N9 — Jornada Digital: ampliação de TRC 01 — fundamentos, modelos e roteamento

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-TRC-16` a `E26-Q-TRC-20`. O recorte prioriza fundamentos clássicos da Portaria Inep 172/2026, aplicação direta e representações visuais curtas. Não gera JSON nem altera o jogo; todos os itens permanecem em `under-ai-review`.

## 1. Inventário

| ID | Objeto principal | Dificuldade | Gabarito | Recurso |
|---|---|---|---|---|
| E26-Q-TRC-16 | I — Componentes e topologias | introductory | B | Diagrama de rede local |
| E26-Q-TRC-17 | II — Comunicação e transmissão | intermediate | E | Painel de enlace |
| E26-Q-TRC-18 | III — Modelos de referência | introductory | C | Pilha em camadas |
| E26-Q-TRC-19 | V — Algoritmos e protocolos de roteamento | intermediate | D | Grafo de custos |
| E26-Q-TRC-20 | VI — Padrões IEEE 802.x | introductory | A | Quadro de tecnologias |

Distribuição: três `introductory`, duas `intermediate` e nenhuma `advanced`; gabaritos B/E/C/D/A.

## 2. Fontes e rastreabilidade

- **F10 — `primary`:** Portaria Inep 172/2026, art. 5º, competências I/II; art. 6º, I, II, III, V e VI.
- **T2 — `technical`:** RFC 1812, encaminhamento e seleção de próximo salto. Apoia o contexto de roteamento, sem fornecer o grafo fictício de TRC-19.
- **T69 — `technical`:** ITU-T X.200, modelo básico de referência para interconexão de sistemas abertos. Apoia a separação conceitual em camadas de TRC-18.
- **T70 — `technical`:** IEEE 802, visão geral da família de padrões para redes locais e metropolitanas. Apoia a associação 802.3/802.11/802.1Q de TRC-20; não se declara certificação de implementação.
- **T71 — `technical`:** RFC 1122, requisitos de comunicação para hosts da Internet. Apoia a distinção entre enlace, IP, transporte e aplicação usada como simplificação didática.

URLs: `https://abmes.org.br/arquivos/legislacoes/Portaria-inep-172-2026-04-14.pdf`, `https://www.rfc-editor.org/rfc/rfc1812`, `https://www.itu.int/rec/T-REC-X.200`, `https://www.ieee802.org/` e `https://www.rfc-editor.org/rfc/rfc1122`.

Os diagramas, medições e alternativas são autorais. Características necessárias para cada resposta são declaradas nos casos; nenhuma questão exige decorar comandos de fabricante.

## 3. E26-Q-TRC-16 — Quem entrega localmente e quem leva para outra rede?

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [TRC]`; área “Fundamentos, componentes e topologias”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`.

### Diagrama apresentado

```text
PC-A ─┐
      ├─ Switch S ─ Roteador R ─ Internet
PC-B ─┘
```

PC-A e PC-B pertencem à mesma rede local. O switch S encaminha quadros entre portas da LAN. O roteador R conecta essa LAN a outra rede.

**Enunciado.** PC-A enviará primeiro um arquivo para PC-B e depois acessará um servidor na Internet. Qual descrição está correta?

- **A.** As duas comunicações precisam atravessar R antes de chegar ao switch.
- **B.** S encaminha o tráfego local entre A e B; R é usado quando o destino está em outra rede.
- **C.** R substitui as placas de rede dos computadores durante a comunicação local.
- **D.** S converte automaticamente qualquer arquivo em sinal de rede sem participação dos hosts.
- **E.** A topologia impede comunicação entre A e B porque ambos estão ligados ao mesmo switch.

**Gabarito: B.** O tráfego entre dispositivos da mesma LAN pode ser encaminhado pelo switch. Para alcançar uma rede diferente, o host utiliza o roteador como próximo salto.

| Alternativa | Feedback |
|---|---|
| A | O roteador não é necessário para o destino declarado na mesma LAN. |
| B | Correta: distingue encaminhamento local de interligação entre redes. |
| C | Cada computador continua usando sua própria interface de rede. |
| D | O switch encaminha quadros; ele não substitui toda a pilha dos hosts. |
| E | Compartilhar o switch permite a comunicação local nas condições fornecidas. |

## 4. E26-Q-TRC-17 — O enlace está ativo, mas o sinal chega degradado

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [TRC]`; área “Comunicação e transmissão de dados”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`.

### Painel do enlace

Um enlace metálico de laboratório apresenta:

| Observação | Resultado |
|---|---|
| Potência recebida | diminui conforme o comprimento aumenta |
| Ruído impulsivo | coincide com erros em rajada |
| Interfaces | permanecem ativas |
| Teste com trecho curto, afastado da fonte de ruído | não apresenta erros |

O objetivo é tratar primeiro a causa física indicada pelas evidências, mantendo a mesma aplicação.

**Enunciado.** Qual ação é mais coerente com o diagnóstico?

- **A.** Alterar o nome DNS do servidor, pois isso aumenta a potência do sinal recebido.
- **B.** Acrescentar usuários ao enlace para compensar os erros em rajada.
- **C.** Remover a detecção de erro para que os quadros degradados sejam aceitos silenciosamente.
- **D.** Trocar o protocolo da aplicação sem verificar distância, interferência ou meio físico.
- **E.** Verificar limites do meio, conectores e interferência, corrigindo o percurso ou adotando meio adequado às condições.

**Gabarito: E.** A queda de potência com o comprimento e a correlação entre ruído e erros apontam para transmissão física. Inspecionar o percurso e adequar o meio trata as evidências antes de modificar camadas superiores.

| Alternativa | Feedback |
|---|---|
| A | DNS resolve nomes e não aumenta potência do sinal. |
| B | Mais tráfego não corrige atenuação ou ruído. |
| C | Ocultar erros reduz confiabilidade e não elimina a degradação. |
| D | A evidência diferencia o trecho físico; mudar a aplicação não trata essa causa. |
| E | Correta: investiga atenuação, interferência, conectores e adequação do meio. |

## 5. E26-Q-TRC-18 — Localizar a falha pela camada

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [TRC]`; área “Modelos de referência”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`.

### Pilha simplificada

```text
Aplicação: HTTP
Transporte: TCP
Rede: IP
Enlace: Ethernet
Física: sinal e meio
```

Um computador apresenta enlace Ethernet ativo, endereço IP válido e consegue receber resposta ao testar o endereço do servidor. Entretanto, a tentativa de abrir conexão TCP na porta do serviço é recusada.

**Enunciado.** Em qual camada deve começar a investigação específica dessa evidência?

- **A.** Física, porque toda recusa de porta comprova rompimento do cabo.
- **B.** Enlace, porque o endereço IP válido elimina a existência de Ethernet.
- **C.** Transporte/serviço, verificando a escuta da porta e a política que aceita a conexão TCP.
- **D.** Aplicação HTTP apenas, ignorando que a conexão TCP ainda não foi estabelecida.
- **E.** Nenhuma camada, pois receber resposta pelo endereço garante automaticamente todas as portas.

**Gabarito: C.** As evidências já demonstram conectividade básica de enlace e IP. A recusa ao estabelecer TCP direciona a investigação para a porta, o serviço e a política de transporte antes de analisar uma requisição HTTP.

| Alternativa | Feedback |
|---|---|
| A | Há enlace ativo e comunicação IP; cabo rompido não explica a evidência fornecida. |
| B | Ethernet e IP ocupam funções distintas e ambos possuem evidências positivas. |
| C | Correta: localiza a falha no estabelecimento da conexão e no serviço associado. |
| D | HTTP depende da conexão TCP que ainda falhou. |
| E | Conectividade IP não garante que toda porta esteja aberta ou que o serviço esteja ativo. |

## 6. E26-Q-TRC-19 — Menor custo até o laboratório remoto

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [TRC]`; área “Algoritmos e protocolos de roteamento”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`.

### Grafo de custos

```text
A ─1─ B ─1─ C ─1─ D
 \4── C     B ─5─ D
```

A tabela equivalente contém enlaces bidirecionais `AB=1`, `AC=4`, `BC=1`, `BD=5` e `CD=1`. Considere um protocolo que seleciona o caminho de menor soma de custos, sem outras políticas.

**Enunciado.** Qual caminho deve ser selecionado de A até D?

- **A.** A–C–D, custo 5.
- **B.** A–B–D, custo 6.
- **C.** A–C–B–D, custo 10.
- **D.** A–B–C–D, custo 3.
- **E.** A–D, custo 0, embora não exista enlace direto.

**Gabarito: D.** A soma de A–B–C–D é `1+1+1=3`, menor que os demais caminhos oferecidos. O exercício compara custos declarados e não inclui política adicional.

| Alternativa | Feedback |
|---|---|
| A | O caminho existe, mas soma 5. |
| B | O enlace B–D possui custo 5, produzindo total 6. |
| C | Soma 4+1+5=10 e ainda percorre um desvio. |
| D | Correta: os três enlaces de custo 1 totalizam 3. |
| E | Não há enlace direto A–D no grafo. |

## 7. E26-Q-TRC-20 — Três padrões no mesmo campus

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [TRC]`; área “Padrões IEEE 802.x”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`.

### Requisitos apresentados

- computadores fixos usam Ethernet cabeada;
- tablets conectam-se por rede local sem fio;
- o enlace entre switches transporta quadros identificados por VLAN.

Para o exercício, associe: IEEE 802.3 a Ethernet, IEEE 802.11 a WLAN e IEEE 802.1Q à identificação de VLAN em quadros.

**Enunciado.** Qual associação atende aos três requisitos, na ordem apresentada?

- **A.** 802.3; 802.11; 802.1Q.
- **B.** 802.11; 802.3; 802.1Q.
- **C.** 802.1Q; 802.11; 802.3.
- **D.** 802.3 para os três casos, pois toda função de LAN é idêntica.
- **E.** 802.11; 802.1Q; 802.11.

**Gabarito: A.** A sequência corresponde respectivamente à LAN Ethernet cabeada, à rede local sem fio e à marcação de VLAN no enlace entre switches.

| Alternativa | Feedback |
|---|---|
| A | Correta: associa cada requisito à função declarada. |
| B | Inverte os padrões de acesso cabeado e sem fio. |
| C | 802.1Q não substitui o padrão de acesso Ethernet do computador. |
| D | Os três requisitos possuem funções distintas dentro da família 802. |
| E | 802.1Q trata identificação de VLAN, não acesso físico do tablet. |

## 8. Segunda passagem de revisão assistida por IA

| ID | Unicidade | Acessibilidade e engajamento | Limitação | Estado |
|---|---|---|---|---|
| TRC-16 | Somente B separa LAN e interligação entre redes. | Diagrama pequeno com descrição textual. | Não cobre aprendizagem da tabela do switch. | `under-ai-review` |
| TRC-17 | Somente E trata as evidências físicas sem ocultar erros. | Painel textual de medições e decisão profissional. | Não calcula orçamento óptico ou taxa de erro. | `under-ai-review` |
| TRC-18 | Somente C respeita as evidências positivas e a recusa TCP. | Pilha nomeada e diagnóstico por etapas. | Modelo é simplificado para o caso. | `under-ai-review` |
| TRC-19 | D possui custo 3; todos os demais são maiores ou inexistentes. | Grafo com lista equivalente de arestas. | Não avalia convergência ou política de protocolo real. | `under-ai-review` |
| TRC-20 | A reproduz as três associações fornecidas. | Padrões aparecem com nomes e funções; não depende de ícones. | Não exige detalhes completos das normas. | `under-ai-review` |

## 9. Auditoria rápida

- IDs novos: `E26-Q-TRC-16` a `E26-Q-TRC-20`.
- Cinco alternativas, uma resposta fundamentada e cinco feedbacks por item.
- Três questões introdutórias, duas intermediárias e nenhuma avançada.
- TRC-16 não repete a escolha de meio de TRC-02; TRC-17 diagnostica transmissão; TRC-18 trabalha camadas; TRC-19 usa custo de rota, não prefixo mais longo de TRC-04; TRC-20 diferencia padrões.
- Nenhum item depende exclusivamente de cor, som, movimento ou imagem.
- Nenhum texto apresentado ao jogador utiliza o nome da origem pedagógica interna.
- Permanecem pendentes cotejo externo amplo, calibração e homologação humana de acessibilidade.

Próxima etapa recomendada: criar o lote TRC 02 concentrado em redes sem fio, cabeamento estruturado, configuração de dispositivos, projeto físico e automação, sem ampliar segurança ou gerenciamento já cobertos.
