import React from 'react';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import LatestEpisode from '../components/LatestEpisode';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const IndexPage: React.FC = () => (
  <Layout semanticHeader={false}>
    <SEO title="Tokens, a podcast about accessible &amp; inclusive design systems" />
    <HomeHeader />
    <Section>
      <LatestEpisode />
    </Section>
  </Layout>
);

export default IndexPage;
