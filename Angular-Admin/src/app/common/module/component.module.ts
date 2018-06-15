import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTitleComponent } from "../component/content-title/content-title.component";
import { CardComponent } from "../component/card/card.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ContentTitleComponent,
    CardComponent,
  ],
  declarations: [
    ContentTitleComponent,
    CardComponent,
  ]
})
export class ComponentModule { }
