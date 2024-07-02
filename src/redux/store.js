import { configureStore } from '@reduxjs/toolkit';
import films from './slices/filmSlices';
const store = configureStore({
  reducer: {
    films,
  },
});
export default store;
