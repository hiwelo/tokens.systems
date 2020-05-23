import { Link } from 'gatsby';
import React from 'react';

import BrandWrapper from './components/BrandWrapper';
import HeaderLogo from './components/HeaderLogo';

const Header: React.FC<HeaderProps> = ({ semantic = true }) => (
  <BrandWrapper as={semantic ? undefined : `div`}>
    <Link to="/">
      <HeaderLogo />
    </Link>
  </BrandWrapper>
);

interface HeaderProps {
  /** Uses `header` as a markup, defaults to true */
  semantic?: boolean;
}

export default Header;
