// // import { Component, OnInit } from '@angular/core';
// //
// // @Component({
// //   selector: 'app-log',
// //   templateUrl: './login.component.html',
// //   styleUrls: ['./login.component.css']
// // })
// // export class LoginComponent implements OnInit {
// //
// //   constructor() { }
// //
// //   ngOnInit() {
// //   }
// //
// // }
//
// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
// import {User} from '../../model/user';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   username: string;
//   email: string;
//   password: string;
//   users: User[] = [];
//   constructor( private router: Router ) { }
//   addUser() {
//     console.log(this.username, this.password, this.email);
//     this.users.push(new User(this.username, this.password, this.email));
//   }
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/user';
// import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  users: User[] = [];
  constructor( private router: Router ) { }
  addUser() {
    console.log(this.username, this.password, this.email);
    this.users.push(new User(this.username, this.password, this.email));
  }
  ngOnInit() {
  }

}
