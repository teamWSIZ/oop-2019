import {Injectable} from '@angular/core';
import {IngredientService} from "./ingredient.service";
import {BeerType} from "./model/beer-type";
import {BeerStoreService} from "./beer-store.service";

@Injectable({
  providedIn: 'root'
})
export class BrewService {

  constructor(private ingredientService: IngredientService,
              private beerStoreService: BeerStoreService) {
    console.log('Tworzę BrewService');
  }

  check(beerQuantity: number) {
    const beerType = new BeerType('Miodowe', 10, 1, 0.2, 1, 12);
    const ingredientsAreAvailable =
      this.ingredientService.ingredientsAvailable(beerType, beerQuantity);
    if (ingredientsAreAvailable) {
      alert(`Yes, we can produce ${beerQuantity}hL of ${beerType.name}`);
      this.ingredientService.ingredientsOrder(beerType, beerQuantity);
      console.log('Składniki pobrane; rozpoczynam ważenie...');
      const producedBeer = beerType.final_volume * beerQuantity;
      alert(`Brewed ${producedBeer}hL of ${beerType.name}`);
      this.beerStoreService.storeBeer(beerType, producedBeer);
    } else {
      alert(`Not enough ingredients for ${beerQuantity}hL of ${beerType.name}`);
    }
  }
}
