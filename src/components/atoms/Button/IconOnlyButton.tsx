import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { GithubIcon } from '../Icon/GithubIcon';
import { TypeIcon } from '../Icon/TypeIcon';
import { Base, Props } from './Button';

type CustomProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  border?: boolean;
  pattern: string;
  shape: 'square' | 'circle';
};

export type IconOnlyButtonProps = Props & CustomProps;

export const IconOnlyButton = ({
  iconName,
  iconSize,
  iconColor,
  border,
  pattern,
  shape,
  ...props
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
      iconButton = <TypeIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />;
      break;
    default:
      break;
  }

  return (
    <Button border={border} shape={shape} themes={theme} onClick={props.handleClick} {...props}>
      <IconButton>{iconButton}</IconButton>
    </Button>
  );
};

const Button = styled(Base)<{
  border: IconOnlyButtonProps['border'];
  shape: IconOnlyButtonProps['shape'];
  themes: Theme;
}>`
  ${({ border, shape, themes }) => {
    const { palette } = themes;

    return css`
      border: ${border ? `1px solid ${palette.DARK}` : 'none'};
      border-radius: ${shape === 'circle' ? '50%' : '8px'};
    `;
  }}
`;

const IconButton = styled.span`
  position: absolute;
  display: flex;
`;
