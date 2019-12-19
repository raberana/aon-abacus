import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReferentialLookupModel } from '../models/referential-lookup.model';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ReferentialLookupService {

    private _options: { [id: string]: ReferentialLookupModel[]; } = {};

    constructor(private _httpClient: HttpClient) {
    }

    getReferentialLookup(category: string): Observable<ReferentialLookupModel[]> {
        const url = `${environment.apiReferentialLookupBaseUrl}/api/referential-lookup/${category}`;

        if (this._options[category]) {
            return of(this._options[category]);
        }

        return this._httpClient.get<ReferentialLookupModel[]>(url)
            .pipe(tap(i => {
                this._options[category] = i;
            }));
    }

    getLabel(category: string, code: string): string {
        return this._options[category].find(i => i.code == code).label;
    }
}