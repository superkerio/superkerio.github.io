import { NgModule } from '@angular/core';
import { ComponentModule } from "../../../common/module/component.module";
import { EditorRoutingModule } from './editor-routing.module';
import { UEditorModule } from "ngx-ueditor";
import { CKEditorModule } from "ng2-ckeditor";
import {SharedModule} from "../../../common/module/shared.module";

import {UeditorComponent} from "./ueditor/ueditor.component";
import {CkeditorComponent} from "./ckeditor/ckeditor.component";
import {TinymceComponent} from './tinymce/tinymce.component';


@NgModule({
  imports: [
    SharedModule,
    ComponentModule,
    EditorRoutingModule,
    UEditorModule.forRoot({
      path: 'assets/ueditor/',
      options: {
        themePath: (location.href.indexOf('github') !== -1 ? '/Angular-Admin/dist' : '.') + '/assets/ueditor/themes/'
      },
    }),
    CKEditorModule
  ],
  declarations: [UeditorComponent, CkeditorComponent, TinymceComponent],
})
export class EditorModule { }
