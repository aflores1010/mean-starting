import { Injectable } from '@angular/core';
import { PostInterface } from './post.model';
import { Subject } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostInterface [] = [];
  private postUpdated = new Subject<PostInterface[]>();
  constructor(private httpClient: HttpClient) { }

  getPosts() {
    //console.log('from service');

    this.httpClient.get<{message: string, posts: PostInterface[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        // console.log(postData, 'from service');
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
      });
    return this.posts;
  }

  getPostUpdated() {
    return this.postUpdated.asObservable();
  }

  addPost(newPost: PostInterface) {
    this.httpClient.post<{message: string}>('http://localhost:3000/api/posts', newPost)
    .subscribe( (responseData) => {
      console.log(responseData);
      this.posts.push(newPost);
      this.postUpdated.next([...this.posts]);
    });
  }
}
