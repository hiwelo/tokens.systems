import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { EpisodeData } from '../../types/Episode';
import EpisodeBox from '../EpisodeBox';

const LatestEpisode: React.FC = () => {
  // Fetches information about the latest published episode
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<{
    allMarkdownRemark: {
      nodes: [{ excerpt: string; frontmatter: EpisodeData }];
    };
  }>(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1
        filter: { frontmatter: { status: { eq: "published" } } }
      ) {
        nodes {
          excerpt(format: PLAIN, pruneLength: 150)
          frontmatter {
            date
            number
            slug
            status
            title
          }
        }
      }
    }
  `);

  // Makes the information about the latest published episode accessible
  const { excerpt, frontmatter } = nodes[0];

  return <EpisodeBox excerpt={excerpt} {...frontmatter} />;
};

export default LatestEpisode;
