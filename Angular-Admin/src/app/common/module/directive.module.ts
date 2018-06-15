import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarTransitionDirective } from "../directive/sidebar-transition.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarTransitionDirective
  ],
  declarations: [ SidebarTransitionDirective ]
})
export class DirectiveModule { }
