import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-input-tel',
  template: `<form class="example-form">
  <md-input-container class="example-full-width">
    <input type="tel" mdInput pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
    [placeholder]="question"
    [formControl]="form?.controls[predicate]"
    [(ngModel)]="subject[predicate]">
    <md-icon mdSuffix>phone</md-icon>
    <md-error *ngIf="form?.controls[predicate].hasError('pattern')">
        Please enter a valid phone number
    </md-error>
    <md-error *ngIf="form?.controls[predicate].hasError('required')">
        {{ question }} is <strong>required</strong>
    </md-error>
  </md-input-container>
</form>`,
  styleUrls: []
})
export class AngularOwlInputTelComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";

  ngOnInit() {
  }

}
