import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { SearchForm } from './SearchForm';

const Wrapper = () => {
  const [ value, setValue] = React.useState("");

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
  }

  return (
    <>
    <Container>
      <Form>
        <SearchForm type="text" name="name" value={value} placeholder="Search Form" width="320px" color="INFO" handleInputChange={handleInputChange} />
      </Form>
    </Container>
    <Container>
    <Form>
      <SearchForm type="text" name="name" value={value} placeholder="Search Form with detect" width="320px" color="INFO" detect={true} handleInputChange={handleInputChange} />
    </Form>
  </Container>
  </>
  );
};

storiesOf('SearchForm', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;

const Form = styled.form`
  width: 320px;
`;
