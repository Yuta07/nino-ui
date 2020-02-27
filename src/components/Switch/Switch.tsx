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
  width: number;
  height: number;
  translateMove: number;
};

type Props = {
  iconLeft?: SwitchIcon | undefined;
  iconRight?: SwitchIcon | undefined;
  backgroundColor?: string;
  width?: number;
  height: number;
  textFontSize?: number;
  status: boolean;
  toggleOnText?: string;
  toggleOffText?: string;
  ballStyle: BallStyle;
  switchButtonClick: () => void;
};

export const Switch = ({
  iconLeft,
  iconRight,
  backgroundColor = '#34495e',
  width,
  height,
  textFontSize = 16,
  status,
  toggleOnText,
  toggleOffText,
  ballStyle,
  switchButtonClick,
}: Props) => {
  const theme = useTheme();

  let iconLeftSide: JSX.Element;
  switch (iconLeft.pattern) {
    case 'Fi':
      iconLeftSide = <FeatherIcon name={iconLeft.iconName} size={iconLeft.iconSize} color={iconLeft.iconColor} />;
      break;
    case 'Go':
      iconLeftSide = <GithubIcon name={iconLeft.iconName} size={iconLeft.iconSize} color={iconLeft.iconColor} />;
      break;
    case 'Ti':
      iconLeftSide = <TypIcon name={iconLeft.iconName} size={iconLeft.iconSize} color={iconLeft.iconColor} />;
      break;
    default:
      break;
  }

  let iconRightSide: JSX.Element;
  switch (iconRight.pattern) {
    case 'Fi':
      iconRightSide = <FeatherIcon name={iconRight.iconName} size={iconRight.iconSize} color={iconRight.iconColor} />;
      break;
    case 'Go':
      iconRightSide = <GithubIcon name={iconRight.iconName} size={iconRight.iconSize} color={iconRight.iconColor} />;
      break;
    case 'Ti':
      iconRightSide = <TypIcon name={iconRight.iconName} size={iconRight.iconSize} color={iconRight.iconColor} />;
      break;
    default:
      break;
  }

  return (
    <Button
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      status={status}
      themes={theme}
      onClick={switchButtonClick}
    >
      {toggleOnText && toggleOffText ? (
        <>
          <LeftSideText
            color={status ? ballStyle.color : theme.palette.SECONDARY}
            textFontSize={textFontSize}
            status={status}
          >
            {toggleOnText}
          </LeftSideText>
          <RightSideText
            color={status ? ballStyle.color : theme.palette.SECONDARY}
            textFontSize={textFontSize}
            status={status}
          >
            {toggleOffText}
          </RightSideText>
        </>
      ) : (
        <>
          <LeftSide status={status}>{iconLeftSide}</LeftSide>
          <RightSide status={status}>{iconRightSide}</RightSide>
        </>
      )}
      <ToggleBall
        status={status}
        color={ballStyle.color}
        width={ballStyle.width}
        height={ballStyle.height}
        translateMove={ballStyle.translateMove}
        themes={theme}
      />
    </Button>
  );
};

const Button = styled.div<{
  backgroundColor: string;
  width: Props['width'];
  height: Props['height'];
  status: Props['status'];
  themes: Theme;
}>`
  ${({ backgroundColor, width, height, status, themes }) => {
    const { palette } = themes;

    return css`
      display: inline-flex;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      width: ${width}px;
      height: ${height}px;
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
    `;
  }}
`;

const LeftSide = styled.span<{ status: Props['status'] }>`
  ${({ status }) => {
    return css`
      position: absolute;
      top: 4px;
      left: 10px;
      display: ${status ? 'inline' : 'none'};
    `;
  }}
`;

const RightSide = styled.span<{ status: Props['status'] }>`
  ${({ status }) => {
    return css`
      position: absolute;
      top: 4px;
      right: 10px;
      display: ${status ? 'none' : 'inline'};
    `;
  }}
`;

const LeftSideText = styled.span<{ color: string; textFontSize: number; status: Props['status'] }>`
  ${({ color, textFontSize, status }) => {
    return css`
      position: absolute;
      top: 4px;
      left: 10px;
      display: ${status ? 'inline' : 'none'};
      color: ${color};
      font-size: ${textFontSize}px;
      line-height: 1.7;
    `;
  }}
`;

const RightSideText = styled.span<{ color: string; textFontSize: number; status: Props['status'] }>`
  ${({ color, textFontSize, status }) => {
    return css`
      position: absolute;
      top: 4px;
      right: 10px;
      display: ${status ? 'none' : 'inline'};
      color: ${color};
      font-size: ${textFontSize}px;
      line-height: 1.7;
    `;
  }}
`;

const ToggleBall = styled.div<{
  status: Props['status'];
  color: BallStyle['color'];
  width: BallStyle['width'];
  height: BallStyle['height'];
  translateMove: BallStyle['translateMove'];
  themes: Theme;
}>`
  ${({ status, color, width, height, translateMove, themes }) => {
    const { palette } = themes;
    return css`
      position: absolute;
      top: 1px;
      left: 1px;
      width: ${width}px;
      height: ${height}px;
      border-radius: 50%;
      background-color: ${status ? color : palette.SECONDARY};
      transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0ms;
      transform: ${status ? `translateX(${translateMove}px)` : 'translateX(0)'};
    `;
  }}
`;
