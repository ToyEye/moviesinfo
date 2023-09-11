import { createSlice } from '@reduxjs/toolkit';

const moviesSlise = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  reducers: {
    addMovie(state, { payload }) {
      state.movies.push(payload);
    },
  },
});

export default moviesSlise.reducer;

export const { addMovie } = moviesSlise.actions;
