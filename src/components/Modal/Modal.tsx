import * as React from 'react';
import styled from 'styled-components';
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
      <Overlay theme={theme} onClick={onCloseModal} />
      <ModalContent title={title} position={position} content={content} onCloseModal={onCloseModal} />
    </>
  );

  const targetPortal = usePortal(el);

  if (!isOpen) return null;

  return targetPortal;
};

const Overlay = styled.div<{ theme: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8000;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette.OVERLAY};
`;
