import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { Base, Props } from './Button';

type CustomProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  position: string;
};

export type WithIconButtonProps = Props & CustomProps;

export const WithIconButton = ({
  iconName,
  iconSize,
  iconColor,
  position,
  children,
  ...props
}: WithIconButtonProps) => {
  const theme = useTheme();

  return (
    <>
      <Base themes={theme} {...props}>
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

const IconContainer = styled.div``;

const ButtonText = styled.span<{ position: CustomProps['position'] }>`
  ${({ position }) => {
    return css`
      ${position === 'left' ? `margin-left: 12px;` : `margin-right: 12px;`}
    `;
  }}
`;
