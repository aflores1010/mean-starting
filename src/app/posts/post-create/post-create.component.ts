import { Component, EventEmitter, Output } from '@angular/core';
import { PostInterface } from '../post.model';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { PostService } from '../post.service';

  @Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
  })
  export class PostCreateComponent {

     enteredText = '';
     enteredTitle = '';

    constructor( public postService: PostService) {

      }

    onAddPost(form: NgForm) {
      if (form.invalid) {
        return;
      }
      const post: PostInterface = {
        title: form.value.title,
        text: form.value.text
      };
      this.postService.addPost(post);
    }

  }
