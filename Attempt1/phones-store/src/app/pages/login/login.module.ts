
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {loginRoutes} from './login.routes';
import {LoginComponent} from './login.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
