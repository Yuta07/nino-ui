import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { WithIconButton } from './WithIconButton';
import { TransmissionButton } from './TransmissionButton';
import { IconOnlyButton } from './IconOnlyButton';
import { Heading } from '../Heading';

const Wrapper = () => {
  return (
    <>
      <Heading heading="Original Button" size={4} />
      <Container>
        <Button type="button" name="base" width="120px" height={32} color="MAIN">
          original
        </Button>
      </Container>
      <Heading heading="Disabled Button" size={4} />
      <Container>
        <Button type="button" name="base" width="120px" height={32} disabled={true}>
          disabled
        </Button>
      </Container>
      <Heading heading="Transmission Button" size={4} />
      <Container>
        <TransmissionButton type="button" name="base" width="120px" height={28} color="INFO">
          Transmission
        </TransmissionButton>
      </Container>
      <Heading heading="WithIcon Button" size={4} />
      <Container>
        <WithIconButton
          iconName="Fi-Heart"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          width="100%"
          height={32}
          color="DANGER"
          position="left"
        >
          Favorite
        </WithIconButton>
      </Container>
      <Container>
        <WithIconButton
          iconName="Fi-Share2"
          iconColor="SECONDARY"
          type="button"
          name="base"
          width="100%"
          height={32}
          color="INFO"
          position="Right"
        >
          Share
        </WithIconButton>
      </Container>
      <Heading heading="IconOnly Button" size={4} />
      <IconOnlyContainer>
        <IconOnlyButton
          iconName="Go-Zap"
          iconSize={16}
          iconColor="SECONDARY"
          width="32px"
          height={32}
          color="WARNING"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyButton
          iconName="Go-Bell"
          iconSize={16}
          iconColor="SECONDARY"
          width="32px"
          height={32}
          color="INFO"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyButton
          iconName="Ti-Cog"
          iconSize={16}
          iconColor="PRIMARY"
          width="32px"
          height={32}
          color="GRAY"
          pattern="Ti"
          shape="square"
        />
        <IconOnlyButton
          iconName="Ti-WeatherStormy"
          iconSize={16}
          iconColor="SECONDARY"
          width="32px"
          height={32}
          color="SUCCESS"
          pattern="Ti"
          shape="circle"
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
  margin: 2rem 0;
`;

const IconOnlyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;
