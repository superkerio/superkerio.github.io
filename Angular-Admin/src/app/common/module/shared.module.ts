import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
// Material Angular
import { MatInputModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule } from "@angular/material";
import {MatButtonModule} from "@angular/material";
import {MatPaginatorModule} from "@angular/material";

import { TranslateModule } from "@ngx-translate/core";

// Service
import { SharedService } from "../service/shared.service";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    TranslateModule,
    FormsModule,

  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    TranslateModule,
    FormsModule,

  ],
  providers: [
    SharedService,
    TranslateService,
    ToastrService,
  ]
})
export class SharedModule { }
