import React from 'react';
import * as renderer from 'react-test-renderer';

import { Spinner } from '../Spinner';

describe('Spinner test', function() {
  test('Spinner snapshot', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
