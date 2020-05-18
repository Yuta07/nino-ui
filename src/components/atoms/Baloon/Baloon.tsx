import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../themes/Theme';

type Props = {
  children: string | React.ReactNode;
  position?: {
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
};

export const Balloon = ({ children, position, ...props }: Props) => {
  const themes = useTheme();

  return (
    <BalloonCard posi={position} themes={themes} {...props}>
      {children}
    </BalloonCard>
  );
};

const BalloonCard = styled.span<{ posi?: Props['position']; themes: Theme }>`
  ${({ posi, themes }) => {
    const { palette, fontSize } = themes;
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      color: ${palette.SECONDARY};
      background-color: ${palette.DARK};
      border-radius: 4px;
      display: inline-block;
      font-size: ${fontSize.SMALL};
      padding: 0.3rem 0.5rem;
      position: relative;

      ${((position && top) || left || right || bottom) &&
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
