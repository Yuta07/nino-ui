import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Anchor } from './Anchor';
import { IconOnlyAnchor } from './IconOnlyAnchor';
import { WithIconAnchor } from './WithIconAnchor';

const Wrapper = () => {
  return (
    <>
      <Container>
        <Anchor link="#" width="120px" height={32} size={1} color="MAIN">
          original
        </Anchor>
      </Container>
      <IconOnlyContainer>
        <IconOnlyAnchor
          iconName="Go-Zap"
          iconSize={16}
          iconColor="SECONDARY"
          link=""
          width="32px"
          height={32}
          size={1}
          color="WARNING"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyAnchor
          iconName="Go-Bell"
          iconSize={16}
          iconColor="SECONDARY"
          link=""
          width="32px"
          height={32}
          size={1}
          color="INFO"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyAnchor
          iconName="Ti-Cog"
          iconSize={16}
          iconColor="PRIMARY"
          link=""
          width="32px"
          height={32}
          size={1}
          color="GRAY"
          pattern="Ti"
          shape="square"
        />
        <IconOnlyAnchor
          iconName="Ti-WeatherStormy"
          iconSize={16}
          iconColor="SECONDARY"
          link=""
          width="32px"
          height={32}
          size={1}
          color="SUCCESS"
          pattern="Ti"
          shape="circle"
        />
      </IconOnlyContainer>
      <Container>
        <WithIconAnchor
          link="#"
          iconName="Fi-Heart"
          iconSize={16}
          iconColor="SECONDARY"
          width="100%"
          height={32}
          size={1}
          color="DANGER"
          position="left"
        >
          Favorite
        </WithIconAnchor>
      </Container>
      <Container>
        <WithIconAnchor
          link="#"
          iconName="Fi-Share2"
          iconColor="SECONDARY"
          width="100%"
          height={32}
          size={1}
          color="INFO"
          position="Right"
        >
          Share
        </WithIconAnchor>
      </Container>
    </>
  );
};

storiesOf('Anchor', module).add('all', () =>
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
  width: 400px;
`;
