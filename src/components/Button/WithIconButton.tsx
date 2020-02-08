import * as React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './Button';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

export type IconProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
};

export type Position = {
  top?: number;
  left?: number;
};

export type WithIconButtonProps = IconProps & Position & Props;

export const WithIconButton = ({
  iconName,
  iconSize,
  iconColor,
  top,
  left,
  type,
  name,
  children,
  size,
  color,
  width,
  height,
  disabled,
  handleClick,
}: WithIconButtonProps) => {
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
        <IconContainer top={top} left={left}>
          <FeatherIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />
        </IconContainer>
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
      height: ${height ? height : '24px'};
      padding: 0 1rem;
      border: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;
      position: relative;

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

const IconContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
`;
