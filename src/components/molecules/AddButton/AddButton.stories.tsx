import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { AddButton } from './AddButton';

storiesOf('AddButton', module).add('all', () => (
  <div style={{ margin: '50px' }}>
    <AddButton text="追加する" onClick={action('追加ボタンがクリックされました')} />
  </div>
));
