import { NgModule } from '@angular/core';
import { ComponentModule } from "../../../common/module/component.module";
import { EditorRoutingModule } from './editor-routing.module';
import { CKEditorModule } from "ng2-ckeditor";
import {SharedModule} from "../../../common/module/shared.module";

import {CkeditorComponent} from "./ckeditor/ckeditor.component";
import {TinymceComponent} from './tinymce/tinymce.component';


@NgModule({
  imports: [
    SharedModule,
    ComponentModule,
    EditorRoutingModule,
    CKEditorModule
  ],
  declarations: [CkeditorComponent, TinymceComponent],
})
export class EditorModule { }
