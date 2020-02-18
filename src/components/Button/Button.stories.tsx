import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { WithIconButton } from './WithIconButton';
import { TransmissionButton } from './TransmissionButton';

const Wrapper = () => {
  return (
    <>
      <Container>
        <Button type="button" name="base" width="120px" height="32px" size={1} color="MAIN">
          original
        </Button>
      </Container>
      <Container>
        <Button type="button" name="base" width="120px" height="32px" size={1} disabled={true}>
          disabled
        </Button>
      </Container>
      <Container>
        <WithIconButton
          type="button"
          name="base"
          iconName="Fi-Heart"
          iconSize={16}
          iconColor="SECONDARY"
          position="left"
          width="120px"
          height="32px"
          size={1}
          color="DANGER"
        >
          Favorite
        </WithIconButton>
      </Container>
      <Container>
        <WithIconButton
          type="button"
          name="base"
          iconName="Fi-Share2"
          iconSize={16}
          iconColor="SECONDARY"
          position="Right"
          width="120px"
          height="32px"
          size={1}
          color="INFO"
        >
          Share
        </WithIconButton>
      </Container>
      <Container>
        <TransmissionButton type="button" name="base" width="140px" height="28px" size={1} color="INFO">
          Transmission
        </TransmissionButton>
      </Container>
    </>
  );
};

storiesOf('Button', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;
