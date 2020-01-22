import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Position = {
  top?: number;
  right?: number;
  left?: number;
};

type Props = {
  title?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
  position?: Position;
  content: React.ReactNode;
  activeText?: string;
  closeText: string;
  onCloseDialog: () => void;
  onActionDialog?: () => void;
};

let dialogTitle: React.ReactNode;

export const DialogContent = ({
  title,
  type,
  position,
  content,
  activeText,
  closeText,
  onCloseDialog,
  onActionDialog,
}: Props) => {
  const theme = useTheme();
  let color: string;

  switch (type) {
    case 'success':
      color = theme.palette.SUCCESS;
      break;
    case 'info':
      color = theme.palette.INFO;
      break;
    case 'warning':
      color = theme.palette.WARNING;
      break;
    case 'danger':
      color = theme.palette.DANGER;
      break;
    default:
  }

  if (title !== '') dialogTitle = <DialogTitle color={color}>{title}</DialogTitle>;

  return (
    <Container theme={theme} position={position}>
      {dialogTitle}
      <BodyContent theme={theme}>{content}</BodyContent>
      <DialogButtonContainer>
        <NegativeButton onClick={onCloseDialog}>{closeText}</NegativeButton>
        {activeText === undefined ? null : <ActiveButton onClick={onActionDialog}>{activeText}</ActiveButton>}
      </DialogButtonContainer>
    </Container>
  );
};

const Container = styled.div<{ theme: Theme; position: Position }>`
  ${({ theme, position }) => {
    const { top, right, left } = position;
    const { palette } = theme;

    return css`
      position: absolute;
      top: ${top}%;
      right: ${right}%;
      left: ${left}%;
      z-index: 9000;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: #fefefe;
      border: 1px solid ${palette.BORDER};
      border-radius: 8px;
    `;
  }}
`;

const DialogTitle = styled.h2<{ color: string }>`
  font-size: 20px;
  color: ${props => props.color};
  margin: 0;
`;

const BodyContentText = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: #363636;
    margin-bottom: 0;
  }

  h1,
  h2 {
    font-size: 18px;
  }

  h3,
  h4 {
    font-sie: 16px;
  }

  p,
  a {
    font-size: 14px;
  }

  a {
    color: #f39c12;
    text-decoration: none;
    margin-top: 0.5rem;

    :hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }
`;

const BodyContent = styled.div<{ theme: Theme }>`
  ${BodyContentText};

  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.palette.BORDER};
`;

const DialogButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 36px;
  margin-top: 1rem;
`;

const DialogButton = styled.button`
  min-width: 60px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid #f39c12;
  }
`;

const NegativeButton = styled(DialogButton)``;

const ActiveButton = styled(DialogButton)`
  margin-left: 24px;
`;
