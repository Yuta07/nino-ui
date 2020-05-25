import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { GithubIcon } from '../Icon/GithubIcon';
import { TypeIcon } from '../Icon/TypeIcon';
import { Base, Props } from './Anchor';
import { Custom } from './CustomAnchor';

type CustomProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  pattern: string;
  shape: 'square' | 'circle';
};

export type IconAnchorProps = Props & CustomProps & Custom;

export const IconOnlyAnchor = ({
  iconName,
  iconSize,
  iconColor,
  pattern,
  shape,
  color = 'PRIMARY',
  background = 'SECONDARY',
  ...props
}: IconAnchorProps) => {
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
      iconButton = <TypeIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />;
      break;
    default:
      break;
  }

  return (
    <AnchorContainer color={color} background={background} shape={shape} themes={theme} {...props}>
      <IconButton>{iconButton}</IconButton>
    </AnchorContainer>
  );
};

const AnchorContainer = styled(Base)<{
  color: IconAnchorProps['color'];
  background: IconAnchorProps['background'];
  shape: IconAnchorProps['shape'];
  themes: Theme;
}>`
  ${({ color, background, shape, themes }) => {
    const { palette } = themes;

    return css`
      color: ${palette[color]};
      background: ${palette[background]};
      border: none;
      border-radius: ${shape === 'circle' ? '50%' : '6px'};
    `;
  }}
`;

const IconButton = styled.span`
  position: absolute;
  display: flex;
`;
