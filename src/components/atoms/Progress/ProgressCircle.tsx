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
  const canvas = React.useRef(null);
  const backCanvas = React.useRef(null);

  React.useLayoutEffect(() => {
    const background = backCanvas.current.getContext('2d');
    background.beginPath();
    background.arc(size / 2, size / 2, size / 2 - 10, 0, 100 * 2 * Math.PI, false);
    background.lineWidth = 2;
    background.strokeStyle = '#ced4da';

    background.stroke();
  });

  React.useLayoutEffect(() => {
    if (percentage > 100) return null;

    const ctx = canvas.current.getContext('2d');
    const result = 3.6 * percentage;

    const updateAnimationState = () => {
      let count = 0;

      const acrInterval = setInterval(() => {
        count += 1;
        const percent = count / 3.6;

        ctx.beginPath();
        ctx.strokeStyle = theme.palette[color];
        ctx.lineWidth = 2;
        ctx.arc(
          size / 2,
          size / 2,
          size / 2 - 10,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * (270 + 3.6 * percent),
          false
        );
        ctx.stroke();

        if (count >= result) {
          clearInterval(acrInterval);
          setProgress(percentage);
        }
      }, 5);
    };

    updateAnimationState();

    return (() => {
      updateAnimationState();
    })
  }, [percentage, color, size, theme.palette]);

  return (
    <Circle size={size}>
      <Canvas ref={backCanvas} width={size} height={size} style={{ position: 'absolute', zIndex: 150 }} />
      <Canvas ref={canvas} width={size} height={size} style={{ position: 'absolute', zIndex: 151 }} />
      <Percentage posi={position}>
        <Heading heading={2} visualLevel={fontLevel}>
          {progress}
          <Span themes={theme}>%</Span>
        </Heading>
      </Percentage>
    </Circle>
  );
};

const Canvas = styled.canvas``;

const Circle = styled.div<{ size: Props['size'] }>`
  ${({ size }) => {
    return css`
      position: relative;
      width: ${size ? `${size}px` : 'auto'};
      height: ${size ? `${size}px` : 'auto'};
      display: inline-flex;
      overflow: hidden;
    `;
  }}
`;

const Percentage = styled.div<{ posi: Props['position'] }>`
  ${({ posi }) => {
    const { top, bottom, left, right } = posi !== undefined && posi;

    return css`
      width: 100%;
      position: absolute;
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
