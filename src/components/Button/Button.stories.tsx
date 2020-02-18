import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { WithIconButton } from './WithIconButton';
import { TransmissionButton } from './TransmissionButton';
import { IconOnyButton } from './IconOnlyButton';

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
          iconName="Fi-Heart"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          width="120px"
          height="32px"
          size={1}
          color="DANGER"
          position="left"
        >
          Favorite
        </WithIconButton>
      </Container>
      <Container>
        <WithIconButton
          iconName="Fi-Share2"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          width="120px"
          height="32px"
          size={1}
          color="INFO"
          position="Right"
        >
          Share
        </WithIconButton>
      </Container>
      <Container>
        <TransmissionButton type="button" name="base" width="140px" height="28px" size={1} color="INFO">
          Transmission
        </TransmissionButton>
      </Container>
      <IconOnlyContainer>
        <IconOnyButton
          iconName="Go-Zap"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          height="32px"
          size={1}
          color="WARNING"
          pattern="Go"
        />
        <IconOnyButton
          iconName="Go-Bell"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          height="32px"
          size={1}
          color="INFO"
          pattern="Go"
        />
        <IconOnyButton
          iconName="Ti-Cog"
          iconSize={16}
          iconColor="PRIMARY"
          type="button"
          name="base"
          height="32px"
          size={1}
          color="GRAY"
          pattern="Ti"
        />
        <IconOnyButton
          iconName="Ti-WeatherStormy"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          height="32px"
          size={1}
          color="SUCCESS"
          pattern="Ti"
        />
      </IconOnlyContainer>
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

const IconOnlyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
