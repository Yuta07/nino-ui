import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { SkeltonButton } from '../../atoms/Button/SkeltonButton';
import { useTheme } from '../../../hooks/useTheme';
import { Theme } from '../../../themes/Theme';

type Props = {
  title?: string;
  type: 'success' | 'info' | 'warning' | 'danger' | '';
  content: React.ReactNode;
  activeText?: string;
  closeText: string;
  onCloseDialog: () => void;
  onActionDialog?: () => void;
};

export const DialogContent = ({
  title,
  type,
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
      color = theme.palette.PRIMARY;
      break;
  }

  let dialogTitle: React.ReactNode;
  if (title !== '') dialogTitle = <DialogTitle color={color}>{title}</DialogTitle>;

  return (
    <Wrapper>
      <Container themes={theme}>
        {dialogTitle}
        <BodyContent themes={theme}>{content}</BodyContent>
        <DialogButtonContainer>
          <SkeltonButton border={true} handleClick={onCloseDialog}>
            {closeText}
          </SkeltonButton>
          {activeText !== undefined && (
            <>
              <Margin />
              <SkeltonButton border={true} handleClick={onActionDialog}>
                {activeText}
              </SkeltonButton>
            </>
          )}
        </DialogButtonContainer>
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
  animation: ${ShowAnimation} 0.2s ease-in 0s 1 normal none running;
`;

const Container = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, palette } = themes;

    return css`
      position: absolute;
      z-index: 151;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: ${palette.SECONDARY};
      box-shadow: rgba(150, 150, 150, 0.2) 0px 1px 2px 0px;
      border: 1px solid ${palette.BORDER};
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
    font-size: 16px;
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

const BodyContent = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette } = themes;

    return css`
      ${BodyContentText};

      margin-top: 0.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid ${palette.BORDER};
    `;
  }}
`;

const DialogButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Margin = styled.div`
  margin-left: 30px;
`;
