import React from 'react';

import BaseStyles from '../BaseStyles';
import Header from '../Header';
import ContentWrapper from './components/ContentWrapper';
import Frame from './components/Frame';

const Layout: React.FC = ({ children }) => (
  <BaseStyles>
    <Frame>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    </Frame>
  </BaseStyles>
);

export default Layout;
