# Prompt para o Gemini — atividades rápidas TRC, lote 01

Produza somente o primeiro lote de 20 atividades rápidas específicas de Tecnologia em Redes de Computadores para o N9 Jornada Digital.

## Arquivos obrigatórios de referência

Leia integralmente os arquivos enviados com este prompt:

- `learning-activities.schema.json`;
- `editorial.schema.json`;
- `LearningActivityCatalog.ts`;
- `validateLearningActivities.ts`;
- `n9-com-06.json`, como exemplo estrutural, sem copiar seu conteúdo;
- `matriz-trc-lote-01.md`.

## Entregáveis

Gere exatamente:

1. `n9-trc-01.json`;
2. `relatorio-n9-trc-01.md`.

Não gere código de integração, scripts, schemas alternativos ou arquivos adicionais.

## Identificação e contrato

- `schemaVersion`: `1`;
- `batchId`: `N9-TRC-01`;
- exatamente 20 atividades;
- IDs contínuos e únicos de `N9-TRC-001` a `N9-TRC-020`;
- `courses`: somente `["TRC"]`;
- `validationStatus`: `under-ai-review`;
- cada atividade deve possuir exatamente uma fonte com papel `primary`;
- preserve `additionalProperties: false`: não invente campos;
- o JSON deve ser válido e aceito integralmente pelos schemas fornecidos.

## Balanceamento obrigatório do lote

Não crie atividades `single-choice` neste lote, pois essa mecânica já está acima da meta no banco existente.

| Mecânica | Quantidade |
|---|---:|
| `binary-choice` | 3 |
| `multiple-select` | 2 |
| `sequence-order` | 3 |
| `pair-match` | 1 |
| `categorize` | 3 |
| `fill-slot` | 1 |
| `visual-hotspot` | 4 |
| `decision-dialogue` | 3 |
| **Total** | **20** |

Distribuição por dificuldade:

- 8 `introductory`;
- 10 `intermediate`;
- 2 `advanced`.

Distribuição por área, com cinco atividades para cada núcleo:

- TRC-01 — modelos, TCP/IP, endereçamento, protocolos, switching e roteamento;
- TRC-02 — meios físicos, cabeamento estruturado, topologias e redes sem fio;
- TRC-03 — sistemas operacionais, serviços de rede, virtualização, disponibilidade, desempenho e continuidade;
- TRC-04 — projeto, configuração, automação, monitoramento, segurança, sustentabilidade e gerenciamento de redes.

Distribua as mecânicas e dificuldades entre as quatro áreas, evitando concentrar atividades avançadas ou visuais em um único núcleo.

## Direção pedagógica

- Priorize conceitos clássicos e com alta pertinência para a formação de TRC.
- Use situações profissionais curtas: laboratório, campus, suporte, provedor, datacenter, Wi-Fi, firewall, roteador, switch, servidor, monitoramento e manutenção.
- Evite cálculos longos. Endereçamento e capacidade podem exigir raciocínio curto, com todos os dados fornecidos.
- Inclua atividades sobre, no conjunto do lote: encapsulamento TCP/IP, IPv4/CIDR, VLAN, switching, roteamento, DNS/DHCP, Wi-Fi, cabeamento, virtualização, continuidade, segurança, monitoramento e automação.
- Não dependa de fabricante específico. Quando um comando variar por plataforma, informe claramente o ambiente ou use sintaxe neutra.
- Não copie nem adapte superficialmente questões de provas anteriores.
- Não repita os títulos, cenários ou problemas centrais do arquivo de exemplo.
- Cada atividade deve ensinar: a ajuda apresenta pista e conceito; a explicação consolida o aprendizado; feedbacks explicam o erro.
- Use linguagem clara, universitária e motivadora, sem aparência infantil.
- Mantenha textos adequados ao celular: contexto e instrução diretos, sem remover premissas necessárias.
- Não use a palavra `ENADE` em título, área, contexto, instrução, ajuda, explicação ou payload. Ela pode aparecer somente nas fontes e na rastreabilidade interna.

## Regras por mecânica

- `binary-choice`: afirmação inequívoca e feedback específico para verdadeiro e falso.
- `multiple-select`: cinco a sete opções, quantidade correta declarada e feedback individual; não use opções parcialmente corretas.
- `sequence-order`: quatro a seis blocos e uma única ordem defensável por dependência técnica ou operacional.
- `pair-match`: três a cinco pares, sem termos equivalentes que permitam mais de uma associação.
- `categorize`: duas ou três categorias, quatro a seis itens e critérios mutuamente exclusivos no cenário.
- `fill-slot`: quatro tokens, código ou comando funcional e apenas um token correto. Informe linguagem ou ambiente.
- `visual-hotspot`: diagrama textual coerente, de dois a oito nós, com descrição acessível equivalente; não dependa apenas de cor ou posição.
- `decision-dialogue`: exatamente três etapas; cada etapa possui três escolhas e somente uma adequada. As consequências devem ensinar tomada de decisão em redes.

## Fontes e rastreabilidade

- Fonte normativa principal: Portaria Inep nº 172/2026, arts. 5º e 6º, com papel `primary` e tipo `official-reference`.
- Use fontes técnicas oficiais pertinentes: RFCs do IETF, padrões IEEE/ISO identificados, NIST, documentação oficial de linguagem ou plataforma.
- Não invente número, título ou conteúdo de norma.
- Se não puder confirmar uma referência técnica, use uma descrição institucional mais geral e marque `sourceVerificationNeeded: true`.
- Registre no relatório todas as fontes que exigem conferência posterior.
- `traceability.title`, `objective` e `locators` devem relacionar claramente competência, conceito e fonte.

## Auditoria obrigatória antes de entregar

Confirme no relatório:

- 20 objetos e 20 IDs únicos;
- intervalo exato `N9-TRC-001`–`N9-TRC-020`;
- cotas de mecânicas, áreas e dificuldades;
- todos os cursos somente TRC;
- todas as respostas e soluções únicas;
- ordens únicas nas sequências;
- três etapas e uma decisão adequada por etapa nos diálogos;
- diagramas com alternativa textual acessível;
- exatamente uma fonte principal por atividade;
- ausência da palavra ENADE nos campos apresentados ao jogador;
- ausência de conteúdo copiado do exemplo;
- limitações e referências que ainda exigem verificação.

Não declare revisão humana, homologação de acessibilidade ou aprovação para publicação. Entregue o conteúdo como candidato para nova auditoria no repositório principal.
