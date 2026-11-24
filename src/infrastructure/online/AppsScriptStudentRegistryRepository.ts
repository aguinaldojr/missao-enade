import { normalizeAcademicId } from '../../domain/models/OnlineLeaderboard';
import { validateVerifiedIdentity, type VerifiedStudentIdentity } from '../../domain/models/StudentIdentity';
import type { StudentRegistryRepository } from '../../ports/StudentRegistryRepository';

type Fetch = typeof fetch;

function normalizeEmail(value: string): string {
  const email = value.trim().toLocaleLowerCase('pt-BR');
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Informe o mesmo e-mail que consta no cadastro acadêmico.');
  }
  return email;
}

export class AppsScriptStudentRegistryRepository implements StudentRegistryRepository {
  constructor(private readonly endpoint: string,
    private readonly fetcher: Fetch = (input, init) => globalThis.fetch(input, init)) {
    if (!/^https:\/\//.test(endpoint)) throw new Error('O endereço do cadastro deve usar HTTPS.');
  }

  async verify(academicId: string, email: string): Promise<VerifiedStudentIdentity> {
    const response = await this.fetcher(this.endpoint, { method: 'POST', redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({ action: 'verify-student', academicId: normalizeAcademicId(academicId),
        email: normalizeEmail(email) }) });
    if (!response.ok) throw new Error('O cadastro acadêmico não respondeu corretamente.');
    const data: unknown = await response.json();
    if (!data || typeof data !== 'object') throw new Error('Resposta inválida do cadastro acadêmico.');
    const result = data as Record<string, unknown>;
    if (result.ok !== true) throw new Error(typeof result.error === 'string' ? result.error : 'Não foi possível validar o cadastro.');
    return validateVerifiedIdentity(result.identity as unknown as VerifiedStudentIdentity);
  }
}

export function configuredStudentRegistry(): StudentRegistryRepository | null {
  if (import.meta.env.MODE === 'test') return null;
  const endpoint = import.meta.env.VITE_STUDENT_REGISTRY_API_URL?.trim();
  return endpoint ? new AppsScriptStudentRegistryRepository(endpoint) : null;
}
