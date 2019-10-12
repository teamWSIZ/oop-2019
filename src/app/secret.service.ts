import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor() { }

  //return values, default parameters
  public sayHello(name: string = 'world') : string {
    let answer = 'hello ' + name;
    console.log(`Greeting: ${answer}`);
    return 'hello ' + name;
  }
}
