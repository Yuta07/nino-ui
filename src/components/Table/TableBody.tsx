import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
  width: number;
  wrap?: boolean;
};

export const TableBody = ({ children, width, wrap = true }: Props) => {
  return (
    <Body width={width}>
      <Content wrap={wrap}>{children}</Content>
    </Body>
  );
};

const Body = styled.li<{ width: Props['width'] }>`
  ${({ width }) => {
    return css`
      width: ${width}%;
      padding: 0 0.5rem;
      font-size: 0.8rem;
      line-height: 1.6;
    `;
  }}
`;

const Content = styled.p<{ wrap: Props['wrap'] }>`
  ${({ wrap }) => {
    return css`
      width: 100%;
      ${BodyStyle};
      ${wrap ? BodyOverflow : null}
    `;
  }}
`;

const BodyOverflow = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BodyStyle = css`
  a {
    color: #656565;

    &:hover {
      color: #f39c12;
      transition: 0.3s;
    }
  }
`;
