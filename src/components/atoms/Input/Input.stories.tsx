import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const Wrapper = () => {
  const [ value, setValue] = React.useState("");

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
  }

  return (
    <>
      <BackGround>
        <Input type="text" name="name" value={value} placeholder="Input With Input" border={false} width="320px" handleInputChange={handleInputChange} />
      </BackGround>
      <Container>
        <Input type="text" name="name" value={value} placeholder="No Border Input" width="320px" color="INFO" handleInputChange={handleInputChange} />
      </Container>
    </>
  );
};

storiesOf('Input', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const BackGround = styled.div`
  background: #dddddd;
  padding: 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;
