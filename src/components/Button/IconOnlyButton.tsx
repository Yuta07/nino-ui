import * as React from 'react';
import styled, { css } from 'styled-components';
import { IconProps } from './Button';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { GithubIcon } from '../Icon/GithubIcon';
import { TypIcon } from '../Icon/TypIcon';

export type IconButtonProps = {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  width?: number;
  height: number;
  pattern: string;
  shape: 'square' | 'circle';
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type IconOnlyButtonProps = IconProps & IconButtonProps;

export const IconOnlyButton = ({
  iconName,
  iconSize,
  iconColor,
  color = 'MAIN',
  width,
  height,
  handleClick,
  pattern,
  shape,
}: IconOnlyButtonProps) => {
  const theme = useTheme();

  let iconButton: JSX.Element;
  switch (pattern) {
    case 'Fi':
      iconButton = <FeatherIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />;
      break;
    case 'Go':
      iconButton = <GithubIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />;
      break;
    case 'Ti':
      iconButton = <TypIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />;
      break;
    default:
      break;
  }

  return (
    <Button color={color} width={width} height={height} shape={shape} themes={theme} onClick={handleClick}>
      <IconButton>{iconButton}</IconButton>
    </Button>
  );
};

const Button = styled.div<{
  color: string;
  width: number;
  height: number;
  shape: IconButtonProps['shape'];
  themes: Theme;
}>`
  ${({ color, width, height, shape, themes }) => {
    const { palette } = themes;

    return css`
      background: ${palette[color]};
      width: ${width ? `${width}px` : 'auto'};
      height: ${height}px;
      border: none;
      border-radius: ${shape === 'circle' ? '50%' : '6px'};
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.5rem;

      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }
    `;
  }}
`;

const IconButton = styled.span`
  position: absolute;
  display: flex;
`;