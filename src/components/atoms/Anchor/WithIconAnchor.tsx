import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { Base, Props } from './Anchor';
import { Custom } from './CustomAnchor';

type CustomProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  position: string;
};

export type WithIconAnchorProps = Props & CustomProps & Custom;

export const WithIconAnchor = ({
  iconName,
  iconSize,
  iconColor,
  position,
  color = 'PRIMARY',
  background = 'SECONDARY',
  children,
  ...props
}: WithIconAnchorProps) => {
  const theme = useTheme();

  return (
    <>
      <AnchorContainer color={color} background={background} themes={theme} {...props}>
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
      </AnchorContainer>
    </>
  );
};

const Border = css`
  border: none;
  border-radius: 8px;
`;

const AnchorContainer = styled(Base)<{
  color: WithIconAnchorProps['color'];
  background: WithIconAnchorProps['background'];
  themes: Theme;
}>`
  ${({ color, background, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      font-size: ${fontSize.MEDIUM}px;
      color: ${palette[color]};
      background: ${palette[background]};
      padding: 0.5rem 1rem;
      ${Border};

      &:hover {
        opacity: 0.8;
        transition: 0.4s;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.SMALL}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;

const IconContainer = styled.div`
  display: inline-flex;
`;

const ButtonText = styled.span<{ position: WithIconAnchorProps['position'] }>`
  ${({ position }) => {
    return css`
      ${position === 'left' ? `margin-left: 12px;` : `margin-right: 12px;`}
    `;
  }}
`;
