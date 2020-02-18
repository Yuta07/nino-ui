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

export type WithIconButtonProps = IconProps & Props;

export const WithIconButton = ({
  iconName,
  iconSize,
  iconColor,
  type,
  name,
  children,
  size,
  color = 'MAIN',
  position,
  width,
  height,
  disabled = false,
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
        {position === 'left' ? (
          <>
            <IconContainer>
              <FeatherIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />
            </IconContainer>
            <ButtonText position={position}>{children}</ButtonText>
          </>
        ) : (
          <>
            <ButtonText position={position}>{children}</ButtonText>
            <IconContainer>
              <FeatherIcon name={iconName} size={iconSize} color={theme.palette[iconColor]} />
            </IconContainer>
          </>
        )}
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
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      padding: 0 0.5rem;

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

const IconContainer = styled.div``;

const ButtonText = styled.span<{ position: Props['position'] }>`
  ${({ position }) => {
    return css`
      ${position === 'left' ? `margin-left: 8px;` : `margin-right: 8px;`}
    `;
  }}
`;
