import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-global',
  template: `
    <div *ngIf="showMargin">
      <h1>Margin</h1>
      <div *ngFor="let marg of margins">
        -- {{ marg }} --
        <div>
          <span>|</span>
          <span class="{{ marg }}">X</span>
          <span>|</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent {
  @Input()
  showMargin = false;

  margins = [
    'rd-m-l-vs',
    'rd-m-l-sm',
    'rd-m-l-md',
    'rd-m-l-lg',
    'rd-m-l-vl',

    'rd-m-r-vs',
    'rd-m-r-sm',
    'rd-m-r-md',
    'rd-m-r-lg',
    'rd-m-r-vl',
  ];
}
