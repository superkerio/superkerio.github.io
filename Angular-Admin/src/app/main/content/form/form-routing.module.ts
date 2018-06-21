import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormElementsComponent } from "./basic-form-elements/basic-form-elements.component";
import { FormComponentsComponent } from "./form-components/form-components.component";
import { FormExampleComponent } from "./form-example/form-example.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";

const routes: Routes = [
  {
    path: "basicFormElements",
    component: BasicFormElementsComponent,
  },
  {
    path: "formComponents",
    component: FormComponentsComponent,
  },
  {
    path: "formExample",
    component: FormExampleComponent,
  },
  {
    path: "formValidation",
    component: FormValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
