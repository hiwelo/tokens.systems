import { useContext } from 'react';

import { HeadingLevel } from '../../types/Semantic';
import HeadingContext from './context';

export default function useHeadingContext(): HeadingLevel {
  return useContext(HeadingContext);
}
