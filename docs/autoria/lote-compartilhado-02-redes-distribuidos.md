# N9 — Jornada Digital: lote compartilhado 02 — redes e sistemas distribuídos

Autoria documental assistida por IA — 18/11/2026. Este lote cria `E26-Q-TRC-11` a `E26-Q-TRC-15`. TRC é a classificação editorial de origem; `courses` registra somente cursos cuja matriz contém o objeto mobilizado. A elegibilidade compartilhada não transforma as matrizes em uma só.

Não há JSON, integração ao catálogo, mudança de partidas ou alteração do jogo. Todos os itens permanecem em `under-ai-review`. Cenários, endereços, métricas e serviços são fictícios. Objetos visuais têm equivalente textual.

## 1. Inventário e distribuição

| ID | Conteúdo central | Cursos elegíveis | Dificuldade | Gabarito | Objeto apresentado |
|---|---|---|---|---|---|
| E26-Q-TRC-11 | TCP e UDP conforme requisitos | CC, SI, TADS, TGTI, TRC | introductory | D | Dois fluxos de aplicação |
| E26-Q-TRC-12 | Capacidade de sub-rede IPv4 | CC, SI, TADS, TGTI, TRC | intermediate | B | Cartão de endereçamento |
| E26-Q-TRC-13 | Componentes da latência fim a fim | CC, SI, TADS, TGTI, TRC | intermediate | E | Dois caminhos medidos |
| E26-Q-TRC-14 | Repetição idempotente após timeout | CC, SI, TADS, TGTI, TRC | advanced | A | Linha do tempo distribuída |
| E26-Q-TRC-15 | Balanceamento e verificação de saúde | CC, SI, TADS, TGTI, TRC | intermediate | C | Painel de réplicas |

Distribuição: uma `introductory`, três `intermediate` e uma `advanced`; gabaritos D/B/E/A/C. A posição das respostas decorre da unicidade, não de balanceamento artificial.

## 2. Correspondência normativa

| Curso | Referência própria | Objetos usados neste lote |
|---|---|---|
| CC | F06 — Portaria Inep 157/2026 | Art. 6º, XI — redes de computadores; XVII — sistemas distribuídos. |
| SI | F07 — Portaria Inep 168/2026 | Art. 6º, XI — redes de computadores e sistemas distribuídos. |
| TADS | F08 — Portaria Inep 169/2026 | Art. 6º, XVI — princípios de redes de computadores e sistemas distribuídos. |
| TGTI | F09 — Portaria Inep 171/2026 | Art. 6º, V — engenharia de software; VIII — gestão dos serviços de TI; XIII — redes de computadores. Q14 usa V/VIII; os demais usam VIII/XIII conforme o caso. |
| TRC | F10 — Portaria Inep 172/2026 | Art. 6º, I–IV — fundamentos, comunicação, modelos e TCP/IP; X — serviços; XIV–XVI — projeto, configuração e gerenciamento. Em Q14, a regra de aplicação é integralmente fornecida e analisada como comportamento de serviço. |

Os números acima pertencem sempre à portaria indicada na mesma linha. Em Q14, TRC é elegível pelo objeto “serviços de redes”, não apenas porque a operação trafega em rede; o item fornece toda a semântica da aplicação e não exige desenvolvimento do serviço.

## 3. Fontes técnicas compartilhadas

| Código | Papel | Referência e limite |
|---|---|---|
| T46 | `technical` | RFC 9293, *Transmission Control Protocol (TCP)*. Apoia entrega ordenada do fluxo e retransmissão; não sustenta “execução exatamente uma vez” de operação de negócio. |
| T47 | `technical` | RFC 768, *User Datagram Protocol*. Apoia o serviço de datagramas e seu baixo mecanismo de transporte; requisitos de perda aceitável são do cenário. |
| T48 | `technical` | RFC 4632, *Classless Inter-domain Routing (CIDR)*. Apoia notação de prefixos e divisão do espaço IPv4; o cálculo de hosts é fornecido no item. |
| T49 | `technical` | RFC 9110, seção 9.2.2, métodos idempotentes e repetição automática. Q14 usa uma chave idempotente da aplicação explicitamente definida, não presume que todo `POST` seja idempotente. |
| T50 | `technical` | Google SRE, *Site Reliability Engineering*, capítulos sobre balanceamento e tratamento de sobrecarga. Apoia o princípio operacional de retirar instância não saudável e distribuir carga; capacidades são fictícias. |

URLs: `https://www.rfc-editor.org/rfc/rfc9293`, `https://www.rfc-editor.org/rfc/rfc768`, `https://www.rfc-editor.org/rfc/rfc4632`, `https://www.rfc-editor.org/rfc/rfc9110` e `https://sre.google/sre-book/load-balancing-frontend/`. Cada item mantém exatamente uma fonte normativa principal: F10, por ser a classificação de origem; as demais portarias são `normative-complementary` conforme `courses`.

## 4. E26-Q-TRC-11 — Dois fluxos, duas prioridades

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [CC, SI, TADS, TGTI, TRC]`; área “Protocolos de transporte”; `introductory`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar TCP ou UDP a partir de requisitos declarados. Fontes: F10 principal; F06/F07/F08/F09 normativas complementares; T46/T47 técnicas.

### Fluxos apresentados

| Fluxo | Requisito da aplicação |
|---|---|
| **F1 — posição no mapa** | envia atualização a cada segundo; uma amostra atrasada perde valor; perda ocasional é tolerada; a aplicação numera as amostras |
| **F2 — arquivo de configuração** | todos os bytes precisam chegar íntegros e na ordem; atraso por retransmissão é aceitável; a aplicação valida e aplica o arquivo uma única vez |

Descrição equivalente: F1 prioriza dados recentes e tolera perda; F2 exige fluxo completo e ordenado. A aplicação continua responsável por validar conteúdo e evitar reaplicar uma operação.

**Enunciado.** Qual escolha de transporte se ajusta diretamente aos requisitos?

- **A.** TCP para F1 e UDP para F2, porque UDP retransmite automaticamente todos os bytes ausentes.
- **B.** UDP para ambos, pois numeração de amostras garante por si só entrega completa do arquivo.
- **C.** TCP para ambos, porque nenhuma aplicação pode tolerar perda de amostra antiga.
- **D.** UDP para F1 e TCP para F2, mantendo a validação e a aplicação única no nível da aplicação.
- **E.** Escolher somente pelo número da porta, independentemente de perda, ordem e atualidade.

**Gabarito: D.** Datagramas atendem ao fluxo que valoriza atualização recente e tolera perda. O fluxo confiável e ordenado do TCP atende à transferência do arquivo. A alternativa não atribui ao TCP garantia de executar uma operação de negócio uma única vez.

| Alternativa | Feedback |
|---|---|
| A | UDP não retransmite automaticamente os bytes ausentes; a associação está invertida. |
| B | Numerar amostras permite detectar ordem ou perda, mas não recupera sozinho um arquivo incompleto. |
| C | F1 declara que uma amostra antiga pode ser descartada e que perda ocasional é tolerada. |
| D | Correta: relaciona transporte aos requisitos e preserva responsabilidades da aplicação. |
| E | Porta identifica um ponto de comunicação, mas não substitui os requisitos de transporte. |

**Revisão independente:** somente D satisfaz simultaneamente os dois fluxos. O item não afirma que UDP é sempre mais rápido nem que TCP garante exatamente uma execução. É distinto de TRC-01, que avalia resolução DNS antes da conexão.

## 5. E26-Q-TRC-12 — Espaço suficiente sem desperdiçar a rede

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [CC, SI, TADS, TGTI, TRC]`; área “Endereçamento IPv4 e sub-redes”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: escolher o menor prefixo que comporte a quantidade declarada de interfaces. Fontes: F10 principal; F06/F07/F08/F09 normativas complementares; T48 técnica.

### Cartão de planejamento

Um laboratório precisa endereçar 50 dispositivos e uma interface de gateway: **51 interfaces IPv4**. Para este exercício tradicional, os endereços de rede e broadcast não são atribuídos a interfaces.

```text
endereços utilizáveis = 2^(32 − prefixo) − 2

/28 → 14     /27 → 30     /26 → 62     /25 → 126     /24 → 254
```

Descrição equivalente: a equipe deve escolher, entre os cinco prefixos fornecidos, a menor sub-rede que tenha pelo menos 51 endereços utilizáveis. Não há crescimento futuro neste caso.

**Enunciado.** Qual prefixo atende à necessidade com o menor espaço excedente?

- **A.** `/27`, porque 30 endereços comportam 51 interfaces quando o gateway compartilha o endereço de um dispositivo.
- **B.** `/26`, porque oferece 62 endereços utilizáveis e é o menor bloco apresentado que comporta 51.
- **C.** `/25`, porque qualquer rede com mais de 32 interfaces exige obrigatoriamente 126 endereços utilizáveis.
- **D.** `/28`, porque o número 28 é maior que 26 e, portanto, produz mais endereços.
- **E.** `/24`, porque somente esse prefixo permite usar gateway em IPv4.

**Gabarito: B.** `/27` oferece apenas 30 endereços utilizáveis. `/26` oferece 62, suficientes para as 51 interfaces, e ocupa menos espaço que `/25` ou `/24` nas condições fornecidas.

| Alternativa | Feedback |
|---|---|
| A | O gateway também precisa de endereço; 30 é menor que 51. |
| B | Correta: 62 atende à demanda e é a menor capacidade suficiente da lista. |
| C | `/25` funciona, mas reserva mais espaço que o necessário. |
| D | Prefixo maior deixa menos bits para hosts; a tabela informa apenas 14 endereços. |
| E | Gateway não exige prefixo `/24`; ele usa um endereço válido da sub-rede escolhida. |

**Revisão independente:** comparação das capacidades confirma B como única resposta. A fórmula e os resultados são fornecidos, portanto o item avalia aplicação e não memorização isolada. O cenário não generaliza a subtração de dois para todos os casos especiais de IPv4.

## 6. E26-Q-TRC-13 — O caminho mais curto não foi o mais rápido

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [CC, SI, TADS, TGTI, TRC]`; área “Desempenho de redes”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: combinar transmissão, fila, propagação e processamento na comparação de caminhos. Fontes: F10 principal; F06/F07/F08/F09 normativas complementares.

### Caminhos medidos

Um arquivo de **1 MB = 8 Mbit** é enviado sem concorrência adicional. Para o exercício:

```text
tempo de transmissão = tamanho em Mbit / taxa em Mbit/s
latência total = transmissão + fila + propagação + processamento
```

| Caminho | Taxa | Fila | Propagação | Processamento |
|---|---:|---:|---:|---:|
| A — fisicamente mais curto | 40 Mbit/s | 4 ms | 6 ms | 4 ms |
| B — fisicamente mais longo | 100 Mbit/s | 35 ms | 8 ms | 7 ms |

Descrição equivalente: A possui menor fila, propagação e processamento, mas menor taxa. B possui maior fila e percurso, porém taxa superior. Ignore cabeçalhos, perdas e retransmissões.

**Enunciado.** Qual conclusão resulta dos dados e da fórmula?

- **A.** A leva 4 ms, pois somente a fila conta como latência de rede.
- **B.** A é sempre melhor porque seu percurso físico é mais curto.
- **C.** Os caminhos empatam porque transportam o mesmo arquivo.
- **D.** B leva 65 ms, obtidos subtraindo a fila da taxa nominal.
- **E.** B é menor: cerca de 130 ms, contra aproximadamente 214 ms de A.

**Gabarito: E.** Em A, a transmissão leva `8/40 = 0,2 s = 200 ms`; o total é `200+4+6+4 = 214 ms`. Em B, a transmissão leva `8/100 = 80 ms`; o total é `80+35+8+7 = 130 ms`.

| Alternativa | Feedback |
|---|---|
| A | Fila é apenas um dos quatro componentes explicitados. |
| B | Distância física não compensa automaticamente a menor taxa de transmissão. |
| C | O tamanho é igual, mas taxa e demais atrasos são diferentes. |
| D | Taxa e tempo possuem unidades diferentes e não podem ser subtraídos dessa maneira. |
| E | Correta: converte a transmissão para milissegundos e soma todos os componentes. |

**Revisão independente:** os dois totais foram recalculados e E é a única alternativa compatível. O resultado vale para o modelo e a carga declarados; não afirma que o caminho B será sempre melhor.

## 7. E26-Q-TRC-14 — A resposta sumiu, o registro não

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [CC, SI, TADS, TGTI, TRC]`; área “Sistemas distribuídos e idempotência”; `advanced`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: selecionar uma política de repetição que evite duplicar efeito após timeout ambíguo. Fontes: F10 principal no recorte de serviços de redes; F06/F07/F08/F09 normativas complementares; T49 técnica.

### Linha do tempo apresentada

```text
t0 cliente envia: registrar(operação="op-784", valor=120)
t1 servidor grava op-784 e o resultado R51
t2 resposta R51 se perde; cliente recebe timeout
t3 cliente tenta novamente
```

Regra do serviço: `operação` possui restrição de unicidade. Ao receber um identificador já concluído com os mesmos dados, o servidor não executa novamente; devolve o resultado armazenado. Identificador repetido com dados diferentes é rejeitado.

**Enunciado.** Qual comportamento preserva o efeito único diante do timeout?

- **A.** Repetir com `op-784`; o servidor encontra R51, confere os dados e devolve o resultado sem nova gravação.
- **B.** Criar `op-785` para a repetição, pois um novo identificador permite reconhecer que se trata da mesma operação.
- **C.** Executar novamente antes de consultar o identificador, removendo duplicatas apenas no relatório mensal.
- **D.** Considerar todo timeout como falha anterior à gravação e informar ao usuário que nada aconteceu.
- **E.** Desativar a restrição de unicidade para que as duas tentativas possam terminar independentemente.

**Gabarito: A.** O timeout não revela se a primeira execução produziu efeito. Reutilizar a mesma chave permite ao servidor reconhecer a conclusão, validar os dados e devolver R51 sem repetir a gravação.

| Alternativa | Feedback |
|---|---|
| A | Correta: a mesma identidade conecta a repetição ao efeito já concluído. |
| B | Um novo identificador torna a tentativa indistinguível de uma nova operação. |
| C | Consultar depois do efeito permite justamente a duplicação que se deseja evitar. |
| D | A linha do tempo informa que a gravação ocorreu antes da perda da resposta. |
| E | Sem unicidade, ambas as tentativas podem produzir efeitos separados. |

**Revisão independente:** A é a única alternativa coerente com a linha do tempo e a regra declarada. O item não atribui a garantia ao TCP nem presume que qualquer método HTTP seja automaticamente idempotente. Para TRC, a demanda limita-se a analisar o comportamento observável do serviço; não exige implementar a aplicação.

## 8. E26-Q-TRC-15 — Uma réplica saiu da rodada

**Ficha editorial:** versão 1; `classification: TRC`; `courses: [CC, SI, TADS, TGTI, TRC]`; área “Serviços distribuídos e disponibilidade”; `intermediate`; `collectionId: enade-2026`; `validationStatus: under-ai-review`. Objetivo: combinar verificação de saúde, capacidade e distribuição de carga. Fontes: F10 principal; F06/F07/F08/F09 normativas complementares; T50 técnica.

### Painel de réplicas

Um balanceador distribui requisições somente entre instâncias consideradas saudáveis. Cada instância saudável suporta até 40 requisições por segundo nas condições do ensaio.

| Instância | Verificação de saúde | Capacidade ensaiada |
|---|---|---:|
| Instância A | falha: dependência obrigatória indisponível | 40 req/s quando saudável |
| Instância B | saudável | 40 req/s |
| Instância C | saudável | 40 req/s |

A demanda atual é 70 req/s. B e C não guardam sessão local e podem atender qualquer requisição. O balanceador consegue retirar A da rodada e dividir a carga entre B e C.

**Enunciado.** Qual decisão atende à demanda sem enviar tráfego à instância não saudável nem exceder a capacidade ensaiada?

- **A.** Enviar as 70 req/s para B e deixar C ociosa.
- **B.** Distribuir aproximadamente 24 req/s para cada uma das três instâncias, ignorando a falha de A.
- **C.** Retirar A da rodada e distribuir aproximadamente 35 req/s para B e 35 req/s para C.
- **D.** Manter A recebendo somente requisições novas e reservar B e C para repetições.
- **E.** Rejeitar toda a demanda, pois a perda de qualquer réplica torna obrigatoriamente o serviço indisponível.

**Gabarito: C.** B e C oferecem juntas 80 req/s de capacidade ensaiada. Dividir 70 em aproximadamente 35 para cada mantém ambas abaixo de 40 e evita encaminhar tráfego à instância cuja dependência falhou.

| Alternativa | Feedback |
|---|---|
| A | B receberia 70 req/s, acima de sua capacidade ensaiada de 40. |
| B | A falhou na verificação e não deve continuar na rodada. |
| C | Correta: usa apenas réplicas saudáveis e mantém 35 menor que 40 em cada uma. |
| D | Requisições novas também dependem do recurso que tornou A não saudável. |
| E | As duas réplicas saudáveis ainda possuem capacidade total suficiente para a demanda. |

**Revisão independente:** C é a única alternativa que satisfaz saúde e capacidade simultaneamente. O caso não afirma que toda verificação superficial garante correção, nem que 80 req/s seja capacidade universal. Difere de TRC-10, que dimensiona classes de tráfego após perda de enlace ativo/reserva; aqui há réplicas ativas e balanceamento de serviço.

## 9. Segunda passagem de revisão assistida por IA

| ID | Teste de unicidade | Acessibilidade e celular | Limitação | Estado |
|---|---|---|---|---|
| TRC-11 | Somente D associa perda tolerável a UDP e fluxo ordenado a TCP sem prometer efeito único. | Tabela de duas linhas e descrição linear. | Aplicações reais podem implementar confiabilidade sobre UDP; isso não é exigido pelo cenário. | `under-ai-review` |
| TRC-12 | 51 excede 30 e cabe em 62; B é o menor bloco suficiente. | Fórmula e capacidades são apresentadas em texto. | Casos especiais de prefixos IPv4 ficam fora do exercício. | `under-ai-review` |
| TRC-13 | A = 214 ms e B = 130 ms; somente E apresenta ambos corretamente. | Tabela pequena, fórmula e cálculo textual. | Cabeçalhos, perdas e variação são explicitamente excluídos. | `under-ai-review` |
| TRC-14 | A reutiliza a identidade já gravada; todas as demais duplicam, negam ou removem a proteção. | Linha do tempo possui marcadores textuais t0–t3. | A regra idempotente é do serviço fictício e precisa existir antes da repetição. | `under-ai-review` |
| TRC-15 | 35/35 usa apenas réplicas saudáveis e respeita 40 por instância; somente C. | Saúde é escrita por extenso, sem depender de cor ou ícone. | Verificação e capacidade são premissas do ensaio delimitado. | `under-ai-review` |

## 10. Auditoria editorial e originalidade interna

- Os IDs `E26-Q-TRC-11` a `E26-Q-TRC-15` estavam livres antes da autoria.
- Cada questão possui cinco alternativas, uma resposta fundamentada e feedback A–E.
- Todos os cinco cursos possuem evidência normativa própria nos itens em que aparecem; nenhum inciso é transportado de uma portaria para outra.
- TRC-11 não repete o DNS de TRC-01; TRC-12 não repete a rota de prefixo mais longo de TRC-04; TRC-13 trata de composição quantitativa de latência; TRC-14 trata do efeito ambíguo após timeout; TRC-15 trata de réplicas ativas, e não do enlace reserva de TRC-10.
- Tabelas, linha do tempo e painel possuem descrições equivalentes. Nenhuma resposta depende exclusivamente de cor, som, posição ou animação.
- Nenhum texto apresentado ao jogador utiliza o nome da avaliação externa. A referência normativa permanece apenas na documentação editorial.
- Permanecem pendentes: cotejo externo amplo, revisão humana especializada, PPCs, calibração com estudantes e homologação de acessibilidade.

## 11. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Elegibilidade por curso | Clareza no celular | Acessibilidade humana | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-TRC-11 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TRC-12 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TRC-13 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TRC-14 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-TRC-15 | pendente | pendente | pendente | pendente | pendente | — |

Próxima etapa recomendada: criar o lote compartilhado 03 sobre projetos, pessoas e responsabilidade, mantendo a mesma separação entre classificação de origem e elegibilidade comprovada. A conversão e a integração continuam adiadas até a auditoria conjunta dos novos lotes.
