import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

storiesOf('Heading', module).add('all', () => (
  <Wrapper>
    <Container>
      <Heading color="MAIN" heading="nino-ui_h1" size={1} />
    </Container>
    <Container>
      <Heading color="INFO" heading="nino-ui_h2" size={2} />
    </Container>
    <Container>
      <Heading color="WARNING" heading="nino-ui_h3" size={3} />
    </Container>
    <Container>
      <Heading color="DANGER" heading="nino-ui_h4" size={4} />
    </Container>
    <Container>
      <Heading color="SUCCESS" heading="nino-ui_h5" size={5} />
    </Container>
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Container = styled.div`
  margin: 1rem 0;
`;
