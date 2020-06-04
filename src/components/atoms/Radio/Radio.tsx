import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

// ref:[https://qiita.com/ryo620org/items/a7941774469a6229a64a]

type Props = {
  name: string;
  value: string;
  checked: boolean;
  color?: string;
  handleRadioChange?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>, value: string) => void;
};

export const Radio = ({ value, checked, color = 'MAIN', handleRadioChange }: Props) => {
  const theme = useTheme();

  return (
    <>
      <RadioButton type="radio" />
      <RadioLabel themes={theme} color={color} checked={checked} onClick={event => handleRadioChange(event, value)}>
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
}>`
  ${({ themes, color, checked }) => {
    const { device, fontSize, palette } = themes;

    return css`
      position: relative;
      display: inline-block;
      padding-left: 2rem;
      vertical-align: middle;
      font-size: 14px;

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
        width: 6px;
        height: 6px;
        margin-top: -3px;
        background: ${checked ? palette[color] : palette.GRAY};
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
        width: 14px;
        height: 14px;
        margin-top: -10px;
        border: 3px solid ${checked ? palette[color] : palette.GRAY};
        border-radius: 50%;
        display: block;
        content: '';
        cursor: pointer;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.SMALL}px;

        &:before {
          width: 6px;
          height: 6px;
        }

        &:after {
          width: ${fontSize.SMALL}px;
          height: ${fontSize.SMALL}px;
        }
      }

      @media screen and ${device.MOBILE} {
        font-size: ${fontSize.X_SMALL}px;

        &:before {
          width: 6px;
          height: 6px;
          top: 45%;
          left: 6px;
        }

        &:after {
          width: ${fontSize.X_SMALL}px;
          height: ${fontSize.X_SMALL}px;
        }
      }
    `;
  }}
`;
