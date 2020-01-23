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
  visitCSS?: string;
};

export const LinkText = ({
  color = '#f39c12',
  size = 14,
  customCSS,
  hoverCSS,
  text,
  link,
  target = '',
  visitCSS = '',
}: Props) => {
  return (
    <>
      <Text
        href={link}
        target={target}
        color={color}
        size={size}
        customCSS={customCSS}
        hoverCSS={hoverCSS}
        visitCSS={visitCSS}
      >
        {text}
      </Text>
    </>
  );
};

const Text = styled.a<{ color: string; size: number; customCSS: string; hoverCSS: string; visitCSS: string }>`
  ${({ color, size, customCSS, hoverCSS, visitCSS }) => {
    const customStyle = css`
      ${customCSS}
    `;

    const hoverStyle = css`
      &:hover {
        ${hoverCSS}
      }
    `;

    const visitStyle = css`
      &:visited {
        color: ${visitCSS};
      }
    `;

    return css`
      color: ${color};
      font-size: ${size}px;
      display: inline-block;
      ${customStyle}
      ${hoverStyle}
      ${visitStyle}
    `;
  }}
`;
