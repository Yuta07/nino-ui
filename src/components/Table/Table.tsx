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
    const { palette } = themes;
    return css`
      width: 100%;
      color: ${palette.PRIMARY};
      background: ${palette.SECONDARY};
      border: 1px solid ${palette.BORDER};
    `;
  }}
`;
