import { Component, OnInit } from '@angular/core';
import {BrewService} from "../brew.service";

@Component({
  selector: 'app-brewrery',
  templateUrl: './brewrery.component.html',
  styleUrls: ['./brewrery.component.less']
})
export class BrewreryComponent implements OnInit {
  beerQuantity: 0;

  constructor(public brewService: BrewService) {

  }

  ngOnInit() {
  }

}
