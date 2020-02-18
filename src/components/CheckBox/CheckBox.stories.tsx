import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { CheckBox } from './CheckBox';

const Wrapper = () => {
  const [values, setValues] = React.useState([]);

  const handleRadioChange = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>, value: string): void => {
    event.preventDefault();
    if (values.includes(value)) {
      const result = values.filter(val => val !== value);
      setValues(result);
    } else {
      setValues([...values, value]);
    }
  };

  return (
    <>
      <Container>
        <RadioContent>
          <CheckBox
            name="gender"
            value="male"
            checked={values.includes('male') ? true : false}
            size={14}
            handleRadioChange={handleRadioChange}
          />
        </RadioContent>
        <RadioContent>
          <CheckBox
            name="gender"
            value="female"
            checked={values.includes('female') ? true : false}
            size={16}
            handleRadioChange={handleRadioChange}
            color="INFO"
          />
        </RadioContent>
        <RadioContent>
          <CheckBox
            name="gender"
            value="others"
            checked={values.includes('others') ? true : false}
            size={18}
            handleRadioChange={handleRadioChange}
            color="SUCCESS"
          />
        </RadioContent>
        <RadioContent>
          <CheckBox name="gender" value="disabled" checked={true} disabled={true} size={16} />
        </RadioContent>
      </Container>
    </>
  );
};

storiesOf('CheckBox', module).add('all', () =>
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
