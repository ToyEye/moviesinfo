import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import Container from 'components/Container/Container.styled';

const SearchForm = ({ submitForm }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    submitForm(search);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="search"></label>
            <input
              type="text"
              id="search"
              onChange={event => setSearch(event.target.value)}
            />
          </div>
          <button type="submit">
            <CiSearch size={48} />
          </button>
        </form>
      </Container>
    </>
  );
};

export default SearchForm;
