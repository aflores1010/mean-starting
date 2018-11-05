import { Component, Input } from '@angular/core';

 @Component({
     selector: 'app-post-list',
     templateUrl: './post-list.component.html',
     styleUrls: ['./post-list.component.css'],
  })
  export class PostListComponent{
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
  @Input() posts = [];
}
