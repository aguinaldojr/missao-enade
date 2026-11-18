# N9 — Jornada Digital: lote SI-M08 — Interação humano-computador e segurança

Autoria documental assistida por IA — 17/11/2026. Este lote cria cinco candidatas inéditas para os slots restantes de `SI-M08 — Interação humano-computador e segurança da informação`. Não gera JSON, não integra conteúdo ao jogo e não altera o catálogo executável.

## 1. Escopo e distribuição

| Slot | ID candidato | Jornada | Dificuldade | Gabarito | Artefato principal |
|---|---|---|---|---|---|
| SI-A-M08-N01 | E26-Q-SI-34 | A | introductory | D | Wireframe de envio e estados |
| SI-B-M08-N01 | E26-Q-SI-35 | B | intermediate | B | Formulário, erros e foco |
| SI-B-M08-N02 | E26-Q-SI-36 | B | advanced | E | Matriz de papéis e permissões |
| SI-C-M08-N01 | E26-Q-SI-37 | C | introductory | C | Log de autenticação/autorização |
| SI-C-M08-N02 | E26-Q-SI-38 | C | intermediate | A | Cartões de requisitos criptográficos |

Com o compartilhamento planejado `E26-Q-TRC-07` (`intermediate`), a macroárea alcança **2 introductory, 3 intermediate e 1 advanced**.

### Fontes e limites

| Papel | Fonte | Uso e limite |
|---|---|---|
| primary | Portaria Inep 168/2026, arts. 4º–6º; reprodução registrada em F07 | Sustenta SI-I/SI-II e segurança da informação/SI no inciso XVII. O inciso individual de IHC permanece pendente de reconferência no plano local. |
| technical | W3C, Web Content Accessibility Guidelines 2.2 | Apoia rótulos, instruções e identificação textual de erros em SI-35. Não fornece o formulário fictício. |
| technical | NIST Cybersecurity Framework, PR.AA-05, e materiais de RBAC | Apoia menor privilégio, papéis e segregação de funções em SI-36. Não é política institucional brasileira. |
| technical | NIST SP 800-63B-4, Digital Identity Guidelines | Apoia o conceito de autenticação em SI-37. A autorização do caso é definida pela política fornecida. |

- F07: `https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf`.
- WCAG 2.2: `https://www.w3.org/TR/WCAG22/`.
- NIST CSF: `https://www.nist.gov/cyberframework`.
- NIST SP 800-63B-4: `https://doi.org/10.6028/NIST.SP.800-63b-4`.
- Interfaces, pessoas, permissões, logs e requisitos são fictícios. Cada resposta decorre das premissas apresentadas, não de configuração institucional real.

## 2. E26-Q-SI-34 — O clique que parecia não funcionar

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-34 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-A-M08-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Interação humano-computador e segurança da informação |
| Rastreabilidade | SI-M08 / SI-I; F07, art. 5º, I; objeto de IHC do art. 6º, inciso individual pendente de reconferência |
| difficulty | introductory |
| Objetivo pedagógico | Aplicar visibilidade do estado e prevenção de ação duplicada em uma interação assíncrona. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; interface, observação e respostas são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Relacionar feedback de estado, prevenção de duplicidade e recuperação ao controle percebido pela pessoa usuária.

### Objeto visual proposto — sequência atual

```text
ANTES DO CLIQUE                  DEPOIS DO CLIQUE
┌─────────────────────┐          ┌─────────────────────┐
│ arquivo: projeto.zip│          │ arquivo: projeto.zip│
│ [ ENVIAR ]          │   ->     │ [ ENVIAR ]          │
│                     │          │                     │
└─────────────────────┘          └─────────────────────┘
```

Observação do teste: o envio leva oito segundos, mas a tela não muda. Algumas pessoas clicam três vezes e o sistema cria três registros.

### Texto ao jogador

**Enunciado.** Qual alteração trata diretamente o problema observado?

- **A.** Trocar apenas a cor do botão depois de oito segundos, sem informar o que ocorreu.
- **B.** Remover o botão e iniciar o envio sempre que a página abrir.
- **C.** Manter a tela igual e acrescentar no manual que o envio pode demorar.
- **D.** Informar “enviando” e o progresso, impedir nova submissão enquanto a operação estiver ativa e apresentar sucesso, erro e opção de tentar novamente.
- **E.** Criar três registros e pedir que a pessoa exclua os duplicados ao final.

### Resposta, explicação e feedbacks

**Única alternativa correta: D.** A solução torna o estado visível, evita repetição involuntária e oferece recuperação quando houver falha. Esses elementos tratam a causa observada sem ocultar a duração real.

| Alternativa | Feedback |
|---|---|
| A | Cor isolada e tardia não informa andamento, sucesso ou falha. |
| B | Retira controle e pode enviar conteúdo sem intenção explícita. |
| C | O problema ocorre durante a interação e precisa de retorno na própria interface. |
| D | Correta: combina visibilidade, prevenção de duplicidade e recuperação. |
| E | Transfere à pessoa um erro que a interface pode impedir. |

**Atratividade e acessibilidade:** o progresso pode ser animado, mas deve incluir texto e valor; mensagens devem ser anunciadas por região de estado e respeitar movimento reduzido.

## 3. E26-Q-SI-35 — O erro vermelho que ninguém encontrou

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-35 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M08-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Interação humano-computador e segurança da informação |
| Rastreabilidade | SI-M08 / SI-I; F07, art. 5º, I; objeto de IHC do art. 6º, inciso individual pendente de reconferência |
| difficulty | intermediate |
| Objetivo pedagógico | Selecionar correção de formulário que integre prevenção, identificação e recuperação de erros com acessibilidade. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; formulário, teste e respostas são autorais e fictícios. |
| Complemento documental | T19 — W3C WCAG 2.2, rótulos/instruções e identificação de erros. |
| Complemento documental URL | https://www.w3.org/TR/WCAG22/ |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Avaliar formulário por clareza, prevenção de erros, foco, semântica e independência de cor.

### Objeto visual proposto — formulário atual

```text
┌──────────────────────────────────┐
│ [ seu e-mail                   ] │  <- apenas placeholder
│ [ data                         ] │
│                        [ENVIAR]  │
│                 inválido          │  <- somente vermelho
└──────────────────────────────────┘
```

No teste por teclado, o envio apaga os valores, não move o foco para o erro e o leitor de tela não associa “inválido” a nenhum campo.

### Texto ao jogador

**Enunciado.** Qual conjunto de mudanças resolve as barreiras sem depender apenas de aparência visual?

- **A.** Aumentar a saturação do vermelho e manter placeholder, foco e limpeza dos campos.
- **B.** Fornecer rótulos e formatos esperados, preservar valores válidos, descrever o erro em texto associado ao campo e levar o foco ao resumo ou primeiro erro.
- **C.** Exibir todos os erros somente em uma imagem no topo do formulário.
- **D.** Retirar validação e aceitar qualquer valor para evitar mensagens de erro.
- **E.** Manter o formulário e orientar pessoas que usam teclado a trocar para mouse.

### Resposta, explicação e feedbacks

**Única alternativa correta: B.** Rótulos e instruções ajudam a prevenir erros; mensagens textuais associadas e foco previsível permitem localizar e corrigir; preservar entradas reduz retrabalho.

| Alternativa | Feedback |
|---|---|
| A | Intensidade de cor não cria nome, instrução, associação ou ordem de foco. |
| B | Correta: combina prevenção, identificação programática e recuperação. |
| C | Imagem sem associação textual mantém a barreira e pode ocultar detalhes. |
| D | Ausência de validação pode aceitar dados que não atendem ao processo. |
| E | Teclado é uma forma válida de operação e não deve ser excluída. |

**Atratividade e acessibilidade:** o protótipo futuro pode alternar “antes/depois”, com foco visível e leitura anunciada; o documento fornece representação textual integral.

## 4. E26-Q-SI-36 — Quem cria não aprova o próprio pagamento

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-36 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-B-M08-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Interação humano-computador e segurança da informação |
| Rastreabilidade | SI-M08 / SI-II; F07, art. 5º, II; art. 6º, XVII |
| difficulty | advanced |
| Objetivo pedagógico | Aplicar RBAC, menor privilégio e segregação de funções a fluxo com exceção controlada. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; papéis, política e respostas são autorais e fictícios. |
| Complemento documental | T20 — NIST CSF PR.AA-05 e materiais de RBAC; menor privilégio e segregação de funções. |
| Complemento documental URL | https://www.nist.gov/cyberframework |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Projetar permissões por papel, impedir conflito na mesma transação e controlar acesso emergencial.

### Objeto visual proposto — matriz mínima

| Papel | Criar solicitação | Aprovar | Executar pagamento | Ler trilha |
|---|---:|---:|---:|---:|
| Solicitante | sim | não | não | próprias |
| Aprovador | não | sim* | não | relacionadas |
| Financeiro | não | não | sim | relacionadas |
| Auditor | não | não | não | todas |

`*` Regra dinâmica: ninguém pode aprovar solicitação que tenha criado. Acesso emergencial deve expirar em uma hora, registrar motivo e ser revisado por outra pessoa.

### Texto ao jogador

**Enunciado.** Qual implementação preserva a matriz e as duas regras adicionais?

- **A.** Dar a todas as pessoas os quatro papéis e confiar apenas no compromisso de não os usar juntos.
- **B.** Permitir que Aprovador também execute pagamento para reduzir o número de etapas.
- **C.** Criar uma conta compartilhada de emergência sem expiração, motivo ou autoria individual.
- **D.** Impedir apenas que a mesma pessoa crie e aprove no mesmo dia, mesmo em solicitações diferentes.
- **E.** Autorizar por papel e por solicitação, bloquear autoaprovação, conceder emergência temporária e registrada e exigir revisão independente posterior.

### Resposta, explicação e feedbacks

**Única alternativa correta: E.** Papéis limitam permissões; a regra por objeto impede autoaprovação; a emergência é temporária, atribuível e revisada. O conjunto preserva menor privilégio e segregação sem eliminar tratamento excepcional.

| Alternativa | Feedback |
|---|---|
| A | Acumular papéis viola menor privilégio e depende apenas de comportamento voluntário. |
| B | Aprovação e execução ficam concentradas na mesma função crítica. |
| C | Conta compartilhada elimina autoria e mantém privilégio além da necessidade. |
| D | A regra é sobre a mesma solicitação, não sobre qualquer ação no mesmo dia. |
| E | Correta: combina RBAC, restrição dinâmica, temporariedade, registro e revisão. |

**Atratividade e acessibilidade:** permissões podem aparecer como cartões encaixados em papéis, mas cada célula deve conter “permitido”, “negado” ou “condicional”, além do símbolo.

## 5. E26-Q-SI-37 — Identidade confirmada, acesso negado

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-37 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M08-N01 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Interação humano-computador e segurança da informação |
| Rastreabilidade | SI-M08 / SI-II; F07, art. 5º, II; art. 6º, XVII |
| difficulty | introductory |
| Objetivo pedagógico | Distinguir autenticação de autorização em registros de acesso a recursos. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; identidade, política e log são autorais e fictícios. |
| Complemento documental | T21 — NIST SP 800-63B-4; conceito de autenticação de identidade digital. |
| Complemento documental URL | https://doi.org/10.6028/NIST.SP.800-63b-4 |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Diferenciar comprovação de identidade da decisão sobre ações permitidas em um recurso.

### Objeto visual proposto — log de acesso

```text
09:10 LOGIN usuario=maria resultado=sucesso
09:11 GET /documentos/maria resultado=200 politica=proprietaria
09:12 GET /documentos/joao  resultado=403 politica=proprietaria
```

Política: cada pessoa autenticada pode consultar apenas os próprios documentos.

### Texto ao jogador

**Enunciado.** Qual interpretação está correta?

- **A.** A autenticação de Maria falhou às 09:12 porque o servidor retornou 403.
- **B.** Maria não estava identificada em nenhuma das três linhas.
- **C.** A autenticação foi bem-sucedida, mas a autorização negou o segundo recurso por não pertencer a Maria.
- **D.** Autenticação e autorização são sinônimos e ambos falharam apenas para o documento de João.
- **E.** O código 200 demonstra que Maria pode consultar qualquer documento do sistema.

### Resposta, explicação e feedbacks

**Única alternativa correta: C.** O login confirma a identidade apresentada. Depois, a política verifica se essa identidade possui permissão sobre cada recurso. O primeiro documento atende à regra; o segundo, não.

| Alternativa | Feedback |
|---|---|
| A | O log registra autenticação bem-sucedida; 403 ocorre numa decisão posterior de acesso. |
| B | O campo `usuario=maria` e o sucesso do login identificam a sessão. |
| C | Correta: separa identidade autenticada de permissão sobre o recurso. |
| D | São etapas relacionadas, mas com finalidades distintas. |
| E | Permissão sobre um recurso próprio não se estende automaticamente aos demais. |

**Atratividade e acessibilidade:** o fluxo pode mostrar dois portões rotulados “Quem é?” e “Pode fazer?”, acompanhado do log textual.

## 6. E26-Q-SI-38 — Segredo, sigilo e prova de alteração

### Ficha editorial

| Campo | Valor |
|---|---|
| ID | E26-Q-SI-38 |
| Versão | 1 |
| Contrato / classification | question / SI |
| Slot | SI-C-M08-N02 |
| collectionId | enade-2026 |
| pedagogicalOrigin | Referência normativa de SI e autoria experimental N9, sob governança editorial assistida por IA. |
| Cursos / courses | SI |
| Área / area | Interação humano-computador e segurança da informação |
| Rastreabilidade | SI-M08 / SI-II; F07, art. 5º, II; art. 6º, XVII |
| difficulty | intermediate |
| Objetivo pedagógico | Associar requisitos de verificação de senha, confidencialidade recuperável e integridade a mecanismos distintos. |
| source.type / year / documentId | official-reference / 2026 / Portaria Inep 168/2026 |
| source.url | https://proen.ufopa.edu.br/media/file/site/proen/documentos/2026/712d747f-55a1-4272-9fa6-dc48d7e25003.pdf |
| source.description | Referência normativa específica de SI; requisitos e respostas são autorais e fictícios. |
| Status editorial / validationStatus | under-ai-review |

**Competências / competencies — textos propostos:**

- Selecionar mecanismos de proteção coerentes com propriedades de segurança diferentes.

### Objeto visual proposto — três cartões de requisito

| Requisito | Propriedade necessária |
|---|---|
| R1 — verificar senha sem recuperar o texto original | verificação resistente a tentativa e base vazada |
| R2 — permitir que pessoas autorizadas leiam relatório confidencial | sigilo com recuperação controlada |
| R3 — detectar alteração não autorizada em arquivo distribuído | integridade e autenticidade da verificação |

### Texto ao jogador

**Enunciado.** Qual associação atende aos três requisitos?

- **A.** R1: derivação de senha lenta com salt; R2: criptografia com gestão de chaves; R3: código de autenticação ou assinatura verificável.
- **B.** R1: criptografia reversível com chave pública no sistema; R2: hash sem chave; R3: compactação ZIP.
- **C.** R1: armazenar texto puro para comparação; R2: renomear a extensão; R3: copiar o arquivo para outra pasta.
- **D.** R1: hash rápido e igual para todas as pessoas, sem salt; R2: apagar a chave após cifrar; R3: data de modificação informada pelo próprio arquivo.
- **E.** Usar somente a mesma soma de verificação simples para senha, relatório e arquivo.

### Resposta, explicação e feedbacks

**Única alternativa correta: A.** Senhas devem ser verificadas sem recuperação do segredo e com custo contra tentativas; relatórios precisam de cifragem reversível somente por quem possui a chave; integridade contra alteração adversária exige verificação autenticada, não apenas soma substituível.

| Alternativa | Feedback |
|---|---|
| A | Correta: usa mecanismo diferente conforme a propriedade exigida. |
| B | Hash sem chave não oferece leitura confidencial, e compactação não prova integridade adversarial. |
| C | Nenhuma das três ações fornece a proteção declarada. |
| D | Senha sem salt facilita comparação entre registros; destruir a chave impede recuperação autorizada; metadado pode ser alterado. |
| E | Um único mecanismo simples não atende verificação de segredo, sigilo recuperável e autenticidade. |

**Atratividade e acessibilidade:** os cartões podem ser arrastados para três cofres simbólicos, mas nome, finalidade e associação permanecem disponíveis em texto e por botões de teclado.

## 7. Segunda passagem independente de revisão assistida por IA

| ID | Resolução independente | Verificações e limites | Decisão |
|---|---|---|---|
| SI-34 | D é a única opção que informa estado, impede duplicidade e oferece recuperação. | O item avalia visibilidade e controle, não tempo mínimo de resposta ou tecnologia de upload. | manter `under-ai-review` |
| SI-35 | B atende rótulo, descrição textual, associação, foco e preservação. | A resposta não depende de decorar números de critérios WCAG; as barreiras estão no caso. | manter `under-ai-review` |
| SI-36 | E preserva papéis mínimos, bloqueia conflito por solicitação e controla exceção. | A política é fechada; não se afirma que a matriz cubra todos os controles de uma organização real. | manter `under-ai-review` |
| SI-37 | Login comprova identidade; a política decide o recurso. C é a única separação correta. | O significado necessário de 200/403 é apoiado pelo próprio log e pela política. | manter `under-ai-review` |
| SI-38 | A associa derivação de senha, criptografia e verificação autenticada às três propriedades. | Algoritmos concretos, tamanhos de chave e parâmetros ficam fora do escopo para evitar dependência tecnológica. | manter `under-ai-review` |

## 8. Auditoria rápida do lote

- Cinco IDs novos e distintos: `E26-Q-SI-34` a `E26-Q-SI-38`; nenhum aparece em outro lote.
- Cinco questões com cinco alternativas, feedback A–E e um único gabarito: D/B/E/C/A.
- Dificuldades: duas `introductory`, duas `intermediate` e uma `advanced`, exatamente a lacuna de SI-M08.
- Conceitos clássicos priorizados: visibilidade, prevenção/recuperação de erro, acessibilidade, RBAC, menor privilégio, segregação, autenticação, autorização, hash de senha, criptografia e integridade autenticada.
- Recursos variados e necessários: wireframes, formulário, matriz de acesso, log e cartões de requisitos.
- Não há repetição de COM-04 (barreira de participação), COM-10 (credencial compartilhada) ou TRC-07 (firewall com estado). As operações cognitivas e os artefatos são distintos.
- Nenhum texto ao jogador exibe a referência pedagógica interna reservada ou apresenta a política como regra institucional real.
- Permanecem pendentes: teste com estudantes, cotejo externo, calibração, validação especializada de segurança e homologação humana com tecnologias assistivas.
- Nenhum item foi convertido para JSON ou promovido para `ready-for-pilot`.

## 9. Preparação para etapa futura

Na integração final, wireframes e matrizes devem possuir equivalentes textuais; erros precisam de associação semântica e foco testado; arrastar cartões deve ter alternativa por botões. Exemplos de segurança não executarão código nem manipularão dados reais no navegador.
