import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  children: React.ReactNode;
  type: 'header' | 'body';
  width?: number;
};

export const TableRow = ({ children, type, width = 100 }: Props) => {
  const themes = useTheme();

  return (
    <Row type={type} width={width} themes={themes}>
      {children}
    </Row>
  );
};

const Row = styled.ul<{ type: Props['type']; width: number; themes: Theme }>`
  ${({ type, width, themes }) => {
    const { palette } = themes;
    return css`
      width: ${width}%;
      color: ${type === 'body' ? palette.PRIMARY : '#656565'};
      background: ${type === 'body' ? palette.SECONDARY : palette.GRAY};
      border-top: ${type === 'body' ? `1px solid ${palette.BORDER}` : `none`};
      font-weight: ${type === 'body' ? 'normal' : '550'};
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;
      padding: 10px 15px;
    `;
  }}
`;
