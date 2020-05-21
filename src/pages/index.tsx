import { Link } from 'gatsby';
import React from 'react';

import Chapo from '../components/Chapo';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tokens from '../components/Tokens';
import TokensHeading from '../components/TokensHeading';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Tokens, a podcast about accessible &amp; inclusive design systems" />
    <TokensHeading />
    <Chapo>
      <Tokens /> is a podcast hosted by{' '}
      <Link to="https://twitter.com/iamhiwelo">Damien Senger</Link> about the{' '}
      <strong>daily life of accessible and inclusive design systems</strong> projects.
    </Chapo>
    <Chapo>
      New episodes are released <strong>every two weeks</strong> on Tuesdays on&nbsp;
      <Link to="https://podcasts.apple.com/">Apple&nbsp;Podcasts</Link>,{' '}
      <Link to="https://open.spotify.com/">Spotify</Link> and{' '}
      <Link to="https://soundcloud.com/tokens-podcast">Soundcloud</Link>.
    </Chapo>
    <Chapo>
      Stay tuned for the first episode, published on&nbsp;
      <strong>Tuesday, May&nbsp;26th&nbsp;2020</strong>.
    </Chapo>
  </Layout>
);

export default IndexPage;
