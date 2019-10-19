import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number=0;
  @Input() date: Date;
  constructor() {}

  ngOnInit() {
  }

  increment(){
    this.loveIts ++;
  }
 
  decrement() {
    this.loveIts--;
  }

}
