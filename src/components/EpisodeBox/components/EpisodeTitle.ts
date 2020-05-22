import styled from 'styled-components';

import Heading from '../../Heading';

const EpisodeTitle = styled(Heading)`
  margin: 0;
  font-size: var(--font-size-section-title);

  & a,
  & a:hover {
    font-weight: inherit;
  }
`;

export default EpisodeTitle;
