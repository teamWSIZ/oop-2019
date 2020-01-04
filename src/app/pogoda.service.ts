import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PogodaService {

  constructor() {
    console.log('Startuję pogodę');
  }

  do_it() {
    console.log('doing...');
  }
}
