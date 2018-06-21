import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { BasicFormElementsComponent } from './basic-form-elements/basic-form-elements.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  declarations: [BasicFormElementsComponent, FormComponentsComponent, FormExampleComponent, FormValidationComponent]
})
export class FormModule { }
