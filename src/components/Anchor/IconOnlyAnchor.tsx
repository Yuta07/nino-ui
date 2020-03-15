import * as React from 'react';
import styled, { css } from 'styled-components';
import { AnchorProps } from './Anchor';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { GithubIcon } from '../Icon/GithubIcon';
import { TypIcon } from '../Icon/TypIcon';

export type IconAnchorProps = {
  link: string;
  children?: React.ReactNode;
  size?: number;
  color?: string;
  width?: string;
  height: number;
  pattern: string;
  shape: 'square' | 'circle';
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export type IconOnlyAnchorProps = AnchorProps & IconAnchorProps;

export const IconOnlyAnchor = ({
  iconName,
  iconSize,
  iconColor,
  link,
  color = 'MAIN',
  width,
  height,
  handleClick,
  pattern,
  shape,
}: IconOnlyAnchorProps) => {
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
    <Anchor href={link} color={color} width={width} height={height} shape={shape} themes={theme} onClick={handleClick}>
      <IconButton>{iconButton}</IconButton>
    </Anchor>
  );
};

const Anchor = styled.a<{
  color: string;
  width: string;
  height: number;
  shape: IconAnchorProps['shape'];
  themes: Theme;
}>`
  ${({ color, width, height, shape, themes }) => {
    const { palette } = themes;

    return css`
      background: ${palette[color]};
      width: ${width ? `${width}` : 'auto'};
      height: ${height}px;
      border: none;
      border-radius: ${shape === 'circle' ? '50%' : '6px'};
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }
    `;
  }}
`;

const IconButton = styled.span`
  position: absolute;
  display: flex;
`;
