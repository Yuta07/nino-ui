import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { WithIconButton } from './WithIconButton';
import { SkeltonButton } from './SkeltonButton';
import { IconOnlyButton } from './IconOnlyButton';

const Wrapper = () => {
  return (
    <>
      <Container>
        <Button type="button" name="base" width="120px" color="SECONDARY" background="MAIN">
          original
        </Button>
      </Container>
      <Container>
        <SkeltonButton type="button" name="base" width="120px" height="32px">
          Skelton
        </SkeltonButton>
        <SkeltonButton type="button" name="base" border={true}>
          Skelton with border
        </SkeltonButton>
      </Container>
      <Container>
        <WithIconButton
          iconName="Fi-Heart"
          iconSize={16}
          iconColor="SECONDARY"
          type="button"
          name="base"
          width="100%"
          color="SECONDARY"
          background="DANGER"
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
          color="SECONDARY"
          background="INFO"
          position="Right"
        >
          Share
        </WithIconButton>
      </Container>
      <IconOnlyContainer>
        <IconOnlyButton
          iconName="Go-Zap"
          iconSize={16}
          iconColor="SECONDARY"
          width="32px"
          height="32px"
          color="SECONDARY"
          background="WARNING"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyButton
          iconName="Go-Bell"
          iconSize={16}
          iconColor="SECONDARY"
          width="32px"
          height="32px"
          color="SECONDARY"
          background="INFO"
          pattern="Go"
          shape="circle"
        />
        <IconOnlyButton
          iconName="Ti-Cog"
          iconSize={16}
          iconColor="PRIMARY"
          width="32px"
          height="32px"
          color="GRAY"
          background="SECONDARY"
          border={true}
          pattern="Ti"
          shape="square"
        />
        <IconOnlyButton
          iconName="Ti-WeatherStormy"
          iconSize={16}
          iconColor="SECONDARY"
          width="32px"
          height="32px"
          color="SECONDARY"
          background="SUCCESS"
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
