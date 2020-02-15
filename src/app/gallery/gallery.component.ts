import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  @Input() buttons: Array<string> ;
  @Input() galleryList: Array<any> ;

  selected = -1;

  images = [
    ['http://www.game-art-hq.com/wp-content/uploads/2014/07/LeBlanc-LoL-Original-Classic-Splash-Art.jpg',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uxWHBX74QCV4pD1hoX93EgHaEV%26pid%3DApi&f=1'
    ],
    ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*rwxsJi-EQ9EC9XL1bgg04g.jpeg&f=1&nofb=1'],
    ['http://media.comicbook.com/2018/05/league-of-legends-pyke-1109423.jpeg']
  ]


  constructor() { }

  changeGallery(i){
    this.selected = i;

  }

  ngOnInit() {
  }

}
