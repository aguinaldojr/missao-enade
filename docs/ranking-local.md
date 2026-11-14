# Perfil de jogador e ranking local

## Escopo

Esta primeira versão permite manter diferentes jogadores no mesmo navegador por apelido e registrar o melhor resultado de cada jogador em rankings locais separados por curso e tamanho de missão.

Não existe autenticação, conta online, identificação acadêmica, sincronização ou envio de dados. A interface informa: **“Ranking salvo somente neste dispositivo.”** O ranking não representa toda a turma.

## Perfil local

Chave: `n9:player-profile:v1`.

O documento persistido possui versão, identificador do jogador ativo e uma lista de perfis. Cada perfil contém somente:

| Campo | Tipo | Finalidade |
|---|---|---|
| `id` | string | Identificador local sem finalidade de autenticação |
| `nickname` | string | Apelido normalizado, entre 3 e 20 caracteres |
| `createdAt` | string ISO 8601 | Data de criação |
| `lastUsedAt` | string ISO 8601 | Última seleção ou utilização carregada |

Exemplo estrutural:

```json
{
  "schemaVersion": 1,
  "activePlayerId": "player-local-1",
  "players": [
    {
      "id": "player-local-1",
      "nickname": "Nina Byte",
      "createdAt": "2026-11-14T12:00:00.000Z",
      "lastUsedAt": "2026-11-14T13:00:00.000Z"
    }
  ]
}
```

Espaços no início e no fim são removidos e sequências de espaços internos são reduzidas a um. Apelidos vazios, menores que três, maiores que vinte ou duplicados no mesmo navegador são recusados. Não são solicitados nome completo, RA, e-mail, CPF ou telefone.

## Ranking local

Chave: `n9:leaderboard:v1`.

Cada entrada contém:

| Campo | Tipo | Finalidade |
|---|---|---|
| `playerId` | string | Liga a entrada ao perfil local |
| `nickname` | string | Apelido no momento da conquista |
| `course` | enum | `CC`, `SI`, `TADS`, `TGTI` ou `TRC` |
| `questionCount` | enum numérico | `3`, `5`, `10` ou `20` |
| `correctCount` | inteiro | Quantidade de acertos |
| `score` | inteiro | Pontuação obtida |
| `maxScore` | inteiro | Pontuação máxima da missão |
| `rankingScore` | inteiro | Desempenho normalizado entre 0 e 1000 |
| `durationMs` | inteiro opcional | Duração confiável, quando disponível |
| `achievedAt` | string ISO 8601 | Data da conquista |
| `collectionId` | string | Coleção que originou o resultado |

Somente missões concluídas por um jogador ativo geram entradas. Cada jogador ocupa no máximo uma posição para cada combinação `course + questionCount`. Um resultado inferior não substitui o melhor existente.

### Fórmula

```text
rankingScore = arredondar((score / maxScore) × 1000)
```

O valor é limitado ao intervalo de 0 a 1000.

### Ordenação e desempates

Dentro do mesmo curso e tamanho:

1. maior `rankingScore`;
2. maior `correctCount`;
3. menor `durationMs`, somente quando ambas as entradas possuem duração confiável;
4. `achievedAt` mais antigo.

A versão atual não grava duração. Uma medida baseada apenas no tempo da aba poderia incluir suspensão, troca de aba ou pausa do dispositivo e produzir desempate enganoso. O campo e a regra estão preparados para uma futura medição confiável.

## Interface e acessibilidade

O fluxo inicial solicita criação ou escolha de um apelido. O jogador atual fica indicado nas telas e pode ser trocado antes de uma nova missão.

O ranking possui filtros nativos por curso e tamanho, tabela com posição, apelido, desempenho, acertos e pontuação, marca textual “(você)” para o jogador atual e mensagem quando não há resultados. O resultado da missão mostra imediatamente o ranking correspondente.

Controles nativos, rótulos associados, foco visível, cabeçalhos de tabela, região de status e diálogo de confirmação permitem uso por teclado, toque, mouse e tecnologia assistiva. O destaque do jogador atual combina texto, peso e contorno; não depende somente de cor.

## Exclusão e privacidade

A exclusão exige confirmação e remove somente `n9:leaderboard:v1`. Perfis, exploração, puzzles, relatórios de missão e demais chaves permanecem intactos.

Nenhuma requisição é feita para registrar perfil ou ranking. Limpar dados do navegador, usar modo privado ou trocar de dispositivo pode remover ou tornar os dados indisponíveis.

## Compatibilidade

As chaves existentes não foram renomeadas ou migradas. Resultados antigos sem jogador continuam sendo carregados e exibidos, mas não recebem autoria retroativa nem entram automaticamente no ranking. Conteúdo, progresso e recibos de puzzles permanecem independentes.

Registros com versão futura desconhecida não são sobrescritos automaticamente. Dados inválidos são ignorados sem apagar outras chaves.

## Evolução futura

Um ranking online exigirá decisão institucional e uma etapa própria de arquitetura, incluindo consentimento e base legal, autenticação adequada, proteção contra fraude, segurança, política de retenção, moderação de apelidos, API, banco de dados e regras claras de escopo. A estrutura local atual não envia dados e não deve ser apresentada como ranking institucional ou da turma.
