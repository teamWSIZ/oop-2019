import { Component, OnInit } from '@angular/core';
import {BrewService} from "../brew.service";
import {IngredientService} from "../ingredient.service";

@Component({
  selector: 'app-brewrery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.less']
})
export class BreweryComponent implements OnInit {
  beerQuantity: 0;
  progress = 5;

  orderedUnits = 0;

  constructor(public brewService: BrewService,
              public ingredientService: IngredientService) {

  }

  ngOnInit() {
  }

  percent_of_ingredient(ingName: string) {
    let x = this.ingredientService.ingredients.get(ingName);
    let percent = (x / 200) * 100;
    return percent + '%';
  }

  //Funkcja wylicza ilość procent (zakładając max i obecną value), po czym dodaje znak '%'
  prct(value: number, max_value: number): string {
    return (value / max_value) * 100 + '%';
  }

  addOrderUnits() {
    this.orderedUnits += 1;
  }

  decOrderUnits() {
    this.orderedUnits -= 1;
    if (this.orderedUnits<0) {
      this.orderedUnits = 0;
    }
  }
}
