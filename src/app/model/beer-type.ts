export class BeerType {
  name: string;
  water: number;  //ile wody potrzeba na 1hL piwa tego typu
  sugar: number;
  yeast: number;
  hop: number;
  final_volume: number; //ile hL piwa powstanie z wszystkich składników


  constructor(name: string, water: number, sugar: number, yeast: number,
              hop: number, final_volume: number) {
    this.name = name;
    this.water = water;
    this.sugar = sugar;
    this.yeast = yeast;
    this.hop = hop;
    this.final_volume = final_volume;
  }
}
