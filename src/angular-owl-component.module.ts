import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularOwlToggleComponent } from './angular-owl-toggle.component';
import { AngularOwlInputTextComponent } from './angular-owl-input-text.component';
import { AngularOwlInputDateComponent } from './angular-owl-input-date.component';

import {
    MdInputModule,
    MdButtonToggleModule,
    MdDatepickerModule,
    MdNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MdInputModule,
      MdButtonToggleModule,
      MdDatepickerModule,
      MdNativeDateModule,
  ],
  exports: [ AngularOwlToggleComponent, AngularOwlInputTextComponent, AngularOwlInputDateComponent ],
  declarations: [
      AngularOwlToggleComponent,
      AngularOwlInputTextComponent,
      AngularOwlInputDateComponent
  ]
})
export class AngularOwlComponentModule { }
