import type { SequencePuzzle } from '../../domain/puzzles/SequencePuzzle';

const allCourses = ['CC', 'SI', 'TADS', 'TGTI', 'TRC'] as const;
const fictionalSource = Object.freeze({ role: 'primary' as const, type: 'fictional' as const,
  description: 'Desafio autoral fictício criado exclusivamente como transição lúdica da Jornada N9.' });

/** Desafios de navegação: não integram as 25 questões nem alteram a nota da avaliação. */
export const EVALUATION_JOURNEY_PUZZLES: readonly SequencePuzzle[] = Object.freeze([
  {
    kind: 'sequence', id: 'E26-P-COM-TUTORIAL', title: 'Acordar o Robô N9',
    narrative: 'O pequeno Robô N9 está adormecido e guarda a chave digital da primeira sala. Organize a sequência de ativação para fazê-lo despertar, testar seus sistemas e projetar a rota da jornada.',
    blocks: [
      { id: 'energia', text: 'Encaixar o módulo de energia no compartimento do robô.' },
      { id: 'inicializar', text: 'Inicializar o núcleo de controle usando a energia disponível.' },
      { id: 'sensores', text: 'Executar o autoteste dos sensores e confirmar que respondem.' },
      { id: 'rota', text: 'Carregar no núcleo a rota segura para a primeira sala.' },
      { id: 'projetar', text: 'Projetar a rota confirmada e liberar o acesso à Fase 1.' },
    ],
    correctOrder: ['energia', 'inicializar', 'sensores', 'rota', 'projetar'],
    hints: [
      'O núcleo precisa receber energia antes de executar qualquer instrução.',
      'Confirme os sensores antes de confiar ao robô uma rota de deslocamento.',
      'A projeção da rota é a última ação: ela usa uma rota já carregada e verificada.',
    ],
    explanation: 'Com energia disponível, o núcleo pôde iniciar, testar os sensores, carregar a rota e somente então projetá-la. O Robô N9 despertou e liberou a primeira fase.',
    reward: { xp: 50 }, unlocks: { mapId: 'base-n9', objectId: 'door' }, collectionId: 'enade-2026',
    pedagogicalOrigin: 'Desafio autoral fictício de ambientação da Jornada N9.', courses: allCourses,
    area: 'Pensamento computacional', competencies: ['Reconhecer dependências em uma sequência de inicialização tecnológica.'],
    difficulty: 'introductory', sources: [fictionalSource], validationStatus: 'under-ai-review',
  },
  {
    kind: 'sequence', id: 'E26-P-COM-CORE', title: 'Reativar o Núcleo de Energia',
    narrative: 'Depois da quarta fase, uma sobrecarga desligou a ponte para a sala final. Reorganize os módulos do núcleo para estabilizar a energia e abrir o último trecho da rota.',
    blocks: [
      { id: 'resfriar', text: 'Ativar o resfriamento de emergência do núcleo.' },
      { id: 'diagnosticar', text: 'Executar o diagnóstico e identificar os módulos estáveis.' },
      { id: 'isolar', text: 'Isolar o módulo instável indicado pelo diagnóstico.' },
      { id: 'sincronizar', text: 'Sincronizar os módulos estáveis com o controlador da ponte.' },
      { id: 'liberar', text: 'Liberar a ponte de acesso à quinta fase.' },
    ],
    correctOrder: ['resfriar', 'diagnosticar', 'isolar', 'sincronizar', 'liberar'],
    hints: [
      'Primeiro torne o núcleo seguro o suficiente para executar o diagnóstico.',
      'O módulo problemático só pode ser isolado depois de ser identificado.',
      'A ponte é liberada depois que os módulos estáveis estão sincronizados.',
    ],
    explanation: 'O núcleo foi resfriado antes do diagnóstico; o módulo instável foi isolado, os demais foram sincronizados e a ponte pôde ser liberada com segurança.',
    reward: { xp: 50 }, unlocks: { mapId: 'base-n9', objectId: 'door' }, collectionId: 'enade-2026',
    pedagogicalOrigin: 'Desafio autoral fictício de ambientação da Jornada N9.', courses: allCourses,
    area: 'Pensamento computacional', competencies: ['Ordenar ações tecnológicas a partir de suas dependências.'],
    difficulty: 'introductory', sources: [fictionalSource], validationStatus: 'under-ai-review',
  },
]);
