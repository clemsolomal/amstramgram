import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../model/post.model'
import { PostService } from '../../../service/post.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.postService.getPostById(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
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

  onBack() {
    this.router.navigate(['/posts']);
  }

}
