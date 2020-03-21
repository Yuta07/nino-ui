import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { SelectBox } from './SelectBox';

const options = [{ value: 'Red' }, { value: 'Blue' }, { value: 'Yellow' }, { value: 'Green' }];

const Wrapper = () => {
  const [state, setState] = React.useState('Blue');

  const handleSelectChange = (value: string): void => {
    setState(value);
  };

  return (
    <>
      <Container>
        <SelectBox value={state} options={options} color="INFO" width={160} handleSelectChange={handleSelectChange} />
      </Container>
      <Container>
        <SelectBox value={state} options={options} color="MAIN" width={160} handleSelectChange={handleSelectChange} />
      </Container>
      <Container>
        <SelectBox
          value={state}
          options={options}
          color="SECONDARY"
          width={160}
          handleSelectChange={handleSelectChange}
        />
      </Container>
    </>
  );
};

storiesOf('SelectBox', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
  display: block;
`;
