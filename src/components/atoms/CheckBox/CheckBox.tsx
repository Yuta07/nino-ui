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

export const CheckBox = ({ value, checked, color = 'MAIN', handleRadioChange }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Check type="checkbox" />
      <CheckButton themes={theme} color={color} checked={checked} onClick={event => handleRadioChange(event, value)}>
        {value}
      </CheckButton>
    </>
  );
};

const Check = styled.input`
  display: none;
`;

const CheckButton = styled.label<{
  themes: Theme;
  color: string;
  checked: Props['checked'];
}>`
  ${({ themes, color, checked }) => {
    const { device, fontSize, palette } = themes;

    return css`
      position: relative;
      display: inline-block;
      padding-left: 2rem;
      vertical-align: middle;
      font-size: ${fontSize.MEDIUM}px;

      &:hover {
        &:before {
          opacity: 1;
          -webkit-transition: opacity 0.2s linear;
          transition: opacity 0.2s linear;
          border-right: 3px solid ${palette.SECONDARY};
          border-bottom: 3px solid ${palette.SECONDARY};
        }
      }

      &::before {
        position: absolute;
        top: 25%;
        left: 5px;
        z-index: 1;
        opacity: ${checked ? 1 : 0};
        -webkit-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        width: 4px;
        height: 8px;
        margin-top: -1px;
        border-right: 3px solid ${checked ? palette.SECONDARY : palette.GRAY};
        border-bottom: 3px solid ${checked ? palette.SECONDARY : palette.GRAY};
        display: block;
        content: '';
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        cursor: pointer;
      }

      &::after {
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transition: background 0.2s linear;
        transition: background 0.2s linear;
        width: ${fontSize.MEDIUM}px;
        height: ${fontSize.MEDIUM}px;
        margin-top: -8px;
        background: ${checked ? palette[color] : palette.GRAY};
        border-radius: 4px;
        display: block;
        content: '';
        cursor: pointer;
      }

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.SMALL}px;

        &:hover {
          &:before {
            border-right: 2.5px solid ${palette.SECONDARY};
            border-bottom: 2.5px solid ${palette.SECONDARY};
          }
        }

        &::before {
          left: 4px;
          width: 3px;
          height: 6px;
          border-right: 2.5px solid ${checked ? palette.SECONDARY : palette.GRAY};
          border-bottom: 2.5px solid ${checked ? palette.SECONDARY : palette.GRAY};
        }

        &::after {
          width: ${fontSize.SMALL}px;
          height: ${fontSize.SMALL}px;
        }
      }

      @media screen and ${device.MOBILE} {
        font-size: ${fontSize.X_SMALL}px;

        &:hover {
          &:before {
            border-right: 2px solid ${palette.SECONDARY};
            border-bottom: 2px solid ${palette.SECONDARY};
          }
        }

        &::before {
          top: 20%;
          left: 3.5px;
          width: 3px;
          height: 6px;
          border-right: 2px solid ${checked ? palette.SECONDARY : palette.GRAY};
          border-bottom: 2px solid ${checked ? palette.SECONDARY : palette.GRAY};
        }

        &::after {
          width: ${fontSize.X_SMALL}px;
          height: ${fontSize.X_SMALL}px;
        }
      }
    `;
  }}
`;
