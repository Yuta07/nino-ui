import * as React from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { SelectBoxContext } from './SelectBoxProvider';
import { SelectBoxTrigger } from './SelectBoxTrigger';
import { SelectBoxContent } from './SelectBoxContent';
import { SelectBoxOption } from './SelectBoxOption';

type SelectProps = {
  value: string;
};

export interface Props {
  value: string;
  options: SelectProps[];
  color: string;
  width?: number;
  handleSelectChange: (value: string) => void;
}

export const SelectBox = ({ value, options, handleSelectChange, color, width }: Props): React.ReactPortal => {
  const [isOpen, setIsOpen] = React.useState(false);
  const element = React.useRef(document.createElement('div')).current;
  element.style.display = 'inline-block';

  React.useEffect(() => {
    const handleClickBody = (event: any) => {
      if (element && !element.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.appendChild(element);
    document.body.addEventListener('click', handleClickBody, false);

    return () => {
      document.body.removeChild(element);
      document.body.removeEventListener('click', handleClickBody, false);
    };
  }, [element]);

  return createPortal(
    <SelectBoxContext.Provider
      value={{
        isOpen: isOpen,
        value: value,
        options: options,
        color: color,
        width: width,
        onClickSelectBoxTrigger: () => {
          setIsOpen(!isOpen);
        },
        handleChangeSelectValue: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => {
          event.preventDefault();
          setIsOpen(false);
          handleSelectChange(value);
        },
      }}
    >
      <Wrapper width={width}>
        <SelectBoxTrigger />
        <SelectBoxContent />
      </Wrapper>
      <SelectBoxOption />
    </SelectBoxContext.Provider>,
    element
  );
};

const Wrapper = styled.div<{ width: Props['width'] }>`
  ${({ width }) => {
    return css`
      width: ${width ? `${width}px` : `auto`};
      height: auto;
      border: none;
      padding: 0;
      position: relative;
      display: inline-block;
      vertical-align: top;
    `;
  }}
`;
