import * as React from 'react';
import styled, { css } from 'styled-components';
import { DropdownContext } from './DropdownProvider';

type Position = {
  top?: number;
  left?: number;
};

type Props = {
  children: React.ReactNode;
  controllable?: boolean;
  position?: Position;
};

export const DropdownContent = ({ children, controllable, position }: Props) => {
  const { isOpen, handleClickDropdownClose } = React.useContext(DropdownContext);

  return (
    <Container isOpen={isOpen} position={position} onClick={controllable ? handleClickDropdownClose : null}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean; position: Position }>`
  ${({ isOpen, position }) => {
    const { top, left } = position;

    return css`
      visibility: ${isOpen ? `visible` : `hidden`};
      opacity: ${isOpen ? `1` : `0`};
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      position: absolute;
      z-index: 200;
      top: ${top}%;
      left: ${left}%;
    `;
  }}
`;
