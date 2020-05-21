import React from 'react';
import styled from 'styled-components';

import LogoWithoutBackground from '../../assets/images/tokens-systems-logo-without-background.svg';
import Logo from '../../assets/images/tokens-systems-logo.svg';

const TokensLogo = styled<React.FC<TokensLogoProps>>(({ background = true, ...rest }) => {
  const Element = background ? Logo : LogoWithoutBackground;

  return <Element {...rest} />;
})`
  height: 8rem;
  width: auto;
`;

interface TokensLogoProps {
  /** Renders the logo with a dotted background, defaults to true */
  background?: boolean;
}

export default TokensLogo;
