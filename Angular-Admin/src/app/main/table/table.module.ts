import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from "./table.component";

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
