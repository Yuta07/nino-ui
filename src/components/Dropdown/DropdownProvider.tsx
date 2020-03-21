import * as React from 'react';

export interface Dropdown {
  isOpen: boolean;
  controllable: boolean;
  color: string;
  onClickDropdownButton: () => void;
  handleClickDropdownClose: () => void;
}

export const dropdownProp = () => {
  const ninoDropdown: Dropdown = {
    isOpen: false,
    controllable: false,
    color: 'SECONDARY',
    onClickDropdownButton: () => {},
    handleClickDropdownClose: () => {},
  };
  return ninoDropdown;
};

export const DropdownContext = React.createContext<Dropdown>(dropdownProp());
