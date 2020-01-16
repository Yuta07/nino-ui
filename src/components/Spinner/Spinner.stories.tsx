import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
// import components
import { Spinner } from './Spinner';

storiesOf('Spinner', module).add('all', () => (
  <Wrapper>
    <Spinner color="#c0392b" />
    <Spinner color="#f39c12" />
    <Spinner color="#f1c40f" />
    <Spinner color="#16a085" />
    <Spinner color="#3498db" />
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;
