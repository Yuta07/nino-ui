import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Balloon } from './Baloon';

storiesOf('Baloon', module).add('all', () => (
  <>
    <Balloon>Baloon</Balloon>
    <Balloon position={{ position: 'absolute', top: '200px', left: '200px' }}>Absolute Baloon</Balloon>
    <Balloon position={{ position: 'absolute', top: '400px', left: '100px' }}>
      Absolute Baloon<p>これくらいで改行</p>
    </Balloon>
  </>
));
