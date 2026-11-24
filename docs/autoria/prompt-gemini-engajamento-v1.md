# Prompt para o Gemini — pacote de engajamento N9 v1

Produza somente o primeiro pacote editorial de engajamento do modo Aprender do **N9 Jornada Digital**.

## Referências obrigatórias

Leia integralmente todos os arquivos enviados no ZIP:

- `matriz-engajamento-n9-v1.md`;
- `LearningLab.ts`;
- `LabSound.ts`;
- `DailyLearningSelector.ts`;
- `learning-lab.css`;
- `game.ts`;
- `guia-visual-n9.md`;
- `compartilhamento-atividades-trc.md`.

Use esses arquivos apenas como contexto. Não os reescreva e não produza código de integração.

## Objetivo

Criar falas curtas, reações, mensagens de progressão, descrições de conquistas, especificações de sons sintéticos e roteiros de animações leves para tornar sessões de aprendizagem mais animadoras para estudantes universitários.

A identidade deve ser original do N9. Não copie frases, personagens, sons, aparência, nomenclatura ou animações de Duolingo ou de qualquer outro produto.

## Entregáveis

Gere exatamente três arquivos completos para download:

1. `n9-engajamento-v1.json`;
2. `n9-animacoes-sons-v1.json`;
3. `relatorio-engajamento-v1.md`.

Não gere imagens, áudio binário, TypeScript, CSS, HTML, scripts ou arquivos adicionais.

## Regras gerais

- Português brasileiro claro, natural e inclusivo.
- Tom universitário, moderno, acolhedor e divertido, sem aparência infantil.
- Frases curtas, preferencialmente até 110 caracteres.
- Não ridicularizar erros, comparar estudantes ou criar ansiedade.
- Não usar “prova”, “simulado”, “nota” ou `ENADE` nos textos apresentados ao jogador.
- Não afirmar aprovação institucional, domínio definitivo ou certificação.
- Não prometer recursos ainda inexistentes.
- O erro não retira XP.
- Ajuda não deve ser tratada como punição.
- Som, cor, movimento e emoji nunca podem ser a única forma de transmitir informação.
- Não alterar conteúdos técnicos, respostas, XP ou regras das atividades.
- Não incluir dados pessoais, nome completo, RA, e-mail ou informações de estudantes.

## Arquivo 1 — `n9-engajamento-v1.json`

O JSON deve usar exatamente esta raiz:

```json
{
  "schemaVersion": 1,
  "packageId": "N9-ENGAGEMENT-V1",
  "locale": "pt-BR",
  "characters": [],
  "lineSets": {},
  "achievements": []
}
```

### Personagens

Inclua somente:

- `lia`: guia tecnológica, encorajadora, objetiva e respeitosa;
- `student`: personagem do jogador, sem gênero definido e sem fala obrigatória.

Cada objeto de `characters` deve conter somente:

- `id`;
- `displayName`;
- `role`;
- `personality` — lista de três a cinco traços;
- `voiceGuidelines` — lista de regras editoriais;
- `avoid` — lista do que o personagem nunca deve dizer.

### Conjuntos de falas

Cada entrada de `lineSets` deve ser uma lista de objetos com:

- `id` único;
- `speaker`: `lia` ou `system`;
- `text`;
- `ariaText` — equivalente textual sem depender de emoji;
- `tone` — `neutral`, `encouraging`, `celebratory` ou `reflective`;
- `weight` — inteiro de 1 a 5 para futura seleção ponderada.

Produza exatamente:

| Conjunto | Quantidade |
|---|---:|
| `sessionIntro` | 8 |
| `activityIntroChoice` | 3 |
| `activityIntroBinary` | 3 |
| `activityIntroMultiple` | 3 |
| `activityIntroOrder` | 3 |
| `activityIntroMatch` | 3 |
| `activityIntroCategorize` | 3 |
| `activityIntroCode` | 3 |
| `activityIntroHotspot` | 3 |
| `activityIntroDialogue` | 3 |
| `correctGeneric` | 18 |
| `retryGeneric` | 15 |
| `hintOpened` | 8 |
| `streakTwo` | 4 |
| `streakThree` | 4 |
| `streakFive` | 5 |
| `milestoneQuarter` | 3 |
| `milestoneHalf` | 3 |
| `milestoneThreeQuarters` | 3 |
| `sessionComplete` | 10 |
| `dailyReturn` | 6 |
| `achievementUnlocked` | 8 |

Não inclua resposta técnica, pista pedagógica ou referência a uma atividade específica nessas falas. O feedback técnico continuará vindo do catálogo de atividades.

### Conquistas

Inclua exatamente estas oito conquistas, preservando os títulos:

1. `active-streak` — **Sequência ativa**;
2. `concept-hunter` — **Caçador de conceitos**;
3. `review-master` — **Mestre da revisão**;
4. `turbo-mode` — **Modo turbo**;
5. `perfect-accuracy` — **Precisão máxima**;
6. `day-pioneer` — **Pioneiro do dia**;
7. `daily-highlight` — **Destaque diário**;
8. `weekly-highlight` — **Destaque da semana**.

Cada conquista deve conter somente:

- `id`;
- `title`;
- `shortDescription` — até 80 caracteres;
- `lockedDescription` — explica como conquistar sem afirmar que já ocorreu;
- `iconSymbol` — emoji ou símbolo Unicode acompanhado pelo título;
- `category`: `learning`, `consistency`, `performance` ou `ranking`;
- `implementationState`: `local-capable` ou `requires-ranking-support`;
- `celebrationLineId` — referência a uma fala de `achievementUnlocked`.

As três conquistas relacionadas a colocação diária/semanal devem usar `requires-ranking-support`. Não invente regras de desempate, horários ou vencedores. As demais podem usar `local-capable` como indicação técnica, sem afirmar que já estão implementadas.

## Arquivo 2 — `n9-animacoes-sons-v1.json`

Use exatamente esta raiz:

```json
{
  "schemaVersion": 1,
  "packageId": "N9-MOTION-SOUND-V1",
  "soundCues": [],
  "animationCues": []
}
```

### Sons

Inclua exatamente estes 10 IDs:

- `tap`;
- `select`;
- `drop`;
- `correct`;
- `retry`;
- `streak`;
- `xpGain`;
- `achievement`;
- `sessionComplete`;
- `dailyBonus`.

Cada objeto deve conter somente:

- `id`;
- `event`;
- `intent`;
- `waveform`: `sine`, `triangle` ou `square`;
- `notesHz` — lista de um a cinco números entre 80 e 1800;
- `stepMs` — inteiro de 20 a 180;
- `noteDurationMs` — inteiro de 40 a 300;
- `gain` — número de 0.01 a 0.10;
- `maxTotalDurationMs` — no máximo 1200;
- `sensoryAlternative` — texto visual equivalente.

Os sons devem ser geráveis com Web Audio API, agradáveis em celular e discretos. `retry` deve ser gentil, curto e não punitivo. Não imite melodias conhecidas.

### Animações

Inclua exatamente estes 12 IDs:

- `liaIdle`;
- `liaPrompt`;
- `studentSelect`;
- `studentCorrect`;
- `studentRetry`;
- `streakPulse`;
- `xpBurst`;
- `progressAdvance`;
- `achievementReveal`;
- `sessionComplete`;
- `cardEnter`;
- `hintOpen`.

Cada objeto deve conter somente:

- `id`;
- `event`;
- `target`: `lia`, `student`, `feedback`, `progress`, `achievement` ou `card`;
- `intent`;
- `durationMs` — de 100 a 1200;
- `iterations` — de 1 a 3;
- `motionDescription`;
- `reducedMotionFallback` — mudança sem deslocamento amplo;
- `accessibleAnnouncement` — string curta ou string vazia quando a animação for decorativa.

Evite flashes, tremores intensos, movimentos contínuos obrigatórios e deslocamentos que dificultem a leitura. Nenhuma animação pode bloquear controles.

## Arquivo 3 — `relatorio-engajamento-v1.md`

O relatório deve registrar:

- contagem de todos os conjuntos e objetos;
- adequação ao público universitário;
- análise de repetição e variedade;
- exemplos de combinações que não se contradizem;
- acessibilidade das falas, sons e animações;
- funcionamento com movimento reduzido e som desligado;
- conquistas que dependem de implementação local;
- conquistas que dependem do ranking online;
- riscos de excesso de estímulos;
- termos proibidos encontrados — o resultado esperado é zero;
- limitações e decisões que ainda cabem ao repositório principal.

## Validação obrigatória antes da entrega

- Analise os dois JSON com um parser real.
- Confirme IDs únicos dentro de cada arquivo.
- Confirme as quantidades exatas.
- Confirme que toda `celebrationLineId` existe.
- Confirme limites de frequência, ganho e duração.
- Confirme que toda animação possui alternativa para movimento reduzido.
- Confirme ausência de `ENADE`, “prova”, “simulado” e “nota” nos textos do jogador.
- Confirme que nenhuma fala depende exclusivamente de emoji.
- Confirme que não há conteúdo técnico capaz de contradizer as atividades.

Não declare revisão humana, homologação de acessibilidade ou implementação concluída. Entregue os três arquivos integrais, sem reticências e preferencialmente como arquivos para download, evitando truncamento em blocos de código.
