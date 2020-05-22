import { Link } from 'gatsby';
import React from 'react';

import { EpisodeData } from '../../types/Episode';
import Box from '../Box';
import EpisodeContainer from './components/EpisodeContainer';
import EpisodeHeader from './components/EpisodeHeader';
import EpisodeNumber from './components/EpisodeNumber';
import EpisodeTitle from './components/EpisodeTitle';

const EpisodeBox: React.FC<EpisodeBoxProps> = ({ excerpt, number, slug, title }) => {
  return (
    <EpisodeContainer>
      <Box as="article">
        <EpisodeHeader>
          <EpisodeTitle>
            <EpisodeNumber>Episode #{number}</EpisodeNumber>
            <Link to={slug}>{title}</Link>
          </EpisodeTitle>
        </EpisodeHeader>
        {excerpt && <p>{excerpt}</p>}
      </Box>
    </EpisodeContainer>
  );
};

interface EpisodeBoxProps extends EpisodeData {
  /** Excerpt to render with this episode */
  excerpt?: string;
}

export default EpisodeBox;
