import * as React from 'react';

export interface Dropdown {
  isOpen: boolean;
  onClickDropdownButton: () => void;
  handleClickDropdownClose: () => void;
}

export const dropdownProp = () => {
  const ninoDropdown: Dropdown = {
    isOpen: false,
    onClickDropdownButton: () => {},
    handleClickDropdownClose: () => {},
  };
  return ninoDropdown;
};

export const DropdownContext = React.createContext<Dropdown>(dropdownProp());
