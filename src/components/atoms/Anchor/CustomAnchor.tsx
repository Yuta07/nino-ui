import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { Base, Props } from './Anchor';

export interface Custom extends Props {
  color?: string;
  background?: string;
}

export const CustomAnchor = ({ color = 'PRIMARY', background = 'SECONDARY', ...props }: Custom) => {
  const theme = useTheme();

  return <CustomAnchorStyle color={color} background={background} themes={theme} {...props} />;
};

const Border = css`
  border: none;
  border-radius: 8px;
`;

export const CustomAnchorStyle = styled(Base)<{
  color: Custom['color'];
  background: Custom['background'];
  themes: Theme;
}>`
  ${({ color, background, themes }) => {
    const { palette } = themes;

    return css`
      color: ${palette[color]};
      background: ${palette[background]};
      padding: 0.5rem 1rem;
      ${Border};
    `;
  }}
`;
