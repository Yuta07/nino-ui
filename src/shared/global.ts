import { createGlobalStyle } from 'styled-components';
import { FONT_FAMILY } from '../themes/Font';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: 1.5;
    letter-spacing: 0.05em;
  }

  body {
    width: 100%;
    height: 100vh;
    font-size: 16px;
    font-family: ${FONT_FAMILY};
  }
`;
