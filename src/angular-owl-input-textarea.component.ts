import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-input-textarea',
  template: `<md-input-container class="full-width" *ngIf="form && form?.controls[predicate] && subject">
      <textarea mdInput
        rows="6" cols="80"
        [placeholder]="question"
        [formControl]="form?.controls[predicate]"
        [(ngModel)]="subject[predicate]"></textarea>
        <md-icon mdSuffix>edit</md-icon>
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
export class AngularOwlInputTextareaComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";
    @Input() rows: number = 6;
    @Input() cols: number = 80;

  ngOnInit() {
  }

}
