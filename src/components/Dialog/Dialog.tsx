import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { usePortal } from '../../hooks/usePortal';
import { DialogContent } from './DialogContent';

type Position = {
  top?: number;
  left?: number;
};

type Props = {
  isOpen: boolean;
  title?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
  position?: Position;
  content: React.ReactNode;
  activeText?: string;
  closeText: string;
  onCloseDialog: () => void;
  onActionDialog?: () => void;
};

export const Dialog = ({
  isOpen,
  title,
  type,
  position,
  content,
  activeText,
  closeText,
  onCloseDialog,
  onActionDialog,
}: Props): React.ReactPortal => {
  const theme = useTheme();

  const el = (
    <>
      <Overlay theme={theme} />
      <DialogContent
        title={title}
        type={type}
        position={position}
        content={content}
        activeText={activeText}
        closeText={closeText}
        onCloseDialog={onCloseDialog}
        onActionDialog={onActionDialog}
      />
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
