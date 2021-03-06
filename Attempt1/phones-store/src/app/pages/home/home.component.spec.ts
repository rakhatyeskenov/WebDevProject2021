import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Product} from '../../model/product';
import {CartPageComponent} from '../cart/cart-page.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {ProductService} from '../../services/products.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './home.component';

describe('Category Page', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cartPageComponent: CartPageComponent;
  let products: Product[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        HomeComponent, CartPageComponent
      ],
      providers: [CartService, ProductService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const f = TestBed.createComponent(CartPageComponent);
    cartPageComponent = f.componentInstance;
    f.detectChanges();
    products = [
      {
        'title': '1',
        'price': 40
      },
      {
        'title': '2',
        'price': 28
      }
    ];
  });

  it('test shopping cart, add a duplicate item should increment the quantity for that item.', () => {
    component.addToCart(products[0]);
    expect(cartPageComponent.cartList).toEqual([{product: products[0], quantity: 1}]);
    expect(cartPageComponent.totalPrice).toEqual(40);
    component.addToCart(products[0]);
    expect(cartPageComponent.cartList).toEqual([{product: products[0], quantity: 2}]);
    expect(cartPageComponent.totalPrice).toEqual(80);
    component.addToCart(products[1]);
    expect(cartPageComponent.cartList).toEqual([{product: products[0], quantity: 2}, {product: products[1], quantity: 1}]);
    expect(cartPageComponent.totalPrice).toEqual(108);
  });
});
