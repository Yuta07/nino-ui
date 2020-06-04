import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../themes/Theme';

type Props = {
  children: string | React.ReactNode;
  label?: string;
  position?: {
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
};

export const Balloon = ({ children, position }: Props) => {
  const themes = useTheme();

  return (
    <BalloonCard posi={position} themes={themes}>
      {children}
    </BalloonCard>
  );
};

export const BalloonTip = ({ children, label, position }: Props) => {
  const themes = useTheme();

  return (
    <HoverInteraction>
      <Span>{children}</Span>
      <BalloonCard posi={position} themes={themes}>
        {label}
      </BalloonCard>
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
        animation: ${FadeIn} 0.2s linear;
      }
    `;
  }}
`;

const Span = styled.span``;

const BalloonCard = styled.span<{ posi?: Props['position']; themes: Theme }>`
  ${({ posi, themes }) => {
    const { palette, fontSize } = themes;
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      color: ${palette.SECONDARY};
      background-color: ${palette.DARK};
      border-radius: 4px;
      display: inline-block;
      font-size: ${fontSize.X_SMALL}px;
      padding: 0.3rem 0.5rem;
      position: relative;

      ${position &&
        (top || left || right || bottom) &&
        css`
          position: ${position};
        `}
      ${top &&
        css`
          top: ${top};
        `}
      ${bottom &&
        css`
          bottom: ${bottom};
        `}
      ${right &&
        css`
          right: ${right};
        `}
      ${left &&
        css`
          left: ${left};
        `}

      &:after {
        border-color: ${palette.DARK} transparent transparent transparent;
        border-style: solid;
        border-width: 4px 4px 0 4px;
        position: absolute;
        bottom: 0;
        left: 50%;
        content: '';
        display: block;
        width: 0;
        height: 0;
        transform: translate(-50%, 100%);
      }
    `;
  }}
`;
