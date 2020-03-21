import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
// import { FeatherIcon } from '../Icon/FeatherIcon';

export type Props = {
  type: 'button' | 'submit' | 'reset';
  name?: string;
  children?: React.ReactNode;
  size?: number;
  color?: string;
  width?: string;
  height: number;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export type IconProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
};

export const Button = ({
  type,
  name,
  children,
  size,
  color = 'MAIN',
  width,
  height,
  disabled = false,
  handleClick,
}: Props) => {
  const theme = useTheme();

  return (
    <>
      <Base
        type={type}
        name={name}
        size={size}
        color={color}
        width={width}
        height={height}
        disabled={disabled}
        themes={theme}
        onClick={handleClick}
      >
        {children}
      </Base>
    </>
  );
};

const Base = styled.button<{
  size: Props['size'];
  color: Props['color'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ size, color, width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${palette.SECONDARY};
      background: ${palette[color]};
      width: ${width ? `${width}` : 'auto'};
      height: ${height}px;
      border: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }

      &:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
      }
    `;
  }}
`;
