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
      <Container>
        <ProgressCircle size={80} color="SUCCESS" progress={percentage} />
      </Container>
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
