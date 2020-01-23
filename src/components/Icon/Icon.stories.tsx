import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Icon, IconType } from './Icon';

const iconColor = '#363636';

const renderIconList = () =>
  Object.keys(IconType).map(icon => (
    <Container key={icon}>
      <Icon name={icon} color={iconColor} />
      <IconName color={iconColor}>{icon}</IconName>
    </Container>
  ));

storiesOf('Icon', module).add('all', () => <Wrapper>{renderIconList()}</Wrapper>);

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #f7f7f7;
  text-align: center;
`;

const IconName = styled.p<{ color: string }>`
  margin: 0.5rem 0 0;
  color: ${props => props.color};
  font-size: 1rem;
`;
