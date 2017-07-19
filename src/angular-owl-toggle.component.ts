import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ao-toggle',
  template: `Custom component from ODASE <br>
  <md-button-toggle>Toggle me!</md-button-toggle>`,
  styleUrls: []
})
export class AngularOwlToggleComponent implements OnInit {

  ngOnInit() {
      console.log("Hey! I'm a toggle component")
  }

}
