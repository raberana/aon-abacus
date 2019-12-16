
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (!this._userService.currentUser) { return next.handle(req); }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this._userService.currentUser.bearerToken}`)
        });

        return next.handle(authReq);
    }
}