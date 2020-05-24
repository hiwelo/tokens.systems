import React from 'react';

import Chapo from '../Chapo';
import Header from '../Header';
import Tokens from '../Tokens';
import TokensHeading from '../TokensHeading';
import HeaderWrapper from './components/HeaderWrapper';

const HomeHeader: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...rest }) => (
  <HeaderWrapper {...rest}>
    <Header semantic={false} />
    <TokensHeading />
    <Chapo>
      <Tokens /> is a podcast hosted by <a href="https://twitter.com/iamhiwelo">Damien Senger</a>{' '}
      about the <strong>daily life of accessible and inclusive design systems</strong> projects.
    </Chapo>
    <Chapo>
      New episodes are released <strong>every two weeks</strong> on Tuesdays on&nbsp;
      <em>Apple&nbsp;Podcasts (coming&nbsp;soon)</em>,{' '}
      <em>Google&nbsp;Podcasts (coming&nbsp;soon)</em>,{' '}
      <a href="https://anchor.fm/tokens">Anchor.fm</a>,{' '}
      <a href="https://open.spotify.com/show/6XRDzcEh8g4KTxzUa4Ad7w">Spotify</a> and{' '}
      <a href="https://soundcloud.com/tokens-podcast">Soundcloud</a>.
    </Chapo>
    <Chapo>
      Stay tuned for the first episode, published on&nbsp;
      <time dateTime="2020-06-01">
        <strong>Monday, June&nbsp;1st&nbsp;2020</strong>
      </time>
      .
    </Chapo>
  </HeaderWrapper>
);

export default HomeHeader;
