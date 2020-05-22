import React from 'react';

import Chapo from '../components/Chapo';
import LatestEpisode from '../components/LatestEpisode';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tokens from '../components/Tokens';
import TokensHeading from '../components/TokensHeading';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Tokens, a podcast about accessible &amp; inclusive design systems" />
    <TokensHeading />
    <Chapo>
      <Tokens /> is a podcast hosted by <a href="https://twitter.com/iamhiwelo">Damien Senger</a>{' '}
      about the <strong>daily life of accessible and inclusive design systems</strong> projects.
    </Chapo>
    <Chapo>
      New episodes are released <strong>every two weeks</strong> on Tuesdays on&nbsp;
      <a href="https://podcasts.apple.com/">Apple&nbsp;Podcasts</a>,{' '}
      <a href="https://open.spotify.com/">Spotify</a> and{' '}
      <a href="https://soundcloud.com/tokens-podcast">Soundcloud</a>.
    </Chapo>
    <Chapo>
      Stay tuned for the first episode, published on&nbsp;
      <time dateTime="2020-05-26">
        <strong>Tuesday, May&nbsp;26th&nbsp;2020</strong>
      </time>
      .
    </Chapo>
    <LatestEpisode />
  </Layout>
);

export default IndexPage;
