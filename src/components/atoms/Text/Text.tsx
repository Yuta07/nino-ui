import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../themes/Theme';

type Props = {
  children: string | React.ReactNode;
  color?: string;
  size?: 'SMALL' | 'MEDIUM' | 'LARGE';
};

const TxtFactory = ({ children, color, size }: Props) => {
  const themes = useTheme();

  return (
    <Txt color={color} size={size} themes={themes}>
      {children}
    </Txt>
  );
};

export const Text = ({ children, color = 'PRIMARY', size = 'MEDIUM' }: Props) => TxtFactory({ children, color, size });
export const InfoText = ({ children, color = 'INFO', size = 'MEDIUM' }: Props) => TxtFactory({ children, color, size });
export const WarningText = ({ children, color = 'WARNING', size = 'MEDIUM' }: Props) =>
  TxtFactory({ children, color, size });
export const DangerText = ({ children, color = 'DANGER', size = 'MEDIUM' }: Props) =>
  TxtFactory({ children, color, size });

const Txt = styled.p<{ color: string; size: Props['size']; themes: Theme }>`
  ${({ color, size, themes }) => {
    const { palette, fontSize } = themes;

    return css`
      color: ${palette[color]};
      font-size: ${fontSize[size]}px;
    `;
  }}
`;
