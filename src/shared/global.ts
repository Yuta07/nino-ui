import { createGlobalStyle, css } from 'styled-components';
import { FONT_FAMILY } from '../themes/Font';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  width: 100%;
  height: 100vh;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: ${FONT_FAMILY};
  letter-spacing: 0.1em;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    letter-spacing: 0.1em;
  }

  body {
    ${bodyStyles}
  }
`;
