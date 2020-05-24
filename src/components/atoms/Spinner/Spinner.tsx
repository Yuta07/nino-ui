import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  color?: string;
  message?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
};

export const Spinner = ({ color = 'MAIN' }: Props) => {
  const themes = useTheme();

  return <Loader color={color} themes={themes} />;
};

export const SpinnerWithMessage = ({ color = 'MAIN', message, position }: Props) => {
  const themes = useTheme();

  return (
    <Container>
      <Loader color={color} themes={themes} />
      <Message themes={themes} posi={position}>
        {message}
      </Message>
    </Container>
  );
};

// ref: [https://projects.lukehaas.me/css-loaders/]

const Container = styled.div`
  position: relative;
`;

const LoaderSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<{ color: Props['color']; themes: Theme }>`
  ${({ color, themes }) => {
    const { device, palette } = themes;

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

const Message = styled.span<{ themes: Theme; posi: Props['position'] }>`
  ${({ themes, posi }) => {
    const { device } = themes;
    const { top, bottom, left, right } = posi;

    return css`
      position: absolute;
      font-size: 14px;
      white-space: nowrap;

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

      @media screen and ${device.MOBILE} {
        font-size: 12px;
      }
    `;
  }}
`;
