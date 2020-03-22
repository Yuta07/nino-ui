import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { usePortal } from '../../hooks/usePortal';
import { ModalContent } from './ModalContent';

type Props = {
  isOpen: boolean;
  title?: string;
  content: React.ReactNode;
  onCloseModal: () => void;
};

export const Modal = ({ isOpen, title, content, onCloseModal }: Props) => {
  const theme = useTheme();

  const el = (
    <>
      <Overlay isOpen={isOpen} theme={theme} onClick={onCloseModal} />
      <ModalContent title={title} content={content} onCloseModal={onCloseModal} />
    </>
  );

  const targetPortal = usePortal(el);

  if (!isOpen) return null;

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
