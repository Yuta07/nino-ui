import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  color?: string;
  size?: number;
  customCSS?: string;
  hoverCSS?: string;
  text: string;
  link: string;
  target?: string;
  visited?: string;
};

export const LinkText = ({ color = '#f39c12', size = 14, customCSS, hoverCSS, text, link, target = '', visited = '' }: Props) => {
  return (
    <>
      <Text href={link} target={target} visited={visited} color={color} size={size} customCSS={customCSS} hoverCSS={hoverCSS}>
        {text}
      </Text>
    </>
  );
};

const Text = styled.a<{ color: string; size: number; customCSS: string; hoverCSS: string; visited: string }>`
  ${({ color, size, customCSS, hoverCSS, visited }) => {
    const customStyle = css`
      ${customCSS}
    `;

    const hoverStyle = css`
      ${hoverCSS}
    `

    return css`
      color: ${color};
      font-size: ${size}px;
      display: inline-block;
      ${customStyle}

      &:hover {
        ${hoverStyle}
      }

      &:visited {
        color: ${visited};
      }
    `;
  }}
`;
