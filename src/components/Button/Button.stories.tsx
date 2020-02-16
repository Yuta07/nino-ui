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
        <Button type="button" name="base" width="160px" height="40px" size={1.1} color="MAIN">
          original
        </Button>
      </Container>
      <Container>
        <Button type="button" name="base" width="160px" height="40px" size={1.2} color="MAIN" disabled={true}>
          disabled
        </Button>
      </Container>
      <Container>
        <WithIconButton
          type="button"
          name="base"
          iconName="Fi-Heart"
          iconSize={20}
          iconColor="SECONDARY"
          top={25}
          left={10}
          width="160px"
          height="40px"
          size={1}
          color="DANGER"
        >
          Favorite
        </WithIconButton>
      </Container>
      <Container>
        <TransmissionButton type="button" name="base" width="160px" height="40px" size={1.1} color="INFO">
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
