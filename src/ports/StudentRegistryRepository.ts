import type { VerifiedStudentIdentity } from '../domain/models/StudentIdentity';

export interface StudentRegistryRepository {
  verify(academicId: string, email: string): Promise<VerifiedStudentIdentity>;
}
