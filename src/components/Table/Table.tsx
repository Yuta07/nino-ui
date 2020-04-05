import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  children: React.ReactNode;
};

export const Table = ({ children }: Props) => {
  const themes = useTheme();

  return <TableWrapper themes={themes}>{children}</TableWrapper>;
};

const TableWrapper = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize, palette } = themes;
    return css`
      color: ${palette.PRIMARY};
      background: ${palette.SECONDARY};
      border: 1px solid ${palette.BORDER};
      font-size: ${fontSize.MEDIUM}px;
      overflow-x: scroll;

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
      }

      @media screen and ${device.MOBILE} {
        font-size: ${fontSize.SMALL}px;
      }
    `;
  }}
`;
