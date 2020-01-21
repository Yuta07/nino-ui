import * as React from 'react';
import styled from 'styled-components';
import { usePortal } from '../../hooks/usePortal';
import { DialogContent } from './DialogContent';

type Props = {
  isOpen: boolean;
  title?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
  content: React.ReactNode;
  activeText: string;
  negativeText?: string;
  onCloseDialog: () => void;
};

export const Dialog = ({ isOpen, title, type, content, activeText, negativeText, onCloseDialog }: Props): React.ReactPortal => {
  const el = (
    <Overlay>
      <DialogContent title={title} type={type} content={content} activeText={activeText} negativeText={negativeText} onCloseDialog={onCloseDialog} />
    </Overlay>
  );

  const targetPortal = usePortal(el);

  if (!isOpen) return null;

  return targetPortal;
};

const Overlay = styled.div``;
