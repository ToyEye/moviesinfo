import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import Container from 'components/reusable/Container/Container.styled';
import {
  Form,
  FormDataWrapper,
  InputStyled,
  FormBtn,
} from './SearchForm.styled';

const SearchForm = ({ submitForm }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    submitForm(search);

    setSearch('');
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormDataWrapper>
            <InputStyled
              type="text"
              id="search"
              placeholder="Search"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </FormDataWrapper>
          <FormBtn type="submit">
            <CiSearch size={20} />
          </FormBtn>
        </Form>
      </Container>
    </>
  );
};

export default SearchForm;
