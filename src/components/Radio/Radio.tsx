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
  handleRadioChange?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>, value: string) => void;
};

export const Radio = ({ value, checked, disabled = false, color = 'MAIN', handleRadioChange }: Props) => {
  const theme = useTheme();

  return (
    <>
      <RadioButton type="radio" />
      <RadioLabel
        themes={theme}
        color={color}
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
  color: Props['color'];
  checked: Props['checked'];
  disabled: Props['disabled'];
}>`
  ${({ themes, color, checked, disabled }) => {
    const { device, fontSize, palette } = themes;
    const radioColor = disabled ? palette.GRAY : palette[color];

    return css`
      position: relative;
      display: inline-block;
      padding-left: 2rem;
      vertical-align: middle;
      font-size: 16px;

      &:hover {
        &:before {
          opacity: 1;
        }
      }

      &:before {
        position: absolute;
        top: 50%;
        left: 7px;
        opacity: ${checked ? 1 : 0};
        -webkit-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        width: 8px;
        height: 8px;
        margin-top: -3px;
        background: ${checked ? radioColor : palette.GRAY};
        border-radius: 50%;
        display: block;
        content: '';
      }

      &:after {
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transition: border-color 0.2s linear;
        transition: border-color 0.2s linear;
        width: 16px;
        height: 16px;
        margin-top: -10px;
        border: 3px solid ${checked ? radioColor : palette.GRAY};
        border-radius: 50%;
        display: block;
        content: '';
        cursor: pointer;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;

        &:before {
          width: 6px;
          height: 6px;
        }

        &:after {
          width: ${fontSize.MEDIUM}px;
          height: ${fontSize.MEDIUM}px;
        }
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;

        &:before {
          width: 6px;
          height: 6px;
          top: 45%;
          left: 6px;
        }

        &:after {
          width: ${fontSize.SMALL}px;
          height: ${fontSize.SMALL}px;
        }
      }
    `;
  }}
`;
