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
      <a
        href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yMmY4NWU0MC9wb2RjYXN0L3Jzcw=="
        target="_blank">
        Google&nbsp;Podcasts
      </a>
      ,{' '}
      <a href="https://anchor.fm/tokens" target="_blank">
        Anchor.fm
      </a>
      ,{' '}
      <a href="https://radiopublic.com/tokens-design-systems-G2beQ0" target="_blank">
        RadioPublic
      </a>
      ,{' '}
      <a href="https://www.breaker.audio/tokens-star-design-systems" target="_blank">
        Breaker
      </a>
      ,{' '}
      <a href="https://open.spotify.com/show/6XRDzcEh8g4KTxzUa4Ad7w" target="_blank">
        Spotify
      </a>{' '}
      and{' '}
      <a href="https://soundcloud.com/tokens-podcast" target="_blank">
        Soundcloud
      </a>
      .
    </Chapo>
    <Chapo>
      Stay tuned for the first episode, published on&nbsp;
      <time dateTime="2020-09-01">
        <strong>Tuesday, September&nbsp;1st&nbsp;2020</strong>
      </time>
      .
    </Chapo>
  </HeaderWrapper>
);

export default HomeHeader;
