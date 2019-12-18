import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this._userService.getUser(this._userService.currentUser.username)
      .subscribe(i => console.log('CURRENT USER', i));
  }

  createNewPricing() {
    this._router.navigateByUrl('/pricing/new');
  }
}
