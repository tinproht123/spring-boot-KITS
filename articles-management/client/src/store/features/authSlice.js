import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      localStorage.setItem("isLogin", state.isLogin);
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.removeItem("isLogin");
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
