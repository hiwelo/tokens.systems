import React from 'react';

import { HeadingLevel } from '../../types/Semantic';
import HeadingContext from './context';
import useHeadingContext from './hooks';

const HeadingProvider: React.FC<HeadingProviderProps> = ({ children, level }) => {
  const currentLevel = useHeadingContext() ?? 0;
  const contextLevel = Math.min(level ?? ((currentLevel + 1) as HeadingLevel), 6);

  return <HeadingContext.Provider value={contextLevel}>{children}</HeadingContext.Provider>;
};

interface HeadingProviderProps {
  /** Heading level to use for this context */
  level?: HeadingLevel;
}

export default HeadingProvider;
