import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import {BehaviorSubject} from 'rxjs';
import {Product} from '../model/product';
import {Cart} from '../model/cart';

@Injectable()
export class CartService {

    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => {
        this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
    }
    addToCart = (cart: Cart) => {
        const current = this.cartListSubject.getValue();
        const dup = current.find(c => c.product.title === cart.product.title);
        if (dup) { dup.quantity += cart.quantity; } else { current.push(cart); }
        this.cartListSubject.next(current);
    }
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    }
    removeCart = index => {
        const current = this.cartListSubject.getValue();
        current.splice(index, 1);
        this.cartListSubject.next(current);
    }
}
