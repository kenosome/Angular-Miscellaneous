import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size':tamano+'px'}">
      ng-style Works!
    </p>
    <p [style.fontSize.px]="tamano+5">
      ng-style Works!
    </p>
    <input type="number" [(ngModel)]="tamano" step="1" min="1">
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  constructor() { }
  tamano:number = 15;
  ngOnInit() {
  }

}
