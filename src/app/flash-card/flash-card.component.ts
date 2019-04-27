import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-flash-card',
  template: `
    <p>Hello {{ heading }}</p>
  `,
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {
  @Input()
  heading = '';
}
