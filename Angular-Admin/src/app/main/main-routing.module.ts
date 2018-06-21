import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "home", loadChildren: "./content/home/home.module#HomeModule"},
      { path: "table", loadChildren: "./content/table/table.module#TableModule"},
      { path: "editor", loadChildren: "./content/editor/editor.module#EditorModule"},
      { path: "form", loadChildren: "./content/form/form.module#FormModule"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
