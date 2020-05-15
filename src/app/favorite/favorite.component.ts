import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{
 isFavorite: boolean;
//@Output() change = new EventEmitter();
//@Input() inputsample :number;

  onClick(){
    this.isFavorite = !this.isFavorite;
    //this.change.emit(null);
  }

}
