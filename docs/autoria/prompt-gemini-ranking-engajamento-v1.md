# Prompt para o Gemini — ranking, tutorial e selos N9 v1

Produza somente o pacote editorial complementar de ranking, tutorial inicial e especificações visuais de selos do **N9 Jornada Digital**.

## Referências obrigatórias

Leia integralmente todos os arquivos enviados no ZIP:

- `matriz-ranking-engajamento-n9-v1.md`;
- `engajamento-v1.json`;
- `sons.json`;
- `relatorio_engajamento.md`;
- `OnlineLeaderboard.ts`;
- `OnlineLeaderboardRepository.ts`;
- `AppsScriptLeaderboardRepository.ts`;
- `OnlineLeaderboardPanel.ts`;
- `Code.gs`;
- `ranking-online-google-sheets.md`;
- `game.ts`;
- `guia-visual-n9.md`.

Não altere os arquivos de referência e não gere código de integração.

## Objetivo

Complementar o pacote de engajamento já aprovado com:

- mensagens para o ranking geral, diário e semanal;
- mensagens da disputa com duração planejada de seis dias;
- estados de Top 5, Top 10 e alteração de posição;
- estados vazios, indisponíveis e não elegíveis;
- tutorial opcional da primeira sessão para as nove mecânicas;
- especificações visuais acessíveis para as oito conquistas existentes;
- cinco títulos editoriais de progressão para avaliação futura.

## Limite técnico obrigatório

O ranking implementado atualmente possui somente:

- Top 15 geral por curso;
- jornadas concluídas de 25 desafios;
- melhor resultado por estudante e curso;
- código público pseudônimo derivado do RA;
- pontuação normalizada, acertos, duração e data;
- Google Apps Script e Google Sheets.

O sistema atual **não possui** ranking diário, ranking semanal, histórico de posição, vencedor diário, vencedor semanal nem disputa de seis dias. Textos que dependem desses recursos devem ser marcados como `requires-backend` e não podem afirmar que já estão ativos.

## Entregáveis

Gere exatamente:

1. `n9-ranking-engajamento-v1.json`;
2. `n9-tutorial-selos-v1.json`;
3. `relatorio-ranking-engajamento-v1.md`.

Disponibilize os três arquivos completos dentro de `n9-ranking-engajamento-v1-entrega.zip`. Não gere código, imagens, áudio ou arquivos adicionais.

## Regras editoriais

- Português brasileiro claro, inclusivo e adequado a universitários.
- Identidade original do N9, sem copiar produtos externos.
- Não estimular humilhação, ansiedade ou comparação depreciativa.
- Queda de posição deve ser comunicada de forma neutra.
- Não afirmar que o ranking representa toda a turma.
- Informar que a classificação reúne somente participantes que enviaram resultados.
- Não exibir RA, nome completo, e-mail ou outro dado pessoal.
- Usar apenas o código público pseudônimo quando necessário.
- Não usar `ENADE`, “prova”, “simulado” ou “nota” em textos apresentados ao jogador.
- Não prometer prêmio material, certificado ou reconhecimento institucional.
- Ícones, posição e cor não podem ser a única forma de comunicar estado.
- Textos preferencialmente até 120 caracteres.

## Arquivo 1 — `n9-ranking-engajamento-v1.json`

Use exatamente esta raiz:

```json
{
  "schemaVersion": 1,
  "packageId": "N9-RANKING-ENGAGEMENT-V1",
  "locale": "pt-BR",
  "messageSets": {}
}
```

Cada conjunto deve conter:

- `availability`: `current` ou `requires-backend`;
- `messages`: lista de mensagens.

Cada mensagem deve conter somente:

- `id` único;
- `text`;
- `ariaText`;
- `tone`: `neutral`, `encouraging`, `celebratory` ou `reflective`;
- `placeholders`: lista contendo apenas variáveis realmente utilizadas no texto.

Placeholders permitidos:

- `{position}`;
- `{course}`;
- `{publicCode}`;
- `{daysRemaining}`;
- `{rankingScore}`.

Produza exatamente:

| Conjunto | Quantidade | Disponibilidade |
|---|---:|---|
| `rankingIntro` | 6 | `current` |
| `rankingEmpty` | 4 | `current` |
| `rankingUnavailable` | 4 | `current` |
| `firstSubmission` | 5 | `current` |
| `personalBest` | 6 | `current` |
| `resultKept` | 4 | `current` |
| `enteredTop10` | 5 | `current` |
| `enteredTop5` | 5 | `current` |
| `positionUp` | 5 | `requires-backend` |
| `positionDown` | 4 | `requires-backend` |
| `dailyLeader` | 4 | `requires-backend` |
| `weeklyLeader` | 4 | `requires-backend` |
| `dayClosing` | 4 | `requires-backend` |
| `eventClosing` | 4 | `requires-backend` |
| `dailyComplete` | 4 | `requires-backend` |
| `sixDayComplete` | 5 | `requires-backend` |
| `privacyNotice` | 4 | `current` |
| `notEligible` | 3 | `current` |
| **Total** | **80** | — |

Mensagens `enteredTop10` e `enteredTop5` podem ser consideradas atuais porque a resposta do envio retorna a lista atualizada; a integração decidirá se o estudante realmente entrou nessas faixas.

## Arquivo 2 — `n9-tutorial-selos-v1.json`

Use exatamente esta raiz:

```json
{
  "schemaVersion": 1,
  "packageId": "N9-TUTORIAL-BADGES-V1",
  "locale": "pt-BR",
  "tutorialSteps": [],
  "badgeVisualSpecs": [],
  "progressionTitles": []
}
```

### Tutorial

Crie exatamente dez etapas: uma de boas-vindas e uma para cada uma das nove mecânicas atuais.

Cada etapa deve conter somente:

- `id`;
- `mechanic`: `general`, `choice`, `binary-choice`, `multiple-select`, `order`, `match`, `categorize`, `complete-code`, `hotspot` ou `decision-dialogue`;
- `title`;
- `body` — até 160 caracteres;
- `ariaText`;
- `interactionHint`;
- `optional`: sempre `true`.

O tutorial deve explicar a interação, não ensinar respostas técnicas. Deve funcionar com teclado, mouse e toque e nunca bloquear o início da sessão.

### Selos

Crie uma especificação para cada conquista já existente:

- `active-streak`;
- `concept-hunter`;
- `review-master`;
- `turbo-mode`;
- `perfect-accuracy`;
- `day-pioneer`;
- `daily-highlight`;
- `weekly-highlight`.

Cada objeto deve conter somente:

- `achievementId`;
- `title` — igual ao pacote anterior;
- `symbol` — Unicode simples;
- `shape`: `circle`, `shield`, `hexagon`, `diamond` ou `star`;
- `primaryColor` — hexadecimal;
- `secondaryColor` — hexadecimal;
- `lockedTreatment`;
- `unlockedTreatment`;
- `accessibleLabel`;
- `visualDescription` — instrução para futura criação em SVG/CSS, sem gerar SVG.

Use a paleta do guia visual. Não dependa apenas de cor e não use logotipos, brasões ou símbolos oficiais.

### Títulos de progressão

Crie exatamente cinco propostas editoriais, nesta ordem:

1. Explorador N9;
2. Solucionador N9;
3. Integrador N9;
4. Estrategista N9;
5. Arquiteto N9.

Cada objeto deve conter somente:

- `id`;
- `title`;
- `shortDescription`;
- `accessibleLabel`;
- `implementationState`: sempre `future-proposal`.

Não defina XP, limites, regras de promoção ou equivalência acadêmica.

## Arquivo 3 — relatório

O relatório deve informar:

- contagens exatas;
- conjuntos disponíveis hoje e dependentes do backend;
- compatibilidade com privacidade e pseudonimização;
- análise de tom competitivo saudável;
- acessibilidade das mensagens, tutorial e selos;
- ausência de dependência exclusiva de cor ou símbolo;
- riscos de anunciar rankings ainda indisponíveis;
- termos proibidos encontrados, esperando zero;
- decisões que permanecem no repositório principal.

## Validação obrigatória

Use um parser JSON real e confirme:

- 18 conjuntos e 80 mensagens;
- IDs de mensagens únicos;
- placeholders permitidos e realmente presentes no texto;
- dez etapas de tutorial cobrindo as nove mecânicas e a introdução;
- oito especificações de selos com IDs existentes;
- cinco títulos com `future-proposal`;
- cores hexadecimais válidas;
- ausência dos termos proibidos;
- nenhum dado pessoal ou RA em textos;
- nenhum recurso futuro marcado como atual.

Não declare revisão humana, homologação de acessibilidade ou implementação concluída. Grave e valide os arquivos com o ambiente de execução e entregue somente o ZIP acompanhado de um resumo curto, evitando colar os JSON na resposta.
