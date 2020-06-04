import * as React from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from './DropdownProvider';

type Props = {
  children: React.ReactNode;
  controllable?: boolean;
  color: string;
};

export const Dropdown = ({ children, controllable = false, color }: Props): React.ReactPortal => {
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
        controllable: controllable,
        color: color,
        onClickDropdownButton: () => {
          setIsOpen(!isOpen);
        },
        handleClickDropdownClose: () => {
          setIsOpen(false);
        },
      }}
    >
      {children}
    </DropdownContext.Provider>,
    element
  );
};
