import { configureStore } from "@reduxjs/toolkit";
import films from "./slices/filmSlices";
import words from "./slices/wordsSlice";
const store = configureStore({
  reducer: {
    films,
    words,
  },
});
export default store;
