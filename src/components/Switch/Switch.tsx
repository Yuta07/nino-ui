import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';
import { GithubIcon } from '../Icon/GithubIcon';
import { TypIcon } from '../Icon/TypIcon';

type SwitchIcon = {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  pattern?: string;
};

type BallStyle = {
  color: string;
  translateMove: number;
};

type Props = {
  iconLeft?: SwitchIcon | undefined;
  iconRight?: SwitchIcon | undefined;
  backgroundColor?: string;
  status: boolean;
  toggleOnText?: string;
  toggleOffText?: string;
  ballStyle: BallStyle;
  switchButtonClick: () => void;
};

const deviceWidth = window.screen.width;

export const Switch = ({
  iconLeft,
  iconRight,
  backgroundColor = '#34495e',
  status,
  toggleOnText,
  toggleOffText,
  ballStyle,
  switchButtonClick,
}: Props) => {
  const theme = useTheme();

  console.log(deviceWidth);

  let adaptIconSize: number;
  if (deviceWidth <= 480) {
    adaptIconSize = iconLeft.iconSize * 0.75;
  } else if (deviceWidth <= 768) {
    adaptIconSize = iconLeft.iconSize * 0.875;
  } else {
    adaptIconSize = iconLeft.iconSize;
  }

  let iconLeftSide: JSX.Element;
  switch (iconLeft.pattern) {
    case 'Fi':
      iconLeftSide = <FeatherIcon name={iconLeft.iconName} size={adaptIconSize} color={iconLeft.iconColor} />;
      break;
    case 'Go':
      iconLeftSide = <GithubIcon name={iconLeft.iconName} size={adaptIconSize} color={iconLeft.iconColor} />;
      break;
    case 'Ti':
      iconLeftSide = <TypIcon name={iconLeft.iconName} size={adaptIconSize} color={iconLeft.iconColor} />;
      break;
    default:
      break;
  }

  let iconRightSide: JSX.Element;
  switch (iconRight.pattern) {
    case 'Fi':
      iconRightSide = <FeatherIcon name={iconRight.iconName} size={adaptIconSize} color={iconRight.iconColor} />;
      break;
    case 'Go':
      iconRightSide = <GithubIcon name={iconRight.iconName} size={adaptIconSize} color={iconRight.iconColor} />;
      break;
    case 'Ti':
      iconRightSide = <TypIcon name={iconRight.iconName} size={adaptIconSize} color={iconRight.iconColor} />;
      break;
    default:
      break;
  }

  return (
    <Button backgroundColor={backgroundColor} status={status} themes={theme} onClick={switchButtonClick}>
      {toggleOnText && toggleOffText ? (
        <>
          <LeftSideText color={status ? ballStyle.color : theme.palette.SECONDARY} status={status}>
            {toggleOnText}
          </LeftSideText>
          <RightSideText color={status ? ballStyle.color : theme.palette.SECONDARY} status={status}>
            {toggleOffText}
          </RightSideText>
        </>
      ) : (
        <>
          <LeftSide status={status}>{iconLeftSide}</LeftSide>
          <RightSide status={status}>{iconRightSide}</RightSide>
        </>
      )}
      <ToggleBall status={status} color={ballStyle.color} translateMove={ballStyle.translateMove} themes={theme} />
    </Button>
  );
};

const Button = styled.div<{
  backgroundColor: string;
  status: Props['status'];
  themes: Theme;
}>`
  ${({ backgroundColor, status, themes }) => {
    const { device, palette } = themes;

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      width: 80px;
      height: 32px;
      margin: 0;
      padding: 0.5rem;
      font-size: 0.5rem;
      background: ${status ? backgroundColor : palette.GRAY};
      border: none;
      border-radius: 30px;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      @media screen and ${device.TABLET} {
        width: 70px;
        height: 28px;
        padding: 0.4rem;
        font-size: 0.4rem;
      }

      @media screen and ${device.MOBILE} {
        width: 60px;
        height: 24px;
        padding: 0.3rem;
        font-size: 0.3rem;
      }
    `;
  }}
`;

const LeftSide = styled.span<{ status: Props['status'] }>`
  ${({ status }) => {
    return css`
      position: absolute;
      left: 10px;
      height: 100%;
      display: ${status ? 'inline-flex' : 'none'};
      align-items: center;

      @media screen and (max-width: 768px) {
        left: 8.75px;
      }

      @media screen and (max-width: 480px) {
        left: 7.5px;
      }
    `;
  }}
`;

const RightSide = styled.span<{ status: Props['status'] }>`
  ${({ status }) => {
    return css`
      position: absolute;
      right: 10px;
      height: 100%;
      display: ${status ? 'none' : 'inline-flex'};
      align-items: center;

      @media screen and (max-width: 768px) {
        right: 8.75px;
      }

      @media screen and (max-width: 480px) {
        right: 7.5px;
      }
    `;
  }}
`;

const LeftSideText = styled.span<{ color: string; status: Props['status'] }>`
  ${({ color, status }) => {
    return css`
      position: absolute;
      left: 10px;
      height: 100%;
      display: ${status ? 'inline-flex' : 'none'};
      align-items: center;
      color: ${color};
      font-size: 16px;
      line-height: 1.7;

      @media screen and (max-width: 768px) {
        left: 8.75px;
        font-size: 14px;
      }

      @media screen and (max-width: 480px) {
        left: 7.5px;
        font-size: 12px;
      }
    `;
  }}
`;

const RightSideText = styled.span<{ color: string; status: Props['status'] }>`
  ${({ color, status }) => {
    return css`
      position: absolute;
      right: 10px;
      height: 100%;
      display: ${status ? 'none' : 'inline-flex'};
      align-items: center;
      color: ${color};
      font-size: 16px;
      line-height: 1.7;

      @media screen and (max-width: 768px) {
        right: 8.75px;
        font-size: 14px;
      }

      @media screen and (max-width: 480px) {
        right: 7.5px;
        font-size: 12px;
      }
    `;
  }}
`;

const ToggleBall = styled.div<{
  status: Props['status'];
  color: BallStyle['color'];
  translateMove: BallStyle['translateMove'];
  themes: Theme;
}>`
  ${({ status, color, translateMove, themes }) => {
    const { palette } = themes;
    return css`
      position: absolute;
      top: 1px;
      left: 1px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: ${status ? color : palette.SECONDARY};
      transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0ms;
      transform: ${status ? `translateX(${translateMove}px)` : 'translateX(0)'};

      @media screen and (max-width: 768px) {
        top: 1px;
        left: 1px;
        width: 26.25px;
        height: 26.25px;
        transform: ${status ? `translateX(${translateMove * 0.87}px)` : 'translateX(0)'};
      }

      @media screen and (max-width: 480px) {
        top: 1px;
        left: 1px;
        width: 22.5px;
        height: 22.5px;
        transform: ${status ? `translateX(${translateMove * 0.725}px)` : 'translateX(0)'};
      }
    `;
  }}
`;
