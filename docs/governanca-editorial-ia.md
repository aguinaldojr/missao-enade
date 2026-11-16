# Governança editorial assistida por IA

Versão 1.0 — 16/11/2026. Esta política substitui a aprovação docente como requisito operacional do N9 Jornada Digital. Ela não declara homologação institucional, conteúdo oficial nem eficácia pedagógica comprovada.

## 1. Motivo e responsabilidade

O projeto precisa revisar conteúdos com critérios reproduzíveis mesmo sem uma etapa formal de parecer docente. A IA atua como instrumento de análise editorial e técnica; não é autoridade institucional. A decisão de testar, corrigir, rejeitar ou liberar um conteúdo continua sendo responsabilidade explícita da pessoa responsável pelo projeto.

Uma validação de schema, um teste automatizado ou uma resposta da IA não promovem conteúdo por conta própria. Toda mudança de estado deve ser registrada e deliberada.

## 2. Estados ativos

| Estado | Significado | Saídas permitidas |
| --- | --- | --- |
| `draft` | Rascunho ainda não submetido à revisão estruturada. | `under-ai-review` ou `rejected` |
| `under-ai-review` | Conteúdo experimental em análise editorial assistida por IA. | `needs-revision`, `ready-for-pilot` ou `rejected` |
| `needs-revision` | Há problemas objetivos ou dúvidas que exigem correção. | `under-ai-review` depois da correção, ou `rejected` |
| `ready-for-pilot` | Apto somente para teste controlado, sem equivaler a aprovação docente ou institucional. | `needs-revision`, `rejected` ou, depois do piloto, decisão explícita para `ready-for-release` |
| `ready-for-release` | Liberação editorial decidida explicitamente pela pessoa responsável após evidências do piloto. | `needs-revision` ou `rejected` se surgir problema posterior |
| `rejected` | Item recusado; não deve ser oferecido como conteúdo liberado. | Novo ciclo começa em `draft`, com nova versão e justificativa |

Fluxo principal:

```text
draft → under-ai-review ─┬→ needs-revision → under-ai-review
                        ├→ rejected
                        └→ ready-for-pilot → ready-for-release
```

`ready-for-release` nunca é produzido automaticamente pela IA, pelo schema, pelo catálogo, pelo modo da missão ou pela aprovação dos testes. O projeto não implementa publicação nesta etapa.

## 3. Critérios mínimos da revisão por IA

Cada revisão deve verificar e registrar:

- correspondência normativa e localizadores por curso;
- correção técnica e coerência das fontes;
- existência de um único gabarito defensável;
- plausibilidade e independência dos distratores;
- adequação da dificuldade e da operação cognitiva;
- clareza, concisão e suficiência das premissas;
- acessibilidade textual, por teclado e sem dependência exclusiva de cor, som ou movimento;
- funcionamento e legibilidade em celular;
- execução de todo código apresentado como funcional;
- recálculo de valores, unidades e fórmulas;
- unicidade e justificativa da solução dos puzzles;
- preservação de fontes, papéis e rastreabilidade;
- ausência de afirmações indevidas de oficialidade, homologação ou eficácia institucional.

A revisão pode concluir `needs-revision`, `ready-for-pilot` ou `rejected`. Em caso de dúvida material, deve preferir `needs-revision`, registrar a incerteza e solicitar uma nova rodada após a correção.

## 4. Evidência obrigatória

O registro de cada rodada deve conter, no mínimo:

- ID e versão do conteúdo;
- data e versão do procedimento ou modelo usado;
- critérios aplicados e fontes consultadas;
- resolução independente, sem usar o gabarito como premissa;
- testes objetivos executados e seus resultados;
- problemas, correções e limitações encontradas;
- decisão, justificativa e responsável pela consolidação.

Revisão por IA é análise. `ready-for-pilot` é autorização limitada para observação controlada. `ready-for-release` é uma decisão posterior da pessoa responsável pelo projeto, apoiada por resultados do piloto. Nenhum desses estados significa homologação pela universidade.

## 5. Correção, rejeição e piloto

Um item em `needs-revision` deve receber correção controlada, manter sua rastreabilidade e voltar a `under-ai-review`. Rejeições preservam o histórico e a justificativa; não se apaga a evidência para reapresentar o mesmo conteúdo como novo.

O piloto deve observar compreensão, tempo, ambiguidades, acessibilidade, engajamento e comportamento dos distratores. A observação futura com estudantes é necessária para avaliar uso real, mas não está implementada nem substituída por simulação de IA.

## 6. Compatibilidade legada

Entradas antigas são aceitas somente por normalização em memória:

| Estado legado | Estado canônico lido |
| --- | --- |
| `provisional-pending-teacher-review` | `under-ai-review` |
| `approved-teacher` | `ready-for-pilot` |
| `needs-revision` | `needs-revision` |
| `rejected` | `rejected` |

A normalização não regrava arquivos ou LocalStorage, não altera IDs, versões, progresso ou recompensas e não constitui nova aprovação. Os schemas canônicos aceitam apenas os seis estados ativos; os literais antigos permanecem em schemas/fixtures de reconhecimento histórico e em registros documentais identificados como governança anterior.

## 7. Situação da coleção atual

As 60 questões e os seis puzzles executáveis estão em `under-ai-review`. Nenhum item foi promovido automaticamente para `ready-for-pilot` ou `ready-for-release`. O aviso ao jogador é **Conteúdo experimental em revisão editorial.**

Os documentos de autoria e auditoria produzidos antes de 16/11/2026 preservam expressões como revisão docente e os estados anteriores para demonstrar a evolução do projeto. Esses registros são históricos; quando convertidos ou carregados, o normalizador aplica a política desta versão.

## 8. Limitações

A IA pode errar fatos, interpretar incorretamente uma norma, deixar passar ambiguidade, superestimar acessibilidade ou não representar a diversidade dos estudantes. Ela não verifica sozinha a vigência jurídica de uma fonte, não homologa leitor de tela, não substitui teste em dispositivo real e não comprova originalidade externa. Essas limitações devem permanecer visíveis nos registros e nas decisões do projeto.
