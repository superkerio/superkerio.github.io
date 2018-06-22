import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";

import { ContentTitleComponent } from "../component/content-title/content-title.component";
import { CardComponent } from "../component/card/card.component";
import { TreeComponent } from "../component/tree/tree.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    ContentTitleComponent,
    CardComponent,
    TreeComponent,
  ],
  declarations: [
    ContentTitleComponent,
    CardComponent,
    TreeComponent,
  ]
})
export class ComponentModule { }
