import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

// ref:[https://qiita.com/ryo620org/items/a7941774469a6229a64a]

type Props = {
  name: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  readonly?: boolean;
  color?: string;
  size: number;
  handleRadioChange?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>, value: string) => void;
};

export const CheckBox = ({ value, checked, disabled = false, size, color = 'MAIN', handleRadioChange }: Props) => {
  const theme = useTheme();

  return (
    <>
      <RadioButton type="checkbox" />
      <RadioLabel
        themes={theme}
        color={color}
        size={size}
        checked={checked}
        disabled={disabled}
        onClick={disabled ? null : event => handleRadioChange(event, value)}
      >
        {value}
      </RadioLabel>
    </>
  );
};

const RadioButton = styled.input`
  display: none;
`;

const RadioLabel = styled.label<{
  themes: Theme;
  color: string;
  size: number;
  checked: boolean;
  disabled: boolean;
}>`
  ${({ themes, color, size, checked, disabled }) => {
    const { palette } = themes;
    const checkBoxColor = disabled ? palette.GRAY : palette[color];

    return css`
      position: relative;
      display: inline-block;
      padding-left: 2rem;
      vertical-align: middle;
      font-size: ${size}px;

      &:hover {
        &:before {
          opacity: 1;
        }
      }

      &:before {
        position: absolute;
        top: 25%;
        left: 5px;
        z-index: 1;
        opacity: ${checked ? 1 : 0};
        -webkit-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        width: ${`${size - 12}px`};
        height: ${`${size - 8}px`};
        margin-top: -3px;
        border-right: 3px solid ${checked ? palette.SECONDARY : palette.GRAY};
        border-bottom: 2px solid ${checked ? palette.SECONDARY : palette.GRAY};
        display: block;
        content: '';
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:after {
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transition: background 0.2s linear;
        transition: background 0.2s linear;
        width: ${`${size}px`};
        height: ${size}px;
        margin-top: -10px;
        background: ${checked ? checkBoxColor : palette.GRAY};
        border-radius: 4px;
        display: block;
        content: '';
        cursor: pointer;
      }
    `;
  }}
`;
