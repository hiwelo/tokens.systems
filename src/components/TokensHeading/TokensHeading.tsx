import React from 'react';

import Tokens from '../Tokens';
import TokensHeadline from './components/TokensHeadline';

const Header: React.FC = () => (
  <TokensHeadline>
    <Tokens />
  </TokensHeadline>
);

export default Header;
