
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _userService: UserService, private _router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (!this._userService.currentUser) { return next.handle(req); }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this._userService.currentUser.bearerToken}`)
        });

        return next.handle(authReq).pipe(tap(() => { },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {

                    if (err.status !== 401) {
                        return;
                    }

                    this._router.navigateByUrl('/login');
                }
            }));
    }
}