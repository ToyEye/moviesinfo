import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero';
import CatalogMovies from 'components/CatalogMovies';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';
import { getSearchFilms } from 'services/api';
import SearchForm from 'components/SearchForm/SearchForm';

const Catalog = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getSearchFilms(query);

        setSearchMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovies();
  }, [query]);

  const submitHandle = query => {
    setQuery(query);
  };

  return (
    <div>
      <Hero />
      <SearchForm submitForm={submitHandle} />
      {searchMovies.length > 1 && <CatalogMovies movies={searchMovies} />}
      {searchMovies.length === 0 && <WeeklyTrends />}
    </div>
  );
};

export default Catalog;
