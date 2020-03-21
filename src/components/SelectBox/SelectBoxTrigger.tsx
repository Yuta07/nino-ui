import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { SelectBoxContext } from './SelectBoxProvider';

export const SelectBoxTrigger = () => {
  const { value, color, onClickSelectBoxTrigger } = React.useContext(SelectBoxContext);
  const hrefRef = React.useRef(null);
  const theme = useTheme();

  return (
    <>
      <SelectBoxTriggerRef ref={hrefRef} color={color} themes={theme} onClick={onClickSelectBoxTrigger}>
        {value}
        <TriangleArrow color={color} themes={theme} />
      </SelectBoxTriggerRef>
    </>
  );
};

const SelectBoxTriggerRef = styled.a<{ color: string; themes: Theme }>`
  ${({ color, themes }) => {
    const { device, fontSize, palette } = themes;
    return css`
      background-color: ${palette[color]};
      width: 100%;
      display: inline-block;
      position: relative;
      border: none;
      font-size: 16px;
      font-weight: normal;
      line-height: 1.4;
      border-radius: 4px;
      padding: 10px 40px 10px 15px;
      min-height: 40px;
      transition: border 0.25s linear, color 0.25s linear, background-color 0.25s linear;
      cursor: pointer;

      ${color === 'SECONDARY'
        ? `color: ${palette.PRIMARY}; border: 2px solid ${palette.GRAY}`
        : `color:${palette.SECONDARY}; border:none`};

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
        padding: 8px 35px 8px 12px;
        min-height: 36px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
        min-height: 32px;
      }
    `;
  }}
`;

const TriangleArrow = styled.span<{ color: string; themes: Theme }>`
  border-top-color: white;
  display: inline-block;
  border-width: 8px 6px;
  border-color: ${props => (props.color === 'SECONDARY' ? props.themes.palette.GRAY : props.themes.palette.SECONDARY)}
    transparent;
  border-style: solid;
  border-bottom-style: none;
  position: absolute;
  right: 16px;
  top: 42%;
  -webkit-transform: scale(1.001);
  transform: scale(1.001);
`;
