import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const Wrapper = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [touch, setTouch] = React.useState(false);

  React.useEffect(() => {
    const validationCheck = () => {
      if (value === '' && touch) {
        setError(true);
      }
    };

    validationCheck();
  }, [touch, value]);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setValue(value);
  };

  const handleInputBlur = (event: React.FormEvent<HTMLInputElement>) => {
    setTouch(true);
  };

  return (
    <>
      <Container>
        <Input
          type="text"
          name="name"
          value={value}
          placeholder="Please input..."
          error={error}
          touch={touch}
          width={200}
          height={40}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
      </Container>
      <Container>
        <Input
          type="text"
          name="name"
          value="Disabled"
          placeholder="Please input..."
          disabled={true}
          width={200}
          height={40}
        />
      </Container>
      <Container>
        <Input
          type="text"
          name="name"
          value="ReadOnly"
          placeholder="Please input..."
          readonly={true}
          width={200}
          height={40}
        />
      </Container>
    </>
  );
};

storiesOf('Input', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;
