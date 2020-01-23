import * as React from 'react';
import { createPortal } from 'react-dom';

export const usePortal = (el: React.ReactNode): React.ReactPortal => {
  const elem = React.useRef(document.createElement('div')).current;

  React.useEffect(() => {
    const body = document.querySelector('body');
    body.appendChild(elem);

    return () => {
      body.removeChild(elem);
    };
  }, [elem]);

  return createPortal(
    el,
    elem
  );
};

