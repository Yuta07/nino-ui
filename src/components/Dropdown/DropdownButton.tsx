import * as React from 'react';
import styled from 'styled-components';
import { DropdownContext } from './DropdownProvider';

export const DropdownButton = () => {
  const { onClickDropdownButton } = React.useContext(DropdownContext);
  const buttonRef = React.useRef(null);

  return (
    <Container>
      <button ref={buttonRef} type="button" onClick={onClickDropdownButton}>
        show dropdown
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
`;
