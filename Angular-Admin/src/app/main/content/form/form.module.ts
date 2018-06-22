import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from "../../../common/module/component.module";
import { SharedModule } from "../../../common/module/shared.module";

import { FormRoutingModule } from './form-routing.module';
import { BasicFormElementsComponent } from './basic-form-elements/basic-form-elements.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormService } from "./form.service";

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    ComponentModule,
    SharedModule,
  ],
  declarations: [BasicFormElementsComponent, FormComponentsComponent, FormExampleComponent, FormValidationComponent],
  providers: [FormService]
})
export class FormModule { }
