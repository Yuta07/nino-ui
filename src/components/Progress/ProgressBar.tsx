import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  width: string;
  height?: number;
  color: string;
  progress: number;
};

export const ProgressBar = ({ width, height = 16, color = 'MAIN', progress }: Props) => {
  const theme = useTheme();

  return (
    <Bar width={width} height={height} progress={progress}>
      <Progress color={color} progress={progress} themes={theme} />
    </Bar>
  );
};

const BarAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

const Bar = styled.div<{ width: Props['width']; height: Props['height']; progress: Props['progress']  }>`
  ${({ width, height, progress }) => {
    return css`
      position: relative;
      width: ${width};
      height: ${height}px;
      border: none;
      border-radius: 32px;
      animation: ${BarAnimation} 1s linear 0s infinite alternate none ${progress >= 100 ? 'paused' : 'running'};
    `;
  }}
`;

const Progress = styled.div<{ color: Props['color']; progress: Props['progress']; themes: Theme;  }>`
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
