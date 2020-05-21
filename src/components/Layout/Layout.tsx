import React from 'react';

import BaseStyles from '../BaseStyles';
import Header from '../Header';
import Frame from './components/Frame';

const Layout: React.FC = ({ children }) => (
  <BaseStyles>
    <Frame>
      <Header />
      {children}
    </Frame>
  </BaseStyles>
);

export default Layout;
