import React from 'react';

import HomeHeader from '../HomeHeader';
import LatestEpisode from '../LatestEpisode';
import Section from '../Section';
import HomeGrid from './components/HomeGrid';
import MainWrapper from './components/MainWrapper';

const HomeLayout: React.FC = () => (
  <HomeGrid>
    <HomeHeader />
    <MainWrapper>
      <Section>
        <LatestEpisode />
      </Section>
    </MainWrapper>
  </HomeGrid>
);

export default HomeLayout;
