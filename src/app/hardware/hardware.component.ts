import { Component, OnInit } from '@angular/core';


interface Komputer {
  start();
  shutdown();
  run(program_name: string, arg: string);
  get_display_content() : string[];
}

class BasicComputer implements Komputer {
  display: string[] = ['display works'];
  //implement (Code>Generate)
  get_display_content() : string[] {
    return this.display.slice();
  }

  run(program_name: string, arg: string) {
    if (program_name==='print') {
      this.display.push(arg);
    }
    if (program_name==='clear') {
      this.display = [];
    }
  }

  shutdown() {
  }

  start() {
  }
}

class AdvancedComputer extends BasicComputer{
  start() {
    super.start();  //uruchom metode klasy BasicComputer
    this.display = ['starting...'];
  }

  run(program_name: string, arg: string) {
    if (program_name==='files') {
      this.display.push('file1', 'file2');
    } else {
      //jesli to nie jest nowa komenda, to uruchom stare...
      super.run(program_name, arg);
    }
  }
}


@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.less']
})
export class HardwareComponent implements OnInit {
  c : Komputer;
  ekran: string[] = [];

  constructor() { }

  ngOnInit() {
    this.c = new AdvancedComputer(); //odpalamy konstruktor, tworzymy nowa instancje klasy implementujacej Komputer
  }

}
