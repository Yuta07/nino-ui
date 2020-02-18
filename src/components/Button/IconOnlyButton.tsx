import * as React from 'react';
import styled, { css } from 'styled-components';
import { IconProps, Props } from './Button';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { GithubIcon } from '../Icon/GithubIcon';
import { TypIcon } from '../Icon/TypIcon';

export type Pattern = {
  pattern: string;
};

export type IconOnlyButtonProps = IconProps & Props & Pattern;

export const IconOnyButton = ({
  iconName,
  iconSize,
  iconColor,
  type,
  name,
  size,
  color = 'MAIN',
  width,
  height,
  disabled = false,
  handleClick,
  pattern,
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
        <IconContainer>{iconButton}</IconContainer>
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
      border: none;
      border-radius: 50%;
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

const IconContainer = styled.div``;
