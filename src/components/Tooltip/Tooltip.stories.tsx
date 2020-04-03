import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
// import components
import { Tooltip } from './Tooltip';

storiesOf('Tooltip', module).add('all', () => (
  <Wrapper>
    <Tooltip
      content={
        <>
          <p>I hava a pen. You hava a pen.</p>
          <p>I hava a apple.</p>
        </>
      }
    >
      <Text>TIP</Text>
    </Tooltip>
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  height: 1000px;
`;

const Text = styled.h1``;
