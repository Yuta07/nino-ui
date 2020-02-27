import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  touch?: boolean;
  color?: string;
  width?: number;
  height?: number;
  handleInputChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInputBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({
  name,
  value,
  placeholder = '',
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

  let borderColor = theme.palette.GRAY;
  if (error && touch) {
    borderColor = theme.palette.DANGER;
  }

  let backgroundColor = '#fefefe';
  if (error && touch) {
    backgroundColor = '#ffe2ec';
  }

  return (
    <>
      <InputForm
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        color={color}
        backgroundColor={backgroundColor}
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

const InputForm = styled.textarea<{
  color: string;
  backgroundColor: string;
  borderColor: string;
  width: number;
  height: number;
  themes: Theme;
}>`
  ${({ color, backgroundColor, borderColor, width, height, themes }) => {
    const { palette } = themes;

    return css`
      width: ${width ? `${width}px` : `auto`};
      height: ${height}px;
      color: ${palette.PRIMARY};
      background: ${backgroundColor};
      font-size: 16px;
      line-height: 1.4;
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
