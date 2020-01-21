import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  title?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
  content: React.ReactNode;
  activeText: string;
  negativeText?: string;
  onCloseDialog: () => void;
};

let dialogTitle: React.ReactNode;

export const DialogContent = ({ title, type, content, activeText, negativeText, onCloseDialog }: Props) => {
  const theme = useTheme();

  if (title !== '')
    dialogTitle = (
      <DialogTitle theme={theme} type={type}>
        {title}
      </DialogTitle>
    );

  return (
    <Container>
      {dialogTitle}
      <BodyContent>{content}</BodyContent>
      <DialogButton>
        {negativeText === undefined ? null : <NegativeButton onClick={onCloseDialog}>{negativeText}</NegativeButton>}
        <ActiveButton onClick={onCloseDialog}>{activeText}</ActiveButton>
      </DialogButton>
    </Container>
  );
};

const Container = styled.div``;

const DialogTitle = styled.h2<{ theme: Theme; type: Props['type'] }>``;

const BodyContentText = css``;

const BodyContent = styled.div`
  ${BodyContentText};
`;

const DialogButton = styled.div``;

const NegativeButton = styled.button``;

const ActiveButton = styled.button``;
