import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';
import { ProgressCircle } from './ProgressCircle';

const Circle = () => {
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (percentage < 100) {
        setPercentage(prev => prev + 20);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <>
      <CircleContainer>
        <ProgressCircle
          size={90}
          fontLevel={3}
          color="DANGER"
          position={{ top: '35%', left: '0' }}
          percentage={percentage}
        />
      </CircleContainer>
      <CircleContainer>
        <ProgressCircle size={80} position={{ top: '35%', left: '0' }} percentage={percentage} />
      </CircleContainer>
      <CircleContainer>
        <ProgressCircle
          size={70}
          fontLevel={5}
          color="SUCCESS"
          position={{ top: '30%', left: '0' }}
          percentage={percentage}
        />
      </CircleContainer>
      <CircleContainer>
        <ProgressCircle
          size={60}
          fontLevel={5}
          color="DARK"
          position={{ top: '30%', left: '0' }}
          percentage={percentage}
        />
      </CircleContainer>
    </>
  );
};

const Bar = () => {
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (percentage < 100) {
        setPercentage(prev => prev + 25);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <>
      <ProgressBar width="100%" position={{ top: '0' }} color="MAIN" progress={percentage} />
      <ProgressBar width="100%" position={{ bottom: '0' }} color="DANGER" progress={percentage} />
    </>
  );
};

storiesOf('Progress', module)
  .add('circle', () =>
    React.createElement(() => {
      return <Circle />;
    })
  )
  .add('bar', () =>
    React.createElement(() => {
      return <Bar />;
    })
  );

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0;
`;
