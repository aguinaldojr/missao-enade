# N9 — Jornada Digital: complemento SI-M01 para a quarta partida

Autoria documental assistida por IA — 18/11/2026. Este lote cria duas questões de reserva, `E26-Q-SI-81` e `E26-Q-SI-82`, para completar a capacidade inédita de SI-M01 na quarta partida. Não gera JSON, não integra conteúdo e não altera partidas existentes.

Os cenários e números são fictícios. Os itens usam `classification: SI`, `courses: [SI]`, `collectionId: enade-2026` e `validationStatus: under-ai-review`. Conforme orientação desta etapa, as dificuldades são introdutória e intermediária.

## 1. Inventário

| ID | Macroárea | Conteúdo | Dificuldade | Gabarito | Recurso |
|---|---|---|---|---|---|
| E26-Q-SI-81 | SI-M01 | Centro e dispersão | introductory | D | Comparador de séries |
| E26-Q-SI-82 | SI-M01 | Modelagem de restrições lineares | intermediate | B | Cartões de recursos e modelo |

## 2. Fontes e rastreabilidade

| Código | Papel | Referência e limite de uso |
|---|---|---|
| F07 | primary | Portaria Inep nº 168/2026, arts. 5º–6º. Sustenta probabilidade, estatística, Pesquisa Operacional e análise para decisão no recorte de Sistemas de Informação; não prescreve os cenários. |
| T42 | technical | NIST/SEMATECH, *e-Handbook of Statistical Methods*, seção 1.3.5.6, *Measures of Scale*. Apoia média, amplitude e interpretação de variabilidade. |
| T43 | technical | NEOS Guide, *Linear Programming*. Apoia objetivo linear, restrições e distinção entre programação linear e inteira. |

URLs: `https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade`, `https://itl.nist.gov/div898/handbook/eda/section3/eda356.htm` e `https://neos-guide.org/guide/types/lp/`.

## 3. E26-Q-SI-81 — A mesma média, experiências diferentes

**Ficha editorial:** versão 1; SI-M01 / competência SI-II; área “Estatística descritiva para decisão”; `introductory`. Objetivo: distinguir medida de centro e dispersão na comparação de serviços. Fontes: F07 como `primary`; T42 como `technical`.

### Objeto apresentado

Dois serviços fictícios registraram o tempo, em minutos, de cinco execuções comparáveis:

| Execução | Serviço A | Serviço B |
|---:|---:|---:|
| 1 | 8 | 2 |
| 2 | 9 | 6 |
| 3 | 10 | 10 |
| 4 | 11 | 14 |
| 5 | 12 | 18 |

Resumo fornecido:

| Medida | Serviço A | Serviço B |
|---|---:|---:|
| média | 10 | 10 |
| mediana | 10 | 10 |
| amplitude (`máximo − mínimo`) | 4 | 16 |

**Enunciado.** Qual conclusão é sustentada por esses dados, sem atribuir uma causa não investigada?

- **A.** Os serviços têm comportamento idêntico porque possuem a mesma média.
- **B.** O Serviço B é sempre mais rápido porque apresentou a menor observação.
- **C.** O Serviço A possui maior dispersão porque seus valores estão mais próximos da média.
- **D.** Os centros observados são iguais, mas o Serviço B varia mais; é preciso investigar causas antes de explicar a diferença.
- **E.** A amostra prova que o Serviço A será mais rápido em todas as execuções futuras.

**Gabarito: D.** Média e mediana resumem o centro, enquanto a amplitude mostra maior espalhamento em B. Os cinco registros descrevem a amostra, mas não identificam causa nem garantem comportamento futuro.

| Alternativa | Feedback |
|---|---|
| A | A mesma média não elimina a diferença de dispersão. |
| B | Uma observação mínima não torna todas as demais menores. |
| C | Valores próximos do centro indicam menor, não maior, espalhamento. |
| D | Correta: separa centro, variabilidade e limite causal. |
| E | Uma amostra pequena não garante todas as observações futuras. |

**Acessibilidade e originalidade:** todos os valores e resumos estão em tabelas com cabeçalhos; um gráfico futuro seria apenas complementar. O item não repete SI-20, que trata agregação e estratificação entre dispositivos.

## 4. E26-Q-SI-82 — Planejar oficinas sem ultrapassar recursos

**Ficha editorial:** versão 1; SI-M01 / competência SI-II; área “Pesquisa Operacional”; `intermediate`. Objetivo: traduzir recursos, compromissos e benefício em um modelo de programação inteira, sem exigir solução pelo Simplex. Fontes: F07 como `primary`; T43 como `technical`.

### Objeto apresentado

A Base N9 planeja quantidades inteiras de duas oficinas:

| Oficina | Horas de mentoria | Horas de laboratório | Benefício |
|---|---:|---:|---:|
| A | 2 | 1 | 7 pontos |
| B | 1 | 3 | 9 pontos |

Há no máximo 40 horas de mentoria e 45 de laboratório. Compromissos já divulgados exigem pelo menos quatro oficinas A e cinco B. Considere `x` = quantidade de A e `y` = quantidade de B.

**Enunciado.** Qual modelo maximiza o benefício respeitando exatamente as condições fornecidas?

- **A.** Maximizar `7x + 9y`, com `2x + y ≥ 40`, `x + 3y ≥ 45` e `x,y ≥ 0`.
- **B.** Maximizar `7x + 9y`, com `2x + y ≤ 40`, `x + 3y ≤ 45`, `x ≥ 4`, `y ≥ 5` e `x,y` inteiros.
- **C.** Minimizar `7x + 9y`, com `x + y ≤ 40`, sem restrição de laboratório.
- **D.** Maximizar `x + y`, com `7x + 9y ≤ 45`, usando pontos como se fossem horas.
- **E.** Maximizar `7x + 9y`, com `2x + 3y ≤ 40` e `x + y ≤ 45`, permitindo quantidades fracionárias.

**Gabarito: B.** Os coeficientes de cada restrição vêm do consumo por oficina; “no máximo” produz `≤`, e os compromissos produzem limites mínimos. Como oficinas são contagens, as variáveis devem ser inteiras.

| Alternativa | Feedback |
|---|---|
| A | Os sinais `≥` permitem exceder recursos definidos como máximos. |
| B | Correta: objetivo, dois recursos, mínimos e integralidade estão representados. |
| C | Troca maximização por minimização e elimina uma restrição necessária. |
| D | Confunde benefício com consumo e não modela os recursos fornecidos. |
| E | Mistura coeficientes das oficinas e aceita frações de uma oficina. |

**Acessibilidade e originalidade:** a tabela é acompanhada pela definição textual das variáveis e limites. Diferentemente de SI-09, centrada em escolher uma alocação viável e benéfica, este item cobra a construção do modelo.

## 5. Segunda passagem de revisão assistida por IA

| ID | Teste independente de resposta | Risco ou limitação | Decisão |
|---|---|---|---|
| SI-81 | Médias e medianas são 10; amplitudes são 4 e 16. Apenas D reconhece maior dispersão em B sem alegar causa. | Cinco registros não permitem generalização; essa limitação integra o gabarito. | `under-ai-review` |
| SI-82 | Consumo de mentoria gera `2x+y≤40`; laboratório gera `x+3y≤45`; compromissos e contagem completam apenas B. | O item formula, mas não resolve, o modelo; isso mantém dificuldade intermediária. | `under-ai-review` |

## 6. Auditoria editorial do lote

- IDs `E26-Q-SI-81` e `E26-Q-SI-82` eram inexistentes no projeto no início da etapa.
- Cada questão possui cinco alternativas, um gabarito e feedback individual A–E.
- Cálculos, unidades, sinais e coeficientes foram recalculados na segunda passagem.
- Ambas permanecem dentro do limite editorial e não dependem exclusivamente de visualização.
- Os textos ao jogador não mencionam avaliação externa nem instituição real.
- Nenhum conteúdo foi convertido, integrado ou promovido; ambos permanecem `under-ai-review`.
- Permanecem pendentes cotejo externo, PPC, calibragem com estudantes e homologação humana de acessibilidade.

## 7. Formulário de revisão posterior

| ID | Correção técnica | Resposta única | Adequação ao curso/PPC | Clareza em celular | Acessibilidade humana | Decisão e justificativa |
|---|---|---|---|---|---|---|
| E26-Q-SI-81 | pendente | pendente | pendente | pendente | pendente | — |
| E26-Q-SI-82 | pendente | pendente | pendente | pendente | pendente | — |

Com estes dois itens, SI-M01 possui a reserva necessária para fornecer duas questões inéditas à quarta partida, sujeita à auditoria consolidada da matriz completa.
