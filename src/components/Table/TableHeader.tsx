import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
  width: number;
};

export const TableHeader = ({ children, width }: Props) => {
  return <Header width={width}>{children}</Header>;
};

const Header = styled.li<{ width: Props['width'] }>`
  ${({ width }) => {
    return css`
      width: ${width}%;
      padding: 0 0.5rem;
    `;
  }}
`;
