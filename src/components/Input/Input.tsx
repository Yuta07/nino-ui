import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
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
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  touch?: boolean;
  border?: boolean;
  color?: string;
  width?: number;
  height?: number;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  name,
  value,
  placeholder = '',
  autoComplete = 'off',
  disabled,
  readonly,
  error = false,
  touch = false,
  border = true,
  width,
  height,
  color = 'MAIN',
  handleInputChange,
  handleInputBlur,
}: Props) => {
  const theme = useTheme();

  let borderColor = theme.palette.GRAY;
  if (error && touch) {
    borderColor = theme.palette.DANGER;
  }

  let backgroundColor = theme.palette.SECONDARY;
  if (error && touch) {
    backgroundColor = '#ffe2ec';
  }

  return (
    <>
      <InputForm
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readonly}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        border={border}
        width={width}
        height={height}
        themes={theme}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </>
  );
};

const InputForm = styled.input<{
  readOnly: boolean;
  color: string;
  backgroundColor: string;
  borderColor: string;
  border: boolean;
  width: number;
  height: number;
  themes: Theme;
}>`
  ${({ readOnly, color, backgroundColor, borderColor, border, width, height, themes }) => {
    const { palette } = themes;

    return css`
      width: ${width ? `${width}px` : `auto`};
      height: ${height}px;
      color: ${readOnly ? palette.PLACE_HOLDER : palette.PRIMARY};
      background: ${backgroundColor};
      font-size: 16px;
      line-height: 1.4;
      padding: 4px 8px;
      border: ${border ? `2px solid ${borderColor}` : `none`};
      border-radius: 6px;
      box-shadow: none;

      &:focus {
        padding: ${border ? `4px 8px` : `2px 6px`};
        outline: none;
        border: 2px solid ${palette[color]};
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${palette.PLACE_HOLDER};
        font-size: 14px;
      }

      :-ms-input-placeholder {
        color: ${palette.PLACE_HOLDER};
        font-size: 14px;
      }

      &:disabled {
        color: ${palette.PLACE_HOLDER};
        background-color: #f4f6f6;
        font-size: 14px;
        border-color: ${palette.PLACE_HOLDER};
        pointer-events: none;
        cursor: default;
      }
    `;
  }}
`;
