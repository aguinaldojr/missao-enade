# Relatório de Auditoria Técnica e Editorial — Lote `N9-TRC-02`

## 1. Identificação Geral do Lote

- **Identificador do lote (`batchId`)**: `N9-TRC-02`
- **Versão do esquema (`schemaVersion`)**: `1`
- **Total de atividades geradas**: `20`
- **Faixa contínua de identificadores**: `N9-TRC-021` a `N9-TRC-040`
- **Curso alvo (`courses`)**: exclusivamente `["TRC"]` (Tecnologia em Redes de Computadores)
- **Status de validação (`validationStatus`)**: `under-ai-review`
- **Integridade frente ao lote anterior (`N9-TRC-01`)**: confirmada ausência total de alteração, reutilização ou colisão com os IDs `N9-TRC-001` a `N9-TRC-020` e com os `conceptId` do lote 01.

---

## 2. Conferência das Cotas Obrigatórias

### 2.1 Distribuição por Mecânica (Sem `single-choice`)

| Mecânica | Cota Exigida | Quantidade Entregue | IDs Correspondentes | Status |
|---|---:|---:|---|---|
| `single-choice` | 0 | 0 | — | Conforme |
| `binary-choice` | 2 | 2 | `N9-TRC-023`, `N9-TRC-027` | Conforme |
| `multiple-select` | 2 | 2 | `N9-TRC-030`, `N9-TRC-039` | Conforme |
| `sequence-order` | 3 | 3 | `N9-TRC-021`, `N9-TRC-031`, `N9-TRC-037` | Conforme |
| `pair-match` | 1 | 1 | `N9-TRC-029` | Conforme |
| `categorize` | 3 | 3 | `N9-TRC-024`, `N9-TRC-026`, `N9-TRC-033` | Conforme |
| `fill-slot` | 1 | 1 | `N9-TRC-038` | Conforme |
| `visual-hotspot` | 4 | 4 | `N9-TRC-022`, `N9-TRC-028`, `N9-TRC-032`, `N9-TRC-036` | Conforme |
| `decision-dialogue` | 4 | 4 | `N9-TRC-025`, `N9-TRC-034`, `N9-TRC-035`, `N9-TRC-040` | Conforme |
| **Total** | **20** | **20** | **`N9-TRC-021` a `N9-TRC-040`** | **Conforme** |

### 2.2 Distribuição por Dificuldade

| Dificuldade | Cota Exigida | Quantidade Entregue | IDs Correspondentes | Status |
|---|---:|---:|---|---|
| `introductory` | 8 | 8 | `N9-TRC-021`, `N9-TRC-023`, `N9-TRC-024`, `N9-TRC-026`, `N9-TRC-029`, `N9-TRC-030`, `N9-TRC-033`, `N9-TRC-037` | Conforme |
| `intermediate` | 10 | 10 | `N9-TRC-022`, `N9-TRC-025`, `N9-TRC-027`, `N9-TRC-028`, `N9-TRC-031`, `N9-TRC-032`, `N9-TRC-034`, `N9-TRC-036`, `N9-TRC-038`, `N9-TRC-039` | Conforme |
| `advanced` | 2 | 2 | `N9-TRC-035`, `N9-TRC-040` | Conforme |
| **Total** | **20** | **20** | — | **Conforme** |

### 2.3 Distribuição por Núcleo Temático e Cobertura Complementar

| Núcleo | Cota | Entregue | IDs | Temas Complementares Abordados (Sem Repetir Lote 01) |
|---|---:|---:|---|---|
| **TRC-01** | 5 | 5 | `N9-TRC-021` a `N9-TRC-025` | IPv6 Link-Local/DAD/SLAAC/NDP; Longest Prefix Match em tabela de rotas; NAT/PAT vs firewall; seleção TCP vs UDP por requisitos; agregação de enlaces LACP (IEEE 802.1AX). |
| **TRC-02** | 5 | 5 | `N9-TRC-026` a `N9-TRC-030` | Fibra monomodo (OS2) vs multimodo (OM3/OM4); orçamento de potência óptica conceitual; atenuação RSSI por barreira física e roaming Wi-Fi em 5 GHz; conectores RJ-45, LC, SC e APC; infraestrutura física, raio de curvatura e aterramento. |
| **TRC-03** | 5 | 5 | `N9-TRC-031` a `N9-TRC-035` | Agente DHCP Relay (`giaddr`); DNS recursivo vs autoritativo; containers vs máquinas virtuais (art. 6º, XI); política de QoS DiffServ/LLQ em WAN; diagnóstico de serviço Linux (`systemd`/`journalctl`/`ss`) e permissões POSIX. |
| **TRC-04** | 5 | 5 | `N9-TRC-036` a `N9-TRC-040` | Túnel VPN Site-to-Site IPsec/IKEv2 (art. 6º, XIII); ordenação *first-match* de ACLs (art. 6º, XIII); auditoria automatizada de interfaces em Python 3.12; análise de métricas P95/P99, capacidade e alertas com histerese; gestão de mudanças, *rollback* e inventário/CMDB. |

---

## 3. Auditoria de Unicidade, Regras das Mecânicas e Acessibilidade

1. **Unicidade das soluções**:
   - **`binary-choice` (2 itens)**: afirmações técnicas inequívocas com balanceamento entre valor falso (`N9-TRC-023`) e verdadeiro (`N9-TRC-027`), ambas com feedbacks específicos (`feedbackTrue` e `feedbackFalse`).
   - **`multiple-select` (2 itens)**: exatamente 6 opções por item, `requiredCount: 3`, 3 opções corretas e 3 distratores plausíveis com feedback individualizado.
   - **`sequence-order` (3 itens)**: blocos com dependências causais e protocolares estritas (`N9-TRC-021` com 5 blocos; `N9-TRC-031` com 4 blocos; `N9-TRC-037` com 4 blocos), admitindo uma única ordenação tecnicamente válida.
   - **`pair-match` (1 item)**: 4 pares distintos (`RJ-45`, `LC Duplex`, `SC`, `Polimento Angular APC`) sem definições intercambiáveis.
   - **`categorize` (3 itens)**: 2 categorias mutuamente exclusivas por cenário (`TCP` vs `UDP`; `Monomodo` vs `Multimodo`; `Máquinas Virtuais` vs `Containers`) e 6 itens inequívocos por atividade.
   - **`fill-slot` (1 item)**: ambiente Python 3.12 explicitamente declarado, `"language": "python"`, 4 tokens e apenas 1 token sintática e logicamente correto (`tok-1`).
   - **`decision-dialogue` (4 itens)**: exatamente 3 etapas (`steps`) por atividade, 3 escolhas (`choices`) por etapa e exatamente 1 escolha adequada (`"correct": true`) por etapa.

2. **Descrições acessíveis dos quatro diagramas (`visual-hotspot`)**:
   - **`N9-TRC-022` (Tabela de Roteamento IPv4)**: `accessibleDescription` enumera integralmente os quatro prefixos (`0.0.0.0/0`, `10.40.0.0/16`, `10.40.12.0/22` e `10.40.14.0/24`), seus próximos saltos e faixas de cobertura para o destino `10.40.14.85`, dispensando dependência de cor ou posição.
   - **`N9-TRC-028` (Levantamento Wi-Fi 5 GHz)**: `accessibleDescription` descreve cada ponto de acesso, canal, nível RSSI/SNR e a zona de atenuação (`-84 dBm`) no corredor central com porta corta-fogo.
   - **`N9-TRC-032` (Resolução DNS Recursiva e Autoritativa)**: `accessibleDescription` detalha a função de cada nó (`Stub Resolver`, `Servidor DNS Recursivo Local`, `Servidor Raiz` e `Servidor DNS Autoritativo`), permitindo identificar o resolvedor recursivo exclusivamente pelo papel técnico.
   - **`N9-TRC-036` (Túnel VPN Site-to-Site IPsec)**: `accessibleDescription` explicita os parâmetros da Fase 1 IKEv2, do transporte UDP 500/4500 e dos seletores de tráfego da Fase 2 de ambos os gateways, evidenciando textualmente a divergência `10.99.0.0/24` na filial.

3. **Verificação lexical (`ENADE`)**:
   - Confirmada a **ausência total** da palavra `ENADE` nos campos exibidos ao jogador (`title`, `area`, `context`, `instruction`, `help`, `explanation` e `payload`), bem como em todo o arquivo `n9-trc-02.json`.

---

## 4. Fontes, Localizadores e Itens Marcados para Conferência

- **Fonte normativa principal (`primary`)**: todas as 20 atividades possuem exatamente uma fonte `primary` do tipo `official-reference` referenciando a **Portaria Inep nº 172/2026 (Tecnologia em Redes de Computadores), arts. 5º e 6º**, preservando explicitamente:
  - `art. 6º, XI` na atividade de virtualização/containers (`N9-TRC-033`);
  - `art. 6º, XIII` nas atividades de segurança da informação (`N9-TRC-036`, `N9-TRC-037` e `N9-TRC-040`).
- **Fontes técnicas (`technical`)**:
  - **18 atividades** (`sourceVerificationNeeded: false`) apoiam-se em normas e especificações públicas consolidadas: RFCs do IETF (`768`, `1034`, `1035`, `1542`, `1812`, `1918`, `2131`, `2474`, `3022`, `3246`, `4301`, `4632`, `4861`, `4862`, `7296`, `9293`), padrões IEEE (`802.11`, `802.1AX`), padrões de cabeamento/óptica (`ANSI/TIA-568`, `ANSI/TIA-569`, `ANSI/TIA-607`, `ISO/IEC 11801`, `IEC 61754`, `ITU-T G.652`), normas ISO/IEC (`20000-1`) e publicações NIST (`SP 800-41 Rev. 1`, `SP 800-125`, `SP 800-190`).
  - **2 atividades** estão marcadas com `"sourceVerificationNeeded": true` para conferência editorial de referência documental específica:
    1. **`N9-TRC-035`**: utiliza documentação técnica geral do gerenciador `systemd` e manuais do kernel Linux / permissões POSIX sem número único de norma ISO/RFC.
    2. **`N9-TRC-038`**: utiliza documentação oficial da linguagem Python 3 (Python Software Foundation) para compreensão de listas e expressões booleanas.

---

## 5. Limitações e Pontos para Auditoria no Repositório Principal

1. **Indisponibilidade de leitura de dois arquivos de suporte no ambiente de geração**:
   - Os arquivos `LearningActivityCatalog.ts` e `validateLearningActivities.ts` não puderam ser abertos neste ambiente. A conformidade estrutural e de tipos foi integralmente verificada contra `learning-activities.schema.json`, `editorial.schema.json`, `matriz-trc-lote-02.md` e o padrão adotado em `n9-trc-01.json`.
   - Recomenda-se executar o validador oficial (`validateLearningActivities.ts`) e os testes de registro do catálogo (`LearningActivityCatalog.ts`) no repositório principal antes da integração final.
2. **Conferência de localizadores e citações institucionais**:
   - Validar as duas atividades marcadas com `sourceVerificationNeeded: true` (`N9-TRC-035` e `N9-TRC-038`) e confirmar a aderência dos `conceptId` (`TRC01-IPV6-01` a `TRC04-GCM-01`) à taxonomia mestre do catálogo.
3. **Escopo da declaração**:
   - Este relatório registra exclusivamente a auditoria automatizada de estrutura, cotas, consistência técnica e acessibilidade textual; não constitui revisão pedagógica humana, homologação formal de acessibilidade nem aprovação final para publicação.

---

## 6. Validação no repositório principal

Após o recebimento, o lote foi validado pelo contrato TypeScript e pelo pipeline do projeto:

- JSON completo e analisável, com 20 IDs únicos e contínuos de `N9-TRC-021` a `N9-TRC-040`;
- validador editorial do repositório executado sem erros;
- testes direcionados de contrato, catálogo, seleção diária e interface: 20 aprovados;
- testes de conteúdo e contratos: 138 aprovados;
- lint, TypeScript, build de produção e `git diff --check`: aprovados;
- `N9-TRC-035` e `N9-TRC-038` permanecem corretamente marcadas para conferência posterior de suas fontes técnicas.
