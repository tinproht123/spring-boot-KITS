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
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteAuthor = createAsyncThunk(
  "author/deleteAuthor",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${API_URL}/` + id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

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
      state.errMsg = action.payload;
    },

    [deleteAuthor.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteAuthor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.authors = state.authors.filter(
        (item) => item.id !== action.payload.id
      );
    },
    [deleteAuthor.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errMsg = action.payload;
    },
  },
});

export default authorSlice.reducer;
