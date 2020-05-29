import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Spinner, SpinnerWithMessage } from './Spinner';

storiesOf('Spinner', module).add('all', () => (
  <Wrapper>
    <Spinner color="MAIN" />
    <Spinner color="DANGER" position={{ position: 'absolute', top: '25%', left: '50%' }} />
    <Spinner color="SUCCESS" />
    <SpinnerWithMessage
      color="WARNING"
      message="Now Loading..."
      position={{ position: 'absolute', top: '50%', left: '25%' }}
    />
    <SpinnerWithMessage
      color="INFO"
      message="読み込み中..."
      position={{ position: 'absolute', top: '50%', left: '75%' }}
    />
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem;
`;
