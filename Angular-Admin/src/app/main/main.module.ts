import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from "./main.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from "../common/module/shared.module";
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { MenuService } from './sidebar/menu/menu.service';
import { SidebarTransitionDirective } from '../common/directive/sidebar-transition.directive';


@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
  declarations: [MainComponent, SidebarComponent, HeaderComponent, FooterComponent, ContentComponent,
    ProfileComponent, MenuComponent, SidebarTransitionDirective],
  providers: [MenuService]
})
export class MainModule { }
