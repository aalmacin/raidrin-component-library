import { storiesOf } from '@storybook/angular';
import { GlobalComponent } from './global.component';
import { boolean } from '@storybook/addon-knobs';

const stories = storiesOf('FlashCard', module);

stories.add('Default', () => ({
  component: GlobalComponent,
  props: {
    showMargin: boolean('showMargin', true),
  }
}));
