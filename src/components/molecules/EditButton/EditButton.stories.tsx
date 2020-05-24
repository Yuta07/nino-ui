import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { EditButton } from './EditButton';

storiesOf('EditButton', module).add('all', () => (
  <div style={{ margin: '50px' }}>
    <EditButton text="編集する" onClick={action('編集ボタンがクリックされました')} />
  </div>
));
