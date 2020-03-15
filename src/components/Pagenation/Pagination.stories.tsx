import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Pagination } from './Pagination';

const Wrapper = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleClickPageNum = (pageNum: number) => {
    setTimeout(() => {
      setCurrentPage(pageNum);
    }, 1000);
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
          currentPage={currentPage}
          total={300}
          everyNumCases={25}
          range={5}
          isBackFirst={true}
          isGoLast={true}
          size={32}
          handleClickPageNum={pageNum => handleClickPageNum(pageNum)}
        />
      </Container>
      <Container>
        <Pagination
          currentPage={currentPage}
          total={100}
          everyNumCases={15}
          range={5}
          size={32}
          handleClickPageNum={pageNum => handleClickPageNum(pageNum)}
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
