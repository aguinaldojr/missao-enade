# Puzzle complementar de C para SI

Ampliação experimental de 17/11/2026. Este item não substitui nenhum dos 66 desafios originais.

## 1. E26-P-SI-02 — Montar o classificador de prioridade

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-SI-02 |
| Contrato / kind | sequence |
| Título / title | Montar o classificador de prioridade |
| collectionId | enade-2026 |
| pedagogicalOrigin | Exercício autoral complementar de programação em C para N9 — Jornada Digital, em revisão editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Programação aplicada a processos de SI |
| Rastreabilidade | EXP-SI-C01 — ampliação autoral posterior ao plano original de 66 desafios |
| difficulty | introductory |
| Objetivo pedagógico | Organizar validação, cálculo e decisões em C para implementar uma regra de negócio testável. |
| source.type / year / documentId | authorial / 2026 / N9-C-SI-01 |
| source.description | Código e casos de teste fictícios criados para o jogo; não derivados de prova, biblioteca ou sistema real. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Interpretar dependências sintáticas e semânticas entre trechos de uma função em C.
- Aplicar validação de entradas e decisões ordenadas para implementar uma regra de prioridade.

### Narrativa ao jogador

O service desk fictício da Base N9 precisa classificar chamados usando dois valores inteiros: impacto e urgência. Cada valor válido vai de 1 a 3. A função deve retornar -1 quando qualquer entrada estiver fora desse intervalo. Para entradas válidas, a pontuação é impacto multiplicado por urgência: pontuação a partir de 6 retorna prioridade 3; pontuação a partir de 3 retorna prioridade 2; as demais retornam prioridade 1.

Os cinco cartões formam uma única função em C17. Organize-os para que as chaves fiquem balanceadas, nenhuma variável seja usada antes da declaração, entradas inválidas sejam rejeitadas antes do cálculo e a faixa mais alta seja examinada antes da intermediária. O programa será conferido com estes casos: (3,3) → 3; (2,3) → 3; (2,2) → 2; (1,3) → 2; (1,1) → 1; (0,2) → -1; (2,4) → -1.

Não é necessário escrever código novo: todos os trechos devem ser usados exatamente uma vez. Os valores e a regra são fictícios e não representam uma política real de atendimento.

### Blocos

Os cartões estão documentados fora da ordem correta. `\n` indica quebra de linha preservada na apresentação.

| ID do bloco | Texto |
|---|---|
| aplicar-faixas | if (pontuacao >= 6) return 3;\nif (pontuacao >= 3) return 2; |
| fechar-funcao | return 1;\n} |
| abrir-funcao | int classificar_prioridade(int impacto, int urgencia) { |
| calcular-pontuacao | int pontuacao = impacto * urgencia; |
| validar-entradas | if (impacto < 1) return -1;\nif (impacto > 3) return -1;\nif (urgencia < 1) return -1;\nif (urgencia > 3) return -1; |

### Ordem correta e justificativa

**correctOrder:** abrir-funcao → validar-entradas → calcular-pontuacao → aplicar-faixas → fechar-funcao.

| Dependência | Justificativa |
|---|---|
| abrir-funcao antes dos demais | Os comandos precisam estar dentro do corpo da função. |
| validar-entradas antes de calcular-pontuacao | A função deve encerrar com -1 antes de multiplicar valores fora do domínio declarado. |
| calcular-pontuacao antes de aplicar-faixas | As condições usam a variável `pontuacao`. |
| aplicar-faixas antes de fechar-funcao | Os retornos 3 e 2 precisam ser avaliados antes do retorno padrão 1 e da chave final. |

A faixa `>= 6` deve preceder `>= 3`, pois toda pontuação alta também satisfaz a condição intermediária. Os dois testes permanecem no mesmo cartão para não criar uma segunda solução por troca de comandos equivalentes.

### Dicas progressivas

1. Localize primeiro o trecho que abre o corpo da função e o que contém a chave final.
2. A variável `pontuacao` precisa existir antes das condições que a consultam, mas entradas inválidas devem sair antes dessa multiplicação.
3. Se a condição `pontuacao >= 3` vier antes da condição `pontuacao >= 6`, qual prioridade será devolvida para a pontuação 9?

### Explicação final

A função abre seu corpo, rejeita impacto ou urgência fora de 1 a 3 e só então calcula a pontuação. As faixas são testadas da maior para a menor: pontuações 6 a 9 retornam 3; pontuações 3 a 4 retornam 2; pontuações 1 ou 2 chegam ao retorno padrão 1. O último cartão também fecha a chave da função. Essa ordem compõe um fonte C17 completo para os casos declarados.

### Recompensa e desbloqueio

- **reward.xp:** 100, concedidos uma única vez para este ID.
- **unlocks.mapId:** base-n9; **unlocks.objectId:** door.

### Revisão assistida e limitações

- As 120 permutações dos cinco cartões devem produzir uma única ordem aceita pelo domínio.
- O fonte montado deve coincidir exatamente com a versão de referência testada.
- Os sete casos declarados cobrem as três prioridades e entradas inválidas abaixo/acima do intervalo.
- GCC, Clang e MSVC não estavam disponíveis no ambiente local desta entrega; compilação nativa permanece pendente e não deve ser declarada como executada.
- O conteúdo permanece `under-ai-review`; piloto com estudantes e homologação humana de acessibilidade continuam pendentes.
