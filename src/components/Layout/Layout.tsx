import React from 'react';

import { HeadingProvider } from '../../modules/headings';
import BaseStyles from '../BaseStyles';
import Header from '../Header';
import ContentWrapper from './components/ContentWrapper';
import Frame from './components/Frame';
import FrameClosure from './components/FrameClosure';

const Layout: React.FC<LayoutProps> = ({ children, semanticHeader }) => (
  <BaseStyles>
    <HeadingProvider>
      <Frame>
        <FrameClosure />
        <ContentWrapper>
          <Header semantic={semanticHeader} />
          {children}
        </ContentWrapper>
        <FrameClosure edge="bottom" />
      </Frame>
    </HeadingProvider>
  </BaseStyles>
);

interface LayoutProps {
  /** Uses a semantic header using `header` */
  semanticHeader?: boolean;
}

export default Layout;
