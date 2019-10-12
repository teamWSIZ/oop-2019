import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = ['Liao', 'Xi', 'Wang']; //to jest 'field', zmienna instancji..
  nextUserId = 1;

  constructor() { }

  //ta funkcja nazywa się "metodą"
  //jest publiczna, tzn. każdy mający instancję klasy UsersService, może ją wykonać
  public getUsers() {
    console.log('Loading customers...');
    return this.users;
  }

  public getNextUser() {
    let username = 'User' + this.nextUserId;
    this.nextUserId += 1;
    return username;
  }



}
