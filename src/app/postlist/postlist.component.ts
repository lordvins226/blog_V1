import { PostlistitemComponent } from './../postlistitem/postlistitem.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  @Input() posts
  constructor(){}
 ngOnInit(){
  
 }
 
}
