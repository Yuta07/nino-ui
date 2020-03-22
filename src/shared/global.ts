import { createGlobalStyle, css } from 'styled-components';
import { FONT_FAMILY } from '../themes/Font';
import { FONT_SIZE, DEVICE } from '../themes/Size';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  width: 96%;
  height: 100vh;
  padding: 2%;
  font-size: ${FONT_SIZE.LARGE}px;
  font-family: ${FONT_FAMILY};
  letter-spacing: 0.1em;

  @media ${DEVICE.TABLET_PRO} {
    font-size: ${FONT_SIZE.MEDIUM}px;
  }

  @media ${DEVICE.MOBILE} {
    font-size: ${FONT_SIZE.SMALL}px;
  }
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
