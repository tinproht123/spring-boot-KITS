import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import authorReducer from "./features/authorSlice";
import genreReducer from "./features/genreSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    author: authorReducer,
    genre: genreReducer,
  },
});

export default store;
