import { Component, OnInit } from '@angular/core';
import {LikedService} from '../liked.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {

  LikedItems: any = [];


  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private LikedService: LikedService,
  ) { }

  ngOnInit(): void {
    this.LikedItems = this.LikedService.getItems();
  }

  // removeItem(name) {
  //   for ( let i = 0; i < this.items.length; i++) {
  //     if ( this.items[i].name === name ) {
  //       this.items.splice(i--, 1);
  //     }
  //   }
  // }

   removeFromLiked = index => {
        this.LikedService.removeCart(index);
    }
}
