import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    currentUser: UserModel = null;

    constructor(private _httpClient: HttpClient) { }

    getUser(username: string): Observable<UserModel> {
        const url = `${environment.apiAccountBaseUrl}/api/account/${username}`;

        return this._httpClient.get<UserModel>(url);
    }

    login(username: string, password: string): Observable<UserModel> {
        const url = `${environment.apiAccountBaseUrl}/api/account/login`;

        return this._httpClient.post<UserModel>(url, { username, password });
    }

    logout(): void {
        this.currentUser = null;
    }
}