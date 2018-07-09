import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";
import { NgDragDropModule } from "ng-drag-drop";

import { ContentTitleComponent } from "../component/content-title/content-title.component";
import { CardComponent } from "../component/card/card.component";
import { TreeComponent } from "../component/tree/tree.component";
import { DndComponent } from "../component/dnd/dnd.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgDragDropModule.forRoot(),
  ],
  exports: [
    ContentTitleComponent,
    CardComponent,
    TreeComponent,
    DndComponent,
  ],
  declarations: [
    ContentTitleComponent,
    CardComponent,
    TreeComponent,
    DndComponent,
  ]
})
export class ComponentModule { }
