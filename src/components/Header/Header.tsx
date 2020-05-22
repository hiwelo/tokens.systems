import { Link } from 'gatsby';
import React from 'react';

import BrandWrapper from './components/BrandWrapper';
import HeaderLogo from './components/HeaderLogo';

const Header: React.FC = () => (
  <BrandWrapper>
    <Link to="/">
      <HeaderLogo />
    </Link>
  </BrandWrapper>
);

export default Header;
