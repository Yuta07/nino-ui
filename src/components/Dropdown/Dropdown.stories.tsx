import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import * as React from 'react';
import { Dropdown } from './Dropdown';

const Wrapper = () => {
  return (
    <Dropdown controllable={false} color='DARK'>
      <List>
        <ListItem>MyPage</ListItem>
        <ListItem>Settings</ListItem>
        <ListItem>Help</ListItem>
        <ListItem>Logout</ListItem>
      </List>
    </Dropdown>
  );
};

storiesOf('Dropdown', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const List = styled.ul`
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  color: #fefefe;
`;

const ListItem = styled.li`
  padding: 0.5rem 0rem;
  margin: 0 1rem;
  border-bottom: 1px solid #cccccc;

  &:last-child {
    border-bottom: none;
  }
`;
