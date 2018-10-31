import { Component } from '@angular/core';

  @Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
  })
  export class PostCreateComponent {

     postText = '';
     enteredValue = '';

    onAddPost() {
      console.dir(this.enteredValue);
      this.postText = this.enteredValue;
    }

  }
