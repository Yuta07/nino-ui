import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  color?: string;
};

export const Spinner = ({ color = 'MAIN' }: Props) => {
  const themes = useTheme();
  return (
    <>
      <Loader color={color} themes={themes} />
    </>
  );
};

// spinner style
// ref: [https://projects.lukehaas.me/css-loaders/]
const LoaderSpin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<{ color: Props['color']; themes: Theme }>`
  ${({ color, themes }) => {
    const { palette } = themes;
    return css`
      margin: 0 auto;
      width: 3rem;
      height: 3rem;
      font-size: 5px;
      position: relative;
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
    `;
  }}
`;
