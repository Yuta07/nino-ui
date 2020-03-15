import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  color?: string;
  heading: string;
  size: number;
};

export const Heading = ({ color = 'MAIN', heading, size }: Props) => {
  const theme = useTheme();

  let text: React.ReactNode;
  switch (size) {
    case 1:
      text = (
        <H1 color={color} theme={theme}>
          {heading}
        </H1>
      );
      break;
    case 2:
      text = (
        <H2 color={color} theme={theme}>
          {heading}
        </H2>
      );
      break;
    case 3:
      text = (
        <H3 color={color} theme={theme}>
          {heading}
        </H3>
      );
      break;
    case 4:
      text = (
        <H4 color={color} theme={theme}>
          {heading}
        </H4>
      );
      break;
    case 5:
      text = (
        <H5 color={color} theme={theme}>
          {heading}
        </H5>
      );
      break;
    default:
      break;
  }

  return <>{text}</>;
};

const Text = css<{ color: Props['color']; theme: Theme }>`
  ${({ color, theme }) => {
    const { palette } = theme;

    return css`
      padding: 0 0 0 1rem;
      position: relative;

      &:before {
        position: absolute;
        top: 0px;
        left: 0px;
        content: '';
        display: inline-block;
        width: 4px;
        height: 100%;
        border-radius: 6px;
        background: ${palette[color]};
      }
    `;
  }}
`;

const H1 = styled.h1`
  ${Text};
  font-size: 1.6rem;
`;

const H2 = styled.h2`
  ${Text};
  font-size: 1.4rem;
`;

const H3 = styled.h3`
  ${Text};
  font-size: 1.3rem;
`;

const H4 = styled.h4`
  ${Text};
  font-size: 1.2rem;
`;

const H5 = styled.h5`
  ${Text};
  font-size: 1.1rem;
`;
