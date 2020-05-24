import React from 'react';

import { HeadingProvider } from '../../modules/headings';
import BaseStyles from '../BaseStyles';
import Header from '../Header';
import ContentWrapper from './components/ContentWrapper';
import Frame from './components/Frame';
import FrameClosure from './components/FrameClosure';

const Layout: React.FC<LayoutProps> = ({
  children,
  semanticHeader,
  withGrid = true,
  withHeader = true,
}) => (
  <BaseStyles>
    <HeadingProvider>
      <Frame>
        <FrameClosure />
        {withGrid ? (
          <ContentWrapper>
            {withHeader && <Header semantic={semanticHeader} />}
            {children}
          </ContentWrapper>
        ) : (
          <>{children}</>
        )}
        <FrameClosure edge="bottom" />
      </Frame>
    </HeadingProvider>
  </BaseStyles>
);

interface LayoutProps {
  /** Uses a semantic header using `header` */
  semanticHeader?: boolean;
  /** Renders a basic grid for the content, defaults to true */
  withGrid?: boolean;
  /** Renders the default header, defaults to true */
  withHeader?: boolean;
}

export default Layout;
