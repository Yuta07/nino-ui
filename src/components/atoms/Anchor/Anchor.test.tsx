import React from 'react';
import * as renderer from 'react-test-renderer';

import { Anchor } from './Anchor';

describe('Anchor test', function() {
  test('Nothing changes when clicked', () => {
    const component = renderer.create(
      <Anchor link="#" width="120px" height="32px">
        nino-ui
      </Anchor>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
