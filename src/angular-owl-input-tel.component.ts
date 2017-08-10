import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-input-tel',
  template: `<md-input-container class="full-width" *ngIf="form && form?.controls[predicate] && subject">
    <input mdInput [pattern]="pattern"
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
  </md-input-container>`,
  styles: [`
      .full-width {
          width: 100%;
        }`
]
})
export class AngularOwlInputTelComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";
    @Input() pattern : string = "(0|\\+33|0033)[1-9][0-9]{8}";

  ngOnInit() {
  }

}
