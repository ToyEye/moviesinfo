import axios from 'axios';

const API_KEY = 'c031fb300fb5fade2c7c769ccf51c6f2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

//   https://api.themoviedb.org/3/movie/550?api_key=c031fb300fb5fade2c7c769ccf51c6f2

export const getTrandingMovie = async period => {
  const { data } = await axios.get(
    `trending/movie/${period}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getSearchFilms = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}&page=${page}`
  );

  return data;
};

export const getGenres = async () => {
  const { data } = await axios.get(`genre/movie/list?api_key=${API_KEY}`);
  return data;
};

export const getInfoAboutMovie = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);

  return data;
};

//'https://api.themoviedb.org/3/search/movie?query=cat&include_adult=false&language=en-US&page=2'
// 'https://api.themoviedb.org/3/search/movie?query=star&year=2000';
//  https://api.themoviedb.org/3/genre/movie/list
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' \
