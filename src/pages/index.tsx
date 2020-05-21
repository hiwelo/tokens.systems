import React from 'react';

import Layout from '../components/Layout';
import TokensLogo from '../components/TokensLogo';
import SEO from '../components/seo';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Tokens, a podcast about accessible &amp; inclusive design systems" />
    <TokensLogo background={false} />
  </Layout>
);

export default IndexPage;
