# Especificação documental de missão mista — proposta para etapa futura

13/11/2026, com governança atualizada em 16/11/2026. **Não implementada, não importada pelo jogo e sem efeito sobre progresso ou recompensas.** Esta especificação não cria interface TypeScript, JSON Schema ou carregador executável. Os exemplos são fictícios e permanecem em revisão editorial assistida por IA.

Uma missão mista agrupará referências a desafios já definidos, sem duplicar seu conteúdo. A coleção identifica a origem editorial da missão; cada desafio conserva sua própria coleção validada. Não é obrigatório que todos os desafios tenham a mesma collectionId da missão.

## Campos propostos

| Campo | Tipo documental | Obrigatório | Finalidade e regras futuras propostas |
| --- | --- | --- | --- |
| id | string não branca | Sim | Identidade única da missão, estável entre sessões. |
| title | string não branca | Sim | Título apresentado ao jogador em implementação futura. |
| narrative | string não branca | Sim | Contextualizar a missão sem expor objetivos de prova. |
| courses | CourseId[] | Sim | Uma ou mais siglas CC/SI/TADS/TGTI/TRC, sem duplicação. Cada desafio precisa admitir todos os cursos da missão. |
| collectionId | string não branca | Sim | Coleção da missão, existente no catálogo. Não implica igualdade com as coleções dos filhos. |
| challenges | array de referências | Sim | Ao menos duas referências ordenadas; não repetir o par type/id. Não conter conteúdo inline. |
| challenges[].type | question ou sequence | Sim | Tipo da referência; sequence é o único puzzle existente. Não introduz outros tipos. |
| challenges[].id | string não branca | Sim | ID já existente no catálogo do tipo indicado. |
| prerequisites | string[] | Sim | IDs de outras missões; pode estar vazio. Referências existentes, sem autorreferência ou ciclos. Não bloqueio por nota ou erro. |
| rewards | objeto com xp | Sim | Bônus próprio de missão; xp inteiro ≥ 0. O exemplo usa zero: não propõe bônus novo nem soma automática de pontos de questões. |
| unlocks | array de objetos mapId/objectId | Sim | Pode estar vazio. Identificar objetos existentes no mapa, sem regras de código arbitrário. |
| validationStatus | ValidationStatus | Sim | draft, under-ai-review, needs-revision, ready-for-pilot, ready-for-release ou rejected. |

Objetos futuros deverão ser estritos com additionalProperties: false. Campos desconhecidos não deverão ser descartados silenciosamente. As regras acima são especificação, **não validação já executada**.

## Exemplo completo fictício

Os IDs de coleção, questão, sequência, mapa e porta abaixo existem no projeto. O ID da missão é apenas documental e não foi registrado no runtime. Nenhum desses conteúdos foi aprovado para uso pedagógico real.

```json
{
  "id": "MISSION-FICTICIA-MISTA-01",
  "title": "Recuperar o posto de atendimento",
  "narrative": "Na Base N9 fictícia, investigue os dados do atendimento e reorganize a inicialização do terminal. Esta missão é apenas um exemplo documental provisório.",
  "courses": ["CC", "SI", "TADS", "TGTI", "TRC"],
  "collectionId": "n9-provisional-questions-v1",
  "challenges": [
    { "type": "question", "id": "EX-COMUM-01" },
    { "type": "sequence", "id": "seq-algorithm-01" }
  ],
  "prerequisites": [],
  "rewards": { "xp": 0 },
  "unlocks": [
    { "mapId": "base-n9", "objectId": "door" }
  ],
  "validationStatus": "under-ai-review"
}
```

## Regras a decidir antes da implementação

1. Como registrar a conclusão de uma questão isolada dentro de missão mista sem depender de uma fase fixa de dez questões.
2. Como persistir tentativa de missão e referências de versão dos desafios sem alterar recibos atuais.
3. Como conceder bônus idempotentes por missão, separados do XP já pago por puzzle e da pontuação de questões; não pagar duas vezes pela mesma conclusão.
4. Como permitir retomar, cancelar e repetir, preservando respostas e recompensas anteriores.
5. Como registrar a revisão assistida por IA por conteúdo/curso/versão e a decisão explícita da pessoa responsável, sem confundir schema válido com homologação institucional.
6. Como validar pré-requisitos, ciclos, referências, elegibilidade e desbloqueios na futura camada de domínio.
7. Como integrar áreas/competências revisadas de areas.json por transformação explícita. Esse arquivo não deve ser importado diretamente.

Nenhum desses pontos foi conectado à interface nesta entrega. Não foi adicionada nova missão ao mapa, nova mecânica de desbloqueio ou nova regra de recompensa.
