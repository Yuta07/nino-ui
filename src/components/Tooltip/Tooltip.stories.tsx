import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';

storiesOf('Tooltip', module).add('all', () => (
  <>
    <div style={{ lineHeight: 20 }}>Scroll</div>
    <Tooltip
      content={
        <TooltipItemTop>
          <p>I hava a pen. You hava a pen.</p>
          <p>I hava a apple.</p>
        </TooltipItemTop>
      }
    >
      Mouse over here
    </Tooltip>
    <div style={{ lineHeight: 60 }}>Scroll</div>
    <TooltipContainer>
      <Tooltip
        content={
          <TooltipItemBottom>
            <Text>材料</Text>
            <UnorderedList>
              <List>えび</List>
              <List>白身魚</List>
              <List>あさり</List>
              <List>いか</List>
              <List>玉ねぎ</List>
              <List>米</List>
              <List>にんにく</List>
              <List>塩</List>
              <List>トマト缶</List>
              <List>サフラン</List>
              <List>オリーブ油</List>
              <List>水</List>
            </UnorderedList>
          </TooltipItemBottom>
        }
        backgroundColor="DARK"
      >
        パエリアの材料
      </Tooltip>
    </TooltipContainer>
    <div style={{ lineHeight: 20 }}>Scroll</div>
  </>
));

const TooltipItemTop = styled.div`
  padding: 10px;
`;

const TooltipItemBottom = styled.div`
  padding: 10px;
  color: #fefefe;
`;

const TooltipContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: inline;
`;

const Text = styled.h3`
  font-size: 16px;
`;

const UnorderedList = styled.ul`
  list-style: none;
`;

const List = styled.li`
  &:before {
    content: '• ';
    color: #fefefe;
  }
`;
