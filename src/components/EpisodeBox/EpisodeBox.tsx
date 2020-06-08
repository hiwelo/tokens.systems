import React from 'react';

import { EpisodeData } from '../../types/Episode';
import Box from '../Box';
import Chapo from '../Chapo';
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
            {/* <Link to={slug}>{title}</Link> */}
            {title}
          </EpisodeTitle>
        </EpisodeHeader>
        {excerpt && <p>{excerpt}</p>}
        <Chapo>Stay tuned for the release, on June&nbsp;29th!</Chapo>
      </Box>
    </EpisodeContainer>
  );
};

interface EpisodeBoxProps extends EpisodeData {
  /** Excerpt to render with this episode */
  excerpt?: string;
}

export default EpisodeBox;
