
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeRoutes} from './home.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(HomeRoutes)
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
