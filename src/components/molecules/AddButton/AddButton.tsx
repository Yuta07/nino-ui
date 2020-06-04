import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { Balloon } from '../../atoms/Baloon';
import { FeatherIcon } from '../../atoms/Icon/FeatherIcon';

type Props = {
  text?: string;
  color?: string;
  onClick?: () => void;
};

export const AddButton = ({ text, color = 'PRIMARY', onClick }: Props) => {
  const themes = useTheme();

  return (
    <HoverInteraction>
      <FeatherIcon name="Fi-PlusCircle" color={themes.palette[color]} onClick={onClick} />
      {text ? <Balloon>{text}</Balloon> : null}
    </HoverInteraction>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HoverInteraction = styled.span`
  ${() => {
    return css`
      display: inline-block;
      position: relative;

      > *:first-child + * {
        display: none;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%) translateY(-12px);
        white-space: nowrap;
      }

      > *:first-child:hover + * {
        display: inline-block;
        animation: ${FadeIn} 0.3s linear;
      }
    `;
  }}
`;
