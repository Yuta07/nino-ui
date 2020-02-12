import * as React from 'react';

type SelectProps = {
  value: string;
};

export interface Props {
  isOpen: boolean;
  value: string;
  options: SelectProps[];
  color: string;
  width?: number;
  onClickSelectBoxTrigger: () => void;
  handleChangeSelectValue: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => void;
}

export const selectBoxProp = () => {
  const ninoSelectBox: Props = {
    isOpen: false,
    value: '',
    options: [],
    color: '#fefefe',
    width: undefined,
    onClickSelectBoxTrigger: () => {},
    handleChangeSelectValue: () => {},
  };
  return ninoSelectBox;
};

export const SelectBoxContext = React.createContext<Props>(selectBoxProp());
