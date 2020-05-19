import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = '';
  constructor() {}

  isUsernameEmpy() {
    if (this.username !== '') {
      return false;
    } else {
      return true;
    }
  }
  resetUsername() {
    this.username = '';
  }
}
