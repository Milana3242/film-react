import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const wordsSlices = createSlice({
  name: "words",
  initialState,
  reducers: {
    // changeDificult(state, action) {
    //   state[action.payload.count].dificult = +action.payload.value;
    //   state.sort((a,b)=>b.dificult-a.dificult)
    // },
    getWords(state, action) {
      return action.payload;
    },


  },
});

export const { changeDificult, getWords } = wordsSlices.actions;
export default wordsSlices.reducer;
