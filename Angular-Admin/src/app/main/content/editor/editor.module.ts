import { NgModule } from '@angular/core';
import { ComponentModule } from "../../../common/module/component.module";
import { EditorRoutingModule } from './editor-routing.module';
import { UEditorModule } from "ngx-ueditor";
import {SharedModule} from "../../../common/module/shared.module";

import {UeditorComponent} from "./ueditor/ueditor.component";
import {CkeditorComponent} from "./ckeditor/ckeditor.component";


@NgModule({
  imports: [
    SharedModule,
    ComponentModule,
    EditorRoutingModule,
    UEditorModule.forRoot({
      path: 'assets/ueditor/',
      options: {
        themePath: '/assets/ueditor/themes/'
      }
    }),
  ],
  declarations: [UeditorComponent, CkeditorComponent]
})
export class EditorModule { }
