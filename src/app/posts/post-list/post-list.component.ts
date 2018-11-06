import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostInterface } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from '../../../../node_modules/rxjs';

 @Component({
     selector: 'app-post-list',
     templateUrl: './post-list.component.html',
     styleUrls: ['./post-list.component.css'],
  })
  export class PostListComponent implements OnInit, OnDestroy {
    posts: PostInterface[] = [];
    postSub: Subscription;
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'This is the first Post content'
  //   },
  //   {
  //     title: 'Second Post',
  //     content: 'This is the Second tPost content'
  //   },
  //   {
  //     title: 'Last Post',
  //     content: 'This is the Last Post content'
  //   }
  // ];
    constructor (public postService: PostService) {

    }


  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdated()
      .subscribe((posts: PostInterface[]) => {
          this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
