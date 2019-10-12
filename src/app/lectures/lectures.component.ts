import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {Utils} from "../scratch/utils";
import {SecretService} from "../secret.service";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.less']
})
export class LecturesComponent implements OnInit {
  x = 12;
  customers = [];
  randomUser: string;

  //tu ustawiamy, że mamy mieć dostęp do serwisu UsersService
  constructor(public usersService : UsersService, private secretService : SecretService) {
  }

  ngOnInit() {

  }

  incrementX() {
    this.x = this.x + 1;
  }

  decrementX() {
    this.x -= 1;
  }

  createRandomUser() {
    return 'user' + Utils.gerRandomNumber();
  }

  delegateGreetUser() {
    alert(this.secretService.sayHello());
  }
}
