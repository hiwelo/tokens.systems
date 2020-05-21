import { Link } from 'gatsby';
import React from 'react';

import Chapo from '../components/Chapo';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops… This page does not exist!</h1>
    <Chapo>You just hit a route that doesn&#39;t exist... the sadness.</Chapo>
    <Chapo>
      If the problem persists, please{' '}
      <Link to="https://twitter.com/PodcastTokens">contact us on Twitter!</Link>
    </Chapo>
  </Layout>
);

export default NotFoundPage;
