import { Component, OnInit } from '@angular/core';
// import {ProductService} from '../../services/products.service';
// import {Product} from '../../model/product';
// import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product';
import {ProductService} from '../../services/products.service';
import {CartService} from '../../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Array<Product>;
  private sub;
  constructor(
      private productService: ProductService,
      private cartService: CartService,
      private router: Router
  ) { }

  ngOnInit() {
    this.load();
  }
  load = () => {
    this.sub = this.productService.getProducts('./assets/mock-data/products.json')
        .subscribe(res => {
          this.products = res;
        });
  }
  addToCart = (product) => {
    this.cartService.addToCart({product, quantity: 1});
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
