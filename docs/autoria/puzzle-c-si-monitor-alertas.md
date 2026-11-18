# Puzzle complementar de programa completo em C para SI

Ampliação experimental de 17/11/2026. Este item não substitui nenhum desafio existente.

## 1. E26-P-SI-03 — Montar o monitor de alertas

### Ficha editorial e metadados

| Campo | Valor |
|---|---|
| ID | E26-P-SI-03 |
| Contrato / kind | sequence |
| Título / title | Montar o monitor de alertas |
| collectionId | enade-2026 |
| pedagogicalOrigin | Exercício autoral complementar de programação em C para N9 — Jornada Digital, em revisão editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Programação aplicada a processos de SI |
| Rastreabilidade | EXP-SI-C02 — ampliação autoral posterior ao plano original de 66 desafios |
| difficulty | intermediate |
| Objetivo pedagógico | Organizar um programa C17 completo que percorre medições, toma uma decisão e atualiza um contador por ponteiro. |
| source.type / year / documentId | authorial / 2026 / N9-C-SI-02 |
| source.description | Código, medições e resultado fictícios criados para o jogo; não derivados de prova, biblioteca ou sistema real. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Relacionar biblioteca, protótipo, função principal, repetição, decisão e procedimento na estrutura de um programa em C.
- Interpretar passagem por referência com endereço e desreferenciação para atualizar uma variável do chamador.

### Narrativa ao jogador

O laboratório fictício da Base N9 registra cinco medições inteiras: 42, 78, 65, 91 e 55. Uma medição gera alerta quando é maior ou igual a 70. Monte um programa C17 completo que percorra o vetor, use uma decisão para identificar cada alerta e chame o procedimento de registro. O procedimento recebe o endereço do contador e altera a variável original por meio do ponteiro. Ao final, o programa deve exibir Alertas: 2.

Os cinco cartões devem ser usados exatamente uma vez. A solução precisa manter diretivas e protótipos fora das funções, declarações antes do uso, chaves balanceadas e a definição do procedimento depois de main. Não é necessário escrever código novo. As medições e o limite são fictícios e não representam um sistema real de monitoramento.

### Blocos

Os cartões estão documentados fora da ordem correta. `\n` indica quebra de linha preservada na apresentação.

| ID do bloco | Texto |
|---|---|
| finalizar-programa | printf("Alertas: %d\\n", alertas);\nreturn 0;\n}\n\nvoid registrar_alerta(int *contador) { |
| iniciar-repeticao | int medicoes[5] = {42, 78, 65, 91, 55};\nint alertas = 0;\nfor (int i = 0; i < 5; i++) { |
| atualizar-contador | (*contador)++;\n} |
| preparar-programa | #include <stdio.h>\n\nvoid registrar_alerta(int *contador);\n\nint main(void) { |
| decidir-alerta | if (medicoes[i] >= 70) {\nregistrar_alerta(&alertas);\n}\n} |

### Ordem correta e justificativa

**correctOrder:** preparar-programa → iniciar-repeticao → decidir-alerta → finalizar-programa → atualizar-contador.

| Dependência | Justificativa |
|---|---|
| preparar-programa antes dos demais | A biblioteca e o protótipo ficam no escopo global; o cartão também abre `main`. |
| iniciar-repeticao antes de decidir-alerta | O vetor, o contador e `i` precisam existir antes da condição que os consulta. |
| decidir-alerta antes de finalizar-programa | Esse cartão fecha a decisão e o laço; só então o resultado pode ser exibido e `main` encerrada. |
| finalizar-programa antes de atualizar-contador | O quarto cartão abre a definição do procedimento e declara o parâmetro `contador`, usado pelo último cartão. |

As chaves e os usos de `medicoes`, `i`, `alertas` e `contador` tornam a sequência aceita única entre as 120 permutações dos cinco cartões.

### Dicas progressivas

1. O cartão com `#include` e o protótipo precisa estar no escopo global e também abre a função principal.
2. Antes de testar `medicoes[i]`, localize o cartão que declara o vetor, o contador e inicia o laço.
3. O operador de endereço aplicado a alertas envia a localização da variável; a desreferenciação de contador só pode ocorrer depois que a definição do procedimento declarar esse ponteiro.

### Explicação final

O programa inclui a biblioteca de entrada e saída, declara o protótipo e abre a função principal. Depois cria o vetor e o contador, percorre as cinco posições com um laço e chama o procedimento somente para 78 e 91. O operador de endereço fornece a localização de alertas; no procedimento, a desreferenciação do ponteiro acessa essa localização e incrementa a variável original. Após o laço, a saída exibe Alertas: 2. A definição do procedimento aparece depois da função principal, permitida pelo protótipo anterior.

### Recompensa e desbloqueio

- **reward.xp:** 100, concedidos uma única vez para este ID.
- **unlocks.mapId:** base-n9; **unlocks.objectId:** door.

### Revisão assistida e limitações

- As 120 permutações dos cinco cartões devem produzir uma única ordem aceita pelo domínio.
- O fonte montado deve coincidir exatamente com a versão de referência testada.
- A inspeção estrutural deve confirmar biblioteca, protótipo, `main`, `for`, `if`, chamada com `&`, parâmetro ponteiro e alteração com `*`.
- O resultado esperado é dois alertas, correspondentes exclusivamente às medições 78 e 91.
- Compilação nativa depende da disponibilidade de um compilador C17 no ambiente; na ausência dele, a limitação deve ser declarada.
- O conteúdo permanece `under-ai-review`; piloto com estudantes e homologação humana de acessibilidade continuam pendentes.
