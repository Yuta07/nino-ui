import * as React from 'react';
import styled from 'styled-components';
import { DropdownContext } from './DropdownProvider';

type Props = {
  children: React.ReactNode;
};

export const DropdownButton = ({ children }: Props) => {
  const { onClickDropdownButton } = React.useContext(DropdownContext);
  const triggerRef = React.useRef(null);

  return (
    <Container ref={triggerRef} onClick={onClickDropdownButton}>
      {children}
    </Container>
  );
};

const Container = styled.div``;
