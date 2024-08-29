import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filmSlices = createSlice({
  name: "film",
  initialState,
  reducers: {
    getFilms(state, action) {
      return action.payload;
    },
  },
});

export const {getFilms} = filmSlices.actions;
export default filmSlices.reducer;
