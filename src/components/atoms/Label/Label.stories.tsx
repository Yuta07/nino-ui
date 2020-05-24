import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Label } from './Label';

storiesOf('Label', module).add('all', () => (
  <Wrapper>
    <Container>
      <Label label="メールアドレス" icon="Fi-AlertCircle" required={true} requiredText="必須" />
    </Container>
    <Container>
      <Label label="パスワード" />
    </Container>
    <Container>
      <Label label="お名前" icon="Fi-AlertCircle" required={true} requiredText="必須" />
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
