import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { saveAs } from 'file-saver';
import { TableRoutingModule } from './table-routing.module';
import { SharedModule } from "../../../common/module/shared.module";
import { ComponentModule} from "../../../common/module/component.module";

import { EditableTableComponent } from './editable-table/editable-table.component';
import { DraggableTableComponent } from './draggable-table/draggable-table.component';
import { ExportableTableComponent } from './exportable-table/exportable-table.component';
import { TableService } from "./table.service";

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    ComponentModule,
  ],
  declarations: [EditableTableComponent, DraggableTableComponent, ExportableTableComponent],
  providers: [TableService]
})
export class TableModule { }
