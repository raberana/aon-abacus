import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReferentialLookupModel } from '../models/referential-lookup.model';
import { SchemaModel } from '../models/schema.model';

@Injectable({
    providedIn: 'root',
})
export class SchemaService {

    constructor(private _httpClient: HttpClient) {
    }

    getSchema(schemaName: string): Observable<SchemaModel> {
        const url = `${environment.apiCalculatorBaseUrl}/api/schema/${schemaName}`;

        return this._httpClient.get<SchemaModel>(url);
    }
}