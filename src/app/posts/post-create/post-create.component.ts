import { Component, EventEmitter, Output } from '@angular/core';

  @Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
  })
  export class PostCreateComponent {

     enteredText = '';
     enteredTitle = '';
    @Output() postCreated = new EventEmitter();

    onAddPost() {
      const post = {
        title: this.enteredTitle,
        text: this.enteredText
      };
      console.log('post in create ', post);
      this.postCreated.emit(post);
    }

  }
