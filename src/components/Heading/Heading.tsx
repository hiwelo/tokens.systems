import React from 'react';

import { useHeadingContext } from '../../modules/headings';

const Heading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...rest }) => {
  const HeadingElement = `h${useHeadingContext()}`;

  return <HeadingElement {...rest}>{children}</HeadingElement>;
};

export default Heading;
