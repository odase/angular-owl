import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'ao-select-type-input',
  template: `<div [ngSwitch]="questionType">
    <ao-input-date *ngSwitchCase="'date'" [(form)]="form"
    [subject]="subject"
    [predicate]="predicate"
    [question]="question"></ao-input-date>

    <ao-input-email *ngSwitchCase="'email'" [(form)]="form"
    [subject]="subject"
    [predicate]="predicate"
    [question]="question"></ao-input-email>

    <ao-input-tel *ngSwitchCase="'tel'" [(form)]="form"
    [subject]="subject"
    [predicate]="predicate"
    [question]="question"></ao-input-tel>

    <ao-input-textarea *ngSwitchCase="'textarea'" [(form)]="form"
    [subject]="subject"
    [predicate]="predicate"
    [question]="question"></ao-input-textarea>

    <ao-input-text *ngSwitchDefault [(form)]="form"
    [subject]="subject"
    [predicate]="predicate"
    [question]="question"></ao-input-text>
</div>`,
  styleUrls: []
})
export class AngularOwlSelectTypeInputComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";
    @Input() questionType : string = "";


  ngOnInit() {
      let type: string = this.questionType;
      if(this.questionType.match("http://*#*")) {
          type = this.questionType.split('#')[1];
      } else {
          let type = this.questionType;
      }
      this.questionType = type;
  }

}
