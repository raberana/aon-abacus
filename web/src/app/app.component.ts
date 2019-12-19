import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appRouteAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    appRouteAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'AON ABACUS';

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
