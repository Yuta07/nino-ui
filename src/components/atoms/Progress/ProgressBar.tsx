import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  width?: string;
  color: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  progress: number;
};

export const ProgressBar = ({ width = '100%', color = 'MAIN', position, progress }: Props) => {
  const theme = useTheme();

  return (
    <Bar width={width} posi={position} progress={progress}>
      <Progress color={color} progress={progress} themes={theme} />
    </Bar>
  );
};

const BarAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
`;

const Bar = styled.div<{ width: Props['width']; posi: Props['position']; progress: Props['progress'] }>`
  ${({ width, posi, progress }) => {
    const { top, bottom, left, right } = posi !== undefined && posi;

    return css`
      position: fixed;
      z-index: 150;
      width: ${width ? width : 'auto'};
      height: 4px;
      border: none;
      border-radius: 32px;
      animation: ${BarAnimation} 1s linear 0s infinite alternate none ${progress > 100 ? 'paused' : 'running'};

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
    `;
  }}
`;

const Progress = styled.div<{ color: Props['color']; progress: Props['progress']; themes: Theme }>`
  ${({ color, progress, themes }) => {
    const { palette } = themes;

    return `
      background: ${palette[color]};
      height: 100%;
      width: ${progress}%;
      border-radius: inherit;
      transition: width 0.3s ease-in;
    `;
  }}
`;
