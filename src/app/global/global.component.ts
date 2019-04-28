import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-global',
  template: `
    <div *ngIf="showMargin">
      <h1>Margin</h1>
      <div *ngFor="let marg of margins" class="margins">
        <div>
          <span>-</span>
          <br />
          <span>|</span>
          <span class="{{ marg }}">X</span>
          <span>|</span>
          {{ marg }}
          <br />
          <span>-</span>
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

    'rd-m-x-vs',
    'rd-m-x-sm',
    'rd-m-x-md',
    'rd-m-x-lg',
    'rd-m-x-vl',

    'rd-m-t-vs',
    'rd-m-t-sm',
    'rd-m-t-md',
    'rd-m-t-lg',
    'rd-m-t-vl',

    'rd-m-b-vs',
    'rd-m-b-sm',
    'rd-m-b-md',
    'rd-m-b-lg',
    'rd-m-b-vl',

    'rd-m-y-vs',
    'rd-m-y-sm',
    'rd-m-y-md',
    'rd-m-y-lg',
    'rd-m-y-vl',

    'rd-m-a-vs',
    'rd-m-a-sm',
    'rd-m-a-md',
    'rd-m-a-lg',
    'rd-m-a-vl',
  ];
}
