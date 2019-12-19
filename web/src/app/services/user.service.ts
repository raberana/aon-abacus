import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    currentUser: UserModel = null;

    constructor(private _httpClient: HttpClient) {
        console.log('LSU', localStorage.getItem('abacus-user'));
        this.currentUser = localStorage.getItem('abacus-user') != undefined
            ? <UserModel>(JSON.parse(localStorage.getItem('abacus-user')))
            : null;
    }

    getUser(username: string): Observable<UserModel> {
        const url = `${environment.apiAccountBaseUrl}/api/account/${username}`;

        return this._httpClient.get<UserModel>(url);
    }

    login(username: string, password: string): Observable<UserModel> {
        const url = `${environment.apiAccountBaseUrl}/api/account/login`;

        return this._httpClient.post<UserModel>(url, { username, password })
            .pipe(tap(u => {
                this.currentUser = u;
                localStorage.setItem('abacus-user', JSON.stringify(u));
            }));
    }

    logout(): void {
        this.currentUser = null;
    }
}