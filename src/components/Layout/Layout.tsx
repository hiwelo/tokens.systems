import React from 'react';

import BaseStyles from '../BaseStyles';
import Frame from './components/Frame';

const Layout: React.FC = ({ children }) => (
  <BaseStyles>
    <Frame>{children}</Frame>
  </BaseStyles>
);

export default Layout;
