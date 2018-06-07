import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Angular
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
})
export class SharedModule { }
