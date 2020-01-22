import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon/Icon';

type Position = {
  top?: number;
  right?: number;
  left?: number;
};

type Props = {
  title?: string;
  position?: Position;
  content: React.ReactNode;
  onCloseModal: () => void;
};

let dialogTitle: React.ReactNode;

export const ModalContent = ({ title, position, content, onCloseModal }: Props) => {
  const theme = useTheme();
  let color: string;

  if (title !== '') dialogTitle = <DialogTitle color={color}>{title}</DialogTitle>;

  return (
    <Container theme={theme} position={position}>
      <CloseIcon onClick={onCloseModal}>
        <Icon name="Fi-XCircle" color="#9e9e9e" size={20} />
      </CloseIcon>
      {dialogTitle}
      <BodyContent theme={theme}>{content}</BodyContent>
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

const CloseIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  cursor: pointer;
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
    display: inline-block;
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
