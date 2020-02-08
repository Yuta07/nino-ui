import * as React from 'react';
import styled from 'styled-components';
import { DropdownContext } from './DropdownProvider';

type Props = {
  children: React.ReactNode;
};

export const DropdownButton = ({ children }: Props) => {
  const { onClickDropdownButton } = React.useContext(DropdownContext);
  const buttonRef = React.useRef(null);

  return (
    <Container>
      <button ref={buttonRef} type="button" onClick={onClickDropdownButton}>
        show dropdown
      </button>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  position: relative;
`;
