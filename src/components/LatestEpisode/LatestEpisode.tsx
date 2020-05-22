import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { EpisodeData } from '../../types/Episode';
import Box from '../Box/Box';

const LatestEpisode: React.FC = () => {
  // Fetches information about the latest published episode
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<{
    allMarkdownRemark: {
      nodes: [{ frontmatter: EpisodeData }];
    };
  }>(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1
        filter: { frontmatter: { status: { eq: "published" } } }
      ) {
        nodes {
          frontmatter {
            date
            slug
            status
            title
          }
        }
      }
    }
  `);

  // Makes the information about the latest published episode accessible
  const {
    frontmatter: { title },
  } = nodes[0];

  return <Box as="article">{title}</Box>;
};

export default LatestEpisode;
