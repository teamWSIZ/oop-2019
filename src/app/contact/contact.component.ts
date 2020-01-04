import { Component, OnInit } from '@angular/core';
import {PogodaService} from "../pogoda.service";


class DI {
  id: number;
  name: string;
  url: string;


  constructor(id: number, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private pogoda : PogodaService) { }
  designs: DI[];
  ngOnInit() {
    this.designs.push(new DI(1, 'aaa', 'http'));
  }

}
