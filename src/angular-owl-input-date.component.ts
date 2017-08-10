import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-input-date',
  template: `<md-input-container  class="full-width" *ngIf="form && form?.controls[predicate] && subject">
    <input type="date" mdInput [placeholder]="question"
    [formControl]="form?.controls[predicate]"
    [(ngModel)]="subject[predicate]">
    <md-error *ngIf="form?.controls[predicate].hasError('pattern')">
        Please enter a valid date
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
export class AngularOwlInputDateComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";

  ngOnInit() {
  }

}
