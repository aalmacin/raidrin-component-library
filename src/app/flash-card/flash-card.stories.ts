import { storiesOf } from '@storybook/angular';
import { FlashCardComponent } from './flash-card.component';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('FlashCard', module);

stories.add('Default', () => ({ component: FlashCardComponent, props: {
  heading: text('heading', 'Default Heading')
} }));
