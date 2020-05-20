import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../themes/Theme';

type Props = {
  children: string | React.ReactNode;
  size?: 'SMALL' | 'MEDIUM' | 'LARGE';
};

const TxtFactory = (children: Props['children'], color: string, size: Props['size']) => {
  const themes = useTheme();

  return (
    <Txt color={color} size={size} themes={themes}>
      {children}
    </Txt>
  );
};

export const Text = ({ children, size = 'MEDIUM' }: Props) => TxtFactory(children, 'PRIMARY', size);
export const InfoText = ({ children, size = 'MEDIUM' }: Props) => TxtFactory(children, 'INFO', size);
export const WarningText = ({ children, size = 'MEDIUM' }: Props) => TxtFactory(children, 'WARNING', size);
export const DangerText = ({ children, size = 'MEDIUM' }: Props) => TxtFactory(children, 'DANGER', size);

const Txt = styled.p<{ color: string; size: Props['size']; themes: Theme }>`
  ${({ color, size, themes }) => {
    const { palette, fontSize } = themes;

    return css`
      color: ${palette[color]};
      font-size: ${fontSize[size]}px;
    `;
  }}
`;
