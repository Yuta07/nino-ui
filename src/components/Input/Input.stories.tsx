import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { SearchForm } from './SearchForm';

const Wrapper = () => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [touch, setTouch] = React.useState(false);
  const [detect, setDetect] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const validationCheck = (value: string): boolean => {
    return value === '';
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setValue(value);
  };

  const handleInputChange2 = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setValue2(value);
  };

  const handleSearchInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  const handleInputBlur = () => {
    setTouch(true);
  };

  const handleSearchFocus = () => {
    setDetect(true);
  };

  const handleSearchBlur = () => {
    setDetect(false);
  };

  const handleSearchClick = () => {
    console.log(searchValue);
  };

  const error = validationCheck(value);

  return (
    <>
      <BackGround>
        <Input
          type="text"
          name="name"
          value={value}
          placeholder="Please input..."
          error={error}
          touch={touch}
          border={false}
          width={200}
          height={32}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
      </BackGround>
      <Container>
        <Input
          type="text"
          name="name"
          value={value2}
          placeholder="Please input..."
          width={200}
          height={32}
          color="INFO"
          handleInputChange={handleInputChange2}
        />
      </Container>
      <Container>
        <Input
          type="text"
          name="name"
          value="Disabled"
          placeholder="Please input..."
          disabled={true}
          border={false}
          width={200}
          height={32}
          handleInputChange={handleInputChange}
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
          height={32}
          color="GRAY"
          handleInputChange={handleInputChange}
        />
      </Container>
      <Container>
        <SearchForm
          name="search"
          value={searchValue}
          placeholder="Please input..."
          detect={detect}
          width={200}
          height={32}
          iconSize={16}
          handleSearchFocus={handleSearchFocus}
          handleSearchBlur={handleSearchBlur}
          handleSearchChange={handleSearchInputChange}
          handleSearchClick={handleSearchClick}
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

const BackGround = styled.div`
  background: #dddddd;
  padding: 10px;
`;

const Container = styled.div`
  margin: 20px 0;
`;
