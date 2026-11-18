# Melhorias visuais das questões existentes de SI

Implementação local de 17/11/2026. Escopo: tornar as dez questões específicas já existentes de Sistemas de Informação mais concretas e atraentes antes da criação de novos conteúdos. Não foram criados IDs, alternativas, competências, cotas ou gabaritos.

## Decisões de preservação

- `E26-Q-SI-02` e `E26-Q-SI-05` permanecem nas versões piloto já integradas.
- As demais questões mantêm enunciado, alternativas, gabarito, explicação, feedbacks, área, competência, dificuldade, fontes e rastreabilidade.
- `E26-Q-SI-03` e `E26-Q-SI-09` apenas retiram tabelas achatadas do parágrafo e passam os mesmos dados para tabelas semânticas.
- As versões de `SI-01`, `SI-03`, `SI-04` e `SI-06` a `SI-09` passam de 1 para 2. `SI-10` passa de 2 para 3.
- Os oito itens continuam `under-ai-review`; a melhoria visual não os promove automaticamente. `SI-02` e `SI-05` continuam `ready-for-pilot`.

## Artefatos implementados

| ID | Lacuna registrada | Apresentação implementada | Gabarito preservado |
|---|---|---|---|
| E26-Q-SI-01 | Caso de arquitetura sem mapa de capacidades | Diagrama objetivo - eventos - informação | C |
| E26-Q-SI-02 | SQL apenas descrito | DDL, dados e consulta SQL em blocos próprios | C |
| E26-Q-SI-03 | Processo e horários achatados em texto | Tabela de horários e fluxo da espera | B |
| E26-Q-SI-04 | Redesenho sem linha de eventos | Diagrama despacho - conferência - digitação | A |
| E26-Q-SI-05 | Modelo relacional verbal | Diagrama Analista - Atuação - Chamado | B |
| E26-Q-SI-06 | Governança sem catálogo comparativo | Tabela das duas definições do indicador | A |
| E26-Q-SI-07 | Gráfico somente descrito | Gráfico SVG local com origem em 99 e equivalente textual | C |
| E26-Q-SI-08 | Ensaio sem artefato de teste | Tabela etapa - condição - evidência | E |
| E26-Q-SI-09 | Otimização com tabela achatada | Quadros de consumo/benefício e capacidade | E |
| E26-Q-SI-10 | Arquitetura textual | Diagrama navegador - consulta - versão autoritativa | B |

## Acessibilidade e responsividade

Código e tabelas usam regiões focáveis com rolagem horizontal. Diagramas são horizontais no desktop e verticais no celular, com descrição textual obrigatória. O gráfico de `SI-07` não depende exclusivamente de cor: mostra valores, rótulos, eixo e texto alternativo completo. Todos os artefatos são DOM/SVG local; não há recurso externo ou execução de código editorial.

As capturas de `SI-03`, `SI-07` e `SI-10` foram inspecionadas em desktop e celular. O cabeçalho de progresso permanece fixo durante a rolagem; tabelas largas conservam todas as colunas por rolagem horizontal. A homologação humana com NVDA/VoiceOver e dispositivos reais permanece externa.

## Verificações

- conversão editorial determinística: somente o lote SI recebeu apresentações/versões novas;
- catálogo: 60 questões, seis puzzles e 66 IDs únicos;
- conteúdo/contratos: 134 testes aprovados;
- TypeScript, lint e build de produção: aprovados;
- navegador: Arena de vinte questões percorreu as dez questões de SI em desktop e celular; 2/2 casos aprovados;
- gráfico local carregado com dimensão válida e texto alternativo;
- nenhum gabarito, alternativa, fonte, competência, dificuldade, curso, pontuação ou progresso foi alterado.

## Próxima etapa separada

Novas questões para ampliar a capacidade de partidas de SI não pertencem a esta entrega. Elas devem seguir a matriz de capacidade, preencher macroáreas deficitárias e passar por revisão editorial assistida por IA antes da integração.
