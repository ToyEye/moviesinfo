import React, { useEffect, useState } from 'react';

import Hero from 'components/Hero';
import CatalogMovies from 'components/CatalogMovies';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';
import SearchForm from 'components/SearchForm/SearchForm';
import Button from 'components/Button/Button';

import { getSearchFilms } from 'services/api';

const Catalog = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getSearchFilms(query, page);

        setSearchMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovies();
  }, [page, query]);

  const submitHandle = query => {
    setQuery(query);
    setPage(1);
    setSearchMovies([]);
  };

  const handleButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Hero />
      <SearchForm submitForm={submitHandle} />
      {searchMovies.length > 1 && (
        <>
          <CatalogMovies movies={searchMovies} />
          {/* <button type="button" onClick={handleButtonClick}>
            Load more
          </button> */}
          <Button text="Load more" onClick={handleButtonClick} />
        </>
      )}
      {searchMovies.length === 0 && <WeeklyTrends />}
    </div>
  );
};

export default Catalog;
