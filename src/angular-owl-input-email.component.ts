import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-input-email',
  template: `<md-input-container *ngIf="form && form?.controls[predicate] && subject">
    <input type="email" mdInput [pattern]="pattern"
    [placeholder]="question"
    [formControl]="form?.controls[predicate]"
    [(ngModel)]="subject[predicate]">
    <md-icon mdSuffix>mail_outline</md-icon>
    <md-error *ngIf="form?.controls[predicate].hasError('pattern')">
        Please enter a valid email
    </md-error>
    <md-error *ngIf="form?.controls[predicate].hasError('required')">
        {{ question }} is <strong>required</strong>
    </md-error>
 </md-input-container>`,
  styleUrls: []
})
export class AngularOwlInputEmailComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";
    pattern : string = "[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)+";

  ngOnInit() {
  }

}
