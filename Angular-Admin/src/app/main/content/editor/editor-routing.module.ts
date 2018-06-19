import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UeditorComponent} from "./ueditor/ueditor.component";
import {CkeditorComponent} from "./ckeditor/ckeditor.component";

const routes: Routes = [
  {
    path: "ueditor",
    component: UeditorComponent
  },
  {
    path: "ckeditor",
    component: CkeditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
