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
  color = 'MAIN',
  handleInputChange,
  handleInputBlur,
}: Props) => {
  const theme = useTheme();

  let borderColor = theme.palette.GRAY;
  if (error && touch) {
    borderColor = theme.palette.DANGER;
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
  color: Props['color'];
  borderColor: string;
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ color, borderColor, width, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      width: ${width ? `${width}px` : `auto`};
      height: ${height}px;
      color: ${palette.PRIMARY};
      background: ${palette.SECONDARY};
      font-size: 16px;
      line-height: 1.4;
      padding: 8px 12px;
      border: 1px solid ${borderColor};
      border-radius: 6px;
      box-shadow: none;

      &:focus {
        outline: none;
        border: 1px solid ${palette[color]};
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

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
        max-width: 720px;
      }

      @media screen and ${device.MOBILE} {
        max-width: 360px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
        max-width: 300px;
      }
    `;
  }}
`;
