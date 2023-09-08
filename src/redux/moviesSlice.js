import { createSlice } from '@reduxjs/toolkit';

const MoviesSlise = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state, { payload }) {
      state.push(payload);
    },
  },
});

export default MoviesSlise.reducer;

export const { addMovie } = MoviesSlise.actions;
