import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraggableTableComponent } from "./draggable-table/draggable-table.component";
import { EditableTableComponent } from "./editable-table/editable-table.component";
import { ExportableTableComponent } from "./exportable-table/exportable-table.component";

const routes: Routes = [
  {
    path: "draggableTable",
    component: DraggableTableComponent,
  },
  {
    path: "editableTable",
    component: EditableTableComponent,
  },
  {
    path: "exportableTable",
    component: ExportableTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
