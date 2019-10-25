import { Component, OnInit } from '@angular/core';
import {BrewService} from "../brew.service";

@Component({
  selector: 'app-brewrery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.less']
})
export class BreweryComponent implements OnInit {
  beerQuantity: 0;

  constructor(public brewService: BrewService) {

  }

  ngOnInit() {
  }

}
