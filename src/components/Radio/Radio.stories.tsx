import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Radio } from './Radio';

const Wrapper = () => {
  const [value, setValue] = React.useState('male');

  const handleRadioChange = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>, value: string): void => {
    event.preventDefault();
    setValue(value);
  };

  return (
    <>
      <Container>
        <RadioContent>
          <Radio
            name="gender"
            value="male"
            checked={value === 'male' ? true : false}
            size={14}
            handleRadioChange={handleRadioChange}
          />
        </RadioContent>
        <RadioContent>
          <Radio
            name="gender"
            value="female"
            checked={value === 'female' ? true : false}
            size={16}
            handleRadioChange={handleRadioChange}
            color="INFO"
          />
        </RadioContent>
        <RadioContent>
          <Radio
            name="gender"
            value="others"
            checked={value === 'others' ? true : false}
            size={18}
            handleRadioChange={handleRadioChange}
            color="SUCCESS"
          />
        </RadioContent>
        <RadioContent>
          <Radio name="gender" value="disabled" checked={true} disabled={true} size={12} />
        </RadioContent>
      </Container>
    </>
  );
};

storiesOf('Radio', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;

const RadioContent = styled.div`
  margin: 1rem 0;
`;
