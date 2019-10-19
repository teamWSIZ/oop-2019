import { Injectable } from '@angular/core';
import {BeerType} from "./model/beer-type";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  water: number;
  sugar: number;
  yeast: number;
  hop: number;

  constructor() {
    //początkowy stan magazynu:
    this.water = 100;
    this.sugar = 100;
    this.yeast = 100;
    this.hop = 100;
  }

  /**
   * Odpowiada czy w magazynie jest dość składników na `quantity` (hektolitrów) piwa
   * typu `beerType`.
   */
  ingredientsAvailable(beerType: BeerType, quantity: number) : boolean {
    console.log(`Sprawdzam składniki na ilość ${quantity} piwa typu ${beerType.name} `);
    return quantity < 10;
  }

  /**
   * Zamawia w magazynie składniki na `quantity` (hektolitrów) piwa
   * typu `beerType`. Ilość składników w magazynie powinna się zmiejszyć.
   */
  ingredientsOrder(beerType: BeerType, quantity: number) {
    console.log(`Pobieram składniki na ilość ${quantity} piwa typu ${beerType.name} `);
    //odejmujemy składniki transportując je do hali piwowarczej...
    this.water -= quantity * beerType.water;  //zabieamy wodę...
  }


}
