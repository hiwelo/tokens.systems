import React from 'react';

import TokensLogo from '../TokensLogo';
import BrandWrapper from './components/BrandWrapper';

const Header: React.FC = () => (
  <BrandWrapper>
    <TokensLogo background={false} />
  </BrandWrapper>
);

export default Header;
