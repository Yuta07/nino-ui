import * as React from 'react';
import styled, { css } from 'styled-components';
import { Base, Props } from './Button';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

export interface Skelton extends Props {
  border?: boolean;
}

export const SkeltonButton = ({ border = false, ...props }: Skelton) => {
  const theme = useTheme();

  return <SkeltonButtonStyle border={border} themes={theme} onClick={props.handleClick} {...props} />;
};

const SkeltonButtonStyle = styled(Base)<{
  border: Skelton['border'];
  themes: Theme;
}>`
  ${({ border, themes }) => {
    const { palette } = themes;

    return css`
      color: ${palette.PRIMARY};
      background-color: ${palette.TRANSPARENT};
      border: ${border ? `1px solid ${palette.DARK}` : 'none'};
    `;
  }}
`;
