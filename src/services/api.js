import axios from 'axios';

const API_KEY = 'c031fb300fb5fade2c7c769ccf51c6f2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrandingMovie = async period => {
  const { data } = await axios.get(
    `trending/movie/${period}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getSearchFilms = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&include_adult=true&api_key=${API_KEY}&page=${page}`
  );

  return data;
};

export const getInfoAboutMovie = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);

  return data;
};

export const getOptionalInfo = async (id, optional) => {
  const { data } = await axios.get(
    `movie/${id}/${optional}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};
