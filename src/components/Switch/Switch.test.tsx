import React from 'react';
import { mount } from 'enzyme';

import { Switch } from './Switch';

describe('When Switch is clicked', () => {
  // onClickイベントが呼ばれたかどうかをテストする
  it('execute onClick event', () => {
    const state = false;
    const testMock = jest.fn();
    const component = mount(
      <Switch
        iconLeft={{ iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#1abc9c', pattern: 'Go' }}
        iconRight={{ iconName: 'Go-LightBulb', iconSize: 24, iconColor: '#bdc3c7', pattern: 'Go' }}
        status={state}
        ballStyle={{ color: '#1abc9c', translateMove: 47 }}
        switchButtonClick={() => {
          testMock;
        }}
      />
    );
    expect(testMock).not.toHaveBeenCalled();
    component.find('button').simulate('click');
    expect(testMock).toBeTruthy();
  });
});
