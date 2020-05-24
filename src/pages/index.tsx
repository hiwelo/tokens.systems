import React from 'react';

import HomeLayout from '../components/HomeLayout';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage: React.FC = () => (
  <Layout withGrid={false}>
    <SEO title="Tokens, a podcast about accessible &amp; inclusive design systems" />
    <HomeLayout />
  </Layout>
);

export default IndexPage;
