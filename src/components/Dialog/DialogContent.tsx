import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Position = {
  top?: number;
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
    <Wrapper>
      <Container position={position} theme={theme}>
        {dialogTitle}
        <BodyContent theme={theme}>{content}</BodyContent>
        <DialogButtonContainer>
          <NegativeButton onClick={onCloseDialog}>{closeText}</NegativeButton>
          {activeText === undefined ? null : <ActiveButton onClick={onActionDialog}>{activeText}</ActiveButton>}
        </DialogButtonContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div<{ position: Position; theme: Theme }>`
  ${({ position, theme }) => {
    const { top, left } = position;
    const { palette } = theme;

    const mobi: number = 35 - left;

    return css`
      position: absolute;
      top: ${top}%;
      left: ${left}%;
      z-index: 9000;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: #fefefe;
      box-shadow: rgba(150, 150, 150, 0.2) 0px 2px 6px 0px;
      border: 1px solid ${palette.BORDER};
      border-radius: 8px;
      transform: translate(-50%, -50%);

      @media (max-width: 599px) {
        left: calc(${left}% - 25%);
        transform: translate(${mobi}%, -50%);
      }
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
    line-height: 1.6;
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
  padding-top: 1.5rem;
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
