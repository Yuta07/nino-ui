import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

storiesOf('Heading', module).add('all', () => (
  <Wrapper>
    <Container>
      <Heading heading={1}>nino-ui_h1 - Size_h1</Heading>
    </Container>
    <Container>
      <Heading heading={1} visualLevel={2}>
        nino-ui_h1 - Size_h2
      </Heading>
    </Container>
    <Container>
      <Heading heading={2}>nino-ui_h2 - Size_h2</Heading>
    </Container>
    <Container>
      <Heading heading={2} visualLevel={3} line="under">
        nino-ui_h2 - Size_h3 - underLine - MAIN
      </Heading>
    </Container>
    <Container>
      <Heading color="DANGER" heading={3} visualLevel={4} line="side">
        nino-ui_h3 - Size_h4 - sideLine - DANGER
      </Heading>
    </Container>
    <Container>
      <Heading color="INFO" heading={4} visualLevel={5} line="under">
        nino-ui_h4 - Size_h5 - underLine - INFO
      </Heading>
    </Container>
    <Container>
      <Heading color="SUCCESS" heading={5} visualLevel={4} line="side">
        nino-ui_h5 - Size_h4 - sideLine - SUCCESS
      </Heading>
    </Container>
    <Container>
      <Heading color="WARNING" heading={5} line="under">
        nino-ui_h5 - Size_h5 - underLine - WARNING
      </Heading>
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
