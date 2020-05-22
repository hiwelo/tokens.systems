import React from 'react';

import { HeadingProvider } from '../../modules/headings';
import BaseStyles from '../BaseStyles';
import Header from '../Header';
import ContentWrapper from './components/ContentWrapper';
import Frame from './components/Frame';

const Layout: React.FC = ({ children }) => (
  <BaseStyles>
    <HeadingProvider>
      <Frame>
        <ContentWrapper>
          <Header />
          {children}
        </ContentWrapper>
      </Frame>
    </HeadingProvider>
  </BaseStyles>
);

export default Layout;
