import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';



@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  posts!: Post[];
  postsSubscription!: Subscription;

  constructor(private postService: PostService){}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
}
