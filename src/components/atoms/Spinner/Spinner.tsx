import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  color?: string;
  position?: {
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
};

type MessageProps = {
  message: string;
};

type WithMessageProps = Props & MessageProps;

export const Spinner = ({ color = 'MAIN', position }: Props) => {
  const themes = useTheme();

  return <Loader color={color} posi={position} themes={themes} />;
};

export const SpinnerWithMessage = ({ color = 'MAIN', message, position }: WithMessageProps) => {
  const themes = useTheme();

  return (
    <Container posi={position}>
      <Loader color={color} themes={themes} />
      <Message themes={themes}>{message}</Message>
    </Container>
  );
};

// ref: [https://projects.lukehaas.me/css-loaders/]

const Container = styled.div<{ posi: Props['position'] }>`
  ${({ posi }) => {
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      ${
        position && (top || left || right || bottom)
          ? css`
              position: ${position};
              z-index: 200;
            `
          : css`
              position: relative;
            `
      }
      ${position &&
        top &&
        css`
          top: ${top};
        `}
      ${position &&
        bottom &&
        css`
          bottom: ${bottom};
        `}
      ${position &&
        right &&
        css`
          right: ${right};
        `}
      ${position &&
        left &&
        css`
          left: ${left};
        `}
    `;
  }}
`;

const LoaderSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<{ color: Props['color']; posi?: Props['position']; themes: Theme }>`
  ${({ color, posi, themes }) => {
    const { device, palette } = themes;
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      width: 2.5rem;
      height: 2.5rem;
      font-size: 5px;
      border-radius: 50%;
      border-top: 0.3rem solid rgba(218, 218, 218, 0.2);
      border-right: 0.3rem solid rgba(218, 218, 218, 0.2);
      border-bottom: 0.3rem solid rgba(218, 218, 218, 0.2);
      border-left: 0.3rem solid ${palette[color]};
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: ${LoaderSpin} 1.2s infinite linear;
      animation: ${LoaderSpin} 1.2s infinite linear;

      ${
        position && (top || left || right || bottom)
          ? css`
              position: ${position};
              z-index: 200;
            `
          : css`
              position: relative;
            `
      }
      ${position &&
        top &&
        css`
          top: ${top};
        `}
      ${position &&
        bottom &&
        css`
          bottom: ${bottom};
        `}
      ${position &&
        right &&
        css`
          right: ${right};
        `}
      ${position &&
        left &&
        css`
          left: ${left};
        `}

      @media screen and ${device.TABLET} {
        width: 2rem;
        height: 2rem;
        border-top: 0.25rem solid rgba(218, 218, 218, 0.2);
        border-right: 0.25rem solid rgba(218, 218, 218, 0.2);
        border-bottom: 0.25rem solid rgba(218, 218, 218, 0.2);
        border-left: 0.25rem solid ${palette[color]};
      }

      @media screen and ${device.MOBILE} {
        width: 1.5rem;
        height: 1.5rem;
        border-top: 0.2rem solid rgba(218, 218, 218, 0.2);
        border-right: 0.2rem solid rgba(218, 218, 218, 0.2);
        border-bottom: 0.2rem solid rgba(218, 218, 218, 0.2);
        border-left: 0.2rem solid ${palette[color]};
      }
    `;
  }}
`;

const Message = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize } = themes;

    return css`
      position: absolute;
      top: 50px;
      left: -50%;
      font-size: ${fontSize.SMALL}px;
      white-space: nowrap;

      @media screen and ${device.MOBILE} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;
