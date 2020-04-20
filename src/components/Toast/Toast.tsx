import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

type Props = {
  text: string;
  time?: number;
  type: 'SUCCESS' | 'INFO' | 'WARNING' | 'DANGER';
};

const VISIBLE_TIME = 7000;
let timerHandle: number;

export const Toast = ({ text, time = VISIBLE_TIME, type }: Props) => {
  const [hidden, setHidden] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    if (!hidden) clearTimeout(timerHandle);

    timerHandle = window.setTimeout(() => onCloseToast(), time);

    return () => {
      clearTimeout(timerHandle);
    };
  }, [time, hidden]);

  const onCloseToast = () => {
    setHidden(true);
  };

  if (hidden) return null;

  let iconName = '';

  switch (type) {
    case 'SUCCESS':
      iconName = 'Fi-CheckCircle';
      break;
    case 'INFO':
      iconName = 'Fi-AlertCircle';
      break;
    case 'WARNING':
      iconName = 'Fi-AlertTriangle';
      break;
    case 'DANGER':
      iconName = 'Fi-Slash';
      break;
    default:
      break;
  }

  return (
    <Container type={type} time={time} themes={theme} onClick={onCloseToast}>
      <FeatherIcon name={iconName} size={16} color={theme.palette.SECONDARY} />
      <MessageText themes={theme}>{text}</MessageText>
      <CloseButton>
        <FeatherIcon size={20} name="Fi-XCircle" color={theme.palette.SECONDARY} />
      </CloseButton>
    </Container>
  );
};

const ToastFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ToastFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div<{ type: Props['type']; time: Props['time']; themes: Theme }>`
  ${({ type, time, themes }) => {
    const { palette } = themes;

    return css`
      min-width: 100px;
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 8000;
      line-height: 1.8;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      box-shadow: 1px 1px 2px 0px rgba(171, 166, 166, 0.9);
      background-color: ${palette[type]};
      cursor: pointer;
      -webkit-animation: ${ToastFadeIn} 0.5s ease-in 0s 1 normal none running,
        ${ToastFadeOut} 0.5s linear ${time - 500}ms 1 normal forwards running;
      animation: ${ToastFadeIn} 0.5s ease-in 0s 1 normal none running,
        ${ToastFadeOut} 0.5s linear ${time - 500}ms 1 normal forwards running;
    `;
  }}
`;

const MessageText = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      font-size: 16px;
      color: ${palette.SECONDARY};
      margin: 0 2rem 0 1rem;

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
      }
    `;
  }}
`;

const CloseButton = styled.div`
  z-index: 9000;
  display: flex;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;
