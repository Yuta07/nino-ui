import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

type Props = {
  text: string;
  time?: number;
  type: 'SUCCESS' | 'INFO' | 'WARNING' | 'DANGER';
  visible: boolean;
  width?: string;
  position?: {
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  handleClose: () => void;
};

interface PresenterProps extends Props {
  iconName: string;
}

const VISIBLE_TIME = 10000;
let timerHandle: number = 0;

const ToastPresenter = ({ ...props }: PresenterProps) => {
  const theme = useTheme();

  return (
    <Container type={props.type} time={props.time} width={props.width} posi={props.position} themes={theme}>
      <Message>
        <FeatherIcon name={props.iconName} size={20} color={theme.palette.SECONDARY} />
        <Text themes={theme}>{props.text}</Text>
        <CloseButton>
          <FeatherIcon size={18} name="Fi-X" color={theme.palette.SECONDARY} onClick={props.handleClose} />
        </CloseButton>
      </Message>
    </Container>
  );
};

const ToastContainer = ({ presenter, type, time = VISIBLE_TIME, visible, handleClose, ...props }) => {
  React.useEffect(() => {
    if (!visible) clearTimeout(timerHandle);

    timerHandle = window.setTimeout(handleClose, time);

    return () => {
      clearTimeout(timerHandle);
    };
  }, [time, visible, handleClose]);

  if (!visible) return null;

  let iconName = '';

  switch (type) {
    case 'SUCCESS':
      iconName = 'Fi-CheckSquare';
      break;
    case 'INFO':
      iconName = 'Fi-Info';
      break;
    case 'WARNING':
      iconName = 'Fi-AlertTriangle';
      break;
    case 'DANGER':
      iconName = 'Fi-AlertCircle';
      break;
    default:
      break;
  }

  return presenter({ type, time, visible, handleClose, iconName, ...props });
};

export const Toast = ({ text, time = VISIBLE_TIME, type, visible, width, position, handleClose }: Props) => {
  return (
    <ToastContainer
      presenter={(presenterProps: PresenterProps) => <ToastPresenter {...presenterProps} />}
      text={text}
      time={time}
      type={type}
      visible={visible}
      width={width}
      position={position}
      handleClose={handleClose}
    />
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

const Container = styled.div<{
  type: Props['type'];
  time: Props['time'];
  width: Props['width'];
  posi: Props['position'];
  themes: Theme;
}>`
  ${({ type, time, width, posi, themes }) => {
    const { palette } = themes;
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      width: ${width ? width : 'auto'};
      border-radius: ${width === '100%' ? '0' : '8px'};
      box-shadow: 1px 1px 2px 0px rgba(171, 166, 166, 0.9);
      background-color: ${palette[type]};

      ${
        type === 'DANGER'
          ? css`
              -webkit-animation: ${ToastFadeIn} 0.3s ease-in 0s 1 normal none running;
              animation: ${ToastFadeIn} 0.3s ease-in 0s 1 normal none running;
            `
          : css`
              -webkit-animation: ${ToastFadeIn} 0.3s ease-in 0s 1 normal none running,
                ${ToastFadeOut} 0.3s linear ${time - 300}ms 1 normal forwards running;
              animation: ${ToastFadeIn} 0.3s ease-in 0s 1 normal none running,
                ${ToastFadeOut} 0.3s linear ${time - 300}ms 1 normal forwards running;
            `
      }

      ${position &&
        (top || left || right || bottom) &&
        css`
          position: ${position ? position : 'fixed'};
          z-index: 100;
        `}
      ${top &&
        css`
          top: ${top};
        `}
      ${bottom &&
        css`
          bottom: ${bottom};
        `}
      ${right &&
        css`
          right: ${right};
        `}
      ${left &&
        css`
          left: ${left};
        `}
    `;
  }}
`;

const Message = styled.div`
  width: 100%;
  padding: 12px 30px 12px 15px;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
`;

const Text = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      font-size: ${fontSize.SMALL}px;
      color: ${palette.SECONDARY};
      width: 100%;
      padding: 0 15px;
      line-height: initial;

      @media screen and ${device.MOBILE} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;

const CloseButton = styled.div`
  display: inline-flex;
  position: absolute;
  right: 20px;
  z-index: 101;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;
