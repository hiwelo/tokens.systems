import React from 'react';

import { HeadingProvider } from '../../modules/headings';
import BaseStyles from '../BaseStyles';
import Header from '../Header';
import ContentWrapper from './components/ContentWrapper';
import Frame from './components/Frame';
import FrameClosure from './components/FrameClosure';

const Layout: React.FC = ({ children }) => (
  <BaseStyles>
    <HeadingProvider>
      <Frame>
        <FrameClosure />
        <ContentWrapper>
          <Header />
          {children}
        </ContentWrapper>
        <FrameClosure edge="bottom" />
      </Frame>
    </HeadingProvider>
  </BaseStyles>
);

export default Layout;
