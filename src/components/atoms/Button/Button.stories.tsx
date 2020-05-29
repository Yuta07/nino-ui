import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
        <Button
          type="button"
          name="base"
          width="120px"
          color="SECONDARY"
          background="MAIN"
          handleClick={action('ボタンがクリックされました')}
        >
          original
        </Button>
      </Container>
      <Container>
        <SkeltonButton
          type="button"
          name="base"
          width="120px"
          height="32px"
          handleClick={action('ボタンがクリックされました')}
        >
          Skelton
        </SkeltonButton>
        <SkeltonButton type="button" name="base" border={true} handleClick={action('ボタンがクリックされました')}>
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
          handleClick={action('ボタンがクリックされました')}
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
          handleClick={action('ボタンがクリックされました')}
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
          handleClick={action('ボタンがクリックされました')}
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
          handleClick={action('ボタンがクリックされました')}
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
          handleClick={action('ボタンがクリックされました')}
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
          handleClick={action('ボタンがクリックされました')}
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
