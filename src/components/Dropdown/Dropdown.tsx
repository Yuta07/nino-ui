import * as React from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from './DropdownProvider';
import { DropdownButton } from './DropdownButton';
import { DropdownContent } from './DropdownContent';

type Position = {
  top?: number;
  left?: number;
};

type Props = {
  children: React.ReactNode;
  controllable?: boolean;
  position?: Position;
};

export const Dropdown = ({ children, controllable = false, position }: Props): React.ReactPortal => {
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
    <DropdownContext.Provider
      value={{
        isOpen: isOpen,
        onClickDropdownButton: () => {
          setIsOpen(!isOpen);
        },
        handleClickDropdownClose: () => {
          setIsOpen(false);
        },
      }}
    >
      <DropdownButton />
      <DropdownContent position={position} controllable={controllable}>
        {children}
      </DropdownContent>
    </DropdownContext.Provider>,
    element
  );
};
