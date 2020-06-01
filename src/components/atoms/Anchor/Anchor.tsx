import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

export type Props = {
  link: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  target?: string;
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

interface Interaction extends Props {
  border?: string;
}

export const Anchor = ({ link, children, width, height, target = '_self', handleClick }: Props) => {
  const theme = useTheme();

  return (
    <Base href={link} target={target} width={width} height={height} themes={theme} onClick={handleClick}>
      {children}
    </Base>
  );
};

export const UnderlineAnchor = ({ ...props }: Props) => {
  const theme = useTheme();

  return <AnchorWithUnderline themes={theme} onClick={props.handleClick} {...props} />;
};

export const InteractionAnchor = ({ border = 'DARK', ...props }: Interaction) => {
  const theme = useTheme();

  return <AnchorWithInteraction border={border} themes={theme} onClick={props.handleClick} {...props} />;
};

export const Base = styled.a<{
  width?: Props['width'];
  height?: Props['height'];
  themes: Theme;
}>`
  ${({ width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : 'auto'};
      font-size: ${fontSize.MEDIUM}px;
      color: ${palette.PRIMARY};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
        transition: 0.2s;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.SMALL}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;

const AnchorWithUnderline = styled(Base)`
  &:hover {
    text-decoration: underline;
  }
`;

const AnchorWithInteraction = styled(Base)<{ border: Interaction['border']; themes: Theme }>`
  ${({ border, themes }) => {
    const { palette } = themes;

    return css`
      position: relative;

      &:hover {
        &:before {
          transform: scale3d(1, 1, 1);
          transform-origin: 0% 50%;
        }
      }

      &:before {
        content: '';
        color: ${palette[border]};
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        pointer-events: none;
        background: currentColor;
        transform: scale3d(0, 1, 1);
        transform-origin: 100% 50%;
        transition: transform 0.3s;
        transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
      }

      @media (max-width: 425px) {
        padding: 20px 0 8px;
      }
    `;
  }}
`;
