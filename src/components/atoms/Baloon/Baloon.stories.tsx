import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Balloon, BalloonTip } from './Baloon';

storiesOf('Baloon', module).add('all', () => (
  <>
    <Balloon>Baloon</Balloon>
    <Balloon position={{ position: 'absolute', top: '200px', left: '200px' }}>Absolute Baloon</Balloon>
    <Balloon position={{ position: 'absolute', top: '400px', left: '100px' }}>
      Absolute Baloon<p>これくらいで改行</p>
    </Balloon>
    <div style={{ margin: '100px' }}>
      <p>
        バルーンチップを
        <BalloonTip label="InteractionHover" position={{ position: 'absolute', top: '400px', left: '100px' }}>
          <span style={{ color: '#F7DF1E' }}>注釈のUIとして</span>
        </BalloonTip>
        ここに表示する
      </p>
    </div>
  </>
));
