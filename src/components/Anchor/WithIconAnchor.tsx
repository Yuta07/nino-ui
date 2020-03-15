import * as React from 'react';
import styled, { css } from 'styled-components';
import { AnchorProps, Props } from './Anchor';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

export type Position = {
  position: string;
};

export type WithIconAnchorProps = AnchorProps & Props & Position;

export const WithIconAnchor = ({
  iconName,
  iconSize,
  iconColor,
  link,
  children,
  size,
  color = 'MAIN',
  position,
  width,
  height,
  handleClick,
}: WithIconAnchorProps) => {
  const theme = useTheme();

  return (
    <>
      <Base href={link} size={size} color={color} width={width} height={height} themes={theme} onClick={handleClick}>
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

const Base = styled.a<{
  size: number;
  color: string;
  width: string;
  height: number;
  themes: Theme;
}>`
  ${({ size, color, width, height, themes }) => {
    const { palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${palette.SECONDARY};
      background: ${palette[color]};
      width: ${width ? `${width}` : 'auto'};
      height: ${height ? `${height}px` : '24px'};
      border: none;
      border-radius: 8px;
      text-align: center;
      text-decoration: none;
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

const IconContainer = styled.div`
  display: inline-flex;
`;

const ButtonText = styled.span<{ position: Position['position'] }>`
  ${({ position }) => {
    return css`
      ${position === 'left' ? `margin-left: 8px;` : `margin-right: 8px;`}
    `;
  }}
`;
