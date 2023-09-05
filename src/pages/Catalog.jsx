import React, { useEffect, useState } from 'react';

import Hero from 'components/Hero';
import CatalogMovies from 'components/CatalogMovies';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';
import SearchForm from 'components/SearchForm/SearchForm';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import { getSearchFilms } from 'services/api';

const Catalog = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getSearchFilms(query, page);

        setSearchMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
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
          <Button text="Load more" onClick={handleButtonClick} />
        </>
      )}
      {searchMovies.length === 0 && <WeeklyTrends />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Catalog;
