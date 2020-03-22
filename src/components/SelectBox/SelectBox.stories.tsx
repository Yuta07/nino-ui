import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { SelectBox } from './SelectBox';
import { SelectBoxWrapper } from './SelectBoxWrapper';
import { SelectBoxTrigger } from './SelectBoxTrigger';
import { SelectBoxContent } from './SelectBoxContent';
import { SelectBoxOption } from './SelectBoxOption';

const options = [{ value: 'Red' }, { value: 'Blue' }, { value: 'Yellow' }, { value: 'Green' }];

const Wrapper = () => {
  const [state, setState] = React.useState('Blue');
  const [state2, setState2] = React.useState('Blue');
  const [state3, setState3] = React.useState('Blue');

  const handleSelectChange = (value: string): void => {
    setState(value);
  };

  const handleSelectChange2 = (value: string): void => {
    setState2(value);
  };

  const handleSelectChange3 = (value: string): void => {
    setState3(value);
  };

  return (
    <>
      <SelectBox
        value={state}
        options={options}
        color="INFO"
        width={120}
        display="inline-flex"
        handleSelectChange={handleSelectChange}
      >
        <Container>
          <SelectBoxWrapper>
            <SelectBoxTrigger />
            <SelectBoxContent />
          </SelectBoxWrapper>
        </Container>
        <SelectBoxOption />
      </SelectBox>
      <SelectBox
        value={state2}
        options={options}
        color="MAIN"
        width={120}
        display="inline-flex"
        handleSelectChange={handleSelectChange2}
      >
        <Container>
          <SelectBoxWrapper>
            <SelectBoxTrigger />
            <SelectBoxContent />
          </SelectBoxWrapper>
        </Container>
        <SelectBoxOption />
      </SelectBox>
      <SelectBox
        value={state3}
        options={options}
        color="SECONDARY"
        width={120}
        display="inline-flex"
        handleSelectChange={handleSelectChange3}
      >
        <Container>
          <SelectBoxWrapper>
            <SelectBoxTrigger />
            <SelectBoxContent />
          </SelectBoxWrapper>
        </Container>
        <SelectBoxOption />
      </SelectBox>
    </>
  );
};

storiesOf('SelectBox', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 1rem;
`;
