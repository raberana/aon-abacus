import { SchemaFieldModel } from './schema-field';

export class SchemaSectionModel {
    name: string;
    isArray: boolean;
    fields: SchemaFieldModel[];
}