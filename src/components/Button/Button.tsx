import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
// import { FeatherIcon } from '../Icon/FeatherIcon';

export type Props = {
  type: 'button' | 'submit' | 'reset';
  name?: string;
  children: React.ReactNode;
  size: number;
  color: string;
  width?: string;
  height: string;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Button = ({ type, name, children, size, color, width, height, disabled = false, handleClick }: Props) => {
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
  size: number;
  color: string;
  width: string;
  height: string;
  themes: Theme;
}>`
  ${({ size, color, width, height, themes }) => {
    const { palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${palette.SECONDARY};
      background: ${palette[color]};
      letter-spacing: 1.4;
      width: ${width ? width : 'auto'};
      height: ${height ? height : '32px'};
      padding: 0 1rem;
      border: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }
    `;
  }}
`;
