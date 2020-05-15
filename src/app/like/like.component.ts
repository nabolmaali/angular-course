import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'Like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
@Input('LikesCount') LikesCount:number;
@Input('isActive') isActive:boolean;

onClick(){
  this.LikesCount += (this.isActive) ? -1 : 1;
  this.isActive  = !this.isActive;
}
 
}


