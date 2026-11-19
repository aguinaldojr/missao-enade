# Correção da conversão de recursos visuais das questões

Data: 18/11/2026.

## Problema confirmado

Durante o teste local, `E26-Q-SI-17` apresentou o contexto “A equipe quer usar a regra...” e perguntou por uma matriz que não estava visível. A matriz existia no lote de autoria, antes da seção `Texto ao jogador`, mas o conversor procurava tabelas e códigos somente dentro do contexto textual posterior.

Sem a matriz de 1.000 chamados, a questão não fornecia dados suficientes para calcular a proporção de alertas corretos e identificar os dez falsos negativos.

## Correção

O conversor passou a reconhecer subseções de recurso anteriores a `Texto ao jogador`, incluindo objetos, códigos, matrizes, tabelas, diagramas, painéis, fluxos, grafos, cartões, esquemas e representações. Tabelas e blocos de código são convertidos para o contrato `Question.presentation` já renderizado pela interface.

Para questões do catálogo original que continham tabelas Markdown dentro do próprio contexto, o conversor agora separa a tabela da narrativa. Isso corrigiu também:

- `E26-Q-TGTI-04`: tabela de priorização de chamados;
- `E26-Q-TRC-04`: tabela de roteamento.

O contexto textual equivalente foi preservado e as tabelas ganharam legenda, cabeçalhos semânticos e região rolável pela interface existente.

## Auditoria

A triagem inicial encontrou 24 itens sem `presentation` que mencionavam matriz, tabela, gráfico, diagrama, quadro, dados ou código. Depois da recuperação dos recursos documentais e das tabelas embutidas, restaram 14 alertas. A inspeção individual confirmou que esses 14 itens são autossuficientes em texto: os termos aparecem como conceito, alternativa ou descrição completa, sem referência a um objeto ausente.

No catálogo final, 124 das 205 questões possuem apresentação estruturada. A alteração não modificou ID, enunciado, alternativas, gabarito, explicação, feedback, dificuldade, elegibilidade ou status editorial. Seis contextos antigos perderam apenas a marcação bruta de tabela, que foi transferida para `presentation`.

## Verificações

- comparação automatizada dos campos pedagógicos antes/depois;
- teste específico da matriz e dos três registros de `E26-Q-SI-17`;
- testes das tabelas de `E26-Q-TGTI-04` e `E26-Q-TRC-04`;
- validação dos schemas e renderizador estruturado;
- lint, TypeScript, testes de conteúdo e build.

O piloto ainda deve observar legibilidade, rolagem e carga cognitiva em dispositivos físicos e tecnologias assistivas.
