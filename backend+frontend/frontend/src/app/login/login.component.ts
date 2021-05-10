import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  // title = 'shop';
  //
  // public logged = false;
  //
  // username = '';
  // password = '';
  //
  // constructor(private productService: ProductListService) {}
  //
  // // tslint:disable-next-line:use-lifecycle-interface
  // ngOnInit() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     this.logged = true;
  //   }
  // }
  //
  // login() {
  //   this.productService.login(this.username, this.password)
  //     .subscribe(res => {
  //
  //       localStorage.setItem('token', res.token);
  //
  //       this.logged = true;
  //       console.log(this.username);
  //       // this.username = '';
  //       // this.password = '';
  //     });
  // }
  //
  // logout() {
  //   localStorage.clear();
  //   this.logged = false;
  // }


}
