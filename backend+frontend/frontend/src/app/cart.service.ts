import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {Category} from "./interfaces/category";
import {Observable} from "rxjs/internal/Observable";
import {Cart} from "./interfaces/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // tslint:disable-next-line:variable-name
  BASE_URl = 'http://localhost:4200';

  items: any = [];
  // cart: Cart[] = [];
  public cartListSubject = new BehaviorSubject([]);

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  constructor(
    private http: HttpClient
  ) {
  }

  removeCart = index => {
    const current = this.items.getValue();
    current.splice(index, 1);
    this.items.next(current);
  }

  // removeItem(element: number) {
  //   this.items.forEach((value, index) => {
  //       if (value === element) { this.items.splice(index, 1); }
  //   });
// }

  clearCart() {
    this.items = [];
    // return this.items;
  }

  // removeCart = index => {
  //       const current = this.items.getValue();
  //       current.splice(index, 1);
  //       this.items.next(current);
  //   }


// -------------------------------------------------------------

}
