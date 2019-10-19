import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title : 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title : 'Mon deuxieme post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title : 'Encore un post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      loveIts : 0,
      created_at: new Date()
    }
];

}
