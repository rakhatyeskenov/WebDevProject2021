import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'nav',
    styleUrls: ['./nav.component.css'],
    template: `
    <div class="main-header navbar-fixed-top">
        <div class="header-menu">
            <div class="header-mobile-nav-wrapper">
                <button type="button" class="navbar-toggle" (click)="collapse = !collapse">
                    <span class="fa fa-bars fa-2x"></span>
                </button>
            </div>
            <div class="header-logo-wrapper">
                <a routerLink="/" style="text-decoration:none">
                  <div class="logo2"> <h2>Bestseller</h2> </div>
                </a>
                <!--<img class="header-logo-image" src="./assets/imgs/logo.png" alt="Hero">-->
            </div>
            <div class="header-nav-wrapper">
                <ul class="header-nav">
                    <li class="header-nav-item">
                        <a routerLink="/"><img width="24px"src="/assets/imgs/home-icon.jpg"></a>
                    </li>
                  <li class="header-nav-item">
                    <a routerLink="/about"><img width="20px"src="https://cdn.discordapp.com/attachments/835128677008015382/835557147919777792/1545e208d1261b33.png"></a>
                  </li>

                </ul>
            </div>
            <div class="header-cart-wrapper">
                <div class="header-cart" (click)="toggleCartPopup($event)">
                    <div class="mobil-shopping-cart">
                        <span><i class="fa fa-shopping-cart fa-2x"></i> <span *ngIf="cart_num">( {{cart_num}} )</span></span>
                    </div>
                    <div class="header-cart-item">
                        <a href="">MY CART <span *ngIf="cart_num">( {{cart_num}} )</span><span class="fa fa-caret-down"></span></a>
                    </div>
                </div>
              <div class="log-registration">
                <div class="header-cart-item">
                  <a routerLink="/login"><span>Login</span></a>
                </div>
                <div class="header-cart-item">
                  <a routerLink="/register"><span>Registration</span></a>
                </div>
              </div>
            </div>
        </div>
        <ul class="mobile-header-nav" *ngIf="collapse" (click)="collapse = !collapse">
            <li>
                <a routerLink="/"><img src=""></a>
            </li>
<!--            <li>-->
<!--                <a routerLink="/">SHOP</a>-->
<!--            </li>-->
<!--            <li>-->
<!--                <a routerLink="/">JOURNAL</a>-->
<!--            </li>-->
<!--            <li>-->
<!--                <a routerLink="/">MORE</a>-->
<!--            </li>-->
        </ul>
        <cart-popup></cart-popup>
    </div>
`
})
export class NavComponent implements OnInit {
    public collapse = false;
    public cart_num: number;

    constructor(
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cart_num = res.length;
            });
    }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart();
    }
}
