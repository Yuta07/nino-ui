import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

export type Props = {
  link: string;
  children?: React.ReactNode;
  size?: number;
  color?: string;
  width?: string;
  height: number;
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export type AnchorProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
};

export const Anchor = ({ link, children, size, color = 'MAIN', width, height, handleClick }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Base href={link} size={size} color={color} width={width} height={height} themes={theme} onClick={handleClick}>
        {children}
      </Base>
    </>
  );
};

const Base = styled.a<{
  size: Props['size'];
  color: Props['color'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ size, color, width, height, themes }) => {
    const { palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${palette.SECONDARY};
      background: ${palette[color]};
      width: ${width ? `${width}` : 'auto'};
      height: ${height}px;
      padding: 4px 0.5rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 8px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
        transition: 0.4s;
      }
    `;
  }}
`;
