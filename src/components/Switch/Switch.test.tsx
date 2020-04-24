import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { Switch } from './Switch';

const defaultValues = {
  iconLeft: { iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#1abc9c', pattern: 'Go' },
  iconRight: { iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#bdc3c7', pattern: 'Go' },
  status: false,
  ballStyle: { color: '#1abc9c', translateMove: 47 },
  switchButtonClick: () => {},
};

const makeComponent = (args = {}) => <Switch {...Object.assign({}, defaultValues, args)} />;

describe('When isOpenModal is true', () => {
  // onClickイベントが呼ばれたかどうかをテストする
  test('execute onClick event', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(makeComponent({ switchButtonClick: onClickMock }));
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
