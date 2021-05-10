import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Observable} from 'rxjs/internal/Observable';

class Cart {
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];

  // cart: Cart[] = [];

  constructor(
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeItem = index => {
        this.cartService.removeCart(index);
    }

  // ngOnInit(): void {
  //   this.getCart();
  // }

  // getCart() {
  //   this.cartService.getItems().subscribe((data) => {
  //     this.cart = data;
  //   });
  // }
//  -------------------------------------------------------------------------------

}

