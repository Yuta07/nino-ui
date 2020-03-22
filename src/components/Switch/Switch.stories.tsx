import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Switch } from './Switch';

const Wrapper = () => {
  const [status, setStatus] = React.useState(true);
  const [status2, setStatus2] = React.useState(true);

  const switchButtonClick = () => {
    setStatus(!status);
  };

  const switchButtonClick2 = () => {
    setStatus2(!status2);
  };

  return (
    <>
      <Container>
        <Switch
          iconLeft={{ iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#1abc9c', pattern: 'Go' }}
          iconRight={{ iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#bdc3c7', pattern: 'Go' }}
          status={status}
          ballStyle={{ color: '#1abc9c', translateMove: 47 }}
          switchButtonClick={switchButtonClick}
        />
      </Container>
      <Container>
        <Switch
          iconLeft={{}}
          iconRight={{}}
          status={status2}
          toggleOnText="ON"
          toggleOffText="OFF"
          ballStyle={{ color: '#1abc9c', translateMove: 47 }}
          switchButtonClick={switchButtonClick2}
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
