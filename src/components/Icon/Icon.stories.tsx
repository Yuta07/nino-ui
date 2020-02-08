import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { FeatherIcon, FeatherIconType } from './FeatherIcon';
import { GithubIcon, GithubIconType } from './GithubIcon';
import { TypIcon, TypIconType } from './TypIcon';

const iconColor = '#363636';

const renderFeatherIconList = () =>
  Object.keys(FeatherIconType).map(icon => (
    <Container key={icon}>
      <FeatherIcon name={icon} color={iconColor} />
      <IconName color={iconColor}>{icon}</IconName>
    </Container>
  ));

const renderGithubIconList = () =>
  Object.keys(GithubIconType).map(icon => (
    <Container key={icon}>
      <GithubIcon name={icon} color={iconColor} />
      <IconName color={iconColor}>{icon}</IconName>
    </Container>
  ));

const renderTypIconList = () =>
  Object.keys(TypIconType).map(icon => (
    <Container key={icon}>
      <TypIcon name={icon} color={iconColor} />
      <IconName color={iconColor}>{icon}</IconName>
    </Container>
  ));

storiesOf('Icon', module)
  .add('Feather', () => <Wrapper>{renderFeatherIconList()}</Wrapper>)
  .add('Github', () => <Wrapper>{renderGithubIconList()}</Wrapper>)
  .add('Type', () => <Wrapper>{renderTypIconList()}</Wrapper>);

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
