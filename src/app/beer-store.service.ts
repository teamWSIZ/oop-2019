import { Injectable } from '@angular/core';
import {BeerType} from "./model/beer-type";

@Injectable({
  providedIn: 'root'
})
export class BeerStoreService {
  midoweStorage: number;  //todo: w przyszłości to powinno być zamienione na map (beer)name -> number
  constructor() {
    this.midoweStorage = 0;
  }

  /**
   * Realizuje akcję magazynowania `units` jednostek piwa typu `beerType`.
   *
   * @param units
   * @param beerType
   */
  storeBeer(units: number, beerType: BeerType) {
    console.log(`Storing ${units}hL of ${beerType.name}`);
    this.midoweStorage += units;
  }



}
