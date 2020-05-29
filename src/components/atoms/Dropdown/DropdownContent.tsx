import * as React from 'react';
import styled, { css } from 'styled-components';
import { Dropdown, DropdownContext } from './DropdownProvider';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  children: React.ReactNode;
};

export const DropdownContent = ({ children }: Props) => {
  const { isOpen, controllable, color, handleClickDropdownClose } = React.useContext(DropdownContext);
  const themes = useTheme();

  return (
    <Container isOpen={isOpen} onClick={controllable ? handleClickDropdownClose : null} color={color} themes={themes}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ isOpen: Dropdown['isOpen']; color: string; themes: Theme }>`
  ${({ isOpen, color, themes }) => {
    const { palette } = themes;

    return css`
      visibility: ${isOpen ? `visible` : `hidden`};
      opacity: ${isOpen ? `1` : `0`};
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      position: absolute;
      z-index: 200;
      transform: ${isOpen ? `translate3d(0px, 10px, 0px)` : null};
      border: none;
      border-radius: 8px;
      background: ${palette[color]};
      box-shadow: 1px 1px 3px -1px #cccccc;
    `;
  }}
`;
