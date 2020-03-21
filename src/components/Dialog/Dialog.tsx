import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { usePortal } from '../../hooks/usePortal';
import { DialogContent } from './DialogContent';

type Props = {
  isOpen: boolean;
  title?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
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
  content,
  activeText,
  closeText,
  onCloseDialog,
  onActionDialog,
}: Props): React.ReactPortal => {
  const theme = useTheme();

  const el = (
    <>
      <Overlay isOpen={isOpen} theme={theme} />
      <DialogContent
        title={title}
        type={type}
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
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    `;
  }}
`;
