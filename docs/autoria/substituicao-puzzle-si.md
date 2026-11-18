# Substituição do puzzle específico de SI

Implementação local de 17/11/2026. Item substituído: `E26-P-SI-01`.

## Motivo

A versão anterior, **Do trajeto realizado ao registro autorizado**, possuía solução coerente, mas concentrava a experiência em conferência de custeio. A versão 2, **Liberar o Laboratório Aurora**, aproxima o desafio do cotidiano de Sistemas de Informação por integrar pessoas, processo, dados e tecnologia em uma reserva de laboratório.

## Preservação editorial

Permanecem o ID, curso SI, coleção, área **Sistemas de informação e processos de negócio**, dificuldade `intermediate`, objetivo de ordenar responsabilidades e circulação de informação, fonte normativa, localizadores, recompensa de 100 XP, desbloqueio e estado `under-ai-review`.

O novo fluxo usa cinco artefatos fictícios e encadeados:

1. `PED-204`: solicitação validada;
2. `DISP-204`: disponibilidade e capacidade confirmadas;
3. `RES-204`: horário bloqueado e reserva provisória;
4. `AUT-204`: acesso autorizado pela coordenação;
5. `ACC-204`: recebimento confirmado pelo controle de acesso.

A ordem única é `validar-solicitacao` → `consultar-disponibilidade` → `criar-reserva` → `autorizar-acesso` → `sincronizar-acesso`.

## Compatibilidade

A chave `n9:puzzles:v1` e seu schema não mudam. Ao carregar uma entrada antiga de `E26-P-SI-01`, o repositório converte em memória os cinco IDs anteriores para os novos, preservando ordem relativa, tentativas, dicas utilizadas e conclusão. O dado só é regravado quando uma ação normal de salvamento ocorrer. Um recibo concluído continua concedendo o mesmo XP uma única vez.

## Apresentação e revisão assistida

A tela apresenta o briefing integral em região rolável e focável, os quatro sistemas envolvidos — portal, agenda, reservas e controle de acesso — com texto equivalente, além dos rótulos `VALIDAR`, `CONSULTAR`, `RESERVAR`, `AUTORIZAR` e `SINCRONIZAR`. Os rótulos resumem cada cartão, mas não informam sua posição.

Foram verificadas as 120 permutações dos cinco blocos; somente a ordem cadastrada satisfaz a igualdade integral usada pelo domínio e as quatro dependências documentadas. Permanecem pendentes piloto humano, homologação com leitor de tela e avaliação externa de originalidade e dificuldade.
