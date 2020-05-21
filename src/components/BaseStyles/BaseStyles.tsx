import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

import ExoFont from '../../assets/fonts/Exo-VariableFont_wght.ttf';
import { colors } from '../../modules/theme';

const colorValues = Object.values(colors);
const sessionColor = colorValues[Math.floor(Math.random() * colorValues.length)];

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Exo';
    src: url(${ExoFont}) format('truetype');
    font-weight: 100 900;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    ${Object.entries(colors).map(([color, value]) => css`--color-${color}: ${value};`)}
    --color-background: #ffffff;
    --color-session: ${sessionColor};
    --color-text: #222222;
    --color-white: #ffffff;
    --font-headings: Exo;
    --font-defaults: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-size-heading-main: clamp(3.2rem, 5.4vw, 8rem);
    --font-size-chapo: clamp(1.8rem, 1.4vw, 2.2rem);

    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    color: var(--color-text);
    font-family: var(--font-defaults);
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-headings), var(--font-defaults);
  }

  p {
    margin: 1.5em auto 0;
    font-size: 1.8rem;
    line-height: 1.5;
  }

  strong {
    font-weight: 700;
  }
`;

const BaseStyles: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default BaseStyles;
