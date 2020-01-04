import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./model/post";

@Component({
  selector: 'app-biuletyn',
  templateUrl: './biuletyn.component.html',
  styleUrls: ['./biuletyn.component.less']
})
export class BiuletynComponent implements OnInit {
  posts_catalog : Post[]; //wszystkie przeglądane (wyświetlane) posty

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.get_all_posts(); //ściągamy wszystkie posty po włączeniu komponentu
  }

  get_all_posts() {
    /**
     * Ściąga wszystkie posty z https://jsonplaceholder.typicode.com/posts
     */
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(results => {
      //tutaj mamy wynik zapytania http; spodziewamy się, że results jest typu Post[]
      console.log(`Zapytanie zwróciło ${results.length} postów`);
      this.posts_catalog = results;
    })
  }



}
