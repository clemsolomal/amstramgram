import { Component,Input, OnInit } from '@angular/core';
import {PostService} from "./../../service/post.service";
import {Post} from "./../../model/post.model";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() post!:Post;
  @Input() postTitle: string = 'rien';
  @Input() postDate = new Date();
  @Input() postContent: string = 'rien';
  @Input() counterLikes = 0;
  @Input() id = 0;
  
  posts!: Post[];
  postsSubscription!: Subscription;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
  onLike(post:Post) {
    this.postService.addOneLike(post);
  }
  onDislike(post:Post) {
    this.postService.removeOneLike(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
  onViewPost(id: number) {
    this.router.navigate(['/posts/view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }


}
