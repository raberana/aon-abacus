import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean;

  constructor(private _userService: UserService, private _router: Router) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  login() {
    this._userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(u => {
        if (u) { this._router.navigateByUrl('/'); }
        else {
          this.invalidLogin = true;
        }
      });
  }

  logout() {
    localStorage.clear();
  }
}
