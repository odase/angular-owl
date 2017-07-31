import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularOwlToggleComponent } from './angular-owl-toggle.component';
import { AngularOwlInputTextComponent } from './angular-owl-input-text.component';

import {
    MdInputModule,
    MdButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MdInputModule,
      MdButtonToggleModule
  ],
  exports: [ AngularOwlToggleComponent, AngularOwlInputTextComponent ],
  declarations: [
      AngularOwlToggleComponent,
      AngularOwlInputTextComponent
  ]
})
export class AngularOwlComponentModule { }
