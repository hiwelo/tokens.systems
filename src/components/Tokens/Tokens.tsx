import React from 'react';

import StyledTokens from './components/StyledTokens';

const Tokens: React.FC = () => (
  <StyledTokens aria-label="Tokens">
    {`Tokens`.split('').map((letter) => (
      <span>{letter}</span>
    ))}
  </StyledTokens>
);

export default Tokens;
