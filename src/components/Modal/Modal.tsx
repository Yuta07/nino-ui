import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { usePortal } from '../../hooks/usePortal';
import { ModalContent } from './ModalContent';

type Position = {
  top?: number;
  left?: number;
};

type Props = {
  isOpen: boolean;
  title?: string;
  position?: Position;
  content: React.ReactNode;
  onCloseModal: () => void;
};

export const Modal = ({ isOpen, title, position, content, onCloseModal }: Props) => {
  const theme = useTheme();

  const el = (
    <>
      <Overlay isOpen={isOpen} theme={theme} onClick={onCloseModal} />
      <ModalContent isOpen={isOpen} title={title} position={position} content={content} onCloseModal={onCloseModal} />
    </>
  );

  const targetPortal = usePortal(el);

  return targetPortal;
};

const Overlay = styled.div<{ isOpen: Props['isOpen']; theme: Theme }>`
  ${({ isOpen, theme }) => {
    const { palette } = theme;

    return css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 8000;
      width: 100%;
      height: 100%;
      background: ${palette.OVERLAY};
      visibility: ${isOpen ? `visible` : `hidden`};
      opacity: ${isOpen ? `1` : `0`};
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    `;
  }}
`;
