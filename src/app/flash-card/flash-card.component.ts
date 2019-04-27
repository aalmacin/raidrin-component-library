import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-flash-card',
  template: `
    <div class="heading rd-w-vs">
      {{ heading }}
    </div>
    <div class="content rd-w-vs">
      {{ content }}
    </div>
  `,
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {
  @Input()
  heading = '';

  @Input()
  content = '';
}
