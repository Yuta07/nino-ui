import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { Heading } from '../Heading';

type Props = {
  size?: number;
  fontLevel?: number;
  color?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  percentage: number;
};

export const ProgressCircle = ({ size = 100, fontLevel = 4, color = 'MAIN', position, percentage }: Props) => {
  const [progress, setProgress] = React.useState<number>(0);
  const theme: Theme = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < percentage) {
        setProgress(progress => progress + 1);
      }
    }, 5);

    return () => clearTimeout(timer);
  }, [progress, percentage]);

  return (
    <Circle size={size} color={color} themes={theme} percentage={percentage}>
      <Progress size={size} themes={theme} />
      <Percentage posi={position}>
        <Heading heading={2} visualLevel={fontLevel}>
          {progress}
          <Span themes={theme}>%</Span>
        </Heading>
      </Percentage>
    </Circle>
  );
};

const Circle = styled.div<{
  size: Props['size'];
  color: Props['color'];
  themes: Theme;
  percentage: Props['percentage'];
}>`
  ${({ size, color, percentage, themes }) => {
    const { palette } = themes;
    return css`
      position: relative;
      width: ${size ? `${size}px` : 'auto'};
      height: ${size ? `${size}px` : 'auto'};
      display: inline-block;
      background: ${palette[color]};
      border: none;
      border-radius: 50%;
      text-align: center;
      overflow: hidden;
      z-index: 152;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -${size / 2}px;
        width: ${size}px;
        height: ${size}px;
        transform-origin: right ${size / 2}px;
        z-index: 150;
        transform: ${percentage < 50.01 ? `rotate(0deg)` : `rotate(${percentage * 3.6 - 180}deg)`};
        background: ${palette.GRAY};
        transition: transform 0.5s ease-in;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: ${size / 2}px;
        width: ${size}px;
        height: ${size}px;
        transform-origin: left ${size / 2}px;
        z-index: 151;
        transform: ${percentage < 50.01 ? `rotate(${percentage * 3.6}deg)` : `rotate(360deg)`};
        background: ${percentage < 50.01 ? `${palette.GRAY}` : `${palette[color]}`};
        transition: ${percentage < 50.01 ? `transform 0.5s ease-in` : `transform 0s ease-in`};
      }
    `;
  }}
`;

const Progress = styled.div<{ size: Props['size']; themes: Theme }>`
  ${({ size, themes }) => {
    const { palette } = themes;
    return css`
      position: absolute;
      top: 5px;
      left: 5px;
      background: ${palette.SECONDARY};
      width: ${size - 10}px;
      height: ${size - 10}px;
      border-radius: 50%;
      z-index: 153;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

const Percentage = styled.div<{ posi: Props['position'] }>`
  ${({ posi }) => {
    const { top, bottom, left, right } = posi !== undefined && posi;

    return css`
      width: 100%;
      position: absolute;
      z-index: 154;
      text-align: center;

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

const Span = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize } = themes;
    return css`
      font-size: ${fontSize.X_SMALL}px;

      @media screen and ${device.MOBILE} {
        font-size: calc(${fontSize.X_SMALL} - 2) px;
      }
    `;
  }}
`;
