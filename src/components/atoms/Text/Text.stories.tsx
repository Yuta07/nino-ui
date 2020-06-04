import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Text, DangerText, InfoText, WarningText } from './Text';

storiesOf('Text', module).add('all', () => (
  <>
    <Text>Default - MEDIUM</Text>
    <DangerText size="LARGE">Danger - LARGE</DangerText>
    <InfoText>Info - MEDIUM</InfoText>
    <WarningText size="SMALL">Warning - SMALL</WarningText>
  </>
));
