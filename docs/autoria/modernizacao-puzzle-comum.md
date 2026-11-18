# Modernização visual do puzzle comum

Implementação local de 17/11/2026. Escopo exclusivo: apresentação de `E26-P-COM-01` no fluxo já existente de Sequência Lógica.

## Preservação

O JSON e o documento autoral do puzzle não foram alterados. Permanecem idênticos o ID, título, narrativa, cinco blocos, ordem correta, três dicas, explicação, cursos, área, competências, dificuldade, fontes, rastreabilidade, estado editorial, recompensa de 100 XP e desbloqueio da porta. O formato salvo em `n9:puzzles:v1` também permanece inalterado.

## Camada visual

- painel tecnológico com os estados iniciais já declarados pela narrativa: registros preservados, recurso isolado, ambiente de teste pronto e consulta pública desligada;
- briefing integral em região rolável, focável e nomeada, reduzindo a extensão inicial da página no celular sem resumir ou ocultar o conteúdo;
- fila operacional com cinco cartões reordenáveis;
- identificadores textuais `RECUPERAR`, `VERIFICAR`, `MONTAR`, `TESTAR` e `ATIVAR`, que resumem o próprio início de cada bloco sem indicar sua posição correta;
- alça visual de arraste, numeração, botões Subir/Descer e suporte às setas já existentes;
- estado final `LIBERADA`, cartões concluídos e feedback visual após a validação correta;
- animação breve somente quando movimento reduzido não estiver ativo.

## Acessibilidade e limites

O painel e a fila possuem nomes acessíveis. Estados são comunicados por texto, não apenas por cor. A ordem continua operável por teclado, mouse, toque e botões. O layout passa para uma coluna no celular. A modernização não cria um novo tipo de puzzle nem modifica os cinco puzzles específicos.

Permanecem pendentes a homologação humana com leitor de tela, o teste em dispositivos físicos e a calibração com estudantes.
