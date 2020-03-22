import * as React from 'react';
import { createPortal } from 'react-dom';
import { SelectBoxContext } from './SelectBoxProvider';

type SelectProps = {
  value: string;
};

export interface Props {
  children: React.ReactNode;
  value: string;
  options: SelectProps[];
  color: string;
  width?: number;
  display?: string;
  handleSelectChange: (value: string) => void;
}

export const SelectBox = ({
  children,
  value,
  options,
  handleSelectChange,
  color,
  width,
  display = 'inline-block',
}: Props): React.ReactPortal => {
  const [isOpen, setIsOpen] = React.useState(false);
  const element = React.useRef(document.createElement('div')).current;
  element.style.display = display;

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
      {children}
    </SelectBoxContext.Provider>,
    element
  );
};
