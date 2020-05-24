import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Spinner, SpinnerWithMessage } from './Spinner';

storiesOf('Spinner', module).add('all', () => (
  <Wrapper>
    <Container>
      <Spinner color="MAIN" />
    </Container>
    <Container>
      <Spinner color="DANGER" />
    </Container>
    <Container>
      <Spinner color="SUCCESS" />
    </Container>
    <Container>
      <SpinnerWithMessage color="WARNING" message="Now Loading..." position={{ top: '50px', left: '-100%' }} />
    </Container>
    <Container>
      <SpinnerWithMessage color="INFO" message="読み込み中..." position={{ top: '50px', left: '-50%' }} />
    </Container>
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem;
`;

const Container = styled.div``;
