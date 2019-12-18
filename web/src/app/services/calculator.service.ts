import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReferentialLookupModel } from '../models/referential-lookup.model';

@Injectable({
    providedIn: 'root',
})
export class CalculatorService {

    constructor(private _httpClient: HttpClient) {
    }

    getReferentialLookup(category: string): Observable<ReferentialLookupModel[]> {
        const url = `${environment.apiReferentialLookupBaseUrl}/api/referential-lookup/${category}`;

        return this._httpClient.get<ReferentialLookupModel[]>(url);
    }
}