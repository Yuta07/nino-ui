import * as React from 'react';
import styled, { css } from 'styled-components';
import { IconProps, Props } from './Button';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

export type Position = {
  position: string;
};

export type WithIconButtonProps = IconProps & Props & Position;

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
  size: WithIconButtonProps['size'];
  color: WithIconButtonProps['color'];
  width: WithIconButtonProps['width'];
  height: WithIconButtonProps['height'];
  themes: Theme;
}>`
  ${({ size, color, width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${palette.SECONDARY};
      background: ${palette[color]};
      width: ${width ? `${width}` : 'auto'};
      height: ${height ? `${height}px` : '24px'};
      border: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 0.5rem;

      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
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

const IconContainer = styled.div``;

const ButtonText = styled.span<{ position: Position['position'] }>`
  ${({ position }) => {
    return css`
      ${position === 'left' ? `margin-left: 12px;` : `margin-right: 12px;`}
    `;
  }}
`;
