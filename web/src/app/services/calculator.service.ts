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

    calculate(priceInput: any): Observable<any> {
        const url = `${environment.apiCalculatorBaseUrl}/api/calculator/price-calculation`;

        return this._httpClient.post<any>(url, priceInput);
    }
}