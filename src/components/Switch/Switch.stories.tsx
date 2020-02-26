import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Switch } from './Switch';

const Wrapper = () => {
  const [status, setStatus] = React.useState(true);

  const switchButtonClick = () => {
    setStatus(!status);
  };

  return (
    <>
      <Container>
        <Switch
          iconLeft={{ iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#1abc9c', pattern: 'Go' }}
          iconRight={{ iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#bdc3c7', pattern: 'Go' }}
          width={80}
          height={32}
          status={status}
          ballStyle={{ color: '#1abc9c', width: 30, height: 30, translateMove: 47 }}
          switchButtonClick={switchButtonClick}
        />
      </Container>
      <Container>
        <Switch
          iconLeft={{}}
          iconRight={{}}
          width={80}
          height={32}
          status={status}
          toggleOnText="ON"
          toggleOffText="OFF"
          ballStyle={{ color: '#1abc9c', width: 30, height: 30, translateMove: 47 }}
          switchButtonClick={switchButtonClick}
        />
      </Container>
    </>
  );
};

storiesOf('Switch', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;
