import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.less']
})
export class LecturesComponent implements OnInit {
  x = 12;
  customers : string[] = ['--no data--'];
  nextuser = '---';

  //tu ustawiamy, że mamy mieć dostęp do serwisu UsersService
  constructor( public usersService : UsersService) {
  }

  ngOnInit() {

  }

  incrementX() {
    this.x = this.x + 1;
  }

  decrementX() {
    this.x -= 1;
  }

  reloadCustomers() {
    this.customers = this.usersService.getUsers();
  }

  randomCustomer() {
    this.nextuser = UsersService.getRandomUser();
  }

  nextCustomer() {
    this.nextuser = this.usersService.getNextUser()
  }
}
