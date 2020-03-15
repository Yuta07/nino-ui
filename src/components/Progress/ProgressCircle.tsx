import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  size: number;
  color: string;
  width: number;
  textColor?: string;
  progress: number;
};

export const ProgressCircle = ({ size = 120, color = 'MAIN', width, textColor = '#2c3e50', progress }: Props) => {
  const [state, setstate] = React.useState(0);
  const theme = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (state < progress) {
        setstate(state => state + 1);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [state, progress]);

  return (
    <Circle size={size} color={color} progress={progress} themes={theme}>
      <Progress size={size} width={width} themes={theme}>
        <Text textColor={textColor}>{state}</Text>%
      </Progress>
    </Circle>
  );
};

// ref:[https://qiita.com/Keita_I/items/72f302b6470a2ccdd9f4]
const Circle = styled.div<{
  size: Props['size'];
  color: Props['color'];
  themes: Theme;
  progress: Props['progress'];
}>`
  ${({ size, color, progress, themes }) => {
    const { palette } = themes;

    return css`
      position: relative;
      width: ${size}px;
      height: ${size}px;
      display: inline-block;
      background: ${palette[color]};
      border: none;
      border-radius: 50%;
      text-align: center;
      overflow: hidden;
      z-index: 100;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -${size / 2}px;
        width: ${size}px;
        height: ${size}px;
        transform-origin: right ${size / 2}px;
        z-index: 200;
        transform: ${progress < 50.01 ? `rotate(0deg)` : `rotate(${progress * 3.6 - 180}deg)`};
        background: ${palette.GRAY};
        transition: transform 0.5s ease-in;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: ${size / 2}px;
        width: ${size}px;
        height: ${size}px;
        transform-origin: left ${size / 2}px;
        z-index: 300;
        transform: ${progress < 50.01 ? `rotate(${progress * 3.6}deg)` : `rotate(360deg)`};
        background: ${progress < 50.01 ? `${palette.GRAY}` : `${palette[color]}`};
        transition: ${progress < 50.01 ? `transform 0.5s ease-in` : `transform 0s ease-in`};
      }
    `;
  }}
`;

const Progress = styled.div<{ size: Props['size']; width: Props['width']; themes: Theme }>`
  ${({ size, width, themes }) => {
    const { palette } = themes;

    return css`
      position: absolute;
      top: ${width}px;
      left: ${width}px;
      background: ${palette.SECONDARY};
      width: ${size - width * 2}px;
      height: ${size - width * 2}px;
      border-radius: 50%;
      z-index: 400;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

const Text = styled.span<{ textColor: Props['textColor'] }>`
  ${({ textColor }) => {
    return css`
      color: ${textColor};
      background: transparent;
      font-weight: 550;
      letter-spacing: 0.2px;
    `;
  }}
`;
