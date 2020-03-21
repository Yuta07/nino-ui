import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

type Position = {
  top: number;
  left: number;
};

type Props = {
  label: string;
  icon?: string;
  required?: boolean;
  requiredText?: string;
  position?: Position;
};

export const Label = ({
  label,
  icon = 'Fi-AlertCircle',
  required,
  requiredText = '必須',
  position = { top: 20, left: 0 },
}: Props) => {
  const theme = useTheme();

  return (
    <>
      <Text themes={theme}>
        {label}
        {required ? (
          <RequiredContainer position={position}>
            <FeatherIcon name={icon} color={theme.palette.DANGER} size={12} />
            <RequiredText color={theme.palette.DANGER} size={12}>
              {requiredText}
            </RequiredText>
          </RequiredContainer>
        ) : null}
      </Text>
    </>
  );
};

const Text = styled.label<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      color: ${palette.PRIMARY};
      font-size: 16px;
      position: relative;

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
      }
    `;
  }}
`;

const RequiredText = styled.span<{ color: string; size: number }>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  padding-top: 2px;
  margin-left: 4px;
`;

const RequiredContainer = styled.div<{ position: Position }>`
  ${({ position }) => {
    const { top, left } = position;

    return css`
      position: absolute;
      top: ${top}px;
      left: 0 ${left}x;
      width: 100%;
      display: flex;
      align-items: center;
    `;
  }}
`;
