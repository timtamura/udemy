import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: "First post", content: "This is the first post!"},
  //   {title: "Second post", content: "This is the second post!"},
  //   {title: "Third post", content: "This is the third post!"},
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();

  }
}
