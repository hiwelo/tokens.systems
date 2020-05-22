import React from 'react';

import BoxContent from './components/BoxContent';
import BoxWrapper from './components/BoxWrapper';

const Box: React.FC<BoxProps> = ({ children, ...rest }) => (
  <BoxWrapper {...rest}>
    <BoxContent>{children}</BoxContent>
  </BoxWrapper>
);

interface BoxProps {
  /** Markup to use for this box */
  as?: any;
}

export default Box;
