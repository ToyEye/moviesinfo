import { createSlice } from '@reduxjs/toolkit';

const moviesSlise = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  reducers: {
    addMovie(state, { payload }) {
      state.movies.push(payload);
    },
    deleteMovie(state, { payload }) {
      state.movies = state.movies.filter(movie => movie.id !== payload);
    },
  },
});

export default moviesSlise.reducer;

export const { addMovie, deleteMovie } = moviesSlise.actions;
