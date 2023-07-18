import React from 'react';

import Hero from 'components/Hero';
import WeeklyTrends from 'components/WeeklyTrends';

const Home = () => {
  return (
    <div>
      <Hero />
      <WeeklyTrends home />
    </div>
  );
};

export default Home;
