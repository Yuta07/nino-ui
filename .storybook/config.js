import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import { GlobalStyle } from '../src/shared/global';

const req = require.context('../src/components', true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
  options: {
    isFullscreen: false,
    isToolshown: true,
    theme: create({
      base: 'light',
      brandTitle: 'nino-ui storybook',
      brandUrl: 'https://github.com/Yuta07/nino-ui',
    }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);
addDecorator(addReadme);

// Add global style
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(loadStories, module);
