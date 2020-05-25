import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { Props } from './Anchor';
import { Custom, CustomAnchorStyle } from './CustomAnchor';

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
  color,
  background,
  children,
  ...props
}: WithIconAnchorProps) => {
  const theme = useTheme();

  return (
    <>
      <WithIconAnchorStyle color={color} background={background} themes={theme} {...props}>
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
      </WithIconAnchorStyle>
    </>
  );
};

const WithIconAnchorStyle = styled(CustomAnchorStyle)<{
  themes: Theme;
}>`
  ${({ themes }) => {
    const { device, fontSize } = themes;

    return css`
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
