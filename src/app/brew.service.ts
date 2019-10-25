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

  /**
   * Ta funkcja ma sprawdić czy w magazynie jest dość składników do wyprodukowania
   * `units` jednostek piwa typu `beerType`. Funkcja powinna bezpośrednio "delegować"
   * do ingredientService.ingredientsAvailable
   */
  ingredientsAvailable(units: number, beerType: BeerType) {
    if (beerType === undefined) {
      beerType = new BeerType('Miodowe', 10, 1, 0.2, 1, 12);
    }
    return this.ingredientService.ingredientsAvailable(beerType, units);
  }

  /**
   * Ta funkcja powinna sprawdzić czy są składniki, po czym wyprodukować `units` jednostek piwa typu `beerType`.
   * todo: w przyszłości powinniśmy zadbać, by akcja nie odbywała się natychmiast, tzn. proces ważenia ma trwać..
   * @param units
   * @param beerType
   */
  brew(units: number, beerType: BeerType) {
    if (beerType === undefined) {
      beerType = new BeerType('Miodowe', 10, 1, 0.2, 1, 12);
    }
    const ingredientsAreAvailable =
      this.ingredientService.ingredientsAvailable(beerType, units);
    if (ingredientsAreAvailable) {
      alert(`Yes, we can produce ${units}hL of ${beerType.name}`);
      this.ingredientService.ingredientsOrder(beerType, units);
      console.log('Składniki pobrane; rozpoczynam ważenie...');
      const producedBeer = beerType.final_volume * units;
      alert(`Brewed ${producedBeer}hL of ${beerType.name}`);
      this.beerStoreService.storeBeer(producedBeer, beerType);
    } else {
      alert(`Not enough ingredients for ${units}hL of ${beerType.name}`);
    }
  }
}
