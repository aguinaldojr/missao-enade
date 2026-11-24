# Matriz complementar — ranking, tutorial e selos N9 v1

## Estado do ranking atual

- Ranking online hospedado em Google Apps Script e Google Sheets.
- Top 15 independente para CC, SI, TADS, TGTI e TRC.
- Apenas jornadas concluídas de 25 desafios são elegíveis.
- Mantém somente o melhor resultado de cada estudante por curso.
- Ordenação: maior pontuação normalizada, mais acertos, menor duração e resultado mais antigo.
- O RA é transformado no servidor em chave e código público pseudônimo; não aparece na tabela.
- A resposta de envio informa se o melhor resultado foi atualizado e devolve a classificação atual.
- Não existe ranking local alternativo.

## Recursos ainda inexistentes

- recorte diário;
- recorte semanal;
- histórico de posições;
- primeiro participante do dia;
- vencedor diário;
- vencedor da disputa de seis dias;
- notificações automáticas;
- regras executáveis de conquistas;
- títulos de progressão.

Qualquer texto ligado a esses recursos deve permanecer desativado até evolução explícita do backend e dos contratos.

## Disputa planejada

A experiência foi imaginada para uma ação de seis dias. Não fixe datas, horários ou fuso no conteúdo editorial. A configuração futura deverá informar início e encerramento. Mensagens não podem criar urgência excessiva nem insinuar que estudantes fora do ranking fracassaram.

## Tutorial

O modo Aprender contém nove mecânicas e aceita teclado, mouse e toque. O tutorial deve ser opcional, breve, reapresentável e dispensável para concluir atividades. Nenhuma etapa pode depender exclusivamente de gesto de arrastar, pois existem controles alternativos.

## Selos e títulos

As oito conquistas já foram definidas no pacote `N9-ENGAGEMENT-V1`. Três dependem de suporte futuro do ranking. As especificações visuais devem permitir implementação posterior com CSS e SVG locais, manter texto associado e funcionar em estado bloqueado e desbloqueado.

Os cinco títulos de progressão são apenas propostas editoriais. Eles não têm limiares, XP ou persistência definidos e não podem aparecer ao jogador antes de implementação autorizada.
