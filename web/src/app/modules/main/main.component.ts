import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { faCoffee, faSignOutAlt, faHome, faCog, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { mainRouteAnimation } from './main.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    mainRouteAnimation
  ]
})
export class MainComponent implements OnInit {
  faCoffee = faCoffee;
  faSignOutAlt = faSignOutAlt;
  faHome = faHome;
  faCog = faCog;
  faCalculator = faCalculator;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    if (!this._userService.currentUser) { this.logout(); }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  logout() {
    this._userService.logout();
    this._router.navigateByUrl('/login');
  }
}
