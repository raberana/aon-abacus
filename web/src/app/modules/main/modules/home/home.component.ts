import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser(this._userService.currentUser.username)
      .subscribe(i => console.log('CURRENT USER', i));
  }

}
