import * as React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Spinner = ({ color = '#f39c12' }: Props) => (
  <React.Fragment>
    <Loader color={color} />
  </React.Fragment>
);

// spinner style
// ref: [https://projects.lukehaas.me/css-loaders/]
const LoaderSpin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<{ color: string }>`
  margin: 0 auto;
  width: 3rem;
  height: 3rem;
  font-size: 5px;
  position: relative;
  border-radius: 50%;
  border-top: 0.3rem solid rgba(218, 218, 218, 0.2);
  border-right: 0.3rem solid rgba(218, 218, 218, 0.2);
  border-bottom: 0.3rem solid rgba(218, 218, 218, 0.2);
  border-left: 0.3rem solid ${props => props.color};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${LoaderSpin} 1.2s infinite linear;
  animation: ${LoaderSpin} 1.2s infinite linear;
`;
