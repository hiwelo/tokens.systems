import React from 'react';

import { HeadingProvider } from '../../modules/headings';

const Section: React.FC = ({ children }) => {
  return <HeadingProvider>{children}</HeadingProvider>;
};

export default Section;
