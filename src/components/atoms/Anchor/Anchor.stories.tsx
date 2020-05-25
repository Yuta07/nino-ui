import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Anchor, UnderlineAnchor, InteractionAnchor } from './Anchor';
import { CustomAnchor } from './CustomAnchor';
import { IconOnlyAnchor } from './IconOnlyAnchor';
import { WithIconAnchor } from './WithIconAnchor';

const Wrapper = () => {
  return (
    <>
      <Container>
        <Anchor link="#" height="32px">
          Anchor - Original
        </Anchor>
      </Container>
      <Container>
        <UnderlineAnchor link="#" height="32px">
          Anchor - Underline
        </UnderlineAnchor>
      </Container>
      <Container>
        <InteractionAnchor border="MAIN" link="#" height="32px">
          Anchor - Interaction
        </InteractionAnchor>
      </Container>
      <Container>
        <CustomAnchor link="#" height="32px">
          Custom - Normal
        </CustomAnchor>
      </Container>
      <Container>
        <CustomAnchor link="#" height="32px" color="SECONDARY" background="MAIN">
          Custom - background: MAIN, color: SECONDARY
        </CustomAnchor>
      </Container>
      <Container>
        <WithIconAnchor
          link="#"
          iconName="Fi-Heart"
          iconSize={16}
          iconColor="SECONDARY"
          width="100%"
          color="SECONDARY"
          background="DANGER"
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
          color="SECONDARY"
          background="INFO"
          position="Right"
        >
          Share
        </WithIconAnchor>
      </Container>
      <IconOnlyContainer>
        <IconOnlyAnchor
          iconName="Go-Zap"
          iconSize={16}
          iconColor="SECONDARY"
          link=""
          width="32px"
          height="32px"
          background="WARNING"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyAnchor
          iconName="Go-Bell"
          iconSize={16}
          iconColor="SECONDARY"
          link=""
          width="32px"
          height="32px"
          background="INFO"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyAnchor
          iconName="Ti-Cog"
          iconSize={16}
          iconColor="PRIMARY"
          link=""
          width="32px"
          height="32px"
          background="GRAY"
          pattern="Ti"
          shape="square"
        />
        <IconOnlyAnchor
          iconName="Ti-WeatherStormy"
          iconSize={16}
          iconColor="SECONDARY"
          link=""
          width="32px"
          height="32px"
          background="SUCCESS"
          pattern="Ti"
          shape="circle"
        />
      </IconOnlyContainer>
    </>
  );
};

storiesOf('Anchor', module).add('all', () =>
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
