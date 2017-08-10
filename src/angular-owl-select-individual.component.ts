import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ao-select-individual',
  template: `<md-input-container class="full-width">
   <input type="text" mdInput [formControl]="form?.controls[predicate]"
   [mdAutocomplete]="auto" [(ngModel)]="subject[predicate]">
    <md-autocomplete #auto="mdAutocomplete" [displayWith]="displayFn">
       <md-option *ngFor="let option of filteredOptions | async" [value]="option">
          {{ option.someLabel["@value"] }}
       </md-option>
    </md-autocomplete>
</md-input-container>
`,
  styles: [`
      .full-width {
          width: 100%;
        }`
]
})
export class AngularOwlSelectIndividualComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() subject : Object = {};
    @Input() predicate : string = "";
    @Input() question : string = "";
    @Input() options : Array<any>;
    filteredOptions: Observable<Object[]>;

    ngOnInit() {
       this.filteredOptions = this.form.controls[this.predicate].valueChanges
        .map(Object => Object && typeof Object === 'object' ? Object.someLabel : Object)
        .map(name => name ? this.filter(name) : this.options.slice());
    }

    filter(name: string): any[] {
       return this.options.filter(option => new RegExp(`${name}`, 'gi').test(option["someLabel"]['@value']));
    }

    displayFn(object: any): string {
       return object ? object["someLabel"]["@value"] : object;
    }
}
