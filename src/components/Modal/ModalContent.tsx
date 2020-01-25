import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon/Icon';

type Position = {
  top?: number;
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
    <Wrapper>
      <Container theme={theme} position={position}>
        <CloseIcon onClick={onCloseModal}>
          <Icon name="Fi-XCircle" color="#9e9e9e" size={20} />
        </CloseIcon>
        {dialogTitle}
        <BodyContent theme={theme}>{content}</BodyContent>
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

const Container = styled.div<{ theme: Theme; position: Position }>`
  ${({ theme, position }) => {
    const { top, left } = position;
    const { palette } = theme;

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
    line-height: 1.6;
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
