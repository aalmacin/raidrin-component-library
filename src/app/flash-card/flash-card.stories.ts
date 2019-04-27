import { storiesOf } from '@storybook/angular';
import { FlashCardComponent } from './flash-card.component';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('FlashCard', module);

stories.add('Default', () => ({
  component: FlashCardComponent,
  props: {
    heading: text('heading', 'Lorem ipsum dolor sit amet'),
    content: text(
      'content',
      'Morbi egestas, justo ultrices lacinia consequat, tortor nisl malesuada mi, convallis posuere elit orci at risus.'
    )
  }
}));
