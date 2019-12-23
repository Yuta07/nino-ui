import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
// import components
import { Spinner } from './Spinner';

storiesOf('Spinner', module).add('all', () => (
  <React.Fragment>
    <Wrapper>
      <Spinner color="#c0392b" />
      <Spinner color="#f1c40f" />
      <Spinner color="#16a085" />
      <Spinner color="#2980b9" />
    </Wrapper>
  </React.Fragment>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;
