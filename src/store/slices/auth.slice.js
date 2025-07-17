import { createSlice } from "@reduxjs/toolkit";
import {
  checkInfoThunk,
  loginThunk,
  logoutThunk,
  meThunk,
  refreshTokenThunk,
  registerThunk,
} from "../thunks/auth.thunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    checkResult: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // meThunk cases
      .addCase(meThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(meThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(meThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // loginThunk cases
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // registerThunk cases
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // refreshTokenThunk cases
      .addCase(refreshTokenThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshTokenThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshTokenThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // logoutThunk cases
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // checkInfoThunk cases
      .addCase(checkInfoThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkInfoThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.checkResult = action.payload;
      })
      .addCase(checkInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice;
