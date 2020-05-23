import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { DeleteButton } from './DeleteButton';

storiesOf('DeleteButton', module).add('all', () => (
  <div style={{ margin: '50px' }}>
    <DeleteButton text="削除する" onClick={action('削除ボタンがクリックされました')} />
  </div>
));
