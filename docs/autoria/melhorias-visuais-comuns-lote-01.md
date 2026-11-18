# Melhorias visuais das questões comuns - lote 01

Implementação local de 17/11/2026. Escopo exclusivo: `E26-Q-COM-01`, `E26-Q-COM-05`, `E26-Q-COM-07`, `E26-Q-COM-08`, `E26-Q-COM-09` e `E26-Q-COM-10`.

## Preservação

As seis questões mantêm IDs, classificação, cursos elegíveis, áreas, competências, dificuldades, alternativas, gabaritos, explicações, feedbacks, fontes, rastreabilidade e estado `under-ai-review`. Não há nova questão, alteração de cota ou mudança de progresso. COM-01 e COM-05 apenas transferem tabelas achatadas do parágrafo para recursos semânticos.

| ID | Versão | Recurso implementado | Gabarito |
|---|---:|---|---|
| E26-Q-COM-01 | 2 | Gráfico SVG de participação 16 → 24, com denominador e texto alternativo | C |
| E26-Q-COM-05 | 2 | Tabela semântica dos dois locais de espera | D |
| E26-Q-COM-07 | 2 | Logs separados das tentativas remotas e do teste local | D |
| E26-Q-COM-08 | 2 | Diagrama SVG do limite 8, uso 6, disponibilidade 2 e necessidade 3 | D |
| E26-Q-COM-09 | 3 | Fluxo Alto → Baixo e matriz dos três limites simultâneos | A |
| E26-Q-COM-10 | 3 | Matriz de papéis, edição, consulta e controles | C |

## Acessibilidade e experiência

Os dois SVGs possuem título, descrição interna, valores visíveis e texto alternativo completo no jogo. Logs são apresentados como texto, sem execução. Tabelas possuem legenda, cabeçalhos e rolagem focável em telas estreitas. O diagrama territorial possui descrição equivalente e passa para fluxo vertical no celular. Nenhuma resposta depende somente de cor ou posição.

As questões mantêm a função comum e continuam elegíveis para CC, SI, TADS, TGTI e TRC. Os cenários não foram convertidos em conteúdo específico de um curso.

## Limites

- Não foram alteradas COM-02, COM-03, COM-04 ou COM-06.
- Nenhum puzzle foi modificado.
- A melhoria visual não equivale a liberação editorial.
- Leitor de tela humano, contraste em diferentes monitores e dispositivos físicos ainda exigem homologação externa.
