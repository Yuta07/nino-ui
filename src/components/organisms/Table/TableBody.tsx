import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
  width: number;
  truncate?: boolean;
};

export const TableBody = ({ children, width, truncate = true }: Props) => {
  return (
    <Body width={width}>
      <Content truncate={truncate}>{children}</Content>
    </Body>
  );
};

const Body = styled.li<{ width: Props['width'] }>`
  ${({ width }) => {
    return css`
      width: ${width}%;
      padding: 0 0.5rem;
      line-height: 1.6;
    `;
  }}
`;

const Content = styled.p<{ truncate: Props['truncate'] }>`
  ${({ truncate }) => {
    return css`
      ${BodyStyle(truncate)};
      ${truncate ? BodyOverflow : null}
    `;
  }}
`;

const BodyOverflow = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BodyStyle = (truncate: Props['truncate']) => css`
  a {
    color: #656565;

    &:hover {
      color: #f39c12;
      transition: 0.3s;
    }

    ${truncate
      ? `
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;`
      : null}
  }
`;
