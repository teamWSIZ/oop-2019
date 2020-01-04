import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/post";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.less']
})
export class PostViewComponent implements OnInit {

  @Input()
  post : Post;
  comments: Comment[];

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  get_related_comments() {
    /**
     * Dociąga komentarze do tego postu
     */
    let rnd = Math.random();
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?aa='+rnd).subscribe(results => {
      //tu są wszystkie komentarze;
      //trzeba odsortować te które dotyczą obecnego postu:
      let relevant = [];
      console.log(`have: ${results.length}`)
      for(let comment of results) {
        if (comment.postId === this.post.id) {
          relevant.push(comment);
        }
      }
      this.comments = relevant;
    });
  }

}
