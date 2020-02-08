import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

export type IconProps = {
  withIcon: boolean;
  iconName?: string;
  iconSize?: number;
};

export type Position = {
  top?: number;
  left?: number;
};

export type Props = {
  type: 'button' | 'submit' | 'reset';
  name?: string;
  children: string;
  size: number;
  icon?: IconProps;
  position?: Position;
  color: string;
  width?: string;
  height: string;
  transmission?: boolean;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Button = ({
  type,
  name,
  children,
  size,
  icon,
  position = { left: 0, top: 0 },
  color,
  width,
  height,
  transmission = false,
  disabled = false,
  handleClick,
}: Props) => {
  const theme = useTheme();

  return (
    <>
      <Base
        type={type}
        name={name}
        withIcon={icon.withIcon}
        size={size}
        color={color}
        width={width}
        height={height}
        transmission={transmission}
        disabled={disabled}
        themes={theme}
        onClick={handleClick}
      >
        {icon.withIcon ? (
          <IconContainer position={position}>
            <FeatherIcon name={icon.iconName} size={icon.iconSize} color={theme.palette.SECONDARY} />
          </IconContainer>
        ) : null}
        {children}
      </Base>
    </>
  );
};

const Base = styled.button<{
  withIcon: boolean;
  size: number;
  color: string;
  width: string;
  height: string;
  transmission: boolean;
  themes: Theme;
}>`
  ${({ withIcon, size, color, width, height, transmission, themes }) => {
    const { palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${transmission ? palette.PRIMARY : palette.SECONDARY};
      background: ${transmission ? null : palette[color]};
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
      position: ${withIcon ? 'relative' : null};

      &:hover {
        opacity: ${transmission ? 0.6 : 0.9};
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }
    `;
  }}
`;

const IconContainer = styled.div<{ position: Position }>`
  position: absolute;
  left: ${props => props.position.left}%;
  top: ${props => props.position.top}%;
`;
