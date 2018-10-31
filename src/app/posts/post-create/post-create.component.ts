import { Component } from '@angular/core';

  @Component({
    templateUrl: './post-create.component.html',
    selector: 'app-post-create'
  })
  export class PostCreateComponent {

     postText = '';
     enteredValue = '';

    onAddPost() {
      console.dir(this.enteredValue);
      this.postText = this.enteredValue;
    }

  }
