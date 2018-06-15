import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { SharedModule } from "../../../common/module/shared.module";
import { ComponentModule } from "../../../common/module/component.module";
import { HomeService } from "./home.service";

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    ComponentModule,
  ],
  declarations: [HomeComponent],
  providers: [ HomeService]
})
export class HomeModule { }
