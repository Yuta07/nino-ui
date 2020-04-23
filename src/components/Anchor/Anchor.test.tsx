import React from 'react';
import * as renderer from 'react-test-renderer';

import { Anchor } from './Anchor';

describe('Anchor test', function() {
  test('Nothing changes when clicked', () => {
    const component = renderer.create(
      <Anchor link="#" width="120px" height={32} size={1} color="MAIN">
        nino-ui
      </Anchor>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
