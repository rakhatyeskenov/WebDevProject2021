// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup} from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//
//
//   form: FormGroup;
//
//   constructor(
//     private router: Router, private formBuilder: FormBuilder,
//     private http: HttpClient
//   ) { }
//
//
//   ngOnInit() {
//     this.form = this.formBuilder.group( {
//       name: '',
//       email: '',
//       password: ''
//     });
//   }
//
//   // submit(): void {
//   //   // console.log(this.form.getRawValue());
//   //     // @ts-ignore
//   //   this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
//   //       .subscribe( () => this.router.navigate(['/login']));
//   // }
//
//   submit(): void {
//     // console.log(this.form.getRawValue());
//     this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
//       .subscribe( res => {
//         console.log(res);
//       });
//   }
//
//
// }

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
