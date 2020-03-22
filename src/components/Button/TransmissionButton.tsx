import * as React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './Button';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

export const TransmissionButton = ({ ...props }: Props) => {
  const theme = useTheme();
  const { type, name, children, color, width, height, disabled, handleClick } = props;

  return (
    <>
      <Base
        type={type}
        name={name}
        color={color}
        width={width}
        height={height}
        disabled={disabled}
        themes={theme}
        onClick={handleClick}
      >
        {children}
      </Base>
    </>
  );
};

const Base = styled.button<{
  color: Props['color'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      font-size: 16px;
      color: ${palette.PRIMARY};
      background: ${palette.TRANSPARENT};
      width: ${width ? `${width}` : 'auto'};
      height: ${height ? `${height}px` : '24px'};
      padding: 4px 0.5rem;
      border: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        opacity: 0.6;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
      }
    `;
  }}
`;
