import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Textarea } from './Textarea';

const Wrapper = () => {
  const [value, setValue] = React.useState('');
  const [touch, setTouch] = React.useState(false);

  const validationCheck = (value: string): boolean => {
    return value === '';
  };

  const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    const { value } = event.currentTarget;
    setValue(value);
  };

  const handleInputBlur = () => {
    setTouch(true);
  };

  const error = validationCheck(value);

  return (
    <>
      <Container>
        <Textarea
          name="name"
          value={value}
          placeholder="Please input..."
          error={error}
          touch={touch}
          width={540}
          height={200}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
      </Container>
      <Container>
        <Textarea
          name="name"
          value={value}
          placeholder="Please input..."
          width={540}
          height={200}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
      </Container>
    </>
  );
};

storiesOf('Textarea', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;
