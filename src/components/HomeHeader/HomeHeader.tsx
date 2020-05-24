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
  </HeaderWrapper>
);

export default HomeHeader;
