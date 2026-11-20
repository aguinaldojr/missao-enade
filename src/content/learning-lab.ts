export type LearningActivityType = 'choice' | 'binary-choice' | 'multiple-select' | 'order' | 'match' |
  'categorize' | 'complete-code' | 'hotspot' | 'decision-dialogue';

interface ActivityBase {
  readonly id: string;
  readonly type: LearningActivityType;
  readonly title: string;
  readonly area: string;
  readonly instruction: string;
  readonly context: string;
  readonly explanation: string;
  readonly xp: number;
}

export interface ChoiceActivity extends ActivityBase {
  readonly type: 'choice';
  readonly options: readonly { readonly id: string; readonly text: string }[];
  readonly correctId: string;
}

export interface BinaryChoiceActivity extends ActivityBase {
  readonly type: 'binary-choice';
  readonly statement: string;
  readonly correctValue: boolean;
}

export interface MultipleSelectActivity extends ActivityBase {
  readonly type: 'multiple-select';
  readonly requiredCount: number;
  readonly options: readonly { readonly id: string; readonly text: string; readonly correct: boolean }[];
}

export interface OrderActivity extends ActivityBase {
  readonly type: 'order';
  readonly blocks: readonly { readonly id: string; readonly text: string }[];
  readonly correctOrder: readonly string[];
}

export interface MatchActivity extends ActivityBase {
  readonly type: 'match';
  readonly pairs: readonly { readonly id: string; readonly left: string; readonly right: string }[];
}

export interface CategorizeActivity extends ActivityBase {
  readonly type: 'categorize';
  readonly categories: readonly { readonly id: string; readonly label: string; readonly description: string }[];
  readonly items: readonly { readonly id: string; readonly text: string; readonly categoryId: string }[];
}

export interface CompleteCodeActivity extends ActivityBase {
  readonly type: 'complete-code';
  readonly codeBefore: string;
  readonly codeAfter: string;
  readonly tokens: readonly { readonly id: string; readonly text: string }[];
  readonly correctTokenId: string;
}

export interface HotspotActivity extends ActivityBase {
  readonly type: 'hotspot';
  readonly nodes: readonly { readonly id: string; readonly label: string; readonly detail: string }[];
  readonly correctNodeId: string;
}

export interface DecisionDialogueActivity extends ActivityBase {
  readonly type: 'decision-dialogue';
  readonly steps: readonly {
    readonly id: string;
    readonly speaker: string;
    readonly message: string;
    readonly choices: readonly {
      readonly id: string;
      readonly text: string;
      readonly reaction: string;
      readonly correct: boolean;
    }[];
  }[];
}

export type LearningActivity = ChoiceActivity | BinaryChoiceActivity | MultipleSelectActivity | OrderActivity |
  MatchActivity | CategorizeActivity | CompleteCodeActivity | HotspotActivity | DecisionDialogueActivity;

/** Conteúdo isolado para avaliar mecânicas. Não integra o catálogo editorial nem as missões. */
export const SI_LEARNING_LAB: readonly LearningActivity[] = Object.freeze([
  {
    id: 'LAB-SI-CHOICE-01', type: 'choice', title: 'Pedido sem retrabalho', area: 'Sistemas empresariais', xp: 40,
    instruction: 'Escolha a decisão que elimina a duplicidade na origem.',
    context: 'Vendas, estoque e financeiro digitam o mesmo pedido em sistemas separados. Os totais divergem e a expedição recebe atualizações atrasadas.',
    options: [
      { id: 'A', text: 'Criar uma planilha diferente para cada setor.' },
      { id: 'B', text: 'Integrar o processo em um ERP com cadastro e regras compartilhados.' },
      { id: 'C', text: 'Enviar cópias do pedido por e-mail ao final do dia.' },
      { id: 'D', text: 'Aumentar o número de conferências manuais.' },
      { id: 'E', text: 'Guardar os pedidos apenas no sistema financeiro.' },
    ],
    correctId: 'B',
    explanation: 'O ERP integra dados e regras do processo transversal. Uma única origem reduz redigitação, divergências e atraso de atualização.',
  },
  {
    id: 'LAB-SI-ORDER-01', type: 'order', title: 'Incidente em produção', area: 'Gestão de serviços', xp: 50,
    instruction: 'Organize a resposta inicial ao incidente.',
    context: 'O portal de matrículas ficou indisponível. A equipe precisa restaurar o serviço e manter rastreabilidade, sem começar por mudanças improvisadas.',
    blocks: [
      { id: 'registrar', text: 'Registrar o incidente e seu impacto.' },
      { id: 'diagnosticar', text: 'Diagnosticar a causa provável com evidências.' },
      { id: 'restaurar', text: 'Aplicar a recuperação controlada e restaurar o serviço.' },
      { id: 'documentar', text: 'Validar o serviço e documentar a resolução.' },
    ],
    correctOrder: ['registrar', 'diagnosticar', 'restaurar', 'documentar'],
    explanation: 'Registrar, diagnosticar, restaurar e validar cria uma resposta controlada. A sequência preserva evidências e reduz o risco de uma mudança agravar o incidente.',
  },
  {
    id: 'LAB-SI-MATCH-01', type: 'match', title: 'Conecte a necessidade ao sistema', area: 'Sistemas de informação', xp: 60,
    instruction: 'Associe cada necessidade ao sistema mais adequado.',
    context: 'Uma rede varejista está revisando seu portfólio de sistemas. Faça as combinações sem confundir operação, relacionamento e cadeia de suprimentos.',
    pairs: [
      { id: 'erp', left: 'Integrar compras, estoque e financeiro', right: 'ERP' },
      { id: 'crm', left: 'Acompanhar relacionamento e oportunidades', right: 'CRM' },
      { id: 'scm', left: 'Coordenar fornecedores e distribuição', right: 'SCM' },
    ],
    explanation: 'ERP integra processos internos, CRM organiza o relacionamento com clientes e SCM coordena o fluxo da cadeia de suprimentos.',
  },
  {
    id: 'LAB-SI-CATEGORY-01', type: 'categorize', title: 'Operação ou análise?', area: 'Dados e BI', xp: 60,
    instruction: 'Envie cada cenário para OLTP ou OLAP.',
    context: 'O time de dados separa cargas operacionais das consultas analíticas para evitar que relatórios pesados prejudiquem as transações diárias.',
    categories: [
      { id: 'oltp', label: 'OLTP', description: 'Transações curtas do dia a dia' },
      { id: 'olap', label: 'OLAP', description: 'Análise histórica e agregada' },
    ],
    items: [
      { id: 'venda', text: 'Registrar uma venda no caixa', categoryId: 'oltp' },
      { id: 'painel', text: 'Comparar faturamento mensal por região', categoryId: 'olap' },
      { id: 'estoque', text: 'Atualizar a quantidade após uma saída', categoryId: 'oltp' },
      { id: 'tendencia', text: 'Analisar a tendência de três anos', categoryId: 'olap' },
    ],
    explanation: 'OLTP sustenta operações frequentes e consistentes. OLAP favorece consultas históricas, agregações e apoio à decisão.',
  },
  {
    id: 'LAB-SI-CODE-01', type: 'complete-code', title: 'Complete a consulta', area: 'Banco de dados', xp: 70,
    instruction: 'Arraste ou selecione o trecho que filtra somente clientes com total acima de 1.000.',
    context: 'Considere SQL compatível com MySQL 8 e Oracle Database 19c. A consulta agrupa pedidos por cliente antes de aplicar o filtro.',
    codeBefore: 'SELECT cliente_id, SUM(valor) AS total\nFROM pedidos\nGROUP BY cliente_id\n',
    codeAfter: ';',
    tokens: [
      { id: 'correct', text: 'HAVING SUM(valor) > 1000' },
      { id: 'where', text: 'WHERE SUM(valor) > 1000' },
      { id: 'order', text: 'ORDER BY SUM(valor) > 1000' },
      { id: 'distinct', text: 'DISTINCT SUM(valor) > 1000' },
    ],
    correctTokenId: 'correct',
    explanation: 'HAVING filtra grupos depois do GROUP BY. WHERE atua sobre linhas antes da agregação e não deve receber SUM nesse ponto da consulta.',
  },
  {
    id: 'LAB-SI-HOTSPOT-01', type: 'hotspot', title: 'Encontre o ponto frágil', area: 'Modelagem de dados', xp: 70,
    instruction: 'Selecione o elemento que viola a regra de relacionamento.',
    context: 'Cada pedido deve pertencer a exatamente um cliente. Um cliente pode possuir vários pedidos. O diagrama abaixo contém uma cardinalidade incompatível com essa regra.',
    nodes: [
      { id: 'cliente', label: 'CLIENTE', detail: 'id_cliente (PK)' },
      { id: 'relation', label: '0..1  — realiza —  0..N', detail: 'Cardinalidade do relacionamento' },
      { id: 'pedido', label: 'PEDIDO', detail: 'id_pedido (PK), id_cliente (FK)' },
    ],
    correctNodeId: 'relation',
    explanation: 'O lado do cliente para cada pedido deve indicar exatamente 1, e não 0..1. A chave estrangeira obrigatória representa que todo pedido pertence a um cliente.',
  },
  {
    id: 'LAB-SI-BINARY-01', type: 'binary-choice', title: 'Quem permanece no resultado?', area: 'Banco de dados', xp: 40,
    instruction: 'Decida se a afirmação é verdadeira ou falsa.',
    context: 'Considere a consulta: SELECT c.nome, p.id FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id;',
    statement: 'Um cliente sem nenhum pedido pode aparecer no resultado com p.id igual a NULL.',
    correctValue: true,
    explanation: 'Verdadeiro. LEFT JOIN preserva todas as linhas da tabela à esquerda, clientes. Quando não existe pedido correspondente, as colunas de pedidos aparecem como NULL.',
  },
  {
    id: 'LAB-SI-MULTI-01', type: 'multiple-select', title: 'Serviço disponível mesmo com falha', area: 'Infraestrutura e continuidade', xp: 60,
    instruction: 'Selecione exatamente três medidas que tratam diretamente a disponibilidade diante de uma falha de infraestrutura.',
    context: 'O portal acadêmico precisa continuar operando se uma instância falhar e deve recuperar seus dados quando houver perda do armazenamento principal.',
    requiredCount: 3,
    options: [
      { id: 'redundancy', text: 'Manter uma instância redundante em outro domínio de falha.', correct: true },
      { id: 'failover', text: 'Usar monitoramento de saúde e failover para a instância íntegra.', correct: true },
      { id: 'restore', text: 'Manter backup com restauração periodicamente testada.', correct: true },
      { id: 'encryption', text: 'Criptografar os nomes armazenados no banco de dados.', correct: false },
      { id: 'password', text: 'Exigir uma senha maior para a equipe de suporte.', correct: false },
      { id: 'masking', text: 'Mascarar dados pessoais exibidos em homologação.', correct: false },
    ],
    explanation: 'Redundância, detecção com failover e restauração testada tratam continuidade e recuperação. Criptografia, senha e mascaramento são controles importantes, mas o efeito principal deles não é manter o serviço disponível após a falha descrita.',
  },
  {
    id: 'LAB-SI-DIALOGUE-01', type: 'decision-dialogue', title: 'Uma solução que ajuda sem decidir sozinha',
    area: 'Requisitos, dados e ética', xp: 80,
    instruction: 'Conduza a conversa e escolha a decisão profissional mais adequada em cada etapa.',
    context: 'Uma coordenação acadêmica quer um sistema para identificar estudantes que podem precisar de apoio. Você participa da primeira reunião como analista de SI.',
    steps: [
      {
        id: 'objective', speaker: 'Marina · coordenadora',
        message: 'Quero uma tela com inteligência artificial que diga quais estudantes estão em risco. Podemos começar pelo painel?',
        choices: [
          { id: 'goal', text: 'Antes, vamos definir qual decisão será apoiada, quem a tomará e que resultado esperamos.', reaction: 'Ótimo. O objetivo é priorizar contatos de apoio feitos pela equipe, não aplicar sanções.', correct: true },
          { id: 'screen', text: 'Sim. Primeiro escolhemos as cores e os gráficos do painel.', reaction: 'A aparência ainda não esclarece qual problema o sistema deve resolver.', correct: false },
          { id: 'model', text: 'Sim. Escolhemos imediatamente o modelo de IA com maior precisão.', reaction: 'Ainda não definimos objetivo, usuários, riscos nem critérios de sucesso.', correct: false },
        ],
      },
      {
        id: 'data', speaker: 'Marina · coordenadora',
        message: 'Temos frequência, notas, informações financeiras e anotações livres de atendimento. Vamos copiar tudo para o sistema?',
        choices: [
          { id: 'minimum', text: 'Não. Devemos justificar cada dado, usar o mínimo necessário e definir acesso e retenção.', reaction: 'Faz sentido. Vamos começar apenas com dados pertinentes ao apoio e documentar as regras de acesso.', correct: true },
          { id: 'all', text: 'Sim. Quanto mais dados forem copiados, melhor será qualquer análise.', reaction: 'Mais dados também ampliam exposição, vieses e uso incompatível com a finalidade.', correct: false },
          { id: 'public', text: 'Podemos publicar todos os dados no painel para facilitar o trabalho.', reaction: 'A equipe não precisa de acesso irrestrito, e o painel não deve expor informações pessoais.', correct: false },
        ],
      },
      {
        id: 'decision', speaker: 'Marina · coordenadora',
        message: 'Se o sistema indicar risco alto, ele pode bloquear automaticamente a matrícula até o estudante procurar a equipe?',
        choices: [
          { id: 'human', text: 'Não. O indicador deve apoiar uma revisão humana, com justificativa, contestação e registro da decisão.', reaction: 'Combinado. O sistema priorizará o contato, mas a equipe continuará responsável pela decisão.', correct: true },
          { id: 'automatic', text: 'Sim. Toda previsão deve produzir automaticamente uma restrição.', reaction: 'Uma previsão pode conter erro ou viés e não deve, sozinha, gerar uma decisão crítica.', correct: false },
          { id: 'hidden', text: 'Sim, desde que a regra permaneça oculta para evitar questionamentos.', reaction: 'Ocultar critérios reduz transparência, contestação e responsabilização.', correct: false },
        ],
      },
    ],
    explanation: 'A análise começa pelo objetivo e pelas pessoas envolvidas, aplica minimização e governança dos dados e mantém supervisão humana em decisões críticas. A tecnologia apoia o processo; não elimina responsabilidade, transparência ou possibilidade de contestação.',
  },
] satisfies readonly LearningActivity[]);

