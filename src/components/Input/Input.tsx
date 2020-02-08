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
  width,
  height,
  color = '#f39c12',
  handleInputChange,
  handleInputBlur,
}: Props) => {
  const theme = useTheme();

  let borderColor = theme.palette.PRIMARY;
  if (error && touch) {
    borderColor = theme.palette.DANGER;
  }

  console.log(error, touch);

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
        borderColor={borderColor}
        width={width}
        height={height}
        themes={theme}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </>
  );
};

const InputForm = styled.input<{ color: string; borderColor: string; width: number; height: number; themes: Theme }>`
  ${({ color, borderColor, width, height, themes }) => {
    const { palette } = themes;

    return css`
      width: ${width ? `${width}px` : `auto`};
      height: ${height}px;
      color: ${palette.PRIMARY};
      font-size: 16px;
      line-height: 1.4;
      letter-spacing: 1px;
      padding: 4px 8px;
      border: 2px solid ${borderColor};
      border-radius: 6px;
      box-shadow: none;

      &:focus {
        outline: none;
        border: 2px solid ${color};
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        color: rgba(69, 69, 69, 0.5);
      }

      :-ms-input-placeholder {
        color: rgba(69, 69, 69, 0.5);
      }

      &:disabled {
        color: #d5dbdb;
        background-color: #f4f6f6;
        border-color: #d5dbdb;
        pointer-events: none;
        cursor: default;
      }
    `;
  }}
`;
