import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser(this._userService.currentUser.username)
      .subscribe(i => console.log('CURRENT USER', i));
  }

}
