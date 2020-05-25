import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

export type Props = {
  type:
    | 'hidden'
    | 'text'
    | 'number'
    | 'tel'
    | 'url'
    | 'datetime'
    | 'date'
    | 'month'
    | 'week'
    | 'time'
    | 'datetime-local'
    | 'range'
    | 'email'
    | 'password';
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  error?: boolean;
  touch?: boolean;
  border?: boolean;
  color?: string;
  width?: string;
  height?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  name,
  value,
  placeholder = '',
  autoComplete = 'off',
  error = false,
  touch = false,
  width,
  height,
  border = true,
  color = 'MAIN',
  handleInputChange,
  handleInputBlur,
  handleSearchFocus,
}: Props) => {
  const theme = useTheme();

  let borderColor = theme.palette.GRAY;
  if (error && touch) {
    borderColor = theme.palette.DANGER;
  }

  return (
    <InputForm
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      color={color}
      borderColor={borderColor}
      border={border}
      width={width}
      height={height}
      themes={theme}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      onFocus={handleSearchFocus}
    />
  );
};

export const InputForm = styled.input<{
  color: Props['color'];
  borderColor: string;
  border: Props['border'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ color, borderColor, border, width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : 'auto'};
      font-size: ${fontSize.SMALL}px;
      color: ${palette.PRIMARY};
      background: ${palette.SECONDARY};
      padding: 0.5rem 0.75rem;
      border: ${border ? `1px solid ${borderColor}` : `none`};
      border-radius: 8px;
      box-shadow: none;

      &:focus {
        padding: ${border ? '0.5rem 0.75rem' : '7px 11px'};
        outline: none;
        border: 1px solid ${palette[color]};
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${palette.PLACE_HOLDER};
      }

      :-ms-input-placeholder {
        color: ${palette.PLACE_HOLDER};
      }

      @media screen and ${device.MOBILE} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;
