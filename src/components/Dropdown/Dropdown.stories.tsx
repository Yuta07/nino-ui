import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import * as React from 'react';
import { Dropdown } from './Dropdown';
import { DropdownButton } from './DropdownButton';
import { DropdownContent } from './DropdownContent';
import { Button, SkeltonButton } from '../atoms/Button';

const Wrapper = () => {
  return (
    <>
      <Dropdown controllable={false} color="DARK">
        <DropdownButton>
          <SkeltonButton height="28px" type="button">
            dropdown button
          </SkeltonButton>
        </DropdownButton>
        <DropdownContent>
          <List>
            <ListItem>MyPage</ListItem>
            <ListItem>Settings</ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Logout</ListItem>
          </List>
        </DropdownContent>
      </Dropdown>
      <Dropdown controllable={false} color="GRAY">
        <DropdownButton>
          <Button height="28px" type="button" color="GRAY">
            dropdown button
          </Button>
        </DropdownButton>
        <DropdownContent>
          <List>
            <ListItem>MyPage</ListItem>
            <ListItem>Settings</ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Logout</ListItem>
          </List>
        </DropdownContent>
      </Dropdown>
    </>
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
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
