import { Injectable } from '@angular/core';
import { PostInterface } from './post.model';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostInterface [] = [];
  private postUpdated = new Subject<PostInterface[]>();
  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdated() {
    return this.postUpdated.asObservable();
  }

  addPost(newPost: PostInterface) {
    this.posts.push(newPost);
    this.postUpdated.next([...this.posts]);
  }
}
