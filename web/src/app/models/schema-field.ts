export class SchemaFieldModel {
    name: string;
    label?: string;
    dataType: string;
    options?: Array<{ value: string, label: string }>;
    lookup?: string;
    relatedField?: string;
    isRequired: boolean;
}