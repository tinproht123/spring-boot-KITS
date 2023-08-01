import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: localStorage.getItem("isLogin") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

authSlice.subscribe(() => {
  localStorage.setItem("isLogin", authSlice.getInitialState().isLogin);
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
