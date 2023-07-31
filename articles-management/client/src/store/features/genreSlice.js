import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/genres";

const initialState = {
  genres: [],
  isLoading: false,
  isError: false,
  errMsg: "",
};

export const fetchAllGenres = createAsyncThunk(
  "genre/fetchAllGenres",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllGenres.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllGenres.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.genres = action.payload;
    },
    [fetchAllGenres.rejected]: (state, action) => {
      state.isError = true;
      state.errMsg = action.payload.message;
      state.isLoading = false;
    },
  },
});

export default genreSlice.reducer;
