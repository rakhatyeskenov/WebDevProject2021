import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import {Product} from '../interfaces/product';
import { LikedService } from '../liked.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public product;
  public productCart: Product;
  public productLiked: Product;

  addToCart(product) {
    console.log(product);
    this.cartService.addToCart(product);
    window.alert('Added to Your Card!');
  }

  addToLiked(product) {
    console.log(product);
    this.LikedService.addToLiked(product);
    window.alert('Added In Your Favourite List!');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    // tslint:disable-next-line:no-shadowed-variable
    private LikedService: LikedService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId') - 1];
    });
  }
}
