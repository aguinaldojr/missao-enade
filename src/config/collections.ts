/** Metadados pedagógicos internos; não são rótulos nem objetivos de prova na interface. */
export interface LearningCollection {
  readonly id: string;
  readonly pedagogicalOrigin: string;
  readonly status: 'planned';
}

export const firstLearningCollection: LearningCollection = {
  id: 'enade-2026',
  pedagogicalOrigin: 'Competências e referências do ENADE 2026',
  status: 'planned',
};

// Os exemplos fictícios atuais mantêm FASE-EXEMPLO-01 e example-1.
// Coleções futuras poderão vir de PPCs, disciplinas, nivelamento, projetos e certificações.
