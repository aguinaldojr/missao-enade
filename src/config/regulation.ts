export const regulation = {
  title: 'Regulamento de participação, rankings e benefícios',
  version: 'Versão piloto · 2026',
  summary: 'Regras de participação no N9 — Jornada Digital, classificação nos rankings, bônus acadêmico acumulável e horas de atividades complementares.',
  sections: [
    {
      title: '1. Objetivo e participação',
      paragraphs: [
        'O N9 — Jornada Digital é uma atividade educacional de apoio à preparação dos estudantes. A participação exige cadastro ativo, validação de RA e e-mail e uso da área correspondente ao curso e à modalidade do estudante.',
        'Perfis de professor são destinados exclusivamente a testes. Seus resultados não entram nos rankings e não geram bônus ou horas complementares.',
      ],
    },
    {
      title: '2. Organização dos rankings',
      paragraphs: [
        'Todos os rankings são separados por curso e modalidade. Estudantes de cursos ou modalidades diferentes não disputam a mesma classificação.',
      ],
      items: [
        'Ranking diário: até 10 posições, considerando a melhor pontuação do Modo Rápido e a melhor pontuação do Modo Avaliação recebidas no dia.',
        'Ranking de avaliação: até 15 posições, considerando o melhor resultado individual do Modo Avaliação no ciclo semanal.',
        'Ranking geral: até 15 posições, calculado pela soma das pontuações diárias do ciclo e, em caso de empate, pela quantidade de dias com participação.',
        'O ciclo começa na segunda-feira e termina no sábado. Resultados recebidos no domingo não integram a classificação.',
      ],
    },
    {
      title: '3. Pontuação e desempate',
      paragraphs: [
        'No Modo Avaliação, cada partida contém 25 questões. Cada acerto vale 100 pontos, totalizando até 2.500 pontos. Para comparação entre modos, o sistema também utiliza uma pontuação normalizada de 0 a 1.000.',
        'No Modo Rápido, a pontuação considera as atividades resolvidas corretamente na primeira tentativa. O estudante pode continuar tentando para aprender e concluir a missão, mas as novas tentativas da mesma atividade não alteram essa pontuação.',
      ],
      items: [
        'No ranking de avaliação, a ordem considera: maior pontuação normalizada, maior número de acertos, menor duração e resultado recebido primeiro.',
        'No ranking geral, a ordem considera: maior soma diária e maior número de dias ativos.',
        'Quando todos os critérios esportivos forem idênticos, o código público pseudônimo é usado apenas para produzir uma ordenação estável.',
      ],
    },
    {
      title: '4. Bônus acadêmico',
      paragraphs: [
        'Os benefícios das três categorias abaixo são cumulativos, com limite máximo de 3,0 pontos por estudante no ciclo. Dentro de cada categoria, aplicam-se os limites específicos indicados.',
      ],
      items: [
        'Avaliações com pelo menos 60%: 0,5 ponto pela primeira partida válida e mais 0,5 ponto pela segunda, totalizando no máximo 1,0 ponto. Tentativas adicionais não aumentam esse bônus.',
        'Ranking diário: 0,5 ponto por fechamento diário entre os 10 primeiros, limitado a dois dias e ao máximo de 1,0 ponto.',
        'Ranking geral: 1,0 ponto pela classificação entre os 15 primeiros no encerramento do ciclo.',
        'O ranking de avaliação exibe os 15 melhores desempenhos para acompanhamento e reconhecimento, sem criar uma quarta categoria de bônus.',
      ],
    },
    {
      title: '5. Aplicação do bônus',
      items: [
        'Presencial: o bônus será destinado à nota da Avaliação Integrada AV2.',
        'EAD: o bônus será destinado às duas disciplinas com as menores notas no semestre, após conferência acadêmica.',
        'A aplicação respeitará o limite máximo da nota e as normas acadêmicas vigentes. Empates ou situações excepcionais serão analisados pela coordenação.',
      ],
    },
    {
      title: '6. Horas de atividades complementares',
      paragraphs: [
        'Cada partida completa do Modo Avaliação com pelo menos 60% de acertos gera 1 hora de atividade complementar, limitada a 10 horas por estudante. As horas não substituem nem aumentam o bônus de nota e dependem de conferência e lançamento institucional.',
      ],
    },
    {
      title: '7. Validade, integridade e conferência',
      items: [
        'Somente resultados enviados por perfil acadêmico validado são considerados.',
        'A mesma tentativa não pode gerar registro, benefício ou hora em duplicidade.',
        'A coordenação poderá desconsiderar registros incompletos, duplicados, tecnicamente inconsistentes ou obtidos mediante uso indevido de credenciais.',
        'Em caso de indisponibilidade técnica comprovada, a coordenação poderá revisar o registro com base nos dados disponíveis, sem alterar os critérios para os demais participantes.',
      ],
    },
    {
      title: '8. Privacidade e divulgação',
      paragraphs: [
        'Os rankings exibem somente o código público pseudônimo do participante. RA, nome e e-mail não são publicados na classificação. Os dados de cadastro e os resultados são usados para validação, classificação e conferência dos benefícios do piloto.',
      ],
    },
    {
      title: '9. Disposições finais',
      paragraphs: [
        'A participação implica ciência deste regulamento. O jogo apoia a aprendizagem e não substitui avaliações, frequência, atividades obrigatórias ou decisões acadêmicas. Casos não previstos serão decididos pela coordenação, com registro da decisão e tratamento isonômico dos participantes.',
      ],
    },
  ],
} as const;
