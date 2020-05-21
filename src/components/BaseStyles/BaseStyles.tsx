import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

import { colors } from '../../modules/theme';

const colorValues = Object.values(colors);
const sessionColor = colorValues[Math.floor(Math.random() * colorValues.length)];

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    ${Object.entries(colors).map(([color, value]) => css`--color-${color}: ${value};`)}
    --color-background: #ffffff;
    --color-session: ${sessionColor};

    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }
`;

const BaseStyles: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export default BaseStyles;
