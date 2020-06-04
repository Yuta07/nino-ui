import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Pagination } from './Pagination';

const Wrapper = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentPage2, setCurrentPage2] = React.useState(1);
  const [currentPage3, setCurrentPage3] = React.useState(1);

  const handleClickPageNum = (pageNum: number) => {
    setTimeout(() => {
      setCurrentPage(pageNum);
    }, 500);
  };

  const handleClickPageNum2 = (pageNum: number) => {
    setTimeout(() => {
      setCurrentPage2(pageNum);
    }, 500);
  };

  const handleClickPageNum3 = (pageNum: number) => {
    setTimeout(() => {
      setCurrentPage3(pageNum);
    }, 500);
  };

  return (
    <>
      <Container>
        <Pagination
          currentPage={currentPage}
          total={100}
          everyNumCases={10}
          isBackFirst={true}
          isGoLast={true}
          size={32}
          handleClickPageNum={pageNum => handleClickPageNum(pageNum)}
        />
      </Container>
      <Container>
        <Pagination
          currentPage={currentPage2}
          total={300}
          everyNumCases={20}
          range={5}
          isBackFirst={true}
          isGoLast={true}
          size={32}
          handleClickPageNum={pageNum => handleClickPageNum2(pageNum)}
        />
      </Container>
      <Container>
        <Pagination
          currentPage={currentPage3}
          total={200}
          everyNumCases={15}
          size={32}
          handleClickPageNum={pageNum => handleClickPageNum3(pageNum)}
        />
      </Container>
    </>
  );
};

storiesOf('Pagination', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;
