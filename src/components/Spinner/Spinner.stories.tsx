import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
// import components
import { Spinner } from './Spinner';

storiesOf('Spinner', module).add('all', () => (
  <Wrapper>
    <Spinner color="MAIN" />
    <Spinner color="DANGER" />
    <Spinner color="SUCCESS" />
    <Spinner color="WARNING" />
    <Spinner color="INFO" />
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;
