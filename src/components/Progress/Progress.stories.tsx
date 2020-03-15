import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';
import { ProgressCircle } from './ProgressCircle';

const Wrapper = () => {
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (percentage < 100) {
        setPercentage(prev => prev + 10);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <>
      <Container>
        <ProgressBar width="100%" height={10} color="MAIN" progress={percentage} />
      </Container>
      <CircleContainer>
        <ProgressCircle size={60} color="DANGER" width={5} progress={percentage} />
        <ProgressCircle size={80} color="WARNING" width={10} progress={percentage} />
        <ProgressCircle size={100} color="INFO" width={10} progress={percentage} />
        <ProgressCircle size={120} color="SUCCESS" width={15} progress={percentage} />
      </CircleContainer>
    </>
  );
};

storiesOf('Progress', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  margin: 20px 0;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
