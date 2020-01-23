import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon/Icon';

type Props = {
  label: string;
  icon?: string;
  required?: boolean;
  requiredText?: string;
  iconSize?: number;
};

export const Label = ({ label, icon = 'Fi-AlertCircle', required, requiredText = '必須', iconSize = 16 }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Text theme={theme} size={iconSize}>
        {label}
        {required ? (
          <RequiredContainer>
            <Icon name={icon} color={theme.palette.DANGER} size={iconSize - 4} />
            <RequiredText color={theme.palette.DANGER} size={iconSize - 4}>
              {requiredText}
            </RequiredText>
          </RequiredContainer>
        ) : null}
      </Text>
    </>
  );
};

const Text = styled.label<{ theme: Theme; size: number }>`
  ${({ theme, size }) => {
    const { palette } = theme;

    return css`
      color: ${palette.PRIMERY};
      font-size: ${size}px;
      position: relative;
    `;
  }}
`;

const RequiredText = styled.span<{ color: string; size: number }>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  padding-top: 2px;
  margin-left: 4px;
`;

const RequiredContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;
