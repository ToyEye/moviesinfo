import React from 'react';
import Hero from 'components/Hero';
import CatalogMovies from 'components/CatalogMovies';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';

const Catalog = () => {
  return (
    <div>
      <Hero />
      <CatalogMovies />
      <WeeklyTrends />
    </div>
  );
};

export default Catalog;
