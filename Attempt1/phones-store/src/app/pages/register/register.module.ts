import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {RegisterComponent} from './register.component';
import {registerRoutes} from './register.routes';
// import {registrationRoutes} from "./register.routes";
// import {SharedModule} from "../../shared/shared.module";
// import {RegistrationComponent} from "./register.component";
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(registerRoutes)
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegistrationModule { }
