import React from 'react';

import Chapo from '../components/Chapo';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops… This page does not exist!</h1>
    <Chapo>You just hit a route that doesn&#39;t exist... the sadness.</Chapo>
    <Chapo>
      If the problem persists, please{' '}
      <a href="https://twitter.com/PodcastTokens">contact us on Twitter!</a>
    </Chapo>
  </Layout>
);

export default NotFoundPage;
