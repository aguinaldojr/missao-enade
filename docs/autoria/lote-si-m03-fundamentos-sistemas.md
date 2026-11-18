# N9 — Jornada Digital: lote SI-M03 — Fundamentos de sistemas

Autoria documental assistida por IA — 17/11/2026. Este lote cria seis candidatas inéditas para os slots de `SI-M03 — Fundamentos de SI e teoria geral de sistemas`. Não gera JSON, não integra conteúdo ao jogo e não altera questões executáveis.

## 1. Escopo, cotas e identidade dos slots

| Slot do planejamento | ID documental novo | Jornada | Dificuldade | Gabarito | Objeto principal |
|---|---|---|---|---|---|
| SI-A-M03-N01 | E26-Q-SI-11 | A | introductory | C | Mapa sociotécnico |
| SI-A-M03-N02 | E26-Q-SI-12 | A | intermediate | A | Painel de retroalimentação |
| SI-B-M03-N01 | E26-Q-SI-13 | B | introductory | E | Mapa de fronteira e log |
| SI-B-M03-N02 | E26-Q-SI-14 | B | intermediate | B | Minipainel antes/depois |
| SI-C-M03-N01 | E26-Q-SI-15 | C | intermediate | D | Cartão de sinais e regra |
| SI-C-M03-N02 | E26-Q-SI-16 | C | advanced | C | Ciclo causal e série temporal |

Distribuição: **2 introductory, 3 intermediate e 1 advanced**, conforme `docs/autoria/plano-revisao-si.md`. Os IDs são documentais e posteriores ao inventário original; só poderão entrar no catálogo após autorização específica, validação de schema e atualização controlada do plano de IDs.

### Fontes compartilhadas e limites

| Papel | Referência | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta o objeto de conhecimento “Fundamentos de sistemas de informação e teoria geral de sistemas” e a competência SI-I. Não fornece cenários, números ou gabaritos. |
| technical | NASA Systems Engineering Handbook, Rev. 2, NASA/SP-2016-6105 Rev2, especialmente fundamentos, fronteiras e gestão de interfaces | Apoia a leitura de sistema, fronteira, elementos internos/externos e interfaces. O manual é de engenharia de sistemas aeroespaciais; neste lote são usados apenas conceitos gerais, sem transportar processos da NASA para o ambiente universitário fictício. |
| authorial | Cenários, dados, diagramas e alternativas N9 | Todo caso é fictício e não representa operação real da universidade ou política institucional. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- NASA: `https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf`.
- A consulta técnica foi dirigida aos trechos de fundamentos, fronteiras e interfaces; não constitui leitura ou adoção integral do manual.
- Estado de todas as candidatas: `under-ai-review`.

## 2. E26-Q-SI-11 — O portal não trabalha sozinho

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-11 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M03-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Fundamentos de sistemas de informação e teoria geral de sistemas |
| Rastreabilidade | SI-M03 / SI-I; F07, art. 5º, I; art. 6º, VI |
| difficulty | introductory |
| Objetivo pedagógico | Reconhecer um sistema de informação como arranjo sociotécnico orientado a um propósito. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte de fundamentos de sistemas; cenário e resposta são fictícios, sem autoria ou chancela do Inep. |
| Complemento documental | T8 — NASA Systems Engineering Handbook, Rev. 2; fundamentos, fronteiras e interfaces usados somente como apoio conceitual geral. |
| Complemento documental URL | https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Relacionar pessoas, processos, dados e tecnologia ao propósito de uma solução de informação.

### Objeto visual proposto — mapa sociotécnico

```text
ESTUDANTE ── envia solicitação ──> PORTAL ── cria registro ──> FILA DA EQUIPE
    ^                                  │                           │
    └──── precisa compreender o estado ┴── planilha paralela <────┘
```

**Descrição equivalente:** estudante envia solicitação ao portal; o portal cria um registro para a equipe. A equipe também usa uma planilha paralela, e o estudante não compreende os estados mostrados pelo portal.

### Texto ao jogador

**Contexto.** A Base N9 lançou um portal fictício de apoio estudantil. O envio funciona e cada pedido recebe protocolo. Entretanto, a equipe continua distribuindo trabalho por uma planilha paralela, duas pessoas podem assumir o mesmo pedido e estudantes telefonam porque não entendem os estados “recebido” e “em análise”. O servidor permanece estável.

**Enunciado.** Qual ação trata o problema como um sistema de informação orientado ao propósito de concluir pedidos com clareza?

- **A.** Aumentar a memória do servidor, pois todo problema do portal deve ser resolvido pela infraestrutura.
- **B.** Acrescentar mais campos obrigatórios ao formulário, sem mudar a distribuição do trabalho ou os estados.
- **C.** Alinhar portal, dados, responsabilidades da equipe e significado dos estados, eliminando o controle paralelo necessário ao mesmo fluxo.
- **D.** Automatizar todas as decisões e impedir que a equipe analise situações excepcionais.
- **E.** Retirar o acompanhamento do estudante e manter somente o número do protocolo.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** O caso não apresenta falta de capacidade do servidor. O propósito depende da combinação entre tecnologia, informação, pessoas e processo. C atua justamente nas relações que produzem duplicidade e falta de compreensão, sem supor que toda decisão deva ser automática.

| Alternativa | Feedback |
|---|---|
| A | Estabilidade e ausência de evidência de saturação não sustentam uma ampliação de memória como resposta ao problema observado. |
| B | Mais campos podem aumentar trabalho, mas não resolvem a planilha paralela, a responsabilidade duplicada nem o significado dos estados. |
| C | Correta: integra os componentes sociotécnicos ao propósito e trata as relações que aparecem no mapa. |
| D | Exceções ainda exigem análise; retirar pessoas do sistema não decorre das evidências apresentadas. |
| E | Ocultar o estado reduz informação para o estudante e não corrige o fluxo interno. |

**Atratividade e acessibilidade:** o mapa pode ser renderizado como diagrama DOM com quatro nós e setas rotuladas; a descrição linear conserva todas as relações. Não depende de cor.

## 3. E26-Q-SI-12 — A previsão precisa voltar para o sistema

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-12 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M03-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Fundamentos de sistemas de informação e teoria geral de sistemas |
| Rastreabilidade | SI-M03 / SI-I; F07, art. 5º, I; art. 6º, VI |
| difficulty | intermediate |
| Objetivo pedagógico | Identificar retroalimentação que modifica uma decisão futura com base no resultado observado. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte de fundamentos de sistemas; cenário e resposta são fictícios, sem autoria ou chancela do Inep. |
| Complemento documental | T8 — NASA Systems Engineering Handbook, Rev. 2; fundamentos, fronteiras e interfaces usados somente como apoio conceitual geral. |
| Complemento documental URL | https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Distinguir registro, saída e retroalimentação em um sistema informacional.

### Objeto visual proposto — painel de reserva

| Semana | Reservas previstas | Presenças observadas | Regra usada na semana seguinte |
|---|---:|---:|---|
| 1 | 40 | 24 | manter 40 vagas |
| 2 | 40 | 22 | manter 40 vagas |
| 3 | 40 | 25 | manter 40 vagas |

Um indicador no painel informa: **“Os resultados são armazenados, mas a regra nunca consulta o histórico.”**

### Texto ao jogador

**Contexto.** Um laboratório fictício abre quarenta reservas semanais. O sistema registra reservas e presenças, mas repete a mesma configuração sem utilizar os resultados. A equipe quer introduzir retroalimentação sem cancelar vagas automaticamente nem punir ausências.

**Enunciado.** Qual mudança fecha um ciclo de informação adequado ao objetivo?

- **A.** Comparar previsão e presença, apresentar a diferença à equipe e usar critérios explícitos para decidir a configuração da semana seguinte.
- **B.** Guardar as presenças em outro arquivo, mantendo a regra isolada desse histórico.
- **C.** Enviar mais confirmações de reserva, sem observar se alteraram presenças ou cancelamentos.
- **D.** Exibir somente o total de quarenta vagas, ocultando previsão e resultado.
- **E.** Reduzir automaticamente para 24 vagas porque esse foi o resultado da primeira semana.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** Retroalimentação exige que o resultado observado retorne ao processo decisório. A mantém responsabilidade humana, critérios explícitos e observação continuada; não transforma três semanas em regra definitiva.

| Alternativa | Feedback |
|---|---|
| A | Correta: o resultado volta à decisão futura com critérios e acompanhamento. |
| B | Armazenar é necessário, mas um arquivo que não influencia análise ou decisão não fecha o ciclo. |
| C | A ação adiciona comunicação, porém não define comparação de efeito nem uso do resultado. |
| D | Ocultar a diferença elimina justamente a informação necessária à retroalimentação. |
| E | Uma observação isolada não justifica fixar capacidade em 24 nem automatizar a decisão. |

**Atratividade e acessibilidade:** tabela compacta, indicador textual e destaque por ícone acompanhado da frase; cabe no celular com rolagem horizontal focalizável.

## 4. E26-Q-SI-13 — Onde termina o sistema da equipe?

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-13 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M03-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Fundamentos de sistemas de informação e teoria geral de sistemas |
| Rastreabilidade | SI-M03 / SI-I; F07, art. 5º, I; art. 6º, VI |
| difficulty | introductory |
| Objetivo pedagógico | Delimitar fronteira, elementos externos e evidências de uma interface. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte de fundamentos de sistemas; cenário e resposta são fictícios, sem autoria ou chancela do Inep. |
| Complemento documental | T8 — NASA Systems Engineering Handbook, Rev. 2; fundamentos, fronteiras e interfaces usados somente como apoio conceitual geral. |
| Complemento documental URL | https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Diferenciar elementos controlados pela equipe de influências externas conectadas por uma interface.

### Objetos propostos — mapa e log

```text
[CONTROLADO PELA EQUIPE]
Portal de bolsas ── solicitação com requestId ──┐
                                               │ interface
[EXTERNO]                                      v
Serviço financeiro <── resposta com requestId e estado
```

```text
10:03 requestId=R81 envio=1 resposta=timeout
10:04 requestId=R81 envio=2 resposta=aceito
10:05 requestId=R92 envio=1 resposta=aceito
```

**Descrição equivalente:** o portal é controlado pela equipe; o serviço financeiro é externo. Eles trocam solicitação e resposta identificadas por `requestId`. R81 teve timeout e reenvio aceito; R92 foi aceito no primeiro envio.

### Texto ao jogador

**Contexto.** O portal de bolsas da Base N9 chama um serviço financeiro externo. Após um timeout, o portal reenviou R81. A equipe controla o portal e sua política de reenvio, mas não controla o processamento interno do serviço financeiro.

**Enunciado.** Qual investigação respeita essa fronteira e produz evidência útil antes de atribuir a falha?

- **A.** Declarar que o banco interno está defeituoso, embora o log não mostre operação de banco.
- **B.** Considerar o serviço externo parte totalmente controlada pela equipe e alterar sua implementação diretamente.
- **C.** Desativar os identificadores das solicitações para que os dois sistemas fiquem menos dependentes.
- **D.** Ignorar o timeout, pois eventos externos não pertencem à análise de um sistema de informação.
- **E.** Correlacionar pedidos e respostas pelo `requestId`, verificar a política interna de reenvio e confrontar o comportamento observado com o contrato da interface externa.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** Delimitar a fronteira não significa ignorar o ambiente. A equipe investiga aquilo que controla e usa contrato e evidências da interface para analisar a interação com o elemento externo, sem alegar acesso ao processamento interno dele.

| Alternativa | Feedback |
|---|---|
| A | O log não apresenta evidência de banco; a conclusão escolhe uma causa sem ligação com os registros. |
| B | O mapa declara o serviço como externo e fora do controle direto da equipe. |
| C | Retirar correlação reduz a capacidade de distinguir envio, reenvio e resposta. |
| D | Elementos externos podem influenciar e ser influenciados pelo sistema por meio das interfaces. |
| E | Correta: combina fronteira de controle, contrato e rastreabilidade dos eventos. |

**Atratividade e acessibilidade:** o mapa de fronteira usa rótulos “controlado” e “externo”, não cor; o log é texto real, curto e não executado.

## 5. E26-Q-SI-14 — Dois minutos no quiosque, quatorze no percurso

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-14 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M03-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Fundamentos de sistemas de informação e teoria geral de sistemas |
| Rastreabilidade | SI-M03 / SI-I; F07, art. 5º, I; art. 6º, VI |
| difficulty | intermediate |
| Objetivo pedagógico | Distinguir melhoria local de desempenho do sistema completo. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte de fundamentos de sistemas; cenário e resposta são fictícios, sem autoria ou chancela do Inep. |
| Complemento documental | T8 — NASA Systems Engineering Handbook, Rev. 2; fundamentos, fronteiras e interfaces usados somente como apoio conceitual geral. |
| Complemento documental URL | https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Avaliar efeitos de uma mudança nas relações entre subsistemas e no propósito global.

### Objeto visual proposto — minipainel antes/depois

| Indicador | Antes | Depois |
|---|---:|---:|
| Tempo no quiosque | 4 min | 2 min |
| Casos enviados ao balcão | 12% | 35% |
| Casos que chegam ao balcão com contexto completo | 90% | 40% |
| Tempo total até concluir o empréstimo | 9 min | 14 min |

### Texto ao jogador

**Contexto.** Uma biblioteca fictícia simplificou seu quiosque de empréstimo. A etapa no quiosque ficou mais rápida, mas mais casos passaram ao balcão e muitos chegaram sem o motivo da exceção. O objetivo do sistema é concluir o empréstimo, não apenas liberar o quiosque.

**Enunciado.** Qual interpretação e próxima ação são sustentadas pelo painel?

- **A.** A mudança foi bem-sucedida porque o único indicador relevante caiu de quatro para dois minutos.
- **B.** Houve otimização local com piora do resultado global; é preciso medir o percurso completo e preservar o contexto na passagem ao balcão.
- **C.** O balcão deve ser removido, pois todo subsistema que recebe exceções reduz a eficiência.
- **D.** O aumento de quatorze minutos prova que o quiosque ficou tecnicamente mais lento.
- **E.** Deve-se manter o fluxo e ocultar o tempo total para evitar interpretações divergentes.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** O quiosque melhorou isoladamente, mas transferiu trabalho e perdeu informação na interface. B usa o propósito global e propõe observar e corrigir a relação entre os subsistemas.

| Alternativa | Feedback |
|---|---|
| A | O objetivo declarado é concluir o empréstimo; o tempo total piorou mesmo com o quiosque mais rápido. |
| B | Correta: distingue desempenho local do global e trata a interface que perdeu contexto. |
| C | Exceções continuam existindo; remover o balcão não resolve como serão analisadas. |
| D | O dado do quiosque caiu para dois minutos; a piora ocorreu no percurso completo. |
| E | Ocultar o indicador não melhora o sistema nem a qualidade da decisão. |

**Atratividade e acessibilidade:** o painel pode usar barras proporcionais acompanhadas dos quatro valores e cabeçalhos; a resposta nunca depende somente do comprimento ou da cor das barras.

## 6. E26-Q-SI-15 — Uma regra fixa em um ambiente que mudou

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-15 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M03-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Fundamentos de sistemas de informação e teoria geral de sistemas |
| Rastreabilidade | SI-M03 / SI-I; F07, art. 5º, I; art. 6º, VI |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar uma adaptação controlada diante de mudanças no ambiente do sistema. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte de fundamentos de sistemas; cenário e resposta são fictícios, sem autoria ou chancela do Inep. |
| Complemento documental | T8 — NASA Systems Engineering Handbook, Rev. 2; fundamentos, fronteiras e interfaces usados somente como apoio conceitual geral. |
| Complemento documental URL | https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Reconhecer um sistema aberto e planejar adaptação com sinais, responsabilidade e observação de resultados.

### Objetos propostos — sinais do ambiente e cartão da regra atual

| Sinal recebido | Situação atual |
|---|---|
| Oferta de turmas | muda a cada período |
| Capacidade das salas | atualizada pela infraestrutura |
| Solicitações de acessibilidade | analisadas individualmente |
| Regra do sistema | copiada do período anterior |

```text
REGRA ATUAL
se procura_anterior > 30: abrir_lista_extra()
fonte usada: somente o período anterior
```

O trecho é pseudocódigo explicativo e não será executado.

### Texto ao jogador

**Contexto.** Um sistema fictício recomenda abertura de listas adicionais de matrícula usando apenas a procura do período anterior. Neste período mudaram oferta de turmas, capacidade física e solicitações de acessibilidade. A coordenação continua responsável pela decisão final.

**Enunciado.** Qual evolução é coerente com um sistema aberto e adaptável, sem entregar uma decisão institucional a uma regra automática?

- **A.** Ignorar os sinais externos para manter sempre o mesmo comportamento.
- **B.** Abrir listas automaticamente para toda procura acima de trinta, sem registrar capacidade ou decisão.
- **C.** Usar somente a capacidade das salas e descartar procura e solicitações de acessibilidade.
- **D.** Integrar sinais definidos, mostrar origem e limites dos dados, apoiar a decisão da coordenação e acompanhar os resultados para revisar a regra.
- **E.** Substituir a regra por uma escolha aleatória, evitando influência do período anterior.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** Um sistema aberto troca informações com o ambiente. Adaptar-se não exige autonomia irrestrita: D combina sinais relevantes, transparência, responsabilidade e observação posterior.

| Alternativa | Feedback |
|---|---|
| A | Uma regra isolada do ambiente não responde às mudanças explicitadas. |
| B | Automatizar sem capacidade, rastreabilidade ou responsabilidade pode produzir decisão inviável. |
| C | Um único sinal não representa as restrições e necessidades descritas. |
| D | Correta: usa intercâmbio com o ambiente e mantém decisão e revisão controladas. |
| E | Aleatoriedade não constitui adaptação fundamentada aos sinais disponíveis. |

**Atratividade e acessibilidade:** tabela e pseudocódigo possuem títulos e equivalente textual; a sintaxe não é pré-requisito para responder.

## 7. E26-Q-SI-16 — O lembrete que aumenta a própria fila

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-16 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M03-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Fundamentos de sistemas de informação e teoria geral de sistemas |
| Rastreabilidade | SI-M03 / SI-I; F07, art. 5º, I; art. 6º, VI |
| difficulty | advanced |
| Objetivo pedagógico | Analisar um ciclo de retroalimentação com atraso e escolher uma intervenção verificável. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI para criação autoral no recorte de fundamentos de sistemas; cenário e resposta são fictícios, sem autoria ou chancela do Inep. |
| Complemento documental | T8 — NASA Systems Engineering Handbook, Rev. 2; fundamentos, fronteiras e interfaces usados somente como apoio conceitual geral. |
| Complemento documental URL | https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Integrar relações entre atraso, comportamento de pessoas, duplicação de informação e capacidade operacional.

### Objetos propostos — ciclo e série temporal

```text
atraso sem estado visível
        │ aumenta
        v
reenvios duplicados ──> tamanho da fila ──> tempo de resposta
        ^                                      │
        └──────── mais lembretes <─────────────┘
```

**Descrição equivalente:** maior atraso sem estado visível leva a reenvios; reenvios ampliam a fila; fila maior eleva o tempo de resposta; a demora dispara mais lembretes, reforçando o ciclo.

| Semana | Lembretes por solicitação | Reenvios duplicados | Fila ao final | Mediana de resposta |
|---|---:|---:|---:|---:|
| 1 | 1 | 20 | 80 | 2 dias |
| 2 | 3 | 55 | 140 | 4 dias |
| 3 | 5 | 110 | 260 | 8 dias |

Premissa do caso: quando o estado não muda por 48 horas, parte das pessoas reenvia o mesmo documento; cada reenvio abre uma nova análise.

### Texto ao jogador

**Contexto.** A Base N9 simulou o fluxo acima. O painel mostra associação crescente e a premissa explica como um reenvio entra novamente na fila. A equipe quer testar uma intervenção sem apagar documentos nem concluir que todo atraso possui uma única causa.

**Enunciado.** Qual experimento ataca o ciclo descrito e permite verificar o efeito?

- **A.** Aumentar os lembretes para dez por solicitação e medir somente quantas mensagens foram enviadas.
- **B.** Criar um segundo canal que também abra uma nova análise para cada reenvio.
- **C.** Mostrar um estado rastreável, vincular reenvios ao protocolo existente e comparar duplicações, fila e tempo de resposta antes e depois.
- **D.** Excluir automaticamente documentos repetidos sem verificar protocolo, conteúdo ou confirmação de recebimento.
- **E.** Retirar o painel da equipe para que o crescimento da fila não influencie decisões futuras.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** A intervenção reduz a incerteza que dispara reenvios e impede que uma atualização do mesmo caso crie trabalho independente. Medir duplicações, fila e tempo permite avaliar o efeito global. Isso não prova que todos os atrasos tenham a mesma causa.

| Alternativa | Feedback |
|---|---|
| A | Mais lembretes intensificam a relação descrita e contar mensagens não mede o propósito do sistema. |
| B | O segundo canal mantém a criação de trabalho duplicado e pode ampliar o ciclo. |
| C | Correta: atua em dois elos declarados e mede resultados do sistema antes e depois. |
| D | Sem correlação segura, a exclusão pode remover evidência legítima e não oferece confirmação à pessoa. |
| E | Ocultar a fila reduz a capacidade de acompanhar e revisar a intervenção. |

**Atratividade e acessibilidade:** o ciclo usa setas rotuladas e possui descrição linear; a tabela fornece todos os números. Em celular, diagrama e tabela devem aparecer em blocos separados com rolagem focalizável.

## 8. Segunda passagem independente de revisão assistida por IA

A segunda passagem resolveu cada item sem usar a letra indicada como premissa e confrontou comando, evidências, alternativas e explicação.

| ID | Resolução independente | Verificações e ajuste editorial | Decisão |
|---|---|---|---|
| SI-11 | O problema está nas relações entre portal, dados, equipe e estados; C é a única opção que trata todas. | Evitou “treinar a equipe” como distrator parcialmente correto e declarou estabilidade do servidor. | manter `under-ai-review` |
| SI-12 | Somente A devolve resultados ao processo de decisão futura. | Separou armazenamento, comunicação e feedback; E foi delimitada como automatização por amostra isolada. | manter `under-ai-review` |
| SI-13 | E investiga o controlável e a interface sem alegar domínio sobre o serviço externo. | Incluiu fronteira explícita, `requestId` e log mínimo; nenhuma opção exige conhecer protocolo oculto. | manter `under-ai-review` |
| SI-14 | B compara finalidade global, transferência de trabalho e perda de contexto. | Acrescentou tempo total e completude do contexto para impedir inferência baseada apenas no quiosque. | manter `under-ai-review` |
| SI-15 | D usa sinais do ambiente com responsabilidade e revisão. | Marcou o trecho como pseudocódigo e tornou a sintaxe dispensável; evitou autonomia institucional indevida. | manter `under-ai-review` |
| SI-16 | C rompe duplicação e incerteza, medindo três resultados sistêmicos. | Tornou explícito o mecanismo de reenvio, mas preservou o limite causal sobre outros atrasos. | manter `under-ai-review` |

### Auditoria do lote

- Seis IDs documentais distintos; nenhum coincide com os 60 IDs executáveis atuais.
- Seis questões, cinco alternativas por questão e exatamente um gabarito defendido por suas premissas.
- Distribuição de gabaritos: A=1, B=1, C=2, D=1, E=1; sequência C/A/E/B/D/C, sem ciclo alfabético.
- Distribuição de dificuldade confirmada: 2 introductory, 3 intermediate e 1 advanced.
- Todos os cenários, números, logs e regras são fictícios e explicitamente delimitados.
- Objetos variados: três diagramas, quatro tabelas, um log e um pseudocódigo; nenhum objeto depende exclusivamente de cor ou substitui premissa textual.
- Nenhum código é apresentado como executável; o log e o pseudocódigo são artefatos de leitura.
- Não há referência visível à origem pedagógica interna nos textos destinados ao jogador.
- Triagem interna: os núcleos decisórios não repetem SI-01–10. Há proximidade temática inevitável com processos e arquitetura, mas os novos itens avaliam propriedades sistêmicas distintas: propósito sociotécnico, feedback, fronteira, totalidade, abertura e ciclo com atraso.
- Cotejo externo independente de originalidade, teste com estudantes, validação humana com leitor de tela, PPC e calibração de dificuldade permanecem pendentes.
- Nenhum item foi promovido a `ready-for-pilot` ou `ready-for-release`.

## 9. Preparação para integração futura

Se houver autorização posterior:

1. consolidar os IDs no plano geral da coleção;
2. representar mapas e ciclos com bloco `diagram`, tabelas com `table` e log/pseudocódigo com `code` somente para apresentação;
3. validar descrições equivalentes, foco, rolagem e zoom de 200%;
4. converter as seis fichas ao contrato `Question`, mantendo exatamente uma fonte `primary` e a NASA como `technical`;
5. executar schema, testes de conteúdo, unicidade de gabarito e navegador;
6. manter as candidatas fora do seletor até decisão explícita da pessoa responsável pelo projeto.
