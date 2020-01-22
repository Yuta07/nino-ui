import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { LinkText } from './LinkText';

storiesOf('LinkText', module).add('all', () => (
  <Wrapper>
    <LinkText size={20} customCSS="padding: 2px 8px;" text="Yutazon.me" link="https://yutazon.me" visited='silver' />
    <LinkText color="#3498db" customCSS="text-decoration: none;" hoverCSS='opacity: 0.8; transition: 0.2s; text-decoration: underline;' text="React 公式サイト" link="https://ja.reactjs.org/" target='_blank' />
    <LinkText color="#c0392b" size={24} customCSS="padding: 4px; text-decoration: none;" text="storybook 公式サイト" link="https://storybook.js.org/" target='_blank' />
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
