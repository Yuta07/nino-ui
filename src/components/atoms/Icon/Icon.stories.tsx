import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import styled from 'styled-components';
import { FeatherIcon, FeatherIconType } from './FeatherIcon';
import { GithubIcon, GithubIconType } from './GithubIcon';
import { TypeIcon, TypeIconType } from './TypeIcon';

const renderFeatherIconList = () =>
  Object.keys(FeatherIconType).map(icon => (
    <Container key={icon}>
      <FeatherIcon name={icon} />
      <IconName>{icon}</IconName>
    </Container>
  ));

const renderGithubIconList = () =>
  Object.keys(GithubIconType).map(icon => (
    <Container key={icon}>
      <GithubIcon name={icon} />
      <IconName>{icon}</IconName>
    </Container>
  ));

const renderTypIconList = () =>
  Object.keys(TypeIconType).map(icon => (
    <Container key={icon}>
      <TypeIcon name={icon} />
      <IconName>{icon}</IconName>
    </Container>
  ));

storiesOf('Icon', module)
  .add('Feather', () => <Wrapper>{renderFeatherIconList()}</Wrapper>)
  .add('Github', () => <Wrapper>{renderGithubIconList()}</Wrapper>)
  .add('Type', () => <Wrapper>{renderTypIconList()}</Wrapper>)
  .add('Clickable', () => (
    <>
      <div>
        <TypeIcon name="Ti-WeatherSnow" onClick={action('アイコンがクリックされました<Type>')} />
      </div>
      <div>
        <GithubIcon name="Go-Heart" onClick={action('アイコンがクリックされました<GitHub>')} />
      </div>
      <div>
        <FeatherIcon name="Fi-LifeBuoy" onClick={action('アイコンがクリックされました<Feather>')} />
      </div>
    </>
  ));

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

const IconName = styled.p`
  margin: 0.5rem 0 0;
  color: #363636;
  font-size: 1rem;
`;
