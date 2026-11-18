# N9 — Jornada Digital: lote SI-M02 — Algoritmos, estruturas de dados e programação

Autoria documental assistida por IA — 17/11/2026. Este lote cria três candidatas inéditas para os slots restantes de `SI-M02 — Algoritmos, estruturas de dados e programação`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-B-M02-N01 | E26-Q-SI-21 | B | intermediate | C | Python e eventos versionados |
| SI-B-M02-N02 | E26-Q-SI-22 | B | advanced | A | Heap, índice e atualizações |
| SI-C-M02-N01 | E26-Q-SI-23 | C | intermediate | D | C e compactação em vetor |

Com os candidatos compartilhados `E26-Q-CC-01` (introductory), `E26-Q-TADS-04` (intermediate) e `E26-Q-TADS-02` (introductory), a macroárea alcança o perfil planejado de **2 introductory, 3 intermediate e 1 advanced**. Esses compartilhamentos continuam documentais e dependem de rastreabilidade própria de SI antes de qualquer integração.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta as competências de SI e os objetos de algoritmos, estruturas de dados e programação. Não fornece código, casos ou gabaritos. |
| technical | Python 3 Standard Library — `dict` e `heapq` | Referência de comportamento da linguagem para SI-21 e SI-22; não é norma curricular. |
| technical | ISO/IEC 9899:2018, linguagem C, com sintaxe compatível com C17 | Referência de linguagem para SI-23. O texto normativo integral não foi consultado nesta etapa; não se atribui ao padrão o cenário autoral. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- Python `dict`: `https://docs.python.org/3/library/stdtypes.html#mapping-types-dict`.
- Python `heapq`: `https://docs.python.org/3/library/heapq.html`.
- O plano local não registra com segurança o inciso individual do art. 6º para algoritmos e programação. A numeração permanece pendente de reconferência antes da conversão executável.
- O computador atual não possui interpretador Python funcional nem GCC, Clang ou MSVC. A execução nativa deve ocorrer na etapa final; nesta autoria foram feitas simulações determinísticas dos casos.

## 2. E26-Q-SI-21 — Qual evento conta como o estado atual?

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-21 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M02-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Algoritmos, estruturas de dados e programação |
| Rastreabilidade | SI-M02 / SI-I e SI-II; F07, art. 5º, I–II; objeto de algoritmos/programação do art. 6º, inciso individual pendente de reconferência |
| difficulty | intermediate |
| Objetivo pedagógico | Completar um algoritmo que consolida eventos versionados sem depender da ordem de chegada. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; código, registros e respostas são autorais e fictícios. |
| Complemento documental | T10 — Python 3 Standard Library, tipo `dict`. |
| Complemento documental URL | https://docs.python.org/3/library/stdtypes.html#mapping-types-dict |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Aplicar estruturas de dados e comparação de versões para consolidar informação recebida fora de ordem.

### Objeto proposto — eventos e função Python 3

| Chegada | Protocolo | Versão | Estado |
|---:|---|---:|---|
| 1 | R1 | 1 | aberto |
| 2 | R2 | 2 | em análise |
| 3 | R1 | 3 | resolvido |
| 4 | R2 | 1 | aberto |
| 5 | R1 | 2 | em análise |

```python
def estados_atuais(eventos):
    atuais = {}
    for protocolo, versao, estado in eventos:
        # substituir CONDICAO
        if CONDICAO:
            atuais[protocolo] = (versao, estado)
    return {p: estado for p, (_, estado) in atuais.items()}
```

Requisito: para cada protocolo, conservar somente o evento de **maior versão**, mesmo que versões antigas cheguem depois. Para os dados da tabela, a saída esperada é `{'R1': 'resolvido', 'R2': 'em análise'}`.

### Texto ao jogador

**Enunciado.** Qual condição completa a função e satisfaz o requisito para qualquer ordem de chegada?

- **A.** `protocolo in atuais`
- **B.** `protocolo not in atuais and versao > atuais[protocolo][0]`
- **C.** `protocolo not in atuais or versao > atuais[protocolo][0]`
- **D.** `versao < atuais.get(protocolo, (0, ""))[0]`
- **E.** `estado != atuais.get(protocolo, (0, ""))[1]`

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** Um protocolo ainda ausente precisa ser inserido. Depois disso, somente uma versão maior pode substituir o registro. O operador `or` também evita acessar `atuais[protocolo]` quando a chave ainda não existe, devido à avaliação de curto-circuito do Python.

| Alternativa | Feedback |
|---|---|
| A | Atualiza apenas protocolos já existentes e ainda aceita qualquer versão posterior. |
| B | Quando a chave não existe, a segunda condição seria necessária, mas o `and` impede que os dois casos sejam atendidos pela mesma expressão. |
| C | Correta: insere a primeira ocorrência e substitui somente por versão maior. |
| D | Favorece versões menores e pode descartar o estado mais recente. |
| E | Um estado textual diferente não demonstra que a versão seja mais nova. |

**Atratividade e acessibilidade:** a interface futura pode animar os cinco cartões entrando fora de ordem e atualizar um painel por protocolo; tabela, código e saída permanecem disponíveis em texto.

## 3. E26-Q-SI-22 — A prioridade mudou, mas a entrada antiga ficou

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-22 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M02-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Algoritmos, estruturas de dados e programação |
| Rastreabilidade | SI-M02 / SI-I e SI-II; F07, art. 5º, I–II; objeto de algoritmos/estruturas de dados do art. 6º, inciso individual pendente de reconferência |
| difficulty | advanced |
| Objetivo pedagógico | Avaliar invariantes de uma fila de prioridade que admite atualização e cancelamento. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; algoritmo, eventos e respostas são autorais e fictícios. |
| Complemento documental | T11 — Python 3 Standard Library, módulo `heapq`, incluindo discussão de filas de prioridade. |
| Complemento documental URL | https://docs.python.org/3/library/heapq.html |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Analisar a cooperação entre heap e índice para preservar prioridade, atualização e cancelamento sem devolver entradas obsoletas.

### Objeto proposto — arquitetura da fila

```text
HEAP: entradas (-prioridade, ordem, id, versão)
ÍNDICE: id -> (prioridade atual, versão atual, ativo)

Ao atualizar: incrementar a versão no índice e inserir nova entrada no heap.
Ao cancelar: marcar ativo = falso no índice.
Ao retirar: remover do heap até encontrar uma entrada igual ao índice e ativa.
```

Eventos do caso:

| Ordem | Evento |
|---:|---|
| 1 | inserir R1 com prioridade 2, versão 1 |
| 2 | inserir R2 com prioridade 3, versão 1 |
| 3 | atualizar R1 para prioridade 5, versão 2 |
| 4 | cancelar R2 |

Após os eventos, o heap ainda pode conter as entradas antigas de R1 e R2. A retirada deve devolver R1 versão 2 e jamais devolver R2.

### Texto ao jogador

**Enunciado.** Por que a verificação contra o índice, feita durante a retirada, é necessária?

- **A.** Porque o heap ordena entradas, mas não remove automaticamente cópias antigas; versão e estado no índice permitem descartar entradas obsoletas ou canceladas.
- **B.** Porque um heap não consegue comparar números negativos e precisa do índice para descobrir a maior prioridade.
- **C.** Porque o índice reorganiza fisicamente todos os elementos do heap depois de cada atualização.
- **D.** Porque a ordem de inserção torna desnecessário comparar prioridade ou versão.
- **E.** Porque manter o índice garante que toda operação, inclusive procurar qualquer posição, tenha custo constante.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** Inserir uma nova versão é simples, mas não apaga a entrada anterior já presente no heap. A retirada preguiçosa compara a entrada removida com a versão e o estado atuais. Assim, descarta R2 cancelado e R1 versão 1 antes de aceitar R1 versão 2.

| Alternativa | Feedback |
|---|---|
| A | Correta: descreve a finalidade conjunta de versão, estado ativo e remoção preguiçosa. |
| B | Tuplas com números negativos são comparáveis; o sinal é justamente usado para simular prioridade máxima. |
| C | O índice não reordena o heap; a estrutura do heap é mantida pelas operações de inserção e remoção. |
| D | A ordem resolve apenas desempates definidos e não invalida prioridade, atualização ou cancelamento. |
| E | O índice acelera acesso por ID, mas não transforma todas as operações do heap em custo constante. |

**Atratividade e acessibilidade:** entradas antigas podem aparecer riscadas com o texto “versão obsoleta” ou “cancelada”; o estado também deve ser anunciado por texto e não apenas por cor ou animação.

## 4. E26-Q-SI-23 — Limpar inválidos sem perder a ordem

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-23 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M02-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Algoritmos, estruturas de dados e programação |
| Rastreabilidade | SI-M02 / SI-I e SI-II; F07, art. 5º, I–II; objeto de algoritmos/programação do art. 6º, inciso individual pendente de reconferência |
| difficulty | intermediate |
| Objetivo pedagógico | Completar um algoritmo C de compactação estável em vetor e interpretar seu contrato de saída. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; código, valores e respostas são autorais e fictícios. |
| Complemento documental | T12 — ISO/IEC 9899:2018; sintaxe compatível com C17. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Usar índices de leitura e escrita para transformar um vetor in-place, preservando ordem e repetições válidas.

### Objeto proposto — função C17 e caso de teste

```c
#include <stddef.h>

size_t compactar_validos(int dados[], size_t quantidade) {
    size_t escrita = 0;

    for (size_t leitura = 0; leitura < quantidade; leitura++) {
        if (dados[leitura] >= 0) {
            /* substituir LINHA */
        }
    }
    return escrita;
}
```

Contrato: números negativos são inválidos; valores válidos devem ocupar o início do mesmo vetor, na ordem original e sem remover repetições. O retorno informa quantas posições iniciais são válidas.

| Entrada | Retorno esperado | Início válido do vetor |
|---|---:|---|
| `{12, -1, 7, -3, 7}` | 3 | `{12, 7, 7}` |
| `{-1, -2}` | 0 | `{}` |
| `{4, 5}` | 2 | `{4, 5}` |

### Texto ao jogador

**Enunciado.** Qual linha completa a função de acordo com o contrato e os três casos?

- **A.** `dados[leitura++] = dados[escrita];`
- **B.** `dados[escrita] = dados[leitura];`
- **C.** `dados[escrita++] = dados[escrita];`
- **D.** `dados[escrita++] = dados[leitura];`
- **E.** `dados[escrita++] = leitura;`

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** `leitura` percorre todas as posições. Quando o valor é válido, ele é copiado para a próxima posição compactada e `escrita` avança. Como a escrita nunca ultrapassa a leitura, a transformação no próprio vetor é segura e mantém ordem e duplicatas.

| Alternativa | Feedback |
|---|---|
| A | Altera `leitura` dentro do corpo e copia no sentido errado, podendo saltar elementos. |
| B | Copia o valor, mas nunca avança a quantidade de posições válidas; o retorno permaneceria zero. |
| C | Usa a posição de destino também como origem e pode repetir um valor que ainda não corresponde ao item lido. |
| D | Correta: copia o item lido para o próximo destino e incrementa a contagem válida. |
| E | Grava o índice, não o valor contido no vetor. |

**Atratividade e acessibilidade:** uma animação futura pode mostrar dois cursores, “leitura” e “escrita”, sobre cartões numerados. Os cursores, valores e operações devem possuir rótulos textuais e controle de movimento reduzido.

## 5. Segunda passagem independente de revisão assistida por IA

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-21 | A condição precisa aceitar chave ausente ou versão maior; somente C satisfaz ambos e evita acesso inexistente por curto-circuito. | Simulados os cinco eventos e ordens alternativas com versões 1/3/2. Empate de versão conserva o primeiro evento, conforme comparação estrita. | manter `under-ai-review` |
| SI-22 | Após atualização e cancelamento, apenas a entrada R1/v2 coincide com índice ativo; A descreve essa invariável. | Não se afirma que a estratégia seja a única implementação possível nem que todas as operações sejam O(1). | manter `under-ai-review` |
| SI-23 | O traço produz escrita 0→1→2→3 e prefixo 12/7/7; somente D copia a origem correta e avança a saída. | Casos vazio lógico, todos inválidos, todos válidos e duplicata foram simulados. Compilação C nativa permanece pendente por ausência de compilador. | manter `under-ai-review` |

## 6. Auditoria rápida do lote

- Três IDs novos e distintos: `E26-Q-SI-21` a `E26-Q-SI-23`; nenhum aparece em outro lote.
- Três questões com cinco alternativas, feedback A–E e um único gabarito: C/A/D.
- Dificuldades: duas `intermediate` e uma `advanced`, exatamente a lacuna planejada de SI-M02.
- Os códigos usam Python 3 e C17 declarados; entradas, saídas e premissas necessárias estão no documento.
- Não há repetição do acumulador de CC-01, da remoção em lista de TADS-04 ou da colaboração entre objetos de TADS-02. Os novos núcleos são consolidação versionada, atualização preguiçosa de prioridade e compactação estável.
- Nenhum texto apresentado ao jogador contém a referência pedagógica interna reservada.
- Permanecem pendentes: execução nativa quando houver interpretador/compilador, reconferência do inciso normativo individual, cotejo externo, teste com estudantes e homologação humana de acessibilidade.
- Nenhum item foi convertido para JSON ou promovido para `ready-for-pilot`.

## 7. Preparação para etapa futura

Na integração final, os blocos de código deverão usar fonte monoespaçada, rolagem horizontal focalizável, botão de cópia opcional e descrição da entrada/saída. Os trechos deverão ser executados em testes automatizados fora do navegador; o jogo continuará apenas exibindo e avaliando alternativas, sem executar código fornecido pelo jogador.
