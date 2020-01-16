import { createGlobalStyle, css } from 'styled-components';
import { FONT_FAMILY } from '../themes/Font';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  margin: 0.5rem;
  font-size: 1rem;
  font-family: ${FONT_FAMILY};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
