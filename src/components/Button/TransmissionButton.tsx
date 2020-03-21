import * as React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './Button';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

export const TransmissionButton = ({ ...props }: Props) => {
  const theme = useTheme();
  const { type, name, children, size, color, width, height, disabled, handleClick } = props;

  return (
    <>
      <Base
        type={type}
        name={name}
        size={size}
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
  size: Props['size'];
  color: Props['color'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ size, width, height, themes }) => {
    const { palette } = themes;

    return css`
      font-size: ${size}rem;
      color: ${palette.PRIMARY};
      width: ${width ? `${width}` : 'auto'};
      height: ${height ? `${height}px` : '24px'};
      border: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }
    `;
  }}
`;
