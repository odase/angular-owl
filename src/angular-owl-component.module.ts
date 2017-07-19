import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonToggleModule } from '@angular/material';
import { AngularOwlToggleComponent } from './angular-owl-toggle.component';


@NgModule({
  imports: [
      CommonModule,
      MdButtonToggleModule,
  ],
  exports: [ AngularOwlToggleComponent ],
  declarations: [
      AngularOwlToggleComponent,
  ]
})
export class AngularOwlComponentModule { }
