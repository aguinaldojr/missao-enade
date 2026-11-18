import Ajv from 'ajv';
import schema from '../../schemas/editorial.schema.json';
import presentationSchema from '../../schemas/question-presentation.schema.json';
import type { EditorialMetadata } from '../../domain/models/EditorialMetadata';
import type { CollectionRepository } from '../../ports/CollectionRepository';

export function createEditorialAjv(): Ajv {
  const ajv = new Ajv({ allErrors: true });
  ajv.addFormat('http-url', {
    type: 'string', validate: (value: string) => {
      try {
        const url = new URL(value);
        return !/\s/.test(value) && ['https:', 'http:'].includes(url.protocol) && !!url.hostname;
      } catch { return false; }
    },
  });
  ajv.addSchema(schema);
  ajv.addSchema(presentationSchema);
  return ajv;
}
export function validateEditorialReferences(metadata: EditorialMetadata, collections: CollectionRepository): void {
  if (!collections.get(metadata.collectionId)) throw new Error('Coleção inexistente: ' + metadata.collectionId);
  if (metadata.sources.filter((source) => source.role === 'primary').length !== 1) {
    throw new Error('Metadados editoriais devem possuir exatamente uma fonte principal.');
  }
}
