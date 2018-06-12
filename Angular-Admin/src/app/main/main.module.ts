import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from "./main.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from "../common/module/shared.module";
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { MenuComponent } from './sidebar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  declarations: [MainComponent, SidebarComponent, HeaderComponent, FooterComponent, ContentComponent, ProfileComponent, MenuComponent]
})
export class MainModule { }
