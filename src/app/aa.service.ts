import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AaService {
  x = 12;

  constructor() {
    console.log(`service aa is starting`)
  }
}
