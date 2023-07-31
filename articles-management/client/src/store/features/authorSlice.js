import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/authors";

const initialState = {
  authors: [],
  isLoading: false,
  isError: false,
  errMsg: "",
};

export const fetchAuthorList = createAsyncThunk(
  "author/fetchAuthorList",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

export const deleteAuthor = createAsyncThunk("author/deleteAuthor");

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuthorList.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAuthorList.fulfilled]: (state, action) => {
      state.authors = action.payload;
      state.isLoading = false;
    },
    [fetchAuthorList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errMsg = action.payload.message;
    },
  },
});

export default authorSlice.reducer;
