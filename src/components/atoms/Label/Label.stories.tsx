import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Label, LabelWithRequired } from './Label';

storiesOf('Label', module).add('all', () => (
  <Wrapper>
    <Container>
      <Label label="ラベル" />
    </Container>
    <Container>
      <Label label="少し長めのラベル" />
    </Container>
    <Container>
      <LabelWithRequired label="メールアドレス" icon="Fi-AlertCircle" requiredText="必須" position={{ position: 'absolute', top: '24px', left: '0px' }} />
    </Container>
    <Container>
      <LabelWithRequired label="パスワード" icon="Fi-AlertCircle" requiredText="必須" position={{ position: 'absolute', top: '24px', left: '0px' }} />
    </Container>
    <Container>
      <LabelWithRequired label="お名前" icon="Fi-Zap" position={{ position: 'absolute', top: '4px', left: '60px' }} />
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
