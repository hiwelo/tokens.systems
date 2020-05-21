module.exports = {
  siteMetadata: {
    title: `tokens.systems`,
    description: `tokens.systems is a podcast hosted by @iamhiwelo about the daily life of accessible and inclusive design systems projects`,
    author: `@PodcastTokens`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tokens-podcast`,
        short_name: `tokens`,
        start_url: `/`,
        background_color: `#8b0d88`,
        theme_color: `#8b0d88`,
        display: `minimal-ui`,
        icon: `src/images/tokens-systems-logo@3x.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
