import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    eng: "home",
    rus: "дом",
    textRus: "Я пошел домой",
    textEng: "I go home",
    dificult: 1,
  },
  {
    eng: "pen",
    rus: "ручка",
    textRus: "Я пишу ручкой",
    textEng: "I write with a pen ",
    dificult: 1,
  },
  {
    eng: "table",
    rus: "стол",
    textRus: "Я сижу за столом",
    textEng: "I sit at the table",
    dificult: 1,
  },
  {
    eng: "computer",
    rus: "компьютер",
    textRus: "Компьютер лучший друг",
    textEng: "Computer is a best friend",
    dificult: 1,
  },
  {
    eng: "tea",
    rus: "чай",
    textRus: "Марат просит чай",
    textEng: "Marat asks for tea",
    dificult: 1,
  },
];

const wordsSlices = createSlice({
  name: "words",
  initialState,
  reducers: {
    changeDificult(state, action) {
      state[action.payload.count].dificult = +action.payload.value;
      state.sort((a,b)=>b.dificult-a.dificult)
    },
  },
});

export const { changeDificult } = wordsSlices.actions;
export default wordsSlices.reducer;
