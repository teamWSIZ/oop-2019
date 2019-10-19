import { Injectable } from '@angular/core';
import {BeerType} from "./model/beer-type";

@Injectable({
  providedIn: 'root'
})
export class BeerStoreService {
  midoweStorage: number;
  constructor() {
    this.midoweStorage = 0;
  }

  storeBeer(beerType: BeerType, producedBeer: number) {
    console.log(`Storing ${producedBeer}hL of ${beerType.name}`);
    this.midoweStorage += producedBeer;
  }
}
