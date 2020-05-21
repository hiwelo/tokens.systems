import React from 'react';

import StyledTokens from './components/StyledTokens';

const Tokens: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ ...rest }) => (
  <StyledTokens aria-label="Tokens" {...rest}>
    {`Tokens`.split('').map((letter) => (
      <span>{letter}</span>
    ))}
  </StyledTokens>
);

export default Tokens;
