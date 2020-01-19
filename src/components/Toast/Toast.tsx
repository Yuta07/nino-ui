import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon/Icon';

type Props = {
  text: string;
  time?: number;
  type: 'success' | 'info' | 'warning' | 'danger';
  visible?: boolean;
  onCloseToast: () => void;
};

const VISIBLE_TIME = 7000;
let timerHandle: any;

export const Toast = ({ text, time = VISIBLE_TIME, type, visible, onCloseToast }: Props) => {
  const theme = useTheme();

  React.useEffect(() => {
    if (!visible) clearTimeout(timerHandle);

    timerHandle = setTimeout(() => onCloseToast(), VISIBLE_TIME);

    return () => {
      clearTimeout(timerHandle);
    };
  }, [onCloseToast, visible]);

  if (!visible) return null;

  let iconName = '';
  let bgColor: string;

  switch (type) {
    case 'success':
      iconName = 'Fi-CheckCircle';
      bgColor = theme.palette.SUCCESS;
      break;
    case 'info':
      iconName = 'Fi-AlertCircle';
      bgColor = theme.palette.INFO;
      break;
    case 'warning':
      iconName = 'Fi-AlertTriangle';
      bgColor = theme.palette.WARNING;
      break;
    case 'danger':
      iconName = 'Fi-Slash';
      bgColor = theme.palette.DANGER;
      break;
    default:
      break;
  }

  return (
    <Wrapper bgColor={bgColor} time={time}>
      <Icon name={iconName} size={16} color={theme.palette.SECONDARY} />
      <MessageText apptheme={theme}>{text}</MessageText>
      <CloseButton onClick={onCloseToast}>
        <Icon size={20} name="Fi-XCircle" color={theme.palette.SECONDARY} />
      </CloseButton>
    </Wrapper>
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

const Wrapper = styled.div<{ bgColor: string; time: number }>`
  min-width: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 8000;
  line-height: 1.8;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 0px rgba(171, 166, 166, 0.9);
  background-color: ${props => props.bgColor};
  -webkit-animation: ${ToastFadeIn} 0.5s ease-in 0s 1 normal none running,
    ${ToastFadeOut} 0.5s linear ${props => props.time - 500}ms 1 normal forwards running;
  animation: ${ToastFadeIn} 0.5s ease-in 0s 1 normal none running,
    ${ToastFadeOut} 0.5s linear ${props => props.time - 500}ms 1 normal forwards running;
`;

const MessageText = styled.span<{ apptheme: Theme }>`
  font-size: 1rem;
  color: ${props => props.apptheme.palette.SECONDARY};
  margin: 0 2rem 0 1rem;
`;

const CloseButton = styled.div`
  z-index: 9000;
  display: flex;
  cursor: pointer;
`;
