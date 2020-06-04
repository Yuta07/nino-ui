import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { Props, SelectBoxContext } from './SelectBoxProvider';

export const SelectBoxContent = () => {
  const { value, isOpen, options, color, width, handleChangeSelectValue } = React.useContext(SelectBoxContext);
  const theme = useTheme();

  const renderSelectBoxList = options.map(option => {
    return (
      <SelectBoxListItem
        key={option.value}
        value={option.value}
        active={option.value === value}
        color={color}
        themes={theme}
        onClick={event => handleChangeSelectValue(event, option.value)}
      >
        <SelectItem>
          <Text>{option.value}</Text>
        </SelectItem>
      </SelectBoxListItem>
    );
  });

  return (
    <>
      <SelectBoxContainer isOpen={isOpen} color={color} width={width} themes={theme}>
        <SelectBoxList>{renderSelectBoxList}</SelectBoxList>
      </SelectBoxContainer>
    </>
  );
};

const SelectBoxContainer = styled.div<{
  isOpen: Props['isOpen'];
  color: Props['color'];
  width: Props['width'];
  themes: Theme;
}>`
  ${({ isOpen, width, themes }) => {
    const { device, fontSize, palette } = themes;
    return css`
      visibility: ${isOpen ? `visible` : `hidden`};
      opacity: ${isOpen ? `1` : `0`};
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      transform: ${isOpen ? `translate3d(0px, 10px, 0px)` : null};
      min-width: ${width ? `${width}px` : `auto`};
      font-size: 14px;
      position: absolute;
      z-index: 9999;
      color: ${palette.PRIMARY}
      background-color: ${palette.SUB_SECONDARY};
      border: none;
      border-radius: 4px;
      -webkit-filter: none;
      filter: none;

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.MEDIUM}px;
        min-width: ${width ? `${width * 0.875}px` : `auto`};
        top: 90%;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.SMALL}px;
        min-width: ${width ? `${width * 0.75}px` : `auto`};
        top: 80%;
      }
    `;
  }}
`;

const SelectBoxList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SelectBoxListItem = styled.li<{ active: boolean; color: Props['color']; themes: Theme }>`
  ${({ active, color, themes }) => {
    const { palette } = themes;

    const fontColor = active ? palette.SECONDARY : palette.PRIMARY;
    const backgroundColor = active ? palette[color] : palette.SUB_SECONDARY;

    return css`
      list-style: none;
      display: list-item;
      color: ${color === 'SECONDARY' ? palette.PRIMARY : fontColor};
      background: ${color === 'SECONDARY' && active ? palette.GRAY : backgroundColor};
      background-image: none;

      &:hover {
        opacity: 0.9;
        transition: 0.2s;
        color: ${palette.PRIMARY};
        background: ${palette.GRAY};
      }
    `;
  }}
`;

const SelectItem = styled.div`
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;
  min-height: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 1.429;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Text = styled.span``;
