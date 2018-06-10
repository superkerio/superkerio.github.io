import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Angular
import { MatInputModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    TranslateModule,
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    TranslateModule,
  ],
})
export class SharedModule { }
