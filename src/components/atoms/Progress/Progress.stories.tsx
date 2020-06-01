import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
// import { ProgressBar } from './ProgressBar';
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
      {/* <Container>
        <ProgressBar width="100%" height={10} color="MAIN" progress={percentage} />
      </Container> */}
      <CircleContainer>
        <ProgressCircle size={120} fontLevel={3} color='DANGER' position={{ top: '35%', left: '0' }} percentage={percentage} />
      </CircleContainer>
      <CircleContainer>
        <ProgressCircle position={{ top: '35%', left: '0' }} percentage={percentage} />
      </CircleContainer>
      <CircleContainer>
        <ProgressCircle size={90} fontLevel={5} color='SUCCESS' position={{ top: '35%', left: '0' }} percentage={percentage} />
      </CircleContainer>
      <CircleContainer>
        <ProgressCircle size={80} fontLevel={5} color='DARK' position={{ top: '35%', left: '0' }} percentage={percentage} />
      </CircleContainer>
    </>
  );
};

storiesOf('Progress', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

// const Container = styled.div`
//   margin: 20px 0;
// `;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0;
`;
