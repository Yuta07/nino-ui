import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

type Props = {
  title?: string;
  content: React.ReactNode;
  onCloseModal: () => void;
};

let dialogTitle: React.ReactNode;

export const ModalContent = ({ title, content, onCloseModal }: Props) => {
  const theme = useTheme();
  let color: string;

  if (title !== '') dialogTitle = <DialogTitle color={color}>{title}</DialogTitle>;

  return (
    <Wrapper>
      <Container themes={theme}>
        <CloseIcon onClick={onCloseModal}>
          <FeatherIcon name="Fi-XCircle" color="#9e9e9e" size={20} />
        </CloseIcon>
        {dialogTitle}
        <BodyContent theme={theme}>{content}</BodyContent>
      </Container>
    </Wrapper>
  );
};

const ShowAnimation = keyframes`
  0% {
    visibility: hiddehn;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: ${ShowAnimation} 0.2s ease-in 0s 1 normal none running;
  animation: ${ShowAnimation} 0.2s ease-in 0s 1 normal none running;
`;

const Container = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, palette } = themes;

    return css`
      position: absolute;
      z-index: 9000;
      max-width: 600px
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: ${palette.SECONDARY};
      box-shadow: rgba(150, 150, 150, 0.2) 0px 1px 2px 0px;
      border: 2px solid ${palette.BORDER};
      border-radius: 8px;

      @media screen and ${device.TABLET} {
        max-width: 480px;
      }

      @media screen and ${device.MOBILE} {
        max-width: 320px;
      }

      @media screen and ${device.MOBILE_S} {
        max-width: 300px;
      }
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
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.palette.BORDER};
`;
