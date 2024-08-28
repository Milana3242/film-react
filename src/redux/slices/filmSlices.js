import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filmSlices = createSlice({
  name: "film",
  initialState,
  reducers: {
    getFilms(state, action) {
      state = action.payload;
    },
  },
});

export const {} = filmSlices.actions;
export default filmSlices.reducer;
