import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

export type Props = {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  children?: React.ReactNode;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Button = ({
  type = 'button',
  name,
  children,
  color = 'SECONDARY',
  background = 'MAIN',
  width,
  height,
  disabled = false,
  handleClick,
}: Props) => {
  const theme = useTheme();

  return (
    <Base
      type={type}
      name={name}
      background={background}
      color={color}
      width={width}
      height={height}
      disabled={disabled}
      themes={theme}
      onClick={handleClick}
    >
      {children}
    </Base>
  );
};

export const Base = styled.button<{
  color?: Props['color'];
  background?: Props['background'];
  width?: Props['width'];
  height?: Props['height'];
  themes: Theme;
}>`
  ${({ color, background, width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : 'auto'};
      font-size: ${fontSize.SMALL}px;
      color: ${palette[color]};
      background: ${palette[background]};
      border: none;
      border-radius: 8px;
      padding: 6px 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
        transition: 0.2s;
      }

      &:focus {
        outline: none;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;
