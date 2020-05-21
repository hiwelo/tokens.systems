import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

const SEO: React.FC<SEOProps> = ({ description = ``, lang = `en`, meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta as any)}
    />
  );
};

interface SEOProps {
  /** Title to use for the current page */
  title: string;
  /** Content of the meta tag description for this page */
  description?: string;
  /** Main language used for this content */
  lang?: string;
  /** Meta tags to render in the head section of this page */
  meta?: HelmetProps['meta'];
}

export default SEO;
